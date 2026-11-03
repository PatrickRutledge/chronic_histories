import fs from "node:fs/promises";
import path from "node:path";
import { cdaToHtml } from "./lib/cda_html.mjs";
import { ADMINISTRATIVE_GENDER, FICTIONAL_FACILITY_CONTACT, ROUTES, TRUE_DATE_NOTICE, deterministicUuid, isTrueDateFrame, oidFor, outputDirFor, parseClinician, splitName } from "./lib/common.mjs";
import { INTERPRETATIONS, MONITORING_DOMAINS, PREVENTION_STATUS, isChronicCare, guidelinesFor, activeProblemsAt, documentationOf, immunizationsOn, nextScheduledVisit, visitLabels, problemsAt, claimsAtIndex, goalProgress, isConsultStep, isLab, labelOf, laterClaimsNote, medicationChanges, midSentence, rangeText, resultChanges, sentence, withUnit } from "./lib/episode.mjs";

const inputPath = process.argv[2];
if (!inputPath) {
  console.error("Usage: node scripts/generate_ccda.mjs <case.json>");
  process.exit(2);
}

const absoluteInput = path.resolve(inputPath);
const outputDir = outputDirFor(absoluteInput);
const data = JSON.parse(await fs.readFile(absoluteInput, "utf8"));

const x = (value) => String(value ?? "")
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;")
  .replaceAll("'", "&apos;");

const compactDate = (value) => String(value).replaceAll("-", "");
const documentUuid = deterministicUuid(`${data.case_id}|ccd|${data.schema_version}`);
const patientUuid = deterministicUuid(`${data.case_id}|patient`);
const facility = data.identity.synthetic_identity.fictional_facility;
const clinician = parseClinician(data.identity.synthetic_identity.fictional_primary_clinician);
const authorUuid = deterministicUuid(`${facility}|${data.identity.synthetic_identity.fictional_primary_clinician}|synthetic`);
const custodianUuid = deterministicUuid(`${facility}|synthetic`);
const { family, given } = splitName(data.identity.display_name);
const gender = ADMINISTRATIVE_GENDER[data.identity.sex];
const genderCode = gender
  ? `<administrativeGenderCode code="${gender.code}" codeSystem="2.16.840.1.113883.5.1" displayName="${gender.display}"/>`
  : `<administrativeGenderCode nullFlavor="UNK"/>`;
const contact = FICTIONAL_FACILITY_CONTACT;
const facilityContact = `<telecom use="WP" value="tel:${contact.phone}"/>
      <addr use="WP"><streetAddressLine>${x(contact.street)}</streetAddressLine><city>${x(contact.city)}</city><state>${contact.state}</state><postalCode>${contact.postalCode}</postalCode><country>${contact.country}</country></addr>`;

const problemNarrativeFor = (date) => data.clinical.problems.map((problem, index) => !problemsAt(data, date).includes(problem) ? "" : `
  <tr ID="problem-${index + 1}">
    <td>${x(problem.display)}</td><td>${x(problem.clinical_status)}</td><td>${x(problem.verification_status)}</td>
    <td>${x(problem.coding?.[0]?.code ?? "Uncoded")}</td><td>${x(problem.provenance.evidence_grade)} — ${x(problem.provenance.synthetic_reason)}</td>
  </tr>`).join("");
const problemNarrative = problemNarrativeFor();

const problemEntriesFor = (date) => data.clinical.problems.map((problem, index) => {
  if (!problemsAt(data, date).includes(problem)) return "";
  const coding = problem.coding?.[0];
  const onset = compactDate(problem.recorded_date ?? data.synthetic_episode.index_date);
  const id = deterministicUuid(`${data.case_id}|${problem.id}`);
  return `
  <entry typeCode="DRIV">
    <act classCode="ACT" moodCode="EVN">
      <templateId root="2.16.840.1.113883.10.20.22.4.3" extension="2015-08-01"/>
      <id root="${id}"/>
      <code code="CONC" codeSystem="2.16.840.1.113883.5.6" displayName="Concern"/>
      <statusCode code="active"/>
      <effectiveTime><low value="${onset}"/></effectiveTime>
      <entryRelationship typeCode="SUBJ">
        <observation classCode="OBS" moodCode="EVN">
          <templateId root="2.16.840.1.113883.10.20.22.4.4" extension="2015-08-01"/>
          <id root="${deterministicUuid(`${data.case_id}|${problem.id}|observation`)}"/>
          <code code="55607006" codeSystem="2.16.840.1.113883.6.96" displayName="Problem"/>
          <text><reference value="#problem-${index + 1}"/></text>
          <statusCode code="completed"/>
          <effectiveTime><low value="${onset}"/></effectiveTime>
          <value xsi:type="CD" code="${x(coding?.code ?? "UNK")}" codeSystem="2.16.840.1.113883.6.90" displayName="${x(coding?.display ?? problem.display)}"/>
        </observation>
      </entryRelationship>
    </act>
  </entry>`;
}).join("");
const problemEntries = problemEntriesFor();

const resultNarrativeFor = (keep) => data.clinical.observations.map((observation, index) => keep(observation) ? `
  <tr ID="result-${index + 1}"><td>${x(observation.effective_date)}</td><td>${x(observation.display)}</td><td>${x(observation.value)}</td><td>${x(observation.unit)}</td><td>${x(isLab(observation) ? rangeText(observation) : "")}</td><td>${x(isLab(observation) ? INTERPRETATIONS[observation.interpretation] : "")}</td><td>S</td></tr>` : "").join("");
// Survey scores trend in one organizer per instrument; labs group by panel and draw date.
const organizerKey = (observation) => observation.panel ? `${observation.panel.code}|${observation.effective_date}` : observation.coding[0].code;
const organizerCode = (observation) => observation.panel ?? observation.coding[0];
const resultNarrative = resultNarrativeFor(() => true);

const resultEntriesFor = (keep, idSuffix = "") => [...new Set(data.clinical.observations.filter(keep).map(organizerKey))].map(code => {
  const members = data.clinical.observations.filter(observation => keep(observation) && organizerKey(observation) === code);
  const panel = organizerCode(members[0]);
  const dates = members.map(observation => compactDate(observation.effective_date)).sort();
  const components = members.map(observation => {
  const coding = observation.coding[0];
  const index = data.clinical.observations.indexOf(observation);
  return `
      <component>
        <observation classCode="OBS" moodCode="EVN">
          <templateId root="2.16.840.1.113883.10.20.22.4.2" extension="2015-08-01"/>
          <id root="${deterministicUuid(`${data.case_id}|${observation.id}`)}"/>
          <code code="${x(coding.code)}" codeSystem="2.16.840.1.113883.6.1" displayName="${x(coding.display)}"/>
          <text><reference value="#result-${index + 1}"/></text>
          <statusCode code="completed"/>
          <effectiveTime value="${compactDate(observation.effective_date)}"/>
          <value xsi:type="PQ" value="${x(observation.value)}" unit="${x(observation.unit)}"/>${isLab(observation) ? `
          <interpretationCode code="${x(observation.interpretation)}" codeSystem="2.16.840.1.113883.5.83" displayName="${x(INTERPRETATIONS[observation.interpretation])}"/>
          <referenceRange>
            <observationRange>
              <text>${x(rangeText(observation))}</text>
              <value xsi:type="IVL_PQ">${observation.reference_range?.low !== undefined ? `<low value="${x(observation.reference_range.low)}" unit="${x(observation.unit)}"/>` : ""}${observation.reference_range?.high !== undefined ? `<high value="${x(observation.reference_range.high)}" unit="${x(observation.unit)}"/>` : ""}</value>
            </observationRange>
          </referenceRange>` : ""}
        </observation>
      </component>`;
  }).join("");
  return `
  <entry typeCode="DRIV">
    <organizer classCode="CLUSTER" moodCode="EVN">
      <templateId root="2.16.840.1.113883.10.20.22.4.1" extension="2015-08-01"/>
      <id root="${deterministicUuid(`${data.case_id}|results|${code}${idSuffix}`)}"/>
      <code code="${x(panel.code)}" codeSystem="2.16.840.1.113883.6.1" displayName="${x(panel.display)}"/>
      <statusCode code="completed"/>
      <effectiveTime><low value="${dates[0]}"/><high value="${dates.at(-1)}"/></effectiveTime>
      ${components}
    </organizer>
  </entry>`;
}).join("");
const resultEntries = resultEntriesFor(() => true);

