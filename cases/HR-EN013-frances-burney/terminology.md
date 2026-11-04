# Terminology — Frances Burney

> **SYNTHETIC RECORD, NOT A REAL MEDICAL RECORD**

## Diagnoses

| Use | System | Code | Display | Evidence |
|---|---|---|---|---|
| Active problem | ICD-10-CM FY2026 | C50.411 | Malignant neoplasm of upper-outer quadrant of right female breast | S; linked to the documented 1810 breast pain and 1811 mastectomy (D) and to the disputed interpretation as cancer (R). The second focus lies in the lower outer quadrant; the main tumor's site is coded |
| Active problem | ICD-10-CM FY2026 | Z17.0 | Estrogen receptor positive status [ER+] | S |
| Active problem | ICD-10-CM FY2026 | Z90.11 | Acquired absence of right breast and nipple | S; recorded on the day of the synthetic mastectomy |
| Active problem | ICD-10-CM FY2026 | Z79.811 | Long term (current) use of aromatase inhibitors | S |
| Active problem | ICD-10-CM FY2026 | M85.80 | Other specified disorders of bone density and structure, unspecified site | S; low bone mass on the baseline DXA |
| Resolved problem | ICD-10-CM FY2026 | L76.34 | Postprocedural seroma of skin and subcutaneous tissue following other procedure | S; recorded at the October sick visit |
| Resolved problem (presenting concern) | ICD-10-CM FY2026 | N63.11 | Unspecified lump in the right breast, upper outer quadrant | S; active at the index visit, resolved at the diagnosis visit on August 24 |

## Medications (RxNorm)

| Code | Display |
|---|---|
| 198440 | acetaminophen 500 MG Oral Tablet |
| 197805 | ibuprofen 400 MG Oral Tablet |
| 199224 | anastrozole 1 MG Oral Tablet |
| 199362 | cholecalciferol 0.025 MG Oral Tablet (1000 units) |

## Results (LOINC 2.81)

| Code | Measure | Unit | Category |
|---|---|---|---|
| 55758-7 | PHQ-2 total score | {score} | survey |
| 44261-6 | PHQ-9 total score | {score} | survey |
| 70274-6 | GAD-7 total score | {score} | survey |
| 75626-2 | AUDIT-C total score (preventive visit) | {score} | survey |
| 2093-3, 2085-9, 13457-7, 2571-8 | Total, HDL, and LDL cholesterol; triglycerides | mg/dL | laboratory |
| 62292-8 | 25-hydroxyvitamin D (D2 + D3) | ng/mL | laboratory |
| 38267-1, 38263-0 | DXA lumbar spine and femur T-scores | {T-score} | imaging |

Reference ranges are typical adult female ranges chosen for the teaching record; interpretation flags follow them, and validation checks that every flag agrees with its range.

## Procedures, immunizations, and encounters

- Mammography of bilateral breasts: SNOMED CT 43204002. Ultrasonography of breast: 47079000. Core needle biopsy of breast using ultrasound guidance: 432550005. MRI of breast: 241615005. MRI guided core needle biopsy of breast: 433008009. Simple mastectomy: 172043006. Sentinel lymph node biopsy: 396487001. PECS II block: 718444008. Puncture and aspiration of seroma: 443964009. Bone density scan: 312681000.
- Immunizations: CVX 140 (influenza, trivalent, preservative free), 216 (PCV20), 187 (recombinant zoster), and 115 (Tdap).
- No known allergy: SNOMED CT 716186003.
- Encounter types: SNOMED CT 390906007 (follow-up encounter) for the two focused chronic-care visits, 185345009 (encounter for symptom) for the October sick visit, and 86013001 (periodic reevaluation and management of healthy individual) for the adult preventive visit. The services are named in plain text as CPT 99396 and CPT 99497; CPT is not used as a coded value.
- Family relationship: HL7 RoleCode MTH (mother).

## Vital signs

The five visits use LOINC 8302-2, 29463-7, 39156-5, 8480-6, 8462-4, 8867-4, 9279-1, 8310-5, and 59408-5 with UCUM units.

## Review note

Codes were checked against the public terminology server and NLM RxNav on November 3, 2026. They do not imply that Burney received these diagnoses, tests, or medications during her lifetime.
