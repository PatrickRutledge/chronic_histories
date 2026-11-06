# Terminology — Leonardo da Vinci

> **SYNTHETIC RECORD, NOT A REAL MEDICAL RECORD**

## Diagnoses

| Use | System | Code | Display | Evidence |
|---|---|---|---|---|
| Resolved presenting problem | ICD-10-CM FY2026 | R29.818 | Other symptoms and signs involving the nervous system | S; right hand weakness, numbness, and clawing, superseded at the August 17 visit |
| Active problem | ICD-10-CM FY2026 | Z91.81 | History of falling | S; the fall onto the right elbow |
| Active problem (both_with_link) | ICD-10-CM FY2026 | G56.21 | Lesion of ulnar nerve, right upper limb | S; linked to the documented paralysis of his right hand and the ulnar palsy hypothesis |
| Active problem | ICD-10-CM FY2026 | E78.00 | Pure hypercholesterolemia, unspecified | S; found on the stroke risk screen |
| Resolved problem | ICD-10-CM FY2026 | B30.9 | Viral conjunctivitis, unspecified | S; at the September sick visit |

No code for stroke, median nerve lesion, focal dystonia, ADHD, dyslexia, or autism spectrum disorder is used; those are historical leads or excluded diagnoses only.

## Medications (RxNorm)

| Code | Display |
|---|---|
| 198440 | acetaminophen 500 MG Oral Tablet |
| 617310 | atorvastatin 20 MG Oral Tablet |

## Results (LOINC 2.81)

| Code | Measure | Unit | Category |
|---|---|---|---|
| 58410-2 | CBC panel (organizer): 718-7, 6690-2, 777-3 | g/dL, 10*3/uL | laboratory |
| 24323-8 | Comprehensive metabolic panel (organizer): 2951-2, 2823-3, 2160-0, 98979-8, 2345-7, 1742-6 | mmol/L, mg/dL, U/L, mL/min/{1.73_m2} | laboratory |
| 4548-4 | HbA1c | % | laboratory |
| 24331-1 | Lipid panel (organizer): 2093-3, 2085-9, 13457-7, 2571-8 | mg/dL | laboratory |
| 43583-4 | Lipoprotein(a) | nmol/L | laboratory |
| 3016-3, 2132-9 | TSH, vitamin B12 | m[IU]/L, pg/mL | laboratory |
| 55758-7 | PHQ-2 total score | {score} | survey |

Interpretation flags follow the stated ranges. Nerve conduction and ultrasound measurements, grip and pinch dynamometry, two-point discrimination, MRC grades, the QuickDASH, NIH Stroke Scale, Mini-Cog, and Timed Up and Go are kept in the note text and procedure displays.

## Procedures, immunizations, and other codes

- Procedures (SNOMED CT): 816077007 MRI of brain; 713025006 Plain X-ray of elbow; 29303009 Electrocardiographic procedure; 51110005 Nerve conduction study; 42803009 Electromyography; 241498001 Ultrasound scan of elbow; 79321009 Application of splint. The planned decompression of the ulnar nerve at the elbow (SNOMED CT 171849009) is booked after the episode and is not recorded as a procedure.
- Immunizations: CVX 187 (recombinant zoster) and 115 (Tdap) in the history; 135 (influenza, high-dose, trivalent), 216 (PCV20), and 309 (COVID-19 mRNA) at the wellness visit.
- Family history relationships: HL7 v3 RoleCode FTH (father) and MTH (mother).
- No known allergy: SNOMED CT 716186003.
- Encounter types: SNOMED CT 390906007 (follow-up encounter) for the three focused visits, 185345009 (encounter for symptom) for the sick visit, and 281038008 (geriatric annual health check) for the subsequent annual wellness visit. Services are named in plain text only; HCPCS and CPT are not used as coded values.

## Vital signs

The six visits use LOINC 8302-2, 29463-7, 39156-5, 8480-6, 8462-4, 8867-4, 9279-1, 8310-5, and 59408-5 with UCUM units.

## Review note

Codes were checked against the public terminology server and NLM RxNav on November 5, 2026. They do not imply that Leonardo da Vinci received these diagnoses, tests, or medications during his lifetime.