const vitalNarrativeFor = (keep) => data.clinical.vital_sign_sets.flatMap((set, setIndex) => keep(set) ? set.measurements.map((measurement, measurementIndex) => `
  <tr ID="vital-${setIndex + 1}-${measurementIndex + 1}"><td>${x(set.date)}</td><td>${x(measurement.display)}</td><td>${x(measurement.value)}</td><td>${x(measurement.unit)}</td><td>S</td></tr>`) : []).join("");
const vitalNarrative = vitalNarrativeFor(() => true);
const vitalEntriesFor = (keep) => data.clinical.vital_sign_sets.map((set, setIndex) => keep(set) ? `
  <entry typeCode="DRIV">
    <organizer classCode="CLUSTER" moodCode="EVN">
      <templateId root="2.16.840.1.113883.10.20.22.4.26" extension="2015-08-01"/>
      <id root="${deterministicUuid(`${data.case_id}|${set.id}`)}"/>
      <code code="74728-7" codeSystem="2.16.840.1.113883.6.1" displayName="Vital signs, weight, height, head circumference, oximetry, BMI, and BSA panel - HL7.FHIR.R4"/>
      <statusCode code="completed"/><effectiveTime value="${compactDate(set.date)}"/>
      ${set.measurements.map((measurement, measurementIndex) => `<component><observation classCode="OBS" moodCode="EVN"><templateId root="2.16.840.1.113883.10.20.22.4.27" extension="2014-06-09"/><id root="${deterministicUuid(`${data.case_id}|${set.id}|${measurement.code}`)}"/><code code="${x(measurement.code)}" codeSystem="2.16.840.1.113883.6.1" displayName="${x(measurement.display)}"/><text><reference value="#vital-${setIndex + 1}-${measurementIndex + 1}"/></text><statusCode code="completed"/><effectiveTime value="${compactDate(set.date)}"/><value xsi:type="PQ" value="${x(measurement.value)}" unit="${x(measurement.unit)}"/></observation></component>`).join("")}
    </organizer>
  </entry>` : "").join("");
const vitalEntries = vitalEntriesFor(() => true);
const narrativeList = (items) => `<list>${items.map(item => `<item>${x(item.display)} [S]</item>`).join("")}</list>`;

const encounterNarrative = data.clinical.encounters.map((encounter, index) => `
  <tr ID="encounter-${index + 1}"><td>${x(encounter.date)}</td><td>${x(encounter.display)}</td><td>${x(encounter.status)}</td><td>S</td></tr>`).join("");

const encounterEntries = data.clinical.encounters.map((encounter, index) => `
  <entry typeCode="DRIV">
    <encounter classCode="ENC" moodCode="EVN">
      <templateId root="2.16.840.1.113883.10.20.22.4.49" extension="2015-08-01"/>
      <id root="${deterministicUuid(`${data.case_id}|${encounter.id}`)}"/>
      ${encounter.type_coding ? `<code code="${x(encounter.type_coding.code)}" codeSystem="${oidFor(encounter.type_coding.system)}" displayName="${x(encounter.type_coding.display)}"><originalText><reference value="#encounter-${index + 1}"/></originalText></code>` : `<code nullFlavor="UNK"><originalText><reference value="#encounter-${index + 1}"/></originalText></code>`}
      <statusCode code="completed"/>
      <effectiveTime value="${compactDate(encounter.date)}"/>
    </encounter>
  </entry>`).join("");

const goalNarrative = data.care_plan.goals.map((goal, index) => `
  <tr ID="goal-${index + 1}"><td>${x(goal.display)}</td><td>${x(goal.target_date)}</td><td>${x(goal.status)}</td><td>${x(goal.outcome)}</td><td>S</td></tr>`).join("");

const goalEntries = data.care_plan.goals.map((goal, index) => `
  <entry>
    <observation classCode="OBS" moodCode="GOL">
      <templateId root="2.16.840.1.113883.10.20.22.4.121"/>
      <id root="${deterministicUuid(`${data.case_id}|${goal.id}`)}"/>
      <code nullFlavor="OTH"><originalText><reference value="#goal-${index + 1}"/></originalText></code>
      <text><reference value="#goal-${index + 1}"/></text>
      <statusCode code="active"/>
      ${goal.target_date ? `<effectiveTime value="${compactDate(goal.target_date)}"/>` : ""}
    </observation>
  </entry>`).join("");

const interventionNarrative = data.care_plan.interventions.map(item => `
  <tr><td>${x(item.display)}</td><td>${x(item.status)}</td><td>${x((item.guideline_ids ?? []).join(", "))}</td><td>S</td></tr>`).join("");

const clinical = data.clinical;
const grade = (item) => item.provenance.evidence_grade;
const cd = (coding, extra = "") => `code="${x(coding.code)}" codeSystem="${oidFor(coding.system)}" displayName="${x(coding.display)}"${extra}`;
const uuid = (...parts) => deterministicUuid([data.case_id, ...parts].join("|"));
const table = (headers, rows) => `<table><thead><tr>${headers.map(h => `<th>${h}</th>`).join("")}</tr></thead><tbody>${rows}</tbody></table>`;
const ivl = (period) => `<effectiveTime><low value="${compactDate(period.start)}"/>${period.end ? `<high value="${compactDate(period.end)}"/>` : ""}</effectiveTime>`;
const section = ({ templateRoot, extension, code, display, title, text, entries = "" }) => `
<component>
  <section>
    <templateId root="${templateRoot}"${extension ? ` extension="${extension}"` : ""}/>
    <code code="${code}" codeSystem="2.16.840.1.113883.6.1" displayName="${x(display)}"/>
    <title>${x(title)}</title>
    <text>${text}</text>
    ${entries}
  </section>
</component>`;
const problemById = new Map(clinical.problems.map(problem => [problem.id, problem]));

// Allergies: "no known allergy" uses the R2.1 negated Allergy-Intolerance Observation pattern.
const allergyRows = clinical.allergies.map((allergy, index) => `<tr ID="allergy-${index + 1}"><td>${x(allergy.display)}</td><td>${x(allergy.reaction?.display ?? "")}</td><td>${x(allergy.status)}</td><td>${grade(allergy)}</td></tr>`).join("");
const allergyEntries = clinical.allergies.map((allergy, index) => {
  const negated = allergy.assertion === "no_known_allergy";
  // Allergy and Intolerance Type (2.16.840.1.113883.3.88.12.3221.6.2) has drug-specific codes but no generic "intolerance to substance".
  const drug = allergy.substance?.system === "http://www.nlm.nih.gov/research/umls/rxnorm";
  const kind = allergy.assertion === "intolerance"
    ? (drug ? { code: "59037007", display: "Intolerance to drug" } : { code: "418038007", display: "Propensity to adverse reactions to substance" })
    : (drug ? { code: "416098002", display: "Allergy to drug" } : { code: "419199007", display: "Allergy to substance" });
  const substance = negated ? `<code nullFlavor="NA"/>` : `<code ${cd(allergy.substance)}/>`;
  const reaction = allergy.reaction ? `
          <entryRelationship typeCode="MFST" inversionInd="true">
            <observation classCode="OBS" moodCode="EVN">
              <templateId root="2.16.840.1.113883.10.20.22.4.9" extension="2014-06-09"/>
              <id root="${uuid(allergy.id, "reaction")}"/>
              <code code="ASSERTION" codeSystem="2.16.840.1.113883.5.4"/>
              <statusCode code="completed"/>
              <value xsi:type="CD" ${cd(allergy.reaction)}/>
            </observation>
          </entryRelationship>` : "";
  return `
  <entry typeCode="DRIV">
    <act classCode="ACT" moodCode="EVN">
      <templateId root="2.16.840.1.113883.10.20.22.4.30" extension="2015-08-01"/>
      <id root="${uuid(allergy.id)}"/>
      <code code="CONC" codeSystem="2.16.840.1.113883.5.6" displayName="Concern"/>
      <statusCode code="${allergy.status === "active" ? "active" : "completed"}"/>
      <effectiveTime><low value="${compactDate(data.synthetic_episode.index_date)}"/></effectiveTime>
      <entryRelationship typeCode="SUBJ">
        <observation classCode="OBS" moodCode="EVN"${negated ? ` negationInd="true"` : ""}>
          <templateId root="2.16.840.1.113883.10.20.22.4.7" extension="2014-06-09"/>
          <id root="${uuid(allergy.id, "observation")}"/>
          <code code="ASSERTION" codeSystem="2.16.840.1.113883.5.4"/>
          <text><reference value="#allergy-${index + 1}"/></text>
          <statusCode code="completed"/>
          <effectiveTime><low nullFlavor="UNK"/></effectiveTime>
          <value xsi:type="CD" code="${kind.code}" codeSystem="2.16.840.1.113883.6.96" displayName="${kind.display}"/>
          <participant typeCode="CSM"><participantRole classCode="MANU"><playingEntity classCode="MMAT">${substance}</playingEntity></participantRole></participant>${reaction}
        </observation>
      </entryRelationship>
    </act>
  </entry>`;
}).join("");

