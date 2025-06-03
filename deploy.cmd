@echo off
echo Cleaning up...
rd /s /q dist

echo Installing dependencies...
call npm install

echo Building the project...
call npm run build

echo Setting up deployment...
cd dist
echo. > .nojekyll
cd ..

echo Initializing gh-pages branch...
git checkout --orphan gh-pages
git reset --hard
git pull origin gh-pages --rebase

echo Copying build files...
xcopy /E /I /Y dist\* .

echo Deploying to GitHub Pages...
git add .
git commit -m "Deploy to GitHub Pages"
git push origin gh-pages --force

echo Switching back to main branch...
git checkout main

echo Deployment complete!
pause
