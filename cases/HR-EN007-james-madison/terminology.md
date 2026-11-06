# Terminology — James Madison

> **SYNTHETIC RECORD, NOT A REAL MEDICAL RECORD**

## Diagnoses

| Use | System | Code | Display | Evidence |
|---|---|---|---|---|
| Resolved presenting problem | ICD-10-CM FY2026 | R40.4 | Transient alteration of awareness | S; recurrent sudden unresponsiveness, superseded at the April 30 visit |
| Resolved problem | ICD-10-CM FY2026 | Z79.899 | Other long term (current) drug therapy | S; levetiracetam without a confirmed diagnosis, stopped by the June 11 visit |
| Active problem (both_with_link) | ICD-10-CM FY2026 | F44.5 | Conversion disorder with seizures or convulsions | S; functional/dissociative seizures documented by video-EEG |
| Active problem | ICD-10-CM FY2026 | F41.1 | Generalized anxiety disorder | S |
| Active problem | ICD-10-CM FY2026 | F32.1 | Major depressive disorder, single episode, moderate | S |
| Resolved problem | ICD-10-CM FY2026 | A08.4 | Viral intestinal infection, unspecified | S; gastroenteritis at the August 20 visit |

No epilepsy code (G40.-) is used; epilepsy was considered and excluded in the episode, and it is a disputed retrospective reading of his history.

## Medications (RxNorm)

| Code | Display |
|---|---|
| 311289 | levetiracetam 500 MG Oral Tablet |
| 312941 | sertraline 50 MG Oral Tablet |
| 104894 | ondansetron 4 MG Disintegrating Oral Tablet |

## Results (LOINC 2.81)

| Code | Measure | Unit | Category |
|---|---|---|---|
| 44261-6 | PHQ-9 total score | {score} | survey |
| 70274-6 | GAD-7 total score | {score} | survey |
| 75626-2 | AUDIT-C total score | {score} | survey |
| 58410-2 | CBC panel (organizer): 718-7, 6690-2, 777-3 | g/dL, 10*3/uL | laboratory |
| 24323-8 | Comprehensive metabolic panel (organizer): 2951-2, 2823-3, 2160-0, 98979-8, 2345-7, 17861-6 | mmol/L, mg/dL, mL/min/{1.73_m2} | laboratory |
| 3016-3 | TSH | m[IU]/L | laboratory |
| 8636-3 | QTc | ms | imaging |

The C-SSRS screen, event counts from his diary, and orthostatic vital signs are kept in the note text.

## Procedures, immunizations, and other codes

- Procedures: SNOMED CT 29303009 (electrocardiographic procedure), 816077007 (MRI of brain), and 252738008 (video EEG), with findings in the display text.
- Immunizations: CVX 115 (Tdap) and 165 (HPV9) in the history; 115 (Tdap booster) at the preventive visit; 140 (influenza, trivalent) at the last visit.
- No known allergy: SNOMED CT 716186003.
- Encounter types: SNOMED CT 390906007 (follow-up encounter) for the three focused visits, 185345009 (encounter for symptom) for the sick visit, and 86013001 (periodic reevaluation and management of healthy individual) for the preventive visit. Services are named in plain text only; HCPCS and CPT are not used as coded values.

## Vital signs

The six visits use LOINC 8302-2, 29463-7, 39156-5, 8480-6, 8462-4, 8867-4, 9279-1, 8310-5, and 59408-5 with UCUM units.

## Review note

Codes were checked against the public terminology server and NLM RxNav on November 6, 2026. They do not imply that James Madison received these diagnoses, tests, or medications during his lifetime.
