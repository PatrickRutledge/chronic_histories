# Terminology — Richard Roundtree

> **SYNTHETIC RECORD, NOT A REAL MEDICAL RECORD**

## Diagnoses

| Use | System | Code | Display | Evidence |
|---|---|---|---|---|
| Active problem (both_with_link) | ICD-10-CM FY2026 | C50.122 | Malignant neoplasm of central portion of left male breast | S; linked to his public account of a lump under the left nipple |
| Active problem | ICD-10-CM FY2026 | Z17.0 | Estrogen receptor positive status [ER+] | S |

No acquired-absence-of-breast code (Z90.1x) is used, because the sources conflict on whether one or both breasts were removed.

## Medications (RxNorm)

| Code | Display |
|---|---|
| 198440 | acetaminophen 500 MG Oral Tablet (as needed after surgery; completed) |

The planned chemotherapy and tamoxifen begin after the episode and are not recorded as medications.

## Results (LOINC 2.81)

| Code | Measure | Unit | Category |
|---|---|---|---|
| 58410-2 | CBC panel (organizer) | — | panel |
| 718-7, 6690-2, 751-8, 777-3 | Hemoglobin, white cell count, absolute neutrophil count, platelets | g/dL, 10*3/uL | laboratory |
| 24323-8 | Comprehensive metabolic panel (organizer) | — | panel |
| 2951-2, 2823-3, 2160-0, 98979-8, 2345-7, 17861-6, 1742-6, 1920-8, 6768-6, 1975-2, 1751-7 | Sodium, potassium, creatinine, eGFR (CKD-EPI 2021), glucose, calcium, ALT, AST, alkaline phosphatase, total bilirubin, albumin | mmol/L, mg/dL, mL/min/{1.73_m2}, U/L, g/dL | laboratory |
| 2093-3, 2085-9, 13457-7, 2571-8 | Total, HDL, and LDL (calculated) cholesterol, triglycerides (preventive visit) | mg/dL | laboratory |
| 4548-4 | Hemoglobin A1c (preventive visit) | % | laboratory |
| 55758-7 | PHQ-2 total score | {score} | survey |
| 44261-6 | PHQ-9 total score | {score} | survey |
| 75626-2 | AUDIT-C total score (preventive visit) | {score} | survey |

Reference ranges are typical adult male ranges chosen for the teaching record; interpretation flags follow them. The lipid results are not grouped under a panel code, because the LOINC lipid panel names include a year that the true-date variant cannot shift. Tumor receptor results (ER, PR, HER2, Ki-67) and the ejection fraction are recorded in procedure text, not as coded observations. The germline panel is pending at the end of the episode.

## Procedures, immunizations, and encounters

- Mammography: SNOMED CT 71651007. Ultrasonography of breast: 47079000. Core needle biopsy of breast using ultrasound guidance: 432550005.
- Mastectomy and axillary clearance: 447168009 (side-neutral; see sources.md).
- Echocardiography: 40701008.
- Advance care planning: 713603004.
- Encounter types: SNOMED CT 390906007 (follow-up encounter) for the two focused chronic-care visits and 86013001 (periodic reevaluation and management of healthy individual) for the preventive visit. The services are named in plain text as CPT 99396 and 99497; neither is used as a coded value.
- Immunizations: CVX 115 (Tdap), 140 (influenza, inactivated, 2026-2027), 309 (COVID-19 mRNA), and 216 (PCV20).
- No known allergy: SNOMED CT 716186003.
- Family history: none recorded.

## Vital signs

The four visits use LOINC 8302-2, 29463-7, 39156-5, 8480-6, 8462-4, 8867-4, 9279-1, 8310-5, and 59408-5 with UCUM units.

## Review note

Codes were checked against the public terminology server and NLM RxNav on November 3, 2026. They do not imply that Roundtree received these diagnoses, tests, or medications during his lifetime.
