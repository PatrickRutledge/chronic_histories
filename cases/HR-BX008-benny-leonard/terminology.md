# Terminology — Benny Leonard

> **SYNTHETIC RECORD, NOT A REAL MEDICAL RECORD**

## Diagnoses

| Use | System | Code | Display | Evidence |
|---|---|---|---|---|
| Presenting problem, resolved at the consultation | ICD-10-CM FY2026 | R06.09 | Other forms of dyspnea | S; linked to his documented work as a referee |
| Intake diagnosis, reclassified at the consultation | ICD-10-CM FY2026 | I10 | Essential (primary) hypertension | S |
| Problem from the consultation | ICD-10-CM FY2026 | I11.9 | Hypertensive heart disease without heart failure | S |
| Problem from the consultation | ICD-10-CM FY2026 | I25.10 | Atherosclerotic heart disease of native coronary artery without angina pectoris | S; found by calcium scoring; not a retrospective diagnosis of his death |
| Active problem | ICD-10-CM FY2026 | E78.00 | Pure hypercholesterolemia, unspecified | S |
| Sick visit, resolved | ICD-10-CM FY2026 | E86.0 | Dehydration | S |

No code is used for his cause of death, sudden cardiac death, financial insecurity, depression or anxiety; see the editorial resolutions in sources.md.

## Medications (RxNorm)

| Code | Display |
|---|---|
| 979468 | hydrochlorothiazide 12.5 MG / losartan potassium 50 MG Oral Tablet (intake to seven weeks) |
| 979471 | hydrochlorothiazide 25 MG / losartan potassium 100 MG Oral Tablet (seven weeks to the preventive visit) |
| 617311 | atorvastatin 40 MG Oral Tablet |
| 979480 | losartan potassium 100 MG Oral Tablet (from the preventive visit) |
| 197361 | amlodipine 5 MG Oral Tablet (from the preventive visit) |

## Results (LOINC 2.81)

| Code | Measure | Unit | Category |
|---|---|---|---|
| 2951-2, 2823-3, 3094-0, 2160-0, 98979-8, 2345-7 (panel 51990-0) | Sodium, potassium, urea nitrogen, creatinine, eGFR (CKD-EPI 2021), glucose | mmol/L, mg/dL, mL/min/{1.73_m2} | laboratory |
| 718-7 | Hemoglobin | g/dL | laboratory |
| 1742-6 | ALT | U/L | laboratory |
| 4548-4 | HbA1c | % | laboratory |
| 3016-3 | TSH | m[IU]/L | laboratory |
| 9318-7 | Urine albumin-to-creatinine ratio | mg/g{creat} | laboratory |
| 2093-3, 2085-9, 13457-7, 2571-8 | Total cholesterol, HDL, LDL (calculated), triglycerides | mg/dL | laboratory |
| 43583-4 | Lipoprotein(a) | nmol/L | laboratory |
| 10230-1 | Left ventricular ejection fraction | % | imaging |
| 18154-5 | Interventricular septal thickness in diastole | mm | imaging |
| 77897-7 | Left ventricular mass index | g/m2 | imaging |
| 79984-1 | Left atrial volume index | mL/m2 | imaging |
| 44261-6, 55758-7 | PHQ-9, PHQ-2 | {score} | survey |
| 70274-6 | GAD-7 | {score} | survey |
| 75626-2 | AUDIT-C | {score} | survey |

Reference ranges are typical adult ranges chosen for the teaching record; interpretation flags follow them. The coronary calcium (Agatston) score, the stress test results, the ECG measurements, the orthostatic and home blood pressure readings, and the HIV, hepatitis and FIT results are recorded as narrative; no LOINC code for an Agatston score was found.

## Procedures, immunizations, and encounter types

- 12-lead ECG: SNOMED CT 268400002 (intake and sick visit). Transthoracic echocardiography: 433236007. Exercise stress echocardiography: 433233004. CT of the heart without contrast with calcium scoring: 504981000119108.
- Advance care planning: SNOMED CT 713603004.
- Encounter types: SNOMED CT 390906007 (follow-up encounter) for the four focused chronic-care visits, 86013001 (periodic reevaluation and management of healthy individual) for the preventive visit, and 185345009 (encounter for symptom) for the sick visit. The services are named in plain text as CPT 99396 and 99213; CPT is not used as a coded value.
- Immunizations: CVX 216 (PCV20), 187 (zoster recombinant, two doses), 189 (HepB-CpG, two doses) and 140 (influenza, split virus, trivalent, preservative free).
- No known allergy: SNOMED CT 716186003.

## Vital signs

The seven visits use LOINC 8302-2, 29463-7, 39156-5, 8480-6, 8462-4, 8867-4, 9279-1, 8310-5, and 59408-5 with UCUM units.

## Review note

Codes were checked against the public terminology server and NLM RxNav on November 5 and 6, 2026. They do not imply that Leonard received these diagnoses, tests, or medications during his lifetime.
