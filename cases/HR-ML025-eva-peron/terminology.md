# Terminology — Eva Perón

> **SYNTHETIC RECORD, NOT A REAL MEDICAL RECORD**

## Diagnoses

| Use | System | Code | Display | Evidence |
|---|---|---|---|---|
| Presenting problem; resolved (superseded) at the consultation | ICD-10-CM FY2026 | N93.8 | Other specified abnormal uterine and vaginal bleeding | S; linked to the documented bleeding with anemia |
| Problem from intake; resolved at the last chronic-care visit | ICD-10-CM FY2026 | D50.0 | Iron deficiency anemia secondary to blood loss (chronic) | S; linked to the documented anemia |
| Problem recorded at the consultation | ICD-10-CM FY2026 | C53.9 | Malignant neoplasm of cervix uteri, unspecified (squamous cell carcinoma, FIGO 2018 stage IIB) | S; linked to the documented cervical cancer |
| Problem added at the sick visit, resolved | ICD-10-CM FY2026 | N30.00 | Acute cystitis without hematuria | S |
| Problem recorded after treatment | ICD-10-CM FY2026 | E89.41 | Symptomatic postprocedural ovarian failure (after pelvic radiation) | S |

The reported lobotomy is recorded only as a claim and is not coded (see sources.md).

## Medications (RxNorm)

| Code | Display |
|---|---|
| 310325 | ferrous sulfate 325 MG Oral Tablet |
| 198440 | acetaminophen 500 MG Oral Tablet |
| 309311 | cisplatin 1 MG/ML Injectable Solution (40 mg/m2 weekly, five doses) |
| 312086 | ondansetron 8 MG Oral Tablet |
| 978006 | loperamide hydrochloride 2 MG Oral Capsule |
| 1648755 | nitrofurantoin, macrocrystals 25 MG / nitrofurantoin, monohydrate 75 MG Oral Capsule (sick visit, five days) |
| 242892 | 84 HR estradiol 0.00417 MG/HR Transdermal System (0.1 mg per day, twice weekly) |
| 260243 | progesterone 100 MG Oral Capsule |

## Results (LOINC 2.81)

| Code | Measure | Unit | Category |
|---|---|---|---|
| 718-7, 6690-2, 777-3, 787-2, 751-8 | Hemoglobin, white cells, platelets, mean cell volume, neutrophils | g/dL, 10*3/uL, fL | laboratory |
| 2276-4 | Ferritin | ng/mL | laboratory |
| 2160-0, 98979-8 | Creatinine; eGFR (CKD-EPI 2021) | mg/dL, mL/min/{1.73_m2} | laboratory |
| 19123-9 | Magnesium | mg/dL | laboratory |
| 15067-2, 2243-4 | FSH; estradiol | m[IU]/mL, pg/mL | laboratory |
| 72514-3 | Pain severity, 0 to 10 verbal numeric rating (pelvic pain) | {score} | survey |
| 55758-7, 44261-6, 70274-6, 75626-2 | PHQ-2, PHQ-9, GAD-7, AUDIT-C | {score} | survey |

Reference ranges are typical adult female ranges chosen for the teaching record. The biopsy and HPV results, cytology, pregnancy test, HIV and hepatitis C tests, urine culture, and the MRI and PET-CT reports are recorded in the note text.

## Procedures, immunizations, and encounter types

- Punch biopsy of the cervix: SNOMED CT 51675008. Colposcopy: 176786003. Pelvic MRI: 2690005. FDG PET-CT: 725928006 (staging and response). Chemoradiation: 169336005 (external beam radiation therapy with chemotherapy). Brachytherapy: 152198000. Advance care planning: 713603004.
- Encounter types: SNOMED CT 390906007 (follow-up encounter) for the four focused chronic-care visits, 86013001 (periodic reevaluation and management of healthy individual) for the preventive visit, and 185345009 (encounter for symptom) for the sick visit. The services are named in plain text as CPT 99395 and 99497; CPT is not used as a coded value.
- Immunizations: CVX 140 (inactivated influenza), at the preventive visit.
- No known allergy: SNOMED CT 716186003.

## Vital signs

The seven visits use LOINC 8302-2, 29463-7, 39156-5, 8480-6, 8462-4, 8867-4, 9279-1, 8310-5, and 59408-5 with UCUM units.

## Review note

Codes were checked against the public terminology server and NLM RxNav on November 4, 2026. They do not imply that Eva Perón received these diagnoses, tests, or medications during her lifetime.
