# Terminology — Samuel Johnson

> **SYNTHETIC RECORD, NOT A REAL MEDICAL RECORD**

## Diagnoses

| Use | System | Code | Display | Evidence |
|---|---|---|---|---|
| Active problem | ICD-10-CM FY2026 | F33.2 | Major depressive disorder, recurrent severe without psychotic features | S; linked to his documented melancholy |
| Presenting concern, resolved at the neurology consultation | ICD-10-CM FY2026 | F95.9 | Tic disorder, unspecified | S; linked to the documented tics |
| Active problem, from the second visit | ICD-10-CM FY2026 | F95.2 | Tourette's disorder | S; linked to the documented tics and the R retrospective diagnosis |
| Active problem | ICD-10-CM FY2026 | H54.42 | Blindness, left eye, normal vision right eye | S; linked to his documented loss of sight in one eye (laterality synthetic) |
| Resolved problem | ICD-10-CM FY2026 | S39.012A | Strain of muscle, fascia and tendon of lower back, initial encounter | S; recorded at the August sick visit |

## Medications (RxNorm)

| Code | Display |
|---|---|
| 312941 | sertraline 50 MG Oral Tablet (intake to six weeks) |
| 312938 | sertraline 100 MG Oral Tablet (from six weeks) |
| 197805 | ibuprofen 400 MG Oral Tablet (sick visit, five days) |
| 198051 | omeprazole 20 MG Delayed Release Oral Capsule (sick visit, five days) |

## Results (LOINC 2.81)

| Code | Measure | Unit | Category |
|---|---|---|---|
| 718-7 | Hemoglobin | g/dL | laboratory |
| 51990-0 | Basic metabolic panel (organizer) | — | panel |
| 2951-2, 2823-3, 2160-0, 98979-8, 2345-7 | Sodium, potassium, creatinine, eGFR (CKD-EPI 2021), glucose | mmol/L, mg/dL, mL/min/{1.73_m2} | laboratory |
| 3016-3, 2132-9, 1742-6 | TSH, vitamin B12, ALT | m[IU]/L, pg/mL, U/L | laboratory |
| 2093-3, 2085-9, 13457-7, 2571-8, 4548-4 | Total, HDL, and LDL cholesterol, triglycerides, HbA1c (preventive visit) | mg/dL, % | laboratory |
| 48159-8 | Hepatitis C antibody signal-to-cutoff | {s_co_ratio} | laboratory |
| 16935-9 | Hepatitis B surface antibody | m[IU]/mL | laboratory |
| 44261-6 | PHQ-9 total score | {score} | survey |
| 70274-6 | GAD-7 total score | {score} | survey |
| 84773-1 | Mood Disorder Questionnaire total score | {score} | survey |
| 75626-2 | AUDIT-C total score | {score} | survey |

The Yale Global Tic Severity Scale and the Yale-Brown Obsessive Compulsive Scale are recorded in the notes only, because no LOINC code was found for them; no code was invented. eGFR is calculated from the synthetic creatinine with the 2021 CKD-EPI creatinine equation for a 55-year-old man. Reference ranges are typical adult ranges chosen for the teaching record; interpretation flags follow them, and validation checks that every flag agrees with its range.

## Procedures, immunizations, and family history

- Advance care planning: SNOMED CT 713603004.
- Immunizations: CVX 187 (recombinant zoster, two doses), 216 (PCV20), 115 (Tdap), 189 (HepB-CpG, two doses), and 140 (influenza).
- No known allergy: SNOMED CT 716186003.
- Encounter types: SNOMED CT 390906007 (follow-up encounter) for the four focused chronic-care visits, 86013001 (periodic reevaluation and management of healthy individual) for the preventive visit, and 185345009 (encounter for symptom) for the sick visit. The services are named in plain text as CPT 99396 and 99497; CPT is not used as a coded value.
- Family relationships: HL7 RoleCode FTH (father) and WIFE (wife).

## Vital signs

The seven visits use LOINC 8302-2, 29463-7, 39156-5, 8480-6, 8462-4, 8867-4, 9279-1, 8310-5, and 59408-5 with UCUM units.

## Review note

Codes were checked against the public terminology server, the NLM Clinical Tables LOINC search, and NLM RxNav on November 4, 2026. They do not imply that Johnson received these diagnoses, tests, or treatments during his lifetime.
