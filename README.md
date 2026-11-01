# The Human Record

The Human Record is a public synthetic clinical dataset built around deceased historical figures and original archetypes. Historical evidence, retrospective interpretation, and generated clinical content remain explicitly separated.

Every generated patient artifact must display:

> SYNTHETIC RECORD, NOT A REAL MEDICAL RECORD

## Repository structure

- `schema/` — canonical JSON Schema
- `docs/` — dataset policies and technical decisions, including [conformance validation](docs/validation.md)
- `pilots/` — one canonical case folder per pilot
- `scripts/` — deterministic generators and validators
- `outputs/` — editorial workbook outputs

See [STATUS.md](STATUS.md) for the current decisions, completed milestones, validation results, limitations, and continuation plan.

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

The generators write an HTML review page, a draft FHIR R4 collection bundle, a draft C-CDA R2.1 CCD, eight case-driven supporting notes, and a provenance CSV under the case's `generated/` directory. Supporting notes are rendered from the canonical case rather than embedded pilot prose.

Records remain drafts until clinical and provenance review. See [docs/validation.md](docs/validation.md) for formal C-CDA R2.1 and US Core validation and for what a pass does and does not establish.
