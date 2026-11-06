# Terminology — Emile Griffith

> **SYNTHETIC RECORD, NOT A REAL MEDICAL RECORD**

## Diagnoses

| Use | System | Code | Display | Evidence |
|---|---|---|---|---|
| Presenting problem, resolved at the diagnosis visit | ICD-10-CM FY2026 | R41.3 | Other amnesia | S; linked to the documented short-term memory problems |
| Active problem, from intake | ICD-10-CM FY2026 | F43.12 | Post-traumatic stress disorder, chronic | S; linked to his public words about nightmares and to the assault |
| Active problem, from the diagnosis visit | ICD-10-CM FY2026 | G31.84 | Mild cognitive impairment of uncertain or unknown etiology | S; linked to the documented memory problems, career and assault |
| Active problem | ICD-10-CM FY2026 | Z87.820 | Personal history of traumatic brain injury | S; linked to the documented career and assault |

The roster's dementia pugilistica code (G31.09) is not used; traumatic encephalopathy syndrome is a research diagnosis without a code here. See the editorial resolutions in sources.md.

## Medications (RxNorm)

| Code | Display |
|---|---|
| 312940 | sertraline 25 MG Oral Tablet (intake to the diagnosis visit) |
| 312941 | sertraline 50 MG Oral Tablet (from the diagnosis visit) |

No cholinesterase inhibitor, memantine, prazosin or benzodiazepine is prescribed.

## Results (LOINC 2.81)

| Code | Measure | Unit | Category |
|---|---|---|---|
| 6690-2, 718-7, 777-3 | White cells, hemoglobin, platelets | 10*3/uL, g/dL | laboratory |
| 51990-0 | Basic metabolic panel (organizer) | — | panel |
| 2951-2, 2823-3, 2160-0, 98979-8, 2345-7, 17861-6 | Sodium, potassium, creatinine, eGFR (CKD-EPI 2021), glucose, calcium | mmol/L, mg/dL, mL/min/{1.73_m2} | laboratory |
| 2132-9, 3016-3 | Vitamin B12, TSH | pg/mL, m[IU]/L | laboratory |
| 2093-3, 2085-9, 13457-7, 2571-8 | Total cholesterol, HDL, LDL (calculated), triglycerides | mg/dL | laboratory |
| 4548-4 | Hemoglobin A1c | % | laboratory |
| 72172-0 | MoCA total score | {score} | survey |
| 72088-8 | Clinical Dementia Rating (global) | {score} | survey |
| 44261-6 | PHQ-9 total score | {score} | survey |
| 102017-1 | PC-PTSD-5 score | {score} | survey |
| 101698-9 | PCL-5 score | {score} | survey |
| 75626-2 | AUDIT-C total score | {score} | survey |

Reference ranges are typical adult male ranges chosen for the teaching record; the glucose range is a non-fasting range (70 to 140 mg/dL). The CDR sum of boxes, Functional Activities Questionnaire, Zarit Burden Interview, STOP-Bang, Timed Up and Go, neuropsychiatric review, hepatitis results and the neuropsychological test findings are narrative.

## Procedures, immunizations, and encounter types

- Procedures: SNOMED CT 816077007 (MRI of brain), 307808008 (neuropsychological testing), 228557008 (cognitive and behavioral therapy; the cognitive processing therapy course), 91251008 (physical therapy procedure) and 713603004 (advance care planning).
- Encounter types: SNOMED CT 390906007 (follow-up encounter) for the four focused chronic-care visits and 281038008 (geriatric annual health check) for the subsequent annual wellness visit. The services are named in plain text as HCPCS G0439 and CPT 99497; neither is used as a coded value. No sick visit (recent-death rule).
- Immunizations: CVX 135 (influenza, high-dose, twice), 216 (PCV20) and 187 (zoster recombinant, twice).
- No known allergy: SNOMED CT 716186003.

## Vital signs

The six visits use LOINC 8302-2, 29463-7, 39156-5, 8480-6, 8462-4, 8867-4, 9279-1, 8310-5, and 59408-5 with UCUM units.

## Review note

Codes were checked against the public terminology server and NLM RxNav on November 5, 2026. They do not imply that Emile Griffith received these diagnoses, tests, or medications during his lifetime.
