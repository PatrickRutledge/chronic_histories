import crypto from "node:crypto";
import fs from "node:fs/promises";
import path from "node:path";

const inputPath = process.argv[2];
if (!inputPath) {
  console.error("Usage: node scripts/generate_ccda.mjs <case.json>");
  process.exit(2);
}

const absoluteInput = path.resolve(inputPath);
const caseDir = path.dirname(absoluteInput);
const outputDir = path.join(caseDir, "generated");
const data = JSON.parse(await fs.readFile(absoluteInput, "utf8"));

const x = (value) => String(value ?? "")
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;")
  .replaceAll("'", "&apos;");

const compactDate = (value) => String(value).replaceAll("-", "");
const deterministicUuid = (seed) => {
  const hex = crypto.createHash("sha256").update(seed).digest("hex").slice(0, 32).split("");
  hex[12] = "4";
  hex[16] = ["8", "9", "a", "b"][Number.parseInt(hex[16], 16) % 4];
  const value = hex.join("");
  return `${value.slice(0, 8)}-${value.slice(8, 12)}-${value.slice(12, 16)}-${value.slice(16, 20)}-${value.slice(20)}`;
};

const documentUuid = deterministicUuid(`${data.case_id}|ccd|${data.schema_version}`);
const patientUuid = deterministicUuid(`${data.case_id}|patient`);
const authorUuid = deterministicUuid("AetherForge|Elena Marquez MD|synthetic");
const custodianUuid = deterministicUuid("AetherForge Veterans Health Center|synthetic");
const family = data.identity.display_name.trim().split(/\s+/).at(-1);
const given = data.identity.display_name.trim().split(/\s+/).slice(0, -1).join(" ");

const problemNarrative = data.clinical.problems.map((problem, index) => `
  <tr ID="problem-${index + 1}">
    <td>${x(problem.display)}</td><td>${x(problem.clinical_status)}</td><td>${x(problem.verification_status)}</td>
    <td>${x(problem.coding?.[0]?.code ?? "Uncoded")}</td><td>S — ${x(problem.provenance.synthetic_reason)}</td>
  </tr>`).join("");

const problemEntries = data.clinical.problems.map((problem, index) => {
  const coding = problem.coding?.[0];
  const id = deterministicUuid(`${data.case_id}|${problem.id}`);
  return `
  <entry typeCode="DRIV">
    <act classCode="ACT" moodCode="EVN">
      <templateId root="2.16.840.1.113883.10.20.22.4.3" extension="2015-08-01"/>
      <id root="${id}"/>
      <code code="CONC" codeSystem="2.16.840.1.113883.5.6" displayName="Concern"/>
      <statusCode code="active"/>
      <effectiveTime><low value="${compactDate(data.synthetic_episode.index_date)}"/></effectiveTime>
      <entryRelationship typeCode="SUBJ">
        <observation classCode="OBS" moodCode="EVN">
          <templateId root="2.16.840.1.113883.10.20.22.4.4" extension="2015-08-01"/>
          <id root="${deterministicUuid(`${data.case_id}|${problem.id}|observation`)}"/>
          <code code="55607006" codeSystem="2.16.840.1.113883.6.96" displayName="Problem"/>
          <text><reference value="#problem-${index + 1}"/></text>
          <statusCode code="completed"/>
          <effectiveTime><low value="${compactDate(data.synthetic_episode.index_date)}"/></effectiveTime>
          <value xsi:type="CD" code="${x(coding?.code ?? "UNK")}" codeSystem="2.16.840.1.113883.6.90" displayName="${x(coding?.display ?? problem.display)}"/>
        </observation>
      </entryRelationship>
    </act>
  </entry>`;
}).join("");

const resultNarrative = data.clinical.observations.map((observation, index) => `
  <tr ID="result-${index + 1}"><td>${x(observation.effective_date)}</td><td>${x(observation.display)}</td><td>${x(observation.value)}</td><td>${x(observation.unit)}</td><td>S</td></tr>`).join("");

const resultObservations = data.clinical.observations.map((observation, index) => {
  const coding = observation.coding?.[0];
  return `
      <component>
        <observation classCode="OBS" moodCode="EVN">
          <templateId root="2.16.840.1.113883.10.20.22.4.2" extension="2015-08-01"/>
          <id root="${deterministicUuid(`${data.case_id}|${observation.id}`)}"/>
          <code code="${x(coding.code)}" codeSystem="2.16.840.1.113883.6.1" displayName="${x(coding.display)}"/>
          <text><reference value="#result-${index + 1}"/></text>
          <statusCode code="completed"/>
          <effectiveTime value="${compactDate(observation.effective_date)}"/>
          <value xsi:type="PQ" value="${x(observation.value)}" unit="${x(observation.unit)}"/>
        </observation>
      </component>`;
}).join("");

