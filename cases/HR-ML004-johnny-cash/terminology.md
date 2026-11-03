# Terminology — Johnny Cash

> **SYNTHETIC RECORD, NOT A REAL MEDICAL RECORD**

## Diagnoses

| Use | System | Code | Display | Evidence |
|---|---|---|---|---|
| Active problem | ICD-10-CM FY2026 | E11.43 | Type 2 diabetes mellitus with diabetic autonomic (poly)neuropathy | S; linked to the documented diabetes and autonomic neuropathy |
| Active problem | ICD-10-CM FY2026 | I95.1 | Orthostatic hypotension | S; linked to the documented neuropathy and the withdrawn Shy-Drager label |
| Active problem | ICD-10-CM FY2026 | E11.42 | Type 2 diabetes mellitus with diabetic polyneuropathy | S |
| Active problem | ICD-10-CM FY2026 | H40.1133 | Primary open-angle glaucoma, bilateral, severe stage | S; linked to his own mention of glaucoma |
| Active problem | ICD-10-CM FY2026 | E11.3293 | Type 2 diabetes mellitus with mild nonproliferative diabetic retinopathy without macular edema, bilateral | S |
| Active problem | ICD-10-CM FY2026 | E78.5 | Hyperlipidemia, unspecified | S |
| Active problem | ICD-10-CM FY2026 | Z87.01 | Personal history of pneumonia (recurrent) | S; linked to documented pneumonia |

## Medications (RxNorm)

| Code | Display |
|---|---|
| 861007 | metformin hydrochloride 500 MG Oral Tablet |
| 861004 | metformin hydrochloride 1000 MG Oral Tablet |
| 665033 | sitagliptin 100 MG Oral Tablet |
| 617311 | atorvastatin 40 MG Oral Tablet |
| 314072 | latanoprost 0.05 MG/ML Ophthalmic Solution |
| 310015 | dorzolamide 20 MG/ML Ophthalmic Solution |
| 993466 | midodrine hydrochloride 2.5 MG Oral Tablet |
| 993470 | midodrine hydrochloride 5 MG Oral Tablet |

The schema has no ophthalmic route, so the eye drops are recorded under the topical route (SNOMED CT 6064005, NCI C38304).

## Results (LOINC 2.81)

| Code | Measure | Unit | Category |
|---|---|---|---|
| 4548-4 | HbA1c | % | laboratory |
| 51990-0 | Basic metabolic panel (organizer) | — | panel |
| 2951-2, 2823-3, 2160-0, 98979-8, 2345-7 | Sodium, potassium, creatinine, eGFR (CKD-EPI 2021), glucose | mmol/L, mg/dL, mL/min/{1.73_m2} | laboratory |
| 13457-7, 9318-7 | LDL cholesterol, urine albumin-creatinine ratio | mg/dL, mg/g | laboratory |
| 1742-6, 1920-8 | ALT, AST | U/L | laboratory |
| 2132-9, 3016-3, 718-7 | Vitamin B12, TSH, hemoglobin | pg/mL, m[IU]/L, g/dL | laboratory |
| 79892-6, 79893-4 | Intraocular pressure, right and left eye | mm[Hg] | imaging |
| 86301-9, 86290-4 | Mean retinal nerve fiber layer thickness by OCT, right and left | um | imaging |
| 79876-9, 79877-7 | Best-corrected visual acuity by ETDRS chart, right and left | {letters} | imaging |
| 55758-7 | PHQ-2 total score | {score} | survey |
| 72233-0 | Mini-Cog total score | {score} | survey |
| 75626-2 | AUDIT-C total score (annual wellness visit) | {score} | survey |

Reference ranges are typical adult ranges chosen for the teaching record; interpretation flags follow them, and validation checks that every flag agrees with its range. Eye measurements are recorded in the imaging category so that they carry a range and a flag.

## Procedures, immunizations, and family history

- Diabetic foot examination: SNOMED CT 401191002.
- Encounter types: SNOMED CT 390906007 (follow-up encounter) for the three focused chronic-care visits and 281038008 (geriatric annual health check) for the subsequent annual wellness visit. The services are named in plain text as HCPCS G0439 and CPT 99497; HCPCS and CPT are not used as coded values.
- Optical coherence tomography of retina: SNOMED CT 700070005, at the first and six-month visits.
- Threshold automated static perimetry, central 24 degrees: SNOMED CT 392536003, at the first and six-month visits.
- Immunizations: CVX 135 (high-dose influenza), 216 (PCV20), and 187 (recombinant zoster).
- No known allergy: SNOMED CT 716186003.
- Family relationship: HL7 RoleCode BRO (brother).

## Vital signs

The five visits use LOINC 8302-2, 29463-7, 39156-5, 8480-6, 8462-4, 8867-4, 9279-1, 8310-5, and 59408-5 with UCUM units. Standing blood pressures are recorded in the functional status narrative.

## Review note

Codes were checked against the public terminology server and NLM RxNav on November 2, 2026; the codes for the annual wellness visit were checked on November 3, 2026. They do not imply that Cash received these diagnoses, tests, or medications during his lifetime.
