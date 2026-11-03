# Terminology — Theodore Roosevelt

> **SYNTHETIC RECORD, NOT A REAL MEDICAL RECORD**

## Diagnoses

| Use | System | Code | Display | Evidence |
|---|---|---|---|---|
| Active problem | ICD-10-CM FY2026 | J45.40 | Moderate persistent asthma, uncomplicated | S; linked to his documented lifelong asthma (D) and its retrospective classification (R) |
| Active problem | ICD-10-CM FY2026 | H52.13 | Myopia, bilateral | S; linked to his documented near-sightedness |
| Resolved problem | ICD-10-CM FY2026 | J45.41 | Moderate persistent asthma with (acute) exacerbation | S; recorded at the August sick visit |

## Medications (RxNorm)

| Code | Display |
|---|---|
| 2123076 | NDA020983 200 ACTUAT albuterol 0.09 MG/ACTUAT Metered Dose Inhaler (as needed before intake; stopped) |
| 1246304 | 120 ACTUAT budesonide 0.16 MG/ACTUAT / formoterol fumarate 0.0045 MG/ACTUAT Metered Dose Inhaler (maintenance and as-needed reliever) |
| 312615 | prednisone 20 MG Oral Tablet (two tablets daily for five days) |

## Results (LOINC 2.81)

| Code | Measure | Unit | Category |
|---|---|---|---|
| 20157-4, 20155-8, 20150-9 | FEV1 before bronchodilator, after bronchodilator, and without a bronchodilator challenge | L | imaging |
| 20152-5 | FEV1 measured/predicted | % | imaging |
| 19870-5 | Forced vital capacity | L | imaging |
| 19926-5 | FEV1/FVC | {ratio} | imaging |
| 19935-6 | Peak expiratory flow by peak flow meter | L/min | imaging |
| 96269-6 | Fractional exhaled nitric oxide (FeNO) | [ppb] | imaging |
| 711-2 | Blood eosinophil count | 10*3/uL | laboratory |
| 19113-0 | Total IgE | [IU]/mL | laboratory |
| 6096-2 | European house dust mite specific IgE | k[IU]/L | laboratory |
| 82668-5 | Asthma Control Test total score | {score} | survey |
| 55758-7 | PHQ-2 total score | {score} | survey |
| 75626-2 | AUDIT-C total score (preventive visit) | {score} | survey |

Spirometry, peak flow, and FeNO are device measurements and use the `imaging` category. Reference ranges are synthetic lower limits of normal for a 23-year-old man 175 cm tall (FEV1 3.65 L, FVC 4.40 L, FEV1/FVC 0.72); the peak-flow range is the green zone of his action plan (80 percent of a personal best of 610 L/min). Interpretation flags follow these ranges.

## Procedures, immunizations, and other codes

- Spirometry: SNOMED CT 127783003. Asthma action care planning: SNOMED CT 716542004.
- Immunizations: CVX 140 (influenza, trivalent, preservative free), 216 (PCV20), 115 (Tdap), and 165 (HPV9).
- No known allergy: SNOMED CT 716186003.
- Encounter types: SNOMED CT 390906007 (follow-up encounter) for the three focused chronic-care visits, 185345009 (encounter for symptom) for the August sick visit, and 86013001 (periodic reevaluation and management of healthy individual) for the adult preventive visit. The services are named in plain text as CPT 99395 and 99497; CPT is not used as a coded value.
- Family relationship: HL7 RoleCode FTH (father).

## Vital signs

The six visits use LOINC 8302-2, 29463-7, 39156-5, 8480-6, 8462-4, 8867-4, 9279-1, 8310-5, and 59408-5 with UCUM units.

## Review note

Codes were checked against the public terminology server, the NLM Clinical Tables LOINC search, and NLM RxNav on November 3, 2026. They do not imply that Roosevelt received these diagnoses, tests, or medications during his lifetime.
