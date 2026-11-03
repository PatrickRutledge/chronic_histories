import fs from "node:fs/promises";
import path from "node:path";
import { TRUE_DATE_NOTICE, frameLabel, isTrueDateFrame, outputDirFor } from "./lib/common.mjs";
import { activeProblemsAt, claimsAtIndex, labelOf, goalProgress as goalStatus, isConsultStep, laterClaimsNote, medicationChanges as medChanges, midSentence, resultChanges as changesAt, sentence, withUnit } from "./lib/episode.mjs";

const inputPath = process.argv[2];
if (!inputPath) throw new Error("Usage: node scripts/generate_supporting_docs.mjs <case.json>");
const casePath = path.resolve(inputPath);
const outputDir = outputDirFor(casePath);
const notesDir = path.join(outputDir, "notes");
const data = JSON.parse(await fs.readFile(casePath, "utf8"));
const { clinical, care_plan: care, identity } = data;
const visits = data.synthetic_episode.visit_schedule;
const encounters = new Map(clinical.encounters.map(x => [x.id, x]));
const evidence = x => x.provenance?.evidence_grade ?? x.evidence_grade ?? "S";
const bullets = items => items.map(x => `- ${x.display} **${evidence(x)}**`).join("\n");
const header = (title, date, author = identity.synthetic_identity.fictional_primary_clinician) => `# ${title}\n\n> **${data.record_classification.banner}**\n\n- Patient: ${identity.display_name} (real historical name used in a fictional teaching record)\n- Synthetic MRN: ${identity.synthetic_identity.mrn}\n- Date: ${date}\n- Fictional facility: ${identity.synthetic_identity.fictional_facility}\n- Fictional author: ${author}\n- Calendar frame: ${frameLabel(data)}\n\n${isTrueDateFrame(data) ? `> ${TRUE_DATE_NOTICE}\n\n` : ""}`;
const results = date => {
  const rows = clinical.observations.filter(x => x.effective_date === date);
  return rows.length ? `${rows.map(x => `${labelOf(x)}: ${withUnit(x)}`).join("; ")}. All results are synthetic.` : "No condition-specific results recorded.";
};
const resultChanges = date => changesAt(data, date).map(({ baseline, current }) => `- ${labelOf(current)}: ${withUnit(baseline)} at baseline, ${withUnit(current)} at this visit **S**`).join("\n");
const vitals = date => {
  const set = clinical.vital_sign_sets.find(x => x.date === date);
  if (!set) return "Vital signs not recorded.";
  const m = new Map(set.measurements.map(x => [x.code, x.value]));
  return `BP ${m.get("8480-6")}/${m.get("8462-4")} mmHg; pulse ${m.get("8867-4")} bpm; respirations ${m.get("9279-1")}/min; temperature ${m.get("8310-5")} °C; oxygen saturation ${m.get("59408-5")}% on room air; weight ${m.get("29463-7")} kg; BMI ${m.get("39156-5")} kg/m². All vital signs are synthetic.`;
};
const atIndex = claimsAtIndex(data);
const claims = atIndex.included.map(x => `- ${x.statement} **${x.evidence_grade}**`).join("\n");
const laterNote = atIndex.laterCount ? `\n\n${laterClaimsNote(atIndex.laterCount)}` : "";
const problems = activeProblemsAt(data, visits[0].date);
const strengths = clinical.social_history.filter(x => /support/i.test(x.display));
const strengthText = strengths.length ? bullets(strengths) : "- Engagement in care and meaningful activity **S**";
const guidelineText = care.guidelines.map(x => `- ${x.title} (${x.version_or_year}), ${x.publisher}`).join("\n");
const pastHistory = clinical.past_medical_history.map(x => `- ${x.historical_date.display}: ${x.display} **${evidence(x)}** (${x.provenance.claim_ids.join(", ")})`).join("\n") || "- No historical medical events recorded.";
const familyHistory = clinical.family_history.length
  ? clinical.family_history.map(x => `- ${x.relationship.display}: ${x.condition} **${evidence(x)}** (${x.provenance.claim_ids.join(", ")})`).join("\n")
  : "- No family medical history is documented in the logged sources. Family history of real relatives is never synthesized.";
