# Terminology — Swami Vivekananda

> **SYNTHETIC RECORD, NOT A REAL MEDICAL RECORD**

## Diagnoses

| Use | System | Code | Display | Evidence |
|---|---|---|---|---|
| Presenting problem; resolved (superseded) at the diagnosis visit | ICD-10-CM FY2026 | R73.9 | Hyperglycemia, unspecified | S; linked to his documented diabetes |
| Problem recorded at the diagnosis visit (both_with_link) | ICD-10-CM FY2026 | E11.65 | Type 2 diabetes mellitus with hyperglycemia | S; linked to his documented diabetes |
| Problem recorded at the diagnosis visit; resolved (superseded) | ICD-10-CM FY2026 | R80.9 | Proteinuria, unspecified | S; linked to his documented albuminuria |
| Problem recorded at the last visit (both_with_link) | ICD-10-CM FY2026 | E11.21 | Type 2 diabetes mellitus with diabetic nephropathy | S; linked to his documented albuminuria and Bright's disease |
| Finding at intake; resolved (superseded) at the preventive visit | ICD-10-CM FY2026 | R03.0 | Elevated blood-pressure reading, without diagnosis of hypertension | S |
| Problem recorded at the preventive visit | ICD-10-CM FY2026 | I10 | Essential (primary) hypertension | S |
| Problem recorded at the diagnosis visit | ICD-10-CM FY2026 | E78.2 | Mixed hyperlipidemia | S |
| Problem from intake (both_with_link) | ICD-10-CM FY2026 | G47.00 | Insomnia, unspecified | S; linked to his documented lifelong insomnia |
| Presenting problem at the sick visit; resolved (superseded) | ICD-10-CM FY2026 | R06.2 | Wheezing | S; linked to his documented asthma |
| Problem recorded at the last visit (both_with_link) | ICD-10-CM FY2026 | J45.40 | Moderate persistent asthma, uncomplicated | S; linked to his documented asthma |

## Medications (RxNorm)

| Code | Display |
|---|---|
| 860975 | 24 HR metformin hydrochloride 500 MG Extended Release Oral Tablet (1000 mg, then 2000 mg daily) |
| 979485 | losartan potassium 25 MG Oral Tablet |
| 617312 | atorvastatin 10 MG Oral Tablet |
| 1545658 | empagliflozin 10 MG Oral Tablet |
| 312615 | prednisone 20 MG Oral Tablet (five days) |
| 1246304 | 120 ACTUAT budesonide 0.16 MG/ACTUAT / formoterol fumarate 0.0045 MG/ACTUAT Metered Dose Inhaler (as needed, then maintenance and reliever) |

Albuterol given in clinic at the sick visit and before spirometry is named in the notes and not recorded as a medication. The glucose meter and spacer are devices, named in the notes.

## Results (LOINC 2.81)

| Code | Measure | Unit | Category |
|---|---|---|---|
| 51990-0 | Basic metabolic panel (organizer) | — | panel |
| 2345-7, 2951-2, 2823-3, 2160-0, 98979-8 | Glucose (random and fasting), sodium, potassium, creatinine, eGFR (CKD-EPI 2021) | mg/dL, mmol/L, mL/min/{1.73_m2} | laboratory |
| 58410-2, 718-7 | CBC panel (organizer), hemoglobin | g/dL | laboratory |
| 4548-4 | Hemoglobin A1c | % | laboratory |
| 56540-8 | GAD65 antibodies | [IU]/mL | laboratory |
| 1986-9 | C-peptide | ng/mL | laboratory |
| 9318-7 | Urine albumin-to-creatinine ratio | mg/g | laboratory |
| 57698-3 | Lipid panel (organizer) | — | panel |
| 2093-3, 2085-9, 2571-8, 13457-7 | Total cholesterol, HDL cholesterol, triglycerides, LDL cholesterol (calculated) | mg/dL | laboratory |
| 1742-6, 3016-3, 2132-9 | ALT, TSH, vitamin B12 | U/L, m[IU]/L, pg/mL | laboratory |
| 20157-4, 20155-8, 20152-5, 19926-5, 69970-2 | FEV1 before and after bronchodilator, FEV1 percent predicted, FEV1/FVC before and after bronchodilator | L, %, {ratio} | imaging (pulmonary function; GLI Global race-neutral equations) |
| 96269-6 | FeNO | [ppb] | imaging |
| 19935-6 | Peak expiratory flow | L/min | imaging |
| 82668-5 | Asthma Control Test total score | {score} | survey |
| 55758-7, 44261-6, 70274-6, 75626-2 | PHQ-2, PHQ-9, GAD-7 and AUDIT-C total scores | {score} | survey |

Reference ranges are typical adult male ranges chosen for the teaching record. The urine dipstick, Insomnia Severity Index, STOP-BANG, FIB-4, interferon-gamma release assay, hepatitis B, HIV and hepatitis C screening and rapid viral tests are recorded in note text.

## Procedures, immunizations, and encounter types

- Diabetic foot examination: SNOMED CT 401191002. Diabetic care (education and nutrition therapy referral): 385804009. Diabetic retinopathy screening: 134395001. Plain X-ray of chest: 399208008. Electrocardiographic procedure: 29303009. Spirometry: 127783003. Asthma action care planning: 716542004. Assessment of inhalation technique: 710957008. Advance care planning: 713603004.
- Encounter types: SNOMED CT 390906007 (follow-up encounter) for the three focused chronic-care visits, 86013001 (periodic reevaluation and management of healthy individual) for the preventive visit, and 185345009 (encounter for symptom) for the sick visit. Services are named in plain text as CPT 99395, 99497, 90715, 90739, 90471 and 90472; CPT is not used as a coded value.
- Immunizations: CVX 140 (influenza, two seasons), 309 (COVID-19 mRNA, two seasons), 216 (PCV20), 115 (Tdap), 189 (HepB-CpG, doses 1 and 2).
- No known allergy: SNOMED CT 716186003.

## Vital signs

The six visits use LOINC 8302-2, 29463-7, 39156-5, 8480-6, 8462-4, 8867-4, 9279-1, 8310-5, and 59408-5 with UCUM units.

## Review note

Codes were checked against the public terminology server and NLM RxNav on November 6, 2026. They do not imply that Swami Vivekananda received these diagnoses, tests, or medications during his lifetime.
