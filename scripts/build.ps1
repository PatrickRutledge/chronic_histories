# Builds and checks cases. Stops at the first failing step, so a crashed generator can
# never leave earlier outputs in place to be checked.
#   pwsh -File scripts/build.ps1                     # every pilot and test fixture
#   pwsh -File scripts/build.ps1 -CaseDirectory pilots/HR-ET007-audie-murphy
#   pwsh -File scripts/build.ps1 -Conformance        # also run formal validation (slow, needs network)
[CmdletBinding()]
param(
    [string[]]$CaseDirectory,
    [switch]$Conformance
)

$ErrorActionPreference = 'Stop'
$repoRoot = Split-Path -Parent $PSScriptRoot
. (Join-Path $PSScriptRoot 'lib\common.ps1')

if (-not $CaseDirectory) { $CaseDirectory = Get-AllCaseDirectories $repoRoot }
$generators = 'generate_case_outputs.mjs', 'generate_ccda.mjs', 'generate_supporting_docs.mjs'

foreach ($directory in $CaseDirectory) {
    $caseDir = (Resolve-Path -LiteralPath $directory).Path
    $casePath = Join-Path $caseDir 'case.json'
    Write-Host "== $(Split-Path -Leaf $caseDir)"

    # Remove previous outputs first: a generator that fails cannot leave stale files behind.
    $generatedDir = Join-Path $caseDir 'generated'
    $manifestPath = Join-Path $generatedDir 'build-manifest.json'
    Remove-Item -LiteralPath $manifestPath -ErrorAction SilentlyContinue
    foreach ($relative in Get-GeneratedFiles $caseDir) {
        Remove-Item -LiteralPath (Join-Path $caseDir $relative) -ErrorAction SilentlyContinue
    }

    foreach ($generator in $generators) {
        $output = & node (Join-Path $PSScriptRoot $generator) $casePath 2>&1
        if ($LASTEXITCODE -ne 0) {
            $output | ForEach-Object { Write-Host "  $_" }
            throw "$generator failed for $caseDir"
        }
    }

    # True-date variant: derive the case, render it with the same generators, and confirm that
    # no modern synthetic date survived.
    $trueDateDir = Join-Path $generatedDir 'true-date'
    Remove-Item -Recurse -Force -LiteralPath $trueDateDir -ErrorAction SilentlyContinue
    $trueDateCase = Join-Path $trueDateDir 'case.json'
    $steps = @(, @('derive_true_date_case.mjs', $casePath, $trueDateCase)) +
        @($generators | ForEach-Object { , @($_, $trueDateCase, $trueDateDir) }) +
        @(, @('derive_true_date_case.mjs', '--verify', $casePath, $trueDateDir))
    foreach ($step in $steps) {
        $output = & node (Join-Path $PSScriptRoot $step[0]) @($step | Select-Object -Skip 1) 2>&1
        if ($LASTEXITCODE -ne 0) {
            $output | ForEach-Object { Write-Host "  $_" }
            throw "$($step[0]) failed for the true-date variant of $caseDir"
        }
    }

    $outputs = [ordered]@{}
    foreach ($relative in Get-GeneratedFiles $caseDir) {
        $outputs[$relative] = Get-NormalizedSha256 (Join-Path $caseDir $relative)
    }
    [ordered]@{
        CaseSha256 = Get-NormalizedSha256 $casePath
        Outputs    = $outputs
    } | ConvertTo-Json -Depth 5 | Set-Content -LiteralPath $manifestPath

    if ($Conformance) {
        & pwsh -NoProfile -File (Join-Path $PSScriptRoot 'run_conformance.ps1') -CaseDirectory $caseDir | Out-Host
        if ($LASTEXITCODE -ne 0) { throw "Conformance failed for $caseDir" }
    }
    & pwsh -NoProfile -File (Join-Path $PSScriptRoot 'validate_case.ps1') -CaseDirectory $caseDir | Out-Host
    if ($LASTEXITCODE -ne 0) { throw "Local checks failed for $caseDir" }
}
# The dataset manifest summarizes every pilot, so refresh it after any build.
& node (Join-Path $PSScriptRoot 'generate_dataset_manifest.mjs') | Out-Host
if ($LASTEXITCODE -ne 0) { throw 'generate_dataset_manifest.mjs failed' }
Write-Host "Build succeeded for $(@($CaseDirectory).Count) case(s)."
