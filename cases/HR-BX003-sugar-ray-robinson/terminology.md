# Terminology — Sugar Ray Robinson

> **SYNTHETIC RECORD, NOT A REAL MEDICAL RECORD**

## Diagnoses

| Use | System | Code | Display | Evidence |
|---|---|---|---|---|
| Presenting problem, resolved at the diagnosis visit | ICD-10-CM FY2026 | R41.3 | Other amnesia | S; linked to his documented Alzheimer's disease |
| Active problem, from the diagnosis visit | ICD-10-CM FY2026 | G30.0 | Alzheimer's disease with early onset | S; linked to documented Alzheimer's disease and boxing career |
| Active problem, from the diagnosis visit | ICD-10-CM FY2026 | F02.A0 | Dementia in other diseases classified elsewhere, mild, without behavioral disturbance, psychotic disturbance, mood disturbance, and anxiety | S |
| Active problem | ICD-10-CM FY2026 | E11.9 | Type 2 diabetes mellitus without complications | S; linked to documented diabetes |
| Active problem | ICD-10-CM FY2026 | I10 | Essential (primary) hypertension | S; linked to the 1987 report |
| Active problem, from the consultation | ICD-10-CM FY2026 | H90.3 | Sensorineural hearing loss, bilateral | S |
| Sick visit, resolved | ICD-10-CM FY2026 | R11.0 | Nausea | S |

The roster's dementia pugilistica code (G31.09) is not used; traumatic encephalopathy syndrome is a research diagnosis without a code here. See the editorial resolutions in sources.md.

## Medications (RxNorm)

| Code | Display |
|---|---|
| 861004 | metformin hydrochloride 1000 MG Oral Tablet |
| 310490 | glipizide 5 MG Oral Tablet (stopped at the diagnosis visit) |
| 314077 | lisinopril 20 MG Oral Tablet |
| 617310 | atorvastatin 20 MG Oral Tablet |
| 1049909 | diphenhydramine hydrochloride 25 MG Oral Capsule (stopped at intake) |
| 997229 | donepezil hydrochloride 5 MG Oral Tablet (from the diagnosis visit; again from the sick visit) |
| 997223 | donepezil hydrochloride 10 MG Oral Tablet (eleven weeks to the sick visit) |

No anti-amyloid antibody is prescribed.

## Results (LOINC 2.81)

| Code | Measure | Unit | Category |
|---|---|---|---|
| 6690-2, 718-7, 777-3 | White cells, hemoglobin, platelets | 10*3/uL, g/dL | laboratory |
| 51990-0 | Basic metabolic panel (organizer) | — | panel |
| 2951-2, 2823-3, 2160-0, 98979-8, 2345-7 | Sodium, potassium, creatinine, eGFR (CKD-EPI 2021), glucose | mmol/L, mg/dL, mL/min/{1.73_m2} | laboratory |
| 4548-4 | Hemoglobin A1c | % | laboratory |
| 2132-9, 3016-3 | Vitamin B12, TSH | pg/mL, m[IU]/L | laboratory |
| 9318-7 | Urine albumin-to-creatinine ratio | mg/g | laboratory |
| 2093-3, 2085-9, 13457-7, 2571-8 | Total cholesterol, HDL, LDL (calculated), triglycerides | mg/dL | laboratory |
| 72172-0 | MoCA total score | {score} | survey |
| 72107-6 | MMSE | {score} | survey |
| 72088-8 | Clinical Dementia Rating (global) | {score} | survey |
| 55758-7 | PHQ-2 total score | {score} | survey |
| 44261-6 | PHQ-9 total score | {score} | survey |

Reference ranges are typical adult male ranges chosen for the teaching record; the glucose range is a non-fasting range (70 to 140 mg/dL). The CDR sum of boxes, Functional Activities Questionnaire, Zarit Burden Interview, STOP-Bang, Timed Up and Go, neuropsychiatric review, home glucose readings, the eye examination and the HIV and hepatitis results are narrative.

## Procedures, immunizations, and encounter types

- Procedures: SNOMED CT 816077007 (MRI of brain), 252577008 (pure tone audiometry), 715173001 (PET-CT of brain using florbetapir), 29303009 (electrocardiographic procedure, twice), 43362002 (fitting of hearing aid) and 713603004 (advance care planning).
- Encounter types: SNOMED CT 390906007 (follow-up encounter) for the four focused chronic-care visits, 86013001 (periodic reevaluation and management of healthy individual) for the preventive visit, and 185345009 (encounter for symptom) for the sick visit. The services are named in plain text as CPT 99396 and 99497; CPT is not used as a coded value.
- Immunizations: CVX 140 (influenza), 216 (PCV20), 187 (zoster recombinant) and 115 (Tdap).
- No known allergy: SNOMED CT 716186003.

## Vital signs

The seven visits use LOINC 8302-2, 29463-7, 39156-5, 8480-6, 8462-4, 8867-4, 9279-1, 8310-5, and 59408-5 with UCUM units.

## Review note

Codes were checked against the public terminology server and NLM RxNav on November 5, 2026. They do not imply that Sugar Ray Robinson received these diagnoses, tests, or medications during his lifetime.
