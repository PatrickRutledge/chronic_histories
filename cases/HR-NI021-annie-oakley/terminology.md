# Terminology — Annie Oakley

> **SYNTHETIC RECORD, NOT A REAL MEDICAL RECORD**

## Diagnoses

| Use | System | Code | Display | Evidence |
|---|---|---|---|---|
| Active problem | ICD-10-CM FY2026 | D51.0 | Vitamin B12 deficiency anemia due to intrinsic factor deficiency | S; linked to the documented 1926 cause of death |
| Active problem | ICD-10-CM FY2026 | M54.50 | Low back pain, unspecified | S; linked to the documented 1901 and 1922 injuries |
| Active problem | ICD-10-CM FY2026 | K29.40 | Chronic atrophic gastritis without bleeding | S; autoimmune, at endoscopy |
| Active problem | ICD-10-CM FY2026 | E61.1 | Iron deficiency | S; at the eight-week review |
| Resolved problem | ICD-10-CM FY2026 | N30.00 | Acute cystitis without hematuria | S; recorded at the May sick visit |

## Medications (RxNorm)

| Code | Display |
|---|---|
| 309594 | vitamin B12 1 MG/ML Injectable Solution (cyanocobalamin 1000 micrograms: daily, then weekly, then monthly) |
| 310325 | ferrous sulfate 325 MG Oral Tablet (every other day) |
| 849574 | naproxen sodium 220 MG Oral Tablet (as needed) |
| 1648755 | nitrofurantoin, macrocrystals 25 MG / nitrofurantoin, monohydrate 75 MG Oral Capsule |

## Results (LOINC 2.81)

| Code | Measure | Unit | Category |
|---|---|---|---|
| 58410-2 | CBC panel (organizer) | — | panel |
| 718-7, 787-2, 6690-2, 777-3 | Hemoglobin, MCV, white cell count, platelets | g/dL, fL, 10*3/uL | laboratory |
| 17849-1 | Reticulocytes | % | laboratory |
| 2132-9, 2284-8, 13964-2 | Vitamin B12, folate, methylmalonic acid | pg/mL, ng/mL, umol/L | laboratory |
| 11564-2 | Intrinsic factor antibody | [arb'U]/mL | laboratory |
| 2532-0, 1975-2 | LDH, total bilirubin | U/L, mg/dL | laboratory |
| 2276-4, 2502-3 | Ferritin, transferrin saturation | ng/mL, % | laboratory |
| 3016-3, 2823-3, 2160-0, 98979-8 | TSH, potassium, creatinine, eGFR (CKD-EPI 2021) | m[IU]/L, mmol/L, mg/dL, mL/min/{1.73_m2} | laboratory |
| 2093-3, 2085-9, 13457-7 | Total, HDL, and LDL cholesterol (preventive visit) | mg/dL | laboratory |
| 72514-3 | Pain severity, 0 to 10 numeric rating | {score} | survey |
| 97909-6 | Oswestry Disability Index score (percent) | {score} | survey |
| 55758-7 | PHQ-2 total score | {score} | survey |
| 75626-2 | AUDIT-C total score (preventive visit) | {score} | survey |

eGFR values are calculated from the synthetic creatinine with the 2021 CKD-EPI creatinine equation for a 64-year-old woman. Reference ranges are typical adult female ranges chosen for the teaching record; interpretation flags follow them, and validation checks that every flag agrees with its range.

## Procedures, immunizations, and family history

- Physical therapy procedure: SNOMED CT 91251008. Endoscopy and biopsy of upper gastrointestinal tract: 445982009. Colonoscopy: 73761001.
- Immunizations: CVX 140 (influenza, trivalent, preservative free), 187 (recombinant zoster), 115 (Tdap), and 216 (PCV20).
- No known allergy: SNOMED CT 716186003.
- Encounter types: SNOMED CT 390906007 (follow-up encounter) for the three focused chronic-care visits, 185345009 (encounter for symptom) for the May sick visit, and 86013001 (periodic reevaluation and management of healthy individual) for the adult preventive visit. The services are named in plain text as CPT 99396 and CPT 99497; CPT is not used as a coded value.
- Family relationships: HL7 RoleCode FTH (father) and MTH (mother).

## Vital signs

The six visits use LOINC 8302-2, 29463-7, 39156-5, 8480-6, 8462-4, 8867-4, 9279-1, 8310-5, and 59408-5 with UCUM units.

## Review note

Codes were checked against the public terminology server and NLM RxNav on November 3, 2026. They do not imply that Oakley received these diagnoses, tests, or medications during her lifetime.
