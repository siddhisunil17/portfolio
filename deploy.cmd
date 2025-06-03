@echo off
echo Installing dependencies...
call npm install @tanstack/react-query react-router-dom gh-pages --save

echo Building the project...
call npm run build

echo Deploying to GitHub Pages...
call npm run deploy

echo Deployment complete!
pause
