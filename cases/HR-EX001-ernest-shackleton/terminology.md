# Terminology — Ernest Shackleton

> **SYNTHETIC RECORD, NOT A REAL MEDICAL RECORD**

## Diagnoses

| Use | System | Code | Display | Evidence |
|---|---|---|---|---|
| Presenting problem, resolved at the consultation | ICD-10-CM FY2026 | R07.89 | Other chest pain | S; linked to his documented exertional illnesses |
| Active problem | ICD-10-CM FY2026 | F17.210 | Nicotine dependence, cigarettes, uncomplicated | S; linked to his documented heavy smoking |
| Active problem, from the second visit | ICD-10-CM FY2026 | I25.118 | Atherosclerotic heart disease of native coronary artery with other forms of angina pectoris | S; linked to his documented illnesses and Macklin's recorded cause of death |
| Active problem | ICD-10-CM FY2026 | E78.5 | Hyperlipidemia, unspecified | S |
| Active problem | ICD-10-CM FY2026 | R73.03 | Prediabetes | S |
| Active status, from the fourth visit | ICD-10-CM FY2026 | Z95.5 | Presence of coronary angioplasty implant and graft | S |
| Resolved problem | ICD-10-CM FY2026 | S39.012A | Strain of muscle, fascia and tendon of lower back, initial encounter | S; recorded at the August sick visit |

## Medications (RxNorm)

| RxCUI | Name | Use |
|---|---|---|
| 308416 | aspirin 81 MG Delayed Release Oral Tablet | Antiplatelet, lifelong |
| 259255 | atorvastatin 80 MG Oral Tablet | High-intensity statin |
| 866436 | 24 HR metoprolol succinate 50 MG Extended Release Oral Tablet | Angina; replaced at the consultation |
| 866412 | 24 HR metoprolol succinate 100 MG Extended Release Oral Tablet | Angina |
| 198039 | nitroglycerin 0.4 MG Sublingual Tablet | Rescue for angina |
| 636676 | varenicline 1 MG Oral Tablet | Smoking cessation |
| 309362 | clopidogrel 75 MG Oral Tablet | Six months after the stent |
| 349556 | ezetimibe 10 MG Oral Tablet | LDL cholesterol to target |

## Results (LOINC 2.81)

| Code | Measure | Unit | Category |
|---|---|---|---|
| 24331-1 | Lipid 1996 panel (organizer) | — | panel |
| 2093-3, 2085-9, 13457-7, 2571-8 | Total cholesterol, HDL, calculated LDL, triglycerides | mg/dL | laboratory |
| 4548-4 | HbA1c | % | laboratory |
| 51990-0 | Basic metabolic panel (organizer) | — | panel |
| 2823-3, 2160-0, 98979-8 | Potassium, creatinine, eGFR (CKD-EPI 2021) | mmol/L, mg/dL, mL/min/{1.73_m2} | laboratory |
| 1742-6 | ALT | U/L | laboratory |
| 718-7, 777-3 | Hemoglobin, platelets | g/dL, 10*3/uL | laboratory |
| 3016-3 | TSH | m[IU]/L | laboratory |
| 10230-1 | Left ventricular ejection fraction | % | imaging |
| 55758-7 | PHQ-2 total score | {score} | survey |
| 75624-7 | AUDIT total score | {score} | survey |
| 75626-2 | AUDIT-C total score | {score} | survey |

The coronary calcium score, CT-derived fractional flow reserve, stenosis grades, exercise duration and METs, and ECG findings are recorded in the notes only; no code was invented for them. Reference ranges are typical adult ranges chosen for the teaching record; interpretation flags follow them, and validation checks that every flag agrees with its range.

## Procedures and immunizations

- Electrocardiographic procedure: SNOMED CT 29303009 (intake). CT angiography of coronary artery with contrast: 419545005 and transthoracic echocardiography: 433236007 (consultation). Fluoroscopic angiography of coronary artery with contrast and insertion of stent: 418982001. Exercise tolerance test: 165079009 (pre-departure visit). Advance care planning: 713603004.
- Immunizations: CVX 115 (Tdap), 216 (PCV20), and 140 (influenza).
- No known allergy: SNOMED CT 716186003.
- Encounter types: SNOMED CT 390906007 (follow-up encounter) for the four focused chronic-care visits, 86013001 (periodic reevaluation and management of healthy individual) for the preventive visit, and 185345009 (encounter for symptom) for the sick visit. The services are named in plain text as CPT 99396 and 99497; CPT is not used as a coded value.

## Vital signs

The seven visits use LOINC 8302-2, 29463-7, 39156-5, 8480-6, 8462-4, 8867-4, 9279-1, 8310-5, and 59408-5 with UCUM units.

## Review note

Codes were checked against the public terminology server and NLM RxNav on November 5, 2026. They do not imply that Shackleton received these diagnoses, tests, or treatments during his lifetime.
