# Terminology — John F. Kennedy

> **SYNTHETIC RECORD, NOT A REAL MEDICAL RECORD**

## Diagnoses

| Use | System | Code | Display | Evidence |
|---|---|---|---|---|
| Active problem | ICD-10-CM FY2026 | E27.1 | Primary adrenocortical insufficiency | S; linked to the documented 1947 diagnosis |
| Active problem | ICD-10-CM FY2026 | M96.1 | Postlaminectomy syndrome, not elsewhere classified | S; linked to the documented back pain and 1944 operation |
| Screening finding at intake, resolved at six weeks | ICD-10-CM FY2026 | R94.6 | Abnormal results of thyroid function studies | S |
| Problem recorded at six weeks | ICD-10-CM FY2026 | E06.3 | Autoimmune thyroiditis | S; linked to the documented later hypothyroidism and its retrospective interpretation |
| Problem added at the sick visit, resolved | ICD-10-CM FY2026 | J10.1 | Influenza due to other identified influenza virus with other respiratory manifestations | S |

The retrospective interpretations (autoimmune polyglandular syndrome type 2, coeliac disease, osteoporosis with compression fractures, centrally mediated pain) are not coded as separate diagnoses (see sources.md).

## Medications (RxNorm)

| Code | Display |
|---|---|
| 197782 | hydrocortisone 10 MG Oral Tablet (30 mg a day from the hospital to two weeks; then 10 mg on waking) |
| 197787 | hydrocortisone 5 MG Oral Tablet (noon and 4 pm, from two weeks) |
| 313979 | fludrocortisone acetate 0.1 MG Oral Tablet (half a tablet to two weeks; then one tablet) |
| 238755 | hydrocortisone 100 MG Injection (emergency kit) |
| 198440 | acetaminophen 500 MG Oral Tablet |
| 312122 | oseltamivir 75 MG Oral Capsule (sick visit, five days) |
| 966221 | levothyroxine sodium 0.05 MG Oral Tablet (from six weeks) |

## Results (LOINC 2.81)

| Code | Measure | Unit | Category |
|---|---|---|---|
| 718-7 | Hemoglobin | g/dL | laboratory |
| 51990-0 | Basic metabolic panel (organizer) | — | panel |
| 2951-2, 2823-3, 2160-0, 98979-8 | Sodium, potassium, creatinine, eGFR (CKD-EPI 2021) | mmol/L, mg/dL, mL/min/{1.73_m2} | laboratory |
| 1558-6, 2345-7 | Fasting glucose, glucose | mg/dL | laboratory |
| 2915-7 | Plasma renin activity | ng/mL/h | laboratory |
| 17781-6 | 21-hydroxylase antibodies | U/mL | laboratory |
| 3016-3, 3024-7, 8099-4 | TSH, free T4, thyroid peroxidase antibodies | m[IU]/L, ng/dL, [IU]/mL | laboratory |
| 2132-9, 4548-4 | Vitamin B12, hemoglobin A1c | pg/mL, % | laboratory |
| 31017-7, 2458-8 | Tissue transglutaminase IgA, total IgA | U/mL, mg/dL | laboratory |
| 62292-8 | 25-hydroxyvitamin D | ng/mL | laboratory |
| 85394-5, 80934-3 | DXA lumbar spine and femur Z-scores | {Z-score} | imaging |
| 44261-6, 55758-7 | PHQ-9, PHQ-2 | {score} | survey |
| 75626-2 | AUDIT-C | {score} | survey |
| 97909-6 | Oswestry Disability Index score | {score} | survey |

Reference ranges are typical adult male ranges chosen for the teaching record; interpretation flags follow them. Qualitative results (influenza test, HIV and hepatitis C screening) are recorded as narrative.

## Procedures, immunizations, and encounter types

- Bone density scan: SNOMED CT 312681000 (Bone density scan).
- Advance care planning: SNOMED CT 713603004.
- Encounter types: SNOMED CT 390906007 (follow-up encounter) for the four focused chronic-care visits, 86013001 (periodic reevaluation and management of healthy individual) for the preventive visit, and 185345009 (encounter for symptom) for the sick visit. The services are named in plain text as CPT 99395 and 99497; CPT is not used as a coded value.
- Immunizations: CVX 140 (influenza, intake and nine months), 115 (Tdap), and 189 (HepB-CpG, two doses).
- No known allergy: SNOMED CT 716186003.

## Vital signs

The seven visits use LOINC 8302-2, 29463-7, 39156-5, 8480-6, 8462-4, 8867-4, 9279-1, 8310-5, and 59408-5 with UCUM units.

## Review note

Codes were checked against the public terminology server and NLM RxNav on November 4, 2026. They do not imply that Kennedy received these diagnoses, tests, or medications during his lifetime.