const consultant = identity.synthetic_identity.fictional_consultant;
const planItems = items => items.map(x => {
  const refs = care.guidelines.filter(g => x.guideline_ids.includes(g.guideline_id)).map(g => `${g.title} (${g.version_or_year})`).join("; ");
  return `- ${x.display}${refs ? `. Guideline: ${refs}` : ""} **${evidence(x)}**`;
}).join("\n");
const plan = planItems(care.interventions);
const consultPlan = planItems(care.interventions.filter(x => !isConsultStep(x)));
const first = visits[0], second = visits[1] ?? visits[0];
const safety = clinical.safety_assessment;

const hp = `${header("History and Physical", first.date)}## Reason for visit\n\n${encounters.get(first.encounter_id)?.display ?? "Synthetic longitudinal-care intake"}. **S**\n\n## Historical basis\n\n${claims}${laterNote}\n\nThese claims are historical evidence, not findings from a real modern examination.\n\n## History of present illness\n\nThis fictional modern episode addresses the presenting ${care.health_concerns.length === 1 ? "concern" : "concerns"} below. **S**\n\n${care.health_concerns.map(x => `- ${sentence(x.display)} **${evidence(x)}**`).join("\n")}\n\n## Strengths and supports\n\n${strengthText}\n\n## Medications and allergies\n\n${clinical.medications.length ? bullets(clinical.medications) : "- No medication regimen generated. **S**"}\n${clinical.allergies.length ? bullets(clinical.allergies) : "- No known allergies recorded; clinical review required. **S**"}\n\n## Past medical history\n\nTrue biography with historical dates; these events are not part of the synthetic care timeline.\n\n${pastHistory}\n\n## Procedures and immunizations\n\n${clinical.procedures.length ? clinical.procedures.map(x => `- ${x.period.start}${x.period.end ? ` to ${x.period.end}` : ""}: ${x.display} **${evidence(x)}**`).join("\n") : "- No procedures recorded. **S**"}\n${clinical.immunizations.map(x => `- ${x.date}: ${x.display} **${evidence(x)}**`).join("\n")}\n\n## Family history\n\n${familyHistory}\n\n## Measurements\n\n${results(first.date)}\n\n${vitals(first.date)}\n\n## Examination\n\nMental status: ${clinical.mental_status.map(x => x.display).join("; ")}. Functional status: ${clinical.functional_status.map(x => x.display).join("; ")}. Physical examination is intentionally limited. **S**\n\n${safety ? `## Safety assessment\n\nCurrent ideation: ${safety.current_ideation}; intent: ${safety.intent}; plan: ${safety.plan}; access reviewed: ${safety.access_reviewed ? "yes" : "no"}. Disposition: ${safety.disposition}. This is synthetic and does not convert historical behavior into a current finding. **S**\n\n` : ""}## Assessment\n\n${problems.map((x, i) => `${i + 1}. ${x.display}; status ${x.status}. **${evidence(x)}**`).join("\n")}\n\n## Plan\n\n${plan}\n\n## Guideline basis\n\n${guidelineText}\n`;

const medicationChanges = visit => medChanges(data, visit).map(({ change, med }) => `- ${change}: ${med.display} **${evidence(med)}**`).join("\n") || "- No medication changes. **S**";
const goalProgress = visit => goalStatus(data, visit).map(({ goal, due }) => due
  ? `- ${sentence(goal.display)} Outcome by ${goal.target_date}: ${goal.outcome}. **${evidence(goal)}**`
  : `- ${sentence(goal.display)} In progress; target ${goal.target_date}. **${evidence(goal)}**`).join("\n");
