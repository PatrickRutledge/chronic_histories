# Terminology — Hippocrates

> **SYNTHETIC RECORD, NOT A REAL MEDICAL RECORD**

## Diagnoses

| Use | System | Code | Display | Evidence |
|---|---|---|---|---|
| Presenting problem, resolved at the consultation | ICD-10-CM FY2026 | R26.81 | Unsteadiness on feet | S; normal aging found on geriatric assessment |
| Active problem, from the consultation | ICD-10-CM FY2026 | M17.0 | Bilateral primary osteoarthritis of knee | S |
| Resolved at the consultation | ICD-10-CM FY2026 | Z79.1 | Long term (current) use of non-steroidal anti-inflammatories (NSAID) | S; over-the-counter naproxen and diphenhydramine stopped (Beers 2023) |
| Active problem, from eight weeks | ICD-10-CM FY2026 | M85.89 | Other specified disorders of bone density and structure, multiple sites | S; low bone mass on DXA |
| Sick visit, resolved | ICD-10-CM FY2026 | J06.9 | Acute upper respiratory infection, unspecified | S |

No historical diagnosis is coded: nothing about his own health is documented; see the editorial resolutions in sources.md.

## Medications (RxNorm)

| Code | Display |
|---|---|
| 849574 | naproxen sodium 220 MG Oral Tablet (self-directed, stopped at intake) |
| 1049909 | diphenhydramine hydrochloride 25 MG Oral Capsule (self-directed, stopped at intake) |
| 198440 | acetaminophen 500 MG Oral Tablet (as needed, no more than 3,000 mg a day) |
| 199362 | cholecalciferol 0.025 MG Oral Tablet (vitamin D3 1,000 units daily) |
| 855633 | diclofenac sodium 0.01 MG/MG Topical Gel (from the consultation) |
| 707251 | sodium chloride 6.5 MG/ML Nasal Spray (sick visit) |

## Results (LOINC 2.81)

| Code | Measure | Unit | Category |
|---|---|---|---|
| 2951-2, 2823-3, 2160-0, 2345-7 (panel 51990-0) | Sodium, potassium, creatinine, glucose | mmol/L, mg/dL | laboratory |
| 98979-8 | eGFR (CKD-EPI 2021) | mL/min/{1.73_m2} | laboratory |
| 17861-6, 1751-7 | Calcium, albumin | mg/dL, g/dL | laboratory |
| 718-7, 777-3 | Hemoglobin, platelets | g/dL, 10*3/uL | laboratory |
| 62292-8 | 25-hydroxyvitamin D | ng/mL | laboratory |
| 2132-9 | Vitamin B12 | pg/mL | laboratory |
| 3016-3 | TSH | m[IU]/L | laboratory |
| 38263-0, 38264-8, 38267-1 | DXA T-scores: femoral neck, total hip, lumbar spine | {T-score} | imaging |
| 90265-0, 90266-8 | FRAX 10-year major osteoporotic and hip fracture probability | % | |
| 83173-5, 83174-3 | Grip strength, left and right hand (dynamometer) | kg | |
| 72172-0 | MoCA | {score} | survey |
| 72233-0 | Mini-Cog | {score} | survey |
| 48545-8 | GDS-15 | {score} | survey |
| 55758-7 | PHQ-2 | {score} | survey |
| 82332-8 | KOOS JR total interval score | {score} | survey |
| 72514-3 | Pain severity, 0 to 10 numeric rating | {score} | survey |

Reference ranges are typical adult ranges chosen for the teaching record; interpretation flags follow them. Gait speed, the Timed Up and Go, the 30-second chair stand, the four-stage balance test, orthostatic blood pressure, the whispered voice test, the MNA-SF, the Clinical Frailty Scale, the FRAIL scale and the rapid COVID-19 and influenza tests are recorded as narrative.

## Procedures, immunizations, and encounter types

- Bone density scan: SNOMED CT 312681000.
- Advance care planning: SNOMED CT 713603004.
- Encounter types: SNOMED CT 390906007 (follow-up encounter) for the four focused chronic-care visits, 281038008 (geriatric annual health check) for the subsequent annual wellness visit, and 185345009 (encounter for symptom) for the sick visit. The services are named in plain text as HCPCS G0439 and CPT 99497; neither is used as a coded value.
- Immunizations: CVX 216 (PCV20), 303 (RSV, adjuvanted RSVpreF3), 187 (recombinant zoster, two doses) and 135 (influenza, high-dose, trivalent).
- No known allergy: SNOMED CT 716186003.

## Vital signs

The seven visits use LOINC 8302-2, 29463-7, 39156-5, 8480-6, 8462-4, 8867-4, 9279-1, 8310-5, and 59408-5 with UCUM units.

## Review note

Codes were checked against the public terminology server and NLM RxNav on November 6, 2026. They do not imply that Hippocrates received these diagnoses, tests, or medications during his lifetime.
