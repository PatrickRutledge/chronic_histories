import fs from "node:fs/promises";
import path from "node:path";

const inputPath = process.argv[2];
if (!inputPath) {
  console.error("Usage: node scripts/generate_supporting_docs.mjs <case.json>");
  process.exit(2);
}

const absoluteInput = path.resolve(inputPath);
const caseDir = path.dirname(absoluteInput);
const outputDir = path.join(caseDir, "generated");
const notesDir = path.join(outputDir, "notes");
const data = JSON.parse(await fs.readFile(absoluteInput, "utf8"));

const banner = data.record_classification.banner;
const patient = data.identity.display_name;
const mrn = data.identity.synthetic_identity.mrn;
const facility = data.identity.synthetic_identity.fictional_facility;
const clinician = data.identity.synthetic_identity.fictional_primary_clinician;
const visits = new Map(data.synthetic_episode.visit_schedule.map(visit => [visit.encounter_id, visit]));
const observations = data.clinical.observations;
const observation = (code, date) => observations.find(item => item.coding?.some(coding => coding.code === code) && item.effective_date === date);
const scoreLine = (date) => {
  const pcl = observation("101698-9", date);
  const phq = observation("44261-6", date);
  return `PCL-5 ${pcl?.value ?? "not recorded"}/80; PHQ-9 ${phq?.value ?? "not recorded"}/27. All scores are synthetic.`;
};
const vitalLine = (date) => {
  const set = data.clinical.vital_sign_sets.find(item => item.date === date);
  if (!set) return "Vital signs not recorded.";
  const byCode = new Map(set.measurements.map(item => [item.code, item]));
  const value = (code) => byCode.get(code)?.value;
  return `BP ${value("8480-6")}/${value("8462-4")} mmHg; pulse ${value("8867-4")} bpm; respirations ${value("9279-1")}/min; temperature ${value("8310-5")} °C; oxygen saturation ${value("59408-5")}% on room air; weight ${value("29463-7")} kg; BMI ${value("39156-5")} kg/m². All vital signs are synthetic.`;
};
const sourceClaim = (id) => data.claims.find(claim => claim.claim_id === id);

const header = (title, date, author = clinician) => `# ${title}

> **${banner}**

- Patient: ${patient} (real historical name used in a fictional teaching record)
- Synthetic MRN: ${mrn}
- Date: ${date}
- Fictional facility: ${facility}
- Fictional author: ${author}
- Calendar frame: modern shifted

`;

const hp = `${header("History and Physical", visits.get("ENC-001").date)}## Reason for visit

Initial primary-care and behavioral-health assessment for persistent trauma-related symptoms and insomnia. **S**

## Historical basis

Government biographies document postwar nightmares and insomnia (**D**), depression and headaches (**D**), and a firearm-under-pillow statement with a clear safety implication (**D**). The PTSD label is a retrospective modern interpretation (**R**). This note does not claim to reproduce an authentic examination of Audie Murphy.

## History of present illness

In this synthetic modern episode, the patient reports intrusive trauma memories, disrupted sleep, heightened vigilance, low mood, and interference with daily functioning. The active PTSD and insomnia entries are provisional synthetic diagnoses created for care-plan testing. **S**

## Strengths and supports

The patient identifies persistence, service, purposeful work, and willingness to engage in treatment as strengths. **S**

## Medications and allergies

- No medication regimen generated. The initial plan prioritizes psychotherapy and non-pharmacologic insomnia care. **S**
- No known medication allergies reported in the synthetic episode; this requires clinical review. **S**

## Measurements

${scoreLine(visits.get("ENC-001").date)}

${vitalLine(visits.get("ENC-001").date)}

Individual PHQ-9 item responses have not been generated. A separate structured synthetic safety assessment records current ideation, intent, and plan as absent; access was reviewed and outpatient follow-up with a collaborative safety plan was selected. The PHQ-9 total is not treated as a substitute for that assessment.

## Review of systems and examination

Synthetic review and examination: no acute cardiopulmonary complaint; alert and fully oriented; cooperative and goal directed; anxious mood with congruent, mildly constricted affect; linear thought process; no psychosis observed. Physical examination remains intentionally limited to general appearance and recorded vital signs. **S**

## Assessment

1. Provisional active post-traumatic stress disorder in the synthetic panel; linked to documented symptoms and a retrospective historical interpretation. **S linked to D/R**
2. Provisional active chronic insomnia. **S linked to D**
3. Safety review required because the historical record includes a firearm-related sleep statement. The synthetic care plan addresses present-day safety without reproducing methods or treating the historical statement as current behavior. **S response to D evidence**

## Plan

- Shared decision-making referral for individual Cognitive Processing Therapy with a trained clinician. **S**
- Repeat PCL-5 and PHQ-9 at six and twelve weeks. **S**
- Develop a collaborative safety and lethal-means plan using person-first, non-sensational language. **S**
- Review sleep routine, stimulus control, and non-pharmacologic insomnia strategies before considering medication. **S**
- Follow up in six weeks. **S**

Guideline: 2023 VA/DoD Clinical Practice Guideline for Management of PTSD and Acute Stress Disorder.
`;

