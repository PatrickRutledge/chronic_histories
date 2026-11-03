# Contributing to The Human Record

Thank you for helping. Contributions can be new cases, corrections to historical claims, better sources, generator and validator code, or documentation.

> Every record is fictional clinical care built around real, deceased historical figures. Each artifact displays **SYNTHETIC RECORD, NOT A REAL MEDICAL RECORD**.

## Before you start

1. **Agree to the CLA.** Read [CLA.md](CLA.md) and accept the individual agreement in your first pull request. If you contribute for an employer, the organization signs the corporate agreement. Pull requests are merged only after the agreement is accepted.
2. **Open an issue first** for a new case or a large change. Name the figure, the conditions, and your main sources, so we can check the roster and avoid duplicate work.
3. **Corrections are always welcome.** If a claim or source is wrong, open an issue with the citation that corrects it.

## Ground rules

These rules are checked by the build where possible and by reviewers where not.

- **No real patient data.** Never include protected health information, material from a real medical record, or health information about a living person.
- **Deceased figures only.** If the figure died after 1990, use only what they or their physicians made public. Those cases need extra review before release.
- **Everything modern is fictional.** Clinicians have invented names. The facility is St. Posthumous Health Center at the fictional address in `scripts/lib/common.mjs`. Phone numbers stay in the 555-0100 to 555-0199 range. Never use a real person's name for a clinician, or a real NPI, Social Security number, or address.
- **Grade every claim.**
  - `D` (documented): supported by a primary or reliable source, such as the person's own writing, an official record, or a public-institution history.
  - `R` (retrospective): a later interpretation, such as a modern diagnosis proposed for a historical figure. Contested diagnoses stay `R` and never become active problems as fact.
  - `S` (synthetic): invented for the teaching episode. Every modern encounter, measurement, medication, and date is `S`.
- **History is never invented.** Past medical history and family history describe the real person and real relatives. They must be `D` or `R`, link to claims, and include only events before the index age. If nothing is sourced, leave the section empty.
- **Cite precisely.** Every source in `case.json` has a title, publisher, URL or identifier, and access date. Quote briefly. Say when only an abstract was reviewed. Roster entries are leads, not evidence.
- **Follow the date policy.** Choose an index age that serves the teaching purpose and set the modern dates by [docs/date-shifting.md](docs/date-shifting.md). The synthetic birth date keeps the true month and day.
- **Base care on guidelines.** The synthetic plan follows a named, current clinical practice guideline, cited in `care_plan.guidelines`.
- **Message safely.** Never describe methods of self-harm. State deaths, including suicides and violent deaths, factually and without graphic detail. Mark sensitive claims with `sensitive_content: true`. Every case with a safety assessment includes crisis resources in its plan.
- **Do not set review status.** Leave `record_classification.public_release_status` as `draft` and every review as `not_started`. Maintainers record review decisions, and the build rejects an approved case that has not passed every review.

## Adding a case

1. Copy an existing pilot folder, such as `pilots/HR-NI001-abraham-lincoln/`, to `pilots/HR-<person id>-<name>/`, and delete its `generated/` folder. The person ID comes from the master roster, for example `NI001`.
2. Edit `case.json`. It must validate against [schema/case.schema.json](schema/case.schema.json). Only `case.json` is authoritative.
3. Write `sources.md` (human-readable source list and editorial decisions) and `terminology.md` (codes used and why).
4. Build and check:

   ```powershell
   pwsh -File scripts/build.ps1 -CaseDirectory pilots/HR-XX000-name   # one case
   pwsh -File scripts/build.ps1                                       # everything; refreshes manifest.csv
   pwsh -File scripts/run_controls.ps1                                # confirms the checks still work
   ```

   For formal C-CDA and US Core validation, run `pwsh -File scripts/install_validators.ps1` once, then build with `-Conformance`. It needs Java 17 and network access. Maintainers run it before release if you cannot.

5. Commit `case.json`, `sources.md`, `terminology.md`, everything under `generated/`, and the updated `manifest.csv`.

**Never edit generated files by hand.** The build records hashes and rejects edited or stale outputs. Change the case or the generator instead.

## Changing code

- Generators and validators must stay deterministic. The same `case.json` must always produce byte-identical outputs.
- If you add a check, add a negative control to `scripts/run_controls.ps1` that proves it fires.
- If a change alters outputs, rebuild every case and commit the results in the same pull request.

## Pull requests

- CI checks that committed outputs are current, rebuilds every case, compares the results with your commit, and runs the negative controls. Pull requests must pass CI.
- Describe what changed and why. For a new case, summarize the teaching objective, the index age, and any editorial decisions, such as claims you excluded and why.
- Add a line to the Unreleased section of [CHANGELOG.md](CHANGELOG.md).

## Licensing of contributions

Under the CLA, your contribution stays available under the project's public licenses: CC BY-NC 4.0 for data and documentation, MIT for code and schema. Aether Forge may also include it in commercial licenses, which fund further work. See [LICENSE](LICENSE) and [COMMERCIAL-USE.md](COMMERCIAL-USE.md).

## Contact

Open an issue, or email Aether Forge at <NameAppliedFor@gmail.com>.
