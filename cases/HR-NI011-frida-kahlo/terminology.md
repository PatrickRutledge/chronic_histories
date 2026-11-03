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
| Resolved problem | ICD-10-CM FY2026 | J06.9 | Acute upper respiratory infection, unspecified | S; intercurrent illness at the sick visit |

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
| 1725059 | naloxone hydrochloride 40 MG/ML Nasal Spray (nasal route) |

Naloxone nasal spray is on the medication list with the nasal route, which the case schema now supports, and is also described in the care plan.

## Results (LOINC 2.81)

| Code | Measure | Unit | Category |
|---|---|---|---|
| 1742-6 | ALT | U/L | laboratory |
| 2160-0, 98979-8 | Creatinine, eGFR (CKD-EPI 2021) | mg/dL, mL/min/{1.73_m2} | laboratory |
| 62292-8 | 25-hydroxyvitamin D (D2 + D3) | ng/mL | laboratory |
| 91147-9 | PEG mean score | {score} | survey |
| 44261-6 | PHQ-9 total score | {score} | survey |
| 70274-6 | GAD-7 total score | {score} | survey |
| 75626-2 | AUDIT-C total score | {score} | survey |

Reference ranges are typical adult female ranges chosen for the teaching record; interpretation flags follow them, and validation checks that every flag agrees with its range.

## Procedures, immunizations, and family history

- Plain X-ray of right ankle: SNOMED CT 426721006.
- Drugs of abuse urine screening test: SNOMED CT 314077000.
- Physical therapy procedure: SNOMED CT 91251008.
- Cognitive and behavioral therapy: SNOMED CT 228557008.
- Immunizations: CVX 140 (influenza), 115 (Tdap), and 189 (HepB-CpG, adjuvanted hepatitis B vaccine).
- No known allergy: SNOMED CT 716186003.
- Family relationships: HL7 RoleCode FTH (father) and MTH (mother). Causes of death are not recorded.

## Encounter types

- Focused chronic-care visits (ENC-002, ENC-003, ENC-004): SNOMED CT 390906007 (Follow-up encounter), validated November 3, 2026.
- Sick visit (ENC-005): SNOMED CT 185345009 (Encounter for symptom).
- Adult preventive visit (ENC-006): SNOMED CT 86013001 (Periodic reevaluation and management of healthy individual).
- The new codes were validated on November 3, 2026. The index visit (ENC-001) carries no encounter type code.

## Vital signs

The six visits use LOINC 8302-2, 29463-7, 39156-5, 8480-6, 8462-4, 8867-4, 9279-1, 8310-5, and 59408-5 with UCUM units.

## Review note

Codes were checked against the public terminology server and NLM RxNav on November 2, 2026. They do not imply that Kahlo received these diagnoses, tests, or medications during her lifetime.
