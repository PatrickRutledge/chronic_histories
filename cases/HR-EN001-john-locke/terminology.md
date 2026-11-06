# Terminology — John Locke

> **SYNTHETIC RECORD, NOT A REAL MEDICAL RECORD**

## Diagnoses

| Use | System | Code | Display | Evidence |
|---|---|---|---|---|
| Resolved presenting problem | ICD-10-CM FY2026 | R05.3 | Chronic cough | S; cough, wheeze, and breathlessness, superseded at the March 26 visit |
| Active problem | ICD-10-CM FY2026 | Z77.110 | Contact with and (suspected) exposure to air pollution | S; urban air pollution and indoor solid-fuel smoke |
| Active problem (both_with_link) | ICD-10-CM FY2026 | J45.40 | Moderate persistent asthma, uncomplicated | S; asthma with persistent airflow limitation, linked to his documented lifelong cough |
| Resolved problem | ICD-10-CM FY2026 | J06.9 | Acute upper respiratory infection, unspecified | S; a cold with a yellow-zone flare at the October 8 visit |

No code for COPD (J44.-), tuberculosis (A15.-), or heart failure is used; COPD was considered and not diagnosed, and tuberculosis and heart failure were excluded.

## Medications (RxNorm)

| Code | Display |
|---|---|
| 2123076 | NDA020983 200 ACTUAT albuterol 0.09 MG/ACTUAT Metered Dose Inhaler |
| 1246304 | 120 ACTUAT budesonide 0.16 MG/ACTUAT / formoterol fumarate 0.0045 MG/ACTUAT Metered Dose Inhaler |
| 1552002 | 60 ACTUAT tiotropium 0.0025 MG/ACTUAT Inhalation Spray |
| 198440 | acetaminophen 500 MG Oral Tablet |

## Results (LOINC 2.81)

| Code | Measure | Unit | Category |
|---|---|---|---|
| 82668-5 | Asthma Control Test total score | {score} | survey |
| 55758-7 | PHQ-2 total score | {score} | survey |
| 58410-2 | CBC panel (organizer): 718-7, 6690-2, 711-2, 777-3 | g/dL, 10*3/uL | laboratory |
| 19113-0 | IgE | [IU]/mL | laboratory |
| 1825-9 | Alpha-1 antitrypsin | mg/dL | laboratory |
| 33762-6 | NT-proBNP | pg/mL | laboratory |
| 64084-7 | Interferon-gamma release assay (TB1 antigen minus nil) | [IU]/mL | laboratory |
| 24331-1 | Lipid panel (organizer): 2093-3, 2085-9, 13457-7, 2571-8 | mg/dL | laboratory |
| 20157-4, 19876-2, 19926-5, 20152-5 | FEV1, FVC, FEV1/FVC, and FEV1 percent predicted before bronchodilator | L, {ratio}, % | imaging |
| 20155-8, 19875-4, 69970-2 | FEV1, FVC, and FEV1/FVC after bronchodilator | L, {ratio} | imaging |
| 19911-7 | DLCO | mL/min/mm[Hg] | imaging |
| 96269-6 | FeNO | [ppb] | imaging |
| 64098-7 | Six-minute walk distance | m | imaging |
| 19935-6 | Peak expiratory flow | L/min | imaging |

Interpretation flags follow the stated ranges; lung-function ranges give GLI Global race-neutral lower limits. The bronchodilator response, the AUDIT-C, and indoor PM2.5 monitor readings are kept in the note text.

## Procedures, immunizations, and other codes

- Procedures: SNOMED CT 399208008 (plain X-ray of chest) and 169069000 (CT of chest), with findings in the display text.
- Immunizations: CVX 115 (Tdap) and 140 (influenza, last season) in the history; 216 (PCV20) at the diagnosis visit; 140 (influenza), 309 (COVID-19 mRNA), and 303 (RSV) at the preventive visit; 187 (recombinant zoster) at the last visit.
- Family history relationships: HL7 v3 RoleCode FTH (father) and BRO (brother).
- No known allergy: SNOMED CT 716186003.
- Encounter types: SNOMED CT 390906007 (follow-up encounter) for the three focused visits, 185345009 (encounter for symptom) for the sick visit, and 86013001 (periodic reevaluation and management of healthy individual) for the preventive visit. Services are named in plain text only; HCPCS and CPT are not used as coded values.

## Vital signs

The six visits use LOINC 8302-2, 29463-7, 39156-5, 8480-6, 8462-4, 8867-4, 9279-1, 8310-5, and 59408-5 with UCUM units.

## Review note

Codes were checked against the public terminology server and NLM RxNav on November 6, 2026. They do not imply that John Locke received these diagnoses, tests, or medications during his lifetime.
