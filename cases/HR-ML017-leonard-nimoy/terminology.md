# Terminology — Leonard Nimoy

> **SYNTHETIC RECORD, NOT A REAL MEDICAL RECORD**

## Diagnoses

| Use | System | Code | Display | Evidence |
|---|---|---|---|---|
| Active problem | ICD-10-CM FY2026 | J44.9 | Chronic obstructive pulmonary disease, unspecified | S; linked to his publicly disclosed COPD |
| Active problem | ICD-10-CM FY2026 | Z87.891 | Personal history of nicotine dependence | S; linked to his public account of quitting smoking |

The GOLD grade (3) and group (B) are recorded in the problem text and notes; ICD-10-CM has no code for them.

## Medications (RxNorm)

| Code | Display |
|---|---|
| 2123076 | NDA020983 200 ACTUAT albuterol 0.09 MG/ACTUAT Metered Dose Inhaler (as needed) |
| 1651274 | 60 ACTUAT olodaterol 0.0025 MG/ACTUAT / tiotropium 0.0025 MG/ACTUAT Inhalation Spray (two inhalations once daily) |

## Results (LOINC 2.81)

| Code | Measure | Unit | Category |
|---|---|---|---|
| 20157-4, 20155-8 | FEV1 before and after bronchodilator | L | imaging |
| 20152-5 | FEV1 percent predicted (after bronchodilator) | % | imaging |
| 19875-4 | FVC after bronchodilator | L | imaging |
| 69970-2 | FEV1/FVC after bronchodilator | {ratio} | imaging |
| 64098-7 | 6-minute walk distance | m | imaging |
| 711-2 | Blood eosinophil count | 10*3/uL | laboratory |
| 1825-9 | Alpha-1 antitrypsin | mg/dL | laboratory |
| 718-7, 2160-0 | Hemoglobin, creatinine | g/dL, mg/dL | laboratory |
| 44261-6 | PHQ-9 total score | {score} | survey |
| 55758-7, 72233-0, 75626-2 | PHQ-2, Mini-Cog, AUDIT-C (wellness visit) | {score} | survey |

Spirometry predicted values and lower limits are a synthetic reference set for an 82-year-old man 185 cm tall; interpretation flags follow the stated ranges, and the post-bronchodilator ratio uses the GOLD fixed threshold of 0.70. The COPD Assessment Test (CAT), the mMRC dyspnea grade, GAD-2, and the Timed Up and Go have no verified LOINC code on the terminology server and are recorded as narrative in the notes and monitoring tables.

## Procedures, immunizations, and encounters

- Spirometry: SNOMED CT 127783003. 12-lead ECG: 268400002. Pulmonary rehabilitation: 15081005. Advance care planning: 713603004.
- Encounter types: SNOMED CT 390906007 (follow-up encounter) for the three focused chronic-care visits and 281038008 (geriatric annual health check) for the subsequent annual wellness visit. The services are named in plain text as HCPCS G0439 and CPT 99497; neither is used as a coded value.
- Immunizations: CVX 135 (influenza, high-dose, trivalent; the 2025-2026 and 2026-2027 doses), 187 (recombinant zoster), 115 (Tdap), 216 (PCV20), and 303 (RSV, recombinant, adjuvanted).
- No known allergy: SNOMED CT 716186003.
- Family history: none recorded; no fetched source documents a relative's health.

## Vital signs

The five visits use LOINC 8302-2, 29463-7, 39156-5, 8480-6, 8462-4, 8867-4, 9279-1, 8310-5, and 59408-5 with UCUM units. Exertional oxygen saturation during the 6-minute walk is recorded in the notes.

## Review note

Codes were checked against the public terminology server and NLM RxNav on November 3, 2026. They do not imply that Nimoy received these diagnoses, tests, or medications during his lifetime.
