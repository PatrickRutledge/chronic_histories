# Terminology — Abraham Lincoln pilot

> **SYNTHETIC RECORD, NOT A REAL MEDICAL RECORD**

## Diagnoses

| Use | System | Code | Display | Evidence |
|---|---|---|---|---|
| Synthetic active problem | ICD-10-CM FY2026 | F32.1 | Major depressive disorder, single episode, moderate | S; historical attribution remains R |
| Synthetic intercurrent illness at the sick visit, resolved | ICD-10-CM FY2026 | L23.7 | Allergic contact dermatitis due to plants, except food | S |

## Medication

| Use | System | Code | Display | Evidence |
|---|---|---|---|---|
| Synthetic active medication | RxNorm | 312941 | sertraline 50 MG Oral Tablet | S |
| Synthetic completed 15-day taper at the sick visit | RxNorm | 312615 | prednisone 20 MG Oral Tablet | S |

## Scored observations

| Measure | System | Code | Unit | Use |
|---|---|---|---|---|
| PHQ-9 total score | LOINC 2.81 | 44261-6 | `{score}` | Synthetic depression severity and longitudinal monitoring, including the preventive visit |
| GAD-7 total score | LOINC 2.81 | 70274-6 | `{score}` | Synthetic anxiety screen at the preventive visit |
| AUDIT-C total score | LOINC 2.81 | 75626-2 | `{score}` | Synthetic alcohol screen at the preventive visit |

## Allergies, immunizations, and family history

- No known allergy: SNOMED CT 716186003.
- Immunizations: CVX 115 (Tdap) and CVX 140 (influenza, trivalent, preservative free; the 2025-2026 dose and the 2026-2027 dose given at the preventive visit).
- Family relationships: HL7 RoleCode MTH (mother) and SIS (sister). Historical conditions are uncoded narrative.

## Encounter types

- Focused chronic-care visits (ENC-002, ENC-003): SNOMED CT 390906007 (Follow-up encounter).
- Sick visit (ENC-004): SNOMED CT 185345009 (Encounter for symptom).
- Adult preventive visit (ENC-005): SNOMED CT 86013001 (Periodic reevaluation and management of healthy individual).
- The index visit (ENC-001) carries no encounter type code.

## Vital signs

The five visits use LOINC 8302-2 (height), 29463-7 (weight), 39156-5 (BMI), 8480-6 and 8462-4 (blood pressure), 8867-4 (heart rate), 9279-1 (respiratory rate), 8310-5 (temperature), and 59408-5 (pulse-oximetry oxygen saturation), with UCUM units. Height reflects his documented self-description of “six feet, four inches, nearly.”

## Review note

Codes were checked against the public terminology server on November 2, 2026; the codes added for the focused, sick, and preventive visits (L23.7, RxNorm 312615, LOINC 70274-6 and 75626-2, SNOMED CT 390906007, 185345009, and 86013001, CVX 140) were checked against the public terminology server and NLM RxNav on November 3, 2026. They do not imply that Lincoln received these diagnoses, instruments, medications, or coded services during his lifetime.