const medicationRows = clinical.medications.map((medication, index) => `<tr ID="medication-${index + 1}"><td>${x(medication.display)}</td><td>${x(medication.frequency.text)}</td><td>${x(ROUTES[medication.route].display)}</td><td>${x(medication.start_date)}${medication.end_date ? ` to ${x(medication.end_date)}` : ""}</td><td>${x(medication.status)}</td><td>${grade(medication)}</td></tr>`).join("");
const medicationEntries = clinical.medications.map((medication, index) => {
  const route = ROUTES[medication.route];
  const dose = medication.dose.unit === "1" ? `<doseQuantity value="${medication.dose.value}"/>` : `<doseQuantity value="${medication.dose.value}" unit="${x(medication.dose.unit)}"/>`;
  const indications = medication.indication_problem_ids.map(problemId => {
    const coding = problemById.get(problemId).coding[0];
    return `
      <entryRelationship typeCode="RSON">
        <observation classCode="OBS" moodCode="EVN">
          <templateId root="2.16.840.1.113883.10.20.22.4.19" extension="2014-06-09"/>
          <id root="${uuid(medication.id, problemId, "indication")}"/>
          <code code="55607006" codeSystem="2.16.840.1.113883.6.96" displayName="Problem"/>
          <statusCode code="completed"/>
          <value xsi:type="CD" ${cd(coding)}/>
        </observation>
      </entryRelationship>`;
  }).join("");
  return `
  <entry typeCode="DRIV">
    <substanceAdministration classCode="SBADM" moodCode="EVN">
      <templateId root="2.16.840.1.113883.10.20.22.4.16" extension="2014-06-09"/>
      <id root="${uuid(medication.id)}"/>
      <text><reference value="#medication-${index + 1}"/></text>
      <statusCode code="${medication.status === "active" ? "active" : "completed"}"/>
      <effectiveTime xsi:type="IVL_TS"><low value="${compactDate(medication.start_date)}"/>${medication.end_date ? `<high value="${compactDate(medication.end_date)}"/>` : ""}</effectiveTime>
      <effectiveTime xsi:type="PIVL_TS" institutionSpecified="false" operator="A"><period value="${medication.frequency.period}" unit="${medication.frequency.period_unit}"/></effectiveTime>
      <routeCode code="${route.nci}" codeSystem="2.16.840.1.113883.3.26.1.1" codeSystemName="NCI Thesaurus" displayName="${x(route.display)}"/>
      ${dose}
      <consumable>
        <manufacturedProduct classCode="MANU">
          <templateId root="2.16.840.1.113883.10.20.22.4.23" extension="2014-06-09"/>
          <manufacturedMaterial><code ${cd(medication.coding[0])}/></manufacturedMaterial>
        </manufacturedProduct>
      </consumable>${indications}
    </substanceAdministration>
  </entry>`;
}).join("");

const procedureRows = clinical.procedures.map((procedure, index) => `<tr ID="procedure-${index + 1}"><td>${x(procedure.display)}</td><td>${x(procedure.period.start)}${procedure.period.end ? ` to ${x(procedure.period.end)}` : ""}</td><td>${x(procedure.status)}</td><td>${grade(procedure)}</td></tr>`).join("");
const procedureEntries = clinical.procedures.map((procedure, index) => `
  <entry typeCode="DRIV">
    <procedure classCode="PROC" moodCode="EVN">
      <templateId root="2.16.840.1.113883.10.20.22.4.14" extension="2014-06-09"/>
      <id root="${uuid(procedure.id)}"/>
      <code ${cd(procedure.coding[0])}><originalText><reference value="#procedure-${index + 1}"/></originalText></code>
      <text><reference value="#procedure-${index + 1}"/></text>
      <statusCode code="${procedure.status === "completed" ? "completed" : "active"}"/>
      ${ivl(procedure.period)}
    </procedure>
  </entry>`).join("");

const immunizationRows = clinical.immunizations.map((immunization, index) => `<tr ID="immunization-${index + 1}"><td>${x(immunization.date)}</td><td>${x(immunization.display)}</td><td>${x(immunization.status)}</td><td>${grade(immunization)}</td></tr>`).join("");
const immunizationEntries = clinical.immunizations.map((immunization, index) => `
  <entry typeCode="DRIV">
    <substanceAdministration classCode="SBADM" moodCode="EVN" negationInd="false">
      <templateId root="2.16.840.1.113883.10.20.22.4.52" extension="2015-08-01"/>
      <id root="${uuid(immunization.id)}"/>
      <text><reference value="#immunization-${index + 1}"/></text>
      <statusCode code="completed"/>
      <effectiveTime value="${compactDate(immunization.date)}"/>
      <consumable>
        <manufacturedProduct classCode="MANU">
          <templateId root="2.16.840.1.113883.10.20.22.4.54" extension="2014-06-09"/>
          <manufacturedMaterial><code ${cd(immunization.coding[0])}/></manufacturedMaterial>
        </manufacturedProduct>
      </consumable>
    </substanceAdministration>
  </entry>`).join("");

const familyRows = clinical.family_history.map((item, index) => `<tr ID="family-${index + 1}"><td>${x(item.relationship.display)}</td><td>${x(item.condition)}</td><td>${x(item.age_at_death ?? "")}</td><td>${grade(item)} (${x(item.provenance.claim_ids.join(", "))})</td></tr>`).join("");
const familyEntries = clinical.family_history.map((item, index) => `
  <entry typeCode="DRIV">
    <organizer classCode="CLUSTER" moodCode="EVN">
      <templateId root="2.16.840.1.113883.10.20.22.4.45" extension="2015-08-01"/>
      <id root="${uuid(item.id)}"/>
      <statusCode code="completed"/>
      <subject><relatedSubject classCode="PRS"><code ${cd(item.relationship)}/></relatedSubject></subject>
      <component>
        <observation classCode="OBS" moodCode="EVN">
          <templateId root="2.16.840.1.113883.10.20.22.4.46" extension="2015-08-01"/>
          <id root="${uuid(item.id, "observation")}"/>
          <code code="64572001" codeSystem="2.16.840.1.113883.6.96" displayName="Disease"><translation code="75315-2" codeSystem="2.16.840.1.113883.6.1" displayName="Condition Family member"/></code>
          <text><reference value="#family-${index + 1}"/></text>
          <statusCode code="completed"/>
          ${item.condition_coding?.length ? `<value xsi:type="CD" ${cd(item.condition_coding[0])}/>` : `<value xsi:type="CD" nullFlavor="OTH"><originalText><reference value="#family-${index + 1}"/></originalText></value>`}
        </observation>
      </component>
    </organizer>
  </entry>`).join("");
const familyText = clinical.family_history.length
  ? table(["Relative", "Condition", "Age at death", "Evidence"], familyRows)
  : `<paragraph>No family medical history is documented in the logged sources. Family history of real relatives is recorded only from documented or retrospective sources and is never synthesized.</paragraph>`;

const pastHistoryRows = clinical.past_medical_history.map(item => `<tr><td>${x(item.historical_date.display)}</td><td>${x(item.display)}</td><td>${grade(item)} (${x(item.provenance.claim_ids.join(", "))})</td></tr>`).join("");
const pastHistoryText = `<paragraph>Historical biography with true dates. These events are not part of the synthetic care timeline.</paragraph>${clinical.past_medical_history.length ? table(["Historical date", "History", "Evidence"], pastHistoryRows) : "<paragraph>No historical medical events are recorded.</paragraph>"}`;

