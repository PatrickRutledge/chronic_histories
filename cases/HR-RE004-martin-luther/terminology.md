# Terminology — Martin Luther

> **SYNTHETIC RECORD, NOT A REAL MEDICAL RECORD**

## Diagnoses

| Use | System | Code | Display | Evidence |
|---|---|---|---|---|
| Presenting problem, resolved at the consultation | ICD-10-CM FY2026 | R42 | Dizziness and giddiness | S; linked to his documented attacks of 1527 |
| Additional codes on the same problem | ICD-10-CM FY2026 | H93.12, H91.92 | Tinnitus, left ear; Unspecified hearing loss, left ear | S |
| Active problem, from the second visit | ICD-10-CM FY2026 | H81.02 | Meniere's disease, left ear | S; linked to the retrospective diagnosis (R) |
| Additional codes on the same problem | ICD-10-CM FY2026 | H90.42, H93.12 | Sensorineural hearing loss, unilateral, left ear, with unrestricted hearing on the contralateral side; Tinnitus, left ear | S |
| Active problem, from the second visit | ICD-10-CM FY2026 | F33.1 | Major depressive disorder, recurrent, moderate | S; linked to his documented Anfechtungen and low periods |
| Active problem | ICD-10-CM FY2026 | Z87.442 | Personal history of urinary calculi | S; linked to his documented stone of 1526 |
| Resolved problem | ICD-10-CM FY2026 | N20.1 | Calculus of ureter | S; recorded at the August sick visit |

## Medications (RxNorm)

| RxCUI | Name | Use |
|---|---|---|
| 995666 | meclizine hydrochloride 25 MG Oral Tablet | Severe vertigo attacks only, from intake |
| 310798 | hydrochlorothiazide 25 MG Oral Tablet | Ménière disease maintenance; stone prevention |
| 312940 | sertraline 25 MG Oral Tablet | Depression, first week |
| 312941 | sertraline 50 MG Oral Tablet | Depression |
| 198014 | naproxen 500 MG Oral Tablet | Renal colic, up to 7 days |
| 863669 | tamsulosin hydrochloride 0.4 MG Oral Capsule | Medical expulsive therapy until the stone passed |

## Results (LOINC 2.81)

| Code | Measure | Unit | Category |
|---|---|---|---|
| 718-7, 6690-2, 777-3 | Hemoglobin, white cell count, platelets | g/dL, 10*3/uL | laboratory |
| 51990-0 | Basic metabolic panel (organizer) | — | panel |
| 2951-2, 2823-3, 2028-9, 3094-0, 2160-0, 98979-8, 2345-7, 17861-6 | Sodium, potassium, bicarbonate, urea nitrogen, creatinine, eGFR (CKD-EPI 2021), glucose, calcium | mmol/L, mg/dL, mL/min/{1.73_m2} | laboratory |
| 3084-1, 3016-3 | Uric acid, TSH | mg/dL, m[IU]/L | laboratory |
| 13945-1, 5803-2 | Urine red cells per high-power field, urine pH | /[HPF], [pH] | laboratory |
| 24331-1 | Lipid panel (organizer) | — | panel |
| 2093-3, 2571-8, 2085-9, 13457-7, 4548-4 | Total cholesterol, triglycerides, HDL, calculated LDL, hemoglobin A1c | mg/dL, % | laboratory |
| 3167-4, 6874-2, 2701-1, 6687-8, 2956-1, 3087-4, 2162-6 | 24-hour urine volume, calcium, oxalate, citrate, sodium, uric acid, creatinine | L/(24.h), mg/(24.h), mmol/(24.h) | laboratory |
| 44261-6, 70274-6 | PHQ-9 and GAD-7 total scores | {score} | survey |

Audiogram thresholds, word recognition, the stone analysis, the Dizziness Handicap Inventory, the Mood Disorder Questionnaire and AUDIT-C are recorded in the notes only. Reference ranges are typical adult male ranges chosen for the teaching record; the 24-hour urine ranges are stone-prevention targets. Interpretation flags follow them, and validation checks that every flag agrees with its range.

## Procedures and immunizations

- Pure tone audiometry: SNOMED CT 252577008 (second and thirteen-week visits). MRI of internal auditory meatus with contrast: 431625000. CT of urinary tract: 419084009 (low-dose, without contrast, at the sick visit). Ultrasonography of kidney, ureter and urinary bladder: 1345060009. Advance care planning: 713603004.
- Immunizations: CVX 115 (Tdap) and 140 (influenza, split virus, trivalent, PF).
- No known allergy: SNOMED CT 716186003.
- Encounter types: SNOMED CT 390906007 (follow-up encounter) for the three focused chronic-care visits, 86013001 (periodic reevaluation and management of healthy individual) for the preventive visit, and 185345009 (encounter for symptom) for the sick visit. The services are named in plain text as CPT 99396 and 99497; CPT is not used as a coded value.

## Vital signs

The six visits use LOINC 8302-2, 29463-7, 39156-5, 8480-6, 8462-4, 8867-4, 9279-1, 8310-5, and 59408-5 with UCUM units.

## Review note

Codes were checked against the public terminology server and NLM RxNav on November 6, 2026. They do not imply that Martin Luther received these diagnoses, tests, or treatments during his lifetime.
