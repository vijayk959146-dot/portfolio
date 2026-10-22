import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // The project site is served from /portfolio/ on GitHub Pages.
  base: process.env.GITHUB_ACTIONS ? '/portfolio/' : '/',
  plugins: [react()],
})