const concernRows = data.care_plan.health_concerns.map((concern, index) => `<tr ID="concern-${index + 1}"><td>${x(concern.display)}</td><td>${x(concern.status)}</td><td>${grade(concern)}</td></tr>`).join("");
const concernEntries = data.care_plan.health_concerns.map((concern, index) => `
  <entry>
    <act classCode="ACT" moodCode="EVN">
      <templateId root="2.16.840.1.113883.10.20.22.4.132" extension="2015-08-01"/>
      <id root="${uuid(concern.id)}"/>
      <code code="75310-3" codeSystem="2.16.840.1.113883.6.1" displayName="Health concern"/>
      <text><reference value="#concern-${index + 1}"/></text>
      <statusCode code="${concern.status === "active" ? "active" : "completed"}"/>
    </act>
  </entry>`).join("");

const latestByMeasure = [...new Map(clinical.observations.map(observation => [observation.coding[0].code, observation])).values()];
const strengths = clinical.social_history.filter(item => /support/i.test(item.display));
const assessmentText = `<list>${clinical.problems.map(problem => `<item>${x(problem.display)}: ${x(problem.clinical_status)}, ${x(problem.verification_status)} [${grade(problem)}]</item>`).join("")}</list>
<paragraph>Most recent measures: ${latestByMeasure.map(observation => `${x(observation.display)} ${x(observation.value)} on ${x(observation.effective_date)}`).join("; ")} [S]</paragraph>
<paragraph>Strengths and supports: ${strengths.length ? strengths.map(item => x(item.display)).join("; ") : "engagement in care"} [S]</paragraph>`;
const firstVisit = data.synthetic_episode.visit_schedule[0];
const reasonText = `<paragraph>${x(firstVisit.purpose)}. Concerns: ${data.care_plan.health_concerns.map(concern => x(concern.display)).join("; ")}. [S]</paragraph>`;

const emptySection = ({ templateRoot, extension, code, title, explanation }) => `
<component>
  <section nullFlavor="NI">
    <templateId root="${templateRoot}" extension="${extension}"/>
    <code code="${code}" codeSystem="2.16.840.1.113883.6.1"/>
    <title>${x(title)}</title>
    <text><paragraph>${x(explanation)}</paragraph></text>
  </section>
</component>`;

const recordTarget = `  <recordTarget>
    <patientRole>
      <id root="${patientUuid}" extension="${x(data.identity.synthetic_identity.mrn)}"/>
      <id root="2.16.840.1.113883.4.1" extension="${x(data.identity.synthetic_identity.ssn)}"/>
      <addr nullFlavor="UNK"/>
      <telecom nullFlavor="UNK"/>
      <patient>
        <name use="L">${given.map(part => `<given>${x(part)}</given>`).join("")}<family>${x(family)}</family></name>
        ${genderCode}
        <birthTime value="${compactDate(data.identity.synthetic_identity.date_of_birth)}"/>
        <raceCode nullFlavor="ASKU"/>
        <ethnicGroupCode nullFlavor="ASKU"/>
        <languageCommunication><languageCode code="en"/><preferenceInd value="true"/></languageCommunication>
      </patient>
      <providerOrganization>
        <id root="${custodianUuid}"/>
        <name>${x(facility)}</name>
      ${facilityContact}
      </providerOrganization>
    </patientRole>
  </recordTarget>`;
const custodianXml = `  <custodian>
    <assignedCustodian><representedCustodianOrganization><id root="${custodianUuid}"/><name>${x(facility)}</name>${facilityContact}</representedCustodianOrganization></assignedCustodian>
  </custodian>`;

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<ClinicalDocument xmlns="urn:hl7-org:v3" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  <realmCode code="US"/>
  <typeId root="2.16.840.1.113883.1.3" extension="POCD_HD000040"/>
  <templateId root="2.16.840.1.113883.10.20.22.1.1" extension="2015-08-01"/>
  <templateId root="2.16.840.1.113883.10.20.22.1.2" extension="2015-08-01"/>
  <id root="${documentUuid}"/>
  <code code="34133-9" codeSystem="2.16.840.1.113883.6.1" codeSystemName="LOINC" displayName="Summarization of Episode Note"/>
  <title>${x(data.record_classification.banner)} — ${x(data.identity.display_name)} Synthetic CCD${isTrueDateFrame(data) ? ` — ${x(TRUE_DATE_NOTICE)}` : ""}</title>
  <effectiveTime value="20261101120000-0500"/>
  <confidentialityCode code="N" codeSystem="2.16.840.1.113883.5.25"/>
  <languageCode code="en-US"/>
  <setId root="${deterministicUuid(`${data.case_id}|ccd-set`)}"/>
  <versionNumber value="1"/>
${recordTarget}
  <author>
    <time value="20261101120000-0500"/>
    <assignedAuthor>
      <id root="${authorUuid}"/>
      <addr nullFlavor="UNK"/><telecom nullFlavor="UNK"/>
      <assignedPerson><name>${clinician.given.map(part => `<given>${x(part)}</given>`).join("")}<family>${x(clinician.family)}</family><suffix>${x(clinician.suffix)}</suffix></name></assignedPerson>
      <representedOrganization><id root="${custodianUuid}"/><name>${x(facility)}</name></representedOrganization>
    </assignedAuthor>
  </author>
