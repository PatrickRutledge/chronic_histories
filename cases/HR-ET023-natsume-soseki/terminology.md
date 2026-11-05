# Terminology — Natsume Sōseki

> **SYNTHETIC RECORD, NOT A REAL MEDICAL RECORD**

## Diagnoses

| Use | System | Code | Display | Evidence |
|---|---|---|---|---|
| Presenting problem at intake, resolved at endoscopy | ICD-10-CM FY2026 | R10.13 | Epigastric pain | S; timing linked to his documented stomach illness of May 1910 |
| Problem recorded at endoscopy, healed at eleven weeks | ICD-10-CM FY2026 | K25.4 | Chronic or unspecified gastric ulcer with hemorrhage | S; linked to his documented gastric ulcer (D) |
| Problem recorded at endoscopy, eradicated at eleven weeks | ICD-10-CM FY2026 | B96.81 | Helicobacter pylori [H. pylori] as the cause of diseases classified elsewhere | S |
| Finding at intake | ICD-10-CM FY2026 | D50.0 | Iron deficiency anemia secondary to blood loss (chronic) | S |
| Histology at two weeks | ICD-10-CM FY2026 | K29.40 | Chronic atrophic gastritis without bleeding | S |
| Problem added at the sick visit, resolved | ICD-10-CM FY2026 | M54.50 | Low back pain, unspecified | S |
| Finding at the preventive visit | ICD-10-CM FY2026 | R73.03 | Prediabetes | S |

The period labels for his London illness (shinkei suijaku, nervous depression) are not coded (see sources.md).

## Medications (RxNorm)

| Code | Display |
|---|---|
| 198440 | acetaminophen 500 MG Oral Tablet (in place of ibuprofen) |
| 2604800 | vonoprazan 20 MG Oral Tablet (each morning for eight weeks; an extra evening dose for 14 days during eradication) |
| 310325 | ferrous sulfate 325 MG Oral Tablet (every other day) |
| 308191 | amoxicillin 500 MG Oral Capsule (two capsules three times daily for 14 days) |

## Results (LOINC 2.81)

| Code | Measure | Unit | Category |
|---|---|---|---|
| 718-7, 787-2, 788-0, 6690-2, 777-3 | Hemoglobin, MCV, RDW, white cells, platelets | g/dL, fL, %, 10*3/uL | laboratory |
| 2276-4, 2498-4, 2500-7, 2502-3 | Ferritin, iron, total iron-binding capacity, transferrin saturation | ng/mL, ug/dL, % | laboratory |
| 51990-0 | Basic metabolic panel (organizer) | — | panel |
| 2951-2, 2823-3, 3094-0, 2160-0, 98979-8, 2345-7 | Sodium, potassium, urea nitrogen, creatinine, eGFR (CKD-EPI 2021), glucose | mmol/L, mg/dL, mL/min/{1.73_m2} | laboratory |
| 4548-4 | Hemoglobin A1c | % | laboratory |
| 24331-1 | Lipid panel (organizer) | — | panel |
| 2093-3, 2085-9, 2571-8, 13457-7 | Total cholesterol, HDL, triglycerides, LDL (calculated) | mg/dL | laboratory |
| 44261-6, 55758-7 | PHQ-9, PHQ-2 | {score} | survey |
| 70274-6, 75626-2 | GAD-7, AUDIT-C | {score} | survey |

Reference ranges are typical adult male ranges chosen for the teaching record; interpretation flags follow them. Qualitative results (rapid urease test, histology, clarithromycin-resistance PCR, urea breath test, HIV and hepatitis B and C screening) are recorded as narrative. The Glasgow-Blatchford score is recorded in the text.

## Procedures, immunizations, and encounter types

- Upper endoscopy: SNOMED CT 76009000 (Esophagogastroduodenoscopy), at diagnosis and at eleven weeks.
- Endoscopic biopsies: SNOMED CT 10077008 (Endoscopic biopsy of stomach).
- Urea breath test: SNOMED CT 408652004 (13C urea breath test).
- Advance care planning: SNOMED CT 713603004.
- Encounter types: SNOMED CT 390906007 (follow-up encounter) for the three focused chronic-care visits, 86013001 (periodic reevaluation and management of healthy individual) for the preventive visit, and 185345009 (encounter for symptom) for the sick visit. The services are named in plain text as CPT 99396 and 99497; CPT is not used as a coded value.
- Immunizations: CVX 115 (Tdap) and 189 (HepB-CpG, two doses).
- No known allergy: SNOMED CT 716186003.

## Vital signs

The six visits use LOINC 8302-2, 29463-7, 39156-5, 8480-6, 8462-4, 8867-4, 9279-1, 8310-5, and 59408-5 with UCUM units.

## Review note

Codes were checked against the public terminology server and NLM RxNav on November 5, 2026. They do not imply that Natsume Sōseki received these diagnoses, tests, or medications during his lifetime.
