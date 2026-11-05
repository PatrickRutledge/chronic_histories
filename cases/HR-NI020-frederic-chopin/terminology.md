# Terminology — Frédéric Chopin

> **SYNTHETIC RECORD, NOT A REAL MEDICAL RECORD**

## Diagnoses

| Use | System | Code | Display | Evidence |
|---|---|---|---|---|
| Presenting problem (resolved at the results visit) | ICD-10-CM FY2026 | R04.2 | Hemoptysis | S; cough, hemoptysis, and weight loss before the diagnosis |
| Active problem (from the results visit) | ICD-10-CM FY2026 | A15.0 | Tuberculosis of lung | S; linked to the documented tuberculosis |
| Problem (resolved at the end of treatment) | ICD-10-CM FY2026 | E44.0 | Moderate protein-calorie malnutrition | S; linked to the documented frailty |
| Sick visit (resolved) | ICD-10-CM FY2026 | J06.9 | Acute upper respiratory infection, unspecified | S; synthetic intercurrent illness |

## Medications (RxNorm)

| Code | Display |
|---|---|
| 242671 | rifapentine 150 MG Oral Tablet (1200 mg daily for 17 weeks) |
| 311787 | moxifloxacin 400 MG Oral Tablet (400 mg daily for 17 weeks) |
| 197832 | isoniazid 300 MG Oral Tablet (300 mg daily for 17 weeks) |
| 198181 | pyrazinamide 500 MG Oral Tablet (1000 mg daily for eight weeks) |
| 639566 | vitamin B6 50 MG Oral Tablet (pyridoxine 50 mg daily with isoniazid) |

## Results (LOINC 2.81)

| Code | Measure | Unit | Category |
|---|---|---|---|
| 58410-2 | CBC panel (organizer) | — | panel |
| 718-7, 6690-2, 777-3 | Hemoglobin, white cell count, platelets | g/dL, 10*3/uL | laboratory |
| 1742-6, 1920-8, 1975-2, 6768-6, 1751-7 | ALT, AST, total bilirubin, alkaline phosphatase, albumin | U/L, mg/dL, g/dL | laboratory |
| 51990-0 | Basic metabolic panel (organizer) | — | panel |
| 2160-0, 98979-8, 2345-7, 2823-3 | Creatinine, eGFR (CKD-EPI 2021), glucose, potassium | mg/dL, mL/min/{1.73_m2}, mmol/L | laboratory |
| 17861-6, 19123-9 | Calcium, magnesium | mg/dL | laboratory |
| 2077-6 | Chloride in sweat | mmol/L | laboratory |
| 6771-0 | Alpha-1 antitrypsin, serum, by nephelometry | mg/dL | laboratory |
| 44261-6 | PHQ-9 total score | {score} | survey |
| 55758-7 | PHQ-2 total score (preventive visit) | {score} | survey |
| 75626-2 | AUDIT-C total score | {score} | survey |

Reference ranges are typical adult ranges chosen for the teaching record; interpretation flags follow them. The sweat chloride range is below 30 mmol/L (cystic fibrosis unlikely).

Qualitative results have no numeric form in the canonical schema and are recorded as narrative in the notes and monitoring tables: sputum acid-fast smears, the nucleic acid amplification test with rifampin resistance, molecular isoniazid and fluoroquinolone resistance testing, mycobacterial cultures and phenotypic susceptibility, the interferon-gamma release assay, the HIV-1/2 antigen and antibody test, and hepatitis B and C serology.

## Procedures, immunizations, and encounters

- Plain X-ray of chest: SNOMED CT 399208008 (at diagnosis and at the end of treatment). CT of chest: SNOMED CT 169069000 (at diagnosis).
- Encounter types: SNOMED CT 390906007 (follow-up encounter) for the four focused chronic-care visits, 185345009 (encounter for symptom) for the sick visit, and 86013001 (periodic reevaluation and management of healthy individual) for the adult preventive visit. The preventive service is named in plain text as CPT 99395; CPT is not used as a coded value.
- Immunizations: CVX 115 (Tdap, modern-frame history) and 140 (influenza, 2026-2027).
- No known allergy: SNOMED CT 716186003.
- Family relationship: HL7 RoleCode SIS (sister).

## Vital signs

The seven visits use LOINC 8302-2, 29463-7, 39156-5, 8480-6, 8462-4, 8867-4, 9279-1, 8310-5, and 59408-5 with UCUM units.

## Review note

Codes were checked against the public terminology server and NLM RxNav on November 4, 2026. They do not imply that Chopin received these diagnoses, tests, or medications during his lifetime.
