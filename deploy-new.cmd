@echo off
echo Cleaning up...
if exist "dist" rd /s /q "dist"
if exist ".git" rd /s /q ".git"

echo Initializing Git...
git init

echo Adding GitHub remote...
git remote add origin https://github.com/siddhisunil17/portfolio.git

echo Installing dependencies...
call npm install

echo Building project...
call npm run build

echo Creating necessary files...
cd dist
echo. > .nojekyll
cd ..

echo Setting up Git...
git add dist -f
git commit -m "Deploy to GitHub Pages"
git subtree push --prefix dist origin gh-pages

echo Deployment complete!
pause
