# Terminology — Gwen Ifill

> **SYNTHETIC RECORD, NOT A REAL MEDICAL RECORD**

## Diagnoses

| Use | System | Code | Display | Evidence |
|---|---|---|---|---|
| Presenting problem; resolved (superseded) at the consultation | ICD-10-CM FY2026 | N95.0 | Postmenopausal bleeding | S |
| Problem recorded at the consultation (both_with_link) | ICD-10-CM FY2026 | C54.1 | Malignant neoplasm of endometrium | S; linked to her publicly reported endometrial cancer |
| Problem recorded after surgical staging | ICD-10-CM FY2026 | C77.8 | Secondary and unspecified malignant neoplasm of lymph nodes of multiple regions | S |
| Problem recorded at cycle 4 | ICD-10-CM FY2026 | G62.0 | Drug-induced polyneuropathy | S |
| Problem recorded at the end of combination treatment | ICD-10-CM FY2026 | E03.2 | Hypothyroidism due to medicaments and other exogenous substances | S |

## Medications (RxNorm)

| Code | Display |
|---|---|
| 198440 | acetaminophen 500 MG Oral Tablet (after surgery) |
| 2539972 | 10 ML dostarlimab-gxly 50 MG/ML Injection (500 mg every 3 weeks for six cycles; then 1000 mg every 6 weeks) |
| 597195 | carboplatin 10 MG/ML Injectable Solution (six cycles) |
| 312199 | paclitaxel 6 MG/ML Injectable Solution (six cycles) |
| 312086 | ondansetron 8 MG Oral Tablet (as needed) |
| 966222 | levothyroxine sodium 0.075 MG Oral Tablet |

The infusion-day premedication and antiemetics (fosaprepitant, palonosetron, dexamethasone, diphenhydramine, famotidine) are named in the notes and not recorded as separate medications.

## Results (LOINC 2.81)

| Code | Measure | Unit | Category |
|---|---|---|---|
| 58410-2 | CBC panel (organizer) | — | panel |
| 718-7, 6690-2, 751-8, 777-3 | Hemoglobin, white cell count, absolute neutrophil count, platelets | g/dL, 10*3/uL | laboratory |
| 24323-8 | Comprehensive metabolic panel (organizer) | — | panel |
| 2951-2, 2823-3, 2160-0, 98979-8, 2345-7, 1742-6, 1920-8, 1975-2, 1751-7 | Sodium, potassium, creatinine, eGFR (CKD-EPI 2021), glucose, ALT, AST, total bilirubin, albumin | mmol/L, mg/dL, mL/min/{1.73_m2}, U/L, g/dL | laboratory |
| 19123-9 | Magnesium | mg/dL | laboratory |
| 4548-4 | Hemoglobin A1c | % | laboratory |
| 10334-1 | Cancer antigen 125 (CA-125) | U/mL | laboratory |
| 3016-3, 3024-7 | TSH, free T4 | m[IU]/L, ng/dL | laboratory |
| 2143-6 | Cortisol (morning) | ug/dL | laboratory |
| 24331-1 | Lipid panel (organizer, preventive visit) | — | panel |
| 2093-3, 2085-9, 13457-7, 2571-8 | Total, HDL, and LDL (calculated) cholesterol, triglycerides (preventive visit) | mg/dL | laboratory |
| 55758-7 | PHQ-2 total score | {score} | survey |
| 44261-6 | PHQ-9 total score | {score} | survey |
| 70274-6 | GAD-7 total score | {score} | survey |

Reference ranges are typical adult female ranges chosen for the teaching record. Pathology, immunohistochemistry (mismatch repair proteins, p53), MLH1 promoter methylation, POLE sequencing, hepatitis and HIV serology, and imaging results are recorded in procedure and note text, not as coded observations.

## Procedures, immunizations, and encounter types

- Endometrial biopsy: SNOMED CT 386802000. Transvaginal ultrasonography of pelvis: 429915000. CT of chest, abdomen and pelvis: 418023006 (staging and end of treatment). Laparoscopic total abdominal hysterectomy and bilateral salpingo-oophorectomy: 414575003. Sentinel lymph node biopsy: 396487001. Excision of lymph node (para-aortic): 58347006. Genetic counseling: 79841006. Advance care planning: 713603004. Screening mammography: 24623002.
- Encounter types: SNOMED CT 390906007 (follow-up encounter) for the four focused chronic-care visits and 86013001 (periodic reevaluation and management of healthy individual) for the preventive visit. There is no sick visit (recent-death rule). The services are named in plain text as CPT 99396 and 99497; CPT is not used as a coded value.
- Immunizations: CVX 216 (PCV20), 187 (recombinant zoster, dose 1), and 115 (Tdap).
- No known allergy: SNOMED CT 716186003.

## Vital signs

The six visits use LOINC 8302-2, 29463-7, 39156-5, 8480-6, 8462-4, 8867-4, 9279-1, 8310-5, and 59408-5 with UCUM units.

## Review note

Codes were checked against the public terminology server and NLM RxNav on November 4, 2026. They do not imply that Gwen Ifill received these diagnoses, tests, or medications during her lifetime.
