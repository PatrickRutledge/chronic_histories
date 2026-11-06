# Terminology — Hatshepsut

> **SYNTHETIC RECORD, NOT A REAL MEDICAL RECORD**

## Diagnoses

| Use | System | Code | Display | Evidence |
|---|---|---|---|---|
| Presenting problem at intake, resolved at the consultation | ICD-10-CM FY2026 | R68.84 | Jaw pain | S |
| Problem recorded at the consultation, resolved at six weeks | ICD-10-CM FY2026 | K04.7 | Periapical abscess without sinus | S |
| Problem recorded at the consultation | ICD-10-CM FY2026 | K05.323 | Chronic periodontitis, generalized, severe | S; stage III, grade C in the 2018 classification |
| Finding at intake | ICD-10-CM FY2026 | E11.65 | Type 2 diabetes mellitus with hyperglycemia | S |
| Finding at intake | ICD-10-CM FY2026 | E66.812 | Obesity, class 2 | S |
| Finding at intake | ICD-10-CM FY2026 | M17.0 | Bilateral primary osteoarthritis of knee | S |
| Problem added at the sick visit, resolved | ICD-10-CM FY2026 | N30.00 | Acute cystitis without hematuria | S |

The findings reported on the mummy KV60A (obesity, dental abscess, osteoarthritis, osteoporosis, a bone lesion read as metastatic, proposed diabetes) and the lotion hypothesis are retrospective (R) and are not coded (see sources.md).

## Medications (RxNorm)

| Code | Display |
|---|---|
| 197805 | ibuprofen 400 MG Oral Tablet (as needed for one week) |
| 198440 | acetaminophen 500 MG Oral Tablet (as needed for one week) |
| 860975 | 24 HR metformin hydrochloride 500 MG Extended Release Oral Tablet (two tablets with the evening meal) |
| 855633 | diclofenac sodium 0.01 MG/MG Topical Gel (1% gel, as needed for the knees) |
| 834127 | chlorhexidine gluconate 1.2 MG/ML Mouthwash (two weeks after the extraction) |
| 2619152 | 0.25 MG, 0.5 MG Dose 3 ML semaglutide 0.68 MG/ML Pen Injector (0.25 mg, then 0.5 mg weekly) |
| 617310 | atorvastatin 20 MG Oral Tablet |
| 1648755 | nitrofurantoin, macrocrystals 25 MG / nitrofurantoin, monohydrate 75 MG Oral Capsule (five days) |

## Results (LOINC 2.81)

| Code | Measure | Unit | Category |
|---|---|---|---|
| 718-7, 6690-2, 777-3 | Hemoglobin, white cells, platelets | g/dL, 10*3/uL | laboratory |
| 51990-0 | Basic metabolic panel (organizer) | — | panel |
| 2951-2, 2823-3, 3094-0, 2160-0, 98979-8, 2345-7, 17861-6 | Sodium, potassium, urea nitrogen, creatinine, eGFR (CKD-EPI 2021), glucose, calcium | mmol/L, mg/dL, mL/min/{1.73_m2} | laboratory |
| 1742-6, 6768-6 | ALT, alkaline phosphatase | U/L | laboratory |
| 4548-4 | Hemoglobin A1c | % | laboratory |
| 24331-1 | Lipid panel (organizer) | — | panel |
| 2093-3, 2085-9, 2571-8, 13457-7 | Total cholesterol, HDL, triglycerides, LDL (calculated) | mg/dL | laboratory |
| 9318-7 | Urine albumin-to-creatinine ratio | mg/g{creat} | laboratory |
| 3016-3 | TSH | m[IU]/L | laboratory |
| 44261-6, 55758-7 | PHQ-9, PHQ-2 | {score} | survey |
| 70274-6, 75626-2 | GAD-7, AUDIT-C | {score} | survey |

Reference ranges are typical adult female ranges chosen for the teaching record; interpretation flags follow them. Qualitative results (urine dipstick and culture, HPV test, fecal immunochemical test, HIV and hepatitis B and C screening, retinal photographs, mammography) are recorded as narrative.

## Procedures, immunizations, and encounter types

- Panoramic radiograph: SNOMED CT 89846007 (Orthopantogram), at the consultation.
- Abscess drainage: SNOMED CT 450526008 (Drainage of dental abscess by intraoral approach), at the consultation.
- Extraction of tooth 19: SNOMED CT 55162003 (Tooth extraction), at the consultation.
- Diabetic foot examination: SNOMED CT 401191002; retinal photography: SNOMED CT 20067007 (Ocular fundus photography), at six weeks.
- Scaling and root planing: SNOMED CT 1260196001 (Scaling and root planing of all teeth), about eight weeks after the extraction.
- Screening mammography: SNOMED CT 24623002.
- Advance care planning: SNOMED CT 713603004.
- Encounter types: SNOMED CT 390906007 (follow-up encounter) for the three focused chronic-care visits, 86013001 (periodic reevaluation and management of healthy individual) for the preventive visit, and 185345009 (encounter for symptom) for the sick visit. The services are named in plain text as CPT 99396 and 99497; CPT is not used as a coded value.
- Immunizations: CVX 216 (PCV20), 115 (Tdap) and 189 (HepB-CpG, dose 1).
- No known allergy: SNOMED CT 716186003.

## Vital signs

The six visits use LOINC 8302-2, 29463-7, 39156-5, 8480-6, 8462-4, 8867-4, 9279-1, 8310-5, and 59408-5 with UCUM units.

## Review note

Codes were checked against the public terminology server and NLM RxNav on November 6, 2026. They do not imply that Hatshepsut received these diagnoses, tests, or medications during her lifetime.
