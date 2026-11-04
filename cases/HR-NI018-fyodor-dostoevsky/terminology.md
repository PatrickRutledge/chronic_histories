# Terminology — Fyodor Dostoevsky

> **SYNTHETIC RECORD, NOT A REAL MEDICAL RECORD**

## Diagnoses

| Use | System | Code | Display | Evidence |
|---|---|---|---|---|
| Active problem | ICD-10-CM FY2026 | G40.909 | Epilepsy, unspecified, not intractable, without status epilepticus | S; linked to the documented epilepsy; seizure type left as unknown onset |
| Active problem | ICD-10-CM FY2026 | F63.0 | Pathological gambling | S; linked to the documented roulette gambling |
| Sick visit (resolved) | ICD-10-CM FY2026 | A08.4 | Viral intestinal infection, unspecified | S; synthetic intercurrent illness |

The retrospective seizure types and syndromes (temporolimbic, idiopathic generalized, frontomedial or temporal, insular) are not coded.

## Medications (RxNorm)

| Code | Display |
|---|---|
| 282401 | lamotrigine 25 MG Oral Tablet (titration over six weeks) |
| 198427 | lamotrigine 100 MG Oral Tablet (100 mg twice daily) |

## Results (LOINC 2.81)

| Code | Measure | Unit | Category |
|---|---|---|---|
| 718-7, 6690-2, 777-3 | Hemoglobin, white cell count, platelets | g/dL, 10*3/uL | laboratory |
| 51990-0 | Basic metabolic panel (organizer) | — | panel |
| 2951-2, 2823-3, 2160-0, 98979-8, 2345-7, 17861-6 | Sodium, potassium, creatinine, eGFR (CKD-EPI 2021), glucose, calcium | mmol/L, mg/dL, mL/min/{1.73_m2} | laboratory |
| 1742-6, 1920-8 | ALT, AST | U/L | laboratory |
| 62292-8 | 25-hydroxyvitamin D | ng/mL | laboratory |
| 4548-4 | HbA1c | % | laboratory |
| 2093-3, 2085-9, 13457-7, 2571-8 | Total cholesterol, HDL cholesterol, LDL cholesterol (calculated), triglycerides | mg/dL | laboratory |
| 6948-4 | Lamotrigine trough level | ug/mL | laboratory |
| 44261-6 | PHQ-9 total score | {score} | survey |
| 55758-7 | PHQ-2 total score (preventive visit) | {score} | survey |
| 70274-6 | GAD-7 total score | {score} | survey |
| 75626-2 | AUDIT-C total score | {score} | survey |

Reference ranges are typical adult ranges chosen for the teaching record; interpretation flags follow them, and validation checks that every flag agrees with its range. The lamotrigine range (2.5 to 15 ug/mL) is a commonly reported reference range; his own steady-state level is used as the reference for later comparison. The lipid results are not grouped under a panel code, because the LOINC lipid panel names include a year that the true-date variant cannot shift.

The Problem Gambling Severity Index and the Gambling Symptom Assessment Scale (G-SAS) have no verified LOINC code on the terminology server and are recorded as narrative.

## Procedures, immunizations, and encounters

- Electroencephalogram: SNOMED CT 54550000 (routine EEG and sleep-deprived EEG).
- MRI of brain: SNOMED CT 816077007 (epilepsy protocol).
- Advance care planning: SNOMED CT 713603004.
- Encounter types: SNOMED CT 390906007 (follow-up encounter) for the four focused chronic-care visits, 185345009 (encounter for symptom) for the sick visit, and 86013001 (periodic reevaluation and management of healthy individual) for the adult preventive visit. The services are named in plain text as CPT 99396 and CPT 99497; CPT is not used as a coded value.
- Immunizations: CVX 115 (Tdap, modern-frame history), 140 (influenza, 2026-2027), and 189 (HepB-CpG, first dose).
- No known allergy: SNOMED CT 716186003.
- Family history: none recorded.

## Vital signs

The seven visits use LOINC 8302-2, 29463-7, 39156-5, 8480-6, 8462-4, 8867-4, 9279-1, 8310-5, and 59408-5 with UCUM units.

## Review note

Codes were checked against the public terminology server and NLM RxNav on November 3, 2026. They do not imply that Dostoevsky received these diagnoses, tests, or medications during his lifetime.
