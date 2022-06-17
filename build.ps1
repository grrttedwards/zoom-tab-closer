$zipfile="tab-closer-for-zoom.zip"
Write-Host "Cleaning up..."
Remove-Item $zipfile -ErrorAction SilentlyContinue
Write-Host "Creating zip..."
$files = "background.js","icon-128.png","manifest.json"
Compress-Archive -DestinationPath $zipfile -Path $files
Write-Host "Zipped $zipfile"