const followUpPlan = n => {
  const next = visits[n];
  return [
    `- Continue the care plan agreed on ${first.date}. The care-plan document lists every intervention. **S**`,
    next ? `- Next visit ${next.date}: ${midSentence(encounters.get(next.encounter_id)?.display ?? next.encounter_id)}. **S**` : `- Scheduled episode complete. Continue routine follow-up${safety ? " and the safety plan" : ""}. **S**`,
  ].join("\n");
};
const progress = (visit, n, label) => {
  const followUp = n > 1;
  const changes = followUp ? resultChanges(visit.date) : "";
  return `${header(`Progress Note ${String(n).padStart(2, "0")} — ${label}`, visit.date)}## Subjective\n\nThe patient participates in this fictional ${followUp ? "follow-up" : "visit"} for ${midSentence(encounters.get(visit.encounter_id)?.display ?? "longitudinal care")}. **S**\n\n## Objective\n\n${results(visit.date)}\n\n${vitals(visit.date)}\n\n${changes ? `## Change since baseline\n\n${changes}\n\n` : ""}## Assessment\n\nActive problems: ${activeProblemsAt(data, visit.date).map(x => x.display).join("; ")}. Strengths and supports remain part of the care plan. **S**\n\n## Medication changes\n\n${medicationChanges(visit)}\n\n${followUp ? `## Goal progress\n\n${goalProgress(visit)}\n\n## Plan\n\n${followUpPlan(n)}` : `## Plan\n\n${plan}`}\n`;
};
const referral = `${header(`${consultant.specialty} Referral`, first.date)}## Referral question\n\nPlease evaluate the active concerns and advise on the guideline-linked interventions in this fictional episode. **S**\n\n## Pertinent history\n\n${claims}${laterNote}\n\nBaseline: ${results(first.date)}\n\n## Requested recommendations\n\n${consultPlan}\n`;
const consult = `${header(`${consultant.specialty} Consultation`, second.date, consultant.name)}## Consultation summary\n\nThis is fictional. Historical evidence and retrospective interpretation remain separate from the generated care episode.\n\n## Assessment\n\n${activeProblemsAt(data, second.date).map(x => `- ${x.display}; coordinated follow-up is appropriate in this scenario. **S**`).join("\n")}\n\n## Strengths and supports\n\n${strengthText}\n\n## Recommendations\n\n${consultPlan}\n\n## Guideline basis\n\n${guidelineText}\n`;
const careplan = `${header("Patient Care Plan", first.date)}## What we are working on\n\n${bullets(care.health_concerns)}\n\n## Your goals\n\n${care.goals.map(x => `- ${sentence(x.display)} Target: ${x.target_date}. Recorded outcome: ${x.outcome}. **${evidence(x)}**`).join("\n")}\n\n## What we agreed to do\n\n${plan}\n\n## Follow-up\n\n${visits.map(x => `- ${x.date}: ${encounters.get(x.encounter_id)?.display ?? x.encounter_id} **S**`).join("\n")}\n\nThis teaching document does not replace care from a qualified clinician.\n`;
const byGrade = g => data.claims.filter(x => x.evidence_grade === g).map(x => x.statement).join(" ") || "None recorded.";
const teaching = `# Teaching Note — ${identity.display_name} pilot\n\n> **${data.record_classification.banner}**\n\n## Why this case matters\n\nThis case shows how historical evidence can support a transparent fictional modern episode without presenting interpretation or generated content as documented fact.\n\n## Learning objectives\n\n1. Distinguish documented (**D**), retrospective (**R**), and synthetic (**S**) content.\n2. Keep historical and active problems distinct.\n3. Connect measurable goals and interventions to guidelines.\n4. Preserve strengths, function, identity, and agency.\n\n## Destigmatization message\n\nA health condition is one part of a person’s life and does not erase achievement, relationships, purpose, or agency.\n\n## Discussion questions\n\n- Which facts support concern without establishing a modern diagnosis?\n- Which entries belong in active problems, historical problems, or both?\n- What additional evidence would change an evidence grade?\n- How should an EHR distinguish synthetic and historical content?\n\n## Evidence-grade summary\n\n- **D:** ${byGrade("D")}\n- **R:** ${byGrade("R")}\n- **S:** Shifted identity, fictional care team, modern encounters, results, plans, and outcomes.\n`;