const vitalNarrative = data.clinical.vital_sign_sets.flatMap((set, setIndex) => set.measurements.map((measurement, measurementIndex) => `
  <tr ID="vital-${setIndex + 1}-${measurementIndex + 1}"><td>${x(set.date)}</td><td>${x(measurement.display)}</td><td>${x(measurement.value)}</td><td>${x(measurement.unit)}</td><td>S</td></tr>`)).join("");
const vitalEntries = data.clinical.vital_sign_sets.map((set, setIndex) => `
  <entry typeCode="DRIV">
    <organizer classCode="CLUSTER" moodCode="EVN">
      <templateId root="2.16.840.1.113883.10.20.22.4.26" extension="2015-08-01"/>
      <id root="${deterministicUuid(`${data.case_id}|${set.id}`)}"/>
      <code code="46680005" codeSystem="2.16.840.1.113883.6.96" displayName="Vital signs"/>
      <statusCode code="completed"/><effectiveTime value="${compactDate(set.date)}"/>
      ${set.measurements.map((measurement, measurementIndex) => `<component><observation classCode="OBS" moodCode="EVN"><templateId root="2.16.840.1.113883.10.20.22.4.27" extension="2014-06-09"/><id root="${deterministicUuid(`${data.case_id}|${set.id}|${measurement.code}`)}"/><code code="${x(measurement.code)}" codeSystem="2.16.840.1.113883.6.1" displayName="${x(measurement.display)}"/><text><reference value="#vital-${setIndex + 1}-${measurementIndex + 1}"/></text><statusCode code="completed"/><effectiveTime value="${compactDate(set.date)}"/><value xsi:type="PQ" value="${x(measurement.value)}" unit="${x(measurement.unit)}"/></observation></component>`).join("")}
    </organizer>
  </entry>`).join("");
const narrativeList = (items) => `<list>${items.map(item => `<item>${x(item.display)} [S]</item>`).join("")}</list>`;

const encounterNarrative = data.clinical.encounters.map((encounter, index) => `
  <tr ID="encounter-${index + 1}"><td>${x(encounter.date)}</td><td>${x(encounter.display)}</td><td>${x(encounter.status)}</td><td>S</td></tr>`).join("");

const encounterEntries = data.clinical.encounters.map((encounter, index) => `
  <entry typeCode="DRIV">
    <encounter classCode="ENC" moodCode="EVN">
      <templateId root="2.16.840.1.113883.10.20.22.4.49" extension="2015-08-01"/>
      <id root="${deterministicUuid(`${data.case_id}|${encounter.id}`)}"/>
      <code nullFlavor="UNK"><originalText><reference value="#encounter-${index + 1}"/></originalText></code>
      <statusCode code="completed"/>
      <effectiveTime value="${compactDate(encounter.date)}"/>
    </encounter>
  </entry>`).join("");

const goalNarrative = data.care_plan.goals.map(goal => `
  <tr><td>${x(goal.display)}</td><td>${x(goal.target_date)}</td><td>${x(goal.status)}</td><td>${x(goal.outcome)}</td><td>S</td></tr>`).join("");

const interventionNarrative = data.care_plan.interventions.map(item => `
  <tr><td>${x(item.display)}</td><td>${x(item.status)}</td><td>${x((item.guideline_ids ?? []).join(", "))}</td><td>S</td></tr>`).join("");

