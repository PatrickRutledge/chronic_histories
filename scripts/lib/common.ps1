# Shared PowerShell helpers. Dot-source: . (Join-Path $PSScriptRoot 'lib\common.ps1')

# SHA-256 of a text file with line endings normalized to LF, so a hash recorded on one
# checkout still matches after Git converts line endings on another.
function Get-NormalizedSha256([string]$Path) {
    $text = [IO.File]::ReadAllText($Path).Replace("`r`n", "`n")
    $bytes = [Text.Encoding]::UTF8.GetBytes($text)
    return [Convert]::ToHexString([Security.Cryptography.SHA256]::HashData($bytes))
}

# Generated files that the build manifest covers, relative to the case directory.
function Get-GeneratedFiles([string]$CaseDirectory) {
    $generated = Join-Path $CaseDirectory 'generated'
    $fixed = 'index.html', 'review.html', 'fhir-bundle.json', 'ccda.xml', 'ccda.html', 'provenance.csv' | ForEach-Object { "generated/$_" }
    $listed = {
        param([string]$Folder, [string]$Filter)
        @(Get-ChildItem -LiteralPath (Join-Path $CaseDirectory $Folder) -Filter $Filter -File -ErrorAction SilentlyContinue |
            Sort-Object Name | ForEach-Object { "$Folder/$($_.Name)" })
    }
    # True-date variant, derived from the modern case (docs/date-shifting.md). A patient born
    # before 1 CE has none, because C-CDA and FHIR dates cannot carry the year.
    $trueDate = if (Test-TrueDateFrameSupported (Join-Path $CaseDirectory 'case.json')) {
        @('case.json', 'index.html', 'fhir-bundle.json', 'ccda.xml', 'ccda.html', 'provenance.csv' | ForEach-Object { "generated/true-date/$_" }) +
            (& $listed 'generated/true-date/notes' '*.md') + (& $listed 'generated/true-date/ccda' '*.xml') + (& $listed 'generated/true-date/ccda' '*.html')
    } else { @() }
    return @($fixed) +
        (& $listed 'generated/notes' '*.md') + (& $listed 'generated/ccda' '*.xml') + (& $listed 'generated/ccda' '*.html') +
        $trueDate
}

# Historical ISO dates may carry a sign (astronomical year numbering: -0099 is 100 BC). Read the
# year as a number, never as the first four characters.
function Get-IsoYear([string]$Iso) { return [int]([regex]::Match($Iso, '^-?\d+').Value) }

# Orders two ISO dates of any precision: by year as a number, then by month and day.
function Compare-IsoDate([string]$A, [string]$B) {
    $byYear = (Get-IsoYear $A) - (Get-IsoYear $B)
    if ($byYear -ne 0) { return [math]::Sign($byYear) }
    return [string]::CompareOrdinal(($A -replace '^-?\d+', ''), ($B -replace '^-?\d+', ''))
}

# A true-date variant needs a true birth year of 1 CE or later (see scripts/lib/common.mjs).
function Test-TrueDateFrameSupported([string]$CasePath) {
    # An unreadable case counts as supported, so stale true-date outputs are still listed and
    # removed, and the generators report the real error.
    try {
        $case = Get-Content -Raw -LiteralPath $CasePath -ErrorAction Stop | ConvertFrom-Json -ErrorAction Stop
        return (Get-IsoYear $case.identity.historical_dates.birth.preferred.iso) -ge 1
    } catch { return $true }
}

# Every case in the repository: pilots and test fixtures.
function Get-AllCaseDirectories([string]$RepoRoot) {
    return @('pilots', 'cases', 'tests\fixtures') | ForEach-Object { Join-Path $RepoRoot $_ } |
        Where-Object { Test-Path -LiteralPath $_ } |
        ForEach-Object { Get-ChildItem -LiteralPath $_ -Directory } |
        Where-Object { Test-Path -LiteralPath (Join-Path $_.FullName 'case.json') } |
        ForEach-Object FullName
}
