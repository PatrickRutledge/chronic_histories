# Terminology — Jim Thorpe

> **SYNTHETIC RECORD, NOT A REAL MEDICAL RECORD**

## Diagnoses

| Use | System | Code | Display | Evidence |
|---|---|---|---|---|
| Presenting problem; resolved (superseded) at the consultation | ICD-10-CM FY2026 | K13.0 | Diseases of lips | S; linked to the documented lip cancer |
| Problem recorded at the consultation | ICD-10-CM FY2026 | C00.1 | Malignant neoplasm of external lower lip | S; linked to the documented lip cancer |
| Active problem from intake | ICD-10-CM FY2026 | I25.119 | Atherosclerotic heart disease of native coronary artery with unspecified angina pectoris | S; linked to the documented heart attacks |
| Problem added at the sick visit, resolved | ICD-10-CM FY2026 | S39.012A | Strain of muscle, fascia and tendon of lower back, initial encounter | S |
| Problem recorded at the preventive visit | ICD-10-CM FY2026 | L57.0 | Actinic keratosis | S |

The documented alcohol problem and the roster’s depression are not coded (see sources.md).

## Medications (RxNorm)

| Code | Display |
|---|---|
| 308416 | aspirin 81 MG Delayed Release Oral Tablet |
| 259255 | atorvastatin 80 MG Oral Tablet |
| 349556 | ezetimibe 10 MG Oral Tablet (from the post-operative visit) |
| 866427 | 24 HR metoprolol succinate 25 MG Extended Release Oral Tablet |
| 198039 | nitroglycerin 0.4 MG Sublingual Tablet |
| 198440 | acetaminophen 500 MG Oral Tablet (sick visit, two weeks) |

## Results (LOINC 2.81)

| Code | Measure | Unit | Category |
|---|---|---|---|
| 6690-2, 718-7, 777-3 | White cells, hemoglobin, platelets | 10*3/uL, g/dL | laboratory |
| 51990-0 | Basic metabolic panel (organizer) | — | panel |
| 2951-2, 2823-3, 2160-0, 98979-8, 2345-7 | Sodium, potassium, creatinine, eGFR (CKD-EPI 2021), glucose | mmol/L, mg/dL, mL/min/{1.73_m2} | laboratory |
| 4548-4 | Hemoglobin A1c | % | laboratory |
| 2093-3, 13457-7, 2085-9, 2571-8 | Total cholesterol, LDL (calculated), HDL, triglycerides | mg/dL | laboratory |
| 1742-6 | ALT | U/L | laboratory |
| 10230-1 | Left ventricular ejection fraction (echocardiogram) | % | imaging |
| 55758-7 | PHQ-2 total score | {score} | survey |
| 75626-2 | AUDIT-C total score | {score} | survey |

Reference ranges are typical adult male ranges chosen for the teaching record; the LDL range carries the secondary-prevention goal in its text. Pathology, the ECG, the neck CT, the low-dose chest CT (Lung-RADS), the stool immunochemical test, and the HIV and hepatitis tests are recorded as narrative.

## Procedures, immunizations, and encounter types

- Incisional biopsy of lesion of lip: SNOMED CT 282367003.
- Echocardiography: SNOMED CT 40701008.
- CT of neck with contrast: SNOMED CT 431326009.
- V-excision of lip with primary direct linear closure: SNOMED CT 47628005.
- Low dose computed tomography of chest without contrast: SNOMED CT 16334891000119106.
- Cryotherapy of actinic keratosis: SNOMED CT 445111008.
- Advance care planning: SNOMED CT 713603004.
- Encounter types: SNOMED CT 390906007 (follow-up encounter) for the four focused chronic-care visits, 86013001 (periodic reevaluation and management of healthy individual) for the preventive visit, and 185345009 (encounter for symptom) for the sick visit. The services are named in plain text as CPT 99396 and 99497; CPT is not used as a coded value.
- Immunizations: CVX 140 (inactivated influenza), 216 (PCV20), 187 (recombinant zoster), and 115 (Tdap).
- No known allergy: SNOMED CT 716186003.

## Vital signs

The seven visits use LOINC 8302-2, 29463-7, 39156-5, 8480-6, 8462-4, 8867-4, 9279-1, 8310-5, and 59408-5 with UCUM units.

## Review note

Codes were checked against the public terminology server and NLM RxNav on November 4, 2026. They do not imply that Jim Thorpe received these diagnoses, tests, or medications during his lifetime.
