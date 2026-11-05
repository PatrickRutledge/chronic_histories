# Terminology — Charlotte Brontë

> **SYNTHETIC RECORD, NOT A REAL MEDICAL RECORD**

## Diagnoses

| Use | System | Code | Display | Evidence |
|---|---|---|---|---|
| Active problem | ICD-10-CM FY2026 | O09.519 | Supervision of elderly primigravida, unspecified trimester | S; linked to the documented report of her pregnancy |
| Resolved presenting problem | ICD-10-CM FY2026 | O21.9 | Vomiting of pregnancy, unspecified | S; superseded by hyperemesis gravidarum at the January sick visit |
| Active problem (both_with_link) | ICD-10-CM FY2026 | O21.1 | Hyperemesis gravidarum with metabolic disturbance | S; linked to her documented nausea and the retrospective hyperemesis claims |
| Resolved problem | ICD-10-CM FY2026 | O99.281 | Endocrine, nutritional and metabolic diseases complicating pregnancy, first trimester | S; gestational transient thyrotoxicosis, resolved at the March visit |

No tuberculosis, typhoid, or Addison disease code is used; those are historical interpretations only.

## Medications (RxNorm)

| Code | Display |
|---|---|
| 198640 | folic acid 0.4 MG Oral Tablet |
| 1375948 | doxylamine succinate 10 MG / pyridoxine hydrochloride 10 MG Delayed Release Oral Tablet (two at bedtime, then four a day) |
| 311666 | metoclopramide 10 MG Oral Tablet |
| 637551 | 1000 ML potassium chloride 0.02 MEQ/ML / sodium chloride 9 MG/ML Injection |
| 313324 | thiamine hydrochloride 100 MG/ML Injectable Solution |
| 283504 | ondansetron 2 MG/ML Injectable Solution |
| 854255 | enoxaparin sodium 100 MG/ML Injectable Solution (20 mg dose; no 20 mg prefilled syringe is current in RxNorm) |
| 1658259 | 50 ML magnesium sulfate 40 MG/ML Injection |
| 104894 | ondansetron 4 MG Disintegrating Oral Tablet (scheduled, then as needed) |
| 313323 | thiamine 100 MG Oral Tablet |
| 308416 | aspirin 81 MG Delayed Release Oral Tablet |

## Results (LOINC 2.81)

| Code | Measure | Unit | Category |
|---|---|---|---|
| 44261-6 | PHQ-9 | {score} | survey |
| 99046-5 | EPDS total score | {score} | survey |
| 718-7, 6690-2, 777-3 | Hemoglobin, white cells, platelets | g/dL, 10*3/uL | laboratory |
| 51990-0 | Basic metabolic panel (organizer) | — | panel |
| 2951-2, 2823-3, 2075-0, 2028-9, 3094-0, 2160-0, 2345-7 | Sodium, potassium, chloride, bicarbonate, BUN, creatinine, glucose | mmol/L, mg/dL | laboratory |
| 19123-9, 2777-1 | Magnesium, phosphate | mg/dL | laboratory |
| 1742-6, 1920-8 | ALT, AST | U/L | laboratory |
| 3016-3, 3024-7 | TSH (first- and second-trimester ranges), free T4 | m[IU]/L, ng/dL | laboratory |
| 5797-6 | Urine ketones (test strip) | mg/dL | laboratory |
| 11957-8 | Fetal crown-rump length by ultrasound | mm | imaging |
| 33069-6 | Fetal nuchal translucency by ultrasound | mm | imaging |

Interpretation flags follow the stated ranges. No LOINC code for the PUQE or PUQE-24 was found on the public terminology server, so its scores are kept in the note text and monitoring tables. The prenatal panel (blood group and antibody screen, rubella, hepatitis B surface antigen, HIV, syphilis, hepatitis C, urine culture), the interferon-gamma release assay, and cell-free DNA screening are qualitative and are reported in the note text, not as coded observations.

## Procedures, immunizations, and other codes

- Procedures: SNOMED CT 268445003 (Ultrasound scan - obstetric), 29303009 (Electrocardiographic procedure), and 408815001 (Ultrasound scan for fetal nuchal translucency).
- Immunizations: CVX 140 (influenza, trivalent) and 115 (Tdap).
- Family history relationships: HL7 v3 RoleCode MTH (mother), SIS (sister), and BRO (brother).
- No known allergy: SNOMED CT 716186003.
- Encounter types: SNOMED CT 390906007 (follow-up encounter) for the four focused prenatal visits and 185345009 (encounter for symptom) for the January sick visit. No preventive visit code is used. Services are named in plain text only; HCPCS and CPT are not used as coded values.

## Vital signs

The six visits use LOINC 8302-2, 29463-7, 39156-5, 8480-6, 8462-4, 8867-4, 9279-1, 8310-5, and 59408-5 with UCUM units.

## Review note

Codes were checked against the public terminology server and NLM RxNav on November 4, 2026. They do not imply that Charlotte Brontë received these diagnoses, tests, or medications during her lifetime.
