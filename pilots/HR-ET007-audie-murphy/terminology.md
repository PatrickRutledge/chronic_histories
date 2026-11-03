# Audie Murphy pilot terminology ledger

Validation date: 2026-11-01

This ledger records the terminology selected for the synthetic modern episode. A code marked validated was checked against the named authoritative publisher. Profile conformance remains separate from code validation.

| Use | System | Code | Display | Version | Status | Authority |
|---|---|---|---|---|---|---|
| Synthetic provisional PTSD problem | ICD-10-CM | F43.10 | Post-traumatic stress disorder, unspecified | FY2026 | Validated | CDC/NCHS FY2026 ICD-10-CM |
| Synthetic provisional insomnia problem | ICD-10-CM | G47.00 | Insomnia, unspecified | FY2026 | Validated | CDC/NCHS FY2026 ICD-10-CM |
| PTSD symptom score | LOINC | 101698-9 | PTSD PCL-5 score [PCL-5] | 2.81 | Validated | Regenstrief Institute LOINC |
| Depression symptom score | LOINC | 44261-6 | Patient Health Questionnaire 9 item (PHQ-9) total score [Reported] | 2.81 | Validated | Regenstrief Institute LOINC |
| Score unit | UCUM | {score} | Score | current | Validated through LOINC example unit | Regenstrief Institute/UCUM |
| Vital-sign panel context | LOINC | 85353-1 | Vital signs, weight, height, oxygen saturation and BMI panel | 2.81 | Validated | Regenstrief Institute LOINC |
| Height | LOINC | 8302-2 | Body height | 2.81 | Validated | Regenstrief Institute LOINC |
| Weight | LOINC | 29463-7 | Body weight | 2.81 | Validated | Regenstrief Institute LOINC |
| BMI | LOINC | 39156-5 | Body mass index | 2.81 | Validated | Regenstrief Institute LOINC |
| Blood pressure | LOINC | 8480-6 / 8462-4 | Systolic / diastolic blood pressure | 2.81 | Validated | Regenstrief Institute LOINC |
| Heart and respiratory rate | LOINC | 8867-4 / 9279-1 | Heart rate / respiratory rate | 2.81 | Validated | Regenstrief Institute LOINC |
| Temperature | LOINC | 8310-5 | Body temperature | 2.81 | Validated | Regenstrief Institute LOINC |
| Pulse oximetry | LOINC | 59408-5 | Oxygen saturation by pulse oximetry | 2.81 | Validated | Regenstrief Institute LOINC |
| Resolved problem | ICD-10-CM | J06.9 | Acute upper respiratory infection, unspecified | FY2026 | Validated 2026-11-03 | S; intercurrent illness at the sick visit |
| Alcohol screen | LOINC | 75626-2 | Total score [AUDIT-C] | 2.81 | Validated 2026-11-03 | Regenstrief Institute LOINC; preventive visit |
| Influenza vaccine | CVX | 140 | Influenza, split virus, trivalent, PF | current | Validated 2026-11-03 | CDC CVX; earlier season and the preventive visit |
| Tdap vaccine | CVX | 115 | Tdap | current | Validated 2026-11-03 | CDC CVX |

## Encounter types

- The record has five visits: the intake visit (ENC-001, covered by the H&P, with no encounter type code), two focused chronic-care visits, a sick visit, and an adult preventive visit.
- Focused chronic-care visits (ENC-002, ENC-003): SNOMED CT 390906007 (Follow-up encounter).
- Sick visit (ENC-004): SNOMED CT 185345009 (Encounter for symptom).
- Adult preventive visit (ENC-005): SNOMED CT 86013001 (Periodic reevaluation and management of healthy individual). The services are named in plain text as CPT 99396, CPT 99497, and CPT 90656 with 90471; CPT is not used as a coded value.
- These SNOMED CT codes were validated against the public terminology server on November 3, 2026.

## Authorities

- CDC/NCHS ICD-10-CM release files: https://www.cdc.gov/nchs/icd/icd-10-cm/files.html
- LOINC PCL-5 panel and total score: https://loinc.org/101697-1/panel
- LOINC PHQ-9 total score: https://loinc.org/44261-6
- VA/DoD PTSD guideline: https://www.healthquality.va.gov/HEALTHQUALITY/guidelines/MH/ptsd/
- VA/DoD suicide-risk guideline: https://healthquality.va.gov/HEALTHQUALITY/guidelines/mh/srb/index.asp
- VA/DoD insomnia/OSA guideline: https://www.healthquality.va.gov/guidelines/CD/insomnia/index.asp

## Deliberately deferred

- SNOMED CT problem mappings await validation against a licensed/current terminology service; only the encounter type codes above are SNOMED CT coded.
- No RxNorm code is present because treatment is psychotherapy-led and no medication is generated; the sick visit advises over-the-counter supportive care only.
- PHQ-9 individual item responses are not inferred from the total scores. A safe-messaging reviewer must approve the item-level synthetic responses before they are generated.
- FHIR resources are draft R4 resources, not yet claimed as US Core-conformant.
