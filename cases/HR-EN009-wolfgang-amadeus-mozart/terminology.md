# Terminology — Wolfgang Amadeus Mozart

> **SYNTHETIC RECORD, NOT A REAL MEDICAL RECORD**

## Diagnoses

| Use | System | Code | Display | Evidence |
|---|---|---|---|---|
| Presenting problem, resolved at the consultation | ICD-10-CM FY2026 | R60.1 | Generalized edema | S; linked to his documented febrile illness of 1784 |
| Resolved problem | ICD-10-CM FY2026 | J02.0 | Streptococcal pharyngitis | S |
| Active problem, from the second visit | ICD-10-CM FY2026 | N00.9 | Acute nephritic syndrome with unspecified morphologic changes | S; linked to his documented illness of 1784 |
| Additional code on the same problem | ICD-10-CM FY2026 | B95.0 | Streptococcus, group A, as the cause of diseases classified elsewhere | S |
| Resolved problem | ICD-10-CM FY2026 | J06.9 | Acute upper respiratory infection, unspecified | S; recorded at the October sick visit |

## Medications (RxNorm)

| RxCUI | Name | Use |
|---|---|---|
| 834102 | penicillin V potassium 500 MG Oral Tablet | Ten days for group A streptococcus |
| 313988 | furosemide 40 MG Oral Tablet | Edema and hypertension; stopped at two weeks |

## Results (LOINC 2.81)

| Code | Measure | Unit | Category |
|---|---|---|---|
| 51990-0 | Basic metabolic panel (organizer) | — | panel |
| 2951-2, 2823-3, 3094-0, 2160-0 | Sodium, potassium, BUN, creatinine | mmol/L, mg/dL | laboratory |
| 98979-8 | eGFR, CKD-EPI 2021 | mL/min/{1.73_m2} | laboratory |
| 1751-7 | Albumin | g/dL | laboratory |
| 718-7, 6690-2, 777-3 | Hemoglobin, white cells, platelets | g/dL, 10*3/uL | laboratory |
| 1988-5, 4537-7 | CRP, ESR (Westergren) | mg/L, mm/h | laboratory |
| 4485-9, 4498-2 | Complement C3, C4 | mg/dL | laboratory |
| 5370-2 | Streptolysin O antibody (ASO) | [IU]/mL | laboratory |
| 5133-4 | Streptococcal DNase B antibody | [IU]/mL | laboratory |
| 13945-1 | Urine red cells per high-power field | /[HPF] | laboratory |
| 2890-2 | Urine protein-to-creatinine ratio | mg/g | laboratory |
| 8625-6 | PR interval | ms | imaging |
| 10230-1 | Left ventricular ejection fraction | % | imaging |
| 55758-7 | PHQ-2 total score | {score} | survey |
| 75626-2 | AUDIT-C total score | {score} | survey |

The rapid antigen test result, red cell casts, dysmorphic red cells, and the Jones criteria tally are recorded in the notes only, because they are not numeric results; no code was invented for them. Reference ranges are typical adult ranges chosen for the teaching record; interpretation flags follow them, and validation checks that every flag agrees with its range.

## Procedures, immunizations, and family history

- Streptococcus pyogenes antigen assay: SNOMED CT 122121004 (intake). Electrocardiographic procedure: 29303009 and transthoracic echocardiography: 433236007 (consultation). Advance care planning: 713603004.
- Immunizations: CVX 115 (Tdap) and 140 (influenza).
- No known allergy: SNOMED CT 716186003.
- Encounter types: SNOMED CT 390906007 (follow-up encounter) for the three focused chronic-care visits, 86013001 (periodic reevaluation and management of healthy individual) for the preventive visit, and 185345009 (encounter for symptom) for the sick visit. The services are named in plain text as CPT 99395 and 99497; CPT is not used as a coded value.
- Family relationships: HL7 RoleCode MTH (mother) and SIB (sibling).

## Vital signs

The six visits use LOINC 8302-2, 29463-7, 39156-5, 8480-6, 8462-4, 8867-4, 9279-1, 8310-5, and 59408-5 with UCUM units.

## Review note

Codes were checked against the public terminology server and NLM RxNav on November 5, 2026. They do not imply that Mozart received these diagnoses, tests, or treatments during his lifetime.
