# Terminology — Rabindranath Tagore

> **SYNTHETIC RECORD, NOT A REAL MEDICAL RECORD**

## Diagnoses

| Use | System | Code | Display | Evidence |
|---|---|---|---|---|
| Active problem (both_with_link) | ICD-10-CM FY2026 | N40.1 | Benign prostatic hyperplasia with lower urinary tract symptoms | S; linked to the retrospective enlarged-prostate reading of his last illness; recorded at the March 3 visit |
| Resolved presenting problem | ICD-10-CM FY2026 | R33.9 | Retention of urine, unspecified | S; superseded on March 3 |
| Resolved problem | ICD-10-CM FY2026 | R33.8 | Other retention of urine | S; chronic retention, resolved after the July trial without catheter |
| Resolved problem | ICD-10-CM FY2026 | T83.511A | Infection and inflammatory reaction due to indwelling urethral catheter, initial encounter | S; sick visit, resolved by March 31 |
| Active problem | ICD-10-CM FY2026 | R54 | Age-related physical debility | S; mild frailty, recorded March 31 |

No prostate cancer code is used.

## Medications (RxNorm)

| Code | Display |
|---|---|
| 863669 | tamsulosin hydrochloride 0.4 MG Oral Capsule |
| 310346 | finasteride 5 MG Oral Tablet |
| 876193 | polyethylene glycol 3350 17000 MG Powder for Oral Solution (as needed) |
| 1665021 | ceftriaxone 1000 MG Injection (one dose, intramuscular) |
| 309078 | cefpodoxime 200 MG Oral Tablet |
| 198440 | acetaminophen 500 MG Oral Tablet (as needed) |

His herbal preparation is recorded in the social history and notes; it has no RxNorm code and its product is not identified.

## Results (LOINC 2.81)

| Code | Measure | Unit | Category |
|---|---|---|---|
| 80891-5 | AUA symptom index score (the seven IPSS symptom questions) | {score} | survey |
| 81090-3 | IPSS quality-of-life question | {score} | survey |
| 72233-0 | Mini-Cog total score | {score} | survey |
| 55758-7 | PHQ-2 | {score} | survey |
| 98856-8 | Post-void residual by bladder ultrasound | mL | imaging |
| 15308-0 | Prostate volume by ultrasound | mL | imaging |
| 51990-0 | Basic metabolic panel (organizer) | — | panel |
| 2951-2, 2823-3, 2028-9, 3094-0, 2160-0, 98979-8, 2345-7 | Sodium, potassium, bicarbonate, BUN, creatinine, eGFR (CKD-EPI 2021), glucose | mmol/L, mg/dL, mL/min/{1.73_m2} | laboratory |
| 718-7, 6690-2 | Hemoglobin, white cells | g/dL, 10*3/uL | laboratory |
| 2857-1 | PSA (age-specific upper limit 6.5 ng/mL) | ng/mL | laboratory |
| 5821-4 | Urine white cells per high-power field | /[HPF] | laboratory |

Interpretation flags follow the stated ranges. No separate IPSS total-score code was found on the public terminology server (80976-4 is the IPSS panel), so the symptom total uses the AUA symptom index score, which has the same seven questions. Urine and blood culture results, the Clinical Frailty Scale, the Timed Up and Go test, and the 4AT are recorded in the note text.

## Procedures, immunizations, and other codes

- Procedures: SNOMED CT 446583004 (Insertion of indwelling catheter into urinary bladder), 1334074007 (Ultrasonography of bilateral kidneys and bladder), 176192000 (Change of urethral catheter), and 170884001 (Trial without catheter, twice).
- Immunizations: CVX 135 (influenza, high-dose), 303 (RSV, adjuvanted), 216 (PCV20), and 187 (zoster recombinant).
- Family history relationship: HL7 v3 RoleCode DAU (natural daughter).
- Advance care planning: SNOMED CT 713603004.
- No known allergy: SNOMED CT 716186003.
- Encounter types: SNOMED CT 390906007 (follow-up encounter) for the four focused chronic-care visits, 185345009 (encounter for symptom) for the March sick visit, and 281038008 (geriatric annual health check) for the subsequent annual wellness visit. Services are named in plain text as HCPCS G0439 and CPT 99497; HCPCS and CPT are not used as coded values.

## Vital signs

The seven visits use LOINC 8302-2, 29463-7, 39156-5, 8480-6, 8462-4, 8867-4, 9279-1, 8310-5, and 59408-5 with UCUM units.

## Review note

Codes were checked against the public terminology server and NLM RxNav on November 4, 2026. They do not imply that Tagore received these diagnoses, tests, or medications during his lifetime.
