# Vijayakumar Police Patil — Portfolio

A responsive, dark editorial portfolio built with React, Vite, TypeScript, Three.js, GSAP and Lenis. All profile and project copy lives in `src/data.ts`; the supplied profile photo is in `public/vijay-profile.jpeg`.

## Getting started

1. Install Node.js 20 or newer.
2. From this directory run `npm install`.
3. Start the local server with `npm run dev` and open the URL Vite prints.
4. Edit `src/data.ts` to update your profile, links, projects, skills, and timeline.

## Build

Run `npm run build` to type-check and create the production site in `dist/`. Run `npm run preview` to preview that build locally.

## Deploy on AWS Amplify Hosting

The production site is hosted with AWS Amplify Hosting at [main.d2nsi6s25tra4g.amplifyapp.com](https://main.d2nsi6s25tra4g.amplifyapp.com/).

1. Run `npm run build`.
2. In the Amplify console, choose **Create new app → Deploy without Git**.
3. Create a production branch and upload a ZIP containing the *contents* of `dist/`.
4. Publish the deployment and verify the assigned `amplifyapp.com` HTTPS URL.

The `aws/` files record the S3 staging-bucket configuration used for manual Amplify deployments. Amplify provides the public HTTPS endpoint.

## Notes

- Google Fonts and the project imagery are loaded remotely; replace Unsplash image IDs in `src/data.ts` or use local assets if needed.
- The Three.js scene is lazy mounted after the short page intro, uses a capped device pixel ratio, and uses a simpler composition on small viewports.
- Reduced motion preferences disable smooth scrolling and scroll-linked movement.
