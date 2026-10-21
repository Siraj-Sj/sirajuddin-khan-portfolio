# Sirajuddin Khan — Developer Portfolio

A responsive dark + lime-green portfolio built with React and Vite, based on the supplied resume.

## Requirements
- Node.js 18+ (recommended)
- npm

## Run locally
1. Extract the ZIP.
2. Open a terminal in the extracted `sirajuddin-portfolio` folder.
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open the local URL printed by Vite (usually http://localhost:5173).

## Production build
```bash
npm run build
npm run preview
```
The production site is generated in `dist/`.

## Deploy on Vercel
1. Push this project to a GitHub repository.
2. Import the repository into Vercel.
3. Framework preset: Vite.
4. Build command: `npm run build`
5. Output directory: `dist`

## Notes
- The resume PDF is included in `public/Sirajuddin_Khan_Resume.pdf` and linked from the Resume buttons.
- Contact and LinkedIn details are based on the supplied resume.
- GitHub and demo links were not invented because they were not listed in the resume.
- Google Fonts are loaded from Google Fonts; the site still uses fallback fonts if unavailable.

## Recent updates
- Added professional highlights using resume-backed experience details.
- Added a professional recognition section featuring the appreciation letter dated 28 November 2025 for the JAP-IT Sahiya Project.
- Added a responsive contact form that prepares an email in the visitor's mail app; no message is sent automatically and no backend service is required.
- Improved responsive styles for highlight cards, the recognition letter, contact form, and navigation.

Run locally with `npm install` and `npm run dev`. The contact form requires a configured email application to open the prepared draft.

## Customizing
- Edit text and data at the top of `src/main.jsx` (skills, projects, experience, competencies).
- Years of experience are calculated from `START` (May 2022), so they update automatically.
- Add a preview image for link sharing by hosting a 1200x630 picture and adding an `og:image` meta tag in `index.html`.
