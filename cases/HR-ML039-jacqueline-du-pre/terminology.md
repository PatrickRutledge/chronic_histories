# Terminology — Jacqueline du Pré

> **SYNTHETIC RECORD, NOT A REAL MEDICAL RECORD**

## Diagnoses

| Use | System | Code | Display | Evidence |
|---|---|---|---|---|
| Presenting problem; resolved (superseded) at the diagnosis visit | ICD-10-CM FY2026 | R20.2 | Paresthesia of skin | S; linked to her documented loss of sensation in her fingers |
| Problem recorded at the diagnosis visit (both_with_link) | ICD-10-CM FY2026 | G35.A | Relapsing-remitting multiple sclerosis | S; linked to her documented diagnosis |
| Problem recorded at the diagnosis visit | ICD-10-CM FY2026 | E55.9 | Vitamin D deficiency, unspecified | S |
| Problem added at the sick visit; resolved | ICD-10-CM FY2026 | N30.00 | Acute cystitis without hematuria | S |

## Medications (RxNorm)

| Code | Display |
|---|---|
| 1743726 | methylprednisolone 1000 MG Injection (1 g daily for 3 days) |
| 1092380 | cholecalciferol 0.1 MG Oral Capsule (4000 units daily) |
| 1876380 | 10 ML ocrelizumab 30 MG/ML Injection (300 mg on days 1 and 15, then 600 mg every six months) |
| 1648759 | nitrofurantoin, macrocrystals 100 MG Oral Capsule (5 days, sick visit) |

Infusion premedication (methylprednisolone 100 mg, an antihistamine and acetaminophen) is named in the notes and not recorded as separate medications.

## Results (LOINC 2.81)

| Code | Measure | Unit | Category |
|---|---|---|---|
| 58410-2 | CBC panel (organizer) | — | panel |
| 718-7, 6690-2, 731-0, 777-3 | Hemoglobin, white cell count, lymphocytes, platelets | g/dL, 10*3/uL | laboratory |
| 24323-8 | Comprehensive metabolic panel (organizer) | — | panel |
| 2951-2, 2823-3, 2160-0, 98979-8, 2345-7, 1742-6, 1920-8 | Sodium, potassium, creatinine, eGFR (CKD-EPI 2021), glucose, ALT, AST | mmol/L, mg/dL, mL/min/{1.73_m2}, U/L | laboratory |
| 2132-9 | Vitamin B12 | pg/mL | laboratory |
| 3016-3 | TSH | m[IU]/L | laboratory |
| 62292-8 | 25-hydroxyvitamin D | ng/mL | laboratory |
| 2465-3, 2472-9 | IgG, IgM | mg/dL | laboratory |
| 8116-6 | CD19 B cells | /uL | laboratory |
| 1988-5 | C-reactive protein | mg/L | laboratory |
| 16935-9 | Hepatitis B surface antibody | m[IU]/mL | laboratory |
| 83157-8, 83156-0 | Nine-hole pegboard dexterity test time, right and left hand (NIH Toolbox) | s | survey |
| 55758-7 | PHQ-2 total score | {score} | survey |
| 44261-6 | PHQ-9 total score | {score} | survey |
| 70274-6 | GAD-7 total score | {score} | survey |

Reference ranges are typical adult female ranges chosen for the teaching record. MRI, cerebrospinal fluid, antibody (aquaporin-4, JCV), serology, urine and pregnancy results, and EDSS scores are recorded in procedure and note text, not as coded observations.

## Procedures, immunizations, and encounter types

- MRI of brain with contrast: SNOMED CT 16327691000119101 (diagnosis and re-baseline). MRI of cervical and thoracic spine with contrast: 702608007. Lumbar puncture: 277762005. Occupational therapy: 84478008. Advance care planning: 713603004.
- Encounter types: SNOMED CT 390906007 (follow-up encounter) for the four focused chronic-care visits, 185345009 (encounter for symptom) for the sick visit, and 86013001 (periodic reevaluation and management of healthy individual) for the preventive visit. The services are named in plain text as CPT 99395 and 99497; CPT is not used as a coded value.
- Immunizations: CVX 115 (Tdap, history), 216 (PCV20), 187 (recombinant zoster, two doses), 189 (HepB-CpG, two doses), 140 (influenza, inactivated) and 309 (COVID-19 mRNA).
- No known allergy: SNOMED CT 716186003.

## Vital signs

The seven visits use LOINC 8302-2, 29463-7, 39156-5, 8480-6, 8462-4, 8867-4, 9279-1, 8310-5, and 59408-5 with UCUM units.

## Review note

Codes were checked against the public terminology server and NLM RxNav on November 5, 2026. They do not imply that Jacqueline du Pré received these diagnoses, tests, or medications during her lifetime.
