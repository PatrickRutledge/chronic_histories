# Terminology — Ella Fitzgerald

> **SYNTHETIC RECORD, NOT A REAL MEDICAL RECORD**

## Diagnoses

| Use | System | Code | Display | Evidence |
|---|---|---|---|---|
| Problem | ICD-10-CM FY2026 | E11.51 | Type 2 diabetes mellitus with diabetic peripheral angiopathy without gangrene | S; linked to her documented diabetes and its circulatory complications |
| Problem | ICD-10-CM FY2026 | E11.3311 | Type 2 diabetes mellitus with moderate nonproliferative diabetic retinopathy with macular edema, right eye | S; linked to her documented diabetic eye problems |
| Problem | ICD-10-CM FY2026 | I25.10 | Atherosclerotic heart disease of native coronary artery without angina pectoris | S; linked to her documented 1986 bypass surgery |

The left eye (moderate nonproliferative retinopathy without macular edema, which ICD-10-CM codes as E11.3392) and the bypass grafts (Z95.1) are described in the problem displays rather than coded separately. The type of diabetes is synthetic.

## Medications (RxNorm)

| Code | Display |
|---|---|
| 861004 | metformin hydrochloride 1000 MG Oral Tablet |
| 310488 | glipizide 10 MG Oral Tablet (stopped at intake) |
| 847230 | 3 ML insulin glargine 100 UNT/ML Pen Injector (30 units at bedtime before intake; 24 units each morning from intake) |
| 617311 | atorvastatin 40 MG Oral Tablet (to intake) |
| 259255 | atorvastatin 80 MG Oral Tablet |
| 308416 | aspirin 81 MG Delayed Release Oral Tablet |
| 866427 | metoprolol succinate 25 MG 24HR Extended Release Oral Tablet |
| 1545658 | empagliflozin 10 MG Oral Tablet |
| 2180666 | glucagon 3 MG Nasal Powder |
| 2059015 | rivaroxaban 2.5 MG Oral Tablet (from the consultation) |
| 2619152 | 0.25 MG, 0.5 MG Dose 3 ML semaglutide 0.68 MG/ML Pen Injector (0.25 mg weekly, then 0.5 mg) |
| 349556 | ezetimibe 10 MG Oral Tablet (from three months) |

The anti-VEGF drug given by the retina clinic is recorded through the procedure entries, not as a clinic prescription.

## Results (LOINC 2.81)

| Code | Measure | Unit | Category |
|---|---|---|---|
| 4548-4 | Hemoglobin A1c | % | laboratory |
| 51990-0 | Basic metabolic panel (organizer) | — | panel |
| 2951-2, 2823-3, 2160-0, 98979-8, 2345-7 | Sodium, potassium, creatinine, eGFR (CKD-EPI 2021), glucose | mmol/L, mg/dL, mL/min/{1.73_m2} | laboratory |
| 9318-7 | Urine albumin-creatinine ratio | mg/g | laboratory |
| 2093-3, 13457-7, 2085-9, 2571-8 | Total cholesterol, LDL (calculated), HDL, triglycerides | mg/dL | laboratory |
| 1742-6, 1920-8 | ALT, AST | U/L | laboratory |
| 718-7 | Hemoglobin | g/dL | laboratory |
| 2132-9 | Vitamin B12 | pg/mL | laboratory |
| 77194-9 | Ankle-brachial index (right and left, told apart by label) | {ratio} | imaging |
| 77618-7, 77617-9 | Toe-brachial index, right and left | {ratio} | imaging |
| 79876-9, 79877-7 | Best-corrected visual acuity, right and left eye (ETDRS letters) | {letters} | imaging |
| 55758-7 | PHQ-2 total score | {score} | survey |
| 72233-0 | Mini-Cog total score | {score} | survey |
| 75626-2 | AUDIT-C total score | {score} | survey |

Reference ranges are typical adult female ranges chosen for the teaching record; the A1c and LDL ranges carry her individualized goals in their text. Continuous glucose monitor metrics, the arterial duplex, and the monofilament and vibration findings are recorded in the note text.

## Procedures, immunizations, and encounter types

- Intravitreal injection of anti-vascular endothelial growth factor: SNOMED CT 1004045004 (five right-eye injections by the retina clinic).
- Reduction of callus: SNOMED CT 229826007 (podiatry, twice).
- Advance care planning: SNOMED CT 713603004.
- Immunizations: CVX 216 (PCV20), 135 (high-dose inactivated influenza), and 187 (recombinant zoster).
- Encounter types: SNOMED CT 390906007 (follow-up encounter) for the three focused chronic-care visits and 281038008 (geriatric annual health check) for the subsequent annual wellness visit. The services are named in plain text as HCPCS G0439 and G0009 and CPT 99497 and 90677; HCPCS and CPT are not used as coded values. No sick visit (recent-death rule).
- Family history relationship: HL7 RoleCode MTH (mother).
- No known allergy: SNOMED CT 716186003.

## Vital signs

The five visits use LOINC 8302-2, 29463-7, 39156-5, 8480-6, 8462-4, 8867-4, 9279-1, 8310-5, and 59408-5 with UCUM units.

## Review note

Codes were checked against the public terminology server and NLM RxNav on November 4, 2026. They do not imply that Ella Fitzgerald received these diagnoses, tests, or medications during her lifetime.
