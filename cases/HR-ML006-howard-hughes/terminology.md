# Terminology — Howard Hughes

> **SYNTHETIC RECORD, NOT A REAL MEDICAL RECORD**

## Diagnoses

| Use | System | Code | Display | Evidence |
|---|---|---|---|---|
| Presenting problem, resolved at the consultation | ICD-10-CM FY2026 | R46.81 | Obsessive-compulsive behavior | S; linked to his documented fear of germs |
| Active problem, from the consultation | ICD-10-CM FY2026 | F42.2 | Mixed obsessional thoughts and acts | S; linked to the documented fears and the retrospective (R) interpretation |
| Active problem | ICD-10-CM FY2026 | F11.20 | Opioid dependence, uncomplicated | S; linked to his documented codeine dependence after the crash |
| Active problem | ICD-10-CM FY2026 | G89.21 | Chronic pain due to trauma | S; linked to his documented injuries |
| Presenting problem, resolved at five weeks | ICD-10-CM FY2026 | H91.93 | Unspecified hearing loss, bilateral | S |
| Active problem, from five weeks | ICD-10-CM FY2026 | H90.3 | Sensorineural hearing loss, bilateral | S |
| Active problem | ICD-10-CM FY2026 | R63.4 | Abnormal weight loss | S |
| Sick visit, resolved | ICD-10-CM FY2026 | J20.9 | Acute bronchitis, unspecified | S |

DSM-5-TR obsessive-compulsive disorder with good or fair insight maps to F42.2; moderate opioid use disorder maps to F11.20. No syphilis, kidney disease, psychotic disorder or post-traumatic stress disorder code is used; see the editorial resolutions in sources.md.

## Medications (RxNorm)

| Code | Display |
|---|---|
| 993781 | acetaminophen 300 MG / codeine phosphate 30 MG Oral Tablet (intake week only) |
| 1725059 | naloxone hydrochloride 40 MG/ML Nasal Spray (4 mg per spray) |
| 1010600 | buprenorphine 2 MG / naloxone 0.5 MG Sublingual Film (induction day) |
| 1010604 | buprenorphine 8 MG / naloxone 2 MG Sublingual Film (maintenance) |
| 198440 | acetaminophen 500 MG Oral Tablet |
| 312941 | sertraline 50 MG Oral Tablet |
| 312938 | sertraline 100 MG Oral Tablet (100 mg, then 200 mg as two tablets) |

No benzodiazepine, fluvoxamine, antipsychotic, clomipramine, NSAID, codeine or dextromethorphan cough medicine is prescribed; the reasons are recorded in the notes.

## Results (LOINC 2.81)

| Code | Measure | Unit | Category |
|---|---|---|---|
| 6690-2, 718-7, 787-2, 777-3 | White cells, hemoglobin, MCV, platelets | 10*3/uL, g/dL, fL | laboratory |
| 51990-0 | Basic metabolic panel (organizer) | — | panel |
| 2951-2, 2823-3, 2160-0, 98979-8, 2345-7 | Sodium, potassium, creatinine, eGFR (CKD-EPI 2021), glucose | mmol/L, mg/dL, mL/min/{1.73_m2} | laboratory |
| 1920-8, 1742-6 | AST, ALT | U/L | laboratory |
| 1751-7 | Albumin | g/dL | laboratory |
| 3016-3 | TSH | m[IU]/L | laboratory |
| 9318-7 | Urine albumin-to-creatinine ratio | mg/g{creat} | laboratory |
| 2093-3, 2085-9, 13457-7, 2571-8 | Total cholesterol, HDL, LDL (calculated), triglycerides | mg/dL | laboratory |
| 89025-1, 89024-4, 89017-8, 89016-0, 89019-4, 89018-6, 89023-6, 89022-8 | Hearing thresholds, right and left, at 500, 1000, 2000 and 4000 Hz | dB | imaging |
| 44261-6 | PHQ-9 total score | {score} | survey |
| 55758-7 | PHQ-2 total score | {score} | survey |
| 70274-6 | GAD-7 total score | {score} | survey |
| 82667-7 | DAST-10 total score | {score} | survey |
| 75626-2 | AUDIT-C total score | {score} | survey |
| 91147-9 | PEG mean score | {score} | survey |
| 101698-9 | PCL-5 score | {score} | survey |

Reference ranges are typical adult male ranges chosen for the teaching record; interpretation flags follow them. The Y-BOCS has no LOINC code and is recorded as narrative (see sources.md). The urine drug tests, prescription monitoring reports, COWS, HIV and hepatitis tests are also recorded as narrative.

## Procedures, immunizations, and encounter types

- Procedures: SNOMED CT 252577008 (pure tone audiometry), 225680006 (hearing aid procedure) and 713603004 (advance care planning).
- Encounter types: SNOMED CT 390906007 (follow-up encounter) for the four focused chronic-care visits, 86013001 (periodic reevaluation and management of healthy individual) for the preventive visit, and 185345009 (encounter for symptom) for the sick visit. The services are named in plain text as CPT 99396 and 99497; CPT is not used as a coded value.
- Immunizations: CVX 140 (influenza), 115 (Tdap), 189 (HepB-CpG) and 309 (COVID-19 mRNA).
- No known allergy: SNOMED CT 716186003.

## Vital signs

The seven visits use LOINC 8302-2, 29463-7, 39156-5, 8480-6, 8462-4, 8867-4, 9279-1, 8310-5, and 59408-5 with UCUM units.

## Review note

Codes were checked against the public terminology server and NLM RxNav on November 5, 2026. They do not imply that Howard Hughes received these diagnoses, tests, or medications during his lifetime.
