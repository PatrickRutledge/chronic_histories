# Terminology — Mumtaz Mahal

> **SYNTHETIC RECORD, NOT A REAL MEDICAL RECORD**

## Diagnoses

| Use | System | Code | Display | Evidence |
|---|---|---|---|---|
| Active problem (both_with_link) | ICD-10-CM FY2026 | O09.529 | Supervision of elderly multigravida, unspecified trimester | S; linked to her documented fourteenth pregnancy |
| Active problem (both_with_link) | ICD-10-CM FY2026 | O09.40 | Supervision of pregnancy with grand multiparity, unspecified trimester | S; linked to her documented thirteen earlier births |
| Active problem | ICD-10-CM FY2026 | O09.899 | Supervision of other high risk pregnancies, unspecified trimester | S; short interpregnancy interval, linked to the documented dates of her last two births |
| Active problem | ICD-10-CM FY2026 | O99.019 | Anemia complicating pregnancy, unspecified trimester | S; iron deficiency anemia |
| Resolved problem | ICD-10-CM FY2026 | O23.12 | Infections of bladder in pregnancy, second trimester | S; acute cystitis at the March sick visit |

No postpartum hemorrhage code is used; postpartum hemorrhage is a historical interpretation and a planned-for risk only.

## Medications (RxNorm)

| Code | Display |
|---|---|
| 198640 | folic acid 0.4 MG Oral Tablet |
| 310325 | ferrous sulfate 325 MG Oral Tablet (every other day; stopped after four weeks) |
| 308416 | aspirin 81 MG Delayed Release Oral Tablet |
| 1435169 | 15 ML ferric carboxymaltose 50 MG/ML Injection (750 mg, two infusions) |
| 1648755 | nitrofurantoin, macrocrystals 25 MG / nitrofurantoin, monohydrate 75 MG Oral Capsule |

## Results (LOINC 2.81)

| Code | Measure | Unit | Category |
|---|---|---|---|
| 99046-5 | EPDS total score | {score} | survey |
| 718-7, 787-2, 6690-2, 777-3 | Hemoglobin (trimester ranges), MCV, white cells, platelets | g/dL, fL, 10*3/uL | laboratory |
| 2276-4 | Ferritin | ng/mL | laboratory |
| 4548-4 | Hemoglobin A1c | % | laboratory |
| 1504-0 | Glucose 1 hour after a 50 g oral glucose challenge | mg/dL | laboratory |
| 11957-8 | Fetal crown-rump length by ultrasound | mm | imaging |
| 33069-6 | Fetal nuchal translucency by ultrasound | mm | imaging |
| 11727-5 | Estimated fetal weight by ultrasound | g | imaging |

Interpretation flags follow the stated ranges. The prenatal panel (blood group and antibody screen, rubella, hepatitis B surface antigen, HIV, syphilis, hepatitis C), urine cultures and dipsticks, hemoglobin electrophoresis, and cell-free DNA screening are qualitative and reported in the note text, not as coded observations.

## Procedures, immunizations, and other codes

- Procedures: SNOMED CT 408815001 (Ultrasound scan for fetal nuchal translucency), 271442007 (Fetal anatomy study), and 268445003 (Ultrasound scan - obstetric).
- Immunizations: CVX 140 (influenza, trivalent) and 115 (Tdap).
- Family history relationships: HL7 v3 RoleCode DAU (natural daughter) and SON (natural son).
- No known allergy: SNOMED CT 716186003.
- Encounter types: SNOMED CT 390906007 (follow-up encounter) for the four focused prenatal visits and 185345009 (encounter for symptom) for the March sick visit. No preventive visit code is used. Services are named in plain text only; HCPCS and CPT are not used as coded values.

## Vital signs

The six visits use LOINC 8302-2, 29463-7, 39156-5, 8480-6, 8462-4, 8867-4, 9279-1, 8310-5, and 59408-5 with UCUM units.

## Review note

Codes were checked against the public terminology server and NLM RxNav on November 5, 2026. They do not imply that Mumtaz Mahal received these diagnoses, tests, or medications during her lifetime.
