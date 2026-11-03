# Terminology — Helen Keller

> **SYNTHETIC RECORD, NOT A REAL MEDICAL RECORD**

## Diagnoses

| Use | System | Code | Display | Evidence |
|---|---|---|---|---|
| Active problem | ICD-10-CM FY2026 | H54.0X55 | Blindness right eye category 5, blindness left eye category 5 | S; linked to the documented 1882 illness |
| Active problem | ICD-10-CM FY2026 | H91.93 | Unspecified hearing loss, bilateral | S; linked to the documented 1882 illness; type never established |
| Active problem | ICD-10-CM FY2026 | Z97.0 | Presence of artificial eye | S; echoes the documented 1911 receipt |
| Active problem | ICD-10-CM FY2026 | Z91.81 | History of falling | S |
| Resolved problem | ICD-10-CM FY2026 | N30.00 | Acute cystitis without hematuria | S; recorded at the August sick visit |

## Medications (RxNorm)

| Code | Display |
|---|---|
| 1648755 | nitrofurantoin, macrocrystals 25 MG / nitrofurantoin, monohydrate 75 MG Oral Capsule (5-day course) |

## Results (LOINC 2.81)

| Code | Measure | Unit | Category |
|---|---|---|---|
| 718-7 | Hemoglobin | g/dL | laboratory |
| 51990-0 | Basic metabolic panel (organizer) | — | panel |
| 2951-2, 2823-3, 2160-0, 98979-8, 2345-7 | Sodium, potassium, creatinine, eGFR (CKD-EPI 2021), glucose | mmol/L, mg/dL, mL/min/{1.73_m2} | laboratory |
| 62292-8 | 25-hydroxyvitamin D | ng/mL | laboratory |
| 2132-9 | Vitamin B12 | pg/mL | laboratory |
| 38263-0 | DXA femur T-score | {T-score} | imaging |
| 38267-1 | DXA lumbar spine T-score | {T-score} | imaging |
| 44261-6 | PHQ-9 total score (completed in braille) | {score} | survey |
| 77866-2 | PROMIS physical function T-score | {score} | survey |
| 75626-2 | AUDIT-C total score (annual wellness visit) | {score} | survey |

eGFR is calculated from the synthetic creatinine with the 2021 CKD-EPI creatinine equation for a 78-year-old woman. Reference ranges are typical adult ranges chosen for the teaching record; the DXA flag uses a T-score of -1.0 as the lower limit of normal. The Timed Up and Go, 30-second chair stand, and tandem stance results are recorded in examination and functional-status text, not as coded results. Point-of-care urine dipstick findings at the sick visit are described in prose.

## Procedures, immunizations, and encounters

- Orthostatic vital signs: SNOMED CT 425058005 (taking orthostatic vital signs). Bone density: SNOMED CT 413841000119101 (dual energy X-ray absorptiometry of bone of hip joint region and bone of spine).
- Immunizations: CVX 115 (Tdap), 187 (recombinant zoster), 216 (PCV20), 305 (RSV, bivalent RSVpreF), and 135 (high-dose influenza) for the 2025-2026 and 2026-2027 seasons.
- No known allergy: SNOMED CT 716186003.
- Encounter types: SNOMED CT 390906007 (follow-up encounter) for the three focused chronic-care visits, 185345009 (encounter for symptom) for the August sick visit, and 281038008 (geriatric annual health check) for the annual wellness visit. The services are named in plain text as HCPCS G0439 and CPT 99497; HCPCS and CPT are not used as coded values.
- Family relationships: HL7 RoleCode FTH (father) and MTH (mother).

## Vital signs

The six visits use LOINC 8302-2, 29463-7, 39156-5, 8480-6, 8462-4, 8867-4, 9279-1, 8310-5, and 59408-5 with UCUM units.

## Review note

Codes were checked against the public terminology server and NLM RxNav on November 3, 2026. They do not imply that Keller received these diagnoses, tests, or medications during her lifetime.
