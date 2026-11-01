# Conformance validation

Local checks (`scripts/validate_case.ps1`) test internal consistency. Formal conformance is tested separately by `scripts/run_conformance.ps1` with the official tooling below.

## Commands

From the repository root:

```powershell
pwsh -File scripts/install_validators.ps1          # once; needs Java 11+ and network access
pwsh -File scripts/run_conformance.ps1 -CaseDirectory pilots/HR-ET007-audie-murphy
pwsh -File scripts/run_conformance.ps1 -CaseDirectory pilots/HR-ET008-gregory-boyington
```

The runner exits 1 on any error-level finding. Add `-SkipFhir` for a fast C-CDA-only run. `validate_case.ps1` reports the conformance result and shows `STALE` if the XML or bundle changed after the last run.

Tools install to `.work/validators/` (gitignored). Only `generated/conformance/summary.json` is committed. Full reports stay local because they contain machine paths and change between validator runs.

## Toolchain

All versions are pinned, and `install_validators.ps1` checks each download against a recorded SHA-256.

| Stage | Tool | Version |
| --- | --- | --- |
| CDA XSD | HL7 `CDA-core-2.0`, SDTC-extended schema | commit `e922fc3` |
| C-CDA R2.1 rules | HL7 `CDA-ccda-2.1` Schematron and `voc.xml`, with 2025 errata | commit `6d3ed96` |
| Schematron compiler | ISO Schematron reference XSLT on Saxon-HE | commit `77dcd36`, Saxon 9.9.1-8 |
| FHIR R4 and US Core | HL7 FHIR Validator | 7.0.3 |
| US Core | `hl7.fhir.us.core` | 6.1.0 |

The FHIR Validator sends codes to the public terminology server `tx.fhir.org`. Results can shift as that server's content changes, and the run needs network access.

## Correction applied to the official Schematron

At the pinned commit, the assertion for CONF:1098-8583 (Goal Observation) has a misplaced quote:

```text
@root='2.16.840.1.113883.10.20.22.4.121 and not(@extension)'
```

It compares `@root` to a literal that no document can match, so every Goal Observation fails. The installer moves the quote to `@root='…4.121' and not(@extension)` in `ccda-2.1.patched.sch` and leaves the downloaded file unchanged. The correction should be reported to HL7 and removed once upstream is fixed.

## What a pass means

- **Rules only test content that exists.** Allergies and medications are `nullFlavor` sections, so their entry rules do not run. A pass means the record is valid, not that it is complete.
- **Warnings are not gated.** They are mostly SHOULD-level items such as author participation, reference ranges, and interpretation codes.
- **US Core applies only to declared profiles.** The validator ignores a profile a resource does not claim, so the runner fails if no resource declares one. Social, functional, mental-status, and safety Observations declare no US Core profile until they are coded.
- **Base R4 runs on a temporary copy** with US Core profile references replaced, so that result is independent of US Core.
- **Validator results need controls.** A broken fixture should be run after toolchain changes to confirm that findings still fire.

## Generator conventions required by validation

- FHIR `fullUrl` values are deterministic UUIDs. Local identifiers remain in `Resource.id`.
- FHIR blood pressure is one `85354-9` panel per visit. C-CDA keeps separate systolic and diastolic observations.
- FHIR pulse oximetry carries both `59408-5` and `2708-6`.
- FHIR codings omit `version`, so the terminology server can check them against its current release. Versions remain in the canonical case.
- C-CDA results use one organizer per instrument, coded from the case.
- C-CDA Goal Observation `statusCode` is fixed to `active` by the template. The canonical goal status appears in the Goals narrative table.
- Fictional facility contact details use reserved values: phone numbers in the 555-0100 to 555-0199 range and ZIP 00000.
- Local FHIR systems use the project namespace in `scripts/lib/common.mjs`, because the validator rejects `example.org`.
