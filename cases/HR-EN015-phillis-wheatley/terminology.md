# Terminology — Phillis Wheatley

> **SYNTHETIC RECORD, NOT A REAL MEDICAL RECORD**

## Diagnoses

| Use | System | Code | Display | Evidence |
|---|---|---|---|---|
| Presenting problem; resolved (superseded) at the diagnosis visit | ICD-10-CM FY2026 | R06.2 | Wheezing | S; linked to her documented frail, asthmatic childhood |
| Problem recorded at the diagnosis visit (both_with_link) | ICD-10-CM FY2026 | J45.30 | Mild persistent asthma, uncomplicated | S; linked to her documented asthma |
| Problem added at the sick visit; resolved | ICD-10-CM FY2026 | J45.31 | Mild persistent asthma with (acute) exacerbation | S; anchored to her own letter of October 1773 |
| Problem recorded at the six-week visit; resolved | ICD-10-CM FY2026 | T75.3XXA | Motion sickness, initial encounter | S |
| Problem recorded at the preventive visit | ICD-10-CM FY2026 | Z31.69 | Encounter for other general counseling and advice on procreation | S |

## Medications (RxNorm)

| Code | Display |
|---|---|
| 1246304 | 120 ACTUAT budesonide 0.16 MG/ACTUAT / formoterol fumarate 0.0045 MG/ACTUAT Metered Dose Inhaler (as needed only, then maintenance and reliever) |
| 312615 | prednisone 20 MG Oral Tablet (standby course; never used) |
| 995666 | meclizine hydrochloride 25 MG Oral Tablet |
| 198640 | folic acid 0.4 MG Oral Tablet |

Albuterol given before spirometry is named in the notes and not recorded as a medication. The spacer is a device, named in the notes.

## Results (LOINC 2.81)

| Code | Measure | Unit | Category |
|---|---|---|---|
| 58410-2 | CBC panel (organizer) | — | panel |
| 718-7, 6690-2, 711-2, 777-3 | Hemoglobin, white cell count, blood eosinophils, platelets | g/dL, 10*3/uL | laboratory |
| 19113-0 | Total IgE | [IU]/mL | laboratory |
| 20157-4, 20155-8, 20152-5, 19926-5, 69970-2 | FEV1 before and after bronchodilator, FEV1 percent predicted, FEV1/FVC before and after bronchodilator | L, %, {ratio} | imaging (pulmonary function; GLI Global race-neutral equations) |
| 96269-6 | FeNO | [ppb] | imaging |
| 19935-6 | Peak expiratory flow | L/min | imaging |
| 82668-5 | Asthma Control Test total score | {score} | survey |
| 55758-7 | PHQ-2 total score | {score} | survey |
| 44261-6 | PHQ-9 total score | {score} | survey |
| 70274-6 | GAD-7 total score | {score} | survey |

Reference ranges are typical young adult female ranges chosen for the teaching record. The interferon-gamma release assay, urine pregnancy test, specific IgE, hepatitis B, HIV and hepatitis C screening and rapid viral tests are recorded in note text.

## Procedures, immunizations, and encounter types

- Plain X-ray of chest: SNOMED CT 399208008. Spirometry: 127783003 (diagnosis and after recovery). Asthma action care planning: 716542004 (three versions). Assessment of inhalation technique: 710957008. Advance care planning: 713603004.
- Encounter types: SNOMED CT 390906007 (follow-up encounter) for the three focused chronic-care visits, 86013001 (periodic reevaluation and management of healthy individual) for the preventive visit, and 185345009 (encounter for symptom) for the sick visit. Services are named in plain text as CPT 99395, 99497, 90651, 90739, 90471 and 90472; CPT is not used as a coded value.
- Immunizations: CVX 115 (Tdap, school record), 140 (influenza, two seasons), 309 (COVID-19 mRNA, two seasons), 216 (PCV20), 165 (HPV9, doses 1 and 2), 189 (HepB-CpG, doses 1 and 2).
- No known allergy: SNOMED CT 716186003.

## Vital signs

The six visits use LOINC 8302-2, 29463-7, 39156-5, 8480-6, 8462-4, 8867-4, 9279-1, 8310-5, and 59408-5 with UCUM units.

## Review note

Codes were checked against the public terminology server and NLM RxNav on November 6, 2026. They do not imply that Phillis Wheatley received these diagnoses, tests, or medications during her lifetime.
