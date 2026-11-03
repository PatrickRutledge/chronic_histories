// Renders a generated C-CDA document as a standalone HTML page for human review.
// Browsers will not apply an XSLT stylesheet to a local file, so the review copy is produced at
// build time instead. It shows the header and every section's narrative block; the coded
// entries stay in the XML, which remains the exchange artifact.

const BANNER = "SYNTHETIC RECORD, NOT A REAL MEDICAL RECORD";
const esc = (value) => String(value ?? "").replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
const first = (text, pattern) => pattern.exec(text)?.[1] ?? "";
const compactToIso = (value) => value ? `${value.slice(0, 4)}-${value.slice(4, 6)}-${value.slice(6, 8)}` : "";

// CDA narrative (already escaped XML) mapped to the matching HTML elements.
const narrativeToHtml = (narrative) => narrative
  .replace(/<list([^>]*)>/g, "<ul$1>").replace(/<\/list>/g, "</ul>")
  .replace(/<item([^>]*)>/g, "<li$1>").replace(/<\/item>/g, "</li>")
  .replace(/<paragraph([^>]*)>/g, "<p$1>").replace(/<\/paragraph>/g, "</p>")
  .replace(/<content([^>]*)>/g, "<span$1>").replace(/<\/content>/g, "</span>")
  .replace(/<linkHtml href="([^"]*)"[^>]*>/g, '<a href="$1">').replace(/<\/linkHtml>/g, "</a>")
  .replace(/\sID="/g, ' id="').replace(/\sstyleCode="[^"]*"/g, "");

const nameOf = (block) => {
  const given = [...block.matchAll(/<given>([^<]*)<\/given>/g)].map(m => m[1]).join(" ");
  const family = first(block, /<family>([^<]*)<\/family>/);
  const suffix = first(block, /<suffix>([^<]*)<\/suffix>/);
  return [given, family].filter(Boolean).join(" ") + (suffix ? `, ${suffix}` : "");
};

export function cdaToHtml(xml) {
  const headerEnd = xml.indexOf("<component>");
  const header = headerEnd > 0 ? xml.slice(0, headerEnd) : xml;
  const title = first(header, /<title>([\s\S]*?)<\/title>/);
  const patientRole = first(header, /<patientRole>([\s\S]*?)<\/patientRole>/);
  const patient = first(patientRole, /<patient>([\s\S]*?)<\/patient>/);
  const ids = [...patientRole.matchAll(/<id root="([^"]*)" extension="([^"]*)"\/>/g)]
    .map(([, root, extension]) => `${root === "2.16.840.1.113883.4.1" ? "SSN (made up)" : "MRN"} ${extension}`);
  const author = first(header, /<author>([\s\S]*?)<\/author>/);
  const custodian = first(header, /<representedCustodianOrganization>[\s\S]*?<name>([^<]*)<\/name>/);
  const sections = [...xml.matchAll(/<section>[\s\S]*?<title>([\s\S]*?)<\/title>\s*<text>([\s\S]*?)<\/text>/g)]
    .map(([, sectionTitle, text]) => `<section><h2>${sectionTitle}</h2>${narrativeToHtml(text)}</section>`).join("\n");
  const rows = [
    ["Patient", nameOf(patient)],
    ["Date of birth", compactToIso(first(patient, /<birthTime value="([0-9]{8})/))],
    ["Identifiers", ids.join("; ")],
    ["Document date", compactToIso(first(header, /<effectiveTime value="([0-9]{8})/))],
    ["Author", nameOf(first(author, /<assignedPerson>([\s\S]*?)<\/assignedPerson>/))],
    ["Custodian", custodian],
  ].filter(([, value]) => value).map(([label, value]) => `<tr><th>${esc(label)}</th><td>${value}</td></tr>`).join("");
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${title}</title>
<style>
  body { font: 15px/1.5 system-ui, sans-serif; max-width: 60rem; margin: 2rem auto; padding: 0 1rem; color: #1d2433; }
  .banner { background: #8a1c1c; color: #fff; font-weight: 700; padding: .6rem 1rem; border-radius: 4px; }
  h1 { font-size: 1.4rem; } h2 { font-size: 1.1rem; border-bottom: 1px solid #ccd; margin-top: 1.6rem; }
  table { border-collapse: collapse; margin: .5rem 0; } th, td { border: 1px solid #ccd; padding: .25rem .5rem; text-align: left; vertical-align: top; }
  .note { color: #555; font-size: .9rem; }
</style>
</head>
<body>
<p class="banner">${BANNER}</p>
<h1>${title}</h1>
<table>${rows}</table>
<p class="note">Readable copy of the C-CDA narrative, generated with the XML. Coded entries are in the XML file beside this page.</p>
${sections}
</body>
</html>
`;
}
