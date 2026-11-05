# Terminology — Calamity Jane

> **SYNTHETIC RECORD, NOT A REAL MEDICAL RECORD**

## Diagnoses

| Use | System | Code | Display | Evidence |
|---|---|---|---|---|
| Active problem | ICD-10-CM FY2026 | F10.20 | Alcohol dependence, uncomplicated | S; DSM-5-TR severe alcohol use disorder; linked to her documented heavy drinking |
| Resolved by one week | ICD-10-CM FY2026 | F10.230 | Alcohol dependence with withdrawal, uncomplicated | S |
| Presenting finding, resolved at four weeks | ICD-10-CM FY2026 | R74.01 | Elevation of levels of liver transaminase levels | S |
| Active problem, from four weeks | ICD-10-CM FY2026 | K70.0 | Alcoholic fatty liver | S |
| Provisional, resolved at ten weeks | ICD-10-CM FY2026 | F32.A | Depression, unspecified | S; not a claim about her real mood |
| Active problem | ICD-10-CM FY2026 | F17.220 | Nicotine dependence, chewing tobacco, uncomplicated | S |
| Active problem | ICD-10-CM FY2026 | R63.6 | Underweight | S |
| Social need | ICD-10-CM FY2026 | Z59.811 | Housing instability, housed, with risk of homelessness | S |
| Social need | ICD-10-CM FY2026 | Z59.41 | Food insecurity | S |
| Sick visit, resolved | ICD-10-CM FY2026 | K04.7 | Periapical abscess without sinus | S |

No gender identity, tuberculosis or other code is drawn from the roster's leads; see the editorial resolutions in sources.md.

## Medications (RxNorm)

| Code | Display |
|---|---|
| 310431 | gabapentin 300 MG Oral Capsule (five-day withdrawal schedule) |
| 313324 | thiamine hydrochloride 100 MG/ML Injectable Solution (three days) |
| 313323 | thiamine 100 MG Oral Tablet |
| 310410 | folic acid 1 MG Oral Tablet |
| 198116 | potassium chloride 20 MEQ Extended Release Oral Tablet (five days) |
| 198741 | magnesium oxide 400 MG Oral Tablet (two weeks) |
| 1483744 | naltrexone hydrochloride 50 MG Oral Tablet (one to four weeks) |
| 637213 | naltrexone 380 MG Injection (extended-release, every four weeks from four weeks) |
| 308191 | amoxicillin 500 MG Oral Capsule (sick visit) |
| 197805 | ibuprofen 400 MG Oral Tablet (sick visit) |
| 198440 | acetaminophen 500 MG Oral Tablet (sick visit) |

No opioid, benzodiazepine, disulfiram or naloxone is prescribed; the reasons are recorded in the notes.

## Results (LOINC 2.81)

| Code | Measure | Unit | Category |
|---|---|---|---|
| 6690-2, 718-7, 787-2, 777-3 | White cells, hemoglobin, MCV, platelets | 10*3/uL, g/dL, fL | laboratory |
| 51990-0 | Basic metabolic panel (organizer) | — | panel |
| 2951-2, 2823-3, 2160-0, 98979-8, 2345-7 | Sodium, potassium, creatinine, eGFR (CKD-EPI 2021), glucose | mmol/L, mg/dL, mL/min/{1.73_m2} | laboratory |
| 19123-9, 2777-1 | Magnesium, phosphate | mg/dL | laboratory |
| 1751-7, 1975-2, 6301-6 | Albumin, total bilirubin, INR | g/dL, mg/dL, {INR} | laboratory |
| 1920-8, 1742-6, 2324-2 | AST, ALT, GGT | U/L | laboratory |
| 2284-8, 2132-9 | Folate, vitamin B12 | ng/mL, pg/mL | laboratory |
| 74661-0 | Phosphatidylethanol (PEth) | ng/mL | laboratory |
| 2093-3, 2085-9, 13457-7, 2571-8 | Total cholesterol, HDL, LDL (calculated), triglycerides | mg/dL | laboratory |
| 77615-3 | Liver stiffness by transient elastography | kPa | imaging |
| 75624-7 | AUDIT total score | {score} | survey |
| 44261-6 | PHQ-9 total score | {score} | survey |
| 70274-6 | GAD-7 total score | {score} | survey |
| 102017-1 | PC-PTSD-5 score | {score} | survey |

Reference ranges are typical adult female ranges chosen for the teaching record; interpretation flags follow them. The PAWSS, CIWA-Ar, FIB-4, urine drug test, pregnancy test, HIV, hepatitis B and C, HPV and interferon-gamma release assay results and the mammogram are recorded as narrative.

## Procedures, immunizations, and encounter types

- Advance care planning: SNOMED CT 713603004.
- Encounter types: SNOMED CT 390906007 (follow-up encounter) for the four focused chronic-care visits, 86013001 (periodic reevaluation and management of healthy individual) for the preventive visit, and 185345009 (encounter for symptom) for the sick visit. The services are named in plain text as CPT 99396 and 99497; CPT is not used as a coded value.
- Immunizations: CVX 115 (Tdap), 189 (HepB-CpG, two doses), 52 (hepatitis A, adult) and 216 (PCV20).
- No known allergy: SNOMED CT 716186003.

## Vital signs

The seven visits use LOINC 8302-2, 29463-7, 39156-5, 8480-6, 8462-4, 8867-4, 9279-1, 8310-5, and 59408-5 with UCUM units.

## Review note

Codes were checked against the public terminology server and NLM RxNav on November 4, 2026. They do not imply that Calamity Jane received these diagnoses, tests, or medications during her lifetime.
