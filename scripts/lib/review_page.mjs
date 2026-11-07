// Review checklist: one page per record that gathers everything a reviewer has to judge, so the
// clinical, provenance, and safe-messaging reviews can be worked through without reading every note.
// Everything is derived from case.json and the case's sources.md; nothing here is new content.
import { INTERPRETATIONS, MONITORING_DOMAINS, PREVENTION_STATUS, isLab, visitLabels, withUnit } from "./episode.mjs";
import { SITE_SCRIPT, allRecordsHref, faviconLink, feedbackUrl, logoImg, trueDateFrameSupported } from "./common.mjs";

const esc = (value) => String(value ?? "").replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
// Minimal Markdown for sources.md bullets: bold, italics, and links.
const inline = (text) => esc(text)
  .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
  .replace(/\*([^*]+)\*/g, "<em>$1</em>")
  .replace(/(https?:\/\/[^\s<)]+)/g, '<a href="$1">$1</a>');

// The "Editorial resolutions" bullets in sources.md are the record's judgment calls.
export const editorialResolutions = (sourcesText) => {
  if (!sourcesText) return [];
  const section = sourcesText.split(/\r?\n## /).find(part => /^Editorial resolutions/.test(part));
  if (!section) return [];
  return section.split(/\r?\n/).slice(1).join("\n").split(/\n(?=- )/).map(item => item.replace(/^- /, "").replace(/\s*\n\s*/g, " ").trim()).filter(Boolean);
};

export function reviewPage(data, sourcesText, outputDir) {
  const allRecords = allRecordsHref(outputDir);
  const visits = data.synthetic_episode.visit_schedule;
  const labels = visitLabels(data);
  const encounterById = new Map(data.clinical.encounters.map(e => [e.id, e]));
  const visitRows = visits.map((visit, index) => ({ visit, n: String(index + 1).padStart(2, "0"), label: labels[index], doc: encounterById.get(visit.encounter_id)?.documentation }));
  const noteLink = (row) => `<a href="notes/progress-${row.n}.md">Progress note ${row.n}</a> (<a href="ccda/progress-${row.n}.html">C-CDA</a>)`;

  const deviations = visitRows.flatMap(row => (row.doc?.monitoring ?? []).filter(item => item.status === "deferred").map(item => ({ row, item })));
  const open = visitRows.flatMap(row => [
    ...(row.doc?.monitoring ?? []).filter(item => ["ordered", "referred"].includes(item.status)).map(item => ({ row, kind: MONITORING_DOMAINS[item.domain], measure: item.measure, status: item.status, detail: item.detail })),
    ...(row.doc?.prevention_plan ?? []).filter(item => ["ordered", "referred"].includes(item.status)).map(item => ({ row, kind: "Prevention", measure: item.service, status: item.status, detail: item.detail })),
  ]);
  const abnormal = data.clinical.observations.filter(o => isLab(o) && o.interpretation && o.interpretation !== "N");
  const rClaims = data.claims.filter(c => c.evidence_grade === "R");
  const sensitive = data.claims.filter(c => c.sensitive_content);
  const provisional = data.clinical.problems.filter(p => p.verification_status !== "confirmed");
  const resolutions = editorialResolutions(sourcesText);
  const consult = data.clinical.consultation;

  const table = (headers, rows) => rows.length
    ? `<table><thead><tr>${headers.map(h => `<th>${h}</th>`).join("")}</tr></thead><tbody>${rows.join("")}</tbody></table>`
    : `<p class="muted">None.</p>`;
  const reviewRows = Object.entries(data.review).map(([name, r]) => `<tr><td>${esc(name.replaceAll("_", " "))}</td><td>${esc(r.status)}</td><td>${esc(r.reviewer ?? "")}</td><td>${esc(r.reviewed_on ?? "")}</td><td>${esc(r.notes ?? "")}</td></tr>`);

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Review checklist — ${esc(data.identity.display_name)} — ${esc(data.case_id)}</title>
${faviconLink(outputDir)}
<style>
  body { font: 15px/1.5 system-ui, sans-serif; max-width: 1100px; margin: 2rem auto; padding: 0 1rem; color: #1d1d1f; }
  .banner { background: #8b0000; color: #fff; padding: .6rem 1rem; font-weight: 700; letter-spacing: .02em; }
  h1 { margin-top: 1.2rem; } h2 { border-bottom: 1px solid #ddd; padding-bottom: .2rem; margin-top: 2rem; }
  table { border-collapse: collapse; width: 100%; margin: .5rem 0 1rem; font-size: 14px; }
  th, td { border: 1px solid #ddd; padding: .35rem .5rem; text-align: left; vertical-align: top; }
  th { background: #f4f4f6; } .muted { color: #666; } li { margin: .35rem 0; }
  .title { display: flex; gap: 1rem; align-items: center; } .seal { flex: none; border-radius: 50%; }
  .count { display: inline-block; min-width: 2.2rem; text-align: center; background: #eef; border-radius: 1rem; padding: 0 .5rem; margin-right: .4rem; }
</style>
</head>
<body>
<div class="banner">${esc(data.record_classification.banner)}</div>
<div class="title">${logoImg(outputDir)}<h1>Review checklist: ${esc(data.identity.display_name)} (${esc(data.case_id)})</h1></div>
<p><a href="${esc(allRecords)}">All records</a> · <a href="index.html">Back to the record</a> · <a href="../sources.md">Dossier (sources.md)</a> · <a href="../terminology.md">Terminology</a> · <a href="${esc(feedbackUrl(data.case_id, data.identity.display_name))}">Report a problem</a> · <a href="index.html#comments">Comments</a></p>
<p>Everything a reviewer needs to judge, gathered from the record. Release status: <strong>${esc(data.record_classification.public_release_status)}</strong>.</p>
${trueDateFrameSupported(data) ? "" : `<p class="note">No true-date version: the patient was born before 1 CE, and C-CDA and FHIR dates cannot carry a year that early. The record exists in the modern frame only.</p>
`}<ul>
  <li><span class="count">${resolutions.length}</span>judgment calls in the dossier</li>
  <li><span class="count">${deviations.length}</span>protocol deviations</li>
  <li><span class="count">${open.length}</span>orders and referrals without results in the record</li>
  <li><span class="count">${rClaims.length + sensitive.length + provisional.length}</span>evidence items to check (retrospective or sensitive claims, unconfirmed diagnoses)</li>
</ul>

<h2>Review status</h2>
${table(["Review", "Status", "Reviewer", "Date", "Notes"], reviewRows)}

<h2>Judgment calls (dossier editorial resolutions)</h2>
${resolutions.length ? `<ol>${resolutions.map(item => `<li>${inline(item)}</li>`).join("")}</ol>` : `<p class="muted">None recorded.</p>`}

<h2>Protocol deviations</h2>
<p class="muted">Checks the monitoring protocol called for that the schedule did not perform. Each is recorded with its outcome and corrective action, never filled with an invented result.</p>
${table(["Visit", "Measure", "Interval", "What happened"], deviations.map(({ row, item }) => `<tr><td>${esc(row.visit.date)}<br>${noteLink(row)}</td><td>${esc(item.measure)}</td><td>${esc(item.cadence)}</td><td>${esc(item.detail)}</td></tr>`))}

<h2>Orders and referrals without results in the record</h2>
${table(["Visit", "Type", "Item", "Status", "Detail"], open.map(({ row, kind, measure, status, detail }) => `<tr><td>${esc(row.visit.date)}<br>${noteLink(row)}</td><td>${esc(kind)}</td><td>${esc(measure)}</td><td>${esc(PREVENTION_STATUS[status])}</td><td>${esc(detail)}</td></tr>`))}

<h2>Evidence to check</h2>
<h3>Retrospective claims (R)</h3>
${table(["Claim", "Statement", "Certainty"], rClaims.map(c => `<tr><td>${esc(c.claim_id)}</td><td>${esc(c.statement)}</td><td>${esc(c.certainty ?? "")}</td></tr>`))}
<h3>Sensitive claims</h3>
${table(["Claim", "Grade", "Statement"], sensitive.map(c => `<tr><td>${esc(c.claim_id)}</td><td>${esc(c.evidence_grade)}</td><td>${esc(c.statement)}</td></tr>`))}
<h3>Diagnoses not confirmed</h3>
${table(["Problem", "Code", "Verification", "Reason"], provisional.map(p => `<tr><td>${esc(p.display)}</td><td>${esc(p.coding?.[0]?.code ?? "")}</td><td>${esc(p.verification_status)}</td><td>${esc(p.provenance.synthetic_reason)}</td></tr>`))}

<h2>Notes to read</h2>
<p class="muted">Every note in the record, with its type. All clinical content is synthetic.</p>
<ul>
  <li><a href="notes/hp.md">History and physical</a> (<a href="ccda/hp-01.html">C-CDA</a>), ${esc(visits[0].date)}</li>
  ${visitRows.map(row => `<li>${noteLink(row)}: ${esc(row.label)}, ${esc(row.visit.date)}</li>`).join("\n  ")}
  ${consult ? `<li><a href="notes/referral-01.md">Referral</a> (<a href="ccda/referral-01.html">C-CDA</a>) and <a href="notes/consult-01.md">consultation</a> (<a href="ccda/consult-01.html">C-CDA</a>), ${esc(data.identity.synthetic_identity.fictional_consultant.specialty)}</li>` : ""}
  <li><a href="notes/careplan.md">Care plan</a> and <a href="notes/teaching-note.md">teaching note</a></li>
</ul>

<h2>Abnormal results</h2>
${table(["Date", "Result", "Value", "Flag"], abnormal.map(o => `<tr><td>${esc(o.effective_date)}</td><td>${esc(o.label ?? o.display)}</td><td>${esc(withUnit(o))}</td><td>${esc(INTERPRETATIONS[o.interpretation])}</td></tr>`))}
${SITE_SCRIPT}
</body>
</html>
`;
}
