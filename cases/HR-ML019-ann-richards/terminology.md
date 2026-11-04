# Terminology — Ann Richards

> **SYNTHETIC RECORD, NOT A REAL MEDICAL RECORD**

## Diagnoses

| Use | System | Code | Display | Evidence |
|---|---|---|---|---|
| Active problem | ICD-10-CM FY2026 | M85.89 | Other specified disorders of bone density and structure, multiple sites | S; linked to her publicly described osteopenia |
| Active problem | ICD-10-CM FY2026 | F10.21 | Alcohol dependence, in remission | S; linked to her public account of recovery |
| Active problem | ICD-10-CM FY2026 | Z91.81 | History of falling | S; linked to her publicly described falls |

M85.89 records the densitometric category (low bone mass at the spine and hip). The FRAX risk and the AACE 2020 clinical criteria for osteoporosis are recorded in the problem text and notes.

## Medications (RxNorm)

| Code | Display |
|---|---|
| 801663 | cholecalciferol 0.05 MG Oral Tablet (2000 units daily) |
| 705824 | 100 ML zoledronic acid 0.05 MG/ML Injection (5 mg intravenously once a year) |
| 198440 | acetaminophen 500 MG Oral Tablet (as needed for three days after the first infusion) |

## Results (LOINC 2.81)

| Code | Measure | Unit | Category |
|---|---|---|---|
| 38267-1 | DXA lumbar spine T-score | {T-score} | imaging |
| 38263-0 | DXA femur T-score (femoral neck) | {T-score} | imaging |
| 38264-8 | DXA hip T-score (total hip) | {T-score} | imaging |
| 90265-0, 90266-8 | FRAX 10-year major osteoporotic and hip fracture probability | % | survey |
| 17861-6, 1751-7, 2777-1, 19123-9 | Calcium, albumin, phosphate, magnesium | mg/dL, g/dL | laboratory |
| 6768-6, 2731-8 | Alkaline phosphatase, intact PTH | U/L, pg/mL | laboratory |
| 2160-0, 98979-8 | Creatinine, eGFR (CKD-EPI 2021) | mg/dL, mL/min/{1.73_m2} | laboratory |
| 62292-8 | 25-hydroxyvitamin D | ng/mL | laboratory |
| 3016-3, 718-7, 1742-6 | TSH, hemoglobin, ALT | m[IU]/L, g/dL, U/L | laboratory |
| 41171-0 | Serum CTX (fasting) | pg/mL | laboratory |
| 6874-2 | 24-hour urine calcium | mg/(24.h) | laboratory |
| 2093-3, 2085-9, 13457-7, 2571-8 | Lipid panel (preventive visit) | mg/dL | laboratory |
| 44261-6, 55758-7, 75626-2 | PHQ-9, PHQ-2, AUDIT-C | {score} | survey |

T-score reference text follows the WHO categories (normal -1.0 or higher; low bone mass between -1.0 and -2.5; osteoporosis -2.5 or lower). The Timed Up and Go, tandem stance, and 30-second chair stand have no verified LOINC code on the terminology server and are recorded as narrative.

## Procedures, immunizations, and encounters

- DXA of the spine and hip: SNOMED CT 241686001. Vertebral fracture assessment (lateral spine DXA): 726548004. Balance exercise program: 386293009. Zoledronic acid infusion: 700105003. Advance care planning: 713603004.
- Encounter types: SNOMED CT 390906007 (follow-up encounter) for the three focused chronic-care visits and 86013001 (periodic reevaluation and management of healthy individual) for the adult preventive visit. The preventive services are named in plain text as CPT 99396 and 99497; neither is used as a coded value.
- Immunizations: CVX 140 (influenza, trivalent, PF; the 2025-2026 and 2026-2027 doses), 187 (recombinant zoster), 115 (Tdap), and 216 (PCV20).
- No known allergy: SNOMED CT 716186003.
- Family history: mother (HL7 RoleCode MTH), osteoporosis with arm and hip fractures by Richards's own public account.

## Vital signs

The five visits use LOINC 8302-2, 29463-7, 39156-5, 8480-6, 8462-4, 8867-4, 9279-1, 8310-5, and 59408-5 with UCUM units. Height is measured with a stadiometer at each visit.

## Review note

Codes were checked against the public terminology server and NLM RxNav on November 3, 2026. They do not imply that Richards received these diagnoses, tests, or medications during her lifetime.
