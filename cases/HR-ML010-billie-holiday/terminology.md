# Terminology — Billie Holiday

> **SYNTHETIC RECORD, NOT A REAL MEDICAL RECORD**

## Diagnoses

| Use | System | Code | Display | Evidence |
|---|---|---|---|---|
| Active problem | ICD-10-CM FY2026 | F11.20 | Opioid dependence, uncomplicated | S; linked to the documented heroin use |
| Active problem | ICD-10-CM FY2026 | F10.20 | Alcohol dependence, uncomplicated | S; linked to the documented drinking |
| Problem added at the sick visit, resolved | ICD-10-CM FY2026 | K04.7 | Periapical abscess without sinus | S |

The cirrhosis documented in her final year is not coded (see sources.md).

## Medications (RxNorm)

| Code | Display |
|---|---|
| 1010604 | buprenorphine 8 MG / naloxone 2 MG Sublingual Film (8 mg daily, then 16 mg daily) |
| 1725059 | naloxone hydrochloride 40 MG/ML Nasal Spray (0.1 mL = 4 mg per spray, as needed) |
| 835726 | acamprosate calcium 333 MG Delayed Release Oral Tablet |
| 313323 | thiamine 100 MG Oral Tablet (stopped at six months) |
| 308191 | amoxicillin 500 MG Oral Capsule (sick visit) |
| 197805 | ibuprofen 400 MG Oral Tablet (sick visit, as needed) |
| 198440 | acetaminophen 500 MG Oral Tablet (sick visit, as needed) |

## Results (LOINC 2.81)

| Code | Measure | Unit | Category |
|---|---|---|---|
| 718-7, 787-2, 777-3 | Hemoglobin, MCV, platelets | g/dL, fL, 10*3/uL | laboratory |
| 51990-0 | Basic metabolic panel (organizer) | — | panel |
| 2951-2, 2823-3, 2160-0, 98979-8, 2345-7 | Sodium, potassium, creatinine, eGFR (CKD-EPI 2021), glucose | mmol/L, mg/dL, mL/min/{1.73_m2} | laboratory |
| 1920-8, 1742-6, 2324-2, 1751-7, 1975-2 | AST, ALT, GGT, albumin, total bilirubin | U/L, g/dL, mg/dL | laboratory |
| 48159-8 | Hepatitis C antibody signal-to-cutoff | {s_co_ratio} | laboratory |
| 16935-9 | Hepatitis B surface antibody | m[IU]/mL | laboratory |
| 74661-0 | Phosphatidylethanol (PEth) | ng/mL | laboratory |
| 44261-6 | PHQ-9 total score | {score} | survey |
| 75626-2 | AUDIT-C total score | {score} | survey |
| 82667-7 | DAST-10 total score | {score} | survey |

Reference ranges are typical adult female ranges chosen for the teaching record; interpretation flags follow them. FIB-4 has no verified LOINC code and is calculated in the note text from age, AST, ALT, and platelets. Qualitative results (hepatitis B surface antigen and core antibody, HIV antigen-antibody, pregnancy test, and urine drug tests) are recorded as narrative.

## Procedures, immunizations, and family history

- Advance care planning: SNOMED CT 713603004.
- Encounter types: SNOMED CT 390906007 (follow-up encounter) for the four focused chronic-care visits, 86013001 (periodic reevaluation and management of healthy individual) for the preventive visit, and 185345009 (encounter for symptom) for the sick visit. The services are named in plain text as CPT 99395 and 99497; CPT is not used as a coded value.
- Immunizations: CVX 115 (Tdap), 189 (HepB-CpG, two doses), 52 (hepatitis A, adult, two doses), 216 (PCV20), and 140 (inactivated influenza).
- No known allergy: SNOMED CT 716186003.
- Family relationship: HL7 RoleCode MTH (mother).

## Vital signs

The seven visits use LOINC 8302-2, 29463-7, 39156-5, 8480-6, 8462-4, 8867-4, 9279-1, 8310-5, and 59408-5 with UCUM units.

## Review note

Codes were checked against the public terminology server and NLM RxNav on November 3, 2026. They do not imply that Holiday received these diagnoses, tests, or medications during her lifetime.
