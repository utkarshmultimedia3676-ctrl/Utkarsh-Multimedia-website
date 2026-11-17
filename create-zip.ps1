# PowerShell script to create ZIP archive
$projectDir = $PSScriptRoot
$zipName = 'utkarsh-multimedia-website.zip'
$zipPath = Join-Path $projectDir $zipName

Write-Host "Creating ZIP archive..." -ForegroundColor Cyan

try {
    Compress-Archive -Path "$projectDir\*" -DestinationPath $zipPath -Force
    Write-Host "`n✅ Created: $zipName" -ForegroundColor Green
    Write-Host "📁 Location: $zipPath" -ForegroundColor Green
    Write-Host "`nTo use:" -ForegroundColor Yellow
    Write-Host "1. Download the ZIP file" -ForegroundColor White
    Write-Host "2. Extract it" -ForegroundColor White
    Write-Host "3. Run: npm install && npm run dev" -ForegroundColor White
} catch {
    Write-Error "Error creating ZIP: $_"
}