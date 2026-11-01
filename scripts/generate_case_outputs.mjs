import fs from "node:fs/promises";
import path from "node:path";

const inputPath = process.argv[2];
if (!inputPath) {
  console.error("Usage: node scripts/generate_case_outputs.mjs <case.json>");
  process.exit(2);
}

const absoluteInput = path.resolve(inputPath);
const caseDir = path.dirname(absoluteInput);
const outputDir = path.join(caseDir, "generated");
const data = JSON.parse(await fs.readFile(absoluteInput, "utf8"));

const esc = (value) => String(value ?? "")
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;")
  .replaceAll("'", "&#39;");

const slug = (value) => String(value).toLowerCase().replace(/[^a-z0-9-.]+/g, "-").replace(/^-|-$/g, "");
const sourceById = new Map(data.sources.map(source => [source.source_id, source]));

function provenanceBadge(grade) {
  const labels = { D: "Documented", R: "Retrospective", S: "Synthetic" };
  return `<span class="badge grade-${esc(grade)}" title="${esc(labels[grade])}">${esc(grade)}</span>`;
}

function renderSourceLinks(links) {
  if (!links?.length) return "<span class=\"muted\">No source linked</span>";
  return links.map(link => {
    const source = sourceById.get(link.source_id);
    const label = source ? source.title : link.source_id;
    const href = source?.url ? ` href="${esc(source.url)}"` : "";
    return `<a${href} target="_blank" rel="noreferrer">${esc(label)}</a> <span class="relationship">${esc(link.relationship)}</span>`;
  }).join("<br>");
}

const claimsRows = data.claims.map(claim => `
  <tr>
    <td>${provenanceBadge(claim.evidence_grade)}</td>
    <td><strong>${esc(claim.statement)}</strong>${claim.clinical_interpretation ? `<div class="muted">${esc(claim.clinical_interpretation)}</div>` : ""}</td>
    <td>${esc(claim.certainty)}</td>
    <td>${renderSourceLinks(claim.source_links)}</td>
  </tr>`).join("");

const timelineRows = data.historical_timeline.map(event => `
  <tr><td>${esc(event.date.display)}</td><td>${esc(event.summary)}</td><td>${event.claim_ids.map(esc).join(", ")}</td></tr>`).join("");

const problemRows = data.clinical.problems.map(problem => `
  <tr>
    <td>${provenanceBadge(problem.provenance.evidence_grade)}</td>
    <td>${esc(problem.display)}</td>
    <td>${esc(problem.clinical_status)}</td>
    <td>${esc(problem.verification_status)}</td>
    <td>${esc(problem.problem_placement)}</td>
    <td>${problem.provenance.claim_ids.map(esc).join(", ")}</td>
  </tr>`).join("") || `<tr><td colspan="6" class="muted">No clinical problems generated.</td></tr>`;

const sourceRows = data.sources.map(source => `
  <tr>
    <td>${esc(source.source_id)}</td>
    <td><a href="${esc(source.url)}" target="_blank" rel="noreferrer">${esc(source.title)}</a></td>
    <td>${esc(source.publisher)}</td>
    <td>${esc(source.source_type)}</td>
  </tr>`).join("");

const visits = data.synthetic_episode.visit_schedule.map(visit => `
  <li><strong>${esc(visit.date)}</strong> — ${esc(visit.purpose)} <span class="muted">(${esc(visit.encounter_id)})</span></li>`).join("");

const reviewRows = Object.entries(data.review).map(([name, review]) => `
  <tr><td>${esc(name.replaceAll("_", " "))}</td><td>${esc(review.status)}</td><td>${esc(review.notes ?? "")}</td></tr>`).join("");

