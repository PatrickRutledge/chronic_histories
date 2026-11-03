# Terminology — Florence Nightingale

> **SYNTHETIC RECORD, NOT A REAL MEDICAL RECORD**

## Diagnoses

| Use | System | Code | Display | Evidence |
|---|---|---|---|---|
| Active problem | ICD-10-CM FY2026 | G93.32 | Myalgic encephalomyelitis/chronic fatigue syndrome | S; linked to the documented Crimean fever and invalidism and the disputed retrospective ME/CFS reading |
| History problem | ICD-10-CM FY2026 | Z86.19 | Personal history of other infectious and parasitic diseases | S; synthetic treated brucellosis echoing a disputed retrospective interpretation |
| Active problem | ICD-10-CM FY2026 | E55.9 | Vitamin D deficiency, unspecified | S; recorded at the two-week visit |
| Resolved problem | ICD-10-CM FY2026 | J06.9 | Acute upper respiratory infection, unspecified | S; recorded at the July sick visit |

## Medications (RxNorm)

| Code | Display |
|---|---|
| 198440 | acetaminophen 500 MG Oral Tablet (as needed) |
| 801663 | cholecalciferol 0.05 MG Oral Tablet (2,000 units) |

## Results (LOINC 2.81)

| Code | Measure | Unit | Category |
|---|---|---|---|
| 58410-2 | CBC panel (organizer) | — | panel |
| 718-7, 6690-2, 777-3 | Hemoglobin, white cell count, platelets | g/dL, 10*3/uL | laboratory |
| 24323-8 | Comprehensive metabolic panel (organizer) | — | panel |
| 2951-2, 2823-3, 2160-0, 98979-8, 2345-7 | Sodium, potassium, creatinine, eGFR (CKD-EPI 2021), glucose | mmol/L, mg/dL, mL/min/{1.73_m2} | laboratory |
| 17861-6, 1751-7, 1742-6, 1920-8, 6768-6, 1975-2 | Calcium, albumin, ALT, AST, alkaline phosphatase, total bilirubin | mg/dL, g/dL, U/L | laboratory |
| 2777-1 | Phosphate | mg/dL | laboratory |
| 4537-7, 1988-5 | ESR (Westergren), CRP | mm/h, mg/L | laboratory |
| 3016-3, 4548-4, 2276-4 | TSH, HbA1c, ferritin | m[IU]/L, %, ng/mL | laboratory |
| 31017-7 | Tissue transglutaminase IgA | U/mL | laboratory |
| 2157-6 | Creatine kinase | U/L | laboratory |
| 2143-6 | Cortisol (morning draw) | ug/dL | laboratory |
| 2132-9, 2284-8 | Vitamin B12, folate | pg/mL, ng/mL | laboratory |
| 62292-8 | 25-hydroxyvitamin D | ng/mL | laboratory |
| 44261-6 | PHQ-9 total score | {score} | survey |
| 70274-6 | GAD-7 total score | {score} | survey |
| 77864-7 | PROMIS fatigue T-score | {score} | survey |
| 77866-2 | PROMIS physical function T-score | {score} | survey |
| 72514-3 | Pain severity, 0 to 10 numeric rating | {score} | survey |
| 75626-2 | AUDIT-C total score (preventive visit) | {score} | survey |

eGFR is calculated from the synthetic creatinine with the 2021 CKD-EPI creatinine equation for a 37-year-old woman. Reference ranges are typical adult ranges chosen for the teaching record; interpretation flags follow them, and validation checks that every flag agrees with its range. The intake urine dipstick is described in prose and not coded.

## Procedures, immunizations, and encounters

- Ten-minute passive standing test (NASA lean test), at intake and at six months: SNOMED CT 425058005 (taking orthostatic vital signs).
- Immunizations: CVX 43 (hepatitis B, adult), 115 (Tdap), and 140 (influenza, trivalent, preservative-free) for the 2025-2026 and 2026-2027 seasons.
- No known allergy: SNOMED CT 716186003.
- Encounter types: SNOMED CT 390906007 (follow-up encounter) for the three focused chronic-care visits, 185345009 (encounter for symptom) for the July sick visit, and 86013001 (periodic reevaluation and management of healthy individual) for the adult preventive visit. The services are named in plain text as CPT 99395, 90656, and 90471; CPT is not used as a coded value.
- No family history entries; see sources.md.

## Vital signs

The six visits use LOINC 8302-2, 29463-7, 39156-5, 8480-6, 8462-4, 8867-4, 9279-1, 8310-5, and 59408-5 with UCUM units.

## Review note

Codes were checked against the public terminology server and NLM RxNav on November 3, 2026. They do not imply that Nightingale received these diagnoses, tests, or medications during her lifetime.
