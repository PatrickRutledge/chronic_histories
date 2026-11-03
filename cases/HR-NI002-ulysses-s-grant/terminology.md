# Terminology — Ulysses S. Grant

> **SYNTHETIC RECORD, NOT A REAL MEDICAL RECORD**

## Diagnoses

| Use | System | Code | Display | Evidence |
|---|---|---|---|---|
| Active problem | ICD-10-CM FY2026 | C09.1 | Malignant neoplasm of tonsillar pillar (anterior) (posterior) | S; linked to the documented 1885 diagnosis |
| Active problem | ICD-10-CM FY2026 | F17.290 | Nicotine dependence, other tobacco product, uncomplicated | S; linked to documented cigar smoking |
| Active problem | ICD-10-CM FY2026 | R13.12 | Dysphagia, oropharyngeal phase | S |
| Active problem | ICD-10-CM FY2026 | R63.4 | Abnormal weight loss | S |
| Resolved problem | ICD-10-CM FY2026 | J20.9 | Acute bronchitis, unspecified | S; intercurrent illness at the sick visit |

## Medications (RxNorm)

| Code | Display |
|---|---|
| 636671 | varenicline 0.5 MG Oral Tablet |
| 636676 | varenicline 1 MG Oral Tablet |
| 307675 | acetaminophen 32 MG/ML Oral Solution |
| 1010739 | lidocaine hydrochloride 20 MG/ML Mucous Membrane Topical Solution |

## Results (LOINC 2.81)

| Code | Measure | Unit | Category |
|---|---|---|---|
| 58410-2 | CBC panel (organizer) | — | panel |
| 718-7, 6690-2, 777-3 | Hemoglobin, white blood cell count, platelet count | g/dL, 10\*3/uL | laboratory |
| 51990-0 | Basic metabolic panel (organizer) | — | panel |
| 2951-2, 2823-3, 2160-0, 98979-8, 2345-7 | Sodium, potassium, creatinine, eGFR (CKD-EPI 2021), glucose | mmol/L, mg/dL, mL/min/{1.73_m2} | laboratory |
| 1751-7, 3016-3 | Albumin, TSH | g/dL, m[IU]/L | laboratory |
| 72514-3 | Pain severity, 0–10 numeric rating (also recorded at the sick visit) | {score} | survey |
| 55758-7 | PHQ-2 total score | {score} | survey |

Reference ranges are typical adult ranges chosen for the teaching record; interpretation flags follow them, and validation checks that every flag agrees with its range.

## Procedures, immunizations, and family history

- CT of neck with contrast: SNOMED CT 431326009.
- Flexible fiberoptic laryngoscopy: SNOMED CT 49077009.
- Biopsy of lesion of tonsil: SNOMED CT 173437008.
- Positron emission tomography with computed tomography: SNOMED CT 450436003.
- Immunizations: CVX 140 (influenza), 216 (PCV20), and 115 (Tdap).
- No known allergy: SNOMED CT 716186003.
- Family relationships: HL7 RoleCode FTH (father) and MTH (mother). Causes of death are not recorded.

## Encounter types

- Focused chronic-care visits (ENC-002, ENC-003, ENC-004): SNOMED CT 390906007 (Follow-up encounter), validated November 3, 2026.
- Sick visit (ENC-005): SNOMED CT 185345009 (Encounter for symptom), validated November 3, 2026. The index visit (ENC-001) carries no encounter type code.

## Vital signs

The five visits use LOINC 8302-2, 29463-7, 39156-5, 8480-6, 8462-4, 8867-4, 9279-1, 8310-5, and 59408-5 with UCUM units.

## Review note

Codes were checked against the public terminology server and NLM RxNav on November 2, 2026. They do not imply that Grant received these diagnoses, tests, or medications during his lifetime.
