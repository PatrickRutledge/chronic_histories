# Terminology — Friedrich Nietzsche

> **SYNTHETIC RECORD, NOT A REAL MEDICAL RECORD**

## Diagnoses

| Use | System | Code | Display | Evidence |
|---|---|---|---|---|
| Presenting problem, resolved at the consultation | ICD-10-CM FY2026 | R51.9 | Headache, unspecified | S; linked to the documented headaches |
| Active problem, from the consultation | ICD-10-CM FY2026 | G43.709 | Chronic migraine without aura, not intractable, without status migrainosus | S; the historical diagnosis is disputed (R) |
| From the consultation, resolved at eight weeks | ICD-10-CM FY2026 | G44.40 | Drug-induced headache, not elsewhere classified, not intractable | S; linked to his documented use of sedatives and many medicines |
| Active problem | ICD-10-CM FY2026 | H52.13 | Myopia, bilateral | S; linked to his documented severe myopia |
| Active problem, from the eye examination | ICD-10-CM FY2026 | H44.2E1 | Degenerative myopia with other maculopathy, right eye | S; linked to his documented poor right eye (R interpretation) |
| Active problem | ICD-10-CM FY2026 | G47.00 | Insomnia, unspecified | S; linked to his documented insomnia |
| Sick visit, resolved at eight weeks | ICD-10-CM FY2026 | H43.811 | Vitreous degeneration, right eye (posterior vitreous detachment) | S |

No code is used for neurosyphilis, general paresis, meningioma, frontotemporal dementia, CADASIL, dementia or any mood disorder; see the editorial resolutions in sources.md.

## Medications (RxNorm)

| Code | Display |
|---|---|
| 238154 | acetaminophen 325 MG / butalbital 50 MG / caffeine 40 MG Oral Tablet (as needed before the consultation; then a three-week taper) |
| 310965 | ibuprofen 200 MG Oral Tablet (stopped at the consultation) |
| 198014 | naproxen 500 MG Oral Tablet |
| 311666 | metoclopramide 10 MG Oral Tablet |
| 2058872 | 1 ML galcanezumab-gnlm 120 MG/ML Auto-Injector |
| 313160 | sumatriptan 100 MG Oral Tablet (from the four-week review) |

No opioid, benzodiazepine, sedative hypnotic or chloral hydrate is prescribed.

## Results (LOINC 2.81)

| Code | Measure | Unit | Category |
|---|---|---|---|
| 65381-6, 65382-4, 65383-2, 65384-0, 65385-7 | MIDAS items 1 to 5 (PhenX codes for the same questions: days in the last 3 months) | d | survey |
| 44261-6 | PHQ-9 total score | {score} | survey |
| 55758-7 | PHQ-2 total score | {score} | survey |
| 70274-6 | GAD-7 total score | {score} | survey |
| 75626-2 | AUDIT-C total score | {score} | survey |
| 108019-1 | Treponema pallidum Ab [Measurement] in Serum (immunoassay index) | {index_val} | laboratory |
| 79892-6, 79893-4 | Right and left eye intraocular pressure | mm[Hg] | imaging |

Reference ranges are typical ranges chosen for the teaching record; interpretation flags follow them. The MIDAS total, HIT-6, SNNOOP10 screen, headache diary, RPR, visual acuity, refraction, sleep hours, and the HIV, hepatitis C and hepatitis B results are recorded as narrative.

## Procedures, immunizations, and encounter types

- MRI of the brain and orbits without and with contrast: SNOMED CT 16327691000119101 (MRI of brain with contrast).
- Comprehensive eye examination: SNOMED CT 36228007 (ophthalmic examination and evaluation); dilated examinations for the posterior vitreous detachment: 410451008 (indirect ophthalmoscopy).
- Advance care planning: SNOMED CT 713603004.
- Encounter types: SNOMED CT 390906007 (follow-up encounter) for the three focused chronic-care visits, 86013001 (periodic reevaluation and management of healthy individual) for the preventive visit, and 185345009 (encounter for symptom) for the sick visit. The services are named in plain text as CPT 99395 and 99497; CPT is not used as a coded value.
- Immunizations: CVX 115 (Tdap), 189 (HepB-CpG, first dose) and 140 (influenza, trivalent, preservative free).
- Family history relationship: HL7 RoleCode FTH (father).
- No known allergy: SNOMED CT 716186003.

## Vital signs

The six visits use LOINC 8302-2, 29463-7, 39156-5, 8480-6, 8462-4, 8867-4, 9279-1, 8310-5, and 59408-5 with UCUM units.

## Review note

Codes were checked against the public terminology server and NLM RxNav on November 5, 2026. They do not imply that Nietzsche received these diagnoses, tests, or medications during his lifetime.
