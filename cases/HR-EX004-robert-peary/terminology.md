# Terminology — Robert Peary

> **SYNTHETIC RECORD, NOT A REAL MEDICAL RECORD**

## Diagnoses

| Use | System | Code | Display | Evidence |
|---|---|---|---|---|
| Presenting problem, resolved at the consultation | ICD-10-CM FY2026 | D51.9 | Vitamin B12 deficiency anemia, unspecified | S; linked to his documented pernicious anemia |
| Active problem, from the consultation | ICD-10-CM FY2026 | D51.0 | Vitamin B12 deficiency anemia due to intrinsic factor deficiency | S; linked to the documented cause of his death |
| Active problem | ICD-10-CM FY2026 | G32.0 | Subacute combined degeneration of spinal cord in diseases classified elsewhere | S |
| Active problem | ICD-10-CM FY2026 | Z89.421 | Acquired absence of other right toe(s) | S; linked to his documented toe amputations |
| Active problem | ICD-10-CM FY2026 | Z89.422 | Acquired absence of other left toe(s) | S; linked to his documented toe amputations |
| Active problem | ICD-10-CM FY2026 | Z91.81 | History of falling | S |
| Active problem, from the biopsies | ICD-10-CM FY2026 | K29.40 | Chronic atrophic gastritis without bleeding | S |
| Active problem, from eight weeks | ICD-10-CM FY2026 | E61.1 | Iron deficiency | S |
| Sick visit, resolved | ICD-10-CM FY2026 | S90.822A | Blister (nonthermal), left foot, initial encounter | S |

No code is used for rheumatoid arthritis, depression or any stress-related disorder; see the editorial resolutions in sources.md.

## Medications (RxNorm)

| Code | Display |
|---|---|
| 309594 | vitamin B12 1 MG/ML Injectable Solution (cyanocobalamin 1,000 micrograms intramuscularly: every other day for seven doses, then weekly, then every four weeks) |
| 310325 | ferrous sulfate 325 MG Oral Tablet (every other day, from eight weeks) |

## Results (LOINC 2.81)

| Code | Measure | Unit | Category |
|---|---|---|---|
| 718-7, 787-2, 788-0, 6690-2, 777-3 (panel 58410-2) | Hemoglobin, MCV, RDW, white cells, platelets | g/dL, fL, %, 10*3/uL | laboratory |
| 17849-1 | Reticulocytes | % | laboratory |
| 2532-0, 1975-2 | LDH, total bilirubin | U/L, mg/dL | laboratory |
| 2951-2, 2823-3, 2160-0, 98979-8, 2345-7 (panel 51990-0) | Sodium, potassium, creatinine, eGFR (CKD-EPI 2021), glucose | mmol/L, mg/dL, mL/min/{1.73_m2} | laboratory |
| 2132-9, 2284-8 | Vitamin B12, folate | pg/mL, ng/mL | laboratory |
| 13964-2, 13965-9 | Methylmalonic acid, homocysteine | umol/L | laboratory |
| 2276-4, 2498-4, 2500-7, 2502-3 (panel 50190-8 for the last three) | Ferritin, iron, TIBC, transferrin saturation | ng/mL, ug/dL, % | laboratory |
| 56539-0, 56147-2 | Intrinsic factor antibody, parietal cell antibody (immunoassay) | [arb'U]/mL | laboratory |
| 2333-3 | Gastrin | pg/mL | laboratory |
| 3016-3, 8099-4 | TSH, thyroid peroxidase antibody | m[IU]/L, [IU]/mL | laboratory |
| 4548-4 | HbA1c | % | laboratory |
| 2093-3, 2085-9, 13457-7, 2571-8 | Total cholesterol, HDL, LDL (calculated), triglycerides | mg/dL | laboratory |
| 44261-6, 55758-7 | PHQ-9, PHQ-2 | {score} | survey |
| 72172-0 | MoCA | {score} | survey |
| 75626-2 | AUDIT-C | {score} | survey |

Reference ranges are typical adult ranges chosen for the teaching record; interpretation flags follow them. The blood smear, the Timed Up and Go, monofilament testing, the endoscopy and pathology findings, and the HIV, hepatitis C and hepatitis B results are recorded as narrative.

## Procedures, immunizations, and encounter types

- Upper endoscopy with biopsies: SNOMED CT 445982009 (endoscopy and biopsy of upper gastrointestinal tract). Colonoscopy: 73761001.
- Advance care planning: SNOMED CT 713603004.
- Encounter types: SNOMED CT 390906007 (follow-up encounter) for the four focused chronic-care visits, 86013001 (periodic reevaluation and management of healthy individual) for the preventive visit, and 185345009 (encounter for symptom) for the sick visit. The services are named in plain text as CPT 99396 and 99497; CPT is not used as a coded value.
- Immunizations: CVX 187 (zoster recombinant, first dose) and 216 (PCV20).
- Family history relationship: HL7 RoleCode FTH (father).
- No known allergy: SNOMED CT 716186003.

## Vital signs

The seven visits use LOINC 8302-2, 29463-7, 39156-5, 8480-6, 8462-4, 8867-4, 9279-1, 8310-5, and 59408-5 with UCUM units.

## Review note

Codes were checked against the public terminology server and NLM RxNav on November 5, 2026. They do not imply that Peary received these diagnoses, tests, or medications during his lifetime.
