# Terminology — Jackie Robinson

> **SYNTHETIC RECORD, NOT A REAL MEDICAL RECORD**

## Diagnoses

| Use | System | Code | Display | Evidence |
|---|---|---|---|---|
| Intake finding, resolved two days later | ICD-10-CM FY2026 | H53.8 | Other visual disturbances | S; linked to the documented loss of vision |
| Intake finding, resolved at the sick visit | ICD-10-CM FY2026 | R07.89 | Other chest pain | S; linked to the documented heart disease |
| Active problem | ICD-10-CM FY2026 | E11.65 | Type 2 diabetes mellitus with hyperglycemia | S; linked to his documented diabetes |
| Active problem from two days | ICD-10-CM FY2026 | E11.3513 | Type 2 diabetes mellitus with proliferative diabetic retinopathy with macular edema, bilateral | S; linked to the documented vision loss (D) and its likely cause (R) |
| Active problem from two days | ICD-10-CM FY2026 | H43.11 | Vitreous hemorrhage, right eye | S |
| Active problem | ICD-10-CM FY2026 | I12.9 | Hypertensive chronic kidney disease with stage 1 through stage 4 chronic kidney disease, or unspecified chronic kidney disease | S; linked to his documented high blood pressure |
| Active problem | ICD-10-CM FY2026 | E11.22 | Type 2 diabetes mellitus with diabetic chronic kidney disease | S |
| Active problem | ICD-10-CM FY2026 | N18.2 | Chronic kidney disease, stage 2 (mild) | S |
| Active problem | ICD-10-CM FY2026 | E11.51 | Type 2 diabetes mellitus with diabetic peripheral angiopathy without gangrene | S; linked to the documented artery damage in his legs |
| Active problem | ICD-10-CM FY2026 | E11.42 | Type 2 diabetes mellitus with diabetic polyneuropathy | S; linked to the documented nerve damage in his legs |
| Active problem | ICD-10-CM FY2026 | Z86.73 | Personal history of transient ischemic attack (TIA), and cerebral infarction without residual deficits | S; linked to the documented strokes |
| Active problem | ICD-10-CM FY2026 | E78.5 | Hyperlipidemia, unspecified | S |
| Active problem | ICD-10-CM FY2026 | Z63.4 | Disappearance and death of family member | S; linked to his son's documented death |
| Active problem from the sick visit | ICD-10-CM FY2026 | I25.119 | Atherosclerotic heart disease of native coronary artery with unspecified angina pectoris | S; linked to the documented heart disease |
| Sick-visit problem, resolved at the preventive visit | ICD-10-CM FY2026 | S90.821A | Blister (nonthermal), right foot, initial encounter | S |

## Medications (RxNorm)

| Code | Display |
|---|---|
| 861004 | metformin hydrochloride 1000 MG Oral Tablet |
| 847230 | 3 ML insulin glargine 100 UNT/ML Pen Injector |
| 314077 | lisinopril 20 MG Oral Tablet (to two days) |
| 197884 | lisinopril 40 MG Oral Tablet (from two days) |
| 259255 | atorvastatin 80 MG Oral Tablet (from intake) |
| 308416 | aspirin 81 MG Delayed Release Oral Tablet |
| 2180666 | glucagon 3 MG Nasal Powder |
| 1545658 | empagliflozin 10 MG Oral Tablet (from two days) |
| 866427 | 24 HR metoprolol succinate 25 MG Extended Release Oral Tablet (from the stress test) |
| 198039 | nitroglycerin 0.4 MG Sublingual Tablet (from the stress test) |
| 349556 | ezetimibe 10 MG Oral Tablet (from three months) |
| 1551295 | 0.5 ML dulaglutide 1.5 MG/ML Auto-Injector (from three months) |

Aflibercept is recorded as the intravitreal injection procedure, not as a medication entry. The atorvastatin 40 mg taken before intake is named in the medication display only.

## Results (LOINC 2.81)

| Code | Measure | Unit | Category |
|---|---|---|---|
| 4548-4 | Hemoglobin A1c | % | laboratory |
| 51990-0 | Basic metabolic panel (organizer) | — | panel |
| 2345-7, 2951-2, 2823-3, 2160-0 | Glucose, sodium, potassium, creatinine | mg/dL, mmol/L | laboratory |
| 98979-8 | eGFR (CKD-EPI 2021) | mL/min/{1.73_m2} | laboratory |
| 9318-7 | Urine albumin-to-creatinine ratio | mg/g | laboratory |
| 2093-3, 13457-7, 2085-9, 2571-8 | Total cholesterol, LDL (calculated), HDL, triglycerides | mg/dL | laboratory |
| 1742-6, 1920-8 | ALT, AST | U/L | laboratory |
| 718-7, 777-3 | Hemoglobin, platelets | g/dL, 10*3/uL | laboratory |
| 2132-9 | Vitamin B12 | pg/mL | laboratory |
| 3016-3 | TSH | m[IU]/L | laboratory |
| 79876-9, 79877-7 | Best-corrected visual acuity, right and left eye (ETDRS letters) | {letters} | imaging |
| 57109-1 | Central subfield thickness by OCT (right and left eye, told apart by label) | um | imaging |
| 77194-9 | Ankle-brachial index (right and left, told apart by label) | {ratio} | imaging |
| 44261-6, 55758-7 | PHQ-9, PHQ-2 | {score} | survey |
| 75626-2 | AUDIT-C | {score} | survey |

Reference ranges are typical adult male ranges chosen for the teaching record; interpretation flags follow them. LOINC 57109-1 and 77194-9 have no side; the right and left values share the code and are told apart by their labels. Snellen acuity in primary care, later retina-clinic acuity and OCT values, the ECG, fundus and B-scan findings, the stress test, PSA, HIV and hepatitis C results are recorded as narrative.

## Procedures, immunizations, and encounter types

- ECG: SNOMED CT 29303009. Foot examination: 401191002. Retina examination: 36228007 (Ophthalmic examination and evaluation). OCT: 700070005 (Optical coherence tomography of retina). Intravitreal anti-VEGF injection: 1004045004. Panretinal photocoagulation: 413180006 (Pan retinal photocoagulation for diabetes). Stress test: 16545191000119100 (Radionuclide myocardial perfusion stress study). Wound care: 225358003. Advance care planning: 713603004.
- Encounter types: SNOMED CT 390906007 (follow-up encounter) for the three focused chronic-care visits, 185345009 (encounter for symptom) for the sick visit, and 86013001 (periodic reevaluation and management of healthy individual) for the preventive visit. The services are named in plain text as CPT 99396 and 99497; CPT is not used as a coded value.
- Immunizations: CVX 140 (influenza), 216 (PCV20), 187 (recombinant zoster, dose 1), 309 (COVID-19 mRNA), and 189 (HepB-CpG, dose 1).
- No known allergy: SNOMED CT 716186003.

## Vital signs

The six visits use LOINC 8302-2, 29463-7, 39156-5, 8480-6, 8462-4, 8867-4, 9279-1, 8310-5, and 59408-5 with UCUM units.

## Review note

Codes were checked against the public terminology server and NLM RxNav on November 5, 2026. They do not imply that Robinson received these diagnoses, tests, or medications during his lifetime.
