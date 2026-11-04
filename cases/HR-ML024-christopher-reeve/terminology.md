# Terminology — Christopher Reeve

> **SYNTHETIC RECORD, NOT A REAL MEDICAL RECORD**

## Diagnoses

| Use | System | Code | Display | Evidence |
|---|---|---|---|---|
| Active problem | ICD-10-CM FY2026 | G82.52 | Quadriplegia, C1-C4 incomplete | S; linked to the documented injury and the published ASIA grade C |
| Active problem | ICD-10-CM FY2026 | Z99.11 | Dependence on respirator [ventilator] status | S; linked to the documented ventilator use and diaphragm pacing |
| Active problem | ICD-10-CM FY2026 | N31.9 | Neuromuscular dysfunction of bladder, unspecified | S; expected with the injury, not publicly described |
| Active problem | ICD-10-CM FY2026 | K59.2 | Neurogenic bowel, not elsewhere classified | S; expected with the injury, not publicly described |

## Medications (RxNorm)

| Code | Display |
|---|---|
| 312935 | sennosides, USP 8.6 MG Oral Tablet |
| 242946 | nitroglycerin 0.02 MG/MG Topical Ointment (as needed, autonomic dysreflexia plan) |
| 198440 | acetaminophen 500 MG Oral Tablet |
| 804146 | cholecalciferol 0.05 MG Oral Capsule (from two weeks) |

The morning bisacodyl suppository (RxNorm 198509, bisacodyl 10 MG Rectal Suppository) is described in the bowel plan but not coded as a medication, because the generator supports no rectal route.

## Results (LOINC 2.81)

| Code | Measure | Unit | Category |
|---|---|---|---|
| 6690-2, 718-7 | White cells, hemoglobin | 10*3/uL, g/dL | laboratory |
| 51990-0 | Basic metabolic panel (organizer) | — | panel |
| 2951-2, 2823-3, 2160-0 | Sodium, potassium, creatinine | mmol/L, mg/dL | laboratory |
| 33863-2, 50210-4 | Cystatin C, eGFR by cystatin C (CKD-EPI 2012) | mg/L, mL/min/{1.73_m2} | laboratory |
| 1751-7, 17861-6 | Albumin, calcium | g/dL, mg/dL | laboratory |
| 62292-8, 2731-8 | 25-hydroxyvitamin D, intact PTH | ng/mL, pg/mL | laboratory |
| 4548-4 | Hemoglobin A1c | % | laboratory |
| 2093-3, 13457-7, 2085-9, 2571-8 | Total cholesterol, LDL (calculated), HDL, triglycerides | mg/dL | laboratory |
| 38263-0 | DXA femur (total hip) T-score | {T-score} | imaging |
| 44261-6, 55758-7 | PHQ-9, PHQ-2 | {score} | survey |
| 38227-5 | Braden scale total score | {score} | survey |
| 72514-3 | Pain severity 0 to 10 numeric rating | {score} | survey |

Reference ranges are typical adult male ranges chosen for the teaching record; interpretation flags follow them. Creatinine is flagged low because of low muscle mass, and no creatinine-based eGFR is reported; kidney function is estimated from cystatin C. Distal femur and proximal tibia densities, the modified Ashworth scale, oxygen saturation on the pacer, and qualitative results (ultrasound, HIV, hepatitis C and stool immunochemical tests) are recorded as narrative.

## Procedures, immunizations, and encounter types

- Bone density scan: SNOMED CT 312681000 (Bone density scan). Kidney and bladder ultrasound: SNOMED CT 1334074007 (Ultrasonography of bilateral kidneys and bladder).
- Advance care planning: SNOMED CT 713603004.
- Encounter types: SNOMED CT 390906007 (follow-up encounter) for the four focused chronic-care visits and 86013001 (periodic reevaluation and management of healthy individual) for the preventive visit. No sick visit (recent-death rule). The services are named in plain text as CPT 99396 and 99497; CPT is not used as a coded value.
- Immunizations: CVX 216 (PCV20), 187 (recombinant zoster, dose 1), 303 (RSV, adjuvanted), 115 (Tdap), 140 (influenza), 309 (COVID-19 mRNA), and 189 (HepB-CpG, dose 1).
- No known allergy: SNOMED CT 716186003.

## Vital signs

The six visits use LOINC 8302-2, 29463-7, 39156-5, 8480-6, 8462-4, 8867-4, 9279-1, 8310-5, and 59408-5 with UCUM units. The respiratory rate is the rate set by the pacer or ventilator.

## Review note

Codes were checked against the public terminology server and NLM RxNav on November 4, 2026. They do not imply that Reeve received these diagnoses, tests, or medications during his lifetime.
