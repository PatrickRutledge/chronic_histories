# Terminology — Sir John Franklin

> **SYNTHETIC RECORD, NOT A REAL MEDICAL RECORD**

## Diagnoses

| Use | System | Code | Display | Evidence |
|---|---|---|---|---|
| Presenting finding, resolved at the consultation | ICD-10-CM FY2026 | R03.0 | Elevated blood-pressure reading, without diagnosis of hypertension | S; linked to the documented doubts about his fitness |
| Active problem, from the consultation | ICD-10-CM FY2026 | I10 | Essential (primary) hypertension | S |
| Active problem | ICD-10-CM FY2026 | E66.811 | Obesity, class 1 | S; linked to the documented description of his build |
| Active problem | ICD-10-CM FY2026 | Z71.84 | Encounter for health counseling related to travel | S; linked to the documented expedition |
| Active problem | ICD-10-CM FY2026 | H83.3X3 | Noise effects on inner ear, bilateral | S; linked to his documented hearing loss from gunfire |
| Active problem | ICD-10-CM FY2026 | E55.9 | Vitamin D deficiency, unspecified | S |
| Sick visit, resolved | ICD-10-CM FY2026 | J10.1 | Influenza due to other identified influenza virus with other respiratory manifestations | S; linked to his documented influenza |

No code is used for lead poisoning, scurvy or lead encephalopathy; see the editorial resolutions in sources.md.

## Medications (RxNorm)

| Code | Display |
|---|---|
| 197361 | amlodipine 5 MG Oral Tablet (once daily, from the consultation) |
| 199362 | cholecalciferol 0.025 MG Oral Tablet (vitamin D3 1,000 units daily, from the consultation) |
| 199083 | ascorbic acid 250 MG Oral Tablet (daily, from the pre-departure visit) |
| 312122 | oseltamivir 75 MG Oral Capsule (twice daily for five days, sick visit) |

## Results (LOINC 2.81)

| Code | Measure | Unit | Category |
|---|---|---|---|
| 2951-2, 2823-3, 2160-0, 98979-8, 2345-7 (panel 51990-0) | Sodium, potassium, creatinine, eGFR (CKD-EPI 2021), glucose | mmol/L, mg/dL, mL/min/{1.73_m2} | laboratory |
| 718-7 | Hemoglobin | g/dL | laboratory |
| 4548-4 | HbA1c | % | laboratory |
| 2093-3, 2085-9, 13457-7, 2571-8 | Total cholesterol, HDL, LDL (calculated), triglycerides | mg/dL | laboratory |
| 3016-3 | TSH | m[IU]/L | laboratory |
| 1742-6 | ALT | U/L | laboratory |
| 5671-3 | Blood lead | ug/dL | laboratory |
| 1903-4 | Plasma ascorbate (vitamin C) | mg/dL | laboratory |
| 62292-8 | 25-hydroxyvitamin D | ng/mL | laboratory |
| 9318-7 | Urine albumin-to-creatinine ratio | mg/g | laboratory |
| 10230-1 | Left ventricular ejection fraction (echocardiogram) | % | imaging |
| 44261-6, 55758-7 | PHQ-9, PHQ-2 | {score} | survey |
| 70274-6 | GAD-7 | {score} | survey |
| 75626-2 | AUDIT-C | {score} | survey |

Reference ranges are typical adult ranges chosen for the teaching record; interpretation flags follow them. The tuberculosis blood test, the rapid influenza test, the fecal immunochemical test, the HIV, hepatitis B and hepatitis C screening results, the PREVENT and Pooled Cohort risk estimates, and the home blood pressure averages are recorded as narrative.

## Procedures, immunizations, and encounter types

- 12-lead ECG: SNOMED CT 268400002. Pure tone audiometry: 252577008. Echocardiography: 40701008. Exercise tolerance test: 165079009.
- Advance care planning: SNOMED CT 713603004.
- Encounter types: SNOMED CT 390906007 (follow-up encounter) for the four focused chronic-care visits, 86013001 (periodic reevaluation and management of healthy individual) for the preventive visit, and 185345009 (encounter for symptom) for the sick visit. The services are named in plain text as CPT 99396 and 99497; CPT is not used as a coded value.
- Immunizations: CVX 115 (Tdap), 216 (PCV20), 187 (zoster recombinant, two doses), 189 (HepB-CpG, two doses) and 175 (rabies, diploid cell culture, two doses).
- No known allergy: SNOMED CT 716186003.

## Vital signs

The seven visits use LOINC 8302-2, 29463-7, 39156-5, 8480-6, 8462-4, 8867-4, 9279-1, 8310-5, and 59408-5 with UCUM units.

## Review note

Codes were checked against the public terminology server and NLM RxNav on November 5, 2026. They do not imply that Franklin received these diagnoses, tests, or medications during his lifetime.
