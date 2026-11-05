# Terminology — Babe Didrikson Zaharias

> **SYNTHETIC RECORD, NOT A REAL MEDICAL RECORD**

## Diagnoses

| Use | System | Code | Display | Evidence |
|---|---|---|---|---|
| Presenting problem; resolved (superseded) at the diagnosis visit | ICD-10-CM FY2026 | K62.5 | Hemorrhage of anus and rectum | S; linked to her documented fatigue before the diagnosis |
| Active problem from intake | ICD-10-CM FY2026 | D50.0 | Iron deficiency anemia secondary to blood loss (chronic) | S |
| Problem recorded at the diagnosis visit (both_with_link) | ICD-10-CM FY2026 | C20 | Malignant neoplasm of rectum | S; linked to her documented cancer and to the R claim on its site |
| Problem recorded at the restaging visit after four doses | ICD-10-CM FY2026 | E03.2 | Hypothyroidism due to medicaments and other exogenous substances | S |
| Problem added at the sick visit; resolved | ICD-10-CM FY2026 | J06.9 | Acute upper respiratory infection, unspecified | S |

## Medications (RxNorm)

| Code | Display |
|---|---|
| 310325 | ferrous sulfate 325 MG Oral Tablet (alternate days) |
| 2539972 | 10 ML dostarlimab-gxly 50 MG/ML Injection (500 mg every 3 weeks, nine doses) |
| 966222 | levothyroxine sodium 0.075 MG Oral Tablet |

The levonorgestrel intrauterine device is recorded in the social history and notes, not as a medication. Acetaminophen and supportive measures at the sick visit are named in the note only.

## Results (LOINC 2.81)

| Code | Measure | Unit | Category |
|---|---|---|---|
| 58410-2 | CBC panel (organizer) | — | panel |
| 718-7, 787-2, 6690-2, 777-3 | Hemoglobin, MCV, white cell count, platelets | g/dL, fL, 10*3/uL | laboratory |
| 2276-4 | Ferritin | ng/mL | laboratory |
| 24323-8 | Comprehensive metabolic panel (organizer) | — | panel |
| 2951-2, 2823-3, 2160-0, 98979-8, 2345-7, 1742-6, 1920-8, 6768-6, 1975-2, 1751-7 | Sodium, potassium, creatinine, eGFR (CKD-EPI 2021), glucose, ALT, AST, alkaline phosphatase, total bilirubin, albumin | mmol/L, mg/dL, mL/min/{1.73_m2}, U/L, g/dL | laboratory |
| 2039-6 | Carcinoembryonic antigen | ng/mL | laboratory |
| 3016-3 | TSH | m[IU]/L | laboratory |
| 3024-7 | Free T4 | ng/dL | laboratory |
| 55758-7 | PHQ-2 total score | {score} | survey |
| 44261-6 | PHQ-9 total score | {score} | survey |
| 70274-6 | GAD-7 total score | {score} | survey |

Reference ranges are typical adult female ranges chosen for the teaching record. Endoscopy, imaging, pathology, mismatch repair, genetic and tumor results are recorded in procedure and note text, not as coded observations.

## Procedures, immunizations, and encounter types

- Colonoscopy and biopsy of colon: SNOMED CT 446745002. MRI of pelvis: 2690005 (staging and two restagings). CT of thorax, abdomen and pelvis with contrast: 433761009 (staging and final restaging). Multidisciplinary care conference: 384682003. Genetic counseling: 79841006. Flexible fiberoptic sigmoidoscopy: 44441009 (two restagings). Plain X-ray of chest: 399208008. Advance care planning: 713603004.
- Encounter types: SNOMED CT 390906007 (follow-up encounter) for the four focused chronic-care visits, 185345009 (encounter for symptom) for the sick visit, and 86013001 (periodic reevaluation and management of healthy individual) for the preventive visit. The services are named in plain text as CPT 99396 and 99497; CPT is not used as a coded value.
- Immunizations: CVX 115 (Tdap, history) and 189 (HepB-CpG, two doses).
- No known allergy: SNOMED CT 716186003.

## Vital signs

The seven visits use LOINC 8302-2, 29463-7, 39156-5, 8480-6, 8462-4, 8867-4, 9279-1, 8310-5, and 59408-5 with UCUM units.

## Review note

Codes were checked against the public terminology server and NLM RxNav on November 5, 2026. They do not imply that Babe Didrikson Zaharias received these diagnoses, tests, or medications during her lifetime.
