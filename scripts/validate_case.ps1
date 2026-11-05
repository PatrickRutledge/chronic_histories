param(
    [Parameter(Mandatory = $true)]
    [string]$CaseDirectory
)

$ErrorActionPreference = 'Stop'
$repoRoot = Split-Path -Parent $PSScriptRoot
. (Join-Path $PSScriptRoot 'lib\common.ps1')
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
# Released-track cases carry an evidence dossier and terminology notes; the review page links the dossier.
$isReleaseTrack = (Split-Path -Leaf (Split-Path -Parent $CaseDirectory)) -in @('pilots', 'cases')
if ($isReleaseTrack) {
    foreach ($dossier in 'sources.md', 'terminology.md') {
        if (-not (Test-Path -LiteralPath (Join-Path $CaseDirectory $dossier))) { throw "Missing required file: $dossier" }
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

# Outputs must come from the current case.json through scripts/build.ps1.
$manifestPath = Join-Path $CaseDirectory 'generated\build-manifest.json'
if (-not (Test-Path -LiteralPath $manifestPath)) {
    $errors.Add('No build manifest; run scripts/build.ps1')
} else {
    $manifest = Get-Content -Raw -LiteralPath $manifestPath | ConvertFrom-Json
    if ($manifest.CaseSha256 -ne (Get-NormalizedSha256 $casePath)) { $errors.Add('Outputs are stale: case.json changed after the last build; run scripts/build.ps1') }
    $recorded = @($manifest.Outputs.PSObject.Properties.Name)
    $present = @(Get-GeneratedFiles $CaseDirectory)
    foreach ($relative in $present + $recorded | Sort-Object -Unique) {
        $path = Join-Path $CaseDirectory $relative
        if ($recorded -notcontains $relative) { $errors.Add("Output not produced by the last build: $relative") }
        elseif (-not (Test-Path -LiteralPath $path)) { $errors.Add("Output missing since the last build: $relative") }
        elseif ($manifest.Outputs.$relative -ne (Get-NormalizedSha256 $path)) { $errors.Add("Output changed since the last build: $relative") }
    }
}
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

# Historical items: D only when every linked claim is D, R when any is R; never S.
$claimGrade = @{}; foreach ($claim in $case.claims) { $claimGrade[$claim.claim_id] = $claim.evidence_grade }
foreach ($item in @($case.clinical.past_medical_history) + @($case.clinical.family_history)) {
    $grades = @($item.provenance.claim_ids | ForEach-Object { $claimGrade[$_] })
    if ($grades -contains $null) { $errors.Add("$($item.id) links a missing claim") }
    $expectedGrade = if ($grades -contains 'R' -or $grades -contains 'S') { 'R' } else { 'D' }
    if ($item.provenance.evidence_grade -ne $expectedGrade) { $errors.Add("$($item.id) is graded $($item.provenance.evidence_grade) but its claims support $expectedGrade") }
}

# Past medical history is history as of the index visit, so it cannot include events after
# the true-frame index date (the index date moved back by the whole-year date shift).
$shiftYears = ([datetime]$case.identity.synthetic_identity.date_of_birth).Year - [int]$case.identity.historical_dates.birth.preferred.iso.Substring(0, 4)
$trueIndex = ([datetime]$case.synthetic_episode.index_date).AddYears(-$shiftYears).ToString('yyyy-MM-dd')
foreach ($item in @($case.clinical.past_medical_history) | Where-Object { $_.historical_date.iso }) {
    if ($item.historical_date.iso -gt $trueIndex.Substring(0, $item.historical_date.iso.Length)) { $errors.Add("$($item.id) is dated $($item.historical_date.iso), after the true-frame index date $trueIndex") }
}

# Synthetic clinical dates must sit inside the modern frame: after the synthetic birth, not after the cutoff.
$syntheticDates = @($case.clinical.immunizations.date) + @($case.clinical.procedures.period.start) + @($case.clinical.procedures.period.end) + @($case.clinical.medications.start_date) + @($case.clinical.medications.end_date)
foreach ($value in $syntheticDates | Where-Object { $_ }) {
    if ([datetime]$value -lt $dob -or [datetime]$value -gt [datetime]'2026-11-01') { $errors.Add("Synthetic date outside the modern frame: $value") }
}

# A care-plan step decided later carries the date of the visit that decided it.
$visitDates = @($case.clinical.encounters.date)
foreach ($item in $case.care_plan.interventions | Where-Object { $_.PSObject.Properties['recorded_date'] }) {
    if ($visitDates -notcontains $item.recorded_date) { $errors.Add("$($item.id): recorded_date $($item.recorded_date) is not a visit date") }
}
# A problem that resolves or is superseded during the episode ends at a visit, after it was recorded.
foreach ($problem in $case.clinical.problems | Where-Object { $_.PSObject.Properties['abatement_date'] }) {
    if ($visitDates -notcontains $problem.abatement_date) { $errors.Add("$($problem.id): abatement_date $($problem.abatement_date) is not a visit date") }
    if ($problem.clinical_status -ne 'resolved') { $errors.Add("$($problem.id): a problem with abatement_date must have clinical_status resolved") }
    $start = if ($problem.recorded_date) { $problem.recorded_date } else { $case.synthetic_episode.index_date }
    if ($problem.abatement_date -le $start) { $errors.Add("$($problem.id): abatement_date must come after the problem was recorded") }
}
# Every id in the clinical record and care plan is unique: FHIR fullUrls and C-CDA entry ids derive from them.
$seenIds = @{}
function Get-NestedIds($node) {
    if ($node -is [System.Collections.IEnumerable] -and $node -isnot [string]) { foreach ($item in $node) { Get-NestedIds $item } }
    elseif ($node -is [pscustomobject]) {
        if ($node.PSObject.Properties['id'] -and $node.id -is [string]) { $node.id }
        foreach ($property in $node.PSObject.Properties) { Get-NestedIds $property.Value }
    }
}
foreach ($id in @(Get-NestedIds $case.clinical) + @(Get-NestedIds $case.care_plan)) {
    if ($seenIds.ContainsKey($id)) { if ($seenIds[$id] -eq 1) { $errors.Add("Duplicate id $id in the clinical record or care plan") }; $seenIds[$id]++ } else { $seenIds[$id] = 1 }
}

# The true-date distribution shifts the episode by whole years, so the synthetic birthday must keep the true month and day.
$trueBirth = $case.identity.historical_dates.birth.preferred
if ($trueBirth.precision -eq 'day') {
    $trueDob = [datetime]$trueBirth.iso
    $leapAdjusted = $trueDob.Month -eq 2 -and $trueDob.Day -eq 29 -and $dob.Month -eq 2 -and $dob.Day -eq 28
    if (($trueDob.Month -ne $dob.Month -or $trueDob.Day -ne $dob.Day) -and -not $leapAdjusted) { $errors.Add('Synthetic date of birth does not keep the true month and day') }
}

foreach ($visit in $case.synthetic_episode.visit_schedule) {
    if ([datetime]$visit.date -gt [datetime]'2026-11-01') { $errors.Add("Future visit: $($visit.date)") }
    $encounter = $case.clinical.encounters | Where-Object id -eq $visit.encounter_id
    if (-not $encounter) { $errors.Add("Visit without an encounter: $($visit.encounter_id)"); continue }
    if ($encounter.date -ne $visit.date) { $errors.Add("Encounter date differs from its visit: $($encounter.id)") }
}

# The referral and consultation are written for the case. Release-track records must carry them when the
# plan has a referral step; problems the consultant assesses must be known by the consultation.
$hasReferralStep = @($case.care_plan.interventions | Where-Object { $_.display -match '(consult|consultation|referral|refer)' }).Count -gt 0
$consultDate = if ($case.synthetic_episode.visit_schedule.Count -gt 1) { $case.synthetic_episode.visit_schedule[1].date } else { $case.synthetic_episode.visit_schedule[0].date }
if ($hasReferralStep -and -not $case.clinical.consultation -and $isReleaseTrack) { $errors.Add('Release-track record with a referral step has no clinical.consultation') }
foreach ($item in $case.clinical.consultation.consultant_note.assessment | Where-Object { $_.problem_id }) {
    $problem = $case.clinical.problems | Where-Object id -eq $item.problem_id
    if (-not $problem) { $errors.Add("Consultation assesses unknown problem $($item.problem_id)") }
    elseif ($problem.recorded_date -and $problem.recorded_date -gt $consultDate) { $errors.Add("Consultation assesses $($item.problem_id) before it was recorded") }
}
foreach ($guidelineId in $case.clinical.consultation.guideline_ids) {
    if (-not ($case.care_plan.guidelines | Where-Object guideline_id -eq $guidelineId)) { $errors.Add("Consultation cites unknown guideline $guidelineId") }
}

# Full encounter notes. Wellness and preventive visits review at least ten systems, carry a
# health risk assessment, a prevention plan, advance care planning, and a same-day depression
# screen; a sick visit reviews at least two systems. Problems they address must be known by then.
$depressionScreens = @('55758-7', '44261-6')
foreach ($encounter in $case.clinical.encounters | Where-Object { $_.documentation }) {
    $doc = $encounter.documentation
    $isWellness = $encounter.visit_type -match 'preventive|wellness'
    $minimumSystems = if ($isWellness) { 10 } else { 2 }
    if (@($doc.ros).Count -lt $minimumSystems) { $errors.Add("$($encounter.id): review of systems covers $(@($doc.ros).Count) systems; at least $minimumSystems required") }
    if (@($doc.ros.system | Sort-Object -Unique).Count -ne @($doc.ros).Count) { $errors.Add("$($encounter.id): review of systems repeats a system") }
    if (-not ($case.clinical.vital_sign_sets | Where-Object date -eq $encounter.date)) { $errors.Add("$($encounter.id): full encounter note without vital signs") }
    if ($isWellness) {
        if (-not $doc.prevention_plan) { $errors.Add("$($encounter.id): wellness visit without a prevention plan") }
        if (-not $doc.health_risk_assessment) { $errors.Add("$($encounter.id): wellness visit without a health risk assessment") }
        if (-not $doc.advance_care_planning) { $errors.Add("$($encounter.id): wellness visit without advance care planning") }
        $screened = $case.clinical.observations | Where-Object { $_.effective_date -eq $encounter.date -and $depressionScreens -contains $_.coding[0].code }
        if (-not $screened) { $errors.Add("$($encounter.id): wellness visit without a same-day PHQ-2 or PHQ-9") }
    }
    foreach ($item in $doc.assessment_plan | Where-Object { $_.problem_id }) {
        $problem = $case.clinical.problems | Where-Object id -eq $item.problem_id
        if (-not $problem) { $errors.Add("$($encounter.id): assessment cites unknown problem $($item.problem_id)") }
        elseif ($problem.recorded_date -and $problem.recorded_date -gt $encounter.date) { $errors.Add("$($encounter.id): assessment cites $($item.problem_id) before it was recorded") }
    }
    # A focused chronic-care visit accounts for every result drawn that day in its protocol table.
    if (-not $encounter.visit_type -or $encounter.visit_type -eq 'chronic_care') {
        $referenced = @($doc.monitoring | ForEach-Object { $_.observation_ids }) | Where-Object { $_ }
        foreach ($observation in $case.clinical.observations | Where-Object effective_date -eq $encounter.date) {
            if ($referenced -notcontains $observation.id) { $errors.Add("$($encounter.id): result $($observation.id) is not in the protocol monitoring table") }
        }
    }
    foreach ($item in $doc.monitoring) {
        foreach ($observationId in $item.observation_ids) {
            $observation = $case.clinical.observations | Where-Object id -eq $observationId
            if (-not $observation) { $errors.Add("$($encounter.id): monitoring cites unknown result $observationId") }
            elseif ($observation.effective_date -ne $encounter.date) { $errors.Add("$($encounter.id): monitoring cites $observationId from another date") }
        }
        foreach ($guidelineId in $item.guideline_ids) {
            if (-not ($case.care_plan.guidelines | Where-Object guideline_id -eq $guidelineId)) { $errors.Add("$($encounter.id): monitoring cites unknown guideline $guidelineId") }
        }
    }
    foreach ($guidelineId in $doc.guideline_ids) {
        if (-not ($case.care_plan.guidelines | Where-Object guideline_id -eq $guidelineId)) { $errors.Add("$($encounter.id): note cites unknown guideline $guidelineId") }
    }
    foreach ($item in $doc.prevention_plan) {
        foreach ($guidelineId in $item.guideline_ids) {
            if (-not ($case.care_plan.guidelines | Where-Object guideline_id -eq $guidelineId)) { $errors.Add("$($encounter.id): prevention plan cites unknown guideline $guidelineId") }
        }
    }
}
foreach ($observation in $case.clinical.observations) {
    if ($observation.provenance.evidence_grade -ne 'S') { $errors.Add("Non-synthetic generated observation: $($observation.id)") }
    if ($observation.coding[0].code -eq '101698-9' -and ($observation.value -lt 0 -or $observation.value -gt 80)) { $errors.Add("PCL-5 out of range: $($observation.id)") }
    if ($observation.coding[0].code -eq '44261-6' -and ($observation.value -lt 0 -or $observation.value -gt 27)) { $errors.Add("PHQ-9 out of range: $($observation.id)") }
    if ($observation.category -in @('laboratory', 'imaging')) {
        # The flag must agree with a numeric range; critical flags must point the same way.
        $range = $observation.reference_range
        $implied = $null
        if ($null -ne $range.low -and $observation.value -lt $range.low) { $implied = 'L' }
        elseif ($null -ne $range.high -and $observation.value -gt $range.high) { $implied = 'H' }
        elseif ($null -ne $range.low -or $null -ne $range.high) { $implied = 'N' }
        $flag = [string]$observation.interpretation
        $direction = if ($flag -in @('HH', 'LL')) { $flag.Substring(0, 1) } else { $flag }
        if ($implied -and $flag -ne 'A' -and $direction -ne $implied) { $errors.Add("Lab interpretation $flag disagrees with reference range for $($observation.id) (value $($observation.value), expected $implied)") }
        if ($observation.coding[0].system -ne 'http://loinc.org') { $errors.Add("Lab or imaging result must be LOINC coded: $($observation.id)") }
    }
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
# A behavioral-health diagnosis (ICD-10-CM F10-F99 except F17 nicotine dependence) or a positive depression screen (PHQ-9 >= 10, PHQ-2 >= 3) needs a structured safety assessment.
$behavioralProblem = @($case.clinical.problems | Where-Object { $_.coding | Where-Object { $_.system -eq 'http://hl7.org/fhir/sid/icd-10-cm' -and $_.code -match '^F(1[0-689]|[2-9])' } }).Count -gt 0
$positiveScreen = @($case.clinical.observations | Where-Object { ($_.coding[0].code -eq '44261-6' -and $_.value -ge 10) -or ($_.coding[0].code -eq '55758-7' -and $_.value -ge 3) }).Count -gt 0
if (($behavioralProblem -or $positiveScreen) -and -not $case.clinical.safety_assessment) { $errors.Add('A behavioral-health problem or positive depression screen requires clinical.safety_assessment') }
if ($case.clinical.safety_assessment -and $case.clinical.safety_assessment.provenance.evidence_grade -ne 'S') { $errors.Add('Safety assessment must be synthetic') }

# Release gate: an approved case needs every review passed, a named reviewer, and a date.
if ($case.record_classification.public_release_status -eq 'approved') {
    foreach ($review in $case.review.PSObject.Properties) {
        if (@('passed', 'not_applicable') -notcontains $review.Value.status) { $errors.Add("Approved for release but $($review.Name) is $($review.Value.status)") }
        elseif ($review.Value.status -eq 'passed' -and (-not $review.Value.reviewer -or -not $review.Value.reviewed_on)) { $errors.Add("$($review.Name) passed without a reviewer and date") }
    }
    foreach ($claim in $case.claims) {
        if ($claim.release_status -ne 'approved') { $errors.Add("Approved for release but claim $($claim.claim_id) is $($claim.release_status)") }
    }
}

$fhirCounts = @{}
foreach ($entry in $fhir.entry) {
    $type = $entry.resource.resourceType
    if (-not $fhirCounts.ContainsKey($type)) { $fhirCounts[$type] = 0 }
    $fhirCounts[$type]++
}
if ($fhirCounts.Patient -ne 1) { $errors.Add('FHIR bundle must contain one Patient') }
if ($fhirCounts.Condition -ne ($case.clinical.problems.Count + $case.care_plan.health_concerns.Count)) { $errors.Add('FHIR Condition count differs from canonical problems and health concerns') }
foreach ($pair in @(@('AllergyIntolerance', 'allergies'), @('MedicationRequest', 'medications'), @('Procedure', 'procedures'), @('Immunization', 'immunizations'), @('FamilyMemberHistory', 'family_history'))) {
    $expected = @($case.clinical.($pair[1])).Count
    if ([int]$fhirCounts[$pair[0]] -ne $expected) { $errors.Add("FHIR $($pair[0]) count $([int]$fhirCounts[$pair[0]]) differs from canonical $($pair[1]) $expected") }
}
$bloodPressureMerged = @($case.clinical.vital_sign_sets.measurements | Where-Object { $_.code -eq '8462-4' }).Count
$expectedFhirObservations = $case.clinical.observations.Count + ($case.clinical.vital_sign_sets.measurements | Measure-Object).Count - $bloodPressureMerged + $case.clinical.social_history.Count + $case.clinical.functional_status.Count + $case.clinical.mental_status.Count + $(if ($case.clinical.safety_assessment) { 1 } else { 0 })
if ($fhirCounts.Observation -ne $expectedFhirObservations) { $errors.Add("FHIR Observation count differs from canonical observations: expected $expectedFhirObservations, found $($fhirCounts.Observation)") }
if ($fhirCounts.Encounter -ne $case.clinical.encounters.Count) { $errors.Add('FHIR Encounter count differs from canonical encounters') }
if ($fhirCounts.Goal -ne $case.care_plan.goals.Count) { $errors.Add('FHIR Goal count differs from canonical goals') }

$ns = [Xml.XmlNamespaceManager]::new($ccda.NameTable)
$ns.AddNamespace('cda', 'urn:hl7-org:v3')
$ccdaProblems = $ccda.SelectNodes('//cda:section[cda:code[@code="11450-4"]]//cda:observation', $ns).Count
$ccdaResults = $ccda.SelectNodes('//cda:section[cda:code[@code="30954-2"]]//cda:observation', $ns).Count
$ccdaEncounters = $ccda.SelectNodes('//cda:section[cda:code[@code="46240-8"]]//cda:encounter', $ns).Count
$ccdaVitals = $ccda.SelectNodes('//cda:section[cda:code[@code="8716-3"]]//cda:observation', $ns).Count
$ccdaChecks = @(
    @('48765-2', 'cda:entry/cda:act/cda:entryRelationship/cda:observation', 'allergies'),
    @('10160-0', 'cda:entry/cda:substanceAdministration', 'medications'),
    @('47519-4', 'cda:entry/cda:procedure', 'procedures'),
    @('11369-6', 'cda:entry/cda:substanceAdministration', 'immunizations'),
    @('10157-6', 'cda:entry/cda:organizer', 'family_history')
)
foreach ($check in $ccdaChecks) {
    $found = $ccda.SelectNodes("//cda:section[cda:code[@code='$($check[0])']]/$($check[1])", $ns).Count
    $expected = @($case.clinical.($check[2])).Count
    if ($found -ne $expected) { $errors.Add("C-CDA $($check[2]) entries $found differ from canonical $expected") }
}
$pmhRows = $ccda.SelectNodes("//cda:section[cda:code[@code='11348-0']]//cda:tbody/cda:tr", $ns).Count
if ($pmhRows -ne @($case.clinical.past_medical_history).Count) { $errors.Add('C-CDA past medical history rows differ from canonical history') }

# The patient's name must survive intact in both exchange formats: as given and family names from
# name_parts when present, otherwise as display_name split at the last space.
$nameParts = if ($case.identity.PSObject.Properties['name_parts']) { $case.identity.name_parts } else { $null }
$expectedName = if (-not $nameParts) { $case.identity.display_name } elseif ($nameParts.PSObject.Properties['family_first'] -and $nameParts.family_first) { (@($nameParts.family) + @($nameParts.given)) -join ' ' } else { (@($nameParts.given) + $nameParts.family) -join ' ' }
$expectedFhirName = if ($nameParts) { (@($nameParts.given) + $nameParts.family) -join ' ' } else { $case.identity.display_name }
$cdaName = $ccda.SelectSingleNode('//cda:recordTarget/cda:patientRole/cda:patient/cda:name', $ns)
$cdaFull = (@($cdaName.SelectNodes('cda:given|cda:family', $ns) | ForEach-Object InnerText | Where-Object { $_ }) -join ' ')
if ($cdaFull -ne $expectedName) { $errors.Add("C-CDA patient name '$cdaFull' differs from '$expectedName'") }
$fhirName = ($fhir.entry | Where-Object { $_.resource.resourceType -eq 'Patient' }).resource.name[0]
if (((@($fhirName.given) + $fhirName.family | Where-Object { $_ }) -join ' ') -ne $expectedFhirName -or $fhirName.text -ne $case.identity.display_name) { $errors.Add('FHIR patient name differs from canonical display name') }

# Every C-CDA note document identifies the same patient: name, birth date, and MRN. A receiving
# system matches documents to a patient on these fields.
$expectedBirth = $case.identity.synthetic_identity.date_of_birth.Replace('-', '')
$noteDocuments = @(Get-ChildItem -LiteralPath (Join-Path $CaseDirectory 'generated/ccda') -Filter '*.xml' -File -ErrorAction SilentlyContinue)
if ($noteDocuments.Count -eq 0) { $errors.Add('No C-CDA note documents generated') }
$referralCount = 0
foreach ($noteFile in $noteDocuments) {
    [xml]$note = Get-Content -Raw -LiteralPath $noteFile.FullName
    $role = $note.SelectSingleNode('/cda:ClinicalDocument/cda:recordTarget/cda:patientRole', $ns)
    $noteName = $role.SelectSingleNode('cda:patient/cda:name', $ns)
    $noteFull = (@($noteName.SelectNodes('cda:given|cda:family', $ns) | ForEach-Object InnerText | Where-Object { $_ }) -join ' ')
    if ($noteFull -ne $expectedName) { $errors.Add("$($noteFile.Name): patient name '$noteFull' differs from '$expectedName'") }
    if ($role.SelectSingleNode('cda:patient/cda:birthTime', $ns).value -ne $expectedBirth) { $errors.Add("$($noteFile.Name): birth date differs from the case") }
    if ($role.SelectSingleNode('cda:id', $ns).extension -ne $case.identity.synthetic_identity.mrn) { $errors.Add("$($noteFile.Name): MRN differs from the case") }
    if ($role.SelectSingleNode("cda:id[@root='2.16.840.1.113883.4.1']", $ns).extension -ne $case.identity.synthetic_identity.ssn) { $errors.Add("$($noteFile.Name): SSN differs from the case") }
    if ($noteFile.Name -like 'referral-*' -or $noteFile.Name -like 'consult-*') { $referralCount++ }
}
# A referral and its consultation come as a pair, linked by the order ID.
if ($referralCount -eq 1) { $errors.Add('Referral loop incomplete: a referral note or consultation note is missing') }
if ($referralCount -eq 2) {
    [xml]$referralDoc = Get-Content -Raw -LiteralPath (Join-Path $CaseDirectory 'generated/ccda/referral-01.xml')
    [xml]$consultDoc = Get-Content -Raw -LiteralPath (Join-Path $CaseDirectory 'generated/ccda/consult-01.xml')
    $orderId = $referralDoc.SelectSingleNode("//cda:act[cda:templateId/@root='2.16.840.1.113883.10.20.22.4.39']/cda:id", $ns).root
    $fulfilled = $consultDoc.SelectSingleNode('/cda:ClinicalDocument/cda:inFulfillmentOf/cda:order/cda:id', $ns).root
    $serviceRequest = ($fhir.entry | Where-Object { $_.resource.resourceType -eq 'ServiceRequest' }).resource
    if (-not $orderId -or $orderId -ne $fulfilled) { $errors.Add('Consultation note does not fulfill the referral order') }
    if (-not $serviceRequest -or $serviceRequest.identifier[0].value -ne "urn:uuid:$orderId") { $errors.Add('FHIR ServiceRequest does not carry the referral order ID') }
}
if ($ccdaProblems -ne $case.clinical.problems.Count) { $errors.Add('C-CDA problem count differs from canonical problems') }
if ($ccdaResults -ne $case.clinical.observations.Count) { $errors.Add('C-CDA result count differs from canonical observations') }
if ($ccdaEncounters -ne $case.clinical.encounters.Count) { $errors.Add('C-CDA encounter count differs from canonical encounters') }
$expectedVitals = ($case.clinical.vital_sign_sets.measurements | Measure-Object).Count
if ($ccdaVitals -ne $expectedVitals) { $errors.Add("C-CDA vital-sign count differs from canonical vital signs: expected $expectedVitals, found $ccdaVitals") }

$noteFiles = @(Get-ChildItem -LiteralPath $notesPath -Filter '*.md' -File)
# H&P, one progress note per visit, referral, consultation, care plan, and teaching note.
$expectedNotes = 5 + $case.synthetic_episode.visit_schedule.Count
if ($noteFiles.Count -ne $expectedNotes) { $errors.Add("Expected $expectedNotes supporting documents; found $($noteFiles.Count)") }
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
    if ($allNoteText -notmatch "(?<![\w.-])$([regex]::Escape($expected))(?!\w|\.\d)") { $errors.Add("Observation value missing from supporting documents: $($observation.id)") }
}
$provenanceRows = @(Import-Csv -LiteralPath $provenancePath)
if ($provenanceRows.Count -lt ($case.claims.Count + $case.clinical.problems.Count + $case.clinical.observations.Count)) { $errors.Add('Provenance CSV has fewer rows than required core elements') }

$supportingGeneratorText = Get-Content -Raw -LiteralPath (Join-Path $repoRoot 'scripts\generate_supporting_docs.mjs')
foreach ($name in @($case.identity.display_name) + @($case.identity.aliases)) {
    if ($name -and $supportingGeneratorText -match [regex]::Escape($name)) {
        $errors.Add("Supporting-document generator contains case-specific name: $name")
    }
}

# Every FHIR clinical resource carries an evidence grade; only the person and clinician records do not.
$gradeSystem = 'https://github.com/PatrickRutledge/chronic_histories/fhir/evidence-grade'
foreach ($entry in $fhir.entry) {
    $resource = $entry.resource
    if (@('Patient', 'Practitioner') -contains $resource.resourceType) { continue }
    $grades = @($resource.meta.tag | Where-Object { $_.system -eq $gradeSystem } | ForEach-Object code)
    if ($grades.Count -ne 1 -or @('D', 'R', 'S') -notcontains $grades[0]) { $errors.Add("FHIR $($resource.resourceType)/$($resource.id) lacks exactly one D, R, or S grade") }
}
foreach ($row in $provenanceRows) {
    if (@('D', 'R', 'S') -notcontains $row.evidence_grade) { $errors.Add("Provenance row $($row.element_id) lacks a D, R, or S grade") }
}

# Scan every generated file and the case for real-looking identifiers.
$scanFiles = @($casePath) + @(Get-GeneratedFiles $CaseDirectory | ForEach-Object { Join-Path $CaseDirectory $_ } | Where-Object { Test-Path -LiteralPath $_ })
$scanText = @{}
foreach ($file in $scanFiles) { $scanText[$file] = Get-Content -Raw -LiteralPath $file }
function Test-NpiChecksum([string]$Digits) {
    # NPI check digit: Luhn over the 80840 prefix plus the first nine digits.
    $sum = 0; $double = $true
    foreach ($char in ('80840' + $Digits.Substring(0, 9)).ToCharArray()[-1..-14]) {
        $value = [int][string]$char
        if ($double) { $value *= 2; if ($value -gt 9) { $value -= 9 } }
        $sum += $value; $double = -not $double
    }
    return ((10 - ($sum % 10)) % 10) -eq [int][string]$Digits[9]
}
# Ten-digit SNOMED CT codes can pass the NPI check digit by chance; numbers the record uses as a coded
# "code" value are terminology, not identifiers, so the NPI scan skips them.
$codedValues = @{}
foreach ($match in [regex]::Matches($scanText[$casePath], '"code"\s*:\s*"(\d{10})"')) { $codedValues[$match.Groups[1].Value] = $true }
foreach ($file in $scanFiles) {
    $name = Split-Path -Leaf $file
    foreach ($match in [regex]::Matches($scanText[$file], '(?<![\w-])(?!000-)\d{3}-\d{2}-\d{4}(?![\w-])')) { $errors.Add("Possible Social Security number in ${name}: $($match.Value)") }
    foreach ($match in [regex]::Matches($scanText[$file], '(?<![\w.-])(?:\+?1[-. ]?)?\(?\d{3}\)?[-. ]\d{3}[-. ]\d{4}(?![\w-])')) {
        if ($match.Value -notmatch '555[-. ]01\d\d$') { $errors.Add("Phone number outside the fictional 555-0100 to 555-0199 range in ${name}: $($match.Value)") }
    }
    foreach ($match in [regex]::Matches($scanText[$file], '(?<![\w.-])[12]\d{9}(?![\w.-])')) {
        if (-not $codedValues.ContainsKey($match.Value) -and (Test-NpiChecksum $match.Value)) { $errors.Add("Valid-format NPI in ${name}: $($match.Value)") }
    }
}

# No other case's identity may appear in this case's files.
foreach ($otherDir in Get-AllCaseDirectories $repoRoot) {
    $other = Get-Content -Raw -LiteralPath (Join-Path $otherDir 'case.json') | ConvertFrom-Json
    if ($other.case_id -eq $case.case_id) { continue }
    $markers = @($other.identity.display_name, $other.identity.synthetic_identity.mrn) + @($other.identity.aliases) | Where-Object { $_ }
    foreach ($file in $scanFiles) {
        foreach ($marker in $markers) {
            # Whole words, case-sensitive: short aliases such as "Ike" or "Cash" must not match "likely" or "cash".
            if ($scanText[$file] -cmatch "(?<!\w)$([regex]::Escape($marker))(?!\w)") { $errors.Add("$(Split-Path -Leaf $file) contains '$marker' from case $($other.case_id)") }
        }
    }
}

if ($errors.Count -gt 0) {
    $errors | ForEach-Object { [Console]::Error.WriteLine("ERROR: $_") }
    exit 1
}

$conformance = 'NOT RUN'
$conformancePath = Join-Path $CaseDirectory 'generated\conformance\summary.json'
if (Test-Path -LiteralPath $conformancePath) {
    $report = Get-Content -Raw -LiteralPath $conformancePath | ConvertFrom-Json
    $fresh = $report.CcdaSha256 -eq (Get-NormalizedSha256 $ccdaPath) -and $report.FhirSha256 -eq (Get-NormalizedSha256 $fhirPath)
    # Every note document must have been validated in its current form, and no others may exist.
    $noteDocs = @(Get-ChildItem -LiteralPath (Join-Path $CaseDirectory 'generated/ccda') -Filter '*.xml' -File -ErrorAction SilentlyContinue)
    $checked = @{}; foreach ($doc in @($report.NoteDocuments)) { if ($doc) { $checked[$doc.File] = $doc.Sha256 } }
    if ($checked.Count -ne $noteDocs.Count) { $fresh = $false }
    foreach ($doc in $noteDocs) { if ($checked["generated/ccda/$($doc.Name)"] -ne (Get-NormalizedSha256 $doc.FullName)) { $fresh = $false } }
    $conformance = if (-not $fresh) { 'STALE (rerun scripts/run_conformance.ps1)' } else { "XSD $($report.CdaXsdErrors), Schematron $($report.SchematronErrors), $($noteDocs.Count) note documents $([int]$report.NoteDocumentErrors), FHIR $($report.FhirBaseErrors), US Core $($report.UsCoreErrors) errors$(if ($report.TerminologyUnverified) { '; ' + $report.TerminologyUnverified + ' codes unverified (terminology server failure)' })" }
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
    CcdaNoteDocuments = @(Get-ChildItem -LiteralPath (Join-Path $CaseDirectory 'generated/ccda') -Filter '*.xml' -File -ErrorAction SilentlyContinue).Count
    ProvenanceRows = $provenanceRows.Count
    Conformance = $conformance
} | Format-List
