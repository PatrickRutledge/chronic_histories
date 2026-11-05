# Terminology — Ida B. Wells

> **SYNTHETIC RECORD, NOT A REAL MEDICAL RECORD**

## Diagnoses

| Use | System | Code | Display | Evidence |
|---|---|---|---|---|
| Intake finding, resolved at two weeks | ICD-10-CM FY2026 | R94.4 | Abnormal results of kidney function studies | S; linked to the kidney disease recorded at her death |
| Intake finding, resolved at two weeks | ICD-10-CM FY2026 | R03.0 | Elevated blood-pressure reading, without diagnosis of hypertension | S |
| Active problem from two weeks | ICD-10-CM FY2026 | I12.9 | Hypertensive chronic kidney disease with stage 1 through stage 4 chronic kidney disease, or unspecified chronic kidney disease | S |
| Active problem from two weeks | ICD-10-CM FY2026 | N18.32 | Chronic kidney disease, stage 3b | S; linked to the kidney disease recorded at her death (D) and the retrospective note (R) |
| Active problem from two weeks | ICD-10-CM FY2026 | D63.1 | Anemia in chronic kidney disease | S |
| Active problem from two weeks | ICD-10-CM FY2026 | E55.9 | Vitamin D deficiency, unspecified | S |

## Medications (RxNorm)

| Code | Display |
|---|---|
| 198440 | acetaminophen 500 MG Oral Tablet |
| 979492 | losartan potassium 50 MG Oral Tablet (from two weeks to the last visit) |
| 979480 | losartan potassium 100 MG Oral Tablet (from the last visit) |
| 617310 | atorvastatin 20 MG Oral Tablet |
| 199362 | cholecalciferol 0.025 MG Oral Tablet |
| 1488569 | dapagliflozin 10 MG Oral Tablet (from four weeks) |

Over-the-counter naproxen, stopped at intake, is named in the notes but not coded.

## Results (LOINC 2.81)

| Code | Measure | Unit | Category |
|---|---|---|---|
| 51990-0 | Basic metabolic panel (organizer) | — | panel |
| 2951-2, 2823-3, 2028-9, 3094-0, 2160-0, 2345-7 | Sodium, potassium, bicarbonate, urea nitrogen, creatinine, glucose | mmol/L, mg/dL | laboratory |
| 98979-8 | eGFR by creatinine (CKD-EPI 2021) | mL/min/{1.73_m2} | laboratory |
| 33863-2 | Cystatin C | mg/L | laboratory |
| 98980-6 | eGFR by creatinine and cystatin C (CKD-EPI 2021) | mL/min/{1.73_m2} | laboratory |
| 9318-7 | Urine albumin-to-creatinine ratio | mg/g | laboratory |
| 4548-4 | Hemoglobin A1c | % | laboratory |
| 718-7, 2276-4, 2502-3 | Hemoglobin, ferritin, transferrin saturation | g/dL, ng/mL, % | laboratory |
| 17861-6, 2777-1, 2731-8, 62292-8 | Calcium, phosphate, intact PTH, 25-hydroxyvitamin D | mg/dL, pg/mL, ng/mL | laboratory |
| 2093-3, 13457-7, 2085-9, 2571-8 | Total cholesterol, LDL (calculated), HDL, triglycerides | mg/dL | laboratory |
| 3016-3 | TSH | m[IU]/L | laboratory |
| 44261-6, 55758-7 | PHQ-9, PHQ-2 | {score} | survey |
| 72233-0, 75626-2 | Mini-Cog, AUDIT-C | {score} | survey |

Reference ranges are typical adult female ranges chosen for the teaching record; interpretation flags follow them. The urinalysis, protein electrophoresis and free light chains, hepatitis B, hepatitis C and HIV results, the kidney failure risk, the ECG, the ultrasound and the fundi are recorded as narrative.

## Procedures, immunizations, and encounter types

- ECG: SNOMED CT 29303009 (Electrocardiographic procedure). Kidney ultrasound: 1334074007 (Ultrasonography of bilateral kidneys and bladder). Dietitian session: 410177006 (Special diet education). Advance care planning: 713603004.
- Encounter types: SNOMED CT 390906007 (follow-up encounter) for the three focused chronic-care visits and 281038008 (geriatric annual health check) for the subsequent annual wellness visit. No sick visit. The services are named in plain text as HCPCS G0439 and CPT 99497; neither is used as a coded value.
- Immunizations: CVX 135 (high-dose influenza), 216 (PCV20), 189 (HepB-CpG, two doses), 303 (RSV, adjuvanted), 187 (recombinant zoster, dose 1), and 309 (COVID-19 mRNA).
- No known allergy: SNOMED CT 716186003.

## Vital signs

The five visits use LOINC 8302-2, 29463-7, 39156-5, 8480-6, 8462-4, 8867-4, 9279-1, 8310-5, and 59408-5 with UCUM units.

## Review note

Codes were checked against the public terminology server and NLM RxNav on November 5, 2026. They do not imply that Wells received these diagnoses, tests, or medications during her lifetime.
