# Terminology — Marcus Aurelius

> **SYNTHETIC RECORD, NOT A REAL MEDICAL RECORD**

## Diagnoses

| Use | System | Code | Display | Evidence |
|---|---|---|---|---|
| Presenting problem at intake, resolved at endoscopy | ICD-10-CM FY2026 | R10.13 | Epigastric pain | S; pattern linked to Dio's account of his stomach and chest (D) |
| Problem recorded at endoscopy | ICD-10-CM FY2026 | K21.00 | Gastro-esophageal reflux disease with esophagitis, without bleeding | S; no historical diagnosis is made |
| Finding at intake | ICD-10-CM FY2026 | F11.90 | Opioid use, unspecified, uncomplicated | S; linked to his documented theriac (D); no opioid use disorder |
| Finding at intake | ICD-10-CM FY2026 | G47.00 | Insomnia, unspecified | S |
| Finding at intake | ICD-10-CM FY2026 | Z56.6 | Other physical and mental strain related to work | S |
| Finding at intake | ICD-10-CM FY2026 | K59.03 | Drug induced constipation | S |
| Problem added at the sick visit, resolved | ICD-10-CM FY2026 | U07.1 | COVID-19 | S |

The Antonine Plague, the proposed opium dependence and his cause of death are retrospective (R) and are not coded (see sources.md).

## Medications (RxNorm)

| Code | Display |
|---|---|
| 7676 | opium (ingredient; an unregulated compounded herbal paste of unknown strength, recorded in three entries as he reduced it; historical_remedy: theriac) |
| 308907 | calcium carbonate 500 MG Chewable Tablet (as needed until the endoscopy) |
| 876193 | polyethylene glycol 3350 17000 MG Powder for Oral Solution (as needed) |
| 1725059 | naloxone hydrochloride 40 MG/ML Nasal Spray (4 mg per spray, as needed) |
| 198051 | omeprazole 20 MG Delayed Release Oral Capsule (daily for eight weeks, then on demand) |
| 198440 | acetaminophen 500 MG Oral Tablet (as needed at the sick visit) |

## Results (LOINC 2.81)

| Code | Measure | Unit | Category |
|---|---|---|---|
| 718-7, 787-2, 6690-2, 777-3 | Hemoglobin, MCV, white cells, platelets | g/dL, fL, 10*3/uL | laboratory |
| 51990-0 | Basic metabolic panel (organizer) | — | panel |
| 2951-2, 2823-3, 3094-0, 2160-0, 98979-8, 2345-7 | Sodium, potassium, urea nitrogen, creatinine, eGFR (CKD-EPI 2021), glucose | mmol/L, mg/dL, mL/min/{1.73_m2} | laboratory |
| 24325-3 | Hepatic function panel (organizer) | — | panel |
| 1742-6, 1920-8, 6768-6, 1975-2, 1751-7 | ALT, AST, alkaline phosphatase, total bilirubin, albumin | U/L, mg/dL, g/dL | laboratory |
| 3040-3 | Lipase | U/L | laboratory |
| 4548-4 | Hemoglobin A1c | % | laboratory |
| 24331-1 | Lipid panel (organizer) | — | panel |
| 2093-3, 2085-9, 2571-8, 13457-7 | Total cholesterol, HDL, triglycerides, LDL (calculated) | mg/dL | laboratory |
| 43583-4 | Lipoprotein(a) | nmol/L | laboratory |
| 44261-6, 55758-7 | PHQ-9, PHQ-2 | {score} | survey |
| 70274-6, 75626-2 | GAD-7, AUDIT-C | {score} | survey |

Reference ranges are typical adult male ranges chosen for the teaching record; interpretation flags follow them. LOINC has no code for the Insomnia Severity Index, so its scores (17, 12, 7) are given in the note text. Qualitative results (rapid urease test, gastric histology, urine drug test, SARS-CoV-2 antigen test, HIV and hepatitis B and C screening) and the coronary calcium score are recorded as narrative.

## Procedures, immunizations, and encounter types

- Electrocardiogram: SNOMED CT 29303009 (Electrocardiographic procedure), at intake.
- CT coronary angiography: SNOMED CT 419545005 (CT angiography of coronary artery with contrast), at one week.
- Upper endoscopy: SNOMED CT 76009000 (Esophagogastroduodenoscopy), at one week.
- Gastric biopsies: SNOMED CT 10077008 (Endoscopic biopsy of stomach).
- Advance care planning: SNOMED CT 713603004.
- Encounter types: SNOMED CT 390906007 (follow-up encounter) for the three focused chronic-care visits, 86013001 (periodic reevaluation and management of healthy individual) for the preventive visit, and 185345009 (encounter for symptom) for the sick visit. The services are named in plain text as CPT 99396 and 99497; CPT is not used as a coded value.
- Immunizations: CVX 216 (PCV20), 187 (zoster recombinant, dose 1) and 189 (HepB-CpG, two doses).
- No known allergy: SNOMED CT 716186003.

## Vital signs

The six visits use LOINC 8302-2, 29463-7, 39156-5, 8480-6, 8462-4, 8867-4, 9279-1, 8310-5, and 59408-5 with UCUM units.

## Review note

Codes were checked against the public terminology server and NLM RxNav on November 6, 2026. They do not imply that Marcus Aurelius received these diagnoses, tests, or medications during his lifetime.
