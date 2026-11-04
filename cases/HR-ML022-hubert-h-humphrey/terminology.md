# Terminology — Hubert H. Humphrey

> **SYNTHETIC RECORD, NOT A REAL MEDICAL RECORD**

## Diagnoses

| Use | System | Code | Display | Evidence |
|---|---|---|---|---|
| Active problem (both_with_link) | ICD-10-CM FY2026 | Z85.51 | Personal history of malignant neoplasm of bladder | S; linked to his documented bladder cancer and cystectomy. Z85.51 because the tumor has been removed and no treatment is directed at it |
| Active problem | ICD-10-CM FY2026 | Z93.6 | Other artificial openings of urinary tract status | S; ileal conduit urostomy |
| Active problem | ICD-10-CM FY2026 | Z90.6 | Acquired absence of other parts of urinary tract | S; bladder and part of the urethra |
| Active problem | ICD-10-CM FY2026 | Z90.79 | Acquired absence of other genital organ(s) | S; prostate |
| Active problem | ICD-10-CM FY2026 | Z92.3 | Personal history of irradiation | S; linked to the documented X-ray therapy |
| Active problem (recorded at the six-month visit) | ICD-10-CM FY2026 | E87.22 | Chronic metabolic acidosis | S |
| Resolved problem (recorded at the sick visit) | ICD-10-CM FY2026 | N10 | Acute pyelonephritis | S |

## Medications (RxNorm)

| Code | Display |
|---|---|
| 198861 | sodium bicarbonate 650 MG Oral Tablet (one tablet twice daily) |
| 309309 | ciprofloxacin 500 MG Oral Tablet (one tablet twice daily for 7 days) |

## Results (LOINC 2.81)

| Code | Measure | Unit | Category |
|---|---|---|---|
| 51990-0 | Basic metabolic panel (organizer) | — | panel |
| 2951-2, 2823-3, 2075-0, 2028-9, 3094-0, 2160-0, 98979-8 | Sodium, potassium, chloride, bicarbonate (total CO2), urea nitrogen, creatinine, eGFR (CKD-EPI 2021) | mmol/L, mg/dL, mL/min/{1.73_m2} | laboratory |
| 17861-6, 1751-7, 6768-6, 1742-6 | Calcium, albumin, alkaline phosphatase, ALT (first visit) | mg/dL, g/dL, U/L | laboratory |
| 58410-2 | CBC panel (organizer) | — | panel |
| 718-7, 6690-2, 777-3 | Hemoglobin, white cell count, platelets | g/dL, 10*3/uL | laboratory |
| 2132-9 | Vitamin B12 | pg/mL | laboratory |
| 5821-4 | Urine white cells per high-power field (sick visit) | /[HPF] | laboratory |
| 19090-0 | Urine culture colony count (sick visit; organism in the label) | {CFU}/mL | laboratory |
| 2093-3, 2085-9, 13457-7, 2571-8 | Total, HDL, and LDL (calculated) cholesterol, triglycerides (wellness visit) | mg/dL | laboratory |
| 44261-6 | PHQ-9 total score | {score} | survey |
| 55758-7 | PHQ-2 total score | {score} | survey |
| 72233-0 | Mini-Cog total score (wellness visit) | {score} | survey |
| 75626-2 | AUDIT-C total score (wellness visit) | {score} | survey |

Reference ranges are typical adult male ranges chosen for the teaching record; interpretation flags follow them. The lipid results are not grouped under a panel code, because the LOINC lipid panel names include a year that the true-date variant cannot shift. Bladder pathology and imaging findings are recorded in the procedure text, not as coded observations.

## Procedures, immunizations, and encounters

- Transurethral excision of neoplasm of urinary bladder: SNOMED CT 386792000. CT of chest, abdomen and pelvis: 418023006. Radical cystoprostatectomy: 81232004 (the ileal conduit and node dissection are described in the text). Echography of kidney: 306005.
- Advance care planning: 713603004.
- Encounter types: SNOMED CT 390906007 (follow-up encounter) for the three focused chronic-care visits, 185345009 (encounter for symptom) for the sick visit, and 281038008 (geriatric annual health check) for the annual wellness visit. The services are named in plain text as HCPCS G0439 and CPT 99497; neither is used as a coded value.
- Immunizations: CVX 135 (influenza, high-dose, trivalent), 115 (Tdap), 216 (PCV20), and 187 (recombinant zoster, dose 1).
- No known allergy: SNOMED CT 716186003.
- Family history: none recorded.

## Vital signs

The six visits use LOINC 8302-2, 29463-7, 39156-5, 8480-6, 8462-4, 8867-4, 9279-1, 8310-5, and 59408-5 with UCUM units.

## Review note

Codes were checked against the public terminology server and NLM RxNav on November 3, 2026. They do not imply that Humphrey received these diagnoses, tests, or medications during his lifetime.
