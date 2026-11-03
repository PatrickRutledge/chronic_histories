# Runs formal conformance validation for one case and writes reports to
# <case>/generated/conformance/. Exit code 1 when any error-level finding exists.
# Stages: CDA XSD -> C-CDA R2.1 Schematron (errors, warnings) -> FHIR base R4 -> US Core.
[CmdletBinding()]
param(
    [Parameter(Mandatory = $true)][string]$CaseDirectory,
    [switch]$SkipFhir,
    [string]$UsCoreVersion = '6.1.0'
)

$ErrorActionPreference = 'Stop'
$repoRoot = Split-Path -Parent $PSScriptRoot
. (Join-Path $PSScriptRoot 'lib\common.ps1')
$tools = Join-Path $repoRoot '.work\validators'
$saxon = Join-Path $tools 'saxon\saxon-he.jar'
$fhirJar = Join-Path $tools 'fhir\validator_cli.jar'
$xsd = Join-Path $tools 'cda-schema\infrastructure\cda\CDA_SDTC.xsd'
foreach ($required in $saxon, $fhirJar, $xsd) {
    if (-not (Test-Path -LiteralPath $required)) { throw "Missing $required. Run scripts/install_validators.ps1." }
}

$caseDir = (Resolve-Path -LiteralPath $CaseDirectory).Path
$ccda = Join-Path $caseDir 'generated\ccda.xml'
$bundle = Join-Path $caseDir 'generated\fhir-bundle.json'
$reports = Join-Path $caseDir 'generated\conformance'
New-Item -ItemType Directory -Force -Path $reports | Out-Null

function Get-Xsd-Errors([string]$Instance, [string]$SchemaPath) {
    $settings = [Xml.XmlReaderSettings]::new()
    $settings.ValidationType = [Xml.ValidationType]::Schema
    $settings.DtdProcessing = [Xml.DtdProcessing]::Ignore
    $settings.XmlResolver = [Xml.XmlUrlResolver]::new()
    $settings.Schemas.XmlResolver = [Xml.XmlUrlResolver]::new()
    [void]$settings.Schemas.Add('urn:hl7-org:v3', $SchemaPath)
    $found = [System.Collections.Generic.List[string]]::new()
    $settings.add_ValidationEventHandler({
        param($sender, $e)
        if ($e.Severity -eq [Xml.Schema.XmlSeverityType]::Error) {
            $found.Add("line $($e.Exception.LineNumber): $($e.Message)")
        }
    }.GetNewClosure())
    $reader = [Xml.XmlReader]::Create($Instance, $settings)
    try { while ($reader.Read()) { } } finally { $reader.Dispose() }
    return , $found
}

function Invoke-Schematron([string]$Phase, [string]$Instance, [string]$OutFile) {
    $xsl = Join-Path $tools "ccda\ccda-2.1.$Phase.xsl"
    & java -Xmx3g -cp $saxon net.sf.saxon.Transform "-s:$Instance" "-xsl:$xsl" "-o:$OutFile" 2>&1 |
        Where-Object { "$_" -notmatch 'Running an XSLT 1 stylesheet with an XSLT 2 processor' } | ForEach-Object { Write-Verbose "$_" }
    if ($LASTEXITCODE -ne 0) { throw "Schematron $Phase run failed" }
    [xml]$svrl = Get-Content -Raw -LiteralPath $OutFile
    $ns = [Xml.XmlNamespaceManager]::new($svrl.NameTable)
    $ns.AddNamespace('svrl', 'http://purl.oclc.org/dsdl/svrl')
    return [pscustomobject]@{
        Fired    = $svrl.SelectNodes('//svrl:fired-rule', $ns).Count
        Failures = @($svrl.SelectNodes('//svrl:failed-assert | //svrl:successful-report', $ns) | ForEach-Object {
            [pscustomobject]@{ Location = $_.location; Message = ($_.text -replace '\s+', ' ').Trim() }
        })
    }
}

function Invoke-Fhir([string]$BundlePath, [string[]]$Extra, [string]$OutFile) {
    Remove-Item -LiteralPath $OutFile -ErrorAction SilentlyContinue
    & java -Xmx3g -jar $fhirJar $BundlePath -version 4.0.1 @Extra -output $OutFile -output-style json 2>&1 | Out-Null
    if (-not (Test-Path -LiteralPath $OutFile)) { throw "FHIR validator produced no report: $OutFile" }
    $outcome = Get-Content -Raw -LiteralPath $OutFile | ConvertFrom-Json
    return @($outcome.issue)
}

$xsdErrors = Get-Xsd-Errors $ccda $xsd
Set-Content -LiteralPath (Join-Path $reports 'cda-xsd.txt') -Value ($xsdErrors -join "`n")

$schErrors = Invoke-Schematron 'errors' $ccda (Join-Path $reports 'schematron-errors.svrl.xml')
$schWarnings = Invoke-Schematron 'warnings' $ccda (Join-Path $reports 'schematron-warnings.svrl.xml')
if ($schErrors.Fired -eq 0) { throw 'Schematron fired no rules; the validator is not reading this document.' }

