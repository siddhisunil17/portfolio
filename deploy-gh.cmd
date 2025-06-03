@echo off
echo Installing dependencies...
call npm install react-router-dom

echo Cleaning previous build...
rd /s /q dist

echo Building project...
call npm run build

echo Preparing for deployment...
cd dist
echo. > .nojekyll
type NUL > .nojekyll

echo Initializing deployment...
git init
git add .
git commit -m "Deploy to GitHub Pages"

echo Pushing to gh-pages branch...
git push -f https://github.com/siddhisunil17/portfolio.git main:gh-pages

echo Deployment complete!
cd ..
pause
