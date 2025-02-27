import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  site: "https://partialdata.com", // ✅ Ensures correct absolute URLs
  output: "static", // ✅ Ensures fully static output
  integrations: [react()]
});
