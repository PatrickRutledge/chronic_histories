# Terminology — Jack London

> **SYNTHETIC RECORD, NOT A REAL MEDICAL RECORD**

## Diagnoses

| Use | System | Code | Display | Evidence |
|---|---|---|---|---|
| Presenting problem, resolved at the consultation | ICD-10-CM FY2026 | R94.4 | Abnormal results of kidney function studies | S; linked to his documented kidney damage |
| Active problem, from the consultation | ICD-10-CM FY2026 | N18.32 | Chronic kidney disease, stage 3b | S; linked to his documented kidney disease |
| Active problem, from the consultation | ICD-10-CM FY2026 | I12.9 | Hypertensive chronic kidney disease with stage 1 through stage 4 chronic kidney disease, or unspecified chronic kidney disease | S |
| Active problem | ICD-10-CM FY2026 | F10.20 | Alcohol dependence, uncomplicated | S; linked to his own account of drinking |
| Active problem, from the consultation | ICD-10-CM FY2026 | K70.0 | Alcoholic fatty liver | S |
| Resolved at the consultation | ICD-10-CM FY2026 | Z79.1 | Long term (current) use of non-steroidal anti-inflammatories (NSAID) | S |
| Active problem | ICD-10-CM FY2026 | F17.210 | Nicotine dependence, cigarettes, uncomplicated | S |
| Sick visit, resolved | ICD-10-CM FY2026 | S93.401A | Sprain of unspecified ligament of right ankle, initial encounter | S |

No code is used for depression, bipolar disorder, psoriasis, lupus, yaws, mercury poisoning, kidney stones or opioid use; see the editorial resolutions in sources.md.

## Medications (RxNorm)

| Code | Display |
|---|---|
| 198014 | naproxen 500 MG Oral Tablet (self-directed, stopped at intake) |
| 979492 | losartan potassium 50 MG Oral Tablet (from intake to six weeks) |
| 979480 | losartan potassium 100 MG Oral Tablet (from six weeks) |
| 905495 | chlordiazepoxide hydrochloride 25 MG Oral Capsule (five-day withdrawal taper) |
| 313323 | thiamine 100 MG Oral Tablet |
| 198440 | acetaminophen 500 MG Oral Tablet (as needed, no more than 2,000 mg a day) |
| 1483744 | naltrexone hydrochloride 50 MG Oral Tablet (from the consultation) |
| 199362 | cholecalciferol 0.025 MG Oral Tablet (vitamin D3 1,000 units daily, from six weeks) |
| 1488569 | dapagliflozin 10 MG Oral Tablet (from ten weeks) |
| 855633 | diclofenac sodium 0.01 MG/MG Topical Gel (sick visit, up to seven days) |

## Results (LOINC 2.81)

| Code | Measure | Unit | Category |
|---|---|---|---|
| 2951-2, 2823-3, 2028-9, 3094-0, 2160-0, 2345-7 (panel 51990-0) | Sodium, potassium, bicarbonate, urea nitrogen, creatinine, glucose | mmol/L, mg/dL | laboratory |
| 98979-8 | eGFR (CKD-EPI 2021) | mL/min/{1.73_m2} | laboratory |
| 9318-7 | Urine albumin-to-creatinine ratio | mg/g | laboratory |
| 3084-1 | Uric acid | mg/dL | laboratory |
| 17861-6, 2777-1, 2731-8 | Calcium, phosphate, intact PTH | mg/dL, pg/mL | laboratory |
| 62292-8 | 25-hydroxyvitamin D | ng/mL | laboratory |
| 718-7, 787-2, 777-3 | Hemoglobin, MCV, platelets | g/dL, fL, 10*3/uL | laboratory |
| 1920-8, 1742-6, 2324-2, 1751-7, 1975-2, 6301-6 | AST, ALT, GGT, albumin, total bilirubin, INR | U/L, g/dL, mg/dL, {INR} | laboratory |
| 74661-0 | Phosphatidylethanol (PEth) | ng/mL | laboratory |
| 4548-4 | HbA1c | % | laboratory |
| 2093-3, 2085-9, 13457-7, 2571-8 | Total cholesterol, HDL, LDL (calculated), triglycerides | mg/dL | laboratory |
| 75624-7 | AUDIT | {score} | survey |
| 44261-6, 55758-7 | PHQ-9, PHQ-2 | {score} | survey |
| 70274-6 | GAD-7 | {score} | survey |

Reference ranges are typical adult ranges chosen for the teaching record; interpretation flags follow them. The urinalysis, CIWA-Ar, PAWSS, FIB-4, kidney failure risk, creatinine clearance, insurance creatinine, and hepatitis B, hepatitis C and HIV results are recorded as narrative.

## Procedures, immunizations, and encounter types

- Ultrasonography of abdomen and urinary system: SNOMED CT 438416007. Ultrasound elastography of liver: 441491005.
- Advance care planning: SNOMED CT 713603004.
- Encounter types: SNOMED CT 390906007 (follow-up encounter) for the four focused chronic-care visits, 86013001 (periodic reevaluation and management of healthy individual) for the preventive visit, and 185345009 (encounter for symptom) for the sick visit. The services are named in plain text as CPT 99395 and 99497; CPT is not used as a coded value.
- Immunizations: CVX 140 (influenza, trivalent, preservative-free), 216 (PCV20), 189 (HepB-CpG, two doses) and 52 (hepatitis A, adult, first dose).
- No known allergy: SNOMED CT 716186003.

## Vital signs

The seven visits use LOINC 8302-2, 29463-7, 39156-5, 8480-6, 8462-4, 8867-4, 9279-1, 8310-5, and 59408-5 with UCUM units.

## Review note

Codes were checked against the public terminology server and NLM RxNav on November 5, 2026. They do not imply that London received these diagnoses, tests, or medications during his lifetime.
