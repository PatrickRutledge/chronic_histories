# Terminology — Srinivasa Ramanujan

> **SYNTHETIC RECORD, NOT A REAL MEDICAL RECORD**

## Diagnoses

| Use | System | Code | Display | Evidence |
|---|---|---|---|---|
| Intake symptom, resolved at the second visit | ICD-10-CM FY2026 | R50.9 | Fever, unspecified | S; linked to his documented illness |
| Intake symptom, resolved at the second visit | ICD-10-CM FY2026 | R63.4 | Abnormal weight loss | S; linked to his documented illness and diet |
| Intake symptom, resolved at the second visit | ICD-10-CM FY2026 | R10.11 | Right upper quadrant pain | S; linked to the hepatic amoebiasis later proposed |
| Problem from the second visit, resolved at three months | ICD-10-CM FY2026 | A06.4 | Amebic liver abscess | S; linked to the later proposal (R) and the documented dysentery |
| Active problem | ICD-10-CM FY2026 | D51.3 | Other dietary vitamin B12 deficiency anemia | S; linked to his documented vegetarian diet |
| Active problem | ICD-10-CM FY2026 | E55.9 | Vitamin D deficiency, unspecified | S; linked to his documented diet |
| Finding from the second visit, resolved at six weeks | ICD-10-CM FY2026 | R76.12 | Nonspecific reaction to cell mediated immunity measurement of gamma interferon antigen response without active tuberculosis | S |
| Active problem from six weeks | ICD-10-CM FY2026 | Z22.7 | Latent tuberculosis | S; linked to the tuberculosis treated in his lifetime (R) |
| Active problem | ICD-10-CM FY2026 | F43.21 | Adjustment disorder with depressed mood | S; linked to his documented loneliness |
| Sick visit, resolved | ICD-10-CM FY2026 | J06.9 | Acute upper respiratory infection, unspecified | S |

## Medications (RxNorm)

| Code | Display |
|---|---|
| 314106 | metronidazole 250 MG Oral Tablet (three tablets three times a day, 10 days) |
| 314184 | paromomycin 250 MG Oral Capsule (two capsules three times a day, 7 days) |
| 309593 | vitamin B12 1 MG Oral Tablet |
| 1291276 | cholecalciferol 1.25 MG Oral Tablet (weekly, 8 weeks) |
| 801663 | cholecalciferol 0.05 MG Oral Tablet (daily, after the weekly course) |
| 198202 | rifampin 300 MG Oral Capsule (two capsules daily, 4 months) |

Acetaminophen for fever and pain is in the plan but not prescribed or coded.

## Results (LOINC 2.81)

| Code | Measure | Unit | Category |
|---|---|---|---|
| 6690-2, 718-7, 787-2, 777-3 | White cells, hemoglobin, MCV, platelets | 10*3/uL, g/dL, fL | laboratory |
| 1988-5 | C-reactive protein | mg/L | laboratory |
| 51990-0 | Basic metabolic panel (organizer) | — | panel |
| 2951-2, 2823-3, 2160-0 | Sodium, potassium, creatinine | mmol/L, mg/dL | laboratory |
| 98979-8 | eGFR (CKD-EPI 2021) | mL/min/{1.73_m2} | laboratory |
| 6768-6, 1742-6, 1920-8, 1975-2, 1751-7 | Alkaline phosphatase, ALT, AST, total bilirubin, albumin | U/L, mg/dL, g/dL | laboratory |
| 4548-4 | Hemoglobin A1c | % | laboratory |
| 2132-9, 2284-8, 2276-4, 62292-8 | Vitamin B12, folate, ferritin, 25-hydroxyvitamin D | pg/mL, ng/mL | laboratory |
| 44261-6, 70274-6, 75626-2 | PHQ-9, GAD-7, AUDIT-C | {score} | survey |

Reference ranges are typical adult male ranges chosen for the teaching record; interpretation flags follow them. The chest radiograph, ultrasound, Entamoeba histolytica serology, stool antigen and microscopy, blood cultures, acid-fast smears, NAAT, mycobacterial cultures, interferon-gamma release assay, HIV, hepatitis B and C tests, and hepatitis A antibody are recorded as narrative.

## Procedures, immunizations, and encounter types

- Chest radiograph: SNOMED CT 399208008 (Plain X-ray of chest). Sputum induction: 229296009 (Sputum induction technique). Abdominal ultrasound: 45036003 (Ultrasonography of abdomen).
- Advance care planning: SNOMED CT 713603004.
- Encounter types: SNOMED CT 390906007 (follow-up encounter) for the four focused visits, 185345009 (encounter for symptom) for the sick visit, and 86013001 (periodic reevaluation and management of healthy individual) for the preventive visit. The preventive services are named in plain text as CPT 99395 and 99497; CPT is not used as a coded value.
- Immunizations: CVX 140 (influenza), 115 (Tdap), 189 (HepB-CpG, dose 1) and 101 (typhoid, ViCPs).
- No known allergy: SNOMED CT 716186003.

## Patient name

`identity.name_parts`: given “Ramanujan,” family “Srinivasa” (the patronymic), `family_first` true. See sources.md, “Name.”

## Vital signs

The seven visits use LOINC 8302-2, 29463-7, 39156-5, 8480-6, 8462-4, 8867-4, 9279-1, 8310-5, and 59408-5 with UCUM units.

## Review note

Codes were checked against the public terminology server and NLM RxNav on November 4, 2026. They do not imply that Srinivasa Ramanujan received these diagnoses, tests, or medications during his lifetime.
