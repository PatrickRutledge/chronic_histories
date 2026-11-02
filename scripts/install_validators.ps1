# Installs the pinned conformance toolchain into .work/validators (gitignored).
# Every artifact is verified against the SHA-256 recorded here; a mismatch aborts.
# See docs/validation.md for what each tool does.
[CmdletBinding()]
param([switch]$Force)

$ErrorActionPreference = 'Stop'
$ProgressPreference = 'SilentlyContinue'

$repoRoot = Split-Path -Parent $PSScriptRoot
$root = Join-Path $repoRoot '.work\validators'

$ccdaCommit = '6d3ed96160b45a111895da4df5510c7fad9de01f'
$cdaCoreCommit = 'e922fc35586fd2629f0c8a021080bca9ab424e18'
$isoCommit = '77dcd36c53d12ed786c144ece3b2af7694abdc56'
$fhirValidatorVersion = '7.0.3'
$saxonVersion = '9.9.1-8'

$ccdaBase = "https://raw.githubusercontent.com/HL7/CDA-ccda-2.1/$ccdaCommit/validation"
$isoBase = "https://raw.githubusercontent.com/Schematron/schematron/$isoCommit/trunk/schematron/code"

$artifacts = @(
    @{ Path = 'ccda\ccda-2.1.sch'; Sha256 = '04BE58046A675735616E46CF52053688A2FC9D0C88010F14FD1C5A2F4CA5BD54'
       Url = "$ccdaBase/Consolidated%20CDA%20Templates%20for%20Clinical%20Notes%20(US%20Realm)%20DSTU%20R2.1.sch" }
    @{ Path = 'ccda\voc.xml'; Sha256 = 'BC15F23F4F9D4ABE8FA98A36EB57E5ADE7F9D8F1829E7D0BF6359B2D1B1CED52'; Url = "$ccdaBase/voc.xml" }
    @{ Path = 'cda-core.zip'; Sha256 = '6A7C655F140848078FF29A37B11AA67A902190FD6A046C4BFA73B3B456A87700'
       Url = "https://codeload.github.com/HL7/CDA-core-2.0/zip/$cdaCoreCommit" }
    @{ Path = 'saxon\saxon-he.jar'; Sha256 = '504AD5C71B55A3FD04C5609419B5E51D51B419F26628B4B6254C38766487ABDF'
       Url = "https://repo1.maven.org/maven2/net/sf/saxon/Saxon-HE/$saxonVersion/Saxon-HE-$saxonVersion.jar" }
    @{ Path = 'fhir\validator_cli.jar'; Sha256 = '57AA43FB40CEC5DE41DEF81C927725FD85908EEB71509B7F9313E04D9B8EC79B'
       Url = "https://github.com/hapifhir/org.hl7.fhir.core/releases/download/$fhirValidatorVersion/validator_cli.jar" }
    @{ Path = 'iso\iso_dsdl_include.xsl'; Sha256 = '43FF20A1AFD89D8A744D1C0B8DF94AC5559FFA6A820D1FFBF508D6431EE4FDD9'; Url = "$isoBase/iso_dsdl_include.xsl" }
    @{ Path = 'iso\iso_abstract_expand.xsl'; Sha256 = 'C5267F124ABF23EEB6669884E40A98607C055BFAA1F39E73B7D578FECEEB6E46'; Url = "$isoBase/iso_abstract_expand.xsl" }
    @{ Path = 'iso\iso_schematron_skeleton_for_xslt1.xsl'; Sha256 = 'B5F75949A90B3030CCBEBFA3D06375945C93689E39D58CD566B9AC8D507E4254'; Url = "$isoBase/iso_schematron_skeleton_for_xslt1.xsl" }
    @{ Path = 'iso\iso_svrl_for_xslt1.xsl'; Sha256 = '81E8C328C57965716ECFF9F9E2D25294FCDA9DEEE8A82A2B9828EDE770B69FD0'; Url = "$isoBase/iso_svrl_for_xslt1.xsl" }
)

foreach ($artifact in $artifacts) {
    $target = Join-Path $root $artifact.Path
    New-Item -ItemType Directory -Force -Path (Split-Path -Parent $target) | Out-Null
    $valid = (Test-Path -LiteralPath $target) -and -not $Force -and
        ((Get-FileHash -Algorithm SHA256 -LiteralPath $target).Hash -ieq $artifact.Sha256)
    if (-not $valid) {
        Write-Host "Downloading $($artifact.Path)"
        Invoke-WebRequest -Uri $artifact.Url -OutFile $target
        $actual = (Get-FileHash -Algorithm SHA256 -LiteralPath $target).Hash
        if ($actual -ine $artifact.Sha256) {
            Remove-Item -LiteralPath $target
            throw "Checksum mismatch for $($artifact.Path): expected $($artifact.Sha256), got $actual"
        }
    }
}

