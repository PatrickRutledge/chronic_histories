# Terminology — Evel Knievel

> **SYNTHETIC RECORD, NOT A REAL MEDICAL RECORD**

## Diagnoses

| Use | System | Code | Display | Evidence |
|---|---|---|---|---|
| Presenting problem; resolved (superseded) at the consultation | ICD-10-CM FY2026 | R74.01 | Elevation of levels of liver transaminase levels | S |
| Problem recorded at the consultation; resolved at the test of cure (both_with_link) | ICD-10-CM FY2026 | B18.2 | Chronic viral hepatitis C | S; linked to his publicly reported transfusion-acquired hepatitis C |
| Problem recorded at the consultation (both_with_link) | ICD-10-CM FY2026 | K74.69 | Other cirrhosis of liver | S; linked to the same claim |
| Problem recorded at the consultation | ICD-10-CM FY2026 | K76.6 | Portal hypertension | S |
| Problem at intake | ICD-10-CM FY2026 | E11.65 | Type 2 diabetes mellitus with hyperglycemia | S; linked to his documented diabetes in later life |
| Problem at intake (both_with_link) | ICD-10-CM FY2026 | G89.29 | Other chronic pain | S; linked to his documented fractures and later pain |
| Problem recorded at the end of treatment | ICD-10-CM FY2026 | M81.8 | Other osteoporosis without current pathological fracture | S |
| Problem recorded at day 1 of treatment; resolved at the end of treatment | ICD-10-CM FY2026 | E55.9 | Vitamin D deficiency, unspecified | S |

No alcohol use disorder code is used (see sources.md).

## Medications (RxNorm)

| Code | Display |
|---|---|
| 861004 | metformin hydrochloride 1000 MG Oral Tablet |
| 197807 | ibuprofen 800 MG Oral Tablet (stopped at intake) |
| 198051 | omeprazole 20 MG Delayed Release Oral Capsule (stopped at intake) |
| 198440 | acetaminophen 500 MG Oral Tablet (no more than 2 g a day) |
| 855633 | diclofenac sodium 0.01 MG/MG Topical Gel |
| 200031 | carvedilol 6.25 MG Oral Tablet |
| 200032 | carvedilol 12.5 MG Oral Tablet |
| 617310 | atorvastatin 20 MG Oral Tablet |
| 1799212 | sofosbuvir 400 MG / velpatasvir 100 MG Oral Tablet (12 weeks) |
| 804146 | cholecalciferol 0.05 MG Oral Capsule |
| 705824 | 100 ML zoledronic acid 0.05 MG/ML Injection (5 mg yearly) |

## Results (LOINC 2.81)

| Code | Measure | Unit | Category |
|---|---|---|---|
| 58410-2 | CBC panel (organizer) | — | panel |
| 718-7, 6690-2, 777-3 | Hemoglobin, white cell count, platelets | g/dL, 10*3/uL | laboratory |
| 24323-8 | Comprehensive metabolic panel (organizer) | — | panel |
| 2951-2, 2823-3, 2160-0, 98979-8, 2345-7, 1742-6, 1920-8, 6768-6, 1975-2, 1751-7, 17861-6 | Sodium, potassium, creatinine, eGFR (CKD-EPI 2021), glucose, ALT, AST, alkaline phosphatase, total bilirubin, albumin, calcium | mmol/L, mg/dL, mL/min/{1.73_m2}, U/L, g/dL | laboratory |
| 6301-6 | INR | {INR} | laboratory |
| 4548-4 | Hemoglobin A1c | % | laboratory |
| 97506-0 | Glucose management indicator | % | laboratory |
| 24331-1 | Lipid panel (organizer) | — | panel |
| 2093-3, 13457-7, 2085-9, 2571-8 | Total, LDL (calculated) and HDL cholesterol, triglycerides | mg/dL | laboratory |
| 9318-7 | Urine albumin-creatinine ratio | mg/g | laboratory |
| 2132-9 | Vitamin B12 | pg/mL | laboratory |
| 62292-8 | 25-hydroxyvitamin D | ng/mL | laboratory |
| 3016-3, 2731-8, 2986-8 | TSH, parathyroid hormone (intact), testosterone | m[IU]/L, pg/mL, ng/dL | laboratory |
| 1834-1 | Alpha-fetoprotein | ng/mL | laboratory |
| 11011-4 | HCV RNA (quantitative) | [IU]/mL | laboratory |
| 2857-1 | PSA (preventive visit) | ng/mL | laboratory |
| 77615-3 | Liver stiffness by transient elastography | kPa | imaging |
| 75626-2 | AUDIT-C total score | {score} | survey |
| 72514-3 | Pain severity, 0 to 10 numeric rating | {score} | survey |
| 55758-7 | PHQ-2 total score | {score} | survey |
| 44261-6 | PHQ-9 total score | {score} | survey |

Reference ranges are typical adult male ranges chosen for the teaching record. HCV RNA “not detected” is recorded as 0 with the reference text. Hepatitis serology, HIV, the HCV genotype, the baseline viral load from the reflex test, the controlled attenuation parameter, ultrasound, DXA and the retinal examination are recorded in procedure and note text, not as coded observations. FIB-4, Child-Pugh and MELD-Na are calculated in the notes.

## Procedures, immunizations, and encounter types

- Ultrasonography of abdomen: SNOMED CT 45036003 (baseline and six-month surveillance). Ultrasound elastography of liver: 441491005. Physical therapy assessment: 410158009. Dual energy X-ray absorptiometry: 241686001. Advance care planning: 713603004.
- Encounter types: SNOMED CT 390906007 (follow-up encounter) for the four focused chronic-care visits and 86013001 (periodic reevaluation and management of healthy individual) for the preventive visit. There is no sick visit (recent-death rule). The services are named in plain text as CPT 99396 and 99497; CPT is not used as a coded value.
- Immunizations: CVX 52 (hepatitis A, adult, two doses), 189 (HepB-CpG, two doses), 140 (influenza, trivalent, preservative free), 216 (PCV20), 187 (recombinant zoster, dose 1), and 115 (Tdap).
- No known allergy: SNOMED CT 716186003.

## Vital signs

The six visits use LOINC 8302-2, 29463-7, 39156-5, 8480-6, 8462-4, 8867-4, 9279-1, 8310-5, and 59408-5 with UCUM units.

## Review note

Codes were checked against the public terminology server and NLM RxNav on November 4, 2026. They do not imply that Evel Knievel received these diagnoses, tests, or medications during his lifetime.
