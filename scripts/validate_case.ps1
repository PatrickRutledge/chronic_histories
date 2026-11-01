param(
    [Parameter(Mandatory = $true)]
    [string]$CaseDirectory
)

$ErrorActionPreference = 'Stop'
$repoRoot = Split-Path -Parent $PSScriptRoot
$casePath = Join-Path $CaseDirectory 'case.json'
$schemaPath = Join-Path $repoRoot 'schema\case.schema.json'
$fhirPath = Join-Path $CaseDirectory 'generated\fhir-bundle.json'
$ccdaPath = Join-Path $CaseDirectory 'generated\ccda.xml'

foreach ($required in @($casePath, $schemaPath, $fhirPath, $ccdaPath)) {
    if (-not (Test-Path -LiteralPath $required)) {
        throw "Missing required file: $required"
    }
}

$caseText = Get-Content -Raw -LiteralPath $casePath
if (-not ($caseText | Test-Json -SchemaFile $schemaPath)) {
    throw 'Canonical JSON failed schema validation.'
}
$case = $caseText | ConvertFrom-Json
$fhir = Get-Content -Raw -LiteralPath $fhirPath | ConvertFrom-Json
[xml]$ccda = Get-Content -Raw -LiteralPath $ccdaPath

$errors = [System.Collections.Generic.List[string]]::new()
$sourceIds = @($case.sources.source_id)
$claimIds = @($case.claims.claim_id)

foreach ($claim in $case.claims) {
    foreach ($link in $claim.source_links) {
        if ($sourceIds -notcontains $link.source_id) {
            $errors.Add("Claim $($claim.claim_id) references missing source $($link.source_id)")
        }
    }
}
foreach ($event in $case.historical_timeline) {
    foreach ($claimId in $event.claim_ids) {
        if ($claimIds -notcontains $claimId) {
            $errors.Add("Timeline event $($event.event_id) references missing claim $claimId")
        }
    }
}

$dob = [datetime]$case.identity.synthetic_identity.date_of_birth
$indexDate = [datetime]$case.synthetic_episode.index_date
$age = $indexDate.Year - $dob.Year
if ($indexDate -lt $dob.AddYears($age)) { $age-- }
if ($age -ne $case.synthetic_episode.index_age) { $errors.Add("Index age mismatch: calculated $age") }
if ($dob -lt [datetime]'1901-01-01') { $errors.Add('Synthetic DOB is before 1901-01-01') }

foreach ($visit in $case.synthetic_episode.visit_schedule) {
    if ([datetime]$visit.date -gt [datetime]'2026-11-01') { $errors.Add("Future visit: $($visit.date)") }
}
foreach ($observation in $case.clinical.observations) {
    if ($observation.provenance.evidence_grade -ne 'S') { $errors.Add("Non-synthetic generated observation: $($observation.id)") }
    if ($observation.coding[0].code -eq '101698-9' -and ($observation.value -lt 0 -or $observation.value -gt 80)) { $errors.Add("PCL-5 out of range: $($observation.id)") }
    if ($observation.coding[0].code -eq '44261-6' -and ($observation.value -lt 0 -or $observation.value -gt 27)) { $errors.Add("PHQ-9 out of range: $($observation.id)") }
}

$fhirCounts = @{}
foreach ($entry in $fhir.entry) {
    $type = $entry.resource.resourceType
    if (-not $fhirCounts.ContainsKey($type)) { $fhirCounts[$type] = 0 }
    $fhirCounts[$type]++
}
if ($fhirCounts.Patient -ne 1) { $errors.Add('FHIR bundle must contain one Patient') }
if ($fhirCounts.Condition -ne $case.clinical.problems.Count) { $errors.Add('FHIR Condition count differs from canonical problems') }
if ($fhirCounts.Observation -ne $case.clinical.observations.Count) { $errors.Add('FHIR Observation count differs from canonical observations') }
if ($fhirCounts.Encounter -ne $case.clinical.encounters.Count) { $errors.Add('FHIR Encounter count differs from canonical encounters') }
if ($fhirCounts.Goal -ne $case.care_plan.goals.Count) { $errors.Add('FHIR Goal count differs from canonical goals') }

$ns = [Xml.XmlNamespaceManager]::new($ccda.NameTable)
$ns.AddNamespace('cda', 'urn:hl7-org:v3')
$ccdaProblems = $ccda.SelectNodes('//cda:section[cda:code[@code="11450-4"]]//cda:observation', $ns).Count
$ccdaResults = $ccda.SelectNodes('//cda:section[cda:code[@code="30954-2"]]//cda:observation', $ns).Count
$ccdaEncounters = $ccda.SelectNodes('//cda:section[cda:code[@code="46240-8"]]//cda:encounter', $ns).Count
if ($ccdaProblems -ne $case.clinical.problems.Count) { $errors.Add('C-CDA problem count differs from canonical problems') }
if ($ccdaResults -ne $case.clinical.observations.Count) { $errors.Add('C-CDA result count differs from canonical observations') }
if ($ccdaEncounters -ne $case.clinical.encounters.Count) { $errors.Add('C-CDA encounter count differs from canonical encounters') }

if ($errors.Count -gt 0) {
    $errors | ForEach-Object { Write-Error $_ }
    exit 1
}

[pscustomobject]@{
    CaseId = $case.case_id
    JsonSchema = 'PASS'
    AgeAndDates = 'PASS'
    ProvenanceLinks = 'PASS'
    FhirResources = $fhir.entry.Count
    CcdaSections = $ccda.SelectNodes('//cda:section', $ns).Count
    CcdaProblemEntries = $ccdaProblems
    CcdaResultEntries = $ccdaResults
    CcdaEncounterEntries = $ccdaEncounters
    SchematronValidation = 'NOT RUN'
} | Format-List
