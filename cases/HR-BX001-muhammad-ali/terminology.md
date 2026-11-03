# Terminology — Muhammad Ali

> **SYNTHETIC RECORD, NOT A REAL MEDICAL RECORD**

## Diagnoses

| Use | System | Code | Display | Evidence |
|---|---|---|---|---|
| Active problem | ICD-10-CM FY2026 | G20.A1 | Parkinson's disease without dyskinesia, without mention of fluctuations | S; linked to the publicly disclosed 1984 diagnosis |
| Active problem | ICD-10-CM FY2026 | R47.1 | Dysarthria and anarthria | S; linked to the publicly reported speech difficulty |

The disputed link to boxing is not coded.

## Medications (RxNorm)

| Code | Display |
|---|---|
| 197444 | carbidopa 25 MG / levodopa 100 MG Oral Tablet (one tablet three times daily, then one and a half tablets three times daily) |

## Results (LOINC 2.81)

| Code | Measure | Unit | Category |
|---|---|---|---|
| 718-7 | Hemoglobin | g/dL | laboratory |
| 51990-0 | Basic metabolic panel (organizer) | — | panel |
| 2951-2, 2823-3, 2160-0, 98979-8, 2345-7, 17861-6 | Sodium, potassium, creatinine, eGFR (CKD-EPI 2021), glucose, calcium | mmol/L, mg/dL, mL/min/{1.73_m2} | laboratory |
| 2132-9, 3016-3 | Vitamin B12, TSH | pg/mL, m[IU]/L | laboratory |
| 2093-3, 2085-9, 13457-7, 2571-8 | Total cholesterol, HDL cholesterol, LDL cholesterol (calculated), triglycerides (preventive visit) | mg/dL | laboratory |
| 4548-4 | HbA1c (preventive visit) | % | laboratory |
| 72172-0 | MoCA total score | {score} | survey |
| 44261-6 | PHQ-9 total score | {score} | survey |
| 55758-7 | PHQ-2 total score (preventive visit) | {score} | survey |
| 75626-2 | AUDIT-C total score (preventive visit) | {score} | survey |

Reference ranges are typical adult ranges chosen for the teaching record; interpretation flags follow them, and validation checks that every flag agrees with its range. The lipid results are not grouped under a panel code, because the LOINC lipid panel names include a year that the true-date variant cannot shift.

Hoehn and Yahr stage, MDS-UPDRS Part III, Timed Up and Go, the pull test, EAT-10, the REM sleep behavior disorder questionnaire, the Epworth Sleepiness Scale, QUIP-RS, and GAD-2 have no verified LOINC code on the terminology server and are recorded as narrative in the functional status and visit notes.

## Procedures, immunizations, and family history

- Speech therapy: SNOMED CT 5154007 (four-week LSVT LOUD course).
- Advance care planning: SNOMED CT 713603004.
- Encounter types: SNOMED CT 390906007 (follow-up encounter) for the three focused chronic-care visits and 86013001 (periodic reevaluation and management of healthy individual) for the preventive visit. The services are named in plain text as CPT 99396 and 99497; CPT is not used as a coded value.
- Immunizations: CVX 140 (influenza, trivalent, the 2025-2026 dose and the 2026-2027 dose), 216 (PCV20), and 187 (recombinant zoster, dose 1).
- No known allergy: SNOMED CT 716186003.
- Family history: none recorded; no fetched source documents a relative's health.

## Vital signs

The five visits use LOINC 8302-2, 29463-7, 39156-5, 8480-6, 8462-4, 8867-4, 9279-1, 8310-5, and 59408-5 with UCUM units. Supine and standing blood pressures are recorded in the functional status and visit notes.

## Review note

Codes were checked against the public terminology server and NLM RxNav on November 3, 2026. They do not imply that Ali received these diagnoses, tests, or medications during his lifetime.
