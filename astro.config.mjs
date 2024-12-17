import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import compressor from "astro-compressor";
import starlight from "@astrojs/starlight";

export default defineConfig({
  content: {
    collections: {
      blog: './src/content/blog',  // Path to your blog posts
    },
  },
  site: "https://mario-guerra.github.io",
  prefetch: true,
  integrations: [
    tailwind(),
    sitemap(),
    starlight({
      title: "Mario Guerra",
      sidebar: [
        {
          label: "Quick Start Guides",
          autogenerate: { directory: "guides" },
        },
        {
          label: "Tools & Equipment",
          items: [
            { label: "Tool Guides", link: "tools/tool-guides/" },
            { label: "Equipment Care", link: "tools/equipment-care/" },
          ],
        },
        {
          label: "Construction Services",
          autogenerate: { directory: "construction" },
        },
        {
          label: "Advanced Topics",
          autogenerate: { directory: "advanced" },
        },
      ],
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
});
