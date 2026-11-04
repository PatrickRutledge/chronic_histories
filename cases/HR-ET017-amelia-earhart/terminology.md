# Terminology — Amelia Earhart

> **SYNTHETIC RECORD, NOT A REAL MEDICAL RECORD**

## Diagnoses

| Use | System | Code | Display | Evidence |
|---|---|---|---|---|
| Presenting problem; resolved (superseded) at the consultation | ICD-10-CM FY2026 | R09.81 | Nasal congestion | S; linked to the documented chronic sinus trouble |
| Problem recorded at the consultation | ICD-10-CM FY2026 | J32.9 | Chronic sinusitis, unspecified (chronic rhinosinusitis without nasal polyps) | S; linked to the documented chronic sinus trouble |
| Problem added at the sick visit, resolved | ICD-10-CM FY2026 | T70.0XXA | Otitic barotrauma, initial encounter | S |

The historical sinus illness and operations are recorded as claims and past medical history, not as coded problems (see sources.md).

## Medications (RxNorm)

| Code | Display |
|---|---|
| 1542919 | sodium bicarbonate 700 MG / sodium chloride 2300 MG Powder for Nasal Solution (high-volume irrigation) |
| 1797907 | fluticasone propionate 0.05 MG/ACTUAT Metered Dose Nasal Spray (stopped at surgery) |
| 562508 | amoxicillin 875 MG / clavulanate 125 MG Oral Tablet (10 days, acute exacerbation) |
| 198440 | acetaminophen 500 MG Oral Tablet (sick visit; after surgery) |
| 351109 | budesonide 0.25 MG/ML Inhalation Suspension (0.5 mg in 2 mL, added to the saline rinse after surgery) |

## Results (LOINC 2.81)

| Code | Measure | Unit | Category |
|---|---|---|---|
| 711-2 | Eosinophils, blood, automated count | 10*3/uL | laboratory |
| 19113-0 | IgE, serum or plasma | [IU]/mL | laboratory |
| 72514-3 | Pain severity, 0 to 10 verbal numeric rating (facial pain or pressure) | {score} | survey |
| 55758-7 | PHQ-2 total score | {score} | survey |
| 75626-2 | AUDIT-C total score | {score} | survey |

Reference ranges are typical adult ranges chosen for the teaching record. The SNOT-22 total score, the CT findings and Lund-Mackay score, the endoscopy findings, the culture, the pathology, tuning-fork tests, and the HIV and hepatitis C results are recorded in the note text because no verified LOINC code for the SNOT-22 total or the Lund-Mackay score was found.

## Procedures, immunizations, and encounter types

- Nasal endoscopy with culture: SNOMED CT 1209099008 (endoscopy of nose and nasal sinuses).
- Sinus CT: SNOMED CT 241526005 (CT of paranasal sinuses).
- Endoscopic sinus surgery: SNOMED CT 261534008 (functional endoscopic sinus surgery).
- Advance care planning: SNOMED CT 713603004.
- Encounter types: SNOMED CT 390906007 (follow-up encounter) for the three focused chronic-care visits, 86013001 (periodic reevaluation and management of healthy individual) for the preventive visit, and 185345009 (encounter for symptom) for the sick visit. The services are named in plain text as CPT 99395 and 99497; CPT is not used as a coded value.
- Immunizations: CVX 140 (inactivated influenza), at the last visit.
- No known allergy: SNOMED CT 716186003.

## Vital signs

The six visits use LOINC 8302-2, 29463-7, 39156-5, 8480-6, 8462-4, 8867-4, 9279-1, 8310-5, and 59408-5 with UCUM units.

## Review note

Codes were checked against the public terminology server and NLM RxNav on November 4, 2026. They do not imply that Amelia Earhart received these diagnoses, tests, or medications during her lifetime.
