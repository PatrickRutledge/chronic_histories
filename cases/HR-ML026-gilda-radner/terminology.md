# Terminology — Gilda Radner

> **SYNTHETIC RECORD, NOT A REAL MEDICAL RECORD**

## Diagnoses

| Use | System | Code | Display | Evidence |
|---|---|---|---|---|
| Presenting problem; resolved (superseded) at the consultation | ICD-10-CM FY2026 | R19.00 | Intra-abdominal and pelvic swelling, mass and lump, unspecified site | S; linked to her documented symptoms |
| Problem recorded at the consultation (both_with_link) | ICD-10-CM FY2026 | C56.3 | Malignant neoplasm of bilateral ovaries | S; linked to her documented ovarian cancer |
| Problem recorded at the consultation | ICD-10-CM FY2026 | C78.6 | Secondary malignant neoplasm of retroperitoneum and peritoneum | S |
| Active problem from intake | ICD-10-CM FY2026 | Z80.41 | Family history of malignant neoplasm of ovary | S; coding of her documented family history |
| Problem recorded three weeks after surgery | ICD-10-CM FY2026 | E89.41 | Symptomatic postprocedural ovarian failure | S |
| Problem added at the sick visit, resolved | ICD-10-CM FY2026 | J06.9 | Acute upper respiratory infection, unspecified | S |
| Problem recorded at cycle 4 | ICD-10-CM FY2026 | G62.0 | Drug-induced polyneuropathy | S |

Her documented bulimia is not coded (see sources.md).

## Medications (RxNorm)

| Code | Display |
|---|---|
| 854235 | 0.4 ML enoxaparin sodium 100 MG/ML Prefilled Syringe (28 days after surgery) |
| 198440 | acetaminophen 500 MG Oral Tablet (after surgery) |
| 597195 | carboplatin 10 MG/ML Injectable Solution (six cycles) |
| 312199 | paclitaxel 6 MG/ML Injectable Solution (six cycles) |
| 312086 | ondansetron 8 MG Oral Tablet (as needed) |
| 1942487 | olaparib 150 MG Oral Tablet (maintenance) |

The infusion-day premedication and antiemetics (fosaprepitant, palonosetron, dexamethasone, diphenhydramine, famotidine) are named in the notes and not recorded as separate medications.

## Results (LOINC 2.81)

| Code | Measure | Unit | Category |
|---|---|---|---|
| 58410-2 | CBC panel (organizer) | — | panel |
| 718-7, 6690-2, 751-8, 777-3 | Hemoglobin, white cell count, absolute neutrophil count, platelets | g/dL, 10*3/uL | laboratory |
| 24323-8 | Comprehensive metabolic panel (organizer) | — | panel |
| 2951-2, 2823-3, 2160-0, 98979-8, 2345-7, 17861-6, 1742-6, 1920-8, 6768-6, 1975-2, 1751-7 | Sodium, potassium, creatinine, eGFR (CKD-EPI 2021), glucose, calcium, ALT, AST, alkaline phosphatase, total bilirubin, albumin | mmol/L, mg/dL, mL/min/{1.73_m2}, U/L, g/dL | laboratory |
| 19123-9 | Magnesium | mg/dL | laboratory |
| 10334-1 | Cancer antigen 125 (CA-125) | U/mL | laboratory |
| 2039-6 | Carcinoembryonic antigen | ng/mL | laboratory |
| 2093-3, 2085-9, 13457-7, 2571-8 | Total, HDL, and LDL (calculated) cholesterol, triglycerides (preventive visit) | mg/dL | laboratory |
| 55758-7 | PHQ-2 total score | {score} | survey |
| 44261-6 | PHQ-9 total score | {score} | survey |
| 70274-6 | GAD-7 total score | {score} | survey |
| 72514-3 | Pain severity, 0 to 10 verbal numeric rating | {score} | survey |
| 75626-2 | AUDIT-C total score (preventive visit) | {score} | survey |

Reference ranges are typical adult female ranges chosen for the teaching record. Imaging, pathology, and genetic results (germline panel, tumor BRCA1 and homologous recombination deficiency) are recorded in procedure and note text, not as coded observations.

## Procedures, immunizations, and encounter types

- Transvaginal ultrasonography of pelvis: SNOMED CT 429915000. CT of chest, abdomen and pelvis: 418023006 (staging and end of treatment). Biopsy of omentum: 17444001. Debulking of neoplasm of ovary: 446526009. Genetic counseling: 79841006. Advance care planning: 713603004.
- Encounter types: SNOMED CT 390906007 (follow-up encounter) for the four focused chronic-care visits, 185345009 (encounter for symptom) for the sick visit, and 86013001 (periodic reevaluation and management of healthy individual) for the preventive visit. The services are named in plain text as CPT 99396 and 99497; CPT is not used as a coded value.
- Immunizations: CVX 115 (Tdap, history), 140 (influenza, inactivated), 309 (COVID-19 mRNA), 216 (PCV20), and 187 (recombinant zoster, dose 1).
- Family history relationships: HL7 v3 RoleCode FTH, GRMTH, AUNT, COUSN.
- No known allergy: SNOMED CT 716186003.

## Vital signs

The seven visits use LOINC 8302-2, 29463-7, 39156-5, 8480-6, 8462-4, 8867-4, 9279-1, 8310-5, and 59408-5 with UCUM units.

## Review note

Codes were checked against the public terminology server and NLM RxNav on November 4, 2026. They do not imply that Gilda Radner received these diagnoses, tests, or medications during her lifetime.
