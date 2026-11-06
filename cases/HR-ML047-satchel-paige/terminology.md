# Terminology — Satchel Paige

> **SYNTHETIC RECORD, NOT A REAL MEDICAL RECORD**

## Diagnoses

| Use | System | Code | Display | Evidence |
|---|---|---|---|---|
| Presenting problem, resolved at the consultation | ICD-10-CM FY2026 | R06.09 | Other forms of dyspnea | S; linked to his documented emphysema |
| Active problem, from the consultation | ICD-10-CM FY2026 | J44.9 | Chronic obstructive pulmonary disease, unspecified | S; linked to his documented emphysema |
| Active problem | ICD-10-CM FY2026 | Z87.891 | Personal history of nicotine dependence | S; the smoking history is synthetic |
| Active problem | ICD-10-CM FY2026 | E78.5 | Hyperlipidemia, unspecified | S |
| Sick visit, resolved | ICD-10-CM FY2026 | J44.1 | Chronic obstructive pulmonary disease with (acute) exacerbation | S |

No code is used for heart failure or coronary disease; see the editorial resolutions in sources.md. The emphysema seen on the screening CT is described in the notes; the problem keeps J44.9 because it was recorded from spirometry before the CT.

## Medications (RxNorm)

| Code | Display |
|---|---|
| 2123076 | NDA020983 200 ACTUAT albuterol 0.09 MG/ACTUAT Metered Dose Inhaler (as needed, with a spacer) |
| 1487527 | 30 ACTUAT umeclidinium 0.0625 MG/ACTUAT / vilanterol 0.025 MG/ACTUAT Dry Powder Inhaler (once daily, from the consultation) |
| 617310 | atorvastatin 20 MG Oral Tablet |
| 312615 | prednisone 20 MG Oral Tablet (40 mg daily for five days at the exacerbation) |
| 1649988 | doxycycline hyclate 100 MG Oral Capsule (twice daily for five days at the exacerbation) |

## Results (LOINC 2.81)

| Code | Measure | Unit | Category |
|---|---|---|---|
| 718-7, 6690-2, 711-2 (panel 58410-2) | Hemoglobin, white cells, eosinophils | g/dL, 10*3/uL | laboratory |
| 1825-9 | Alpha-1 antitrypsin | mg/dL | laboratory |
| 2951-2, 2823-3, 2160-0, 98979-8, 2345-7 (panel 51990-0) | Sodium, potassium, creatinine, eGFR (CKD-EPI 2021, race-free), glucose | mmol/L, mg/dL, mL/min/{1.73_m2} | laboratory |
| 4548-4, 1742-6 | HbA1c, ALT | %, U/L | laboratory |
| 2093-3, 2085-9, 13457-7, 2571-8 | Total cholesterol, HDL, LDL (calculated), triglycerides | mg/dL | laboratory |
| 33762-6 | NT-proBNP | pg/mL | laboratory |
| 2744-1, 2019-8, 2703-7 (panel 24336-0) | Arterial pH, PaCO2, PaO2 | [pH], mm[Hg] | laboratory |
| 20157-4, 20155-8, 19875-4, 69970-2, 20152-5 | FEV1 before and after bronchodilator, FVC after bronchodilator, FEV1/FVC after bronchodilator, FEV1 percent predicted (GLI Global) | L, {ratio}, % | imaging |
| 64098-7 | Six-minute walk distance | m | imaging |
| 44261-6, 55758-7 | PHQ-9, PHQ-2 | {score} | survey |
| 72233-0 | Mini-Cog | {score} | survey |
| 75626-2 | AUDIT-C | {score} | survey |

Reference ranges are typical adult ranges chosen for the teaching record; spirometry lower limits of normal are from the race-neutral GLI Global equations, and interpretation flags follow them. The CAT and mMRC scores, the lowest walking saturations, the respiratory viral test, the CT, X-ray, ECG and ultrasound findings, and the hepatitis results are recorded as narrative (no LOINC survey code is used for the CAT or mMRC).

## Procedures, immunizations, and encounter types

- 12-lead ECG: SNOMED CT 268400002 (intake and fifteen weeks). Spirometry: 127783003. Low-dose CT of the chest: 16334891000119106. Pulmonary rehabilitation: 15081005. Chest X-ray: 399208008. Ultrasound of the abdominal aorta: 241462009.
- Advance care planning: SNOMED CT 713603004.
- Encounter types: SNOMED CT 390906007 (follow-up encounter) for the three focused chronic-care visits, 281038008 (geriatric annual health check) for the subsequent annual wellness visit, and 185345009 (encounter for symptom) for the sick visit. The services are named in plain text as HCPCS G0439 and CPT 99497; HCPCS and CPT are not used as coded values.
- Immunizations: CVX 216 (PCV20), 115 (Tdap), 135 (influenza, high-dose), 303 (RSV), 309 (COVID-19 mRNA) and 187 (zoster recombinant, first dose).
- No known allergy: SNOMED CT 716186003.

## Vital signs

The six visits use LOINC 8302-2, 29463-7, 39156-5, 8480-6, 8462-4, 8867-4, 9279-1, 8310-5, and 59408-5 with UCUM units, on room air.

## Review note

Codes were checked against the public terminology server and NLM RxNav on November 5, 2026. They do not imply that Paige received these diagnoses, tests, or medications during his lifetime.
