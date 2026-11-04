# Terminology — Zelda Fitzgerald

> **SYNTHETIC RECORD, NOT A REAL MEDICAL RECORD**

## Diagnoses

| Use | System | Code | Display | Evidence |
|---|---|---|---|---|
| Presenting problem, provisional; resolved (superseded) at three months | ICD-10-CM FY2026 | F29 | Unspecified psychosis not due to a substance or known physiological condition | S; linked to the documented first breakdown |
| Problem recorded at three months, provisional | ICD-10-CM FY2026 | F31.74 | Bipolar disorder, in full remission, most recent episode manic | S; linked to the documented breakdown and the retrospective interpretations |
| Presenting problem, resolved at three months | ICD-10-CM FY2026 | N91.1 | Secondary amenorrhea | S; linked to the documented training |
| Problem added at the sick visit, resolved | ICD-10-CM FY2026 | A08.4 | Viral intestinal infection, unspecified | S |
| Problem added at the sick visit, resolved | ICD-10-CM FY2026 | T43.595A | Adverse effect of other antipsychotics and neuroleptics, initial encounter (lithium) | S |

The historical diagnosis of schizophrenia and the retrospective readings (bipolar illness, compulsive exercise, eating disorder) are not coded (see sources.md).

## Medications (RxNorm)

| Code | Display |
|---|---|
| 312831 | risperidone 2 MG Oral Tablet (started in hospital; stopped at four weeks) |
| 312830 | risperidone 1 MG Oral Tablet (one-week taper) |
| 349545 | aripiprazole 10 MG Oral Tablet |
| 197889 | lithium carbonate 300 MG Oral Capsule |
| 198640 | folic acid 0.4 MG Oral Tablet (from the preventive visit) |

The levonorgestrel intrauterine system (RxNorm 804156, levonorgestrel 0.000833 MG/HR Intrauterine System) is recorded as a procedure, not a medication entry, because the schema has no intrauterine route.

## Results (LOINC 2.81)

| Code | Measure | Unit | Category |
|---|---|---|---|
| 6690-2, 718-7, 777-3 | White cells, hemoglobin, platelets | 10*3/uL, g/dL | laboratory |
| 51990-0 | Basic metabolic panel (organizer) | — | panel |
| 2951-2, 2823-3, 2160-0, 98979-8, 2345-7 | Sodium, potassium, creatinine, eGFR (CKD-EPI 2021), glucose | mmol/L, mg/dL, mL/min/{1.73_m2} | laboratory |
| 17861-6 | Calcium | mg/dL | laboratory |
| 1558-6, 4548-4 | Fasting glucose, hemoglobin A1c | mg/dL, % | laboratory |
| 2093-3, 13457-7, 2085-9, 2571-8 | Total cholesterol, LDL (calculated), HDL, triglycerides | mg/dL | laboratory |
| 3016-3 | TSH | m[IU]/L | laboratory |
| 2842-3 | Prolactin | ng/mL | laboratory |
| 14334-7 | Lithium | mmol/L | laboratory |
| 44261-6 | PHQ-9 total score | {score} | survey |
| 75626-2 | AUDIT-C total score | {score} | survey |

Reference ranges are typical adult female ranges chosen for the teaching record; the lithium range is the therapeutic range, with the maintenance target in its text. The SCOFF and AIMS scores are recorded in the note text because no verified LOINC total-score code was found. Qualitative results are recorded as narrative.

## Procedures, immunizations, and encounter types

- Insertion of intrauterine contraceptive device: SNOMED CT 65200003.
- Advance care planning: SNOMED CT 713603004.
- Encounter types: SNOMED CT 390906007 (follow-up encounter) for the four focused chronic-care visits, 86013001 (periodic reevaluation and management of healthy individual) for the preventive visit, and 185345009 (encounter for symptom) for the sick visit. The services are named in plain text as CPT 99395, 58300, and 99497; CPT is not used as a coded value.
- Immunizations: CVX 140 (inactivated influenza).
- No known allergy: SNOMED CT 716186003.

## Vital signs

The seven visits use LOINC 8302-2, 29463-7, 39156-5, 8480-6, 8462-4, 8867-4, 9279-1, 8310-5, and 59408-5 with UCUM units.

## Review note

Codes were checked against the public terminology server and NLM RxNav on November 4, 2026. They do not imply that Zelda Fitzgerald received these diagnoses, tests, or medications during her lifetime.
