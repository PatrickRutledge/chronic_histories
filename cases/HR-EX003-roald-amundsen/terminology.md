# Terminology — Roald Amundsen

> **SYNTHETIC RECORD, NOT A REAL MEDICAL RECORD**

## Diagnoses

| Use | System | Code | Display | Evidence |
|---|---|---|---|---|
| Presenting problem, resolved at the consultation | ICD-10-CM FY2026 | R20.2 | Paresthesia of skin | S; linked to his documented frostbite |
| Active problem, from the second visit | ICD-10-CM FY2026 | M79.2 | Neuralgia and neuritis, unspecified | S; linked to his documented frostbite |
| Additional codes on the same problem | ICD-10-CM FY2026 | T33.531S, T33.532S | Superficial frostbite of right finger(s), sequela; Superficial frostbite of left finger(s), sequela | S |
| Active problem | ICD-10-CM FY2026 | S42.201S | Unspecified fracture of upper end of right humerus, sequela | S; linked to his documented fracture |
| Resolved problem | ICD-10-CM FY2026 | S93.401A | Sprain of unspecified ligament of right ankle, initial encounter | S; recorded at the May sick visit |

## Medications (RxNorm)

| RxCUI | Name | Use |
|---|---|---|
| 141868 | capsaicin 0.75 MG/ML Topical Cream | Localized neuropathic pain, from the consultation |
| 596930 | duloxetine 30 MG Delayed Release Oral Capsule | Starting dose for one week, from the six-week visit |
| 596934 | duloxetine 60 MG Delayed Release Oral Capsule | Neuropathic pain |
| 855633 | diclofenac sodium 0.01 MG/MG Topical Gel | Ankle sprain, two weeks |

## Results (LOINC 2.81)

| Code | Measure | Unit | Category |
|---|---|---|---|
| 51990-0 | Basic metabolic panel (organizer) | — | panel |
| 2951-2, 2823-3, 2160-0, 98979-8, 2345-7 | Sodium, potassium, creatinine, eGFR (CKD-EPI 2021), fasting glucose | mmol/L, mg/dL, mL/min/{1.73_m2} | laboratory |
| 4548-4 | HbA1c | % | laboratory |
| 2132-9 | Vitamin B12 | pg/mL | laboratory |
| 3016-3 | TSH | m[IU]/L | laboratory |
| 718-7 | Hemoglobin | g/dL | laboratory |
| 1742-6 | ALT | U/L | laboratory |
| 24331-1 | Lipid 1996 panel (organizer) | — | panel |
| 2093-3, 2085-9, 13457-7, 2571-8 | Total cholesterol, HDL, calculated LDL, triglycerides | mg/dL | laboratory |
| 72514-3 | Pain severity, 0 to 10 numeric rating | {score} | survey |
| 44261-6 | PHQ-9 total score | {score} | survey |
| 55758-7 | PHQ-2 total score | {score} | survey |

Nerve conduction values, the sensory examination, the cardiovascular risk estimate, and ECG findings are recorded in the notes only; no code was invented for them. Reference ranges are typical adult ranges chosen for the teaching record; interpretation flags follow them, and validation checks that every flag agrees with its range.

## Procedures and immunizations

- Nerve conduction study: SNOMED CT 51110005 (consultation). Electrocardiographic procedure: 29303009 (seventeen-week visit). Advance care planning: 713603004 (preventive visit).
- Immunizations: CVX 187 (recombinant zoster, two doses), 216 (PCV20), and 115 (Tdap).
- No known allergy: SNOMED CT 716186003.
- Encounter types: SNOMED CT 390906007 (follow-up encounter) for the four focused chronic-care visits, 86013001 (periodic reevaluation and management of healthy individual) for the preventive visit, and 185345009 (encounter for symptom) for the sick visit. The services are named in plain text as CPT 99396 and 99497; CPT is not used as a coded value.

## Vital signs

The seven visits use LOINC 8302-2, 29463-7, 39156-5, 8480-6, 8462-4, 8867-4, 9279-1, 8310-5, and 59408-5 with UCUM units.

## Review note

Codes were checked against the public terminology server and NLM RxNav on November 5, 2026. They do not imply that Amundsen received these diagnoses, tests, or treatments during his lifetime.
