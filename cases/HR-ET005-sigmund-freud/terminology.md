# Terminology — Sigmund Freud

> **SYNTHETIC RECORD, NOT A REAL MEDICAL RECORD**

## Diagnoses

| Use | System | Code | Display | Evidence |
|---|---|---|---|---|
| Active problem | ICD-10-CM FY2026 | F17.290 | Nicotine dependence, other tobacco product, uncomplicated | S; cigars; linked to his documented smoking |
| Active problem | ICD-10-CM FY2026 | Z85.818 | Personal history of malignant neoplasm of other sites of lip, oral cavity, and pharynx | S; linked to his documented 1923 palatal cancer |
| Active problem | ICD-10-CM FY2026 | Z90.09 | Acquired absence of other part of head and neck | S; maxillectomy defect with obturator |
| Resolved at twelve weeks | ICD-10-CM FY2026 | R49.21 | Hypernasality | S |
| Active problem | ICD-10-CM FY2026 | G89.29 | Other chronic pain | S |
| Active problem | ICD-10-CM FY2026 | E78.5 | Hyperlipidemia, unspecified | S |
| Resolved at five months | ICD-10-CM FY2026 | R63.4 | Abnormal weight loss | S |
| Sick visit, resolved | ICD-10-CM FY2026 | B37.0 | Candidal stomatitis | S |

No drug use code is used for his historical cocaine use; see the editorial resolutions in sources.md.

## Medications (RxNorm)

| Code | Display |
|---|---|
| 636671 | varenicline 0.5 MG Oral Tablet (first week) |
| 636676 | varenicline 1 MG Oral Tablet (from one week) |
| 198030 | 24 HR nicotine 0.875 MG/HR Transdermal System (21 mg a day, six weeks from the quit date) |
| 198029 | 24 HR nicotine 0.583 MG/HR Transdermal System (14 mg a day, four weeks) |
| 359818 | nicotine 4 MG Oral Lozenge (as needed) |
| 198440 | acetaminophen 500 MG Oral Tablet |
| 312055 | nystatin 100000 UNT/ML Oral Suspension (sick visit) |
| 617310 | atorvastatin 20 MG Oral Tablet (from the wellness visit) |

The nicotine patch is recorded with the route “topical,” the closest value the schema allows for a transdermal system.

## Results (LOINC 2.81)

| Code | Measure | Unit | Category |
|---|---|---|---|
| 718-7, 787-2, 777-3 | Hemoglobin, MCV, platelets | g/dL, fL, 10*3/uL | laboratory |
| 2951-2, 2823-3, 2160-0, 98979-8, 2345-7 | Sodium, potassium, creatinine, eGFR (CKD-EPI 2021), glucose | mmol/L, mg/dL, mL/min/{1.73_m2} | laboratory |
| 1751-7, 1742-6 | Albumin, ALT | g/dL, U/L | laboratory |
| 4548-4 | HbA1c | % | laboratory |
| 2093-3, 13457-7, 2085-9, 2571-8 | Total, LDL and HDL cholesterol, triglycerides | mg/dL | laboratory |
| 75893-8 | Pain severity in the past week, 0 to 10 | {score} | survey |
| 55758-7 | PHQ-2 total score | {score} | survey |
| 72233-0 | Mini-Cog total score | {score} | survey |

Reference ranges are typical adult male ranges chosen for the teaching record; interpretation flags follow them. Exhaled carbon monoxide, the Timed Up and Go test, the screening CT and the aortic ultrasound are recorded as narrative.

## Procedures, immunizations, and encounter types

- Procedures (SNOMED CT): 281180009 (Reline of maxillofacial prosthesis), 69406003 (Fitting of prosthesis), 713548006 (Low dose computed tomography of thorax), 241462009 (US scan of abdominal aorta) and 713603004 (Advance care planning).
- Encounter types: SNOMED CT 390906007 (follow-up encounter) for the four focused chronic-care visits, 281038008 (geriatric annual health check) for the subsequent annual wellness visit, and 185345009 (encounter for symptom) for the sick visit. The services are named in plain text as HCPCS G0439 and CPT 99497; neither is used as a coded value.
- Immunizations: CVX 197 (influenza, high-dose) and 216 (PCV20).
- Family history relationship: HL7 RoleCode FTH (father).
- No known allergy: SNOMED CT 716186003.

## Vital signs

The seven visits use LOINC 8302-2, 29463-7, 39156-5, 8480-6, 8462-4, 8867-4, 9279-1, 8310-5, and 59408-5 with UCUM units.

## Review note

Codes were checked against the public terminology server and NLM RxNav on November 4, 2026. They do not imply that Freud received these diagnoses, tests, or medications during his lifetime.
