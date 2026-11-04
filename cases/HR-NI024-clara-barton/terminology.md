# Terminology — Clara Barton

> **SYNTHETIC RECORD, NOT A REAL MEDICAL RECORD**

## Diagnoses

| Use | System | Code | Display | Evidence |
|---|---|---|---|---|
| Active problem | ICD-10-CM FY2026 | F33.1 | Major depressive disorder, recurrent, moderate | S; linked to her documented periods of depression and nervous prostration |
| Active problem | ICD-10-CM FY2026 | Z73.0 | Burn-out | S; linked to her documented exhaustion after wartime relief |
| Resolved problem | ICD-10-CM FY2026 | S39.012A | Strain of muscle, fascia and tendon of lower back, initial encounter | S; recorded at the July sick visit |

## Medications (RxNorm)

| Code | Display |
|---|---|
| 312941 | sertraline 50 MG Oral Tablet (six weeks) |
| 312938 | sertraline 100 MG Oral Tablet |
| 197805 | ibuprofen 400 MG Oral Tablet (sick visit, up to 7 days) |

## Results (LOINC 2.81)

| Code | Measure | Unit | Category |
|---|---|---|---|
| 44261-6 | PHQ-9 | {score} | survey |
| 70274-6 | GAD-7 | {score} | survey |
| 102017-1 | PC-PTSD-5 score | {score} | survey |
| 75626-2 | AUDIT-C | {score} | survey |
| 51990-0 | Basic metabolic panel (organizer) | — | panel |
| 2951-2, 2823-3, 2028-9, 3094-0, 2160-0, 98979-8, 2345-7 | Sodium, potassium, bicarbonate, BUN, creatinine, eGFR (CKD-EPI 2021), glucose | mmol/L, mg/dL, mL/min/{1.73_m2} | laboratory |
| 718-7, 3016-3, 2132-9 | Hemoglobin, TSH, vitamin B12 | g/dL, m[IU]/L, pg/mL | laboratory |
| 2093-3, 2085-9, 13457-7, 2571-8, 4548-4 | Total cholesterol, HDL, LDL, triglycerides, HbA1c (preventive visit) | mg/dL, % | laboratory |

Interpretation flags follow the stated ranges. The C-SSRS and the bipolar screen are recorded in the notes, not as scored observations.

## Procedures, immunizations, and other codes

- Advance care planning: SNOMED CT 713603004.
- Immunizations: CVX 140 (influenza, trivalent), 115 (Tdap), 216 (PCV20), and 187 (recombinant zoster).
- No known allergy: SNOMED CT 716186003.
- Encounter types: SNOMED CT 390906007 (follow-up encounter) for the four focused chronic-care visits, 185345009 (encounter for symptom) for the July sick visit, and 86013001 (periodic reevaluation and management of healthy individual) for the preventive visit. The services are named in plain text as CPT 99396 and 99497; HCPCS and CPT are not used as coded values.
- Family relationships: HL7 RoleCode MTH (mother) and FTH (father).

## Vital signs

The seven visits use LOINC 8302-2, 29463-7, 39156-5, 8480-6, 8462-4, 8867-4, 9279-1, 8310-5, and 59408-5 with UCUM units.

## Review note

Codes were checked against the public terminology server and NLM RxNav on November 3, 2026. They do not imply that Barton received these diagnoses, tests, or medications during her lifetime.
