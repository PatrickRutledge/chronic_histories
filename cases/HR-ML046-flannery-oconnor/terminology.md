# Terminology — Flannery O'Connor

> **SYNTHETIC RECORD, NOT A REAL MEDICAL RECORD**

## Diagnoses

| Use | System | Code | Display | Evidence |
|---|---|---|---|---|
| Active problem (both, with link) | ICD-10-CM FY2026 | M32.19 | Other organ or system involvement in systemic lupus erythematosus | S; linked to her documented lupus (D) and her father's (D); recorded at the diagnosis visit on April 22 |
| Active problem | ICD-10-CM FY2026 | M32.14 | Glomerular disease in systemic lupus erythematosus | S; class III (A) lupus nephritis on biopsy; recorded April 29 |
| Active problem | ICD-10-CM FY2026 | Z79.52 | Long term (current) use of systemic steroids | S; recorded April 29 |
| Active problem | ICD-10-CM FY2026 | Z79.624 | Long term (current) use of inhibitors of nucleotide synthesis | S; mycophenolate; recorded April 29 |
| Active problem | ICD-10-CM FY2026 | Z97.5 | Presence of (intrauterine) contraceptive device | S; recorded April 29 |
| Resolved problem (presenting concern) | ICD-10-CM FY2026 | M25.50 | Pain in unspecified joint | S; active at the index visit, resolved at the diagnosis visit on April 22 |
| Resolved problem (presenting finding) | ICD-10-CM FY2026 | R80.9 | Proteinuria, unspecified | S; active at the index visit, resolved at the biopsy-result visit on April 29 |
| Resolved problem | ICD-10-CM FY2026 | N30.00 | Acute cystitis without hematuria | S; June sick visit; coded without hematuria because the hematuria is from the nephritis |
| Family history (father) | ICD-10-CM FY2026 | M32.9 | Systemic lupus erythematosus, unspecified | D |

## Medications (RxNorm)

| Code | Display |
|---|---|
| 198440 | acetaminophen 500 MG Oral Tablet |
| 2569283 | hydroxychloroquine sulfate 300 MG Oral Tablet |
| 979485 | losartan potassium 25 MG Oral Tablet |
| 1743720 | methylprednisolone 500 MG Injection |
| 312617 | prednisone 5 MG Oral Tablet |
| 200060 | mycophenolate mofetil 500 MG Oral Tablet |
| 1939296 | 1 ML belimumab 200 MG/ML Auto-Injector |
| 199362 | cholecalciferol 0.025 MG Oral Tablet (1000 units) |
| 1648755 | nitrofurantoin, macrocrystals 25 MG / nitrofurantoin, monohydrate 75 MG Oral Capsule |

The levonorgestrel intrauterine system is recorded as a procedure and a problem, because the schema has no intrauterine route.

## Results (LOINC 2.81)

| Code | Measure | Unit | Category |
|---|---|---|---|
| 44261-6 | PHQ-9 total score | {score} | survey |
| 55758-7, 75626-2 | PHQ-2 and AUDIT-C (preventive visit) | {score} | survey |
| 72514-3 | Joint pain, 0 to 10 numeric rating | {score} | survey |
| 718-7, 6690-2, 731-0, 777-3 | Hemoglobin, white cells, lymphocytes, platelets | g/dL, 10*3/uL | laboratory |
| 2160-0, 98979-8, 2823-3, 1751-7, 1742-6 | Creatinine, eGFR (CKD-EPI 2021), potassium, albumin, ALT | mg/dL, mL/min/{1.73_m2}, mmol/L, g/dL, U/L | laboratory |
| 4537-7, 1988-5 | ESR (Westergren), CRP | mm/h, mg/dL | laboratory |
| 2890-2, 13945-1 | Urine protein-to-creatinine ratio; urine red cells per high-power field | g/g, /[HPF] | laboratory |
| 5048-4 | ANA titer by immunofluorescence | {titer} | laboratory |
| 5130-0, 11090-8 | Anti-dsDNA, anti-Sm | [IU]/mL, U/mL | laboratory |
| 4485-9, 4498-2 | Complement C3, C4 | mg/dL | laboratory |
| 3181-5, 3182-3, 16135-6, 16136-4 | Anticardiolipin IgG and IgM; anti-beta-2 glycoprotein I IgG and IgM | U/mL | laboratory |
| 50410-0 | dRVVT screen-to-confirm ratio (lupus anticoagulant) | {ratio} | laboratory |
| 62292-8 | 25-hydroxyvitamin D | ng/mL | laboratory |
| 2093-3, 2085-9, 13457-7, 2571-8, 4548-4 | Total, HDL, and LDL cholesterol; triglycerides; HbA1c | mg/dL, % | laboratory |
| 85394-5, 80934-3 | DXA lumbar spine and femur Z-scores | {Z-score} | imaging |

Reference ranges are typical adult female ranges chosen for the teaching record; interpretation flags follow them. The ANA titer is stored as the reciprocal (640 for 1:640).

## Procedures, immunizations, and encounters

- Biopsy of kidney using ultrasound guidance: SNOMED CT 438813007. Insertion of intrauterine contraceptive device: 65200003. Bone density scan: 312681000. Optical coherence tomography: 392010000 (baseline hydroxychloroquine eye examination).
- Immunizations: CVX 140 (influenza, trivalent, preservative free), 216 (PCV20), 187 (recombinant zoster, two doses), 165 (HPV9), and 115 (Tdap).
- No known allergy: SNOMED CT 716186003. Family relationship: HL7 RoleCode FTH.
- Encounter types: SNOMED CT 390906007 (follow-up encounter) for the four focused chronic-care visits, 185345009 (encounter for symptom) for the June sick visit, and 86013001 (periodic reevaluation and management of healthy individual) for the adult preventive visit. The services are named in plain text as CPT 99395 and CPT 99497; CPT is not used as a coded value.

## Vital signs

The seven visits use LOINC 8302-2, 29463-7, 39156-5, 8480-6, 8462-4, 8867-4, 9279-1, 8310-5, and 59408-5 with UCUM units.

## Review note

Codes were checked against the public terminology server and NLM RxNav on November 5, 2026. They do not imply that O'Connor received these diagnoses, tests, or medications during her lifetime.
