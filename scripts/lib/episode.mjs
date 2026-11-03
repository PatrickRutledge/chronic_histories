// Episode logic shared by the Markdown notes and the C-CDA note documents, so the two
// renderings of the same visit cannot disagree.
import { isTrueDateFrame } from "./common.mjs";

// Clinical notes are written at the index visit, so they cite only claims about events that had
// happened by then in the true frame. The teaching note still lists every claim.
export function claimsAtIndex(data) {
  const identity = data.identity;
  const shiftYears = Number(identity.synthetic_identity.date_of_birth.slice(0, 4)) - Number(identity.historical_dates.birth.preferred.iso.slice(0, 4));
  const indexYear = Number(data.synthetic_episode.index_date.slice(0, 4)) - (isTrueDateFrame(data) ? 0 : shiftYears);
  const trueIndexDate = `${String(indexYear).padStart(4, "0")}${data.synthetic_episode.index_date.slice(4)}`;
  const afterIndex = claim => {
    const events = data.historical_timeline.filter(e => e.claim_ids.includes(claim.claim_id));
    return events.length > 0 && events.every(e => e.date.iso && e.date.iso > trueIndexDate);
  };
  const historical = data.claims.filter(claim => claim.evidence_grade !== "S");
  return { included: historical.filter(claim => !afterIndex(claim)), laterCount: historical.filter(afterIndex).length };
}

export const laterClaimsNote = (count) => count
  ? `${count} later historical ${count === 1 ? "claim is" : "claims are"} omitted because ${count === 1 ? "it describes events" : "they describe events"} after the index age. See the teaching note.`
  : "";

// Medication changes at a visit: started, stopped, or continued without change.
export const medicationChanges = (data, visit) => data.clinical.medications.map(med => {
  if (med.start_date === visit.date) return { change: "Started", med };
  if (med.end_date === visit.date) return { change: "Stopped", med };
  if (med.start_date < visit.date && (!med.end_date || med.end_date > visit.date)) return { change: "Continued without change", med };
  return null;
}).filter(Boolean);

// Goal status as of a visit: reached by its target date, or still in progress.
export const goalProgress = (data, visit) => data.care_plan.goals.map(goal => ({ goal, due: goal.target_date <= visit.date }));

// The consultation and referral cannot recommend themselves.
export const isConsultStep = (intervention) => /\b(consult|consultation|referral|refer)\b/i.test(intervention.display);

// Change from the first visit for each instrument measured at a later visit.
export const resultChanges = (data, date) => {
  const first = data.synthetic_episode.visit_schedule[0].date;
  return data.clinical.observations.filter(x => x.effective_date === date).map(current => {
    const baseline = data.clinical.observations.find(b => b.coding[0].code === current.coding[0].code && b.effective_date === first);
    return baseline && baseline !== current ? { baseline, current } : null;
  }).filter(Boolean);
};

// Laboratory results carry a reference range and an interpretation flag (HL7 ObservationInterpretation).
export const INTERPRETATIONS = { N: "Normal", H: "High", L: "Low", HH: "Critical high", LL: "Critical low", A: "Abnormal" };
// Laboratory and imaging results are measured against a reference range; survey scores are not.
export const isLab = (observation) => observation.category === "laboratory" || observation.category === "imaging";
// Human-readable units for prose; the coded value keeps its UCUM unit.
const UNIT_TEXT = { "mL/min/{1.73_m2}": "mL/min/1.73 m²", "m[IU]/L": "mIU/L", "mm[Hg]": "mmHg", "Cel": "°C" };
const bare = (value, unit) => {
  if (/^\{.*\}$/.test(unit ?? "")) return `${value}`;
  if (unit === "%") return `${value}%`;
  return `${value} ${UNIT_TEXT[unit] ?? unit}`;
};
export const rangeText = (observation) => {
  const range = observation.reference_range;
  if (!range) return "";
  if (range.text) return range.text;
  if (range.low !== undefined && range.high !== undefined) return `${range.low}-${bare(range.high, observation.unit)}`;
  return range.low !== undefined ? `>=${bare(range.low, observation.unit)}` : `<=${bare(range.high, observation.unit)}`;
};
// Interpretation implied by a numeric range, or null when the range has no bound on that side.
export const expectedInterpretation = (observation) => {
  const { low, high } = observation.reference_range ?? {};
  if (low !== undefined && observation.value < low) return "L";
  if (high !== undefined && observation.value > high) return "H";
  return low === undefined && high === undefined ? null : "N";
};

