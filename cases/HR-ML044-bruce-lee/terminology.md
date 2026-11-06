# Terminology — Bruce Lee

> **SYNTHETIC RECORD, NOT A REAL MEDICAL RECORD**

## Diagnoses

| Use | System | Code | Display | Evidence |
|---|---|---|---|---|
| Presenting problem (provisional), resolved at the epilepsy clinic | ICD-10-CM FY2026 | R55 | Syncope and collapse | S; linked to his documented collapse |
| Active problem, from the epilepsy clinic | ICD-10-CM FY2026 | R56.9 | Unspecified convulsions | S; linked to his documented collapse with convulsions |
| Active problem | ICD-10-CM FY2026 | M54.50 | Low back pain, unspecified | S; linked to his documented back injury |
| Sick visit, resolved | ICD-10-CM FY2026 | M62.830 | Muscle spasm of back | S |

A single unprovoked seizure is not epilepsy, so no G40 code is used. No code is used for cannabis use; see the editorial resolutions in sources.md.

## Medications (RxNorm)

| Code | Display |
|---|---|
| 198440 | acetaminophen 500 MG Oral Tablet (as needed) |
| 198014 | naproxen 500 MG Oral Tablet (seven days, sick visit) |

## Results (LOINC 2.81)

| Code | Measure | Unit | Category |
|---|---|---|---|
| 51990-0 | Basic metabolic panel (organizer) | — | panel |
| 2951-2, 2823-3, 2075-0, 2028-9, 2160-0, 98979-8, 2345-7, 17861-6 | Sodium, potassium, chloride, total CO2, creatinine, eGFR (CKD-EPI 2021), glucose, calcium | mmol/L, mg/dL, mL/min/{1.73_m2} | laboratory |
| 19123-9 | Magnesium | mg/dL | laboratory |
| 2157-6 | Creatine kinase | U/L | laboratory |
| 6690-2, 718-7, 777-3 | White cells, hemoglobin, platelets | 10*3/uL, g/dL | laboratory |
| 3016-3 | TSH | m[IU]/L | laboratory |
| 8636-3 | QTc interval on ECG | ms | imaging |
| 72514-3 | Pain severity, 0 to 10 numeric rating | {score} | survey |
| 55758-7 | PHQ-2 total score | {score} | survey |
| 75626-2 | AUDIT-C total score | {score} | survey |

Reference ranges are typical adult male ranges chosen for the teaching record; interpretation flags follow them. The emergency department values (sodium, glucose, creatinine, creatine kinase, CT, urine drug screen), the HIV, hepatitis B and hepatitis C results and the seizure classification are recorded as narrative.

## Procedures, immunizations, and encounter types

- Procedures: SNOMED CT 29303009 (electrocardiographic procedure), 816077007 (MRI of brain; epilepsy protocol), 54550000 (electroencephalogram; sleep-deprived) and 713603004 (advance care planning).
- Encounter types: SNOMED CT 390906007 (follow-up encounter) for the three focused chronic-care visits, 86013001 (periodic reevaluation and management of healthy individual) for the preventive visit, and 185345009 (encounter for symptom) for the sick visit. The services are named in plain text as CPT 99395 and 99497; CPT is not used as a coded value.
- Immunizations: CVX 115 (Tdap) and 189 (HepB-CpG).
- No known allergy: SNOMED CT 716186003.

## Vital signs

The six visits use LOINC 8302-2, 29463-7, 39156-5, 8480-6, 8462-4, 8867-4, 9279-1, 8310-5, and 59408-5 with UCUM units.

## Review note

Codes were checked against the public terminology server and NLM RxNav on November 5, 2026. They do not imply that Bruce Lee received these diagnoses, tests, or medications during his lifetime.
