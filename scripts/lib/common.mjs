import crypto from "node:crypto";
import path from "node:path";

export const deterministicUuid = (seed) => {
  const hex = crypto.createHash("sha256").update(seed).digest("hex").slice(0, 32).split("");
  hex[12] = "4";
  hex[16] = ["8", "9", "a", "b"][Number.parseInt(hex[16], 16) % 4];
  const value = hex.join("");
  return `${value.slice(0, 8)}-${value.slice(8, 12)}-${value.slice(12, 16)}-${value.slice(16, 20)}-${value.slice(20)}`;
};

// Calendar frame. A true-date case is derived from the modern one by
// scripts/derive_true_date_case.mjs and must say that its modern content is anachronistic.
export const isTrueDateFrame = (data) => data.synthetic_episode.calendar_frame === "true_date";

// Historical ISO dates may carry a sign: astronomical year numbering, so "-0099" is 100 BC and
// "0000" is 1 BC. Read the year as a number, never as the first four characters.
export const isoYear = (iso) => Number(/^-?\d+/.exec(iso)[0]);
export const formatIsoYear = (year) => `${year < 0 ? "-" : ""}${String(Math.abs(year)).padStart(4, "0")}`;
// Orders two ISO dates of any precision by year as a number, then by month and day. A date with
// less precision sorts before more precise dates in the same year, as plain ISO strings do.
export const compareIso = (a, b) => {
  const rest = (iso) => iso.replace(/^-?\d+/, "");
  return (isoYear(a) - isoYear(b)) || (rest(a) < rest(b) ? -1 : rest(a) > rest(b) ? 1 : 0);
};
// C-CDA (TS) and FHIR (date) cannot carry a year before 1, so a patient born before 1 CE has no
// true-date variant (docs/date-shifting.md).
export const trueDateFrameSupported = (data) => isoYear(data.identity.historical_dates.birth.preferred.iso) >= 1;
export const frameLabel = (data) => isTrueDateFrame(data) ? "true historical dates (modern content is anachronistic)" : "modern shifted";
export const TRUE_DATE_NOTICE = "True-date frame: synthetic events are moved into the patient's historical lifetime. Codes, instruments, and treatments remain modern and are anachronistic.";

// Optional second argument: output directory. Defaults to <case directory>/generated.
export const outputDirFor = (casePath) => process.argv[3] ? path.resolve(process.argv[3]) : path.join(path.dirname(casePath), "generated");

export const splitName = (displayName) => {
  const parts = displayName.trim().split(/\s+/);
  return { family: parts.at(-1), given: parts.slice(0, -1) };
};

// The patient's coded name: explicit name_parts when display_name does not split at the last space.
export const patientName = (identity) => identity.name_parts ?? splitName(identity.display_name);

export const parseClinician = (value) => {
  const [name, ...credentials] = value.split(",").map(part => part.trim());
  return { ...splitName(name), suffix: credentials.join(", ") };
};

// Project-owned namespace for local FHIR code systems and identifiers.
export const NAMESPACE = "https://github.com/PatrickRutledge/chronic_histories/fhir";

// Every facility is fictional. 555-0100 through 555-0199 are reserved for fictional
// use, and ZIP 00000 is unassigned, so neither can collide with a real contact.
export const FICTIONAL_FACILITY_CONTACT = {
  street: "100 Forge Way",
  city: "Aetherton",
  state: "OR",
  postalCode: "00000",
  country: "US",
  phone: "+1-202-555-0100"
};

// Code system URIs used in canonical cases, with their HL7 OIDs for C-CDA.
export const CODE_SYSTEM_OID = {
  "http://snomed.info/sct": "2.16.840.1.113883.6.96",
  "http://loinc.org": "2.16.840.1.113883.6.1",
  "http://www.nlm.nih.gov/research/umls/rxnorm": "2.16.840.1.113883.6.88",
  "http://hl7.org/fhir/sid/cvx": "2.16.840.1.113883.12.292",
  "http://hl7.org/fhir/sid/icd-10-cm": "2.16.840.1.113883.6.90",
  "http://terminology.hl7.org/CodeSystem/v3-RoleCode": "2.16.840.1.113883.5.111"
};
export const oidFor = (system) => {
  const oid = CODE_SYSTEM_OID[system];
  if (!oid) throw new Error(`No OID mapping for code system ${system}`);
  return oid;
};

// Medication routes: SNOMED CT for FHIR, NCI Thesaurus (FDA route of administration) for C-CDA.
export const ROUTES = {
  oral: { snomed: "26643006", nci: "C38288", display: "Oral route" },
  sublingual: { snomed: "37839007", nci: "C38300", display: "Sublingual route" },
  topical: { snomed: "6064005", nci: "C38304", display: "Topical route" },
  intramuscular: { snomed: "78421000", nci: "C28161", display: "Intramuscular route" },
  subcutaneous: { snomed: "34206005", nci: "C38299", display: "Subcutaneous route" },
  intravenous: { snomed: "47625008", nci: "C38276", display: "Intravenous route" },
  inhalation: { snomed: "447694001", nci: "C38216", display: "Respiratory tract route" },
  nasal: { snomed: "46713006", nci: "C38284", display: "Nasal route" },
  ophthalmic: { snomed: "54485002", nci: "C38287", display: "Ophthalmic route" },
  intravitreal: { snomed: "418401004", nci: "C38280", display: "Intravitreal route" }
};

export const ADMINISTRATIVE_GENDER = {
  male: { code: "M", display: "Male" },
  female: { code: "F", display: "Female" }
};
