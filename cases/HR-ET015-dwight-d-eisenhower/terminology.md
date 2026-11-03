# Terminology — Dwight D. Eisenhower

> **SYNTHETIC RECORD, NOT A REAL MEDICAL RECORD**

## Diagnoses

| Use | System | Code | Display | Evidence |
|---|---|---|---|---|
| Active problem | ICD-10-CM FY2026 | I25.2 | Old myocardial infarction | S; linked to the documented 1955 anterolateral infarction |
| Active problem | ICD-10-CM FY2026 | I25.10 | Atherosclerotic heart disease of native coronary artery without angina pectoris | S |
| Active problem | ICD-10-CM FY2026 | E78.5 | Hyperlipidemia, unspecified | S |
| Active problem | ICD-10-CM FY2026 | I10 | Essential (primary) hypertension | S |
| Active problem | ICD-10-CM FY2026 | Z87.891 | Personal history of nicotine dependence | S; linked to the documented heavy smoking and quitting around 1949 |
| Resolved problem | ICD-10-CM FY2026 | R04.0 | Epistaxis | S; recorded at the April sick visit |

## Medications (RxNorm)

| Code | Display |
|---|---|
| 308416 | aspirin 81 MG Delayed Release Oral Tablet |
| 1116635 | ticagrelor 90 MG Oral Tablet (twelve months, stopped at one year) |
| 259255 | atorvastatin 80 MG Oral Tablet |
| 349556 | ezetimibe 10 MG Oral Tablet |
| 866427 | 24 HR metoprolol succinate 25 MG Extended Release Oral Tablet |
| 311354 | lisinopril 5 MG Oral Tablet (until the intake visit) |
| 314076 | lisinopril 10 MG Oral Tablet |
| 198039 | nitroglycerin 0.4 MG Sublingual Tablet (as needed) |

## Results (LOINC 2.81)

| Code | Measure | Unit | Category |
|---|---|---|---|
| 2093-3, 2085-9, 2571-8, 13457-7 | Total cholesterol, HDL cholesterol, triglycerides, LDL cholesterol (calculated) | mg/dL | laboratory |
| 10835-7 | Lipoprotein(a) | mg/dL | laboratory |
| 51990-0 | Basic metabolic panel (organizer) | — | panel |
| 2951-2, 2823-3, 2160-0, 98979-8, 2345-7 | Sodium, potassium, creatinine, eGFR (CKD-EPI 2021), glucose | mmol/L, mg/dL, mL/min/{1.73_m2} | laboratory |
| 718-7, 777-3 | Hemoglobin, platelets | g/dL, 10*3/uL | laboratory |
| 4548-4, 1742-6 | HbA1c, ALT | %, U/L | laboratory |
| 10230-1 | Left ventricular ejection fraction | % | imaging |
| 55758-7 | PHQ-2 total score | {score} | survey |
| 75626-2 | AUDIT-C total score | {score} | survey |
| 72233-0 | Mini-Cog total score (annual wellness visit) | {score} | survey |

LDL cholesterol is calculated with the Friedewald equation from the synthetic total cholesterol, HDL cholesterol, and triglycerides. eGFR values are calculated from the synthetic creatinine with the 2021 CKD-EPI creatinine equation for a 65-year-old man. Reference ranges are typical adult ranges chosen for the teaching record; interpretation flags follow them, and validation checks that every flag agrees with its range. The LDL goal of 55 mg/dL is a treatment target, not a reference range.

## Procedures, immunizations, and encounters

- Percutaneous coronary intervention with a drug-eluting stent: SNOMED CT 36969009 (placement of stent in coronary artery). Transthoracic echocardiography: 433236007. Cardiac rehabilitation, phase 2: 395697009. Electrocardiogram: 29303009.
- Immunizations: CVX 135 (high-dose influenza), 216 (PCV20), 303 (RSV), 187 (recombinant zoster), and 115 (Tdap).
- No known allergy: SNOMED CT 716186003.
- Encounter types: SNOMED CT 390906007 (follow-up encounter) for the four focused chronic-care visits, 185345009 (encounter for symptom) for the April sick visit, and 281038008 (geriatric annual health check) for the initial annual wellness visit. The services are named in plain text as HCPCS G0438 with CPT 99497 and CPT 30901; HCPCS and CPT are not used as coded values.
- Family history: none recorded.

## Vital signs

The seven visits use LOINC 8302-2, 29463-7, 39156-5, 8480-6, 8462-4, 8867-4, 9279-1, 8310-5, and 59408-5 with UCUM units.

## Review note

Codes were checked against the public terminology server and NLM RxNav on November 3, 2026. They do not imply that Eisenhower received these diagnoses, tests, or medications during his lifetime.
