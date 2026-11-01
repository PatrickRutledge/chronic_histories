import crypto from "node:crypto";

export const deterministicUuid = (seed) => {
  const hex = crypto.createHash("sha256").update(seed).digest("hex").slice(0, 32).split("");
  hex[12] = "4";
  hex[16] = ["8", "9", "a", "b"][Number.parseInt(hex[16], 16) % 4];
  const value = hex.join("");
  return `${value.slice(0, 8)}-${value.slice(8, 12)}-${value.slice(12, 16)}-${value.slice(16, 20)}-${value.slice(20)}`;
};

export const splitName = (displayName) => {
  const parts = displayName.trim().split(/\s+/);
  return { family: parts.at(-1), given: parts.slice(0, -1) };
};

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

export const ADMINISTRATIVE_GENDER = {
  male: { code: "M", display: "Male" },
  female: { code: "F", display: "Female" }
};
