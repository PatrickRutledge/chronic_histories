# Terminology — Lorraine Hansberry

> **SYNTHETIC RECORD, NOT A REAL MEDICAL RECORD**

## Diagnoses

| Use | System | Code | Display | Evidence |
|---|---|---|---|---|
| Presenting problem; resolved (superseded) at the diagnosis visit | ICD-10-CM FY2026 | R10.13 | Epigastric pain | S; linked to her documented onset |
| Active problem from intake | ICD-10-CM FY2026 | D50.0 | Iron deficiency anemia secondary to blood loss (chronic) | S; linked to her documented onset |
| Presenting finding; resolved (superseded) at the diagnosis visit | ICD-10-CM FY2026 | R73.09 | Other abnormal glucose | S |
| Problem recorded at the diagnosis visit (both_with_link) | ICD-10-CM FY2026 | C25.0 | Malignant neoplasm of head of pancreas | S; linked to her documented cancer and to the R claim on its site |
| Problem recorded at the diagnosis visit | ICD-10-CM FY2026 | E08.9 | Diabetes mellitus due to underlying condition without complications | S |
| Problem recorded at the diagnosis visit | ICD-10-CM FY2026 | K86.81 | Exocrine pancreatic insufficiency | S |
| Problem recorded at the diagnosis visit | ICD-10-CM FY2026 | G89.3 | Neoplasm related pain (acute) (chronic) | S |
| Problem recorded at the diagnosis visit; resolved after surgery | ICD-10-CM FY2026 | K83.1 | Obstruction of bile duct | S |
| Problem recorded at cycle 4 | ICD-10-CM FY2026 | G62.0 | Drug-induced polyneuropathy | S |
| Problem added at the sick visit; resolved | ICD-10-CM FY2026 | K52.1 | Toxic gastroenteritis and colitis | S |
| Problem recorded after surgery | ICD-10-CM FY2026 | Z90.411 | Acquired partial absence of pancreas | S |

## Medications (RxNorm)

| Code | Display |
|---|---|
| 314200 | pantoprazole 40 MG Delayed Release Oral Tablet |
| 1435169 | 15 ML ferric carboxymaltose 50 MG/ML Injection (two doses) |
| 1049621 | oxycodone hydrochloride 5 MG Oral Tablet (as needed) |
| 312935 | sennosides, USP 8.6 MG Oral Tablet |
| 1373325 | amylase 180000 UNT / lipase 36000 UNT / protease 114000 UNT Delayed Release Oral Capsule (two dose periods) |
| 1736776 | 10 ML oxaliplatin 5 MG/ML Injection (six cycles) |
| 1726324 | 5 ML irinotecan hydrochloride 20 MG/ML Injection (cycles 1 to 5, reduced dose for cycle 6, and after surgery) |
| 2099993 | 10 ML leucovorin 10 MG/ML Injection |
| 239177 | fluorouracil 50 MG/ML Injectable Solution (46-hour infusion) |
| 727539 | 0.6 ML pegfilgrastim 10 MG/ML Prefilled Syringe |
| 312086 | ondansetron 8 MG Oral Tablet (as needed) |
| 312078 | olanzapine 5 MG Oral Tablet (days 1 to 4) |
| 978006 | loperamide hydrochloride 2 MG Oral Capsule |
| 1364435 | apixaban 2.5 MG Oral Tablet (during chemotherapy before and after surgery) |
| 198116 | potassium chloride 20 MEQ Extended Release Oral Tablet (sick visit) |
| 854235 | 0.4 ML enoxaparin sodium 100 MG/ML Prefilled Syringe (28 days after surgery) |
| 847230 | 3 ML insulin glargine 100 UNT/ML Pen Injector (8 units, then 10 units) |

Infusion-day medicines (fosaprepitant, palonosetron, dexamethasone on day 1, atropine as needed), intravenous fluids and magnesium sulfate are named in the notes and not recorded as separate medications.

## Results (LOINC 2.81)

| Code | Measure | Unit | Category |
|---|---|---|---|
| 58410-2 | CBC panel (organizer) | — | panel |
| 718-7, 787-2, 6690-2, 751-8, 777-3 | Hemoglobin, MCV, white cell count, absolute neutrophil count, platelets | g/dL, fL, 10*3/uL | laboratory |
| 2276-4 | Ferritin | ng/mL | laboratory |
| 24323-8 | Comprehensive metabolic panel (organizer) | — | panel |
| 2951-2, 2823-3, 2160-0, 98979-8, 2345-7, 1742-6, 1920-8, 6768-6, 1975-2, 1751-7 | Sodium, potassium, creatinine, eGFR (CKD-EPI 2021), glucose, ALT, AST, alkaline phosphatase, total bilirubin, albumin | mmol/L, mg/dL, mL/min/{1.73_m2}, U/L, g/dL | laboratory |
| 3040-3 | Lipase | U/L | laboratory |
| 4548-4 | Hemoglobin A1c | % | laboratory |
| 24108-3 | Cancer antigen 19-9 | U/mL | laboratory |
| 2039-6 | Carcinoembryonic antigen | ng/mL | laboratory |
| 6301-6 | INR | {INR} | laboratory |
| 19123-9 | Magnesium | mg/dL | laboratory |
| 9318-7 | Urine albumin-to-creatinine ratio | mg/g | laboratory |
| 55758-7 | PHQ-2 total score | {score} | survey |
| 44261-6 | PHQ-9 total score | {score} | survey |
| 70274-6 | GAD-7 total score | {score} | survey |
| 72514-3 | Pain severity, 0 to 10 verbal numeric rating | {score} | survey |

Reference ranges are typical adult female ranges chosen for the teaching record. Endoscopy, imaging, pathology, genetic and tumor results are recorded in procedure and note text, not as coded observations.

## Procedures, immunizations, and encounter types

- Endoscopy and biopsy of upper gastrointestinal tract: SNOMED CT 445982009. Computed tomography of abdomen and pelvis with contrast: 432370003 (staging and restaging). Endoscopic ultrasonography guided fine needle aspiration of pancreatic lesion: 788641000. Insertion of biliary stent by ERCP: 83735008. Multidisciplinary care conference: 384682003. Genetic counseling: 79841006. Palliative care: 103735009. Pylorus-sparing pancreaticoduodenectomy: 116242006. Advance care planning: 713603004.
- Encounter types: SNOMED CT 390906007 (follow-up encounter) for the four focused chronic-care visits, 185345009 (encounter for symptom) for the sick visit, and 86013001 (periodic reevaluation and management of healthy individual) for the preventive visit. The services are named in plain text as CPT 99395 and 99497; CPT is not used as a coded value.
- Immunizations: CVX 115 (Tdap, history), 216 (PCV20), 187 (recombinant zoster, two doses), 140 (influenza, inactivated), and 309 (COVID-19 mRNA).
- Family history relationship: HL7 v3 RoleCode FTH.
- No known allergy: SNOMED CT 716186003.

## Vital signs

The seven visits use LOINC 8302-2, 29463-7, 39156-5, 8480-6, 8462-4, 8867-4, 9279-1, 8310-5, and 59408-5 with UCUM units.

## Review note

Codes were checked against the public terminology server and NLM RxNav on November 4, 2026. They do not imply that Lorraine Hansberry received these diagnoses, tests, or medications during her lifetime.
