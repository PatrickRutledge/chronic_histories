"""Sync the v3 workbook's Claims, Sources, and Case Build registers from the pilot cases.

    python -I scripts/sync_workbook_registers.py            # writes a reviewable copy
    python -I scripts/sync_workbook_registers.py --in-place # overwrites the workbook

The copy is HISTMED_Master_Roster_v3.synced.xlsx next to the original. Re-running replaces
earlier synced rows, so the result depends only on the cases and the original workbook.

- Claims Register: each case claim is appended as <person>-<claim id>, for example
  NI001-CLM-0006. Inherited roster claims for a built case are kept with their grades and
  annotated as superseded, because mapping them one-to-one to sourced claims is an
  editorial decision.
- Sources Register: one row per source-to-claim link, as the sheet's guide line requires.
- Case Build Register: the row for each built case is filled from the case, its build
  manifest, and its conformance summary.
"""
import copy
import json
import sys
from pathlib import Path

import openpyxl

REPO = Path(__file__).resolve().parent.parent
WORKBOOK = REPO / "outputs" / "histmed_v3" / "HISTMED_Master_Roster_v3.xlsx"
SYNCED = WORKBOOK.with_name("HISTMED_Master_Roster_v3.synced.xlsx")
FIRST_DATA_ROW = 5
RECENT_DEATH_AFTER_YEAR = 1990
SUPERSEDED_NOTE = "Superseded by sourced case claims in {path}; grade unchanged pending editorial mapping."
RELIABILITY = {
    "primary": "Primary source",
    "government": "Public institution",
    "scholarly": "Peer-reviewed",
    "guideline": "Clinical guideline",
    "other": "Secondary or internal; not independent corroboration",
}


def load_cases():
    cases = []
    for case_json in sorted((REPO / "pilots").glob("*/case.json")):
        case_dir = case_json.parent
        data = json.loads(case_json.read_text(encoding="utf-8"))
        summary_path = case_dir / "generated" / "conformance" / "summary.json"
        summary = json.loads(summary_path.read_text(encoding="utf-8-sig")) if summary_path.exists() else None
        cases.append((case_dir.relative_to(REPO).as_posix(), data, summary))
    return cases


def copy_row_style(ws, source_row, target_row, columns):
    for col in range(1, columns + 1):
        src = ws.cell(source_row, col)
        dst = ws.cell(target_row, col)
        if src.has_style:
            dst._style = copy.copy(src._style)


def clear_rows(ws, first, last, columns):
    for row in range(first, last + 1):
        for col in range(1, columns + 1):
            ws.cell(row, col).value = None


def header_index(ws, header_row=4):
    return {ws.cell(header_row, col).value: col for col in range(1, ws.max_column + 1)}


def sync_claims(ws, cases):
    cols = header_index(ws)
    width = len(cols)
    built = {data["identity"]["person_id"]: (path, data) for path, data, _ in cases}
    # Keep inherited roster rows; drop rows from an earlier sync.
    kept = []
    for row in ws.iter_rows(min_row=FIRST_DATA_ROW, max_col=width, values_only=True):
        if row[0] is None:
            continue
        claim_id, person_id = row[0], row[1]
        if person_id in built and str(claim_id).startswith(f"{person_id}-"):
            continue
        kept.append(list(row))
    for row in kept:
        if row[1] in built:
            row[cols["Reviewer Notes"] - 1] = SUPERSEDED_NOTE.format(path=built[row[1]][0])
    added = []
    for path, data, _ in cases:
        pid = data["identity"]["person_id"]
        name = data["identity"]["display_name"]
        for claim in data["claims"]:
            links = claim["source_links"]
            relationships = {link["relationship"] for link in links}
            row = [None] * width
            row[cols["Claim ID"] - 1] = f"{pid}-{claim['claim_id']}"
            row[cols["Person ID"] - 1] = pid
            row[cols["Full Name"] - 1] = name
            row[cols["Claim Text"] - 1] = claim["statement"]
            row[cols["Roster Field"] - 1] = f"Case dossier ({path})"
            row[cols["Evidence Grade"] - 1] = claim["evidence_grade"]
            row[cols["Evidence Status"] - 1] = "Sourced in case dossier; independent provenance review pending"
            row[cols["Certainty"] - 1] = claim["certainty"].capitalize()
            row[cols["Dispute Status"] - 1] = "Disputed by a cited source" if "disputes" in relationships or claim["certainty"] == "disputed" else "No dispute logged"
            row[cols["Source Status"] - 1] = "Cited: " + ", ".join(f"{pid}-{link['source_id']}" for link in links)
            row[cols["Problem Placement Candidate"] - 1] = "Historical"
            row[cols["Sensitive Review"] - 1] = "Required" if claim.get("sensitive_content") else "Standard"
            row[cols["Reviewer Notes"] - 1] = claim.get("clinical_interpretation")
            added.append(row)
    rows = kept + added
    old_last = max(ws.max_row, FIRST_DATA_ROW)
    template_row = FIRST_DATA_ROW
    for index, values in enumerate(rows):
        r = FIRST_DATA_ROW + index
        copy_row_style(ws, template_row, r, width)
        for col, value in enumerate(values, start=1):
            ws.cell(r, col).value = value
    last = FIRST_DATA_ROW + len(rows) - 1
    if old_last > last:
        clear_rows(ws, last + 1, old_last, width)
    table = ws.tables["ClaimsRegister"]
    table.ref = f"A4:{openpyxl.utils.get_column_letter(width)}{last}"
    return len(added)


