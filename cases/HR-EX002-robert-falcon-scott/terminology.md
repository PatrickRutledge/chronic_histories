# Terminology — Robert Falcon Scott

> **SYNTHETIC RECORD, NOT A REAL MEDICAL RECORD**

## Diagnoses

| Use | System | Code | Display | Evidence |
|---|---|---|---|---|
| Presenting finding, resolved at the second visit | ICD-10-CM FY2026 | R03.0 | Elevated blood-pressure reading, without diagnosis of hypertension | S |
| Active problem | ICD-10-CM FY2026 | F17.290 | Nicotine dependence, other tobacco product, uncomplicated | S; linked to his documented tobacco use |
| Active problem, from the second visit | ICD-10-CM FY2026 | I10 | Essential (primary) hypertension | S |
| Active problem | ICD-10-CM FY2026 | Z86.39 | Personal history of other endocrine, nutritional and metabolic disease | S; linked to his documented scurvy |
| Resolved problem | ICD-10-CM FY2026 | A08.4 | Viral intestinal infection, unspecified | S; recorded at the May sick visit |

## Medications (RxNorm)

| RxCUI | Name | Use |
|---|---|---|
| 636676 | varenicline 1 MG Oral Tablet | Stopping pipe tobacco |
| 979492 | losartan potassium 50 MG Oral Tablet | Hypertension, from the three-month visit |
| 199083 | ascorbic acid 250 MG Oral Tablet | Scurvy prevention when no fresh food is available, from the pre-departure visit |

## Results (LOINC 2.81)

| Code | Measure | Unit | Category |
|---|---|---|---|
| 51990-0 | Basic metabolic panel (organizer) | — | panel |
| 2951-2, 2823-3, 2160-0, 98979-8, 2345-7 | Sodium, potassium, creatinine, eGFR (CKD-EPI 2021), fasting glucose | mmol/L, mg/dL, mL/min/{1.73_m2} | laboratory |
| 24331-1 | Lipid 1996 panel (organizer) | — | panel |
| 2093-3, 2085-9, 13457-7, 2571-8 | Total cholesterol, HDL, calculated LDL, triglycerides | mg/dL | laboratory |
| 4548-4 | HbA1c | % | laboratory |
| 3016-3 | TSH | m[IU]/L | laboratory |
| 718-7 | Hemoglobin | g/dL | laboratory |
| 9318-7 | Urine albumin-to-creatinine ratio | mg/g{creat} | laboratory |
| 44261-6 | PHQ-9 total score | {score} | survey |
| 70274-6 | GAD-7 total score | {score} | survey |
| 75626-2 | AUDIT-C total score | {score} | survey |
| 55758-7 | PHQ-2 total score | {score} | survey |

Home blood pressure averages, the cardiovascular risk estimate, audiometry thresholds, visual acuity, and ECG findings are recorded in the notes only; no code was invented for them. Reference ranges are typical adult ranges chosen for the teaching record; interpretation flags follow them, and validation checks that every flag agrees with its range.

## Procedures and immunizations

- Electrocardiographic procedure: SNOMED CT 29303009 (intake). Pure tone audiometry: 252577008 (six-week visit). Advance care planning: 713603004 (preventive visit).
- Immunizations: CVX 115 (Tdap) and 140 (influenza).
- No known allergy: SNOMED CT 716186003.
- Encounter types: SNOMED CT 390906007 (follow-up encounter) for the four focused chronic-care visits, 86013001 (periodic reevaluation and management of healthy individual) for the preventive visit, and 185345009 (encounter for symptom) for the sick visit. The services are named in plain text as CPT 99396 and 99497; CPT is not used as a coded value.

## Vital signs

The seven visits use LOINC 8302-2, 29463-7, 39156-5, 8480-6, 8462-4, 8867-4, 9279-1, 8310-5, and 59408-5 with UCUM units.

## Review note

Codes were checked against the public terminology server and NLM RxNav on November 5, 2026. They do not imply that Scott received these diagnoses, tests, or treatments during his lifetime.
