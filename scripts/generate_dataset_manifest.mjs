// Writes manifest.csv at the repository root: one row per released-track case under pilots/ and cases/.
// Test fixtures are excluded. Every value is derived from case.json and the committed
// conformance summary, so the file can be regenerated at any time and must not be hand-edited.
//   node scripts/generate_dataset_manifest.mjs [--check]
// --check exits 1 if manifest.csv differs from what would be generated.
import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { isoYear } from "./lib/common.mjs";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const pilotsDir = path.join(repoRoot, "pilots");
const manifestPath = path.join(repoRoot, "manifest.csv");
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

if (process.argv.includes("--check")) {
  const current = fs.existsSync(manifestPath) ? fs.readFileSync(manifestPath, "utf8").replace(/\r\n/g, "\n") : "";
  if (current !== csv) {
    console.error("ERROR: manifest.csv is out of date. Run: node scripts/generate_dataset_manifest.mjs");
    process.exit(1);
  }
  console.log(`manifest.csv is current (${rows.length} cases).`);
} else {
  fs.writeFileSync(manifestPath, csv, "utf8");
  console.log(`Wrote manifest.csv (${rows.length} cases).`);
}
