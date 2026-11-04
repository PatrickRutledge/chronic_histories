# Terminology — Michelangelo Buonarroti

> **SYNTHETIC RECORD, NOT A REAL MEDICAL RECORD**

## Diagnoses

| Use | System | Code | Display | Evidence |
|---|---|---|---|---|
| Active problem | ICD-10-CM FY2026 | M19.042 | Primary osteoarthritis, left hand | S; linked to a retrospective portrait interpretation (R) |
| Active problem | ICD-10-CM FY2026 | M19.041 | Primary osteoarthritis, right hand | S |
| Active problem | ICD-10-CM FY2026 | M1A.9XX0 | Chronic gout, unspecified, without tophus (tophi) | S; linked to a retrospective reading of his letters (R) |
| Active problem | ICD-10-CM FY2026 | Z87.442 | Personal history of urinary calculi | S; linked to the calculus documented in his letters (D) |
| Resolved problem | ICD-10-CM FY2026 | S61.211A | Laceration without foreign body of left index finger without damage to nail, initial encounter | S; recorded at the June sick visit |

## Medications (RxNorm)

| Code | Display |
|---|---|
| 310965 | ibuprofen 200 MG Oral Tablet (over the counter; stopped at intake) |
| 197319 | allopurinol 100 MG Oral Tablet (two tablets daily) |
| 855633 | diclofenac sodium 0.01 MG/MG Topical Gel |
| 198440 | acetaminophen 500 MG Oral Tablet (as needed) |

The triamcinolone acetonide 10 mg used for the thumb-base injection is recorded in the procedure, not as a medication order.

## Results (LOINC 2.81)

| Code | Measure | Unit | Category |
|---|---|---|---|
| 51990-0 | Basic metabolic panel (organizer) | — | panel |
| 2951-2, 2823-3, 2028-9, 3094-0, 2160-0, 98979-8, 2345-7 | Sodium, potassium, bicarbonate, BUN, creatinine, eGFR (CKD-EPI 2021), glucose | mmol/L, mg/dL, mL/min/{1.73_m2} | laboratory |
| 3084-1 | Serum urate | mg/dL | laboratory |
| 718-7, 6690-2, 777-3 | Hemoglobin, white cell count, platelets | g/dL, 10*3/uL | laboratory |
| 1742-6, 17861-6, 62292-8 | ALT, calcium, 25-hydroxyvitamin D | U/L, mg/dL, ng/mL | laboratory |
| 1988-5, 30341-2 | CRP, ESR | mg/L, mm/h | laboratory |
| 11572-5, 53027-9 | Rheumatoid factor, anti-CCP antibody | [IU]/mL, U/mL | laboratory |
| 2276-4, 2502-3 | Ferritin, transferrin saturation | ng/mL, % | laboratory |
| 72514-3 | Hand pain, 0 to 10 numeric rating | {score} | survey |
| 91612-2 | PROMIS upper extremity v2.0 T-score | {T-score} | survey |
| 83173-5, 83174-3 | Grip strength, left and right hand, by dynamometer | kg | survey |
| 55758-7, 72233-0 | PHQ-2, Mini-Cog (annual wellness visit) | {score} | survey |

eGFR values are calculated from the synthetic creatinine with the 2021 CKD-EPI creatinine equation for an 85-year-old man. AUSCAN and FIHOA, the hand osteoarthritis instruments the CMID names, have no LOINC code, so the PROMIS upper extremity T-score is used as the coded function measure. Interpretation flags follow the stated ranges.

## Procedures, immunizations, and other codes

- Plain X-ray of hand (both hands): SNOMED CT 713027003. Passive thumb splint: 183199008. Injection of steroid into carpometacarpal joint of thumb: 429518005. Occupational therapy: 84478008. Suture of skin wound of limb: 28961007.
- Immunizations: CVX 135 (high-dose influenza), 216 (PCV20), 187 (recombinant zoster), 115 (Tdap, including the dose at the sick visit), and 303 (RSV, adjuvanted).
- No known allergy: SNOMED CT 716186003.
- Encounter types: SNOMED CT 390906007 (follow-up encounter) for the three focused chronic-care visits, 185345009 (encounter for symptom) for the June sick visit, and 281038008 (geriatric annual health check) for the annual wellness visit. The services are named in plain text as HCPCS G0439 and CPT 99497 and 12001; HCPCS and CPT are not used as coded values.
- Family relationship: HL7 RoleCode FTH (father).

## Vital signs

The six visits use LOINC 8302-2, 29463-7, 39156-5, 8480-6, 8462-4, 8867-4, 9279-1, 8310-5, and 59408-5 with UCUM units.

## Review note

Codes were checked against the public terminology server, the NLM Clinical Tables LOINC search, and NLM RxNav on November 3, 2026. They do not imply that Michelangelo received these diagnoses, tests, or medications during his lifetime.
