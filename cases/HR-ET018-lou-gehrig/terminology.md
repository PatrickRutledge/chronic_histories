# Terminology — Lou Gehrig

> **SYNTHETIC RECORD, NOT A REAL MEDICAL RECORD**

## Diagnoses

| Use | System | Code | Display | Evidence |
|---|---|---|---|---|
| Presenting problem; resolved (superseded) at the consultation | ICD-10-CM FY2026 | M62.81 | Muscle weakness (generalized) | S; linked to the documented decline in 1938 and 1939 |
| Problem recorded at the consultation | ICD-10-CM FY2026 | G12.21 | Amyotrophic lateral sclerosis | S; linked to the documented 1939 diagnosis |
| Problem added at the sick visit, resolved | ICD-10-CM FY2026 | S93.402A | Sprain of unspecified ligament of left ankle, initial encounter | S |

The head-trauma hypothesis (R, disputed) is not coded.

## Medications (RxNorm)

| Code | Display |
|---|---|
| 199206 | riluzole 50 MG Oral Tablet (from the consultation) |
| 197805 | ibuprofen 400 MG Oral Tablet (sick visit, five days) |

## Results (LOINC 2.81)

| Code | Measure | Unit | Category |
|---|---|---|---|
| 6690-2, 718-7, 777-3 | White cells, hemoglobin, platelets | 10*3/uL, g/dL | laboratory |
| 51990-0 | Basic metabolic panel (organizer) | — | panel |
| 2951-2, 2823-3, 2160-0, 98979-8, 2345-7, 17861-6 | Sodium, potassium, creatinine, eGFR (CKD-EPI 2021), glucose, calcium | mmol/L, mg/dL, mL/min/{1.73_m2} | laboratory |
| 1742-6, 1920-8 | ALT, AST | U/L | laboratory |
| 2157-6 | Creatine kinase | U/L | laboratory |
| 2132-9 | Vitamin B12 | pg/mL | laboratory |
| 3016-3 | TSH | m[IU]/L | laboratory |
| 4548-4 | Hemoglobin A1c | % | laboratory |
| 19870-5 | Forced vital capacity (seated) | L | imaging |
| 19872-1 | FVC measured/predicted (seated) | % | imaging |
| 82953-1 | ALSFRS-R total score | {score} | survey |
| 55758-7, 44261-6 | PHQ-2 and PHQ-9 total scores | {score} | survey |
| 75626-2 | AUDIT-C total score | {score} | survey |

Reference ranges are typical adult male ranges chosen for the teaching record; spirometry uses the imaging category, as other records do for physiological measurements. The predicted FVC (5.13 L) is a synthetic value for a 35-year-old man 183 cm tall. The MRI, EMG and nerve conduction studies, protein electrophoresis, genetic panel, maximal inspiratory pressure, supine FVC, and the HIV and hepatitis tests are recorded as narrative.

## Procedures, immunizations, and encounter types

- Spirometry: SNOMED CT 127783003.
- MRI of brain: SNOMED CT 816077007; MRI of cervical spine: SNOMED CT 241646009.
- Electromyography: SNOMED CT 42803009; Nerve conduction study: SNOMED CT 51110005.
- Molecular genetic test: SNOMED CT 405825005.
- Advance care planning: SNOMED CT 713603004.
- Encounter types: SNOMED CT 390906007 (follow-up encounter) for the four focused chronic-care visits, 86013001 (periodic reevaluation and management of healthy individual) for the preventive visit, and 185345009 (encounter for symptom) for the sick visit. The services are named in plain text as CPT 99395 and 99497; CPT is not used as a coded value.
- Immunizations: CVX 140 (inactivated influenza), 309 (COVID-19 mRNA), and 189 (HepB-CpG, two doses).
- No known allergy: SNOMED CT 716186003.

## Vital signs

The seven visits use LOINC 8302-2, 29463-7, 39156-5, 8480-6, 8462-4, 8867-4, 9279-1, 8310-5, and 59408-5 with UCUM units.

## Review note

Codes were checked against the public terminology server and NLM RxNav on November 4, 2026. They do not imply that Lou Gehrig received these diagnoses, tests, or medications during his lifetime.
