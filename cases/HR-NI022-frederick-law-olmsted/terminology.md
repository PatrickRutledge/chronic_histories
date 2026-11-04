# Terminology — Frederick Law Olmsted

> **SYNTHETIC RECORD, NOT A REAL MEDICAL RECORD**

## Diagnoses

| Use | System | Code | Display | Evidence |
|---|---|---|---|---|
| Active problem | ICD-10-CM FY2026 | F03.A0 | Unspecified dementia, mild, without behavioral disturbance, psychotic disturbance, mood disturbance, and anxiety | S; linked to his documented failing memory; type undetermined |
| Resolved problem (sick visit) | ICD-10-CM FY2026 | J00 | Acute nasopharyngitis [common cold] | S |
| Resolved problem (presenting concern) | ICD-10-CM FY2026 | R41.3 | Other amnesia | S; memory loss under evaluation at the index visit, resolved at the diagnosis visit on June 2 |

No specific dementia type (Alzheimer’s disease, vascular, Lewy body, frontotemporal) is coded; the type is recorded only as an R claim.

## Medications (RxNorm)

| Code | Display |
|---|---|
| 997229 | donepezil hydrochloride 5 MG Oral Tablet (one tablet each morning, first two months) |
| 997223 | donepezil hydrochloride 10 MG Oral Tablet (one tablet each morning, from the three-month visit) |

## Results (LOINC 2.81)

| Code | Measure | Unit | Category |
|---|---|---|---|
| 718-7, 6690-2, 777-3 | Hemoglobin, white blood cells, platelets | g/dL, 10*3/uL | laboratory |
| 51990-0 | Basic metabolic panel (organizer) | — | panel |
| 2951-2, 2823-3, 2160-0, 98979-8, 2345-7, 17861-6 | Sodium, potassium, creatinine, eGFR (CKD-EPI 2021), glucose, calcium | mmol/L, mg/dL, mL/min/{1.73_m2} | laboratory |
| 1751-7, 1742-6 | Albumin, ALT | g/dL, U/L | laboratory |
| 2132-9, 2284-8, 3016-3 | Vitamin B12, folate, TSH | pg/mL, ng/mL, m[IU]/L | laboratory |
| 2093-3, 2085-9, 13457-7, 2571-8 | Total cholesterol, HDL cholesterol, LDL cholesterol (calculated), triglycerides (wellness visit) | mg/dL | laboratory |
| 72172-0 | MoCA total score | {score} | survey |
| 44261-6 | PHQ-9 total score | {score} | survey |
| 55758-7 | PHQ-2 total score (wellness visit) | {score} | survey |
| 75626-2 | AUDIT-C total score (wellness visit) | {score} | survey |

Reference ranges are typical adult male ranges chosen for the teaching record; interpretation flags follow them. The lipid results are not grouped under a panel code, because the LOINC lipid panel names include a year that the true-date variant cannot shift.

Katz ADL, Lawton-Brody IADL, CDR, FAST, NPI-Q, the Zarit Burden Interview, the 4AT, and Timed Up and Go are recorded as narrative in the functional status and visit notes.

## Procedures, immunizations, and family history

- MRI of the brain: SNOMED CT 816077007.
- Advance care planning: SNOMED CT 713603004.
- Encounter types: SNOMED CT 390906007 (follow-up encounter) for the three focused chronic-care visits, 185345009 (encounter for symptom) for the sick visit, and 281038008 (geriatric annual health check) for the annual wellness visit. The wellness visit is named in plain text as HCPCS G0439; it is not used as a coded value.
- Immunizations: CVX 135 (influenza, high-dose, trivalent, the 2025-2026 and 2026-2027 doses), 216 (PCV20), and 187 (recombinant zoster, dose 1).
- No known allergy: SNOMED CT 716186003.
- Family history: none recorded; no fetched source documents a relative’s health in a way the case uses.

## Vital signs

The six visits use LOINC 8302-2, 29463-7, 39156-5, 8480-6, 8462-4, 8867-4, 9279-1, 8310-5, and 59408-5 with UCUM units.

## Review note

Codes were checked against the public terminology server and NLM RxNav on November 3, 2026. They do not imply that Olmsted received these diagnoses, tests, or medications during his lifetime.
