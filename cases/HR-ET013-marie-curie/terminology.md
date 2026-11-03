# Terminology — Marie Curie

> **SYNTHETIC RECORD, NOT A REAL MEDICAL RECORD**

## Diagnoses

| Use | System | Code | Display | Evidence |
|---|---|---|---|---|
| Active problem | ICD-10-CM FY2026 | D61.2 | Aplastic anemia due to other external agents | S; linked to the documented 1934 diagnosis; radiation cause R |
| Active problem | ICD-10-CM FY2026 | Z57.1 | Occupational exposure to radiation | S; linked to documented radium and X-ray work |
| Active problem | ICD-10-CM FY2026 | H26.491 | Other secondary cataract, right eye | S; linked to the documented cataracts and operations |
| Active problem | ICD-10-CM FY2026 | L58.1 | Chronic radiodermatitis | S; linked to documented finger burns |

## Medications (RxNorm)

| Code | Display |
|---|---|
| 241834 | cyclosporine, modified 100 MG Oral Capsule |
| 884617 | eltrombopag 75 MG Oral Tablet |
| 197311 | acyclovir 400 MG Oral Tablet |

Horse antithymocyte globulin was given by hematology as an infusion and is described in the care plan, not coded as an outpatient medication.

## Results (LOINC 2.81)

| Code | Measure | Unit | Category |
|---|---|---|---|
| 58410-2 | CBC panel (organizer) | — | panel |
| 718-7, 6690-2, 751-8, 777-3, 787-2 | Hemoglobin, white blood cells, absolute neutrophils, platelets, MCV | g/dL, 10\*3/uL, fL | laboratory |
| 60474-4 | Absolute reticulocyte count | 10\*3/uL | laboratory |
| 2132-9, 2284-8, 2276-4 | Vitamin B12, folate, ferritin | pg/mL, ng/mL | laboratory |
| 2532-0, 1975-2, 1742-6 | LDH, total bilirubin, ALT | U/L, mg/dL | laboratory |
| 51990-0 | Basic metabolic panel (organizer) | — | panel |
| 2951-2, 2823-3, 2160-0, 98979-8, 2345-7 | Sodium, potassium, creatinine, eGFR (CKD-EPI 2021), glucose | mmol/L, mg/dL, mL/min/{1.73_m2} | laboratory |
| 55758-7 | PHQ-2 total score | {score} | survey |

Reference ranges are typical adult female ranges chosen for the teaching record; interpretation flags follow them, and validation checks that every flag agrees with its range. Visual acuity is reported in the eye examination procedure text because LOINC acuity codes take Snellen fractions, not numbers.

## Procedures, immunizations, and family history

- Transfusion of red blood cells: SNOMED CT 116863004.
- Bone marrow biopsy, needle or trocar: SNOMED CT 56241004.
- Comprehensive eye examination: SNOMED CT 78831002.
- YAG laser posterior capsulotomy: SNOMED CT 309556000.
- Immunizations: CVX 140 (influenza), 216 (PCV20), and 115 (Tdap).
- No known allergy: SNOMED CT 716186003.
- Family relationships: HL7 RoleCode MTH (mother) and SIS (sister).

## Vital signs

The four visits use LOINC 8302-2, 29463-7, 39156-5, 8480-6, 8462-4, 8867-4, 9279-1, 8310-5, and 59408-5 with UCUM units.

## Review note

Codes were checked against the public terminology server and NLM RxNav on November 2, 2026. They do not imply that Curie received these diagnoses, tests, or medications during her lifetime.
