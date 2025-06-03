$env:NODE_ENV = "production"
Write-Host "Building project..."
Start-Process -NoNewWindow -Wait -FilePath "cmd.exe" -ArgumentList "/c npm run build"

Write-Host "Preparing deployment..."
Copy-Item -Path ".\dist\*" -Destination "." -Recurse -Force

Write-Host "Committing changes..."
git add .
git commit -m "Deploy to GitHub Pages"

Write-Host "Pushing to gh-pages branch..."
git push origin gh-pages --force

Write-Host "Switching back to main branch..."
git checkout main

Write-Host "Deployment complete!"
pause