def sync_sources(ws, cases):
    cols = header_index(ws)
    width = len(cols)
    rows = []
    for _, data, _ in cases:
        pid = data["identity"]["person_id"]
        sources = {source["source_id"]: source for source in data["sources"]}
        for claim in data["claims"]:
            for link in claim["source_links"]:
                source = sources[link["source_id"]]
                row = [None] * width
                row[cols["Source ID"] - 1] = f"{pid}-{source['source_id']}"
                row[cols["Person ID"] - 1] = pid
                row[cols["Claim ID"] - 1] = f"{pid}-{claim['claim_id']}"
                row[cols["Citation"] - 1] = f"{source['title']}. {source['publisher']}."
                row[cols["Source Type"] - 1] = source["source_type"].capitalize()
                row[cols["URL or Identifier"] - 1] = source.get("url")
                row[cols["Publication Year"] - 1] = (source.get("published") or "")[:4] or None
                row[cols["Accessed Date"] - 1] = source.get("accessed")
                row[cols["Supports or Disputes"] - 1] = link["relationship"].capitalize()
                row[cols["Reliability"] - 1] = RELIABILITY.get(source["source_type"], source["source_type"])
                row[cols["Reviewer"] - 1] = "Pending independent review"
                row[cols["Notes"] - 1] = source.get("rights_note")
                rows.append(row)
    old_last = ws.max_row
    for index, values in enumerate(rows):
        r = FIRST_DATA_ROW + index
        if r > old_last:
            copy_row_style(ws, FIRST_DATA_ROW + 1, r, width)
        for col, value in enumerate(values, start=1):
            ws.cell(r, col).value = value
    last = FIRST_DATA_ROW + len(rows) - 1
    if old_last > last:
        clear_rows(ws, last + 1, old_last, width)
    return len(rows)


def sync_case_build(ws, cases):
    cols = header_index(ws)
    rows = {ws.cell(r, 1).value: r for r in range(FIRST_DATA_ROW, ws.max_row + 1) if ws.cell(r, 1).value}
    review_text = {"not_started": "Not reviewed", "in_progress": "In progress", "complete": "Complete", "completed": "Complete"}
    updated = 0
    for path, data, summary in cases:
        pid = data["identity"]["person_id"]
        if pid not in rows:
            raise SystemExit(f"Person {pid} is not in the Case Build Register.")
        r = rows[pid]
        review = data["review"]
        death_year = int(data["identity"]["historical_dates"]["death"]["preferred"]["iso"][:4])
        if summary is None:
            ccda = fhir = "Generated; conformance not run"
        else:
            ccda = f"Generated; XSD {summary['CdaXsdErrors']} and Schematron {summary['SchematronErrors']} errors"
            fhir = f"Generated; R4 {summary['FhirBaseErrors']} and US Core {summary['UsCoreErrors']} errors"
        values = {
            "Calendar Frame": "Modern shifted; true-date variant derived",
            "Target Index Date": data["synthetic_episode"]["index_date"],
            "Index Age": data["synthetic_episode"]["index_age"],
            "Shifted DOB": data["identity"]["synthetic_identity"]["date_of_birth"],
            "Synthetic MRN": data["identity"]["synthetic_identity"]["mrn"],
            "C-CDA R2.1": ccda,
            "FHIR R4": fhir,
            "HTML Review": "Generated",
            "Clinical Review": review_text.get(review["clinical_review"]["status"], review["clinical_review"]["status"]),
            "Provenance Review": review_text.get(review["provenance_review"]["status"], review["provenance_review"]["status"]),
            "Recent-death Review": "Required" if death_year > RECENT_DEATH_AFTER_YEAR else f"Not applicable (died {death_year})",
            "Sensitive Review": "Safe-messaging review: " + review_text.get(review["safe_messaging_review"]["status"], review["safe_messaging_review"]["status"]).lower(),
            "Notes": f"{data['case_id']} at {path}; {len(data['claims'])} claims, {len(data['sources'])} sources; draft pending review",
        }
        for header, value in values.items():
            ws.cell(r, cols[header]).value = value
        updated += 1
    return updated


def main():
    in_place = "--in-place" in sys.argv
    cases = load_cases()
    wb = openpyxl.load_workbook(WORKBOOK)
    claims = sync_claims(wb["Claims Register"], cases)
    sources = sync_sources(wb["Sources Register"], cases)
    builds = sync_case_build(wb["Case Build Register"], cases)
    target = WORKBOOK if in_place else SYNCED
    wb.save(target)
    print(f"Wrote {target.relative_to(REPO)}: {claims} case claims, {sources} source links, {builds} case-build rows.")


if __name__ == "__main__":
    main()
