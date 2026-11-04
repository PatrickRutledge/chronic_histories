# Changelog

All notable changes to The Human Record dataset. Versions follow [Semantic Versioning](https://semver.org/) as applied to data:

- **Major:** a schema change that breaks existing consumers, or a case withdrawn.
- **Minor:** new cases, new sections or formats, or new schema fields.
- **Patch:** corrections to existing records or documentation.

A case ID is never reused for a different person.

## [Unreleased]

### Added

- Batch 4, ten more draft records in `cases/` for chronic conditions the roster did not cover, all added to the roster as researched candidates: Edward W. Brooke (`HR-ML014`) and Richard Roundtree (`HR-ML015`), both men with breast cancer; Audre Lorde (`HR-ML016`, breast cancer survivorship) and Frances Burney (`HR-EN013`, early breast cancer, with the mastectomy dated to her documented 1811 operation); Leonard Nimoy (`HR-ML017`, COPD); George H. W. Bush (`HR-ML018`, atrial fibrillation from Graves' disease, then hypothyroidism after radioactive iodine); Ann Richards (`HR-ML019`, low bone density with high fracture risk, and alcohol use disorder in sustained remission); Yul Brynner (`HR-ML020`, advanced lung cancer on immunotherapy with early palliative care); Nelson Mandela (`HR-ML021`, localized prostate cancer treated with radiotherapy and short-term hormone therapy); and Hubert H. Humphrey (`HR-ML022`, the year after cystectomy for bladder cancer). Eight fall under the recent-death rule. All are draft and awaiting review.
- Batch 3, ten more draft records in `cases/`, built to the full standard: Arthur Ashe (`HR-ML013`, HIV and coronary disease after bypass surgery; recent-death rule), Billie Holiday (`HR-ML010`, opioid and alcohol use disorder treated with buprenorphine and acamprosate), Fyodor Dostoevsky (`HR-NI018`, epilepsy and gambling disorder), John Henry "Doc" Holliday (`HR-NI007`, cavitary pulmonary tuberculosis treated to cure), Michelangelo Buonarroti (`HR-RE002`, hand osteoarthritis, with gout in remission), Mahatma Gandhi (`HR-ET009`, hypertension, low body weight, and refeeding after a fast, with a dietitian consultation), Katharine Hepburn (`HR-ML012`, essential tremor; recent-death rule), Frederick Law Olmsted (`HR-NI022`, mild dementia of undetermined type), Emily Dickinson (`HR-NI023`, hypertensive chronic kidney disease with home-centered care), and Clara Barton (`HR-NI024`, recurrent major depression treated to remission). Arthur Ashe, Frederick Law Olmsted, Emily Dickinson, and Clara Barton were added to the roster from the Next 50 candidates. All are draft and awaiting review.
- A control that ordinary words containing another case's alias ("likely", "cash", "grant") do not trip the cross-case name check.
- Batch 2, ten more draft records in `cases/`, each built to the full standard in one pass (intake H&P, focused chronic-care visits with protocol monitoring tables, a preventive or annual wellness visit, a sick visit except under the recent-death rule, and a written consultation): Dwight D. Eisenhower (`HR-ET015`, myocardial infarction and coronary disease; added to the roster from the Next 50 candidates), Winston Churchill (`HR-ET001`, lacunar stroke and secondary prevention), Muhammad Ali (`HR-BX001`, Parkinson's disease; recent-death rule), Ray Charles (`HR-ML009`, blindness and opioid use disorder in sustained remission; recent-death rule), Theodore Roosevelt (`HR-NI012`, moderate persistent asthma), Benjamin Franklin (`HR-EN004`, gout and a uric acid bladder stone), David Hume (`HR-EN012`, stage III colon cancer), Annie Oakley (`HR-NI021`, pernicious anemia and chronic back pain), Florence Nightingale (`HR-NI004`, post-infectious ME/CFS), and Helen Keller (`HR-ET006`, deafblindness, falls, and disability-competent preventive care). All are draft and awaiting review.
- Full encounter notes. An encounter can carry a `visit_type` (initial preventive exam, initial or subsequent annual wellness visit, adult preventive visit, or sick visit), a SNOMED CT `type_coding`, and `documentation` with chief complaint, history of present illness, review of systems, examination, and assessment and plan. Wellness and preventive visits add a health risk assessment, a personalized prevention plan, and advance care planning. These visits render as full progress notes in Markdown and as C-CDA Progress Notes with Chief Complaint, HPI, Review of Systems, Physical Exam, Assessment and Plan, and Advance Directives sections; the FHIR Encounter carries the type code and chief complaint. Sick visits are unscheduled, so "next visit" lines and the care plan skip them. Validation requires ten or more systems and a same-day PHQ-2 or PHQ-9 at wellness and preventive visits, and two or more systems at sick visits, and four new controls prove the rules. The visit templates follow the Medicare Preventive Services reference (Aether Forge).
- A review checklist for each record (`generated/review.html`, linked from the record's review page): review status, the dossier's judgment calls, every protocol deviation by visit, orders and referrals without results, retrospective and sensitive claims, unconfirmed diagnoses, abnormal results, and links to every note.
- The three pilots (Audie Murphy, Gregory Boyington, Abraham Lincoln) brought up to the batch standard: focused visits, an adult preventive visit, a sick visit, and a written consultation. Their clinical and safe-messaging reviews are reopened and their release status is back to draft; the earlier approval covered the earlier content.
- Case-specific referrals and consultations (`clinical.consultation`): the referral question, urgency, pertinent history, and numbered questions for the specialist, and the consultant's own history, examination, data reviewed, assessment, recommendations, communication, and follow-up. They replace the generic "coordinated follow-up is appropriate" text in the Markdown notes and the C-CDA Referral and Consultation Notes. Every batch record now has one, and validation requires it for batch records with a referral step.
- Focused chronic-care visits. A chronic-care visit with documentation is written as a full focused note with a protocol monitoring table: each item the condition's monitoring protocol (CMID or the specialty guideline) calls for at that visit, with its interval, status (done today, up to date, due, ordered, deferred, or not indicated), and the results it produced. Validation requires every result drawn that day to appear in the table, and a new control proves it. Susan B. Anthony's three heart failure follow-ups are the pattern case. Every other draft record's chronic-care follow-ups are now focused visits on their CMID monographs or specialty guidelines. Protocol checks the schedules never performed are recorded as deviations with their outcome and corrective action, never filled with invented results.
- Sick, preventive, and annual wellness visits for the batch records. Adult preventive visit and sick visit: Franklin D. Roosevelt (viral gastroenteritis with sick-day rules for his heart failure medicines), Booker T. Washington (lumbar strain after over-the-counter naproxen, a kidney risk in his CKD), and Frida Kahlo (common cold and the cold-remedy interactions with her opioid taper). Annual wellness visit and sick visit: Georgia O'Keeffe (ankle sprain from a fall linked to her low contrast vision) and Harriet Tubman (viral gastroenteritis with a candesartan-related creatinine rise). Annual wellness visit only, under the recent-death rule: Johnny Cash and Ronald Reagan. Sick visit only: Ulysses S. Grant (viral bronchitis during his cancer workup). Marie Curie gets no new visit: her true-frame death date falls five days after her last scheduled visit. The approved pilots are unchanged.
- `as_needed` on medications (FHIR `asNeededBoolean`), and a `min` frequency unit, so PRN medicines are no longer presented as fixed schedules.
- `health_risk_assessment_method` on full encounter notes, for an assessment completed with a caregiver's help.
- `HR-NI014` Susan B. Anthony: an unscheduled sick visit for viral bronchitis and a subsequent annual wellness visit with Mini-Cog, AUDIT-C, and PHQ-2 screens, a same-day influenza vaccine, and a written prevention plan. This is the pattern case for adding these visits to the other records.
- Batch 1, nine more draft records in `cases/`: Booker T. Washington (hypertensive kidney disease), Susan B. Anthony (heart failure with preserved ejection fraction), Harriet Tubman (post-traumatic headache and sleep episodes), Johnny Cash (type 2 diabetes with autonomic neuropathy, glaucoma), Ronald Reagan (Alzheimer's disease after a hip fracture), Georgia O'Keeffe (age-related macular degeneration), Ulysses S. Grant (oropharyngeal cancer), Marie Curie (aplastic anemia, cataract), and Frida Kahlo (chronic post-traumatic pain on long-term opioids). Visit schedules follow the CMID monitoring intervals where the condition has a monograph, and the specialty guideline otherwise. All are draft and awaiting review.
- `recorded_date` on problems: a diagnosis made at a later visit is left out of earlier visits' documents, and its C-CDA onset is that date.
- Medication routes `nasal`, `ophthalmic`, and `intravitreal`.
- `cases/` for batch records, built, validated, and listed in `manifest.csv` like the pilots. First batch record: Franklin D. Roosevelt (`HR-ET002`), hypertensive heart failure with reduced ejection fraction over four visits on the CMID heart failure and hypertension monitoring schedules, with 42 laboratory, imaging, and survey results. Status draft, awaiting review.
- One progress note per visit in both the Markdown notes and the C-CDA note documents, so a case can have more than three visits.
- Laboratory and imaging results. An observation with `category: "laboratory"` or `"imaging"` carries a reference range, an interpretation flag (N, H, L, HH, LL, A), an optional panel, and an optional short `label` for note prose. FHIR emits US Core lab (or clinical-result, for imaging) Observations with `referenceRange` and `interpretation`; C-CDA result observations carry `interpretationCode` and `referenceRange`, and results drawn together are grouped by panel. Validation fails a flag that disagrees with its range, and two new controls prove it. The test fixture exercises the path with a hepatic panel.
- A made-up Social Security number for every patient (`synthetic_identity.ssn`), always in the never-issued 000 area. It appears as a patient identifier in every C-CDA document and in the FHIR Patient. The identifier scan still rejects any other SSN-shaped number, and a new control rejects a case SSN outside the 000 area.
- C-CDA note documents for every case: History and Physical, a Progress Note per visit, Referral Note, and Consultation Note. The referral order is coded once and shared by the Referral Note, the Consultation Note's `inFulfillmentOf`, and a US Core `ServiceRequest`. Every document passes the CDA XSD and C-CDA R2.1 Schematron, and the local checks confirm each carries the case's patient name, birth date, and MRN.
- `HR-ET008` Gregory Boyington: an explicit referral step (INT-005) to behavioral health for the trauma-focused psychotherapy already in his plan.

- `CONTRIBUTING.md` with the evidence, sourcing, safety, and build rules for contributors.
- `CLA.md`: individual and corporate contributor license agreements with a relicensing right and a public-license commitment.

### Fixed

- The cross-case name check matched other cases' names and aliases inside ordinary words, so the alias "Ike" failed any record containing "likely". It now matches whole words, case-sensitively.
- Note documents and the intake H&P listed medications that started after their date. They now list only medications started by then; the CCD summary keeps the full history.
- The intake H&P listed procedures and immunizations dated after the intake visit.
- The last progress note told every patient to continue "the safety plan", even when the case had none.
- The check that every result appears in the notes could not match a negative value such as a T-score.
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
