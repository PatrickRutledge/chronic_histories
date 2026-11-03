# Terminology — Gregory Boyington pilot

> **SYNTHETIC RECORD, NOT A REAL MEDICAL RECORD**

## Diagnoses

| Use | System | Code | Display | Evidence |
|---|---|---|---|---|
| Synthetic active problem | ICD-10-CM FY2026 | F10.20 | Alcohol dependence, uncomplicated | S |
| Synthetic active problem | ICD-10-CM FY2026 | F43.10 | Post-traumatic stress disorder, unspecified | S; historical attribution remains R |
| Resolved problem | ICD-10-CM FY2026 | S39.012A | Strain of muscle, fascia and tendon of lower back, initial encounter | S; intercurrent injury at the sick visit |

## Scored observations

| Measure | System | Code | Unit | Use |
|---|---|---|---|---|
| AUDIT-C total score | LOINC 2.81 | 75626-2 | `{score}` | Alcohol screening and longitudinal monitoring |
| PCL-5 score | LOINC 2.81 | 101698-9 | `{score}` | Synthetic PTSD symptom monitoring |
| PHQ-9 total score | LOINC 2.81 | 44261-6 | `{score}` | Synthetic depression screening and monitoring, including the preventive visit |

## Immunizations

CVX 115 (Tdap), 140 (influenza, split virus, trivalent, PF; last season and this season at the preventive visit), and 216 (PCV20 pneumococcal conjugate vaccine).

## Encounter types

- Focused chronic-care visits (ENC-002, ENC-003): SNOMED CT 390906007 (Follow-up encounter).
- Sick visit (ENC-004): SNOMED CT 185345009 (Encounter for symptom).
- Adult preventive visit (ENC-005): SNOMED CT 86013001 (Periodic reevaluation and management of healthy individual).
- The new codes were validated on November 3, 2026. The index visit (ENC-001) carries no encounter type code.

## Vital signs

The five visits use LOINC 8302-2 (height), 29463-7 (weight), 39156-5 (BMI), 8480-6 and 8462-4 (blood pressure), 8867-4 (heart rate), 9279-1 (respiratory rate), 8310-5 (temperature), and 59408-5 (pulse-oximetry oxygen saturation), with UCUM units.

## Review note

Codes are selected for the synthetic teaching record and validated against the named public terminology versions or official terminology pages. They do not imply that Boyington received these diagnoses, instruments, or coded services during his lifetime.
