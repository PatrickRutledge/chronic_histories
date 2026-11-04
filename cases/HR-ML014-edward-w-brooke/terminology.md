# Terminology — Edward W. Brooke

> **SYNTHETIC RECORD, NOT A REAL MEDICAL RECORD**

## Diagnoses

| Use | System | Code | Display | Evidence |
|---|---|---|---|---|
| Active problem (both_with_link) | ICD-10-CM FY2026 | C50.121 | Malignant neoplasm of central portion of right male breast | S; linked to his public account of right breast cancer |
| Active problem | ICD-10-CM FY2026 | Z17.0 | Estrogen receptor positive status [ER+] | S |
| Active problem | ICD-10-CM FY2026 | Z79.810 | Long term (current) use of selective estrogen receptor modulators (SERMs) | S |
| Active problem | ICD-10-CM FY2026 | Z90.13 | Acquired absence of bilateral breasts and nipples | S; linked to the reported double mastectomy |

## Medications (RxNorm)

| Code | Display |
|---|---|
| 313195 | tamoxifen 20 MG Oral Tablet (one tablet daily) |
| 199362 | cholecalciferol 0.025 MG Oral Tablet (1000 units daily) |

## Results (LOINC 2.81)

| Code | Measure | Unit | Category |
|---|---|---|---|
| 58410-2 | CBC panel (organizer) | — | panel |
| 718-7, 6690-2, 777-3 | Hemoglobin, white cell count, platelets | g/dL, 10*3/uL | laboratory |
| 24323-8 | Comprehensive metabolic panel (organizer) | — | panel |
| 2951-2, 2823-3, 2160-0, 98979-8, 17861-6, 1742-6, 1920-8, 6768-6, 1975-2, 1751-7 | Sodium, potassium, creatinine, eGFR (CKD-EPI 2021), calcium, ALT, AST, alkaline phosphatase, total bilirubin, albumin | mmol/L, mg/dL, mL/min/{1.73_m2}, U/L, g/dL | laboratory |
| 62292-8 | 25-hydroxyvitamin D (D2 + D3) | ng/mL | laboratory |
| 38263-0, 38267-1 | DXA femur and lumbar spine T-scores | {T-score} | imaging |
| 2093-3, 2085-9, 13457-7, 2571-8 | Total, HDL, and LDL (calculated) cholesterol, triglycerides (wellness visit) | mg/dL | laboratory |
| 44261-6 | PHQ-9 total score | {score} | survey |
| 55758-7 | PHQ-2 total score | {score} | survey |
| 72233-0 | Mini-Cog total score (wellness visit) | {score} | survey |
| 75626-2 | AUDIT-C total score (wellness visit) | {score} | survey |

Reference ranges are typical adult male ranges chosen for the teaching record; interpretation flags follow them. The lipid results are not grouped under a panel code, because the LOINC lipid panel names include a year that the true-date variant cannot shift. Tumor receptor results (ER, PR, HER2, Ki-67) are recorded in the biopsy procedure text, not as coded observations. The germline panel result is recorded in the visit notes.

## Procedures, immunizations, and encounters

- Mammography: SNOMED CT 71651007. Ultrasonography of breast: 47079000. Core needle biopsy of breast using ultrasound guidance: 432550005.
- Excision of bilateral breasts: 27865001. Complete axillary lymphadenectomy: 79544006.
- Advance care planning: 713603004.
- Encounter types: SNOMED CT 390906007 (follow-up encounter) for the three focused chronic-care visits and 281038008 (geriatric annual health check) for the annual wellness visit. The services are named in plain text as HCPCS G0439 and CPT 99497; neither is used as a coded value.
- Immunizations: CVX 135 (influenza, high-dose, trivalent, the 2025-2026 and 2026-2027 doses), 115 (Tdap), 216 (PCV20), and 187 (recombinant zoster, dose 1).
- No known allergy: SNOMED CT 716186003.
- Family history: none recorded.

## Vital signs

The five visits use LOINC 8302-2, 29463-7, 39156-5, 8480-6, 8462-4, 8867-4, 9279-1, 8310-5, and 59408-5 with UCUM units.

## Review note

Codes were checked against the public terminology server and NLM RxNav on November 3, 2026. They do not imply that Brooke received these diagnoses, tests, or medications during his lifetime.
