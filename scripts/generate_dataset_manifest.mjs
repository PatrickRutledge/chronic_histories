// Writes manifest.csv and index.html (the main page linking every record) at the repository root: one row per released-track case under pilots/ and cases/.
// Test fixtures are excluded. Every value is derived from case.json and the committed
// conformance summary, so the file can be regenerated at any time and must not be hand-edited.
//   node scripts/generate_dataset_manifest.mjs [--check]
// --check exits 1 if manifest.csv differs from what would be generated.
import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { REPO_URL, SITE_SCRIPT, feedbackUrl, isoYear } from "./lib/common.mjs";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const pilotsDir = path.join(repoRoot, "pilots");
const manifestPath = path.join(repoRoot, "manifest.csv");
const indexPath = path.join(repoRoot, "index.html");
const RECENT_DEATH_AFTER_YEAR = 1990; // Project instruction: deaths after 1990 need extra review.

const columns = [
  "case_id", "person_id", "display_name", "sex", "era", "nationality",
  "birth", "death", "index_age", "index_date",
  "active_problems", "claims_d", "claims_r", "sources",
  "flags", "release_status",
  "schema_validation", "clinical_review", "provenance_review", "safe_messaging_review",
  "conformance", "path",
];

const normalizedSha256 = (file) =>
  crypto.createHash("sha256").update(fs.readFileSync(file, "utf8").replace(/\r\n/g, "\n"), "utf8").digest("hex").toUpperCase();

