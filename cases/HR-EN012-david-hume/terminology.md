# Terminology — David Hume

> **SYNTHETIC RECORD, NOT A REAL MEDICAL RECORD**

## Diagnoses

| Use | System | Code | Display | Evidence |
|---|---|---|---|---|
| Active problem | ICD-10-CM FY2026 | C18.7 | Malignant neoplasm of sigmoid colon | S; linked to the documented 1775 bowel disorder (D) and its retrospective interpretation as colon cancer (R) |
| Active problem | ICD-10-CM FY2026 | D50.0 | Iron deficiency anemia secondary to blood loss (chronic) | S |
| Active problem | ICD-10-CM FY2026 | D18.03 | Hemangioma of intra-abdominal structures | S; liver lesion characterized by MRI |
| Resolved problem | ICD-10-CM FY2026 | J06.9 | Acute upper respiratory infection, unspecified | S; recorded at the September sick visit |
| Active problem | ICD-10-CM FY2026 | G62.0 | Drug-induced polyneuropathy | S; oxaliplatin, recorded at the end of chemotherapy |

## Medications (RxNorm)

| Code | Display |
|---|---|
| 1435169 | 15 ML ferric carboxymaltose 50 MG/ML Injection (two 750 mg doses) |
| 200328 | capecitabine 500 MG Oral Tablet |
| 1736781 | 20 ML oxaliplatin 5 MG/ML Injection |
| 312086 | ondansetron 8 MG Oral Tablet |
| 978006 | loperamide hydrochloride 2 MG Oral Capsule |

## Results (LOINC 2.81)

| Code | Measure | Unit | Category |
|---|---|---|---|
| 58410-2 | CBC panel (organizer) | — | panel |
| 718-7, 787-2, 6690-2, 751-8, 777-3 | Hemoglobin, MCV, white cell count, absolute neutrophil count, platelets | g/dL, fL, 10*3/uL | laboratory |
| 2276-4, 2502-3 | Ferritin, transferrin saturation | ng/mL, % | laboratory |
| 2039-6 | Carcinoembryonic antigen (CEA) | ng/mL | laboratory |
| 24323-8 | Comprehensive metabolic panel (organizer) | — | panel |
| 2951-2, 2823-3, 2160-0, 98979-8 | Sodium, potassium, creatinine, eGFR (CKD-EPI 2021) | mmol/L, mg/dL, mL/min/{1.73_m2} | laboratory |
| 1742-6, 1920-8, 6768-6, 1975-2, 1751-7 | ALT, AST, alkaline phosphatase, total bilirubin, albumin | U/L, mg/dL, g/dL | laboratory |
| 2093-3, 2085-9, 13457-7, 4548-4 | Total, HDL, and LDL cholesterol; HbA1c (preventive visit) | mg/dL, % | laboratory |
| 55758-7 | PHQ-2 total score | {score} | survey |
| 75626-2 | AUDIT-C total score (preventive visit) | {score} | survey |

eGFR values are calculated from the synthetic creatinine with the 2021 CKD-EPI creatinine equation for a 64-year-old man. Reference ranges are typical adult male ranges chosen for the teaching record; interpretation flags follow them, and validation checks that every flag agrees with its range.

## Procedures, immunizations, and family history

- Colonoscopy and biopsy of colon: SNOMED CT 446745002. CT of thorax, abdomen and pelvis with contrast: 433761009. MRI of liver with contrast: 431839003. Laparoscopic sigmoid colectomy: 1303413007. Chemotherapy: 367336001.
- Immunizations: CVX 140 (influenza, trivalent, preservative free), 216 (PCV20), and 115 (Tdap).
- No known allergy: SNOMED CT 716186003.
- Encounter types: SNOMED CT 390906007 (follow-up encounter) for the three focused chronic-care visits, 185345009 (encounter for symptom) for the September sick visit, and 86013001 (periodic reevaluation and management of healthy individual) for the adult preventive visit. The services are named in plain text as CPT 99396 and CPT 99497; CPT is not used as a coded value.
- Family relationships: HL7 RoleCode FTH (father) and MTH (mother).

## Vital signs

The six visits use LOINC 8302-2, 29463-7, 39156-5, 8480-6, 8462-4, 8867-4, 9279-1, 8310-5, and 59408-5 with UCUM units.

## Review note

Codes were checked against the public terminology server and NLM RxNav on November 3, 2026. They do not imply that Hume received these diagnoses, tests, or medications during his lifetime.
