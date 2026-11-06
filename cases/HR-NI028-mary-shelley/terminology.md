# Terminology — Mary Shelley

> **SYNTHETIC RECORD, NOT A REAL MEDICAL RECORD**

## Diagnoses

| Use | System | Code | Display | Evidence |
|---|---|---|---|---|
| Active problem | ICD-10-CM FY2026 | D32.0 | Benign neoplasm of cerebral meninges | S; left convexity meningioma, CNS WHO grade 1 after resection; linked to her documented symptoms and death certificate (D) and to the tumour and migraine interpretations (R); recorded at the diagnosis visit on March 17 |
| Active problem | ICD-10-CM FY2026 | G40.109 | Localization-related (focal) (partial) symptomatic epilepsy and epileptic syndromes with simple partial seizures, not intractable, without status epilepticus | S; focal aware seizures due to the meningioma; recorded March 17 |
| Resolved problem (presenting concern) | ICD-10-CM FY2026 | R29.818 | Other symptoms and signs involving the nervous system | S; headaches with transient right-sided numbness and weakness, active at the index visit and resolved into D32.0 and G40.109 on March 17 |
| Resolved problem | ICD-10-CM FY2026 | A08.4 | Viral intestinal infection, unspecified | S; August sick visit, resolved by September 29 |

## Medications (RxNorm)

| Code | Display |
|---|---|
| 311289 | levetiracetam 500 MG Oral Tablet |
| 197582 | dexamethasone 4 MG Oral Tablet |
| 198440 | acetaminophen 500 MG Oral Tablet |
| 104894 | ondansetron 4 MG Disintegrating Oral Tablet |

## Results (LOINC 2.81)

| Code | Measure | Unit | Category |
|---|---|---|---|
| 44261-6 | PHQ-9 total score | {score} | survey |
| 55758-7 | PHQ-2 total score (preventive visit) | {score} | survey |
| 70274-6 | GAD-7 total score | {score} | survey |
| 72172-0 | MoCA total score | {score} | survey |
| 75626-2 | AUDIT-C total score (preventive visit) | {score} | survey |
| 2951-2, 2823-3, 2028-9, 3094-0, 2160-0, 98979-8, 2345-7, 17861-6 | Basic metabolic panel, eGFR (CKD-EPI 2021), and calcium | mmol/L, mg/dL, mL/min/{1.73_m2} | laboratory |
| 718-7, 6690-2, 777-3 | Hemoglobin, white cell count, platelets | g/dL, 10*3/uL | laboratory |
| 3016-3 | TSH | m[IU]/L | laboratory |
| 6301-6 | INR | {INR} | laboratory |

Reference ranges are typical adult female ranges chosen for the teaching record; interpretation flags follow them, and validation checks that every flag agrees with its range. Tumor size, edema, and the EEG are described in the procedure records rather than as coded results.

## Procedures, immunizations, and encounters

- Electrocardiographic procedure: SNOMED CT 29303009. MRI of brain with contrast: 16327691000119101 (diagnostic, postoperative, and three-month scans). Electroencephalogram: 54550000. Total excision of meningioma by supratentorial approach: 447594008.
- Immunizations: CVX 115 (Tdap), 140 (influenza, trivalent, preservative free), 187 (recombinant zoster), and 216 (PCV20).
- No known allergy: SNOMED CT 716186003.
- Encounter types: SNOMED CT 390906007 (follow-up encounter) for the four focused chronic-care visits, 185345009 (encounter for symptom) for the August sick visit, and 86013001 (periodic reevaluation and management of healthy individual) for the adult preventive visit. The services are named in plain text as CPT 99396 and CPT 99497; CPT is not used as a coded value.

## Vital signs

The seven visits use LOINC 8302-2, 29463-7, 39156-5, 8480-6, 8462-4, 8867-4, 9279-1, 8310-5, and 59408-5 with UCUM units.

## Review note

Codes were checked against the public terminology server and NLM RxNav on November 5, 2026. They do not imply that Mary Shelley received these diagnoses, tests, or medications during her lifetime.
