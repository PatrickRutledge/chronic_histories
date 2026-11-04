# Terminology — Vincent van Gogh

> **SYNTHETIC RECORD, NOT A REAL MEDICAL RECORD**

## Diagnoses

| Use | System | Code | Display | Evidence |
|---|---|---|---|---|
| Active problem, provisional | ICD-10-CM FY2026 | F29 | Unspecified psychosis not due to a substance or known physiological condition | S; linked to the documented first crisis and the retrospective interpretations |
| Active problem | ICD-10-CM FY2026 | F10.20 | Alcohol dependence, uncomplicated | S; linked to the documented drinking |
| Active problem | ICD-10-CM FY2026 | Z91.52 | Personal history of nonsuicidal self-harm | S; linked to the documented ear injury |
| Problem added at the sick visit, resolved | ICD-10-CM FY2026 | G25.71 | Drug induced akathisia | S |

The retrospective diagnoses (bipolar disorder, borderline personality traits, epilepsy, alcohol withdrawal delirium, schizophrenia) are not coded (see sources.md).

## Medications (RxNorm)

| Code | Display |
|---|---|
| 349545 | aripiprazole 10 MG Oral Tablet (started in hospital; again from the sick visit) |
| 349490 | aripiprazole 15 MG Oral Tablet (two weeks to the sick visit) |
| 856448 | propranolol hydrochloride 10 MG Oral Tablet (sick visit to six weeks) |
| 1483744 | naltrexone hydrochloride 50 MG Oral Tablet |
| 313323 | thiamine 100 MG Oral Tablet (stopped at six months) |

## Results (LOINC 2.81)

| Code | Measure | Unit | Category |
|---|---|---|---|
| 6690-2, 718-7, 787-2, 777-3 | White cells, hemoglobin, MCV, platelets | 10*3/uL, g/dL, fL | laboratory |
| 51990-0 | Basic metabolic panel (organizer) | — | panel |
| 2951-2, 2823-3, 2160-0, 98979-8 | Sodium, potassium, creatinine, eGFR (CKD-EPI 2021) | mmol/L, mg/dL, mL/min/{1.73_m2} | laboratory |
| 1558-6, 4548-4 | Fasting glucose, hemoglobin A1c | mg/dL, % | laboratory |
| 2093-3, 13457-7, 2085-9, 2571-8 | Total cholesterol, LDL (calculated), HDL, triglycerides | mg/dL | laboratory |
| 1920-8, 1742-6, 2324-2 | AST, ALT, GGT | U/L | laboratory |
| 3016-3 | TSH | m[IU]/L | laboratory |
| 2132-9 | Vitamin B12 | pg/mL | laboratory |
| 74661-0 | Phosphatidylethanol (PEth) | ng/mL | laboratory |
| 44261-6 | PHQ-9 total score | {score} | survey |
| 75626-2 | AUDIT-C total score | {score} | survey |

Reference ranges are typical adult male ranges chosen for the teaching record; interpretation flags follow them. The AIMS and Barnes akathisia ratings are recorded in the examination text: the AIMS LOINC codes found on the terminology server are a panel and an item-level answer code from a later LOINC release, not a verified total score. Qualitative results (urine drug test, HIV, syphilis, and hepatitis C tests) are recorded as narrative.

## Procedures, immunizations, and encounter types

- Brain MRI: SNOMED CT 816077007 (MRI of brain). EEG: SNOMED CT 54550000 (Electroencephalogram). Both normal, reported in the note text.
- Advance care planning: SNOMED CT 713603004.
- Encounter types: SNOMED CT 390906007 (follow-up encounter) for the four focused chronic-care visits, 86013001 (periodic reevaluation and management of healthy individual) for the preventive visit, and 185345009 (encounter for symptom) for the sick visit. The services are named in plain text as CPT 99395 and 99497; CPT is not used as a coded value.
- Immunizations: CVX 216 (PCV20) and 189 (HepB-CpG, two doses).
- No known allergy: SNOMED CT 716186003.

## Vital signs

The seven visits use LOINC 8302-2, 29463-7, 39156-5, 8480-6, 8462-4, 8867-4, 9279-1, 8310-5, and 59408-5 with UCUM units.

## Review note

Codes were checked against the public terminology server and NLM RxNav on November 4, 2026. They do not imply that Van Gogh received these diagnoses, tests, or medications during his lifetime.
