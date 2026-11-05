# Terminology — Frederick Douglass

> **SYNTHETIC RECORD, NOT A REAL MEDICAL RECORD**

## Diagnoses

| Use | System | Code | Display | Evidence |
|---|---|---|---|---|
| Active problem | ICD-10-CM FY2026 | Z91.49 | Other personal history of psychological trauma, not elsewhere classified | S; his documented history recorded as a history, not a disorder |
| Active problem | ICD-10-CM FY2026 | M19.141 | Post-traumatic osteoarthritis, right hand | S; linked to the documented broken right hand that was not properly set |
| Active problem | ICD-10-CM FY2026 | Z72.820 | Sleep deprivation | S; short sleep from late writing and travel |
| Sick visit (resolved) | ICD-10-CM FY2026 | J04.0 | Acute laryngitis | S; synthetic intercurrent illness |

No F-code is used: post-traumatic stress disorder (F43.10) was considered and not assigned (see sources.md). Z62.810 and Z91.410 were not used because their displays include sexual abuse, which is not part of his history; Z91.42 was not used, so that enslavement is not coded.

## Medications (RxNorm)

| Code | Display |
|---|---|
| 855633 | diclofenac sodium 0.01 MG/MG Topical Gel (diclofenac 1% gel, 2 g to the right hand up to four times a day) |

## Results (LOINC 2.81)

| Code | Measure | Unit | Category |
|---|---|---|---|
| 102017-1 | PC-PTSD-5 score | {score} | survey |
| 101698-9 | PCL-5 score | {score} | survey |
| 44261-6 | PHQ-9 total score | {score} | survey |
| 55758-7 | PHQ-2 total score (preventive visit) | {score} | survey |
| 72514-3 | Pain severity, 0 to 10 verbal numeric rating (right hand) | {score} | survey |
| 75626-2 | AUDIT-C total score | {score} | survey |
| 79878-5, 79879-3 | Visual acuity uncorrected, right and left eye, by ETDRS chart | {letters} | imaging |

Visual acuity is recorded in ETDRS letters (85 letters is about 20/20). The CAPS-5 interview, the FIHOA hand-function score, sleep hours, and nightmare frequency have no numeric code in this record and are recorded in the note text. The HIV, hepatitis C, and hepatitis B screening tests drawn at the preventive visit have no result in the record.

## Procedures, immunizations, and encounters

- Plain X-ray of hand: SNOMED CT 713027003 (right hand, at intake).
- Encounter types: SNOMED CT 390906007 (follow-up encounter) for the three focused chronic-care visits, 185345009 (encounter for symptom) for the sick visit, and 86013001 (periodic reevaluation and management of healthy individual) for the adult preventive visit. The preventive service is named in plain text as CPT 99395; CPT is not used as a coded value.
- Immunizations: CVX 115 (Tdap, modern-frame history) and 140 (influenza, 2026-2027).
- No known allergy: SNOMED CT 716186003.
- Family relationship: HL7 RoleCode MTH (mother).

## Vital signs

The six visits use LOINC 8302-2, 29463-7, 39156-5, 8480-6, 8462-4, 8867-4, 9279-1, 8310-5, and 59408-5 with UCUM units.

## Review note

Codes were checked against the public terminology server and NLM RxNav on November 4, 2026. They do not imply that Douglass received these diagnoses, tests, or medications during his lifetime.
