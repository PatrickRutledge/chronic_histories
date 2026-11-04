# Terminology — Marilyn Monroe

> **SYNTHETIC RECORD, NOT A REAL MEDICAL RECORD**

## Diagnoses

| Use | System | Code | Display | Evidence |
|---|---|---|---|---|
| Presenting problem; resolved (superseded) at the consultation | ICD-10-CM FY2026 | N94.6 | Dysmenorrhea, unspecified | S; linked to the documented endometriosis |
| Problem recorded at the consultation | ICD-10-CM FY2026 | N80.102 | Endometriosis of left ovary, unspecified depth | S; linked to the documented endometriosis |
| Active problem from intake | ICD-10-CM FY2026 | F32.1 | Major depressive disorder, single episode, moderate | S |
| Problem added at the sick visit, resolved | ICD-10-CM FY2026 | N30.00 | Acute cystitis without hematuria | S |
| Problem recorded at three months | ICD-10-CM FY2026 | M62.89 | Other specified disorders of muscle (pelvic floor muscle dysfunction) | S |

The historical and retrospective accounts of depression, bipolar disorder, borderline personality disorder, and drug dependency are not coded (see sources.md).

## Medications (RxNorm)

| Code | Display |
|---|---|
| 198014 | naproxen 500 MG Oral Tablet |
| 1358762 | ethinyl estradiol 0.02 MG / norethindrone acetate 1 MG Oral Tablet (taken continuously) |
| 1648755 | nitrofurantoin, macrocrystals 25 MG / nitrofurantoin, monohydrate 75 MG Oral Capsule (sick visit, five days) |
| 198640 | folic acid 0.4 MG Oral Tablet (from the preventive visit) |

## Results (LOINC 2.81)

| Code | Measure | Unit | Category |
|---|---|---|---|
| 6690-2, 718-7, 777-3 | White cells, hemoglobin, platelets | 10*3/uL, g/dL | laboratory |
| 38476-8 | Mullerian inhibiting substance (anti-Mullerian hormone) | ng/mL | laboratory |
| 44261-6 | PHQ-9 total score | {score} | survey |
| 70274-6 | GAD-7 total score | {score} | survey |
| 72514-3 | Pain severity, 0 to 10 verbal numeric rating | {score} | survey |
| 75626-2 | AUDIT-C total score | {score} | survey |

Reference ranges are typical adult female ranges chosen for the teaching record; the anti-Mullerian hormone range is a typical range for ages 30 to 34. The transvaginal ultrasound findings and the Mood Disorder Questionnaire are recorded in the note text because no verified LOINC code for an ovarian cyst diameter was found. Qualitative results are recorded as narrative.

## Procedures, immunizations, and encounter types

- Advance care planning: SNOMED CT 713603004.
- Encounter types: SNOMED CT 390906007 (follow-up encounter) for the three focused chronic-care visits, 86013001 (periodic reevaluation and management of healthy individual) for the preventive visit, and 185345009 (encounter for symptom) for the sick visit. The services are named in plain text as CPT 99395 and 99497; CPT is not used as a coded value.
- Immunizations: CVX 140 (inactivated influenza), at the three-month visit.
- No known allergy: SNOMED CT 716186003.

## Vital signs

The six visits use LOINC 8302-2, 29463-7, 39156-5, 8480-6, 8462-4, 8867-4, 9279-1, 8310-5, and 59408-5 with UCUM units.

## Review note

Codes were checked against the public terminology server and NLM RxNav on November 4, 2026. They do not imply that Marilyn Monroe received these diagnoses, tests, or medications during her lifetime.
