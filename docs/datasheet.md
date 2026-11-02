# Datasheet: The Human Record (HISTMED)

> **SYNTHETIC RECORD, NOT A REAL MEDICAL RECORD**

This datasheet follows the structure of Gebru et al., "Datasheets for Datasets" (2021). It describes release 0.1.0, a pilot release. Figures for the full roster describe the planned dataset, not records that exist yet.

## Motivation

**Purpose.** The Human Record is a set of synthetic clinical records for testing, teaching, and demonstrating health-IT systems. Each record is anchored on a deceased historical figure, so a reader can see which parts of the record come from history and which were invented for the teaching episode.

**Gap it fills.** Most synthetic EHR data is either fully generated, as with Synthea, or de-identified real data under use restrictions. Neither shows where each assertion came from. Every clinical statement here carries an evidence grade and links to sourced claims.

**Destigmatization aim.** Anchor figures were chosen partly to show that conditions such as depression, PTSD, and addiction are compatible with significant achievement. See the roster's Destigmatization Guide.

**Creator and funding.** Pat Rutledge, Aether Forge (<https://aetherforge.us>). The project has no external funding. Commercial licensing is meant to fund further work; see [COMMERCIAL-USE.md](../COMMERCIAL-USE.md).

## Composition

**Instances.** One instance is one case: a historical figure plus one synthetic modern care episode of about three months. Release 0.1.0 contains three pilot cases, listed in [manifest.csv](../manifest.csv).

| Case | Figure | Era | Synthetic episode |
|---|---|---|---|
| HR-ET007 | Audie Murphy | Early 20th Century | PTSD and insomnia, age 40 |
| HR-ET008 | Gregory Boyington | Early 20th Century | Alcohol use disorder and PTSD, age 44 |
| HR-NI001 | Abraham Lincoln | 19th Century | Moderate major depression, age 32 |

**Files per case.**

- `case.json`: the canonical record, valid against [schema/case.schema.json](../schema/case.schema.json). Everything else is generated from it.
- `generated/ccda.xml`: C-CDA R2.1 Continuity of Care Document.
- `generated/fhir-bundle.json`: FHIR R4 collection bundle with US Core 6.1.0 profiles.
- `generated/index.html`: a review page for people.
- `generated/notes/`: eight notes covering the history and physical, three progress notes, a consultation, a referral, a care plan, and a summary.
- `generated/provenance.csv`: one row per clinical element, with its evidence grade and linked claims.
- `sources.md` and `terminology.md`: the source list and coding notes for reviewers.
- `generated/true-date/`: the same record with synthetic events moved into the patient's historical lifetime, with its own case ID and MRN ending in `-TD`. See [date-shifting.md](date-shifting.md).

**Evidence grades.** Every clinical element carries one of three grades.

- `D`, documented: supported by a primary or reliable source.
- `R`, retrospective: a later historical or clinical interpretation, such as a modern diagnosis proposed for a historical person.
- `S`, synthetic: invented for the teaching episode. This includes every modern encounter, measurement, medication, and date.

**What is real.** The figure's name, sex, birth and death dates, documented events, past medical history, and family history are historical. They must be graded `D` or `R` and linked to sources.

**What is fictional.** Every clinician, facility, MRN, address, phone number, encounter, vital sign, score, medication order, and modern date is synthetic. Clinicians have invented names. The facility is "St. Posthumous Health Center", with an unassigned ZIP code (00000) and a phone number in the 555-0100 to 555-0199 range reserved for fiction.

**Identifiers.** The records contain no real identifiers. Validation rejects anything resembling a Social Security number, a phone number outside the fictional range, or a valid-format NPI.

**Missing data.** The schema allows partial or approximate historical dates and records conflicting dates as alternatives. Where history is silent, the record says so rather than inventing content. Family history is empty when nothing is sourced.

**Sensitive content.** Records cover mental illness, substance use, combat trauma, and suicide-risk screening. Claims marked sensitive and cases with a safety assessment are flagged in `manifest.csv`. No record describes methods of self-harm.

## Collection process

**Historical content.** Facts were collected by hand from primary documents, U.S. National Park Service and other public-institution pages, and peer-reviewed literature, mostly abstracts. Each source is logged with its access date. The master roster's inherited clinical claims were treated as provisional leads, not as evidence.

**Synthetic content.** Each case defines its modern episode by hand: diagnosis, instruments, medications, and plan, following named clinical practice guidelines. Generators then render the formats deterministically. No language model writes record content at build time. The case files, source dossiers, and code were drafted with an AI assistant (Claude) and are awaiting human clinical and provenance review.

**Dates.** Modern dates follow policy `HR-DATE-SHIFT-1` ([date-shifting.md](date-shifting.md)). The synthetic birth date keeps the true month and day, with the year chosen so the patient is the selected index age at a 2026 visit.

**Timeframe.** Built in November 2026. Sources were accessed on the dates recorded in each case.

**Consent.** Every anchor figure is deceased. Figures who died after 1990 need extra review before release, and records may use only what they or their physicians made public. None of the three pilots falls in that group.

## Preprocessing and validation

- JSON Schema validation, plus project checks: age arithmetic, date bounds, claim links, grade consistency, identifier scans, and leakage of other cases' names.
- C-CDA: the HL7 CDA XSD and the official C-CDA R2.1 Schematron.
- FHIR: the HL7 FHIR Validator against base R4 and US Core 6.1.0, with codes checked against tx.fhir.org.
- Builds are deterministic, and hash manifests detect hand edits or stale outputs. Negative controls confirm that each check still fires.

See [validation.md](validation.md) for what a pass does and does not establish.

## Uses

**Intended uses.**

- Testing C-CDA and FHIR import, parsing, reconciliation, and display.
- Teaching clinical documentation, evidence grading, and provenance.
- Demonstrations and training environments where real patient data cannot be used.
- Research on synthetic data and provenance tracking.

**Uses to avoid.**

- Clinical decision-making or diagnosis about real people.
- Claims about what a historical figure actually had. Use the `D` and `R` claims and their sources, not the synthetic diagnosis.
- Training models to infer health conditions of identifiable living people.
- Epidemiology or prevalence estimates. Cases were selected for teaching value, not sampled.
- Presenting any record as real, or removing the synthetic banner.

## Biases and limitations

**Selection and survivorship.** Figures were chosen because they are famous and well documented. That over-represents people who achieved public success and whose conditions were recorded, often by biographers rather than clinicians.

**Demographic skew.** In the 86-figure master roster:

- Sex: 69 male and 17 female (80% male).
- Nationality: 44 American (51%) and 11 English, with no more than 3 for any other nationality.
- Era: 23 from the 19th century, 20 early 20th century, 20 mid-to-late 20th century, 13 Enlightenment, 5 Renaissance and early modern, and 5 ancient and classical.

All three pilot cases are American men, and two are World War II veterans. The roster's build roadmap plans additional women, non-Western figures, and original archetypes to correct this. Until then, do not treat the dataset as representative of any population.

**Retrospective diagnosis.** Diagnoses for historical figures are contested. They are graded `R` and never placed on the active problem list as fact. The synthetic active diagnosis is a teaching construct.

**Modern-frame anachronism.** The synthetic episode uses modern codes, instruments, and drugs. When dates are shifted back to the true historical frame, the content becomes anachronistic, for example a PHQ-9 score in 1841.

**Clinical review.** No clinician has reviewed the release 0.1.0 records yet. They are drafts. The review status of each case is in `manifest.csv`.

**Conformance.** Passing XSD, Schematron, and US Core validation shows structural conformance only. It does not show clinical accuracy or that every code is current. Codes that the terminology server could not verify are counted separately.

**Template weaknesses.** Known note-template problems are listed in [STATUS.md](../STATUS.md) under step 5.

## Distribution

- **Where:** the GitHub repository <https://github.com/PatrickRutledge/chronic_histories>.
- **License:** data and documentation under CC BY-NC 4.0, code and schema under MIT. Commercial use of the data needs a license from Aether Forge. See [LICENSE](../LICENSE) and [COMMERCIAL-USE.md](../COMMERCIAL-USE.md).
- **Third-party terms:** codes from LOINC, SNOMED CT, CPT, RxNorm, and others stay under their owners' terms. See [NOTICE.md](../NOTICE.md).

## Maintenance

- **Maintainer:** Aether Forge, <NameAppliedFor@gmail.com>.
- **Errors and corrections:** open an issue on the repository. Corrections to historical claims should cite a source.
- **Versioning:** each release is recorded in [CHANGELOG.md](../CHANGELOG.md). A case's ID is never reused for a different person.
- **Contributions:** accepted only under an agreement that allows them to be included in commercial licenses.
