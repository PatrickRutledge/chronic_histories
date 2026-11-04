# Terminology — George H. W. Bush

> **SYNTHETIC RECORD, NOT A REAL MEDICAL RECORD**

## Diagnoses

| Use | System | Code | Display | Evidence |
|---|---|---|---|---|
| Active problem | ICD-10-CM FY2026 | I48.0 | Paroxysmal atrial fibrillation | S; linked to his documented atrial fibrillation |
| Active problem | ICD-10-CM FY2026 | E05.00 | Thyrotoxicosis with diffuse goiter without thyrotoxic crisis or storm | S; linked to his documented Graves' disease |
| Active problem (from the seven-week visit) | ICD-10-CM FY2026 | E89.0 | Postprocedural hypothyroidism | S; linked to his documented hypothyroidism after radioactive iodine |

## Medications (RxNorm)

| Code | Display |
|---|---|
| 866436 | 24 HR metoprolol succinate 50 MG Extended Release Oral Tablet |
| 866427 | 24 HR metoprolol succinate 25 MG Extended Release Oral Tablet (taper) |
| 1364445 | apixaban 5 MG Oral Tablet |
| 197941 | methimazole 10 MG Oral Tablet (two tablets daily) |
| 966222 | levothyroxine sodium 0.075 MG Oral Tablet |
| 892246 | levothyroxine sodium 0.1 MG Oral Tablet |

## Results (LOINC 2.81)

| Code | Measure | Unit | Category |
|---|---|---|---|
| 3016-3 | TSH | m[IU]/L | laboratory |
| 3024-7 | Free T4 | ng/dL | laboratory |
| 3053-6 | Total T3 | ng/dL | laboratory |
| 5385-0 | TSH receptor antibody | [IU]/L | laboratory |
| 6690-2, 751-8, 718-7 | White cell count, absolute neutrophil count, hemoglobin | 10*3/uL, g/dL | laboratory |
| 1742-6 | ALT | U/L | laboratory |
| 2160-0, 98979-8, 2823-3 | Creatinine, eGFR (CKD-EPI 2021), potassium | mg/dL, mL/min/{1.73_m2}, mmol/L | laboratory |
| 2093-3, 2085-9, 13457-7, 2571-8 | Total cholesterol, HDL cholesterol, LDL cholesterol (calculated), triglycerides (wellness visit) | mg/dL | laboratory |
| 4548-4 | HbA1c (wellness visit) | % | laboratory |
| 55758-7, 72233-0, 75626-2 | PHQ-2, Mini-Cog, AUDIT-C (wellness visit) | {score} | survey |

Reference ranges are typical adult ranges chosen for the teaching record; interpretation flags follow them. The intake TSH is reported by the laboratory as below 0.01 and recorded as 0.005. The lipid results are not grouped under a panel code, because the LOINC lipid panel names include a year that the true-date variant cannot shift. CHA2DS2-VASc, HAS-BLED, STOP-BANG, the orbitopathy clinical activity score, and the Timed Up and Go have no verified LOINC code on the terminology server and are recorded as narrative.

## Procedures, immunizations, and encounters

- Transthoracic echocardiography: SNOMED CT 433236007. 12-lead ECG: 268400002. Radioactive iodine: 431588009 (radionuclide iodine 131 therapy for thyrotoxicosis). 14-day ambulatory ECG patch: 164850009 (ambulatory ECG). Advance care planning: 713603004.
- Encounter types: SNOMED CT 390906007 (follow-up encounter) for the three focused chronic-care visits and 281038008 (geriatric annual health check) for the subsequent annual wellness visit. The services are named in plain text as HCPCS G0439 and CPT 99497; neither is used as a coded value.
- Immunizations: CVX 135 (influenza, high-dose, trivalent; the 2025-2026 and 2026-2027 doses), 216 (PCV20), 187 (recombinant zoster), and 115 (Tdap).
- No known allergy: SNOMED CT 716186003.
- Family history: none recorded; no relative's health is used.

## Vital signs

The five visits use LOINC 8302-2, 29463-7, 39156-5, 8480-6, 8462-4, 8867-4, 9279-1, 8310-5, and 59408-5 with UCUM units.

## Review note

Codes were checked against the public terminology server and NLM RxNav on November 3, 2026. They do not imply that he received these diagnoses, tests, or medications during his lifetime.
