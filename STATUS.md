# Project status and continuation plan

Last updated: November 1, 2026  
Branch: `main`  
Repository: `https://github.com/PatrickRutledge/chronic_histories`

## Goal

Build The Human Record: a public dataset of 2,000+ fictional modern clinical records anchored to deceased historical figures and original archetypes. Each case should be generated from one canonical structured source, preserve historical evidence separately from synthetic care, and ultimately export validated C-CDA R2.1, FHIR R4, HTML review pages, clinical notes, and provenance.

Every generated artifact must display:

> SYNTHETIC RECORD, NOT A REAL MEDICAL RECORD

## Confirmed decisions

- Use a modern shifted calendar for interoperable EHR testing. Preserve actual birth, death, and historical-event dates in the canonical history.
- No shifted birth date should precede 1900.
- Use C-CDA R2.1 as the baseline exchange document.
- Generate FHIR R4 from the same canonical JSON. The current output is a draft R4 collection bundle, not yet claimed as US Core conformant.
- Keep canonical JSON as the authoritative source so additional formats can be generated later.
- Generate an HTML index for fast human review before import.
- Use evidence grades on clinical assertions:
  - `D`: documented in a primary or reliable source
  - `R`: retrospective historical or clinical interpretation
  - `S`: synthetic content created for the teaching record
- Keep contested diagnoses and recent information visible without forcing a single conclusion. Historical and active problem placement can both be used when logically appropriate.
- Real names of deceased historical figures may appear. All clinicians, facilities, MRNs, encounters, measurements, and modern care are fictional.
- Use a public license. CC BY 4.0 is the working recommendation, but the repository does not yet contain the final license file.
- For recent deaths and sensitive cases, retain the stricter human-review rules in the original project instruction.

## Completed work

### Roster and architecture

- Original v1 and v2 workbooks are preserved.
- The merged v3 workbook is at `outputs/histmed_v3/HISTMED_Master_Roster_v3.xlsx`.
- Missing v1 tabs were restored in v3, including Condition Index, Build Roadmap, Destigmatization Guide, and Next 50 Candidates.
- The canonical JSON Schema is `schema/case.schema.json`.
- The modern date-shifting policy is `docs/date-shifting.md`.
- Deterministic generators produce HTML, FHIR R4, C-CDA R2.1, eight notes, and provenance CSV.
- `scripts/validate_case.ps1` checks schema conformance, age and dates, provenance links, cross-format counts, vital-sign plausibility, note consistency, and synthetic banners.
- Supporting-note generation is case-driven and no longer contains Audie Murphy-specific prose.

### Pilot 1: Audie Murphy (`HR-ET007`)

Location: `pilots/HR-ET007-audie-murphy/`

- Historical dossier with graded claims and source log
- Modern synthetic PTSD and insomnia episode
- Three encounters and three vital-sign sets
- Six scored results: PCL-5 and PHQ-9 at three visits
- Social, functional, mental-status, and safety data
- Guideline-linked goals and interventions
- HTML review page, FHIR bundle, C-CDA, eight notes, and provenance CSV

Current local validation:

- JSON Schema: PASS
- Age and dates: PASS
- Provenance links: PASS
- FHIR resources: 51
- C-CDA sections: 11
- C-CDA problem entries: 2
- C-CDA result entries: 6
- C-CDA encounter entries: 3
- C-CDA vital-sign entries: 27
- Supporting documents: 8
- Provenance rows: 64
- CDA XSD, C-CDA R2.1 Schematron, FHIR R4, US Core 6.1.0: 0 errors (94 Schematron, 73 FHIR R4, and 79 US Core warnings)

### Pilot 2: Gregory “Pappy” Boyington (`HR-ET008`)

Location: `pilots/HR-ET008-gregory-boyington/`

- Historical dossier with eight graded claims
- Corrected the roster’s overly simple “eventual sobriety” claim: the stronger evidence describes sustained sober periods and later relapses
- PTSD remains retrospective (`R`); no lifetime contemporary diagnosis is asserted
- Modern synthetic episode treats co-occurring alcohol use disorder and PTSD
- AUDIT-C, PCL-5, and PHQ-9 at three visits
- Integrated, guideline-linked recovery plan that does not require recovery to be perfect or linear
- HTML review page, FHIR bundle, C-CDA, eight notes, and provenance CSV

Current local validation:

- JSON Schema: PASS
- Age and dates: PASS
- Provenance links: PASS
- FHIR resources: 54
- C-CDA sections: 11
- C-CDA problem entries: 2
- C-CDA result entries: 9
- C-CDA encounter entries: 3
- C-CDA vital-sign entries: 27
- Supporting documents: 8
- Provenance rows: 67
- CDA XSD, C-CDA R2.1 Schematron, FHIR R4, US Core 6.1.0: 0 errors (104 Schematron, 82 FHIR R4, and 88 US Core warnings)

## Git history

Major milestones, oldest to newest:

1. `c5c7dc2` — Add original HISTMED project sources
2. `9476e6c` — Create merged and normalized HISTMED roster v3
3. `32b4023` — Define canonical case schema and date shifting policy
4. `bf656ae` — Add Audie Murphy pilot evidence dossier
5. `d4475b2` — Generate HTML review portal and draft FHIR bundle
6. `96da73e` — Add coded synthetic PTSD episode and care plan
7. `b7174c2` — Generate draft C-CDA R2.1 CCD with consistency validation
8. `088d221` — Generate synchronized pilot notes and provenance package
9. `5ac28bb` — Add synthetic clinical completeness and safety data
10. `1cdfd4c` — Generalize supporting document generation
11. `bd15465` — Add Gregory Boyington integrated recovery pilot