const progress1 = `${header("Progress Note 01 — Initial plan", visits.get("ENC-001").date)}## Subjective

The patient describes trauma-related sleep disruption and mood symptoms and elects to begin an evidence-based psychotherapy pathway. **S**

## Objective

${scoreLine(visits.get("ENC-001").date)} ${vitalLine(visits.get("ENC-001").date)}

## Assessment

Provisional PTSD and chronic insomnia remain active. Strengths include persistence, goal orientation, and engagement in shared decision-making. **S**

## Plan

Refer for Cognitive Processing Therapy, establish the collaborative safety plan, begin the agreed sleep routine, and repeat validated symptom measures at follow-up. **S**
`;

const progress2 = `${header("Progress Note 02 — Six-week follow-up", visits.get("ENC-002").date)}## Subjective

The patient reports using the agreed sleep routine on five to six nights per week and participating in psychotherapy. **S**

## Objective

${scoreLine(visits.get("ENC-002").date)} ${vitalLine(visits.get("ENC-002").date)} No medication change occurred because no medication regimen has been generated.

## Assessment

Synthetic symptom measures show improvement. PTSD and insomnia remain active. Strengths include treatment participation and consistent use of coping strategies. **S**

## Plan

Continue Cognitive Processing Therapy, reinforce the collaborative safety plan and sleep routine, and reassess at twelve weeks. **S**
`;

const progress3 = `${header("Progress Note 03 — Twelve-week care-plan review", visits.get("ENC-003").date)}## Subjective

The patient reports improved sleep routine and better management of trauma-related symptoms after nine psychotherapy sessions. **S**

## Objective

${scoreLine(visits.get("ENC-003").date)} ${vitalLine(visits.get("ENC-003").date)}

## Assessment

The synthetic PCL-5 goal and psychotherapy attendance goal were met. PTSD and insomnia remain on the active problem list for continued longitudinal management rather than being marked resolved solely from score improvement. Strengths include sustained engagement and functional goal attainment. **S**

## Plan

Continue maintenance planning with behavioral health, preserve the safety plan, monitor symptoms, and use shared decision-making for any future medication discussion. **S**
`;

const referral = `${header("Behavioral Health Referral", visits.get("ENC-001").date)}## Referral question

Please evaluate the synthetic patient for individual, manualized trauma-focused psychotherapy, with Cognitive Processing Therapy selected through shared decision-making. **S**

## Pertinent history

- Postwar nightmares and insomnia are documented in government biographies. **D**
- Depression and headaches are documented in government biographies. **D**
- PTSD is a retrospective modern interpretation. **R**
- Baseline synthetic measures: ${scoreLine(visits.get("ENC-001").date)}

## Requested recommendations

Confirm appropriateness of the selected psychotherapy, complete an item-level safety assessment, coordinate the collaborative safety plan, and return treatment and monitoring recommendations to primary care. **S**
`;

const consult = `${header("Behavioral Health Consultation", "2026-07-07", "Marcus Lee, PsyD")}## Consultation summary

This is a fictional specialist consultation. The historical evidence supports trauma-related symptoms, while the modern active diagnosis and treatment course are synthetic.

## Assessment

The patient is appropriate for an outpatient, individual trauma-focused psychotherapy pathway in this teaching scenario. The consultation accepts the primary-care referral for Cognitive Processing Therapy. Item-level safety assessment remains a required clinical-review element and is not inferred from the PHQ-9 total. **S**

## Strengths and supports

Persistence, engagement, purposeful work, and willingness to practice structured skills. **S**

## Recommendations

1. Begin individual Cognitive Processing Therapy with a trained clinician. **S**
2. Use PCL-5 to monitor PTSD symptom change. **S**
3. Coordinate safety planning and sleep care with primary care. **S**
4. Return recommendations and attendance updates to the referring clinician. **S**

Guideline: 2023 VA/DoD PTSD Clinical Practice Guideline.
`;

const careplan = `${header("Patient Care Plan", visits.get("ENC-001").date)}## What matters to you

Improve sleep, reduce the impact of trauma memories, and remain engaged in meaningful work and relationships. **S**

## Your goals

${data.care_plan.goals.map(goal => `- ${goal.display} Target: ${goal.target_date}. Recorded outcome: ${goal.outcome}. **S**`).join("\n")}

## What we agreed to do

${data.care_plan.interventions.map(item => `- ${item.display} **S**`).join("\n")}

## Follow-up

- Six-week review: ${visits.get("ENC-002").date}
- Twelve-week review: ${visits.get("ENC-003").date}

This teaching document does not replace care from a qualified clinician.
`;

