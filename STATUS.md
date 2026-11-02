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
- License: data and documentation under CC BY-NC 4.0, with commercial licenses from AetherForge on request (`COMMERCIAL-USE.md`). Code and schema under MIT. Chosen so that companies that profit from the data license it and can fund further work.
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
- FHIR resources: 57
- C-CDA sections: 18
- C-CDA problem entries: 2
- C-CDA result entries: 6
- C-CDA encounter entries: 3
- C-CDA vital-sign entries: 27
- Supporting documents: 8
- Provenance rows: 72
- CDA XSD, C-CDA R2.1 Schematron, FHIR R4, US Core 6.1.0: 0 errors (116 Schematron, 80 FHIR R4, and 86 US Core warnings)

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
- FHIR resources: 60
- C-CDA sections: 18
- C-CDA problem entries: 2
- C-CDA result entries: 9
- C-CDA encounter entries: 3
- C-CDA vital-sign entries: 27
- Supporting documents: 8
- Provenance rows: 75
- CDA XSD, C-CDA R2.1 Schematron, FHIR R4, US Core 6.1.0: 0 errors (126 Schematron, 89 FHIR R4, and 95 US Core warnings)

### Pilot 3: Abraham Lincoln (`HR-NI001`)

Location: `pilots/HR-NI001-abraham-lincoln/`

- Historical dossier with twelve graded claims from his own letters and autobiographies, NPS sources, and PubMed abstracts
- Corrected the roster's "grief (3 of 4 sons died)": two sons died during his lifetime and are sourced
- Chronic depression, Marfan syndrome or another marfanoid disorder, and the 1863 smallpox interpretation remain retrospective (`R`)
- Index age 32, his January 1841 episode; past medical and family history include only events before 1841
- First pilot with sourced family history (mother 1818, sister 1828) and an active medication
- Modern synthetic episode: moderate major depression treated with sertraline monotherapy, chosen by shared decision-making under the 2022 VA/DoD guideline, with PHQ-9 at three visits and psychiatry consultation
- HTML review page, FHIR bundle, C-CDA, eight notes, and provenance CSV

Current validation:

- JSON Schema: PASS
- Age and dates: PASS
- Provenance links: PASS
- FHIR resources: 54
- C-CDA sections: 18
- Provenance rows: 75
- CDA XSD, C-CDA R2.1 Schematron, FHIR R4, US Core 6.1.0: 0 errors

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

- Formal validation passes with zero errors, but rules test only content that exists. Neither pilot has medications or family-history entries; those paths are tested by `tests/fixtures/HR-TST001-code-paths`. Social, functional, mental-status, and safety Observations declare no US Core profile. See `docs/validation.md`.
- The official Schematron has three defective assertions (CONF:1098-8583, 1198-30768, 1198-30235). They are corrected at install time and should be reported to HL7.
- Family history is empty for both pilots. Real relatives' history must come from sources, so it awaits provenance research.
- FHIR validation depends on the public `tx.fhir.org` terminology server, so results can change as its content changes.
- FHIR validation now checks LOINC and ICD-10-CM codes through the terminology server, but there is not yet an automated resolver covering every SNOMED CT, RxNorm, CVX, and UCUM entry, including C-CDA-only content.
- C-CDA problem values are ICD-10-CM only. They should gain SNOMED CT codes.
- Advance directives, medical equipment, payers, and discharge summaries are not yet modeled. They are optional and needed only when a figure's history calls for them.
- Human clinical, provenance, and safe-messaging reviews have not occurred. Both pilots remain drafts.
- Primary memoir and archival verification remains incomplete for both pilots.
- The workbook’s Case Build Register and Claims Register have not yet been updated with the completed pilot status and resolved claim decisions.
- Dataset-level `manifest.csv`, datasheet, and changelog have not been created.
- The true-date distribution is designed (`docs/date-shifting.md`) but not yet generated.
- Generated notes are synchronized summaries suitable for review and testing. They still need clinician review before being treated as exemplary clinical documentation.

## Recommended continuation order

### 1. Establish formal validation (complete)

Done. See `docs/validation.md` for pinned tools, commands, and limits. Both pilots have zero errors at every stage.

### 2. Complete the canonical clinical model (mostly complete)

Done:

