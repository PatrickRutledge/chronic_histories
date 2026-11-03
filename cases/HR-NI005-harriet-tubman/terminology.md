# Terminology — Harriet Tubman

> **SYNTHETIC RECORD, NOT A REAL MEDICAL RECORD**

## Diagnoses

| Use | System | Code | Display | Evidence |
|---|---|---|---|---|
| Active problem, provisional | ICD-10-CM FY2026 | G47.429 | Narcolepsy in conditions classified elsewhere without cataplexy | S; linked to the documented spells (D) and both retrospective proposals (R) |
| Active problem | ICD-10-CM FY2026 | G44.329 | Chronic post-traumatic headache, not intractable | S; linked to documented headaches |
| Resolved problem | ICD-10-CM FY2026 | G44.40 | Drug-induced headache, not elsewhere classified, not intractable | S (medication-overuse headache) |
| Resolved problem | ICD-10-CM FY2026 | A08.4 | Viral intestinal infection, unspecified | S (viral gastroenteritis at the sick visit) |
| Active problem | ICD-10-CM FY2026 | S06.9XAS | Unspecified intracranial injury with loss of consciousness status unknown, sequela | S; linked to the documented injury; coded first for G47.429 |

## Medications (RxNorm)

| Code | Display |
|---|---|
| 310965 | ibuprofen 200 MG Oral Tablet (stopped) |
| 198440 | acetaminophen 500 MG Oral Tablet |
| 153823 | candesartan cilexetil 8 MG Oral Tablet |
| 577776 | candesartan cilexetil 16 MG Oral Tablet |
| 260218 | modafinil 100 MG Oral Tablet |

## Results (LOINC 2.81)

| Code | Measure | Unit | Category |
|---|---|---|---|
| 51990-0 | Basic metabolic panel (organizer) | — | panel |
| 2951-2, 2823-3, 2160-0, 98979-8, 2345-7 | Sodium, potassium, creatinine, eGFR (CKD-EPI 2021), glucose | mmol/L, mg/dL, mL/min/{1.73_m2} | laboratory |
| 718-7, 2276-4, 3016-3, 2132-9 | Hemoglobin, ferritin, TSH, vitamin B12 | g/dL, ng/mL, m[IU]/L, pg/mL | laboratory |
| 77859-7 | PROMIS sleep-related impairment T-score | {score} | survey |
| 65380-8 | Headache days in the past 3 months (PhenX item, the MIDAS frequency question) | {days} | survey |
| 44261-6 | PHQ-9 total score | {score} | survey |
| 55758-7 | PHQ-2 total score (annual wellness visit) | {score} | survey |
| 72233-0 | Mini-Cog total score (annual wellness visit) | {score} | survey |
| 75626-2 | AUDIT-C total score (annual wellness visit) | {score} | survey |
| 70274-6 | GAD-7 total score | {score} | survey |
| 102017-1 | PC-PTSD-5 score | {score} | survey |
| 72172-0 | MoCA total score | {score} | survey |

The Epworth Sleepiness Scale and HIT-6 have no LOINC codes on the terminology server, so the PROMIS sleep-related impairment T-score and a headache-day count stand in for them. Sleep-study and EEG results are recorded in the procedure descriptions rather than as coded observations. eGFR values are calculated from the synthetic creatinine with the 2021 CKD-EPI creatinine equation for a 75-year-old woman. Reference ranges are typical adult ranges chosen for the teaching record; interpretation flags follow them, and validation checks that every flag agrees with its range.

## Procedures, immunizations, and family history

- EEG: SNOMED CT 54550000. MRI of brain: SNOMED CT 816077007. Ambulatory EEG: SNOMED CT 252735006. Polysomnography: SNOMED CT 60554003. Multiple sleep latency test: SNOMED CT 252731002.
- Immunizations: CVX 135 (high-dose influenza, two seasons), 216 (PCV20), 303 (RSV, adjuvanted), 187 (recombinant zoster), and 115 (Tdap).
- Encounter types: SNOMED CT 390906007 (follow-up encounter) for the three focused chronic-care visits, 185345009 (encounter for symptom) for the September sick visit and 281038008 (geriatric annual health check) for the annual wellness visit. The services are named in plain text as HCPCS G0439 and CPT 99497; HCPCS and CPT are not used as coded values.
- No known allergy: SNOMED CT 716186003.
- No family history is recorded.

## Vital signs

The six visits use LOINC 8302-2, 29463-7, 39156-5, 8480-6, 8462-4, 8867-4, 9279-1, 8310-5, and 59408-5 with UCUM units.

## Review note

Codes were checked against the public terminology server and NLM RxNav on November 2, 2026; the codes for the sick and annual wellness visits were checked on November 3, 2026. They do not imply that Tubman received these diagnoses, tests, or medications during her lifetime.