const csvField = (value) => {
  const text = value === undefined || value === null ? "" : String(value);
  return /[",\r\n]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text;
};

function conformanceStatus(caseDir) {
  const summaryPath = path.join(caseDir, "generated", "conformance", "summary.json");
  const ccdaPath = path.join(caseDir, "generated", "ccda.xml");
  const fhirPath = path.join(caseDir, "generated", "fhir-bundle.json");
  if (!fs.existsSync(summaryPath) || !fs.existsSync(ccdaPath) || !fs.existsSync(fhirPath)) return "not run";
  const summary = JSON.parse(fs.readFileSync(summaryPath, "utf8"));
  if (summary.CcdaSha256 !== normalizedSha256(ccdaPath) || summary.FhirSha256 !== normalizedSha256(fhirPath)) return "stale";
  // Every note document must have been validated in its current form.
  const notesDir = path.join(caseDir, "generated", "ccda");
  const noteFiles = fs.existsSync(notesDir) ? fs.readdirSync(notesDir).filter(name => name.endsWith(".xml")) : [];
  const checked = new Map([].concat(summary.NoteDocuments ?? []).map(doc => [doc.File, doc.Sha256]));
  if (checked.size !== noteFiles.length || noteFiles.some(name => checked.get(`generated/ccda/${name}`) !== normalizedSha256(path.join(notesDir, name)))) return "stale";
  const errors = ["CdaXsdErrors", "SchematronErrors", "NoteDocumentErrors", "FhirBaseErrors", "UsCoreErrors"].reduce((sum, key) => sum + (summary[key] ?? 0), 0);
  if (errors > 0) return `fail (${errors} errors)`;
  return summary.TerminologyUnverified > 0 ? `pass (${summary.TerminologyUnverified} codes unverified)` : "pass";
}

function row(caseDir) {
  const c = JSON.parse(fs.readFileSync(path.join(caseDir, "case.json"), "utf8"));
  const id = c.identity;
  const deathYear = isoYear(id.historical_dates.death.preferred.iso);
  const grades = c.claims.map(claim => claim.evidence_grade);
  const flags = [];
  if (c.record_classification.real_historical_name) flags.push("real_historical_name");
  if (deathYear > RECENT_DEATH_AFTER_YEAR) flags.push("recent_death");
  if (c.claims.some(claim => claim.sensitive_content)) flags.push("sensitive_content");
  if (c.clinical.safety_assessment) flags.push("safety_assessment");
  const problems = c.clinical.problems
    .filter(problem => problem.clinical_status === "active")
    .map(problem => {
      const coding = problem.coding?.[0];
      return coding ? `${coding.code} ${coding.display}` : problem.display;
    });
  return {
    case_id: c.case_id,
    person_id: id.person_id,
    display_name: id.display_name,
    sex: id.sex,
    era: id.era,
    nationality: id.nationality,
    birth: id.historical_dates.birth.preferred.iso,
    death: id.historical_dates.death.preferred.iso,
    index_age: c.synthetic_episode.index_age,
    index_date: c.synthetic_episode.index_date,
    active_problems: problems.join("; "),
    claims_d: grades.filter(grade => grade === "D").length,
    claims_r: grades.filter(grade => grade === "R").length,
    sources: c.sources.length,
    flags: flags.join("; "),
    release_status: c.record_classification.public_release_status,
    schema_validation: c.review.schema_validation.status,
    clinical_review: c.review.clinical_review.status,
    provenance_review: c.review.provenance_review.status,
    safe_messaging_review: c.review.safe_messaging_review.status,
    conformance: conformanceStatus(caseDir),
    path: path.relative(repoRoot, caseDir).split(path.sep).join("/"),
  };
}

const caseDirs = [pilotsDir, path.join(repoRoot, "cases")]
  .filter(dir => fs.existsSync(dir))
  .flatMap(dir => fs.readdirSync(dir, { withFileTypes: true })
    .filter(entry => entry.isDirectory() && fs.existsSync(path.join(dir, entry.name, "case.json")))
    .map(entry => path.join(dir, entry.name)))
  .sort();
const rows = caseDirs.map(row).sort((a, b) => a.case_id.localeCompare(b.case_id));
const csv = [columns.join(","), ...rows.map(r => columns.map(col => csvField(r[col])).join(","))].join("\n") + "\n";

// index.html: the dataset's main page, one row per record with links to its pages and files, a search
// box, and a "verified" checkbox per record kept in the reader's browser (localStorage) only.
const esc = (value) => String(value ?? "").replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
function indexRow(r) {
  const c = JSON.parse(fs.readFileSync(path.join(repoRoot, r.path, "case.json"), "utf8"));
  const dates = c.identity.historical_dates;
  const problems = c.clinical.problems.filter(problem => problem.clinical_status === "active").map(problem => problem.display);
  const base = r.path;
  const trueDate = fs.existsSync(path.join(repoRoot, base, "generated", "true-date", "index.html"));
  const issue = `${REPO_URL}/issues?q=${encodeURIComponent(`is:issue label:clinical-review "${r.case_id}"`)}`;
  const links = [
    [`${base}/generated/index.html`, "Record"],
    [`${base}/generated/review.html`, "Review"],
    [`${base}/sources.md`, "Sources"],
    [`${base}/generated/ccda.html`, "C-CDA"],
    [`${base}/generated/fhir-bundle.json`, "FHIR"],
    ...(trueDate ? [[`${base}/generated/true-date/index.html`, "True-date"]] : []),
    [issue, "Issue"],
    [feedbackUrl(r.case_id, r.display_name), "Report"],
  ].map(([href, label]) => `<a href="${esc(href)}">${label}</a>`).join(" ");
  const search = [r.case_id, r.display_name, r.era, r.nationality, ...problems].join(" ").toLowerCase();
  return `<tr data-id="${esc(r.case_id)}" data-search="${esc(search)}"><td><input type="checkbox" aria-label="Verified ${esc(r.display_name)}"></td><td>${esc(r.case_id)}</td><td><a href="${esc(base)}/generated/index.html">${esc(r.display_name)}</a></td><td>${esc(r.era)}</td><td>${esc(dates.birth.preferred.display)} – ${esc(dates.death.preferred.display)}</td><td>${esc(r.index_age)}</td><td>${esc(problems.join("; "))}</td><td>${esc(r.conformance)}</td><td class="links">${links}</td></tr>`;
}
const indexHtml = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>The Human Record: all records</title>
<link rel="icon" type="image/png" href="assets/favicon.png">
<style>
  body { font: 14px/1.45 system-ui, sans-serif; margin: 1.5rem; color: #1d2433; }
  .banner { background: #8b0000; color: #fff; padding: .6rem 1rem; font-weight: 700; }
  .bar { display: flex; gap: 1rem; align-items: center; flex-wrap: wrap; margin: 1rem 0; }
  input[type=search] { padding: .35rem .5rem; min-width: 22rem; }
  table { border-collapse: collapse; width: 100%; }
  th, td { border-bottom: 1px solid #dde; padding: .3rem .45rem; text-align: left; vertical-align: top; }
  th { position: sticky; top: 0; background: #f4f5fa; }
  tr.done { background: #eef8ee; }
  td.links a { margin-right: .4rem; white-space: nowrap; }
  .note { color: #555; max-width: 70rem; }
  .title { display: flex; gap: 1rem; align-items: center; } .title h1 { margin: .2rem 0; } .seal { flex: none; border-radius: 50%; }
</style>
</head>
<body>
<div class="banner">SYNTHETIC RECORDS, NOT REAL MEDICAL RECORDS</div>
<div class="title"><img class="seal" src="assets/chronos-seal.png" alt="Chronos Archive seal" width="72" height="72"><div><h1>The Human Record: all records</h1><div class="note">Chronos Archive</div></div></div>
<p class="note">Synthetic modern clinical records for ${rows.length} deceased historical figures, for teaching and for testing health software. Each record grades every clinical claim: D (documented in the sources), R (retrospective interpretation) or S (synthetic, invented for teaching). The patients are historical; the visits, results and notes are not. All records are drafts under review.</p>
<p class="note">Each row links to the record, its review checklist, its sources, its C-CDA and FHIR files, the true-date version where one exists, and its open review questions on GitHub. <strong>To help:</strong> use <em>Report</em> to send a correction (a source helps), or comment at the bottom of any record page. Both need only a free GitHub account. The Verified box is a reading aid kept only in this browser.</p>
<div class="bar">
  <input type="search" id="q" placeholder="Search name, case ID, era or problem">
  <label><input type="checkbox" id="hide"> Hide verified</label>
  <span id="count"></span>
</div>
<table>
<thead><tr><th>Verified</th><th>Case</th><th>Name</th><th>Era</th><th>Lived</th><th>Index age</th><th>Active problems</th><th>Conformance</th><th>Open</th></tr></thead>
<tbody>
${rows.map(indexRow).join("\n")}
</tbody>
</table>
<script>
const KEY = "human-record-verified";
const saved = new Set(JSON.parse(localStorage.getItem(KEY) || "[]"));
const rowsEl = [...document.querySelectorAll("tbody tr")];
const q = document.getElementById("q"), hide = document.getElementById("hide"), count = document.getElementById("count");
function refresh() {
  const term = q.value.trim().toLowerCase();
  let shown = 0;
  for (const tr of rowsEl) {
    const done = saved.has(tr.dataset.id);
    tr.classList.toggle("done", done);
    const visible = (!term || tr.dataset.search.includes(term)) && !(hide.checked && done);
    tr.hidden = !visible;
    if (visible) shown++;
  }
  count.textContent = saved.size + " of " + rowsEl.length + " verified; " + shown + " shown";
}
for (const tr of rowsEl) {
  const box = tr.querySelector("input");
  box.checked = saved.has(tr.dataset.id);
  box.addEventListener("change", () => { box.checked ? saved.add(tr.dataset.id) : saved.delete(tr.dataset.id); localStorage.setItem(KEY, JSON.stringify([...saved])); refresh(); });
}
q.addEventListener("input", refresh); hide.addEventListener("change", refresh); refresh();
</script>
${SITE_SCRIPT}
</body>
</html>
`;

if (process.argv.includes("--check")) {
  const current = fs.existsSync(manifestPath) ? fs.readFileSync(manifestPath, "utf8").replace(/\r\n/g, "\n") : "";
  if (current !== csv) {
    console.error("ERROR: manifest.csv is out of date. Run: node scripts/generate_dataset_manifest.mjs");
    process.exit(1);
  }
  const currentIndex = fs.existsSync(indexPath) ? fs.readFileSync(indexPath, "utf8").replace(/\r\n/g, "\n") : "";
  if (currentIndex !== indexHtml) {
    console.error("ERROR: index.html is out of date. Run: node scripts/generate_dataset_manifest.mjs");
    process.exit(1);
  }
  console.log(`manifest.csv and index.html are current (${rows.length} cases).`);
} else {
  fs.writeFileSync(manifestPath, csv, "utf8");
  fs.writeFileSync(indexPath, indexHtml, "utf8");
  console.log(`Wrote manifest.csv and index.html (${rows.length} cases).`);
}
