# Changelog

All notable changes to The Human Record dataset. Versions follow [Semantic Versioning](https://semver.org/) as applied to data:

- **Major:** a schema change that breaks existing consumers, or a case withdrawn.
- **Minor:** new cases, new sections or formats, or new schema fields.
- **Patch:** corrections to existing records or documentation.

A case ID is never reused for a different person.

## [Unreleased]

### Added

- `cases/` for batch records, built, validated, and listed in `manifest.csv` like the pilots. First batch record: Franklin D. Roosevelt (`HR-ET002`), hypertensive heart failure with reduced ejection fraction over four visits on the CMID heart failure and hypertension monitoring schedules, with 42 laboratory, imaging, and survey results. Status draft, awaiting review.
- One progress note per visit in both the Markdown notes and the C-CDA note documents, so a case can have more than three visits.
- Laboratory and imaging results. An observation with `category: "laboratory"` or `"imaging"` carries a reference range, an interpretation flag (N, H, L, HH, LL, A), an optional panel, and an optional short `label` for note prose. FHIR emits US Core lab (or clinical-result, for imaging) Observations with `referenceRange` and `interpretation`; C-CDA result observations carry `interpretationCode` and `referenceRange`, and results drawn together are grouped by panel. Validation fails a flag that disagrees with its range, and two new controls prove it. The test fixture exercises the path with a hepatic panel.
- A made-up Social Security number for every patient (`synthetic_identity.ssn`), always in the never-issued 000 area. It appears as a patient identifier in every C-CDA document and in the FHIR Patient. The identifier scan still rejects any other SSN-shaped number, and a new control rejects a case SSN outside the 000 area.
- C-CDA note documents for every case: History and Physical, a Progress Note per visit, Referral Note, and Consultation Note. The referral order is coded once and shared by the Referral Note, the Consultation Note's `inFulfillmentOf`, and a US Core `ServiceRequest`. Every document passes the CDA XSD and C-CDA R2.1 Schematron, and the local checks confirm each carries the case's patient name, birth date, and MRN.
- `HR-ET008` Gregory Boyington: an explicit referral step (INT-005) to behavioral health for the trauma-focused psychotherapy already in his plan.

- `CONTRIBUTING.md` with the evidence, sourcing, safety, and build rules for contributors.
- `CLA.md`: individual and corporate contributor license agreements with a relicensing right and a public-license commitment.

### Fixed

- The C-CDA links on the review page opened a blank page: every document referenced a `ccda.xsl` stylesheet that was never generated, and browsers do not apply XSLT to local files anyway. The reference is removed, and each C-CDA document now has a readable HTML copy beside it (`ccda.html`, `ccda/*.html`), linked from the review page with the XML.
- The review page listed only three progress notes. It now lists one per visit, and a new section links every C-CDA note document.
- FDR had no evidence dossier, so the review page's dossier link was broken. `sources.md` and `terminology.md` are added, and validation now requires both for every case in `pilots/` and `cases/`.
- Change since baseline in progress notes compared the wrong instrument when a case used two (Murphy's PHQ-9 showed his PCL-5 baseline). True-date notes were missing from the build manifest because of a broken path.

### Changed

- `clinical.safety_assessment` is optional. Validation requires it when a case has a behavioral-health diagnosis (ICD-10-CM F10-F99) or a positive depression screen (PHQ-9 of 10 or more, PHQ-2 of 3 or more), and a new control proves it.
- `HR-ET007` Audie Murphy: the safety plan now names crisis resources, including the 988 Suicide & Crisis Lifeline, as the other pilots do and `CONTRIBUTING.md` requires.

## [0.2.0] - 2026-11-02

First approved release. The three pilots passed clinical, provenance, and safe-messaging review.

### Added

- True-date distribution: every build derives `generated/true-date/` for each case, with synthetic events moved into the patient's lifetime and an anachronism notice on every output.
- `scripts/sync_workbook_registers.py` fills the workbook's Claims, Sources, and Case Build registers from the cases.
- GitHub Actions CI: committed outputs must be current, a rebuild must match them, and the negative controls must pass.
- Dataset packaging: `manifest.csv`, generated from the pilot cases on every build, and a [datasheet](docs/datasheet.md).
- `identity.era` and `identity.nationality` in the case schema, both required and taken from the master roster.
- Dual license: CC BY-NC 4.0 for data and documentation, MIT for code and schema. Commercial licenses are available from Aether Forge ([COMMERCIAL-USE.md](COMMERCIAL-USE.md)). Third-party terms are in [NOTICE.md](NOTICE.md).

- Review decisions recorded in every pilot case, with reviewer, date, and notes. A release gate rejects an approved case unless every review has passed and every claim is approved.

### Changed

- Note templates: follow-up progress notes show change since baseline, medication changes, goal progress, and the next visit instead of repeating the initial plan. The consultation and referral no longer recommend themselves. Clinical notes cite only claims about events before the index age. The history of present illness lists concerns as sentences, and scores print without UCUM annotations.
- The fictional facility in every case is now "St. Posthumous Health Center", replacing two "AetherForge" health centers. Aether Forge is the real licensing organization.

## [0.1.0] - 2026-11-02

First pilot set. All records are drafts pending clinical, provenance, and safe-messaging review.

### Added

- Three pilot cases:
  - `HR-ET007` Audie Murphy: PTSD and insomnia.
  - `HR-ET008` Gregory Boyington: alcohol use disorder and PTSD.
  - `HR-NI001` Abraham Lincoln: moderate major depression with sertraline.
- Canonical case schema, with D/R/S evidence grades and claim-level provenance.
- Date-shift policy `HR-DATE-SHIFT-1`, plus the design for a true-date distribution.
- Generators for C-CDA R2.1, FHIR R4 with US Core 6.1.0 profiles, the HTML review page, eight supporting notes, and the provenance CSV.
- Clinical sections: allergies, medications, procedures, immunizations, past medical and family history, health concerns, goals, vitals, results, functional and mental status, and safety assessment.
- Formal validation with the CDA XSD, the C-CDA R2.1 Schematron, the FHIR R4 validator, and US Core. All pilots have zero errors.
- A fail-fast build with hash manifests and stale-output detection, plus negative controls.
- Master roster v3 with normalized claims, sources, and case-build registers.

### Fixed

- The Reason for Visit template ID, and given names rendered with a comma in C-CDA.
- Allergy type codes, which now come from the required value sets.
- Upstream C-CDA Schematron defects, corrected at install time and documented in [validation.md](docs/validation.md).