${custodianXml}
  <documentationOf>
    <serviceEvent classCode="PCPR"><effectiveTime><low value="${compactDate(data.synthetic_episode.index_date)}"/><high value="${compactDate(data.synthetic_episode.visit_schedule.at(-1).date)}"/></effectiveTime></serviceEvent>
  </documentationOf>
  <component>
    <structuredBody>
      ${section({ templateRoot: "2.16.840.1.113883.10.20.22.2.12", code: "29299-5", display: "Reason for visit", title: "Reason for Visit", text: reasonText })}
      ${section({ templateRoot: "2.16.840.1.113883.10.20.22.2.6.1", extension: "2015-08-01", code: "48765-2", display: "Allergies and adverse reactions Document", title: "Allergies and Intolerances", text: table(["Allergy", "Reaction", "Status", "Evidence"], allergyRows), entries: allergyEntries })}
      ${clinical.medications.length
        ? section({ templateRoot: "2.16.840.1.113883.10.20.22.2.1.1", extension: "2014-06-09", code: "10160-0", display: "History of Medication use Narrative", title: "Medications", text: table(["Medication", "Frequency", "Route", "Dates", "Status", "Evidence"], medicationRows), entries: medicationEntries })
        : emptySection({ templateRoot: "2.16.840.1.113883.10.20.22.2.1.1", extension: "2014-06-09", code: "10160-0", title: "Medications", explanation: "No current medications. The synthetic care plan does not include medication." })}
      ${clinical.procedures.length
        ? section({ templateRoot: "2.16.840.1.113883.10.20.22.2.7.1", extension: "2014-06-09", code: "47519-4", display: "History of Procedures Document", title: "Procedures", text: table(["Procedure", "Dates", "Status", "Evidence"], procedureRows), entries: procedureEntries })
        : emptySection({ templateRoot: "2.16.840.1.113883.10.20.22.2.7.1", extension: "2014-06-09", code: "47519-4", title: "Procedures", explanation: "No procedures recorded." })}
      ${clinical.immunizations.length
        ? section({ templateRoot: "2.16.840.1.113883.10.20.22.2.2.1", extension: "2015-08-01", code: "11369-6", display: "History of Immunization Narrative", title: "Immunizations", text: table(["Date", "Vaccine", "Status", "Evidence"], immunizationRows), entries: immunizationEntries })
        : emptySection({ templateRoot: "2.16.840.1.113883.10.20.22.2.2.1", extension: "2015-08-01", code: "11369-6", title: "Immunizations", explanation: "No immunizations recorded." })}
      ${section({ templateRoot: "2.16.840.1.113883.10.20.22.2.20", extension: "2015-08-01", code: "11348-0", display: "History of Past illness note", title: "Past Medical History", text: pastHistoryText })}
      ${section({ templateRoot: "2.16.840.1.113883.10.20.22.2.15", extension: "2015-08-01", code: "10157-6", display: "History of family member diseases note", title: "Family History", text: familyText, entries: familyEntries })}
      ${section({ templateRoot: "2.16.840.1.113883.10.20.22.2.58", extension: "2015-08-01", code: "75310-3", display: "Health concerns document", title: "Health Concerns", text: table(["Concern", "Status", "Evidence"], concernRows), entries: concernEntries })}
      ${section({ templateRoot: "2.16.840.1.113883.10.20.22.2.8", code: "51848-0", display: "Evaluation note", title: "Assessment", text: assessmentText })}
      <component>
        <section>
          <templateId root="2.16.840.1.113883.10.20.22.2.5.1" extension="2015-08-01"/>
          <code code="11450-4" codeSystem="2.16.840.1.113883.6.1" displayName="Problem List"/>
          <title>Problems</title>
          <text><table><thead><tr><th>Problem</th><th>Clinical status</th><th>Verification</th><th>Code</th><th>Provenance</th></tr></thead><tbody>${problemNarrative}</tbody></table></text>
          ${problemEntries}
        </section>
      </component>
      <component>
        <section>
          <templateId root="2.16.840.1.113883.10.20.22.2.3.1" extension="2015-08-01"/>
          <code code="30954-2" codeSystem="2.16.840.1.113883.6.1" displayName="Relevant Diagnostic Tests and/or Laboratory Data"/>
          <title>Results</title>
          <text><table><thead><tr><th>Date</th><th>Measure</th><th>Value</th><th>Unit</th><th>Reference range</th><th>Flag</th><th>Provenance</th></tr></thead><tbody>${resultNarrative}</tbody></table></text>
          ${resultEntries}
        </section>
      </component>
      <component><section><templateId root="2.16.840.1.113883.10.20.22.2.17" extension="2015-08-01"/><code code="29762-2" codeSystem="2.16.840.1.113883.6.1" displayName="Social history Narrative"/><title>Social History</title><text>${narrativeList(data.clinical.social_history)}</text></section></component>
      <component><section><templateId root="2.16.840.1.113883.10.20.22.2.4.1" extension="2015-08-01"/><code code="8716-3" codeSystem="2.16.840.1.113883.6.1" displayName="Vital signs"/><title>Vital Signs</title><text><table><thead><tr><th>Date</th><th>Measure</th><th>Value</th><th>Unit</th><th>Provenance</th></tr></thead><tbody>${vitalNarrative}</tbody></table></text>${vitalEntries}</section></component>
      <component>
        <section>
          <templateId root="2.16.840.1.113883.10.20.22.2.22" extension="2015-08-01"/>
          <code code="46240-8" codeSystem="2.16.840.1.113883.6.1" displayName="History of Encounters"/>
          <title>Encounters</title>
          <text><table><thead><tr><th>Date</th><th>Purpose</th><th>Status</th><th>Provenance</th></tr></thead><tbody>${encounterNarrative}</tbody></table></text>
          ${encounterEntries}
        </section>
      </component>
      <component>
        <section>
          <templateId root="2.16.840.1.113883.10.20.22.2.10" extension="2014-06-09"/>
          <code code="18776-5" codeSystem="2.16.840.1.113883.6.1" displayName="Plan of care note"/>
          <title>Plan of Treatment</title>
          <text><table><thead><tr><th>Intervention</th><th>Status</th><th>Guideline</th><th>Provenance</th></tr></thead><tbody>${interventionNarrative}</tbody></table></text>
        </section>
      </component>
      <component>
        <section>
          <templateId root="2.16.840.1.113883.10.20.22.2.60"/>
          <code code="61146-7" codeSystem="2.16.840.1.113883.6.1" displayName="Goals"/>
          <title>Goals</title>
          <text><table><thead><tr><th>Goal</th><th>Target</th><th>Status</th><th>Outcome</th><th>Provenance</th></tr></thead><tbody>${goalNarrative}</tbody></table></text>
          ${goalEntries}
        </section>
      </component>
      <component>
        <section>
          <templateId root="2.16.840.1.113883.10.20.22.2.14" extension="2014-06-09"/>
          <code code="47420-5" codeSystem="2.16.840.1.113883.6.1" displayName="Functional status assessment note"/>
          <title>Functional Status</title><text>${narrativeList(data.clinical.functional_status)}</text>
        </section>
      </component>
      <component>
        <section>
          <templateId root="2.16.840.1.113883.10.20.22.2.56" extension="2015-08-01"/>
          <code code="10190-7" codeSystem="2.16.840.1.113883.6.1" displayName="Mental status Narrative"/>
          <title>Mental Status</title>
          <text>${narrativeList(data.clinical.mental_status)}${data.clinical.safety_assessment ? `<paragraph>Structured synthetic safety assessment on ${x(data.clinical.safety_assessment.date)}: current ideation ${x(data.clinical.safety_assessment.current_ideation)}, intent ${x(data.clinical.safety_assessment.intent)}, plan ${x(data.clinical.safety_assessment.plan)}. ${x(data.clinical.safety_assessment.disposition)} [S]</paragraph>` : ""}</text>
        </section>
      </component>
    </structuredBody>
  </component>
