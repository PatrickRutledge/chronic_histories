# Terminology — Nelson Mandela

> **SYNTHETIC RECORD, NOT A REAL MEDICAL RECORD**

## Diagnoses

| Use | System | Code | Display | Evidence |
|---|---|---|---|---|
| Active problem (both_with_link) | ICD-10-CM FY2026 | C61 | Malignant neoplasm of prostate | S; linked to his doctors’ public account of localized prostate cancer |
| Active problem | ICD-10-CM FY2026 | Z19.1 | Hormone sensitive malignancy status | S |
| Active problem | ICD-10-CM FY2026 | Z79.899 | Other long term (current) drug therapy | S; androgen deprivation, for which ICD-10-CM has no specific code |
| Historical problem | ICD-10-CM FY2026 | Z86.11 | Personal history of tuberculosis | S coding; linked to the documented 1988 tuberculosis |
| Active problem (recorded at the fourth chronic-care visit) | ICD-10-CM FY2026 | Z92.3 | Personal history of irradiation | S |

## Medications (RxNorm)

| Code | Display |
|---|---|
| 199123 | bicalutamide 50 MG Oral Tablet (one tablet daily for four weeks) |
| 2606516 | leuprolide acetate 22.5 MG Injection (three-month depot, two doses) |
| 199362 | cholecalciferol 0.025 MG Oral Tablet (1000 units daily) |
| 863669 | tamsulosin hydrochloride 0.4 MG Oral Capsule (one capsule each evening) |

## Results (LOINC 2.81)

| Code | Measure | Unit | Category |
|---|---|---|---|
| 2857-1 | Prostate-specific antigen | ng/mL | laboratory |
| 2986-8 | Testosterone | ng/dL | laboratory |
| 58410-2 | CBC panel (organizer) | — | panel |
| 718-7, 6690-2, 777-3 | Hemoglobin, white cell count, platelets | g/dL, 10*3/uL | laboratory |
| 24323-8 | Comprehensive metabolic panel (organizer) | — | panel |
| 2951-2, 2823-3, 2345-7, 2160-0, 98979-8, 17861-6, 1742-6, 6768-6, 1751-7 | Sodium, potassium, glucose, creatinine, eGFR (CKD-EPI 2021), calcium, ALT, alkaline phosphatase, albumin | mmol/L, mg/dL, mL/min/{1.73_m2}, U/L, g/dL | laboratory |
| 4548-4 | Hemoglobin A1c | % | laboratory |
| 2093-3, 2085-9, 13457-7, 2571-8 | Total, HDL, and LDL (calculated) cholesterol, triglycerides | mg/dL | laboratory |
| 62292-8 | 25-hydroxyvitamin D (D2 + D3) | ng/mL | laboratory |
| 38263-0, 38267-1 | DXA femur and lumbar spine T-scores | {T-score} | imaging |
| 80976-4 | International Prostate Symptom Score (total recorded on the panel code) | {score} | survey |
| 44261-6 | PHQ-9 total score | {score} | survey |
| 55758-7 | PHQ-2 total score | {score} | survey |
| 72233-0 | Mini-Cog total score (wellness visit) | {score} | survey |
| 75626-2 | AUDIT-C total score (wellness visit) | {score} | survey |

Reference ranges are typical adult male ranges chosen for the teaching record; interpretation flags follow them. The testosterone range is the normal adult male range, so the castrate values on androgen deprivation are flagged low; the castrate target (below 50 ng/dL) is stated in the range text. The lipid results are not grouped under a panel code, because the LOINC lipid panel names include a year that the true-date variant cannot shift. LOINC has no separate code for the IPSS total score; the total is recorded on the IPSS panel code, as in other records in the dataset. Biopsy Grade Group and core results are recorded in the procedure text, not as coded observations.

## Procedures, immunizations, and encounters

- Multiparametric MRI of prostate: SNOMED CT 719178004. MRI-US fusion guided transperineal biopsy of prostate: 788708005.
- PET/CT of whole body using gallium-68 (gallium-68 PSMA PET/CT): 764820005.
- Ultrasonography guided transperineal insertion of fiducial marker into prostate: 1145042007. Intensity modulated radiation therapy: 441799006.
- Advance care planning: 713603004.
- Encounter types: SNOMED CT 390906007 (follow-up encounter) for the three focused chronic-care visits and 281038008 (geriatric annual health check) for the annual wellness visit. The services are named in plain text as HCPCS G0439 and CPT 99497; neither is used as a coded value.
- Immunizations: CVX 135 (influenza, high-dose, trivalent, last season and this season), 115 (Tdap), 216 (PCV20), and 187 (recombinant zoster, dose 1).
- No known allergy: SNOMED CT 716186003.
- Family history: none recorded.

## Vital signs

The five visits use LOINC 8302-2, 29463-7, 39156-5, 8480-6, 8462-4, 8867-4, 9279-1, 8310-5, and 59408-5 with UCUM units.

## Review note

Codes were checked against the public terminology server and NLM RxNav on November 3, 2026. They do not imply that Mandela received these diagnoses, tests, or medications during his lifetime.
