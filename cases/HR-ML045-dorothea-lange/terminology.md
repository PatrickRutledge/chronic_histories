# Terminology — Dorothea Lange

> **SYNTHETIC RECORD, NOT A REAL MEDICAL RECORD**

## Diagnoses

| Use | System | Code | Display | Evidence |
|---|---|---|---|---|
| Active problem (both, with link) | ICD-10-CM FY2026 | G14 | Postpolio syndrome | S; linked to the documented childhood polio (D) and her biographer's account of post-polio symptoms (R); recorded at the diagnosis visit on February 25 |
| Active problem | ICD-10-CM FY2026 | M81.8 | Other osteoporosis without current pathological fracture | S; right hip, disuse on the polio side; recorded February 25 |
| Active problem | ICD-10-CM FY2026 | K21.00 | Gastro-esophageal reflux disease with esophagitis, without bleeding | S; LA grade B on endoscopy; recorded May 18 |
| Active problem | ICD-10-CM FY2026 | K44.9 | Diaphragmatic hernia without obstruction or gangrene | S; small sliding hiatal hernia; recorded May 18 |
| Active problem | ICD-10-CM FY2026 | Z91.81 | History of falling | S |
| Active problem | ICD-10-CM FY2026 | Z87.11 | Personal history of peptic ulcer disease | S; linked to the documented ulcer surgery of the late 1940s (D) |
| Resolved problem (presenting concern) | ICD-10-CM FY2026 | M62.81 | Muscle weakness (generalized) | S; active at the index visit, resolved at the diagnosis visit on February 25 |
| Resolved problem (presenting concern) | ICD-10-CM FY2026 | R12 | Heartburn | S; active at the index visit, resolved at the endoscopy-results visit on May 18 |
| Resolved problem | ICD-10-CM FY2026 | T50.995A | Adverse effect of other drugs, medicaments and biological substances, initial encounter | S; acute-phase reaction after zoledronic acid at the April sick visit |

ICD-10-CM lists sequelae of poliomyelitis (B91) as excluded from G14, so B91 is not coded; the childhood polio appears in past medical history.

## Medications (RxNorm)

| Code | Display |
|---|---|
| 198440 | acetaminophen 500 MG Oral Tablet |
| 198051 | omeprazole 20 MG Delayed Release Oral Capsule (eight-week trial, then a healing course) |
| 199362 | cholecalciferol 0.025 MG Oral Tablet (1000 units; two daily) |
| 308907 | calcium carbonate 500 MG Chewable Tablet |
| 705824 | 100 ML zoledronic acid 0.05 MG/ML Injection (5 mg) |

## Results (LOINC 2.81)

| Code | Measure | Unit | Category |
|---|---|---|---|
| 44261-6 | PHQ-9 total score | {score} | survey |
| 55758-7 | PHQ-2 total score (preventive visit) | {score} | survey |
| 75626-2 | AUDIT-C total score (preventive visit) | {score} | survey |
| 72514-3 | Pain severity, 0 to 10 numeric rating | {score} | survey |
| 718-7, 6690-2, 777-3 | Hemoglobin, white cell count, platelets | g/dL, 10*3/uL | laboratory |
| 2951-2, 2823-3, 2160-0, 98979-8 | Sodium, potassium, creatinine, eGFR (CKD-EPI 2021) | mmol/L, mg/dL, mL/min/{1.73_m2} | laboratory |
| 2345-7, 4548-4 | Glucose, HbA1c | mg/dL, % | laboratory |
| 3016-3, 2132-9, 2157-6 | TSH, vitamin B12, creatine kinase | m[IU]/L, pg/mL, U/L | laboratory |
| 62292-8, 17861-6, 1751-7, 1742-6 | 25-hydroxyvitamin D, calcium, albumin, ALT | ng/mL, mg/dL, g/dL, U/L | laboratory |
| 4537-7, 1988-5 | ESR (Westergren), CRP | mm/h, mg/dL | laboratory |
| 2731-8, 6768-6, 2777-1, 19123-9 | Intact PTH, alkaline phosphatase, phosphate, magnesium | pg/mL, U/L, mg/dL | laboratory |
| 19870-5, 19872-1, 19926-5 | FVC, FVC percent predicted, FEV1/FVC | L, % | imaging (as in the other spirometry records) |
| 38267-1, 80947-5, 80948-3 | DXA lumbar spine, right femur, and left femur T-scores | {T-score} | imaging |

Reference ranges are typical adult female ranges chosen for the teaching record; interpretation flags follow them. Strength grades and Timed Up and Go times are given in note text.

## Procedures, immunizations, and encounters

- Nerve conduction study: SNOMED CT 51110005. Electromyography: 42803009. Bone density scan: 312681000. Spirometry: 127783003. Overnight pulse oximetry: 252568001. Physical therapy procedure: 91251008. Provision of orthosis: 228595003. Intravenous infusion: 14152002. Endoscopy and biopsy of upper gastrointestinal tract: 445982009.
- Immunizations: CVX 140 (influenza, trivalent, preservative free), 216 (PCV20), 187 (recombinant zoster), and 115 (Tdap).
- No known allergy: SNOMED CT 716186003.
- Encounter types: SNOMED CT 390906007 (follow-up encounter) for the four focused chronic-care visits, 185345009 (encounter for symptom) for the April sick visit, and 86013001 (periodic reevaluation and management of healthy individual) for the adult preventive visit. The services are named in plain text as CPT 99396 and CPT 99497; CPT is not used as a coded value.

## Vital signs

The seven visits use LOINC 8302-2, 29463-7, 39156-5, 8480-6, 8462-4, 8867-4, 9279-1, 8310-5, and 59408-5 with UCUM units.

## Review note

Codes were checked against the public terminology server and NLM RxNav on November 5, 2026. They do not imply that Lange received these diagnoses, tests, or medications during her lifetime.
