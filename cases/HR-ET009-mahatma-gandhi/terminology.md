# Terminology — Mahatma Gandhi

> **SYNTHETIC RECORD, NOT A REAL MEDICAL RECORD**

## Diagnoses

| Use | System | Code | Display | Evidence |
|---|---|---|---|---|
| Active problem | ICD-10-CM FY2026 | I10 | Essential (primary) hypertension | S; linked to his documented high blood pressure |
| Active problem | ICD-10-CM FY2026 | R63.6 | Underweight | S; linked to his documented weight and diet |
| Active problem | ICD-10-CM FY2026 | E53.8 | Deficiency of other specified B group vitamins | S; vitamin B12 deficiency |
| Active problem | ICD-10-CM FY2026 | E55.9 | Vitamin D deficiency, unspecified | S |
| Active problem | ICD-10-CM FY2026 | M85.80 | Other specified disorders of bone density and structure, unspecified site | S; low bone mass by DXA |
| Resolved problem | ICD-10-CM FY2026 | E83.39 | Other disorders of phosphorus metabolism | S; refeeding hypophosphatemia |
| Resolved problem | ICD-10-CM FY2026 | E86.0 | Dehydration | S; recorded at the June sick visit |

## Medications (RxNorm)

| Code | Display |
|---|---|
| 308136 | amlodipine 2.5 MG Oral Tablet |
| 197361 | amlodipine 5 MG Oral Tablet |
| 309593 | vitamin B12 1 MG Oral Tablet |
| 199362 | cholecalciferol 0.025 MG Oral Tablet |
| 313323 | thiamine 100 MG Oral Tablet (refeeding, 10 days) |
| 200251 | potassium phosphate 155 MG / sodium phosphate, dibasic 852 MG / sodium phosphate, monobasic 130 MG Oral Tablet (refeeding) |
| 198116 | potassium chloride 20 MEQ Extended Release Oral Tablet (refeeding) |
| 198741 | magnesium oxide 400 MG Oral Tablet (refeeding) |

## Results (LOINC 2.81)

| Code | Measure | Unit | Category |
|---|---|---|---|
| 51990-0 | Basic metabolic panel (organizer) | — | panel |
| 2951-2, 2823-3, 2028-9, 3094-0, 2160-0, 98979-8, 2345-7 | Sodium, potassium, bicarbonate, BUN, creatinine, eGFR (CKD-EPI 2021), glucose | mmol/L, mg/dL, mL/min/{1.73_m2} | laboratory |
| 17861-6, 19123-9, 2777-1, 1751-7 | Calcium, magnesium, phosphate, albumin | mg/dL, g/dL | laboratory |
| 6873-4 | Beta-hydroxybutyrate | mmol/L | laboratory |
| 718-7, 787-2, 6690-2, 777-3 | Hemoglobin, MCV, white cell count, platelets | g/dL, fL, 10*3/uL | laboratory |
| 2132-9, 13964-2, 2284-8, 2276-4 | Vitamin B12, methylmalonic acid, folate, ferritin | pg/mL, umol/L, ng/mL | laboratory |
| 3016-3, 2093-3, 13457-7, 2085-9, 4548-4, 9318-7, 62292-8 | TSH, total, LDL, and HDL cholesterol, HbA1c, urine albumin-creatinine ratio, 25-hydroxyvitamin D | m[IU]/L, mg/dL, %, mg/g, ng/mL | laboratory |
| 38267-1, 38263-0 | DXA lumbar spine and femur (femoral neck) T-scores | {T-score} | imaging |
| 90265-0, 90266-8 | FRAX 10-year major osteoporotic and hip fracture probability | % | survey |
| 107114-1 | Mini Nutritional Assessment total score | {score} | survey |
| 83173-5, 83174-3 | Grip strength, left and right hand, by dynamometer | kg | survey |
| 44261-6, 55758-7, 72233-0 | PHQ-9, PHQ-2, Mini-Cog | {score} | survey |

eGFR values are calculated from the synthetic creatinine with the 2021 CKD-EPI creatinine equation for a 70-year-old man. DXA T-scores are flagged low below -1.0. Interpretation flags follow the stated ranges. Orthostatic blood pressures are recorded in the examination text rather than as coded results.

## Procedures, immunizations, and other codes

- Electrocardiogram: SNOMED CT 29303009. Transthoracic echocardiography: 433236007. Dual energy X-ray absorptiometry: 241686001.
- Immunizations: CVX 135 (high-dose influenza), 216 (PCV20), 187 (recombinant zoster), and 115 (Tdap).
- No known allergy: SNOMED CT 716186003.
- Encounter types: SNOMED CT 390906007 (follow-up encounter) for the four focused chronic-care visits, 185345009 (encounter for symptom) for the June sick visit, and 281038008 (geriatric annual health check) for the annual wellness visit. The services are named in plain text as HCPCS G0439 and CPT 99497; HCPCS and CPT are not used as coded values.

## Vital signs

The seven visits use LOINC 8302-2, 29463-7, 39156-5, 8480-6, 8462-4, 8867-4, 9279-1, 8310-5, and 59408-5 with UCUM units.

## Review note

Codes were checked against the public terminology server, the NLM Clinical Tables LOINC search, and NLM RxNav on November 3, 2026. They do not imply that Gandhi received these diagnoses, tests, or medications during his lifetime.
