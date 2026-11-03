import fs from "node:fs/promises";
import path from "node:path";
import { NAMESPACE, ROUTES, TRUE_DATE_NOTICE, deterministicUuid, isTrueDateFrame, outputDirFor, parseClinician, splitName } from "./lib/common.mjs";
import { INTERPRETATIONS, isConsultStep, isLab, rangeText, withUnit } from "./lib/episode.mjs";

const inputPath = process.argv[2];
if (!inputPath) {
  console.error("Usage: node scripts/generate_case_outputs.mjs <case.json>");
  process.exit(2);
}

const absoluteInput = path.resolve(inputPath);
const outputDir = outputDirFor(absoluteInput);
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

const observationRows = data.clinical.observations.map(observation => `
  <tr>
    <td>${provenanceBadge(observation.provenance.evidence_grade)}</td>
    <td>${esc(observation.effective_date)}</td>
    <td>${esc(observation.display)}</td>
    <td>${esc(withUnit(observation))}${isLab(observation) ? `<div class="muted">Reference ${esc(rangeText(observation))}</div>` : ""}</td>
    <td>${observation.coding?.map(code => `${esc(code.system)} · ${esc(code.code)}`).join("<br>") ?? ""}</td>
  </tr>`).join("") || `<tr><td colspan="5" class="muted">No observations generated.</td></tr>`;

const vitalRows = data.clinical.vital_sign_sets.flatMap(set => set.measurements.map(measurement => `
  <tr><td>${esc(set.date)}</td><td>${esc(measurement.display)}</td><td>${esc(measurement.value)} ${esc(measurement.unit)}</td><td>${esc(measurement.code)}</td><td>${provenanceBadge(set.provenance.evidence_grade)}</td></tr>`)).join("");
const historyList = (items) => items.map(item => `<li>${provenanceBadge(item.provenance.evidence_grade)} ${esc(item.display)}</li>`).join("");

const goalRows = data.care_plan.goals.map(goal => `
  <tr><td>${esc(goal.display)}</td><td>${esc(goal.target_date ?? "")}</td><td>${esc(goal.status)}</td><td>${esc(goal.outcome ?? "")}</td></tr>`).join("");

const interventionRows = data.care_plan.interventions.map(item => `
  <tr><td>${esc(item.display)}</td><td>${esc(item.status)}</td><td>${(item.guideline_ids ?? []).map(esc).join(", ")}</td></tr>`).join("");

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

