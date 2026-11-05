# Terminology — Judy Garland

> **SYNTHETIC RECORD, NOT A REAL MEDICAL RECORD**

## Diagnoses

| Use | System | Code | Display | Evidence |
|---|---|---|---|---|
| Active problem | ICD-10-CM FY2026 | F13.20 | Sedative, hypnotic or anxiolytic dependence, uncomplicated | S; linked to the documented sleeping pills and lifelong dependence |
| Active problem | ICD-10-CM FY2026 | F15.10 | Other stimulant abuse, uncomplicated | S; DSM-5-TR mild stimulant use disorder; linked to the documented pep pills |
| Active problem | ICD-10-CM FY2026 | G47.00 | Insomnia, unspecified | S |
| Active problem | ICD-10-CM FY2026 | Z30.013 | Encounter for initial prescription of injectable contraceptive | S |
| Active problem | ICD-10-CM FY2026 | F32.1 | Major depressive disorder, single episode, moderate | S; not a claim about her real mood |
| Sick visit, resolved | ICD-10-CM FY2026 | J04.0 | Acute laryngitis | S |

No bipolar disorder code is used; see the editorial resolutions in sources.md.

## Medications (RxNorm)

| Code | Display |
|---|---|
| 312914 | secobarbital sodium 100 MG Oral Capsule (intake to the admission) |
| 884385 | dextroamphetamine sulfate 10 MG Oral Tablet (intake to four weeks) |
| 884386 | dextroamphetamine sulfate 5 MG Oral Tablet (two-week taper) |
| 312940 | sertraline 25 MG Oral Tablet (first week) |
| 312941 | sertraline 50 MG Oral Tablet (from one week) |
| 199167 | phenobarbital 32.4 MG Oral Tablet (admission to four weeks) |
| 198086 | phenobarbital 16.2 MG Oral Tablet (taper, from four weeks) |
| 1000126 | 1 ML medroxyprogesterone acetate 150 MG/ML Injection |
| 198440 | acetaminophen 500 MG Oral Tablet (sick visit) |

Naloxone was deliberately not prescribed; the reason is recorded in the care plan.

## Results (LOINC 2.81)

| Code | Measure | Unit | Category |
|---|---|---|---|
| 718-7, 787-2, 777-3 | Hemoglobin, MCV, platelets | g/dL, fL, 10*3/uL | laboratory |
| 2276-4 | Ferritin | ng/mL | laboratory |
| 2951-2, 2823-3, 2160-0, 98979-8, 2345-7 | Sodium, potassium, creatinine, eGFR (CKD-EPI 2021), glucose | mmol/L, mg/dL, mL/min/{1.73_m2} | laboratory |
| 1920-8, 1742-6, 2324-2 | AST, ALT, GGT | U/L | laboratory |
| 3016-3 | TSH | m[IU]/L | laboratory |
| 82667-7 | DAST-10 total score | {score} | survey |
| 75626-2 | AUDIT-C total score | {score} | survey |
| 44261-6 | PHQ-9 total score | {score} | survey |
| 70274-6 | GAD-7 total score | {score} | survey |

Reference ranges are typical adult female ranges chosen for the teaching record; interpretation flags follow them. The Insomnia Severity Index, the Mood Disorder Questionnaire, the C-SSRS screen, urine drug tests, the pregnancy test, the ECG and the HIV, hepatitis C and hepatitis B screens are recorded as narrative.

## Procedures, immunizations, and encounter types

- Electrocardiogram: SNOMED CT 29303009 (Electrocardiographic procedure). Four-day medically managed barbiturate withdrawal: 61480009 (Drug detoxification). Advance care planning: 713603004.
- Encounter types: SNOMED CT 390906007 (follow-up encounter) for the four focused chronic-care visits, 86013001 (periodic reevaluation and management of healthy individual) for the preventive visit, and 185345009 (encounter for symptom) for the sick visit. The services are named in plain text as CPT 99395 and 99497; CPT is not used as a coded value.
- Immunizations: CVX 115 (Tdap) and 140 (influenza).
- No known allergy: SNOMED CT 716186003.

## Vital signs

The seven visits use LOINC 8302-2, 29463-7, 39156-5, 8480-6, 8462-4, 8867-4, 9279-1, 8310-5, and 59408-5 with UCUM units.

## Review note

Codes were checked against the public terminology server and NLM RxNav on November 4, 2026. They do not imply that Garland received these diagnoses, tests, or medications during her lifetime.
