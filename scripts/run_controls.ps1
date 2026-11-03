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

    $dir = New-ControlCase 'ssn' { param($c) Add-SocialText $c 'Identifier 123-45-6789' }
    Assert-Control 'Social Security number' (Invoke-Script $build @('-CaseDirectory', $dir)) 'Possible Social Security number'

    $dir = New-ControlCase 'phone' { param($c) Add-SocialText $c 'Call 503-867-5309' }
    Assert-Control 'non-fictional phone number' (Invoke-Script $build @('-CaseDirectory', $dir)) 'Phone number outside the fictional'

    $dir = New-ControlCase 'npi' { param($c) Add-SocialText $c 'Prescriber 1234567893' }
    Assert-Control 'valid-format NPI' (Invoke-Script $build @('-CaseDirectory', $dir)) 'Valid-format NPI'

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
