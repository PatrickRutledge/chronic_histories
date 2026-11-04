# Terminology — Albert Einstein

> **SYNTHETIC RECORD, NOT A REAL MEDICAL RECORD**

## Diagnoses

| Use | System | Code | Display | Evidence |
|---|---|---|---|---|
| Active problem | ICD-10-CM FY2026 | I71.43 | Infrarenal abdominal aortic aneurysm, without rupture | S; linked to the documented aneurysm found and wrapped at his 1948 operation |
| Active problem | ICD-10-CM FY2026 | I10 | Essential (primary) hypertension | S |
| Active problem | ICD-10-CM FY2026 | F17.290 | Nicotine dependence, other tobacco product, uncomplicated | S; linked to his documented pipe smoking |
| Active problem (from the four-week visit) | ICD-10-CM FY2026 | I70.0 | Atherosclerosis of aorta | S; found on the baseline CT angiography |
| Resolved problem (sick visit) | ICD-10-CM FY2026 | S39.012A | Strain of muscle, fascia and tendon of lower back, initial encounter | S |

The retrospective autism suggestion is recorded only as an R claim and is not coded.

## Medications (RxNorm)

| Code | Display |
|---|---|
| 197361 | amlodipine 5 MG Oral Tablet |
| 979492 | losartan potassium 50 MG Oral Tablet (first four weeks) |
| 979480 | losartan potassium 100 MG Oral Tablet (from the four-week visit) |
| 617311 | atorvastatin 40 MG Oral Tablet |
| 308416 | aspirin 81 MG Delayed Release Oral Tablet (from the four-week visit) |
| 198029 | 24 HR nicotine 0.583 MG/HR Transdermal System (14 mg/24 h, to the three-month visit) |
| 198031 | 24 HR nicotine 0.292 MG/HR Transdermal System (7 mg/24 h, to the six-month visit) |
| 359817 | nicotine 2 MG Oral Lozenge (as needed, to the six-month visit) |

The nicotine patches use the route `topical`, because the schema has no transdermal route.

## Results (LOINC 2.81)

| Code | Measure | Unit | Category |
|---|---|---|---|
| 18010-9 | Aorta diameter by ultrasound (index, sick, and six-month visits) | cm | imaging |
| 718-7, 6690-2, 777-3 | Hemoglobin, white blood cells, platelets | g/dL, 10*3/uL | laboratory |
| 51990-0 | Basic metabolic panel (organizer) | — | panel |
| 2951-2, 2823-3, 2160-0, 98979-8, 2345-7, 17861-6 | Sodium, potassium, creatinine, eGFR (CKD-EPI 2021), glucose, calcium | mmol/L, mg/dL, mL/min/{1.73_m2} | laboratory |
| 2093-3, 2085-9, 13457-7, 2571-8 | Total cholesterol, HDL cholesterol, LDL cholesterol (calculated), triglycerides | mg/dL | laboratory |
| 4548-4 | HbA1c | % | laboratory |
| 9318-7 | Urine albumin-to-creatinine ratio | mg/g{creat} | laboratory |
| 1742-6 | ALT | U/L | laboratory |
| 55758-7 | PHQ-2 total score (wellness visit) | {score} | survey |
| 75626-2 | AUDIT-C total score (wellness visit) | {score} | survey |

Reference ranges are typical adult male ranges chosen for the teaching record; the aortic diameter uses an upper limit of 3.0 cm, the usual definition of an aneurysm. The CT outer-wall diameter (5.2 cm), the ECG, the popliteal duplex, and the ankle-brachial index are recorded in the procedure display or in narrative. The lipid results are not grouped under a panel code, because the LOINC lipid panel names include a year that the true-date variant cannot shift.

## Procedures, immunizations, and family history

- CT angiography of the abdominal aorta: SNOMED CT 444968003.
- Smoking cessation counseling: SNOMED CT 225323000 (smoking cessation education).
- Encounter types: SNOMED CT 390906007 (follow-up encounter) for the three focused chronic-care visits, 185345009 (encounter for symptom) for the sick visit, and 281038008 (geriatric annual health check) for the annual wellness visit. The wellness visit is named in plain text as HCPCS G0439; it is not used as a coded value.
- Immunizations: CVX 197 (influenza, high-dose, 2025-2026 season), 216 (PCV20), and 187 (recombinant zoster, dose 1).
- No known allergy: SNOMED CT 716186003.
- Family history: none recorded; no fetched source documents a relative’s health in a way the case uses.

## Vital signs

The six visits use LOINC 8302-2, 29463-7, 39156-5, 8480-6, 8462-4, 8867-4, 9279-1, 8310-5, and 59408-5 with UCUM units.

## Review note

Codes were checked against the public terminology server and NLM RxNav on November 4, 2026. They do not imply that Einstein received these diagnoses, tests, or medications during his lifetime.
