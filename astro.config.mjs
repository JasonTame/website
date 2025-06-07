// @ts-check
import mdx from '@astrojs/mdx'
import preact from '@astrojs/preact'
import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [mdx(), sitemap(), preact()],

  vite: {
    plugins: [tailwindcss()],
  },
})
