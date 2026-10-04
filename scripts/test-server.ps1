# Builds (or updates) a local dedicated server from the current pack, for testing server-side loading.
# Usage: pwsh scripts/test-server.ps1 [-ServerDir <path>] [-AcceptEula] [-Start]
param(
    [string]$ServerDir = "$env:USERPROFILE\AdventuresWithDad-server",
    [switch]$AcceptEula,
    [switch]$Start
)
$ErrorActionPreference = "Stop"
$repo = Split-Path $PSScriptRoot -Parent
$packwiz = (Get-Command packwiz -ErrorAction SilentlyContinue).Source
if (-not $packwiz) { $packwiz = "$env:LOCALAPPDATA\Programs\packwiz\packwiz.exe" }

$neoVersion = (Select-String -Path "$repo\pack.toml" -Pattern '^neoforge = "(.+)"').Matches[0].Groups[1].Value
New-Item -ItemType Directory -Force $ServerDir | Out-Null
Push-Location $ServerDir
try {
    # 1. NeoForge server (reinstalled only when the pack's NeoForge version changes)
    if (-not (Test-Path "libraries\net\neoforged\neoforge\$neoVersion")) {
        Write-Host "Installing NeoForge $neoVersion server..."
        $installer = "neoforge-$neoVersion-installer.jar"
        Invoke-WebRequest "https://maven.neoforged.net/releases/net/neoforged/neoforge/$neoVersion/$installer" -OutFile $installer -UseBasicParsing
        java -jar $installer --installServer | Out-Null
        if ($LASTEXITCODE -ne 0) { throw "NeoForge installer failed" }
        Remove-Item $installer, "$installer.log" -ErrorAction SilentlyContinue
    }

    # 2. Server-side mods via packwiz-installer, fed by a temporary local `packwiz serve`
    if (-not (Test-Path "packwiz-installer-bootstrap.jar")) {
        Invoke-WebRequest "https://github.com/packwiz/packwiz-installer-bootstrap/releases/latest/download/packwiz-installer-bootstrap.jar" -OutFile "packwiz-installer-bootstrap.jar" -UseBasicParsing
    }
    $serve = Start-Process $packwiz -ArgumentList "serve" -WorkingDirectory $repo -PassThru -WindowStyle Hidden
    try {
        Start-Sleep -Seconds 2
        Write-Host "Installing server-side mods..."
        java -jar packwiz-installer-bootstrap.jar -g -s server "http://localhost:8080/pack.toml"
        if ($LASTEXITCODE -ne 0) { throw "packwiz-installer failed (see output above)" }
    } finally {
        Stop-Process -Id $serve.Id -ErrorAction SilentlyContinue
    }

    # 3. Test defaults; existing files are left alone
    if (-not (Test-Path "server.properties")) {
        "difficulty=easy`nmotd=Adventures with Dad (test)`nonline-mode=true" | Set-Content server.properties
    }
    if ($AcceptEula) { "eula=true" | Set-Content eula.txt }

    Write-Host "`nServer ready in $ServerDir ($((Get-ChildItem mods -Filter *.jar).Count) mods)."
    if ($Start) {
        if (-not (Test-Path eula.txt) -or -not (Select-String -Path eula.txt -Pattern "eula=true" -Quiet)) {
            throw "Accept the Minecraft EULA first (https://aka.ms/MinecraftEULA): rerun with -AcceptEula"
        }
        java "@user_jvm_args.txt" "@libraries/net/neoforged/neoforge/$neoVersion/win_args.txt" nogui
    } else {
        Write-Host "Start it with: pwsh scripts/test-server.ps1 -Start   (type 'stop' in the console to shut down)"
    }
} finally {
    Pop-Location
}
