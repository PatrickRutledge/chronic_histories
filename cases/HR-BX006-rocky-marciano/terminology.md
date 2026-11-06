# Terminology — Rocky Marciano

> **SYNTHETIC RECORD, NOT A REAL MEDICAL RECORD**

## Diagnoses

| Use | System | Code | Display | Evidence |
|---|---|---|---|---|
| Active problem | ICD-10-CM FY2026 | M54.59 | Other low back pain | S; linked to his documented back injuries |
| Active problem | ICD-10-CM FY2026 | M51.16 | Intervertebral disc disorders with radiculopathy, lumbar region | S; linked to his documented ruptured disc |
| Active problem | ICD-10-CM FY2026 | M18.32 | Unilateral post-traumatic osteoarthritis of first carpometacarpal joint, left hand | S; linked to his documented broken hands |
| Active problem | ICD-10-CM FY2026 | E66.3 | Overweight | S; linked to his documented training and retirement |
| Intake finding, resolved at twelve weeks | ICD-10-CM FY2026 | R03.0 | Elevated blood-pressure reading, without diagnosis of hypertension | S |
| Risk-factor problem | ICD-10-CM FY2026 | Z87.828 | Personal history of other (healed) physical injury and trauma | S; repetitive head impacts from his documented career |
| Sick visit, resolved | ICD-10-CM FY2026 | R10.13 | Epigastric pain | S |

No code is used for anxiety, a phobia, hoarding, traumatic brain injury or traumatic encephalopathy syndrome; see the editorial resolutions in sources.md.

## Medications (RxNorm)

| Code | Display |
|---|---|
| 198014 | naproxen 500 MG Oral Tablet (stopped at the sick visit) |
| 855633 | diclofenac sodium 0.01 MG/MG Topical Gel (1% gel on the left thumb) |
| 198051 | omeprazole 20 MG Delayed Release Oral Capsule (four weeks) |

## Results (LOINC 2.81)

| Code | Measure | Unit | Category |
|---|---|---|---|
| 2951-2, 2823-3, 2160-0, 98979-8, 2345-7 (panel 51990-0) | Sodium, potassium, creatinine, eGFR (CKD-EPI 2021), glucose | mmol/L, mg/dL, mL/min/{1.73_m2} | laboratory |
| 718-7 | Hemoglobin | g/dL | laboratory |
| 1742-6 | ALT | U/L | laboratory |
| 4548-4 | HbA1c | % | laboratory |
| 2093-3, 2085-9, 13457-7, 2571-8 | Total cholesterol, HDL, LDL (calculated), triglycerides | mg/dL | laboratory |
| 83173-5, 83174-3 | Grip strength, left and right hand (dynamometer) | kg | survey |
| 44261-6, 55758-7 | PHQ-9, PHQ-2 | {score} | survey |
| 70274-6 | GAD-7 | {score} | survey |
| 75626-2 | AUDIT-C | {score} | survey |
| 72172-0 | MoCA | {score} | survey |
| 77859-7 | PROMIS sleep-related impairment T-score | {score} | survey |
| 72514-3 | Pain severity, 0 to 10 verbal numeric rating (average low back pain) | {score} | survey |
| 75893-8 | Pain severity in the past week, 0 to 10 (left thumb base) | {score} | survey |
| 97909-6 | Oswestry Disability Index | {score} | survey |

Reference ranges are typical adult ranges chosen for the teaching record; interpretation flags follow them. The FIHOA hand function score, the home blood pressure averages, the outside MRI report, the X-ray findings and the HIV, hepatitis and Helicobacter pylori results are recorded as narrative.

## Procedures, immunizations, and encounter types

- Hand X-ray: SNOMED CT 713027003. Thumb orthosis: 228595003 (provision of orthosis). Physical therapy evaluation: 410158009.
- Advance care planning: SNOMED CT 713603004.
- Encounter types: SNOMED CT 390906007 (follow-up encounter) for the three focused chronic-care visits, 86013001 (periodic reevaluation and management of healthy individual) for the preventive visit, and 185345009 (encounter for symptom) for the sick visit. The preventive service is named in plain text as CPT 99395; CPT is not used as a coded value.
- Immunizations: CVX 189 (HepB-CpG, two doses) and 140 (influenza, split virus, trivalent, preservative free).
- No known allergy: SNOMED CT 716186003.

## Vital signs

The six visits use LOINC 8302-2, 29463-7, 39156-5, 8480-6, 8462-4, 8867-4, 9279-1, 8310-5, and 59408-5 with UCUM units.

## Review note

Codes were checked against the public terminology server and NLM RxNav on November 5, 2026. They do not imply that Marciano received these diagnoses, tests, or medications during his lifetime.
