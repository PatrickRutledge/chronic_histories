# Terminology — Susan B. Anthony

> **SYNTHETIC RECORD, NOT A REAL MEDICAL RECORD**

## Diagnoses

| Use | System | Code | Display | Evidence |
|---|---|---|---|---|
| Active problem | ICD-10-CM FY2026 | I50.32 | Chronic diastolic (congestive) heart failure | S; linked to the documented 1906 heart failure |
| Active problem | ICD-10-CM FY2026 | I11.0 | Hypertensive heart disease with heart failure | S |
| Resolved problem | ICD-10-CM FY2026 | J20.9 | Acute bronchitis, unspecified | S; recorded at the August sick visit |

## Medications (RxNorm)

| Code | Display |
|---|---|
| 310429 | furosemide 20 MG Oral Tablet (daily, then as needed) |
| 1545658 | empagliflozin 10 MG Oral Tablet |
| 313096 | spironolactone 25 MG Oral Tablet (one-half tablet) |

## Results (LOINC 2.81)

| Code | Measure | Unit | Category |
|---|---|---|---|
| 33762-6 | NT-proBNP | pg/mL | laboratory |
| 51990-0 | Basic metabolic panel (organizer) | — | panel |
| 2951-2, 2823-3, 2160-0, 98979-8, 2345-7 | Sodium, potassium, creatinine, eGFR (CKD-EPI 2021), glucose | mmol/L, mg/dL, mL/min/{1.73_m2} | laboratory |
| 19123-9 | Magnesium | mg/dL | laboratory |
| 718-7, 2276-4, 2502-3 | Hemoglobin, ferritin, transferrin saturation | g/dL, ng/mL, % | laboratory |
| 3016-3, 4548-4, 13457-7, 1742-6 | TSH, HbA1c, LDL cholesterol, ALT | m[IU]/L, %, mg/dL, U/L | laboratory |
| 10230-1 | Left ventricular ejection fraction | % | imaging |
| 79984-1 | Left atrial volume index (biplane method of disks) | mL/m2 | imaging |
| 59111-5 | Mitral E/e' ratio | {ratio} | imaging |
| 86924-8 | KCCQ-12 overall summary score | {score} | survey |
| 55758-7 | PHQ-2 total score | {score} | survey |
| 72233-0 | Mini-Cog total score (annual wellness visit) | {score} | survey |
| 75626-2 | AUDIT-C total score (annual wellness visit) | {score} | survey |

eGFR values are calculated from the synthetic creatinine with the 2021 CKD-EPI creatinine equation for an 85-year-old woman. Reference ranges are typical adult ranges chosen for the teaching record; interpretation flags follow them, and validation checks that every flag agrees with its range.

## Procedures, immunizations, and family history

- Electrocardiogram: SNOMED CT 29303009. Transthoracic echocardiography: SNOMED CT 433236007.
- Immunizations: CVX 135 (high-dose influenza), 216 (PCV20), 303 (RSV, adjuvanted), 187 (recombinant zoster), and 115 (Tdap).
- No known allergy: SNOMED CT 716186003.
- Encounter types: SNOMED CT 390906007 (follow-up encounter) for the three focused chronic-care visits, 185345009 (encounter for symptom) for the August sick visit and 281038008 (geriatric annual health check) for the annual wellness visit. The services are named in plain text as HCPCS G0439 and CPT 99497; HCPCS and CPT are not used as coded values.
- Family relationships: HL7 RoleCode FTH (father), MTH (mother), PGRFTH (paternal grandfather), MGRMTH (maternal grandmother), and MGRFTH (maternal grandfather).

## Vital signs

The six visits use LOINC 8302-2, 29463-7, 39156-5, 8480-6, 8462-4, 8867-4, 9279-1, 8310-5, and 59408-5 with UCUM units.

## Review note

Codes were checked against the public terminology server and NLM RxNav on November 2, 2026; the codes for the sick and annual wellness visits were checked on November 3, 2026. They do not imply that Anthony received these diagnoses, tests, or medications during her lifetime.
