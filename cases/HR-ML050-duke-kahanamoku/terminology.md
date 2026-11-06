# Terminology — Duke Kahanamoku

> **SYNTHETIC RECORD, NOT A REAL MEDICAL RECORD**

## Diagnoses

| Use | System | Code | Display | Evidence |
|---|---|---|---|---|
| Presenting problem, resolved at the second visit | ICD-10-CM FY2026 | R06.09 | Other forms of dyspnea | S |
| Active problem | ICD-10-CM FY2026 | I25.2 | Old myocardial infarction | S; linked to the documented heart attack of 1952 |
| Active problem, from the second visit | ICD-10-CM FY2026 | I50.22 | Chronic systolic (congestive) heart failure | S |
| Active problem | ICD-10-CM FY2026 | E61.1 | Iron deficiency | S |
| Sick visit, resolved | ICD-10-CM FY2026 | A08.4 | Viral intestinal infection, unspecified | S |

## Medications (RxNorm)

| Code | Display |
|---|---|
| 308416 | aspirin 81 MG Delayed Release Oral Tablet |
| 617311 | atorvastatin 40 MG Oral Tablet (replaced at intake) |
| 259255 | atorvastatin 80 MG Oral Tablet |
| 866924 | metoprolol tartrate 25 MG Oral Tablet (replaced at the second visit) |
| 314076 | lisinopril 10 MG Oral Tablet (stopped at the second visit) |
| 313988 | furosemide 40 MG Oral Tablet (reduced at the fourth visit) |
| 310429 | furosemide 20 MG Oral Tablet |
| 1656340 | sacubitril 24 MG / valsartan 26 MG Oral Tablet |
| 1656349 | sacubitril 49 MG / valsartan 51 MG Oral Tablet (from the six-month visit) |
| 686924, 200031, 200032 | carvedilol 3.125, 6.25 and 12.5 MG Oral Tablet |
| 1545658 | empagliflozin 10 MG Oral Tablet |
| 313096 | spironolactone 25 MG Oral Tablet (one-half tablet, 12.5 mg) |
| 1435169 | 15 ML ferric carboxymaltose 50 MG/ML Injection (two infusions) |

## Results (LOINC 2.81)

| Code | Measure | Unit | Category |
|---|---|---|---|
| 33762-6 | NT-proBNP | pg/mL | laboratory |
| 51990-0 | Basic metabolic panel (organizer) | — | panel |
| 2951-2, 2823-3, 2160-0, 98979-8, 2345-7 | Sodium, potassium, creatinine, eGFR (CKD-EPI 2021), glucose | mmol/L, mg/dL, mL/min/{1.73_m2} | laboratory |
| 19123-9 | Magnesium | mg/dL | laboratory |
| 718-7 | Hemoglobin | g/dL | laboratory |
| 2276-4 | Ferritin | ng/mL | laboratory |
| 2502-3 | Transferrin (iron) saturation | % | laboratory |
| 3016-3 | TSH | m[IU]/L | laboratory |
| 4548-4 | Hemoglobin A1c | % | laboratory |
| 2093-3, 13457-7, 2085-9, 2571-8 | Total cholesterol, LDL (calculated), HDL, triglycerides | mg/dL | laboratory |
| 1742-6 | ALT | U/L | laboratory |
| 10230-1 | Left ventricular ejection fraction | % | imaging |
| 55758-7 | PHQ-2 total score | {score} | survey |
| 86924-8 | KCCQ-12 overall summary score | {score} | survey |
| 72233-0 | Mini-Cog total score | {score} | survey |
| 75626-2 | AUDIT-C total score | {score} | survey |

Reference ranges are typical adult male ranges chosen for the teaching record; the LDL range uses the secondary-prevention goal and the ferritin range notes the heart failure threshold of 100 ng/mL. NT-proBNP is used instead of BNP because sacubitril raises BNP but not NT-proBNP. The orthostatic readings, the left ventricular dimensions, the angiogram, the QRS width and the screening results are recorded as narrative.

## Procedures, immunizations, and encounter types

- Procedures: SNOMED CT 29303009 (electrocardiographic procedure; intake and sick visit), 399208008 (plain X-ray of chest), 433236007 (transthoracic echocardiography; second and six-month visits), 33367005 (angiography of coronary artery), 395697009 (cardiac rehabilitation, phase 2) and 713603004 (advance care planning).
- Encounter types: SNOMED CT 390906007 (follow-up encounter) for the four focused chronic-care visits, 281038008 (geriatric annual health check) for the subsequent annual wellness visit, and 185345009 (encounter for symptom) for the sick visit. The services are named in plain text as HCPCS G0439 and CPT 99497; HCPCS and CPT are not used as coded values.
- Immunizations: CVX 216 (PCV20), 135 (high-dose influenza), 303 (RSV), 309 (COVID-19 mRNA), 187 (zoster recombinant) and 115 (Tdap).
- No known allergy: SNOMED CT 716186003.

## Vital signs

The seven visits use LOINC 8302-2, 29463-7, 39156-5, 8480-6, 8462-4, 8867-4, 9279-1, 8310-5, and 59408-5 with UCUM units.

## Review note

Codes were checked against the public terminology server and NLM RxNav on November 6, 2026. They do not imply that Duke Kahanamoku received these diagnoses, tests, or medications during his lifetime.
