# Terminology — Barbara Jordan

> **SYNTHETIC RECORD, NOT A REAL MEDICAL RECORD**

## Diagnoses

| Use | System | Code | Display | Evidence |
|---|---|---|---|---|
| Intake problem, resolved at the consultation | ICD-10-CM FY2026 | G35.D | Multiple sclerosis, unspecified | S; linked to the documented cane and the later-revealed diagnosis |
| Active problem from the consultation | ICD-10-CM FY2026 | G35.B1 | Active primary progressive multiple sclerosis | S; course and MRI synthetic; the disease is publicly documented |
| Active problem | ICD-10-CM FY2026 | R26.89 | Other abnormalities of gait and mobility | S; linked to the documented cane |
| Active problem | ICD-10-CM FY2026 | N31.9 | Neuromuscular dysfunction of bladder, unspecified | S; not publicly described |
| Active problem | ICD-10-CM FY2026 | E55.9 | Vitamin D deficiency, unspecified | S |

ICD-10-CM FY2026 subdivides G35 by course; the three-character category is not used as a code.

## Medications (RxNorm)

| Code | Display |
|---|---|
| 804146 | cholecalciferol 0.05 MG Oral Capsule |
| 430902 | baclofen 5 MG Oral Tablet (two weeks to five weeks) |
| 197391 | baclofen 10 MG Oral Tablet (from five weeks) |
| 1300791 | 24 HR mirabegron 25 MG Extended Release Oral Tablet (from two weeks) |
| 1876380 | 10 ML ocrelizumab 30 MG/ML Injection (from nine weeks) |

Infusion premedication (methylprednisolone 100 mg intravenously, an antihistamine and acetaminophen) is described in the medication and procedure text but not coded separately.

## Results (LOINC 2.81)

| Code | Measure | Unit | Category |
|---|---|---|---|
| 6690-2, 731-0, 718-7, 777-3 | White cells, absolute lymphocytes, hemoglobin, platelets | 10*3/uL, g/dL | laboratory |
| 2160-0, 98979-8 | Creatinine, eGFR (CKD-EPI 2021) | mg/dL, mL/min/{1.73_m2} | laboratory |
| 1742-6, 1920-8, 6768-6, 1975-2 | ALT, AST, alkaline phosphatase, total bilirubin | U/L, mg/dL | laboratory |
| 3016-3, 2132-9 | TSH, vitamin B12 | m[IU]/L, pg/mL | laboratory |
| 62292-8 | 25-hydroxyvitamin D | ng/mL | laboratory |
| 2465-3, 2472-9, 2458-8 | IgG, IgM, IgA | mg/dL | laboratory |
| 100977-8 | JC virus antibody index | {index} | laboratory |
| 8116-6 | CD19 cells | /uL | laboratory |
| 4548-4 | Hemoglobin A1c | % | laboratory |
| 2093-3, 13457-7, 2085-9, 2571-8 | Total cholesterol, LDL (calculated), HDL, triglycerides | mg/dL | laboratory |
| 44261-6, 55758-7 | PHQ-9, PHQ-2 | {score} | survey |

Reference ranges are typical adult female ranges chosen for the teaching record; interpretation flags follow them. The CD19 count is flagged low, the expected effect of ocrelizumab. EDSS, the timed 25-foot walk, the modified Ashworth scale, the post-void residual, bone density Z-scores and qualitative results (hepatitis B serology, varicella and measles IgG, tuberculosis blood test, HIV, hepatitis C, HPV, mammogram, MRI reports) are recorded as narrative.

## Procedures, immunizations, and encounter types

- Post-void residual by bladder scan: SNOMED CT 169251004 (Ultrasonography of urinary bladder). Brain MRI: 816077007 (MRI of brain), at diagnosis and as the re-baseline. Spine MRI: 702607002 (MRI of cervical and thoracic spine). Ocrelizumab infusions: 14152002 (Intravenous infusion). Bone density: 312681000 (Bone density scan). Mammogram: 24623002 (Screening mammography).
- Advance care planning: SNOMED CT 713603004.
- Encounter types: SNOMED CT 390906007 (follow-up encounter) for the four focused chronic-care visits and 86013001 (periodic reevaluation and management of healthy individual) for the preventive visit. No sick visit (recent-death rule). The services are named in plain text as CPT 99396 and 99497; CPT is not used as a coded value.
- Immunizations: CVX 216 (PCV20), 187 (recombinant zoster, two doses), 115 (Tdap), 189 (HepB-CpG, two doses), 140 (influenza), and 309 (COVID-19 mRNA).
- No known allergy: SNOMED CT 716186003.

## Vital signs

The six visits use LOINC 8302-2, 29463-7, 39156-5, 8480-6, 8462-4, 8867-4, 9279-1, 8310-5, and 59408-5 with UCUM units.

## Review note

Codes were checked against the public terminology server and NLM RxNav on November 4, 2026. They do not imply that Jordan received these diagnoses, tests, or medications during her lifetime.
