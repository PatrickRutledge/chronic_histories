# Terminology — Jesse Owens

> **SYNTHETIC RECORD, NOT A REAL MEDICAL RECORD**

## Diagnoses

| Use | System | Code | Display | Evidence |
|---|---|---|---|---|
| Presenting finding; resolved (superseded) at the diagnosis visit | ICD-10-CM FY2026 | R91.1 | Solitary pulmonary nodule | S; linked to his documented smoking |
| Problem recorded at the diagnosis visit (both_with_link) | ICD-10-CM FY2026 | C34.12 | Malignant neoplasm of upper lobe, left bronchus or lung | S; linked to his documented adenocarcinoma of the left lung |
| Active problem from intake (both_with_link); resolved after surgery | ICD-10-CM FY2026 | F17.210 | Nicotine dependence, cigarettes, uncomplicated | S; linked to his documented smoking |
| Problem added at the sick visit; resolved | ICD-10-CM FY2026 | J06.9 | Acute upper respiratory infection, unspecified | S |
| Problem recorded after surgery | ICD-10-CM FY2026 | Z90.2 | Acquired absence of lung [part of] | S |
| Problem recorded after surgery (both_with_link) | ICD-10-CM FY2026 | F17.211 | Nicotine dependence, cigarettes, in remission | S; linked to his documented smoking |

## Medications (RxNorm)

| Code | Display |
|---|---|
| 636671 | varenicline 0.5 MG Oral Tablet (starting week) |
| 636676 | varenicline 1 MG Oral Tablet |
| 1991412 and 2569080 | 24 ML nivolumab 10 MG/ML Injection and 12 ML nivolumab 10 MG/ML Injection (360 mg, three cycles) |
| 597195 | carboplatin 10 MG/ML Injectable Solution |
| 1728072 | pemetrexed 500 MG Injection |
| 310410 | folic acid 1 MG Oral Tablet |
| 309594 | cyanocobalamin 1 MG/ML Injectable Solution (one dose) |
| 197582 | dexamethasone 4 MG Oral Tablet (three days around each cycle) |
| 312086 | ondansetron 8 MG Oral Tablet (as needed) |
| 198440 | acetaminophen 500 MG Oral Tablet (as needed after surgery) |

Infusion-day antiemetics (fosaprepitant, palonosetron, dexamethasone) are named in the notes and not recorded as separate medications.

## Results (LOINC 2.81)

| Code | Measure | Unit | Category |
|---|---|---|---|
| 58410-2 | CBC panel (organizer) | — | panel |
| 718-7, 6690-2, 751-8, 777-3 | Hemoglobin, white cell count, absolute neutrophil count, platelets | g/dL, 10*3/uL | laboratory |
| 24323-8 | Comprehensive metabolic panel (organizer) | — | panel |
| 2951-2, 2823-3, 2160-0, 98979-8, 2345-7, 17861-6, 1751-7, 1742-6, 1920-8, 6768-6, 1975-2 | Sodium, potassium, creatinine, eGFR (CKD-EPI 2021), glucose, calcium, albumin, ALT, AST, alkaline phosphatase, total bilirubin | mmol/L, mg/dL, mL/min/{1.73_m2}, g/dL, U/L | laboratory |
| 3016-3, 3024-7, 2143-6 | TSH, free T4, morning cortisol | m[IU]/L, ng/dL, ug/dL | laboratory |
| 20150-9, 20152-5, 19926-5, 19911-7 | FEV1, FEV1 percent predicted, FEV1/FVC, DLCO | L, %, {ratio}, mL/min/mm[Hg] | imaging (pulmonary function) |
| 55758-7 | PHQ-2 total score | {score} | survey |
| 44261-6 | PHQ-9 total score | {score} | survey |
| 70274-6 | GAD-7 total score | {score} | survey |
| 72233-0 | Mini-Cog total score | {score} | survey |
| 75626-2 | AUDIT-C total score | {score} | survey |

Reference ranges are typical adult male ranges chosen for the teaching record. Imaging, pathology, PD-L1, sequencing, respiratory panel and infection screening results are recorded in procedure and note text, not as coded observations.

## Procedures, immunizations, and encounter types

- Pre-screening counseling (shared decision-making for lung cancer screening): SNOMED CT 225328009. Low dose computed tomography of chest without contrast: 16334891000119106. Positron emission tomography with computed tomography using fluorodeoxyglucose (18-F): 443271005. MRI of brain with contrast: 16327691000119101. Endoscopic endobronchial ultrasonography guided transbronchial needle aspiration of mediastinal lymph node: 1137699004. Multidisciplinary care conference: 384682003. Measurement of respiratory function: 23426006. Pulmonary rehabilitation: 15081005 (before and after surgery). CT of chest and upper abdomen with contrast: 868213000. Lobectomy of upper lobe of left lung: 726427004. Plain X-ray of chest: 399208008. Advance care planning: 713603004.
- Encounter types: SNOMED CT 390906007 (follow-up encounter) for the four focused chronic-care visits, 185345009 (encounter for symptom) for the sick visit, and 281038008 (geriatric annual health check) for the subsequent annual wellness visit. The services are named in plain text as HCPCS G0439 and CPT 99497; HCPCS and CPT are not used as coded values.
- Immunizations: CVX 216 (PCV20), 135 (influenza, high-dose), 309 (COVID-19 mRNA), 303 (RSV), 187 (recombinant zoster).
- Family history relationships: HL7 v3 RoleCode BRO and SIS.
- No known allergy: SNOMED CT 716186003.

## Vital signs

The seven visits use LOINC 8302-2, 29463-7, 39156-5, 8480-6, 8462-4, 8867-4, 9279-1, 8310-5, and 59408-5 with UCUM units.

## Review note

Codes were checked against the public terminology server and NLM RxNav on November 5, 2026. They do not imply that Jesse Owens received these diagnoses, tests, or medications during his lifetime.