## Important limitations

- Formal validation passes with zero errors, but rules test only content that exists. Allergies and medications are still empty, and social, functional, mental-status, and safety Observations declare no US Core profile. See `docs/validation.md`.
- The official Schematron has a quoting defect in CONF:1098-8583. It is corrected at install time and should be reported to HL7.
- FHIR validation depends on the public `tx.fhir.org` terminology server, so results can change as its content changes.
- FHIR validation now checks LOINC and ICD-10-CM codes through the terminology server, but there is not yet an automated resolver covering every SNOMED CT, RxNorm, CVX, and UCUM entry, including C-CDA-only content.
- C-CDA problem values are ICD-10-CM only. They should gain SNOMED CT codes.
- The C-CDA currently has 11 sections and is not yet the complete section set described in the original project instruction. Medications, allergies, procedures, immunizations, and some other sections may use empty/null-flavor content.
- The canonical schema and generators need fuller support for family history, past medical history, procedures, immunizations, assessment, reason for visit, equipment, advance directives, and payers where relevant.
- Human clinical, provenance, and safe-messaging reviews have not occurred. Both pilots remain drafts.
- Primary memoir and archival verification remains incomplete for both pilots.
- The workbook’s Case Build Register and Claims Register have not yet been updated with the completed pilot status and resolved claim decisions.
- Dataset-level `manifest.csv`, datasheet, final license, and changelog have not been created.
- The canonical record preserves both historical dates and a modern shifted episode, but a separate true-date C-CDA/FHIR distribution has not yet been generated.
- Generated notes are synchronized summaries suitable for review and testing. They still need clinician review before being treated as exemplary clinical documentation.

## Recommended continuation order

### 1. Establish formal validation (complete)

Done. See `docs/validation.md` for pinned tools, commands, and limits. Both pilots have zero errors at every stage.

### 2. Complete the canonical clinical model

- Add structured medications, allergies, procedures, immunizations, family history, and past medical history.
- Add explicit assessment, reason-for-visit, health-concern, goals, and plan sections as required by the chosen CCD template.
- Support optional advance directives, medical equipment, payers, and discharge summaries.
- Ensure evidence grade and provenance travel into every generated representation.
- Decide now how the schema supports both the modern-shifted and true-date datasets, so packaging does not force rework.
- Add coded tobacco, social, functional, and mental-status data so those Observations can claim US Core profiles.

### 3. Harden generators across both pilots

- Regenerate Audie Murphy and Gregory Boyington after schema changes.
- Run both validators after every generator change.
- Add regression checks for cross-patient leakage, deterministic output, identifiers, future dates, terminology, units, and note-to-C-CDA consistency.
- Add the required scan for real identifiers (Social Security, phone, and real NPI patterns) and enforce a D, R, or S tag on every problem, drug, and result.
- Add a broken control fixture to the conformance workflow.
- Improve note templates so author specialty and consultation type come from canonical case data.

### 4. Build pilot 3: Abraham Lincoln

- Extract Lincoln’s roster row and provisional claims.
- Research 3–5 reliable sources, including primary evidence where available.
- Treat disputed or retrospective diagnoses explicitly as `R`.
- Create the canonical case, sources, terminology, modern episode, care plan, and all generated outputs.
- Run the complete validation suite.

### 5. Conduct pilot review and revise templates

- Obtain clinical review of all three pilots.
- Obtain independent provenance review of `D` and `R` claims.
- Complete safe-messaging review, especially for self-harm, addiction, trauma, and contested diagnoses.
- Record review decisions in canonical JSON and update templates before batch generation.

### 6. Finish dataset-level packaging

- Add the selected public license, expected to be CC BY 4.0 unless changed.
- Create `manifest.csv`, a dataset datasheet, and `CHANGELOG.md`.
- Update the v3 workbook’s Claims Register, Sources Register, and Case Build Register.
- Document how to produce modern-shifted and true-date distributions.
- Add batch commands and CI validation, then begin groups of ten records.

## Resume commands

From `D:\chronic_histories`:

```powershell
git status
git log --oneline -12

node scripts/generate_case_outputs.mjs pilots/HR-ET007-audie-murphy/case.json
node scripts/generate_ccda.mjs pilots/HR-ET007-audie-murphy/case.json
node scripts/generate_supporting_docs.mjs pilots/HR-ET007-audie-murphy/case.json
pwsh -File scripts/run_conformance.ps1 -CaseDirectory pilots/HR-ET007-audie-murphy
pwsh -File scripts/validate_case.ps1 -CaseDirectory pilots/HR-ET007-audie-murphy

node scripts/generate_case_outputs.mjs pilots/HR-ET008-gregory-boyington/case.json
node scripts/generate_ccda.mjs pilots/HR-ET008-gregory-boyington/case.json
node scripts/generate_supporting_docs.mjs pilots/HR-ET008-gregory-boyington/case.json
pwsh -File scripts/run_conformance.ps1 -CaseDirectory pilots/HR-ET008-gregory-boyington
pwsh -File scripts/validate_case.ps1 -CaseDirectory pilots/HR-ET008-gregory-boyington
```

On a new machine, run `pwsh -File scripts/install_validators.ps1` once first.

Generators are deterministic and should be run from canonical `case.json`. Do not edit generated artifacts manually.