const supportingDocuments = [
  ["History and physical", "notes/hp.md"],
  ["Progress note 01", "notes/progress-01.md"],
  ["Progress note 02", "notes/progress-02.md"],
  ["Progress note 03", "notes/progress-03.md"],
  [`${data.identity.synthetic_identity.fictional_consultant.specialty} referral`, "notes/referral-01.md"],
  [`${data.identity.synthetic_identity.fictional_consultant.specialty} consultation`, "notes/consult-01.md"],
  ["Patient care plan", "notes/careplan.md"],
  ["Teaching note", "notes/teaching-note.md"],
  ["Provenance CSV", "provenance.csv"]
].map(([label, href]) => `<li><a href="${href}">${label}</a></li>`).join("");

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
${isTrueDateFrame(data) ? `  <div class="banner">${esc(TRUE_DATE_NOTICE)}</div>
` : ""}  <header>
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
        <a href="ccda.xml">C-CDA R2.1 draft</a>
        <a href="../sources.md">Evidence dossier</a>
      </div>
    </section>
    <section><h2>Historical timeline</h2><table><thead><tr><th>Date</th><th>Event</th><th>Claims</th></tr></thead><tbody>${timelineRows}</tbody></table></section>
    <section><h2>Evidence claims</h2><p class="muted">D = documented, R = retrospective, S = synthetic.</p><table><thead><tr><th>Grade</th><th>Claim</th><th>Certainty</th><th>Sources</th></tr></thead><tbody>${claimsRows}</tbody></table></section>
    <section><h2>Modern synthetic problem list</h2><table><thead><tr><th>Grade</th><th>Problem</th><th>Clinical status</th><th>Verification</th><th>Placement</th><th>Historical claims</th></tr></thead><tbody>${problemRows}</tbody></table></section>
    <section><h2>Synthetic outcome measures</h2><table><thead><tr><th>Grade</th><th>Date</th><th>Measure</th><th>Result</th><th>Coding</th></tr></thead><tbody>${observationRows}</tbody></table></section>
    <section><h2>Synthetic vital signs</h2><table><thead><tr><th>Date</th><th>Measure</th><th>Result</th><th>LOINC</th><th>Grade</th></tr></thead><tbody>${vitalRows}</tbody></table></section>
    <section><h2>Social, functional, and mental status</h2><h3>Social history</h3><ul>${historyList(data.clinical.social_history)}</ul><h3>Functional status</h3><ul>${historyList(data.clinical.functional_status)}</ul><h3>Mental status</h3><ul>${historyList(data.clinical.mental_status)}</ul></section>
    ${data.clinical.safety_assessment ? `<section><h2>Structured safety assessment</h2><div class="grid"><div class="card"><div class="label">Current ideation</div>${esc(data.clinical.safety_assessment.current_ideation)}</div><div class="card"><div class="label">Intent</div>${esc(data.clinical.safety_assessment.intent)}</div><div class="card"><div class="label">Plan</div>${esc(data.clinical.safety_assessment.plan)}</div><div class="card"><div class="label">Disposition</div>${esc(data.clinical.safety_assessment.disposition)}</div></div><p class="muted">This assessment is synthetic and does not convert historical behavior into a present-day fact.</p></section>` : ""}
    <section><h2>Allergies and medications</h2><h3>Allergies</h3><ul>${historyList(data.clinical.allergies)}</ul><h3>Medications</h3>${data.clinical.medications.length ? `<ul>${historyList(data.clinical.medications)}</ul>` : `<p class="muted">No current medications.</p>`}</section>
    <section><h2>Procedures and immunizations</h2><h3>Procedures</h3><ul>${historyList(data.clinical.procedures)}</ul><h3>Immunizations</h3><ul>${data.clinical.immunizations.map(item => `<li>${provenanceBadge(item.provenance.evidence_grade)} ${esc(item.date)}: ${esc(item.display)}</li>`).join("")}</ul></section>
    <section><h2>Past medical history</h2><p class="muted">True biography with historical dates; not part of the synthetic care timeline.</p><ul>${data.clinical.past_medical_history.map(item => `<li>${provenanceBadge(item.provenance.evidence_grade)} ${esc(item.historical_date.display)}: ${esc(item.display)} <span class="muted">(${item.provenance.claim_ids.map(esc).join(", ")})</span></li>`).join("")}</ul><h3>Family history</h3>${data.clinical.family_history.length ? `<ul>${data.clinical.family_history.map(item => `<li>${provenanceBadge(item.provenance.evidence_grade)} ${esc(item.relationship.display)}: ${esc(item.condition)}</li>`).join("")}</ul>` : `<p class="muted">No family medical history is documented in the logged sources. Family history of real relatives is never synthesized.</p>`}</section>
    <section><h2>Care-plan goals</h2><table><thead><tr><th>Goal</th><th>Target date</th><th>Status</th><th>Outcome</th></tr></thead><tbody>${goalRows}</tbody></table></section>
    <section><h2>Interventions</h2><table><thead><tr><th>Intervention</th><th>Status</th><th>Guideline</th></tr></thead><tbody>${interventionRows}</tbody></table></section>
    <section><h2>Planned encounters</h2><ul>${visits}</ul></section>
    <section><h2>Supporting documents</h2><ul>${supportingDocuments}</ul></section>
    <section><h2>Sources</h2><table><thead><tr><th>ID</th><th>Source</th><th>Publisher</th><th>Type</th></tr></thead><tbody>${sourceRows}</tbody></table></section>
    <section><h2>Review status</h2><table><thead><tr><th>Review</th><th>Status</th><th>Notes</th></tr></thead><tbody>${reviewRows}</tbody></table></section>
  </main>