const teaching = `# Teaching Note — Audie Murphy pilot

> **${banner}**

## Why this case matters

Murphy’s public history provides a strong example of a highly accomplished veteran living with persistent postwar psychological symptoms. The case separates documented symptoms from a retrospective PTSD label and from a fully synthetic modern treatment episode.

## Learning objectives

1. Distinguish documented facts (**D**), retrospective interpretation (**R**), and generated clinical content (**S**).
2. Use shared decision-making to select evidence-based trauma-focused psychotherapy.
3. Monitor symptom change without treating a screening total as a complete diagnostic or safety assessment.
4. Preserve strengths, function, and identity while addressing trauma-related illness.

## Destigmatization message

Trauma-related symptoms can coexist with courage, achievement, work, relationships, and public service. A diagnosis describes a health condition; it does not define the whole person.

## Discussion questions

- Which historical facts justify clinical concern without establishing a modern diagnosis?
- When should a retrospective diagnosis stay in historical problems rather than become active?
- What information is missing before this synthetic episode would be clinically complete?
- How should an EHR display the historical firearm statement without presenting it as current behavior?

## Evidence-grade summary

- **D:** nightmares, insomnia, depression, headaches, service history, wounds, and the reported firearm-under-pillow statement as described by government biographies.
- **R:** the PTSD diagnosis applied retrospectively.
- **S:** shifted DOB, MRN, clinicians, facility, encounters, scores, active diagnoses, goals, interventions, and outcomes.
`;

const csv = (value) => `"${String(value ?? "").replaceAll('"', '""')}"`;
const provenanceRows = [
  ["element_type", "element_id", "display", "evidence_grade", "claim_ids", "synthetic_reason", "status"],
  ...data.claims.map(item => ["claim", item.claim_id, item.statement, item.evidence_grade, "", "", item.release_status]),
  ...data.clinical.problems.map(item => ["problem", item.id, item.display, item.provenance.evidence_grade, item.provenance.claim_ids.join("|"), item.provenance.synthetic_reason, item.status]),
  ...data.clinical.observations.map(item => ["observation", item.id, `${item.display}: ${item.value} ${item.unit}`, item.provenance.evidence_grade, item.provenance.claim_ids.join("|"), item.provenance.synthetic_reason, item.status]),
  ...data.clinical.encounters.map(item => ["encounter", item.id, `${item.date}: ${item.display}`, item.provenance.evidence_grade, item.provenance.claim_ids.join("|"), item.provenance.synthetic_reason, item.status]),
  ...data.clinical.vital_sign_sets.flatMap(set => set.measurements.map(item => ["vital_sign", `${set.id}-${item.code}`, `${set.date}: ${item.display} ${item.value} ${item.unit}`, set.provenance.evidence_grade, "", set.provenance.synthetic_reason, "final"])),
  ...data.clinical.social_history.map(item => ["social_history", item.id, item.display, item.provenance.evidence_grade, item.provenance.claim_ids.join("|"), item.provenance.synthetic_reason, item.status]),
  ...data.clinical.functional_status.map(item => ["functional_status", item.id, item.display, item.provenance.evidence_grade, item.provenance.claim_ids.join("|"), item.provenance.synthetic_reason, item.status]),
  ...data.clinical.mental_status.map(item => ["mental_status", item.id, item.display, item.provenance.evidence_grade, item.provenance.claim_ids.join("|"), item.provenance.synthetic_reason, item.status]),
  ["safety_assessment", data.clinical.safety_assessment.id, `${data.clinical.safety_assessment.date}: ${data.clinical.safety_assessment.disposition}`, data.clinical.safety_assessment.provenance.evidence_grade, data.clinical.safety_assessment.provenance.claim_ids.join("|"), data.clinical.safety_assessment.provenance.synthetic_reason, "final"],
  ...data.care_plan.goals.map(item => ["goal", item.id, item.display, item.provenance.evidence_grade, item.provenance.claim_ids.join("|"), item.provenance.synthetic_reason, item.status]),
  ...data.care_plan.interventions.map(item => ["intervention", item.id, item.display, item.provenance.evidence_grade, item.provenance.claim_ids.join("|"), item.provenance.synthetic_reason, item.status])
].map(row => row.map(csv).join(",")).join("\r\n") + "\r\n";

const files = new Map([
  ["hp.md", hp],
  ["progress-01.md", progress1],
  ["progress-02.md", progress2],
  ["progress-03.md", progress3],
  ["referral-01.md", referral],
  ["consult-01.md", consult],
  ["careplan.md", careplan],
  ["teaching-note.md", teaching]
]);

await fs.mkdir(notesDir, { recursive: true });
for (const [name, content] of files) await fs.writeFile(path.join(notesDir, name), content, "utf8");
await fs.writeFile(path.join(outputDir, "provenance.csv"), csv.length ? provenanceRows : "", "utf8");

console.log(JSON.stringify({ case_id: data.case_id, notes: files.size, provenance_rows: provenanceRows.split("\r\n").filter(Boolean).length - 1 }));