# CDA XSD, SDTC-extended variant (C-CDA uses sdtc: elements).
$schemaDir = Join-Path $root 'cda-schema'
if ($Force -or -not (Test-Path -LiteralPath (Join-Path $schemaDir 'infrastructure\cda\CDA_SDTC.xsd'))) {
    $extract = Join-Path $root 'cda-core-extract'
    Remove-Item -Recurse -Force -LiteralPath $extract -ErrorAction SilentlyContinue
    Expand-Archive -LiteralPath (Join-Path $root 'cda-core.zip') -DestinationPath $extract
    Remove-Item -Recurse -Force -LiteralPath $schemaDir -ErrorAction SilentlyContinue
    Copy-Item -Recurse -LiteralPath (Join-Path $extract "CDA-core-2.0-$cdaCoreCommit\schema\extensions\SDTC") -Destination $schemaDir
    Remove-Item -Recurse -Force -LiteralPath $extract
}

# Compile the Schematron once per phase. The compiled XSLT sits beside voc.xml
# because the rules load it with document('voc.xml') relative to the stylesheet.
$saxon = Join-Path $root 'saxon\saxon-he.jar'
$iso = Join-Path $root 'iso'
$ccda = Join-Path $root 'ccda'
$upstream = Join-Path $ccda 'ccda-2.1.sch'
$sch = Join-Path $ccda 'ccda-2.1.patched.sch'
# Upstream defects at the pinned commit; see docs/validation.md. The downloaded file
# is left untouched and the corrected copy is rebuilt from it on every install.
$text = [IO.File]::ReadAllText($upstream)

# 1. A misplaced quote, as in @root='2.16.840.1.113883.10.20.22.4.121 and not(@extension)',
#    compares @root to a literal that no document can match. Move the quote.
$quotePattern = "@root='([0-9.]+) and not\(@extension\)'"
$quoteFixes = [regex]::Matches($text, $quotePattern).Count
$text = [regex]::Replace($text, $quotePattern, "@root='`$1' and not(@extension)")

# 2. The 2025 errata added not(@extension) to template references whose own message
#    names a versioned template (urn:hl7ii:ROOT:EXT). Only the versioned template has
#    rules, so no document can pass. Require the version the message names.
$versionFixes = [System.Collections.Generic.List[string]]::new()
$text = [regex]::Replace($text, '(?s)<sch:assert id="([^"]+)" test="([^"]*)">(.*?)</sch:assert>', {
    param($m)
    $test = $m.Groups[2].Value
    foreach ($hit in [regex]::Matches($m.Groups[3].Value, 'urn:hl7ii:([0-9.]+):(\d{4}-\d{2}-\d{2})')) {
        $wrong = "@root='$($hit.Groups[1].Value)' and not(@extension)"
        if ($test.Contains($wrong)) {
            $test = $test.Replace($wrong, "@root='$($hit.Groups[1].Value)' and @extension='$($hit.Groups[2].Value)'")
            $versionFixes.Add($m.Groups[1].Value)
        }
    }
    "<sch:assert id=`"$($m.Groups[1].Value)`" test=`"$test`">$($m.Groups[3].Value)</sch:assert>"
})

$changed = -not (Test-Path -LiteralPath $sch) -or [IO.File]::ReadAllText($sch) -ne $text
if ($changed) { [IO.File]::WriteAllText($sch, $text) }
Write-Host "Corrected upstream Schematron defects: $quoteFixes quoting; $($versionFixes.Count) version ($($versionFixes -join ', '))"
$step1 = Join-Path $ccda 'step1.sch'
$step2 = Join-Path $ccda 'step2.sch'
function Invoke-Saxon([string[]]$Arguments) {
    & java -Xmx2g -cp $saxon net.sf.saxon.Transform @Arguments
    if ($LASTEXITCODE -ne 0) { throw "Saxon failed: $($Arguments -join ' ')" }
}
foreach ($phase in 'errors', 'warnings') {
    $compiled = Join-Path $ccda "ccda-2.1.$phase.xsl"
    if ($Force -or $changed -or -not (Test-Path -LiteralPath $compiled)) {
        Write-Host "Compiling Schematron phase: $phase"
        Invoke-Saxon @("-s:$sch", "-xsl:$(Join-Path $iso 'iso_dsdl_include.xsl')", "-o:$step1")
        Invoke-Saxon @("-s:$step1", "-xsl:$(Join-Path $iso 'iso_abstract_expand.xsl')", "-o:$step2")
        Invoke-Saxon @("-s:$step2", "-xsl:$(Join-Path $iso 'iso_svrl_for_xslt1.xsl')", "-o:$compiled", "phase=$phase", 'allow-foreign=true')
    }
}
Remove-Item -LiteralPath $step1, $step2 -ErrorAction SilentlyContinue

Write-Host "Validators ready in $root"
