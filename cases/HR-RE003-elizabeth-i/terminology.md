# Terminology — Elizabeth I

> **SYNTHETIC RECORD, NOT A REAL MEDICAL RECORD**

## Diagnoses

| Use | System | Code | Display | Evidence |
|---|---|---|---|---|
| Resolved presenting problem | ICD-10-CM FY2026 | R45.89 | Other symptoms and signs involving emotional state | S; low mood, poor sleep, poor appetite, and weight loss, superseded by the depression diagnosis at the January 26 visit |
| Active problem (both_with_link) | ICD-10-CM FY2026 | F32.1 | Major depressive disorder, single episode, moderate | S; linked to her documented melancholy, sleeplessness, and refusal of food |
| Active problem | ICD-10-CM FY2026 | G47.00 | Insomnia, unspecified | S; chronic insomnia comorbid with depression |
| Active problem | ICD-10-CM FY2026 | K08.409 | Partial loss of teeth, unspecified cause, unspecified class | S; linked to the documented descriptions of her teeth |
| Active problem | ICD-10-CM FY2026 | Z91.81 | History of falling | S; linked to her documented fall in December 1602 |
| Resolved problem | ICD-10-CM FY2026 | J02.9 | Acute pharyngitis, unspecified | S; viral pharyngitis at the February sick visit |

No code for lead poisoning, smallpox sequelae, or adrenal insufficiency is used; those are historical leads only.

## Medications (RxNorm)

| Code | Display |
|---|---|
| 1049909 | diphenhydramine hydrochloride 25 MG Oral Capsule (over the counter; stopped at intake) |
| 312940 | sertraline 25 MG Oral Tablet |
| 312941 | sertraline 50 MG Oral Tablet |
| 198440 | acetaminophen 500 MG Oral Tablet |

## Results (LOINC 2.81)

| Code | Measure | Unit | Category |
|---|---|---|---|
| 44261-6 | PHQ-9 | {score} | survey |
| 48545-8 | Geriatric Depression Scale, short version (GDS-15) | {score} | survey |
| 72172-0 | MoCA total score | {score} | survey |
| 718-7, 787-2, 6690-2, 777-3 | Hemoglobin, MCV, white cells, platelets | g/dL, fL, 10*3/uL | laboratory |
| 51990-0 | Basic metabolic panel (organizer) | — | panel |
| 2951-2, 2823-3, 3094-0, 2160-0, 98979-8, 2345-7 | Sodium, potassium, BUN, creatinine, eGFR (CKD-EPI 2021), glucose | mmol/L, mg/dL, mL/min/{1.73_m2} | laboratory |
| 17861-6, 1751-7 | Calcium, albumin | mg/dL, g/dL | laboratory |
| 3016-3, 2132-9, 2284-8 | TSH, vitamin B12, folate | m[IU]/L, pg/mL, ng/mL | laboratory |

Interpretation flags follow the stated ranges. No LOINC code for the Insomnia Severity Index was found on the public terminology server, so its scores are kept in the note text and monitoring tables, with the C-SSRS screen and Timed Up and Go results.

## Procedures, immunizations, and other codes

- Immunizations: CVX 135 (influenza, high-dose, trivalent), 216 (PCV20), 187 (recombinant zoster), 115 (Tdap), and 309 (COVID-19 mRNA, given at the wellness visit).
- Family history relationships: HL7 v3 RoleCode MTH (mother), FTH (father), and HSIS (half-sister).
- No known allergy: SNOMED CT 716186003.
- Encounter types: SNOMED CT 390906007 (follow-up encounter) for the three focused depression visits, 185345009 (encounter for symptom) for the February sick visit, and 281038008 (geriatric annual health check) for the subsequent annual wellness visit. Services are named in plain text only; HCPCS and CPT are not used as coded values.

## Vital signs

The six visits use LOINC 8302-2, 29463-7, 39156-5, 8480-6, 8462-4, 8867-4, 9279-1, 8310-5, and 59408-5 with UCUM units.

## Review note

Codes were checked against the public terminology server and NLM RxNav on November 5, 2026. They do not imply that Elizabeth I received these diagnoses, tests, or medications during her lifetime.
