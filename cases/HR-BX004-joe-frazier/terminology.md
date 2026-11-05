# Terminology — Joe Frazier

> **SYNTHETIC RECORD, NOT A REAL MEDICAL RECORD**

## Diagnoses

| Use | System | Code | Display | Evidence |
|---|---|---|---|---|
| Active problem | ICD-10-CM FY2026 | E11.65 | Type 2 diabetes mellitus with hyperglycemia | S; linked to the publicly reported diabetes |
| Active problem | ICD-10-CM FY2026 | I10 | Essential (primary) hypertension | S; linked to the publicly reported high blood pressure |
| Intake finding, resolved at two weeks | ICD-10-CM FY2026 | R74.01 | Elevation of levels of liver transaminase levels | S |
| Active problem from two weeks | ICD-10-CM FY2026 | K76.0 | Fatty (change of) liver, not elsewhere classified | S; MASLD; not part of the public record |
| Active problem from two weeks | ICD-10-CM FY2026 | K74.69 | Other cirrhosis of liver | S; compensated; not part of the public record |
| Active problem | ICD-10-CM FY2026 | E78.5 | Hyperlipidemia, unspecified | S |
| Active problem | ICD-10-CM FY2026 | E66.811 | Obesity, class 1 | S |
| Active problem | ICD-10-CM FY2026 | H54.62 | Unqualified visual loss, left eye, normal vision right eye | S; linked to the documented left-eye cataract |

No liver cancer, traumatic brain injury or chronic traumatic encephalopathy code is used.

## Medications (RxNorm)

| Code | Display |
|---|---|
| 861004 | metformin hydrochloride 1000 MG Oral Tablet |
| 314077 | lisinopril 20 MG Oral Tablet |
| 617311 | atorvastatin 40 MG Oral Tablet |
| 197361 | amlodipine 5 MG Oral Tablet (two weeks to eight weeks) |
| 308135 | amlodipine 10 MG Oral Tablet (from eight weeks) |
| 2619152 | 0.25 MG, 0.5 MG Dose 3 ML semaglutide 0.68 MG/ML Pen Injector (two weeks to three months) |
| 2398841 | 3 ML semaglutide 1.34 MG/ML Pen Injector (1 mg doses, from three months) |

## Results (LOINC 2.81)

| Code | Measure | Unit | Category |
|---|---|---|---|
| 4548-4 | Hemoglobin A1c | % | laboratory |
| 2345-7, 2951-2, 2823-3, 2160-0 | Glucose, sodium, potassium, creatinine | mg/dL, mmol/L | laboratory |
| 98979-8 | eGFR (CKD-EPI 2021, no race term) | mL/min/{1.73_m2} | laboratory |
| 9318-7 | Urine albumin-to-creatinine ratio | mg/g | laboratory |
| 2093-3, 13457-7, 2085-9, 2571-8 | Total cholesterol, LDL (calculated), HDL, triglycerides | mg/dL | laboratory |
| 1920-8, 1742-6, 6768-6, 1751-7, 1975-2 | AST, ALT, alkaline phosphatase, albumin, total bilirubin | U/L, g/dL, mg/dL | laboratory |
| 718-7, 777-3 | Hemoglobin, platelets | g/dL, 10*3/uL | laboratory |
| 2132-9 | Vitamin B12 | pg/mL | laboratory |
| 6301-6 | INR | {INR} | laboratory |
| 1834-1 | Alpha-fetoprotein | ng/mL | laboratory |
| 77615-3 | Liver stiffness by transient elastography | kPa | imaging |
| 44261-6, 55758-7 | PHQ-9, PHQ-2 | {score} | survey |
| 75626-2 | AUDIT-C | {score} | survey |
| 72172-0 | MoCA | {score} | survey |

Reference ranges are typical adult male ranges chosen for the teaching record; interpretation flags follow them. FIB-4, Child-Pugh and MELD are calculated in the note text. The controlled attenuation parameter, hepatitis, HIV, iron and autoimmune tests, the PSA, and the ECG, foot, eye, ultrasound and endoscopy findings are recorded as narrative.

## Procedures, immunizations, and encounter types

- Electrocardiogram: SNOMED CT 29303009. Diabetic foot examination: 401191002. Liver transient elastography: 441491005 (Ultrasound elastography of liver). Surveillance liver ultrasound, baseline and six months: 718290002 (Ultrasonography of liver for early detection of hepatocellular carcinoma). Variceal screening: 76009000 (Esophagogastroduodenoscopy). Dilated eye examination: 410451008 (Indirect ophthalmoscopy). Advance care planning: 713603004.
- Encounter types: SNOMED CT 390906007 (follow-up encounter) for the four focused chronic-care visits and 86013001 (periodic reevaluation and management of healthy individual) for the preventive visit. No sick visit (recent-death rule). The services are named in plain text as CPT 99396 and 99497; CPT is not used as a coded value.
- Immunizations: CVX 115 (Tdap), 216 (PCV20), 189 (HepB-CpG, two doses), 52 (hepatitis A, two doses), 187 (recombinant zoster, two doses), 140 (influenza), 309 (COVID-19 mRNA) and 305 (RSV).
- No known allergy: SNOMED CT 716186003.

## Vital signs

The six visits use LOINC 8302-2, 29463-7, 39156-5, 8480-6, 8462-4, 8867-4, 9279-1, 8310-5, and 59408-5 with UCUM units.

## Review note

Codes were checked against the public terminology server and NLM RxNav on November 4, 2026. They do not imply that Frazier received these diagnoses, tests, or medications during his lifetime.