</ClinicalDocument>
`;

// ---------------------------------------------------------------------------
// Note documents. Each visit and each step of the referral loop is its own C-CDA R2.1
// document, built from the same case and the same section builders as the CCD.
// ---------------------------------------------------------------------------
const visits = data.synthetic_episode.visit_schedule;
const firstVisitDate = visits[0].date;
const encounterOf = (visit) => clinical.encounters.find(encounter => encounter.id === visit.encounter_id);
const timestamp = (date) => `${compactDate(date)}120000-0500`;
const consultant = data.identity.synthetic_identity.fictional_consultant;
const consultantPerson = parseClinician(consultant.name);
const consultantUuid = deterministicUuid(`${facility}|${consultant.name}|synthetic`);
// Shared with the FHIR ServiceRequest, so the referral, its order, and the consultation link up.
const referralOrderUuid = uuid("referral-order");
const referralStep = data.care_plan.interventions.find(isConsultStep);
const consultVisit = visits[1] ?? visits[0];
const activeProblems = activeProblemsAt(data, visits[0].date);
const personName = (person) => `<name>${person.given.map(part => `<given>${x(part)}</given>`).join("")}<family>${x(person.family)}</family>${person.suffix ? `<suffix>${x(person.suffix)}</suffix>` : ""}</name>`;
const organization = `<representedOrganization><id root="${custodianUuid}"/><name>${x(facility)}</name>${facilityContact}</representedOrganization>`;
const assignedEntity = (person, personUuid) => `<assignedEntity><id root="${personUuid}"/><addr nullFlavor="UNK"/><telecom nullFlavor="UNK"/><assignedPerson>${personName(person)}</assignedPerson>${organization}</assignedEntity>`;
const authorBlock = (person, personUuid, date) => `  <author>
    <time value="${timestamp(date)}"/>
    <assignedAuthor><id root="${personUuid}"/><addr nullFlavor="UNK"/><telecom nullFlavor="UNK"/><assignedPerson>${personName(person)}</assignedPerson>${organization}</assignedAuthor>
  </author>`;
const p = (text, grade = "S") => `<paragraph>${x(text)} [${grade}]</paragraph>`;
const list = (items) => items.length ? `<list>${items.map(item => `<item>${item}</item>`).join("")}</list>` : "";
const plain = ({ templateRoot, extension, code, display, title, text, entries = "" }) => section({ templateRoot, extension, code, display, title, text, entries });

// Sections specific to note documents.
const historicalBasis = () => {
  const { included, laterCount } = claimsAtIndex(data);
  return `<paragraph>Historical basis. These claims are historical evidence, not findings from a modern examination.</paragraph>${list(included.map(claim => `${x(claim.statement)} [${claim.evidence_grade}]`))}${laterCount ? `<paragraph>${x(laterClaimsNote(laterCount))}</paragraph>` : ""}`;
};
const hpiSection = (lead) => plain({
  templateRoot: "1.3.6.1.4.1.19376.1.5.3.1.3.4", code: "10164-2", display: "History of Present illness Narrative", title: "History of Present Illness",
  text: `${p(lead)}${list(data.care_plan.health_concerns.map(concern => `${x(sentence(concern.display))} [${grade(concern)}]`))}${historicalBasis()}`,
});
const reasonForVisitSection = (visit) => plain({
  templateRoot: "2.16.840.1.113883.10.20.22.2.12", code: "29299-5", display: "Reason for visit", title: "Reason for Visit",
  text: p(`${encounterOf(visit)?.display ?? visit.purpose}`),
});
const reviewOfSystemsSection = () => plain({
  templateRoot: "1.3.6.1.4.1.19376.1.5.3.1.3.18", code: "10187-3", display: "Review of systems Narrative", title: "Review of Systems",
  text: p(`Positive for the concerns in the history of present illness. ${clinical.mental_status.map(item => sentence(item.display)).join(" ")} No other systems reported as affected in this synthetic episode.`),
});
const generalStatusSection = () => plain({
  templateRoot: "2.16.840.1.113883.10.20.2.5", code: "10210-3", display: "Physical findings of General status Narrative", title: "General Status",
  text: p(`Alert and engaged. ${clinical.functional_status.map(item => sentence(item.display)).join(" ")}`),
});
const safetyText = () => {
  const safety = clinical.safety_assessment;
  if (!safety) return "";
  return p(`Structured safety assessment: current ideation ${safety.current_ideation}, intent ${safety.intent}, plan ${safety.plan}, access to means reviewed: ${safety.access_reviewed ? "yes" : "no"}. ${sentence(safety.disposition)}`);
};
const physicalExamSection = (date) => {
  const set = clinical.vital_sign_sets.find(item => item.date === date);
  const vitalsLine = set ? `Vital signs recorded on ${set.date}; see the Vital Signs section.` : "Vital signs not recorded at this visit.";
  return plain({
    templateRoot: "2.16.840.1.113883.10.20.2.10", extension: "2015-08-01", code: "29545-1", display: "Physical findings Narrative", title: "Physical Exam",
    text: `${p(`${vitalsLine} Mental status: ${clinical.mental_status.map(item => item.display).join("; ")}. The physical examination is limited to the findings relevant to this synthetic episode.`)}${safetyText()}`,
  });
};
const subjectiveSection = (visit, followUp) => plain({
  templateRoot: "2.16.840.1.113883.10.20.21.2.2", code: "61150-9", display: "Subjective Narrative", title: "Subjective",
  text: p(`The patient attends this ${followUp ? "follow-up" : "visit"} for ${midSentence(encounterOf(visit)?.display ?? "longitudinal care")}.`),
});
const objectiveSection = (visit) => {
  const changes = resultChanges(data, visit.date);
  const observed = clinical.observations.filter(item => item.effective_date === visit.date);
  return plain({
    templateRoot: "2.16.840.1.113883.10.20.21.2.1", code: "61149-1", display: "Objective Narrative", title: "Objective",
    text: `${p(observed.length ? `${observed.map(item => `${labelOf(item)}: ${withUnit(item)}`).join("; ")}.` : "No condition-specific results at this visit.")}${changes.length ? `<paragraph>Change since baseline:</paragraph>${list(changes.map(({ baseline, current }) => `${x(labelOf(current))}: ${x(withUnit(baseline))} at baseline, ${x(withUnit(current))} at this visit [S]`))}` : ""}`,
  });
};
const resultsSection = (date) => {
  const keep = (observation) => observation.effective_date === date;
  return clinical.observations.some(keep)
    ? section({ templateRoot: "2.16.840.1.113883.10.20.22.2.3.1", extension: "2015-08-01", code: "30954-2", display: "Relevant Diagnostic Tests and/or Laboratory Data", title: "Results", text: table(["Date", "Measure", "Value", "Unit", "Reference range", "Flag", "Provenance"], resultNarrativeFor(keep)), entries: resultEntriesFor(keep, `|${date}`) })
    : emptySection({ templateRoot: "2.16.840.1.113883.10.20.22.2.3.1", extension: "2015-08-01", code: "30954-2", title: "Results", explanation: "No results recorded at this visit." });
};
const vitalsSection = (date) => {
  const keep = (set) => set.date === date;
  return clinical.vital_sign_sets.some(keep)
    ? section({ templateRoot: "2.16.840.1.113883.10.20.22.2.4.1", extension: "2015-08-01", code: "8716-3", display: "Vital signs", title: "Vital Signs", text: table(["Date", "Measure", "Value", "Unit", "Provenance"], vitalNarrativeFor(keep)), entries: vitalEntriesFor(keep) })
    : emptySection({ templateRoot: "2.16.840.1.113883.10.20.22.2.4.1", extension: "2015-08-01", code: "8716-3", title: "Vital Signs", explanation: "Vital signs not recorded at this visit." });
};
const allergiesSection = () => section({ templateRoot: "2.16.840.1.113883.10.20.22.2.6.1", extension: "2015-08-01", code: "48765-2", display: "Allergies and adverse reactions Document", title: "Allergies and Intolerances", text: table(["Allergy", "Reaction", "Status", "Evidence"], allergyRows), entries: allergyEntries });
const medicationsSection = () => clinical.medications.length
  ? section({ templateRoot: "2.16.840.1.113883.10.20.22.2.1.1", extension: "2014-06-09", code: "10160-0", display: "History of Medication use Narrative", title: "Medications", text: table(["Medication", "Frequency", "Route", "Dates", "Status", "Evidence"], medicationRows), entries: medicationEntries })
  : emptySection({ templateRoot: "2.16.840.1.113883.10.20.22.2.1.1", extension: "2014-06-09", code: "10160-0", title: "Medications", explanation: "No current medications. The synthetic care plan does not include medication." });
const problemsSection = (date) => `
<component>
  <section>
    <templateId root="2.16.840.1.113883.10.20.22.2.5.1" extension="2015-08-01"/>
    <code code="11450-4" codeSystem="2.16.840.1.113883.6.1" displayName="Problem List"/>
    <title>Problems</title>
    <text><table><thead><tr><th>Problem</th><th>Clinical status</th><th>Verification</th><th>Code</th><th>Provenance</th></tr></thead><tbody>${problemNarrativeFor(date)}</tbody></table></text>
    ${problemEntriesFor(date)}
  </section>
