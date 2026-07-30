// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://kingadow.com',
  integrations: [sitemap({
    // Exclude pages that should never appear in search results:
    // masterclass (gated), webinar (302s to /masterclass-flows), and
    // post-action pages. Each was an orphan in the sitemap, which is a
    // contradictory signal: "index this" plus "nothing links to it".
    filter: (page) =>
      !page.includes('/masterclass') &&
      !page.includes('/webinar') &&
      !page.includes('/thank-you-vote')
  })],
  vite: {
    plugins: [tailwindcss()]
  }
});