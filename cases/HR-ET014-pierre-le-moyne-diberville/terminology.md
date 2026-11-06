# Terminology — Pierre Le Moyne d'Iberville

> **SYNTHETIC RECORD, NOT A REAL MEDICAL RECORD**

## Diagnoses

| Use | System | Code | Display | Evidence |
|---|---|---|---|---|
| Presenting problem, resolved at the consultation | ICD-10-CM FY2026 | R50.9 | Fever, unspecified | S; linked to his documented recurrent attacks of illness |
| Problem from the second visit, resolved after radical cure | ICD-10-CM FY2026 | B51.9 | Plasmodium vivax malaria without complication | S; linked to his documented recurrent attacks of illness |
| Active problem | ICD-10-CM FY2026 | Z71.84 | Encounter for health counseling related to travel | S; linked to his documented preparation of a tropical campaign |
| Resolved problem | ICD-10-CM FY2026 | L02.413 | Cutaneous abscess of right upper limb | S; recorded at the June sick visit |

## Medications (RxNorm)

| RxCUI | Name | Use |
|---|---|---|
| 1116758 | chloroquine phosphate 500 MG Oral Tablet | Blood-stage treatment, from the consultation |
| 904170 | primaquine phosphate 26.3 MG Oral Tablet | Radical cure for 14 days from the consultation; terminal prophylaxis after the deployment |
| 864675 | atovaquone 250 MG / proguanil hydrochloride 100 MG Oral Tablet | Malaria chemoprophylaxis, prescribed before departure |
| 248656 | azithromycin 500 MG Oral Tablet | Standby treatment of severe travelers' diarrhea |

## Results (LOINC 2.81)

| Code | Measure | Unit | Category |
|---|---|---|---|
| 718-7, 6690-2, 777-3 | Hemoglobin, white cell count, platelets | g/dL, 10*3/uL | laboratory |
| 51990-0 | Basic metabolic panel (organizer) | — | panel |
| 2951-2, 2823-3, 2160-0, 98979-8, 2345-7 | Sodium, potassium, creatinine, eGFR (CKD-EPI 2021), glucose | mmol/L, mg/dL, mL/min/{1.73_m2} | laboratory |
| 1742-6, 1920-8, 1975-2 | ALT, AST, total bilirubin | U/L, mg/dL | laboratory |
| 32546-4 | G6PD activity in red blood cells | U/g{Hb} | laboratory |
| 24331-1 | Lipid 1996 panel (organizer) | — | panel |
| 2093-3, 2085-9, 13457-7, 2571-8 | Total cholesterol, HDL, calculated LDL, triglycerides | mg/dL | laboratory |
| 55758-7 | PHQ-2 total score | {score} | survey |
| 75626-2 | AUDIT-C total score | {score} | survey |

Blood smears, the rapid antigen test, the Plasmodium PCR, the wound culture, and the HIV, hepatitis C and hepatitis B screening results are recorded in the notes only; no code was invented for them. Reference ranges are typical adult ranges chosen for the teaching record; interpretation flags follow them, and validation checks that every flag agrees with its range.

## Procedures and immunizations

- Incision and drainage of abscess of skin: SNOMED CT 446403000 (sick visit). Advance care planning: 713603004 (preventive visit).
- Immunizations: CVX 115 (Tdap), 37 (yellow fever, live), 52 (hepatitis A, adult, dose 1), 101 (typhoid Vi polysaccharide), 189 (HepB-CpG, two doses), and 140 (influenza, trivalent, preservative-free).
- No known allergy: SNOMED CT 716186003.
- Encounter types: SNOMED CT 390906007 (follow-up encounter) for the four focused chronic-care visits, 86013001 (periodic reevaluation and management of healthy individual) for the preventive visit, and 185345009 (encounter for symptom) for the sick visit. The services are named in plain text as CPT 99396, 99497 and 10060; CPT is not used as a coded value.

## Vital signs

The seven visits use LOINC 8302-2, 29463-7, 39156-5, 8480-6, 8462-4, 8867-4, 9279-1, 8310-5, and 59408-5 with UCUM units.

## Review note

Codes were checked against the public terminology server and NLM RxNav on November 6, 2026. They do not imply that Iberville received these diagnoses, tests, or treatments during his lifetime.