const emptySection = ({ templateRoot, extension, code, title, explanation }) => `
<component>
  <section nullFlavor="NI">
    <templateId root="${templateRoot}" extension="${extension}"/>
    <code code="${code}" codeSystem="2.16.840.1.113883.6.1"/>
    <title>${x(title)}</title>
    <text><paragraph>${x(explanation)}</paragraph></text>
  </section>
</component>`;

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="ccda.xsl"?>
<ClinicalDocument xmlns="urn:hl7-org:v3" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  <realmCode code="US"/>
  <typeId root="2.16.840.1.113883.1.3" extension="POCD_HD000040"/>
  <templateId root="2.16.840.1.113883.10.20.22.1.1" extension="2015-08-01"/>
  <templateId root="2.16.840.1.113883.10.20.22.1.2" extension="2015-08-01"/>
  <id root="${documentUuid}"/>
  <code code="34133-9" codeSystem="2.16.840.1.113883.6.1" codeSystemName="LOINC" displayName="Summarization of Episode Note"/>
  <title>${x(data.record_classification.banner)} — ${x(data.identity.display_name)} Synthetic CCD</title>
  <effectiveTime value="20261101120000-0500"/>
  <confidentialityCode code="N" codeSystem="2.16.840.1.113883.5.25"/>
  <languageCode code="en-US"/>
  <setId root="${deterministicUuid(`${data.case_id}|ccd-set`)}"/>
  <versionNumber value="1"/>
  <recordTarget>
    <patientRole>
      <id root="${patientUuid}" extension="${x(data.identity.synthetic_identity.mrn)}"/>
      <addr nullFlavor="UNK"/>
      <telecom nullFlavor="UNK"/>
      <patient>
        <name use="L"><given>${x(given)}</given><family>${x(family)}</family></name>
        <administrativeGenderCode code="M" codeSystem="2.16.840.1.113883.5.1" displayName="Male"/>
        <birthTime value="${compactDate(data.identity.synthetic_identity.date_of_birth)}"/>
        <raceCode nullFlavor="ASKU"/>
        <ethnicGroupCode nullFlavor="ASKU"/>
        <languageCommunication><languageCode code="en"/><preferenceInd value="true"/></languageCommunication>
      </patient>
      <providerOrganization>
        <id root="${custodianUuid}"/>
        <name>${x(data.identity.synthetic_identity.fictional_facility)}</name>
      </providerOrganization>
    </patientRole>
  </recordTarget>
  <author>
    <time value="20261101120000-0500"/>
    <assignedAuthor>
      <id root="${authorUuid}"/>
      <addr nullFlavor="UNK"/><telecom nullFlavor="UNK"/>
      <assignedPerson><name><given>Elena</given><family>Marquez</family><suffix>MD</suffix></name></assignedPerson>
      <representedOrganization><id root="${custodianUuid}"/><name>${x(data.identity.synthetic_identity.fictional_facility)}</name></representedOrganization>
    </assignedAuthor>
  </author>
  <custodian>
    <assignedCustodian><representedCustodianOrganization><id root="${custodianUuid}"/><name>${x(data.identity.synthetic_identity.fictional_facility)}</name></representedCustodianOrganization></assignedCustodian>
  </custodian>
  <documentationOf>
    <serviceEvent classCode="PCPR"><effectiveTime><low value="${compactDate(data.synthetic_episode.index_date)}"/><high value="${compactDate(data.synthetic_episode.visit_schedule.at(-1).date)}"/></effectiveTime></serviceEvent>
  </documentationOf>
  <component>
    <structuredBody>
      ${emptySection({ templateRoot: "2.16.840.1.113883.10.20.22.2.6.1", extension: "2015-08-01", code: "48765-2", title: "Allergies and Intolerances", explanation: "No structured allergy assertion is available in this draft. The canonical synthetic episode records no known medication allergies pending clinical review." })}
      ${emptySection({ templateRoot: "2.16.840.1.113883.10.20.22.2.1.1", extension: "2014-06-09", code: "10160-0", title: "Medications", explanation: "No medications generated. The initial synthetic plan prioritizes psychotherapy and non-pharmacologic insomnia care." })}
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
          <text><table><thead><tr><th>Date</th><th>Measure</th><th>Value</th><th>Unit</th><th>Provenance</th></tr></thead><tbody>${resultNarrative}</tbody></table></text>
          <entry typeCode="DRIV">
            <organizer classCode="BATTERY" moodCode="EVN">
              <templateId root="2.16.840.1.113883.10.20.22.4.1" extension="2015-08-01"/>
              <id root="${deterministicUuid(`${data.case_id}|survey-results`)}"/>
              <code code="101697-1" codeSystem="2.16.840.1.113883.6.1" displayName="Post traumatic stress disorder checklist - civilian version DSM-5 [PCL-5]"/>
              <statusCode code="completed"/>
              ${resultObservations}
            </organizer>
          </entry>
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
          <text>${narrativeList(data.clinical.mental_status)}<paragraph>Structured synthetic safety assessment on ${x(data.clinical.safety_assessment.date)}: current ideation ${x(data.clinical.safety_assessment.current_ideation)}, intent ${x(data.clinical.safety_assessment.intent)}, plan ${x(data.clinical.safety_assessment.plan)}. ${x(data.clinical.safety_assessment.disposition)} [S]</paragraph></text>
        </section>
      </component>
    </structuredBody>
  </component>
</ClinicalDocument>
`;

await fs.mkdir(outputDir, { recursive: true });
await fs.writeFile(path.join(outputDir, "ccda.xml"), xml, "utf8");
console.log(JSON.stringify({ case_id: data.case_id, output: path.join(outputDir, "ccda.xml"), documentUuid }));
