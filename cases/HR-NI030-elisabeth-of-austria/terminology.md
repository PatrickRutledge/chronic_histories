# Terminology — Elisabeth of Austria

> **SYNTHETIC RECORD, NOT A REAL MEDICAL RECORD**

## Diagnoses

| Use | System | Code | Display | Evidence |
|---|---|---|---|---|
| Presenting problem, resolved at the consultation | ICD-10-CM FY2026 | R63.4 | Abnormal weight loss | S; linked to her documented restrictive eating and swelling |
| Additional codes on the same problem | ICD-10-CM FY2026 | R60.0, R42, R53.83 | Localized edema; Dizziness and giddiness; Other fatigue | S |
| Active problem, from the second visit | ICD-10-CM FY2026 | F50.011 | Anorexia nervosa, restricting type, moderate | S; linked to her documented eating and exercise and the retrospective diagnosis (R) |
| Active problem | ICD-10-CM FY2026 | F33.1 | Major depressive disorder, recurrent, moderate | S; linked to her documented mourning and depression |
| Additional code on the same problem | ICD-10-CM FY2026 | Z63.4 | Disappearance and death of family member | S |
| Active problem, from the four-week visit | ICD-10-CM FY2026 | M85.80 | Other specified disorders of bone density and structure, unspecified site | S |
| Resolved problem | ICD-10-CM FY2026 | A08.4, E87.6 | Viral intestinal infection, unspecified; Hypokalemia | S; recorded at the May sick visit |

## Medications (RxNorm)

| RxCUI | Name | Use |
|---|---|---|
| 313323 | thiamine 100 MG Oral Tablet | Refeeding risk, 14 days from intake |
| 804146 | cholecalciferol 0.05 MG Oral Capsule | Low vitamin D, from intake |
| 200251 | potassium phosphate 155 MG / sodium phosphate, dibasic 852 MG / sodium phosphate, monobasic 130 MG Oral Tablet | Low phosphate during refeeding, three weeks |
| 282465 | calcium carbonate 1250 MG Oral Tablet | Low bone mass, from the four-week visit |
| 312940 | sertraline 25 MG Oral Tablet | Depression, two weeks from the four-week visit |
| 312941 | sertraline 50 MG Oral Tablet | Depression |
| 198116 | potassium chloride 20 MEQ Extended Release Oral Tablet | Hypokalemia at the sick visit, three days |

## Results (LOINC 2.81)

| Code | Measure | Unit | Category |
|---|---|---|---|
| 718-7, 787-2, 6690-2, 777-3 | Hemoglobin, MCV, white cell count, platelets | g/dL, fL, 10*3/uL | laboratory |
| 51990-0 | Basic metabolic panel (organizer) | — | panel |
| 2951-2, 2823-3, 3094-0, 2160-0, 98979-8, 2345-7 | Sodium, potassium, urea nitrogen, creatinine, eGFR (CKD-EPI 2021), glucose | mmol/L, mg/dL, mL/min/{1.73_m2} | laboratory |
| 19123-9, 2777-1 | Magnesium, phosphate | mg/dL | laboratory |
| 1751-7, 1742-6 | Albumin, ALT | g/dL, U/L | laboratory |
| 3016-3, 1988-5, 31017-7 | TSH, CRP, tissue transglutaminase IgA | m[IU]/L, mg/L, U/mL | laboratory |
| 2276-4, 62292-8 | Ferritin, 25-hydroxyvitamin D | ng/mL | laboratory |
| 8636-3 | QTc | ms | imaging |
| 38267-1, 38263-0 | DXA lumbar spine and femur T-scores | {T-score} | imaging |
| 90265-0, 90266-8 | FRAX 10-year probabilities, major osteoporotic and hip fracture | % | survey |
| 44261-6 | PHQ-9 total score | {score} | survey |

Orthostatic readings, ECG rhythm and voltage, and the screening results at the preventive visit are recorded in the notes only. No LOINC code was used for eating-disorder questionnaires; none was given. Creatinine is low from low muscle mass, so the eGFR overestimates kidney function; this is stated where it matters. Reference ranges are typical adult female ranges chosen for the teaching record; interpretation flags follow them, and validation checks that every flag agrees with its range.

## Procedures and immunizations

- Electrocardiographic procedure: SNOMED CT 29303009 (intake, four-week visit, sick visit). Bone density scan: 312681000 (four-week visit). Advance care planning: 713603004 (preventive visit).
- Immunizations: CVX 187 (recombinant zoster, two doses), 216 (PCV20), and 115 (Tdap).
- No known allergy: SNOMED CT 716186003.
- Encounter types: SNOMED CT 390906007 (follow-up encounter) for the four focused chronic-care visits, 86013001 (periodic reevaluation and management of healthy individual) for the preventive visit, and 185345009 (encounter for symptom) for the sick visit. The services are named in plain text as CPT 99396 and 99497; CPT is not used as a coded value.

## Vital signs

The seven visits use LOINC 8302-2, 29463-7, 39156-5, 8480-6, 8462-4, 8867-4, 9279-1, 8310-5, and 59408-5 with UCUM units.

## Review note

Codes were checked against the public terminology server and NLM RxNav on November 6, 2026. They do not imply that Elisabeth received these diagnoses, tests, or treatments during her lifetime.
