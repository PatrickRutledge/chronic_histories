# Negative controls: each breaks a temporary copy of the code-path fixture in one way and
# requires the checks to fail with the expected message. A check that stops firing makes
# its control fail. Run after any change to the build, generators, or validators.
#   pwsh -File scripts/run_controls.ps1                # local controls (about a minute)
#   pwsh -File scripts/run_controls.ps1 -Conformance   # also C-CDA and US Core controls (slow, needs network)
[CmdletBinding()]
param([switch]$Conformance)

$ErrorActionPreference = 'Stop'
$repoRoot = Split-Path -Parent $PSScriptRoot
$fixture = Join-Path $repoRoot 'tests\fixtures\HR-TST001-code-paths\case.json'
$build = Join-Path $PSScriptRoot 'build.ps1'
$validate = Join-Path $PSScriptRoot 'validate_case.ps1'
$conformanceScript = Join-Path $PSScriptRoot 'run_conformance.ps1'
$workRoot = Join-Path ([IO.Path]::GetTempPath()) "hr-controls-$([guid]::NewGuid())"
$results = [System.Collections.Generic.List[object]]::new()

function New-ControlCase([string]$Name, [scriptblock]$EditCase) {
    $dir = Join-Path $workRoot $Name
    New-Item -ItemType Directory -Force -Path $dir | Out-Null
    $case = Get-Content -Raw -LiteralPath $fixture | ConvertFrom-Json -Depth 100
    if ($EditCase) { & $EditCase $case }
    $case | ConvertTo-Json -Depth 100 | Set-Content -LiteralPath (Join-Path $dir 'case.json')
    return $dir
}
function Invoke-Script([string]$Script, [string[]]$Arguments) {
    $output = & pwsh -NoProfile -File $Script @Arguments 2>&1 | Out-String
    return [pscustomobject]@{ Exit = $LASTEXITCODE; Output = $output }
}
function Assert-Control([string]$Name, $Run, [string]$Expected, [scriptblock]$Extra) {
    $ok = $Run.Exit -ne 0 -and $Run.Output -match $Expected
    $detail = if ($Run.Exit -eq 0) { 'checks passed; the defect was not caught' } elseif (-not ($Run.Output -match $Expected)) { "failed without the expected message: $Expected" } else { 'caught' }
    if ($ok -and $Extra) { $extraResult = & $Extra; if ($extraResult) { $ok = $false; $detail = $extraResult } }
    $results.Add([pscustomobject]@{ Control = $Name; Result = $(if ($ok) { 'PASS' } else { 'FAIL' }); Detail = $detail })
}
function Add-SocialText($case, [string]$Text) { $case.clinical.social_history[0].display = "$($case.clinical.social_history[0].display). $Text" }

