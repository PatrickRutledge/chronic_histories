# Terminology — Madam C. J. Walker

> **SYNTHETIC RECORD, NOT A REAL MEDICAL RECORD**

## Diagnoses

| Use | System | Code | Display | Evidence |
|---|---|---|---|---|
| Intake finding, resolved at two weeks | ICD-10-CM FY2026 | R03.0 | Elevated blood-pressure reading, without diagnosis of hypertension | S; linked to her documented hypertension |
| Intake finding, resolved at two weeks | ICD-10-CM FY2026 | R80.9 | Proteinuria, unspecified | S; linked to her documented nephritis |
| Active problem from two weeks | ICD-10-CM FY2026 | I12.9 | Hypertensive chronic kidney disease with stage 1 through stage 4 chronic kidney disease, or unspecified chronic kidney disease | S; linked to her documented hypertension and nephritis |
| Active problem from two weeks | ICD-10-CM FY2026 | N18.31 | Chronic kidney disease, stage 3a | S; linked to her documented nephritis and death from kidney disease |
| Active problem | ICD-10-CM FY2026 | E78.5 | Hyperlipidemia, unspecified | S |
| Sick visit, resolved | ICD-10-CM FY2026 | A08.4 | Viral intestinal infection, unspecified | S |

## Medications (RxNorm)

| Code | Display |
|---|---|
| 979492 | losartan potassium 50 MG Oral Tablet (two weeks to four weeks) |
| 979480 | losartan potassium 100 MG Oral Tablet (from four weeks) |
| 1545658 | empagliflozin 10 MG Oral Tablet (from two weeks) |
| 617310 | atorvastatin 20 MG Oral Tablet (from two weeks) |
| 197361 | amlodipine 5 MG Oral Tablet (from eleven weeks) |
| 104894 | ondansetron 4 MG Disintegrating Oral Tablet (sick visit, two days) |

Acetaminophen, mentioned as the safe choice for pain, is not prescribed or coded.

## Results (LOINC 2.81)

| Code | Measure | Unit | Category |
|---|---|---|---|
| 51990-0 | Basic metabolic panel (organizer) | — | panel |
| 2951-2, 2823-3, 2028-9, 2160-0, 2345-7 | Sodium, potassium, bicarbonate (total CO2), creatinine, glucose | mmol/L, mg/dL | laboratory |
| 98979-8 | eGFR (CKD-EPI 2021, race-free) | mL/min/{1.73_m2} | laboratory |
| 9318-7 | Urine albumin-to-creatinine ratio | mg/g | laboratory |
| 4548-4 | Hemoglobin A1c | % | laboratory |
| 2093-3, 13457-7, 2085-9, 2571-8 | Total cholesterol, LDL (calculated), HDL, triglycerides | mg/dL | laboratory |
| 1742-6 | ALT | U/L | laboratory |
| 718-7 | Hemoglobin | g/dL | laboratory |
| 3016-3 | TSH | m[IU]/L | laboratory |
| 17861-6, 2777-1, 2731-8, 62292-8 | Calcium, phosphate, intact parathyroid hormone, 25-hydroxyvitamin D | mg/dL, pg/mL, ng/mL | laboratory |
| 44261-6, 55758-7, 75626-2 | PHQ-9, PHQ-2, AUDIT-C | {score} | survey |

Reference ranges are typical adult female ranges chosen for the teaching record; interpretation flags follow them. The urinalysis, ECG, ambulatory and home blood pressure, ultrasound, echocardiogram, fundus examination, 10-year ASCVD risk, KFRE, hepatitis B, hepatitis C and HIV tests, mammogram, HPV and stool tests are recorded as narrative.

## Procedures, immunizations, and encounter types

- ECG: SNOMED CT 29303009 (Electrocardiographic procedure). Ambulatory monitoring: 164783007 (Ambulatory blood pressure recording). Kidney ultrasound: 1334074007 (Ultrasonography of bilateral kidneys and bladder). Echocardiogram: 40701008 (Echocardiography). Mammogram: 24623002 (Screening mammography).
- Advance care planning: SNOMED CT 713603004.
- Encounter types: SNOMED CT 390906007 (follow-up encounter) for the four focused chronic-care visits, 185345009 (encounter for symptom) for the sick visit, and 86013001 (periodic reevaluation and management of healthy individual) for the preventive visit. The preventive services are named in plain text as CPT 99396 and 99497; CPT is not used as a coded value.
- Immunizations: CVX 140 (influenza), 216 (PCV20), 115 (Tdap) and 189 (HepB-CpG, two doses).
- No known allergy: SNOMED CT 716186003.

## Vital signs

The seven visits use LOINC 8302-2, 29463-7, 39156-5, 8480-6, 8462-4, 8867-4, 9279-1, 8310-5, and 59408-5 with UCUM units.

## Review note

Codes were checked against the public terminology server and NLM RxNav on November 4, 2026. They do not imply that Madam C. J. Walker received these diagnoses, tests, or medications during her lifetime.
