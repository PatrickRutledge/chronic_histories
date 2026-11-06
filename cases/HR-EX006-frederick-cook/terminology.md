# Terminology — Frederick Cook

> **SYNTHETIC RECORD, NOT A REAL MEDICAL RECORD**

## Diagnoses

| Use | System | Code | Display | Evidence |
|---|---|---|---|---|
| Presenting finding, resolved at the second visit | ICD-10-CM FY2026 | R03.0 | Elevated blood-pressure reading, without diagnosis of hypertension | S; linked to his documented parole |
| Active problem, from the second visit | ICD-10-CM FY2026 | I10 | Essential (primary) hypertension | S |
| Presenting finding, resolved at the second visit | ICD-10-CM FY2026 | R09.89 | Other specified symptoms and signs involving the circulatory and respiratory systems | S; right carotid bruit |
| Active problem, from the second visit | ICD-10-CM FY2026 | I65.21 | Occlusion and stenosis of right carotid artery | S; asymptomatic, 50 to 69 percent |
| Active problem | ICD-10-CM FY2026 | Z65.2, Z59.86 | Problems related to release from prison; Financial insecurity | S; linked to his documented imprisonment and parole |
| Resolved problem, from the September sick visit | ICD-10-CM FY2026 | M10.271, T50.2X5A | Drug-induced gout, right ankle and foot; Adverse effect of carbonic-anhydrase inhibitors, benzothiadiazides and other diuretics, initial encounter | S |

## Medications (RxNorm)

| RxCUI | Name | Use |
|---|---|---|
| 310798 | hydrochlorothiazide 25 MG Oral Tablet | Stage 2 hypertension, second to twelve-week visit; stopped after gout |
| 197361 | amlodipine 5 MG Oral Tablet | Stage 2 hypertension, from the second visit |
| 979492 | losartan potassium 50 MG Oral Tablet | Hypertension, from the twelve-week visit |
| 617311 | atorvastatin 40 MG Oral Tablet | Carotid atherosclerosis, from the second visit |
| 308416 | aspirin 81 MG Delayed Release Oral Tablet | Asymptomatic carotid stenosis, from the second visit |
| 197541 | colchicine 0.6 MG Oral Tablet | Gout flare, one week |

## Results (LOINC 2.81)

| Code | Measure | Unit | Category |
|---|---|---|---|
| 51990-0 | Basic metabolic panel (organizer) | — | panel |
| 2951-2, 2823-3, 2160-0, 98979-8, 2345-7 | Sodium, potassium, creatinine, eGFR (CKD-EPI 2021), fasting glucose | mmol/L, mg/dL, mL/min/{1.73_m2} | laboratory |
| 4548-4 | HbA1c | % | laboratory |
| 718-7 | Hemoglobin | g/dL | laboratory |
| 1742-6 | ALT | U/L | laboratory |
| 3016-3 | TSH | m[IU]/L | laboratory |
| 9318-7 | Urine albumin-to-creatinine ratio | mg/g | laboratory |
| 24331-1 | Lipid 1996 panel (organizer) | — | panel |
| 2093-3, 2085-9, 13457-7, 2571-8 | Total cholesterol, HDL, calculated LDL, triglycerides | mg/dL | laboratory |
| 48159-8 | Hepatitis C virus antibody signal-to-cutoff ratio | {s_co_ratio} | laboratory |
| 88517-8 | Interferon-gamma release assay, TB antigen (CD4+ and CD8+) minus nil | [IU]/mL | laboratory |
| 3084-1 | Urate | mg/dL | laboratory |
| 44261-6 | PHQ-9 total score | {score} | survey |
| 55758-7 | PHQ-2 total score | {score} | survey |

The HIV test and the hepatitis B panel are qualitative and are reported in the note text only. Duplex velocities, the echocardiogram, the ECG, the Mini-Cog, the timed up-and-go and the home blood pressure averages are recorded in the notes; no code was invented for them. Reference ranges are typical adult ranges chosen for the teaching record; interpretation flags follow them, and validation checks that every flag agrees with its range.

## Procedures and immunizations

- Electrocardiographic procedure: SNOMED CT 29303009 (intake). Duplex ultrasonography of bilateral carotid arteries: 1178979003 (second visit). Transthoracic echocardiography: 433236007 (six-week visit). Advance care planning: 713603004 (preventive examination).
- Immunizations: CVX 216 (PCV20), 187 (recombinant zoster, two doses), 115 (Tdap), 189 (HepB-CpG, two doses), and 135 (influenza, high-dose, trivalent).
- No known allergy: SNOMED CT 716186003.
- Encounter types: SNOMED CT 390906007 (follow-up encounter) for the four focused chronic-care visits, 86013001 (periodic reevaluation and management of healthy individual) for the initial preventive physical examination, and 185345009 (encounter for symptom) for the sick visit. The services are named in plain text as HCPCS G0402 and CPT 99497; neither is used as a coded value.

## Vital signs

The seven visits use LOINC 8302-2, 29463-7, 39156-5, 8480-6, 8462-4, 8867-4, 9279-1, 8310-5, and 59408-5 with UCUM units.

## Review note

Codes were checked against the public terminology server and NLM RxNav on November 6, 2026. They do not imply that Cook received these diagnoses, tests, or treatments during his lifetime.
