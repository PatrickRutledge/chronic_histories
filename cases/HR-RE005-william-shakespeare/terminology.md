# Terminology — William Shakespeare

> **SYNTHETIC RECORD, NOT A REAL MEDICAL RECORD**

## Diagnoses

| Use | System | Code | Display | Evidence |
|---|---|---|---|---|
| Resolved presenting problem | ICD-10-CM FY2026 | R25.1 | Tremor, unspecified | S; tremor of the writing hand, superseded at the January 26 visit |
| Active problem (both_with_link) | ICD-10-CM FY2026 | G25.0 | Essential tremor | S; recorded January 26; linked to the interpretation of his shaky signatures (R) |
| Active problem | ICD-10-CM FY2026 | Z72.89 | Other problems related to lifestyle | S; hazardous drinking without an alcohol use disorder |
| Resolved problem | ICD-10-CM FY2026 | J06.9 | Acute upper respiratory infection, unspecified | S; a cold at the February 2 sick visit |

No code for Parkinson disease, alcohol use disorder (F10), syphilis, mercury or lead poisoning, or drug use is used; those are excluded diagnoses or historical leads only.

## Medications (RxNorm)

| Code | Display |
|---|---|
| 856535 | 24 HR propranolol hydrochloride 60 MG Extended Release Oral Capsule |
| 856569 | 24 HR propranolol hydrochloride 80 MG Extended Release Oral Capsule |

## Results (LOINC 2.81)

| Code | Measure | Unit | Category |
|---|---|---|---|
| 3016-3 | TSH | m[IU]/L | laboratory |
| 24323-8 | Comprehensive metabolic panel (organizer): 2951-2, 2823-3, 2160-0, 98979-8, 2345-7, 17861-6, 1742-6, 1920-8 | mmol/L, mg/dL, U/L, mL/min/{1.73_m2} | laboratory |
| 2324-2 | Gamma glutamyl transferase | U/L | laboratory |
| 58410-2 | CBC panel (organizer): 718-7, 787-2, 777-3 | g/dL, fL, 10*3/uL | laboratory |
| 24331-1 | Lipid panel (organizer): 2093-3, 2085-9, 13457-7, 2571-8 | mg/dL | laboratory |
| 4548-4 | Hemoglobin A1c | % | laboratory |
| 75624-7 | AUDIT total score | {score} | survey |
| 55758-7 | PHQ-2 total score | {score} | survey |

TETRAS subscale and item scores, Archimedes spirals, and handwriting samples are kept in the note text.

## Procedures, immunizations, and other codes

- Immunizations: CVX 140 (influenza, trivalent), 309 (COVID-19 mRNA), and 115 (Tdap) in the history; 216 (PCV20) and 187 (recombinant zoster) at the preventive visit.
- Family history relationships: HL7 v3 RoleCode FTH (father), SIS (sister), and SON (natural son).
- No known allergy: SNOMED CT 716186003.
- Encounter types: SNOMED CT 390906007 (follow-up encounter) for the three focused visits, 185345009 (encounter for symptom) for the sick visit, and 86013001 (periodic reevaluation and management of healthy individual) for the preventive visit. Services are named in plain text only; HCPCS and CPT are not used as coded values.

## Vital signs

The six visits use LOINC 8302-2, 29463-7, 39156-5, 8480-6, 8462-4, 8867-4, 9279-1, 8310-5, and 59408-5 with UCUM units.

## Review note

Codes were checked against the public terminology server and NLM RxNav on November 5, 2026. They do not imply that William Shakespeare received these diagnoses, tests, or medications during his lifetime.
