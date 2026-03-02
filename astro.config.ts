import { defineConfig } from "astro/config"
import tailwindcss from "@tailwindcss/vite"
import sitemap from "@astrojs/sitemap"

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: "https://astro-whoami.sivura.com",
  integrations: [sitemap()],

  vite: {
    plugins: [tailwindcss()],
  },

  markdown: {
    shikiConfig: {
      themes: {
        light: "github-light",
        dark: "github-dark",
      },
    },
  },

  adapter: cloudflare(),
})