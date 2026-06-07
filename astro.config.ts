import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://scottnath.github.io',
  base: process.env.GITHUB_PAGES === 'true' ? '/devx-template' : '/',
});