const csv = v => `"${String(v ?? "").replaceAll('"', '""')}"`;
const rows = [["element_type","element_id","display","evidence_grade","claim_ids","synthetic_reason","status"],
  ...data.claims.map(x => ["claim",x.claim_id,x.statement,x.evidence_grade,"","",x.release_status]),
  ...clinical.problems.map(x => ["problem",x.id,x.display,evidence(x),x.provenance.claim_ids.join("|"),x.provenance.synthetic_reason,x.status]),
  ...clinical.observations.map(x => ["observation",x.id,`${x.display}: ${withUnit(x)}`,evidence(x),x.provenance.claim_ids.join("|"),x.provenance.synthetic_reason,x.status]),
  ...["allergies","medications","procedures","immunizations","family_history","past_medical_history"].flatMap(k => clinical[k].map(x => [k,x.id,x.display ?? `${x.relationship.display}: ${x.condition}`,evidence(x),x.provenance.claim_ids.join("|"),x.provenance.synthetic_reason,x.status ?? "documented"])),
  ...care.health_concerns.map(x => ["health_concern",x.id,x.display,evidence(x),x.provenance.claim_ids.join("|"),x.provenance.synthetic_reason,x.status]),
  ...clinical.encounters.map(x => ["encounter",x.id,`${x.date}: ${x.display}`,evidence(x),x.provenance.claim_ids.join("|"),x.provenance.synthetic_reason,x.status]),
  ...clinical.vital_sign_sets.flatMap(s => s.measurements.map(x => ["vital_sign",`${s.id}-${x.code}`,`${s.date}: ${x.display} ${x.value} ${x.unit}`,evidence(s),"",s.provenance.synthetic_reason,"final"])),
  ...["social_history","functional_status","mental_status"].flatMap(k => clinical[k].map(x => [k,x.id,x.display,evidence(x),x.provenance.claim_ids.join("|"),x.provenance.synthetic_reason,x.status])),
  ...(safety ? [["safety_assessment",safety.id,`${safety.date}: ${safety.disposition}`,evidence(safety),safety.provenance.claim_ids.join("|"),safety.provenance.synthetic_reason,"final"]] : []),
  ...care.goals.map(x => ["goal",x.id,x.display,evidence(x),x.provenance.claim_ids.join("|"),x.provenance.synthetic_reason,x.status]),
  ...care.interventions.map(x => ["intervention",x.id,x.display,evidence(x),x.provenance.claim_ids.join("|"),x.provenance.synthetic_reason,x.status])];
const provenance = rows.map(r => r.map(csv).join(",")).join("\r\n") + "\r\n";
// One progress note per visit: the first sets the plan, the last reviews it, any between are follow-ups.
const progressLabel = n => n === 1 ? "Initial plan" : n === visits.length ? "Care-plan review" : visits.length === 3 ? "Intermediate follow-up" : "Follow-up";
const progressNotes = visits.map((visit, i) => [`progress-${String(i + 1).padStart(2, "0")}.md`, progress(visit, i + 1, progressLabel(i + 1))]);
const files = new Map([["hp.md",hp],...progressNotes,["referral-01.md",referral],["consult-01.md",consult],["careplan.md",careplan],["teaching-note.md",teaching]]);
await fs.mkdir(notesDir,{recursive:true});
for (const [name,content] of files) await fs.writeFile(path.join(notesDir,name),content,"utf8");
await fs.writeFile(path.join(outputDir,"provenance.csv"),provenance,"utf8");
console.log(JSON.stringify({case_id:data.case_id,notes:files.size,provenance_rows:rows.length-1}));
