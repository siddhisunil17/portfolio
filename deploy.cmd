@echo off
echo Cleaning up...
rd /s /q dist

echo Installing dependencies...
call npm ci

echo Building the project...
call npm run build

echo Creating necessary files...
echo. > dist/.nojekyll
copy index.html dist\404.html

echo Deploying to GitHub Pages...
call npx gh-pages -d dist -t true

echo Deployment complete!
pause
