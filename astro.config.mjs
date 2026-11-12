// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// User site (username.github.io) is served from the domain root, so no `base` is needed.
export default defineConfig({
  site: 'https://surajitbasak109.github.io',
  integrations: [sitemap()],
  // Keep links from the old Academic Pages site working.
  redirects: {
    '/about': '/',
    '/cv': '/files/resume.pdf',
    '/resume': '/files/resume.pdf',
    '/preparations': '/notes/',
    '/preparations/laravel-interview-questions': '/notes/laravel-interview-questions/',
  },
  markdown: {
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark' },
    },
  },
});
