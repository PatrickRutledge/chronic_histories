# The Human Record

The Human Record is a public synthetic clinical dataset built around deceased historical figures and original archetypes. Historical evidence, retrospective interpretation, and generated clinical content remain explicitly separated.

Every generated patient artifact must display:

> SYNTHETIC RECORD, NOT A REAL MEDICAL RECORD

## Repository structure

- `schema/` — canonical JSON Schema
- `docs/` — dataset policies and technical decisions
- `pilots/` — one canonical case folder per pilot
- `scripts/` — deterministic generators and validators
- `outputs/` — editorial workbook outputs

## Evidence grades

- `D` — documented in a primary or reliable source
- `R` — retrospective clinical or historical interpretation
- `S` — synthetic content generated for the teaching record

## Generate pilot review outputs

```powershell
node scripts/generate_case_outputs.mjs pilots/HR-ET007-audie-murphy/case.json
node scripts/generate_ccda.mjs pilots/HR-ET007-audie-murphy/case.json
node scripts/generate_supporting_docs.mjs pilots/HR-ET007-audie-murphy/case.json
pwsh -File scripts/validate_case.ps1 -CaseDirectory pilots/HR-ET007-audie-murphy
```

The generators write an HTML review page, a draft FHIR R4 collection bundle, and a draft C-CDA R2.1 CCD under the case's `generated/` directory. Draft output is not represented as US Core- or C-CDA-conformant until the relevant profile and schematron validation passes.
