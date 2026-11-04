# Terminology — Ludwig van Beethoven

> **SYNTHETIC RECORD, NOT A REAL MEDICAL RECORD**

## Diagnoses

| Use | System | Code | Display | Evidence |
|---|---|---|---|---|
| Presenting concern, resolved at the audiologic evaluation | ICD-10-CM FY2026 | H91.93 | Unspecified hearing loss, bilateral | S; linked to his documented hearing loss |
| Active problem, from the second visit | ICD-10-CM FY2026 | H90.3 | Sensorineural hearing loss, bilateral | S; linked to his documented progressive deafness |
| Active problem | ICD-10-CM FY2026 | H93.13 | Tinnitus, bilateral | S; linked to his documented tinnitus |
| Active problem | ICD-10-CM FY2026 | F43.21 | Adjustment disorder with depressed mood | S; linked to his documented withdrawal and despair |
| Resolved problem | ICD-10-CM FY2026 | H61.22 | Impacted cerumen, left ear | S; recorded at the September sick visit |

## Medications

None. The tinnitus guideline recommends against medicines and supplements for tinnitus, and the adjustment disorder is treated with psychotherapy.

## Results (LOINC 2.81)

| Code | Measure | Unit | Category |
|---|---|---|---|
| 89015-2 | Pure tone air conduction threshold audiometry panel (organizer) | — | panel |
| 91374-9, 89025-1, 89017-8, 89019-4, 89021-0, 89023-6, 89029-3 | Hearing threshold, right ear, 250, 500, 1000, 2000, 3000, 4000, 8000 Hz | dB | imaging |
| 91375-6, 89024-4, 89016-0, 89018-6, 89020-2, 89022-8, 89028-5 | Hearing threshold, left ear, 250, 500, 1000, 2000, 3000, 4000, 8000 Hz | dB | imaging |
| 718-7, 3016-3, 4548-4 | Hemoglobin, TSH, HbA1c | g/dL, m[IU]/L, % | laboratory |
| 63464-2 | Treponema pallidum antibody (immunoassay index) | {index_val} | laboratory |
| 48159-8 | Hepatitis C antibody signal-to-cutoff | {s_co_ratio} | laboratory |
| 16935-9 | Hepatitis B surface antibody | m[IU]/mL | laboratory |
| 44261-6 | PHQ-9 total score | {score} | survey |
| 70274-6 | GAD-7 total score | {score} | survey |
| 84773-1 | Mood Disorder Questionnaire total score | {score} | survey |
| 75626-2 | AUDIT-C total score | {score} | survey |

Hearing thresholds are in decibels hearing level; values of 25 dB or better are flagged normal. The Tinnitus Handicap Inventory, speech reception thresholds, word recognition scores, and otoacoustic emissions are recorded in the notes only, because no suitable LOINC code was found; no code was invented for them. Reference ranges are typical adult ranges chosen for the teaching record; interpretation flags follow them, and validation checks that every flag agrees with its range.

## Procedures, immunizations, and family history

- Basic pure tone audiometry, air and bone: SNOMED CT 20521004 (second visit and six months). Speech audiometry: 252592009. Tympanometry testing: 91573000. MRI of internal auditory meatus with contrast: 431625000. Fitting of hearing aid: 43362002. Syringing ear to remove wax: 172630005 (sick visit). Advance care planning: 713603004.
- Immunizations: CVX 115 (Tdap) and 140 (influenza).
- No known allergy: SNOMED CT 716186003.
- Encounter types: SNOMED CT 390906007 (follow-up encounter) for the four focused chronic-care visits, 86013001 (periodic reevaluation and management of healthy individual) for the preventive visit, and 185345009 (encounter for symptom) for the sick visit. The services are named in plain text as CPT 99395 and 99497; CPT is not used as a coded value.
- Family relationship: HL7 RoleCode FTH (father).

## Vital signs

The seven visits use LOINC 8302-2, 29463-7, 39156-5, 8480-6, 8462-4, 8867-4, 9279-1, 8310-5, and 59408-5 with UCUM units.

## Review note

Codes were checked against the public terminology server, the NLM Clinical Tables LOINC search, and NLM RxNav on November 4, 2026. They do not imply that Beethoven received these diagnoses, tests, or treatments during his lifetime.