try {
    # The unmodified copy must build cleanly, or every other control proves nothing.
    $baseline = New-ControlCase 'baseline' $null
    $run = Invoke-Script $build @('-CaseDirectory', $baseline)
    $results.Add([pscustomobject]@{ Control = 'baseline builds'; Result = $(if ($run.Exit -eq 0) { 'PASS' } else { 'FAIL' }); Detail = $(if ($run.Exit -eq 0) { 'clean' } else { $run.Output.Trim() }) })

    $firstManifest = Get-Content -Raw (Join-Path $baseline 'generated\build-manifest.json')
    $run = Invoke-Script $build @('-CaseDirectory', $baseline)
    $same = $run.Exit -eq 0 -and $firstManifest -eq (Get-Content -Raw (Join-Path $baseline 'generated\build-manifest.json'))
    $results.Add([pscustomobject]@{ Control = 'rebuild is byte-identical'; Result = $(if ($same) { 'PASS' } else { 'FAIL' }); Detail = $(if ($same) { 'identical' } else { 'outputs differ between builds' }) })

    $dir = New-ControlCase 'stale' $null
    [void](Invoke-Script $build @('-CaseDirectory', $dir))
    $case = Get-Content -Raw (Join-Path $dir 'case.json') | ConvertFrom-Json -Depth 100
    $case.clinical.vital_sign_sets[0].measurements[0].value = 170
    $case | ConvertTo-Json -Depth 100 | Set-Content (Join-Path $dir 'case.json')
    Assert-Control 'case edited after build' (Invoke-Script $validate @('-CaseDirectory', $dir)) 'Outputs are stale'

    $dir = New-ControlCase 'tampered' $null
    [void](Invoke-Script $build @('-CaseDirectory', $dir))
    Add-Content -LiteralPath (Join-Path $dir 'generated\notes\hp.md') -Value 'Hand edit.'
    Assert-Control 'generated note edited by hand' (Invoke-Script $validate @('-CaseDirectory', $dir)) 'Output changed since the last build: generated/notes/hp.md'

    $dir = New-ControlCase 'crash' $null
    [void](Invoke-Script $build @('-CaseDirectory', $dir))
    Set-Content -LiteralPath (Join-Path $dir 'case.json') -Value '{ "not": "a case" '
    Assert-Control 'generator crash' (Invoke-Script $build @('-CaseDirectory', $dir)) 'generate_case_outputs\.mjs failed' {
        if (Test-Path -LiteralPath (Join-Path $dir 'generated\ccda.xml')) { 'earlier outputs survived the failed build' }
    }

    $dir = New-ControlCase 'leak' { param($c) Add-SocialText $c 'Seen with Audie Leon Murphy' }
    Assert-Control 'another case''s patient name' (Invoke-Script $build @('-CaseDirectory', $dir)) "contains 'Audie Leon Murphy' from case HR-ET007"

    # A figure the record names on purpose (identity.historical_mentions) is allowed; that case's MRN never is.
    $addMention = { param($c) $c.identity | Add-Member -Force -NotePropertyName historical_mentions -NotePropertyValue @('HR-ET007') }
    $dir = New-ControlCase 'mention' { param($c) & $addMention $c; Add-SocialText $c 'Seen with Audie Leon Murphy' }
    $run = Invoke-Script $build @('-CaseDirectory', $dir)
    $results.Add([pscustomobject]@{ Control = 'figure named on purpose in documented history'; Result = $(if ($run.Exit -eq 0) { 'PASS' } else { 'FAIL' }); Detail = $(if ($run.Exit -eq 0) { 'not flagged' } else { 'flagged as leakage' }) })
    $dir = New-ControlCase 'mention-mrn' { param($c) & $addMention $c; Add-SocialText $c 'Records filed under HR-ET007-SYN' }
    Assert-Control 'MRN of a figure named on purpose' (Invoke-Script $build @('-CaseDirectory', $dir)) "contains 'HR-ET007-SYN' from case HR-ET007"

    # The reverse: ordinary words that contain another case's alias ("Ike", "Cash", "Grant") must not trip the check.
    $dir = New-ControlCase 'no-leak' { param($c) Add-SocialText $c 'Likely to hike, cash a check, or grant a favor' }
    $run = Invoke-Script $build @('-CaseDirectory', $dir)
    $results.Add([pscustomobject]@{ Control = 'ordinary words that contain an alias'; Result = $(if ($run.Exit -eq 0) { 'PASS' } else { 'FAIL' }); Detail = $(if ($run.Exit -eq 0) { 'not flagged' } else { 'flagged as leakage' }) })

    $dir = New-ControlCase 'ssn' { param($c) Add-SocialText $c 'Identifier 123-45-6789' }
    Assert-Control 'Social Security number' (Invoke-Script $build @('-CaseDirectory', $dir)) 'Possible Social Security number'

    $dir = New-ControlCase 'issued-ssn' { param($c) $c.identity.synthetic_identity.ssn = '123-45-6789' }
    Assert-Control 'case SSN outside the never-issued 000 area' (Invoke-Script $build @('-CaseDirectory', $dir)) 'schema validation'

    $dir = New-ControlCase 'phone' { param($c) Add-SocialText $c 'Call 503-867-5309' }
    Assert-Control 'non-fictional phone number' (Invoke-Script $build @('-CaseDirectory', $dir)) 'Phone number outside the fictional'

    $dir = New-ControlCase 'npi' { param($c) Add-SocialText $c 'Prescriber 1234567893' }
    Assert-Control 'valid-format NPI' (Invoke-Script $build @('-CaseDirectory', $dir)) 'Valid-format NPI'

    # The reverse: a ten-digit SNOMED CT code that happens to pass the NPI check digit is terminology, not an identifier.
    $dir = New-ControlCase 'snomed-not-npi' { param($c) $c.clinical.procedures[0].coding[0].code = '1356786008'; $c.clinical.procedures[0].coding[0].display = 'Magnetic resonance imaging of heart' }
    $run = Invoke-Script $build @('-CaseDirectory', $dir)
    $results.Add([pscustomobject]@{ Control = 'ten-digit SNOMED code that passes the NPI check digit'; Result = $(if ($run.Output -notmatch 'Valid-format NPI') { 'PASS' } else { 'FAIL' }); Detail = $(if ($run.Output -notmatch 'Valid-format NPI') { 'not flagged' } else { 'flagged as an NPI' }) })

    $dir = New-ControlCase 'single-name' { param($c) $c.identity | Add-Member -Force -NotePropertyName name_parts -NotePropertyValue ([pscustomobject]@{ given = @(); family = $c.identity.display_name }) }
    $run = Invoke-Script $build @('-CaseDirectory', $dir)
    $cdaName = if ($run.Exit -eq 0) { [regex]::Match((Get-Content -Raw -LiteralPath (Join-Path $dir 'generated/ccda.xml')), '<patient>\s*<name[^>]*>(.*?)</name>').Groups[1].Value } else { '' }
    $singleOk = $run.Exit -eq 0 -and $cdaName -match '^<given nullFlavor="NA"/><family>[^<]+</family>$'
    $results.Add([pscustomobject]@{ Control = 'single name with no given name'; Result = $(if ($singleOk) { 'PASS' } else { 'FAIL' }); Detail = $(if ($singleOk) { 'built; C-CDA given name is a null flavor' } elseif ($run.Exit -ne 0) { 'build failed' } else { "C-CDA name: $cdaName" }) })

    # A patient born before 1 CE (signed astronomical years: -0099 is 100 BC) builds in the modern
    # frame, reads the review-page note, and has no true-date variant.
    $dir = New-ControlCase 'before-common-era' {
        param($c)
        $h = $c.identity.historical_dates
        $h.birth.preferred.iso = '-0099-12-04'; $h.birth.preferred.display = 'December 4, 100 BC'; $h.birth.preferred.calendar = 'julian'
        $h.death.preferred.iso = '-0043-03-15'; $h.death.preferred.display = 'March 15, 44 BC'; $h.death.preferred.calendar = 'julian'
        $h.birth.alternatives = @(); $h.death.alternatives = @()
        $c.clinical.past_medical_history[0].historical_date.iso = '-0068-01-03'
        $c.historical_timeline[0].date.iso = '-0099-12-04'; $c.historical_timeline[1].date.iso = '-0069'
        $c.historical_timeline[2].date.iso = '-0068-01-03'; $c.historical_timeline[4].date.iso = '-0043-03-15'
    }
    $run = Invoke-Script $build @('-CaseDirectory', $dir)
    $review = Join-Path $dir 'generated/review.html'
    $bceOk = $run.Exit -eq 0 -and -not (Test-Path (Join-Path $dir 'generated/true-date')) -and (Test-Path $review) -and ((Get-Content -Raw -LiteralPath $review) -match 'No true-date version')
    $results.Add([pscustomobject]@{ Control = 'patient born before 1 CE'; Result = $(if ($bceOk) { 'PASS' } else { 'FAIL' }); Detail = $(if ($bceOk) { 'built; no true-date variant; review page says why' } elseif ($run.Exit -ne 0) { 'build failed' } else { 'true-date variant written or review note missing' }) })

    $dir = New-ControlCase 'grade' { param($c) $c.clinical.past_medical_history[2].provenance.evidence_grade = 'D' }
    Assert-Control 'history graded above its claims' (Invoke-Script $build @('-CaseDirectory', $dir)) 'graded D but its claims support R'

    $dir = New-ControlCase 'future-history' { param($c) $c.clinical.past_medical_history[0].historical_date.iso = '1960-01-01' }
    Assert-Control 'history dated after the index visit' (Invoke-Script $build @('-CaseDirectory', $dir)) 'after the true-frame index date'

    $dir = New-ControlCase 'synthetic-history' { param($c) $c.clinical.past_medical_history[0].provenance.evidence_grade = 'S' }
    Assert-Control 'synthetic family or past history' (Invoke-Script $build @('-CaseDirectory', $dir)) 'schema validation'

    $dir = New-ControlCase 'true-date' { param($c) Add-SocialText $c 'Next review 2026-12-01' }
    Assert-Control 'modern date the true-date variant cannot shift' (Invoke-Script $build @('-CaseDirectory', $dir)) 'Unrecognized date field'

    $dir = New-ControlCase 'release-gate' { param($c) $c.record_classification.public_release_status = 'approved' }
    Assert-Control 'approved without passed reviews' (Invoke-Script $build @('-CaseDirectory', $dir)) 'Approved for release but clinical_review'

    $dir = New-ControlCase 'no-safety' { param($c) $c.clinical.PSObject.Properties.Remove('safety_assessment') }
    Assert-Control 'behavioral-health case without a safety assessment' (Invoke-Script $build @('-CaseDirectory', $dir)) 'requires clinical.safety_assessment'

    $dir = New-ControlCase 'lab-flag' { param($c) ($c.clinical.observations | Where-Object id -eq 'OBS-ALT-001').interpretation = 'N' }
    Assert-Control 'lab flag disagrees with its reference range' (Invoke-Script $build @('-CaseDirectory', $dir)) 'Lab interpretation N disagrees'

    $dir = New-ControlCase 'lab-no-range' { param($c) ($c.clinical.observations | Where-Object id -eq 'OBS-ALT-001').PSObject.Properties.Remove('reference_range') }
    Assert-Control 'lab result without a reference range' (Invoke-Script $build @('-CaseDirectory', $dir)) 'schema validation'

    $dir = New-ControlCase 'wellness-ros' { param($c) $doc = ($c.clinical.encounters | Where-Object id -eq 'ENC-005').documentation; $doc.ros = @($doc.ros | Select-Object -First 3) }
    Assert-Control 'preventive visit reviews fewer than ten systems' (Invoke-Script $build @('-CaseDirectory', $dir)) 'review of systems covers 3 systems'

    $dir = New-ControlCase 'wellness-no-screen' { param($c) $c.clinical.observations = @($c.clinical.observations | Where-Object id -ne 'OBS-PHQ9-PREV') }
    Assert-Control 'preventive visit without a depression screen' (Invoke-Script $build @('-CaseDirectory', $dir)) 'without a same-day PHQ-2 or PHQ-9'

    $dir = New-ControlCase 'sick-undocumented' { param($c) ($c.clinical.encounters | Where-Object id -eq 'ENC-004').PSObject.Properties.Remove('documentation') }
    Assert-Control 'sick visit without full documentation' (Invoke-Script $build @('-CaseDirectory', $dir)) 'schema validation'

    $dir = New-ControlCase 'note-early-problem' { param($c) ($c.clinical.problems | Where-Object id -eq 'PRB-001') | Add-Member -NotePropertyName recorded_date -NotePropertyValue '2026-10-01' -Force }
    Assert-Control 'full note cites a problem before it was recorded' (Invoke-Script $build @('-CaseDirectory', $dir)) 'before it was recorded'

    $dir = New-ControlCase 'abated-but-active' { param($c) ($c.clinical.problems | Where-Object id -eq 'PRB-001') | Add-Member -NotePropertyName abatement_date -NotePropertyValue ($c.clinical.encounters | Where-Object id -eq 'ENC-002').date -Force }
    Assert-Control 'problem with an end date still marked active' (Invoke-Script $build @('-CaseDirectory', $dir)) 'must have clinical_status resolved'

    $dir = New-ControlCase 'plan-step-off-visit' { param($c) $c.care_plan.interventions[0] | Add-Member -NotePropertyName recorded_date -NotePropertyValue '2026-10-02' -Force }
    Assert-Control 'care-plan step dated off a visit' (Invoke-Script $build @('-CaseDirectory', $dir)) 'is not a visit date'

    $dir = New-ControlCase 'duplicate-id' { param($c) $c.clinical.observations[1].id = $c.clinical.observations[0].id }
    Assert-Control 'two results sharing one id' (Invoke-Script $build @('-CaseDirectory', $dir)) 'Duplicate id'

    # A step decided at a later visit must be left out of the intake H&P and kept in the patient care plan.
    $dir = New-ControlCase 'plan-step-later' { param($c) $c.care_plan.interventions[2] | Add-Member -NotePropertyName recorded_date -NotePropertyValue ($c.clinical.encounters | Where-Object id -eq 'ENC-002').date -Force }
    $run = Invoke-Script $build @('-CaseDirectory', $dir)
    $case = Get-Content -Raw (Join-Path $dir 'case.json') | ConvertFrom-Json -Depth 100
    $step = $case.care_plan.interventions[2].display
    $hp = Get-Content -Raw (Join-Path $dir 'generated\notes\hp.md')
    $careplan = Get-Content -Raw (Join-Path $dir 'generated\notes\careplan.md')
    $ok = $run.Exit -eq 0 -and -not $hp.Contains($step) -and $careplan.Contains($step)
    $results.Add([pscustomobject]@{ Control = 'later care-plan step left out of the intake H&P'; Result = $(if ($ok) { 'PASS' } else { 'FAIL' }); Detail = $(if ($ok) { 'omitted at intake, kept in the care plan' } elseif ($run.Exit -ne 0) { 'build failed' } else { 'step placement wrong' }) })

    $dir = New-ControlCase 'focused-unlisted-result' { param($c) $row = ($c.clinical.encounters | Where-Object id -eq 'ENC-002').documentation.monitoring[0]; $row.observation_ids = @($row.observation_ids | Where-Object { $_ -ne 'OBS-PHQ9-002' }) }
    Assert-Control 'focused visit result missing from its protocol table' (Invoke-Script $build @('-CaseDirectory', $dir)) 'is not in the protocol monitoring table'

    if ($Conformance) {
        $dir = New-ControlCase 'ccda' $null
        [void](Invoke-Script $build @('-CaseDirectory', $dir))
        $ccdaPath = Join-Path $dir 'generated\ccda.xml'
        $xml = [IO.File]::ReadAllText($ccdaPath)
        $xml = $xml.Replace('<templateId root="2.16.840.1.113883.10.20.22.2.5.1" extension="2015-08-01"/>', '').Replace('<realmCode code="US"/>', '<realmCode code="US"/><bogus/>')
        [IO.File]::WriteAllText($ccdaPath, $xml)
        $run = Invoke-Script $conformanceScript @('-CaseDirectory', $dir, '-SkipFhir')
        $summary = Get-Content -Raw (Join-Path $dir 'generated\conformance\summary.json') | ConvertFrom-Json
        Assert-Control 'C-CDA XSD and Schematron' $run 'SchematronErrors' {
            if ($summary.CdaXsdErrors -lt 1) { 'XSD did not flag the unknown element' } elseif ($summary.SchematronErrors -lt 1) { 'Schematron did not flag the missing template' }
        }

        $dir = New-ControlCase 'uscore' $null
        [void](Invoke-Script $build @('-CaseDirectory', $dir))
        $bundlePath = Join-Path $dir 'generated\fhir-bundle.json'
        $bundle = Get-Content -Raw $bundlePath | ConvertFrom-Json -Depth 100
        $bundle.entry[0].resource.PSObject.Properties.Remove('gender')
        $bundle | ConvertTo-Json -Depth 100 | Set-Content $bundlePath
        $run = Invoke-Script $conformanceScript @('-CaseDirectory', $dir)
        $summary = Get-Content -Raw (Join-Path $dir 'generated\conformance\summary.json') | ConvertFrom-Json
        Assert-Control 'US Core required element' $run 'UsCoreErrors' { if ($summary.UsCoreErrors -lt 1) { 'US Core did not flag the missing gender' } }
    }
} finally {
    Remove-Item -Recurse -Force -LiteralPath $workRoot -ErrorAction SilentlyContinue
}

$results | Format-Table -AutoSize -Wrap | Out-Host
if (@($results | Where-Object Result -ne 'PASS').Count -gt 0) { exit 1 }
