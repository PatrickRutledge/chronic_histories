# Terminology — Mahalia Jackson

> **SYNTHETIC RECORD, NOT A REAL MEDICAL RECORD**

## Diagnoses

| Use | System | Code | Display | Evidence |
|---|---|---|---|---|
| Presenting problem; resolved (superseded) at the consultation | ICD-10-CM FY2026 | R06.09 | Other forms of dyspnea | S; linked to her documented breathlessness and 1952 history |
| Presenting finding; resolved (superseded) at the cardiac diagnosis | ICD-10-CM FY2026 | R00.2 | Palpitations | S |
| Problem from intake; resolved on treatment | ICD-10-CM FY2026 | E83.52 | Hypercalcemia | S |
| Problem recorded at the consultation (both_with_link) | ICD-10-CM FY2026 | D86.2 | Sarcoidosis of lung with sarcoidosis of lymph nodes | S; linked to her documented sarcoidosis |
| Problem recorded at the cardiac diagnosis (both_with_link) | ICD-10-CM FY2026 | D86.85 | Sarcoid myocarditis | S; linked to the documented 1964 account and the R interpretation |
| Problem recorded at the start of treatment | ICD-10-CM FY2026 | Z79.52 | Long term (current) use of systemic steroids | S |
| Problem recorded at the nine-week visit | ICD-10-CM FY2026 | Z95.810 | Presence of automatic (implantable) cardiac defibrillator | S |
| Problem added at the sick visit; resolved | ICD-10-CM FY2026 | J04.0 | Acute laryngitis | S |

## Medications (RxNorm)

| Code | Display |
|---|---|
| 312615 | prednisone 20 MG Oral Tablet (40 mg, then 20 mg) |
| 198145 | prednisone 10 MG Oral Tablet (30 mg, then 10 mg) |
| 312617 | prednisone 5 MG Oral Tablet (15 mg, then 7.5 mg) |
| 105585 | methotrexate 2.5 MG Oral Tablet (15 mg, then 20 mg weekly) |
| 310410 | folic acid 1 MG Oral Tablet |
| 308429 | atovaquone 150 MG/ML Oral Suspension |
| 904431 | alendronate sodium 70 MG Oral Tablet |
| 866427 | 24 HR metoprolol succinate 25 MG Extended Release Oral Tablet |
| 199362 | cholecalciferol 0.025 MG Oral Tablet |

The over-the-counter calcium and vitamin D tablet she stopped at the first visit is named in the notes and not recorded as a medication.

## Results (LOINC 2.81)

| Code | Measure | Unit | Category |
|---|---|---|---|
| 58410-2 | CBC panel (organizer) | — | panel |
| 718-7, 6690-2, 731-0, 777-3 | Hemoglobin, white cell count, lymphocyte count, platelets | g/dL, 10*3/uL | laboratory |
| 24323-8 | Comprehensive metabolic panel (organizer) | — | panel |
| 2951-2, 2823-3, 2160-0, 98979-8, 2345-7, 17861-6, 1742-6, 1920-8, 6768-6, 1751-7 | Sodium, potassium, creatinine, eGFR (CKD-EPI 2021), glucose, calcium, ALT, AST, alkaline phosphatase, albumin | mmol/L, mg/dL, mL/min/{1.73_m2}, U/L, g/dL | laboratory |
| 4548-4 | Hemoglobin A1c | % | laboratory |
| 62292-8 | 25-hydroxyvitamin D (D2 + D3) | ng/mL | laboratory |
| 62290-2 | 1,25-dihydroxyvitamin D | pg/mL | laboratory |
| 33762-6 | NT-proBNP | pg/mL | laboratory |
| 3016-3 | TSH | m[IU]/L | laboratory |
| 2093-3, 2085-9, 13457-7, 2571-8 | Total, HDL and LDL (calculated) cholesterol, triglycerides (preventive visit) | mg/dL | laboratory |
| 19872-1, 20152-5, 19926-5, 98130-8 | FVC measured/predicted, FEV1 measured/predicted, FEV1/FVC, DLCO/predicted | % | imaging (physiologic measurement, as in other records) |
| 55758-7 | PHQ-2 total score | {score} | survey |
| 44261-6 | PHQ-9 total score | {score} | survey |

No LOINC panel covers spirometry with diffusing capacity, so the lung function results stand alone. Reference ranges are typical adult female ranges chosen for the teaching record. Imaging, pathology, Holter, electrophysiology and device results are recorded in procedure and note text, not as coded observations.

## Procedures, immunizations, and encounter types

- Plain X-ray of chest: SNOMED CT 399208008. Electrocardiographic procedure: 29303009. CT of chest: 169069000. Endoscopic endobronchial ultrasonography guided transbronchial needle aspiration of mediastinal lymph node: 1137699004. Measurement of respiratory function: 23426006 (three times). Holter extended electrocardiographic recording: 427047002. Echocardiography: 40701008 (twice). Cardiac MRI: 241620005. Ophthalmic examination and evaluation: 36228007. PET heart study: 241439007 (twice). Bone density scan: 312681000. Cardiac electrophysiologic stimulation and recording study: 82982002. Implantation of internal cardiac defibrillator: 395218007. Advance care planning: 713603004.
- The more specific SNOMED CT code for MRI of the heart with late gadolinium enhancement was not used because its ten-digit identifier passes the NPI checksum that the validator rejects; 241620005 (Cardiac MRI) is used, with the enhancement described in the text.
- Encounter types: SNOMED CT 390906007 (follow-up encounter) for the four focused chronic-care visits, 185345009 (encounter for symptom) for the sick visit, and 86013001 (periodic reevaluation and management of healthy individual) for the preventive visit. The services are named in plain text as CPT 99396 and 99497; CPT is not used as a coded value.
- Immunizations: CVX 115 (Tdap, history), 140 (influenza, inactivated, twice), 216 (PCV20), 187 (recombinant zoster, two doses), 189 (hepatitis B, adjuvanted, two doses), and 309 (COVID-19 mRNA).
- Family history relationship: HL7 v3 RoleCode MTH.
- No known allergy: SNOMED CT 716186003.

## Vital signs

The seven visits use LOINC 8302-2, 29463-7, 39156-5, 8480-6, 8462-4, 8867-4, 9279-1, 8310-5, and 59408-5 with UCUM units.

## Review note

Codes were checked against the public terminology server and NLM RxNav on November 4, 2026. They do not imply that Mahalia Jackson received these diagnoses, tests, or medications during her lifetime.
