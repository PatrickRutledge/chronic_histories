# Terminology — Pablo Neruda

> **SYNTHETIC RECORD, NOT A REAL MEDICAL RECORD**

## Diagnoses

| Use | System | Code | Display | Evidence |
|---|---|---|---|---|
| Presenting problem, resolved at the second visit | ICD-10-CM FY2026 | R97.20 | Elevated prostate specific antigen [PSA] | S |
| Active problem, from the second visit | ICD-10-CM FY2026 | C61 | Malignant neoplasm of prostate | S; linked to the documented prostate cancer of 1971 |
| Active problem, from the second visit | ICD-10-CM FY2026 | C79.51 | Secondary malignant neoplasm of bone | S |
| Active problem, from the second visit | ICD-10-CM FY2026 | C77.5 | Secondary and unspecified malignant neoplasm of intrapelvic lymph nodes | S |
| Active problem, from the second visit | ICD-10-CM FY2026 | Z19.1 | Hormone sensitive malignancy status | S |
| Active problem, from the second visit | ICD-10-CM FY2026 | Z79.899 | Other long term (current) drug therapy | S |
| Active problem | ICD-10-CM FY2026 | I10 | Essential (primary) hypertension | S |
| Active problem, from the second visit | ICD-10-CM FY2026 | E55.9 | Vitamin D deficiency, unspecified | S |
| Active problem, from the second visit | ICD-10-CM FY2026 | M85.89 | Other specified disorders of bone density and structure, multiple sites | S |
| Active problem | ICD-10-CM FY2026 | R73.03 | Prediabetes | S |
| Sick visit, resolved | ICD-10-CM FY2026 | L27.0 | Generalized skin eruption due to drugs and medicaments taken internally | S |
| Active problem, from the fourth visit | ICD-10-CM FY2026 | Z92.3 | Personal history of irradiation | S |
| Active problem, from the fourth visit | ICD-10-CM FY2026 | R94.6 | Abnormal results of thyroid function studies | S |

## Medications (RxNorm)

| Code | Display |
|---|---|
| 197361 | amlodipine 5 MG Oral Tablet (raised at the third visit) |
| 308135 | amlodipine 10 MG Oral Tablet |
| 198440 | acetaminophen 500 MG Oral Tablet (stopped at the fourth visit) |
| 2630215 | apalutamide 240 MG Oral Tablet |
| 2606516 | leuprolide acetate 22.5 MG Injection |
| 801663 | cholecalciferol 0.05 MG Oral Tablet (2000 units) |
| 993452 | 1 ML denosumab 60 MG/ML Prefilled Syringe |
| 1014314 | triamcinolone acetonide 1 MG/ML Topical Cream (0.1%) |
| 1014678 | cetirizine hydrochloride 10 MG Oral Tablet |
| 617310 | atorvastatin 20 MG Oral Tablet |

## Results (LOINC 2.81)

| Code | Measure | Unit | Category |
|---|---|---|---|
| 2857-1 | PSA | ng/mL | laboratory |
| 2986-8 | Testosterone | ng/dL | laboratory |
| 58410-2 | CBC panel (organizer) | — | panel |
| 718-7, 6690-2, 777-3, 711-2 | Hemoglobin, white cells, platelets, eosinophils | g/dL, 10*3/uL | laboratory |
| 24323-8 | Comprehensive metabolic panel (organizer) | — | panel |
| 2951-2, 2823-3, 2345-7, 2160-0, 98979-8, 17861-6, 1742-6, 1920-8, 6768-6, 1751-7 | Sodium, potassium, glucose, creatinine, eGFR (CKD-EPI 2021), calcium, ALT, AST, alkaline phosphatase, albumin | various | laboratory |
| 2532-0 | LDH | U/L | laboratory |
| 4548-4 | Hemoglobin A1c | % | laboratory |
| 2093-3, 2085-9, 13457-7, 2571-8 | Total cholesterol, HDL, LDL (calculated), triglycerides | mg/dL | laboratory |
| 62292-8 | 25-hydroxyvitamin D | ng/mL | laboratory |
| 3016-3, 3024-7 | TSH, free T4 | m[IU]/L, ng/dL | laboratory |
| 38263-0, 38267-1 | DXA femur and lumbar spine T-scores | {T-score} | imaging |
| 44261-6, 55758-7 | PHQ-9, PHQ-2 | {score} | survey |
| 80976-4 | IPSS | {score} | survey |
| 72514-3 | Pain severity, 0 to 10 numeric rating | {score} | survey |
| 72233-0 | Mini-Cog | {score} | survey |
| 75626-2 | AUDIT-C | {score} | survey |

Reference ranges are typical adult male ranges chosen for the teaching record; the testosterone range notes the castrate target. FRAX results, the germline and somatic test results and the imaging findings are recorded as narrative.

## Procedures, immunizations, and encounter types

- Procedures: SNOMED CT 719178004 (multiparametric MRI of prostate), 433761009 (CT of thorax, abdomen and pelvis with contrast), 41747008 (radioisotope scan of bone), 788708005 (MRI-US fusion guided transperineal biopsy of prostate), 764820005 (PET/CT of whole body using gallium-68, for the PSMA scan), 312681000 (bone density scan), 441799006 (intensity modulated radiation therapy) and 713603004 (advance care planning).
- Encounter types: SNOMED CT 390906007 (follow-up encounter) for the three focused chronic-care visits, 281038008 (geriatric annual health check) for the subsequent annual wellness visit, and 185345009 (encounter for symptom) for the sick visit. The services are named in plain text as HCPCS G0439 and CPT 99497; HCPCS and CPT are not used as coded values.
- Immunizations: CVX 115 (Tdap), 135 (high-dose influenza), 309 (COVID-19 mRNA) and 216 (PCV20).
- Family history relationship: HL7 RoleCode MTH (mother). No known allergy: SNOMED CT 716186003.

## Vital signs

The six visits use LOINC 8302-2, 29463-7, 39156-5, 8480-6, 8462-4, 8867-4, 9279-1, 8310-5, and 59408-5 with UCUM units.

## Review note

Codes were checked against the public terminology server and NLM RxNav on November 6, 2026. They do not imply that Pablo Neruda received these diagnoses, tests, or medications during his lifetime.
