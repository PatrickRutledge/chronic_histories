# Terminology — Higuchi Ichiyō

> **SYNTHETIC RECORD, NOT A REAL MEDICAL RECORD**

## Diagnoses

| Use | System | Code | Display | Evidence |
|---|---|---|---|---|
| Presenting problem at intake, resolved at the results visit | ICD-10-CM FY2026 | R05.3 | Chronic cough | S; timing linked to her documented decline from early 1896 |
| Problem recorded at the results visit, resolved at the end of treatment | ICD-10-CM FY2026 | A15.0 | Tuberculosis of lung | S; linked to her documented tuberculosis (D) |
| Finding at intake, resolved at the end of treatment | ICD-10-CM FY2026 | E44.0 | Moderate protein-calorie malnutrition | S |
| Social need at intake | ICD-10-CM FY2026 | Z59.6 | Low income | S; anchored to her documented poverty |
| Problem added at the sick visit, resolved | ICD-10-CM FY2026 | N30.00 | Acute cystitis without hematuria | S |

## Medications (RxNorm)

| Code | Display |
|---|---|
| 311166 | isoniazid 100 MG Oral Tablet (two tablets daily for 26 weeks) |
| 198201 | rifampin 150 MG Oral Capsule (three capsules daily for 26 weeks) |
| 198181 | pyrazinamide 500 MG Oral Tablet (two tablets daily for eight weeks) |
| 995599 | ethambutol hydrochloride 100 MG Oral Tablet (six tablets daily for five weeks) |
| 639566 | vitamin B6 50 MG Oral Tablet (pyridoxine, daily with isoniazid) |
| 1648755 | nitrofurantoin, macrocrystals 25 MG / nitrofurantoin, monohydrate 75 MG Oral Capsule (twice daily for five days) |

## Results (LOINC 2.81)

| Code | Measure | Unit | Category |
|---|---|---|---|
| 58410-2 | CBC panel (organizer) | — | panel |
| 718-7, 6690-2, 777-3 | Hemoglobin, white cells, platelets | g/dL, 10*3/uL | laboratory |
| 1742-6, 1920-8, 1975-2, 6768-6, 1751-7 | ALT, AST, total bilirubin, alkaline phosphatase, albumin | U/L, mg/dL, g/dL | laboratory |
| 51990-0 | Basic metabolic panel (organizer) | — | panel |
| 2160-0, 98979-8, 2345-7 | Creatinine, eGFR (CKD-EPI 2021), glucose | mg/dL, mL/min/{1.73_m2} | laboratory |
| 4548-4 | Hemoglobin A1c | % | laboratory |
| 79878-5, 79879-3 | Visual acuity, right and left eye (ETDRS letters) | {letters} | imaging |
| 44261-6, 55758-7 | PHQ-9, PHQ-2 | {score} | survey |
| 70274-6, 75626-2 | GAD-7, AUDIT-C | {score} | survey |

Reference ranges are typical adult female ranges chosen for the teaching record; interpretation flags follow them. Qualitative results (acid-fast smears, Xpert MTB/RIF Ultra, cultures and susceptibility, HIV, hepatitis B and C, pregnancy test, urine microscopy and culture, cervical cytology, Ishihara color vision) are recorded as narrative.

## Procedures, immunizations, and encounter types

- Chest X-ray: SNOMED CT 399208008 (Plain X-ray of chest), at intake and at the end of treatment.
- Cervical cytology: SNOMED CT 439958008 (Sampling of cervix for Papanicolaou smear).
- Advance care planning: SNOMED CT 713603004.
- Encounter types: SNOMED CT 390906007 (follow-up encounter) for the four focused chronic-care visits, 86013001 (periodic reevaluation and management of healthy individual) for the preventive visit, and 185345009 (encounter for symptom) for the sick visit. The services are named in plain text as CPT 99395 and 99497; CPT is not used as a coded value.
- Immunizations: CVX 115 (Tdap), 189 (HepB-CpG, two doses), 165 (HPV9, doses 1 and 2), and 140 (influenza, split virus, trivalent, preservative-free).
- No known allergy: SNOMED CT 716186003.

## Vital signs

The seven visits use LOINC 8302-2, 29463-7, 39156-5, 8480-6, 8462-4, 8867-4, 9279-1, 8310-5, and 59408-5 with UCUM units.

## Review note

Codes were checked against the public terminology server and NLM RxNav on November 5, 2026. They do not imply that Higuchi Ichiyō received these diagnoses, tests, or medications during her lifetime.
