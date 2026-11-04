# Terminology — Charles Darwin

> **SYNTHETIC RECORD, NOT A REAL MEDICAL RECORD**

## Diagnoses

| Use | System | Code | Display | Evidence |
|---|---|---|---|---|
| Active problem (provisional, from the six-week visit) | ICD-10-CM FY2026 | R11.15 | Cyclical vomiting syndrome unrelated to migraine | S; linked to his documented episodic vomiting; clinical diagnosis, verification provisional |
| Resolved problem (presenting concern) | ICD-10-CM FY2026 | R11.2 | Nausea with vomiting, unspecified | S; episodes under evaluation at the index visit, resolved at the diagnosis visit on April 14 |
| Resolved problem (sick visit) | ICD-10-CM FY2026 | J00 | Acute nasopharyngitis [common cold] | S |

No historical theory (cyclic vomiting syndrome as a historical diagnosis, Chagas disease, lactose intolerance, panic disorder, or others) is coded; each is recorded only as an R claim. No anxiety disorder is coded.

## Medications (RxNorm)

| Code | Display |
|---|---|
| 856834 | amitriptyline hydrochloride 25 MG Oral Tablet (first two weeks) |
| 856845 | amitriptyline hydrochloride 50 MG Oral Tablet (weeks three and four) |
| 856853 | amitriptyline hydrochloride 75 MG Oral Tablet (target dose) |
| 314227 | sumatriptan 20 MG/ACTUAT Nasal Spray (abortive) |
| 312087 | ondansetron 8 MG Disintegrating Oral Tablet (abortive) |

## Results (LOINC 2.81)

| Code | Measure | Unit | Category |
|---|---|---|---|
| 718-7, 6690-2, 777-3 | Hemoglobin, white blood cells, platelets | g/dL, 10*3/uL | laboratory |
| 51990-0 | Basic metabolic panel (organizer) | — | panel |
| 2951-2, 2823-3, 2075-0, 2028-9, 2160-0, 98979-8, 2345-7, 17861-6 | Sodium, potassium, chloride, total CO2, creatinine, eGFR (CKD-EPI 2021), glucose, calcium | mmol/L, mg/dL, mL/min/{1.73_m2} | laboratory |
| 1751-7, 1742-6, 1920-8, 6768-6, 1975-2 | Albumin, ALT, AST, alkaline phosphatase, total bilirubin | g/dL, U/L, mg/dL | laboratory |
| 3040-3 | Lipase | U/L | laboratory |
| 3016-3, 2143-6 | TSH, morning cortisol | m[IU]/L, ug/dL | laboratory |
| 31017-7, 2458-8 | Tissue transglutaminase IgA, total IgA | U/mL, mg/dL | laboratory |
| 8636-3 | Q-T interval corrected (ECG) | ms | imaging |
| 2093-3, 2085-9, 13457-7, 2571-8 | Total cholesterol, HDL cholesterol, LDL cholesterol (calculated), triglycerides (preventive visit) | mg/dL | laboratory |
| 70274-6 | GAD-7 total score | {score} | survey |
| 44261-6 | PHQ-9 total score | {score} | survey |
| 55758-7 | PHQ-2 total score (preventive visit) | {score} | survey |
| 75626-2 | AUDIT-C total score (preventive visit) | {score} | survey |

Reference ranges are typical adult male ranges chosen for the teaching record; interpretation flags follow them. The QTc is recorded in the imaging category, which the schema uses for non-laboratory measurements. The urine dipstick is described in narrative only. The lipid results are not grouped under a panel code, because the LOINC lipid panel names include a year that the true-date variant cannot shift.

## Procedures, immunizations, and family history

- CT enterography: SNOMED CT 715970002 (CT of small intestine with contrast).
- Upper endoscopy: SNOMED CT 76009000 (esophagogastroduodenoscopy).
- Encounter types: SNOMED CT 390906007 (follow-up encounter) for the three focused chronic-care visits, 185345009 (encounter for symptom) for the sick visit, and 86013001 (periodic reevaluation and management of healthy individual) for the preventive visit. The preventive visit is named in plain text as CPT 99396; it is not used as a coded value.
- Immunizations: CVX 150 (influenza, 2025-2026 season), 115 (Tdap), and 189 (HepB-CpG, dose 1).
- No known allergy: SNOMED CT 716186003.
- Family history: none recorded; no fetched source documents a relative’s health in a way the case uses.

## Vital signs

The six visits use LOINC 8302-2, 29463-7, 39156-5, 8480-6, 8462-4, 8867-4, 9279-1, 8310-5, and 59408-5 with UCUM units.

## Review note

Codes were checked against the public terminology server and NLM RxNav on November 4, 2026. They do not imply that Darwin received these diagnoses, tests, or medications during his lifetime.
