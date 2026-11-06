# Terminology — Cleopatra

> **SYNTHETIC RECORD, NOT A REAL MEDICAL RECORD**

## Diagnoses

| Use | System | Code | Display | Evidence |
|---|---|---|---|---|
| Resolved presenting problem (both_with_link) | ICD-10-CM FY2026 | O26.841 | Uterine size-date discrepancy, first trimester | S; uterus large for dates at 9 weeks, resolved at the 11-week scan |
| Resolved problem | ICD-10-CM FY2026 | O21.9 | Vomiting of pregnancy, unspecified | S; nausea and vomiting, resolved by 19 weeks |
| Active problem | ICD-10-CM FY2026 | O99.011 | Anemia complicating pregnancy, first trimester | S; iron deficiency anemia |
| Active problem (both_with_link), recorded at the 11-week visit | ICD-10-CM FY2026 | O30.041 | Twin pregnancy, dichorionic/diamniotic, first trimester | S; linked to the documented twins of 40 BC |
| Resolved problem | ICD-10-CM FY2026 | O98.512 | Other viral diseases complicating pregnancy, second trimester | S; viral gastroenteritis at the June sick visit |

No code is given to any historical condition; none is documented.

## Medications (RxNorm)

| Code | Display |
|---|---|
| 198640 | folic acid 0.4 MG Oral Tablet (the folic acid in her prenatal vitamin) |
| 310325 | ferrous sulfate 325 MG Oral Tablet (every other day) |
| 1375948 | doxylamine succinate 10 MG / pyridoxine hydrochloride 10 MG Delayed Release Oral Tablet (stopped at 19 weeks) |
| 308416 | aspirin 81 MG Delayed Release Oral Tablet (from 12 weeks) |

## Results (LOINC 2.81)

| Code | Measure | Unit | Category |
|---|---|---|---|
| 718-7, 787-2, 6690-2, 777-3 | Hemoglobin (trimester ranges), MCV, white cells, platelets | g/dL, fL, 10*3/uL | laboratory |
| 2276-4 | Ferritin | ng/mL | laboratory |
| 21198-7 | Choriogonadotropin beta subunit (quantitative hCG) | m[IU]/mL | laboratory |
| 1504-0 | Glucose 1 hour after a 50 g oral glucose challenge | mg/dL | laboratory |
| 2951-2, 2823-3, 2160-0 | Sodium, potassium, creatinine (basic metabolic panel 51990-0; pregnancy ranges) | mmol/L, mg/dL | laboratory |
| 11957-8 | Fetal crown-rump length by ultrasound (each twin) | mm | imaging |
| 33069-6 | Fetal nuchal translucency by ultrasound (each twin) | mm | imaging |
| 11727-5 | Estimated fetal weight by ultrasound (each twin) | g | imaging |
| 11961-0 | Cervical length by ultrasound | mm | imaging |
| 99046-5 | EPDS total score | {score} | survey |

Interpretation flags follow the stated ranges. The prenatal panel, cell-free DNA screening, urine cultures and dipsticks, PUQE scores, and tocodynamometry are reported in note text, not as coded observations.

## Procedures, immunizations, and other codes

- Procedures: SNOMED CT 408815001 (Ultrasound scan for fetal nuchal translucency), 271442007 (Fetal anatomy study), 785805004 (Measurement of cervical length using transvaginal ultrasonography), and 268445003 (Ultrasound scan - obstetric; two growth scans).
- Immunizations: CVX 140 (influenza, trivalent) and 115 (Tdap).
- No known allergy: SNOMED CT 716186003.
- Encounter types: SNOMED CT 390906007 (follow-up encounter) for the four focused prenatal visits and 185345009 (encounter for symptom) for the June sick visit. No preventive visit code is used. Services are named in plain text only; HCPCS and CPT are not used as coded values.

## Vital signs

The six visits use LOINC 8302-2, 29463-7, 39156-5, 8480-6, 8462-4, 8867-4, 9279-1, 8310-5, and 59408-5 with UCUM units.

## Review note

Codes were checked against the public terminology server and NLM RxNav on November 6, 2026. They do not imply that Cleopatra received these diagnoses, tests, or medications during her lifetime.
