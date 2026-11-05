# Terminology — Irène Joliot-Curie

> **SYNTHETIC RECORD, NOT A REAL MEDICAL RECORD**

## Diagnoses

| Use | System | Code | Display | Evidence |
|---|---|---|---|---|
| Presenting problem at intake, resolved at the marrow visit | ICD-10-CM FY2026 | D61.818 | Other pancytopenia | S; timing linked to the documented decline in her health after 1950 |
| Problem recorded at the marrow visit | ICD-10-CM FY2026 | C92.00 | Acute myeloblastic leukemia, not having achieved remission | S; linked to her documented leukemia and its attribution to radiation (R) |
| Active problem from intake | ICD-10-CM FY2026 | Z57.1 | Occupational exposure to radiation | S; linked to her documented work and the 1946 accident |
| Active problem from intake | ICD-10-CM FY2026 | Z86.11 | Personal history of tuberculosis | S; linked to her documented tuberculosis |
| Finding at the results review | ICD-10-CM FY2026 | R94.2 | Abnormal results of pulmonary function studies | S |
| Problem added at the sick visit, resolved | ICD-10-CM FY2026 | R11.2 | Nausea with vomiting, unspecified | S |

The WHO 2022 type (AML, myelodysplasia-related), the ICC 2022 type (AML with mutated TP53) and the ELN 2022 risk (adverse) are recorded in the notes; ICD-10-CM has no separate codes for them.

## Medications (RxNorm)

| Code | Display |
|---|---|
| 485246 | azacitidine 100 MG Injection (115 mg, 75 mg/m2, days 1 to 7) |
| 1747572 | venetoclax 10 MG Oral Tablet (cycle 1 ramp-up and 70 mg dose; cycle 2) |
| 1747574 | venetoclax 50 MG Oral Tablet (cycle 1 from day 3; cycle 2) |
| 1482908 | posaconazole 100 MG Delayed Release Oral Tablet |
| 197311 | acyclovir 400 MG Oral Tablet |
| 199885 | levofloxacin 500 MG Oral Tablet (while neutrophils were below 0.5) |
| 197320 | allopurinol 300 MG Oral Tablet (cycle 1) |
| 104894 | ondansetron 4 MG Disintegrating Oral Tablet (sick visit) |
| 876193 | polyethylene glycol 3350 17000 MG Powder for Oral Solution (sick visit) |
| 312935 | sennosides, USP 8.6 MG Oral Tablet (sick visit) |
| 198116 | potassium chloride 20 MEQ Extended Release Oral Tablet (sick visit, three days) |

## Results (LOINC 2.81)

| Code | Measure | Unit | Category |
|---|---|---|---|
| 6690-2, 751-8, 718-7, 787-2, 777-3 | White cells, neutrophils, hemoglobin, MCV, platelets | 10*3/uL, g/dL, fL | laboratory |
| 709-6 | Blasts on the blood smear | % | laboratory |
| 11150-0 | Bone marrow blasts | % | laboratory |
| 51990-0 | Basic metabolic panel (organizer) | — | panel |
| 2951-2, 2823-3, 2160-0, 98979-8 | Sodium, potassium, creatinine, eGFR (CKD-EPI 2021) | mmol/L, mg/dL, mL/min/{1.73_m2} | laboratory |
| 17861-6, 2777-1, 3084-1, 19123-9 | Calcium, phosphate, uric acid, magnesium | mg/dL | laboratory |
| 2532-0, 1742-6, 1975-2, 1751-7 | LDH, ALT, total bilirubin, albumin | U/L, mg/dL, g/dL | laboratory |
| 6301-6, 3255-7 | INR, fibrinogen | {INR}, mg/dL | laboratory |
| 98130-8, 20152-5 | DLCO and FEV1, percent of predicted | % | imaging |
| 10230-1 | Left ventricular ejection fraction | % | imaging |
| 8636-3 | QTc | ms | imaging |
| 89247-1 | ECOG performance status | {score} | survey |
| 44261-6, 55758-7, 70274-6, 75626-2 | PHQ-9, PHQ-2, GAD-7, AUDIT-C | {score} | survey |

Reference ranges are typical adult female ranges chosen for the teaching record; interpretation flags follow them. Qualitative results (flow cytometry, karyotype, molecular panel, measurable residual disease, PML::RARA, chest X-ray, hepatitis and HIV tests, posaconazole level) are recorded as narrative.

## Procedures, immunizations, and encounter types

- Bone marrow aspiration and biopsy (diagnosis and day 22): SNOMED CT 56241004 (Bone marrow biopsy, needle or trocar).
- Red cell transfusion: SNOMED CT 180207008; platelet transfusion: 180208003.
- Chest X-ray: 399208008; lung function tests: 23426006; echocardiogram: 40701008; 12-lead ECG: 268400002.
- Advance care planning: SNOMED CT 713603004.
- Encounter types: SNOMED CT 390906007 (follow-up encounter) for the four focused chronic-care visits, 86013001 (periodic reevaluation and management of healthy individual) for the preventive visit, and 185345009 (encounter for symptom) for the sick visit. The services are named in plain text as CPT 99396 and 99497; CPT is not used as a coded value.
- Immunizations: CVX 140 (inactivated influenza).
- Family history relationship: HL7 RoleCode MTH (mother).
- No known allergy: SNOMED CT 716186003.

## Vital signs

The seven visits use LOINC 8302-2, 29463-7, 39156-5, 8480-6, 8462-4, 8867-4, 9279-1, 8310-5, and 59408-5 with UCUM units.

## Review note

Codes were checked against the public terminology server and NLM RxNav on November 5, 2026. They do not imply that Joliot-Curie received these diagnoses, tests, or medications during her lifetime.
