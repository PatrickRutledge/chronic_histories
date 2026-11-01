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
