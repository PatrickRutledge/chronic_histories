# Terminology — Winston Churchill

> **SYNTHETIC RECORD, NOT A REAL MEDICAL RECORD**

## Diagnoses

| Use | System | Code | Display | Evidence |
|---|---|---|---|---|
| Active problem | ICD-10-CM FY2026 | I69.354 | Hemiplegia and hemiparesis following cerebral infarction affecting left non-dominant side | S; linked to the documented 1953 stroke |
| Active problem | ICD-10-CM FY2026 | I10 | Essential (primary) hypertension | S; supported by the documented 1953 blood pressures |
| Active problem | ICD-10-CM FY2026 | F17.290 | Nicotine dependence, other tobacco product, uncomplicated | S; linked to the documented cigar smoking |
| Resolved problem | ICD-10-CM FY2026 | I95.1 | Orthostatic hypotension | S; recorded at the July sick visit |

No behavioral-health diagnosis (F10–F99 other than F17) is coded. The disputed “black dog” depression is a graded claim only.

## Medications (RxNorm)

| Code | Display |
|---|---|
| 308416 | aspirin 81 MG Delayed Release Oral Tablet (21 days) |
| 309362 | clopidogrel 75 MG Oral Tablet |
| 259255 | atorvastatin 80 MG Oral Tablet |
| 197361 | amlodipine 5 MG Oral Tablet (before the first visit, and again after the sick visit) |
| 308135 | amlodipine 10 MG Oral Tablet (between the first visit and the sick visit) |
| 311354 | lisinopril 5 MG Oral Tablet |

## Results (LOINC 2.81)

| Code | Measure | Unit | Category |
|---|---|---|---|
| 2093-3, 2085-9, 2571-8, 13457-7 | Total cholesterol, HDL cholesterol, triglycerides, LDL cholesterol (calculated) | mg/dL | laboratory |
| 51990-0 | Basic metabolic panel (organizer) | — | panel |
| 2951-2, 2823-3, 2160-0, 98979-8, 2345-7 | Sodium, potassium, creatinine, eGFR (CKD-EPI 2021), glucose | mmol/L, mg/dL, mL/min/{1.73_m2} | laboratory |
| 718-7, 777-3 | Hemoglobin, platelets | g/dL, 10*3/uL | laboratory |
| 4548-4, 1742-6 | HbA1c, ALT | %, U/L | laboratory |
| 72089-6 | NIH Stroke Scale total score | {score} | survey |
| 75859-9 | Modified Rankin Scale | {score} | survey |
| 72172-0 | MoCA total score | {score} | survey |
| 44261-6 | PHQ-9 total score | {score} | survey |
| 75626-2 | AUDIT-C total score | {score} | survey |

LDL cholesterol is calculated with the Friedewald equation from the synthetic total cholesterol, HDL cholesterol, and triglycerides. eGFR values are calculated from the synthetic creatinine with the 2021 CKD-EPI creatinine equation for a 78-year-old man. Reference ranges are typical adult ranges chosen for the teaching record; interpretation flags follow them, and validation checks that every flag agrees with its range.

## Procedures, immunizations, and encounters

- MRI of the brain: SNOMED CT 816077007. CT angiography: 418272005. Transthoracic echocardiography: 433236007. Electrocardiogram: 29303009. 30-day ambulatory ECG: 164850009. Outpatient physical and occupational therapy: 91251008.
- Immunizations: CVX 135 (high-dose influenza), 216 (PCV20), 303 (RSV), 187 (recombinant zoster), and 115 (Tdap).
- No known allergy: SNOMED CT 716186003.
- Encounter types: SNOMED CT 390906007 (follow-up encounter) for the three focused chronic-care visits, 185345009 (encounter for symptom) for the July sick visit, and 281038008 (geriatric annual health check) for the subsequent annual wellness visit. The services are named in plain text as HCPCS G0439 with CPT 99497; HCPCS and CPT are not used as coded values.
- Family relationship: HL7 RoleCode FTH (father).

## Vital signs

The six visits use LOINC 8302-2, 29463-7, 39156-5, 8480-6, 8462-4, 8867-4, 9279-1, 8310-5, and 59408-5 with UCUM units. Standing blood pressures are recorded in the examination text.

## Review note

Codes were checked against the public terminology server and NLM RxNav on November 3, 2026. They do not imply that Churchill received these diagnoses, tests, or medications during his lifetime.
