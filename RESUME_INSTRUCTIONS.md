# How to Add Your Resume to Your Portfolio

Follow these steps to add your resume PDF file to your portfolio:

1. Locate your resume PDF file (mohit0416.pdf)
2. Copy the file to `/Users/mohitbhoir/Git/mohit-portfolio-fix/public/` directory and rename it to `resume.pdf`
3. Commit and push the changes to GitHub
4. Redeploy your portfolio by running:

```bash
cd /Users/mohitbhoir/Git/mohit-portfolio-fix
npm run deploy
```

Your resume will then be available for download from your portfolio website.

## Technical Details:

- The resume link is already configured in your Hero component using `getAssetPath("resume.pdf")`
- When deployed to GitHub Pages, this will resolve to `https://mohitbhoir789.github.io/portfolio/resume.pdf`
- The placeholder file at `/Users/mohitbhoir/Git/mohit-portfolio-fix/public/resume.pdf` should be replaced with your actual PDF
