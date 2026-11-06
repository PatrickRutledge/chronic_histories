# Terminology — Jean-Jacques Rousseau

> **SYNTHETIC RECORD, NOT A REAL MEDICAL RECORD**

## Diagnoses

| Use | System | Code | Display | Evidence |
|---|---|---|---|---|
| Active problem | ICD-10-CM FY2026 | F22 | Delusional disorders | S; persecutory type; linked to his documented beliefs (D) and their retrospective interpretation (R); recorded at the consultation visit on February 3 |
| Active problem | ICD-10-CM FY2026 | N35.812 | Other bulbous urethral stricture, male | S; linked to his documented lifelong retention (D) and the disputed causes (R); recorded February 3 |
| Active problem | ICD-10-CM FY2026 | K40.90 | Unilateral inguinal hernia, without obstruction or gangrene, not specified as recurrent | S; echoes the documented 1758 rupture |
| Resolved problem (presenting concern) | ICD-10-CM FY2026 | R46.5 | Suspiciousness and marked evasiveness | S; active at the index visit, resolved into F22 on February 3 |
| Resolved problem (presenting concern) | ICD-10-CM FY2026 | R33.9 | Retention of urine, unspecified | S; active at the index visit, resolved into N35.812 on February 3 |
| Resolved problem | ICD-10-CM FY2026 | S39.012A | Strain of muscle, fascia and tendon of lower back, initial encounter | S; June sick visit, resolved by July 14 |

## Medications (RxNorm)

| Code | Display |
|---|---|
| 198440 | acetaminophen 500 MG Oral Tablet |
| 402131 | aripiprazole 5 MG Oral Tablet |
| 197805 | ibuprofen 400 MG Oral Tablet |

## Results (LOINC 2.81)

| Code | Measure | Unit | Category |
|---|---|---|---|
| 44261-6 | PHQ-9 total score | {score} | survey |
| 55758-7 | PHQ-2 total score (preventive visit) | {score} | survey |
| 70274-6 | GAD-7 total score | {score} | survey |
| 72172-0 | MoCA total score | {score} | survey |
| 75626-2 | AUDIT-C total score | {score} | survey |
| 80891-5, 81090-3 | IPSS symptom score; IPSS quality-of-life score | {score} | survey |
| 80519-2 | Maximum urine flow by uroflowmetry | mL/s | imaging |
| 98856-8 | Post-void residual by bladder ultrasound | mL | imaging |
| 8280-0 | Waist circumference | cm | imaging |
| 2951-2, 2823-3, 2028-9, 3094-0, 2160-0, 98979-8, 2345-7, 17861-6 | Basic metabolic panel, eGFR (CKD-EPI 2021), and calcium | mmol/L, mg/dL, mL/min/{1.73_m2} | laboratory |
| 1742-6 | ALT | U/L | laboratory |
| 718-7, 6690-2, 777-3 | Hemoglobin, white cell count, platelets | g/dL, 10*3/uL | laboratory |
| 3016-3, 2132-9 | TSH; vitamin B12 | m[IU]/L, pg/mL | laboratory |
| 5821-4 | Urine white cells by microscopy | /[HPF] | laboratory |
| 4548-4 | Hemoglobin A1c | % | laboratory |
| 2093-3, 2085-9, 13457-7, 2571-8 | Total, HDL, and LDL cholesterol; triglycerides | mg/dL | laboratory |

Reference ranges are typical adult male ranges chosen for the teaching record; interpretation flags follow them, and validation checks that every flag agrees with its range. Uroflowmetry and waist circumference use the "imaging" category because the schema offers only laboratory and imaging for measured results. The Insomnia Severity Index and the AIMS have no LOINC code used here; their scores are given in note text.

## Procedures, immunizations, and encounters

- Ultrasonography of kidney, ureter and urinary bladder: SNOMED CT 1345060009. Fluoroscopic retrograde urethrography: 702588000. Fluoroscopic micturating cystourethrography: 419245009. Transurethral cystoscopy: 386745004. Anastomotic urethroplasty: 176339000. Removal of urethral catheter: 55449009.
- Immunizations: CVX 115 (Tdap), 140 (influenza, trivalent, preservative free), 187 (recombinant zoster), and 216 (PCV20).
- No known allergy: SNOMED CT 716186003.
- Encounter types: SNOMED CT 390906007 (follow-up encounter) for the four focused chronic-care visits, 185345009 (encounter for symptom) for the June sick visit, and 86013001 (periodic reevaluation and management of healthy individual) for the adult preventive visit. The services are named in plain text as CPT 99396 and CPT 99497; CPT is not used as a coded value.

## Vital signs

The seven visits use LOINC 8302-2, 29463-7, 39156-5, 8480-6, 8462-4, 8867-4, 9279-1, 8310-5, and 59408-5 with UCUM units.

## Review note

Codes were checked against the public terminology server and NLM RxNav on November 5, 2026. They do not imply that Rousseau received these diagnoses, tests, or medications during his lifetime.