$summary = [ordered]@{
    CcdaSha256         = Get-NormalizedSha256 $ccda
    FhirSha256         = Get-NormalizedSha256 $bundle
    CdaXsdErrors       = $xsdErrors.Count
    SchematronRulesRun = $schErrors.Fired
    SchematronErrors   = $schErrors.Failures.Count
    SchematronWarnings = $schWarnings.Failures.Count
}

# Note documents (H&P, progress, referral, consultation) are validated the same way.
$noteResults = foreach ($note in @(Get-ChildItem -LiteralPath (Join-Path $caseDir 'generated\ccda') -Filter '*.xml' -File -ErrorAction SilentlyContinue | Sort-Object Name)) {
    $stem = $note.BaseName
    $noteXsd = Get-Xsd-Errors $note.FullName $xsd
    $noteErrors = Invoke-Schematron 'errors' $note.FullName (Join-Path $reports "$stem.schematron-errors.svrl.xml")
    $noteWarnings = Invoke-Schematron 'warnings' $note.FullName (Join-Path $reports "$stem.schematron-warnings.svrl.xml")
    if ($noteErrors.Fired -eq 0) { throw "Schematron fired no rules for $($note.Name)." }
    foreach ($failure in $noteErrors.Failures) { Write-Host "  $($note.Name): $($failure.Message)" }
    foreach ($xsdError in $noteXsd) { Write-Host "  $($note.Name) XSD: $xsdError" }
    [ordered]@{
        File               = "generated/ccda/$($note.Name)"
        Sha256             = Get-NormalizedSha256 $note.FullName
        CdaXsdErrors       = $noteXsd.Count
        SchematronErrors   = $noteErrors.Failures.Count
        SchematronWarnings = $noteWarnings.Failures.Count
    }
}
$summary.NoteDocuments = @($noteResults)
$summary.NoteDocumentErrors = [int](@($noteResults | ForEach-Object { $_.CdaXsdErrors + $_.SchematronErrors }) | Measure-Object -Sum).Sum

if (-not $SkipFhir) {
    # Base R4 is judged without US Core loaded, so its declared profiles are removed from a temporary copy.
    $baseBundle = Join-Path ([IO.Path]::GetTempPath()) "$([guid]::NewGuid()).json"
    (Get-Content -Raw -LiteralPath $bundle) -replace '"http://hl7\.org/fhir/us/core/StructureDefinition/[^"]+"', '"http://hl7.org/fhir/StructureDefinition/Resource"' |
        Set-Content -LiteralPath $baseBundle
    try {
        $base = Invoke-Fhir $baseBundle @() (Join-Path $reports 'fhir-r4-base.json')
    } finally { Remove-Item -LiteralPath $baseBundle -ErrorAction SilentlyContinue }
    $core = Invoke-Fhir $bundle @('-ig', "hl7.fhir.us.core#$UsCoreVersion") (Join-Path $reports 'fhir-us-core.json')
    $declared = (Select-String -LiteralPath $bundle -Pattern 'us/core/StructureDefinition/').Count
    if ($declared -eq 0) { throw 'No resource declares a US Core profile, so the US Core run would test nothing.' }
    $summary.UsCoreProfiledResources = $declared
    # A terminology-server failure (for example a timeout) means a code went unchecked, not that it is wrong.
    # It is counted on its own so it neither fails the record nor passes for a verified result.
    $isTxFailure = { param($issue) $issue.code -eq 'exception' -and "$($issue.details.text)" -match '^Error from https?://tx\.' }
    $count = { param($issues, $levels) @($issues | Where-Object { $levels -contains $_.severity -and -not (& $isTxFailure $_) }).Count }
    $summary.TerminologyUnverified = @(@($base) + @($core) | Where-Object { & $isTxFailure $_ }).Count
    $summary.FhirBaseErrors = & $count $base @('error', 'fatal')
    $summary.FhirBaseWarnings = & $count $base @('warning')
    $summary.UsCoreErrors = & $count $core @('error', 'fatal')
    $summary.UsCoreWarnings = & $count $core @('warning')
}

[pscustomobject]$summary | ConvertTo-Json -Depth 5 | Set-Content -LiteralPath (Join-Path $reports 'summary.json')
[pscustomobject]$summary | Select-Object * -ExcludeProperty NoteDocuments | Format-List
$summary.NoteDocuments | ForEach-Object { '{0}: XSD {1}, Schematron {2} errors, {3} warnings' -f $_.File, $_.CdaXsdErrors, $_.SchematronErrors, $_.SchematronWarnings }

$failed = $summary.CdaXsdErrors + $summary.SchematronErrors + $summary.NoteDocumentErrors + [int]$summary.FhirBaseErrors + [int]$summary.UsCoreErrors
if ($failed -gt 0) { exit 1 }
