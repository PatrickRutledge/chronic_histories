# Terminology — Geronimo

> **SYNTHETIC RECORD, NOT A REAL MEDICAL RECORD**

## Diagnoses

| Use | System | Code | Display | Evidence |
|---|---|---|---|---|
| Presenting problem, resolved at the consultation | ICD-10-CM FY2026 | G47.00 | Insomnia, unspecified | S; linked to the documented killing of his family and his years of war |
| Active problem, from the consultation | ICD-10-CM FY2026 | F43.12 | Post-traumatic stress disorder, chronic | S; linked to documented history |
| Active problem | ICD-10-CM FY2026 | F10.20 | Alcohol dependence, uncomplicated (alcohol use disorder, moderate) | S; linked to his own statement about whisky in captivity |
| Active problem | ICD-10-CM FY2026 | Z91.81 | History of falling | S |
| Sick visit, resolved | ICD-10-CM FY2026 | J20.9 | Acute bronchitis, unspecified | S |

Prolonged grief disorder (ICD-10-CM F43.81) was considered and not diagnosed; the code is not used. No code is used for ceremony, spiritual belief, mourning, historical trauma or captivity; see the editorial resolutions in sources.md.

## Medications (RxNorm)

| Code | Display |
|---|---|
| 313323 | thiamine 100 MG Oral Tablet |
| 1483744 | naltrexone hydrochloride 50 MG Oral Tablet (from the consultation) |
| 312940 | sertraline 25 MG Oral Tablet (six to eleven weeks) |
| 312941 | sertraline 50 MG Oral Tablet (from eleven weeks) |
| 198440 | acetaminophen 500 MG Oral Tablet (sick visit, two weeks) |

No benzodiazepine, prazosin or opioid is prescribed.

## Results (LOINC 2.81)

| Code | Measure | Unit | Category |
|---|---|---|---|
| 6690-2, 718-7, 787-2, 777-3 | White cells, hemoglobin, MCV, platelets | 10*3/uL, g/dL, fL | laboratory |
| 2951-2, 2823-3, 2160-0, 98979-8, 2345-7 | Sodium, potassium, creatinine, eGFR (CKD-EPI 2021), glucose | mmol/L, mg/dL, mL/min/{1.73_m2} | laboratory |
| 1920-8, 1742-6, 2324-2, 1751-7, 1975-2 | AST, ALT, GGT, albumin, total bilirubin | U/L, g/dL, mg/dL | laboratory |
| 2132-9, 3016-3 | Vitamin B12, TSH | pg/mL, m[IU]/L | laboratory |
| 74661-0 | Phosphatidylethanol (PEth) in blood | ng/mL | laboratory |
| 102017-1 | PC-PTSD-5 score | {score} | survey |
| 101698-9 | PCL-5 score | {score} | survey |
| 75624-7 | AUDIT total score | {score} | survey |
| 55758-7 | PHQ-2 total score | {score} | survey |
| 44261-6 | PHQ-9 total score | {score} | survey |
| 72233-0 | Mini-Cog total score | {score} | survey |

Reference ranges are typical adult male ranges chosen for the teaching record; interpretation flags follow them. The PEth upper reference of 20 ng/mL marks little or no drinking. The CAPS-5 (no LOINC code found), the Timed Up and Go, the urine drug test, the chest X-ray findings, and the stool, hepatitis C and hepatitis B results are recorded as narrative.

## Procedures, immunizations, and encounter types

- Procedures: SNOMED CT 399208008 (plain X-ray of chest) and 713603004 (advance care planning).
- Encounter types: SNOMED CT 390906007 (follow-up encounter) for the four focused chronic-care visits, 281038008 (geriatric annual health check) for the initial annual wellness visit, and 185345009 (encounter for symptom) for the sick visit. The services are named in plain text as HCPCS G0438 and CPT 99497; CPT and HCPCS are not used as coded values.
- Immunizations: CVX 135 (influenza, high-dose, trivalent), 216 (PCV20), 303 (RSV, recombinant, protein subunit RSVpreF, adjuvanted), 115 (Tdap) and 187 (zoster recombinant).
- No known allergy: SNOMED CT 716186003.

## Vital signs

The seven visits use LOINC 8302-2, 29463-7, 39156-5, 8480-6, 8462-4, 8867-4, 9279-1, 8310-5, and 59408-5 with UCUM units.

## Review note

Codes were checked against the public terminology server and NLM RxNav on November 5, 2026. They do not imply that Geronimo received these diagnoses, tests, or medications during his lifetime.
