// Derives the true-date variant of a case (docs/date-shifting.md, "True-date distribution").
//   node scripts/derive_true_date_case.mjs <case.json> <output case.json>
//   node scripts/derive_true_date_case.mjs --verify <case.json> <true-date output directory>
//
// Every synthetic clinical date moves back by shift = synthetic birth year - true birth year,
// month and day unchanged. Historical content is already in the true frame and is not moved.
// Record metadata (provenance.created, validated_on, source access dates, code-system
// versions, guideline years) records when the dataset was made and stays as is.
// The derived case gets its own case ID and MRN so both frames can be loaded side by side.
import fs from "node:fs";
import path from "node:path";

const SUFFIX = "-TD";
// Keys whose values are synthetic event dates. Any other key holding a full ISO date inside a
// synthetic subtree is an error, so a new date field cannot silently stay in the modern frame.
const DATE_KEYS = new Set(["date", "date_of_birth", "index_date", "start_date", "end_date", "effective_date", "target_date", "onset_date", "start", "end"]);
const METADATA_KEYS = new Set(["created", "validated_on", "version", "guideline_ids", "mrn", "ssn"]);
const ISO_DATE = /^(\d{4})(-\d{2}-\d{2}.*)?$/;
const EMBEDDED_DATE = /\d{4}-\d{2}-\d{2}/;
const TEXT_YEAR = /\b((?:19|20)\d{2})\b/g;

const isLeap = (year) => (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

function shiftIso(value, shift) {
  const match = ISO_DATE.exec(value);
  if (!match) throw new Error(`Not an ISO date: ${value}`);
  const year = Number(match[1]) - shift;
  let rest = match[2] ?? "";
  if (rest.startsWith("-02-29") && !isLeap(year)) rest = `-02-28${rest.slice(6)}`;
  return `${String(year).padStart(4, "0")}${rest}`;
}

// Shift synthetic dates in place. Returns the list of original modern dates for verification.
function shiftTree(node, shift, where, originals) {
  if (Array.isArray(node)) {
    node.forEach((item, index) => {
      if (typeof item === "string") node[index] = shiftText(item, shift, `${where}[${index}]`);
      else shiftTree(item, shift, `${where}[${index}]`, originals);
    });
    return;
  }
  // Documented or retrospective entries describe the real person and are already in the true frame.
  if (["D", "R"].includes(node.provenance?.evidence_grade)) return;
  for (const [key, value] of Object.entries(node)) {
    const at = `${where}.${key}`;
    if (METADATA_KEYS.has(key) || key === "coding" || key === "provenance") continue;
    if (value && typeof value === "object") { shiftTree(value, shift, at, originals); continue; }
    if (typeof value !== "string") continue;
    if (DATE_KEYS.has(key) && ISO_DATE.test(value)) {
      originals.add(value.slice(0, 10));
      node[key] = shiftIso(value, shift);
    } else {
      node[key] = shiftText(value, shift, at);
    }
  }
}

function shiftText(value, shift, at) {
  if (EMBEDDED_DATE.test(value)) throw new Error(`Unrecognized date field at ${at}: ${value}. Add its key to DATE_KEYS or METADATA_KEYS.`);
  return value.replace(TEXT_YEAR, year => String(Number(year) - shift));
}

export function deriveTrueDateCase(source) {
  const data = structuredClone(source);
  if (data.synthetic_episode.calendar_frame !== "modern_shifted") throw new Error("Input must be a modern_shifted case.");
  const trueBirth = data.identity.historical_dates.birth.preferred;
  const syntheticDob = data.identity.synthetic_identity.date_of_birth;
  const shift = Number(syntheticDob.slice(0, 4)) - Number(trueBirth.iso.slice(0, 4));
  if (!(shift > 0)) throw new Error(`Shift must be positive, got ${shift}.`);

  const originals = new Set();
  const synthetic = data.identity.synthetic_identity;
  synthetic.date_of_birth = shiftIso(synthetic.date_of_birth, shift);
  originals.add(syntheticDob);
  shiftTree(data.synthetic_episode, shift, "synthetic_episode", originals);
  const { family_history, past_medical_history, ...syntheticClinical } = data.clinical;
  shiftTree(syntheticClinical, shift, "clinical", originals);
  Object.assign(data.clinical, syntheticClinical);
  const { guidelines, ...syntheticPlan } = data.care_plan;
  shiftTree(syntheticPlan, shift, "care_plan", originals);
  Object.assign(data.care_plan, syntheticPlan);

  data.case_id += SUFFIX;
  synthetic.mrn += SUFFIX;
  data.synthetic_episode.calendar_frame = "true_date";

  // The shifted birth date must be the true birth date whenever the true date is known to the day.
  if (trueBirth.precision === "day" && synthetic.date_of_birth !== trueBirth.iso) {
    throw new Error(`Shifted birth date ${synthetic.date_of_birth} does not match true birth date ${trueBirth.iso}.`);
  }
  // Every shifted event must fall within the patient's lifetime.
  const death = data.identity.historical_dates.death.preferred.iso;
  const late = [...JSON.stringify(data.synthetic_episode.visit_schedule).matchAll(/\d{4}-\d{2}-\d{2}/g)].map(m => m[0]).filter(d => d > death);
  if (late.length) throw new Error(`Shifted visits fall after the true death date ${death}: ${late.join(", ")}`);

  return { data, shift, originals: [...originals].sort() };
}

// Fails if any generated true-date file still contains one of the original modern dates.
function verify(casePath, outputDir) {
  const { originals } = deriveTrueDateCase(JSON.parse(fs.readFileSync(casePath, "utf8")));
  const patterns = originals.flatMap(d => [d, d.replaceAll("-", "")]);
  const files = [];
  const walk = (dir) => fs.readdirSync(dir, { withFileTypes: true }).forEach(entry => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full); else files.push(full);
  });
  walk(outputDir);
  const problems = [];
  for (const file of files) {
    const text = fs.readFileSync(file, "utf8");
    for (const pattern of patterns) if (text.includes(pattern)) problems.push(`${path.relative(outputDir, file)} contains modern date ${pattern}`);
  }
  if (problems.length) {
    problems.forEach(problem => console.error(`ERROR: ${problem}`));
    process.exit(1);
  }
  console.log(`True-date outputs contain none of the ${originals.length} modern synthetic dates.`);
}

const args = process.argv.slice(2);
if (args[0] === "--verify") {
  verify(path.resolve(args[1]), path.resolve(args[2]));
} else if (args.length === 2) {
  const { data, shift } = deriveTrueDateCase(JSON.parse(fs.readFileSync(path.resolve(args[0]), "utf8")));
  fs.mkdirSync(path.dirname(path.resolve(args[1])), { recursive: true });
  fs.writeFileSync(path.resolve(args[1]), `${JSON.stringify(data, null, 2)}\n`, "utf8");
  console.log(JSON.stringify({ case_id: data.case_id, shift_years: shift, date_of_birth: data.identity.synthetic_identity.date_of_birth, index_date: data.synthetic_episode.index_date }));
} else {
  console.error("Usage: node scripts/derive_true_date_case.mjs <case.json> <output case.json>\n       node scripts/derive_true_date_case.mjs --verify <case.json> <true-date output directory>");
  process.exit(2);
}
