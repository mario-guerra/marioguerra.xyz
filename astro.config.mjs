import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import compressor from "astro-compressor";
import starlight from "@astrojs/starlight";
import mdx from '@astrojs/mdx';
import { loadEnv } from 'vite'; // Correct import from 'vite'
import transformLinks from "./vite-plugin-transform-links.mjs"


const { PUBLIC_BASE } = loadEnv(import.meta.env.MODE, process.cwd(), '')

export default defineConfig({
  content: {
    collections: {
      blog: './src/content/blog',  // Path to your blog posts
    },
  },
  site: "https://mario-guerra.github.io",
  base: PUBLIC_BASE,
  prefetch: true,
  vite: {
      plugins: [transformLinks()]
  },
  prefetch: true,
    integrations: [
        tailwind(),
        sitemap(),
        starlight({
            title: "Mario Guerra",
            social: {
              github: "https://github.com/mario-guerra/",
            },
            disable404Route: true,
            favicon: "/mario-initial.svg",
            customCss: ["./src/assets/styles/starlight.css"],
        }),
        compressor({ brotli: true }),
    ],
    experimental: {
        clientPrerender: true,
        directRenderScript: true,
    },
    trailingSlash: 'never',
});