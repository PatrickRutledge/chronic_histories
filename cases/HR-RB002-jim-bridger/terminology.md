# Terminology — Jim Bridger

> **SYNTHETIC RECORD, NOT A REAL MEDICAL RECORD**

## Diagnoses

| Use | System | Code | Display | Evidence |
|---|---|---|---|---|
| Presenting problem, resolved at the consultation | ICD-10-CM FY2026 | H54.3 | Unqualified visual loss, both eyes | S; linked to his documented failing eyesight |
| Problem from the consultation, resolved after the second operation | ICD-10-CM FY2026 | H25.13 | Age-related nuclear cataract, bilateral | S; a synthetic choice, not a retrospective diagnosis of his blindness |
| Active problem | ICD-10-CM FY2026 | M54.59 | Other low back pain | S; linked to his documented arrow wound |
| Active problem | ICD-10-CM FY2026 | E04.2 | Nontoxic multinodular goiter | S; linked to his documented goiter |
| Active problem | ICD-10-CM FY2026 | M17.0 | Bilateral primary osteoarthritis of knee | S; linked to his documented rheumatism |
| Active problem | ICD-10-CM FY2026 | Z91.81 | History of falling | S |
| Sick visit, resolved | ICD-10-CM FY2026 | S63.501A | Unspecified sprain of right wrist, initial encounter | S |
| Active problem, after the second operation | ICD-10-CM FY2026 | Z96.1 | Presence of intraocular lens | S |

No code is used for blindness of unknown cause, occupational polytrauma, the rupture or any stress-related disorder; see the editorial resolutions in sources.md.

## Medications (RxNorm)

| Code | Display |
|---|---|
| 855633 | diclofenac sodium 0.01 MG/MG Topical Gel (1% gel on the knees) |
| 403818 | moxifloxacin 5 MG/ML Ophthalmic Solution (one week after each operation) |
| 1376336 | prednisolone acetate 10 MG/ML Ophthalmic Suspension (four-week taper after each operation) |

## Results (LOINC 2.81)

| Code | Measure | Unit | Category |
|---|---|---|---|
| 2951-2, 2823-3, 2160-0, 98979-8, 2345-7 (panel 51990-0) | Sodium, potassium, creatinine, eGFR (CKD-EPI 2021), glucose | mmol/L, mg/dL, mL/min/{1.73_m2} | laboratory |
| 4548-4 | HbA1c | % | laboratory |
| 3016-3, 3024-7 | TSH, free T4 | m[IU]/L, ng/dL | laboratory |
| 2093-3, 2085-9, 13457-7, 2571-8 | Total cholesterol, HDL, LDL (calculated), triglycerides | mg/dL | laboratory |
| 79876-9, 79877-7 | Best-corrected visual acuity, right and left eye (ETDRS chart) | {letters} | imaging |
| 79892-6, 79893-4 | Intraocular pressure, right and left eye | mm[Hg] | imaging |
| 57109-1 | Macular central subfield thickness by OCT (one result per eye, labeled) | um | imaging |
| 64742-0, 66067-0 | Axial length, right and left eye | mm | imaging |
| 44261-6, 55758-7 | PHQ-9, PHQ-2 | {score} | survey |
| 72233-0 | Mini-Cog | {score} | survey |
| 75626-2 | AUDIT-C | {score} | survey |
| 72514-3 | Pain severity, 0 to 10 verbal numeric rating (average low back pain) | {score} | survey |

Reference ranges are typical adult ranges chosen for the teaching record; interpretation flags follow them. The VF-14 score, Snellen acuity at intake, the Timed Up and Go, the slit-lamp and fundus findings, the X-ray and ultrasound findings, and the hepatitis results are recorded as narrative.

## Procedures, immunizations, and encounter types

- Lumbar X-ray: SNOMED CT 1290938007. Indirect ophthalmoscopy: 410451008. Retinal OCT: 700070005. Optical biometry: 415038008. Thyroid ultrasound: 433175006. Phacoemulsification with lens implant: 1345052008 (right eye) and 1345051001 (left eye). Wrist X-ray: 713024005.
- Advance care planning: SNOMED CT 713603004.
- Encounter types: SNOMED CT 390906007 (follow-up encounter) for the four focused chronic-care visits, 281038008 (geriatric annual health check) for the subsequent annual wellness visit, and 185345009 (encounter for symptom) for the sick visit. The services are named in plain text as HCPCS G0439 and CPT 99497; HCPCS and CPT are not used as coded values.
- Immunizations: CVX 216 (PCV20) and 187 (zoster recombinant, first dose).
- Family history relationships: HL7 RoleCode MTH (mother), FTH (father) and BRO (brother).
- No known allergy: SNOMED CT 716186003.

## Vital signs

The seven visits use LOINC 8302-2, 29463-7, 39156-5, 8480-6, 8462-4, 8867-4, 9279-1, 8310-5, and 59408-5 with UCUM units.

## Review note

Codes were checked against the public terminology server and NLM RxNav on November 5, 2026. They do not imply that Bridger received these diagnoses, tests, or medications during his lifetime.
