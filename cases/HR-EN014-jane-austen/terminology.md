# Terminology — Jane Austen

> **SYNTHETIC RECORD, NOT A REAL MEDICAL RECORD**

## Diagnoses

| Use | System | Code | Display | Evidence |
|---|---|---|---|---|
| Presenting problem at intake, resolved at the consultation | ICD-10-CM FY2026 | R53.83 | Other fatigue | S; timing linked to the documented break in her health in 1816 |
| Problem recorded at the consultation | ICD-10-CM FY2026 | E27.1 | Primary adrenocortical insufficiency | S; linked to the retrospective Addison's disease interpretations (R, disputed) |
| Finding at intake, resolved at six weeks | ICD-10-CM FY2026 | D64.9 | Anemia, unspecified | S |
| Problem added at the sick visit, resolved | ICD-10-CM FY2026 | J02.0 | Streptococcal pharyngitis | S |

The other retrospective interpretations (Hodgkin's lymphoma, bovine tuberculosis, systemic lupus erythematosus, arsenic poisoning) are not coded (see sources.md).

## Medications (RxNorm)

| Code | Display |
|---|---|
| 197782 | hydrocortisone 10 MG Oral Tablet (on waking, from the consultation) |
| 197787 | hydrocortisone 5 MG Oral Tablet (2 pm, from the consultation) |
| 313979 | fludrocortisone acetate 0.1 MG Oral Tablet |
| 238755 | hydrocortisone 100 MG Injection (emergency kit) |
| 308191 | amoxicillin 500 MG Oral Capsule (sick visit, ten days) |

## Results (LOINC 2.81)

| Code | Measure | Unit | Category |
|---|---|---|---|
| 718-7, 787-2, 6690-2, 26449-9, 777-3 | Hemoglobin, MCV, white cells, eosinophils, platelets | g/dL, fL, 10*3/uL | laboratory |
| 51990-0 | Basic metabolic panel (organizer) | — | panel |
| 2951-2, 2823-3, 2075-0, 2028-9 | Sodium, potassium, chloride, total CO2 | mmol/L | laboratory |
| 3094-0, 2160-0, 98979-8, 2345-7, 17861-6 | Urea nitrogen, creatinine, eGFR (CKD-EPI 2021), glucose, calcium | mg/dL, mL/min/{1.73_m2} | laboratory |
| 3016-3, 3024-7 | TSH, free T4 | m[IU]/L, ng/dL | laboratory |
| 2276-4, 2132-9, 2284-8 | Ferritin, vitamin B12, folate | ng/mL, pg/mL | laboratory |
| 2143-6, 2141-0 | Cortisol (8 am), ACTH | ug/dL, pg/mL | laboratory |
| 1417-5, 1402-7 | Cortisol 30 and 60 minutes after 250 ug cosyntropin intravenously | ug/dL | laboratory |
| 2915-7, 1763-2 | Plasma renin activity, aldosterone | ng/mL/h, ng/dL | laboratory |
| 2532-0 | LDH | U/L | laboratory |
| 17781-6 | 21-hydroxylase antibodies | U/mL | laboratory |
| 4548-4, 31017-7, 2458-8 | Hemoglobin A1c, tissue transglutaminase IgA, total IgA | %, U/mL, mg/dL | laboratory |
| 24331-1 | Lipid panel (organizer) | — | panel |
| 2093-3, 2085-9, 2571-8, 13457-7 | Total cholesterol, HDL, triglycerides, LDL (calculated) | mg/dL | laboratory |
| 44261-6, 55758-7 | PHQ-9, PHQ-2 | {score} | survey |
| 70274-6, 75626-2 | GAD-7, AUDIT-C | {score} | survey |

Reference ranges are typical adult female ranges chosen for the teaching record; interpretation flags follow them. Qualitative results (rapid streptococcal test, chest X-ray, HIV, hepatitis B and C screening, HPV test) are recorded as narrative.

## Procedures, immunizations, and encounter types

- Cosyntropin stimulation test: SNOMED CT 252217003 (Short tetracosactrin test).
- Chest X-ray: SNOMED CT 399208008 (Plain X-ray of chest).
- Advance care planning: SNOMED CT 713603004.
- Encounter types: SNOMED CT 390906007 (follow-up encounter) for the four focused chronic-care visits, 86013001 (periodic reevaluation and management of healthy individual) for the preventive visit, and 185345009 (encounter for symptom) for the sick visit. The services are named in plain text as CPT 99396 and 99497; CPT is not used as a coded value.
- Immunizations: CVX 115 (Tdap), 189 (HepB-CpG, two doses), and 140 (influenza, at seven months).
- Family history relationship: HL7 RoleCode FTH (father).
- No known allergy: SNOMED CT 716186003.

## Vital signs

The seven visits use LOINC 8302-2, 29463-7, 39156-5, 8480-6, 8462-4, 8867-4, 9279-1, 8310-5, and 59408-5 with UCUM units.

## Review note

Codes were checked against the public terminology server and NLM RxNav on November 5, 2026. They do not imply that Austen received these diagnoses, tests, or medications during her lifetime.