</body>
</html>`;

const patientId = slug(data.case_id);
const GRADE_SYSTEM = `${NAMESPACE}/evidence-grade`;
const CLASSIFICATION_SYSTEM = `${NAMESPACE}/classification`;
const US_CORE = "http://hl7.org/fhir/us/core/StructureDefinition";
const urn = (localId) => `urn:uuid:${deterministicUuid(`${data.case_id}|fhir|${localId}`)}`;
// FHIR Coding allows only its own elements; validation metadata stays in the canonical case.
// The version is dropped too: terminology servers cannot check a code pinned to a release they lack.
const fhirCoding = ({ system, code, display }) => ({ system, code, display });
const humanName = splitName(data.identity.display_name);
const clinician = parseClinician(data.identity.synthetic_identity.fictional_primary_clinician);
const practitionerFullUrl = urn("primary-clinician");
const tagged = (profile, item) => ({ ...(profile ? { profile: [`${US_CORE}/${profile}`] } : {}), tag: [{ system: GRADE_SYSTEM, code: item.provenance.evidence_grade }] });
const carePlanNarrative = {
  status: "generated",
  div: `<div xmlns="http://www.w3.org/1999/xhtml"><p>${esc(data.record_classification.banner)}</p><ul>${data.care_plan.interventions.map(item => `<li>${esc(item.display)}</li>`).join("")}</ul></div>`
};
const VITAL_PROFILES = {
  "8302-2": "us-core-body-height",
  "29463-7": "us-core-body-weight",
  "39156-5": "us-core-bmi",
  "8867-4": "us-core-heart-rate",
  "9279-1": "us-core-respiratory-rate",
  "8310-5": "us-core-body-temperature",
  "59408-5": "us-core-pulse-oximetry"
};
const LOINC = "http://loinc.org";
const BP_CODE = "85354-9";
const SYSTOLIC = "8480-6";
const DIASTOLIC = "8462-4";
const patientFullUrl = urn(`${patientId}-patient`);
const fhirEntries = [{
  fullUrl: patientFullUrl,
  resource: {
    resourceType: "Patient",
    id: `${patientId}-patient`,
    meta: { profile: [`${US_CORE}/us-core-patient`], tag: [{ system: CLASSIFICATION_SYSTEM, code: "synthetic", display: "Synthetic record" }] },
    identifier: [
      { system: `${NAMESPACE}/mrn`, value: data.identity.synthetic_identity.mrn },
      { system: "http://hl7.org/fhir/sid/us-ssn", value: data.identity.synthetic_identity.ssn }
    ],
    active: true,
    name: [{ use: "official", text: data.identity.display_name, family: humanName.family, given: humanName.given }],
    gender: data.identity.sex,
    birthDate: data.identity.synthetic_identity.date_of_birth
  }
}];

for (const problem of data.clinical.problems) {
  const conditionId = slug(problem.id);
  const resource = {
    resourceType: "Condition",
    id: conditionId,
    meta: { profile: [`${US_CORE}/us-core-condition-problems-health-concerns`], tag: [{ system: GRADE_SYSTEM, code: problem.provenance.evidence_grade }] },
    clinicalStatus: { coding: [{ system: "http://terminology.hl7.org/CodeSystem/condition-clinical", code: problem.clinical_status }] },
    verificationStatus: { coding: [{ system: "http://terminology.hl7.org/CodeSystem/condition-ver-status", code: problem.verification_status }] },
    category: [{ coding: [{ system: "http://terminology.hl7.org/CodeSystem/condition-category", code: "problem-list-item", display: "Problem List Item" }] }],
    code: { text: problem.display },
    subject: { reference: patientFullUrl },
    recordedDate: data.synthetic_episode.index_date,
    note: [{ text: `Synthetic teaching-case problem. Evidence grade ${problem.provenance.evidence_grade}. Historical claims: ${problem.provenance.claim_ids.join(", ")}.` }]
  };
  if (problem.coding?.length) resource.code.coding = problem.coding.map(fhirCoding);
  fhirEntries.push({ fullUrl: urn(conditionId), resource });
}

for (const concern of data.care_plan.health_concerns) {
  const concernId = slug(concern.id);
  fhirEntries.push({
    fullUrl: urn(concernId),
    resource: {
      resourceType: "Condition",
      id: concernId,
      meta: tagged("us-core-condition-problems-health-concerns", concern),
      clinicalStatus: { coding: [{ system: "http://terminology.hl7.org/CodeSystem/condition-clinical", code: concern.status === "active" ? "active" : "resolved" }] },
      category: [{ coding: [{ system: "http://hl7.org/fhir/us/core/CodeSystem/condition-category", code: "health-concern", display: "Health Concern" }] }],
      code: { text: concern.display },
      subject: { reference: patientFullUrl },
      recordedDate: data.synthetic_episode.index_date
    }
  });
}

fhirEntries.push({
  fullUrl: practitionerFullUrl,
  resource: {
    resourceType: "Practitioner",
    id: "primary-clinician",
    meta: { profile: [`${US_CORE}/us-core-practitioner`], tag: [{ system: CLASSIFICATION_SYSTEM, code: "synthetic", display: "Fictional clinician" }] },
    identifier: [{ system: `${NAMESPACE}/clinician`, value: slug(data.identity.synthetic_identity.fictional_primary_clinician) }],
    name: [{ family: clinician.family, given: clinician.given, suffix: clinician.suffix ? [clinician.suffix] : undefined }]
  }
});

// The consultant and the referral order close the referral loop. The order's identifier is the
// same UUID the C-CDA Referral Note orders and the Consultation Note fulfills.
const consultant = data.identity.synthetic_identity.fictional_consultant;
const consultantName = parseClinician(consultant.name);
const consultantFullUrl = urn("consultant");
const referralStep = data.care_plan.interventions.find(isConsultStep);
if (referralStep) {
  fhirEntries.push({
    fullUrl: consultantFullUrl,
    resource: {
      resourceType: "Practitioner",
      id: "consultant",
      meta: { profile: [`${US_CORE}/us-core-practitioner`], tag: [{ system: CLASSIFICATION_SYSTEM, code: "synthetic", display: "Fictional clinician" }] },
      identifier: [{ system: `${NAMESPACE}/clinician`, value: slug(consultant.name) }],
      name: [{ family: consultantName.family, given: consultantName.given, suffix: consultantName.suffix ? [consultantName.suffix] : undefined }]
    }
  });
}

for (const allergy of data.clinical.allergies) {
  const allergyId = slug(allergy.id);
  fhirEntries.push({
    fullUrl: urn(allergyId),
    resource: {
      resourceType: "AllergyIntolerance",
      id: allergyId,
      meta: tagged("us-core-allergyintolerance", allergy),
      clinicalStatus: { coding: [{ system: "http://terminology.hl7.org/CodeSystem/allergyintolerance-clinical", code: allergy.status }] },
      verificationStatus: { coding: [{ system: "http://terminology.hl7.org/CodeSystem/allergyintolerance-verification", code: "confirmed" }] },
      ...(allergy.assertion === "no_known_allergy" ? {} : { type: allergy.assertion }),
      ...(allergy.criticality ? { criticality: allergy.criticality } : {}),
      code: { coding: [fhirCoding(allergy.substance)], text: allergy.display },
      patient: { reference: patientFullUrl },
      recordedDate: data.synthetic_episode.index_date,
      ...(allergy.reaction ? { reaction: [{ manifestation: [{ coding: [fhirCoding(allergy.reaction)], text: allergy.reaction.display }] }] } : {})
    }
  });
}

for (const medication of data.clinical.medications) {
  const medicationId = slug(medication.id);
  const route = ROUTES[medication.route];
  fhirEntries.push({
    fullUrl: urn(medicationId),
    resource: {
      resourceType: "MedicationRequest",
      id: medicationId,
      meta: tagged("us-core-medicationrequest", medication),
      status: medication.status,
      intent: "order",
      reportedBoolean: false,
      medicationCodeableConcept: { coding: medication.coding.map(fhirCoding), text: medication.display },
      subject: { reference: patientFullUrl },
      authoredOn: medication.start_date,
      requester: { reference: practitionerFullUrl },
      reasonReference: medication.indication_problem_ids.map(problemId => ({ reference: urn(slug(problemId)) })),
      dosageInstruction: [{
        text: medication.frequency.text,
        timing: { repeat: { frequency: 1, period: medication.frequency.period, periodUnit: medication.frequency.period_unit, boundsPeriod: { start: medication.start_date, ...(medication.end_date ? { end: medication.end_date } : {}) } } },
        route: { coding: [{ system: "http://snomed.info/sct", code: route.snomed, display: route.display }] },
        doseAndRate: [{ doseQuantity: { value: medication.dose.value, unit: medication.dose.unit, system: "http://unitsofmeasure.org", code: medication.dose.unit } }]
      }]
    }
  });
}

for (const procedure of data.clinical.procedures) {
  const procedureId = slug(procedure.id);
  fhirEntries.push({
    fullUrl: urn(procedureId),
    resource: {
      resourceType: "Procedure",
      id: procedureId,
      meta: tagged("us-core-procedure", procedure),
      status: procedure.status,
      code: { coding: procedure.coding.map(fhirCoding), text: procedure.display },
      subject: { reference: patientFullUrl },
      performedPeriod: procedure.period
    }
  });
}

for (const immunization of data.clinical.immunizations) {
  const immunizationId = slug(immunization.id);
  fhirEntries.push({
    fullUrl: urn(immunizationId),
    resource: {
      resourceType: "Immunization",
      id: immunizationId,
      meta: tagged("us-core-immunization", immunization),
      status: immunization.status,
      vaccineCode: { coding: immunization.coding.map(fhirCoding), text: immunization.display },
      patient: { reference: patientFullUrl },
      occurrenceDateTime: immunization.date,
      primarySource: false
    }
  });
}

// Family history of real relatives carries D or R provenance; US Core defines no profile.
for (const item of data.clinical.family_history) {
  const itemId = slug(item.id);
  fhirEntries.push({
    fullUrl: urn(itemId),
    resource: {
      resourceType: "FamilyMemberHistory",
      id: itemId,
      meta: tagged(null, item),
      status: "completed",
      patient: { reference: patientFullUrl },
      relationship: { coding: [fhirCoding(item.relationship)], text: item.relationship.display },
      ...(item.age_at_death !== undefined ? { deceasedAge: { value: item.age_at_death, unit: "a", system: "http://unitsofmeasure.org", code: "a" } } : {}),
      condition: [{ code: { ...(item.condition_coding?.length ? { coding: item.condition_coding.map(fhirCoding) } : {}), text: item.condition } }],
      note: [{ text: `Evidence grade ${item.provenance.evidence_grade}; claims ${item.provenance.claim_ids.join(", ")}.` }]
    }
  });
}

for (const encounter of data.clinical.encounters) {
  const encounterId = slug(encounter.id);
  fhirEntries.push({
    fullUrl: urn(encounterId),
    resource: {
      resourceType: "Encounter",
      id: encounterId,
      meta: { profile: [`${US_CORE}/us-core-encounter`], tag: [{ system: GRADE_SYSTEM, code: encounter.provenance.evidence_grade }] },
      status: encounter.status,
      class: { system: "http://terminology.hl7.org/CodeSystem/v3-ActCode", code: "AMB", display: "ambulatory" },
      type: [{ text: encounter.display }],
      subject: { reference: patientFullUrl },
      period: { start: encounter.date, end: encounter.date }
    }
  });
}

const OBSERVATION_CATEGORY = "http://terminology.hl7.org/CodeSystem/observation-category";
const CATEGORY = {
  survey: { system: OBSERVATION_CATEGORY, code: "survey", display: "Survey" },
  laboratory: { system: OBSERVATION_CATEGORY, code: "laboratory", display: "Laboratory" },
  imaging: { system: OBSERVATION_CATEGORY, code: "imaging", display: "Imaging" },
};
const PROFILE = { survey: "us-core-observation-screening-assessment", laboratory: "us-core-observation-lab", imaging: "us-core-observation-clinical-result" };
for (const observation of data.clinical.observations) {
  const observationId = slug(observation.id);
  const lab = isLab(observation);
  const ucum = (value) => ({ value, unit: observation.unit, system: "http://unitsofmeasure.org", code: observation.unit });
  const range = observation.reference_range ?? {};
  fhirEntries.push({
    fullUrl: urn(observationId),
    resource: {
      resourceType: "Observation",
      id: observationId,
      meta: { profile: [`${US_CORE}/${PROFILE[observation.category ?? "survey"]}`], tag: [{ system: GRADE_SYSTEM, code: observation.provenance.evidence_grade }] },
      status: observation.status,
      category: [{ coding: [CATEGORY[observation.category ?? "survey"]] }],
      code: { coding: observation.coding.map(fhirCoding), text: observation.display },
      subject: { reference: patientFullUrl },
      effectiveDateTime: observation.effective_date,
      valueQuantity: ucum(observation.value),
      ...(lab ? {
        interpretation: [{ coding: [{ system: "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation", code: observation.interpretation, display: INTERPRETATIONS[observation.interpretation] }] }],
        referenceRange: [{
          ...(range.low !== undefined ? { low: ucum(range.low) } : {}),
          ...(range.high !== undefined ? { high: ucum(range.high) } : {}),
          text: rangeText(observation)
        }]
      } : {}),
      note: [{ text: `Synthetic teaching-case result. Evidence grade ${observation.provenance.evidence_grade}.` }]
    }
  });
}

for (const set of data.clinical.vital_sign_sets) {
  const vitalObservation = (localId, profile, code, value) => ({
    fullUrl: urn(localId),
    resource: {
      resourceType: "Observation",
      id: localId,
      meta: { profile: [`${US_CORE}/${profile}`], tag: [{ system: GRADE_SYSTEM, code: "S" }] },
      status: "final",
      category: [{ coding: [{ system: "http://terminology.hl7.org/CodeSystem/observation-category", code: "vital-signs", display: "Vital Signs" }] }],
      code,
      subject: { reference: patientFullUrl },
      effectiveDateTime: set.date,
      ...value,
      note: [{ text: "Synthetic vital sign; not a historical measurement." }]
    }
  });
  const quantity = (measurement) => ({ value: measurement.value, unit: measurement.unit, system: "http://unitsofmeasure.org", code: measurement.unit });
  const loinc = (code, display) => ({ coding: [{ system: LOINC, code, display }], text: display });

  for (const measurement of set.measurements) {
    if (measurement.code === SYSTOLIC || measurement.code === DIASTOLIC) continue;
    const code = loinc(measurement.code, measurement.display);
    // The FHIR oxygen-saturation profile requires its fixed LOINC beside the pulse-oximetry code.
    if (measurement.code === "59408-5") code.coding.push({ system: LOINC, code: "2708-6", display: "Oxygen saturation in Arterial blood" });
    fhirEntries.push(vitalObservation(slug(`${set.id}-${measurement.code}`), VITAL_PROFILES[measurement.code], code, { valueQuantity: quantity(measurement) }));
  }

  // FHIR carries one blood pressure as a panel; C-CDA carries systolic and diastolic separately.
  const pressures = set.measurements.filter(measurement => measurement.code === SYSTOLIC || measurement.code === DIASTOLIC);
  if (pressures.length) {
    fhirEntries.push(vitalObservation(slug(`${set.id}-${BP_CODE}`), "us-core-blood-pressure", loinc(BP_CODE, "Blood pressure panel with all children optional"), {
      component: pressures.map(measurement => ({ code: loinc(measurement.code, measurement.display), valueQuantity: quantity(measurement) }))
    }));
  }
}

for (const [category, items] of [["social-history", data.clinical.social_history], ["survey", data.clinical.functional_status], ["exam", data.clinical.mental_status]]) {
  for (const item of items) {
    const itemId = slug(item.id);
    fhirEntries.push({
      fullUrl: urn(itemId),
      resource: {
        resourceType: "Observation", id: itemId,
        meta: { tag: [{ system: GRADE_SYSTEM, code: item.provenance.evidence_grade }] },
        status: "final",
        category: [{ coding: [{ system: "http://terminology.hl7.org/CodeSystem/observation-category", code: category }] }],
        code: { text: item.display }, subject: { reference: patientFullUrl },
        effectiveDateTime: data.synthetic_episode.index_date, valueString: item.display
      }
    });
  }
}

// The structured safety assessment is present only when the episode calls for one.
const safety = data.clinical.safety_assessment;
if (safety) fhirEntries.push({
  fullUrl: urn(slug(safety.id)),
  resource: {
    resourceType: "Observation", id: slug(safety.id),
    meta: { tag: [{ system: GRADE_SYSTEM, code: safety.provenance.evidence_grade }] },
    status: "final",
    category: [{ coding: [{ system: "http://terminology.hl7.org/CodeSystem/observation-category", code: "survey", display: "Survey" }] }],
    code: { text: "Structured present-day safety assessment" },
    subject: { reference: patientFullUrl }, effectiveDateTime: safety.date,
    valueString: `Current ideation ${safety.current_ideation}; intent ${safety.intent}; plan ${safety.plan}; access reviewed ${safety.access_reviewed}. Disposition: ${safety.disposition}.`,
    note: [{ text: "Synthetic assessment. Historical evidence is not represented as current behavior." }]
  }
});

for (const goal of data.care_plan.goals) {
  const goalId = slug(goal.id);
  fhirEntries.push({
    fullUrl: urn(goalId),
    resource: {
      resourceType: "Goal",
      id: goalId,
      meta: { profile: [`${US_CORE}/us-core-goal`], tag: [{ system: GRADE_SYSTEM, code: goal.provenance.evidence_grade }] },
      lifecycleStatus: goal.status,
      description: { text: goal.display },
      subject: { reference: patientFullUrl },
      target: goal.target_date ? [{ dueDate: goal.target_date }] : undefined,
      outcomeCode: goal.outcome ? [{ text: goal.outcome }] : undefined
    }
  });
}

const carePlanId = `${patientId}-careplan`;
fhirEntries.push({
  fullUrl: urn(carePlanId),
  resource: {
    resourceType: "CarePlan",
    id: carePlanId,
    meta: { profile: [`${US_CORE}/us-core-careplan`], tag: [{ system: GRADE_SYSTEM, code: "S" }] },
    text: carePlanNarrative,
    status: "completed",
    intent: "plan",
    category: [{ coding: [{ system: "http://hl7.org/fhir/us/core/CodeSystem/careplan-category", code: "assess-plan" }] }],
    title: `${data.identity.display_name} synthetic care plan`,
    description: data.synthetic_episode.teaching_objective,
    subject: { reference: patientFullUrl },
    period: { start: data.synthetic_episode.index_date, end: data.synthetic_episode.visit_schedule.at(-1)?.date },
    addresses: data.clinical.problems.map(problem => ({ reference: urn(slug(problem.id)) })),
    goal: data.care_plan.goals.map(goal => ({ reference: urn(slug(goal.id)) })),
    activity: data.care_plan.interventions.map(item => ({
      detail: {
        kind: "ServiceRequest",
        code: { text: item.display },
        status: item.status,
        description: `Guideline reference: ${(item.guideline_ids ?? []).join(", ")}`
      }
    }))
  }
});

if (referralStep) {
  const firstVisit = data.synthetic_episode.visit_schedule[0];
  const firstEncounter = data.clinical.encounters.find(encounter => encounter.id === firstVisit.encounter_id);
  fhirEntries.push({
    fullUrl: urn("referral-order"),
    resource: {
      resourceType: "ServiceRequest",
      id: "referral-order",
      meta: { profile: [`${US_CORE}/us-core-servicerequest`], tag: [{ system: GRADE_SYSTEM, code: referralStep.provenance.evidence_grade }] },
      identifier: [{ system: "urn:ietf:rfc:3986", value: `urn:uuid:${deterministicUuid(`${data.case_id}|referral-order`)}` }],
      status: "completed",
      intent: "order",
      category: [{ coding: [{ system: "http://snomed.info/sct", code: "3457005", display: "Patient referral" }] }],
      code: { coding: [{ system: "http://snomed.info/sct", code: "3457005", display: "Patient referral" }], text: `Referral to ${consultant.specialty.toLowerCase()}` },
      subject: { reference: patientFullUrl },
      encounter: firstEncounter ? { reference: urn(slug(firstEncounter.id)) } : undefined,
      occurrenceDateTime: firstVisit.date,
      authoredOn: firstVisit.date,
      requester: { reference: practitionerFullUrl },
      performer: [{ reference: consultantFullUrl }],
      reasonReference: data.clinical.problems.filter(problem => problem.clinical_status === "active").map(problem => ({ reference: urn(slug(problem.id)) })),
      note: [{ text: referralStep.display }]
    }
  });
}

const bundle = {
  resourceType: "Bundle",
  id: `${patientId}-collection`,
  type: "collection",
  timestamp: data.clinical.problems[0]?.provenance?.created ?? `${data.synthetic_episode.index_date}T12:00:00Z`,
  meta: { tag: [
    { system: CLASSIFICATION_SYSTEM, code: "synthetic", display: "Synthetic record, not a real medical record" },
    ...(isTrueDateFrame(data) ? [{ system: CLASSIFICATION_SYSTEM, code: "true-date-frame", display: TRUE_DATE_NOTICE }] : [])
  ] },
  entry: fhirEntries
};

await fs.mkdir(outputDir, { recursive: true });
await fs.writeFile(path.join(outputDir, "index.html"), html, "utf8");
await fs.writeFile(path.join(outputDir, "fhir-bundle.json"), `${JSON.stringify(bundle, null, 2)}\n`, "utf8");
console.log(JSON.stringify({ case_id: data.case_id, outputDir, resources: fhirEntries.length }));
