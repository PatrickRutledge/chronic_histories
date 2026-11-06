# Terminology — Voltaire

> **SYNTHETIC RECORD, NOT A REAL MEDICAL RECORD**

## Diagnoses

| Use | System | Code | Display | Evidence |
|---|---|---|---|---|
| Resolved presenting problem | ICD-10-CM FY2026 | R31.0 | Gross hematuria | S; visible blood in the urine with difficult urination, superseded at the April 22 visit |
| Active problem | ICD-10-CM FY2026 | R33.8 | Other retention of urine | S; chronic retention with overflow, voiding after a trial without catheter |
| Resolved problem | ICD-10-CM FY2026 | N17.9 | Acute kidney failure, unspecified | S; obstructive kidney injury, resolved at the April 13 visit |
| Active problem | ICD-10-CM FY2026 | N40.1 | Benign prostatic hyperplasia with lower urinary tract symptoms | S; recorded April 13 |
| Active problem (both_with_link) | ICD-10-CM FY2026 | C67.4 | Malignant neoplasm of posterior wall of bladder | S; muscle-invasive squamous cell carcinoma, recorded April 22; linked to the 1778 autopsy and its 2025 interpretation |
| Active problem | ICD-10-CM FY2026 | K59.09 | Other constipation | S; echoes his documented colic, purges, and enemas |
| Resolved problem | ICD-10-CM FY2026 | T83.511A | Infection and inflammatory reaction due to indwelling urethral catheter, initial encounter | S; the April 20 sick visit |

No code for prostate cancer (C61), uremia, inflammatory bowel disease, opioid use disorder, or opioid poisoning is used; those are historical leads or interpretations only.

## Medications (RxNorm)

| Code | Display |
|---|---|
| 1049909 | diphenhydramine hydrochloride 25 MG Oral Capsule (stopped at intake) |
| 863669 | tamsulosin hydrochloride 0.4 MG Oral Capsule |
| 876193 | polyethylene glycol 3350 17000 MG Powder for Oral Solution |
| 309078 | cefpodoxime 200 MG Oral Tablet |
| 198440 | acetaminophen 500 MG Oral Tablet |
| 1049621 | oxycodone hydrochloride 5 MG Oral Tablet |
| 312935 | sennosides, USP 8.6 MG Oral Tablet |
| 1725059 | naloxone hydrochloride 40 MG/ML Nasal Spray |

## Results (LOINC 2.81)

| Code | Measure | Unit | Category |
|---|---|---|---|
| 24365-9 | Urinalysis microscopic panel (organizer): 13945-1 (red cells per HPF), 5821-4 (white cells per HPF) | /[HPF] | laboratory |
| 58410-2 | CBC panel (organizer): 718-7, 6690-2, 777-3 | g/dL, 10*3/uL | laboratory |
| 51990-0 | Basic metabolic panel (organizer): 2951-2, 2823-3, 2028-9, 3094-0, 2160-0, 98979-8, 2345-7 | mmol/L, mg/dL, mL/min/{1.73_m2} | laboratory |
| 2857-1 | Prostate specific Ag in serum or plasma | ng/mL | laboratory |
| 98856-8 | US Urinary bladder Volume post void | mL | imaging |
| 80976-4 | International Prostate Symptom Score [IPSS] | {score} | survey |
| 72514-3 | Pain severity 0-10 verbal numeric rating | {score} | survey |
| 55758-7 | PHQ-2 total score | {score} | survey |
| 72233-0 | Mini-Cog total score | {score} | survey |

Urine culture, urine cytology, resection pathology, the G8 screen, Timed Up and Go, and AUDIT-C are kept in the note text.

## Procedures, immunizations, and other codes

- Procedures (SNOMED CT): 446583004 (insertion of indwelling catheter into urinary bladder), 713859006 (CT of urinary tract, excretory phase, with contrast), 75385009 (CT of thorax with contrast), 386745004 (transurethral cystoscopy), 386792000 (transurethral excision of neoplasm of urinary bladder), 176192000 (change of urethral catheter), 170884001 (trial without catheter), 715461005 (CT of urinary bladder with contrast for radiotherapy planning), 1269317006 (radiotherapy to urinary bladder; in progress).
- Immunizations: CVX 135 (influenza, high-dose, trivalent), 216 (PCV20), 187 (recombinant zoster), 115 (Tdap), 304 (RSV, unspecified).
- Family history relationships: HL7 v3 RoleCode MTH (mother) and FTH (father).
- No known allergy: SNOMED CT 716186003.
- Encounter types: SNOMED CT 390906007 (follow-up encounter) for the three focused visits, 185345009 (encounter for symptom) for the sick visit, and 281038008 (geriatric annual health check) for the subsequent annual wellness visit. Services are named in plain text only; HCPCS and CPT are not used as coded values.

## Vital signs

The six visits use LOINC 8302-2, 29463-7, 39156-5, 8480-6, 8462-4, 8867-4, 9279-1, 8310-5, and 59408-5 with UCUM units.

## Review note

Codes were checked against the public terminology server and NLM RxNav on November 5, 2026. They do not imply that Voltaire received these diagnoses, tests, or medications during his lifetime.
