# Terminology — Sonny Liston

> **SYNTHETIC RECORD, NOT A REAL MEDICAL RECORD**

## Diagnoses

| Use | System | Code | Display | Evidence |
|---|---|---|---|---|
| Presenting finding, resolved at the consultation visit | ICD-10-CM FY2026 | R03.0 | Elevated blood-pressure reading, without diagnosis of hypertension | S |
| Active problem, from the consultation visit | ICD-10-CM FY2026 | I10 | Essential (primary) hypertension | S; no hypertension is documented in his life |
| Active problem, from intake | ICD-10-CM FY2026 | F10.20 | Alcohol dependence, uncomplicated (recorded as moderate alcohol use disorder) | S; linked to the documented description of heavy drinking |
| Active problem | ICD-10-CM FY2026 | Z62.810 | Personal history of physical and sexual abuse in childhood (physical abuse only) | S; linked to the documented childhood |
| Active problem | ICD-10-CM FY2026 | Z55.0 | Illiteracy and low-level literacy | S; linked to the documented literacy |
| Sick visit, resolved | ICD-10-CM FY2026 | J06.9 | Acute upper respiratory infection, unspecified | S |

The roster's “probable heroin dependency” is not coded; see the editorial resolutions in sources.md.

## Medications (RxNorm)

| Code | Display |
|---|---|
| 722134 | amlodipine 5 MG / valsartan 160 MG Oral Tablet (consultation visit to four weeks) |
| 722126 | amlodipine 10 MG / valsartan 160 MG Oral Tablet (from four weeks) |
| 1483744 | naltrexone hydrochloride 50 MG Oral Tablet (from four weeks) |
| 1049160 | pseudoephedrine hydrochloride 30 MG Oral Tablet (over the counter; stopped at the sick visit) |
| 198440 | acetaminophen 500 MG Oral Tablet (one week after the sick visit) |
| 707251 | sodium chloride 0.65 % Nasal Spray (one week after the sick visit) |

No naloxone is prescribed (no opioid use).

## Results (LOINC 2.81)

| Code | Measure | Unit | Category |
|---|---|---|---|
| 718-7, 787-2 | Hemoglobin, MCV | g/dL, fL | laboratory |
| 51990-0 | Basic metabolic panel (organizer) | — | panel |
| 2951-2, 2823-3, 2160-0, 98979-8, 2345-7, 17861-6 | Sodium, potassium, creatinine, eGFR (CKD-EPI 2021, race-free), fasting glucose, calcium | mmol/L, mg/dL, mL/min/{1.73_m2} | laboratory |
| 4548-4 | Hemoglobin A1c | % | laboratory |
| 2093-3, 2085-9, 13457-7, 2571-8 | Total cholesterol, HDL, LDL (calculated), triglycerides | mg/dL | laboratory |
| 9318-7 | Urine albumin-to-creatinine ratio | mg/g | laboratory |
| 3016-3 | TSH | m[IU]/L | laboratory |
| 1920-8, 1742-6, 2324-2 | AST, ALT, GGT | U/L | laboratory |
| 75624-7 | AUDIT total score | {score} | survey |
| 75626-2 | AUDIT-C total score | {score} | survey |
| 82667-7 | DAST-10 total score | {score} | survey |
| 44261-6 | PHQ-9 total score | {score} | survey |
| 55758-7 | PHQ-2 total score | {score} | survey |
| 102017-1 | PC-PTSD-5 score | {score} | survey |

Reference ranges are typical adult male ranges chosen for the teaching record. The adverse childhood experiences history, the single-item literacy screen, STOP-Bang, home and ambulatory blood pressure readings and the HIV and hepatitis results are narrative.

## Procedures, immunizations, and encounter types

- Procedures: SNOMED CT 29303009 (electrocardiographic procedure), 164783007 (ambulatory blood pressure recording) and 40701008 (echocardiography).
- Encounter types: SNOMED CT 390906007 (follow-up encounter) for the four focused chronic-care visits, 86013001 (periodic reevaluation and management of healthy individual) for the preventive visit, and 185345009 (encounter for symptom) for the sick visit. The preventive service is named in plain text as CPT 99395; CPT is not used as a coded value.
- Immunizations: CVX 115 (Tdap), 189 (HepB-CpG, twice) and 140 (influenza).
- No known allergy: SNOMED CT 716186003.

## Vital signs

The seven visits use LOINC 8302-2, 29463-7, 39156-5, 8480-6, 8462-4, 8867-4, 9279-1, 8310-5, and 59408-5 with UCUM units.

## Review note

Codes were checked against the public terminology server and NLM RxNav on November 5, 2026. They do not imply that Sonny Liston received these diagnoses, tests, or medications during his lifetime.
