# Terminology — Elizabeth Barrett Browning

> **SYNTHETIC RECORD, NOT A REAL MEDICAL RECORD**

## Diagnoses

| Use | System | Code | Display | Evidence |
|---|---|---|---|---|
| Presenting problem at intake, resolved at the consultation | ICD-10-CM FY2026 | R05.3 | Chronic cough | S; linked to her documented chest illness |
| Problem recorded at the consultation | ICD-10-CM FY2026 | J47.9 | Bronchiectasis, uncomplicated | S; linked to the documented chest illness and the retrospective interpretations (R, disputed) |
| Long-term prescribed opioid therapy | ICD-10-CM FY2026 | Z79.891 | Long term (current) use of opiate analgesic | S; linked to her documented prescribed opium |
| Grief | ICD-10-CM FY2026 | F43.81 | Prolonged grief disorder | S; linked to her documented bereavement |
| Finding at intake, resolved at three months | ICD-10-CM FY2026 | E55.9 | Vitamin D deficiency, unspecified | S |
| Finding at intake | ICD-10-CM FY2026 | R63.6 | Underweight | S |
| Problem added at the sick visit, resolved | ICD-10-CM FY2026 | J47.1 | Bronchiectasis with (acute) exacerbation | S |

No opioid use disorder code is used (see sources.md). The retrospective interpretations (hypokalemic periodic paralysis, pulmonary sequestration, and the conjectures listed by Penn State) are not coded.

## Medications (RxNorm)

| Code | Display |
|---|---|
| 892589 | morphine sulfate 2 MG/ML Oral Solution (5 mL, then 4.5, 4 and 3.5 mL twice daily) |
| 1725059 | naloxone hydrochloride 40 MG/ML Nasal Spray (the 4 mg nasal spray device) |
| 199362 | cholecalciferol 0.025 MG Oral Tablet (1000 units; two daily) |
| 308191 | amoxicillin 500 MG Oral Capsule (sick visit, 14 days) |

## Results (LOINC 2.81)

| Code | Measure | Unit | Category |
|---|---|---|---|
| 718-7, 787-2, 6690-2, 26449-9, 777-3 | Hemoglobin, MCV, white cells, eosinophils, platelets | g/dL, fL, 10*3/uL | laboratory |
| 1988-5 | C-reactive protein | mg/L | laboratory |
| 51990-0 | Basic metabolic panel (organizer) | — | panel |
| 2951-2, 2823-3, 2160-0, 98979-8, 2345-7, 17861-6 | Sodium, potassium, creatinine, eGFR (CKD-EPI 2021), glucose, calcium | mmol/L, mg/dL, mL/min/{1.73_m2} | laboratory |
| 62292-8 | 25-hydroxyvitamin D | ng/mL | laboratory |
| 2465-3, 2458-8, 2472-9 | IgG, IgA, IgM | mg/dL | laboratory |
| 19113-0, 6025-1 | Total IgE, Aspergillus fumigatus IgE | [IU]/mL, k[IU]/L | laboratory |
| 20155-8, 20152-5, 19875-4, 69970-2 | FEV1, FEV1 percent predicted, FVC and FEV1/FVC after bronchodilator | L, %, {ratio} | imaging |
| 85394-5, 80934-3 | DXA lumbar spine and femur Z-scores | {Z-score} | imaging |
| 44261-6, 55758-7 | PHQ-9, PHQ-2 | {score} | survey |
| 70274-6, 75626-2 | GAD-7, AUDIT-C | {score} | survey |

Reference ranges are typical adult female ranges chosen for the teaching record; interpretation flags follow them. Qualitative results (acid-fast smears, NAAT, mycobacterial and bacterial cultures, interferon-gamma release assay, HIV, urine drug test, hepatitis B and C screening, HPV test) are recorded as narrative.

## Procedures, immunizations, and encounter types

- CT of the chest: SNOMED CT 169069000 (CT of chest).
- Spirometry: SNOMED CT 127783003.
- DXA: SNOMED CT 413841000119101 (Dual energy X-ray absorptiometry of bone of hip joint region and bone of spine).
- Advance care planning: SNOMED CT 713603004.
- Encounter types: SNOMED CT 390906007 (follow-up encounter) for the four focused chronic-care visits, 86013001 (periodic reevaluation and management of healthy individual) for the preventive visit, and 185345009 (encounter for symptom) for the sick visit. The services are named in plain text as CPT 99395 and 99497; CPT is not used as a coded value.
- Immunizations: CVX 115 (Tdap), 216 (PCV20), 189 (HepB-CpG, two doses), and 140 (influenza, at seven months).
- Family history relationships: HL7 RoleCode MTH (mother) and BRO (brother).
- No known allergy: SNOMED CT 716186003.

## Vital signs

The seven visits use LOINC 8302-2, 29463-7, 39156-5, 8480-6, 8462-4, 8867-4, 9279-1, 8310-5, and 59408-5 with UCUM units.

## Review note

Codes were checked against the public terminology server and NLM RxNav on November 5, 2026. They do not imply that Barrett Browning received these diagnoses, tests, or medications during her lifetime.
