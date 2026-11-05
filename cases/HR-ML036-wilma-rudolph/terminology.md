# Terminology — Wilma Rudolph

> **SYNTHETIC RECORD, NOT A REAL MEDICAL RECORD**

## Diagnoses

| Use | System | Code | Display | Evidence |
|---|---|---|---|---|
| Presenting problem; resolved (superseded) when the MRI showed a mass | ICD-10-CM FY2026 | R29.818 | Other symptoms and signs involving the nervous system | S |
| Problem recorded at the MRI visit; resolved (superseded) by the pathology | ICD-10-CM FY2026 | D49.6 | Neoplasm of unspecified behavior of brain | S |
| Problem recorded after surgery (both_with_link) | ICD-10-CM FY2026 | C71.1 | Malignant neoplasm of frontal lobe | S; linked to her publicly reported brain cancer |
| Problem at intake (both_with_link) | ICD-10-CM FY2026 | B91 | Sequelae of poliomyelitis | S; linked to her documented childhood polio (D) |
| Problem recorded at the MRI visit; resolved after chemoradiation | ICD-10-CM FY2026 | G93.6 | Cerebral edema | S |
| Problem recorded after surgery; resolved after the steroid taper | ICD-10-CM FY2026 | R73.9 | Hyperglycemia, unspecified | S |
| Problem recorded at the end of chemoradiation | ICD-10-CM FY2026 | D72.810 | Lymphocytopenia | S |

## Medications (RxNorm)

| Code | Display |
|---|---|
| 198440 | acetaminophen 500 MG Oral Tablet (as needed) |
| 197582 | dexamethasone 4 MG Oral Tablet (until surgery) |
| 197581 | dexamethasone 2 MG Oral Tablet (postoperative taper, two entries) |
| 310273 | famotidine 20 MG Oral Tablet (while on dexamethasone) |
| 700883 | temozolomide 140 MG Oral Capsule (140 mg daily with radiotherapy; 280 mg on days 1 to 5 of adjuvant cycle 1) |
| 198335 | sulfamethoxazole 800 MG / trimethoprim 160 MG Oral Tablet (Pneumocystis prophylaxis) |
| 312086 | ondansetron 8 MG Oral Tablet |

Inpatient heparin prophylaxis after surgery and the topical corticosteroid for the scalp are named in the notes and not recorded as separate medications. Tumor-treating fields are a device and appear in the care plan and note text.

## Results (LOINC 2.81)

| Code | Measure | Unit | Category |
|---|---|---|---|
| 58410-2 | CBC panel (organizer) | — | panel |
| 718-7, 6690-2, 751-8, 731-0, 777-3 | Hemoglobin, white cell count, absolute neutrophil count, absolute lymphocyte count, platelets | g/dL, 10*3/uL | laboratory |
| 24323-8 | Comprehensive metabolic panel (organizer) | — | panel |
| 2951-2, 2823-3, 2160-0, 98979-8, 2345-7, 1742-6, 1920-8, 1975-2, 1751-7 | Sodium, potassium, creatinine, eGFR (CKD-EPI 2021), glucose, ALT, AST, total bilirubin, albumin | mmol/L, mg/dL, mL/min/{1.73_m2}, U/L, g/dL | laboratory |
| 4548-4 | Hemoglobin A1c | % | laboratory |
| 6301-6 | INR | {INR} | laboratory |
| 3173-2 | aPTT | s | laboratory |
| 89243-0 | Karnofsky Performance Status score | {score} | survey |
| 55758-7 | PHQ-2 total score | {score} | survey |
| 44261-6 | PHQ-9 total score | {score} | survey |
| 70274-6 | GAD-7 total score | {score} | survey |

Reference ranges are typical adult female ranges chosen for the teaching record. Pathology, molecular markers (IDH, ATRX, TERT, EGFR, chromosomes 7 and 10, CDKN2A, histone H3, BRAF, MGMT), hepatitis and HIV serology, and imaging results are recorded in procedure and note text, not as coded observations.

## Procedures, immunizations, and encounter types

- MRI of brain with contrast: SNOMED CT 16327691000119101 (diagnostic, postoperative and post-chemoradiation MRI). CT of chest, abdomen and pelvis: 418023006. MRI of brain with functional imaging: 241603006. Craniotomy and excision of neoplasm of brain: 447107001. Physical therapy assessment: 410158009. External beam radiation therapy procedure: 33195004. Palliative care: 103735009. Advance care planning: 713603004.
- Encounter types: SNOMED CT 390906007 (follow-up encounter) for the four focused chronic-care visits and 86013001 (periodic reevaluation and management of healthy individual) for the preventive visit. There is no sick visit (recent-death rule). The services are named in plain text as CPT 99396 and 99497; CPT is not used as a coded value.
- Immunizations: CVX 140 (influenza, trivalent, preservative free), 216 (PCV20), and 187 (recombinant zoster, dose 1).
- No known allergy: SNOMED CT 716186003.

## Vital signs

The six visits use LOINC 8302-2, 29463-7, 39156-5, 8480-6, 8462-4, 8867-4, 9279-1, 8310-5, and 59408-5 with UCUM units.

## Review note

Codes were checked against the public terminology server and NLM RxNav on November 4, 2026. They do not imply that Wilma Rudolph received these diagnoses, tests, or medications during her lifetime.
