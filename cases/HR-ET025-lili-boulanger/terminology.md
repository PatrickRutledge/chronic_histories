# Terminology — Lili Boulanger

> **SYNTHETIC RECORD, NOT A REAL MEDICAL RECORD**

## Diagnoses

| Use | System | Code | Display | Evidence |
|---|---|---|---|---|
| Active problem | ICD-10-CM FY2026 | K50.80 | Crohn's disease of both small and large intestine without complications | S; linked to the documented early-1915 symptoms (D) and to the disputed historical diagnoses of intestinal tuberculosis and Crohn disease (R); recorded at the diagnosis visit on January 28 |
| Active problem | ICD-10-CM FY2026 | Z79.620 | Long term (current) use of immunosuppressive biologic | S; risankizumab, recorded March 2 |
| Resolved problem (presenting concern) | ICD-10-CM FY2026 | R19.7 | Diarrhea, unspecified | S; abdominal pain, diarrhea, fevers, and weight loss; active at the index visit, resolved at the diagnosis visit on January 28 |
| Resolved problem | ICD-10-CM FY2026 | D50.0 | Iron deficiency anemia secondary to blood loss (chronic) | S; resolved April 27 |
| Resolved problem | ICD-10-CM FY2026 | E55.9 | Vitamin D deficiency, unspecified | S; resolved April 27 |
| Resolved problem | ICD-10-CM FY2026 | E44.0 | Moderate protein-calorie malnutrition | S; resolved August 3 |
| Resolved problem | ICD-10-CM FY2026 | A08.11 | Acute gastroenteropathy due to Norwalk agent | S; norovirus at the April sick visit |

## Medications (RxNorm)

| Code | Display |
|---|---|
| 198440 | acetaminophen 500 MG Oral Tablet |
| 312615 | prednisone 20 MG Oral Tablet |
| 2604618 | 10 ML risankizumab-rzaa 60 MG/ML Injection (600 mg induction) |
| 2604625 | 2.4 ML risankizumab-rzaa 150 MG/ML Cartridge (360 mg maintenance) |
| 2274408 | 10 ML ferric derisomaltose 100 MG/ML Injection (1000 mg) |
| 801663 | cholecalciferol 0.05 MG Oral Tablet (2000 units) |
| 282465 | calcium carbonate 1250 MG Oral Tablet |

## Results (LOINC 2.81)

| Code | Measure | Unit | Category |
|---|---|---|---|
| 55758-7 | PHQ-2 total score | {score} | survey |
| 44261-6 | PHQ-9 total score | {score} | survey |
| 70274-6 | GAD-7 total score | {score} | survey |
| 75626-2 | AUDIT-C total score (preventive visit) | {score} | survey |
| 718-7, 787-2, 6690-2, 777-3 | Hemoglobin, MCV, white cell count, platelets | g/dL, fL, 10*3/uL | laboratory |
| 1988-5 | C-reactive protein | mg/L | laboratory |
| 38445-3 | Fecal calprotectin | ug/g | laboratory |
| 1751-7 | Albumin | g/dL | laboratory |
| 2276-4, 2132-9, 62292-8 | Ferritin, vitamin B12, 25-hydroxyvitamin D | ng/mL, pg/mL | laboratory |
| 1742-6, 1920-8, 1975-2 | ALT, AST, total bilirubin | U/L, mg/dL | laboratory |
| 2160-0, 2823-3, 2777-1 | Creatinine, potassium, phosphate | mg/dL, mmol/L | laboratory |
| 85394-5, 80934-3 | DXA lumbar spine and femur Z-scores | {Z-score} | imaging |

Reference ranges are typical adult female ranges chosen for the teaching record; interpretation flags follow them, and validation checks that every flag agrees with its range. The interferon-gamma release assay, infection serologies, stool tests, mycobacterial culture, and hepatitis B antibody are qualitative and are reported in note text. The Harvey-Bradshaw Index and SES-CD have no LOINC code and are reported in note text.

## Procedures, immunizations, and encounters

- Plain X-ray of chest: SNOMED CT 399208008. Colonoscopy and biopsy of colon: 446745002 (diagnostic ileocolonoscopy). MRI of small intestine with contrast: 1231763005 (MR enterography). Bone density scan: 312681000. Colonoscopy: 73761001 (follow-up ileocolonoscopy).
- Immunizations: CVX 140 (influenza, trivalent, preservative free), 115 (Tdap), 216 (PCV20), 187 (recombinant zoster, two doses), and 43 (hepatitis B, adult).
- No known allergy: SNOMED CT 716186003.
- Encounter types: SNOMED CT 390906007 (follow-up encounter) for the four focused chronic-care visits, 185345009 (encounter for symptom) for the April sick visit, and 86013001 (periodic reevaluation and management of healthy individual) for the adult preventive visit. The services are named in plain text as CPT 99395 and CPT 99497; CPT is not used as a coded value.

## Vital signs

The seven visits use LOINC 8302-2, 29463-7, 39156-5, 8480-6, 8462-4, 8867-4, 9279-1, 8310-5, and 59408-5 with UCUM units.

## Review note

Codes were checked against the public terminology server, the NLM Clinical Tables service, and NLM RxNav on November 5, 2026. They do not imply that Boulanger received these diagnoses, tests, or medications during her lifetime.
