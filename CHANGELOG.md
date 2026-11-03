# Changelog

All notable changes to The Human Record dataset. Versions follow [Semantic Versioning](https://semver.org/) as applied to data:

- **Major:** a schema change that breaks existing consumers, or a case withdrawn.
- **Minor:** new cases, new sections or formats, or new schema fields.
- **Patch:** corrections to existing records or documentation.

A case ID is never reused for a different person.

## [Unreleased]

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
