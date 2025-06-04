@echo off
echo Installing dependencies...
call npm install

echo Building for production...
call npm run build

echo Preparing for deployment...
cd dist
echo. > .nojekyll
copy ..\index.html 404.html

echo Setting up git...
git init
git checkout -b gh-pages
git add .
git commit -m "Deploy to GitHub Pages"

echo Deploying to GitHub Pages...
git remote add origin https://github.com/siddhisunil17/portfolio.git
git push -f origin gh-pages

echo Cleaning up...
cd ..
rd /s /q dist\.git

echo Deployment complete!
echo Please wait a few minutes for GitHub Pages to update.
echo Your site should be available at: https://siddhisunil17.github.io/portfolio/
pause
