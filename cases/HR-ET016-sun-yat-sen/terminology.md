# Terminology — Sun Yat-sen

> **SYNTHETIC RECORD, NOT A REAL MEDICAL RECORD**

## Diagnoses

| Use | System | Code | Display | Evidence |
|---|---|---|---|---|
| Presenting problem; resolved (superseded) at the consultation | ICD-10-CM FY2026 | R19.01 | Right upper quadrant abdominal swelling, mass and lump | S; linked to the documented abdominal mass |
| Problem recorded at the consultation | ICD-10-CM FY2026 | C23 | Malignant neoplasm of gallbladder | S; linked to the documented operative and autopsy findings |
| Problem recorded at the consultation | ICD-10-CM FY2026 | Z86.19 | Personal history of other infectious and parasitic diseases | S (resolved hepatitis B; no historical claim) |
| Problem recorded after the staging laparoscopy | ICD-10-CM FY2026 | C78.6 | Secondary malignant neoplasm of retroperitoneum and peritoneum | S; linked to the autopsy findings |
| Problem added at the sick visit, resolved | ICD-10-CM FY2026 | J06.9 | Acute upper respiratory infection, unspecified | S |

## Medications (RxNorm)

| Code | Display |
|---|---|
| 198440 | acetaminophen 500 MG Oral Tablet |
| 1719003 | gemcitabine 1000 MG Injection |
| 309311 | cisplatin 1 MG/ML Injectable Solution |
| 1919515 | 10 ML durvalumab 50 MG/ML Injection |
| 312086 | ondansetron 8 MG Oral Tablet |
| 198741 | magnesium oxide 400 MG Oral Tablet (from the last visit) |

## Results (LOINC 2.81)

| Code | Measure | Unit | Category |
|---|---|---|---|
| 6690-2, 751-8, 718-7, 777-3 | White cells, neutrophils, hemoglobin, platelets | 10*3/uL, g/dL | laboratory |
| 51990-0 | Basic metabolic panel (organizer) | — | panel |
| 2951-2, 2823-3, 2160-0, 98979-8, 2345-7 | Sodium, potassium, creatinine, eGFR (CKD-EPI 2021), glucose | mmol/L, mg/dL, mL/min/{1.73_m2} | laboratory |
| 19123-9 | Magnesium | mg/dL | laboratory |
| 1751-7, 1975-2, 6768-6, 1920-8, 1742-6 | Albumin, total bilirubin, alkaline phosphatase, AST, ALT | g/dL, mg/dL, U/L | laboratory |
| 6301-6 | INR | {INR} | laboratory |
| 1834-1, 24108-3, 2039-6 | Alpha-fetoprotein, CA 19-9, CEA | ng/mL, U/mL | laboratory |
| 3016-3 | TSH | m[IU]/L | laboratory |
| 55758-7, 44261-6 | PHQ-2 and PHQ-9 total scores | {score} | survey |
| 89247-1 | ECOG performance status | {score} | survey |

Reference ranges are typical adult male ranges chosen for the teaching record. Child-Pugh class and ALBI grade, imaging, pathology, hepatitis B and C serology, HBV DNA, genomic profiling, and the SARS-CoV-2, influenza and HIV tests are recorded as narrative.

## Procedures, immunizations, and encounter types

- Ultrasonography of abdomen: SNOMED CT 45036003.
- CT of thorax and abdomen with contrast: SNOMED CT 429864007 (staging and the two restaging CTs).
- Magnetic resonance cholangiopancreatography: SNOMED CT 314635004.
- Biopsy of liver using ultrasound guidance: SNOMED CT 438300009.
- Multidisciplinary care conference (tumor board): SNOMED CT 384682003.
- Laparoscopy: SNOMED CT 73632009; Biopsy of lesion of peritoneal cavity: SNOMED CT 238305001; Implantation of venous access port: SNOMED CT 80402001.
- Advance care planning: SNOMED CT 713603004.
- Encounter types: SNOMED CT 390906007 (follow-up encounter) for the four focused chronic-care visits, 86013001 (periodic reevaluation and management of healthy individual) for the preventive visit, and 185345009 (encounter for symptom) for the sick visit. The services are named in plain text as CPT 99396 and 99497; CPT is not used as a coded value.
- Immunizations: CVX 140 (inactivated influenza), 309 (COVID-19 mRNA), 216 (PCV20), and 187 (recombinant zoster).
- No known allergy: SNOMED CT 716186003.

## Vital signs

The seven visits use LOINC 8302-2, 29463-7, 39156-5, 8480-6, 8462-4, 8867-4, 9279-1, 8310-5, and 59408-5 with UCUM units.

## Review note

Codes were checked against the public terminology server and NLM RxNav on November 4, 2026. They do not imply that Sun Yat-sen received these diagnoses, tests, or medications during his lifetime.
