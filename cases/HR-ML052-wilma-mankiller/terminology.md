# Terminology — Wilma Mankiller

> **SYNTHETIC RECORD, NOT A REAL MEDICAL RECORD**

## Diagnoses

| Use | System | Code | Display | Evidence |
|---|---|---|---|---|
| Presenting problem, resolved at the second visit | ICD-10-CM FY2026 | H53.2 | Diplopia | S |
| Active problem, from the second visit | ICD-10-CM FY2026 | G70.00 | Myasthenia gravis without (acute) exacerbation | S; linked to the documented myasthenia gravis |
| Active problem | ICD-10-CM FY2026 | Q61.2 | Polycystic kidney, adult type | S; linked to the documented hereditary polycystic kidney disease |
| Active problem | ICD-10-CM FY2026 | Z87.81 | Personal history of (healed) traumatic fracture | S; linked to the documented crash |
| Active problem, from the second visit | ICD-10-CM FY2026 | Z79.52 | Long term (current) use of systemic steroids | S |
| Active problem, from the third visit | ICD-10-CM FY2026 | Z79.624 | Long term (current) use of inhibitors of nucleotide synthesis | S |
| Active problem, from the fourth visit | ICD-10-CM FY2026 | Z90.89 | Acquired absence of other organs | S |

## Medications (RxNorm)

| Code | Display |
|---|---|
| 903841 | pyridostigmine bromide 30 MG Oral Tablet (trial, intake to the second visit) |
| 903857 | pyridostigmine bromide 60 MG Oral Tablet (four times daily, then three times daily) |
| 198145 | prednisone 10 MG Oral Tablet (to the fourth visit) |
| 312617 | prednisone 5 MG Oral Tablet (taper) |
| 197388 | azathioprine 50 MG Oral Tablet |
| 282465 | calcium carbonate 1250 MG Oral Tablet |
| 199362 | cholecalciferol 0.025 MG Oral Tablet (1000 units) |
| 198335 | sulfamethoxazole 800 MG / trimethoprim 160 MG Oral Tablet |
| 198440 | acetaminophen 500 MG Oral Tablet |

## Results (LOINC 2.81)

| Code | Measure | Unit | Category |
|---|---|---|---|
| 11034-6 | Acetylcholine receptor binding antibody | nmol/L | laboratory |
| 58410-2 | CBC panel (organizer) | — | panel |
| 718-7, 6690-2, 777-3 | Hemoglobin, white cells, platelets | g/dL, 10*3/uL | laboratory |
| 24323-8 | Comprehensive metabolic panel (organizer) | — | panel |
| 2951-2, 2823-3, 2345-7, 2160-0, 98979-8, 17861-6, 1742-6, 1920-8, 1751-7 | Sodium, potassium, glucose, creatinine, eGFR (CKD-EPI 2021), calcium, ALT, AST, albumin | various | laboratory |
| 3016-3 | TSH | m[IU]/L | laboratory |
| 4548-4 | Hemoglobin A1c | % | laboratory |
| 9318-7 | Urine albumin-to-creatinine ratio | mg/g | laboratory |
| 62292-8 | 25-hydroxyvitamin D | ng/mL | laboratory |
| 19870-5 | Forced vital capacity | L | imaging |
| 80934-3, 85394-5 | DXA femur and lumbar spine Z-scores | {Z-score} | imaging |
| 44261-6, 55758-7 | PHQ-9, PHQ-2 | {score} | survey |
| 75626-2 | AUDIT-C | {score} | survey |

Reference ranges are typical adult female ranges. The MG-ADL score has no LOINC code and is given in the notes. The negative inspiratory force, nerve stimulation decrement, TPMT activity, hepatitis B and tuberculosis screens, pregnancy test, total kidney volume and pathology are recorded as narrative.

## Procedures, immunizations, and encounter types

- Procedures: SNOMED CT 75385009 (CT of thorax with contrast), 306005 (echography of kidney), 252748005 (repetitive nerve stimulation), 23426006 (measurement of respiratory function), 1254744004 (thoracoscopic excision of thymus using robotic assistance) and 713603004 (advance care planning).
- Encounter types: SNOMED CT 390906007 (follow-up encounter) for the four focused chronic-care visits and 86013001 (periodic reevaluation and management of healthy individual) for the preventive visit. No sick visit (recent-death rule). The services are named in plain text as CPT 99395 and 99497; CPT is not used as a coded value.
- Immunizations: CVX 115 (Tdap), 216 (PCV20), 187 (zoster recombinant, two doses), 140 (inactivated influenza) and 309 (COVID-19 mRNA).
- No known allergy: SNOMED CT 716186003.

## Vital signs

The six visits use LOINC 8302-2, 29463-7, 39156-5, 8480-6, 8462-4, 8867-4, 9279-1, 8310-5, and 59408-5 with UCUM units.

## Review note

Codes were checked against the public terminology server and NLM RxNav on November 6, 2026. They do not imply that Wilma Mankiller received these diagnoses, tests, or medications during her lifetime.
