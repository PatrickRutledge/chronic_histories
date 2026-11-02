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

When the terminology server fails, for example by timing out on a large value set, the affected code was not checked. The runner reports these as `TerminologyUnverified`. They neither fail the record nor count as verified, and `validate_case.ps1` shows them on the conformance line. The US Core allergy-substance value set reliably times out for RxNorm penicillin.

## Code-path test record

`tests/fixtures/HR-TST001-code-paths/` exercises generator paths that the pilots do not use: an active medication with an indication, a drug allergy and a drug intolerance with reactions, and a coded family-history entry. It uses a fictional name with placeholder claims, so no real person acquires invented allergies or relatives. Its generated output is not committed. Run it after generator changes:

```powershell
node scripts/generate_case_outputs.mjs tests/fixtures/HR-TST001-code-paths/case.json
node scripts/generate_ccda.mjs tests/fixtures/HR-TST001-code-paths/case.json
node scripts/generate_supporting_docs.mjs tests/fixtures/HR-TST001-code-paths/case.json
pwsh -File scripts/run_conformance.ps1 -CaseDirectory tests/fixtures/HR-TST001-code-paths
```

## Corrections applied to the official Schematron

The installer builds `ccda-2.1.patched.sch` from the downloaded file, which it leaves unchanged, and prints each correction it makes. Both defects make rules impossible to pass, so they should be reported to HL7 and the corrections removed once upstream is fixed.

1. **Misplaced quote (CONF:1098-8583, Goal Observation).** The test `@root='2.16.840.1.113883.10.20.22.4.121 and not(@extension)'` compares `@root` to a literal that no document can match. The quote is moved so the test reads `@root='…4.121' and not(@extension)`.
2. **Version contradicted by the rule's own message (CONF:1198-30768, Health Concerns; CONF:1198-30235, template 4.108).** The 2025 errata added `not(@extension)` to these template references, but each message names a versioned template, such as `urn:hl7ii:2.16.840.1.113883.10.20.22.4.132:2015-08-01`. Only that versioned template has rules. The correction requires the extension the message names. It applies to every assertion with this contradiction, and at the pinned commit there are exactly two.

## What a pass means

- **Rules only test content that exists.** Neither pilot has medications or family-history entries, so those rules run only on the code-path test record. A pass means the record is valid, not that it is complete.
- **Warnings are not gated.** They are mostly SHOULD-level items such as author participation, reference ranges, and interpretation codes.
- **US Core applies only to declared profiles.** The validator ignores a profile a resource does not claim, so the runner fails if no resource declares one. Social, functional, mental-status, and safety Observations declare no US Core profile until they are coded.
- **Base R4 runs on a temporary copy** with US Core profile references replaced, so that result is independent of US Core.
- **Validator results need controls.** `scripts/run_controls.ps1 -Conformance` breaks copies of the code-path fixture and requires the XSD, Schematron, and US Core stages to report errors. Run it after any toolchain change.

## Generator conventions required by validation

- FHIR `fullUrl` values are deterministic UUIDs. Local identifiers remain in `Resource.id`.
- FHIR blood pressure is one `85354-9` panel per visit. C-CDA keeps separate systolic and diastolic observations.
- FHIR pulse oximetry carries both `59408-5` and `2708-6`.
- FHIR codings omit `version`, so the terminology server can check them against its current release. Versions remain in the canonical case.
- C-CDA results use one organizer per instrument, coded from the case.
- C-CDA Goal Observation `statusCode` is fixed to `active` by the template. The canonical goal status appears in the Goals narrative table.
- Fictional facility contact details use reserved values: phone numbers in the 555-0100 to 555-0199 range and ZIP 00000.
- Local FHIR systems use the project namespace in `scripts/lib/common.mjs`, because the validator rejects `example.org`.
