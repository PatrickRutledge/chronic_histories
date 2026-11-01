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
$notesPath = Join-Path $CaseDirectory 'generated\notes'
$provenancePath = Join-Path $CaseDirectory 'generated\provenance.csv'

foreach ($required in @($casePath, $schemaPath, $fhirPath, $ccdaPath)) {
    if (-not (Test-Path -LiteralPath $required)) {
        throw "Missing required file: $required"
    }
}
if (-not (Test-Path -LiteralPath $notesPath)) { throw "Missing notes directory: $notesPath" }
if (-not (Test-Path -LiteralPath $provenancePath)) { throw "Missing provenance file: $provenancePath" }

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
foreach ($set in $case.clinical.vital_sign_sets) {
    $map = @{}; foreach ($measurement in $set.measurements) { $map[$measurement.code] = [double]$measurement.value }
    foreach ($requiredCode in @('8302-2','29463-7','39156-5','8480-6','8462-4','8867-4','9279-1','8310-5','59408-5')) {
        if (-not $map.ContainsKey($requiredCode)) { $errors.Add("Vital set $($set.id) missing LOINC $requiredCode") }
    }
    if ($map.ContainsKey('8302-2') -and $map.ContainsKey('29463-7') -and $map.ContainsKey('39156-5')) {
        $calculatedBmi = $map['29463-7'] / [math]::Pow($map['8302-2'] / 100, 2)
        if ([math]::Abs($calculatedBmi - $map['39156-5']) -gt 0.2) { $errors.Add("BMI mismatch in $($set.id)") }
    }
    if ($map['8480-6'] -le $map['8462-4']) { $errors.Add("Invalid blood pressure in $($set.id)") }
    if ($map['59408-5'] -lt 70 -or $map['59408-5'] -gt 100) { $errors.Add("Invalid oxygen saturation in $($set.id)") }
}
if ($case.clinical.safety_assessment.provenance.evidence_grade -ne 'S') { $errors.Add('Safety assessment must be synthetic') }

$fhirCounts = @{}
foreach ($entry in $fhir.entry) {
    $type = $entry.resource.resourceType
    if (-not $fhirCounts.ContainsKey($type)) { $fhirCounts[$type] = 0 }
    $fhirCounts[$type]++
}
if ($fhirCounts.Patient -ne 1) { $errors.Add('FHIR bundle must contain one Patient') }
if ($fhirCounts.Condition -ne $case.clinical.problems.Count) { $errors.Add('FHIR Condition count differs from canonical problems') }
$expectedFhirObservations = $case.clinical.observations.Count + ($case.clinical.vital_sign_sets.measurements | Measure-Object).Count + $case.clinical.social_history.Count + $case.clinical.functional_status.Count + $case.clinical.mental_status.Count + 1
if ($fhirCounts.Observation -ne $expectedFhirObservations) { $errors.Add("FHIR Observation count differs from canonical observations: expected $expectedFhirObservations, found $($fhirCounts.Observation)") }
if ($fhirCounts.Encounter -ne $case.clinical.encounters.Count) { $errors.Add('FHIR Encounter count differs from canonical encounters') }
if ($fhirCounts.Goal -ne $case.care_plan.goals.Count) { $errors.Add('FHIR Goal count differs from canonical goals') }

$ns = [Xml.XmlNamespaceManager]::new($ccda.NameTable)
$ns.AddNamespace('cda', 'urn:hl7-org:v3')
$ccdaProblems = $ccda.SelectNodes('//cda:section[cda:code[@code="11450-4"]]//cda:observation', $ns).Count
$ccdaResults = $ccda.SelectNodes('//cda:section[cda:code[@code="30954-2"]]//cda:observation', $ns).Count
$ccdaEncounters = $ccda.SelectNodes('//cda:section[cda:code[@code="46240-8"]]//cda:encounter', $ns).Count
$ccdaVitals = $ccda.SelectNodes('//cda:section[cda:code[@code="8716-3"]]//cda:observation', $ns).Count
if ($ccdaProblems -ne $case.clinical.problems.Count) { $errors.Add('C-CDA problem count differs from canonical problems') }
if ($ccdaResults -ne $case.clinical.observations.Count) { $errors.Add('C-CDA result count differs from canonical observations') }
if ($ccdaEncounters -ne $case.clinical.encounters.Count) { $errors.Add('C-CDA encounter count differs from canonical encounters') }
$expectedVitals = ($case.clinical.vital_sign_sets.measurements | Measure-Object).Count
if ($ccdaVitals -ne $expectedVitals) { $errors.Add("C-CDA vital-sign count differs from canonical vital signs: expected $expectedVitals, found $ccdaVitals") }

$noteFiles = @(Get-ChildItem -LiteralPath $notesPath -Filter '*.md' -File)
if ($noteFiles.Count -ne 8) { $errors.Add("Expected 8 supporting documents; found $($noteFiles.Count)") }
foreach ($noteFile in $noteFiles) {
    $noteText = Get-Content -Raw -LiteralPath $noteFile.FullName
    if ($noteText -notmatch [regex]::Escape($case.record_classification.banner)) { $errors.Add("Missing synthetic banner: $($noteFile.Name)") }
    if ($noteText -notmatch [regex]::Escape($case.identity.display_name) -and $noteFile.Name -ne 'teaching-note.md') { $errors.Add("Missing patient name: $($noteFile.Name)") }
}
$allNoteText = ($noteFiles | ForEach-Object { Get-Content -Raw -LiteralPath $_.FullName }) -join "`n"
foreach ($visit in $case.synthetic_episode.visit_schedule) {
    if ($allNoteText -notmatch [regex]::Escape($visit.date)) { $errors.Add("Visit date missing from supporting documents: $($visit.date)") }
}
foreach ($observation in $case.clinical.observations) {
    $expected = [string]$observation.value
    if ($allNoteText -notmatch "\b$([regex]::Escape($expected))\b") { $errors.Add("Observation value missing from supporting documents: $($observation.id)") }
}
$provenanceRows = @(Import-Csv -LiteralPath $provenancePath)
if ($provenanceRows.Count -lt ($case.claims.Count + $case.clinical.problems.Count + $case.clinical.observations.Count)) { $errors.Add('Provenance CSV has fewer rows than required core elements') }

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
    CcdaVitalSignEntries = $ccdaVitals
    SupportingDocuments = $noteFiles.Count
    ProvenanceRows = $provenanceRows.Count
    SchematronValidation = 'NOT RUN'
} | Format-List
