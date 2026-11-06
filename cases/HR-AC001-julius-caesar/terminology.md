# Terminology — Julius Caesar

> **SYNTHETIC RECORD, NOT A REAL MEDICAL RECORD**

## Diagnoses

| Use | System | Code | Display | Evidence |
|---|---|---|---|---|
| Resolved presenting problem (both_with_link) | ICD-10-CM FY2026 | R56.9 | Unspecified convulsions | S; recurrent transient loss of consciousness, resolved into a diagnosis at the second visit; linked to the documented falling attacks |
| Active problem | ICD-10-CM FY2026 | I10 | Essential (primary) hypertension | S |
| Active problem | ICD-10-CM FY2026 | E78.5 | Hyperlipidemia, unspecified | S |
| Active problem (both_with_link), recorded at the second visit | ICD-10-CM FY2026 | G40.209 | Localization-related (focal) (partial) symptomatic epilepsy and epileptic syndromes with complex partial seizures, not intractable, without status epilepticus | S; linked to the documented falling attacks and the retrospective epilepsy readings |
| Active problem (both_with_link), recorded at the second visit | ICD-10-CM FY2026 | I69.398 | Other sequelae of cerebral infarction | S; chronic cortical infarct as the seizure cause; linked to the retrospective cerebrovascular reading |
| Resolved problem | ICD-10-CM FY2026 | J06.9 | Acute upper respiratory infection, unspecified | S; the September sick visit |

No code is given to any historical diagnosis; epilepsy, transient ischemic attacks, and the other proposed causes stay retrospective interpretations (R).

## Medications (RxNorm)

| Code | Display |
|---|---|
| 314076 | lisinopril 10 MG Oral Tablet |
| 311289 | levetiracetam 500 MG Oral Tablet |
| 259255 | atorvastatin 80 MG Oral Tablet |
| 308416 | aspirin 81 MG Delayed Release Oral Tablet |
| 197361 | amlodipine 5 MG Oral Tablet |
| 198440 | acetaminophen 500 MG Oral Tablet (as needed during the cold) |

## Results (LOINC 2.81)

| Code | Measure | Unit | Category |
|---|---|---|---|
| 718-7, 6690-2, 777-3 | Hemoglobin, white cells, platelets | g/dL, 10*3/uL | laboratory |
| 2951-2, 2823-3, 2160-0, 98979-8, 2345-7, 17861-6 | Sodium, potassium, creatinine, eGFR (CKD-EPI 2021), glucose, calcium (basic metabolic panel 51990-0) | mmol/L, mg/dL, mL/min/{1.73_m2} | laboratory |
| 1742-6 | ALT | U/L | laboratory |
| 4548-4 | Hemoglobin A1c | % | laboratory |
| 3016-3 | TSH | m[IU]/L | laboratory |
| 2093-3, 2085-9, 13457-7, 2571-8 | Total, HDL, and calculated LDL cholesterol; triglycerides | mg/dL | laboratory |
| 44261-6 | PHQ-9 total score | {score} | survey |
| 55758-7 | PHQ-2 total score | {score} | survey |
| 75626-2 | AUDIT-C total score | {score} | survey |
| 72172-0 | MoCA total score | {score} | survey |

Interpretation flags follow the stated ranges. The rapid COVID-19 and influenza antigen tests and the hepatitis B, hepatitis C, and HIV screening are qualitative and reported in note text.

## Procedures, immunizations, and other codes

- Procedures: SNOMED CT 268400002 (12 lead ECG), 164850009 (Ambulatory ECG; two monitors), 54550000 (Electroencephalogram), 816077007 (MRI of brain), 702430003 (CT angiography of head and neck with contrast), 40701008 (Echocardiography), 164773008 (Sleep studies; home sleep apnea test), and 713603004 (Advance care planning).
- Immunizations: CVX 115 (Tdap, modern-frame history), 140 (influenza, trivalent), 187 (zoster recombinant), and 216 (pneumococcal conjugate PCV20).
- Family history relationships: HL7 v3 RoleCode FTH (father) and DAU (natural daughter).
- No known allergy: SNOMED CT 716186003.
- Encounter types: SNOMED CT 390906007 (follow-up encounter) for the three focused visits, 185345009 (encounter for symptom) for the sick visit, and 86013001 (periodic reevaluation and management of healthy individual) for the adult preventive visit. Services are named in plain text only; HCPCS and CPT appear only in billing notes.

## Vital signs

The six visits use LOINC 8302-2, 29463-7, 39156-5, 8480-6, 8462-4, 8867-4, 9279-1, 8310-5, and 59408-5 with UCUM units.

## Review note

Codes were checked against the public terminology server and NLM RxNav on November 6, 2026. They do not imply that Julius Caesar received these diagnoses, tests, or medications during his lifetime.