</component>`;
const pastHistorySection = () => section({ templateRoot: "2.16.840.1.113883.10.20.22.2.20", extension: "2015-08-01", code: "11348-0", display: "History of Past illness note", title: "Past Medical History", text: pastHistoryText });
const familySection = () => section({ templateRoot: "2.16.840.1.113883.10.20.22.2.15", extension: "2015-08-01", code: "10157-6", display: "History of family member diseases note", title: "Family History", text: familyText, entries: familyEntries });
const socialSection = () => `<component><section><templateId root="2.16.840.1.113883.10.20.22.2.17" extension="2015-08-01"/><code code="29762-2" codeSystem="2.16.840.1.113883.6.1" displayName="Social history Narrative"/><title>Social History</title><text>${narrativeList(clinical.social_history)}</text></section></component>`;
const assessmentSection = (extra = "", date) => section({
  templateRoot: "2.16.840.1.113883.10.20.22.2.8", code: "51848-0", display: "Evaluation note", title: "Assessment",
  text: `${list(activeProblemsAt(data, date).map(problem => `${x(problem.display)}: ${x(problem.clinical_status)}, ${x(problem.verification_status)} [${grade(problem)}]`))}${extra}`,
});
const guidelineRefs = (item) => data.care_plan.guidelines.filter(g => (item.guideline_ids ?? []).includes(g.guideline_id)).map(g => `${g.title} (${g.version_or_year})`).join("; ");
const interventionItems = (items) => items.map(item => `${x(item.display)}${guidelineRefs(item) ? `. Guideline: ${x(guidelineRefs(item))}` : ""} [${grade(item)}]`);
const referralOrderEntry = (status) => `
  <entry>
    <act classCode="ACT" moodCode="RQO">
      <templateId root="2.16.840.1.113883.10.20.22.4.39" extension="2014-06-09"/>
      <id root="${referralOrderUuid}"/>
      <code code="3457005" codeSystem="2.16.840.1.113883.6.96" displayName="Patient referral"/>
      <text><reference value="#referral-order"/></text>
      <statusCode code="${status}"/>
      <effectiveTime value="${compactDate(firstVisitDate)}"/>
    </act>
  </entry>`;
const referralOrderItem = `<item ID="referral-order">Referral to ${x(consultant.specialty.toLowerCase())}, ${x(consultant.name)}, ordered ${x(firstVisitDate)} [S]</item>`;
const planSection = ({ items, withOrder = false }) => section({
  templateRoot: "2.16.840.1.113883.10.20.22.2.10", extension: "2014-06-09", code: "18776-5", display: "Plan of care note", title: "Plan of Treatment",
  text: `<list>${items.map(item => `<item>${item}</item>`).join("")}${withOrder ? referralOrderItem : ""}</list>`,
  entries: withOrder ? referralOrderEntry("active") : "",
});
const followUpPlanItems = (visit, n) => {
  const next = nextScheduledVisit(data, n);
  const changes = medicationChanges(data, visit);
  return [
    ...(changes.length ? changes.map(({ change, med }) => `Medication: ${x(change.toLowerCase())}, ${x(med.display)} [S]`) : ["No medication changes [S]"]),
    ...goalProgress(data, visit).map(({ goal, due }) => due ? `Goal: ${x(sentence(goal.display))} Outcome by ${x(goal.target_date)}: ${x(goal.outcome)} [S]` : `Goal: ${x(sentence(goal.display))} In progress; target ${x(goal.target_date)} [S]`),
    `Continue the care plan agreed on ${x(firstVisitDate)} [S]`,
    next ? `Next visit ${x(next.date)}: ${x(midSentence(encounterOf(next)?.display ?? next.encounter_id))} [S]` : `Scheduled episode complete. Continue routine follow-up${clinical.safety_assessment ? " and the safety plan" : ""} [S]`,
  ];
};
const reasonForReferralSection = () => plain({
  templateRoot: "1.3.6.1.4.1.19376.1.5.3.1.3.1", extension: "2014-06-09", code: "42349-1", display: "Reason for referral (narrative)", title: "Reason for Referral",
  text: `${p(`Please evaluate and advise on ${activeProblems.map(problem => midSentence(problem.coding?.[0]?.display ?? problem.display)).join(" and ")}.`)}${referralStep ? p(sentence(referralStep.display)) : ""}`,
});

// Full encounter notes: chief complaint, HPI, review of systems, examination, and a combined
// Assessment and Plan section (the Progress Note template forbids it alongside separate
// Assessment or Plan of Treatment sections).
const chiefComplaintSection = (doc) => plain({
  templateRoot: "1.3.6.1.4.1.19376.1.5.3.1.1.13.2.1", code: "10154-3", display: "Chief complaint Narrative - Reported", title: "Chief Complaint",
  text: p(sentence(doc.chief_complaint)),
});
const fullHpiSection = (doc) => plain({
  templateRoot: "1.3.6.1.4.1.19376.1.5.3.1.3.4", code: "10164-2", display: "History of Present illness Narrative", title: "History of Present Illness",
  text: `${p(doc.hpi.narrative)}${doc.hpi.elements?.length ? table(["Element", "Detail"], doc.hpi.elements.map(e => `<tr><td>${x(e.label)}</td><td>${x(e.value)}</td></tr>`).join("")) : ""}${doc.health_risk_assessment?.length ? `<paragraph>Health risk assessment. ${x(sentence(doc.health_risk_assessment_method ?? "Completed by the patient before the visit and reviewed during the visit"))} [S]</paragraph>${table(["Domain", "Finding"], doc.health_risk_assessment.map(e => `<tr><td>${x(e.domain)}</td><td>${x(e.finding)}</td></tr>`).join(""))}` : ""}`,
});
const fullRosSection = (doc) => plain({
  templateRoot: "1.3.6.1.4.1.19376.1.5.3.1.3.18", code: "10187-3", display: "Review of systems Narrative - Reported", title: "Review of Systems",
  text: `${table(["System", "Result", "Finding"], doc.ros.map(e => `<tr><td>${x(e.system)}</td><td>${e.status === "positive" ? "Positive" : "Negative"}</td><td>${x(e.finding)}</td></tr>`).join(""))}${p(`${doc.ros.length} systems reviewed.`)}`,
});
const fullExamSection = (doc, date) => plain({
  templateRoot: "2.16.840.1.113883.10.20.2.10", extension: "2015-08-01", code: "29545-1", display: "Physical findings note", title: "Physical Exam",
  text: `${p(clinical.vital_sign_sets.some(item => item.date === date) ? `Vital signs recorded on ${date}; see the Vital Signs section.` : "Vital signs not recorded at this visit.")}${table(["System", "Finding"], doc.exam.map(e => `<tr><td>${x(e.system)}</td><td>${x(e.finding)}</td></tr>`).join(""))}`,
});
const assessmentAndPlanSection = (doc, n) => {
  const next = nextScheduledVisit(data, n);
  const items = doc.assessment_plan.map(item => {
    const code = problemById.get(item.problem_id)?.coding?.[0]?.code;
    return `<item><content styleCode="Bold">${x(item.display)}${code ? ` (${x(code)})` : ""}</content>. ${x(sentence(item.assessment))} [S]${list(item.plan.map(step => x(sentence(step))))}</item>`;
  });
  const prevention = doc.prevention_plan?.length
    ? `<paragraph>Personalized prevention plan. A written copy was given to the patient. [S]</paragraph>${table(["Service", "Status", "Detail"], doc.prevention_plan.map(e => `<tr><td>${x(e.service)}</td><td>${PREVENTION_STATUS[e.status]}</td><td>${x(e.detail)}</td></tr>`).join(""))}`
    : "";
  const given = immunizationsOn(data, visits[n - 1].date);
  const monitoring = doc.monitoring?.length
    ? `<paragraph>Protocol monitoring: items the monitoring protocol calls for at this visit. [S]</paragraph>${table(["Domain", "Measure", "Interval", "Status", "Detail"], doc.monitoring.map(e => `<tr><td>${MONITORING_DOMAINS[e.domain]}</td><td>${x(e.measure)}</td><td>${x(e.cadence)}</td><td>${PREVENTION_STATUS[e.status]}</td><td>${x(e.detail)}</td></tr>`).join(""))}`
    : "";
  const goals = isChronicCare(data, visits[n - 1]) && n > 1
    ? `<paragraph>Goal progress:</paragraph>${list(goalProgress(data, visits[n - 1]).map(({ goal, due }) => due ? `${x(sentence(goal.display))} Outcome by ${x(goal.target_date)}: ${x(goal.outcome)} [S]` : `${x(sentence(goal.display))} In progress; target ${x(goal.target_date)} [S]`))}`
    : "";
  return plain({
    templateRoot: "2.16.840.1.113883.10.20.22.2.9", extension: "2014-06-09", code: "51847-2", display: "Evaluation + Plan note", title: "Assessment and Plan",
    text: `<list listType="ordered">${items.join("")}</list>${monitoring}${goals}${prevention}${given.length ? `<paragraph>Immunizations given today: ${given.map(item => x(item.display)).join("; ")} [S]</paragraph>` : ""}${doc.guideline_ids?.length ? `<paragraph>Guideline basis: ${guidelinesFor(data, doc.guideline_ids).map(g => `${x(g.title)} (${x(g.version_or_year)})`).join("; ")}</paragraph>` : ""}${p(`Follow-up: ${sentence(doc.follow_up)}${next ? ` Next scheduled visit ${next.date}: ${midSentence(encounterOf(next)?.display ?? next.encounter_id)}.` : ""}`)}`,
  });
};
const advanceDirectivesSection = (doc) => plain({
  templateRoot: "2.16.840.1.113883.10.20.22.2.21", extension: "2015-08-01", code: "42348-3", display: "Advance directives", title: "Advance Care Planning",
  text: p(doc.advance_care_planning),
});

// Document header. Every document carries the same patient, birth date, and MRN.
// Note types require the "entries optional" section templates; the entries-required versions
// used here conform to them, so both IDs are declared.
const OPTIONAL_TEMPLATES = [
  ["2.16.840.1.113883.10.20.22.2.6.1", "2015-08-01", "2.16.840.1.113883.10.20.22.2.6"],
  ["2.16.840.1.113883.10.20.22.2.1.1", "2014-06-09", "2.16.840.1.113883.10.20.22.2.1"],
  ["2.16.840.1.113883.10.20.22.2.3.1", "2015-08-01", "2.16.840.1.113883.10.20.22.2.3"],
  ["2.16.840.1.113883.10.20.22.2.4.1", "2015-08-01", "2.16.840.1.113883.10.20.22.2.4"],
  ["2.16.840.1.113883.10.20.22.2.5.1", "2015-08-01", "2.16.840.1.113883.10.20.22.2.5"],
];
const withOptionalTemplates = (xmlText) => OPTIONAL_TEMPLATES.reduce((text, [root, extension, optional]) =>
  text.replaceAll(`<templateId root="${root}" extension="${extension}"/>`, `<templateId root="${optional}" extension="${extension}"/><templateId root="${root}" extension="${extension}"/>`), xmlText);
const noteDocument = ({ key, templateRoot, code, display, title, date, author, visit, inFulfillmentOf = "", recipient = "", serviceEventTemplate = "", body }) => {
  const encounter = encounterOf(visit);
  const [person, personUuid] = author;
  return `<?xml version="1.0" encoding="UTF-8"?>