const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(data.identity.display_name)} — The Human Record</title>
  <style>
    :root { --navy:#17365d; --blue:#1f4e78; --pale:#eef5fa; --ink:#1f2933; --muted:#66788a; --amber:#fff2cc; --red:#f8d7da; --green:#d9ead3; }
    * { box-sizing:border-box; }
    body { margin:0; font:16px/1.5 Arial, sans-serif; color:var(--ink); background:#f6f8fa; }
    header { background:var(--navy); color:white; padding:24px max(24px,calc((100vw - 1180px)/2)); }
    header h1 { margin:4px 0; font-size:30px; }
    .banner { background:#b42318; color:white; font-weight:700; text-align:center; padding:10px; letter-spacing:.03em; }
    main { max-width:1180px; margin:24px auto 60px; padding:0 24px; }
    section { background:white; border:1px solid #d9e1e8; border-radius:8px; margin:18px 0; padding:20px; }
    h2 { color:var(--navy); margin:0 0 14px; font-size:22px; }
    h3 { color:var(--blue); }
    .grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(220px,1fr)); gap:12px; }
    .card { background:var(--pale); border-left:4px solid var(--blue); padding:12px; }
    .label { color:var(--muted); font-size:13px; text-transform:uppercase; letter-spacing:.04em; }
    table { width:100%; border-collapse:collapse; }
    th { background:var(--blue); color:white; text-align:left; }
    th,td { padding:9px; border-bottom:1px solid #dfe6ec; vertical-align:top; }
    .badge { display:inline-block; min-width:28px; text-align:center; font-weight:700; border-radius:12px; padding:2px 8px; }
    .grade-D { background:var(--green); } .grade-R { background:var(--amber); } .grade-S { background:var(--red); }
    .muted { color:var(--muted); font-size:14px; }
    .relationship { color:var(--muted); font-size:12px; }
    .downloads a { display:inline-block; margin:4px 8px 4px 0; padding:8px 12px; background:var(--blue); color:white; text-decoration:none; border-radius:5px; }
    @media (max-width:700px) { table { display:block; overflow-x:auto; } }
  </style>
</head>
<body>
  <div class="banner">${esc(data.record_classification.banner)}</div>
  <header>
    <div>The Human Record</div>
    <h1>${esc(data.identity.display_name)}</h1>
    <div>Case ${esc(data.case_id)} · Modern EHR teaching episode · Draft for review</div>
  </header>
  <main>
    <section>
      <h2>Review summary</h2>
      <div class="grid">
        <div class="card"><div class="label">Historical dates</div>${esc(data.identity.historical_dates.birth.preferred.display)} – ${esc(data.identity.historical_dates.death.preferred.display)}</div>
        <div class="card"><div class="label">Synthetic DOB</div>${esc(data.identity.synthetic_identity.date_of_birth)}</div>
        <div class="card"><div class="label">Index visit</div>${esc(data.synthetic_episode.index_date)} at age ${esc(data.synthetic_episode.index_age)}</div>
        <div class="card"><div class="label">Synthetic MRN</div>${esc(data.identity.synthetic_identity.mrn)}</div>
      </div>
      <p><strong>Teaching objective:</strong> ${esc(data.synthetic_episode.teaching_objective)}</p>
      <div class="downloads">
        <a href="../case.json">Canonical JSON</a>
        <a href="fhir-bundle.json">FHIR R4 draft</a>
        <a href="../sources.md">Evidence dossier</a>
      </div>
    </section>
    <section><h2>Historical timeline</h2><table><thead><tr><th>Date</th><th>Event</th><th>Claims</th></tr></thead><tbody>${timelineRows}</tbody></table></section>
    <section><h2>Evidence claims</h2><p class="muted">D = documented, R = retrospective, S = synthetic.</p><table><thead><tr><th>Grade</th><th>Claim</th><th>Certainty</th><th>Sources</th></tr></thead><tbody>${claimsRows}</tbody></table></section>
    <section><h2>Modern synthetic problem list</h2><table><thead><tr><th>Grade</th><th>Problem</th><th>Clinical status</th><th>Verification</th><th>Placement</th><th>Historical claims</th></tr></thead><tbody>${problemRows}</tbody></table></section>
    <section><h2>Planned encounters</h2><ul>${visits}</ul></section>
    <section><h2>Sources</h2><table><thead><tr><th>ID</th><th>Source</th><th>Publisher</th><th>Type</th></tr></thead><tbody>${sourceRows}</tbody></table></section>
    <section><h2>Review status</h2><table><thead><tr><th>Review</th><th>Status</th><th>Notes</th></tr></thead><tbody>${reviewRows}</tbody></table></section>
  </main>
</body>
</html>`;

const patientId = slug(data.case_id);
const patientFullUrl = `urn:uuid:${patientId}-patient`;
const fhirEntries = [{
  fullUrl: patientFullUrl,
  resource: {
    resourceType: "Patient",
    id: `${patientId}-patient`,
    meta: { tag: [{ system: "https://humanrecord.example.org/classification", code: "synthetic", display: "Synthetic record" }] },
    identifier: [{ system: "https://humanrecord.example.org/mrn", value: data.identity.synthetic_identity.mrn }],
    active: true,
    name: [{ use: "official", text: data.identity.display_name }],
    gender: data.identity.sex,
    birthDate: data.identity.synthetic_identity.date_of_birth
  }
}];

for (const problem of data.clinical.problems) {
  const conditionId = slug(problem.id);
  const resource = {
    resourceType: "Condition",
    id: conditionId,
    meta: { tag: [{ system: "https://humanrecord.example.org/evidence-grade", code: problem.provenance.evidence_grade }] },
    clinicalStatus: { coding: [{ system: "http://terminology.hl7.org/CodeSystem/condition-clinical", code: problem.clinical_status }] },
    verificationStatus: { coding: [{ system: "http://terminology.hl7.org/CodeSystem/condition-ver-status", code: problem.verification_status }] },
    category: [{ coding: [{ system: "http://terminology.hl7.org/CodeSystem/condition-category", code: "problem-list-item", display: "Problem List Item" }] }],
    code: { text: problem.display },
    subject: { reference: patientFullUrl },
    recordedDate: data.synthetic_episode.index_date,
    note: [{ text: `Synthetic teaching-case problem. Evidence grade ${problem.provenance.evidence_grade}. Historical claims: ${problem.provenance.claim_ids.join(", ")}.` }]
  };
  if (problem.coding?.length) resource.code.coding = problem.coding;
  fhirEntries.push({ fullUrl: `urn:uuid:${conditionId}`, resource });
}

const bundle = {
  resourceType: "Bundle",
  id: `${patientId}-collection`,
  type: "collection",
  timestamp: new Date().toISOString(),
  meta: { tag: [{ system: "https://humanrecord.example.org/classification", code: "synthetic", display: "Synthetic record, not a real medical record" }] },
  entry: fhirEntries
};

await fs.mkdir(outputDir, { recursive: true });
await fs.writeFile(path.join(outputDir, "index.html"), html, "utf8");
await fs.writeFile(path.join(outputDir, "fhir-bundle.json"), `${JSON.stringify(bundle, null, 2)}\n`, "utf8");
console.log(JSON.stringify({ case_id: data.case_id, outputDir, resources: fhirEntries.length }));
