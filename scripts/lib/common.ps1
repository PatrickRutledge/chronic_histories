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
    $fixed = 'index.html', 'fhir-bundle.json', 'ccda.xml', 'provenance.csv' | ForEach-Object { "generated/$_" }
    $notes = @(Get-ChildItem -LiteralPath (Join-Path $generated 'notes') -Filter '*.md' -File -ErrorAction SilentlyContinue |
        Sort-Object Name | ForEach-Object { "generated/notes/$($_.Name)" })
    # True-date variant, derived from the modern case (docs/date-shifting.md).
    $trueDate = 'case.json', 'index.html', 'fhir-bundle.json', 'ccda.xml', 'provenance.csv' | ForEach-Object { "generated/true-date/$_" }
    $trueDateNotes = @(Get-ChildItem -LiteralPath (Join-Path $generated 'true-date
otes') -Filter '*.md' -File -ErrorAction SilentlyContinue |
        Sort-Object Name | ForEach-Object { "generated/true-date/notes/$($_.Name)" })
    return @($fixed) + $notes + $trueDate + $trueDateNotes
}

# Every case in the repository: pilots and test fixtures.
function Get-AllCaseDirectories([string]$RepoRoot) {
    return @('pilots', 'tests\fixtures') | ForEach-Object { Join-Path $RepoRoot $_ } |
        Where-Object { Test-Path -LiteralPath $_ } |
        ForEach-Object { Get-ChildItem -LiteralPath $_ -Directory } |
        Where-Object { Test-Path -LiteralPath (Join-Path $_.FullName 'case.json') } |
        ForEach-Object FullName
}
