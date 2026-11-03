# Terminology — Booker T. Washington

> **SYNTHETIC RECORD, NOT A REAL MEDICAL RECORD**

## Diagnoses

| Use | System | Code | Display | Evidence |
|---|---|---|---|---|
| Active problem | ICD-10-CM FY2026 | I12.9 | Hypertensive chronic kidney disease with stage 1 through stage 4 chronic kidney disease, or unspecified chronic kidney disease | S; linked to the documented 1915 blood pressure and the retrospective diagnosis (R) |
| Active problem | ICD-10-CM FY2026 | N18.32 | Chronic kidney disease, stage 3b | S; linked to the documented 1915 Bright's disease diagnosis |
| Active problem | ICD-10-CM FY2026 | H35.033 | Hypertensive retinopathy, bilateral | S; linked to documented failing vision |
| Active problem | ICD-10-CM FY2026 | D63.1 | Anemia in chronic kidney disease | S |
| Active problem | ICD-10-CM FY2026 | E78.5 | Hyperlipidemia, unspecified | S |
| Resolved problem | ICD-10-CM FY2026 | S39.012A | Strain of muscle, fascia and tendon of lower back, initial encounter | S; recorded at the August sick visit |

## Medications (RxNorm)

| Code | Display |
|---|---|
| 308135 | amlodipine 10 MG Oral Tablet |
| 979492 | losartan potassium 50 MG Oral Tablet |
| 979480 | losartan potassium 100 MG Oral Tablet |
| 1488569 | dapagliflozin 10 MG Oral Tablet |
| 197499 | chlorthalidone 25 MG Oral Tablet (one-half tablet) |
| 617310 | atorvastatin 20 MG Oral Tablet |

## Results (LOINC 2.81)

| Code | Measure | Unit | Category |
|---|---|---|---|
| 51990-0 | Basic metabolic panel (organizer) | — | panel |
| 2951-2, 2823-3, 2028-9, 3094-0, 2160-0, 98979-8, 2345-7 | Sodium, potassium, total CO2, BUN, creatinine, eGFR (CKD-EPI 2021), glucose | mmol/L, mg/dL, mL/min/{1.73_m2} | laboratory |
| 17861-6, 2777-1, 2731-8 | Calcium, phosphate, intact PTH | mg/dL, pg/mL | laboratory |
| 718-7, 2276-4, 2502-3 | Hemoglobin, ferritin, transferrin saturation | g/dL, ng/mL, % | laboratory |
| 3016-3, 4548-4, 13457-7, 9318-7 | TSH, HbA1c, LDL cholesterol, urine albumin-creatinine ratio | m[IU]/L, %, mg/dL, mg/g | laboratory |
| 10230-1 | Left ventricular ejection fraction | % | imaging |
| 85624-5, 85625-2 | Kidney failure 2-year and 5-year risk (KFRE, four-variable, North American calibration) | % | survey |
| 44261-6 | PHQ-9 total score | {score} | survey |
| 75626-2 | AUDIT-C total score (preventive visit) | {score} | survey |

eGFR values are calculated from the synthetic creatinine with the 2021 CKD-EPI creatinine equation for a 59-year-old man. Reference ranges are typical adult ranges chosen for the teaching record; interpretation flags follow them, and validation checks that every flag agrees with its range.

## Procedures, immunizations, and family history

- Electrocardiogram: SNOMED CT 29303009. Funduscopic examination: SNOMED CT 53524009 (Ophthalmoscopy). Renal ultrasound: SNOMED CT 306005 (Echography of kidney). Transthoracic echocardiography: SNOMED CT 433236007.
- Immunizations: CVX 140 (influenza, two seasons), 216 (PCV20), 189 (HepB-CpG, two doses), 187 (recombinant zoster, dose 1), and 115 (Tdap).
- Encounter types: SNOMED CT 390906007 (follow-up encounter) for the four focused chronic-care visits, 185345009 (encounter for symptom) for the August sick visit and 86013001 (periodic reevaluation and management of healthy individual) for the adult preventive visit. The services are named in plain text as CPT 99396 and CPT 99497; CPT is not used as a coded value.
- No known allergy: SNOMED CT 716186003.
- Family relationship: HL7 RoleCode MTH (mother). Cause of death is not recorded.

## Vital signs

The seven visits use LOINC 8302-2, 29463-7, 39156-5, 8480-6, 8462-4, 8867-4, 9279-1, 8310-5, and 59408-5 with UCUM units.

## Review note

Codes were checked against the public terminology server and NLM RxNav on November 2, 2026; the codes for the sick and preventive visits were checked on November 3, 2026. They do not imply that Washington received these diagnoses, tests, or medications during his lifetime.
