# Modern date-shifting policy

Policy identifier: `HR-DATE-SHIFT-1`

The historical record and the synthetic clinical episode are separate timelines. Historical dates are never overwritten or mechanically converted into modern dates.

## Rules

1. Preserve actual or approximate historical dates in `historical_timeline` with their precision and calendar.
2. Record conflicting historical dates as alternative assertions with citations and a resolution status.
3. Select an index age that serves the teaching objective. The choice is editorial and must be documented.
4. Select a modern index date that is not in the future at publication time.
5. Calculate the synthetic year of birth so the patient has exactly the selected age on the index date.
6. Preserve the preferred historical month and day when they are known. If the resulting birthday has not occurred by the index date, subtract one additional year.
7. For February 29, use February 28 in a non-leap synthetic birth year and record the adjustment.
8. Do not create a synthetic date of birth before 1901. If the selected age would require an earlier date, reduce the index age or select a later supported system window.
9. Generate clinical visits relative to the index date: baseline, approximately six weeks, and approximately three months unless the case requires another clinically justified schedule.
10. Every shifted or generated clinical date is evidence grade `S`. It must never be presented as a historical event.
11. The true birth and death dates remain in the case manifest and review page but are not placed in the modern EHR patient-date fields.
12. The transformation must be deterministic: the same case version, index date, and index age produce the same synthetic dates.

## Calculation

Let `candidate_year = index_year - index_age`.

Construct a birthday using the preferred historical month and day in `candidate_year`. If that birthday is after the index date, use `candidate_year - 1`.

Verify:

```text
age(index_date, synthetic_dob) = index_age
synthetic_dob >= 1901-01-01
all synthetic encounter dates <= publication cutoff
```

## Audie Murphy pilot

- Preferred historical birth date: 1924-06-20
- Historical roster alternative: 1925
- Index age: 40
- Index date: 2026-06-30
- Synthetic date of birth: 1986-06-20
- Planned visits: 2026-06-30, 2026-08-11, and 2026-09-30

The shifted date is an EHR-testing value, not a claim about Murphy's life.

## True-date distribution

The canonical case stores the synthetic episode only in the modern frame. A true-date distribution is derived from it, not stored separately.

- Offset in whole years: `shift = synthetic_birth_year - true_birth_year`. Murphy's is 62, so the index visit 2026-06-30 becomes 1964-06-30 at the same age of 40.
- Every synthetic date moves back by `shift` years with month and day unchanged. February 29 maps to February 28 in a non-leap target year.
- Historical dates, including past medical history and family history, are already true and are not moved.
- A whole-year shift is exact only when the synthetic birthday keeps the true month and day, so `validate_case.ps1` enforces that rule for day-precision birth dates.
- Coded content stays modern. A 1964 PCL-5 score or Tdap dose is anachronistic, as the original project instruction anticipated, so the true-date distribution must be labeled as such.
- Record metadata stays real: provenance timestamps, terminology validation dates, source access dates, code-system versions, and guideline years record when the dataset was made.
- Entries graded `D` or `R` are already true and are not moved.
- The derived case gets its own case ID and MRN with the suffix `-TD`, for example `HR-NI001-TD` and `HR-NI001-SYN-TD`, so both frames can be loaded into one system without colliding.
- Every output carries the notice: "True-date frame: synthetic events are moved into the patient's historical lifetime. Codes, instruments, and treatments remain modern and are anachronistic." HTML shows it under the banner, notes in their header, the C-CDA in its title, and the FHIR bundle as a `meta.tag`.

### Generation

`scripts/build.ps1` derives the variant on every build with `scripts/derive_true_date_case.mjs` and renders it into `generated/true-date/` with the same generators. The directory holds the derived `case.json`, HTML, FHIR, C-CDA, notes, and provenance CSV, and is covered by the build manifest.

The derivation fails if:

- a full ISO date appears in a synthetic field it does not know how to shift, so a new date field cannot stay in the modern frame unnoticed,
- the shifted birth date differs from the true birth date when that is known to the day,
- a shifted visit falls after the true death date, or
- any generated true-date file still contains one of the original modern synthetic dates.

Formal C-CDA and US Core validation runs on the modern frame only. The true-date files use the same templates and differ only in dates, identifiers, and the notice.

### Patients born before 1 CE

Historical dates before 1 CE use signed astronomical years: `-0099` is 100 BC and `0000` is 1 BC. Scripts read a year as a signed number, never as the first four characters. C-CDA (TS) and FHIR (`date`) cannot carry a year before 1, so a patient born before 1 CE has no true-date variant: the build skips `generated/true-date/`, the build manifest omits it, and the review page says why. The modern record, the synthetic birth date rule (1901 or later) and every other check are unchanged.

## Historical content in modern records

Past medical history and family history describe the real person and real relatives. They carry their true historical dates in narrative form and must be graded `D` or `R` with linked claims. They are never synthesized, and their dates never enter coded entries in the modern frame.
