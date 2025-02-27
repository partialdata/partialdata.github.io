import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  site: "https://partialdata.github.io", // ✅ Required for absolute URLs (Replace with your actual URL)
  output: "static", // ✅ Ensures fully static output
  base: "/partialdata.github.io/", // ✅ Required for GitHub Pages subpath support
  integrations: [react()]
});
