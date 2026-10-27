# Vijayakumar Police Patil — Portfolio

A responsive, dark editorial portfolio built with React, Vite, TypeScript, Three.js, GSAP and Lenis. All profile and project copy lives in `src/data.ts`; the supplied profile photo is in `public/vijay-profile.jpeg`.

## Getting started

1. Install Node.js 20 or newer.
2. From this directory run `npm install`.
3. Start the local server with `npm run dev` and open the URL Vite prints.
4. Edit `src/data.ts` to update your profile, links, projects, skills, and timeline.

## Build

Run `npm run build` to type-check and create the production site in `dist/`. Run `npm run preview` to preview that build locally.

## Deploy on AWS S3

The production site is hosted as a static website in Amazon S3.

1. Run `npm run build`.
2. Create an S3 bucket in the target AWS region.
3. Apply `aws/s3-website.json` as the bucket website configuration.
4. Apply a public-read bucket policy based on `aws/s3-public-read-policy.json`, replacing the bucket name first.
5. Sync the production bundle: `aws s3 sync dist s3://YOUR_BUCKET --delete`.

The S3 website endpoint is HTTP. Use CloudFront with an ACM certificate and a custom domain when HTTPS or a custom domain is required.

## Notes

- Google Fonts and the project imagery are loaded remotely; replace Unsplash image IDs in `src/data.ts` or use local assets if needed.
- The Three.js scene is lazy mounted after the short page intro, uses a capped device pixel ratio, and uses a simpler composition on small viewports.
- Reduced motion preferences disable smooth scrolling and scroll-linked movement.
