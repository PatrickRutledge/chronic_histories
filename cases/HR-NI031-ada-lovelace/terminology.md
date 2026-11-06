# Terminology — Ada Lovelace

> **SYNTHETIC RECORD, NOT A REAL MEDICAL RECORD**

## Diagnoses

| Use | System | Code | Display | Evidence |
|---|---|---|---|---|
| Presenting problem, resolved at the second visit | ICD-10-CM FY2026 | N93.8 | Other specified abnormal uterine and vaginal bleeding | S; linked to her documented uterine cancer |
| Active problem | ICD-10-CM FY2026 | D50.0 | Iron deficiency anemia secondary to blood loss (chronic) | S |
| Active problem, from the second visit | ICD-10-CM FY2026 | C53.0 | Malignant neoplasm of endocervix | S; linked to her documented uterine cancer |
| Additional codes on the same problem | ICD-10-CM FY2026 | C78.01, C78.02, C77.2, C77.5 | Secondary malignant neoplasm of right lung; of left lung; secondary and unspecified malignant neoplasm of intra-abdominal lymph nodes; of intrapelvic lymph nodes | S |
| Active problem, from the second visit | ICD-10-CM FY2026 | G89.3 | Neoplasm related pain (acute) (chronic) | S |
| Active problem | ICD-10-CM FY2026 | Z79.891 | Long term (current) use of opiate analgesic | S; linked to her documented laudanum and opium |
| Resolved problem, from the July sick visit | ICD-10-CM FY2026 | K59.03, T40.2X5A | Drug induced constipation; Adverse effect of other opioids, initial encounter | S |

## Medications (RxNorm)

| RxCUI | Name | Use |
|---|---|---|
| 830196 | opium tincture 100 MG/ML Oral Solution | Long-term prescription before intake; stopped at intake |
| 892589 | morphine sulfate 2 MG/ML Oral Solution | As-needed and breakthrough pain, from intake |
| 891881 | morphine sulfate 15 MG Extended Release Oral Tablet | Constant cancer pain, twice daily from the second visit; nightly taper from the last visit |
| 1725059 | naloxone hydrochloride 40 MG/ML Nasal Spray | Overdose rescue, from intake |
| 312935 | sennosides, USP 8.6 MG Oral Tablet | Bowel regimen |
| 876193 | polyethylene glycol 3350 17000 MG Powder for Oral Solution | Bowel regimen |
| 198440 | acetaminophen 500 MG Oral Tablet | Non-opioid analgesic |
| 1435169 | 15 ML ferric carboxymaltose 50 MG/ML Injection | Iron deficiency anemia, two doses |
| 1657750 | 4 ML pembrolizumab 25 MG/ML Injection | Metastatic cervical cancer, every 3 weeks |
| 597195 | carboplatin 10 MG/ML Injectable Solution | Six cycles |
| 312199 | paclitaxel 6 MG/ML Injectable Solution | Six cycles |
| 312086 | ondansetron 8 MG Oral Tablet | Chemotherapy nausea |

## Results (LOINC 2.81)

| Code | Measure | Unit | Category |
|---|---|---|---|
| 718-7, 787-2, 6690-2, 751-8, 777-3 | Hemoglobin, mean cell volume, white cells, neutrophils, platelets | g/dL, fL, 10*3/uL | laboratory |
| 2276-4 | Ferritin | ng/mL | laboratory |
| 51990-0 | Basic metabolic panel (organizer) | — | panel |
| 2160-0, 98979-8, 2823-3, 17861-6 | Creatinine, eGFR (CKD-EPI 2021), potassium, calcium | mg/dL, mL/min/{1.73_m2}, mmol/L | laboratory |
| 1742-6 | ALT | U/L | laboratory |
| 1751-7 | Albumin | g/dL | laboratory |
| 21198-7 | Serum hCG (beta subunit) | m[IU]/mL | laboratory |
| 3016-3, 3024-7 | TSH, free T4 | m[IU]/L, ng/dL | laboratory |
| 72514-3 | Pain severity, 0 to 10 numeric rating | {score} | survey |
| 44261-6 | PHQ-9 total score | {score} | survey |
| 55758-7 | PHQ-2 total score | {score} | survey |

Pathology, HPV typing, PD-L1, mismatch repair and HER2 results, the HIV and hepatitis panels, the imaging findings, the AUDIT-C and the gambling screen are recorded in the notes only; no code was invented for them. Reference ranges are typical adult female ranges chosen for the teaching record; interpretation flags follow them, and validation checks that every flag agrees with its range.

## Procedures and immunizations

- Punch biopsy of cervix: SNOMED CT 51675008 (intake). MRI of pelvis: 2690005. PET CT FDG imaging of base of brain to mid-thigh: 725928006. CT guided percutaneous biopsy of right lung: 16549591000119109. External beam radiation therapy procedure: 33195004. CT of chest, abdomen and pelvis: 418023006. Advance care planning: 713603004 (preventive visit).
- Immunizations: CVX 216 (PCV20), 187 (recombinant zoster, two doses), 115 (Tdap), 189 (HepB-CpG, two doses), 140 (inactivated influenza, trivalent), and 312 (COVID-19 mRNA).
- No known allergy: SNOMED CT 716186003.
- Encounter types: SNOMED CT 390906007 (follow-up encounter) for the four focused chronic-care visits, 86013001 (periodic reevaluation and management of healthy individual) for the preventive visit, and 185345009 (encounter for symptom) for the sick visit. The services are named in plain text as CPT 99395 and 99497; CPT is not used as a coded value.

## Vital signs

The seven visits use LOINC 8302-2, 29463-7, 39156-5, 8480-6, 8462-4, 8867-4, 9279-1, 8310-5, and 59408-5 with UCUM units.

## Review note

Codes were checked against the public terminology server and NLM RxNav on November 6, 2026. They do not imply that Lovelace received these diagnoses, tests, or treatments during her lifetime.
