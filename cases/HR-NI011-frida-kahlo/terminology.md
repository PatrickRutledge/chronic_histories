# Terminology — Frida Kahlo

> **SYNTHETIC RECORD, NOT A REAL MEDICAL RECORD**

## Diagnoses

| Use | System | Code | Display | Evidence |
|---|---|---|---|---|
| Active problem | ICD-10-CM FY2026 | G89.21 | Chronic pain due to trauma | S; linked to the documented 1925 injuries |
| Active problem | ICD-10-CM FY2026 | M19.171 | Post-traumatic osteoarthritis, right ankle and foot | S |
| Active problem, provisional | ICD-10-CM FY2026 | B91 | Sequelae of poliomyelitis | S; alternative cause proposed retrospectively (R) |
| Active problem | ICD-10-CM FY2026 | Z79.891 | Long term (current) use of opiate analgesic | S |
| Active problem | ICD-10-CM FY2026 | E55.9 | Vitamin D deficiency, unspecified | S |

## Medications (RxNorm)

| Code | Display |
|---|---|
| 1049683 | oxycodone hydrochloride 10 MG Oral Tablet |
| 1049621 | oxycodone hydrochloride 5 MG Oral Tablet |
| 596930 | duloxetine 30 MG Delayed Release Oral Capsule |
| 596934 | duloxetine 60 MG Delayed Release Oral Capsule |
| 198440 | acetaminophen 500 MG Oral Tablet |
| 855633 | diclofenac sodium 0.01 MG/MG Topical Gel |
| 801663 | cholecalciferol 0.05 MG Oral Tablet |

Naloxone nasal spray (RxNorm 1725059, naloxone hydrochloride 40 MG/ML Nasal Spray) is described in the care plan only, because the case schema has no nasal route.

## Results (LOINC 2.81)

| Code | Measure | Unit | Category |
|---|---|---|---|
| 1742-6 | ALT | U/L | laboratory |
| 2160-0, 98979-8 | Creatinine, eGFR (CKD-EPI 2021) | mg/dL, mL/min/{1.73_m2} | laboratory |
| 62292-8 | 25-hydroxyvitamin D (D2 + D3) | ng/mL | laboratory |
| 91147-9 | PEG mean score | {score} | survey |
| 44261-6 | PHQ-9 total score | {score} | survey |

Reference ranges are typical adult female ranges chosen for the teaching record; interpretation flags follow them, and validation checks that every flag agrees with its range.

## Procedures, immunizations, and family history

- Plain X-ray of right ankle: SNOMED CT 426721006.
- Drugs of abuse urine screening test: SNOMED CT 314077000.
- Physical therapy procedure: SNOMED CT 91251008.
- Cognitive and behavioral therapy: SNOMED CT 228557008.
- Immunizations: CVX 140 (influenza) and 115 (Tdap).
- No known allergy: SNOMED CT 716186003.
- Family relationships: HL7 RoleCode FTH (father) and MTH (mother). Causes of death are not recorded.

## Vital signs

The four visits use LOINC 8302-2, 29463-7, 39156-5, 8480-6, 8462-4, 8867-4, 9279-1, 8310-5, and 59408-5 with UCUM units.

## Review note

Codes were checked against the public terminology server and NLM RxNav on November 2, 2026. They do not imply that Kahlo received these diagnoses, tests, or medications during her lifetime.
