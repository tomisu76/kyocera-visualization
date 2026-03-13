Write-Host "🏴‍☠️ Spúšťam BlackClaw Sandbox pre projekt Kyocera..." -ForegroundColor Cyan
$vizDir = $PSScriptRoot
Set-Location -Path $vizDir

if (Test-Path "$vizDir\server.py") {
    python server.py
} else {
    Write-Host "Chyba: server.py nebol nájdený v $vizDir!" -ForegroundColor Red
}
Write-Host "Stlač ľubovoľnú klávesu pre ukončenie..."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