- Typed schema and generator support for medications, allergies, procedures, immunizations, family history, and past medical history, in C-CDA, FHIR, notes, the review page, and provenance.
- Reason for visit, allergies with a no-known-allergy assertion, procedures, immunizations, past medical history, family history, health concerns, and assessment sections in the C-CDA.
- Family history and past medical history accept only `D` or `R` grades linked to claims.
- True-date distribution design, with a validator check that keeps it exact.

Remaining:

- Support optional advance directives, medical equipment, payers, and discharge summaries.
- Add coded tobacco, social, functional, and mental-status data so those Observations can claim US Core profiles.
- Add SNOMED CT codes to problems alongside ICD-10-CM.

### 3. Harden generators across both pilots (mostly complete)

Done:

- `scripts/build.ps1` runs every generator and check, stops at the first failure, and deletes earlier outputs first.
- A build manifest with line-ending-normalized hashes rejects stale or hand-edited outputs. Conformance summaries use the same normalized hashes, so Git line-ending conversion no longer marks them stale.
- Checks for real-looking identifiers (Social Security numbers, phone numbers outside 555-0100 to 555-0199, valid-checksum NPIs), a D, R, or S grade on every FHIR clinical resource and provenance row, and leakage of another case's name, alias, or MRN.
- `scripts/run_controls.ps1` runs 13 negative and determinism controls, 2 of them against the formal validators.
- Consultant name and specialty come from `synthetic_identity.fictional_consultant`.

Remaining:

- Automated terminology resolution for C-CDA-only codes; FHIR codes are already checked by the terminology server.
- Note-to-C-CDA consistency for medications, allergies, and vital signs, beyond the current visit-date and result-value checks.
- CI that runs the build and controls on every push.

### 4. Build pilot 3: Abraham Lincoln (complete)

- Extract Lincoln’s roster row and provisional claims.
- Research 3–5 reliable sources, including primary evidence where available.
- Treat disputed or retrospective diagnoses explicitly as `R`.
- Create the canonical case, sources, terminology, modern episode, care plan, and all generated outputs.
- Run the complete validation suite.

### 5. Conduct pilot review and revise templates

Template weaknesses already seen in all three pilots, to fix after clinician review:

- Progress notes repeat the full plan at every visit, so the twelve-week note still says "start" a medication. Notes need a per-visit plan and a medication-changes section.
- The consultation note lists the consultation itself among its recommendations.
- The H&P "Historical basis" lists every claim, including events after the index age.
- The history of present illness capitalizes the concern mid-sentence, and scores print with their UCUM annotation, for example `14 {score}`.


- Obtain clinical review of all three pilots.
- Obtain independent provenance review of `D` and `R` claims.
- Complete safe-messaging review, especially for self-harm, addiction, trauma, and contested diagnoses.
- Record review decisions in canonical JSON and update templates before batch generation.

### 6. Finish dataset-level packaging

- Add the license (done: `LICENSE`, `LICENSE-DATA`, `LICENSE-CODE`, `COMMERCIAL-USE.md`, `NOTICE.md`). Still open: a private licensing contact for AetherForge, a contributor agreement before accepting outside data.
- Create `manifest.csv`, a dataset datasheet, and `CHANGELOG.md`.
- Update the v3 workbook’s Claims Register, Sources Register, and Case Build Register.
- Document how to produce modern-shifted and true-date distributions.
- Add batch commands and CI validation, then begin groups of ten records.

## Ideas to evaluate later

These are not work instructions.

- **Referral-partner roster.** A short, reusable list of specialists, therapists, and referral partners would simplify progress notes and shared records. One option is historical physicians with posterity, such as 18th- and 19th-century surgeons and specialists. Before adopting it, resolve two questions: the ground rules require fictional clinicians and facilities, and a note signed by a real person who never wrote it would misattribute words to them. Fictional partners modeled on historical specialists would avoid both.

## Resume commands

From `D:\chronic_histories`:

```powershell
git status
git log --oneline -12

pwsh -File scripts/build.ps1 -Conformance
pwsh -File scripts/run_controls.ps1 -Conformance
```

On a new machine, run `pwsh -File scripts/install_validators.ps1` once first.

Generators are deterministic and should be run from canonical `case.json`. Do not edit generated artifacts manually.
