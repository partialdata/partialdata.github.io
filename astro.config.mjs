import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  // ✅ Ensures correct absolute URLs
  site: "https://partialdata.com",

  // ✅ Ensures fully static output
  output: "static",

  integrations: [react()],

  vite: {
    plugins: [tailwindcss()]
  }
});