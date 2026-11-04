# Terminology — Yul Brynner

> **SYNTHETIC RECORD, NOT A REAL MEDICAL RECORD**

## Diagnoses

| Use | System | Code | Display | Evidence |
|---|---|---|---|---|
| Active problem (from the second visit) | ICD-10-CM FY2026 | C34.12 | Malignant neoplasm of upper lobe, left bronchus or lung | S; linked to his documented inoperable lung cancer |
| Active problem (from the second visit) | ICD-10-CM FY2026 | C79.51 | Secondary malignant neoplasm of bone | S |
| Active problem | ICD-10-CM FY2026 | J38.01 | Paralysis of vocal cords and larynx, unilateral | S; linked to the published vocal-cord complaint |
| Presenting finding | ICD-10-CM FY2026 | R91.8 | Other nonspecific abnormal finding of lung field | S |
| Active problem | ICD-10-CM FY2026 | Z87.891 | Personal history of nicotine dependence | S; linked to his documented smoking and quitting |
| Active problem (from the sick visit) | ICD-10-CM FY2026 | L27.0 | Generalized skin eruption due to drugs and medicaments taken internally | S |

Histology, stage (AJCC 8th edition cT4 N2 M1c, IVB), PD-L1, and sequencing results are recorded in the problem and procedure text; ICD-10-CM has no codes for them.

## Medications (RxNorm)

| Code | Display |
|---|---|
| 1657750 | 4 ML pembrolizumab 25 MG/ML Injection (200 mg every 3 weeks) |
| 1114085 | 100 ML zoledronic acid 0.04 MG/ML Injection (4 mg every 12 weeks) |
| 199362 | cholecalciferol 0.025 MG Oral Tablet (1000 units daily) |
| 1014314 | triamcinolone acetonide 1 MG/ML Topical Cream (0.1%, twice daily) |
| 1014678 | cetirizine hydrochloride 10 MG Oral Tablet (as needed) |

## Results (LOINC 2.81)

| Code | Measure | Unit | Category |
|---|---|---|---|
| 718-7, 6690-2, 777-3, 711-2 | Hemoglobin, white cells, platelets, eosinophils | g/dL, 10*3/uL | laboratory |
| 2951-2, 2823-3, 2160-0, 98979-8 | Sodium, potassium, creatinine, eGFR (CKD-EPI 2021) | mmol/L, mg/dL, mL/min/{1.73_m2} | laboratory |
| 17861-6, 1751-7 | Calcium, albumin | mg/dL, g/dL | laboratory |
| 1742-6, 1920-8, 6768-6, 1975-2 | ALT, AST, alkaline phosphatase, total bilirubin | U/L, mg/dL | laboratory |
| 2345-7 | Glucose | mg/dL | laboratory |
| 3016-3, 3024-7 | TSH, free T4 | m[IU]/L, ng/dL | laboratory |
| 2143-6 | Cortisol (morning) | ug/dL | laboratory |
| 44261-6, 55758-7, 75626-2 | PHQ-9, PHQ-2, AUDIT-C | {score} | survey |
| 112493-2 | Edmonton Symptom Assessment System total score | {score} | survey |

PD-L1 (22C3 tumor proportion score) and the sequencing results are recorded in the biopsy procedure text, because no numeric LOINC tumor-proportion code was verified on the terminology server. The NCCN Distress Thermometer and ECOG performance status are recorded as narrative.

## Procedures, immunizations, and encounters

- Flexible laryngoscopy: SNOMED CT 49077009. CT of the thorax, abdomen, and pelvis with contrast: 433761009. FDG PET-CT: 443271005. MRI of the brain with contrast: 16327691000119101. Endobronchial ultrasound-guided needle aspiration of mediastinal nodes: 1137699004. Palliative care: 103735009. Laryngoscopic vocal cord injection: 1303718002. Advance care planning: 713603004.
- Encounter types: SNOMED CT 390906007 (follow-up encounter) for the three focused chronic-care visits, 185345009 (encounter for symptom) for the sick visit, and 86013001 (periodic reevaluation and management of healthy individual) for the adult preventive visit. The preventive services are named in plain text as CPT 99396 and 99497; neither is used as a coded value.
- Immunizations: CVX 140 (influenza, trivalent, PF; the 2025-2026 and 2026-2027 doses), 115 (Tdap), 216 (PCV20), and 187 (recombinant zoster, dose 1).
- No known allergy: SNOMED CT 716186003.
- Family history: none recorded.

## Vital signs

The six visits use LOINC 8302-2, 29463-7, 39156-5, 8480-6, 8462-4, 8867-4, 9279-1, 8310-5, and 59408-5 with UCUM units.

## Review note

Codes were checked against the public terminology server and NLM RxNav on November 3, 2026. They do not imply that Brynner received these diagnoses, tests, or medications during his lifetime.
