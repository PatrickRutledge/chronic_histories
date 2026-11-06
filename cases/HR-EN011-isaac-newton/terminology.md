# Terminology — Isaac Newton

> **SYNTHETIC RECORD, NOT A REAL MEDICAL RECORD**

## Diagnoses

| Use | System | Code | Display | Evidence |
|---|---|---|---|---|
| Resolved presenting problem | ICD-10-CM FY2026 | R45.89 | Other symptoms and signs involving emotional state | S; a year of poor sleep and appetite with suspicious thoughts, superseded at the October 8 visit |
| Active problem | ICD-10-CM FY2026 | Z57.5 | Occupational exposure to toxic agents in other industries | S; heating mercury and other metals in an unventilated laboratory |
| Active problem (both_with_link) | ICD-10-CM FY2026 | F32.2 | Major depressive disorder, single episode, severe without psychotic features | S; linked to his documented sleeplessness, poor appetite, and melancholy |
| Active problem | ICD-10-CM FY2026 | G47.00 | Insomnia, unspecified | S; chronic insomnia comorbid with depression |
| Active problem | ICD-10-CM FY2026 | R82.6 | Abnormal urine levels of substances chiefly nonmedicinal as to source | S; raised urine mercury without clinical toxicity |
| Resolved problem | ICD-10-CM FY2026 | J06.9 | Acute upper respiratory infection, unspecified | S; a cold at the October 15 sick visit |

No code for mercury poisoning (T56.1-), psychotic disorder, delusional disorder, bipolar disorder, or autism spectrum disorder is used; those are historical leads or excluded diagnoses only.

## Medications (RxNorm)

| Code | Display |
|---|---|
| 312941 | sertraline 50 MG Oral Tablet |
| 198440 | acetaminophen 500 MG Oral Tablet |

## Results (LOINC 2.81)

| Code | Measure | Unit | Category |
|---|---|---|---|
| 44261-6 | PHQ-9 total score | {score} | survey |
| 70274-6 | GAD-7 total score | {score} | survey |
| 72172-0 | MoCA total score | {score} | survey |
| 58410-2 | CBC panel (organizer): 718-7, 787-2, 6690-2, 777-3 | g/dL, fL, 10*3/uL | laboratory |
| 24323-8 | Comprehensive metabolic panel (organizer): 2951-2, 2823-3, 3094-0, 2160-0, 98979-8, 2345-7, 17861-6, 1751-7, 1742-6 | mmol/L, mg/dL, g/dL, U/L, mL/min/{1.73_m2} | laboratory |
| 3016-3, 2132-9 | TSH, vitamin B12 | m[IU]/L, pg/mL | laboratory |
| 9318-7 | Albumin/creatinine ratio in urine | mg/g{creat} | laboratory |
| 5685-3 | Mercury in blood | ug/L | laboratory |
| 5671-3 | Lead in blood | ug/dL | laboratory |
| 21383-5 | Mercury in 24-hour urine | ug/L | laboratory |
| 26688-2 | Mercury/creatinine ratio in 24-hour urine | ug/g{creat} | laboratory |
| 24331-1 | Lipid panel (organizer): 2093-3, 2085-9, 13457-7, 2571-8 | mg/dL | laboratory |

Interpretation flags follow the stated ranges; the mercury and lead ranges carry the ATSDR and CDC reference text. The C-SSRS screen, Mood Disorder Questionnaire interview, AUDIT-C, and the workplace mercury vapor measurement are kept in the note text.

## Procedures, immunizations, and other codes

- Immunizations: CVX 115 (Tdap) and 189 (HepB-CpG) in the history; 140 (influenza, trivalent), 216 (PCV20), and 187 (recombinant zoster) at the preventive visit.
- Family history relationship: HL7 v3 RoleCode FTH (father).
- No known allergy: SNOMED CT 716186003.
- Encounter types: SNOMED CT 390906007 (follow-up encounter) for the two focused visits, 185345009 (encounter for symptom) for the sick visit, and 86013001 (periodic reevaluation and management of healthy individual) for the preventive visit. Services are named in plain text only; HCPCS and CPT are not used as coded values.

## Vital signs

The five visits use LOINC 8302-2, 29463-7, 39156-5, 8480-6, 8462-4, 8867-4, 9279-1, 8310-5, and 59408-5 with UCUM units.

## Review note

Codes were checked against the public terminology server and NLM RxNav on November 5, 2026. They do not imply that Isaac Newton received these diagnoses, tests, or medications during his lifetime.
