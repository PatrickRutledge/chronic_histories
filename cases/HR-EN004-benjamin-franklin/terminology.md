# Terminology — Benjamin Franklin

> **SYNTHETIC RECORD, NOT A REAL MEDICAL RECORD**

## Diagnoses

| Use | System | Code | Display | Evidence |
|---|---|---|---|---|
| Active problem | ICD-10-CM FY2026 | M1A.0710 | Idiopathic chronic gout, right ankle and foot, without tophus (tophi) | S; linked to his documented gout |
| Resolved problem | ICD-10-CM FY2026 | N21.0 | Calculus in bladder | S; linked to his documented stone |
| Active problem | ICD-10-CM FY2026 | N18.31 | Chronic kidney disease, stage 3a | S |
| Active problem | ICD-10-CM FY2026 | I10 | Essential (primary) hypertension | S |
| Active problem | ICD-10-CM FY2026 | N40.1 | Benign prostatic hyperplasia with lower urinary tract symptoms | S; recorded at the urology consultation |
| Resolved problem | ICD-10-CM FY2026 | M10.062 | Idiopathic gout, left knee | S; recorded at the July sick visit |

## Medications (RxNorm)

| Code | Display |
|---|---|
| 310798 | hydrochlorothiazide 25 MG Oral Tablet (stopped at intake) |
| 979492 | losartan potassium 50 MG Oral Tablet |
| 197319 | allopurinol 100 MG Oral Tablet (one, then two tablets daily) |
| 197320 | allopurinol 300 MG Oral Tablet |
| 197541 | colchicine 0.6 MG Oral Tablet (prophylaxis, about six months) |
| 198440 | acetaminophen 500 MG Oral Tablet (as needed) |
| 863669 | tamsulosin hydrochloride 0.4 MG Oral Capsule (until surgery) |
| 617310 | atorvastatin 20 MG Oral Tablet |
| 199381 | potassium citrate 10 MEQ Extended Release Oral Tablet |
| 312615 | prednisone 20 MG Oral Tablet (flare course) |

## Results (LOINC 2.81)

| Code | Measure | Unit | Category |
|---|---|---|---|
| 3084-1 | Serum urate | mg/dL | laboratory |
| 51990-0 | Basic metabolic panel (organizer) | — | panel |
| 2951-2, 2823-3, 2028-9, 3094-0, 2160-0, 98979-8, 2345-7 | Sodium, potassium, bicarbonate, BUN, creatinine, eGFR (CKD-EPI 2021), glucose | mmol/L, mg/dL, mL/min/{1.73_m2} | laboratory |
| 17861-6, 2777-1, 2731-8, 62292-8 | Calcium, phosphate, intact PTH, 25-hydroxyvitamin D | mg/dL, pg/mL, ng/mL | laboratory |
| 718-7, 1742-6, 13457-7, 4548-4 | Hemoglobin, ALT, LDL cholesterol, HbA1c | g/dL, U/L, mg/dL, % | laboratory |
| 9318-7 | Urine albumin-creatinine ratio | mg/g | laboratory |
| 2756-5 | Urine pH | [pH] | laboratory |
| 13945-1 | Urine red cells per high-power field | /[HPF] | laboratory |
| 5671-3 | Blood lead | ug/dL | laboratory |
| 3167-4, 3087-4, 6687-8, 6874-2 | 24-hour urine volume, uric acid, citrate, calcium | L/(24.h), mg/(24.h) | laboratory |
| 98856-8 | Post-void residual by bladder ultrasound | mL | imaging |
| 80519-2 | Maximum urine flow by uroflowmetry | mL/s | imaging |
| 80976-4 | International Prostate Symptom Score | {score} | survey |
| 85624-5, 85625-2 | KFRE 2-year and 5-year kidney failure risk | % | survey |
| 55758-7, 72233-0, 75626-2 | PHQ-2, Mini-Cog, AUDIT-C (annual wellness visit) | {score} | survey |

eGFR values are calculated from the synthetic creatinine with the 2021 CKD-EPI creatinine equation for a 76-year-old man. The serum urate reference range is a typical laboratory range (3.5 to 7.2 mg/dL); the treatment target of below 6 mg/dL is stated in the notes. The 24-hour urine volume range is the stone-prevention goal of at least 2.5 L a day. Interpretation flags follow the stated ranges.

## Procedures, immunizations, and other codes

- CT of abdomen and pelvis without contrast: SNOMED CT 16457501000119102. Electrocardiogram: 29303009. Uroflowmetry: 44856007. Bladder ultrasound for post-void residual: 700387001. Cystoscopy: 142505009. Cystoscopic litholapaxy: 71323009. Transurethral prostatectomy: 90199006. Arthrocentesis of the knee: 879795002.
- Immunizations: CVX 135 (high-dose influenza), 216 (PCV20), 187 (recombinant zoster), 115 (Tdap), and 303 (RSV, adjuvanted).
- No known allergy: SNOMED CT 716186003.
- Encounter types: SNOMED CT 390906007 (follow-up encounter) for the three focused chronic-care visits, 185345009 (encounter for symptom) for the July sick visit, and 281038008 (geriatric annual health check) for the annual wellness visit. The services are named in plain text as HCPCS G0439 and CPT 99497 and 20610; HCPCS and CPT are not used as coded values.
- Family relationships: HL7 RoleCode FTH (father), MTH (mother), and SON (natural son).

## Vital signs

The six visits use LOINC 8302-2, 29463-7, 39156-5, 8480-6, 8462-4, 8867-4, 9279-1, 8310-5, and 59408-5 with UCUM units.

## Review note

Codes were checked against the public terminology server, the NLM Clinical Tables LOINC search, and NLM RxNav on November 3, 2026. They do not imply that Franklin received these diagnoses, tests, or medications during his lifetime.
