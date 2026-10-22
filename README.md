# Vijayakumar Police Patil — Portfolio

A responsive, dark editorial portfolio built with React, Vite, TypeScript, Three.js, GSAP and Lenis. All profile and project copy lives in `src/data.ts`; the supplied profile photo is in `public/vijay-profile.jpeg`.

## Getting started

1. Install Node.js 20 or newer.
2. From this directory run `npm install`.
3. Start the local server with `npm run dev` and open the URL Vite prints.
4. Edit `src/data.ts` to update your profile, links, projects, skills, and timeline.

## Build

Run `npm run build` to type-check and create the production site in `dist/`. Run `npm run preview` to preview that build locally.

## Deploy

### GitHub Pages

Pushing to `main` builds and deploys the site to [https://vijayk959146-dot.github.io/portfolio/](https://vijayk959146-dot.github.io/portfolio/) with GitHub Actions. In the repository’s **Settings → Pages**, select **GitHub Actions** as the build and deployment source once.

### Vercel

Import the repository in Vercel. Use `npm run build` as the build command and `dist` as the output directory. Vite is detected automatically.

### Netlify

Create a new site from the repository. Set the build command to `npm run build` and publish directory to `dist`.

## Notes

- Google Fonts and the project imagery are loaded remotely; replace Unsplash image IDs in `src/data.ts` or use local assets if needed.
- The Three.js scene is lazy mounted after the short page intro, uses a capped device pixel ratio, and uses a simpler composition on small viewports.
- Reduced motion preferences disable smooth scrolling and scroll-linked movement.
