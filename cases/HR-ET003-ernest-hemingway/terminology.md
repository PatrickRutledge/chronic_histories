# Terminology — Ernest Hemingway

> **SYNTHETIC RECORD, NOT A REAL MEDICAL RECORD**

## Diagnoses

| Use | System | Code | Display | Evidence |
|---|---|---|---|---|
| Active problem | ICD-10-CM FY2026 | F10.20 | Alcohol dependence, uncomplicated | S; DSM-5-TR severe alcohol use disorder; linked to his documented heavy drinking |
| Presenting finding, resolved at the two-week visit | ICD-10-CM FY2026 | R79.0 | Abnormal level of blood mineral | S |
| Active problem from the two-week visit | ICD-10-CM FY2026 | E83.110 | Hereditary hemochromatosis | S; the historical diagnosis is disputed |
| Active problem | ICD-10-CM FY2026 | F32.1 | Major depressive disorder, single episode, moderate | S; not a claim about his real mood |
| Active problem | ICD-10-CM FY2026 | I10 | Essential (primary) hypertension | S |
| Active problem | ICD-10-CM FY2026 | F07.81 | Postconcussional syndrome | S; linked to his documented head injuries |
| Active problem | ICD-10-CM FY2026 | R73.03 | Prediabetes | S |
| Sick visit, resolved | ICD-10-CM FY2026 | L03.113 | Cellulitis of right upper limb | S |

No bipolar disorder, PTSD or chronic traumatic encephalopathy code is used; see the editorial resolutions in sources.md.

## Medications (RxNorm)

| Code | Display |
|---|---|
| 1483744 | naltrexone hydrochloride 50 MG Oral Tablet |
| 313323 | thiamine 100 MG Oral Tablet (intake to six months) |
| 312941 | sertraline 50 MG Oral Tablet (intake to six weeks) |
| 312938 | sertraline 100 MG Oral Tablet (from six weeks) |
| 197361 | amlodipine 5 MG Oral Tablet (intake to fourteen weeks) |
| 308135 | amlodipine 10 MG Oral Tablet (from fourteen weeks) |
| 309114 | cephalexin 500 MG Oral Capsule (sick visit) |
| 1649988 | doxycycline hyclate 100 MG Oral Capsule (sick visit) |
| 198440 | acetaminophen 500 MG Oral Tablet (sick visit) |

## Results (LOINC 2.81)

| Code | Measure | Unit | Category |
|---|---|---|---|
| 718-7, 787-2, 777-3 | Hemoglobin, MCV, platelets | g/dL, fL, 10*3/uL | laboratory |
| 2951-2, 2823-3, 2160-0, 98979-8, 2345-7 | Sodium, potassium, creatinine, eGFR (CKD-EPI 2021), glucose | mmol/L, mg/dL, mL/min/{1.73_m2} | laboratory |
| 1920-8, 1742-6, 2324-2, 1975-2, 1751-7 | AST, ALT, GGT, total bilirubin, albumin | U/L, mg/dL, g/dL | laboratory |
| 2498-4, 2502-3, 2276-4 | Serum iron, transferrin saturation, ferritin | ug/dL, %, ng/mL | laboratory |
| 4548-4 | HbA1c | % | laboratory |
| 2093-3, 13457-7, 2085-9, 2571-8 | Total, LDL and HDL cholesterol, triglycerides | mg/dL | laboratory |
| 3016-3, 2132-9 | TSH, vitamin B12 | m[IU]/L, pg/mL | laboratory |
| 9318-7 | Urine albumin-to-creatinine ratio | mg/g | laboratory |
| 77615-3 | Liver stiffness by transient elastography | kPa | imaging |
| 75624-7, 75626-2 | AUDIT and AUDIT-C total scores | {score} | survey |
| 44261-6 | PHQ-9 total score | {score} | survey |
| 72172-0 | MoCA total score | {score} | survey |

Reference ranges are typical adult male ranges chosen for the teaching record; interpretation flags follow them. The HFE genotype, the controlled attenuation parameter, the MRI liver iron concentration and elastography, the ECG, the echocardiogram, the C-SSRS screen, the Mood Disorder Questionnaire and the HIV, hepatitis B and hepatitis C screens are recorded as narrative.

## Procedures, immunizations, and encounter types

- Procedures (SNOMED CT): 29303009 (Electrocardiographic procedure), 441491005 (Ultrasound elastography of liver), 409901000119107 (MRI of liver without contrast), 127606004 (Therapeutic phlebotomy), 40701008 (Echocardiography) and 713603004 (Advance care planning).
- Encounter types: SNOMED CT 390906007 (follow-up encounter) for the four focused chronic-care visits, 86013001 (periodic reevaluation and management of healthy individual) for the preventive visit, and 185345009 (encounter for symptom) for the sick visit. The services are named in plain text as CPT 99396 and 99497; CPT is not used as a coded value.
- Immunizations: CVX 115 (Tdap), 216 (PCV20), 187 (zoster recombinant) and 104 (hepatitis A and hepatitis B).
- Family history relationship: HL7 RoleCode FTH (father).
- No known allergy: SNOMED CT 716186003.

## Vital signs

The seven visits use LOINC 8302-2, 29463-7, 39156-5, 8480-6, 8462-4, 8867-4, 9279-1, 8310-5, and 59408-5 with UCUM units.

## Review note

Codes were checked against the public terminology server and NLM RxNav on November 4, 2026. They do not imply that Hemingway received these diagnoses, tests, or medications during his lifetime.
