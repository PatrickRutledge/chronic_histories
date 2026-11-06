# Terminology — Mary McLeod Bethune

> **SYNTHETIC RECORD, NOT A REAL MEDICAL RECORD**

## Diagnoses

| Use | System | Code | Display | Evidence |
|---|---|---|---|---|
| Presenting problem; resolved (superseded) at the diagnosis visit | ICD-10-CM FY2026 | R06.2 | Wheezing | S; linked to her documented chronic asthma |
| Problem recorded at the diagnosis visit (both_with_link) | ICD-10-CM FY2026 | J45.40 | Moderate persistent asthma, uncomplicated | S; linked to her documented chronic asthma |
| Problem recorded at the diagnosis visit | ICD-10-CM FY2026 | I11.9 | Hypertensive heart disease without heart failure | S |
| Problem recorded at the diagnosis visit | ICD-10-CM FY2026 | E78.5 | Hyperlipidemia, unspecified | S |
| Presenting finding; resolved (superseded) at the six-week visit | ICD-10-CM FY2026 | R09.81 | Nasal congestion | S |
| Problem recorded at the six-week visit | ICD-10-CM FY2026 | J32.9 | Chronic sinusitis, unspecified | S |
| Active problem from intake | ICD-10-CM FY2026 | K21.9 | Gastro-esophageal reflux disease without esophagitis | S |
| Active problem from intake | ICD-10-CM FY2026 | E66.811 | Obesity, class 1 | S |
| Problem added at the sick visit; resolved | ICD-10-CM FY2026 | J45.41 | Moderate persistent asthma with (acute) exacerbation | S |

## Medications (RxNorm)

| Code | Display |
|---|---|
| 2123076 | NDA020983 200 ACTUAT albuterol 0.09 MG/ACTUAT Metered Dose Inhaler (before the index visit; stopped at diagnosis) |
| 1246304 | 120 ACTUAT budesonide 0.16 MG/ACTUAT / formoterol fumarate 0.0045 MG/ACTUAT Metered Dose Inhaler (three dose periods) |
| 1797907 | fluticasone propionate 0.05 MG/ACTUAT Metered Dose Nasal Spray |
| 707251 | sodium chloride 6.5 MG/ML Nasal Spray |
| 197361 | amlodipine 5 MG Oral Tablet |
| 617310 | atorvastatin 20 MG Oral Tablet |
| 198051 | omeprazole 20 MG Delayed Release Oral Capsule (eight weeks) |
| 312615 | prednisone 20 MG Oral Tablet (five days) |

Albuterol given in clinic at the sick visit and before spirometry is named in the notes and not recorded as a separate medication. The spacer is a device, named in the notes.

## Results (LOINC 2.81)

| Code | Measure | Unit | Category |
|---|---|---|---|
| 58410-2 | CBC panel (organizer) | — | panel |
| 718-7, 6690-2, 711-2, 777-3 | Hemoglobin, white cell count, blood eosinophils, platelets | g/dL, 10*3/uL | laboratory |
| 51990-0 | Basic metabolic panel (organizer) | — | panel |
| 2951-2, 2823-3, 2160-0, 98979-8, 2345-7 | Sodium, potassium, creatinine, eGFR (CKD-EPI 2021), glucose | mmol/L, mg/dL, mL/min/{1.73_m2} | laboratory |
| 57698-3 | Lipid panel (organizer) | — | panel |
| 2093-3, 2085-9, 2571-8, 13457-7 | Total cholesterol, HDL cholesterol, triglycerides, LDL cholesterol (calculated) | mg/dL | laboratory |
| 4548-4, 3016-3, 30934-4, 9318-7, 19113-0 | Hemoglobin A1c, TSH, BNP, urine albumin-to-creatinine ratio, total IgE | %, m[IU]/L, pg/mL, mg/g, [IU]/mL | laboratory |
| 20157-4, 20155-8, 20152-5, 19926-5, 69970-2, 19911-7 | FEV1 before and after bronchodilator, FEV1 percent predicted, FEV1/FVC before and after bronchodilator, DLCO | L, %, {ratio}, mL/min/mm[Hg] | imaging (pulmonary function; GLI Global race-neutral equations) |
| 96269-6 | FeNO | [ppb] | imaging |
| 19935-6 | Peak expiratory flow | L/min | imaging |
| 10230-1 | Left ventricular ejection fraction | % | imaging |
| 82668-5 | Asthma Control Test total score | {score} | survey |
| 55758-7 | PHQ-2 total score | {score} | survey |
| 72233-0 | Mini-Cog total score | {score} | survey |
| 75626-2 | AUDIT-C total score | {score} | survey |

Reference ranges are typical adult female ranges chosen for the teaching record. Specific IgE, ECG, chest X-ray, echocardiogram details and nasal endoscopy are recorded in procedure and note text.

## Procedures, immunizations, and encounter types

- Plain X-ray of chest: SNOMED CT 399208008. Electrocardiographic procedure: 29303009. Spirometry: 127783003 (diagnosis and after stabilization). Transthoracic echocardiography: 433236007. Asthma action care planning: 716542004. Endoscopy of nose: 25570002. Assessment of inhalation technique: 710957008. Advance care planning: 713603004.
- Encounter types: SNOMED CT 390906007 (follow-up encounter) for the three focused chronic-care visits, 185345009 (encounter for symptom) for the sick visit, and 281038008 (geriatric annual health check) for the subsequent annual wellness visit. The services are named in plain text as HCPCS G0439 and CPT 99497; HCPCS and CPT are not used as coded values.
- Immunizations: CVX 187 (recombinant zoster, history), 115 (Tdap, history), 216 (PCV20), 135 (influenza, high-dose), 309 (COVID-19 mRNA), 303 (RSV).
- No known allergy: SNOMED CT 716186003.

## Vital signs

The six visits use LOINC 8302-2, 29463-7, 39156-5, 8480-6, 8462-4, 8867-4, 9279-1, 8310-5, and 59408-5 with UCUM units.

## Review note

Codes were checked against the public terminology server and NLM RxNav on November 5, 2026. They do not imply that Mary McLeod Bethune received these diagnoses, tests, or medications during her lifetime.