// UCUM annotations such as {score} are for machines; print the bare value. Abnormal labs carry their flag.
export const withUnit = (observation) => {
  const text = bare(observation.value, observation.unit);
  return isLab(observation) && observation.interpretation && observation.interpretation !== "N" ? `${text} (${INTERPRETATIONS[observation.interpretation].toLowerCase()})` : text;
};
export const sentence = (text) => /[.!?]$/.test(text) ? text : `${text}.`;
export const midSentence = (text) => /^[A-Z][a-z]/.test(text) ? text[0].toLowerCase() + text.slice(1) : text;
// Problems known at a visit: a problem with recorded_date (the visit that made the diagnosis) is
// absent from earlier visits' documents. Problems without one are known from the index visit.
export const problemsAt = (data, date) => data.clinical.problems.filter(problem => !date || !problem.recorded_date || problem.recorded_date <= date);
export const activeProblemsAt = (data, date) => problemsAt(data, date).filter(problem => problem.clinical_status === "active");

// Notes use the short clinical name when one is given (ALT rather than the full LOINC display).
export const labelOf = (observation) => observation.label ?? observation.display;

// Visit types. A visit whose encounter carries documentation is written as a full encounter note
// (chief complaint, HPI, review of systems, examination, assessment and plan). Sick visits are
// unscheduled, so "next visit" lines skip them and the care plan does not list them.
export const VISIT_TITLES = {
  initial_preventive_exam: "Initial Preventive Physical Examination",
  annual_wellness_initial: "Annual Wellness Visit, Initial",
  annual_wellness_subsequent: "Annual Wellness Visit, Subsequent",
  preventive_adult: "Preventive Visit",
  sick: "Sick Visit",
};
export const PREVENTION_STATUS = {
  completed_today: "Completed today", up_to_date: "Up to date", due: "Due", ordered: "Ordered",
  referred: "Referred", declined: "Declined", not_indicated: "Not indicated", deferred: "Deferred",
};
export const MONITORING_DOMAINS = {
  laboratory: "Laboratory", imaging: "Imaging", examination: "Examination", survey: "Survey",
  medication_safety: "Medication safety", referral: "Referral", self_management: "Self-management",
};
export const isChronicCare = (data, visit) => { const type = encounterOf(data, visit)?.visit_type; return !type || type === "chronic_care"; };
export const encounterOf = (data, visit) => data.clinical.encounters.find(encounter => encounter.id === visit.encounter_id);
export const documentationOf = (data, visit) => encounterOf(data, visit)?.documentation;
export const isUnscheduled = (data, visit) => encounterOf(data, visit)?.visit_type === "sick";
export const scheduledVisits = (data) => data.synthetic_episode.visit_schedule.filter(visit => !isUnscheduled(data, visit));
// The next scheduled visit after visit number n (1-based).
export const nextScheduledVisit = (data, n) => data.synthetic_episode.visit_schedule.slice(n).find(visit => !isUnscheduled(data, visit));
export const medicationsAt = (data, date) => data.clinical.medications.filter(med => med.start_date <= date && (!med.end_date || med.end_date > date));
// Guidelines cited only by full encounter notes (directly or from a prevention-plan row) belong to
// those visits, not to the intake plan.
export const visitOnlyGuidelineIds = (data) => {
  const planIds = new Set(data.care_plan.interventions.flatMap(item => item.guideline_ids ?? []));
  const visitIds = data.clinical.encounters.flatMap(encounter => [...(encounter.documentation?.guideline_ids ?? []), ...(encounter.documentation?.prevention_plan ?? []).flatMap(item => item.guideline_ids ?? [])]);
  return new Set(visitIds.filter(id => !planIds.has(id)));
};
export const guidelinesFor = (data, ids) => data.care_plan.guidelines.filter(guideline => ids.includes(guideline.guideline_id));
export const immunizationsOn = (data, date) => data.clinical.immunizations.filter(item => item.date === date);

// Progress-note labels. Wellness, preventive, and sick visits are titled by visit type. Among the
// chronic-care visits, the first sets the plan, the last reviews it, and any between are follow-ups;
// a chronic-care visit with full documentation is a focused visit in that role.
export const visitLabels = (data) => {
  const visits = data.synthetic_episode.visit_schedule;
  const chronic = visits.filter(visit => isChronicCare(data, visit));
  return visits.map(visit => {
    const encounter = encounterOf(data, visit);
    if (!isChronicCare(data, visit)) return VISIT_TITLES[encounter.visit_type] ?? "Encounter Note";
    const k = chronic.indexOf(visit) + 1;
    const role = k === 1 ? "Initial plan" : k === chronic.length ? "Care-plan review" : chronic.length === 3 ? "Intermediate follow-up" : "Follow-up";
    return encounter?.documentation ? `Focused Visit (${role})` : role;
  });
};
