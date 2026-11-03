# Terminology — Georgia O'Keeffe

> **SYNTHETIC RECORD, NOT A REAL MEDICAL RECORD**

## Diagnoses

| Use | System | Code | Display | Evidence |
|---|---|---|---|---|
| Active problem | ICD-10-CM FY2026 | H35.3221 | Exudative age-related macular degeneration, left eye, with active choroidal neovascularization | S; linked to documented failing eyesight and the 1972 letter |
| Active problem | ICD-10-CM FY2026 | H35.3112 | Nonexudative age-related macular degeneration, right eye, intermediate dry stage | S |
| Resolved problem | ICD-10-CM FY2026 | S93.492A | Sprain of other ligament of left ankle, initial encounter | S (anterior talofibular ligament sprain at the sick visit) |

## Medications

None coded. Aflibercept is given as an in-office intravitreal injection and is recorded as a procedure; the schema has no intravitreal route. The AREDS2 supplement is recorded as a care-plan intervention because RxNorm has no single clinical drug (SCD) for the full formula.

## Results (LOINC 2.81)

| Code | Measure | Unit | Category |
|---|---|---|---|
| 79876-9, 79877-7 | Best-corrected visual acuity by ETDRS chart, right and left | {letters} | imaging |
| 57109-1 | Macular grid center subfield thickness by OCT (left eye) | um | imaging |
| 79892-6, 79893-4 | Intraocular pressure, right and left eye | mm[Hg] | imaging |
| 55758-7 | PHQ-2 total score | {score} | survey |
| 72233-0 | Mini-Cog total score | {score} | survey |
| 75626-2 | AUDIT-C total score (annual wellness visit) | {score} | survey |

LOINC 57109-1 has no laterality; the label states that it is the left eye. Reference ranges are typical adult ranges chosen for the teaching record; interpretation flags follow them, and validation checks that every flag agrees with its range.

## Procedures, immunizations, and family history

- Amsler chart assessment: SNOMED CT 252885006.
- Optical coherence tomography of retina: SNOMED CT 700070005, at each retina visit.
- Intravitreal injection of anti-vascular endothelial growth factor: SNOMED CT 1004045004, four injections.
- Immunizations: CVX 135 (high-dose influenza, two seasons) and 187 (recombinant zoster, two doses).
- Encounter types: SNOMED CT 390906007 (follow-up encounter) for the four focused chronic-care visits, 185345009 (encounter for symptom) for the August sick visit and 281038008 (geriatric annual health check) for the annual wellness visit. The services are named in plain text as HCPCS G0439 and CPT 99497; HCPCS and CPT are not used as coded values.
- No known allergy: SNOMED CT 716186003.
- Family relationships: HL7 RoleCode MTH (mother) and FTH (father). Causes of death are not recorded.

## Vital signs

The seven visits use LOINC 8302-2, 29463-7, 39156-5, 8480-6, 8462-4, 8867-4, 9279-1, 8310-5, and 59408-5 with UCUM units.

## Review note

Codes were checked against the public terminology server and NLM RxNav on November 2, 2026; the codes for the sick and annual wellness visits were checked on November 3, 2026. They do not imply that O'Keeffe received these diagnoses, tests, or treatments during her lifetime.
