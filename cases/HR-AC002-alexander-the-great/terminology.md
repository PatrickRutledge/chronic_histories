# Terminology — Alexander the Great

> **SYNTHETIC RECORD, NOT A REAL MEDICAL RECORD**

## Diagnoses

| Use | System | Code | Display | Evidence |
|---|---|---|---|---|
| Presenting problem, resolved at the consultation | ICD-10-CM FY2026 | R07.89 | Other chest pain | S; linked to his documented chest wound and drinking parties |
| Active problem, from the consultation | ICD-10-CM FY2026 | G89.21 | Chronic pain due to trauma | S; linked to his documented chest wound |
| Active problem, from the consultation | ICD-10-CM FY2026 | J94.1 | Fibrothorax | S; linked to his documented chest wound |
| Active problem, from the consultation visit | ICD-10-CM FY2026 | F10.10 | Alcohol abuse, uncomplicated | S; mild alcohol use disorder (DSM-5-TR); linked to the documented drinking parties |
| Active problem | ICD-10-CM FY2026 | Z63.4 | Disappearance and death of family member | S; uncomplicated bereavement as DSM-5-TR codes it; linked to his documented bereavement |
| Sick visit, resolved | ICD-10-CM FY2026 | S51.812A | Laceration without foreign body of left forearm, initial encounter | S |

No code is used for pneumothorax, major depression, prolonged grief disorder, typhoid fever, malaria, West Nile virus infection, poisoning or Guillain-Barré syndrome; see the editorial resolutions in sources.md.

## Medications (RxNorm)

| Code | Display |
|---|---|
| 198440 | acetaminophen 500 MG Oral Tablet (as needed, no more than 2,000 mg a day) |
| 313323 | thiamine 100 MG Oral Tablet (three months) |
| 1745091 | lidocaine 0.05 MG/MG Medicated Patch (from the consultation) |

## Results (LOINC 2.81)

| Code | Measure | Unit | Category |
|---|---|---|---|
| 19870-5, 19872-1 | Forced vital capacity; FVC percent predicted | L, % | imaging |
| 20150-9, 20152-5 | FEV1; FEV1 percent predicted | L, % | imaging |
| 19926-5 | FEV1/FVC | {ratio} | imaging |
| 19862-2, 89085-5 | Total lung capacity; TLC percent predicted (body plethysmography) | L, % | imaging |
| 19911-7 | Diffusing capacity for carbon monoxide | mL/min/mm[Hg] | imaging |
| 64098-7 | Six-minute walk distance | m | imaging |
| 718-7, 787-2, 777-3 | Hemoglobin, MCV, platelets | g/dL, fL, 10*3/uL | laboratory |
| 2951-2, 2823-3, 2160-0, 2345-7 (panel 51990-0) | Sodium, potassium, creatinine, glucose | mmol/L, mg/dL | laboratory |
| 98979-8 | eGFR (CKD-EPI 2021) | mL/min/{1.73_m2} | laboratory |
| 1920-8, 1742-6, 2324-2, 1751-7, 1975-2 | AST, ALT, GGT, albumin, total bilirubin | U/L, g/dL, mg/dL | laboratory |
| 74661-0 | Phosphatidylethanol (PEth) | ng/mL | laboratory |
| 75624-7, 75626-2 | AUDIT, AUDIT-C | {score} | survey |
| 44261-6, 55758-7 | PHQ-9, PHQ-2 | {score} | survey |
| 70274-6 | GAD-7 | {score} | survey |
| 72514-3 | Pain severity, 0 to 10 numeric rating | {score} | survey |

Reference ranges and lower limits of normal are typical values chosen for the teaching record; interpretation flags follow them. KCO, Borg scores, FIB-4, the withdrawal-risk assessment and the HIV, hepatitis B and hepatitis C results are recorded as narrative.

## Procedures, immunizations, and encounter types

- Plain X-ray of chest: SNOMED CT 399208008. Spirometry: 127783003 (intake and nine weeks). CT of chest: 169069000. Total body plethysmography: 28275007. 6-minute walk test: 252478000. Suture of skin wound of limb: 28961007.
- Advance care planning: SNOMED CT 713603004.
- Encounter types: SNOMED CT 390906007 (follow-up encounter) for the three focused chronic-care visits, 86013001 (periodic reevaluation and management of healthy individual) for the preventive visit, and 185345009 (encounter for symptom) for the sick visit. The services are named in plain text as CPT 99395 and 99497; CPT is not used as a coded value.
- Immunizations: CVX 115 (Tdap, sick visit), 52 (hepatitis A, adult, first dose) and 101 (typhoid Vi polysaccharide).
- No known allergy: SNOMED CT 716186003.

## Vital signs

The six visits use LOINC 8302-2, 29463-7, 39156-5, 8480-6, 8462-4, 8867-4, 9279-1, 8310-5, and 59408-5 with UCUM units.

## Review note

Codes were checked against the public terminology server and NLM RxNav on November 6, 2026. They do not imply that Alexander received these diagnoses, tests, or medications during his lifetime.
