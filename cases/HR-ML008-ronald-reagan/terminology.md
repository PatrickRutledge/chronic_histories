# Terminology — Ronald Reagan

> **SYNTHETIC RECORD, NOT A REAL MEDICAL RECORD**

## Diagnoses

| Use | System | Code | Display | Evidence |
|---|---|---|---|---|
| Active problem | ICD-10-CM FY2026 | G30.1 | Alzheimer's disease with late onset | S; linked to the 1994 letter and physicians' statement |
| Active problem | ICD-10-CM FY2026 | F02.B0 | Dementia in other diseases classified elsewhere, moderate, without behavioral disturbance, psychotic disturbance, mood disturbance, and anxiety | S; stage synthetic |
| Active problem | ICD-10-CM FY2026 | M80.051D | Age-related osteoporosis with current pathological fracture, right femur, subsequent encounter for fracture with routine healing | S; linked to the documented 2001 fracture |
| Resolved problem | ICD-10-CM FY2026 | E55.9 | Vitamin D deficiency, unspecified | S |
| Resolved problem | ICD-10-CM FY2026 | D62 | Acute posthemorrhagic anemia | S |
| Active problem | ICD-10-CM FY2026 | Z91.81 | History of falling | S; linked to the documented fall |
| Active problem | ICD-10-CM FY2026 | Z85.038 | Personal history of other malignant neoplasm of large intestine | S; linked to the documented 1985 operation |

## Medications (RxNorm)

| Code | Display |
|---|---|
| 997223 | donepezil hydrochloride 10 MG Oral Tablet |
| 198440 | acetaminophen 500 MG Oral Tablet |
| 1049621 | oxycodone hydrochloride 5 MG Oral Tablet |
| 1049909 | diphenhydramine hydrochloride 25 MG Oral Capsule |
| 854235 | 0.4 ML enoxaparin sodium 100 MG/ML Prefilled Syringe |
| 801663 | cholecalciferol 0.05 MG Oral Tablet |
| 705824 | 100 ML zoledronic acid 0.05 MG/ML Injection |

## Results (LOINC 2.81)

| Code | Measure | Unit | Category |
|---|---|---|---|
| 718-7 | Hemoglobin | g/dL | laboratory |
| 51990-0 | Basic metabolic panel (organizer) | — | panel |
| 2951-2, 2823-3, 2160-0, 98979-8, 2345-7, 17861-6 | Sodium, potassium, creatinine, eGFR (CKD-EPI 2021), glucose, calcium | mmol/L, mg/dL, mL/min/{1.73_m2} | laboratory |
| 62292-8, 2731-8, 6768-6, 19123-9, 3016-3 | 25-hydroxyvitamin D, intact PTH, alkaline phosphatase, magnesium, TSH | ng/mL, pg/mL, U/L, mg/dL, m[IU]/L | laboratory |
| 80946-7, 38267-1 | DXA T-score, left hip and lumbar spine | {T-score} | imaging |
| 72172-0 | MoCA total score | {score} | survey |
| 96761-2 | Barthel Index total score | {score} | survey |
| 48545-8 | GDS-15 total score | {score} | survey |
| 55758-7 | PHQ-2 total score (annual wellness visit) | {score} | survey |

Reference ranges are typical adult ranges chosen for the teaching record; interpretation flags follow them, and validation checks that every flag agrees with its range. The DXA T-score range uses -1.0 as the lower limit of normal.

Zarit Burden Interview, FAST stage, Lawton IADL, Timed Up and Go, NPI-Q, and the Confusion Assessment Method have no verified LOINC code on the terminology server and are recorded as narrative in social history and functional status.

## Procedures, immunizations, and family history

- Internal fixation of fracture of right femur: SNOMED CT 1303638006 (modern-frame record of the documented repair).
- Assessment of risk in home environment: SNOMED CT 718855003.
- Advance care planning: SNOMED CT 713603004.
- Dual energy X-ray absorptiometry: SNOMED CT 241686001.
- Encounter type: SNOMED CT 281038008 (geriatric annual health check) for the subsequent annual wellness visit. The services are named in plain text as HCPCS G0439 and CPT 99497; HCPCS and CPT are not used as coded values.
- Immunizations: CVX 135 (high-dose influenza, the 2025-2026 dose and the 2026-2027 dose given at the annual wellness visit) and 216 (PCV20).
- No known allergy: SNOMED CT 716186003.
- Family relationships: HL7 RoleCode FTH (father), MTH (mother), and BRO (brother).

## Vital signs

The five visits use LOINC 8302-2, 29463-7, 39156-5, 8480-6, 8462-4, 8867-4, 9279-1, 8310-5, and 59408-5 with UCUM units. Standing blood pressure is recorded in the functional status narrative.

## Review note

Codes were checked against the public terminology server and NLM RxNav on November 2, 2026; the codes for the annual wellness visit were checked on November 3, 2026. They do not imply that Reagan received these diagnoses, tests, or medications during his lifetime.
