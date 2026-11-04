# Terminology — Emily Dickinson

> **SYNTHETIC RECORD, NOT A REAL MEDICAL RECORD**

## Diagnoses

| Use | System | Code | Display | Evidence |
|---|---|---|---|---|
| Active problem | ICD-10-CM FY2026 | N18.31 | Chronic kidney disease, stage 3a | S; linked to the documented Bright's disease label and its retrospective interpretation |
| Active problem | ICD-10-CM FY2026 | I12.9 | Hypertensive chronic kidney disease with stage 1 through stage 4 chronic kidney disease, or unspecified chronic kidney disease | S; linked to the retrospective view of severe hypertension |
| Active problem | ICD-10-CM FY2026 | E55.9 | Vitamin D deficiency, unspecified | S |
| Resolved problem | ICD-10-CM FY2026 | A08.4 | Viral intestinal infection, unspecified | S; recorded at the April sick visit |

No F code is used: the synthetic mood and anxiety screens do not support a diagnosis.

## Medications (RxNorm)

| Code | Display |
|---|---|
| 849574 | naproxen sodium 220 MG Oral Tablet (over the counter; stopped at intake) |
| 979492 | losartan potassium 50 MG Oral Tablet (three weeks) |
| 979480 | losartan potassium 100 MG Oral Tablet |
| 617310 | atorvastatin 20 MG Oral Tablet |
| 199362 | cholecalciferol 0.025 MG Oral Tablet (1,000 units) |
| 198440 | acetaminophen 500 MG Oral Tablet (as needed) |
| 1488569 | dapagliflozin 10 MG Oral Tablet |
| 197361 | amlodipine 5 MG Oral Tablet |

## Results (LOINC 2.81)

| Code | Measure | Unit | Category |
|---|---|---|---|
| 51990-0 | Basic metabolic panel (organizer) | — | panel |
| 2951-2, 2823-3, 2028-9, 3094-0, 2160-0, 98979-8, 2345-7 | Sodium, potassium, bicarbonate, BUN, creatinine, eGFR (CKD-EPI 2021), glucose | mmol/L, mg/dL, mL/min/{1.73_m2} | laboratory |
| 17861-6, 2777-1, 2731-8, 62292-8, 1751-7 | Calcium, phosphate, intact PTH, 25-hydroxyvitamin D, albumin | mg/dL, pg/mL, ng/mL, g/dL | laboratory |
| 718-7, 2093-3, 2085-9, 13457-7, 2571-8, 4548-4, 3016-3 | Hemoglobin, total cholesterol, HDL, LDL, triglycerides, HbA1c, TSH | g/dL, mg/dL, %, m[IU]/L | laboratory |
| 9318-7 | Urine albumin-creatinine ratio | mg/g | laboratory |
| 13945-1 | Urine red cells per high-power field | /[HPF] | laboratory |
| 85624-5, 85625-2 | KFRE 2-year and 5-year kidney failure risk | % | survey |
| 44261-6, 70274-6 | PHQ-9, GAD-7 | {score} | survey |
| 55758-7, 75626-2 | PHQ-2, AUDIT-C (preventive visit) | {score} | survey |

eGFR values are calculated from the synthetic creatinine with the 2021 CKD-EPI creatinine equation for a 54-year-old woman. KFRE values use the four-variable North American equation. Interpretation flags follow the stated ranges; the LDL range is the treatment-oriented value of below 100 mg/dL.

## Procedures, immunizations, and other codes

- Electrocardiogram: SNOMED CT 29303009. Kidney ultrasound: 306005 (Echography of kidney). Advance care planning: 713603004.
- Immunizations: CVX 140 (influenza, trivalent), 115 (Tdap), 216 (PCV20), 189 (HepB-CpG, two doses), and 187 (recombinant zoster).
- No known allergy: SNOMED CT 716186003.
- Encounter types: SNOMED CT 390906007 (follow-up encounter) for the four focused chronic-care visits, 185345009 (encounter for symptom) for the April home sick visit, and 86013001 (periodic reevaluation and management of healthy individual) for the preventive visit. Home and video settings are stated in the visit text. The services are named in plain text as CPT 99396 and 99497; HCPCS and CPT are not used as coded values.
- No family relationship codes are used, because the family history is empty.

## Vital signs

The seven visits use LOINC 8302-2, 29463-7, 39156-5, 8480-6, 8462-4, 8867-4, 9279-1, 8310-5, and 59408-5 with UCUM units. At the two video visits the values come from her own devices, as the notes state.

## Review note

Codes were checked against the public terminology server and NLM RxNav on November 3, 2026. They do not imply that Dickinson received these diagnoses, tests, or medications during her lifetime.
