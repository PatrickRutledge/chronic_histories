# Terminology — Katharine Hepburn

> **SYNTHETIC RECORD, NOT A REAL MEDICAL RECORD**

## Diagnoses

| Use | System | Code | Display | Evidence |
|---|---|---|---|---|
| Active problem (provisional, both_with_link) | ICD-10-CM FY2026 | G25.0 | Essential tremor | S; linked to her publicly visible tremor, her public account, and the R-graded label |
| Active problem | ICD-10-CM FY2026 | R49.8 | Other voice and resonance disorders | S; linked to the public description of her quivery voice |

Parkinson’s disease is not coded; the label some accounts gave her tremor is recorded only in the claims.

## Medications (RxNorm)

| Code | Display |
|---|---|
| 856535 | 24 HR propranolol hydrochloride 60 MG Extended Release Oral Capsule (one capsule each morning) |

## Results (LOINC 2.81)

| Code | Measure | Unit | Category |
|---|---|---|---|
| 718-7 | Hemoglobin | g/dL | laboratory |
| 51990-0 | Basic metabolic panel (organizer) | — | panel |
| 2951-2, 2823-3, 2160-0, 98979-8, 2345-7, 17861-6 | Sodium, potassium, creatinine, eGFR (CKD-EPI 2021), glucose, calcium | mmol/L, mg/dL, mL/min/{1.73_m2} | laboratory |
| 3016-3 | TSH | m[IU]/L | laboratory |
| 2093-3, 2085-9, 13457-7, 2571-8 | Total cholesterol, HDL cholesterol, LDL cholesterol (calculated), triglycerides (wellness visit) | mg/dL | laboratory |
| 72172-0 | MoCA total score | {score} | survey |
| 44261-6 | PHQ-9 total score | {score} | survey |
| 55758-7 | PHQ-2 total score (wellness visit) | {score} | survey |
| 72233-0 | Mini-Cog total score (wellness visit) | {score} | survey |
| 75626-2 | AUDIT-C total score (wellness visit) | {score} | survey |

Reference ranges are typical adult female ranges chosen for the teaching record; interpretation flags follow them. The lipid results are not grouped under a panel code, because the LOINC lipid panel names include a year that the true-date variant cannot shift.

TETRAS (performance and activities of daily living subscales), spiral drawing, handwriting, Timed Up and Go, and seated and standing blood pressure have no verified LOINC code on the terminology server and are recorded as narrative in the functional status and visit notes.

## Procedures, immunizations, and family history

- Speech therapy for voice tremor: SNOMED CT 5154007.
- Occupational therapy evaluation: SNOMED CT 84478008.
- Advance care planning: SNOMED CT 713603004.
- Encounter types: SNOMED CT 390906007 (follow-up encounter) for the three focused chronic-care visits and 281038008 (geriatric annual health check) for the annual wellness visit. The services are named in plain text as HCPCS G0439 and CPT 99497; neither is used as a coded value.
- Immunizations: CVX 135 (influenza, high-dose, trivalent, the 2025-2026 and 2026-2027 doses), 216 (PCV20), and 187 (recombinant zoster, dose 1).
- No known allergy: SNOMED CT 716186003.
- Family history: HL7 RoleCode PGRFTH (paternal grandfather), shaking head as she described it publicly; no diagnosis attributed.

## Vital signs

The five visits use LOINC 8302-2, 29463-7, 39156-5, 8480-6, 8462-4, 8867-4, 9279-1, 8310-5, and 59408-5 with UCUM units. Standing blood pressures are recorded in the visit notes.

## Review note

Codes were checked against the public terminology server and NLM RxNav on November 3, 2026. They do not imply that Hepburn received these diagnoses, tests, or medications during her lifetime.
