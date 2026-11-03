# Terminology — Ray Charles

> **SYNTHETIC RECORD, NOT A REAL MEDICAL RECORD**

## Diagnoses

| Use | System | Code | Display | Evidence |
|---|---|---|---|---|
| Active problem | ICD-10-CM FY2026 | H54.0X55 | Blindness right eye category 5, blindness left eye category 5 | S; linked to the documented childhood blindness; category synthetic |
| Active problem (in remission) | ICD-10-CM FY2026 | F11.21 | Opioid dependence, in remission | S; linked to the publicly admitted heroin addiction and documented recovery |

The retrospective cause of the blindness (glaucoma) is not coded.

## Medications (RxNorm)

| Code | Display |
|---|---|
| 1725059 | naloxone hydrochloride 40 MG/ML Nasal Spray (0.1 mL = 4 mg per spray, as needed) |

## Results (LOINC 2.81)

| Code | Measure | Unit | Category |
|---|---|---|---|
| 718-7 | Hemoglobin | g/dL | laboratory |
| 51990-0 | Basic metabolic panel (organizer) | — | panel |
| 2951-2, 2823-3, 2160-0, 98979-8, 2345-7, 17861-6 | Sodium, potassium, creatinine, eGFR (CKD-EPI 2021), glucose, calcium | mmol/L, mg/dL, mL/min/{1.73_m2} | laboratory |
| 2093-3, 2085-9, 13457-7, 2571-8 | Total cholesterol, HDL cholesterol, LDL cholesterol (calculated), triglycerides | mg/dL | laboratory |
| 4548-4 | HbA1c | % | laboratory |
| 44261-6 | PHQ-9 total score | {score} | survey |
| 55758-7 | PHQ-2 total score (annual wellness visit) | {score} | survey |
| 75626-2 | AUDIT-C total score | {score} | survey |
| 82667-7 | DAST-10 total score | {score} | survey |

Reference ranges are typical adult ranges chosen for the teaching record; interpretation flags follow them, and validation checks that every flag agrees with its range. The lipid results are not grouped under a panel code, because the LOINC lipid panel names include a year that the true-date variant cannot shift. No liver tests are recorded (see sources.md).

Timed Up and Go and the verbal three-word recall have no verified LOINC code on the terminology server and are recorded as narrative.

## Procedures, immunizations, and family history

- Ophthalmic examination and evaluation: SNOMED CT 36228007 (consultation).
- Advance care planning: SNOMED CT 713603004.
- Encounter types: SNOMED CT 390906007 (follow-up encounter) for the three focused chronic-care visits and 281038008 (geriatric annual health check) for the subsequent annual wellness visit. The services are named in plain text as HCPCS G0439 and CPT 99497; HCPCS and CPT are not used as coded values.
- Immunizations: CVX 135 (high-dose influenza, the 2025-2026 dose and the 2026-2027 dose) and 216 (PCV20).
- No known allergy: SNOMED CT 716186003.
- Family relationships: HL7 RoleCode MTH (mother) and BRO (brother).

## Vital signs

The five visits use LOINC 8302-2, 29463-7, 39156-5, 8480-6, 8462-4, 8867-4, 9279-1, 8310-5, and 59408-5 with UCUM units.

## Review note

Codes were checked against the public terminology server and NLM RxNav on November 3, 2026. They do not imply that Charles received these diagnoses, tests, or medications during his lifetime.
