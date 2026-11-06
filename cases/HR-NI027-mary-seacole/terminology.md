# Terminology — Mary Seacole

> **SYNTHETIC RECORD, NOT A REAL MEDICAL RECORD**

## Diagnoses

| Use | System | Code | Display | Evidence |
|---|---|---|---|---|
| Presenting problem (provisional), resolved at the one-week review | ICD-10-CM FY2026 | R03.0 | Elevated blood-pressure reading, without diagnosis of hypertension | S |
| Active problem, from the one-week review | ICD-10-CM FY2026 | I10 | Essential (primary) hypertension | S; linked to her recorded apoplexy only for stroke-prevention teaching |
| Active problem | ICD-10-CM FY2026 | M17.0 | Bilateral primary osteoarthritis of knee | S |
| Active problem | ICD-10-CM FY2026 | Z91.81 | History of falling | S |
| Active problem | ICD-10-CM FY2026 | E66.811 | Obesity, class 1 | S |
| Sick visit, resolved | ICD-10-CM FY2026 | E87.1 | Hypo-osmolality and hyponatremia | S |

No code is used for her own remedies, loneliness or finances; see the editorial resolutions in sources.md.

## Medications (RxNorm)

| Code | Display |
|---|---|
| 855633 | diclofenac sodium 0.01 MG/MG Topical Gel (1%) |
| 197361 | amlodipine 5 MG Oral Tablet |
| 428539 | chlorthalidone 12.5 MG Oral Tablet (stopped at the sick visit) |
| 617310 | atorvastatin 20 MG Oral Tablet |
| 979485 | losartan potassium 25 MG Oral Tablet |

## Results (LOINC 2.81)

| Code | Measure | Unit | Category |
|---|---|---|---|
| 51990-0 | Basic metabolic panel (organizer) | — | panel |
| 2951-2, 2823-3, 2160-0, 98979-8, 2345-7 | Sodium, potassium, creatinine, eGFR (CKD-EPI 2021), glucose | mmol/L, mg/dL, mL/min/{1.73_m2} | laboratory |
| 4548-4 | Hemoglobin A1c | % | laboratory |
| 2093-3, 13457-7, 2085-9, 2571-8 | Total cholesterol, LDL (calculated), HDL, triglycerides | mg/dL | laboratory |
| 3016-3 | TSH | m[IU]/L | laboratory |
| 9318-7 | Urine albumin-to-creatinine ratio | mg/g{creat} | laboratory |
| 718-7 | Hemoglobin | g/dL | laboratory |
| 10230-1 | Left ventricular ejection fraction | % | imaging |
| 72514-3 | Knee pain, 0 to 10 numeric rating | {score} | survey |
| 82332-8 | KOOS JR total interval score | {score} | survey |
| 44261-6 | PHQ-9 total score | {score} | survey |
| 55758-7 | PHQ-2 total score | {score} | survey |
| 72233-0 | Mini-Cog total score | {score} | survey |
| 75626-2 | AUDIT-C total score | {score} | survey |

Reference ranges are typical adult female ranges chosen for the teaching record; interpretation flags follow them. Home blood pressure averages, orthostatic readings, the 10-year cardiovascular risk, the STEADI tests (Timed Up and Go, 30-second chair stand, 4-stage balance), the ankle-brachial index, the 3-item UCLA loneliness score and the DXA, mammogram, stool test and hepatitis C results are recorded as narrative.

## Procedures, immunizations, and encounter types

- Procedures: SNOMED CT 29303009 (electrocardiographic procedure), 433236007 (transthoracic echocardiography) and 713603004 (advance care planning).
- Encounter types: SNOMED CT 390906007 (follow-up encounter) for the four focused chronic-care visits, 281038008 (geriatric annual health check) for the subsequent annual wellness visit, and 185345009 (encounter for symptom) for the sick visit. The services are named in plain text as HCPCS G0439 and CPT 99497; HCPCS and CPT are not used as coded values.
- Immunizations: CVX 216 (PCV20), 187 (zoster recombinant, two doses), 115 (Tdap) and 135 (influenza, high-dose, trivalent).
- No known allergy: SNOMED CT 716186003.

## Vital signs

The seven visits use LOINC 8302-2, 29463-7, 39156-5, 8480-6, 8462-4, 8867-4, 9279-1, 8310-5, and 59408-5 with UCUM units.

## Review note

Codes were checked against the public terminology server and NLM RxNav on November 5, 2026. They do not imply that Mary Seacole received these diagnoses, tests, or medications during her lifetime.
