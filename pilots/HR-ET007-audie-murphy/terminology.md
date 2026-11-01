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

## Authorities

- CDC/NCHS ICD-10-CM release files: https://www.cdc.gov/nchs/icd/icd-10-cm/files.html
- LOINC PCL-5 panel and total score: https://loinc.org/101697-1/panel
- LOINC PHQ-9 total score: https://loinc.org/44261-6
- VA/DoD PTSD guideline: https://www.healthquality.va.gov/HEALTHQUALITY/guidelines/MH/ptsd/

## Deliberately deferred

- SNOMED CT mappings await validation against a licensed/current terminology service.
- No RxNorm code is present because the first treatment course is psychotherapy-led and no medication has yet been generated.
- PHQ-9 individual item responses are not inferred from the total scores. A safe-messaging reviewer must approve the item-level synthetic responses before they are generated.
- FHIR resources are draft R4 resources, not yet claimed as US Core-conformant.
