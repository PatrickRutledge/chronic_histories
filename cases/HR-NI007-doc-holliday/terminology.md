# Terminology — John Henry Holliday

> **SYNTHETIC RECORD, NOT A REAL MEDICAL RECORD**

## Diagnoses

| Use | System | Code | Display | Evidence |
|---|---|---|---|---|
| Active problem | ICD-10-CM FY2026 | A15.0 | Tuberculosis of lung | S; linked to the documented pulmonary tuberculosis |
| Active problem | ICD-10-CM FY2026 | F10.10 | Alcohol abuse, uncomplicated | S; mild alcohol use disorder, linked to the documented heavy drinking |
| Sick visit (resolved) | ICD-10-CM FY2026 | A08.4 | Viral intestinal infection, unspecified | S; synthetic intercurrent illness |

## Medications (RxNorm)

| Code | Display |
|---|---|
| 197832 | isoniazid 300 MG Oral Tablet (300 mg daily for six months) |
| 198202 | rifampin 300 MG Oral Capsule (600 mg daily for six months) |
| 198181 | pyrazinamide 500 MG Oral Tablet (1500 mg daily for eight weeks) |
| 995607 | ethambutol hydrochloride 400 MG Oral Tablet (1200 mg daily until susceptibility results) |
| 639566 | vitamin B6 50 MG Oral Tablet (pyridoxine 50 mg daily with isoniazid) |

## Results (LOINC 2.81)

| Code | Measure | Unit | Category |
|---|---|---|---|
| 58410-2 | CBC panel (organizer) | — | panel |
| 718-7, 6690-2, 777-3 | Hemoglobin, white cell count, platelets | g/dL, 10*3/uL | laboratory |
| 1742-6, 1920-8, 1975-2, 6768-6, 2324-2, 1751-7 | ALT, AST, total bilirubin, alkaline phosphatase, GGT, albumin | U/L, mg/dL, g/dL | laboratory |
| 51990-0 | Basic metabolic panel (organizer) | — | panel |
| 2160-0, 98979-8, 2345-7 | Creatinine, eGFR (CKD-EPI 2021), glucose | mg/dL, mL/min/{1.73_m2} | laboratory |
| 4548-4 | HbA1c | % | laboratory |
| 79878-5, 79879-3 | Visual acuity uncorrected, right and left eye, by ETDRS chart | {letters} | imaging |
| 75624-7 | AUDIT total score | {score} | survey |
| 75626-2 | AUDIT-C total score | {score} | survey |
| 44261-6 | PHQ-9 total score | {score} | survey |
| 55758-7 | PHQ-2 total score (preventive visit) | {score} | survey |

Reference ranges are typical adult ranges chosen for the teaching record; interpretation flags follow them, and validation checks that every flag agrees with its range. Visual acuity is recorded in ETDRS letters (85 letters is about 20/20) because the schema needs numeric values.

Qualitative results have no numeric form in the canonical schema and are recorded as narrative in the notes and monitoring tables: sputum acid-fast smears, the nucleic acid amplification test with rifampin resistance, mycobacterial cultures and susceptibility, the HIV-1/2 antigen and antibody test, hepatitis B surface antigen, surface antibody, and core antibody, hepatitis C antibody, and Ishihara color vision plates.

## Procedures, immunizations, and encounters

- Plain X-ray of chest: SNOMED CT 399208008 (at diagnosis and at the end of treatment).
- Encounter types: SNOMED CT 390906007 (follow-up encounter) for the four focused chronic-care visits, 185345009 (encounter for symptom) for the sick visit, and 86013001 (periodic reevaluation and management of healthy individual) for the adult preventive visit. The preventive service is named in plain text as CPT 99395; CPT is not used as a coded value.
- Immunizations: CVX 115 (Tdap, modern-frame history), 140 (influenza, 2026-2027), and 189 (HepB-CpG, first dose).
- No known allergy: SNOMED CT 716186003.
- Family relationship: HL7 RoleCode MTH (mother).

## Vital signs

The seven visits use LOINC 8302-2, 29463-7, 39156-5, 8480-6, 8462-4, 8867-4, 9279-1, 8310-5, and 59408-5 with UCUM units.

## Review note

Codes were checked against the public terminology server and NLM RxNav on November 3, 2026. They do not imply that Holliday received these diagnoses, tests, or medications during his lifetime.
