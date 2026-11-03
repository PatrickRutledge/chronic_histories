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
export const isLab = (observation) => observation.category === "laboratory";
const bare = (value, unit) => /^\{.*\}$/.test(unit ?? "") ? `${value}` : `${value} ${unit}`;
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
// Notes use the short clinical name when one is given (ALT rather than the full LOINC display).
export const labelOf = (observation) => observation.label ?? observation.display;