<ClinicalDocument xmlns="urn:hl7-org:v3" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  <realmCode code="US"/>
  <typeId root="2.16.840.1.113883.1.3" extension="POCD_HD000040"/>
  <templateId root="2.16.840.1.113883.10.20.22.1.1" extension="2015-08-01"/>
  <templateId root="${templateRoot}" extension="2015-08-01"/>
  <id root="${uuid("document", key)}"/>
  <code code="${code}" codeSystem="2.16.840.1.113883.6.1" codeSystemName="LOINC" displayName="${x(display)}"/>
  <title>${x(data.record_classification.banner)} — ${x(title)} — ${x(data.identity.display_name)}${isTrueDateFrame(data) ? ` — ${x(TRUE_DATE_NOTICE)}` : ""}</title>
  <effectiveTime value="${timestamp(date)}"/>
  <confidentialityCode code="N" codeSystem="2.16.840.1.113883.5.25"/>
  <languageCode code="en-US"/>
  <setId root="${uuid("document-set", key)}"/>
  <versionNumber value="1"/>
${recordTarget}
${authorBlock(person, personUuid, date)}
${custodianXml}
${recipient}  <legalAuthenticator>
    <time value="${timestamp(date)}"/>
    <signatureCode code="S"/>
    ${assignedEntity(person, personUuid)}
  </legalAuthenticator>
${inFulfillmentOf}  <documentationOf>
    <serviceEvent classCode="PCPR">${serviceEventTemplate}<effectiveTime><low value="${compactDate(date)}"/><high value="${compactDate(date)}"/></effectiveTime><performer typeCode="PRF">${assignedEntity(person, personUuid)}</performer></serviceEvent>
  </documentationOf>
  <componentOf>
    <encompassingEncounter>
      <id root="${uuid(encounter.id)}"/>
      ${encounter.type_coding ? `<code ${cd(encounter.type_coding)}><originalText>${x(encounter.display)}</originalText></code>` : `<code nullFlavor="UNK"><originalText>${x(encounter.display)}</originalText></code>`}
      <effectiveTime><low value="${compactDate(date)}"/><high value="${compactDate(date)}"/></effectiveTime>
      <encounterParticipant typeCode="ATND">${assignedEntity(person, personUuid)}</encounterParticipant>
      <location><healthCareFacility><id root="${custodianUuid}"/><serviceProviderOrganization><id root="${custodianUuid}"/><name>${x(facility)}</name>${facilityContact}</serviceProviderOrganization></healthCareFacility></location>
    </encompassingEncounter>
  </componentOf>
  <component>
    <structuredBody>
${withOptionalTemplates(body.join("\n"))}
    </structuredBody>
  </component>
</ClinicalDocument>
`;
};

const primary = [clinician, authorUuid];
const consultantAuthor = [consultantPerson, consultantUuid];
const noteDocuments = new Map();

noteDocuments.set("hp-01.xml", noteDocument({
  key: "hp-01", templateRoot: "2.16.840.1.113883.10.20.22.1.3", code: "34117-2", display: "History and physical note", title: "History and Physical",
  date: firstVisitDate, author: primary, visit: visits[0],
  body: [
    reasonForVisitSection(visits[0]),
    hpiSection("This fictional modern episode addresses the presenting concerns below."),
    pastHistorySection(), familySection(), socialSection(),
    allergiesSection(), medicationsSection(), reviewOfSystemsSection(), generalStatusSection(),
    physicalExamSection(firstVisitDate), vitalsSection(firstVisitDate), resultsSection(firstVisitDate),
    problemsSection(firstVisitDate), assessmentSection("", firstVisitDate),
    planSection({ items: interventionItems(data.care_plan.interventions), withOrder: Boolean(referralStep) }),
  ],
}));

const labels = visitLabels(data);
visits.forEach((visit, index) => {
  const n = index + 1;
  const followUp = n > 1;
  const doc = documentationOf(data, visit);
  noteDocuments.set(`progress-${String(n).padStart(2, "0")}.xml`, noteDocument({
    key: `progress-${n}`, templateRoot: "2.16.840.1.113883.10.20.22.1.9", code: "11506-3", display: "Progress note", title: doc ? `Progress Note ${n} — ${labels[index]}` : `Progress Note ${n}`,
    date: visit.date, author: primary, visit,
    serviceEventTemplate: `<templateId root="2.16.840.1.113883.10.20.21.3.1"/>`,
    body: doc ? [
      chiefComplaintSection(doc), fullHpiSection(doc), fullRosSection(doc),
      medicationsSection(), allergiesSection(),
      vitalsSection(visit.date), resultsSection(visit.date), fullExamSection(doc, visit.date),
      problemsSection(visit.date), assessmentAndPlanSection(doc, n),
      ...(doc.advance_care_planning ? [advanceDirectivesSection(doc)] : []),
    ] : [
      subjectiveSection(visit, followUp), objectiveSection(visit),
      vitalsSection(visit.date), resultsSection(visit.date),
      medicationsSection(), allergiesSection(), problemsSection(visit.date),
      assessmentSection("", visit.date),
      planSection({ items: followUp ? followUpPlanItems(visit, n) : interventionItems(data.care_plan.interventions) }),
    ],
  }));
});

if (referralStep) {
  noteDocuments.set("referral-01.xml", noteDocument({
    key: "referral-01", templateRoot: "2.16.840.1.113883.10.20.22.1.14", code: "57133-1", display: "Referral note", title: `${consultant.specialty} Referral`,
    date: firstVisitDate, author: primary, visit: visits[0],
    recipient: `  <informationRecipient>
    <intendedRecipient><informationRecipient>${personName(consultantPerson)}</informationRecipient><receivedOrganization><name>${x(facility)}</name></receivedOrganization></intendedRecipient>
  </informationRecipient>
`,
    body: [
      reasonForReferralSection(),
      hpiSection("Referral for the concerns below, which began before the index visit."),
      allergiesSection(), medicationsSection(), problemsSection(firstVisitDate),
      pastHistorySection(), familySection(), socialSection(),
      vitalsSection(firstVisitDate), resultsSection(firstVisitDate),
      assessmentSection("", firstVisitDate),
      planSection({ items: interventionItems(data.care_plan.interventions.filter(item => !isConsultStep(item))), withOrder: true }),
    ],
  }));

  noteDocuments.set("consult-01.xml", noteDocument({
    key: "consult-01", templateRoot: "2.16.840.1.113883.10.20.22.1.4", code: "11488-4", display: "Consult note", title: `${consultant.specialty} Consultation`,
    date: consultVisit.date, author: consultantAuthor, visit: consultVisit,
    inFulfillmentOf: `  <inFulfillmentOf>
    <order><id root="${referralOrderUuid}"/></order>
  </inFulfillmentOf>
`,
    body: [
      reasonForReferralSection(),
      hpiSection(`Seen in ${consultant.specialty.toLowerCase()} consultation at the request of ${data.identity.synthetic_identity.fictional_primary_clinician}.`),
      allergiesSection(), medicationsSection(), problemsSection(consultVisit.date),
      physicalExamSection(consultVisit.date), resultsSection(consultVisit.date),
      assessmentSection(p("Coordinated follow-up with the primary clinician is appropriate."), consultVisit.date),
      planSection({ items: interventionItems(data.care_plan.interventions.filter(item => !isConsultStep(item))) }),
    ],
  }));
}

await fs.mkdir(outputDir, { recursive: true });
const normalizedXml = xml.replace(/[ \t]+$/gm, "");
await fs.writeFile(path.join(outputDir, "ccda.xml"), normalizedXml, "utf8");
await fs.writeFile(path.join(outputDir, "ccda.html"), cdaToHtml(normalizedXml), "utf8");
const notesDir = path.join(outputDir, "ccda");
await fs.rm(notesDir, { recursive: true, force: true });
await fs.mkdir(notesDir, { recursive: true });
for (const [name, document] of noteDocuments) {
  const normalized = document.replace(/[ \t]+$/gm, "");
  await fs.writeFile(path.join(notesDir, name), normalized, "utf8");
  await fs.writeFile(path.join(notesDir, name.replace(/\.xml$/, ".html")), cdaToHtml(normalized), "utf8");
}
console.log(JSON.stringify({ case_id: data.case_id, output: path.join(outputDir, "ccda.xml"), documentUuid }));
