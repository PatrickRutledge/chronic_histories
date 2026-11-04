# Terminology — Arthur Ashe

> **SYNTHETIC RECORD, NOT A REAL MEDICAL RECORD**

## Diagnoses

| Use | System | Code | Display | Evidence |
|---|---|---|---|---|
| Active problem | ICD-10-CM FY2026 | B20 | Human immunodeficiency virus [HIV] disease | S; linked to the documented transfusion-acquired HIV and AIDS diagnosis |
| Active problem | ICD-10-CM FY2026 | B58.2 | Toxoplasma meningoencephalitis | S; linked to the documented 1988 toxoplasmosis |
| Active problem | ICD-10-CM FY2026 | I25.10 | Atherosclerotic heart disease of native coronary artery without angina pectoris | S; linked to the documented heart attack and two bypass operations |
| Active problem | ICD-10-CM FY2026 | I25.2 | Old myocardial infarction | S; linked to the documented 1979 heart attack |
| Active problem | ICD-10-CM FY2026 | E78.5 | Hyperlipidemia, unspecified | S |

## Medications (RxNorm)

| Code | Display |
|---|---|
| 1999667 | bictegravir 50 MG / emtricitabine 200 MG / tenofovir alafenamide 25 MG Oral Tablet |
| 198182 | pyrimethamine 25 MG Oral Tablet (completed before intake) |
| 198228 | sulfadiazine 500 MG Oral Tablet (completed before intake) |
| 197860 | leucovorin 10 MG Oral Tablet (completed before intake) |
| 198335 | sulfamethoxazole 800 MG / trimethoprim 160 MG Oral Tablet (stopped at nine months) |
| 308416 | aspirin 81 MG Delayed Release Oral Tablet |
| 259255 | atorvastatin 80 MG Oral Tablet |
| 349556 | ezetimibe 10 MG Oral Tablet |
| 198039 | nitroglycerin 0.4 MG Sublingual Tablet (as needed) |

## Results (LOINC 2.81)

| Code | Measure | Unit | Category |
|---|---|---|---|
| 20447-9 | HIV-1 viral load (0 = not detected, below 20 copies/mL) | {copies}/mL | laboratory |
| 24467-3 | CD4 count | /uL | laboratory |
| 6690-2, 718-7, 777-3 | White cell count, hemoglobin, platelets | 10*3/uL, g/dL | laboratory |
| 51990-0 | Basic metabolic panel (organizer) | — | panel |
| 2951-2, 2823-3, 2160-0, 98979-8, 2345-7 | Sodium, potassium, creatinine, eGFR (CKD-EPI 2021), glucose | mmol/L, mg/dL, mL/min/{1.73_m2} | laboratory |
| 1742-6 | ALT | U/L | laboratory |
| 2093-3, 2085-9, 13457-7, 2571-8 | Total cholesterol, HDL cholesterol, LDL cholesterol (calculated), triglycerides | mg/dL | laboratory |
| 10835-7 | Lipoprotein(a) | mg/dL | laboratory |
| 4548-4 | HbA1c | % | laboratory |
| 16935-9 | Hepatitis B surface antibody | m[IU]/mL | laboratory |
| 9318-7 | Urine albumin-to-creatinine ratio | mg/g | laboratory |
| 44261-6 | PHQ-9 total score | {score} | survey |
| 55758-7 | PHQ-2 total score (preventive visit) | {score} | survey |
| 75626-2 | AUDIT-C total score | {score} | survey |

Reference ranges are typical adult ranges chosen for the teaching record; interpretation flags follow them. The lipid results are not grouped under a panel code, because the LOINC lipid panel names include a year that the true-date variant cannot shift. The hospital results at diagnosis (viral load 186,000 copies/mL, CD4 58, genotype, and serologies) are described in the consultation text only, because every coded result must fall on a visit date.

## Procedures, immunizations, and family history

- Coronary artery bypass graft: SNOMED CT 232717009 (two operations, linked to the documented history).
- MRI of head: SNOMED CT 241601008. Stereotactic biopsy of brain: SNOMED CT 171491002. Electrocardiographic procedure: SNOMED CT 29303009. Advance care planning: SNOMED CT 713603004.
- Encounter types: SNOMED CT 390906007 (follow-up encounter) for the four focused chronic-care visits and 86013001 (periodic reevaluation and management of healthy individual) for the preventive visit. The services are named in plain text as CPT 99396 and 99497; CPT is not used as a coded value.
- Immunizations: CVX 115 (Tdap), 140 (inactivated influenza, two seasons), 216 (PCV20), 189 (HepB-CpG, two doses), 203 (MenACWY, two doses), 187 (recombinant zoster, two doses), and 309 (COVID-19 mRNA).
- No known allergy: SNOMED CT 716186003.
- Family relationships: HL7 RoleCode MTH (mother) and FTH (father).

## Vital signs

The six visits use LOINC 8302-2, 29463-7, 39156-5, 8480-6, 8462-4, 8867-4, 9279-1, 8310-5, and 59408-5 with UCUM units.

## Review note

Codes were checked against the public terminology server and NLM RxNav on November 3, 2026. They do not imply that Ashe received these diagnoses, tests, or medications during his lifetime.
