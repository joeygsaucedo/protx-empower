import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  // Keep in sync with SITE_URL in src/lib/site.ts.
  site: process.env.PUBLIC_SITE_URL ?? 'https://protxempower.com',
  // Pages prerender by default; API routes opt out with `export const prerender = false`.
  output: 'static',
  adapter: vercel({
    maxDuration: 30,
  }),
  vite: {
    plugins: [tailwindcss()],
  },
});
