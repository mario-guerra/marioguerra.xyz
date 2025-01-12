/vercel.json
```
{
    "headers": [
      {
        "source": "/(.*)",
        "headers": [
          {
            "key": "Content-Security-Policy",
            "value": "default-src 'self'; base-uri 'self'; form-action 'self'; frame-src 'self'; frame-ancestors 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https://images.unsplash.com; connect-src 'self'; object-src 'none'; upgrade-insecure-requests; block-all-mixed-content"
          },
          {
            "key": "Permissions-Policy",
            "value": "interest-cohort=()"
          },
          {
            "key": "Referrer-Policy",
            "value": "no-referrer-when-downgrade"
          },
          {
            "key": "X-Content-Type-Options",
            "value": "nosniff"
          },
          {
            "key": "X-Frame-Options",
            "value": "SAMEORIGIN"
          },
          {
            "key": "X-XSS-Protection",
            "value": "1; mode=block"
          },
          {
            "key": "Cache-Control",
            "value": "public, max-age=0, must-revalidate"
          },
          {
            "key": "Strict-Transport-Security",
            "value": "max-age=31536000; includeSubDomains; preload"
          }
        ]
      }
    ]
  }```

/astro.config.mjs
```
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
```

/tailwind.config.mjs
```
/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/preline/preline.js",
  ],
  darkMode: "class",
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#000000",
      white: "#ffffff",
      gray: colors.gray,
      indigo: colors.indigo,
      neutral: colors.neutral, // Used mainly for text color
      yellow: {
        50: "#fefce8",
        100: "#fef9c3",
        400: "#facc15",
        500: "#eab308",
      }, // Accent colors, used mainly for star color, heading and buttons
      orange: {
        100: "#ffedd5",
        200: "#fed7aa",
        300: "#fb713b",
        400: "#fa5a15",
        500: "#e14d0b",
        600: "#ea580c",
      }, // Primary colors, used mainly for links, buttons and svg icons
      red: colors.red, // Used for bookmark icon
      zinc: colors.zinc, // Used mainly for box-shadow
    },
    extend: {
      colors: {
        customBlue: "rgba(32, 79, 141, 0.85)", // Custom background color
      },
    },
  },
  plugins: [
    require("tailwindcss/nesting"),
    require("preline/plugin"),
    require("@tailwindcss/forms"),
  ],
};
```

/package-lock.json
```
{
  "name": "ScrewFast",
  "version": "0.0.1",
  "lockfileVersion": 3,
  "requires": true,
  "packages": {
    "": {
      "version": "0.0.1",
      "dependencies": {
        "@astrojs/check": "^0.9.4",
        "@astrojs/sitemap": "^3.2.1",
        "@astrojs/starlight": "^0.29.2",
        "@astrojs/starlight-tailwind": "^2.0.3",
        "@astrojs/tailwind": "^5.1.2",
        "@preline/accordion": "^2.5.0",
        "@preline/collapse": "^2.5.0",
        "@preline/dropdown": "^2.5.0",
        "@preline/overlay": "^2.5.0",
        "@preline/tabs": "^2.5.0",
        "astro": "^4.16.14",
        "astro-compressor": "^0.4.1",
        "clipboard": "^2.0.11",
        "globby": "^14.0.2",
        "gsap": "^3.12.5",
        "html-minifier-terser": "^7.2.0",
        "lenis": "^1.1.17",
        "preline": "^2.5.1",
        "rimraf": "^6.0.1",
        "sharp": "^0.33.5",
        "sharp-ico": "^0.1.5",
        "tailwindcss": "^3.4.15"
      },
      "devDependencies": {
        "@tailwindcss/forms": "^0.5.9",
        "astro-vtbot": "^1.10.7",
        "prettier": "^3.3.3",
        "prettier-plugin-astro": "^0.14.1",
        "prettier-plugin-tailwindcss": "^0.6.9",
        "typescript": "^5.7.2"
      }
    },
    "node_modules/@alloc/quick-lru": {
      "version": "5.2.0",
      "resolved": "https://registry.npmjs.org/@alloc/quick-lru/-/quick-lru-5.2.0.tgz",
      "integrity": "sha512-UrcABB+4bUrFABwbluTIBErXwvbsU/V7TZWfmbgJfbkwiBuziS9gxdODUyuiecfdGQ85jglMW6juS3+z5TsKLw==",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/@ampproject/remapping": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/@ampproject/remapping/-/remapping-2.3.0.tgz",
      "integrity": "sha512-30iZtAPgz+LTIYoeivqYo853f02jBYSd5uGnGpkFV0M3xOt9aN73erkgYAmZU43x4VfqcnLxW9Kpg3R5LC4YYw==",
      "dependencies": {
        "@jridgewell/gen-mapping": "^0.3.5",
        "@jridgewell/trace-mapping": "^0.3.24"
      },
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/@astrojs/check": {
      "version": "0.9.4",
      "resolved": "https://registry.npmjs.org/@astrojs/check/-/check-0.9.4.tgz",
      "integrity": "sha512-IOheHwCtpUfvogHHsvu0AbeRZEnjJg3MopdLddkJE70mULItS/Vh37BHcI00mcOJcH1vhD3odbpvWokpxam7xA==",
      "dependencies": {
        "@astrojs/language-server": "^2.15.0",
        "chokidar": "^4.0.1",
        "kleur": "^4.1.5",
        "yargs": "^17.7.2"
      },
      "bin": {
        "astro-check": "dist/bin.js"
      },
      "peerDependencies": {
        "typescript": "^5.0.0"
      }
    },
    "node_modules/@astrojs/compiler": {
      "version": "2.10.3",
      "resolved": "https://registry.npmjs.org/@astrojs/compiler/-/compiler-2.10.3.tgz",
      "integrity": "sha512-bL/O7YBxsFt55YHU021oL+xz+B/9HvGNId3F9xURN16aeqDK9juHGktdkCSXz+U4nqFACq6ZFvWomOzhV+zfPw=="
    },
    "node_modules/@astrojs/internal-helpers": {
      "version": "0.4.1",
      "resolved": "https://registry.npmjs.org/@astrojs/internal-helpers/-/internal-helpers-0.4.1.tgz",
      "integrity": "sha512-bMf9jFihO8YP940uD70SI/RDzIhUHJAolWVcO1v5PUivxGKvfLZTLTVVxEYzGYyPsA3ivdLNqMnL5VgmQySa+g=="
    },
    "node_modules/@astrojs/language-server": {
      "version": "2.15.4",
      "resolved": "https://registry.npmjs.org/@astrojs/language-server/-/language-server-2.15.4.tgz",
      "integrity": "sha512-JivzASqTPR2bao9BWsSc/woPHH7OGSGc9aMxXL4U6egVTqBycB3ZHdBJPuOCVtcGLrzdWTosAqVPz1BVoxE0+A==",
      "dependencies": {
        "@astrojs/compiler": "^2.10.3",
        "@astrojs/yaml2ts": "^0.2.2",
        "@jridgewell/sourcemap-codec": "^1.4.15",
        "@volar/kit": "~2.4.7",
        "@volar/language-core": "~2.4.7",
        "@volar/language-server": "~2.4.7",
        "@volar/language-service": "~2.4.7",
        "fast-glob": "^3.2.12",
        "muggle-string": "^0.4.1",
        "volar-service-css": "0.0.62",
        "volar-service-emmet": "0.0.62",
        "volar-service-html": "0.0.62",
        "volar-service-prettier": "0.0.62",
        "volar-service-typescript": "0.0.62",
        "volar-service-typescript-twoslash-queries": "0.0.62",
        "volar-service-yaml": "0.0.62",
        "vscode-html-languageservice": "^5.2.0",
        "vscode-uri": "^3.0.8"
      },
      "bin": {
        "astro-ls": "bin/nodeServer.js"
      },
      "peerDependencies": {
        "prettier": "^3.0.0",
        "prettier-plugin-astro": ">=0.11.0"
      },
      "peerDependenciesMeta": {
        "prettier": {
          "optional": true
        },
        "prettier-plugin-astro": {
          "optional": true
        }
      }
    },
    "node_modules/@astrojs/markdown-remark": {
      "version": "5.3.0",
      "resolved": "https://registry.npmjs.org/@astrojs/markdown-remark/-/markdown-remark-5.3.0.tgz",
      "integrity": "sha512-r0Ikqr0e6ozPb5bvhup1qdWnSPUvQu6tub4ZLYaKyG50BXZ0ej6FhGz3GpChKpH7kglRFPObJd/bDyf2VM9pkg==",
      "dependencies": {
        "@astrojs/prism": "3.1.0",
        "github-slugger": "^2.0.0",
        "hast-util-from-html": "^2.0.3",
        "hast-util-to-text": "^4.0.2",
        "import-meta-resolve": "^4.1.0",
        "mdast-util-definitions": "^6.0.0",
        "rehype-raw": "^7.0.0",
        "rehype-stringify": "^10.0.1",
        "remark-gfm": "^4.0.0",
        "remark-parse": "^11.0.0",
        "remark-rehype": "^11.1.1",
        "remark-smartypants": "^3.0.2",
        "shiki": "^1.22.0",
        "unified": "^11.0.5",
        "unist-util-remove-position": "^5.0.0",
        "unist-util-visit": "^5.0.0",
        "unist-util-visit-parents": "^6.0.1",
        "vfile": "^6.0.3"
      }
    },
    "node_modules/@astrojs/mdx": {
      "version": "3.1.9",
      "resolved": "https://registry.npmjs.org/@astrojs/mdx/-/mdx-3.1.9.tgz",
      "integrity": "sha512-3jPD4Bff6lIA20RQoonnZkRtZ9T3i0HFm6fcDF7BMsKIZ+xBP2KXzQWiuGu62lrVCmU612N+SQVGl5e0fI+zWg==",
      "dependencies": {
        "@astrojs/markdown-remark": "5.3.0",
        "@mdx-js/mdx": "^3.1.0",
        "acorn": "^8.14.0",
        "es-module-lexer": "^1.5.4",
        "estree-util-visit": "^2.0.0",
        "gray-matter": "^4.0.3",
        "hast-util-to-html": "^9.0.3",
        "kleur": "^4.1.5",
        "rehype-raw": "^7.0.0",
        "remark-gfm": "^4.0.0",
        "remark-smartypants": "^3.0.2",
        "source-map": "^0.7.4",
        "unist-util-visit": "^5.0.0",
        "vfile": "^6.0.3"
      },
      "engines": {
        "node": "^18.17.1 || ^20.3.0 || >=21.0.0"
      },
      "peerDependencies": {
        "astro": "^4.8.0"
      }
    },
    "node_modules/@astrojs/prism": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/@astrojs/prism/-/prism-3.1.0.tgz",
      "integrity": "sha512-Z9IYjuXSArkAUx3N6xj6+Bnvx8OdUSHA8YoOgyepp3+zJmtVYJIl/I18GozdJVW1p5u/CNpl3Km7/gwTJK85cw==",
      "dependencies": {
        "prismjs": "^1.29.0"
      },
      "engines": {
        "node": "^18.17.1 || ^20.3.0 || >=21.0.0"
      }
    },
    "node_modules/@astrojs/sitemap": {
      "version": "3.2.1",
      "resolved": "https://registry.npmjs.org/@astrojs/sitemap/-/sitemap-3.2.1.tgz",
      "integrity": "sha512-uxMfO8f7pALq0ADL6Lk68UV6dNYjJ2xGUzyjjVj60JLBs5a6smtlkBYv3tQ0DzoqwS7c9n4FUx5lgv0yPo/fgA==",
      "dependencies": {
        "sitemap": "^8.0.0",
        "stream-replace-string": "^2.0.0",
        "zod": "^3.23.8"
      }
    },
    "node_modules/@astrojs/starlight": {
      "version": "0.29.2",
      "resolved": "https://registry.npmjs.org/@astrojs/starlight/-/starlight-0.29.2.tgz",
      "integrity": "sha512-xv9AhWkP3fxCB6EF6MlT4yEbxzye3aMSbuVbFEGbQh8G/w1MPhdNCnQakIHpmIwwyxwG9cW3mQdAZum4oOO39w==",
      "dependencies": {
        "@astrojs/mdx": "^3.1.3",
        "@astrojs/sitemap": "^3.1.6",
        "@pagefind/default-ui": "^1.0.3",
        "@types/hast": "^3.0.4",
        "@types/mdast": "^4.0.4",
        "astro-expressive-code": "^0.38.3",
        "bcp-47": "^2.1.0",
        "hast-util-from-html": "^2.0.1",
        "hast-util-select": "^6.0.2",
        "hast-util-to-string": "^3.0.0",
        "hastscript": "^9.0.0",
        "i18next": "^23.11.5",
        "js-yaml": "^4.1.0",
        "mdast-util-directive": "^3.0.0",
        "mdast-util-to-markdown": "^2.1.0",
        "mdast-util-to-string": "^4.0.0",
        "pagefind": "^1.0.3",
        "rehype": "^13.0.1",
        "rehype-format": "^5.0.0",
        "remark-directive": "^3.0.0",
        "unified": "^11.0.5",
        "unist-util-visit": "^5.0.0",
        "vfile": "^6.0.2"
      },
      "peerDependencies": {
        "astro": "^4.14.0"
      }
    },
    "node_modules/@astrojs/starlight-tailwind": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/@astrojs/starlight-tailwind/-/starlight-tailwind-2.0.3.tgz",
      "integrity": "sha512-ZwbdXS/9rxYlo3tKZoTZoBPUnaaqek02b341dHwOkmMT0lIR2w+8k0mRUGxnRaYtPdMcaL+nYFd8RUa8sjdyRg==",
      "peerDependencies": {
        "@astrojs/starlight": ">=0.9.0",
        "@astrojs/tailwind": "^5.0.0",
        "tailwindcss": "^3.3.3"
      }
    },
    "node_modules/@astrojs/tailwind": {
      "version": "5.1.2",
      "resolved": "https://registry.npmjs.org/@astrojs/tailwind/-/tailwind-5.1.2.tgz",
      "integrity": "sha512-IvOF0W/dtHElcXvhrPR35nHmhyV3cfz1EzPitMGtU7sYy9Hci3BNK1To6FWmVuuNKPxza1IgCGetSynJZL7fOg==",
      "dependencies": {
        "autoprefixer": "^10.4.20",
        "postcss": "^8.4.47",
        "postcss-load-config": "^4.0.2"
      },
      "peerDependencies": {
        "astro": "^3.0.0 || ^4.0.0 || ^5.0.0-beta.0",
        "tailwindcss": "^3.0.24"
      }
    },
    "node_modules/@astrojs/telemetry": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/@astrojs/telemetry/-/telemetry-3.1.0.tgz",
      "integrity": "sha512-/ca/+D8MIKEC8/A9cSaPUqQNZm+Es/ZinRv0ZAzvu2ios7POQSsVD+VOj7/hypWNsNM3T7RpfgNq7H2TU1KEHA==",
      "dependencies": {
        "ci-info": "^4.0.0",
        "debug": "^4.3.4",
        "dlv": "^1.1.3",
        "dset": "^3.1.3",
        "is-docker": "^3.0.0",
        "is-wsl": "^3.0.0",
        "which-pm-runs": "^1.1.0"
      },
      "engines": {
        "node": "^18.17.1 || ^20.3.0 || >=21.0.0"
      }
    },
    "node_modules/@astrojs/yaml2ts": {
      "version": "0.2.2",
      "resolved": "https://registry.npmjs.org/@astrojs/yaml2ts/-/yaml2ts-0.2.2.tgz",
      "integrity": "sha512-GOfvSr5Nqy2z5XiwqTouBBpy5FyI6DEe+/g/Mk5am9SjILN1S5fOEvYK0GuWHg98yS/dobP4m8qyqw/URW35fQ==",
      "dependencies": {
        "yaml": "^2.5.0"
      }
    },
    "node_modules/@babel/code-frame": {
      "version": "7.26.2",
      "resolved": "https://registry.npmjs.org/@babel/code-frame/-/code-frame-7.26.2.tgz",
      "integrity": "sha512-RJlIHRueQgwWitWgF8OdFYGZX328Ax5BCemNGlqHfplnRT9ESi8JkFlvaVYbS+UubVY6dpv87Fs2u5M29iNFVQ==",
      "dependencies": {
        "@babel/helper-validator-identifier": "^7.25.9",
        "js-tokens": "^4.0.0",
        "picocolors": "^1.0.0"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/compat-data": {
      "version": "7.26.2",
      "resolved": "https://registry.npmjs.org/@babel/compat-data/-/compat-data-7.26.2.tgz",
      "integrity": "sha512-Z0WgzSEa+aUcdiJuCIqgujCshpMWgUpgOxXotrYPSA53hA3qopNaqcJpyr0hVb1FeWdnqFA35/fUtXgBK8srQg==",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/core": {
      "version": "7.26.0",
      "resolved": "https://registry.npmjs.org/@babel/core/-/core-7.26.0.tgz",
      "integrity": "sha512-i1SLeK+DzNnQ3LL/CswPCa/E5u4lh1k6IAEphON8F+cXt0t9euTshDru0q7/IqMa1PMPz5RnHuHscF8/ZJsStg==",
      "dependencies": {
        "@ampproject/remapping": "^2.2.0",
        "@babel/code-frame": "^7.26.0",
        "@babel/generator": "^7.26.0",
        "@babel/helper-compilation-targets": "^7.25.9",
        "@babel/helper-module-transforms": "^7.26.0",
        "@babel/helpers": "^7.26.0",
        "@babel/parser": "^7.26.0",
        "@babel/template": "^7.25.9",
        "@babel/traverse": "^7.25.9",
        "@babel/types": "^7.26.0",
        "convert-source-map": "^2.0.0",
        "debug": "^4.1.0",
        "gensync": "^1.0.0-beta.2",
        "json5": "^2.2.3",
        "semver": "^6.3.1"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/babel"
      }
    },
    "node_modules/@babel/core/node_modules/semver": {
      "version": "6.3.1",
      "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.1.tgz",
      "integrity": "sha512-BR7VvDCVHO+q2xBEWskxS6DJE1qRnb7DxzUrogb71CWoSficBxYsiAGd+Kl0mmq/MprG9yArRkyrQxTO6XjMzA==",
      "bin": {
        "semver": "bin/semver.js"
      }
    },
    "node_modules/@babel/generator": {
      "version": "7.26.2",
      "resolved": "https://registry.npmjs.org/@babel/generator/-/generator-7.26.2.tgz",
      "integrity": "sha512-zevQbhbau95nkoxSq3f/DC/SC+EEOUZd3DYqfSkMhY2/wfSeaHV1Ew4vk8e+x8lja31IbyuUa2uQ3JONqKbysw==",
      "dependencies": {
        "@babel/parser": "^7.26.2",
        "@babel/types": "^7.26.0",
        "@jridgewell/gen-mapping": "^0.3.5",
        "@jridgewell/trace-mapping": "^0.3.25",
        "jsesc": "^3.0.2"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-annotate-as-pure": {
      "version": "7.25.9",
      "resolved": "https://registry.npmjs.org/@babel/helper-annotate-as-pure/-/helper-annotate-as-pure-7.25.9.tgz",
      "integrity": "sha512-gv7320KBUFJz1RnylIg5WWYPRXKZ884AGkYpgpWW02TH66Dl+HaC1t1CKd0z3R4b6hdYEcmrNZHUmfCP+1u3/g==",
      "dependencies": {
        "@babel/types": "^7.25.9"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-compilation-targets": {
      "version": "7.25.9",
      "resolved": "https://registry.npmjs.org/@babel/helper-compilation-targets/-/helper-compilation-targets-7.25.9.tgz",
      "integrity": "sha512-j9Db8Suy6yV/VHa4qzrj9yZfZxhLWQdVnRlXxmKLYlhWUVB1sB2G5sxuWYXk/whHD9iW76PmNzxZ4UCnTQTVEQ==",
      "dependencies": {
        "@babel/compat-data": "^7.25.9",
        "@babel/helper-validator-option": "^7.25.9",
        "browserslist": "^4.24.0",
        "lru-cache": "^5.1.1",
        "semver": "^6.3.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-compilation-targets/node_modules/semver": {
      "version": "6.3.1",
      "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.1.tgz",
      "integrity": "sha512-BR7VvDCVHO+q2xBEWskxS6DJE1qRnb7DxzUrogb71CWoSficBxYsiAGd+Kl0mmq/MprG9yArRkyrQxTO6XjMzA==",
      "bin": {
        "semver": "bin/semver.js"
      }
    },
    "node_modules/@babel/helper-module-imports": {
      "version": "7.25.9",
      "resolved": "https://registry.npmjs.org/@babel/helper-module-imports/-/helper-module-imports-7.25.9.tgz",
      "integrity": "sha512-tnUA4RsrmflIM6W6RFTLFSXITtl0wKjgpnLgXyowocVPrbYrLUXSBXDgTs8BlbmIzIdlBySRQjINYs2BAkiLtw==",
      "dependencies": {
        "@babel/traverse": "^7.25.9",
        "@babel/types": "^7.25.9"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-module-transforms": {
      "version": "7.26.0",
      "resolved": "https://registry.npmjs.org/@babel/helper-module-transforms/-/helper-module-transforms-7.26.0.tgz",
      "integrity": "sha512-xO+xu6B5K2czEnQye6BHA7DolFFmS3LB7stHZFaOLb1pAwO1HWLS8fXA+eh0A2yIvltPVmx3eNNDBJA2SLHXFw==",
      "dependencies": {
        "@babel/helper-module-imports": "^7.25.9",
        "@babel/helper-validator-identifier": "^7.25.9",
        "@babel/traverse": "^7.25.9"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0"
      }
    },
    "node_modules/@babel/helper-plugin-utils": {
      "version": "7.25.9",
      "resolved": "https://registry.npmjs.org/@babel/helper-plugin-utils/-/helper-plugin-utils-7.25.9.tgz",
      "integrity": "sha512-kSMlyUVdWe25rEsRGviIgOWnoT/nfABVWlqt9N19/dIPWViAOW2s9wznP5tURbs/IDuNk4gPy3YdYRgH3uxhBw==",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-string-parser": {
      "version": "7.25.9",
      "resolved": "https://registry.npmjs.org/@babel/helper-string-parser/-/helper-string-parser-7.25.9.tgz",
      "integrity": "sha512-4A/SCr/2KLd5jrtOMFzaKjVtAei3+2r/NChoBNoZ3EyP/+GlhoaEGoWOZUmFmoITP7zOJyHIMm+DYRd8o3PvHA==",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-validator-identifier": {
      "version": "7.25.9",
      "resolved": "https://registry.npmjs.org/@babel/helper-validator-identifier/-/helper-validator-identifier-7.25.9.tgz",
      "integrity": "sha512-Ed61U6XJc3CVRfkERJWDz4dJwKe7iLmmJsbOGu9wSloNSFttHV0I8g6UAgb7qnK5ly5bGLPd4oXZlxCdANBOWQ==",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-validator-option": {
      "version": "7.25.9",
      "resolved": "https://registry.npmjs.org/@babel/helper-validator-option/-/helper-validator-option-7.25.9.tgz",
      "integrity": "sha512-e/zv1co8pp55dNdEcCynfj9X7nyUKUXoUEwfXqaZt0omVOmDe9oOTdKStH4GmAw6zxMFs50ZayuMfHDKlO7Tfw==",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helpers": {
      "version": "7.26.0",
      "resolved": "https://registry.npmjs.org/@babel/helpers/-/helpers-7.26.0.tgz",
      "integrity": "sha512-tbhNuIxNcVb21pInl3ZSjksLCvgdZy9KwJ8brv993QtIVKJBBkYXz4q4ZbAv31GdnC+R90np23L5FbEBlthAEw==",
      "dependencies": {
        "@babel/template": "^7.25.9",
        "@babel/types": "^7.26.0"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/parser": {
      "version": "7.26.2",
      "resolved": "https://registry.npmjs.org/@babel/parser/-/parser-7.26.2.tgz",
      "integrity": "sha512-DWMCZH9WA4Maitz2q21SRKHo9QXZxkDsbNZoVD62gusNtNBBqDg9i7uOhASfTfIGNzW+O+r7+jAlM8dwphcJKQ==",
      "dependencies": {
        "@babel/types": "^7.26.0"
      },
      "bin": {
        "parser": "bin/babel-parser.js"
      },
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/@babel/plugin-syntax-jsx": {
      "version": "7.25.9",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-jsx/-/plugin-syntax-jsx-7.25.9.tgz",
      "integrity": "sha512-ld6oezHQMZsZfp6pWtbjaNDF2tiiCYYDqQszHt5VV437lewP9aSi2Of99CK0D0XB21k7FLgnLcmQKyKzynfeAA==",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.25.9"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-react-jsx": {
      "version": "7.25.9",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-react-jsx/-/plugin-transform-react-jsx-7.25.9.tgz",
      "integrity": "sha512-s5XwpQYCqGerXl+Pu6VDL3x0j2d82eiV77UJ8a2mDHAW7j9SWRqQ2y1fNo1Z74CdcYipl5Z41zvjj4Nfzq36rw==",
      "dependencies": {
        "@babel/helper-annotate-as-pure": "^7.25.9",
        "@babel/helper-module-imports": "^7.25.9",
        "@babel/helper-plugin-utils": "^7.25.9",
        "@babel/plugin-syntax-jsx": "^7.25.9",
        "@babel/types": "^7.25.9"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/runtime": {
      "version": "7.26.0",
      "resolved": "https://registry.npmjs.org/@babel/runtime/-/runtime-7.26.0.tgz",
      "integrity": "sha512-FDSOghenHTiToteC/QRlv2q3DhPZ/oOXTBoirfWNx1Cx3TMVcGWQtMMmQcSvb/JjpNeGzx8Pq/b4fKEJuWm1sw==",
      "dependencies": {
        "regenerator-runtime": "^0.14.0"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/template": {
      "version": "7.25.9",
      "resolved": "https://registry.npmjs.org/@babel/template/-/template-7.25.9.tgz",
      "integrity": "sha512-9DGttpmPvIxBb/2uwpVo3dqJ+O6RooAFOS+lB+xDqoE2PVCE8nfoHMdZLpfCQRLwvohzXISPZcgxt80xLfsuwg==",
      "dependencies": {
        "@babel/code-frame": "^7.25.9",
        "@babel/parser": "^7.25.9",
        "@babel/types": "^7.25.9"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/traverse": {
      "version": "7.25.9",
      "resolved": "https://registry.npmjs.org/@babel/traverse/-/traverse-7.25.9.tgz",
      "integrity": "sha512-ZCuvfwOwlz/bawvAuvcj8rrithP2/N55Tzz342AkTvq4qaWbGfmCk/tKhNaV2cthijKrPAA8SRJV5WWe7IBMJw==",
      "dependencies": {
        "@babel/code-frame": "^7.25.9",
        "@babel/generator": "^7.25.9",
        "@babel/parser": "^7.25.9",
        "@babel/template": "^7.25.9",
        "@babel/types": "^7.25.9",
        "debug": "^4.3.1",
        "globals": "^11.1.0"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/types": {
      "version": "7.26.0",
      "resolved": "https://registry.npmjs.org/@babel/types/-/types-7.26.0.tgz",
      "integrity": "sha512-Z/yiTPj+lDVnF7lWeKCIJzaIkI0vYO87dMpZ4bg4TDrFe4XXLFWL1TbXU27gBP3QccxV9mZICCrnjnYlJjXHOA==",
      "dependencies": {
        "@babel/helper-string-parser": "^7.25.9",
        "@babel/helper-validator-identifier": "^7.25.9"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@canvas/image-data": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/@canvas/image-data/-/image-data-1.0.0.tgz",
      "integrity": "sha512-BxOqI5LgsIQP1odU5KMwV9yoijleOPzHL18/YvNqF9KFSGF2K/DLlYAbDQsWqd/1nbaFuSkYD/191dpMtNh4vw=="
    },
    "node_modules/@ctrl/tinycolor": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/@ctrl/tinycolor/-/tinycolor-4.1.0.tgz",
      "integrity": "sha512-WyOx8cJQ+FQus4Mm4uPIZA64gbk3Wxh0so5Lcii0aJifqwoVOlfFtorjLE0Hen4OYyHZMXDWqMmaQemBhgxFRQ==",
      "engines": {
        "node": ">=14"
      }
    },
    "node_modules/@emmetio/abbreviation": {
      "version": "2.3.3",
      "resolved": "https://registry.npmjs.org/@emmetio/abbreviation/-/abbreviation-2.3.3.tgz",
      "integrity": "sha512-mgv58UrU3rh4YgbE/TzgLQwJ3pFsHHhCLqY20aJq+9comytTXUDNGG/SMtSeMJdkpxgXSXunBGLD8Boka3JyVA==",
      "dependencies": {
        "@emmetio/scanner": "^1.0.4"
      }
    },
    "node_modules/@emmetio/css-abbreviation": {
      "version": "2.1.8",
      "resolved": "https://registry.npmjs.org/@emmetio/css-abbreviation/-/css-abbreviation-2.1.8.tgz",
      "integrity": "sha512-s9yjhJ6saOO/uk1V74eifykk2CBYi01STTK3WlXWGOepyKa23ymJ053+DNQjpFcy1ingpaO7AxCcwLvHFY9tuw==",
      "dependencies": {
        "@emmetio/scanner": "^1.0.4"
      }
    },
    "node_modules/@emmetio/css-parser": {
      "version": "0.4.0",
      "resolved": "https://registry.npmjs.org/@emmetio/css-parser/-/css-parser-0.4.0.tgz",
      "integrity": "sha512-z7wkxRSZgrQHXVzObGkXG+Vmj3uRlpM11oCZ9pbaz0nFejvCDmAiNDpY75+wgXOcffKpj4rzGtwGaZxfJKsJxw==",
      "dependencies": {
        "@emmetio/stream-reader": "^2.2.0",
        "@emmetio/stream-reader-utils": "^0.1.0"
      }
    },
    "node_modules/@emmetio/html-matcher": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/@emmetio/html-matcher/-/html-matcher-1.3.0.tgz",
      "integrity": "sha512-NTbsvppE5eVyBMuyGfVu2CRrLvo7J4YHb6t9sBFLyY03WYhXET37qA4zOYUjBWFCRHO7pS1B9khERtY0f5JXPQ==",
      "dependencies": {
        "@emmetio/scanner": "^1.0.0"
      }
    },
    "node_modules/@emmetio/scanner": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/@emmetio/scanner/-/scanner-1.0.4.tgz",
      "integrity": "sha512-IqRuJtQff7YHHBk4G8YZ45uB9BaAGcwQeVzgj/zj8/UdOhtQpEIupUhSk8dys6spFIWVZVeK20CzGEnqR5SbqA=="
    },
    "node_modules/@emmetio/stream-reader": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/@emmetio/stream-reader/-/stream-reader-2.2.0.tgz",
      "integrity": "sha512-fXVXEyFA5Yv3M3n8sUGT7+fvecGrZP4k6FnWWMSZVQf69kAq0LLpaBQLGcPR30m3zMmKYhECP4k/ZkzvhEW5kw=="
    },
    "node_modules/@emmetio/stream-reader-utils": {
      "version": "0.1.0",
      "resolved": "https://registry.npmjs.org/@emmetio/stream-reader-utils/-/stream-reader-utils-0.1.0.tgz",
      "integrity": "sha512-ZsZ2I9Vzso3Ho/pjZFsmmZ++FWeEd/txqybHTm4OgaZzdS8V9V/YYWQwg5TC38Z7uLWUV1vavpLLbjJtKubR1A=="
    },
    "node_modules/@emnapi/runtime": {
      "version": "1.3.1",
      "resolved": "https://registry.npmjs.org/@emnapi/runtime/-/runtime-1.3.1.tgz",
      "integrity": "sha512-kEBmG8KyqtxJZv+ygbEim+KCGtIq1fC22Ms3S4ziXmYKm8uyoLX0MHONVKwp+9opg390VaKRNt4a7A9NwmpNhw==",
      "optional": true,
      "dependencies": {
        "tslib": "^2.4.0"
      }
    },
    "node_modules/@esbuild/aix-ppc64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/aix-ppc64/-/aix-ppc64-0.21.5.tgz",
      "integrity": "sha512-1SDgH6ZSPTlggy1yI6+Dbkiz8xzpHJEVAlF/AM1tHPLsf5STom9rwtjE4hKAF20FfXXNTFqEYXyJNWh1GiZedQ==",
      "cpu": [
        "ppc64"
      ],
      "optional": true,
      "os": [
        "aix"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/android-arm": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/android-arm/-/android-arm-0.21.5.tgz",
      "integrity": "sha512-vCPvzSjpPHEi1siZdlvAlsPxXl7WbOVUBBAowWug4rJHb68Ox8KualB+1ocNvT5fjv6wpkX6o/iEpbDrf68zcg==",
      "cpu": [
        "arm"
      ],
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/android-arm64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/android-arm64/-/android-arm64-0.21.5.tgz",
      "integrity": "sha512-c0uX9VAUBQ7dTDCjq+wdyGLowMdtR/GoC2U5IYk/7D1H1JYC0qseD7+11iMP2mRLN9RcCMRcjC4YMclCzGwS/A==",
      "cpu": [
        "arm64"
      ],
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/android-x64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/android-x64/-/android-x64-0.21.5.tgz",
      "integrity": "sha512-D7aPRUUNHRBwHxzxRvp856rjUHRFW1SdQATKXH2hqA0kAZb1hKmi02OpYRacl0TxIGz/ZmXWlbZgjwWYaCakTA==",
      "cpu": [
        "x64"
      ],
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/darwin-arm64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/darwin-arm64/-/darwin-arm64-0.21.5.tgz",
      "integrity": "sha512-DwqXqZyuk5AiWWf3UfLiRDJ5EDd49zg6O9wclZ7kUMv2WRFr4HKjXp/5t8JZ11QbQfUS6/cRCKGwYhtNAY88kQ==",
      "cpu": [
        "arm64"
      ],
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/darwin-x64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/darwin-x64/-/darwin-x64-0.21.5.tgz",
      "integrity": "sha512-se/JjF8NlmKVG4kNIuyWMV/22ZaerB+qaSi5MdrXtd6R08kvs2qCN4C09miupktDitvh8jRFflwGFBQcxZRjbw==",
      "cpu": [
        "x64"
      ],
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/freebsd-arm64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/freebsd-arm64/-/freebsd-arm64-0.21.5.tgz",
      "integrity": "sha512-5JcRxxRDUJLX8JXp/wcBCy3pENnCgBR9bN6JsY4OmhfUtIHe3ZW0mawA7+RDAcMLrMIZaf03NlQiX9DGyB8h4g==",
      "cpu": [
        "arm64"
      ],
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/freebsd-x64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/freebsd-x64/-/freebsd-x64-0.21.5.tgz",
      "integrity": "sha512-J95kNBj1zkbMXtHVH29bBriQygMXqoVQOQYA+ISs0/2l3T9/kj42ow2mpqerRBxDJnmkUDCaQT/dfNXWX/ZZCQ==",
      "cpu": [
        "x64"
      ],
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/linux-arm": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-arm/-/linux-arm-0.21.5.tgz",
      "integrity": "sha512-bPb5AHZtbeNGjCKVZ9UGqGwo8EUu4cLq68E95A53KlxAPRmUyYv2D6F0uUI65XisGOL1hBP5mTronbgo+0bFcA==",
      "cpu": [
        "arm"
      ],
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/linux-arm64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-arm64/-/linux-arm64-0.21.5.tgz",
      "integrity": "sha512-ibKvmyYzKsBeX8d8I7MH/TMfWDXBF3db4qM6sy+7re0YXya+K1cem3on9XgdT2EQGMu4hQyZhan7TeQ8XkGp4Q==",
      "cpu": [
        "arm64"
      ],
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/linux-ia32": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-ia32/-/linux-ia32-0.21.5.tgz",
      "integrity": "sha512-YvjXDqLRqPDl2dvRODYmmhz4rPeVKYvppfGYKSNGdyZkA01046pLWyRKKI3ax8fbJoK5QbxblURkwK/MWY18Tg==",
      "cpu": [
        "ia32"
      ],
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/linux-loong64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-loong64/-/linux-loong64-0.21.5.tgz",
      "integrity": "sha512-uHf1BmMG8qEvzdrzAqg2SIG/02+4/DHB6a9Kbya0XDvwDEKCoC8ZRWI5JJvNdUjtciBGFQ5PuBlpEOXQj+JQSg==",
      "cpu": [
        "loong64"
      ],
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/linux-mips64el": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-mips64el/-/linux-mips64el-0.21.5.tgz",
      "integrity": "sha512-IajOmO+KJK23bj52dFSNCMsz1QP1DqM6cwLUv3W1QwyxkyIWecfafnI555fvSGqEKwjMXVLokcV5ygHW5b3Jbg==",
      "cpu": [
        "mips64el"
      ],
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/linux-ppc64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-ppc64/-/linux-ppc64-0.21.5.tgz",
      "integrity": "sha512-1hHV/Z4OEfMwpLO8rp7CvlhBDnjsC3CttJXIhBi+5Aj5r+MBvy4egg7wCbe//hSsT+RvDAG7s81tAvpL2XAE4w==",
      "cpu": [
        "ppc64"
      ],
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/linux-riscv64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-riscv64/-/linux-riscv64-0.21.5.tgz",
      "integrity": "sha512-2HdXDMd9GMgTGrPWnJzP2ALSokE/0O5HhTUvWIbD3YdjME8JwvSCnNGBnTThKGEB91OZhzrJ4qIIxk/SBmyDDA==",
      "cpu": [
        "riscv64"
      ],
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/linux-s390x": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-s390x/-/linux-s390x-0.21.5.tgz",
      "integrity": "sha512-zus5sxzqBJD3eXxwvjN1yQkRepANgxE9lgOW2qLnmr8ikMTphkjgXu1HR01K4FJg8h1kEEDAqDcZQtbrRnB41A==",
      "cpu": [
        "s390x"
      ],
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/linux-x64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-x64/-/linux-x64-0.21.5.tgz",
      "integrity": "sha512-1rYdTpyv03iycF1+BhzrzQJCdOuAOtaqHTWJZCWvijKD2N5Xu0TtVC8/+1faWqcP9iBCWOmjmhoH94dH82BxPQ==",
      "cpu": [
        "x64"
      ],
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/netbsd-x64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/netbsd-x64/-/netbsd-x64-0.21.5.tgz",
      "integrity": "sha512-Woi2MXzXjMULccIwMnLciyZH4nCIMpWQAs049KEeMvOcNADVxo0UBIQPfSmxB3CWKedngg7sWZdLvLczpe0tLg==",
      "cpu": [
        "x64"
      ],
      "optional": true,
      "os": [
        "netbsd"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/openbsd-x64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/openbsd-x64/-/openbsd-x64-0.21.5.tgz",
      "integrity": "sha512-HLNNw99xsvx12lFBUwoT8EVCsSvRNDVxNpjZ7bPn947b8gJPzeHWyNVhFsaerc0n3TsbOINvRP2byTZ5LKezow==",
      "cpu": [
        "x64"
      ],
      "optional": true,
      "os": [
        "openbsd"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/sunos-x64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/sunos-x64/-/sunos-x64-0.21.5.tgz",
      "integrity": "sha512-6+gjmFpfy0BHU5Tpptkuh8+uw3mnrvgs+dSPQXQOv3ekbordwnzTVEb4qnIvQcYXq6gzkyTnoZ9dZG+D4garKg==",
      "cpu": [
        "x64"
      ],
      "optional": true,
      "os": [
        "sunos"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/win32-arm64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/win32-arm64/-/win32-arm64-0.21.5.tgz",
      "integrity": "sha512-Z0gOTd75VvXqyq7nsl93zwahcTROgqvuAcYDUr+vOv8uHhNSKROyU961kgtCD1e95IqPKSQKH7tBTslnS3tA8A==",
      "cpu": [
        "arm64"
      ],
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/win32-ia32": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/win32-ia32/-/win32-ia32-0.21.5.tgz",
      "integrity": "sha512-SWXFF1CL2RVNMaVs+BBClwtfZSvDgtL//G/smwAc5oVK/UPu2Gu9tIaRgFmYFFKrmg3SyAjSrElf0TiJ1v8fYA==",
      "cpu": [
        "ia32"
      ],
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/win32-x64": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/@esbuild/win32-x64/-/win32-x64-0.21.5.tgz",
      "integrity": "sha512-tQd/1efJuzPC6rCFwEvLtci/xNFcTZknmXs98FYDfGE4wP9ClFV98nyKrzJKVPMhdDnjzLhdUyMX4PsQAPjwIw==",
      "cpu": [
        "x64"
      ],
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@expressive-code/core": {
      "version": "0.38.3",
      "resolved": "https://registry.npmjs.org/@expressive-code/core/-/core-0.38.3.tgz",
      "integrity": "sha512-s0/OtdRpBONwcn23O8nVwDNQqpBGKscysejkeBkwlIeHRLZWgiTVrusT5Idrdz1d8cW5wRk9iGsAIQmwDPXgJg==",
      "dependencies": {
        "@ctrl/tinycolor": "^4.0.4",
        "hast-util-select": "^6.0.2",
        "hast-util-to-html": "^9.0.1",
        "hast-util-to-text": "^4.0.1",
        "hastscript": "^9.0.0",
        "postcss": "^8.4.38",
        "postcss-nested": "^6.0.1",
        "unist-util-visit": "^5.0.0",
        "unist-util-visit-parents": "^6.0.1"
      }
    },
    "node_modules/@expressive-code/plugin-frames": {
      "version": "0.38.3",
      "resolved": "https://registry.npmjs.org/@expressive-code/plugin-frames/-/plugin-frames-0.38.3.tgz",
      "integrity": "sha512-qL2oC6FplmHNQfZ8ZkTR64/wKo9x0c8uP2WDftR/ydwN/yhe1ed7ZWYb8r3dezxsls+tDokCnN4zYR594jbpvg==",
      "dependencies": {
        "@expressive-code/core": "^0.38.3"
      }
    },
    "node_modules/@expressive-code/plugin-shiki": {
      "version": "0.38.3",
      "resolved": "https://registry.npmjs.org/@expressive-code/plugin-shiki/-/plugin-shiki-0.38.3.tgz",
      "integrity": "sha512-kqHnglZeesqG3UKrb6e9Fq5W36AZ05Y9tCREmSN2lw8LVTqENIeCIkLDdWtQ5VoHlKqwUEQFTVlRehdwoY7Gmw==",
      "dependencies": {
        "@expressive-code/core": "^0.38.3",
        "shiki": "^1.22.2"
      }
    },
    "node_modules/@expressive-code/plugin-text-markers": {
      "version": "0.38.3",
      "resolved": "https://registry.npmjs.org/@expressive-code/plugin-text-markers/-/plugin-text-markers-0.38.3.tgz",
      "integrity": "sha512-dPK3+BVGTbTmGQGU3Fkj3jZ3OltWUAlxetMHI6limUGCWBCucZiwoZeFM/WmqQa71GyKRzhBT+iEov6kkz2xVA==",
      "dependencies": {
        "@expressive-code/core": "^0.38.3"
      }
    },
    "node_modules/@img/sharp-darwin-arm64": {
      "version": "0.33.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-darwin-arm64/-/sharp-darwin-arm64-0.33.5.tgz",
      "integrity": "sha512-UT4p+iz/2H4twwAoLCqfA9UH5pI6DggwKEGuaPy7nCVQ8ZsiY5PIcrRvD1DzuY3qYL07NtIQcWnBSY/heikIFQ==",
      "cpu": [
        "arm64"
      ],
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-darwin-arm64": "1.0.4"
      }
    },
    "node_modules/@img/sharp-darwin-x64": {
      "version": "0.33.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-darwin-x64/-/sharp-darwin-x64-0.33.5.tgz",
      "integrity": "sha512-fyHac4jIc1ANYGRDxtiqelIbdWkIuQaI84Mv45KvGRRxSAa7o7d1ZKAOBaYbnepLC1WqxfpimdeWfvqqSGwR2Q==",
      "cpu": [
        "x64"
      ],
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-darwin-x64": "1.0.4"
      }
    },
    "node_modules/@img/sharp-libvips-darwin-arm64": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-darwin-arm64/-/sharp-libvips-darwin-arm64-1.0.4.tgz",
      "integrity": "sha512-XblONe153h0O2zuFfTAbQYAX2JhYmDHeWikp1LM9Hul9gVPjFY427k6dFEcOL72O01QxQsWi761svJ/ev9xEDg==",
      "cpu": [
        "arm64"
      ],
      "optional": true,
      "os": [
        "darwin"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-darwin-x64": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-darwin-x64/-/sharp-libvips-darwin-x64-1.0.4.tgz",
      "integrity": "sha512-xnGR8YuZYfJGmWPvmlunFaWJsb9T/AO2ykoP3Fz/0X5XV2aoYBPkX6xqCQvUTKKiLddarLaxpzNe+b1hjeWHAQ==",
      "cpu": [
        "x64"
      ],
      "optional": true,
      "os": [
        "darwin"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linux-arm": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linux-arm/-/sharp-libvips-linux-arm-1.0.5.tgz",
      "integrity": "sha512-gvcC4ACAOPRNATg/ov8/MnbxFDJqf/pDePbBnuBDcjsI8PssmjoKMAz4LtLaVi+OnSb5FK/yIOamqDwGmXW32g==",
      "cpu": [
        "arm"
      ],
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linux-arm64": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linux-arm64/-/sharp-libvips-linux-arm64-1.0.4.tgz",
      "integrity": "sha512-9B+taZ8DlyyqzZQnoeIvDVR/2F4EbMepXMc/NdVbkzsJbzkUjhXv/70GQJ7tdLA4YJgNP25zukcxpX2/SueNrA==",
      "cpu": [
        "arm64"
      ],
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linux-s390x": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linux-s390x/-/sharp-libvips-linux-s390x-1.0.4.tgz",
      "integrity": "sha512-u7Wz6ntiSSgGSGcjZ55im6uvTrOxSIS8/dgoVMoiGE9I6JAfU50yH5BoDlYA1tcuGS7g/QNtetJnxA6QEsCVTA==",
      "cpu": [
        "s390x"
      ],
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linux-x64": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linux-x64/-/sharp-libvips-linux-x64-1.0.4.tgz",
      "integrity": "sha512-MmWmQ3iPFZr0Iev+BAgVMb3ZyC4KeFc3jFxnNbEPas60e1cIfevbtuyf9nDGIzOaW9PdnDciJm+wFFaTlj5xYw==",
      "cpu": [
        "x64"
      ],
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linuxmusl-arm64": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linuxmusl-arm64/-/sharp-libvips-linuxmusl-arm64-1.0.4.tgz",
      "integrity": "sha512-9Ti+BbTYDcsbp4wfYib8Ctm1ilkugkA/uscUn6UXK1ldpC1JjiXbLfFZtRlBhjPZ5o1NCLiDbg8fhUPKStHoTA==",
      "cpu": [
        "arm64"
      ],
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linuxmusl-x64": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linuxmusl-x64/-/sharp-libvips-linuxmusl-x64-1.0.4.tgz",
      "integrity": "sha512-viYN1KX9m+/hGkJtvYYp+CCLgnJXwiQB39damAO7WMdKWlIhmYTfHjwSbQeUK/20vY154mwezd9HflVFM1wVSw==",
      "cpu": [
        "x64"
      ],
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-linux-arm": {
      "version": "0.33.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-linux-arm/-/sharp-linux-arm-0.33.5.tgz",
      "integrity": "sha512-JTS1eldqZbJxjvKaAkxhZmBqPRGmxgu+qFKSInv8moZ2AmT5Yib3EQ1c6gp493HvrvV8QgdOXdyaIBrhvFhBMQ==",
      "cpu": [
        "arm"
      ],
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linux-arm": "1.0.5"
      }
    },
    "node_modules/@img/sharp-linux-arm64": {
      "version": "0.33.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-linux-arm64/-/sharp-linux-arm64-0.33.5.tgz",
      "integrity": "sha512-JMVv+AMRyGOHtO1RFBiJy/MBsgz0x4AWrT6QoEVVTyh1E39TrCUpTRI7mx9VksGX4awWASxqCYLCV4wBZHAYxA==",
      "cpu": [
        "arm64"
      ],
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linux-arm64": "1.0.4"
      }
    },
    "node_modules/@img/sharp-linux-s390x": {
      "version": "0.33.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-linux-s390x/-/sharp-linux-s390x-0.33.5.tgz",
      "integrity": "sha512-y/5PCd+mP4CA/sPDKl2961b+C9d+vPAveS33s6Z3zfASk2j5upL6fXVPZi7ztePZ5CuH+1kW8JtvxgbuXHRa4Q==",
      "cpu": [
        "s390x"
      ],
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linux-s390x": "1.0.4"
      }
    },
    "node_modules/@img/sharp-linux-x64": {
      "version": "0.33.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-linux-x64/-/sharp-linux-x64-0.33.5.tgz",
      "integrity": "sha512-opC+Ok5pRNAzuvq1AG0ar+1owsu842/Ab+4qvU879ippJBHvyY5n2mxF1izXqkPYlGuP/M556uh53jRLJmzTWA==",
      "cpu": [
        "x64"
      ],
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linux-x64": "1.0.4"
      }
    },
    "node_modules/@img/sharp-linuxmusl-arm64": {
      "version": "0.33.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-linuxmusl-arm64/-/sharp-linuxmusl-arm64-0.33.5.tgz",
      "integrity": "sha512-XrHMZwGQGvJg2V/oRSUfSAfjfPxO+4DkiRh6p2AFjLQztWUuY/o8Mq0eMQVIY7HJ1CDQUJlxGGZRw1a5bqmd1g==",
      "cpu": [
        "arm64"
      ],
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linuxmusl-arm64": "1.0.4"
      }
    },
    "node_modules/@img/sharp-linuxmusl-x64": {
      "version": "0.33.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-linuxmusl-x64/-/sharp-linuxmusl-x64-0.33.5.tgz",
      "integrity": "sha512-WT+d/cgqKkkKySYmqoZ8y3pxx7lx9vVejxW/W4DOFMYVSkErR+w7mf2u8m/y4+xHe7yY9DAXQMWQhpnMuFfScw==",
      "cpu": [
        "x64"
      ],
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linuxmusl-x64": "1.0.4"
      }
    },
    "node_modules/@img/sharp-wasm32": {
      "version": "0.33.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-wasm32/-/sharp-wasm32-0.33.5.tgz",
      "integrity": "sha512-ykUW4LVGaMcU9lu9thv85CbRMAwfeadCJHRsg2GmeRa/cJxsVY9Rbd57JcMxBkKHag5U/x7TSBpScF4U8ElVzg==",
      "cpu": [
        "wasm32"
      ],
      "optional": true,
      "dependencies": {
        "@emnapi/runtime": "^1.2.0"
      },
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-win32-ia32": {
      "version": "0.33.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-win32-ia32/-/sharp-win32-ia32-0.33.5.tgz",
      "integrity": "sha512-T36PblLaTwuVJ/zw/LaH0PdZkRz5rd3SmMHX8GSmR7vtNSP5Z6bQkExdSK7xGWyxLw4sUknBuugTelgw2faBbQ==",
      "cpu": [
        "ia32"
      ],
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-win32-x64": {
      "version": "0.33.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-win32-x64/-/sharp-win32-x64-0.33.5.tgz",
      "integrity": "sha512-MpY/o8/8kj+EcnxwvrP4aTJSWw/aZ7JIGR4aBeZkZw5B7/Jn+tY9/VNwtcoGmdT7GfggGIU4kygOMSbYnOrAbg==",
      "cpu": [
        "x64"
      ],
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@isaacs/cliui": {
      "version": "8.0.2",
      "resolved": "https://registry.npmjs.org/@isaacs/cliui/-/cliui-8.0.2.tgz",
      "integrity": "sha512-O8jcjabXaleOG9DQ0+ARXWZBTfnP4WNAqzuiJK7ll44AmxGKv/J2M4TPjxjY3znBCfvBXFzucm1twdyFybFqEA==",
      "dependencies": {
        "string-width": "^5.1.2",
        "string-width-cjs": "npm:string-width@^4.2.0",
        "strip-ansi": "^7.0.1",
        "strip-ansi-cjs": "npm:strip-ansi@^6.0.1",
        "wrap-ansi": "^8.1.0",
        "wrap-ansi-cjs": "npm:wrap-ansi@^7.0.0"
      },
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@isaacs/cliui/node_modules/emoji-regex": {
      "version": "9.2.2",
      "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-9.2.2.tgz",
      "integrity": "sha512-L18DaJsXSUk2+42pv8mLs5jJT2hqFkFE4j21wOmgbUqsZ2hL72NsUU785g9RXgo3s0ZNgVl42TiHp3ZtOv/Vyg=="
    },
    "node_modules/@isaacs/cliui/node_modules/string-width": {
      "version": "5.1.2",
      "resolved": "https://registry.npmjs.org/string-width/-/string-width-5.1.2.tgz",
      "integrity": "sha512-HnLOCR3vjcY8beoNLtcjZ5/nxn2afmME6lhrDrebokqMap+XbeW8n9TXpPDOqdGK5qcI3oT0GKTW6wC7EMiVqA==",
      "dependencies": {
        "eastasianwidth": "^0.2.0",
        "emoji-regex": "^9.2.2",
        "strip-ansi": "^7.0.1"
      },
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/@isaacs/cliui/node_modules/wrap-ansi": {
      "version": "8.1.0",
      "resolved": "https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-8.1.0.tgz",
      "integrity": "sha512-si7QWI6zUMq56bESFvagtmzMdGOtoxfR+Sez11Mobfc7tm+VkUckk9bW2UeffTGVUbOksxmSw0AA2gs8g71NCQ==",
      "dependencies": {
        "ansi-styles": "^6.1.0",
        "string-width": "^5.0.1",
        "strip-ansi": "^7.0.1"
      },
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/chalk/wrap-ansi?sponsor=1"
      }
    },
    "node_modules/@jridgewell/gen-mapping": {
      "version": "0.3.5",
      "resolved": "https://registry.npmjs.org/@jridgewell/gen-mapping/-/gen-mapping-0.3.5.tgz",
      "integrity": "sha512-IzL8ZoEDIBRWEzlCcRhOaCupYyN5gdIK+Q6fbFdPDg6HqX6jpkItn7DFIpW9LQzXG6Df9sA7+OKnq0qlz/GaQg==",
      "dependencies": {
        "@jridgewell/set-array": "^1.2.1",
        "@jridgewell/sourcemap-codec": "^1.4.10",
        "@jridgewell/trace-mapping": "^0.3.24"
      },
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/@jridgewell/resolve-uri": {
      "version": "3.1.2",
      "resolved": "https://registry.npmjs.org/@jridgewell/resolve-uri/-/resolve-uri-3.1.2.tgz",
      "integrity": "sha512-bRISgCIjP20/tbWSPWMEi54QVPRZExkuD9lJL+UIxUKtwVJA8wW1Trb1jMs1RFXo1CBTNZ/5hpC9QvmKWdopKw==",
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/@jridgewell/set-array": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/@jridgewell/set-array/-/set-array-1.2.1.tgz",
      "integrity": "sha512-R8gLRTZeyp03ymzP/6Lil/28tGeGEzhx1q2k703KGWRAI1VdvPIXdG70VJc2pAMw3NA6JKL5hhFu1sJX0Mnn/A==",
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/@jridgewell/source-map": {
      "version": "0.3.6",
      "resolved": "https://registry.npmjs.org/@jridgewell/source-map/-/source-map-0.3.6.tgz",
      "integrity": "sha512-1ZJTZebgqllO79ue2bm3rIGud/bOe0pP5BjSRCRxxYkEZS8STV7zN84UBbiYu7jy+eCKSnVIUgoWWE/tt+shMQ==",
      "dependencies": {
        "@jridgewell/gen-mapping": "^0.3.5",
        "@jridgewell/trace-mapping": "^0.3.25"
      }
    },
    "node_modules/@jridgewell/sourcemap-codec": {
      "version": "1.5.0",
      "resolved": "https://registry.npmjs.org/@jridgewell/sourcemap-codec/-/sourcemap-codec-1.5.0.tgz",
      "integrity": "sha512-gv3ZRaISU3fjPAgNsriBRqGWQL6quFx04YMPW/zD8XMLsU32mhCCbfbO6KZFLjvYpCZ8zyDEgqsgf+PwPaM7GQ=="
    },
    "node_modules/@jridgewell/trace-mapping": {
      "version": "0.3.25",
      "resolved": "https://registry.npmjs.org/@jridgewell/trace-mapping/-/trace-mapping-0.3.25.tgz",
      "integrity": "sha512-vNk6aEwybGtawWmy/PzwnGDOjCkLWSD2wqvjGGAgOAwCGWySYXfYoxt00IJkTF+8Lb57DwOb3Aa0o9CApepiYQ==",
      "dependencies": {
        "@jridgewell/resolve-uri": "^3.1.0",
        "@jridgewell/sourcemap-codec": "^1.4.14"
      }
    },
    "node_modules/@mdx-js/mdx": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/@mdx-js/mdx/-/mdx-3.1.0.tgz",
      "integrity": "sha512-/QxEhPAvGwbQmy1Px8F899L5Uc2KZ6JtXwlCgJmjSTBedwOZkByYcBG4GceIGPXRDsmfxhHazuS+hlOShRLeDw==",
      "dependencies": {
        "@types/estree": "^1.0.0",
        "@types/estree-jsx": "^1.0.0",
        "@types/hast": "^3.0.0",
        "@types/mdx": "^2.0.0",
        "collapse-white-space": "^2.0.0",
        "devlop": "^1.0.0",
        "estree-util-is-identifier-name": "^3.0.0",
        "estree-util-scope": "^1.0.0",
        "estree-walker": "^3.0.0",
        "hast-util-to-jsx-runtime": "^2.0.0",
        "markdown-extensions": "^2.0.0",
        "recma-build-jsx": "^1.0.0",
        "recma-jsx": "^1.0.0",
        "recma-stringify": "^1.0.0",
        "rehype-recma": "^1.0.0",
        "remark-mdx": "^3.0.0",
        "remark-parse": "^11.0.0",
        "remark-rehype": "^11.0.0",
        "source-map": "^0.7.0",
        "unified": "^11.0.0",
        "unist-util-position-from-estree": "^2.0.0",
        "unist-util-stringify-position": "^4.0.0",
        "unist-util-visit": "^5.0.0",
        "vfile": "^6.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/@nodelib/fs.scandir": {
      "version": "2.1.5",
      "resolved": "https://registry.npmjs.org/@nodelib/fs.scandir/-/fs.scandir-2.1.5.tgz",
      "integrity": "sha512-vq24Bq3ym5HEQm2NKCr3yXDwjc7vTsEThRDnkp2DK9p1uqLR+DHurm/NOTo0KG7HYHU7eppKZj3MyqYuMBf62g==",
      "dependencies": {
        "@nodelib/fs.stat": "2.0.5",
        "run-parallel": "^1.1.9"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/@nodelib/fs.stat": {
      "version": "2.0.5",
      "resolved": "https://registry.npmjs.org/@nodelib/fs.stat/-/fs.stat-2.0.5.tgz",
      "integrity": "sha512-RkhPPp2zrqDAQA/2jNhnztcPAlv64XdhIp7a7454A5ovI7Bukxgt7MX7udwAu3zg1DcpPU0rz3VV1SeaqvY4+A==",
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/@nodelib/fs.walk": {
      "version": "1.2.8",
      "resolved": "https://registry.npmjs.org/@nodelib/fs.walk/-/fs.walk-1.2.8.tgz",
      "integrity": "sha512-oGB+UxlgWcgQkgwo8GcEGwemoTFt3FIO9ababBmaGwXIoBKZ+GTy0pP185beGg7Llih/NSHSV2XAs1lnznocSg==",
      "dependencies": {
        "@nodelib/fs.scandir": "2.1.5",
        "fastq": "^1.6.0"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/@oslojs/encoding": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/@oslojs/encoding/-/encoding-1.1.0.tgz",
      "integrity": "sha512-70wQhgYmndg4GCPxPPxPGevRKqTIJ2Nh4OkiMWmDAVYsTQ+Ta7Sq+rPevXyXGdzr30/qZBnyOalCszoMxlyldQ=="
    },
    "node_modules/@pagefind/darwin-arm64": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/@pagefind/darwin-arm64/-/darwin-arm64-1.2.0.tgz",
      "integrity": "sha512-pHnPL2rm4xbe0LqV376g84hUIsVdy4PK6o2ACveo0DSGoC40eOIwPUPftnUPUinSdDWkkySaL5FT5r9hsXk0ZQ==",
      "cpu": [
        "arm64"
      ],
      "optional": true,
      "os": [
        "darwin"
      ]
    },
    "node_modules/@pagefind/darwin-x64": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/@pagefind/darwin-x64/-/darwin-x64-1.2.0.tgz",
      "integrity": "sha512-q2tcnfvcRyx0GnrJoUQJ5bRpiFNtI8DZWM6a4/k8sNJxm2dbM1BnY5hUeo4MbDfpb64Qc1wRMcvBUSOaMKBjfg==",
      "cpu": [
        "x64"
      ],
      "optional": true,
      "os": [
        "darwin"
      ]
    },
    "node_modules/@pagefind/default-ui": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/@pagefind/default-ui/-/default-ui-1.2.0.tgz",
      "integrity": "sha512-MDSbm34veKpzFP5eJMh/pcPdrOc4FZKUsbpDsbdjSLC2ZeuTjsfDBNu9MGZaNUvGKUdlKk5JozQkVO/dzdSxrQ=="
    },
    "node_modules/@pagefind/linux-arm64": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/@pagefind/linux-arm64/-/linux-arm64-1.2.0.tgz",
      "integrity": "sha512-wVtLOlF9AUrwLovP9ZSEKOYnwIVrrxId4I2Mz02Zxm3wbUIJyx8wHf6LyEf7W7mJ6rEjW5jtavKAbngKCAaicg==",
      "cpu": [
        "arm64"
      ],
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@pagefind/linux-x64": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/@pagefind/linux-x64/-/linux-x64-1.2.0.tgz",
      "integrity": "sha512-Lo5aO2bA++sQTeEWzK5WKr3KU0yzVH5OnTY88apZfkgL4AVfXckH2mrOU8ouYKCLNPseIYTLFEdj0V5xjHQSwQ==",
      "cpu": [
        "x64"
      ],
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@pagefind/windows-x64": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/@pagefind/windows-x64/-/windows-x64-1.2.0.tgz",
      "integrity": "sha512-tGQcwQAb5Ndv7woc7lhH9iAdxOnTNsgCz8sEBbsASPB2A0uI8BWBmVdf2GFLQkYHqnnqYuun63sa+UOzB7Ah3g==",
      "cpu": [
        "x64"
      ],
      "optional": true,
      "os": [
        "win32"
      ]
    },
    "node_modules/@pkgjs/parseargs": {
      "version": "0.11.0",
      "resolved": "https://registry.npmjs.org/@pkgjs/parseargs/-/parseargs-0.11.0.tgz",
      "integrity": "sha512-+1VkjdD0QBLPodGrJUeqarH8VAIvQODIbwh9XpP5Syisf7YoQgsJKPNFoqqLQlu+VQ/tVSshMR6loPMn8U+dPg==",
      "optional": true,
      "engines": {
        "node": ">=14"
      }
    },
    "node_modules/@popperjs/core": {
      "version": "2.11.8",
      "resolved": "https://registry.npmjs.org/@popperjs/core/-/core-2.11.8.tgz",
      "integrity": "sha512-P1st0aksCrn9sGZhp8GMYwBnQsbvAWsZAX44oXNNvLHGqAOcoVxmjZiohstwQ7SqKnbR47akdNi+uleWD8+g6A==",
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/popperjs"
      }
    },
    "node_modules/@preline/accordion": {
      "version": "2.5.0",
      "resolved": "https://registry.npmjs.org/@preline/accordion/-/accordion-2.5.0.tgz",
      "integrity": "sha512-vQnRTJ0W1FNHsgwgQ/i6OXXDkRuT1oaR9WNjgTX8jeldQfnU40NYCJdjyhdPX5kCkNH2Q8AW6ihG/8XI2DNGJA=="
    },
    "node_modules/@preline/collapse": {
      "version": "2.5.0",
      "resolved": "https://registry.npmjs.org/@preline/collapse/-/collapse-2.5.0.tgz",
      "integrity": "sha512-FFVB+T7FXn66EUmwgR8c1OtxXDlL74pRvBXtntXwwQ+9fqCZML1xPTOXfdeRL4e46kroAtigVcp/Y28lEpkXTQ=="
    },
    "node_modules/@preline/dropdown": {
      "version": "2.5.0",
      "resolved": "https://registry.npmjs.org/@preline/dropdown/-/dropdown-2.5.0.tgz",
      "integrity": "sha512-ydKGBx02eLWzmCn8gkaaTe/gXXqvkZKZCgCYCWETRdy31qhaam43hvJMcpsGOROWSjlPNBgVyGrwYdAgJUO68g=="
    },
    "node_modules/@preline/overlay": {
      "version": "2.5.0",
      "resolved": "https://registry.npmjs.org/@preline/overlay/-/overlay-2.5.0.tgz",
      "integrity": "sha512-5eWzP2N3sTOKhgoefXdrrxUNQh8F678von6ehN1cD79ujVfShYdWowvjtzMlUiTePbF0pgM/wG6D6mRzicOMzw=="
    },
    "node_modules/@preline/tabs": {
      "version": "2.5.0",
      "resolved": "https://registry.npmjs.org/@preline/tabs/-/tabs-2.5.0.tgz",
      "integrity": "sha512-JdMwRCtbJ0G9goqU+6214/ncfJX8zthEeLl1i9YYyeFLqTJvXPTIW5MWKyXpR4Gi1RUjr2NnT86Abtjp97bESg=="
    },
    "node_modules/@rollup/pluginutils": {
      "version": "5.1.3",
      "resolved": "https://registry.npmjs.org/@rollup/pluginutils/-/pluginutils-5.1.3.tgz",
      "integrity": "sha512-Pnsb6f32CD2W3uCaLZIzDmeFyQ2b8UWMFI7xtwUezpcGBDVDW6y9XgAWIlARiGAo6eNF5FK5aQTr0LFyNyqq5A==",
      "dependencies": {
        "@types/estree": "^1.0.0",
        "estree-walker": "^2.0.2",
        "picomatch": "^4.0.2"
      },
      "engines": {
        "node": ">=14.0.0"
      },
      "peerDependencies": {
        "rollup": "^1.20.0||^2.0.0||^3.0.0||^4.0.0"
      },
      "peerDependenciesMeta": {
        "rollup": {
          "optional": true
        }
      }
    },
    "node_modules/@rollup/pluginutils/node_modules/estree-walker": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/estree-walker/-/estree-walker-2.0.2.tgz",
      "integrity": "sha512-Rfkk/Mp/DL7JVje3u18FxFujQlTNR2q6QfMSMB7AvCBx91NGj/ba3kCfza0f6dVDbw7YlRf/nDrn7pQrCCyQ/w=="
    },
    "node_modules/@rollup/rollup-android-arm-eabi": {
      "version": "4.27.3",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-android-arm-eabi/-/rollup-android-arm-eabi-4.27.3.tgz",
      "integrity": "sha512-EzxVSkIvCFxUd4Mgm4xR9YXrcp976qVaHnqom/Tgm+vU79k4vV4eYTjmRvGfeoW8m9LVcsAy/lGjcgVegKEhLQ==",
      "cpu": [
        "arm"
      ],
      "optional": true,
      "os": [
        "android"
      ]
    },
    "node_modules/@rollup/rollup-android-arm64": {
      "version": "4.27.3",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-android-arm64/-/rollup-android-arm64-4.27.3.tgz",
      "integrity": "sha512-LJc5pDf1wjlt9o/Giaw9Ofl+k/vLUaYsE2zeQGH85giX2F+wn/Cg8b3c5CDP3qmVmeO5NzwVUzQQxwZvC2eQKw==",
      "cpu": [
        "arm64"
      ],
      "optional": true,
      "os": [
        "android"
      ]
    },
    "node_modules/@rollup/rollup-darwin-arm64": {
      "version": "4.27.3",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-darwin-arm64/-/rollup-darwin-arm64-4.27.3.tgz",
      "integrity": "sha512-OuRysZ1Mt7wpWJ+aYKblVbJWtVn3Cy52h8nLuNSzTqSesYw1EuN6wKp5NW/4eSre3mp12gqFRXOKTcN3AI3LqA==",
      "cpu": [
        "arm64"
      ],
      "optional": true,
      "os": [
        "darwin"
      ]
    },
    "node_modules/@rollup/rollup-darwin-x64": {
      "version": "4.27.3",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-darwin-x64/-/rollup-darwin-x64-4.27.3.tgz",
      "integrity": "sha512-xW//zjJMlJs2sOrCmXdB4d0uiilZsOdlGQIC/jjmMWT47lkLLoB1nsNhPUcnoqyi5YR6I4h+FjBpILxbEy8JRg==",
      "cpu": [
        "x64"
      ],
      "optional": true,
      "os": [
        "darwin"
      ]
    },
    "node_modules/@rollup/rollup-freebsd-arm64": {
      "version": "4.27.3",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-freebsd-arm64/-/rollup-freebsd-arm64-4.27.3.tgz",
      "integrity": "sha512-58E0tIcwZ+12nK1WiLzHOD8I0d0kdrY/+o7yFVPRHuVGY3twBwzwDdTIBGRxLmyjciMYl1B/U515GJy+yn46qw==",
      "cpu": [
        "arm64"
      ],
      "optional": true,
      "os": [
        "freebsd"
      ]
    },
    "node_modules/@rollup/rollup-freebsd-x64": {
      "version": "4.27.3",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-freebsd-x64/-/rollup-freebsd-x64-4.27.3.tgz",
      "integrity": "sha512-78fohrpcVwTLxg1ZzBMlwEimoAJmY6B+5TsyAZ3Vok7YabRBUvjYTsRXPTjGEvv/mfgVBepbW28OlMEz4w8wGA==",
      "cpu": [
        "x64"
      ],
      "optional": true,
      "os": [
        "freebsd"
      ]
    },
    "node_modules/@rollup/rollup-linux-arm-gnueabihf": {
      "version": "4.27.3",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-arm-gnueabihf/-/rollup-linux-arm-gnueabihf-4.27.3.tgz",
      "integrity": "sha512-h2Ay79YFXyQi+QZKo3ISZDyKaVD7uUvukEHTOft7kh00WF9mxAaxZsNs3o/eukbeKuH35jBvQqrT61fzKfAB/Q==",
      "cpu": [
        "arm"
      ],
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-arm-musleabihf": {
      "version": "4.27.3",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-arm-musleabihf/-/rollup-linux-arm-musleabihf-4.27.3.tgz",
      "integrity": "sha512-Sv2GWmrJfRY57urktVLQ0VKZjNZGogVtASAgosDZ1aUB+ykPxSi3X1nWORL5Jk0sTIIwQiPH7iE3BMi9zGWfkg==",
      "cpu": [
        "arm"
      ],
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-arm64-gnu": {
      "version": "4.27.3",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-arm64-gnu/-/rollup-linux-arm64-gnu-4.27.3.tgz",
      "integrity": "sha512-FPoJBLsPW2bDNWjSrwNuTPUt30VnfM8GPGRoLCYKZpPx0xiIEdFip3dH6CqgoT0RnoGXptaNziM0WlKgBc+OWQ==",
      "cpu": [
        "arm64"
      ],
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-arm64-musl": {
      "version": "4.27.3",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-arm64-musl/-/rollup-linux-arm64-musl-4.27.3.tgz",
      "integrity": "sha512-TKxiOvBorYq4sUpA0JT+Fkh+l+G9DScnG5Dqx7wiiqVMiRSkzTclP35pE6eQQYjP4Gc8yEkJGea6rz4qyWhp3g==",
      "cpu": [
        "arm64"
      ],
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-powerpc64le-gnu": {
      "version": "4.27.3",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-powerpc64le-gnu/-/rollup-linux-powerpc64le-gnu-4.27.3.tgz",
      "integrity": "sha512-v2M/mPvVUKVOKITa0oCFksnQQ/TqGrT+yD0184/cWHIu0LoIuYHwox0Pm3ccXEz8cEQDLk6FPKd1CCm+PlsISw==",
      "cpu": [
        "ppc64"
      ],
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-riscv64-gnu": {
      "version": "4.27.3",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-riscv64-gnu/-/rollup-linux-riscv64-gnu-4.27.3.tgz",
      "integrity": "sha512-LdrI4Yocb1a/tFVkzmOE5WyYRgEBOyEhWYJe4gsDWDiwnjYKjNs7PS6SGlTDB7maOHF4kxevsuNBl2iOcj3b4A==",
      "cpu": [
        "riscv64"
      ],
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-s390x-gnu": {
      "version": "4.27.3",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-s390x-gnu/-/rollup-linux-s390x-gnu-4.27.3.tgz",
      "integrity": "sha512-d4wVu6SXij/jyiwPvI6C4KxdGzuZOvJ6y9VfrcleHTwo68fl8vZC5ZYHsCVPUi4tndCfMlFniWgwonQ5CUpQcA==",
      "cpu": [
        "s390x"
      ],
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-x64-gnu": {
      "version": "4.27.3",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-x64-gnu/-/rollup-linux-x64-gnu-4.27.3.tgz",
      "integrity": "sha512-/6bn6pp1fsCGEY5n3yajmzZQAh+mW4QPItbiWxs69zskBzJuheb3tNynEjL+mKOsUSFK11X4LYF2BwwXnzWleA==",
      "cpu": [
        "x64"
      ],
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-x64-musl": {
      "version": "4.27.3",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-x64-musl/-/rollup-linux-x64-musl-4.27.3.tgz",
      "integrity": "sha512-nBXOfJds8OzUT1qUreT/en3eyOXd2EH5b0wr2bVB5999qHdGKkzGzIyKYaKj02lXk6wpN71ltLIaQpu58YFBoQ==",
      "cpu": [
        "x64"
      ],
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-win32-arm64-msvc": {
      "version": "4.27.3",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-win32-arm64-msvc/-/rollup-win32-arm64-msvc-4.27.3.tgz",
      "integrity": "sha512-ogfbEVQgIZOz5WPWXF2HVb6En+kWzScuxJo/WdQTqEgeyGkaa2ui5sQav9Zkr7bnNCLK48uxmmK0TySm22eiuw==",
      "cpu": [
        "arm64"
      ],
      "optional": true,
      "os": [
        "win32"
      ]
    },
    "node_modules/@rollup/rollup-win32-ia32-msvc": {
      "version": "4.27.3",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-win32-ia32-msvc/-/rollup-win32-ia32-msvc-4.27.3.tgz",
      "integrity": "sha512-ecE36ZBMLINqiTtSNQ1vzWc5pXLQHlf/oqGp/bSbi7iedcjcNb6QbCBNG73Euyy2C+l/fn8qKWEwxr+0SSfs3w==",
      "cpu": [
        "ia32"
      ],
      "optional": true,
      "os": [
        "win32"
      ]
    },
    "node_modules/@rollup/rollup-win32-x64-msvc": {
      "version": "4.27.3",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-win32-x64-msvc/-/rollup-win32-x64-msvc-4.27.3.tgz",
      "integrity": "sha512-vliZLrDmYKyaUoMzEbMTg2JkerfBjn03KmAw9CykO0Zzkzoyd7o3iZNam/TpyWNjNT+Cz2iO3P9Smv2wgrR+Eg==",
      "cpu": [
        "x64"
      ],
      "optional": true,
      "os": [
        "win32"
      ]
    },
    "node_modules/@shikijs/core": {
      "version": "1.23.1",
      "resolved": "https://registry.npmjs.org/@shikijs/core/-/core-1.23.1.tgz",
      "integrity": "sha512-NuOVgwcHgVC6jBVH5V7iblziw6iQbWWHrj5IlZI3Fqu2yx9awH7OIQkXIcsHsUmY19ckwSgUMgrqExEyP5A0TA==",
      "dependencies": {
        "@shikijs/engine-javascript": "1.23.1",
        "@shikijs/engine-oniguruma": "1.23.1",
        "@shikijs/types": "1.23.1",
        "@shikijs/vscode-textmate": "^9.3.0",
        "@types/hast": "^3.0.4",
        "hast-util-to-html": "^9.0.3"
      }
    },
    "node_modules/@shikijs/engine-javascript": {
      "version": "1.23.1",
      "resolved": "https://registry.npmjs.org/@shikijs/engine-javascript/-/engine-javascript-1.23.1.tgz",
      "integrity": "sha512-i/LdEwT5k3FVu07SiApRFwRcSJs5QM9+tod5vYCPig1Ywi8GR30zcujbxGQFJHwYD7A5BUqagi8o5KS+LEVgBg==",
      "dependencies": {
        "@shikijs/types": "1.23.1",
        "@shikijs/vscode-textmate": "^9.3.0",
        "oniguruma-to-es": "0.4.1"
      }
    },
    "node_modules/@shikijs/engine-oniguruma": {
      "version": "1.23.1",
      "resolved": "https://registry.npmjs.org/@shikijs/engine-oniguruma/-/engine-oniguruma-1.23.1.tgz",
      "integrity": "sha512-KQ+lgeJJ5m2ISbUZudLR1qHeH3MnSs2mjFg7bnencgs5jDVPeJ2NVDJ3N5ZHbcTsOIh0qIueyAJnwg7lg7kwXQ==",
      "dependencies": {
        "@shikijs/types": "1.23.1",
        "@shikijs/vscode-textmate": "^9.3.0"
      }
    },
    "node_modules/@shikijs/types": {
      "version": "1.23.1",
      "resolved": "https://registry.npmjs.org/@shikijs/types/-/types-1.23.1.tgz",
      "integrity": "sha512-98A5hGyEhzzAgQh2dAeHKrWW4HfCMeoFER2z16p5eJ+vmPeF6lZ/elEne6/UCU551F/WqkopqRsr1l2Yu6+A0g==",
      "dependencies": {
        "@shikijs/vscode-textmate": "^9.3.0",
        "@types/hast": "^3.0.4"
      }
    },
    "node_modules/@shikijs/vscode-textmate": {
      "version": "9.3.0",
      "resolved": "https://registry.npmjs.org/@shikijs/vscode-textmate/-/vscode-textmate-9.3.0.tgz",
      "integrity": "sha512-jn7/7ky30idSkd/O5yDBfAnVt+JJpepofP/POZ1iMOxK59cOfqIgg/Dj0eFsjOTMw+4ycJN0uhZH/Eb0bs/EUA=="
    },
    "node_modules/@sindresorhus/merge-streams": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/@sindresorhus/merge-streams/-/merge-streams-2.3.0.tgz",
      "integrity": "sha512-LtoMMhxAlorcGhmFYI+LhPgbPZCkgP6ra1YL604EeF6U98pLlQ3iWIGMdWSC+vWmPBWBNgmDBAhnAobLROJmwg==",
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/@tailwindcss/forms": {
      "version": "0.5.9",
      "resolved": "https://registry.npmjs.org/@tailwindcss/forms/-/forms-0.5.9.tgz",
      "integrity": "sha512-tM4XVr2+UVTxXJzey9Twx48c1gcxFStqn1pQz0tRsX8o3DvxhN5oY5pvyAbUx7VTaZxpej4Zzvc6h+1RJBzpIg==",
      "dev": true,
      "dependencies": {
        "mini-svg-data-uri": "^1.2.3"
      },
      "peerDependencies": {
        "tailwindcss": ">=3.0.0 || >= 3.0.0-alpha.1 || >= 4.0.0-alpha.20"
      }
    },
    "node_modules/@types/acorn": {
      "version": "4.0.6",
      "resolved": "https://registry.npmjs.org/@types/acorn/-/acorn-4.0.6.tgz",
      "integrity": "sha512-veQTnWP+1D/xbxVrPC3zHnCZRjSrKfhbMUlEA43iMZLu7EsnTtkJklIuwrCPbOi8YkvDQAiW05VQQFvvz9oieQ==",
      "dependencies": {
        "@types/estree": "*"
      }
    },
    "node_modules/@types/babel__core": {
      "version": "7.20.5",
      "resolved": "https://registry.npmjs.org/@types/babel__core/-/babel__core-7.20.5.tgz",
      "integrity": "sha512-qoQprZvz5wQFJwMDqeseRXWv3rqMvhgpbXFfVyWhbx9X47POIA6i/+dXefEmZKoAgOaTdaIgNSMqMIU61yRyzA==",
      "dependencies": {
        "@babel/parser": "^7.20.7",
        "@babel/types": "^7.20.7",
        "@types/babel__generator": "*",
        "@types/babel__template": "*",
        "@types/babel__traverse": "*"
      }
    },
    "node_modules/@types/babel__generator": {
      "version": "7.6.8",
      "resolved": "https://registry.npmjs.org/@types/babel__generator/-/babel__generator-7.6.8.tgz",
      "integrity": "sha512-ASsj+tpEDsEiFr1arWrlN6V3mdfjRMZt6LtK/Vp/kreFLnr5QH5+DhvD5nINYZXzwJvXeGq+05iUXcAzVrqWtw==",
      "dependencies": {
        "@babel/types": "^7.0.0"
      }
    },
    "node_modules/@types/babel__template": {
      "version": "7.4.4",
      "resolved": "https://registry.npmjs.org/@types/babel__template/-/babel__template-7.4.4.tgz",
      "integrity": "sha512-h/NUaSyG5EyxBIp8YRxo4RMe2/qQgvyowRwVMzhYhBCONbW8PUsg4lkFMrhgZhUe5z3L3MiLDuvyJ/CaPa2A8A==",
      "dependencies": {
        "@babel/parser": "^7.1.0",
        "@babel/types": "^7.0.0"
      }
    },
    "node_modules/@types/babel__traverse": {
      "version": "7.20.6",
      "resolved": "https://registry.npmjs.org/@types/babel__traverse/-/babel__traverse-7.20.6.tgz",
      "integrity": "sha512-r1bzfrm0tomOI8g1SzvCaQHo6Lcv6zu0EA+W2kHrt8dyrHQxGzBBL4kdkzIS+jBMV+EYcMAEAqXqYaLJq5rOZg==",
      "dependencies": {
        "@babel/types": "^7.20.7"
      }
    },
    "node_modules/@types/cookie": {
      "version": "0.6.0",
      "resolved": "https://registry.npmjs.org/@types/cookie/-/cookie-0.6.0.tgz",
      "integrity": "sha512-4Kh9a6B2bQciAhf7FSuMRRkUWecJgJu9nPnx3yzpsfXX/c50REIqpHY4C82bXP90qrLtXtkDxTZosYO3UpOwlA=="
    },
    "node_modules/@types/debug": {
      "version": "4.1.12",
      "resolved": "https://registry.npmjs.org/@types/debug/-/debug-4.1.12.tgz",
      "integrity": "sha512-vIChWdVG3LG1SMxEvI/AK+FWJthlrqlTu7fbrlywTkkaONwk/UAGaULXRlf8vkzFBLVm0zkMdCquhL5aOjhXPQ==",
      "dependencies": {
        "@types/ms": "*"
      }
    },
    "node_modules/@types/estree": {
      "version": "1.0.6",
      "resolved": "https://registry.npmjs.org/@types/estree/-/estree-1.0.6.tgz",
      "integrity": "sha512-AYnb1nQyY49te+VRAVgmzfcgjYS91mY5P0TKUDCLEM+gNnA+3T6rWITXRLYCpahpqSQbN5cE+gHpnPyXjHWxcw=="
    },
    "node_modules/@types/estree-jsx": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/@types/estree-jsx/-/estree-jsx-1.0.5.tgz",
      "integrity": "sha512-52CcUVNFyfb1A2ALocQw/Dd1BQFNmSdkuC3BkZ6iqhdMfQz7JWOFRuJFloOzjk+6WijU56m9oKXFAXc7o3Towg==",
      "dependencies": {
        "@types/estree": "*"
      }
    },
    "node_modules/@types/hast": {
      "version": "3.0.4",
      "resolved": "https://registry.npmjs.org/@types/hast/-/hast-3.0.4.tgz",
      "integrity": "sha512-WPs+bbQw5aCj+x6laNGWLH3wviHtoCv/P3+otBhbOhJgG8qtpdAMlTCxLtsTWA7LH1Oh/bFCHsBn0TPS5m30EQ==",
      "dependencies": {
        "@types/unist": "*"
      }
    },
    "node_modules/@types/mdast": {
      "version": "4.0.4",
      "resolved": "https://registry.npmjs.org/@types/mdast/-/mdast-4.0.4.tgz",
      "integrity": "sha512-kGaNbPh1k7AFzgpud/gMdvIm5xuECykRR+JnWKQno9TAXVa6WIVCGTPvYGekIDL4uwCZQSYbUxNBSb1aUo79oA==",
      "dependencies": {
        "@types/unist": "*"
      }
    },
    "node_modules/@types/mdx": {
      "version": "2.0.13",
      "resolved": "https://registry.npmjs.org/@types/mdx/-/mdx-2.0.13.tgz",
      "integrity": "sha512-+OWZQfAYyio6YkJb3HLxDrvnx6SWWDbC0zVPfBRzUk0/nqoDyf6dNxQi3eArPe8rJ473nobTMQ/8Zk+LxJ+Yuw=="
    },
    "node_modules/@types/ms": {
      "version": "0.7.34",
      "resolved": "https://registry.npmjs.org/@types/ms/-/ms-0.7.34.tgz",
      "integrity": "sha512-nG96G3Wp6acyAgJqGasjODb+acrI7KltPiRxzHPXnP3NgI28bpQDRv53olbqGXbfcgF5aiiHmO3xpwEpS5Ld9g=="
    },
    "node_modules/@types/nlcst": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/@types/nlcst/-/nlcst-2.0.3.tgz",
      "integrity": "sha512-vSYNSDe6Ix3q+6Z7ri9lyWqgGhJTmzRjZRqyq15N0Z/1/UnVsno9G/N40NBijoYx2seFDIl0+B2mgAb9mezUCA==",
      "dependencies": {
        "@types/unist": "*"
      }
    },
    "node_modules/@types/node": {
      "version": "22.9.0",
      "resolved": "https://registry.npmjs.org/@types/node/-/node-22.9.0.tgz",
      "integrity": "sha512-vuyHg81vvWA1Z1ELfvLko2c8f34gyA0zaic0+Rllc5lbCnbSyuvb2Oxpm6TAUAC/2xZN3QGqxBNggD1nNR2AfQ==",
      "dependencies": {
        "undici-types": "~6.19.8"
      }
    },
    "node_modules/@types/sax": {
      "version": "1.2.7",
      "resolved": "https://registry.npmjs.org/@types/sax/-/sax-1.2.7.tgz",
      "integrity": "sha512-rO73L89PJxeYM3s3pPPjiPgVVcymqU490g0YO5n5By0k2Erzj6tay/4lr1CHAAU4JyOWd1rpQ8bCf6cZfHU96A==",
      "dependencies": {
        "@types/node": "*"
      }
    },
    "node_modules/@types/unist": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/@types/unist/-/unist-3.0.3.tgz",
      "integrity": "sha512-ko/gIFJRv177XgZsZcBwnqJN5x/Gien8qNOn0D5bQU/zAzVf9Zt3BlcUiLqhV9y4ARk0GbT3tnUiPNgnTXzc/Q=="
    },
    "node_modules/@ungap/structured-clone": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/@ungap/structured-clone/-/structured-clone-1.2.0.tgz",
      "integrity": "sha512-zuVdFrMJiuCDQUMCzQaD6KL28MjnqqN8XnAqiEq9PNm/hCPTSGfrXCOfwj1ow4LFb/tNymJPwsNbVePc1xFqrQ=="
    },
    "node_modules/@volar/kit": {
      "version": "2.4.10",
      "resolved": "https://registry.npmjs.org/@volar/kit/-/kit-2.4.10.tgz",
      "integrity": "sha512-ul+rLeO9RlFDgkY/FhPWMnpFqAsjvjkKz8VZeOY5YCJMwTblmmSBlNJtFNxSBx9t/k1q80nEthLyxiJ50ZbIAg==",
      "dependencies": {
        "@volar/language-service": "2.4.10",
        "@volar/typescript": "2.4.10",
        "typesafe-path": "^0.2.2",
        "vscode-languageserver-textdocument": "^1.0.11",
        "vscode-uri": "^3.0.8"
      },
      "peerDependencies": {
        "typescript": "*"
      }
    },
    "node_modules/@volar/language-core": {
      "version": "2.4.10",
      "resolved": "https://registry.npmjs.org/@volar/language-core/-/language-core-2.4.10.tgz",
      "integrity": "sha512-hG3Z13+nJmGaT+fnQzAkS0hjJRa2FCeqZt6Bd+oGNhUkQ+mTFsDETg5rqUTxyzIh5pSOGY7FHCWUS8G82AzLCA==",
      "dependencies": {
        "@volar/source-map": "2.4.10"
      }
    },
    "node_modules/@volar/language-server": {
      "version": "2.4.10",
      "resolved": "https://registry.npmjs.org/@volar/language-server/-/language-server-2.4.10.tgz",
      "integrity": "sha512-odQsgrJh8hOXfxkSj/BSnpjThb2/KDhbxZnG/XAEx6E3QGDQv4hAOz9GWuKoNs0tkjgwphQGIwDMT1JYaTgRJw==",
      "dependencies": {
        "@volar/language-core": "2.4.10",
        "@volar/language-service": "2.4.10",
        "@volar/typescript": "2.4.10",
        "path-browserify": "^1.0.1",
        "request-light": "^0.7.0",
        "vscode-languageserver": "^9.0.1",
        "vscode-languageserver-protocol": "^3.17.5",
        "vscode-languageserver-textdocument": "^1.0.11",
        "vscode-uri": "^3.0.8"
      }
    },
    "node_modules/@volar/language-service": {
      "version": "2.4.10",
      "resolved": "https://registry.npmjs.org/@volar/language-service/-/language-service-2.4.10.tgz",
      "integrity": "sha512-VxUiWS11rnRzakkqw5x1LPhsz+RBfD0CrrFarLGW2/voliYXEdCuSOM3r8JyNRvMvP4uwhD38ccAdTcULQEAIQ==",
      "dependencies": {
        "@volar/language-core": "2.4.10",
        "vscode-languageserver-protocol": "^3.17.5",
        "vscode-languageserver-textdocument": "^1.0.11",
        "vscode-uri": "^3.0.8"
      }
    },
    "node_modules/@volar/source-map": {
      "version": "2.4.10",
      "resolved": "https://registry.npmjs.org/@volar/source-map/-/source-map-2.4.10.tgz",
      "integrity": "sha512-OCV+b5ihV0RF3A7vEvNyHPi4G4kFa6ukPmyVocmqm5QzOd8r5yAtiNvaPEjl8dNvgC/lj4JPryeeHLdXd62rWA=="
    },
    "node_modules/@volar/typescript": {
      "version": "2.4.10",
      "resolved": "https://registry.npmjs.org/@volar/typescript/-/typescript-2.4.10.tgz",
      "integrity": "sha512-F8ZtBMhSXyYKuBfGpYwqA5rsONnOwAVvjyE7KPYJ7wgZqo2roASqNWUnianOomJX5u1cxeRooHV59N0PhvEOgw==",
      "dependencies": {
        "@volar/language-core": "2.4.10",
        "path-browserify": "^1.0.1",
        "vscode-uri": "^3.0.8"
      }
    },
    "node_modules/@vscode/emmet-helper": {
      "version": "2.10.0",
      "resolved": "https://registry.npmjs.org/@vscode/emmet-helper/-/emmet-helper-2.10.0.tgz",
      "integrity": "sha512-UHw1EQRgLbSYkyB73/7wR/IzV6zTBnbzEHuuU4Z6b95HKf2lmeTdGwBIwspWBSRrnIA1TI2x2tetBym6ErA7Gw==",
      "dependencies": {
        "emmet": "^2.4.3",
        "jsonc-parser": "^2.3.0",
        "vscode-languageserver-textdocument": "^1.0.1",
        "vscode-languageserver-types": "^3.15.1",
        "vscode-uri": "^3.0.8"
      }
    },
    "node_modules/@vscode/l10n": {
      "version": "0.0.18",
      "resolved": "https://registry.npmjs.org/@vscode/l10n/-/l10n-0.0.18.tgz",
      "integrity": "sha512-KYSIHVmslkaCDyw013pphY+d7x1qV8IZupYfeIfzNA+nsaWHbn5uPuQRvdRFsa9zFzGeudPuoGoZ1Op4jrJXIQ=="
    },
    "node_modules/@vtbag/cam-shaft": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/@vtbag/cam-shaft/-/cam-shaft-1.0.1.tgz",
      "integrity": "sha512-9lSaxaT4sLX6mvcf4ixGgvT3EuUQAVCF7oSZcoj0tLRBdDM0W7ABZwvjqT37zX2omWaqDWavddmVuK6hu1DZnQ==",
      "dev": true,
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/martrapp"
      }
    },
    "node_modules/@vtbag/element-crossing": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/@vtbag/element-crossing/-/element-crossing-1.0.4.tgz",
      "integrity": "sha512-/V46j1Rl41t1dzILKauxF+fifjYEtUSCq2VfZQeUO5UQ5c8ENWJ1b3XSt3c7yKk36VKl5KnFo75xfiyXFZ8weA==",
      "dev": true,
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/martrapp"
      }
    },
    "node_modules/@vtbag/inspection-chamber": {
      "version": "1.0.17",
      "resolved": "https://registry.npmjs.org/@vtbag/inspection-chamber/-/inspection-chamber-1.0.17.tgz",
      "integrity": "sha512-MDtO+qNtd4AkxjkJpQD3N2YhMQUaEdSkdArwk7Cy/81iMbOXhZek6cRQu06jn6JnrRv4andtb1oHtl5rYuNSSQ==",
      "dev": true,
      "dependencies": {
        "eruda": "^3.4.0"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/martrapp"
      }
    },
    "node_modules/@vtbag/turn-signal": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/@vtbag/turn-signal/-/turn-signal-1.1.0.tgz",
      "integrity": "sha512-2WoBbs3v7hWxu6BXvWab4G8MJIFr21vEcJ5Y4mhXlYifVzHLSf5M+aHxEEk62DMOeVmjHwqt8DK47GYnFrEqmg==",
      "dev": true,
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/martrapp"
      }
    },
    "node_modules/acorn": {
      "version": "8.14.0",
      "resolved": "https://registry.npmjs.org/acorn/-/acorn-8.14.0.tgz",
      "integrity": "sha512-cl669nCJTZBsL97OF4kUQm5g5hC2uihk0NxY3WENAC0TYdILVkAyHymAntgxGkl7K+t0cXIrH5siy5S4XkFycA==",
      "bin": {
        "acorn": "bin/acorn"
      },
      "engines": {
        "node": ">=0.4.0"
      }
    },
    "node_modules/acorn-jsx": {
      "version": "5.3.2",
      "resolved": "https://registry.npmjs.org/acorn-jsx/-/acorn-jsx-5.3.2.tgz",
      "integrity": "sha512-rq9s+JNhf0IChjtDXxllJ7g41oZk5SlXtp0LHwyA5cejwn7vKmKp4pPri6YEePv2PU65sAsegbXtIinmDFDXgQ==",
      "peerDependencies": {
        "acorn": "^6.0.0 || ^7.0.0 || ^8.0.0"
      }
    },
    "node_modules/ajv": {
      "version": "8.17.1",
      "resolved": "https://registry.npmjs.org/ajv/-/ajv-8.17.1.tgz",
      "integrity": "sha512-B/gBuNg5SiMTrPkC+A2+cW0RszwxYmn6VYxB/inlBStS5nx6xHIt/ehKRhIMhqusl7a8LjQoZnjCs5vhwxOQ1g==",
      "dependencies": {
        "fast-deep-equal": "^3.1.3",
        "fast-uri": "^3.0.1",
        "json-schema-traverse": "^1.0.0",
        "require-from-string": "^2.0.2"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/epoberezkin"
      }
    },
    "node_modules/ansi-align": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/ansi-align/-/ansi-align-3.0.1.tgz",
      "integrity": "sha512-IOfwwBF5iczOjp/WeY4YxyjqAFMQoZufdQWDd19SEExbVLNXqvpzSJ/M7Za4/sCPmQ0+GRquoA7bGcINcxew6w==",
      "dependencies": {
        "string-width": "^4.1.0"
      }
    },
    "node_modules/ansi-align/node_modules/ansi-regex": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-5.0.1.tgz",
      "integrity": "sha512-quJQXlTSUGL2LH9SUXo8VwsY4soanhgo6LNSm84E1LBcE8s3O0wpdiRzyR9z/ZZJMlMWv37qOOb9pdJlMUEKFQ==",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/ansi-align/node_modules/emoji-regex": {
      "version": "8.0.0",
      "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-8.0.0.tgz",
      "integrity": "sha512-MSjYzcWNOA0ewAHpz0MxpYFvwg6yjy1NG3xteoqz644VCo/RPgnr1/GGt+ic3iJTzQ8Eu3TdM14SawnVUmGE6A=="
    },
    "node_modules/ansi-align/node_modules/string-width": {
      "version": "4.2.3",
      "resolved": "https://registry.npmjs.org/string-width/-/string-width-4.2.3.tgz",
      "integrity": "sha512-wKyQRQpjJ0sIp62ErSZdGsjMJWsap5oRNihHhu6G7JVO/9jIB6UyevL+tXuOqrng8j/cxKTWyWUwvSTriiZz/g==",
      "dependencies": {
        "emoji-regex": "^8.0.0",
        "is-fullwidth-code-point": "^3.0.0",
        "strip-ansi": "^6.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/ansi-align/node_modules/strip-ansi": {
      "version": "6.0.1",
      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.1.tgz",
      "integrity": "sha512-Y38VPSHcqkFrCpFnQ9vuSXmquuv5oXOKpGeT6aGrr3o3Gc9AlVa6JBfUSOCnbxGGZF+/0ooI7KrPuUSztUdU5A==",
      "dependencies": {
        "ansi-regex": "^5.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/ansi-regex": {
      "version": "6.1.0",
      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-6.1.0.tgz",
      "integrity": "sha512-7HSX4QQb4CspciLpVFwyRe79O3xsIZDDLER21kERQ71oaPodF8jL725AgJMFAYbooIqolJoRLuM81SpeUkpkvA==",
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/chalk/ansi-regex?sponsor=1"
      }
    },
    "node_modules/ansi-styles": {
      "version": "6.2.1",
      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-6.2.1.tgz",
      "integrity": "sha512-bN798gFfQX+viw3R7yrGWRqnrN2oRkEkUjjl4JNn4E8GxxbjtG3FbrEIIY3l8/hrwUwIeCZvi4QuOTP4MErVug==",
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/chalk/ansi-styles?sponsor=1"
      }
    },
    "node_modules/any-promise": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/any-promise/-/any-promise-1.3.0.tgz",
      "integrity": "sha512-7UvmKalWRt1wgjL1RrGxoSJW/0QZFIegpeGvZG9kjp8vrRu55XTHbwnqq2GpXm9uLbcuhxm3IqX9OB4MZR1b2A=="
    },
    "node_modules/anymatch": {
      "version": "3.1.3",
      "resolved": "https://registry.npmjs.org/anymatch/-/anymatch-3.1.3.tgz",
      "integrity": "sha512-KMReFUr0B4t+D+OBkjR3KYqvocp2XaSzO55UcB6mgQMd3KbcE+mWTyvVV7D/zsdEbNnV6acZUutkiHQXvTr1Rw==",
      "dependencies": {
        "normalize-path": "^3.0.0",
        "picomatch": "^2.0.4"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/anymatch/node_modules/picomatch": {
      "version": "2.3.1",
      "resolved": "https://registry.npmjs.org/picomatch/-/picomatch-2.3.1.tgz",
      "integrity": "sha512-JU3teHTNjmE2VCGFzuY8EXzCDVwEqB2a8fsIvwaStHhAWJEeVd1o1QD80CU6+ZdEXXSLbSsuLwJjkCBWqRQUVA==",
      "engines": {
        "node": ">=8.6"
      },
      "funding": {
        "url": "https://github.com/sponsors/jonschlinkert"
      }
    },
    "node_modules/arg": {
      "version": "5.0.2",
      "resolved": "https://registry.npmjs.org/arg/-/arg-5.0.2.tgz",
      "integrity": "sha512-PYjyFOLKQ9y57JvQ6QLo8dAgNqswh8M1RMJYdQduT6xbWSgK36P/Z/v+p888pM69jMMfS8Xd8F6I1kQ/I9HUGg=="
    },
    "node_modules/argparse": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/argparse/-/argparse-2.0.1.tgz",
      "integrity": "sha512-8+9WqebbFzpX9OR+Wa6O29asIogeRMzcGtAINdpMHHyAg10f05aSFVBbcEqGf/PXw1EjAZ+q2/bEBg3DvurK3Q=="
    },
    "node_modules/aria-query": {
      "version": "5.3.2",
      "resolved": "https://registry.npmjs.org/aria-query/-/aria-query-5.3.2.tgz",
      "integrity": "sha512-COROpnaoap1E2F000S62r6A60uHZnmlvomhfyT2DlTcrY1OrBKn2UhH7qn5wTC9zMvD0AY7csdPSNwKP+7WiQw==",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/array-iterate": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/array-iterate/-/array-iterate-2.0.1.tgz",
      "integrity": "sha512-I1jXZMjAgCMmxT4qxXfPXa6SthSoE8h6gkSI9BGGNv8mP8G/v0blc+qFnZu6K42vTOiuME596QaLO0TP3Lk0xg==",
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/wooorm"
      }
    },
    "node_modules/astring": {
      "version": "1.9.0",
      "resolved": "https://registry.npmjs.org/astring/-/astring-1.9.0.tgz",
      "integrity": "sha512-LElXdjswlqjWrPpJFg1Fx4wpkOCxj1TDHlSV4PlaRxHGWko024xICaa97ZkMfs6DRKlCguiAI+rbXv5GWwXIkg==",
      "bin": {
        "astring": "bin/astring"
      }
    },
    "node_modules/astro": {
      "version": "4.16.14",
      "resolved": "https://registry.npmjs.org/astro/-/astro-4.16.14.tgz",
      "integrity": "sha512-2IuLkIp4idyspugq+F52rHZyNqHHi2AdQzuKp3SGytg/YAm50dNeWhP/7l+enjgWZLloLq5xsH5gVQpoDFoyFg==",
      "license": "MIT",
      "dependencies": {
        "@astrojs/compiler": "^2.10.3",
        "@astrojs/internal-helpers": "0.4.1",
        "@astrojs/markdown-remark": "5.3.0",
        "@astrojs/telemetry": "3.1.0",
        "@babel/core": "^7.26.0",
        "@babel/plugin-transform-react-jsx": "^7.25.9",
        "@babel/types": "^7.26.0",
        "@oslojs/encoding": "^1.1.0",
        "@rollup/pluginutils": "^5.1.3",
        "@types/babel__core": "^7.20.5",
        "@types/cookie": "^0.6.0",
        "acorn": "^8.14.0",
        "aria-query": "^5.3.2",
        "axobject-query": "^4.1.0",
        "boxen": "8.0.1",
        "ci-info": "^4.0.0",
        "clsx": "^2.1.1",
        "common-ancestor-path": "^1.0.1",
        "cookie": "^0.7.2",
        "cssesc": "^3.0.0",
        "debug": "^4.3.7",
        "deterministic-object-hash": "^2.0.2",
        "devalue": "^5.1.1",
        "diff": "^5.2.0",
        "dlv": "^1.1.3",
        "dset": "^3.1.4",
        "es-module-lexer": "^1.5.4",
        "esbuild": "^0.21.5",
        "estree-walker": "^3.0.3",
        "fast-glob": "^3.3.2",
        "flattie": "^1.1.1",
        "github-slugger": "^2.0.0",
        "gray-matter": "^4.0.3",
        "html-escaper": "^3.0.3",
        "http-cache-semantics": "^4.1.1",
        "js-yaml": "^4.1.0",
        "kleur": "^4.1.5",
        "magic-string": "^0.30.12",
        "magicast": "^0.3.5",
        "micromatch": "^4.0.8",
        "mrmime": "^2.0.0",
        "neotraverse": "^0.6.18",
        "ora": "^8.1.1",
        "p-limit": "^6.1.0",
        "p-queue": "^8.0.1",
        "preferred-pm": "^4.0.0",
        "prompts": "^2.4.2",
        "rehype": "^13.0.2",
        "semver": "^7.6.3",
        "shiki": "^1.22.2",
        "tinyexec": "^0.3.1",
        "tsconfck": "^3.1.4",
        "unist-util-visit": "^5.0.0",
        "vfile": "^6.0.3",
        "vite": "^5.4.10",
        "vitefu": "^1.0.3",
        "which-pm": "^3.0.0",
        "xxhash-wasm": "^1.0.2",
        "yargs-parser": "^21.1.1",
        "zod": "^3.23.8",
        "zod-to-json-schema": "^3.23.5",
        "zod-to-ts": "^1.2.0"
      },
      "bin": {
        "astro": "astro.js"
      },
      "engines": {
        "node": "^18.17.1 || ^20.3.0 || >=21.0.0",
        "npm": ">=9.6.5",
        "pnpm": ">=7.1.0"
      },
      "optionalDependencies": {
        "sharp": "^0.33.3"
      }
    },
    "node_modules/astro-compressor": {
      "version": "0.4.1",
      "resolved": "https://registry.npmjs.org/astro-compressor/-/astro-compressor-0.4.1.tgz",
      "integrity": "sha512-IAgYAlxYRMolaptsFB9quH7RxX4eUeC4UfULCPhT+ILcg7m1kbaxuyUKqGg9Hh+KZ+FNPPDAz7DqUfl+HDWhQg=="
    },
    "node_modules/astro-expressive-code": {
      "version": "0.38.3",
      "resolved": "https://registry.npmjs.org/astro-expressive-code/-/astro-expressive-code-0.38.3.tgz",
      "integrity": "sha512-Tvdc7RV0G92BbtyEOsfJtXU35w41CkM94fOAzxbQP67Wj5jArfserJ321FO4XA7WG9QMV0GIBmQq77NBIRDzpQ==",
      "dependencies": {
        "rehype-expressive-code": "^0.38.3"
      },
      "peerDependencies": {
        "astro": "^4.0.0-beta || ^5.0.0-beta || ^3.3.0"
      }
    },
    "node_modules/astro-vtbot": {
      "version": "1.10.7",
      "resolved": "https://registry.npmjs.org/astro-vtbot/-/astro-vtbot-1.10.7.tgz",
      "integrity": "sha512-lwCMq+ruuTbHooJ/ZYL2tA99KXDXqbmD5JNBtlnuO7EsEp7FBpwIVBOHt/lDkqUtDt+vQkWRPA5cLZ3tEny48g==",
      "dev": true,
      "dependencies": {
        "@vtbag/cam-shaft": "^1.0.1",
        "@vtbag/element-crossing": "^1.0.4",
        "@vtbag/inspection-chamber": "^1.0.17",
        "@vtbag/turn-signal": "^1.1.0"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/martrapp"
      }
    },
    "node_modules/autoprefixer": {
      "version": "10.4.20",
      "resolved": "https://registry.npmjs.org/autoprefixer/-/autoprefixer-10.4.20.tgz",
      "integrity": "sha512-XY25y5xSv/wEoqzDyXXME4AFfkZI0P23z6Fs3YgymDnKJkCGOnkL0iTxCa85UTqaSgfcqyf3UA6+c7wUvx/16g==",
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/postcss/"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/autoprefixer"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "dependencies": {
        "browserslist": "^4.23.3",
        "caniuse-lite": "^1.0.30001646",
        "fraction.js": "^4.3.7",
        "normalize-range": "^0.1.2",
        "picocolors": "^1.0.1",
        "postcss-value-parser": "^4.2.0"
      },
      "bin": {
        "autoprefixer": "bin/autoprefixer"
      },
      "engines": {
        "node": "^10 || ^12 || >=14"
      },
      "peerDependencies": {
        "postcss": "^8.1.0"
      }
    },
    "node_modules/axobject-query": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/axobject-query/-/axobject-query-4.1.0.tgz",
      "integrity": "sha512-qIj0G9wZbMGNLjLmg1PT6v2mE9AH2zlnADJD/2tC6E00hgmhUOfEB6greHPAfLRSufHqROIUTkw6E+M3lH0PTQ==",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/bail": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/bail/-/bail-2.0.2.tgz",
      "integrity": "sha512-0xO6mYd7JB2YesxDKplafRpsiOzPt9V02ddPCLbY1xYGPOX24NTyN50qnUxgCPcSoYMhKpAuBTjQoRZCAkUDRw==",
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/wooorm"
      }
    },
    "node_modules/balanced-match": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-1.0.2.tgz",
      "integrity": "sha512-3oSeUO0TMV67hN1AmbXsK4yaqU7tjiHlbxRDZOpH0KW9+CeX4bRAaX0Anxt0tx2MrpRpWwQaPwIlISEJhYU5Pw=="
    },
    "node_modules/base-64": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/base-64/-/base-64-1.0.0.tgz",
      "integrity": "sha512-kwDPIFCGx0NZHog36dj+tHiwP4QMzsZ3AgMViUBKI0+V5n4U0ufTCUMhnQ04diaRI8EX/QcPfql7zlhZ7j4zgg=="
    },
    "node_modules/bcp-47": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/bcp-47/-/bcp-47-2.1.0.tgz",
      "integrity": "sha512-9IIS3UPrvIa1Ej+lVDdDwO7zLehjqsaByECw0bu2RRGP73jALm6FYbzI5gWbgHLvNdkvfXB5YrSbocZdOS0c0w==",
      "dependencies": {
        "is-alphabetical": "^2.0.0",
        "is-alphanumerical": "^2.0.0",
        "is-decimal": "^2.0.0"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/wooorm"
      }
    },
    "node_modules/bcp-47-match": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/bcp-47-match/-/bcp-47-match-2.0.3.tgz",
      "integrity": "sha512-JtTezzbAibu8G0R9op9zb3vcWZd9JF6M0xOYGPn0fNCd7wOpRB1mU2mH9T8gaBGbAAyIIVgB2G7xG0GP98zMAQ==",
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/wooorm"
      }
    },
    "node_modules/binary-extensions": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/binary-extensions/-/binary-extensions-2.3.0.tgz",
      "integrity": "sha512-Ceh+7ox5qe7LJuLHoY0feh3pHuUDHAcRUeyL2VYghZwfpkNIy/+8Ocg0a3UuSoYzavmylwuLWQOf3hl0jjMMIw==",
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/boolbase": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/boolbase/-/boolbase-1.0.0.tgz",
      "integrity": "sha512-JZOSA7Mo9sNGB8+UjSgzdLtokWAky1zbztM3WRLCbZ70/3cTANmQmOdR7y2g+J0e2WXywy1yS468tY+IruqEww=="
    },
    "node_modules/boxen": {
      "version": "8.0.1",
      "resolved": "https://registry.npmjs.org/boxen/-/boxen-8.0.1.tgz",
      "integrity": "sha512-F3PH5k5juxom4xktynS7MoFY+NUWH5LC4CnH11YB8NPew+HLpmBLCybSAEyb2F+4pRXhuhWqFesoQd6DAyc2hw==",
      "dependencies": {
        "ansi-align": "^3.0.1",
        "camelcase": "^8.0.0",
        "chalk": "^5.3.0",
        "cli-boxes": "^3.0.0",
        "string-width": "^7.2.0",
        "type-fest": "^4.21.0",
        "widest-line": "^5.0.0",
        "wrap-ansi": "^9.0.0"
      },
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/brace-expansion": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-2.0.1.tgz",
      "integrity": "sha512-XnAIvQ8eM+kC6aULx6wuQiwVsnzsi9d3WxzV3FpWTGA19F621kwdbsAcFKXgKUHZWsy+mY6iL1sHTxWEFCytDA==",
      "dependencies": {
        "balanced-match": "^1.0.0"
      }
    },
    "node_modules/braces": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/braces/-/braces-3.0.3.tgz",
      "integrity": "sha512-yQbXgO/OSZVD2IsiLlro+7Hf6Q18EJrKSEsdoMzKePKXct3gvD8oLcOQdIzGupr5Fj+EDe8gO/lxc1BzfMpxvA==",
      "dependencies": {
        "fill-range": "^7.1.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/browserslist": {
      "version": "4.24.2",
      "resolved": "https://registry.npmjs.org/browserslist/-/browserslist-4.24.2.tgz",
      "integrity": "sha512-ZIc+Q62revdMcqC6aChtW4jz3My3klmCO1fEmINZY/8J3EpBg5/A/D0AKmBveUh6pgoeycoMkVMko84tuYS+Gg==",
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/browserslist"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/browserslist"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "dependencies": {
        "caniuse-lite": "^1.0.30001669",
        "electron-to-chromium": "^1.5.41",
        "node-releases": "^2.0.18",
        "update-browserslist-db": "^1.1.1"
      },
      "bin": {
        "browserslist": "cli.js"
      },
      "engines": {
        "node": "^6 || ^7 || ^8 || ^9 || ^10 || ^11 || ^12 || >=13.7"
      }
    },
    "node_modules/buffer-from": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/buffer-from/-/buffer-from-1.1.2.tgz",
      "integrity": "sha512-E+XQCRwSbaaiChtv6k6Dwgc+bx+Bs6vuKJHHl5kox/BaKbhiXzqQOwK4cO22yElGp2OCmjwVhT3HmxgyPGnJfQ=="
    },
    "node_modules/camel-case": {
      "version": "4.1.2",
      "resolved": "https://registry.npmjs.org/camel-case/-/camel-case-4.1.2.tgz",
      "integrity": "sha512-gxGWBrTT1JuMx6R+o5PTXMmUnhnVzLQ9SNutD4YqKtI6ap897t3tKECYla6gCWEkplXnlNybEkZg9GEGxKFCgw==",
      "dependencies": {
        "pascal-case": "^3.1.2",
        "tslib": "^2.0.3"
      }
    },
    "node_modules/camelcase": {
      "version": "8.0.0",
      "resolved": "https://registry.npmjs.org/camelcase/-/camelcase-8.0.0.tgz",
      "integrity": "sha512-8WB3Jcas3swSvjIeA2yvCJ+Miyz5l1ZmB6HFb9R1317dt9LCQoswg/BGrmAmkWVEszSrrg4RwmO46qIm2OEnSA==",
      "engines": {
        "node": ">=16"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/camelcase-css": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/camelcase-css/-/camelcase-css-2.0.1.tgz",
      "integrity": "sha512-QOSvevhslijgYwRx6Rv7zKdMF8lbRmx+uQGx2+vDc+KI/eBnsy9kit5aj23AgGu3pa4t9AgwbnXWqS+iOY+2aA==",
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/caniuse-lite": {
      "version": "1.0.30001680",
      "resolved": "https://registry.npmjs.org/caniuse-lite/-/caniuse-lite-1.0.30001680.tgz",
      "integrity": "sha512-rPQy70G6AGUMnbwS1z6Xg+RkHYPAi18ihs47GH0jcxIG7wArmPgY3XbS2sRdBbxJljp3thdT8BIqv9ccCypiPA==",
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/browserslist"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/caniuse-lite"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ]
    },
    "node_modules/ccount": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/ccount/-/ccount-2.0.1.tgz",
      "integrity": "sha512-eyrF0jiFpY+3drT6383f1qhkbGsLSifNAjA61IUjZjmLCWjItY6LB9ft9YhoDgwfmclB2zhu51Lc7+95b8NRAg==",
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/wooorm"
      }
    },
    "node_modules/chalk": {
      "version": "5.3.0",
      "resolved": "https://registry.npmjs.org/chalk/-/chalk-5.3.0.tgz",
      "integrity": "sha512-dLitG79d+GV1Nb/VYcCDFivJeK1hiukt9QjRNVOsUtTy1rR1YJsmpGGTZ3qJos+uw7WmWF4wUwBd9jxjocFC2w==",
      "engines": {
        "node": "^12.17.0 || ^14.13 || >=16.0.0"
      },
      "funding": {
        "url": "https://github.com/chalk/chalk?sponsor=1"
      }
    },
    "node_modules/character-entities": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/character-entities/-/character-entities-2.0.2.tgz",
      "integrity": "sha512-shx7oQ0Awen/BRIdkjkvz54PnEEI/EjwXDSIZp86/KKdbafHh1Df/RYGBhn4hbe2+uKC9FnT5UCEdyPz3ai9hQ==",
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/wooorm"
      }
    },
    "node_modules/character-entities-html4": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/character-entities-html4/-/character-entities-html4-2.1.0.tgz",
      "integrity": "sha512-1v7fgQRj6hnSwFpq1Eu0ynr/CDEw0rXo2B61qXrLNdHZmPKgb7fqS1a2JwF0rISo9q77jDI8VMEHoApn8qDoZA==",
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/wooorm"
      }
    },
    "node_modules/character-entities-legacy": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/character-entities-legacy/-/character-entities-legacy-3.0.0.tgz",
      "integrity": "sha512-RpPp0asT/6ufRm//AJVwpViZbGM/MkjQFxJccQRHmISF/22NBtsHqAWmL+/pmkPWoIUJdWyeVleTl1wydHATVQ==",
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/wooorm"
      }
    },
    "node_modules/character-reference-invalid": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/character-reference-invalid/-/character-reference-invalid-2.0.1.tgz",
      "integrity": "sha512-iBZ4F4wRbyORVsu0jPV7gXkOsGYjGHPmAyv+HiHG8gi5PtC9KI2j1+v8/tlibRvjoWX027ypmG/n0HtO5t7unw==",
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/wooorm"
      }
    },
    "node_modules/chokidar": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/chokidar/-/chokidar-4.0.1.tgz",
      "integrity": "sha512-n8enUVCED/KVRQlab1hr3MVpcVMvxtZjmEa956u+4YijlmQED223XMSYj2tLuKvr4jcCTzNNMpQDUer72MMmzA==",
      "dependencies": {
        "readdirp": "^4.0.1"
      },
      "engines": {
        "node": ">= 14.16.0"
      },
      "funding": {
        "url": "https://paulmillr.com/funding/"
      }
    },
    "node_modules/ci-info": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/ci-info/-/ci-info-4.1.0.tgz",
      "integrity": "sha512-HutrvTNsF48wnxkzERIXOe5/mlcfFcbfCmwcg6CJnizbSue78AbDt+1cgl26zwn61WFxhcPykPfZrbqjGmBb4A==",
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/sibiraj-s"
        }
      ],
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/clean-css": {
      "version": "5.3.3",
      "resolved": "https://registry.npmjs.org/clean-css/-/clean-css-5.3.3.tgz",
      "integrity": "sha512-D5J+kHaVb/wKSFcyyV75uCn8fiY4sV38XJoe4CUyGQ+mOU/fMVYUdH1hJC+CJQ5uY3EnW27SbJYS4X8BiLrAFg==",
      "dependencies": {
        "source-map": "~0.6.0"
      },
      "engines": {
        "node": ">= 10.0"
      }
    },
    "node_modules/clean-css/node_modules/source-map": {
      "version": "0.6.1",
      "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz",
      "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g==",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/cli-boxes": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/cli-boxes/-/cli-boxes-3.0.0.tgz",
      "integrity": "sha512-/lzGpEWL/8PfI0BmBOPRwp0c/wFNX1RdUML3jK/RcSBA9T8mZDdQpqYBKtCFTOfQbwPqWEOpjqW+Fnayc0969g==",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/cli-cursor": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/cli-cursor/-/cli-cursor-5.0.0.tgz",
      "integrity": "sha512-aCj4O5wKyszjMmDT4tZj93kxyydN/K5zPWSCe6/0AV/AA1pqe5ZBIw0a2ZfPQV7lL5/yb5HsUreJ6UFAF1tEQw==",
      "dependencies": {
        "restore-cursor": "^5.0.0"
      },
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/cli-spinners": {
      "version": "2.9.2",
      "resolved": "https://registry.npmjs.org/cli-spinners/-/cli-spinners-2.9.2.tgz",
      "integrity": "sha512-ywqV+5MmyL4E7ybXgKys4DugZbX0FC6LnwrhjuykIjnK9k8OQacQ7axGKnjDXWNhns0xot3bZI5h55H8yo9cJg==",
      "engines": {
        "node": ">=6"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/clipboard": {
      "version": "2.0.11",
      "resolved": "https://registry.npmjs.org/clipboard/-/clipboard-2.0.11.tgz",
      "integrity": "sha512-C+0bbOqkezLIsmWSvlsXS0Q0bmkugu7jcfMIACB+RDEntIzQIkdr148we28AfSloQLRdZlYL/QYyrq05j/3Faw==",
      "dependencies": {
        "good-listener": "^1.2.2",
        "select": "^1.1.2",
        "tiny-emitter": "^2.0.0"
      }
    },
    "node_modules/cliui": {
      "version": "8.0.1",
      "resolved": "https://registry.npmjs.org/cliui/-/cliui-8.0.1.tgz",
      "integrity": "sha512-BSeNnyus75C4//NQ9gQt1/csTXyo/8Sb+afLAkzAptFuMsod9HFokGNudZpi/oQV73hnVK+sR+5PVRMd+Dr7YQ==",
      "dependencies": {
        "string-width": "^4.2.0",
        "strip-ansi": "^6.0.1",
        "wrap-ansi": "^7.0.0"
      },
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/cliui/node_modules/ansi-regex": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-5.0.1.tgz",
      "integrity": "sha512-quJQXlTSUGL2LH9SUXo8VwsY4soanhgo6LNSm84E1LBcE8s3O0wpdiRzyR9z/ZZJMlMWv37qOOb9pdJlMUEKFQ==",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/cliui/node_modules/ansi-styles": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
      "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
      "dependencies": {
        "color-convert": "^2.0.1"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/chalk/ansi-styles?sponsor=1"
      }
    },
    "node_modules/cliui/node_modules/emoji-regex": {
      "version": "8.0.0",
      "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-8.0.0.tgz",
      "integrity": "sha512-MSjYzcWNOA0ewAHpz0MxpYFvwg6yjy1NG3xteoqz644VCo/RPgnr1/GGt+ic3iJTzQ8Eu3TdM14SawnVUmGE6A=="
    },
    "node_modules/cliui/node_modules/string-width": {
      "version": "4.2.3",
      "resolved": "https://registry.npmjs.org/string-width/-/string-width-4.2.3.tgz",
      "integrity": "sha512-wKyQRQpjJ0sIp62ErSZdGsjMJWsap5oRNihHhu6G7JVO/9jIB6UyevL+tXuOqrng8j/cxKTWyWUwvSTriiZz/g==",
      "dependencies": {
        "emoji-regex": "^8.0.0",
        "is-fullwidth-code-point": "^3.0.0",
        "strip-ansi": "^6.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/cliui/node_modules/strip-ansi": {
      "version": "6.0.1",
      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.1.tgz",
      "integrity": "sha512-Y38VPSHcqkFrCpFnQ9vuSXmquuv5oXOKpGeT6aGrr3o3Gc9AlVa6JBfUSOCnbxGGZF+/0ooI7KrPuUSztUdU5A==",
      "dependencies": {
        "ansi-regex": "^5.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/cliui/node_modules/wrap-ansi": {
      "version": "7.0.0",
      "resolved": "https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-7.0.0.tgz",
      "integrity": "sha512-YVGIj2kamLSTxw6NsZjoBxfSwsn0ycdesmc4p+Q21c5zPuZ1pl+NfxVdxPtdHvmNVOQ6XSYG4AUtyt/Fi7D16Q==",
      "dependencies": {
        "ansi-styles": "^4.0.0",
        "string-width": "^4.1.0",
        "strip-ansi": "^6.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/chalk/wrap-ansi?sponsor=1"
      }
    },
    "node_modules/clsx": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/clsx/-/clsx-2.1.1.tgz",
      "integrity": "sha512-eYm0QWBtUrBWZWG0d386OGAw16Z995PiOVo2B7bjWSbHedGl5e0ZWaq65kOGgUSNesEIDkB9ISbTg/JK9dhCZA==",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/collapse-white-space": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/collapse-white-space/-/collapse-white-space-2.1.0.tgz",
      "integrity": "sha512-loKTxY1zCOuG4j9f6EPnuyyYkf58RnhhWTvRoZEokgB+WbdXehfjFviyOVYkqzEWz1Q5kRiZdBYS5SwxbQYwzw==",
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/wooorm"
      }
    },
    "node_modules/color": {
      "version": "4.2.3",
      "resolved": "https://registry.npmjs.org/color/-/color-4.2.3.tgz",
      "integrity": "sha512-1rXeuUUiGGrykh+CeBdu5Ie7OJwinCgQY0bc7GCRxy5xVHy+moaqkpL/jqQq0MtQOeYcrqEz4abc5f0KtU7W4A==",
      "dependencies": {
        "color-convert": "^2.0.1",
        "color-string": "^1.9.0"
      },
      "engines": {
        "node": ">=12.5.0"
      }
    },
    "node_modules/color-convert": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
      "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
      "dependencies": {
        "color-name": "~1.1.4"
      },
      "engines": {
        "node": ">=7.0.0"
      }
    },
    "node_modules/color-name": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
      "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA=="
    },
    "node_modules/color-string": {
      "version": "1.9.1",
      "resolved": "https://registry.npmjs.org/color-string/-/color-string-1.9.1.tgz",
      "integrity": "sha512-shrVawQFojnZv6xM40anx4CkoDP+fZsw/ZerEMsW/pyzsRbElpsL/DBVW7q3ExxwusdNXI3lXpuhEZkzs8p5Eg==",
      "dependencies": {
        "color-name": "^1.0.0",
        "simple-swizzle": "^0.2.2"
      }
    },
    "node_modules/comma-separated-tokens": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/comma-separated-tokens/-/comma-separated-tokens-2.0.3.tgz",
      "integrity": "sha512-Fu4hJdvzeylCfQPp9SGWidpzrMs7tTrlu6Vb8XGaRGck8QSNZJJp538Wrb60Lax4fPwR64ViY468OIUTbRlGZg==",
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/wooorm"
      }
    },
    "node_modules/commander": {
      "version": "10.0.1",
      "resolved": "https://registry.npmjs.org/commander/-/commander-10.0.1.tgz",
      "integrity": "sha512-y4Mg2tXshplEbSGzx7amzPwKKOCGuoSRP/CjEdwwk0FOGlUbq6lKuoyDZTNZkmxHdJtp54hdfY/JUrdL7Xfdug==",
      "engines": {
        "node": ">=14"
      }
    },
    "node_modules/common-ancestor-path": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/common-ancestor-path/-/common-ancestor-path-1.0.1.tgz",
      "integrity": "sha512-L3sHRo1pXXEqX8VU28kfgUY+YGsk09hPqZiZmLacNib6XNTCM8ubYeT7ryXQw8asB1sKgcU5lkB7ONug08aB8w=="
    },
    "node_modules/convert-source-map": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/convert-source-map/-/convert-source-map-2.0.0.tgz",
      "integrity": "sha512-Kvp459HrV2FEJ1CAsi1Ku+MY3kasH19TFykTz2xWmMeq6bk2NU3XXvfJ+Q61m0xktWwt+1HSYf3JZsTms3aRJg=="
    },
    "node_modules/cookie": {
      "version": "0.7.2",
      "resolved": "https://registry.npmjs.org/cookie/-/cookie-0.7.2.tgz",
      "integrity": "sha512-yki5XnKuf750l50uGTllt6kKILY4nQ1eNIQatoXEByZ5dWgnKqbnqmTrBE5B4N7lrMJKQ2ytWMiTO2o0v6Ew/w==",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/cross-spawn": {
      "version": "7.0.6",
      "resolved": "https://registry.npmjs.org/cross-spawn/-/cross-spawn-7.0.6.tgz",
      "integrity": "sha512-uV2QOWP2nWzsy2aMp8aRibhi9dlzF5Hgh5SHaB9OiTGEyDTiJJyx0uy51QXdyWbtAHNua4XJzUKca3OzKUd3vA==",
      "dependencies": {
        "path-key": "^3.1.0",
        "shebang-command": "^2.0.0",
        "which": "^2.0.1"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/css-selector-parser": {
      "version": "3.0.5",
      "resolved": "https://registry.npmjs.org/css-selector-parser/-/css-selector-parser-3.0.5.tgz",
      "integrity": "sha512-3itoDFbKUNx1eKmVpYMFyqKX04Ww9osZ+dLgrk6GEv6KMVeXUhUnp4I5X+evw+u3ZxVU6RFXSSRxlTeMh8bA+g==",
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/mdevils"
        },
        {
          "type": "patreon",
          "url": "https://patreon.com/mdevils"
        }
      ]
    },
    "node_modules/cssesc": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/cssesc/-/cssesc-3.0.0.tgz",
      "integrity": "sha512-/Tb/JcjK111nNScGob5MNtsntNM1aCNUDipB/TkwZFhyDrrE47SOx/18wF2bbjgc3ZzCSKW1T5nt5EbFoAz/Vg==",
      "bin": {
        "cssesc": "bin/cssesc"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/debug": {
      "version": "4.3.7",
      "resolved": "https://registry.npmjs.org/debug/-/debug-4.3.7.tgz",
      "integrity": "sha512-Er2nc/H7RrMXZBFCEim6TCmMk02Z8vLC2Rbi1KEBggpo0fS6l0S1nnapwmIi3yW/+GOJap1Krg4w0Hg80oCqgQ==",
      "dependencies": {
        "ms": "^2.1.3"
      },
      "engines": {
        "node": ">=6.0"
      },
      "peerDependenciesMeta": {
        "supports-color": {
          "optional": true
        }
      }
    },
    "node_modules/decode-bmp": {
      "version": "0.2.1",
      "resolved": "https://registry.npmjs.org/decode-bmp/-/decode-bmp-0.2.1.tgz",
      "integrity": "sha512-NiOaGe+GN0KJqi2STf24hfMkFitDUaIoUU3eKvP/wAbLe8o6FuW5n/x7MHPR0HKvBokp6MQY/j7w8lewEeVCIA==",
      "dependencies": {
        "@canvas/image-data": "^1.0.0",
        "to-data-view": "^1.1.0"
      },
      "engines": {
        "node": ">=8.6.0"
      }
    },
    "node_modules/decode-ico": {
      "version": "0.4.1",
      "resolved": "https://registry.npmjs.org/decode-ico/-/decode-ico-0.4.1.tgz",
      "integrity": "sha512-69NZfbKIzux1vBOd31al3XnMnH+2mqDhEgLdpygErm4d60N+UwA5Sq5WFjmEDQzumgB9fElojGwWG0vybVfFmA==",
      "dependencies": {
        "@canvas/image-data": "^1.0.0",
        "decode-bmp": "^0.2.0",
        "to-data-view": "^1.1.0"
      },
      "engines": {
        "node": ">=8.6"
      }
    },
    "node_modules/decode-named-character-reference": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/decode-named-character-reference/-/decode-named-character-reference-1.0.2.tgz",
      "integrity": "sha512-O8x12RzrUF8xyVcY0KJowWsmaJxQbmy0/EtnNtHRpsOcT7dFk5W598coHqBVpmWo1oQQfsCqfCmkZN5DJrZVdg==",
      "dependencies": {
        "character-entities": "^2.0.0"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/wooorm"
      }
    },
    "node_modules/delegate": {
      "version": "3.2.0",
      "resolved": "https://registry.npmjs.org/delegate/-/delegate-3.2.0.tgz",
      "integrity": "sha512-IofjkYBZaZivn0V8nnsMJGBr4jVLxHDheKSW88PyxS5QC4Vo9ZbZVvhzlSxY87fVq3STR6r+4cGepyHkcWOQSw=="
    },
    "node_modules/dequal": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/dequal/-/dequal-2.0.3.tgz",
      "integrity": "sha512-0je+qPKHEMohvfRTCEo3CrPG6cAzAYgmzKyxRiYSSDkS6eGJdyVJm7WaYA5ECaAD9wLB2T4EEeymA5aFVcYXCA==",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/detect-libc": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/detect-libc/-/detect-libc-2.0.3.tgz",
      "integrity": "sha512-bwy0MGW55bG41VqxxypOsdSdGqLwXPI/focwgTYCFMbdUiBAxLg9CFzG08sz2aqzknwiX7Hkl0bQENjg8iLByw==",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/deterministic-object-hash": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/deterministic-object-hash/-/deterministic-object-hash-2.0.2.tgz",
      "integrity": "sha512-KxektNH63SrbfUyDiwXqRb1rLwKt33AmMv+5Nhsw1kqZ13SJBRTgZHtGbE+hH3a1mVW1cz+4pqSWVPAtLVXTzQ==",
      "dependencies": {
        "base-64": "^1.0.0"
      },
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/devalue": {
      "version": "5.1.1",
      "resolved": "https://registry.npmjs.org/devalue/-/devalue-5.1.1.tgz",
      "integrity": "sha512-maua5KUiapvEwiEAe+XnlZ3Rh0GD+qI1J/nb9vrJc3muPXvcF/8gXYTWF76+5DAqHyDUtOIImEuo0YKE9mshVw=="
    },
    "node_modules/devlop": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/devlop/-/devlop-1.1.0.tgz",
      "integrity": "sha512-RWmIqhcFf1lRYBvNmr7qTNuyCt/7/ns2jbpp1+PalgE/rDQcBT0fioSMUpJ93irlUhC5hrg4cYqe6U+0ImW0rA==",
      "dependencies": {
        "dequal": "^2.0.0"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/wooorm"
      }
    },
    "node_modules/didyoumean": {
      "version": "1.2.2",
      "resolved": "https://registry.npmjs.org/didyoumean/-/didyoumean-1.2.2.tgz",
      "integrity": "sha512-gxtyfqMg7GKyhQmb056K7M3xszy/myH8w+B4RT+QXBQsvAOdc3XymqDDPHx1BgPgsdAA5SIifona89YtRATDzw=="
    },
    "node_modules/diff": {
      "version": "5.2.0",
      "resolved": "https://registry.npmjs.org/diff/-/diff-5.2.0.tgz",
      "integrity": "sha512-uIFDxqpRZGZ6ThOk84hEfqWoHx2devRFvpTZcTHur85vImfaxUbTW9Ryh4CpCuDnToOP1CEtXKIgytHBPVff5A==",
      "engines": {
        "node": ">=0.3.1"
      }
    },
    "node_modules/direction": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/direction/-/direction-2.0.1.tgz",
      "integrity": "sha512-9S6m9Sukh1cZNknO1CWAr2QAWsbKLafQiyM5gZ7VgXHeuaoUwffKN4q6NC4A/Mf9iiPlOXQEKW/Mv/mh9/3YFA==",
      "bin": {
        "direction": "cli.js"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/wooorm"
      }
    },
    "node_modules/dlv": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/dlv/-/dlv-1.1.3.tgz",
      "integrity": "sha512-+HlytyjlPKnIG8XuRG8WvmBP8xs8P71y+SKKS6ZXWoEgLuePxtDoUEiH7WkdePWrQ5JBpE6aoVqfZfJUQkjXwA=="
    },
    "node_modules/dot-case": {
      "version": "3.0.4",
      "resolved": "https://registry.npmjs.org/dot-case/-/dot-case-3.0.4.tgz",
      "integrity": "sha512-Kv5nKlh6yRrdrGvxeJ2e5y2eRUpkUosIW4A2AS38zwSz27zu7ufDwQPi5Jhs3XAlGNetl3bmnGhQsMtkKJnj3w==",
      "dependencies": {
        "no-case": "^3.0.4",
        "tslib": "^2.0.3"
      }
    },
    "node_modules/dset": {
      "version": "3.1.4",
      "resolved": "https://registry.npmjs.org/dset/-/dset-3.1.4.tgz",
      "integrity": "sha512-2QF/g9/zTaPDc3BjNcVTGoBbXBgYfMTTceLaYcFJ/W9kggFUkhxD/hMEeuLKbugyef9SqAx8cpgwlIP/jinUTA==",
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/eastasianwidth": {
      "version": "0.2.0",
      "resolved": "https://registry.npmjs.org/eastasianwidth/-/eastasianwidth-0.2.0.tgz",
      "integrity": "sha512-I88TYZWc9XiYHRQ4/3c5rjjfgkjhLyW2luGIheGERbNQ6OY7yTybanSpDXZa8y7VUP9YmDcYa+eyq4ca7iLqWA=="
    },
    "node_modules/electron-to-chromium": {
      "version": "1.5.63",
      "resolved": "https://registry.npmjs.org/electron-to-chromium/-/electron-to-chromium-1.5.63.tgz",
      "integrity": "sha512-ddeXKuY9BHo/mw145axlyWjlJ1UBt4WK3AlvkT7W2AbqfRQoacVoRUCF6wL3uIx/8wT9oLKXzI+rFqHHscByaA=="
    },
    "node_modules/emmet": {
      "version": "2.4.11",
      "resolved": "https://registry.npmjs.org/emmet/-/emmet-2.4.11.tgz",
      "integrity": "sha512-23QPJB3moh/U9sT4rQzGgeyyGIrcM+GH5uVYg2C6wZIxAIJq7Ng3QLT79tl8FUwDXhyq9SusfknOrofAKqvgyQ==",
      "workspaces": [
        "./packages/scanner",
        "./packages/abbreviation",
        "./packages/css-abbreviation",
        "./"
      ],
      "dependencies": {
        "@emmetio/abbreviation": "^2.3.3",
        "@emmetio/css-abbreviation": "^2.1.8"
      }
    },
    "node_modules/emoji-regex": {
      "version": "10.4.0",
      "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-10.4.0.tgz",
      "integrity": "sha512-EC+0oUMY1Rqm4O6LLrgjtYDvcVYTy7chDnM4Q7030tP4Kwj3u/pR6gP9ygnp2CJMK5Gq+9Q2oqmrFJAz01DXjw=="
    },
    "node_modules/emoji-regex-xs": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/emoji-regex-xs/-/emoji-regex-xs-1.0.0.tgz",
      "integrity": "sha512-LRlerrMYoIDrT6jgpeZ2YYl/L8EulRTt5hQcYjy5AInh7HWXKimpqx68aknBFpGL2+/IcogTcaydJEgaTmOpDg=="
    },
    "node_modules/entities": {
      "version": "4.5.0",
      "resolved": "https://registry.npmjs.org/entities/-/entities-4.5.0.tgz",
      "integrity": "sha512-V0hjH4dGPh9Ao5p0MoRY6BVqtwCjhz6vI5LT8AJ55H+4g9/4vbHx1I54fS0XuclLhDHArPQCiMjDxjaL8fPxhw==",
      "engines": {
        "node": ">=0.12"
      },
      "funding": {
        "url": "https://github.com/fb55/entities?sponsor=1"
      }
    },
    "node_modules/eruda": {
      "version": "3.4.1",
      "resolved": "https://registry.npmjs.org/eruda/-/eruda-3.4.1.tgz",
      "integrity": "sha512-RmaO5yD97URY/9Q0lye3cmmNPoXNKreeePIw7c/zllbscR92CjGFZFuQ70+0fLIvLcKW3Xha8DS8NFhmeNbEBQ==",
      "dev": true
    },
    "node_modules/es-module-lexer": {
      "version": "1.5.4",
      "resolved": "https://registry.npmjs.org/es-module-lexer/-/es-module-lexer-1.5.4.tgz",
      "integrity": "sha512-MVNK56NiMrOwitFB7cqDwq0CQutbw+0BvLshJSse0MUNU+y1FC3bUS/AQg7oUng+/wKrrki7JfmwtVHkVfPLlw=="
    },
    "node_modules/esast-util-from-estree": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/esast-util-from-estree/-/esast-util-from-estree-2.0.0.tgz",
      "integrity": "sha512-4CyanoAudUSBAn5K13H4JhsMH6L9ZP7XbLVe/dKybkxMO7eDyLsT8UHl9TRNrU2Gr9nz+FovfSIjuXWJ81uVwQ==",
      "dependencies": {
        "@types/estree-jsx": "^1.0.0",
        "devlop": "^1.0.0",
        "estree-util-visit": "^2.0.0",
        "unist-util-position-from-estree": "^2.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/esast-util-from-js": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/esast-util-from-js/-/esast-util-from-js-2.0.1.tgz",
      "integrity": "sha512-8Ja+rNJ0Lt56Pcf3TAmpBZjmx8ZcK5Ts4cAzIOjsjevg9oSXJnl6SUQ2EevU8tv3h6ZLWmoKL5H4fgWvdvfETw==",
      "dependencies": {
        "@types/estree-jsx": "^1.0.0",
        "acorn": "^8.0.0",
        "esast-util-from-estree": "^2.0.0",
        "vfile-message": "^4.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/esbuild": {
      "version": "0.21.5",
      "resolved": "https://registry.npmjs.org/esbuild/-/esbuild-0.21.5.tgz",
      "integrity": "sha512-mg3OPMV4hXywwpoDxu3Qda5xCKQi+vCTZq8S9J/EpkhB2HzKXq4SNFZE3+NK93JYxc8VMSep+lOUSC/RVKaBqw==",
      "hasInstallScript": true,
      "bin": {
        "esbuild": "bin/esbuild"
      },
      "engines": {
        "node": ">=12"
      },
      "optionalDependencies": {
        "@esbuild/aix-ppc64": "0.21.5",
        "@esbuild/android-arm": "0.21.5",
        "@esbuild/android-arm64": "0.21.5",
        "@esbuild/android-x64": "0.21.5",
        "@esbuild/darwin-arm64": "0.21.5",
        "@esbuild/darwin-x64": "0.21.5",
        "@esbuild/freebsd-arm64": "0.21.5",
        "@esbuild/freebsd-x64": "0.21.5",
        "@esbuild/linux-arm": "0.21.5",
        "@esbuild/linux-arm64": "0.21.5",
        "@esbuild/linux-ia32": "0.21.5",
        "@esbuild/linux-loong64": "0.21.5",
        "@esbuild/linux-mips64el": "0.21.5",
        "@esbuild/linux-ppc64": "0.21.5",
        "@esbuild/linux-riscv64": "0.21.5",
        "@esbuild/linux-s390x": "0.21.5",
        "@esbuild/linux-x64": "0.21.5",
        "@esbuild/netbsd-x64": "0.21.5",
        "@esbuild/openbsd-x64": "0.21.5",
        "@esbuild/sunos-x64": "0.21.5",
        "@esbuild/win32-arm64": "0.21.5",
        "@esbuild/win32-ia32": "0.21.5",
        "@esbuild/win32-x64": "0.21.5"
      }
    },
    "node_modules/escalade": {
      "version": "3.2.0",
      "resolved": "https://registry.npmjs.org/escalade/-/escalade-3.2.0.tgz",
      "integrity": "sha512-WUj2qlxaQtO4g6Pq5c29GTcWGDyd8itL8zTlipgECz3JesAiiOKotd8JU6otB3PACgG6xkJUyVhboMS+bje/jA==",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/escape-string-regexp": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-5.0.0.tgz",
      "integrity": "sha512-/veY75JbMK4j1yjvuUxuVsiS/hr/4iHs9FTT6cgTexxdE0Ly/glccBAkloH/DofkjRbZU3bnoj38mOmhkZ0lHw==",
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/esprima": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/esprima/-/esprima-4.0.1.tgz",
      "integrity": "sha512-eGuFFw7Upda+g4p+QHvnW0RyTX/SVeJBDM/gCtMARO0cLuT2HcEKnTPvhjV6aGeqrCB/sbNop0Kszm0jsaWU4A==",
      "bin": {
        "esparse": "bin/esparse.js",
        "esvalidate": "bin/esvalidate.js"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/estree-util-attach-comments": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/estree-util-attach-comments/-/estree-util-attach-comments-3.0.0.tgz",
      "integrity": "sha512-cKUwm/HUcTDsYh/9FgnuFqpfquUbwIqwKM26BVCGDPVgvaCl/nDCCjUfiLlx6lsEZ3Z4RFxNbOQ60pkaEwFxGw==",
      "dependencies": {
        "@types/estree": "^1.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/estree-util-build-jsx": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/estree-util-build-jsx/-/estree-util-build-jsx-3.0.1.tgz",
      "integrity": "sha512-8U5eiL6BTrPxp/CHbs2yMgP8ftMhR5ww1eIKoWRMlqvltHF8fZn5LRDvTKuxD3DUn+shRbLGqXemcP51oFCsGQ==",
      "dependencies": {
        "@types/estree-jsx": "^1.0.0",
        "devlop": "^1.0.0",
        "estree-util-is-identifier-name": "^3.0.0",
        "estree-walker": "^3.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/estree-util-is-identifier-name": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/estree-util-is-identifier-name/-/estree-util-is-identifier-name-3.0.0.tgz",
      "integrity": "sha512-hFtqIDZTIUZ9BXLb8y4pYGyk6+wekIivNVTcmvk8NoOh+VeRn5y6cEHzbURrWbfp1fIqdVipilzj+lfaadNZmg==",
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/estree-util-scope": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/estree-util-scope/-/estree-util-scope-1.0.0.tgz",
      "integrity": "sha512-2CAASclonf+JFWBNJPndcOpA8EMJwa0Q8LUFJEKqXLW6+qBvbFZuF5gItbQOs/umBUkjviCSDCbBwU2cXbmrhQ==",
      "dependencies": {
        "@types/estree": "^1.0.0",
        "devlop": "^1.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/estree-util-to-js": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/estree-util-to-js/-/estree-util-to-js-2.0.0.tgz",
      "integrity": "sha512-WDF+xj5rRWmD5tj6bIqRi6CkLIXbbNQUcxQHzGysQzvHmdYG2G7p/Tf0J0gpxGgkeMZNTIjT/AoSvC9Xehcgdg==",
      "dependencies": {
        "@types/estree-jsx": "^1.0.0",
        "astring": "^1.8.0",
        "source-map": "^0.7.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/estree-util-visit": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/estree-util-visit/-/estree-util-visit-2.0.0.tgz",
      "integrity": "sha512-m5KgiH85xAhhW8Wta0vShLcUvOsh3LLPI2YVwcbio1l7E09NTLL1EyMZFM1OyWowoH0skScNbhOPl4kcBgzTww==",
      "dependencies": {
        "@types/estree-jsx": "^1.0.0",
        "@types/unist": "^3.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/estree-walker": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/estree-walker/-/estree-walker-3.0.3.tgz",
      "integrity": "sha512-7RUKfXgSMMkzt6ZuXmqapOurLGPPfgj6l9uRZ7lRGolvk0y2yocc35LdcxKC5PQZdn2DMqioAQ2NoWcrTKmm6g==",
      "dependencies": {
        "@types/estree": "^1.0.0"
      }
    },
    "node_modules/eventemitter3": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/eventemitter3/-/eventemitter3-5.0.1.tgz",
      "integrity": "sha512-GWkBvjiSZK87ELrYOSESUYeVIc9mvLLf/nXalMOS5dYrgZq9o5OVkbZAVM06CVxYsCwH9BDZFPlQTlPA1j4ahA=="
    },
    "node_modules/expressive-code": {
      "version": "0.38.3",
      "resolved": "https://registry.npmjs.org/expressive-code/-/expressive-code-0.38.3.tgz",
      "integrity": "sha512-COM04AiUotHCKJgWdn7NtW2lqu8OW8owAidMpkXt1qxrZ9Q2iC7+tok/1qIn2ocGnczvr9paIySgGnEwFeEQ8Q==",
      "dependencies": {
        "@expressive-code/core": "^0.38.3",
        "@expressive-code/plugin-frames": "^0.38.3",
        "@expressive-code/plugin-shiki": "^0.38.3",
        "@expressive-code/plugin-text-markers": "^0.38.3"
      }
    },
    "node_modules/extend": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/extend/-/extend-3.0.2.tgz",
      "integrity": "sha512-fjquC59cD7CyW6urNXK0FBufkZcoiGG80wTuPujX590cB5Ttln20E2UB4S/WARVqhXffZl2LNgS+gQdPIIim/g=="
    },
    "node_modules/extend-shallow": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
      "integrity": "sha512-zCnTtlxNoAiDc3gqY2aYAWFx7XWWiasuF2K8Me5WbN8otHKTUKBwjPtNpRs/rbUZm7KxWAaNj7P1a/p52GbVug==",
      "dependencies": {
        "is-extendable": "^0.1.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/fast-deep-equal": {
      "version": "3.1.3",
      "resolved": "https://registry.npmjs.org/fast-deep-equal/-/fast-deep-equal-3.1.3.tgz",
      "integrity": "sha512-f3qQ9oQy9j2AhBe/H9VC91wLmKBCCU/gDOnKNAYG5hswO7BLKj09Hc5HYNz9cGI++xlpDCIgDaitVs03ATR84Q=="
    },
    "node_modules/fast-glob": {
      "version": "3.3.2",
      "resolved": "https://registry.npmjs.org/fast-glob/-/fast-glob-3.3.2.tgz",
      "integrity": "sha512-oX2ruAFQwf/Orj8m737Y5adxDQO0LAB7/S5MnxCdTNDd4p6BsyIVsv9JQsATbTSq8KHRpLwIHbVlUNatxd+1Ow==",
      "dependencies": {
        "@nodelib/fs.stat": "^2.0.2",
        "@nodelib/fs.walk": "^1.2.3",
        "glob-parent": "^5.1.2",
        "merge2": "^1.3.0",
        "micromatch": "^4.0.4"
      },
      "engines": {
        "node": ">=8.6.0"
      }
    },
    "node_modules/fast-uri": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/fast-uri/-/fast-uri-3.0.3.tgz",
      "integrity": "sha512-aLrHthzCjH5He4Z2H9YZ+v6Ujb9ocRuW6ZzkJQOrTxleEijANq4v1TsaPaVG1PZcuurEzrLcWRyYBYXD5cEiaw=="
    },
    "node_modules/fastq": {
      "version": "1.17.1",
      "resolved": "https://registry.npmjs.org/fastq/-/fastq-1.17.1.tgz",
      "integrity": "sha512-sRVD3lWVIXWg6By68ZN7vho9a1pQcN/WBFaAAsDDFzlJjvoGx0P8z7V1t72grFJfJhu3YPZBuu25f7Kaw2jN1w==",
      "dependencies": {
        "reusify": "^1.0.4"
      }
    },
    "node_modules/fill-range": {
      "version": "7.1.1",
      "resolved": "https://registry.npmjs.org/fill-range/-/fill-range-7.1.1.tgz",
      "integrity": "sha512-YsGpe3WHLK8ZYi4tWDg2Jy3ebRz2rXowDxnld4bkQB00cc/1Zw9AWnC0i9ztDJitivtQvaI9KaLyKrc+hBW0yg==",
      "dependencies": {
        "to-regex-range": "^5.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/find-up": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/find-up/-/find-up-4.1.0.tgz",
      "integrity": "sha512-PpOwAdQ/YlXQ2vj8a3h8IipDuYRi3wceVQQGYWxNINccq40Anw7BlsEXCMbt1Zt+OLA6Fq9suIpIWD0OsnISlw==",
      "dependencies": {
        "locate-path": "^5.0.0",
        "path-exists": "^4.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/find-up-simple": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/find-up-simple/-/find-up-simple-1.0.0.tgz",
      "integrity": "sha512-q7Us7kcjj2VMePAa02hDAF6d+MzsdsAWEwYyOpwUtlerRBkOEPBCRZrAV4XfcSN8fHAgaD0hP7miwoay6DCprw==",
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/find-yarn-workspace-root2": {
      "version": "1.2.16",
      "resolved": "https://registry.npmjs.org/find-yarn-workspace-root2/-/find-yarn-workspace-root2-1.2.16.tgz",
      "integrity": "sha512-hr6hb1w8ePMpPVUK39S4RlwJzi+xPLuVuG8XlwXU3KD5Yn3qgBWVfy3AzNlDhWvE1EORCE65/Qm26rFQt3VLVA==",
      "dependencies": {
        "micromatch": "^4.0.2",
        "pkg-dir": "^4.2.0"
      }
    },
    "node_modules/flattie": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/flattie/-/flattie-1.1.1.tgz",
      "integrity": "sha512-9UbaD6XdAL97+k/n+N7JwX46K/M6Zc6KcFYskrYL8wbBV/Uyk0CTAMY0VT+qiK5PM7AIc9aTWYtq65U7T+aCNQ==",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/foreground-child": {
      "version": "3.3.0",
      "resolved": "https://registry.npmjs.org/foreground-child/-/foreground-child-3.3.0.tgz",
      "integrity": "sha512-Ld2g8rrAyMYFXBhEqMz8ZAHBi4J4uS1i/CxGMDnjyFWddMXLVcDp051DZfu+t7+ab7Wv6SMqpWmyFIj5UbfFvg==",
      "dependencies": {
        "cross-spawn": "^7.0.0",
        "signal-exit": "^4.0.1"
      },
      "engines": {
        "node": ">=14"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/fraction.js": {
      "version": "4.3.7",
      "resolved": "https://registry.npmjs.org/fraction.js/-/fraction.js-4.3.7.tgz",
      "integrity": "sha512-ZsDfxO51wGAXREY55a7la9LScWpwv9RxIrYABrlvOFBlH/ShPnrtsXeuUIfXKKOVicNxQ+o8JTbJvjS4M89yew==",
      "engines": {
        "node": "*"
      },
      "funding": {
        "type": "patreon",
        "url": "https://github.com/sponsors/rawify"
      }
    },
    "node_modules/fsevents": {
      "version": "2.3.3",
      "resolved": "https://registry.npmjs.org/fsevents/-/fsevents-2.3.3.tgz",
      "integrity": "sha512-5xoDfX+fL7faATnagmWPpbFtwh/R77WmMMqqHGS65C3vvB0YHrgF+B1YmZ3441tMj5n63k0212XNoJwzlhffQw==",
      "hasInstallScript": true,
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": "^8.16.0 || ^10.6.0 || >=11.0.0"
      }
    },
    "node_modules/function-bind": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/function-bind/-/function-bind-1.1.2.tgz",
      "integrity": "sha512-7XHNxH7qX9xG5mIwxkhumTox/MIRNcOgDrxWsMt2pAr23WHp6MrRlN7FBSFpCpr+oVO0F744iUgR82nJMfG2SA==",
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/gensync": {
      "version": "1.0.0-beta.2",
      "resolved": "https://registry.npmjs.org/gensync/-/gensync-1.0.0-beta.2.tgz",
      "integrity": "sha512-3hN7NaskYvMDLQY55gnW3NQ+mesEAepTqlg+VEbj7zzqEMBVNhzcGYYeqFo/TlYz6eQiFcp1HcsCZO+nGgS8zg==",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/get-caller-file": {
      "version": "2.0.5",
      "resolved": "https://registry.npmjs.org/get-caller-file/-/get-caller-file-2.0.5.tgz",
      "integrity": "sha512-DyFP3BM/3YHTQOCUL/w0OZHR0lpKeGrxotcHWcqNEdnltqFwXVfhEBQ94eIo34AfQpo0rGki4cyIiftY06h2Fg==",
      "engines": {
        "node": "6.* || 8.* || >= 10.*"
      }
    },
    "node_modules/get-east-asian-width": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/get-east-asian-width/-/get-east-asian-width-1.3.0.tgz",
      "integrity": "sha512-vpeMIQKxczTD/0s2CdEWHcb0eeJe6TFjxb+J5xgX7hScxqrGuyjmv4c1D4A/gelKfyox0gJJwIHF+fLjeaM8kQ==",
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/github-slugger": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/github-slugger/-/github-slugger-2.0.0.tgz",
      "integrity": "sha512-IaOQ9puYtjrkq7Y0Ygl9KDZnrf/aiUJYUpVf89y8kyaxbRG7Y1SrX/jaumrv81vc61+kiMempujsM3Yw7w5qcw=="
    },
    "node_modules/glob": {
      "version": "11.0.0",
      "resolved": "https://registry.npmjs.org/glob/-/glob-11.0.0.tgz",
      "integrity": "sha512-9UiX/Bl6J2yaBbxKoEBRm4Cipxgok8kQYcOPEhScPwebu2I0HoQOuYdIO6S3hLuWoZgpDpwQZMzTFxgpkyT76g==",
      "dependencies": {
        "foreground-child": "^3.1.0",
        "jackspeak": "^4.0.1",
        "minimatch": "^10.0.0",
        "minipass": "^7.1.2",
        "package-json-from-dist": "^1.0.0",
        "path-scurry": "^2.0.0"
      },
      "bin": {
        "glob": "dist/esm/bin.mjs"
      },
      "engines": {
        "node": "20 || >=22"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/glob-parent": {
      "version": "5.1.2",
      "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-5.1.2.tgz",
      "integrity": "sha512-AOIgSQCepiJYwP3ARnGx+5VnTu2HBYdzbGP45eLw1vr3zB3vZLeyed1sC9hnbcOc9/SrMyM5RPQrkGz4aS9Zow==",
      "dependencies": {
        "is-glob": "^4.0.1"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/globals": {
      "version": "11.12.0",
      "resolved": "https://registry.npmjs.org/globals/-/globals-11.12.0.tgz",
      "integrity": "sha512-WOBp/EEGUiIsJSp7wcv/y6MO+lV9UoncWqxuFfm8eBwzWNgyfBd6Gz+IeKQ9jCmyhoH99g15M3T+QaVHFjizVA==",
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/globby": {
      "version": "14.0.2",
      "resolved": "https://registry.npmjs.org/globby/-/globby-14.0.2.tgz",
      "integrity": "sha512-s3Fq41ZVh7vbbe2PN3nrW7yC7U7MFVc5c98/iTl9c2GawNMKx/J648KQRW6WKkuU8GIbbh2IXfIRQjOZnXcTnw==",
      "dependencies": {
        "@sindresorhus/merge-streams": "^2.1.0",
        "fast-glob": "^3.3.2",
        "ignore": "^5.2.4",
        "path-type": "^5.0.0",
        "slash": "^5.1.0",
        "unicorn-magic": "^0.1.0"
      },
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/good-listener": {
      "version": "1.2.2",
      "resolved": "https://registry.npmjs.org/good-listener/-/good-listener-1.2.2.tgz",
      "integrity": "sha512-goW1b+d9q/HIwbVYZzZ6SsTr4IgE+WA44A0GmPIQstuOrgsFcT7VEJ48nmr9GaRtNu0XTKacFLGnBPAM6Afouw==",
      "dependencies": {
        "delegate": "^3.1.2"
      }
    },
    "node_modules/graceful-fs": {
      "version": "4.2.11",
      "resolved": "https://registry.npmjs.org/graceful-fs/-/graceful-fs-4.2.11.tgz",
      "integrity": "sha512-RbJ5/jmFcNNCcDV5o9eTnBLJ/HszWV0P73bc+Ff4nS/rJj+YaS6IGyiOL0VoBYX+l1Wrl3k63h/KrH+nhJ0XvQ=="
    },
    "node_modules/gray-matter": {
      "version": "4.0.3",
      "resolved": "https://registry.npmjs.org/gray-matter/-/gray-matter-4.0.3.tgz",
      "integrity": "sha512-5v6yZd4JK3eMI3FqqCouswVqwugaA9r4dNZB1wwcmrD02QkV5H0y7XBQW8QwQqEaZY1pM9aqORSORhJRdNK44Q==",
      "dependencies": {
        "js-yaml": "^3.13.1",
        "kind-of": "^6.0.2",
        "section-matter": "^1.0.0",
        "strip-bom-string": "^1.0.0"
      },
      "engines": {
        "node": ">=6.0"
      }
    },
    "node_modules/gray-matter/node_modules/argparse": {
      "version": "1.0.10",
      "resolved": "https://registry.npmjs.org/argparse/-/argparse-1.0.10.tgz",
      "integrity": "sha512-o5Roy6tNG4SL/FOkCAN6RzjiakZS25RLYFrcMttJqbdd8BWrnA+fGz57iN5Pb06pvBGvl5gQ0B48dJlslXvoTg==",
      "dependencies": {
        "sprintf-js": "~1.0.2"
      }
    },
    "node_modules/gray-matter/node_modules/js-yaml": {
      "version": "3.14.1",
      "resolved": "https://registry.npmjs.org/js-yaml/-/js-yaml-3.14.1.tgz",
      "integrity": "sha512-okMH7OXXJ7YrN9Ok3/SXrnu4iX9yOk+25nqX4imS2npuvTYDmo/QEZoqwZkYaIDk3jVvBOTOIEgEhaLOynBS9g==",
      "dependencies": {
        "argparse": "^1.0.7",
        "esprima": "^4.0.0"
      },
      "bin": {
        "js-yaml": "bin/js-yaml.js"
      }
    },
    "node_modules/gsap": {
      "version": "3.12.5",
      "resolved": "https://registry.npmjs.org/gsap/-/gsap-3.12.5.tgz",
      "integrity": "sha512-srBfnk4n+Oe/ZnMIOXt3gT605BX9x5+rh/prT2F1SsNJsU1XuMiP0E2aptW481OnonOGACZWBqseH5Z7csHxhQ=="
    },
    "node_modules/hasown": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/hasown/-/hasown-2.0.2.tgz",
      "integrity": "sha512-0hJU9SCPvmMzIBdZFqNPXWa6dqh7WdH0cII9y+CyS8rG3nL48Bclra9HmKhVVUHyPWNH5Y7xDwAB7bfgSjkUMQ==",
      "dependencies": {
        "function-bind": "^1.1.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/hast-util-embedded": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/hast-util-embedded/-/hast-util-embedded-3.0.0.tgz",
      "integrity": "sha512-naH8sld4Pe2ep03qqULEtvYr7EjrLK2QHY8KJR6RJkTUjPGObe1vnx585uzem2hGra+s1q08DZZpfgDVYRbaXA==",
      "dependencies": {
        "@types/hast": "^3.0.0",
        "hast-util-is-element": "^3.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/hast-util-format": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/hast-util-format/-/hast-util-format-1.1.0.tgz",
      "integrity": "sha512-yY1UDz6bC9rDvCWHpx12aIBGRG7krurX0p0Fm6pT547LwDIZZiNr8a+IHDogorAdreULSEzP82Nlv5SZkHZcjA==",
      "dependencies": {
        "@types/hast": "^3.0.0",
        "hast-util-embedded": "^3.0.0",
        "hast-util-minify-whitespace": "^1.0.0",
        "hast-util-phrasing": "^3.0.0",
        "hast-util-whitespace": "^3.0.0",
        "html-whitespace-sensitive-tag-names": "^3.0.0",
        "unist-util-visit-parents": "^6.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/hast-util-from-html": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/hast-util-from-html/-/hast-util-from-html-2.0.3.tgz",
      "integrity": "sha512-CUSRHXyKjzHov8yKsQjGOElXy/3EKpyX56ELnkHH34vDVw1N1XSQ1ZcAvTyAPtGqLTuKP/uxM+aLkSPqF/EtMw==",
      "dependencies": {
        "@types/hast": "^3.0.0",
        "devlop": "^1.1.0",
        "hast-util-from-parse5": "^8.0.0",
        "parse5": "^7.0.0",
        "vfile": "^6.0.0",
        "vfile-message": "^4.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/hast-util-from-parse5": {
      "version": "8.0.2",
      "resolved": "https://registry.npmjs.org/hast-util-from-parse5/-/hast-util-from-parse5-8.0.2.tgz",
      "integrity": "sha512-SfMzfdAi/zAoZ1KkFEyyeXBn7u/ShQrfd675ZEE9M3qj+PMFX05xubzRyF76CCSJu8au9jgVxDV1+okFvgZU4A==",
      "dependencies": {
        "@types/hast": "^3.0.0",
        "@types/unist": "^3.0.0",
        "devlop": "^1.0.0",
        "hastscript": "^9.0.0",
        "property-information": "^6.0.0",
        "vfile": "^6.0.0",
        "vfile-location": "^5.0.0",
        "web-namespaces": "^2.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/hast-util-has-property": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/hast-util-has-property/-/hast-util-has-property-3.0.0.tgz",
      "integrity": "sha512-MNilsvEKLFpV604hwfhVStK0usFY/QmM5zX16bo7EjnAEGofr5YyI37kzopBlZJkHD4t887i+q/C8/tr5Q94cA==",
      "dependencies": {
        "@types/hast": "^3.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/hast-util-is-body-ok-link": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/hast-util-is-body-ok-link/-/hast-util-is-body-ok-link-3.0.1.tgz",
      "integrity": "sha512-0qpnzOBLztXHbHQenVB8uNuxTnm/QBFUOmdOSsEn7GnBtyY07+ENTWVFBAnXd/zEgd9/SUG3lRY7hSIBWRgGpQ==",
      "dependencies": {
        "@types/hast": "^3.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/hast-util-is-element": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/hast-util-is-element/-/hast-util-is-element-3.0.0.tgz",
      "integrity": "sha512-Val9mnv2IWpLbNPqc/pUem+a7Ipj2aHacCwgNfTiK0vJKl0LF+4Ba4+v1oPHFpf3bLYmreq0/l3Gud9S5OH42g==",
      "dependencies": {
        "@types/hast": "^3.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/hast-util-minify-whitespace": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/hast-util-minify-whitespace/-/hast-util-minify-whitespace-1.0.1.tgz",
      "integrity": "sha512-L96fPOVpnclQE0xzdWb/D12VT5FabA7SnZOUMtL1DbXmYiHJMXZvFkIZfiMmTCNJHUeO2K9UYNXoVyfz+QHuOw==",
      "dependencies": {
        "@types/hast": "^3.0.0",
        "hast-util-embedded": "^3.0.0",
        "hast-util-is-element": "^3.0.0",
        "hast-util-whitespace": "^3.0.0",
        "unist-util-is": "^6.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/hast-util-parse-selector": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/hast-util-parse-selector/-/hast-util-parse-selector-4.0.0.tgz",
      "integrity": "sha512-wkQCkSYoOGCRKERFWcxMVMOcYE2K1AaNLU8DXS9arxnLOUEWbOXKXiJUNzEpqZ3JOKpnha3jkFrumEjVliDe7A==",
      "dependencies": {
        "@types/hast": "^3.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/hast-util-phrasing": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/hast-util-phrasing/-/hast-util-phrasing-3.0.1.tgz",
      "integrity": "sha512-6h60VfI3uBQUxHqTyMymMZnEbNl1XmEGtOxxKYL7stY2o601COo62AWAYBQR9lZbYXYSBoxag8UpPRXK+9fqSQ==",
      "dependencies": {
        "@types/hast": "^3.0.0",
        "hast-util-embedded": "^3.0.0",
        "hast-util-has-property": "^3.0.0",
        "hast-util-is-body-ok-link": "^3.0.0",
        "hast-util-is-element": "^3.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/hast-util-raw": {
      "version": "9.1.0",
      "resolved": "https://registry.npmjs.org/hast-util-raw/-/hast-util-raw-9.1.0.tgz",
      "integrity": "sha512-Y8/SBAHkZGoNkpzqqfCldijcuUKh7/su31kEBp67cFY09Wy0mTRgtsLYsiIxMJxlu0f6AA5SUTbDR8K0rxnbUw==",
      "dependencies": {
        "@types/hast": "^3.0.0",
        "@types/unist": "^3.0.0",
        "@ungap/structured-clone": "^1.0.0",
        "hast-util-from-parse5": "^8.0.0",
        "hast-util-to-parse5": "^8.0.0",
        "html-void-elements": "^3.0.0",
        "mdast-util-to-hast": "^13.0.0",
        "parse5": "^7.0.0",
        "unist-util-position": "^5.0.0",
        "unist-util-visit": "^5.0.0",
        "vfile": "^6.0.0",
        "web-namespaces": "^2.0.0",
        "zwitch": "^2.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/hast-util-select": {
      "version": "6.0.3",
      "resolved": "https://registry.npmjs.org/hast-util-select/-/hast-util-select-6.0.3.tgz",
      "integrity": "sha512-OVRQlQ1XuuLP8aFVLYmC2atrfWHS5UD3shonxpnyrjcCkwtvmt/+N6kYJdcY4mkMJhxp4kj2EFIxQ9kvkkt/eQ==",
      "dependencies": {
        "@types/hast": "^3.0.0",
        "@types/unist": "^3.0.0",
        "bcp-47-match": "^2.0.0",
        "comma-separated-tokens": "^2.0.0",
        "css-selector-parser": "^3.0.0",
        "devlop": "^1.0.0",
        "direction": "^2.0.0",
        "hast-util-has-property": "^3.0.0",
        "hast-util-to-string": "^3.0.0",
        "hast-util-whitespace": "^3.0.0",
        "nth-check": "^2.0.0",
        "property-information": "^6.0.0",
        "space-separated-tokens": "^2.0.0",
        "unist-util-visit": "^5.0.0",
        "zwitch": "^2.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/hast-util-to-estree": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/hast-util-to-estree/-/hast-util-to-estree-3.1.0.tgz",
      "integrity": "sha512-lfX5g6hqVh9kjS/B9E2gSkvHH4SZNiQFiqWS0x9fENzEl+8W12RqdRxX6d/Cwxi30tPQs3bIO+aolQJNp1bIyw==",
      "dependencies": {
        "@types/estree": "^1.0.0",
        "@types/estree-jsx": "^1.0.0",
        "@types/hast": "^3.0.0",
        "comma-separated-tokens": "^2.0.0",
        "devlop": "^1.0.0",
        "estree-util-attach-comments": "^3.0.0",
        "estree-util-is-identifier-name": "^3.0.0",
        "hast-util-whitespace": "^3.0.0",
        "mdast-util-mdx-expression": "^2.0.0",
        "mdast-util-mdx-jsx": "^3.0.0",
        "mdast-util-mdxjs-esm": "^2.0.0",
        "property-information": "^6.0.0",
        "space-separated-tokens": "^2.0.0",
        "style-to-object": "^0.4.0",
        "unist-util-position": "^5.0.0",
        "zwitch": "^2.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/hast-util-to-estree/node_modules/inline-style-parser": {
      "version": "0.1.1",
      "resolved": "https://registry.npmjs.org/inline-style-parser/-/inline-style-parser-0.1.1.tgz",
      "integrity": "sha512-7NXolsK4CAS5+xvdj5OMMbI962hU/wvwoxk+LWR9Ek9bVtyuuYScDN6eS0rUm6TxApFpw7CX1o4uJzcd4AyD3Q=="
    },
    "node_modules/hast-util-to-estree/node_modules/style-to-object": {
      "version": "0.4.4",
      "resolved": "https://registry.npmjs.org/style-to-object/-/style-to-object-0.4.4.tgz",
      "integrity": "sha512-HYNoHZa2GorYNyqiCaBgsxvcJIn7OHq6inEga+E6Ke3m5JkoqpQbnFssk4jwe+K7AhGa2fcha4wSOf1Kn01dMg==",
      "dependencies": {
        "inline-style-parser": "0.1.1"
      }
    },
    "node_modules/hast-util-to-html": {
      "version": "9.0.3",
      "resolved": "https://registry.npmjs.org/hast-util-to-html/-/hast-util-to-html-9.0.3.tgz",
      "integrity": "sha512-M17uBDzMJ9RPCqLMO92gNNUDuBSq10a25SDBI08iCCxmorf4Yy6sYHK57n9WAbRAAaU+DuR4W6GN9K4DFZesYg==",
      "dependencies": {
        "@types/hast": "^3.0.0",
        "@types/unist": "^3.0.0",
        "ccount": "^2.0.0",
        "comma-separated-tokens": "^2.0.0",
        "hast-util-whitespace": "^3.0.0",
        "html-void-elements": "^3.0.0",
        "mdast-util-to-hast": "^13.0.0",
        "property-information": "^6.0.0",
        "space-separated-tokens": "^2.0.0",
        "stringify-entities": "^4.0.0",
        "zwitch": "^2.0.4"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/hast-util-to-jsx-runtime": {
      "version": "2.3.2",
      "resolved": "https://registry.npmjs.org/hast-util-to-jsx-runtime/-/hast-util-to-jsx-runtime-2.3.2.tgz",
      "integrity": "sha512-1ngXYb+V9UT5h+PxNRa1O1FYguZK/XL+gkeqvp7EdHlB9oHUG0eYRo/vY5inBdcqo3RkPMC58/H94HvkbfGdyg==",
      "dependencies": {
        "@types/estree": "^1.0.0",
        "@types/hast": "^3.0.0",
        "@types/unist": "^3.0.0",
        "comma-separated-tokens": "^2.0.0",
        "devlop": "^1.0.0",
        "estree-util-is-identifier-name": "^3.0.0",
        "hast-util-whitespace": "^3.0.0",
        "mdast-util-mdx-expression": "^2.0.0",
        "mdast-util-mdx-jsx": "^3.0.0",
        "mdast-util-mdxjs-esm": "^2.0.0",
        "property-information": "^6.0.0",
        "space-separated-tokens": "^2.0.0",
        "style-to-object": "^1.0.0",
        "unist-util-position": "^5.0.0",
        "vfile-message": "^4.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/hast-util-to-parse5": {
      "version": "8.0.0",
      "resolved": "https://registry.npmjs.org/hast-util-to-parse5/-/hast-util-to-parse5-8.0.0.tgz",
      "integrity": "sha512-3KKrV5ZVI8if87DVSi1vDeByYrkGzg4mEfeu4alwgmmIeARiBLKCZS2uw5Gb6nU9x9Yufyj3iudm6i7nl52PFw==",
      "dependencies": {
        "@types/hast": "^3.0.0",
        "comma-separated-tokens": "^2.0.0",
        "devlop": "^1.0.0",
        "property-information": "^6.0.0",
        "space-separated-tokens": "^2.0.0",
        "web-namespaces": "^2.0.0",
        "zwitch": "^2.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/hast-util-to-string": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/hast-util-to-string/-/hast-util-to-string-3.0.1.tgz",
      "integrity": "sha512-XelQVTDWvqcl3axRfI0xSeoVKzyIFPwsAGSLIsKdJKQMXDYJS4WYrBNF/8J7RdhIcFI2BOHgAifggsvsxp/3+A==",
      "dependencies": {
        "@types/hast": "^3.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/hast-util-to-text": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/hast-util-to-text/-/hast-util-to-text-4.0.2.tgz",
      "integrity": "sha512-KK6y/BN8lbaq654j7JgBydev7wuNMcID54lkRav1P0CaE1e47P72AWWPiGKXTJU271ooYzcvTAn/Zt0REnvc7A==",
      "dependencies": {
        "@types/hast": "^3.0.0",
        "@types/unist": "^3.0.0",
        "hast-util-is-element": "^3.0.0",
        "unist-util-find-after": "^5.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/hast-util-whitespace": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/hast-util-whitespace/-/hast-util-whitespace-3.0.0.tgz",
      "integrity": "sha512-88JUN06ipLwsnv+dVn+OIYOvAuvBMy/Qoi6O7mQHxdPXpjy+Cd6xRkWwux7DKO+4sYILtLBRIKgsdpS2gQc7qw==",
      "dependencies": {
        "@types/hast": "^3.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/hastscript": {
      "version": "9.0.0",
      "resolved": "https://registry.npmjs.org/hastscript/-/hastscript-9.0.0.tgz",
      "integrity": "sha512-jzaLBGavEDKHrc5EfFImKN7nZKKBdSLIdGvCwDZ9TfzbF2ffXiov8CKE445L2Z1Ek2t/m4SKQ2j6Ipv7NyUolw==",
      "dependencies": {
        "@types/hast": "^3.0.0",
        "comma-separated-tokens": "^2.0.0",
        "hast-util-parse-selector": "^4.0.0",
        "property-information": "^6.0.0",
        "space-separated-tokens": "^2.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/html-escaper": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/html-escaper/-/html-escaper-3.0.3.tgz",
      "integrity": "sha512-RuMffC89BOWQoY0WKGpIhn5gX3iI54O6nRA0yC124NYVtzjmFWBIiFd8M0x+ZdX0P9R4lADg1mgP8C7PxGOWuQ=="
    },
    "node_modules/html-minifier-terser": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/html-minifier-terser/-/html-minifier-terser-7.2.0.tgz",
      "integrity": "sha512-tXgn3QfqPIpGl9o+K5tpcj3/MN4SfLtsx2GWwBC3SSd0tXQGyF3gsSqad8loJgKZGM3ZxbYDd5yhiBIdWpmvLA==",
      "dependencies": {
        "camel-case": "^4.1.2",
        "clean-css": "~5.3.2",
        "commander": "^10.0.0",
        "entities": "^4.4.0",
        "param-case": "^3.0.4",
        "relateurl": "^0.2.7",
        "terser": "^5.15.1"
      },
      "bin": {
        "html-minifier-terser": "cli.js"
      },
      "engines": {
        "node": "^14.13.1 || >=16.0.0"
      }
    },
    "node_modules/html-void-elements": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/html-void-elements/-/html-void-elements-3.0.0.tgz",
      "integrity": "sha512-bEqo66MRXsUGxWHV5IP0PUiAWwoEjba4VCzg0LjFJBpchPaTfyfCKTG6bc5F8ucKec3q5y6qOdGyYTSBEvhCrg==",
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/wooorm"
      }
    },
    "node_modules/html-whitespace-sensitive-tag-names": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/html-whitespace-sensitive-tag-names/-/html-whitespace-sensitive-tag-names-3.0.1.tgz",
      "integrity": "sha512-q+310vW8zmymYHALr1da4HyXUQ0zgiIwIicEfotYPWGN0OJVEN/58IJ3A4GBYcEq3LGAZqKb+ugvP0GNB9CEAA==",
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/http-cache-semantics": {
      "version": "4.1.1",
      "resolved": "https://registry.npmjs.org/http-cache-semantics/-/http-cache-semantics-4.1.1.tgz",
      "integrity": "sha512-er295DKPVsV82j5kw1Gjt+ADA/XYHsajl82cGNQG2eyoPkvgUhX+nDIyelzhIWbbsXP39EHcI6l5tYs2FYqYXQ=="
    },
    "node_modules/i18next": {
      "version": "23.16.5",
      "resolved": "https://registry.npmjs.org/i18next/-/i18next-23.16.5.tgz",
      "integrity": "sha512-KTlhE3EP9x6pPTAW7dy0WKIhoCpfOGhRQlO+jttQLgzVaoOjWwBWramu7Pp0i+8wDNduuzXfe3kkVbzrKyrbTA==",
      "funding": [
        {
          "type": "individual",
          "url": "https://locize.com"
        },
        {
          "type": "individual",
          "url": "https://locize.com/i18next.html"
        },
        {
          "type": "individual",
          "url": "https://www.i18next.com/how-to/faq#i18next-is-awesome.-how-can-i-support-the-project"
        }
      ],
      "dependencies": {
        "@babel/runtime": "^7.23.2"
      }
    },
    "node_modules/ico-endec": {
      "version": "0.1.6",
      "resolved": "https://registry.npmjs.org/ico-endec/-/ico-endec-0.1.6.tgz",
      "integrity": "sha512-ZdLU38ZoED3g1j3iEyzcQj+wAkY2xfWNkymszfJPoxucIUhK7NayQ+/C4Kv0nDFMIsbtbEHldv3V8PU494/ueQ=="
    },
    "node_modules/ignore": {
      "version": "5.3.2",
      "resolved": "https://registry.npmjs.org/ignore/-/ignore-5.3.2.tgz",
      "integrity": "sha512-hsBTNUqQTDwkWtcdYI2i06Y/nUBEsNEDJKjWdigLvegy8kDuJAS8uRlpkkcQpyEXL0Z/pjDy5HBmMjRCJ2gq+g==",
      "engines": {
        "node": ">= 4"
      }
    },
    "node_modules/import-meta-resolve": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/import-meta-resolve/-/import-meta-resolve-4.1.0.tgz",
      "integrity": "sha512-I6fiaX09Xivtk+THaMfAwnA3MVA5Big1WHF1Dfx9hFuvNIWpXnorlkzhcQf6ehrqQiiZECRt1poOAkPmer3ruw==",
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/wooorm"
      }
    },
    "node_modules/inline-style-parser": {
      "version": "0.2.4",
      "resolved": "https://registry.npmjs.org/inline-style-parser/-/inline-style-parser-0.2.4.tgz",
      "integrity": "sha512-0aO8FkhNZlj/ZIbNi7Lxxr12obT7cL1moPfE4tg1LkX7LlLfC6DeX4l2ZEud1ukP9jNQyNnfzQVqwbwmAATY4Q=="
    },
    "node_modules/is-alphabetical": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/is-alphabetical/-/is-alphabetical-2.0.1.tgz",
      "integrity": "sha512-FWyyY60MeTNyeSRpkM2Iry0G9hpr7/9kD40mD/cGQEuilcZYS4okz8SN2Q6rLCJ8gbCt6fN+rC+6tMGS99LaxQ==",
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/wooorm"
      }
    },
    "node_modules/is-alphanumerical": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/is-alphanumerical/-/is-alphanumerical-2.0.1.tgz",
      "integrity": "sha512-hmbYhX/9MUMF5uh7tOXyK/n0ZvWpad5caBA17GsC6vyuCqaWliRG5K1qS9inmUhEMaOBIW7/whAnSwveW/LtZw==",
      "dependencies": {
        "is-alphabetical": "^2.0.0",
        "is-decimal": "^2.0.0"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/wooorm"
      }
    },
    "node_modules/is-arrayish": {
      "version": "0.3.2",
      "resolved": "https://registry.npmjs.org/is-arrayish/-/is-arrayish-0.3.2.tgz",
      "integrity": "sha512-eVRqCvVlZbuw3GrM63ovNSNAeA1K16kaR/LRY/92w0zxQ5/1YzwblUX652i4Xs9RwAGjW9d9y6X88t8OaAJfWQ=="
    },
    "node_modules/is-binary-path": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/is-binary-path/-/is-binary-path-2.1.0.tgz",
      "integrity": "sha512-ZMERYes6pDydyuGidse7OsHxtbI7WVeUEozgR/g7rd0xUimYNlvZRE/K2MgZTjWy725IfelLeVcEM97mmtRGXw==",
      "dependencies": {
        "binary-extensions": "^2.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/is-core-module": {
      "version": "2.15.1",
      "resolved": "https://registry.npmjs.org/is-core-module/-/is-core-module-2.15.1.tgz",
      "integrity": "sha512-z0vtXSwucUJtANQWldhbtbt7BnL0vxiFjIdDLAatwhDYty2bad6s+rijD6Ri4YuYJubLzIJLUidCh09e1djEVQ==",
      "dependencies": {
        "hasown": "^2.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-decimal": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/is-decimal/-/is-decimal-2.0.1.tgz",
      "integrity": "sha512-AAB9hiomQs5DXWcRB1rqsxGUstbRroFOPPVAomNk/3XHR5JyEZChOyTWe2oayKnsSsr/kcGqF+z6yuH6HHpN0A==",
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/wooorm"
      }
    },
    "node_modules/is-docker": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/is-docker/-/is-docker-3.0.0.tgz",
      "integrity": "sha512-eljcgEDlEns/7AXFosB5K/2nCM4P7FQPkGc/DWLy5rmFEWvZayGrik1d9/QIY5nJ4f9YsVvBkA6kJpHn9rISdQ==",
      "bin": {
        "is-docker": "cli.js"
      },
      "engines": {
        "node": "^12.20.0 || ^14.13.1 || >=16.0.0"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/is-extendable": {
      "version": "0.1.1",
      "resolved": "https://registry.npmjs.org/is-extendable/-/is-extendable-0.1.1.tgz",
      "integrity": "sha512-5BMULNob1vgFX6EjQw5izWDxrecWK9AM72rugNr0TFldMOi0fj6Jk+zeKIt0xGj4cEfQIJth4w3OKWOJ4f+AFw==",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-extglob": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/is-extglob/-/is-extglob-2.1.1.tgz",
      "integrity": "sha512-SbKbANkN603Vi4jEZv49LeVJMn4yGwsbzZworEoyEiutsN3nJYdbO36zfhGJ6QEDpOZIFkDtnq5JRxmvl3jsoQ==",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-fullwidth-code-point": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-3.0.0.tgz",
      "integrity": "sha512-zymm5+u+sCsSWyD9qNaejV3DFvhCKclKdizYaJUuHA83RLjb7nSuGnddCHGv0hk+KY7BMAlsWeK4Ueg6EV6XQg==",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/is-glob": {
      "version": "4.0.3",
      "resolved": "https://registry.npmjs.org/is-glob/-/is-glob-4.0.3.tgz",
      "integrity": "sha512-xelSayHH36ZgE7ZWhli7pW34hNbNl8Ojv5KVmkJD4hBdD3th8Tfk9vYasLM+mXWOZhFkgZfxhLSnrwRr4elSSg==",
      "dependencies": {
        "is-extglob": "^2.1.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-hexadecimal": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/is-hexadecimal/-/is-hexadecimal-2.0.1.tgz",
      "integrity": "sha512-DgZQp241c8oO6cA1SbTEWiXeoxV42vlcJxgH+B3hi1AiqqKruZR3ZGF8In3fj4+/y/7rHvlOZLZtgJ/4ttYGZg==",
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/wooorm"
      }
    },
    "node_modules/is-inside-container": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/is-inside-container/-/is-inside-container-1.0.0.tgz",
      "integrity": "sha512-KIYLCCJghfHZxqjYBE7rEy0OBuTd5xCHS7tHVgvCLkx7StIoaxwNW3hCALgEUjFfeRk+MG/Qxmp/vtETEF3tRA==",
      "dependencies": {
        "is-docker": "^3.0.0"
      },
      "bin": {
        "is-inside-container": "cli.js"
      },
      "engines": {
        "node": ">=14.16"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/is-interactive": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/is-interactive/-/is-interactive-2.0.0.tgz",
      "integrity": "sha512-qP1vozQRI+BMOPcjFzrjXuQvdak2pHNUMZoeG2eRbiSqyvbEf/wQtEOTOX1guk6E3t36RkaqiSt8A/6YElNxLQ==",
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/is-number": {
      "version": "7.0.0",
      "resolved": "https://registry.npmjs.org/is-number/-/is-number-7.0.0.tgz",
      "integrity": "sha512-41Cifkg6e8TylSpdtTpeLVMqvSBEVzTttHvERD741+pnZ8ANv0004MRL43QKPDlK9cGvNp6NZWZUBlbGXYxxng==",
      "engines": {
        "node": ">=0.12.0"
      }
    },
    "node_modules/is-plain-obj": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/is-plain-obj/-/is-plain-obj-4.1.0.tgz",
      "integrity": "sha512-+Pgi+vMuUNkJyExiMBt5IlFoMyKnr5zhJ4Uspz58WOhBF5QoIZkFyNHIbBAtHwzVAgk5RtndVNsDRN61/mmDqg==",
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/is-unicode-supported": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/is-unicode-supported/-/is-unicode-supported-2.1.0.tgz",
      "integrity": "sha512-mE00Gnza5EEB3Ds0HfMyllZzbBrmLOX3vfWoj9A9PEnTfratQ/BcaJOuMhnkhjXvb2+FkY3VuHqtAGpTPmglFQ==",
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/is-wsl": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/is-wsl/-/is-wsl-3.1.0.tgz",
      "integrity": "sha512-UcVfVfaK4Sc4m7X3dUSoHoozQGBEFeDC+zVo06t98xe8CzHSZZBekNXH+tu0NalHolcJ/QAGqS46Hef7QXBIMw==",
      "dependencies": {
        "is-inside-container": "^1.0.0"
      },
      "engines": {
        "node": ">=16"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/isexe": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/isexe/-/isexe-2.0.0.tgz",
      "integrity": "sha512-RHxMLp9lnKHGHRng9QFhRCMbYAcVpn69smSGcq3f36xjgVVWThj4qqLbTLlq7Ssj8B+fIQ1EuCEGI2lKsyQeIw=="
    },
    "node_modules/jackspeak": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/jackspeak/-/jackspeak-4.0.2.tgz",
      "integrity": "sha512-bZsjR/iRjl1Nk1UkjGpAzLNfQtzuijhn2g+pbZb98HQ1Gk8vM9hfbxeMBP+M2/UUdwj0RqGG3mlvk2MsAqwvEw==",
      "dependencies": {
        "@isaacs/cliui": "^8.0.2"
      },
      "engines": {
        "node": "20 || >=22"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/jiti": {
      "version": "1.21.6",
      "resolved": "https://registry.npmjs.org/jiti/-/jiti-1.21.6.tgz",
      "integrity": "sha512-2yTgeWTWzMWkHu6Jp9NKgePDaYHbntiwvYuuJLbbN9vl7DC9DvXKOB2BC3ZZ92D3cvV/aflH0osDfwpHepQ53w==",
      "bin": {
        "jiti": "bin/jiti.js"
      }
    },
    "node_modules/js-tokens": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/js-tokens/-/js-tokens-4.0.0.tgz",
      "integrity": "sha512-RdJUflcE3cUzKiMqQgsCu06FPu9UdIJO0beYbPhHN4k6apgJtifcoCtT9bcxOpYBtpD2kCM6Sbzg4CausW/PKQ=="
    },
    "node_modules/js-yaml": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/js-yaml/-/js-yaml-4.1.0.tgz",
      "integrity": "sha512-wpxZs9NoxZaJESJGIZTyDEaYpl0FKSA+FB9aJiyemKhMwkxQg63h4T1KJgUGHpTqPDNRcmmYLugrRjJlBtWvRA==",
      "dependencies": {
        "argparse": "^2.0.1"
      },
      "bin": {
        "js-yaml": "bin/js-yaml.js"
      }
    },
    "node_modules/jsesc": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/jsesc/-/jsesc-3.0.2.tgz",
      "integrity": "sha512-xKqzzWXDttJuOcawBt4KnKHHIf5oQ/Cxax+0PWFG+DFDgHNAdi+TXECADI+RYiFUMmx8792xsMbbgXj4CwnP4g==",
      "bin": {
        "jsesc": "bin/jsesc"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/json-schema-traverse": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/json-schema-traverse/-/json-schema-traverse-1.0.0.tgz",
      "integrity": "sha512-NM8/P9n3XjXhIZn1lLhkFaACTOURQXjWhV4BA/RnOv8xvgqtqpAX9IO4mRQxSx1Rlo4tqzeqb0sOlruaOy3dug=="
    },
    "node_modules/json5": {
      "version": "2.2.3",
      "resolved": "https://registry.npmjs.org/json5/-/json5-2.2.3.tgz",
      "integrity": "sha512-XmOWe7eyHYH14cLdVPoyg+GOH3rYX++KpzrylJwSW98t3Nk+U8XOl8FWKOgwtzdb8lXGf6zYwDUzeHMWfxasyg==",
      "bin": {
        "json5": "lib/cli.js"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/jsonc-parser": {
      "version": "2.3.1",
      "resolved": "https://registry.npmjs.org/jsonc-parser/-/jsonc-parser-2.3.1.tgz",
      "integrity": "sha512-H8jvkz1O50L3dMZCsLqiuB2tA7muqbSg1AtGEkN0leAqGjsUzDJir3Zwr02BhqdcITPg3ei3mZ+HjMocAknhhg=="
    },
    "node_modules/kind-of": {
      "version": "6.0.3",
      "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-6.0.3.tgz",
      "integrity": "sha512-dcS1ul+9tmeD95T+x28/ehLgd9mENa3LsvDTtzm3vyBEO7RPptvAD+t44WVXaUjTBRcrpFeFlC8WCruUR456hw==",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/kleur": {
      "version": "4.1.5",
      "resolved": "https://registry.npmjs.org/kleur/-/kleur-4.1.5.tgz",
      "integrity": "sha512-o+NO+8WrRiQEE4/7nwRJhN1HWpVmJm511pBHUxPLtp0BUISzlBplORYSmTclCnJvQq2tKu/sgl3xVpkc7ZWuQQ==",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/lenis": {
      "version": "1.1.17",
      "resolved": "https://registry.npmjs.org/lenis/-/lenis-1.1.17.tgz",
      "integrity": "sha512-22XhWvjoJynQdfguMp1V+5ZbGUdGkJ4rtQy8x+w52NKxYb+OIZhGXC9Fo2PQTWzKDbYNDUb/O1CIbeEQHkZbag==",
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/darkroomengineering"
      },
      "peerDependencies": {
        "react": ">=17.0.0",
        "vue": ">=3.0.0"
      },
      "peerDependenciesMeta": {
        "react": {
          "optional": true
        },
        "vue": {
          "optional": true
        }
      }
    },
    "node_modules/lilconfig": {
      "version": "3.1.2",
      "resolved": "https://registry.npmjs.org/lilconfig/-/lilconfig-3.1.2.tgz",
      "integrity": "sha512-eop+wDAvpItUys0FWkHIKeC9ybYrTGbU41U5K7+bttZZeohvnY7M9dZ5kB21GNWiFT2q1OoPTvncPCgSOVO5ow==",
      "engines": {
        "node": ">=14"
      },
      "funding": {
        "url": "https://github.com/sponsors/antonk52"
      }
    },
    "node_modules/lines-and-columns": {
      "version": "1.2.4",
      "resolved": "https://registry.npmjs.org/lines-and-columns/-/lines-and-columns-1.2.4.tgz",
      "integrity": "sha512-7ylylesZQ/PV29jhEDl3Ufjo6ZX7gCqJr5F7PKrqc93v7fzSymt1BpwEU8nAUXs8qzzvqhbjhK5QZg6Mt/HkBg=="
    },
    "node_modules/load-yaml-file": {
      "version": "0.2.0",
      "resolved": "https://registry.npmjs.org/load-yaml-file/-/load-yaml-file-0.2.0.tgz",
      "integrity": "sha512-OfCBkGEw4nN6JLtgRidPX6QxjBQGQf72q3si2uvqyFEMbycSFFHwAZeXx6cJgFM9wmLrf9zBwCP3Ivqa+LLZPw==",
      "dependencies": {
        "graceful-fs": "^4.1.5",
        "js-yaml": "^3.13.0",
        "pify": "^4.0.1",
        "strip-bom": "^3.0.0"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/load-yaml-file/node_modules/argparse": {
      "version": "1.0.10",
      "resolved": "https://registry.npmjs.org/argparse/-/argparse-1.0.10.tgz",
      "integrity": "sha512-o5Roy6tNG4SL/FOkCAN6RzjiakZS25RLYFrcMttJqbdd8BWrnA+fGz57iN5Pb06pvBGvl5gQ0B48dJlslXvoTg==",
      "dependencies": {
        "sprintf-js": "~1.0.2"
      }
    },
    "node_modules/load-yaml-file/node_modules/js-yaml": {
      "version": "3.14.1",
      "resolved": "https://registry.npmjs.org/js-yaml/-/js-yaml-3.14.1.tgz",
      "integrity": "sha512-okMH7OXXJ7YrN9Ok3/SXrnu4iX9yOk+25nqX4imS2npuvTYDmo/QEZoqwZkYaIDk3jVvBOTOIEgEhaLOynBS9g==",
      "dependencies": {
        "argparse": "^1.0.7",
        "esprima": "^4.0.0"
      },
      "bin": {
        "js-yaml": "bin/js-yaml.js"
      }
    },
    "node_modules/load-yaml-file/node_modules/pify": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/pify/-/pify-4.0.1.tgz",
      "integrity": "sha512-uB80kBFb/tfd68bVleG9T5GGsGPjJrLAUpR5PZIrhBnIaRTQRjqdJSsIKkOP6OAIFbj7GOrcudc5pNjZ+geV2g==",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/locate-path": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/locate-path/-/locate-path-5.0.0.tgz",
      "integrity": "sha512-t7hw9pI+WvuwNJXwk5zVHpyhIqzg2qTlklJOf0mVxGSbe3Fp2VieZcduNYjaLDoy6p9uGpQEGWG87WpMKlNq8g==",
      "dependencies": {
        "p-locate": "^4.1.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/lodash": {
      "version": "4.17.21",
      "resolved": "https://registry.npmjs.org/lodash/-/lodash-4.17.21.tgz",
      "integrity": "sha512-v2kDEe57lecTulaDIuNTPy3Ry4gLGJ6Z1O3vE1krgXZNrsQ+LFTGHVxVjcXPs17LhbZVGedAJv8XZ1tvj5FvSg=="
    },
    "node_modules/log-symbols": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/log-symbols/-/log-symbols-6.0.0.tgz",
      "integrity": "sha512-i24m8rpwhmPIS4zscNzK6MSEhk0DUWa/8iYQWxhffV8jkI4Phvs3F+quL5xvS0gdQR0FyTCMMH33Y78dDTzzIw==",
      "dependencies": {
        "chalk": "^5.3.0",
        "is-unicode-supported": "^1.3.0"
      },
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/log-symbols/node_modules/is-unicode-supported": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/is-unicode-supported/-/is-unicode-supported-1.3.0.tgz",
      "integrity": "sha512-43r2mRvz+8JRIKnWJ+3j8JtjRKZ6GmjzfaE/qiBJnikNnYv/6bagRJ1kUhNk8R5EX/GkobD+r+sfxCPJsiKBLQ==",
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/longest-streak": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/longest-streak/-/longest-streak-3.1.0.tgz",
      "integrity": "sha512-9Ri+o0JYgehTaVBBDoMqIl8GXtbWg711O3srftcHhZ0dqnETqLaoIK0x17fUw9rFSlK/0NlsKe0Ahhyl5pXE2g==",
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/wooorm"
      }
    },
    "node_modules/lower-case": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/lower-case/-/lower-case-2.0.2.tgz",
      "integrity": "sha512-7fm3l3NAF9WfN6W3JOmf5drwpVqX78JtoGJ3A6W0a6ZnldM41w2fV5D490psKFTpMds8TJse/eHLFFsNHHjHgg==",
      "dependencies": {
        "tslib": "^2.0.3"
      }
    },
    "node_modules/lru-cache": {
      "version": "5.1.1",
      "resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-5.1.1.tgz",
      "integrity": "sha512-KpNARQA3Iwv+jTA0utUVVbrh+Jlrr1Fv0e56GGzAFOXN7dk/FviaDW8LHmK52DlcH4WP2n6gI8vN1aesBFgo9w==",
      "dependencies": {
        "yallist": "^3.0.2"
      }
    },
    "node_modules/magic-string": {
      "version": "0.30.13",
      "resolved": "https://registry.npmjs.org/magic-string/-/magic-string-0.30.13.tgz",
      "integrity": "sha512-8rYBO+MsWkgjDSOvLomYnzhdwEG51olQ4zL5KXnNJWV5MNmrb4rTZdrtkhxjnD/QyZUqR/Z/XDsUs/4ej2nx0g==",
      "dependencies": {
        "@jridgewell/sourcemap-codec": "^1.5.0"
      }
    },
    "node_modules/magicast": {
      "version": "0.3.5",
      "resolved": "https://registry.npmjs.org/magicast/-/magicast-0.3.5.tgz",
      "integrity": "sha512-L0WhttDl+2BOsybvEOLK7fW3UA0OQ0IQ2d6Zl2x/a6vVRs3bAY0ECOSHHeL5jD+SbOpOCUEi0y1DgHEn9Qn1AQ==",
      "dependencies": {
        "@babel/parser": "^7.25.4",
        "@babel/types": "^7.25.4",
        "source-map-js": "^1.2.0"
      }
    },
    "node_modules/markdown-extensions": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/markdown-extensions/-/markdown-extensions-2.0.0.tgz",
      "integrity": "sha512-o5vL7aDWatOTX8LzaS1WMoaoxIiLRQJuIKKe2wAw6IeULDHaqbiqiggmx+pKvZDb1Sj+pE46Sn1T7lCqfFtg1Q==",
      "engines": {
        "node": ">=16"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/markdown-table": {
      "version": "3.0.4",
      "resolved": "https://registry.npmjs.org/markdown-table/-/markdown-table-3.0.4.tgz",
      "integrity": "sha512-wiYz4+JrLyb/DqW2hkFJxP7Vd7JuTDm77fvbM8VfEQdmSMqcImWeeRbHwZjBjIFki/VaMK2BhFi7oUUZeM5bqw==",
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/wooorm"
      }
    },
    "node_modules/mdast-util-definitions": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/mdast-util-definitions/-/mdast-util-definitions-6.0.0.tgz",
      "integrity": "sha512-scTllyX6pnYNZH/AIp/0ePz6s4cZtARxImwoPJ7kS42n+MnVsI4XbnG6d4ibehRIldYMWM2LD7ImQblVhUejVQ==",
      "dependencies": {
        "@types/mdast": "^4.0.0",
        "@types/unist": "^3.0.0",
        "unist-util-visit": "^5.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/mdast-util-directive": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/mdast-util-directive/-/mdast-util-directive-3.0.0.tgz",
      "integrity": "sha512-JUpYOqKI4mM3sZcNxmF/ox04XYFFkNwr0CFlrQIkCwbvH0xzMCqkMqAde9wRd80VAhaUrwFwKm2nxretdT1h7Q==",
      "dependencies": {
        "@types/mdast": "^4.0.0",
        "@types/unist": "^3.0.0",
        "devlop": "^1.0.0",
        "mdast-util-from-markdown": "^2.0.0",
        "mdast-util-to-markdown": "^2.0.0",
        "parse-entities": "^4.0.0",
        "stringify-entities": "^4.0.0",
        "unist-util-visit-parents": "^6.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/mdast-util-find-and-replace": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/mdast-util-find-and-replace/-/mdast-util-find-and-replace-3.0.1.tgz",
      "integrity": "sha512-SG21kZHGC3XRTSUhtofZkBzZTJNM5ecCi0SK2IMKmSXR8vO3peL+kb1O0z7Zl83jKtutG4k5Wv/W7V3/YHvzPA==",
      "dependencies": {
        "@types/mdast": "^4.0.0",
        "escape-string-regexp": "^5.0.0",
        "unist-util-is": "^6.0.0",
        "unist-util-visit-parents": "^6.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/mdast-util-from-markdown": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/mdast-util-from-markdown/-/mdast-util-from-markdown-2.0.2.tgz",
      "integrity": "sha512-uZhTV/8NBuw0WHkPTrCqDOl0zVe1BIng5ZtHoDk49ME1qqcjYmmLmOf0gELgcRMxN4w2iuIeVso5/6QymSrgmA==",
      "dependencies": {
        "@types/mdast": "^4.0.0",
        "@types/unist": "^3.0.0",
        "decode-named-character-reference": "^1.0.0",
        "devlop": "^1.0.0",
        "mdast-util-to-string": "^4.0.0",
        "micromark": "^4.0.0",
        "micromark-util-decode-numeric-character-reference": "^2.0.0",
        "micromark-util-decode-string": "^2.0.0",
        "micromark-util-normalize-identifier": "^2.0.0",
        "micromark-util-symbol": "^2.0.0",
        "micromark-util-types": "^2.0.0",
        "unist-util-stringify-position": "^4.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/mdast-util-gfm": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/mdast-util-gfm/-/mdast-util-gfm-3.0.0.tgz",
      "integrity": "sha512-dgQEX5Amaq+DuUqf26jJqSK9qgixgd6rYDHAv4aTBuA92cTknZlKpPfa86Z/s8Dj8xsAQpFfBmPUHWJBWqS4Bw==",
      "dependencies": {
        "mdast-util-from-markdown": "^2.0.0",
        "mdast-util-gfm-autolink-literal": "^2.0.0",
        "mdast-util-gfm-footnote": "^2.0.0",
        "mdast-util-gfm-strikethrough": "^2.0.0",
        "mdast-util-gfm-table": "^2.0.0",
        "mdast-util-gfm-task-list-item": "^2.0.0",
        "mdast-util-to-markdown": "^2.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/mdast-util-gfm-autolink-literal": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/mdast-util-gfm-autolink-literal/-/mdast-util-gfm-autolink-literal-2.0.1.tgz",
      "integrity": "sha512-5HVP2MKaP6L+G6YaxPNjuL0BPrq9orG3TsrZ9YXbA3vDw/ACI4MEsnoDpn6ZNm7GnZgtAcONJyPhOP8tNJQavQ==",
      "dependencies": {
        "@types/mdast": "^4.0.0",
        "ccount": "^2.0.0",
        "devlop": "^1.0.0",
        "mdast-util-find-and-replace": "^3.0.0",
        "micromark-util-character": "^2.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/mdast-util-gfm-footnote": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/mdast-util-gfm-footnote/-/mdast-util-gfm-footnote-2.0.0.tgz",
      "integrity": "sha512-5jOT2boTSVkMnQ7LTrd6n/18kqwjmuYqo7JUPe+tRCY6O7dAuTFMtTPauYYrMPpox9hlN0uOx/FL8XvEfG9/mQ==",
      "dependencies": {
        "@types/mdast": "^4.0.0",
        "devlop": "^1.1.0",
        "mdast-util-from-markdown": "^2.0.0",
        "mdast-util-to-markdown": "^2.0.0",
        "micromark-util-normalize-identifier": "^2.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/mdast-util-gfm-strikethrough": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/mdast-util-gfm-strikethrough/-/mdast-util-gfm-strikethrough-2.0.0.tgz",
      "integrity": "sha512-mKKb915TF+OC5ptj5bJ7WFRPdYtuHv0yTRxK2tJvi+BDqbkiG7h7u/9SI89nRAYcmap2xHQL9D+QG/6wSrTtXg==",
      "dependencies": {
        "@types/mdast": "^4.0.0",
        "mdast-util-from-markdown": "^2.0.0",
        "mdast-util-to-markdown": "^2.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/mdast-util-gfm-table": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/mdast-util-gfm-table/-/mdast-util-gfm-table-2.0.0.tgz",
      "integrity": "sha512-78UEvebzz/rJIxLvE7ZtDd/vIQ0RHv+3Mh5DR96p7cS7HsBhYIICDBCu8csTNWNO6tBWfqXPWekRuj2FNOGOZg==",
      "dependencies": {
        "@types/mdast": "^4.0.0",
        "devlop": "^1.0.0",
        "markdown-table": "^3.0.0",
        "mdast-util-from-markdown": "^2.0.0",
        "mdast-util-to-markdown": "^2.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/mdast-util-gfm-task-list-item": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/mdast-util-gfm-task-list-item/-/mdast-util-gfm-task-list-item-2.0.0.tgz",
      "integrity": "sha512-IrtvNvjxC1o06taBAVJznEnkiHxLFTzgonUdy8hzFVeDun0uTjxxrRGVaNFqkU1wJR3RBPEfsxmU6jDWPofrTQ==",
      "dependencies": {
        "@types/mdast": "^4.0.0",
        "devlop": "^1.0.0",
        "mdast-util-from-markdown": "^2.0.0",
        "mdast-util-to-markdown": "^2.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/mdast-util-mdx": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/mdast-util-mdx/-/mdast-util-mdx-3.0.0.tgz",
      "integrity": "sha512-JfbYLAW7XnYTTbUsmpu0kdBUVe+yKVJZBItEjwyYJiDJuZ9w4eeaqks4HQO+R7objWgS2ymV60GYpI14Ug554w==",
      "dependencies": {
        "mdast-util-from-markdown": "^2.0.0",
        "mdast-util-mdx-expression": "^2.0.0",
        "mdast-util-mdx-jsx": "^3.0.0",
        "mdast-util-mdxjs-esm": "^2.0.0",
        "mdast-util-to-markdown": "^2.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/mdast-util-mdx-expression": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/mdast-util-mdx-expression/-/mdast-util-mdx-expression-2.0.1.tgz",
      "integrity": "sha512-J6f+9hUp+ldTZqKRSg7Vw5V6MqjATc+3E4gf3CFNcuZNWD8XdyI6zQ8GqH7f8169MM6P7hMBRDVGnn7oHB9kXQ==",
      "dependencies": {
        "@types/estree-jsx": "^1.0.0",
        "@types/hast": "^3.0.0",
        "@types/mdast": "^4.0.0",
        "devlop": "^1.0.0",
        "mdast-util-from-markdown": "^2.0.0",
        "mdast-util-to-markdown": "^2.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/mdast-util-mdx-jsx": {
      "version": "3.1.3",
      "resolved": "https://registry.npmjs.org/mdast-util-mdx-jsx/-/mdast-util-mdx-jsx-3.1.3.tgz",
      "integrity": "sha512-bfOjvNt+1AcbPLTFMFWY149nJz0OjmewJs3LQQ5pIyVGxP4CdOqNVJL6kTaM5c68p8q82Xv3nCyFfUnuEcH3UQ==",
      "dependencies": {
        "@types/estree-jsx": "^1.0.0",
        "@types/hast": "^3.0.0",
        "@types/mdast": "^4.0.0",
        "@types/unist": "^3.0.0",
        "ccount": "^2.0.0",
        "devlop": "^1.1.0",
        "mdast-util-from-markdown": "^2.0.0",
        "mdast-util-to-markdown": "^2.0.0",
        "parse-entities": "^4.0.0",
        "stringify-entities": "^4.0.0",
        "unist-util-stringify-position": "^4.0.0",
        "vfile-message": "^4.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/mdast-util-mdxjs-esm": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/mdast-util-mdxjs-esm/-/mdast-util-mdxjs-esm-2.0.1.tgz",
      "integrity": "sha512-EcmOpxsZ96CvlP03NghtH1EsLtr0n9Tm4lPUJUBccV9RwUOneqSycg19n5HGzCf+10LozMRSObtVr3ee1WoHtg==",
      "dependencies": {
        "@types/estree-jsx": "^1.0.0",
        "@types/hast": "^3.0.0",
        "@types/mdast": "^4.0.0",
        "devlop": "^1.0.0",
        "mdast-util-from-markdown": "^2.0.0",
        "mdast-util-to-markdown": "^2.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/mdast-util-phrasing": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/mdast-util-phrasing/-/mdast-util-phrasing-4.1.0.tgz",
      "integrity": "sha512-TqICwyvJJpBwvGAMZjj4J2n0X8QWp21b9l0o7eXyVJ25YNWYbJDVIyD1bZXE6WtV6RmKJVYmQAKWa0zWOABz2w==",
      "dependencies": {
        "@types/mdast": "^4.0.0",
        "unist-util-is": "^6.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/mdast-util-to-hast": {
      "version": "13.2.0",
      "resolved": "https://registry.npmjs.org/mdast-util-to-hast/-/mdast-util-to-hast-13.2.0.tgz",
      "integrity": "sha512-QGYKEuUsYT9ykKBCMOEDLsU5JRObWQusAolFMeko/tYPufNkRffBAQjIE+99jbA87xv6FgmjLtwjh9wBWajwAA==",
      "dependencies": {
        "@types/hast": "^3.0.0",
        "@types/mdast": "^4.0.0",
        "@ungap/structured-clone": "^1.0.0",
        "devlop": "^1.0.0",
        "micromark-util-sanitize-uri": "^2.0.0",
        "trim-lines": "^3.0.0",
        "unist-util-position": "^5.0.0",
        "unist-util-visit": "^5.0.0",
        "vfile": "^6.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/mdast-util-to-markdown": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/mdast-util-to-markdown/-/mdast-util-to-markdown-2.1.2.tgz",
      "integrity": "sha512-xj68wMTvGXVOKonmog6LwyJKrYXZPvlwabaryTjLh9LuvovB/KAH+kvi8Gjj+7rJjsFi23nkUxRQv1KqSroMqA==",
      "dependencies": {
        "@types/mdast": "^4.0.0",
        "@types/unist": "^3.0.0",
        "longest-streak": "^3.0.0",
        "mdast-util-phrasing": "^4.0.0",
        "mdast-util-to-string": "^4.0.0",
        "micromark-util-classify-character": "^2.0.0",
        "micromark-util-decode-string": "^2.0.0",
        "unist-util-visit": "^5.0.0",
        "zwitch": "^2.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/mdast-util-to-string": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/mdast-util-to-string/-/mdast-util-to-string-4.0.0.tgz",
      "integrity": "sha512-0H44vDimn51F0YwvxSJSm0eCDOJTRlmN0R1yBh4HLj9wiV1Dn0QoXGbvFAWj2hSItVTlCmBF1hqKlIyUBVFLPg==",
      "dependencies": {
        "@types/mdast": "^4.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/merge2": {
      "version": "1.4.1",
      "resolved": "https://registry.npmjs.org/merge2/-/merge2-1.4.1.tgz",
      "integrity": "sha512-8q7VEgMJW4J8tcfVPy8g09NcQwZdbwFEqhe/WZkoIzjn/3TGDwtOCYtXGxA3O8tPzpczCCDgv+P2P5y00ZJOOg==",
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/micromark": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/micromark/-/micromark-4.0.1.tgz",
      "integrity": "sha512-eBPdkcoCNvYcxQOAKAlceo5SNdzZWfF+FcSupREAzdAh9rRmE239CEQAiTwIgblwnoM8zzj35sZ5ZwvSEOF6Kw==",
      "funding": [
        {
          "type": "GitHub Sponsors",
          "url": "https://github.com/sponsors/unifiedjs"
        },
        {
          "type": "OpenCollective",
          "url": "https://opencollective.com/unified"
        }
      ],
      "dependencies": {
        "@types/debug": "^4.0.0",
        "debug": "^4.0.0",
        "decode-named-character-reference": "^1.0.0",
        "devlop": "^1.0.0",
        "micromark-core-commonmark": "^2.0.0",
        "micromark-factory-space": "^2.0.0",
        "micromark-util-character": "^2.0.0",
        "micromark-util-chunked": "^2.0.0",
        "micromark-util-combine-extensions": "^2.0.0",
        "micromark-util-decode-numeric-character-reference": "^2.0.0",
        "micromark-util-encode": "^2.0.0",
        "micromark-util-normalize-identifier": "^2.0.0",
        "micromark-util-resolve-all": "^2.0.0",
        "micromark-util-sanitize-uri": "^2.0.0",
        "micromark-util-subtokenize": "^2.0.0",
        "micromark-util-symbol": "^2.0.0",
        "micromark-util-types": "^2.0.0"
      }
    },
    "node_modules/micromark-core-commonmark": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/micromark-core-commonmark/-/micromark-core-commonmark-2.0.2.tgz",
      "integrity": "sha512-FKjQKbxd1cibWMM1P9N+H8TwlgGgSkWZMmfuVucLCHaYqeSvJ0hFeHsIa65pA2nYbes0f8LDHPMrd9X7Ujxg9w==",
      "funding": [
        {
          "type": "GitHub Sponsors",
          "url": "https://github.com/sponsors/unifiedjs"
        },
        {
          "type": "OpenCollective",
          "url": "https://opencollective.com/unified"
        }
      ],
      "dependencies": {
        "decode-named-character-reference": "^1.0.0",
        "devlop": "^1.0.0",
        "micromark-factory-destination": "^2.0.0",
        "micromark-factory-label": "^2.0.0",
        "micromark-factory-space": "^2.0.0",
        "micromark-factory-title": "^2.0.0",
        "micromark-factory-whitespace": "^2.0.0",
        "micromark-util-character": "^2.0.0",
        "micromark-util-chunked": "^2.0.0",
        "micromark-util-classify-character": "^2.0.0",
        "micromark-util-html-tag-name": "^2.0.0",
        "micromark-util-normalize-identifier": "^2.0.0",
        "micromark-util-resolve-all": "^2.0.0",
        "micromark-util-subtokenize": "^2.0.0",
        "micromark-util-symbol": "^2.0.0",
        "micromark-util-types": "^2.0.0"
      }
    },
    "node_modules/micromark-extension-directive": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/micromark-extension-directive/-/micromark-extension-directive-3.0.2.tgz",
      "integrity": "sha512-wjcXHgk+PPdmvR58Le9d7zQYWy+vKEU9Se44p2CrCDPiLr2FMyiT4Fyb5UFKFC66wGB3kPlgD7q3TnoqPS7SZA==",
      "dependencies": {
        "devlop": "^1.0.0",
        "micromark-factory-space": "^2.0.0",
        "micromark-factory-whitespace": "^2.0.0",
        "micromark-util-character": "^2.0.0",
        "micromark-util-symbol": "^2.0.0",
        "micromark-util-types": "^2.0.0",
        "parse-entities": "^4.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/micromark-extension-gfm": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/micromark-extension-gfm/-/micromark-extension-gfm-3.0.0.tgz",
      "integrity": "sha512-vsKArQsicm7t0z2GugkCKtZehqUm31oeGBV/KVSorWSy8ZlNAv7ytjFhvaryUiCUJYqs+NoE6AFhpQvBTM6Q4w==",
      "dependencies": {
        "micromark-extension-gfm-autolink-literal": "^2.0.0",
        "micromark-extension-gfm-footnote": "^2.0.0",
        "micromark-extension-gfm-strikethrough": "^2.0.0",
        "micromark-extension-gfm-table": "^2.0.0",
        "micromark-extension-gfm-tagfilter": "^2.0.0",
        "micromark-extension-gfm-task-list-item": "^2.0.0",
        "micromark-util-combine-extensions": "^2.0.0",
        "micromark-util-types": "^2.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/micromark-extension-gfm-autolink-literal": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/micromark-extension-gfm-autolink-literal/-/micromark-extension-gfm-autolink-literal-2.1.0.tgz",
      "integrity": "sha512-oOg7knzhicgQ3t4QCjCWgTmfNhvQbDDnJeVu9v81r7NltNCVmhPy1fJRX27pISafdjL+SVc4d3l48Gb6pbRypw==",
      "dependencies": {
        "micromark-util-character": "^2.0.0",
        "micromark-util-sanitize-uri": "^2.0.0",
        "micromark-util-symbol": "^2.0.0",
        "micromark-util-types": "^2.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/micromark-extension-gfm-footnote": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/micromark-extension-gfm-footnote/-/micromark-extension-gfm-footnote-2.1.0.tgz",
      "integrity": "sha512-/yPhxI1ntnDNsiHtzLKYnE3vf9JZ6cAisqVDauhp4CEHxlb4uoOTxOCJ+9s51bIB8U1N1FJ1RXOKTIlD5B/gqw==",
      "dependencies": {
        "devlop": "^1.0.0",
        "micromark-core-commonmark": "^2.0.0",
        "micromark-factory-space": "^2.0.0",
        "micromark-util-character": "^2.0.0",
        "micromark-util-normalize-identifier": "^2.0.0",
        "micromark-util-sanitize-uri": "^2.0.0",
        "micromark-util-symbol": "^2.0.0",
        "micromark-util-types": "^2.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/micromark-extension-gfm-strikethrough": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/micromark-extension-gfm-strikethrough/-/micromark-extension-gfm-strikethrough-2.1.0.tgz",
      "integrity": "sha512-ADVjpOOkjz1hhkZLlBiYA9cR2Anf8F4HqZUO6e5eDcPQd0Txw5fxLzzxnEkSkfnD0wziSGiv7sYhk/ktvbf1uw==",
      "dependencies": {
        "devlop": "^1.0.0",
        "micromark-util-chunked": "^2.0.0",
        "micromark-util-classify-character": "^2.0.0",
        "micromark-util-resolve-all": "^2.0.0",
        "micromark-util-symbol": "^2.0.0",
        "micromark-util-types": "^2.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/micromark-extension-gfm-table": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/micromark-extension-gfm-table/-/micromark-extension-gfm-table-2.1.0.tgz",
      "integrity": "sha512-Ub2ncQv+fwD70/l4ou27b4YzfNaCJOvyX4HxXU15m7mpYY+rjuWzsLIPZHJL253Z643RpbcP1oeIJlQ/SKW67g==",
      "dependencies": {
        "devlop": "^1.0.0",
        "micromark-factory-space": "^2.0.0",
        "micromark-util-character": "^2.0.0",
        "micromark-util-symbol": "^2.0.0",
        "micromark-util-types": "^2.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/micromark-extension-gfm-tagfilter": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/micromark-extension-gfm-tagfilter/-/micromark-extension-gfm-tagfilter-2.0.0.tgz",
      "integrity": "sha512-xHlTOmuCSotIA8TW1mDIM6X2O1SiX5P9IuDtqGonFhEK0qgRI4yeC6vMxEV2dgyr2TiD+2PQ10o+cOhdVAcwfg==",
      "dependencies": {
        "micromark-util-types": "^2.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/micromark-extension-gfm-task-list-item": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/micromark-extension-gfm-task-list-item/-/micromark-extension-gfm-task-list-item-2.1.0.tgz",
      "integrity": "sha512-qIBZhqxqI6fjLDYFTBIa4eivDMnP+OZqsNwmQ3xNLE4Cxwc+zfQEfbs6tzAo2Hjq+bh6q5F+Z8/cksrLFYWQQw==",
      "dependencies": {
        "devlop": "^1.0.0",
        "micromark-factory-space": "^2.0.0",
        "micromark-util-character": "^2.0.0",
        "micromark-util-symbol": "^2.0.0",
        "micromark-util-types": "^2.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/micromark-extension-mdx-expression": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/micromark-extension-mdx-expression/-/micromark-extension-mdx-expression-3.0.0.tgz",
      "integrity": "sha512-sI0nwhUDz97xyzqJAbHQhp5TfaxEvZZZ2JDqUo+7NvyIYG6BZ5CPPqj2ogUoPJlmXHBnyZUzISg9+oUmU6tUjQ==",
      "funding": [
        {
          "type": "GitHub Sponsors",
          "url": "https://github.com/sponsors/unifiedjs"
        },
        {
          "type": "OpenCollective",
          "url": "https://opencollective.com/unified"
        }
      ],
      "dependencies": {
        "@types/estree": "^1.0.0",
        "devlop": "^1.0.0",
        "micromark-factory-mdx-expression": "^2.0.0",
        "micromark-factory-space": "^2.0.0",
        "micromark-util-character": "^2.0.0",
        "micromark-util-events-to-acorn": "^2.0.0",
        "micromark-util-symbol": "^2.0.0",
        "micromark-util-types": "^2.0.0"
      }
    },
    "node_modules/micromark-extension-mdx-jsx": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/micromark-extension-mdx-jsx/-/micromark-extension-mdx-jsx-3.0.1.tgz",
      "integrity": "sha512-vNuFb9czP8QCtAQcEJn0UJQJZA8Dk6DXKBqx+bg/w0WGuSxDxNr7hErW89tHUY31dUW4NqEOWwmEUNhjTFmHkg==",
      "dependencies": {
        "@types/acorn": "^4.0.0",
        "@types/estree": "^1.0.0",
        "devlop": "^1.0.0",
        "estree-util-is-identifier-name": "^3.0.0",
        "micromark-factory-mdx-expression": "^2.0.0",
        "micromark-factory-space": "^2.0.0",
        "micromark-util-character": "^2.0.0",
        "micromark-util-events-to-acorn": "^2.0.0",
        "micromark-util-symbol": "^2.0.0",
        "micromark-util-types": "^2.0.0",
        "vfile-message": "^4.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/micromark-extension-mdx-md": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/micromark-extension-mdx-md/-/micromark-extension-mdx-md-2.0.0.tgz",
      "integrity": "sha512-EpAiszsB3blw4Rpba7xTOUptcFeBFi+6PY8VnJ2hhimH+vCQDirWgsMpz7w1XcZE7LVrSAUGb9VJpG9ghlYvYQ==",
      "dependencies": {
        "micromark-util-types": "^2.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/micromark-extension-mdxjs": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/micromark-extension-mdxjs/-/micromark-extension-mdxjs-3.0.0.tgz",
      "integrity": "sha512-A873fJfhnJ2siZyUrJ31l34Uqwy4xIFmvPY1oj+Ean5PHcPBYzEsvqvWGaWcfEIr11O5Dlw3p2y0tZWpKHDejQ==",
      "dependencies": {
        "acorn": "^8.0.0",
        "acorn-jsx": "^5.0.0",
        "micromark-extension-mdx-expression": "^3.0.0",
        "micromark-extension-mdx-jsx": "^3.0.0",
        "micromark-extension-mdx-md": "^2.0.0",
        "micromark-extension-mdxjs-esm": "^3.0.0",
        "micromark-util-combine-extensions": "^2.0.0",
        "micromark-util-types": "^2.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/micromark-extension-mdxjs-esm": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/micromark-extension-mdxjs-esm/-/micromark-extension-mdxjs-esm-3.0.0.tgz",
      "integrity": "sha512-DJFl4ZqkErRpq/dAPyeWp15tGrcrrJho1hKK5uBS70BCtfrIFg81sqcTVu3Ta+KD1Tk5vAtBNElWxtAa+m8K9A==",
      "dependencies": {
        "@types/estree": "^1.0.0",
        "devlop": "^1.0.0",
        "micromark-core-commonmark": "^2.0.0",
        "micromark-util-character": "^2.0.0",
        "micromark-util-events-to-acorn": "^2.0.0",
        "micromark-util-symbol": "^2.0.0",
        "micromark-util-types": "^2.0.0",
        "unist-util-position-from-estree": "^2.0.0",
        "vfile-message": "^4.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/micromark-factory-destination": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/micromark-factory-destination/-/micromark-factory-destination-2.0.1.tgz",
      "integrity": "sha512-Xe6rDdJlkmbFRExpTOmRj9N3MaWmbAgdpSrBQvCFqhezUn4AHqJHbaEnfbVYYiexVSs//tqOdY/DxhjdCiJnIA==",
      "funding": [
        {
          "type": "GitHub Sponsors",
          "url": "https://github.com/sponsors/unifiedjs"
        },
        {
          "type": "OpenCollective",
          "url": "https://opencollective.com/unified"
        }
      ],
      "dependencies": {
        "micromark-util-character": "^2.0.0",
        "micromark-util-symbol": "^2.0.0",
        "micromark-util-types": "^2.0.0"
      }
    },
    "node_modules/micromark-factory-label": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/micromark-factory-label/-/micromark-factory-label-2.0.1.tgz",
      "integrity": "sha512-VFMekyQExqIW7xIChcXn4ok29YE3rnuyveW3wZQWWqF4Nv9Wk5rgJ99KzPvHjkmPXF93FXIbBp6YdW3t71/7Vg==",
      "funding": [
        {
          "type": "GitHub Sponsors",
          "url": "https://github.com/sponsors/unifiedjs"
        },
        {
          "type": "OpenCollective",
          "url": "https://opencollective.com/unified"
        }
      ],
      "dependencies": {
        "devlop": "^1.0.0",
        "micromark-util-character": "^2.0.0",
        "micromark-util-symbol": "^2.0.0",
        "micromark-util-types": "^2.0.0"
      }
    },
    "node_modules/micromark-factory-mdx-expression": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/micromark-factory-mdx-expression/-/micromark-factory-mdx-expression-2.0.2.tgz",
      "integrity": "sha512-5E5I2pFzJyg2CtemqAbcyCktpHXuJbABnsb32wX2U8IQKhhVFBqkcZR5LRm1WVoFqa4kTueZK4abep7wdo9nrw==",
      "funding": [
        {
          "type": "GitHub Sponsors",
          "url": "https://github.com/sponsors/unifiedjs"
        },
        {
          "type": "OpenCollective",
          "url": "https://opencollective.com/unified"
        }
      ],
      "dependencies": {
        "@types/estree": "^1.0.0",
        "devlop": "^1.0.0",
        "micromark-factory-space": "^2.0.0",
        "micromark-util-character": "^2.0.0",
        "micromark-util-events-to-acorn": "^2.0.0",
        "micromark-util-symbol": "^2.0.0",
        "micromark-util-types": "^2.0.0",
        "unist-util-position-from-estree": "^2.0.0",
        "vfile-message": "^4.0.0"
      }
    },
    "node_modules/micromark-factory-space": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/micromark-factory-space/-/micromark-factory-space-2.0.1.tgz",
      "integrity": "sha512-zRkxjtBxxLd2Sc0d+fbnEunsTj46SWXgXciZmHq0kDYGnck/ZSGj9/wULTV95uoeYiK5hRXP2mJ98Uo4cq/LQg==",
      "funding": [
        {
          "type": "GitHub Sponsors",
          "url": "https://github.com/sponsors/unifiedjs"
        },
        {
          "type": "OpenCollective",
          "url": "https://opencollective.com/unified"
        }
      ],
      "dependencies": {
        "micromark-util-character": "^2.0.0",
        "micromark-util-types": "^2.0.0"
      }
    },
    "node_modules/micromark-factory-title": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/micromark-factory-title/-/micromark-factory-title-2.0.1.tgz",
      "integrity": "sha512-5bZ+3CjhAd9eChYTHsjy6TGxpOFSKgKKJPJxr293jTbfry2KDoWkhBb6TcPVB4NmzaPhMs1Frm9AZH7OD4Cjzw==",
      "funding": [
        {
          "type": "GitHub Sponsors",
          "url": "https://github.com/sponsors/unifiedjs"
        },
        {
          "type": "OpenCollective",
          "url": "https://opencollective.com/unified"
        }
      ],
      "dependencies": {
        "micromark-factory-space": "^2.0.0",
        "micromark-util-character": "^2.0.0",
        "micromark-util-symbol": "^2.0.0",
        "micromark-util-types": "^2.0.0"
      }
    },
    "node_modules/micromark-factory-whitespace": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/micromark-factory-whitespace/-/micromark-factory-whitespace-2.0.1.tgz",
      "integrity": "sha512-Ob0nuZ3PKt/n0hORHyvoD9uZhr+Za8sFoP+OnMcnWK5lngSzALgQYKMr9RJVOWLqQYuyn6ulqGWSXdwf6F80lQ==",
      "funding": [
        {
          "type": "GitHub Sponsors",
          "url": "https://github.com/sponsors/unifiedjs"
        },
        {
          "type": "OpenCollective",
          "url": "https://opencollective.com/unified"
        }
      ],
      "dependencies": {
        "micromark-factory-space": "^2.0.0",
        "micromark-util-character": "^2.0.0",
        "micromark-util-symbol": "^2.0.0",
        "micromark-util-types": "^2.0.0"
      }
    },
    "node_modules/micromark-util-character": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/micromark-util-character/-/micromark-util-character-2.1.1.tgz",
      "integrity": "sha512-wv8tdUTJ3thSFFFJKtpYKOYiGP2+v96Hvk4Tu8KpCAsTMs6yi+nVmGh1syvSCsaxz45J6Jbw+9DD6g97+NV67Q==",
      "funding": [
        {
          "type": "GitHub Sponsors",
          "url": "https://github.com/sponsors/unifiedjs"
        },
        {
          "type": "OpenCollective",
          "url": "https://opencollective.com/unified"
        }
      ],
      "dependencies": {
        "micromark-util-symbol": "^2.0.0",
        "micromark-util-types": "^2.0.0"
      }
    },
    "node_modules/micromark-util-chunked": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/micromark-util-chunked/-/micromark-util-chunked-2.0.1.tgz",
      "integrity": "sha512-QUNFEOPELfmvv+4xiNg2sRYeS/P84pTW0TCgP5zc9FpXetHY0ab7SxKyAQCNCc1eK0459uoLI1y5oO5Vc1dbhA==",
      "funding": [
        {
          "type": "GitHub Sponsors",
          "url": "https://github.com/sponsors/unifiedjs"
        },
        {
          "type": "OpenCollective",
          "url": "https://opencollective.com/unified"
        }
      ],
      "dependencies": {
        "micromark-util-symbol": "^2.0.0"
      }
    },
    "node_modules/micromark-util-classify-character": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/micromark-util-classify-character/-/micromark-util-classify-character-2.0.1.tgz",
      "integrity": "sha512-K0kHzM6afW/MbeWYWLjoHQv1sgg2Q9EccHEDzSkxiP/EaagNzCm7T/WMKZ3rjMbvIpvBiZgwR3dKMygtA4mG1Q==",
      "funding": [
        {
          "type": "GitHub Sponsors",
          "url": "https://github.com/sponsors/unifiedjs"
        },
        {
          "type": "OpenCollective",
          "url": "https://opencollective.com/unified"
        }
      ],
      "dependencies": {
        "micromark-util-character": "^2.0.0",
        "micromark-util-symbol": "^2.0.0",
        "micromark-util-types": "^2.0.0"
      }
    },
    "node_modules/micromark-util-combine-extensions": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/micromark-util-combine-extensions/-/micromark-util-combine-extensions-2.0.1.tgz",
      "integrity": "sha512-OnAnH8Ujmy59JcyZw8JSbK9cGpdVY44NKgSM7E9Eh7DiLS2E9RNQf0dONaGDzEG9yjEl5hcqeIsj4hfRkLH/Bg==",
      "funding": [
        {
          "type": "GitHub Sponsors",
          "url": "https://github.com/sponsors/unifiedjs"
        },
        {
          "type": "OpenCollective",
          "url": "https://opencollective.com/unified"
        }
      ],
      "dependencies": {
        "micromark-util-chunked": "^2.0.0",
        "micromark-util-types": "^2.0.0"
      }
    },
    "node_modules/micromark-util-decode-numeric-character-reference": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/micromark-util-decode-numeric-character-reference/-/micromark-util-decode-numeric-character-reference-2.0.2.tgz",
      "integrity": "sha512-ccUbYk6CwVdkmCQMyr64dXz42EfHGkPQlBj5p7YVGzq8I7CtjXZJrubAYezf7Rp+bjPseiROqe7G6foFd+lEuw==",
      "funding": [
        {
          "type": "GitHub Sponsors",
          "url": "https://github.com/sponsors/unifiedjs"
        },
        {
          "type": "OpenCollective",
          "url": "https://opencollective.com/unified"
        }
      ],
      "dependencies": {
        "micromark-util-symbol": "^2.0.0"
      }
    },
    "node_modules/micromark-util-decode-string": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/micromark-util-decode-string/-/micromark-util-decode-string-2.0.1.tgz",
      "integrity": "sha512-nDV/77Fj6eH1ynwscYTOsbK7rR//Uj0bZXBwJZRfaLEJ1iGBR6kIfNmlNqaqJf649EP0F3NWNdeJi03elllNUQ==",
      "funding": [
        {
          "type": "GitHub Sponsors",
          "url": "https://github.com/sponsors/unifiedjs"
        },
        {
          "type": "OpenCollective",
          "url": "https://opencollective.com/unified"
        }
      ],
      "dependencies": {
        "decode-named-character-reference": "^1.0.0",
        "micromark-util-character": "^2.0.0",
        "micromark-util-decode-numeric-character-reference": "^2.0.0",
        "micromark-util-symbol": "^2.0.0"
      }
    },
    "node_modules/micromark-util-encode": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/micromark-util-encode/-/micromark-util-encode-2.0.1.tgz",
      "integrity": "sha512-c3cVx2y4KqUnwopcO9b/SCdo2O67LwJJ/UyqGfbigahfegL9myoEFoDYZgkT7f36T0bLrM9hZTAaAyH+PCAXjw==",
      "funding": [
        {
          "type": "GitHub Sponsors",
          "url": "https://github.com/sponsors/unifiedjs"
        },
        {
          "type": "OpenCollective",
          "url": "https://opencollective.com/unified"
        }
      ]
    },
    "node_modules/micromark-util-events-to-acorn": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/micromark-util-events-to-acorn/-/micromark-util-events-to-acorn-2.0.2.tgz",
      "integrity": "sha512-Fk+xmBrOv9QZnEDguL9OI9/NQQp6Hz4FuQ4YmCb/5V7+9eAh1s6AYSvL20kHkD67YIg7EpE54TiSlcsf3vyZgA==",
      "funding": [
        {
          "type": "GitHub Sponsors",
          "url": "https://github.com/sponsors/unifiedjs"
        },
        {
          "type": "OpenCollective",
          "url": "https://opencollective.com/unified"
        }
      ],
      "dependencies": {
        "@types/acorn": "^4.0.0",
        "@types/estree": "^1.0.0",
        "@types/unist": "^3.0.0",
        "devlop": "^1.0.0",
        "estree-util-visit": "^2.0.0",
        "micromark-util-symbol": "^2.0.0",
        "micromark-util-types": "^2.0.0",
        "vfile-message": "^4.0.0"
      }
    },
    "node_modules/micromark-util-html-tag-name": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/micromark-util-html-tag-name/-/micromark-util-html-tag-name-2.0.1.tgz",
      "integrity": "sha512-2cNEiYDhCWKI+Gs9T0Tiysk136SnR13hhO8yW6BGNyhOC4qYFnwF1nKfD3HFAIXA5c45RrIG1ub11GiXeYd1xA==",
      "funding": [
        {
          "type": "GitHub Sponsors",
          "url": "https://github.com/sponsors/unifiedjs"
        },
        {
          "type": "OpenCollective",
          "url": "https://opencollective.com/unified"
        }
      ]
    },
    "node_modules/micromark-util-normalize-identifier": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/micromark-util-normalize-identifier/-/micromark-util-normalize-identifier-2.0.1.tgz",
      "integrity": "sha512-sxPqmo70LyARJs0w2UclACPUUEqltCkJ6PhKdMIDuJ3gSf/Q+/GIe3WKl0Ijb/GyH9lOpUkRAO2wp0GVkLvS9Q==",
      "funding": [
        {
          "type": "GitHub Sponsors",
          "url": "https://github.com/sponsors/unifiedjs"
        },
        {
          "type": "OpenCollective",
          "url": "https://opencollective.com/unified"
        }
      ],
      "dependencies": {
        "micromark-util-symbol": "^2.0.0"
      }
    },
    "node_modules/micromark-util-resolve-all": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/micromark-util-resolve-all/-/micromark-util-resolve-all-2.0.1.tgz",
      "integrity": "sha512-VdQyxFWFT2/FGJgwQnJYbe1jjQoNTS4RjglmSjTUlpUMa95Htx9NHeYW4rGDJzbjvCsl9eLjMQwGeElsqmzcHg==",
      "funding": [
        {
          "type": "GitHub Sponsors",
          "url": "https://github.com/sponsors/unifiedjs"
        },
        {
          "type": "OpenCollective",
          "url": "https://opencollective.com/unified"
        }
      ],
      "dependencies": {
        "micromark-util-types": "^2.0.0"
      }
    },
    "node_modules/micromark-util-sanitize-uri": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/micromark-util-sanitize-uri/-/micromark-util-sanitize-uri-2.0.1.tgz",
      "integrity": "sha512-9N9IomZ/YuGGZZmQec1MbgxtlgougxTodVwDzzEouPKo3qFWvymFHWcnDi2vzV1ff6kas9ucW+o3yzJK9YB1AQ==",
      "funding": [
        {
          "type": "GitHub Sponsors",
          "url": "https://github.com/sponsors/unifiedjs"
        },
        {
          "type": "OpenCollective",
          "url": "https://opencollective.com/unified"
        }
      ],
      "dependencies": {
        "micromark-util-character": "^2.0.0",
        "micromark-util-encode": "^2.0.0",
        "micromark-util-symbol": "^2.0.0"
      }
    },
    "node_modules/micromark-util-subtokenize": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/micromark-util-subtokenize/-/micromark-util-subtokenize-2.0.3.tgz",
      "integrity": "sha512-VXJJuNxYWSoYL6AJ6OQECCFGhIU2GGHMw8tahogePBrjkG8aCCas3ibkp7RnVOSTClg2is05/R7maAhF1XyQMg==",
      "funding": [
        {
          "type": "GitHub Sponsors",
          "url": "https://github.com/sponsors/unifiedjs"
        },
        {
          "type": "OpenCollective",
          "url": "https://opencollective.com/unified"
        }
      ],
      "dependencies": {
        "devlop": "^1.0.0",
        "micromark-util-chunked": "^2.0.0",
        "micromark-util-symbol": "^2.0.0",
        "micromark-util-types": "^2.0.0"
      }
    },
    "node_modules/micromark-util-symbol": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/micromark-util-symbol/-/micromark-util-symbol-2.0.1.tgz",
      "integrity": "sha512-vs5t8Apaud9N28kgCrRUdEed4UJ+wWNvicHLPxCa9ENlYuAY31M0ETy5y1vA33YoNPDFTghEbnh6efaE8h4x0Q==",
      "funding": [
        {
          "type": "GitHub Sponsors",
          "url": "https://github.com/sponsors/unifiedjs"
        },
        {
          "type": "OpenCollective",
          "url": "https://opencollective.com/unified"
        }
      ]
    },
    "node_modules/micromark-util-types": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/micromark-util-types/-/micromark-util-types-2.0.1.tgz",
      "integrity": "sha512-534m2WhVTddrcKVepwmVEVnUAmtrx9bfIjNoQHRqfnvdaHQiFytEhJoTgpWJvDEXCO5gLTQh3wYC1PgOJA4NSQ==",
      "funding": [
        {
          "type": "GitHub Sponsors",
          "url": "https://github.com/sponsors/unifiedjs"
        },
        {
          "type": "OpenCollective",
          "url": "https://opencollective.com/unified"
        }
      ]
    },
    "node_modules/micromatch": {
      "version": "4.0.8",
      "resolved": "https://registry.npmjs.org/micromatch/-/micromatch-4.0.8.tgz",
      "integrity": "sha512-PXwfBhYu0hBCPw8Dn0E+WDYb7af3dSLVWKi3HGv84IdF4TyFoC0ysxFd0Goxw7nSv4T/PzEJQxsYsEiFCKo2BA==",
      "dependencies": {
        "braces": "^3.0.3",
        "picomatch": "^2.3.1"
      },
      "engines": {
        "node": ">=8.6"
      }
    },
    "node_modules/micromatch/node_modules/picomatch": {
      "version": "2.3.1",
      "resolved": "https://registry.npmjs.org/picomatch/-/picomatch-2.3.1.tgz",
      "integrity": "sha512-JU3teHTNjmE2VCGFzuY8EXzCDVwEqB2a8fsIvwaStHhAWJEeVd1o1QD80CU6+ZdEXXSLbSsuLwJjkCBWqRQUVA==",
      "engines": {
        "node": ">=8.6"
      },
      "funding": {
        "url": "https://github.com/sponsors/jonschlinkert"
      }
    },
    "node_modules/mimic-function": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/mimic-function/-/mimic-function-5.0.1.tgz",
      "integrity": "sha512-VP79XUPxV2CigYP3jWwAUFSku2aKqBH7uTAapFWCBqutsbmDo96KY5o8uh6U+/YSIn5OxJnXp73beVkpqMIGhA==",
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/mini-svg-data-uri": {
      "version": "1.4.4",
      "resolved": "https://registry.npmjs.org/mini-svg-data-uri/-/mini-svg-data-uri-1.4.4.tgz",
      "integrity": "sha512-r9deDe9p5FJUPZAk3A59wGH7Ii9YrjjWw0jmw/liSbHl2CHiyXj6FcDXDu2K3TjVAXqiJdaw3xxwlZZr9E6nHg==",
      "dev": true,
      "bin": {
        "mini-svg-data-uri": "cli.js"
      }
    },
    "node_modules/minimatch": {
      "version": "10.0.1",
      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-10.0.1.tgz",
      "integrity": "sha512-ethXTt3SGGR+95gudmqJ1eNhRO7eGEGIgYA9vnPatK4/etz2MEVDno5GMCibdMTuBMyElzIlgxMna3K94XDIDQ==",
      "dependencies": {
        "brace-expansion": "^2.0.1"
      },
      "engines": {
        "node": "20 || >=22"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/minipass": {
      "version": "7.1.2",
      "resolved": "https://registry.npmjs.org/minipass/-/minipass-7.1.2.tgz",
      "integrity": "sha512-qOOzS1cBTWYF4BH8fVePDBOO9iptMnGUEZwNc/cMWnTV2nVLZ7VoNWEPHkYczZA0pdoA7dl6e7FL659nX9S2aw==",
      "engines": {
        "node": ">=16 || 14 >=14.17"
      }
    },
    "node_modules/mrmime": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/mrmime/-/mrmime-2.0.0.tgz",
      "integrity": "sha512-eu38+hdgojoyq63s+yTpN4XMBdt5l8HhMhc4VKLO9KM5caLIBvUm4thi7fFaxyTmCKeNnXZ5pAlBwCUnhA09uw==",
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/ms": {
      "version": "2.1.3",
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.3.tgz",
      "integrity": "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA=="
    },
    "node_modules/muggle-string": {
      "version": "0.4.1",
      "resolved": "https://registry.npmjs.org/muggle-string/-/muggle-string-0.4.1.tgz",
      "integrity": "sha512-VNTrAak/KhO2i8dqqnqnAHOa3cYBwXEZe9h+D5h/1ZqFSTEFHdM65lR7RoIqq3tBBYavsOXV84NoHXZ0AkPyqQ=="
    },
    "node_modules/mz": {
      "version": "2.7.0",
      "resolved": "https://registry.npmjs.org/mz/-/mz-2.7.0.tgz",
      "integrity": "sha512-z81GNO7nnYMEhrGh9LeymoE4+Yr0Wn5McHIZMK5cfQCl+NDX08sCZgUc9/6MHni9IWuFLm1Z3HTCXu2z9fN62Q==",
      "dependencies": {
        "any-promise": "^1.0.0",
        "object-assign": "^4.0.1",
        "thenify-all": "^1.0.0"
      }
    },
    "node_modules/nanoid": {
      "version": "3.3.7",
      "resolved": "https://registry.npmjs.org/nanoid/-/nanoid-3.3.7.tgz",
      "integrity": "sha512-eSRppjcPIatRIMC1U6UngP8XFcz8MQWGQdt1MTBQ7NaAmvXDfvNxbvWV3x2y6CdEUciCSsDHDQZbhYaB8QEo2g==",
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "bin": {
        "nanoid": "bin/nanoid.cjs"
      },
      "engines": {
        "node": "^10 || ^12 || ^13.7 || ^14 || >=15.0.1"
      }
    },
    "node_modules/neotraverse": {
      "version": "0.6.18",
      "resolved": "https://registry.npmjs.org/neotraverse/-/neotraverse-0.6.18.tgz",
      "integrity": "sha512-Z4SmBUweYa09+o6pG+eASabEpP6QkQ70yHj351pQoEXIs8uHbaU2DWVmzBANKgflPa47A50PtB2+NgRpQvr7vA==",
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/nlcst-to-string": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/nlcst-to-string/-/nlcst-to-string-4.0.0.tgz",
      "integrity": "sha512-YKLBCcUYKAg0FNlOBT6aI91qFmSiFKiluk655WzPF+DDMA02qIyy8uiRqI8QXtcFpEvll12LpL5MXqEmAZ+dcA==",
      "dependencies": {
        "@types/nlcst": "^2.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/no-case": {
      "version": "3.0.4",
      "resolved": "https://registry.npmjs.org/no-case/-/no-case-3.0.4.tgz",
      "integrity": "sha512-fgAN3jGAh+RoxUGZHTSOLJIqUc2wmoBwGR4tbpNAKmmovFoWq0OdRkb0VkldReO2a2iBT/OEulG9XSUc10r3zg==",
      "dependencies": {
        "lower-case": "^2.0.2",
        "tslib": "^2.0.3"
      }
    },
    "node_modules/node-releases": {
      "version": "2.0.18",
      "resolved": "https://registry.npmjs.org/node-releases/-/node-releases-2.0.18.tgz",
      "integrity": "sha512-d9VeXT4SJ7ZeOqGX6R5EM022wpL+eWPooLI+5UpWn2jCT1aosUQEhQP214x33Wkwx3JQMvIm+tIoVOdodFS40g=="
    },
    "node_modules/normalize-path": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/normalize-path/-/normalize-path-3.0.0.tgz",
      "integrity": "sha512-6eZs5Ls3WtCisHWp9S2GUy8dqkpGi4BVSz3GaqiE6ezub0512ESztXUwUB6C6IKbQkY2Pnb/mD4WYojCRwcwLA==",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/normalize-range": {
      "version": "0.1.2",
      "resolved": "https://registry.npmjs.org/normalize-range/-/normalize-range-0.1.2.tgz",
      "integrity": "sha512-bdok/XvKII3nUpklnV6P2hxtMNrCboOjAcyBuQnWEhO665FwrSNRxU+AqpsyvO6LgGYPspN+lu5CLtw4jPRKNA==",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/nth-check": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/nth-check/-/nth-check-2.1.1.tgz",
      "integrity": "sha512-lqjrjmaOoAnWfMmBPL+XNnynZh2+swxiX3WUE0s4yEHI6m+AwrK2UZOimIRl3X/4QctVqS8AiZjFqyOGrMXb/w==",
      "dependencies": {
        "boolbase": "^1.0.0"
      },
      "funding": {
        "url": "https://github.com/fb55/nth-check?sponsor=1"
      }
    },
    "node_modules/object-assign": {
      "version": "4.1.1",
      "resolved": "https://registry.npmjs.org/object-assign/-/object-assign-4.1.1.tgz",
      "integrity": "sha512-rJgTQnkUnH1sFw8yT6VSU3zD3sWmu6sZhIseY8VX+GRu3P6F7Fu+JNDoXfklElbLJSnc3FUQHVe4cU5hj+BcUg==",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/object-hash": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/object-hash/-/object-hash-3.0.0.tgz",
      "integrity": "sha512-RSn9F68PjH9HqtltsSnqYC1XXoWe9Bju5+213R98cNGttag9q9yAOTzdbsqvIa7aNm5WffBZFpWYr2aWrklWAw==",
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/onetime": {
      "version": "7.0.0",
      "resolved": "https://registry.npmjs.org/onetime/-/onetime-7.0.0.tgz",
      "integrity": "sha512-VXJjc87FScF88uafS3JllDgvAm+c/Slfz06lorj2uAY34rlUu0Nt+v8wreiImcrgAjjIHp1rXpTDlLOGw29WwQ==",
      "dependencies": {
        "mimic-function": "^5.0.0"
      },
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/oniguruma-to-es": {
      "version": "0.4.1",
      "resolved": "https://registry.npmjs.org/oniguruma-to-es/-/oniguruma-to-es-0.4.1.tgz",
      "integrity": "sha512-rNcEohFz095QKGRovP/yqPIKc+nP+Sjs4YTHMv33nMePGKrq/r2eu9Yh4646M5XluGJsUnmwoXuiXE69KDs+fQ==",
      "dependencies": {
        "emoji-regex-xs": "^1.0.0",
        "regex": "^5.0.0",
        "regex-recursion": "^4.2.1"
      }
    },
    "node_modules/ora": {
      "version": "8.1.1",
      "resolved": "https://registry.npmjs.org/ora/-/ora-8.1.1.tgz",
      "integrity": "sha512-YWielGi1XzG1UTvOaCFaNgEnuhZVMSHYkW/FQ7UX8O26PtlpdM84c0f7wLPlkvx2RfiQmnzd61d/MGxmpQeJPw==",
      "dependencies": {
        "chalk": "^5.3.0",
        "cli-cursor": "^5.0.0",
        "cli-spinners": "^2.9.2",
        "is-interactive": "^2.0.0",
        "is-unicode-supported": "^2.0.0",
        "log-symbols": "^6.0.0",
        "stdin-discarder": "^0.2.2",
        "string-width": "^7.2.0",
        "strip-ansi": "^7.1.0"
      },
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/p-limit": {
      "version": "6.1.0",
      "resolved": "https://registry.npmjs.org/p-limit/-/p-limit-6.1.0.tgz",
      "integrity": "sha512-H0jc0q1vOzlEk0TqAKXKZxdl7kX3OFUzCnNVUnq5Pc3DGo0kpeaMuPqxQn235HibwBEb0/pm9dgKTjXy66fBkg==",
      "dependencies": {
        "yocto-queue": "^1.1.1"
      },
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/p-locate": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/p-locate/-/p-locate-4.1.0.tgz",
      "integrity": "sha512-R79ZZ/0wAxKGu3oYMlz8jy/kbhsNrS7SKZ7PxEHBgJ5+F2mtFW2fK2cOtBh1cHYkQsbzFV7I+EoRKe6Yt0oK7A==",
      "dependencies": {
        "p-limit": "^2.2.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/p-locate/node_modules/p-limit": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/p-limit/-/p-limit-2.3.0.tgz",
      "integrity": "sha512-//88mFWSJx8lxCzwdAABTJL2MyWB12+eIY7MDL2SqLmAkeKU9qxRvWuSyTjm3FUmpBEMuFfckAIqEaVGUDxb6w==",
      "dependencies": {
        "p-try": "^2.0.0"
      },
      "engines": {
        "node": ">=6"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/p-queue": {
      "version": "8.0.1",
      "resolved": "https://registry.npmjs.org/p-queue/-/p-queue-8.0.1.tgz",
      "integrity": "sha512-NXzu9aQJTAzbBqOt2hwsR63ea7yvxJc0PwN/zobNAudYfb1B7R08SzB4TsLeSbUCuG467NhnoT0oO6w1qRO+BA==",
      "dependencies": {
        "eventemitter3": "^5.0.1",
        "p-timeout": "^6.1.2"
      },
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/p-timeout": {
      "version": "6.1.3",
      "resolved": "https://registry.npmjs.org/p-timeout/-/p-timeout-6.1.3.tgz",
      "integrity": "sha512-UJUyfKbwvr/uZSV6btANfb+0t/mOhKV/KXcCUTp8FcQI+v/0d+wXqH4htrW0E4rR6WiEO/EPvUFiV9D5OI4vlw==",
      "engines": {
        "node": ">=14.16"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/p-try": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/p-try/-/p-try-2.2.0.tgz",
      "integrity": "sha512-R4nPAVTAU0B9D35/Gk3uJf/7XYbQcyohSKdvAxIRSNghFl4e71hVoGnBNQz9cWaXxO2I10KTC+3jMdvvoKw6dQ==",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/package-json-from-dist": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/package-json-from-dist/-/package-json-from-dist-1.0.1.tgz",
      "integrity": "sha512-UEZIS3/by4OC8vL3P2dTXRETpebLI2NiI5vIrjaD/5UtrkFX/tNbwjTSRAGC/+7CAo2pIcBaRgWmcBBHcsaCIw=="
    },
    "node_modules/pagefind": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/pagefind/-/pagefind-1.2.0.tgz",
      "integrity": "sha512-sFVv5/x73qCp9KlLHv8/uWDv7rG1tsWcG9MuXc5YTrXIrb8c1Gshm9oc5rMLXNZILXUWai8WczqaK4jjroEzng==",
      "bin": {
        "pagefind": "lib/runner/bin.cjs"
      },
      "optionalDependencies": {
        "@pagefind/darwin-arm64": "1.2.0",
        "@pagefind/darwin-x64": "1.2.0",
        "@pagefind/linux-arm64": "1.2.0",
        "@pagefind/linux-x64": "1.2.0",
        "@pagefind/windows-x64": "1.2.0"
      }
    },
    "node_modules/param-case": {
      "version": "3.0.4",
      "resolved": "https://registry.npmjs.org/param-case/-/param-case-3.0.4.tgz",
      "integrity": "sha512-RXlj7zCYokReqWpOPH9oYivUzLYZ5vAPIfEmCTNViosC78F8F0H9y7T7gG2M39ymgutxF5gcFEsyZQSph9Bp3A==",
      "dependencies": {
        "dot-case": "^3.0.4",
        "tslib": "^2.0.3"
      }
    },
    "node_modules/parse-entities": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/parse-entities/-/parse-entities-4.0.1.tgz",
      "integrity": "sha512-SWzvYcSJh4d/SGLIOQfZ/CoNv6BTlI6YEQ7Nj82oDVnRpwe/Z/F1EMx42x3JAOwGBlCjeCH0BRJQbQ/opHL17w==",
      "dependencies": {
        "@types/unist": "^2.0.0",
        "character-entities": "^2.0.0",
        "character-entities-legacy": "^3.0.0",
        "character-reference-invalid": "^2.0.0",
        "decode-named-character-reference": "^1.0.0",
        "is-alphanumerical": "^2.0.0",
        "is-decimal": "^2.0.0",
        "is-hexadecimal": "^2.0.0"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/wooorm"
      }
    },
    "node_modules/parse-entities/node_modules/@types/unist": {
      "version": "2.0.11",
      "resolved": "https://registry.npmjs.org/@types/unist/-/unist-2.0.11.tgz",
      "integrity": "sha512-CmBKiL6NNo/OqgmMn95Fk9Whlp2mtvIv+KNpQKN2F4SjvrEesubTRWGYSg+BnWZOnlCaSTU1sMpsBOzgbYhnsA=="
    },
    "node_modules/parse-latin": {
      "version": "7.0.0",
      "resolved": "https://registry.npmjs.org/parse-latin/-/parse-latin-7.0.0.tgz",
      "integrity": "sha512-mhHgobPPua5kZ98EF4HWiH167JWBfl4pvAIXXdbaVohtK7a6YBOy56kvhCqduqyo/f3yrHFWmqmiMg/BkBkYYQ==",
      "dependencies": {
        "@types/nlcst": "^2.0.0",
        "@types/unist": "^3.0.0",
        "nlcst-to-string": "^4.0.0",
        "unist-util-modify-children": "^4.0.0",
        "unist-util-visit-children": "^3.0.0",
        "vfile": "^6.0.0"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/wooorm"
      }
    },
    "node_modules/parse5": {
      "version": "7.2.1",
      "resolved": "https://registry.npmjs.org/parse5/-/parse5-7.2.1.tgz",
      "integrity": "sha512-BuBYQYlv1ckiPdQi/ohiivi9Sagc9JG+Ozs0r7b/0iK3sKmrb0b9FdWdBbOdx6hBCM/F9Ir82ofnBhtZOjCRPQ==",
      "dependencies": {
        "entities": "^4.5.0"
      },
      "funding": {
        "url": "https://github.com/inikulin/parse5?sponsor=1"
      }
    },
    "node_modules/pascal-case": {
      "version": "3.1.2",
      "resolved": "https://registry.npmjs.org/pascal-case/-/pascal-case-3.1.2.tgz",
      "integrity": "sha512-uWlGT3YSnK9x3BQJaOdcZwrnV6hPpd8jFH1/ucpiLRPh/2zCVJKS19E4GvYHvaCcACn3foXZ0cLB9Wrx1KGe5g==",
      "dependencies": {
        "no-case": "^3.0.4",
        "tslib": "^2.0.3"
      }
    },
    "node_modules/path-browserify": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/path-browserify/-/path-browserify-1.0.1.tgz",
      "integrity": "sha512-b7uo2UCUOYZcnF/3ID0lulOJi/bafxa1xPe7ZPsammBSpjSWQkjNxlt635YGS2MiR9GjvuXCtz2emr3jbsz98g=="
    },
    "node_modules/path-exists": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/path-exists/-/path-exists-4.0.0.tgz",
      "integrity": "sha512-ak9Qy5Q7jYb2Wwcey5Fpvg2KoAc/ZIhLSLOSBmRmygPsGwkVVt0fZa0qrtMz+m6tJTAHfZQ8FnmB4MG4LWy7/w==",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/path-key": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/path-key/-/path-key-3.1.1.tgz",
      "integrity": "sha512-ojmeN0qd+y0jszEtoY48r0Peq5dwMEkIlCOu6Q5f41lfkswXuKtYrhgoTpLnyIcHm24Uhqx+5Tqm2InSwLhE6Q==",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/path-parse": {
      "version": "1.0.7",
      "resolved": "https://registry.npmjs.org/path-parse/-/path-parse-1.0.7.tgz",
      "integrity": "sha512-LDJzPVEEEPR+y48z93A0Ed0yXb8pAByGWo/k5YYdYgpY2/2EsOsksJrq7lOHxryrVOn1ejG6oAp8ahvOIQD8sw=="
    },
    "node_modules/path-scurry": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/path-scurry/-/path-scurry-2.0.0.tgz",
      "integrity": "sha512-ypGJsmGtdXUOeM5u93TyeIEfEhM6s+ljAhrk5vAvSx8uyY/02OvrZnA0YNGUrPXfpJMgI1ODd3nwz8Npx4O4cg==",
      "dependencies": {
        "lru-cache": "^11.0.0",
        "minipass": "^7.1.2"
      },
      "engines": {
        "node": "20 || >=22"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/path-scurry/node_modules/lru-cache": {
      "version": "11.0.2",
      "resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-11.0.2.tgz",
      "integrity": "sha512-123qHRfJBmo2jXDbo/a5YOQrJoHF/GNQTLzQ5+IdK5pWpceK17yRc6ozlWd25FxvGKQbIUs91fDFkXmDHTKcyA==",
      "engines": {
        "node": "20 || >=22"
      }
    },
    "node_modules/path-type": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/path-type/-/path-type-5.0.0.tgz",
      "integrity": "sha512-5HviZNaZcfqP95rwpv+1HDgUamezbqdSYTyzjTvwtJSnIH+3vnbmWsItli8OFEndS984VT55M3jduxZbX351gg==",
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/picocolors": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/picocolors/-/picocolors-1.1.1.tgz",
      "integrity": "sha512-xceH2snhtb5M9liqDsmEw56le376mTZkEX/jEb/RxNFyegNul7eNslCXP9FDj/Lcu0X8KEyMceP2ntpaHrDEVA=="
    },
    "node_modules/picomatch": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/picomatch/-/picomatch-4.0.2.tgz",
      "integrity": "sha512-M7BAV6Rlcy5u+m6oPhAPFgJTzAioX/6B0DxyvDlo9l8+T3nLKbrczg2WLUyzd45L8RqfUMyGPzekbMvX2Ldkwg==",
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/sponsors/jonschlinkert"
      }
    },
    "node_modules/pify": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/pify/-/pify-2.3.0.tgz",
      "integrity": "sha512-udgsAY+fTnvv7kI7aaxbqwWNb0AHiB0qBO89PZKPkoTmGOgdbrHDKD+0B2X4uTfJ/FT1R09r9gTsjUjNJotuog==",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/pirates": {
      "version": "4.0.6",
      "resolved": "https://registry.npmjs.org/pirates/-/pirates-4.0.6.tgz",
      "integrity": "sha512-saLsH7WeYYPiD25LDuLRRY/i+6HaPYr6G1OUlN39otzkSTxKnubR9RTxS3/Kk50s1g2JTgFwWQDQyplC5/SHZg==",
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/pkg-dir": {
      "version": "4.2.0",
      "resolved": "https://registry.npmjs.org/pkg-dir/-/pkg-dir-4.2.0.tgz",
      "integrity": "sha512-HRDzbaKjC+AOWVXxAU/x54COGeIv9eb+6CkDSQoNTt4XyWoIJvuPsXizxu/Fr23EiekbtZwmh1IcIG/l/a10GQ==",
      "dependencies": {
        "find-up": "^4.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/postcss": {
      "version": "8.4.49",
      "resolved": "https://registry.npmjs.org/postcss/-/postcss-8.4.49.tgz",
      "integrity": "sha512-OCVPnIObs4N29kxTjzLfUryOkvZEq+pf8jTF0lg8E7uETuWHA+v7j3c/xJmiqpX450191LlmZfUKkXxkTry7nA==",
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/postcss/"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/postcss"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "dependencies": {
        "nanoid": "^3.3.7",
        "picocolors": "^1.1.1",
        "source-map-js": "^1.2.1"
      },
      "engines": {
        "node": "^10 || ^12 || >=14"
      }
    },
    "node_modules/postcss-import": {
      "version": "15.1.0",
      "resolved": "https://registry.npmjs.org/postcss-import/-/postcss-import-15.1.0.tgz",
      "integrity": "sha512-hpr+J05B2FVYUAXHeK1YyI267J/dDDhMU6B6civm8hSY1jYJnBXxzKDKDswzJmtLHryrjhnDjqqp/49t8FALew==",
      "dependencies": {
        "postcss-value-parser": "^4.0.0",
        "read-cache": "^1.0.0",
        "resolve": "^1.1.7"
      },
      "engines": {
        "node": ">=14.0.0"
      },
      "peerDependencies": {
        "postcss": "^8.0.0"
      }
    },
    "node_modules/postcss-js": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/postcss-js/-/postcss-js-4.0.1.tgz",
      "integrity": "sha512-dDLF8pEO191hJMtlHFPRa8xsizHaM82MLfNkUHdUtVEV3tgTp5oj+8qbEqYM57SLfc74KSbw//4SeJma2LRVIw==",
      "dependencies": {
        "camelcase-css": "^2.0.1"
      },
      "engines": {
        "node": "^12 || ^14 || >= 16"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/postcss/"
      },
      "peerDependencies": {
        "postcss": "^8.4.21"
      }
    },
    "node_modules/postcss-load-config": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/postcss-load-config/-/postcss-load-config-4.0.2.tgz",
      "integrity": "sha512-bSVhyJGL00wMVoPUzAVAnbEoWyqRxkjv64tUl427SKnPrENtq6hJwUojroMz2VB+Q1edmi4IfrAPpami5VVgMQ==",
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/postcss/"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "dependencies": {
        "lilconfig": "^3.0.0",
        "yaml": "^2.3.4"
      },
      "engines": {
        "node": ">= 14"
      },
      "peerDependencies": {
        "postcss": ">=8.0.9",
        "ts-node": ">=9.0.0"
      },
      "peerDependenciesMeta": {
        "postcss": {
          "optional": true
        },
        "ts-node": {
          "optional": true
        }
      }
    },
    "node_modules/postcss-nested": {
      "version": "6.2.0",
      "resolved": "https://registry.npmjs.org/postcss-nested/-/postcss-nested-6.2.0.tgz",
      "integrity": "sha512-HQbt28KulC5AJzG+cZtj9kvKB93CFCdLvog1WFLf1D+xmMvPGlBstkpTEZfK5+AN9hfJocyBFCNiqyS48bpgzQ==",
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/postcss/"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "dependencies": {
        "postcss-selector-parser": "^6.1.1"
      },
      "engines": {
        "node": ">=12.0"
      },
      "peerDependencies": {
        "postcss": "^8.2.14"
      }
    },
    "node_modules/postcss-selector-parser": {
      "version": "6.1.2",
      "resolved": "https://registry.npmjs.org/postcss-selector-parser/-/postcss-selector-parser-6.1.2.tgz",
      "integrity": "sha512-Q8qQfPiZ+THO/3ZrOrO0cJJKfpYCagtMUkXbnEfmgUjwXg6z/WBeOyS9APBBPCTSiDV+s4SwQGu8yFsiMRIudg==",
      "dependencies": {
        "cssesc": "^3.0.0",
        "util-deprecate": "^1.0.2"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/postcss-value-parser": {
      "version": "4.2.0",
      "resolved": "https://registry.npmjs.org/postcss-value-parser/-/postcss-value-parser-4.2.0.tgz",
      "integrity": "sha512-1NNCs6uurfkVbeXG4S8JFT9t19m45ICnif8zWLd5oPSZ50QnwMfK+H3jv408d4jw/7Bttv5axS5IiHoLaVNHeQ=="
    },
    "node_modules/preferred-pm": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/preferred-pm/-/preferred-pm-4.0.0.tgz",
      "integrity": "sha512-gYBeFTZLu055D8Vv3cSPox/0iTPtkzxpLroSYYA7WXgRi31WCJ51Uyl8ZiPeUUjyvs2MBzK+S8v9JVUgHU/Sqw==",
      "dependencies": {
        "find-up-simple": "^1.0.0",
        "find-yarn-workspace-root2": "1.2.16",
        "which-pm": "^3.0.0"
      },
      "engines": {
        "node": ">=18.12"
      }
    },
    "node_modules/preline": {
      "version": "2.5.1",
      "resolved": "https://registry.npmjs.org/preline/-/preline-2.5.1.tgz",
      "integrity": "sha512-fEXOsz0xLfTm5sJmNanourrMjwjcgGtaVNg8Pt6GzUbZ/oXHIdcR94LBdeE0Ea0pBPFOOHzEL5LQwSbAvCJEfw==",
      "dependencies": {
        "@popperjs/core": "^2.11.2"
      }
    },
    "node_modules/prettier": {
      "version": "3.3.3",
      "resolved": "https://registry.npmjs.org/prettier/-/prettier-3.3.3.tgz",
      "integrity": "sha512-i2tDNA0O5IrMO757lfrdQZCc2jPNDVntV0m/+4whiDfWaTKfMNgR7Qz0NAeGz/nRqF4m5/6CLzbP4/liHt12Ew==",
      "devOptional": true,
      "bin": {
        "prettier": "bin/prettier.cjs"
      },
      "engines": {
        "node": ">=14"
      },
      "funding": {
        "url": "https://github.com/prettier/prettier?sponsor=1"
      }
    },
    "node_modules/prettier-plugin-astro": {
      "version": "0.14.1",
      "resolved": "https://registry.npmjs.org/prettier-plugin-astro/-/prettier-plugin-astro-0.14.1.tgz",
      "integrity": "sha512-RiBETaaP9veVstE4vUwSIcdATj6dKmXljouXc/DDNwBSPTp8FRkLGDSGFClKsAFeeg+13SB0Z1JZvbD76bigJw==",
      "devOptional": true,
      "dependencies": {
        "@astrojs/compiler": "^2.9.1",
        "prettier": "^3.0.0",
        "sass-formatter": "^0.7.6"
      },
      "engines": {
        "node": "^14.15.0 || >=16.0.0"
      }
    },
    "node_modules/prettier-plugin-tailwindcss": {
      "version": "0.6.9",
      "resolved": "https://registry.npmjs.org/prettier-plugin-tailwindcss/-/prettier-plugin-tailwindcss-0.6.9.tgz",
      "integrity": "sha512-r0i3uhaZAXYP0At5xGfJH876W3HHGHDp+LCRUJrs57PBeQ6mYHMwr25KH8NPX44F2yGTvdnH7OqCshlQx183Eg==",
      "dev": true,
      "engines": {
        "node": ">=14.21.3"
      },
      "peerDependencies": {
        "@ianvs/prettier-plugin-sort-imports": "*",
        "@prettier/plugin-pug": "*",
        "@shopify/prettier-plugin-liquid": "*",
        "@trivago/prettier-plugin-sort-imports": "*",
        "@zackad/prettier-plugin-twig-melody": "*",
        "prettier": "^3.0",
        "prettier-plugin-astro": "*",
        "prettier-plugin-css-order": "*",
        "prettier-plugin-import-sort": "*",
        "prettier-plugin-jsdoc": "*",
        "prettier-plugin-marko": "*",
        "prettier-plugin-multiline-arrays": "*",
        "prettier-plugin-organize-attributes": "*",
        "prettier-plugin-organize-imports": "*",
        "prettier-plugin-sort-imports": "*",
        "prettier-plugin-style-order": "*",
        "prettier-plugin-svelte": "*"
      },
      "peerDependenciesMeta": {
        "@ianvs/prettier-plugin-sort-imports": {
          "optional": true
        },
        "@prettier/plugin-pug": {
          "optional": true
        },
        "@shopify/prettier-plugin-liquid": {
          "optional": true
        },
        "@trivago/prettier-plugin-sort-imports": {
          "optional": true
        },
        "@zackad/prettier-plugin-twig-melody": {
          "optional": true
        },
        "prettier-plugin-astro": {
          "optional": true
        },
        "prettier-plugin-css-order": {
          "optional": true
        },
        "prettier-plugin-import-sort": {
          "optional": true
        },
        "prettier-plugin-jsdoc": {
          "optional": true
        },
        "prettier-plugin-marko": {
          "optional": true
        },
        "prettier-plugin-multiline-arrays": {
          "optional": true
        },
        "prettier-plugin-organize-attributes": {
          "optional": true
        },
        "prettier-plugin-organize-imports": {
          "optional": true
        },
        "prettier-plugin-sort-imports": {
          "optional": true
        },
        "prettier-plugin-style-order": {
          "optional": true
        },
        "prettier-plugin-svelte": {
          "optional": true
        }
      }
    },
    "node_modules/prismjs": {
      "version": "1.29.0",
      "resolved": "https://registry.npmjs.org/prismjs/-/prismjs-1.29.0.tgz",
      "integrity": "sha512-Kx/1w86q/epKcmte75LNrEoT+lX8pBpavuAbvJWRXar7Hz8jrtF+e3vY751p0R8H9HdArwaCTNDDzHg/ScJK1Q==",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/prompts": {
      "version": "2.4.2",
      "resolved": "https://registry.npmjs.org/prompts/-/prompts-2.4.2.tgz",
      "integrity": "sha512-NxNv/kLguCA7p3jE8oL2aEBsrJWgAakBpgmgK6lpPWV+WuOmY6r2/zbAVnP+T8bQlA0nzHXSJSJW0Hq7ylaD2Q==",
      "dependencies": {
        "kleur": "^3.0.3",
        "sisteransi": "^1.0.5"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/prompts/node_modules/kleur": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/kleur/-/kleur-3.0.3.tgz",
      "integrity": "sha512-eTIzlVOSUR+JxdDFepEYcBMtZ9Qqdef+rnzWdRZuMbOywu5tO2w2N7rqjoANZ5k9vywhL6Br1VRjUIgTQx4E8w==",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/property-information": {
      "version": "6.5.0",
      "resolved": "https://registry.npmjs.org/property-information/-/property-information-6.5.0.tgz",
      "integrity": "sha512-PgTgs/BlvHxOu8QuEN7wi5A0OmXaBcHpmCSTehcs6Uuu9IkDIEo13Hy7n898RHfrQ49vKCoGeWZSaAK01nwVig==",
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/wooorm"
      }
    },
    "node_modules/queue-microtask": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/queue-microtask/-/queue-microtask-1.2.3.tgz",
      "integrity": "sha512-NuaNSa6flKT5JaSYQzJok04JzTL1CA6aGhv5rfLW3PgqA+M2ChpZQnAC8h8i4ZFkBS8X5RqkDBHA7r4hej3K9A==",
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/feross"
        },
        {
          "type": "patreon",
          "url": "https://www.patreon.com/feross"
        },
        {
          "type": "consulting",
          "url": "https://feross.org/support"
        }
      ]
    },
    "node_modules/read-cache": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/read-cache/-/read-cache-1.0.0.tgz",
      "integrity": "sha512-Owdv/Ft7IjOgm/i0xvNDZ1LrRANRfew4b2prF3OWMQLxLfu3bS8FVhCsrSCMK4lR56Y9ya+AThoTpDCTxCmpRA==",
      "dependencies": {
        "pify": "^2.3.0"
      }
    },
    "node_modules/readdirp": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/readdirp/-/readdirp-4.0.2.tgz",
      "integrity": "sha512-yDMz9g+VaZkqBYS/ozoBJwaBhTbZo3UNYQHNRw1D3UFQB8oHB4uS/tAODO+ZLjGWmUbKnIlOWO+aaIiAxrUWHA==",
      "engines": {
        "node": ">= 14.16.0"
      },
      "funding": {
        "type": "individual",
        "url": "https://paulmillr.com/funding/"
      }
    },
    "node_modules/recma-build-jsx": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/recma-build-jsx/-/recma-build-jsx-1.0.0.tgz",
      "integrity": "sha512-8GtdyqaBcDfva+GUKDr3nev3VpKAhup1+RvkMvUxURHpW7QyIvk9F5wz7Vzo06CEMSilw6uArgRqhpiUcWp8ew==",
      "dependencies": {
        "@types/estree": "^1.0.0",
        "estree-util-build-jsx": "^3.0.0",
        "vfile": "^6.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/recma-jsx": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/recma-jsx/-/recma-jsx-1.0.0.tgz",
      "integrity": "sha512-5vwkv65qWwYxg+Atz95acp8DMu1JDSqdGkA2Of1j6rCreyFUE/gp15fC8MnGEuG1W68UKjM6x6+YTWIh7hZM/Q==",
      "dependencies": {
        "acorn-jsx": "^5.0.0",
        "estree-util-to-js": "^2.0.0",
        "recma-parse": "^1.0.0",
        "recma-stringify": "^1.0.0",
        "unified": "^11.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/recma-parse": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/recma-parse/-/recma-parse-1.0.0.tgz",
      "integrity": "sha512-OYLsIGBB5Y5wjnSnQW6t3Xg7q3fQ7FWbw/vcXtORTnyaSFscOtABg+7Pnz6YZ6c27fG1/aN8CjfwoUEUIdwqWQ==",
      "dependencies": {
        "@types/estree": "^1.0.0",
        "esast-util-from-js": "^2.0.0",
        "unified": "^11.0.0",
        "vfile": "^6.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/recma-stringify": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/recma-stringify/-/recma-stringify-1.0.0.tgz",
      "integrity": "sha512-cjwII1MdIIVloKvC9ErQ+OgAtwHBmcZ0Bg4ciz78FtbT8In39aAYbaA7zvxQ61xVMSPE8WxhLwLbhif4Js2C+g==",
      "dependencies": {
        "@types/estree": "^1.0.0",
        "estree-util-to-js": "^2.0.0",
        "unified": "^11.0.0",
        "vfile": "^6.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/regenerator-runtime": {
      "version": "0.14.1",
      "resolved": "https://registry.npmjs.org/regenerator-runtime/-/regenerator-runtime-0.14.1.tgz",
      "integrity": "sha512-dYnhHh0nJoMfnkZs6GmmhFknAGRrLznOu5nc9ML+EJxGvrx6H7teuevqVqCuPcPK//3eDrrjQhehXVx9cnkGdw=="
    },
    "node_modules/regex": {
      "version": "5.0.2",
      "resolved": "https://registry.npmjs.org/regex/-/regex-5.0.2.tgz",
      "integrity": "sha512-/pczGbKIQgfTMRV0XjABvc5RzLqQmwqxLHdQao2RTXPk+pmTXB2P0IaUHYdYyk412YLwUIkaeMd5T+RzVgTqnQ==",
      "dependencies": {
        "regex-utilities": "^2.3.0"
      }
    },
    "node_modules/regex-recursion": {
      "version": "4.2.1",
      "resolved": "https://registry.npmjs.org/regex-recursion/-/regex-recursion-4.2.1.tgz",
      "integrity": "sha512-QHNZyZAeKdndD1G3bKAbBEKOSSK4KOHQrAJ01N1LJeb0SoH4DJIeFhp0uUpETgONifS4+P3sOgoA1dhzgrQvhA==",
      "dependencies": {
        "regex-utilities": "^2.3.0"
      }
    },
    "node_modules/regex-utilities": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/regex-utilities/-/regex-utilities-2.3.0.tgz",
      "integrity": "sha512-8VhliFJAWRaUiVvREIiW2NXXTmHs4vMNnSzuJVhscgmGav3g9VDxLrQndI3dZZVVdp0ZO/5v0xmX516/7M9cng=="
    },
    "node_modules/rehype": {
      "version": "13.0.2",
      "resolved": "https://registry.npmjs.org/rehype/-/rehype-13.0.2.tgz",
      "integrity": "sha512-j31mdaRFrwFRUIlxGeuPXXKWQxet52RBQRvCmzl5eCefn/KGbomK5GMHNMsOJf55fgo3qw5tST5neDuarDYR2A==",
      "dependencies": {
        "@types/hast": "^3.0.0",
        "rehype-parse": "^9.0.0",
        "rehype-stringify": "^10.0.0",
        "unified": "^11.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/rehype-expressive-code": {
      "version": "0.38.3",
      "resolved": "https://registry.npmjs.org/rehype-expressive-code/-/rehype-expressive-code-0.38.3.tgz",
      "integrity": "sha512-RYSSDkMBikoTbycZPkcWp6ELneANT4eTpND1DSRJ6nI2eVFUwTBDCvE2vO6jOOTaavwnPiydi4i/87NRyjpdOA==",
      "dependencies": {
        "expressive-code": "^0.38.3"
      }
    },
    "node_modules/rehype-format": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/rehype-format/-/rehype-format-5.0.1.tgz",
      "integrity": "sha512-zvmVru9uB0josBVpr946OR8ui7nJEdzZobwLOOqHb/OOD88W0Vk2SqLwoVOj0fM6IPCCO6TaV9CvQvJMWwukFQ==",
      "dependencies": {
        "@types/hast": "^3.0.0",
        "hast-util-format": "^1.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/rehype-parse": {
      "version": "9.0.1",
      "resolved": "https://registry.npmjs.org/rehype-parse/-/rehype-parse-9.0.1.tgz",
      "integrity": "sha512-ksCzCD0Fgfh7trPDxr2rSylbwq9iYDkSn8TCDmEJ49ljEUBxDVCzCHv7QNzZOfODanX4+bWQ4WZqLCRWYLfhag==",
      "dependencies": {
        "@types/hast": "^3.0.0",
        "hast-util-from-html": "^2.0.0",
        "unified": "^11.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/rehype-raw": {
      "version": "7.0.0",
      "resolved": "https://registry.npmjs.org/rehype-raw/-/rehype-raw-7.0.0.tgz",
      "integrity": "sha512-/aE8hCfKlQeA8LmyeyQvQF3eBiLRGNlfBJEvWH7ivp9sBqs7TNqBL5X3v157rM4IFETqDnIOO+z5M/biZbo9Ww==",
      "dependencies": {
        "@types/hast": "^3.0.0",
        "hast-util-raw": "^9.0.0",
        "vfile": "^6.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/rehype-recma": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/rehype-recma/-/rehype-recma-1.0.0.tgz",
      "integrity": "sha512-lqA4rGUf1JmacCNWWZx0Wv1dHqMwxzsDWYMTowuplHF3xH0N/MmrZ/G3BDZnzAkRmxDadujCjaKM2hqYdCBOGw==",
      "dependencies": {
        "@types/estree": "^1.0.0",
        "@types/hast": "^3.0.0",
        "hast-util-to-estree": "^3.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/rehype-stringify": {
      "version": "10.0.1",
      "resolved": "https://registry.npmjs.org/rehype-stringify/-/rehype-stringify-10.0.1.tgz",
      "integrity": "sha512-k9ecfXHmIPuFVI61B9DeLPN0qFHfawM6RsuX48hoqlaKSF61RskNjSm1lI8PhBEM0MRdLxVVm4WmTqJQccH9mA==",
      "dependencies": {
        "@types/hast": "^3.0.0",
        "hast-util-to-html": "^9.0.0",
        "unified": "^11.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/relateurl": {
      "version": "0.2.7",
      "resolved": "https://registry.npmjs.org/relateurl/-/relateurl-0.2.7.tgz",
      "integrity": "sha512-G08Dxvm4iDN3MLM0EsP62EDV9IuhXPR6blNz6Utcp7zyV3tr4HVNINt6MpaRWbxoOHT3Q7YN2P+jaHX8vUbgog==",
      "engines": {
        "node": ">= 0.10"
      }
    },
    "node_modules/remark-directive": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/remark-directive/-/remark-directive-3.0.0.tgz",
      "integrity": "sha512-l1UyWJ6Eg1VPU7Hm/9tt0zKtReJQNOA4+iDMAxTyZNWnJnFlbS/7zhiel/rogTLQ2vMYwDzSJa4BiVNqGlqIMA==",
      "dependencies": {
        "@types/mdast": "^4.0.0",
        "mdast-util-directive": "^3.0.0",
        "micromark-extension-directive": "^3.0.0",
        "unified": "^11.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/remark-gfm": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/remark-gfm/-/remark-gfm-4.0.0.tgz",
      "integrity": "sha512-U92vJgBPkbw4Zfu/IiW2oTZLSL3Zpv+uI7My2eq8JxKgqraFdU8YUGicEJCEgSbeaG+QDFqIcwwfMTOEelPxuA==",
      "dependencies": {
        "@types/mdast": "^4.0.0",
        "mdast-util-gfm": "^3.0.0",
        "micromark-extension-gfm": "^3.0.0",
        "remark-parse": "^11.0.0",
        "remark-stringify": "^11.0.0",
        "unified": "^11.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/remark-mdx": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/remark-mdx/-/remark-mdx-3.1.0.tgz",
      "integrity": "sha512-Ngl/H3YXyBV9RcRNdlYsZujAmhsxwzxpDzpDEhFBVAGthS4GDgnctpDjgFl/ULx5UEDzqtW1cyBSNKqYYrqLBA==",
      "dependencies": {
        "mdast-util-mdx": "^3.0.0",
        "micromark-extension-mdxjs": "^3.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/remark-parse": {
      "version": "11.0.0",
      "resolved": "https://registry.npmjs.org/remark-parse/-/remark-parse-11.0.0.tgz",
      "integrity": "sha512-FCxlKLNGknS5ba/1lmpYijMUzX2esxW5xQqjWxw2eHFfS2MSdaHVINFmhjo+qN1WhZhNimq0dZATN9pH0IDrpA==",
      "dependencies": {
        "@types/mdast": "^4.0.0",
        "mdast-util-from-markdown": "^2.0.0",
        "micromark-util-types": "^2.0.0",
        "unified": "^11.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/remark-rehype": {
      "version": "11.1.1",
      "resolved": "https://registry.npmjs.org/remark-rehype/-/remark-rehype-11.1.1.tgz",
      "integrity": "sha512-g/osARvjkBXb6Wo0XvAeXQohVta8i84ACbenPpoSsxTOQH/Ae0/RGP4WZgnMH5pMLpsj4FG7OHmcIcXxpza8eQ==",
      "dependencies": {
        "@types/hast": "^3.0.0",
        "@types/mdast": "^4.0.0",
        "mdast-util-to-hast": "^13.0.0",
        "unified": "^11.0.0",
        "vfile": "^6.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/remark-smartypants": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/remark-smartypants/-/remark-smartypants-3.0.2.tgz",
      "integrity": "sha512-ILTWeOriIluwEvPjv67v7Blgrcx+LZOkAUVtKI3putuhlZm84FnqDORNXPPm+HY3NdZOMhyDwZ1E+eZB/Df5dA==",
      "dependencies": {
        "retext": "^9.0.0",
        "retext-smartypants": "^6.0.0",
        "unified": "^11.0.4",
        "unist-util-visit": "^5.0.0"
      },
      "engines": {
        "node": ">=16.0.0"
      }
    },
    "node_modules/remark-stringify": {
      "version": "11.0.0",
      "resolved": "https://registry.npmjs.org/remark-stringify/-/remark-stringify-11.0.0.tgz",
      "integrity": "sha512-1OSmLd3awB/t8qdoEOMazZkNsfVTeY4fTsgzcQFdXNq8ToTN4ZGwrMnlda4K6smTFKD+GRV6O48i6Z4iKgPPpw==",
      "dependencies": {
        "@types/mdast": "^4.0.0",
        "mdast-util-to-markdown": "^2.0.0",
        "unified": "^11.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/request-light": {
      "version": "0.7.0",
      "resolved": "https://registry.npmjs.org/request-light/-/request-light-0.7.0.tgz",
      "integrity": "sha512-lMbBMrDoxgsyO+yB3sDcrDuX85yYt7sS8BfQd11jtbW/z5ZWgLZRcEGLsLoYw7I0WSUGQBs8CC8ScIxkTX1+6Q=="
    },
    "node_modules/require-directory": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/require-directory/-/require-directory-2.1.1.tgz",
      "integrity": "sha512-fGxEI7+wsG9xrvdjsrlmL22OMTTiHRwAMroiEeMgq8gzoLC/PQr7RsRDSTLUg/bZAZtF+TVIkHc6/4RIKrui+Q==",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/require-from-string": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/require-from-string/-/require-from-string-2.0.2.tgz",
      "integrity": "sha512-Xf0nWe6RseziFMu+Ap9biiUbmplq6S9/p+7w7YXP/JBHhrUDDUhwa+vANyubuqfZWTveU//DYVGsDG7RKL/vEw==",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/resolve": {
      "version": "1.22.8",
      "resolved": "https://registry.npmjs.org/resolve/-/resolve-1.22.8.tgz",
      "integrity": "sha512-oKWePCxqpd6FlLvGV1VU0x7bkPmmCNolxzjMf4NczoDnQcIWrAF+cPtZn5i6n+RfD2d9i0tzpKnG6Yk168yIyw==",
      "dependencies": {
        "is-core-module": "^2.13.0",
        "path-parse": "^1.0.7",
        "supports-preserve-symlinks-flag": "^1.0.0"
      },
      "bin": {
        "resolve": "bin/resolve"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/restore-cursor": {
      "version": "5.1.0",
      "resolved": "https://registry.npmjs.org/restore-cursor/-/restore-cursor-5.1.0.tgz",
      "integrity": "sha512-oMA2dcrw6u0YfxJQXm342bFKX/E4sG9rbTzO9ptUcR/e8A33cHuvStiYOwH7fszkZlZ1z/ta9AAoPk2F4qIOHA==",
      "dependencies": {
        "onetime": "^7.0.0",
        "signal-exit": "^4.1.0"
      },
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/retext": {
      "version": "9.0.0",
      "resolved": "https://registry.npmjs.org/retext/-/retext-9.0.0.tgz",
      "integrity": "sha512-sbMDcpHCNjvlheSgMfEcVrZko3cDzdbe1x/e7G66dFp0Ff7Mldvi2uv6JkJQzdRcvLYE8CA8Oe8siQx8ZOgTcA==",
      "dependencies": {
        "@types/nlcst": "^2.0.0",
        "retext-latin": "^4.0.0",
        "retext-stringify": "^4.0.0",
        "unified": "^11.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/retext-latin": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/retext-latin/-/retext-latin-4.0.0.tgz",
      "integrity": "sha512-hv9woG7Fy0M9IlRQloq/N6atV82NxLGveq+3H2WOi79dtIYWN8OaxogDm77f8YnVXJL2VD3bbqowu5E3EMhBYA==",
      "dependencies": {
        "@types/nlcst": "^2.0.0",
        "parse-latin": "^7.0.0",
        "unified": "^11.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/retext-smartypants": {
      "version": "6.2.0",
      "resolved": "https://registry.npmjs.org/retext-smartypants/-/retext-smartypants-6.2.0.tgz",
      "integrity": "sha512-kk0jOU7+zGv//kfjXEBjdIryL1Acl4i9XNkHxtM7Tm5lFiCog576fjNC9hjoR7LTKQ0DsPWy09JummSsH1uqfQ==",
      "dependencies": {
        "@types/nlcst": "^2.0.0",
        "nlcst-to-string": "^4.0.0",
        "unist-util-visit": "^5.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/retext-stringify": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/retext-stringify/-/retext-stringify-4.0.0.tgz",
      "integrity": "sha512-rtfN/0o8kL1e+78+uxPTqu1Klt0yPzKuQ2BfWwwfgIUSayyzxpM1PJzkKt4V8803uB9qSy32MvI7Xep9khTpiA==",
      "dependencies": {
        "@types/nlcst": "^2.0.0",
        "nlcst-to-string": "^4.0.0",
        "unified": "^11.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/reusify": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/reusify/-/reusify-1.0.4.tgz",
      "integrity": "sha512-U9nH88a3fc/ekCF1l0/UP1IosiuIjyTh7hBvXVMHYgVcfGvt897Xguj2UOLDeI5BG2m7/uwyaLVT6fbtCwTyzw==",
      "engines": {
        "iojs": ">=1.0.0",
        "node": ">=0.10.0"
      }
    },
    "node_modules/rimraf": {
      "version": "6.0.1",
      "resolved": "https://registry.npmjs.org/rimraf/-/rimraf-6.0.1.tgz",
      "integrity": "sha512-9dkvaxAsk/xNXSJzMgFqqMCuFgt2+KsOFek3TMLfo8NCPfWpBmqwyNn5Y+NX56QUYfCtsyhF3ayiboEoUmJk/A==",
      "dependencies": {
        "glob": "^11.0.0",
        "package-json-from-dist": "^1.0.0"
      },
      "bin": {
        "rimraf": "dist/esm/bin.mjs"
      },
      "engines": {
        "node": "20 || >=22"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/rollup": {
      "version": "4.27.3",
      "resolved": "https://registry.npmjs.org/rollup/-/rollup-4.27.3.tgz",
      "integrity": "sha512-SLsCOnlmGt9VoZ9Ek8yBK8tAdmPHeppkw+Xa7yDlCEhDTvwYei03JlWo1fdc7YTfLZ4tD8riJCUyAgTbszk1fQ==",
      "dependencies": {
        "@types/estree": "1.0.6"
      },
      "bin": {
        "rollup": "dist/bin/rollup"
      },
      "engines": {
        "node": ">=18.0.0",
        "npm": ">=8.0.0"
      },
      "optionalDependencies": {
        "@rollup/rollup-android-arm-eabi": "4.27.3",
        "@rollup/rollup-android-arm64": "4.27.3",
        "@rollup/rollup-darwin-arm64": "4.27.3",
        "@rollup/rollup-darwin-x64": "4.27.3",
        "@rollup/rollup-freebsd-arm64": "4.27.3",
        "@rollup/rollup-freebsd-x64": "4.27.3",
        "@rollup/rollup-linux-arm-gnueabihf": "4.27.3",
        "@rollup/rollup-linux-arm-musleabihf": "4.27.3",
        "@rollup/rollup-linux-arm64-gnu": "4.27.3",
        "@rollup/rollup-linux-arm64-musl": "4.27.3",
        "@rollup/rollup-linux-powerpc64le-gnu": "4.27.3",
        "@rollup/rollup-linux-riscv64-gnu": "4.27.3",
        "@rollup/rollup-linux-s390x-gnu": "4.27.3",
        "@rollup/rollup-linux-x64-gnu": "4.27.3",
        "@rollup/rollup-linux-x64-musl": "4.27.3",
        "@rollup/rollup-win32-arm64-msvc": "4.27.3",
        "@rollup/rollup-win32-ia32-msvc": "4.27.3",
        "@rollup/rollup-win32-x64-msvc": "4.27.3",
        "fsevents": "~2.3.2"
      }
    },
    "node_modules/run-parallel": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/run-parallel/-/run-parallel-1.2.0.tgz",
      "integrity": "sha512-5l4VyZR86LZ/lDxZTR6jqL8AFE2S0IFLMP26AbjsLVADxHdhB/c0GUsH+y39UfCi3dzz8OlQuPmnaJOMoDHQBA==",
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/feross"
        },
        {
          "type": "patreon",
          "url": "https://www.patreon.com/feross"
        },
        {
          "type": "consulting",
          "url": "https://feross.org/support"
        }
      ],
      "dependencies": {
        "queue-microtask": "^1.2.2"
      }
    },
    "node_modules/s.color": {
      "version": "0.0.15",
      "resolved": "https://registry.npmjs.org/s.color/-/s.color-0.0.15.tgz",
      "integrity": "sha512-AUNrbEUHeKY8XsYr/DYpl+qk5+aM+DChopnWOPEzn8YKzOhv4l2zH6LzZms3tOZP3wwdOyc0RmTciyi46HLIuA==",
      "devOptional": true
    },
    "node_modules/sass-formatter": {
      "version": "0.7.9",
      "resolved": "https://registry.npmjs.org/sass-formatter/-/sass-formatter-0.7.9.tgz",
      "integrity": "sha512-CWZ8XiSim+fJVG0cFLStwDvft1VI7uvXdCNJYXhDvowiv+DsbD1nXLiQ4zrE5UBvj5DWZJ93cwN0NX5PMsr1Pw==",
      "devOptional": true,
      "dependencies": {
        "suf-log": "^2.5.3"
      }
    },
    "node_modules/sax": {
      "version": "1.4.1",
      "resolved": "https://registry.npmjs.org/sax/-/sax-1.4.1.tgz",
      "integrity": "sha512-+aWOz7yVScEGoKNd4PA10LZ8sk0A/z5+nXQG5giUO5rprX9jgYsTdov9qCchZiPIZezbZH+jRut8nPodFAX4Jg=="
    },
    "node_modules/section-matter": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/section-matter/-/section-matter-1.0.0.tgz",
      "integrity": "sha512-vfD3pmTzGpufjScBh50YHKzEu2lxBWhVEHsNGoEXmCmn2hKGfeNLYMzCJpe8cD7gqX7TJluOVpBkAequ6dgMmA==",
      "dependencies": {
        "extend-shallow": "^2.0.1",
        "kind-of": "^6.0.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/select": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/select/-/select-1.1.2.tgz",
      "integrity": "sha512-OwpTSOfy6xSs1+pwcNrv0RBMOzI39Lp3qQKUTPVVPRjCdNa5JH/oPRiqsesIskK8TVgmRiHwO4KXlV2Li9dANA=="
    },
    "node_modules/semver": {
      "version": "7.6.3",
      "resolved": "https://registry.npmjs.org/semver/-/semver-7.6.3.tgz",
      "integrity": "sha512-oVekP1cKtI+CTDvHWYFUcMtsK/00wmAEfyqKfNdARm8u1wNVhSgaX7A8d4UuIlUI5e84iEwOhs7ZPYRmzU9U6A==",
      "bin": {
        "semver": "bin/semver.js"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/sharp": {
      "version": "0.33.5",
      "resolved": "https://registry.npmjs.org/sharp/-/sharp-0.33.5.tgz",
      "integrity": "sha512-haPVm1EkS9pgvHrQ/F3Xy+hgcuMV0Wm9vfIBSiwZ05k+xgb0PkBQpGsAA/oWdDobNaZTH5ppvHtzCFbnSEwHVw==",
      "hasInstallScript": true,
      "dependencies": {
        "color": "^4.2.3",
        "detect-libc": "^2.0.3",
        "semver": "^7.6.3"
      },
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-darwin-arm64": "0.33.5",
        "@img/sharp-darwin-x64": "0.33.5",
        "@img/sharp-libvips-darwin-arm64": "1.0.4",
        "@img/sharp-libvips-darwin-x64": "1.0.4",
        "@img/sharp-libvips-linux-arm": "1.0.5",
        "@img/sharp-libvips-linux-arm64": "1.0.4",
        "@img/sharp-libvips-linux-s390x": "1.0.4",
        "@img/sharp-libvips-linux-x64": "1.0.4",
        "@img/sharp-libvips-linuxmusl-arm64": "1.0.4",
        "@img/sharp-libvips-linuxmusl-x64": "1.0.4",
        "@img/sharp-linux-arm": "0.33.5",
        "@img/sharp-linux-arm64": "0.33.5",
        "@img/sharp-linux-s390x": "0.33.5",
        "@img/sharp-linux-x64": "0.33.5",
        "@img/sharp-linuxmusl-arm64": "0.33.5",
        "@img/sharp-linuxmusl-x64": "0.33.5",
        "@img/sharp-wasm32": "0.33.5",
        "@img/sharp-win32-ia32": "0.33.5",
        "@img/sharp-win32-x64": "0.33.5"
      }
    },
    "node_modules/sharp-ico": {
      "version": "0.1.5",
      "resolved": "https://registry.npmjs.org/sharp-ico/-/sharp-ico-0.1.5.tgz",
      "integrity": "sha512-a3jODQl82NPp1d5OYb0wY+oFaPk7AvyxipIowCHk7pBsZCWgbe0yAkU2OOXdoH0ENyANhyOQbs9xkAiRHcF02Q==",
      "dependencies": {
        "decode-ico": "*",
        "ico-endec": "*",
        "sharp": "*"
      }
    },
    "node_modules/shebang-command": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/shebang-command/-/shebang-command-2.0.0.tgz",
      "integrity": "sha512-kHxr2zZpYtdmrN1qDjrrX/Z1rR1kG8Dx+gkpK1G4eXmvXswmcE1hTWBWYUzlraYw1/yZp6YuDY77YtvbN0dmDA==",
      "dependencies": {
        "shebang-regex": "^3.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/shebang-regex": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/shebang-regex/-/shebang-regex-3.0.0.tgz",
      "integrity": "sha512-7++dFhtcx3353uBaq8DDR4NuxBetBzC7ZQOhmTQInHEd6bSrXdiEyzCvG07Z44UYdLShWUyXt5M/yhz8ekcb1A==",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/shiki": {
      "version": "1.23.1",
      "resolved": "https://registry.npmjs.org/shiki/-/shiki-1.23.1.tgz",
      "integrity": "sha512-8kxV9TH4pXgdKGxNOkrSMydn1Xf6It8lsle0fiqxf7a1149K1WGtdOu3Zb91T5r1JpvRPxqxU3C2XdZZXQnrig==",
      "dependencies": {
        "@shikijs/core": "1.23.1",
        "@shikijs/engine-javascript": "1.23.1",
        "@shikijs/engine-oniguruma": "1.23.1",
        "@shikijs/types": "1.23.1",
        "@shikijs/vscode-textmate": "^9.3.0",
        "@types/hast": "^3.0.4"
      }
    },
    "node_modules/signal-exit": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/signal-exit/-/signal-exit-4.1.0.tgz",
      "integrity": "sha512-bzyZ1e88w9O1iNJbKnOlvYTrWPDl46O1bG0D3XInv+9tkPrxrN8jUUTiFlDkkmKWgn1M6CfIA13SuGqOa9Korw==",
      "engines": {
        "node": ">=14"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/simple-swizzle": {
      "version": "0.2.2",
      "resolved": "https://registry.npmjs.org/simple-swizzle/-/simple-swizzle-0.2.2.tgz",
      "integrity": "sha512-JA//kQgZtbuY83m+xT+tXJkmJncGMTFT+C+g2h2R9uxkYIrE2yy9sgmcLhCnw57/WSD+Eh3J97FPEDFnbXnDUg==",
      "dependencies": {
        "is-arrayish": "^0.3.1"
      }
    },
    "node_modules/sisteransi": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/sisteransi/-/sisteransi-1.0.5.tgz",
      "integrity": "sha512-bLGGlR1QxBcynn2d5YmDX4MGjlZvy2MRBDRNHLJ8VI6l6+9FUiyTFNJ0IveOSP0bcXgVDPRcfGqA0pjaqUpfVg=="
    },
    "node_modules/sitemap": {
      "version": "8.0.0",
      "resolved": "https://registry.npmjs.org/sitemap/-/sitemap-8.0.0.tgz",
      "integrity": "sha512-+AbdxhM9kJsHtruUF39bwS/B0Fytw6Fr1o4ZAIAEqA6cke2xcoO2GleBw9Zw7nRzILVEgz7zBM5GiTJjie1G9A==",
      "dependencies": {
        "@types/node": "^17.0.5",
        "@types/sax": "^1.2.1",
        "arg": "^5.0.0",
        "sax": "^1.2.4"
      },
      "bin": {
        "sitemap": "dist/cli.js"
      },
      "engines": {
        "node": ">=14.0.0",
        "npm": ">=6.0.0"
      }
    },
    "node_modules/sitemap/node_modules/@types/node": {
      "version": "17.0.45",
      "resolved": "https://registry.npmjs.org/@types/node/-/node-17.0.45.tgz",
      "integrity": "sha512-w+tIMs3rq2afQdsPJlODhoUEKzFP1ayaoyl1CcnwtIlsVe7K7bA1NGm4s3PraqTLlXnbIN84zuBlxBWo1u9BLw=="
    },
    "node_modules/slash": {
      "version": "5.1.0",
      "resolved": "https://registry.npmjs.org/slash/-/slash-5.1.0.tgz",
      "integrity": "sha512-ZA6oR3T/pEyuqwMgAKT0/hAv8oAXckzbkmR0UkUosQ+Mc4RxGoJkRmwHgHufaenlyAgE1Mxgpdcrf75y6XcnDg==",
      "engines": {
        "node": ">=14.16"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/source-map": {
      "version": "0.7.4",
      "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.7.4.tgz",
      "integrity": "sha512-l3BikUxvPOcn5E74dZiq5BGsTb5yEwhaTSzccU6t4sDOH8NWJCstKO5QT2CvtFoK6F0saL7p9xHAqHOlCPJygA==",
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/source-map-js": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/source-map-js/-/source-map-js-1.2.1.tgz",
      "integrity": "sha512-UXWMKhLOwVKb728IUtQPXxfYU+usdybtUrK/8uGE8CQMvrhOpwvzDBwj0QhSL7MQc7vIsISBG8VQ8+IDQxpfQA==",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/source-map-support": {
      "version": "0.5.21",
      "resolved": "https://registry.npmjs.org/source-map-support/-/source-map-support-0.5.21.tgz",
      "integrity": "sha512-uBHU3L3czsIyYXKX88fdrGovxdSCoTGDRZ6SYXtSRxLZUzHg5P/66Ht6uoUlHu9EZod+inXhKo3qQgwXUT/y1w==",
      "dependencies": {
        "buffer-from": "^1.0.0",
        "source-map": "^0.6.0"
      }
    },
    "node_modules/source-map-support/node_modules/source-map": {
      "version": "0.6.1",
      "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz",
      "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g==",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/space-separated-tokens": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/space-separated-tokens/-/space-separated-tokens-2.0.2.tgz",
      "integrity": "sha512-PEGlAwrG8yXGXRjW32fGbg66JAlOAwbObuqVoJpv/mRgoWDQfgH1wDPvtzWyUSNAXBGSk8h755YDbbcEy3SH2Q==",
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/wooorm"
      }
    },
    "node_modules/sprintf-js": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/sprintf-js/-/sprintf-js-1.0.3.tgz",
      "integrity": "sha512-D9cPgkvLlV3t3IzL0D0YLvGA9Ahk4PcvVwUbN0dSGr1aP0Nrt4AEnTUbuGvquEC0mA64Gqt1fzirlRs5ibXx8g=="
    },
    "node_modules/stdin-discarder": {
      "version": "0.2.2",
      "resolved": "https://registry.npmjs.org/stdin-discarder/-/stdin-discarder-0.2.2.tgz",
      "integrity": "sha512-UhDfHmA92YAlNnCfhmq0VeNL5bDbiZGg7sZ2IvPsXubGkiNa9EC+tUTsjBRsYUAz87btI6/1wf4XoVvQ3uRnmQ==",
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/stream-replace-string": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/stream-replace-string/-/stream-replace-string-2.0.0.tgz",
      "integrity": "sha512-TlnjJ1C0QrmxRNrON00JvaFFlNh5TTG00APw23j74ET7gkQpTASi6/L2fuiav8pzK715HXtUeClpBTw2NPSn6w=="
    },
    "node_modules/string-width": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/string-width/-/string-width-7.2.0.tgz",
      "integrity": "sha512-tsaTIkKW9b4N+AEj+SVA+WhJzV7/zMhcSu78mLKWSk7cXMOSHsBKFWUs0fWwq8QyK3MgJBQRX6Gbi4kYbdvGkQ==",
      "dependencies": {
        "emoji-regex": "^10.3.0",
        "get-east-asian-width": "^1.0.0",
        "strip-ansi": "^7.1.0"
      },
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/string-width-cjs": {
      "name": "string-width",
      "version": "4.2.3",
      "resolved": "https://registry.npmjs.org/string-width/-/string-width-4.2.3.tgz",
      "integrity": "sha512-wKyQRQpjJ0sIp62ErSZdGsjMJWsap5oRNihHhu6G7JVO/9jIB6UyevL+tXuOqrng8j/cxKTWyWUwvSTriiZz/g==",
      "dependencies": {
        "emoji-regex": "^8.0.0",
        "is-fullwidth-code-point": "^3.0.0",
        "strip-ansi": "^6.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/string-width-cjs/node_modules/ansi-regex": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-5.0.1.tgz",
      "integrity": "sha512-quJQXlTSUGL2LH9SUXo8VwsY4soanhgo6LNSm84E1LBcE8s3O0wpdiRzyR9z/ZZJMlMWv37qOOb9pdJlMUEKFQ==",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/string-width-cjs/node_modules/emoji-regex": {
      "version": "8.0.0",
      "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-8.0.0.tgz",
      "integrity": "sha512-MSjYzcWNOA0ewAHpz0MxpYFvwg6yjy1NG3xteoqz644VCo/RPgnr1/GGt+ic3iJTzQ8Eu3TdM14SawnVUmGE6A=="
    },
    "node_modules/string-width-cjs/node_modules/strip-ansi": {
      "version": "6.0.1",
      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.1.tgz",
      "integrity": "sha512-Y38VPSHcqkFrCpFnQ9vuSXmquuv5oXOKpGeT6aGrr3o3Gc9AlVa6JBfUSOCnbxGGZF+/0ooI7KrPuUSztUdU5A==",
      "dependencies": {
        "ansi-regex": "^5.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/stringify-entities": {
      "version": "4.0.4",
      "resolved": "https://registry.npmjs.org/stringify-entities/-/stringify-entities-4.0.4.tgz",
      "integrity": "sha512-IwfBptatlO+QCJUo19AqvrPNqlVMpW9YEL2LIVY+Rpv2qsjCGxaDLNRgeGsQWJhfItebuJhsGSLjaBbNSQ+ieg==",
      "dependencies": {
        "character-entities-html4": "^2.0.0",
        "character-entities-legacy": "^3.0.0"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/wooorm"
      }
    },
    "node_modules/strip-ansi": {
      "version": "7.1.0",
      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-7.1.0.tgz",
      "integrity": "sha512-iq6eVVI64nQQTRYq2KtEg2d2uU7LElhTJwsH4YzIHZshxlgZms/wIc4VoDQTlG/IvVIrBKG06CrZnp0qv7hkcQ==",
      "dependencies": {
        "ansi-regex": "^6.0.1"
      },
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/chalk/strip-ansi?sponsor=1"
      }
    },
    "node_modules/strip-ansi-cjs": {
      "name": "strip-ansi",
      "version": "6.0.1",
      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.1.tgz",
      "integrity": "sha512-Y38VPSHcqkFrCpFnQ9vuSXmquuv5oXOKpGeT6aGrr3o3Gc9AlVa6JBfUSOCnbxGGZF+/0ooI7KrPuUSztUdU5A==",
      "dependencies": {
        "ansi-regex": "^5.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/strip-ansi-cjs/node_modules/ansi-regex": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-5.0.1.tgz",
      "integrity": "sha512-quJQXlTSUGL2LH9SUXo8VwsY4soanhgo6LNSm84E1LBcE8s3O0wpdiRzyR9z/ZZJMlMWv37qOOb9pdJlMUEKFQ==",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/strip-bom": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/strip-bom/-/strip-bom-3.0.0.tgz",
      "integrity": "sha512-vavAMRXOgBVNF6nyEEmL3DBK19iRpDcoIwW+swQ+CbGiu7lju6t+JklA1MHweoWtadgt4ISVUsXLyDq34ddcwA==",
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/strip-bom-string": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/strip-bom-string/-/strip-bom-string-1.0.0.tgz",
      "integrity": "sha512-uCC2VHvQRYu+lMh4My/sFNmF2klFymLX1wHJeXnbEJERpV/ZsVuonzerjfrGpIGF7LBVa1O7i9kjiWvJiFck8g==",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/style-to-object": {
      "version": "1.0.8",
      "resolved": "https://registry.npmjs.org/style-to-object/-/style-to-object-1.0.8.tgz",
      "integrity": "sha512-xT47I/Eo0rwJmaXC4oilDGDWLohVhR6o/xAQcPQN8q6QBuZVL8qMYL85kLmST5cPjAorwvqIA4qXTRQoYHaL6g==",
      "dependencies": {
        "inline-style-parser": "0.2.4"
      }
    },
    "node_modules/sucrase": {
      "version": "3.35.0",
      "resolved": "https://registry.npmjs.org/sucrase/-/sucrase-3.35.0.tgz",
      "integrity": "sha512-8EbVDiu9iN/nESwxeSxDKe0dunta1GOlHufmSSXxMD2z2/tMZpDMpvXQGsc+ajGo8y2uYUmixaSRUc/QPoQ0GA==",
      "dependencies": {
        "@jridgewell/gen-mapping": "^0.3.2",
        "commander": "^4.0.0",
        "glob": "^10.3.10",
        "lines-and-columns": "^1.1.6",
        "mz": "^2.7.0",
        "pirates": "^4.0.1",
        "ts-interface-checker": "^0.1.9"
      },
      "bin": {
        "sucrase": "bin/sucrase",
        "sucrase-node": "bin/sucrase-node"
      },
      "engines": {
        "node": ">=16 || 14 >=14.17"
      }
    },
    "node_modules/sucrase/node_modules/commander": {
      "version": "4.1.1",
      "resolved": "https://registry.npmjs.org/commander/-/commander-4.1.1.tgz",
      "integrity": "sha512-NOKm8xhkzAjzFx8B2v5OAHT+u5pRQc2UCa2Vq9jYL/31o2wi9mxBA7LIFs3sV5VSC49z6pEhfbMULvShKj26WA==",
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/sucrase/node_modules/glob": {
      "version": "10.4.5",
      "resolved": "https://registry.npmjs.org/glob/-/glob-10.4.5.tgz",
      "integrity": "sha512-7Bv8RF0k6xjo7d4A/PxYLbUCfb6c+Vpd2/mB2yRDlew7Jb5hEXiCD9ibfO7wpk8i4sevK6DFny9h7EYbM3/sHg==",
      "dependencies": {
        "foreground-child": "^3.1.0",
        "jackspeak": "^3.1.2",
        "minimatch": "^9.0.4",
        "minipass": "^7.1.2",
        "package-json-from-dist": "^1.0.0",
        "path-scurry": "^1.11.1"
      },
      "bin": {
        "glob": "dist/esm/bin.mjs"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/sucrase/node_modules/jackspeak": {
      "version": "3.4.3",
      "resolved": "https://registry.npmjs.org/jackspeak/-/jackspeak-3.4.3.tgz",
      "integrity": "sha512-OGlZQpz2yfahA/Rd1Y8Cd9SIEsqvXkLVoSw/cgwhnhFMDbsQFeZYoJJ7bIZBS9BcamUW96asq/npPWugM+RQBw==",
      "dependencies": {
        "@isaacs/cliui": "^8.0.2"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      },
      "optionalDependencies": {
        "@pkgjs/parseargs": "^0.11.0"
      }
    },
    "node_modules/sucrase/node_modules/lru-cache": {
      "version": "10.4.3",
      "resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-10.4.3.tgz",
      "integrity": "sha512-JNAzZcXrCt42VGLuYz0zfAzDfAvJWW6AfYlDBQyDV5DClI2m5sAmK+OIO7s59XfsRsWHp02jAJrRadPRGTt6SQ=="
    },
    "node_modules/sucrase/node_modules/minimatch": {
      "version": "9.0.5",
      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-9.0.5.tgz",
      "integrity": "sha512-G6T0ZX48xgozx7587koeX9Ys2NYy6Gmv//P89sEte9V9whIapMNF4idKxnW2QtCcLiTWlb/wfCabAtAFWhhBow==",
      "dependencies": {
        "brace-expansion": "^2.0.1"
      },
      "engines": {
        "node": ">=16 || 14 >=14.17"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/sucrase/node_modules/path-scurry": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/path-scurry/-/path-scurry-1.11.1.tgz",
      "integrity": "sha512-Xa4Nw17FS9ApQFJ9umLiJS4orGjm7ZzwUrwamcGQuHSzDyth9boKDaycYdDcZDuqYATXw4HFXgaqWTctW/v1HA==",
      "dependencies": {
        "lru-cache": "^10.2.0",
        "minipass": "^5.0.0 || ^6.0.2 || ^7.0.0"
      },
      "engines": {
        "node": ">=16 || 14 >=14.18"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/suf-log": {
      "version": "2.5.3",
      "resolved": "https://registry.npmjs.org/suf-log/-/suf-log-2.5.3.tgz",
      "integrity": "sha512-KvC8OPjzdNOe+xQ4XWJV2whQA0aM1kGVczMQ8+dStAO6KfEB140JEVQ9dE76ONZ0/Ylf67ni4tILPJB41U0eow==",
      "devOptional": true,
      "dependencies": {
        "s.color": "0.0.15"
      }
    },
    "node_modules/supports-preserve-symlinks-flag": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/supports-preserve-symlinks-flag/-/supports-preserve-symlinks-flag-1.0.0.tgz",
      "integrity": "sha512-ot0WnXS9fgdkgIcePe6RHNk1WA8+muPa6cSjeR3V8K27q9BB1rTE3R1p7Hv0z1ZyAc8s6Vvv8DIyWf681MAt0w==",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/tailwindcss": {
      "version": "3.4.15",
      "resolved": "https://registry.npmjs.org/tailwindcss/-/tailwindcss-3.4.15.tgz",
      "integrity": "sha512-r4MeXnfBmSOuKUWmXe6h2CcyfzJCEk4F0pptO5jlnYSIViUkVmsawj80N5h2lO3gwcmSb4n3PuN+e+GC1Guylw==",
      "dependencies": {
        "@alloc/quick-lru": "^5.2.0",
        "arg": "^5.0.2",
        "chokidar": "^3.6.0",
        "didyoumean": "^1.2.2",
        "dlv": "^1.1.3",
        "fast-glob": "^3.3.2",
        "glob-parent": "^6.0.2",
        "is-glob": "^4.0.3",
        "jiti": "^1.21.6",
        "lilconfig": "^2.1.0",
        "micromatch": "^4.0.8",
        "normalize-path": "^3.0.0",
        "object-hash": "^3.0.0",
        "picocolors": "^1.1.1",
        "postcss": "^8.4.47",
        "postcss-import": "^15.1.0",
        "postcss-js": "^4.0.1",
        "postcss-load-config": "^4.0.2",
        "postcss-nested": "^6.2.0",
        "postcss-selector-parser": "^6.1.2",
        "resolve": "^1.22.8",
        "sucrase": "^3.35.0"
      },
      "bin": {
        "tailwind": "lib/cli.js",
        "tailwindcss": "lib/cli.js"
      },
      "engines": {
        "node": ">=14.0.0"
      }
    },
    "node_modules/tailwindcss/node_modules/chokidar": {
      "version": "3.6.0",
      "resolved": "https://registry.npmjs.org/chokidar/-/chokidar-3.6.0.tgz",
      "integrity": "sha512-7VT13fmjotKpGipCW9JEQAusEPE+Ei8nl6/g4FBAmIm0GOOLMua9NDDo/DWp0ZAxCr3cPq5ZpBqmPAQgDda2Pw==",
      "dependencies": {
        "anymatch": "~3.1.2",
        "braces": "~3.0.2",
        "glob-parent": "~5.1.2",
        "is-binary-path": "~2.1.0",
        "is-glob": "~4.0.1",
        "normalize-path": "~3.0.0",
        "readdirp": "~3.6.0"
      },
      "engines": {
        "node": ">= 8.10.0"
      },
      "funding": {
        "url": "https://paulmillr.com/funding/"
      },
      "optionalDependencies": {
        "fsevents": "~2.3.2"
      }
    },
    "node_modules/tailwindcss/node_modules/chokidar/node_modules/glob-parent": {
      "version": "5.1.2",
      "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-5.1.2.tgz",
      "integrity": "sha512-AOIgSQCepiJYwP3ARnGx+5VnTu2HBYdzbGP45eLw1vr3zB3vZLeyed1sC9hnbcOc9/SrMyM5RPQrkGz4aS9Zow==",
      "dependencies": {
        "is-glob": "^4.0.1"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/tailwindcss/node_modules/glob-parent": {
      "version": "6.0.2",
      "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-6.0.2.tgz",
      "integrity": "sha512-XxwI8EOhVQgWp6iDL+3b0r86f4d6AX6zSU55HfB4ydCEuXLXc5FcYeOu+nnGftS4TEju/11rt4KJPTMgbfmv4A==",
      "dependencies": {
        "is-glob": "^4.0.3"
      },
      "engines": {
        "node": ">=10.13.0"
      }
    },
    "node_modules/tailwindcss/node_modules/lilconfig": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/lilconfig/-/lilconfig-2.1.0.tgz",
      "integrity": "sha512-utWOt/GHzuUxnLKxB6dk81RoOeoNeHgbrXiuGk4yyF5qlRz+iIVWu56E2fqGHFrXz0QNUhLB/8nKqvRH66JKGQ==",
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/tailwindcss/node_modules/picomatch": {
      "version": "2.3.1",
      "resolved": "https://registry.npmjs.org/picomatch/-/picomatch-2.3.1.tgz",
      "integrity": "sha512-JU3teHTNjmE2VCGFzuY8EXzCDVwEqB2a8fsIvwaStHhAWJEeVd1o1QD80CU6+ZdEXXSLbSsuLwJjkCBWqRQUVA==",
      "engines": {
        "node": ">=8.6"
      },
      "funding": {
        "url": "https://github.com/sponsors/jonschlinkert"
      }
    },
    "node_modules/tailwindcss/node_modules/readdirp": {
      "version": "3.6.0",
      "resolved": "https://registry.npmjs.org/readdirp/-/readdirp-3.6.0.tgz",
      "integrity": "sha512-hOS089on8RduqdbhvQ5Z37A0ESjsqz6qnRcffsMU3495FuTdqSm+7bhJ29JvIOsBDEEnan5DPu9t3To9VRlMzA==",
      "dependencies": {
        "picomatch": "^2.2.1"
      },
      "engines": {
        "node": ">=8.10.0"
      }
    },
    "node_modules/terser": {
      "version": "5.36.0",
      "resolved": "https://registry.npmjs.org/terser/-/terser-5.36.0.tgz",
      "integrity": "sha512-IYV9eNMuFAV4THUspIRXkLakHnV6XO7FEdtKjf/mDyrnqUg9LnlOn6/RwRvM9SZjR4GUq8Nk8zj67FzVARr74w==",
      "dependencies": {
        "@jridgewell/source-map": "^0.3.3",
        "acorn": "^8.8.2",
        "commander": "^2.20.0",
        "source-map-support": "~0.5.20"
      },
      "bin": {
        "terser": "bin/terser"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/terser/node_modules/commander": {
      "version": "2.20.3",
      "resolved": "https://registry.npmjs.org/commander/-/commander-2.20.3.tgz",
      "integrity": "sha512-GpVkmM8vF2vQUkj2LvZmD35JxeJOLCwJ9cUkugyk2nuhbv3+mJvpLYYt+0+USMxE+oj+ey/lJEnhZw75x/OMcQ=="
    },
    "node_modules/thenify": {
      "version": "3.3.1",
      "resolved": "https://registry.npmjs.org/thenify/-/thenify-3.3.1.tgz",
      "integrity": "sha512-RVZSIV5IG10Hk3enotrhvz0T9em6cyHBLkH/YAZuKqd8hRkKhSfCGIcP2KUY0EPxndzANBmNllzWPwak+bheSw==",
      "dependencies": {
        "any-promise": "^1.0.0"
      }
    },
    "node_modules/thenify-all": {
      "version": "1.6.0",
      "resolved": "https://registry.npmjs.org/thenify-all/-/thenify-all-1.6.0.tgz",
      "integrity": "sha512-RNxQH/qI8/t3thXJDwcstUO4zeqo64+Uy/+sNVRBx4Xn2OX+OZ9oP+iJnNFqplFra2ZUVeKCSa2oVWi3T4uVmA==",
      "dependencies": {
        "thenify": ">= 3.1.0 < 4"
      },
      "engines": {
        "node": ">=0.8"
      }
    },
    "node_modules/tiny-emitter": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/tiny-emitter/-/tiny-emitter-2.1.0.tgz",
      "integrity": "sha512-NB6Dk1A9xgQPMoGqC5CVXn123gWyte215ONT5Pp5a0yt4nlEoO1ZWeCwpncaekPHXO60i47ihFnZPiRPjRMq4Q=="
    },
    "node_modules/tinyexec": {
      "version": "0.3.1",
      "resolved": "https://registry.npmjs.org/tinyexec/-/tinyexec-0.3.1.tgz",
      "integrity": "sha512-WiCJLEECkO18gwqIp6+hJg0//p23HXp4S+gGtAKu3mI2F2/sXC4FvHvXvB0zJVVaTPhx1/tOwdbRsa1sOBIKqQ=="
    },
    "node_modules/to-data-view": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/to-data-view/-/to-data-view-1.1.0.tgz",
      "integrity": "sha512-1eAdufMg6mwgmlojAx3QeMnzB/BTVp7Tbndi3U7ftcT2zCZadjxkkmLmd97zmaxWi+sgGcgWrokmpEoy0Dn0vQ=="
    },
    "node_modules/to-regex-range": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/to-regex-range/-/to-regex-range-5.0.1.tgz",
      "integrity": "sha512-65P7iz6X5yEr1cwcgvQxbbIw7Uk3gOy5dIdtZ4rDveLqhrdJP+Li/Hx6tyK0NEb+2GCyneCMJiGqrADCSNk8sQ==",
      "dependencies": {
        "is-number": "^7.0.0"
      },
      "engines": {
        "node": ">=8.0"
      }
    },
    "node_modules/trim-lines": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/trim-lines/-/trim-lines-3.0.1.tgz",
      "integrity": "sha512-kRj8B+YHZCc9kQYdWfJB2/oUl9rA99qbowYYBtr4ui4mZyAQ2JpvVBd/6U2YloATfqBhBTSMhTpgBHtU0Mf3Rg==",
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/wooorm"
      }
    },
    "node_modules/trough": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/trough/-/trough-2.2.0.tgz",
      "integrity": "sha512-tmMpK00BjZiUyVyvrBK7knerNgmgvcV/KLVyuma/SC+TQN167GrMRciANTz09+k3zW8L8t60jWO1GpfkZdjTaw==",
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/wooorm"
      }
    },
    "node_modules/ts-interface-checker": {
      "version": "0.1.13",
      "resolved": "https://registry.npmjs.org/ts-interface-checker/-/ts-interface-checker-0.1.13.tgz",
      "integrity": "sha512-Y/arvbn+rrz3JCKl9C4kVNfTfSm2/mEp5FSz5EsZSANGPSlQrpRI5M4PKF+mJnE52jOO90PnPSc3Ur3bTQw0gA=="
    },
    "node_modules/tsconfck": {
      "version": "3.1.4",
      "resolved": "https://registry.npmjs.org/tsconfck/-/tsconfck-3.1.4.tgz",
      "integrity": "sha512-kdqWFGVJqe+KGYvlSO9NIaWn9jT1Ny4oKVzAJsKii5eoE9snzTJzL4+MMVOMn+fikWGFmKEylcXL710V/kIPJQ==",
      "bin": {
        "tsconfck": "bin/tsconfck.js"
      },
      "engines": {
        "node": "^18 || >=20"
      },
      "peerDependencies": {
        "typescript": "^5.0.0"
      },
      "peerDependenciesMeta": {
        "typescript": {
          "optional": true
        }
      }
    },
    "node_modules/tslib": {
      "version": "2.8.1",
      "resolved": "https://registry.npmjs.org/tslib/-/tslib-2.8.1.tgz",
      "integrity": "sha512-oJFu94HQb+KVduSUQL7wnpmqnfmLsOA/nAh6b6EH0wCEoK0/mPeXU6c3wKDV83MkOuHPRHtSXKKU99IBazS/2w=="
    },
    "node_modules/type-fest": {
      "version": "4.27.0",
      "resolved": "https://registry.npmjs.org/type-fest/-/type-fest-4.27.0.tgz",
      "integrity": "sha512-3IMSWgP7C5KSQqmo1wjhKrwsvXAtF33jO3QY+Uy++ia7hqvgSK6iXbbg5PbDBc1P2ZbNEDgejOrN4YooXvhwCw==",
      "engines": {
        "node": ">=16"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/typesafe-path": {
      "version": "0.2.2",
      "resolved": "https://registry.npmjs.org/typesafe-path/-/typesafe-path-0.2.2.tgz",
      "integrity": "sha512-OJabfkAg1WLZSqJAJ0Z6Sdt3utnbzr/jh+NAHoyWHJe8CMSy79Gm085094M9nvTPy22KzTVn5Zq5mbapCI/hPA=="
    },
    "node_modules/typescript": {
      "version": "5.7.2",
      "resolved": "https://registry.npmjs.org/typescript/-/typescript-5.7.2.tgz",
      "integrity": "sha512-i5t66RHxDvVN40HfDd1PsEThGNnlMCMT3jMUuoh9/0TaqWevNontacunWyN02LA9/fIbEWlcHZcgTKb9QoaLfg==",
      "license": "Apache-2.0",
      "bin": {
        "tsc": "bin/tsc",
        "tsserver": "bin/tsserver"
      },
      "engines": {
        "node": ">=14.17"
      }
    },
    "node_modules/typescript-auto-import-cache": {
      "version": "0.3.5",
      "resolved": "https://registry.npmjs.org/typescript-auto-import-cache/-/typescript-auto-import-cache-0.3.5.tgz",
      "integrity": "sha512-fAIveQKsoYj55CozUiBoj4b/7WpN0i4o74wiGY5JVUEoD0XiqDk1tJqTEjgzL2/AizKQrXxyRosSebyDzBZKjw==",
      "dependencies": {
        "semver": "^7.3.8"
      }
    },
    "node_modules/undici-types": {
      "version": "6.19.8",
      "resolved": "https://registry.npmjs.org/undici-types/-/undici-types-6.19.8.tgz",
      "integrity": "sha512-ve2KP6f/JnbPBFyobGHuerC9g1FYGn/F8n1LWTwNxCEzd6IfqTwUQcNXgEtmmQ6DlRrC1hrSrBnCZPokRrDHjw=="
    },
    "node_modules/unicorn-magic": {
      "version": "0.1.0",
      "resolved": "https://registry.npmjs.org/unicorn-magic/-/unicorn-magic-0.1.0.tgz",
      "integrity": "sha512-lRfVq8fE8gz6QMBuDM6a+LO3IAzTi05H6gCVaUpir2E1Rwpo4ZUog45KpNXKC/Mn3Yb9UDuHumeFTo9iV/D9FQ==",
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/unified": {
      "version": "11.0.5",
      "resolved": "https://registry.npmjs.org/unified/-/unified-11.0.5.tgz",
      "integrity": "sha512-xKvGhPWw3k84Qjh8bI3ZeJjqnyadK+GEFtazSfZv/rKeTkTjOJho6mFqh2SM96iIcZokxiOpg78GazTSg8+KHA==",
      "dependencies": {
        "@types/unist": "^3.0.0",
        "bail": "^2.0.0",
        "devlop": "^1.0.0",
        "extend": "^3.0.0",
        "is-plain-obj": "^4.0.0",
        "trough": "^2.0.0",
        "vfile": "^6.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/unist-util-find-after": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/unist-util-find-after/-/unist-util-find-after-5.0.0.tgz",
      "integrity": "sha512-amQa0Ep2m6hE2g72AugUItjbuM8X8cGQnFoHk0pGfrFeT9GZhzN5SW8nRsiGKK7Aif4CrACPENkA6P/Lw6fHGQ==",
      "dependencies": {
        "@types/unist": "^3.0.0",
        "unist-util-is": "^6.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/unist-util-is": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/unist-util-is/-/unist-util-is-6.0.0.tgz",
      "integrity": "sha512-2qCTHimwdxLfz+YzdGfkqNlH0tLi9xjTnHddPmJwtIG9MGsdbutfTc4P+haPD7l7Cjxf/WZj+we5qfVPvvxfYw==",
      "dependencies": {
        "@types/unist": "^3.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/unist-util-modify-children": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/unist-util-modify-children/-/unist-util-modify-children-4.0.0.tgz",
      "integrity": "sha512-+tdN5fGNddvsQdIzUF3Xx82CU9sMM+fA0dLgR9vOmT0oPT2jH+P1nd5lSqfCfXAw+93NhcXNY2qqvTUtE4cQkw==",
      "dependencies": {
        "@types/unist": "^3.0.0",
        "array-iterate": "^2.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/unist-util-position": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/unist-util-position/-/unist-util-position-5.0.0.tgz",
      "integrity": "sha512-fucsC7HjXvkB5R3kTCO7kUjRdrS0BJt3M/FPxmHMBOm8JQi2BsHAHFsy27E0EolP8rp0NzXsJ+jNPyDWvOJZPA==",
      "dependencies": {
        "@types/unist": "^3.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/unist-util-position-from-estree": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/unist-util-position-from-estree/-/unist-util-position-from-estree-2.0.0.tgz",
      "integrity": "sha512-KaFVRjoqLyF6YXCbVLNad/eS4+OfPQQn2yOd7zF/h5T/CSL2v8NpN6a5TPvtbXthAGw5nG+PuTtq+DdIZr+cRQ==",
      "dependencies": {
        "@types/unist": "^3.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/unist-util-remove-position": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/unist-util-remove-position/-/unist-util-remove-position-5.0.0.tgz",
      "integrity": "sha512-Hp5Kh3wLxv0PHj9m2yZhhLt58KzPtEYKQQ4yxfYFEO7EvHwzyDYnduhHnY1mDxoqr7VUwVuHXk9RXKIiYS1N8Q==",
      "dependencies": {
        "@types/unist": "^3.0.0",
        "unist-util-visit": "^5.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/unist-util-stringify-position": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/unist-util-stringify-position/-/unist-util-stringify-position-4.0.0.tgz",
      "integrity": "sha512-0ASV06AAoKCDkS2+xw5RXJywruurpbC4JZSm7nr7MOt1ojAzvyyaO+UxZf18j8FCF6kmzCZKcAgN/yu2gm2XgQ==",
      "dependencies": {
        "@types/unist": "^3.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/unist-util-visit": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/unist-util-visit/-/unist-util-visit-5.0.0.tgz",
      "integrity": "sha512-MR04uvD+07cwl/yhVuVWAtw+3GOR/knlL55Nd/wAdblk27GCVt3lqpTivy/tkJcZoNPzTwS1Y+KMojlLDhoTzg==",
      "dependencies": {
        "@types/unist": "^3.0.0",
        "unist-util-is": "^6.0.0",
        "unist-util-visit-parents": "^6.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/unist-util-visit-children": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/unist-util-visit-children/-/unist-util-visit-children-3.0.0.tgz",
      "integrity": "sha512-RgmdTfSBOg04sdPcpTSD1jzoNBjt9a80/ZCzp5cI9n1qPzLZWF9YdvWGN2zmTumP1HWhXKdUWexjy/Wy/lJ7tA==",
      "dependencies": {
        "@types/unist": "^3.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/unist-util-visit-parents": {
      "version": "6.0.1",
      "resolved": "https://registry.npmjs.org/unist-util-visit-parents/-/unist-util-visit-parents-6.0.1.tgz",
      "integrity": "sha512-L/PqWzfTP9lzzEa6CKs0k2nARxTdZduw3zyh8d2NVBnsyvHjSX4TWse388YrrQKbvI8w20fGjGlhgT96WwKykw==",
      "dependencies": {
        "@types/unist": "^3.0.0",
        "unist-util-is": "^6.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/update-browserslist-db": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/update-browserslist-db/-/update-browserslist-db-1.1.1.tgz",
      "integrity": "sha512-R8UzCaa9Az+38REPiJ1tXlImTJXlVfgHZsglwBD/k6nj76ctsH1E3q4doGrukiLQd3sGQYu56r5+lo5r94l29A==",
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/browserslist"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/browserslist"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "dependencies": {
        "escalade": "^3.2.0",
        "picocolors": "^1.1.0"
      },
      "bin": {
        "update-browserslist-db": "cli.js"
      },
      "peerDependencies": {
        "browserslist": ">= 4.21.0"
      }
    },
    "node_modules/util-deprecate": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/util-deprecate/-/util-deprecate-1.0.2.tgz",
      "integrity": "sha512-EPD5q1uXyFxJpCrLnCc1nHnq3gOa6DZBocAIiI2TaSCA7VCJ1UJDMagCzIkXNsUYfD1daK//LTEQ8xiIbrHtcw=="
    },
    "node_modules/vfile": {
      "version": "6.0.3",
      "resolved": "https://registry.npmjs.org/vfile/-/vfile-6.0.3.tgz",
      "integrity": "sha512-KzIbH/9tXat2u30jf+smMwFCsno4wHVdNmzFyL+T/L3UGqqk6JKfVqOFOZEpZSHADH1k40ab6NUIXZq422ov3Q==",
      "dependencies": {
        "@types/unist": "^3.0.0",
        "vfile-message": "^4.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/vfile-location": {
      "version": "5.0.3",
      "resolved": "https://registry.npmjs.org/vfile-location/-/vfile-location-5.0.3.tgz",
      "integrity": "sha512-5yXvWDEgqeiYiBe1lbxYF7UMAIm/IcopxMHrMQDq3nvKcjPKIhZklUKL+AE7J7uApI4kwe2snsK+eI6UTj9EHg==",
      "dependencies": {
        "@types/unist": "^3.0.0",
        "vfile": "^6.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/vfile-message": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/vfile-message/-/vfile-message-4.0.2.tgz",
      "integrity": "sha512-jRDZ1IMLttGj41KcZvlrYAaI3CfqpLpfpf+Mfig13viT6NKvRzWZ+lXz0Y5D60w6uJIBAOGq9mSHf0gktF0duw==",
      "dependencies": {
        "@types/unist": "^3.0.0",
        "unist-util-stringify-position": "^4.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/unified"
      }
    },
    "node_modules/vite": {
      "version": "5.4.11",
      "resolved": "https://registry.npmjs.org/vite/-/vite-5.4.11.tgz",
      "integrity": "sha512-c7jFQRklXua0mTzneGW9QVyxFjUgwcihC4bXEtujIo2ouWCe1Ajt/amn2PCxYnhYfd5k09JX3SB7OYWFKYqj8Q==",
      "dependencies": {
        "esbuild": "^0.21.3",
        "postcss": "^8.4.43",
        "rollup": "^4.20.0"
      },
      "bin": {
        "vite": "bin/vite.js"
      },
      "engines": {
        "node": "^18.0.0 || >=20.0.0"
      },
      "funding": {
        "url": "https://github.com/vitejs/vite?sponsor=1"
      },
      "optionalDependencies": {
        "fsevents": "~2.3.3"
      },
      "peerDependencies": {
        "@types/node": "^18.0.0 || >=20.0.0",
        "less": "*",
        "lightningcss": "^1.21.0",
        "sass": "*",
        "sass-embedded": "*",
        "stylus": "*",
        "sugarss": "*",
        "terser": "^5.4.0"
      },
      "peerDependenciesMeta": {
        "@types/node": {
          "optional": true
        },
        "less": {
          "optional": true
        },
        "lightningcss": {
          "optional": true
        },
        "sass": {
          "optional": true
        },
        "sass-embedded": {
          "optional": true
        },
        "stylus": {
          "optional": true
        },
        "sugarss": {
          "optional": true
        },
        "terser": {
          "optional": true
        }
      }
    },
    "node_modules/vitefu": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/vitefu/-/vitefu-1.0.3.tgz",
      "integrity": "sha512-iKKfOMBHob2WxEJbqbJjHAkmYgvFDPhuqrO82om83S8RLk+17FtyMBfcyeH8GqD0ihShtkMW/zzJgiA51hCNCQ==",
      "workspaces": [
        "tests/deps/*",
        "tests/projects/*"
      ],
      "peerDependencies": {
        "vite": "^3.0.0 || ^4.0.0 || ^5.0.0 || ^6.0.0-beta.0"
      },
      "peerDependenciesMeta": {
        "vite": {
          "optional": true
        }
      }
    },
    "node_modules/volar-service-css": {
      "version": "0.0.62",
      "resolved": "https://registry.npmjs.org/volar-service-css/-/volar-service-css-0.0.62.tgz",
      "integrity": "sha512-JwNyKsH3F8PuzZYuqPf+2e+4CTU8YoyUHEHVnoXNlrLe7wy9U3biomZ56llN69Ris7TTy/+DEX41yVxQpM4qvg==",
      "dependencies": {
        "vscode-css-languageservice": "^6.3.0",
        "vscode-languageserver-textdocument": "^1.0.11",
        "vscode-uri": "^3.0.8"
      },
      "peerDependencies": {
        "@volar/language-service": "~2.4.0"
      },
      "peerDependenciesMeta": {
        "@volar/language-service": {
          "optional": true
        }
      }
    },
    "node_modules/volar-service-emmet": {
      "version": "0.0.62",
      "resolved": "https://registry.npmjs.org/volar-service-emmet/-/volar-service-emmet-0.0.62.tgz",
      "integrity": "sha512-U4dxWDBWz7Pi4plpbXf4J4Z/ss6kBO3TYrACxWNsE29abu75QzVS0paxDDhI6bhqpbDFXlpsDhZ9aXVFpnfGRQ==",
      "dependencies": {
        "@emmetio/css-parser": "^0.4.0",
        "@emmetio/html-matcher": "^1.3.0",
        "@vscode/emmet-helper": "^2.9.3",
        "vscode-uri": "^3.0.8"
      },
      "peerDependencies": {
        "@volar/language-service": "~2.4.0"
      },
      "peerDependenciesMeta": {
        "@volar/language-service": {
          "optional": true
        }
      }
    },
    "node_modules/volar-service-html": {
      "version": "0.0.62",
      "resolved": "https://registry.npmjs.org/volar-service-html/-/volar-service-html-0.0.62.tgz",
      "integrity": "sha512-Zw01aJsZRh4GTGUjveyfEzEqpULQUdQH79KNEiKVYHZyuGtdBRYCHlrus1sueSNMxwwkuF5WnOHfvBzafs8yyQ==",
      "dependencies": {
        "vscode-html-languageservice": "^5.3.0",
        "vscode-languageserver-textdocument": "^1.0.11",
        "vscode-uri": "^3.0.8"
      },
      "peerDependencies": {
        "@volar/language-service": "~2.4.0"
      },
      "peerDependenciesMeta": {
        "@volar/language-service": {
          "optional": true
        }
      }
    },
    "node_modules/volar-service-prettier": {
      "version": "0.0.62",
      "resolved": "https://registry.npmjs.org/volar-service-prettier/-/volar-service-prettier-0.0.62.tgz",
      "integrity": "sha512-h2yk1RqRTE+vkYZaI9KYuwpDfOQRrTEMvoHol0yW4GFKc75wWQRrb5n/5abDrzMPrkQbSip8JH2AXbvrRtYh4w==",
      "dependencies": {
        "vscode-uri": "^3.0.8"
      },
      "peerDependencies": {
        "@volar/language-service": "~2.4.0",
        "prettier": "^2.2 || ^3.0"
      },
      "peerDependenciesMeta": {
        "@volar/language-service": {
          "optional": true
        },
        "prettier": {
          "optional": true
        }
      }
    },
    "node_modules/volar-service-typescript": {
      "version": "0.0.62",
      "resolved": "https://registry.npmjs.org/volar-service-typescript/-/volar-service-typescript-0.0.62.tgz",
      "integrity": "sha512-p7MPi71q7KOsH0eAbZwPBiKPp9B2+qrdHAd6VY5oTo9BUXatsOAdakTm9Yf0DUj6uWBAaOT01BSeVOPwucMV1g==",
      "dependencies": {
        "path-browserify": "^1.0.1",
        "semver": "^7.6.2",
        "typescript-auto-import-cache": "^0.3.3",
        "vscode-languageserver-textdocument": "^1.0.11",
        "vscode-nls": "^5.2.0",
        "vscode-uri": "^3.0.8"
      },
      "peerDependencies": {
        "@volar/language-service": "~2.4.0"
      },
      "peerDependenciesMeta": {
        "@volar/language-service": {
          "optional": true
        }
      }
    },
    "node_modules/volar-service-typescript-twoslash-queries": {
      "version": "0.0.62",
      "resolved": "https://registry.npmjs.org/volar-service-typescript-twoslash-queries/-/volar-service-typescript-twoslash-queries-0.0.62.tgz",
      "integrity": "sha512-KxFt4zydyJYYI0kFAcWPTh4u0Ha36TASPZkAnNY784GtgajerUqM80nX/W1d0wVhmcOFfAxkVsf/Ed+tiYU7ng==",
      "dependencies": {
        "vscode-uri": "^3.0.8"
      },
      "peerDependencies": {
        "@volar/language-service": "~2.4.0"
      },
      "peerDependenciesMeta": {
        "@volar/language-service": {
          "optional": true
        }
      }
    },
    "node_modules/volar-service-yaml": {
      "version": "0.0.62",
      "resolved": "https://registry.npmjs.org/volar-service-yaml/-/volar-service-yaml-0.0.62.tgz",
      "integrity": "sha512-k7gvv7sk3wa+nGll3MaSKyjwQsJjIGCHFjVkl3wjaSP2nouKyn9aokGmqjrl39mi88Oy49giog2GkZH526wjig==",
      "dependencies": {
        "vscode-uri": "^3.0.8",
        "yaml-language-server": "~1.15.0"
      },
      "peerDependencies": {
        "@volar/language-service": "~2.4.0"
      },
      "peerDependenciesMeta": {
        "@volar/language-service": {
          "optional": true
        }
      }
    },
    "node_modules/vscode-css-languageservice": {
      "version": "6.3.1",
      "resolved": "https://registry.npmjs.org/vscode-css-languageservice/-/vscode-css-languageservice-6.3.1.tgz",
      "integrity": "sha512-1BzTBuJfwMc3A0uX4JBdJgoxp74cjj4q2mDJdp49yD/GuAq4X0k5WtK6fNcMYr+FfJ9nqgR6lpfCSZDkARJ5qQ==",
      "dependencies": {
        "@vscode/l10n": "^0.0.18",
        "vscode-languageserver-textdocument": "^1.0.12",
        "vscode-languageserver-types": "3.17.5",
        "vscode-uri": "^3.0.8"
      }
    },
    "node_modules/vscode-html-languageservice": {
      "version": "5.3.1",
      "resolved": "https://registry.npmjs.org/vscode-html-languageservice/-/vscode-html-languageservice-5.3.1.tgz",
      "integrity": "sha512-ysUh4hFeW/WOWz/TO9gm08xigiSsV/FOAZ+DolgJfeLftna54YdmZ4A+lIn46RbdO3/Qv5QHTn1ZGqmrXQhZyA==",
      "dependencies": {
        "@vscode/l10n": "^0.0.18",
        "vscode-languageserver-textdocument": "^1.0.12",
        "vscode-languageserver-types": "^3.17.5",
        "vscode-uri": "^3.0.8"
      }
    },
    "node_modules/vscode-json-languageservice": {
      "version": "4.1.8",
      "resolved": "https://registry.npmjs.org/vscode-json-languageservice/-/vscode-json-languageservice-4.1.8.tgz",
      "integrity": "sha512-0vSpg6Xd9hfV+eZAaYN63xVVMOTmJ4GgHxXnkLCh+9RsQBkWKIghzLhW2B9ebfG+LQQg8uLtsQ2aUKjTgE+QOg==",
      "dependencies": {
        "jsonc-parser": "^3.0.0",
        "vscode-languageserver-textdocument": "^1.0.1",
        "vscode-languageserver-types": "^3.16.0",
        "vscode-nls": "^5.0.0",
        "vscode-uri": "^3.0.2"
      },
      "engines": {
        "npm": ">=7.0.0"
      }
    },
    "node_modules/vscode-json-languageservice/node_modules/jsonc-parser": {
      "version": "3.3.1",
      "resolved": "https://registry.npmjs.org/jsonc-parser/-/jsonc-parser-3.3.1.tgz",
      "integrity": "sha512-HUgH65KyejrUFPvHFPbqOY0rsFip3Bo5wb4ngvdi1EpCYWUQDC5V+Y7mZws+DLkr4M//zQJoanu1SP+87Dv1oQ=="
    },
    "node_modules/vscode-jsonrpc": {
      "version": "8.2.0",
      "resolved": "https://registry.npmjs.org/vscode-jsonrpc/-/vscode-jsonrpc-8.2.0.tgz",
      "integrity": "sha512-C+r0eKJUIfiDIfwJhria30+TYWPtuHJXHtI7J0YlOmKAo7ogxP20T0zxB7HZQIFhIyvoBPwWskjxrvAtfjyZfA==",
      "engines": {
        "node": ">=14.0.0"
      }
    },
    "node_modules/vscode-languageserver": {
      "version": "9.0.1",
      "resolved": "https://registry.npmjs.org/vscode-languageserver/-/vscode-languageserver-9.0.1.tgz",
      "integrity": "sha512-woByF3PDpkHFUreUa7Hos7+pUWdeWMXRd26+ZX2A8cFx6v/JPTtd4/uN0/jB6XQHYaOlHbio03NTHCqrgG5n7g==",
      "dependencies": {
        "vscode-languageserver-protocol": "3.17.5"
      },
      "bin": {
        "installServerIntoExtension": "bin/installServerIntoExtension"
      }
    },
    "node_modules/vscode-languageserver-protocol": {
      "version": "3.17.5",
      "resolved": "https://registry.npmjs.org/vscode-languageserver-protocol/-/vscode-languageserver-protocol-3.17.5.tgz",
      "integrity": "sha512-mb1bvRJN8SVznADSGWM9u/b07H7Ecg0I3OgXDuLdn307rl/J3A9YD6/eYOssqhecL27hK1IPZAsaqh00i/Jljg==",
      "dependencies": {
        "vscode-jsonrpc": "8.2.0",
        "vscode-languageserver-types": "3.17.5"
      }
    },
    "node_modules/vscode-languageserver-textdocument": {
      "version": "1.0.12",
      "resolved": "https://registry.npmjs.org/vscode-languageserver-textdocument/-/vscode-languageserver-textdocument-1.0.12.tgz",
      "integrity": "sha512-cxWNPesCnQCcMPeenjKKsOCKQZ/L6Tv19DTRIGuLWe32lyzWhihGVJ/rcckZXJxfdKCFvRLS3fpBIsV/ZGX4zA=="
    },
    "node_modules/vscode-languageserver-types": {
      "version": "3.17.5",
      "resolved": "https://registry.npmjs.org/vscode-languageserver-types/-/vscode-languageserver-types-3.17.5.tgz",
      "integrity": "sha512-Ld1VelNuX9pdF39h2Hgaeb5hEZM2Z3jUrrMgWQAu82jMtZp7p3vJT3BzToKtZI7NgQssZje5o0zryOrhQvzQAg=="
    },
    "node_modules/vscode-nls": {
      "version": "5.2.0",
      "resolved": "https://registry.npmjs.org/vscode-nls/-/vscode-nls-5.2.0.tgz",
      "integrity": "sha512-RAaHx7B14ZU04EU31pT+rKz2/zSl7xMsfIZuo8pd+KZO6PXtQmpevpq3vxvWNcrGbdmhM/rr5Uw5Mz+NBfhVng=="
    },
    "node_modules/vscode-uri": {
      "version": "3.0.8",
      "resolved": "https://registry.npmjs.org/vscode-uri/-/vscode-uri-3.0.8.tgz",
      "integrity": "sha512-AyFQ0EVmsOZOlAnxoFOGOq1SQDWAB7C6aqMGS23svWAllfOaxbuFvcT8D1i8z3Gyn8fraVeZNNmN6e9bxxXkKw=="
    },
    "node_modules/web-namespaces": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/web-namespaces/-/web-namespaces-2.0.1.tgz",
      "integrity": "sha512-bKr1DkiNa2krS7qxNtdrtHAmzuYGFQLiQ13TsorsdT6ULTkPLKuu5+GsFpDlg6JFjUTwX2DyhMPG2be8uPrqsQ==",
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/wooorm"
      }
    },
    "node_modules/which": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/which/-/which-2.0.2.tgz",
      "integrity": "sha512-BLI3Tl1TW3Pvl70l3yq3Y64i+awpwXqsGBYWkkqMtnbXgrMD+yj7rhW0kuEDxzJaYXGjEW5ogapKNMEKNMjibA==",
      "dependencies": {
        "isexe": "^2.0.0"
      },
      "bin": {
        "node-which": "bin/node-which"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/which-pm": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/which-pm/-/which-pm-3.0.0.tgz",
      "integrity": "sha512-ysVYmw6+ZBhx3+ZkcPwRuJi38ZOTLJJ33PSHaitLxSKUMsh0LkKd0nC69zZCwt5D+AYUcMK2hhw4yWny20vSGg==",
      "dependencies": {
        "load-yaml-file": "^0.2.0"
      },
      "engines": {
        "node": ">=18.12"
      }
    },
    "node_modules/which-pm-runs": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/which-pm-runs/-/which-pm-runs-1.1.0.tgz",
      "integrity": "sha512-n1brCuqClxfFfq/Rb0ICg9giSZqCS+pLtccdag6C2HyufBrh3fBOiy9nb6ggRMvWOVH5GrdJskj5iGTZNxd7SA==",
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/widest-line": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/widest-line/-/widest-line-5.0.0.tgz",
      "integrity": "sha512-c9bZp7b5YtRj2wOe6dlj32MK+Bx/M/d+9VB2SHM1OtsUHR0aV0tdP6DWh/iMt0kWi1t5g1Iudu6hQRNd1A4PVA==",
      "dependencies": {
        "string-width": "^7.0.0"
      },
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/wrap-ansi": {
      "version": "9.0.0",
      "resolved": "https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-9.0.0.tgz",
      "integrity": "sha512-G8ura3S+3Z2G+mkgNRq8dqaFZAuxfsxpBB8OCTGRTCtp+l/v9nbFNmCUP1BZMts3G1142MsZfn6eeUKrr4PD1Q==",
      "dependencies": {
        "ansi-styles": "^6.2.1",
        "string-width": "^7.0.0",
        "strip-ansi": "^7.1.0"
      },
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/chalk/wrap-ansi?sponsor=1"
      }
    },
    "node_modules/wrap-ansi-cjs": {
      "name": "wrap-ansi",
      "version": "7.0.0",
      "resolved": "https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-7.0.0.tgz",
      "integrity": "sha512-YVGIj2kamLSTxw6NsZjoBxfSwsn0ycdesmc4p+Q21c5zPuZ1pl+NfxVdxPtdHvmNVOQ6XSYG4AUtyt/Fi7D16Q==",
      "dependencies": {
        "ansi-styles": "^4.0.0",
        "string-width": "^4.1.0",
        "strip-ansi": "^6.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/chalk/wrap-ansi?sponsor=1"
      }
    },
    "node_modules/wrap-ansi-cjs/node_modules/ansi-regex": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-5.0.1.tgz",
      "integrity": "sha512-quJQXlTSUGL2LH9SUXo8VwsY4soanhgo6LNSm84E1LBcE8s3O0wpdiRzyR9z/ZZJMlMWv37qOOb9pdJlMUEKFQ==",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/wrap-ansi-cjs/node_modules/ansi-styles": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
      "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
      "dependencies": {
        "color-convert": "^2.0.1"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/chalk/ansi-styles?sponsor=1"
      }
    },
    "node_modules/wrap-ansi-cjs/node_modules/emoji-regex": {
      "version": "8.0.0",
      "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-8.0.0.tgz",
      "integrity": "sha512-MSjYzcWNOA0ewAHpz0MxpYFvwg6yjy1NG3xteoqz644VCo/RPgnr1/GGt+ic3iJTzQ8Eu3TdM14SawnVUmGE6A=="
    },
    "node_modules/wrap-ansi-cjs/node_modules/string-width": {
      "version": "4.2.3",
      "resolved": "https://registry.npmjs.org/string-width/-/string-width-4.2.3.tgz",
      "integrity": "sha512-wKyQRQpjJ0sIp62ErSZdGsjMJWsap5oRNihHhu6G7JVO/9jIB6UyevL+tXuOqrng8j/cxKTWyWUwvSTriiZz/g==",
      "dependencies": {
        "emoji-regex": "^8.0.0",
        "is-fullwidth-code-point": "^3.0.0",
        "strip-ansi": "^6.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/wrap-ansi-cjs/node_modules/strip-ansi": {
      "version": "6.0.1",
      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.1.tgz",
      "integrity": "sha512-Y38VPSHcqkFrCpFnQ9vuSXmquuv5oXOKpGeT6aGrr3o3Gc9AlVa6JBfUSOCnbxGGZF+/0ooI7KrPuUSztUdU5A==",
      "dependencies": {
        "ansi-regex": "^5.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/xxhash-wasm": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/xxhash-wasm/-/xxhash-wasm-1.1.0.tgz",
      "integrity": "sha512-147y/6YNh+tlp6nd/2pWq38i9h6mz/EuQ6njIrmW8D1BS5nCqs0P6DG+m6zTGnNz5I+uhZ0SHxBs9BsPrwcKDA=="
    },
    "node_modules/y18n": {
      "version": "5.0.8",
      "resolved": "https://registry.npmjs.org/y18n/-/y18n-5.0.8.tgz",
      "integrity": "sha512-0pfFzegeDWJHJIAmTLRP2DwHjdF5s7jo9tuztdQxAhINCdvS+3nGINqPd00AphqJR/0LhANUS6/+7SCb98YOfA==",
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/yallist": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/yallist/-/yallist-3.1.1.tgz",
      "integrity": "sha512-a4UGQaWPH59mOXUYnAG2ewncQS4i4F43Tv3JoAM+s2VDAmS9NsK8GpDMLrCHPksFT7h3K6TOoUNn2pb7RoXx4g=="
    },
    "node_modules/yaml": {
      "version": "2.6.1",
      "resolved": "https://registry.npmjs.org/yaml/-/yaml-2.6.1.tgz",
      "integrity": "sha512-7r0XPzioN/Q9kXBro/XPnA6kznR73DHq+GXh5ON7ZozRO6aMjbmiBuKste2wslTFkC5d1dw0GooOCepZXJ2SAg==",
      "bin": {
        "yaml": "bin.mjs"
      },
      "engines": {
        "node": ">= 14"
      }
    },
    "node_modules/yaml-language-server": {
      "version": "1.15.0",
      "resolved": "https://registry.npmjs.org/yaml-language-server/-/yaml-language-server-1.15.0.tgz",
      "integrity": "sha512-N47AqBDCMQmh6mBLmI6oqxryHRzi33aPFPsJhYy3VTUGCdLHYjGh4FZzpUjRlphaADBBkDmnkM/++KNIOHi5Rw==",
      "dependencies": {
        "ajv": "^8.11.0",
        "lodash": "4.17.21",
        "request-light": "^0.5.7",
        "vscode-json-languageservice": "4.1.8",
        "vscode-languageserver": "^7.0.0",
        "vscode-languageserver-textdocument": "^1.0.1",
        "vscode-languageserver-types": "^3.16.0",
        "vscode-nls": "^5.0.0",
        "vscode-uri": "^3.0.2",
        "yaml": "2.2.2"
      },
      "bin": {
        "yaml-language-server": "bin/yaml-language-server"
      },
      "optionalDependencies": {
        "prettier": "2.8.7"
      }
    },
    "node_modules/yaml-language-server/node_modules/prettier": {
      "version": "2.8.7",
      "resolved": "https://registry.npmjs.org/prettier/-/prettier-2.8.7.tgz",
      "integrity": "sha512-yPngTo3aXUUmyuTjeTUT75txrf+aMh9FiD7q9ZE/i6r0bPb22g4FsE6Y338PQX1bmfy08i9QQCB7/rcUAVntfw==",
      "optional": true,
      "bin": {
        "prettier": "bin-prettier.js"
      },
      "engines": {
        "node": ">=10.13.0"
      },
      "funding": {
        "url": "https://github.com/prettier/prettier?sponsor=1"
      }
    },
    "node_modules/yaml-language-server/node_modules/request-light": {
      "version": "0.5.8",
      "resolved": "https://registry.npmjs.org/request-light/-/request-light-0.5.8.tgz",
      "integrity": "sha512-3Zjgh+8b5fhRJBQZoy+zbVKpAQGLyka0MPgW3zruTF4dFFJ8Fqcfu9YsAvi/rvdcaTeWG3MkbZv4WKxAn/84Lg=="
    },
    "node_modules/yaml-language-server/node_modules/vscode-jsonrpc": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/vscode-jsonrpc/-/vscode-jsonrpc-6.0.0.tgz",
      "integrity": "sha512-wnJA4BnEjOSyFMvjZdpiOwhSq9uDoK8e/kpRJDTaMYzwlkrhG1fwDIZI94CLsLzlCK5cIbMMtFlJlfR57Lavmg==",
      "engines": {
        "node": ">=8.0.0 || >=10.0.0"
      }
    },
    "node_modules/yaml-language-server/node_modules/vscode-languageserver": {
      "version": "7.0.0",
      "resolved": "https://registry.npmjs.org/vscode-languageserver/-/vscode-languageserver-7.0.0.tgz",
      "integrity": "sha512-60HTx5ID+fLRcgdHfmz0LDZAXYEV68fzwG0JWwEPBode9NuMYTIxuYXPg4ngO8i8+Ou0lM7y6GzaYWbiDL0drw==",
      "dependencies": {
        "vscode-languageserver-protocol": "3.16.0"
      },
      "bin": {
        "installServerIntoExtension": "bin/installServerIntoExtension"
      }
    },
    "node_modules/yaml-language-server/node_modules/vscode-languageserver-protocol": {
      "version": "3.16.0",
      "resolved": "https://registry.npmjs.org/vscode-languageserver-protocol/-/vscode-languageserver-protocol-3.16.0.tgz",
      "integrity": "sha512-sdeUoAawceQdgIfTI+sdcwkiK2KU+2cbEYA0agzM2uqaUy2UpnnGHtWTHVEtS0ES4zHU0eMFRGN+oQgDxlD66A==",
      "dependencies": {
        "vscode-jsonrpc": "6.0.0",
        "vscode-languageserver-types": "3.16.0"
      }
    },
    "node_modules/yaml-language-server/node_modules/vscode-languageserver-types": {
      "version": "3.16.0",
      "resolved": "https://registry.npmjs.org/vscode-languageserver-types/-/vscode-languageserver-types-3.16.0.tgz",
      "integrity": "sha512-k8luDIWJWyenLc5ToFQQMaSrqCHiLwyKPHKPQZ5zz21vM+vIVUSvsRpcbiECH4WR88K2XZqc4ScRcZ7nk/jbeA=="
    },
    "node_modules/yaml-language-server/node_modules/yaml": {
      "version": "2.2.2",
      "resolved": "https://registry.npmjs.org/yaml/-/yaml-2.2.2.tgz",
      "integrity": "sha512-CBKFWExMn46Foo4cldiChEzn7S7SRV+wqiluAb6xmueD/fGyRHIhX8m14vVGgeFWjN540nKCNVj6P21eQjgTuA==",
      "engines": {
        "node": ">= 14"
      }
    },
    "node_modules/yargs": {
      "version": "17.7.2",
      "resolved": "https://registry.npmjs.org/yargs/-/yargs-17.7.2.tgz",
      "integrity": "sha512-7dSzzRQ++CKnNI/krKnYRV7JKKPUXMEh61soaHKg9mrWEhzFWhFnxPxGl+69cD1Ou63C13NUPCnmIcrvqCuM6w==",
      "dependencies": {
        "cliui": "^8.0.1",
        "escalade": "^3.1.1",
        "get-caller-file": "^2.0.5",
        "require-directory": "^2.1.1",
        "string-width": "^4.2.3",
        "y18n": "^5.0.5",
        "yargs-parser": "^21.1.1"
      },
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/yargs-parser": {
      "version": "21.1.1",
      "resolved": "https://registry.npmjs.org/yargs-parser/-/yargs-parser-21.1.1.tgz",
      "integrity": "sha512-tVpsJW7DdjecAiFpbIB1e3qxIQsE6NoPc5/eTdrbbIC4h0LVsWhnoa3g+m2HclBIujHzsxZ4VJVA+GUuc2/LBw==",
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/yargs/node_modules/ansi-regex": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-5.0.1.tgz",
      "integrity": "sha512-quJQXlTSUGL2LH9SUXo8VwsY4soanhgo6LNSm84E1LBcE8s3O0wpdiRzyR9z/ZZJMlMWv37qOOb9pdJlMUEKFQ==",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/yargs/node_modules/emoji-regex": {
      "version": "8.0.0",
      "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-8.0.0.tgz",
      "integrity": "sha512-MSjYzcWNOA0ewAHpz0MxpYFvwg6yjy1NG3xteoqz644VCo/RPgnr1/GGt+ic3iJTzQ8Eu3TdM14SawnVUmGE6A=="
    },
    "node_modules/yargs/node_modules/string-width": {
      "version": "4.2.3",
      "resolved": "https://registry.npmjs.org/string-width/-/string-width-4.2.3.tgz",
      "integrity": "sha512-wKyQRQpjJ0sIp62ErSZdGsjMJWsap5oRNihHhu6G7JVO/9jIB6UyevL+tXuOqrng8j/cxKTWyWUwvSTriiZz/g==",
      "dependencies": {
        "emoji-regex": "^8.0.0",
        "is-fullwidth-code-point": "^3.0.0",
        "strip-ansi": "^6.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/yargs/node_modules/strip-ansi": {
      "version": "6.0.1",
      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.1.tgz",
      "integrity": "sha512-Y38VPSHcqkFrCpFnQ9vuSXmquuv5oXOKpGeT6aGrr3o3Gc9AlVa6JBfUSOCnbxGGZF+/0ooI7KrPuUSztUdU5A==",
      "dependencies": {
        "ansi-regex": "^5.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/yocto-queue": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/yocto-queue/-/yocto-queue-1.1.1.tgz",
      "integrity": "sha512-b4JR1PFR10y1mKjhHY9LaGo6tmrgjit7hxVIeAmyMw3jegXR4dhYqLaQF5zMXZxY7tLpMyJeLjr1C4rLmkVe8g==",
      "engines": {
        "node": ">=12.20"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/zod": {
      "version": "3.23.8",
      "resolved": "https://registry.npmjs.org/zod/-/zod-3.23.8.tgz",
      "integrity": "sha512-XBx9AXhXktjUqnepgTiE5flcKIYWi/rme0Eaj+5Y0lftuGBq+jyRu/md4WnuxqgP1ubdpNCsYEYPxrzVHD8d6g==",
      "funding": {
        "url": "https://github.com/sponsors/colinhacks"
      }
    },
    "node_modules/zod-to-json-schema": {
      "version": "3.23.5",
      "resolved": "https://registry.npmjs.org/zod-to-json-schema/-/zod-to-json-schema-3.23.5.tgz",
      "integrity": "sha512-5wlSS0bXfF/BrL4jPAbz9da5hDlDptdEppYfe+x4eIJ7jioqKG9uUxOwPzqof09u/XeVdrgFu29lZi+8XNDJtA==",
      "peerDependencies": {
        "zod": "^3.23.3"
      }
    },
    "node_modules/zod-to-ts": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/zod-to-ts/-/zod-to-ts-1.2.0.tgz",
      "integrity": "sha512-x30XE43V+InwGpvTySRNz9kB7qFU8DlyEy7BsSTCHPH1R0QasMmHWZDCzYm6bVXtj/9NNJAZF3jW8rzFvH5OFA==",
      "peerDependencies": {
        "typescript": "^4.9.4 || ^5.0.2",
        "zod": "^3"
      }
    },
    "node_modules/zwitch": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/zwitch/-/zwitch-2.0.4.tgz",
      "integrity": "sha512-bXE4cR/kVZhKZX/RjPEflHaKVhUVl85noU3v6b8apfQEc1x4A+zBxjZ4lN8LqGd6WZ3dl98pY4o717VFmoPp+A==",
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/wooorm"
      }
    }
  }
}
```

/package.json
```
{
  "name": "",
  "type": "module",
  "version": "0.0.1",
  "scripts": {
    "dev": "astro dev",
    "start": "astro dev",
    "build": "astro check && astro build && node process-html.mjs",
    "preview": "astro preview",
    "astro": "astro"
  },
  "dependencies": {
    "@astrojs/check": "^0.9.4",
    "@astrojs/sitemap": "^3.2.1",
    "@astrojs/starlight": "^0.29.2",
    "@astrojs/starlight-tailwind": "^2.0.3",
    "@astrojs/tailwind": "^5.1.2",
    "@preline/accordion": "^2.5.0",
    "@preline/collapse": "^2.5.0",
    "@preline/dropdown": "^2.5.0",
    "@preline/overlay": "^2.5.0",
    "@preline/tabs": "^2.5.0",
    "astro": "^4.16.14",
    "astro-compressor": "^0.4.1",
    "clipboard": "^2.0.11",
    "globby": "^14.0.2",
    "gsap": "^3.12.5",
    "html-minifier-terser": "^7.2.0",
    "lenis": "^1.1.17",
    "preline": "^2.5.1",
    "rimraf": "^6.0.1",
    "sharp": "^0.33.5",
    "sharp-ico": "^0.1.5",
    "tailwindcss": "^3.4.15"
  },
  "devDependencies": {
    "@tailwindcss/forms": "^0.5.9",
    "astro-vtbot": "^1.10.7",
    "prettier": "^3.3.3",
    "prettier-plugin-astro": "^0.14.1",
    "prettier-plugin-tailwindcss": "^0.6.9",
    "typescript": "^5.7.2"
  }
}
```

/migrate-blog.js
```
import fs from 'fs';
import path from 'path';

const blogPostsDir = './src/content/blog';
const imagesDir = './public/assets/images/blog/2024';

const blogPosts = fs.readdirSync(blogPostsDir);

for (const file of blogPosts) {
  if (file.endsWith('.md')) {
    const postPath = path.join(blogPostsDir, file);
    const postContent = fs.readFileSync(postPath, 'utf8');

    // Extract frontmatter (naive regex, assuming image: "filename.jpg")
    const imageMatch = postContent.match(/image:\s*['"]([^'"]+)['"]/);
    if (imageMatch) {
      const imageName = imageMatch[1];
      const possibleExtensions = ['.jpg', '.jpeg'];

      let foundImagePath = null;

      // Check both extensions for the file
      for (const ext of possibleExtensions) {
        const imagePath = path.join(imagesDir, imageName.replace(/\.jpg|\.jpeg$/, ext));
        if (fs.existsSync(imagePath)) {
          foundImagePath = imagePath;
          break;
        }
      }

      if (foundImagePath) {
        const postSlug = file.replace('.md', '');
        const postDir = path.join(blogPostsDir, postSlug);

        // Create a folder for the post if it doesn't exist
        if (!fs.existsSync(postDir)) {
          fs.mkdirSync(postDir);
        }

        // Move the image
        const newImagePath = path.join(postDir, path.basename(foundImagePath));
        fs.renameSync(foundImagePath, newImagePath);

        console.log(`Moved ${foundImagePath} to ${newImagePath}`);

        // Update frontmatter
        const updatedContent = postContent.replace(imageMatch[1], path.basename(newImagePath));
        fs.writeFileSync(postPath, updatedContent, 'utf8');
      } else {
        console.warn(`Image not found for post: ${file}, image: ${imageName}`);
      }
    }
  }
}
```

/tsconfig.json
```
{
  "extends": "astro/tsconfigs/strict",
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"],
      "@components/*": ["src/components/*"],
      "@content/*": ["src/content/*"],
      "@data/*": ["src/data_files/*"],
      "@images/*": ["src/images/*"],
      "@scripts/*": ["src/assets/scripts/*"],
      "@styles/*": ["src/assets/styles/*"],
      "@utils/*": ["src/utils/*"]
    },
  }
}```

/process-html.mjs
```
import fs from 'node:fs/promises'
import { globby } from 'globby'
import { minify } from 'html-minifier-terser'

// Get all HTML files from the output directory
const path = './.vercel/output/static'
const files = await globby(`${path}/**/*.html`)

await Promise.all(
    files.map(async (file) => {
   	 console.log('Processing file:', file)
   	 let html = await fs.readFile(file, 'utf-8')

   	 // Minify the HTML
   	 html = await minify(html, {
   		 removeComments: true,
   		 preserveLineBreaks: true,
   		 collapseWhitespace: true,
		 minifyJS: true
   	 })
   	 await fs.writeFile(file, html)
    })
)```

/public/banner-pattern.svg
```
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 1002 285">
  <g clip-path="url(#a)">
    <path fill="#FDE68A" d="M132.693 132.957V65.953h67.003l-67.003 67.004Z"/>
    <path fill="#FDE68A" d="M67.003 132.957V65.953h67.004l-67.004 67.004Z"/>
    <path fill="#F59E0B" d="M162.91 131.643H67.003v48.61h95.907v-48.61Z"/>
    <path fill="#FDE68A" d="M67.004 131.643H0v48.61h67.004v-48.61Z"/>
    <path fill="#FACC15" d="M134.007 65.953v67.004H67.003l67.004-67.004Z"/>
    <path fill="#FACC15" d="M67.004 65.953v67.004H0l67.004-67.004Zm132.692-1.313v67.004h-67.003l67.003-67.003Z"/>
    <path fill="#FDE68A" d="M251.535 52c-28.298 0-51.238 22.94-51.238 51.239 0 28.298 22.94 51.238 51.238 51.238s51.238-22.94 51.238-51.238-22.94-51.238-51.238-51.238Z"/>
    <path fill="#FACC15" d="M251.535 82.216c-11.609 0-21.021 9.412-21.021 21.021 0 11.61 9.412 21.021 21.021 21.021s21.021-9.411 21.021-21.021c0-11.61-9.412-21.02-21.021-21.02Zm47.296 72.26V87.473h67.003l-67.003 67.003Z"/>
    <path fill="#FDE68A" d="M999.983 42.52c-13.301 0-26.057 5.34-35.462 14.848-9.405 9.507-14.688 22.401-14.688 35.847 0 13.445 5.283 26.339 14.688 35.847 9.405 9.507 22.161 14.848 35.462 14.848v-23.535a26.726 26.726 0 0 1-18.999-7.955c-5.039-5.094-7.87-12.002-7.87-19.205 0-7.204 2.831-14.112 7.87-19.206a26.724 26.724 0 0 1 18.999-7.955V42.52Z"/>
    <path fill="#FACC15" d="M999.982 0c-24.577 0-48.147 9.82-65.526 27.302-17.379 17.48-27.142 41.19-27.142 65.912 0 24.721 9.763 48.431 27.142 65.912 17.379 17.48 40.949 27.301 65.526 27.301v-43.274a49.5 49.5 0 0 1-35.106-14.627c-9.31-9.365-14.541-22.068-14.541-35.312 0-13.245 5.231-25.948 14.541-35.313a49.502 49.502 0 0 1 35.106-14.627V0Z"/>
    <path stroke="#F59E0B" stroke-width="3.271" d="M939.475 162.988c-33.116 0-59.962 26.846-59.962 59.962s26.846 59.962 59.962 59.962 59.962-26.846 59.962-59.962-26.846-59.962-59.962-59.962Z"/>
    <path stroke="#F59E0B" stroke-width="3.271" d="M939.476 173.89c-27.095 0-49.06 21.965-49.06 49.06 0 27.095 21.965 49.06 49.06 49.06 27.095 0 49.06-21.965 49.06-49.06 0-27.095-21.965-49.06-49.06-49.06Z"/>
    <path stroke="#F59E0B" stroke-width="3.271" d="M939.475 183.702c-21.676 0-39.248 17.572-39.248 39.247 0 21.676 17.572 39.248 39.248 39.248s39.248-17.572 39.248-39.248c0-21.675-17.572-39.247-39.248-39.247Z"/>
    <path stroke="#F59E0B" stroke-width="3.271" d="M939.476 194.604c-15.655 0-28.346 12.69-28.346 28.345s12.691 28.346 28.346 28.346 28.346-12.691 28.346-28.346-12.691-28.345-28.346-28.345Z"/>
    <path stroke="#F59E0B" stroke-width="3.271" d="M939.475 205.506c-9.634 0-17.444 7.809-17.444 17.443s7.81 17.444 17.444 17.444 17.443-7.81 17.443-17.444-7.809-17.443-17.443-17.443Z"/>
    <path stroke="#FDE68A" stroke-width="3.271" d="M939.476 215.317a7.632 7.632 0 1 0 0 15.264 7.632 7.632 0 0 0 0-15.264Z"/>
    <path fill="#F59E0B" d="M862.615 180.977h55.601v-40.338h-55.601v40.338Z"/>
    <path fill="#FACC15" d="M862.615 235.488v-55.601h55.601l-55.601 55.601Z"/>
    <path stroke="#FACC15" stroke-width="2.18" d="m778.311 199.75 55.165-89.232 55.166 89.232H778.311Z"/>
    <path fill="#FACC15" d="m790.958 91 57.122 91.578H733.837L790.958 91Z"/>
  </g>
  <defs>
    <clipPath id="a">
      <path fill="#fff" d="M0 0h1002v285H0z"/>
    </clipPath>
  </defs>
</svg>
```

/.git/ORIG_HEAD
```
1e3cb5a9adc3898934cd8addd71a077dd874aef4
```

/.git/config
```
[core]
	repositoryformatversion = 0
	filemode = true
	bare = false
	logallrefupdates = true
	ignorecase = true
	precomposeunicode = true
[remote "origin"]
	url = https://github.com/mario-guerra/ScrewFast.git
	fetch = +refs/heads/*:refs/remotes/origin/*
[branch "main"]
	remote = origin
	merge = refs/heads/main
	vscode-merge-base = origin/main
```

/.git/HEAD
```
ref: refs/heads/main
```

/.git/description
```
Unnamed repository; edit this file 'description' to name the repository.
```

/.git/packed-refs
```
# pack-refs with: peeled fully-peeled sorted 
9fc1c938154281ae6f7af82379f630ebe439a766 refs/remotes/origin/main
```

/.git/COMMIT_EDITMSG
```
checkpoint 12/17/24

# Please enter the commit message for your changes. Lines starting
# with '#' will be ignored, and an empty message aborts the commit.
#
# Date:      Tue Dec 17 16:24:06 2024 -0600
#
# On branch main
# Your branch is up to date with 'origin/main'.
#
# Changes to be committed:
#	modified:   astro.config.mjs
#	deleted:    public/assets/images/blog/2024/hiring-1977803_1280-1024x767.jpg?dynamic_featured=1&size=large
#	modified:   src/components/sections/landing/BlogSection.astro
#	modified:   src/content/blog/ai-document-summarization-with-sliding-content-window/2023-08-22-ai-document-summarization-with-sliding-content-window.md
#	modified:   src/content/blog/building-intelligent-chatbots-with-microsoft-teams-data/2024-04-12-building-intelligent-chatbots-with-microsoft-teams-data.md
#	modified:   src/content/blog/finding-remote-work-in-the-2020s/2021-06-02-finding-remote-work-in-the-2020s.md
#	modified:   src/content/blog/move-from-software-development-to-product-management/2023-01-05-move-from-software-development-to-product-management.md
#	modified:   src/content/blog/prompting-chatgpt-to-write-in-your-style/2023-07-19-prompting-chatgpt-to-write-in-your-style.md
#	new file:   src/content/blog/prompting-chatgpt-to-write-in-your-style/Robot-author.png
#	deleted:    src/content/blog/prompting-chatgpt-to-write-in-your-style/Summarizing-Documents-with-Azure-OpenAI.jpg
#	new file:   src/content/blog/the-chatGPT-workout-plan/the-chatgpt-workout-plan.md
#	modified:   src/content/blog/unlock-the-potential-of-chatgpt-customize-your-ais-responses-like-a-pro/2023-01-08-unlock-the-potential-of-chatgpt-customize-your-ais-responses-like-a-pro.md
#	new file:   src/pages/blog/[...slug].astro
#	new file:   src/pages/blog/index.astro
#	modified:   src/pages/index.astro
#	modified:   src/pages/services.astro
#
```

/.git/FETCH_HEAD
```
cd6c9878bcd9483b09a0ac1ce2b823a29f90fd12		branch 'main' of https://github.com/mario-guerra/ScrewFast
3b4d82be9cb664fab6bcc00fb3b56da2aaf046f7	not-for-merge	branch 'conversion' of https://github.com/mario-guerra/ScrewFast
f37d5bb4edbf8207d8ddffb19afc2e646e88990c	not-for-merge	branch 'gh-pages' of https://github.com/mario-guerra/ScrewFast
```

/.git/info/exclude
```
# git ls-files --others --exclude-from=.git/info/exclude
# Lines that start with '#' are comments.
# For a project mostly in C, the following would be a good set of
# exclude patterns (uncomment them if you want to use them):
# *.[oa]
# *~
```

/.git/logs/HEAD
```
0000000000000000000000000000000000000000 9fc1c938154281ae6f7af82379f630ebe439a766 Mario Guerra <emailformario@gmail.com> 1732748224 -0600	clone: from https://github.com/mario-guerra/ScrewFast.git
9fc1c938154281ae6f7af82379f630ebe439a766 9fc1c938154281ae6f7af82379f630ebe439a766 Mario Guerra <emailformario@gmail.com> 1733063106 -0600	checkout: moving from main to conversion
9fc1c938154281ae6f7af82379f630ebe439a766 3ecb557e684e962a8b6ae80f61e8b342d03792db Mario Guerra <emailformario@gmail.com> 1733063116 -0600	commit: first commit
3ecb557e684e962a8b6ae80f61e8b342d03792db c802ffb57ca69d0aa7ffd0a9521f87526d440b81 Mario Guerra <emailformario@gmail.com> 1733098206 -0600	commit: remove foreign lang support and simplify config
c802ffb57ca69d0aa7ffd0a9521f87526d440b81 3b4d82be9cb664fab6bcc00fb3b56da2aaf046f7 Mario Guerra <emailformario@gmail.com> 1733098391 -0600	commit (amend): remove foreign lang support and simplify config
3b4d82be9cb664fab6bcc00fb3b56da2aaf046f7 9fc1c938154281ae6f7af82379f630ebe439a766 Mario Guerra <emailformario@gmail.com> 1733162150 -0600	checkout: moving from conversion to main
9fc1c938154281ae6f7af82379f630ebe439a766 72a667c8a440087511dd4aa9a775882b7e6e5d60 Mario Guerra <emailformario@gmail.com> 1733162153 -0600	pull: Fast-forward
72a667c8a440087511dd4aa9a775882b7e6e5d60 cd6c9878bcd9483b09a0ac1ce2b823a29f90fd12 Mario Guerra <emailformario@gmail.com> 1733179468 -0600	pull: Fast-forward
cd6c9878bcd9483b09a0ac1ce2b823a29f90fd12 61f6de1312daaf823608ec261ea8585dcb37f071 Mario Guerra <emailformario@gmail.com> 1733873460 -0600	commit: work checkpoint
61f6de1312daaf823608ec261ea8585dcb37f071 1e3cb5a9adc3898934cd8addd71a077dd874aef4 Mario Guerra <emailformario@gmail.com> 1733967084 -0600	commit: checkpoint
1e3cb5a9adc3898934cd8addd71a077dd874aef4 1e3cb5a9adc3898934cd8addd71a077dd874aef4 Mario Guerra <emailformario@gmail.com> 1734032905 -0600	reset: moving to HEAD
1e3cb5a9adc3898934cd8addd71a077dd874aef4 1e3cb5a9adc3898934cd8addd71a077dd874aef4 Mario Guerra <emailformario@gmail.com> 1734033041 -0600	reset: moving to HEAD
1e3cb5a9adc3898934cd8addd71a077dd874aef4 b8140937137a273fb2aacd6e03e8a01cd1ccc367 Mario Guerra <emailformario@gmail.com> 1734474246 -0600	commit: checkpoint 12/17/24
b8140937137a273fb2aacd6e03e8a01cd1ccc367 42c9691a0b2900adfab655fbfefab7eb04f76ac5 Mario Guerra <emailformario@gmail.com> 1734476890 -0600	commit (amend): checkpoint 12/17/24
```

/.git/logs/refs/heads/conversion
```
0000000000000000000000000000000000000000 9fc1c938154281ae6f7af82379f630ebe439a766 Mario Guerra <emailformario@gmail.com> 1733063106 -0600	branch: Created from HEAD
9fc1c938154281ae6f7af82379f630ebe439a766 3ecb557e684e962a8b6ae80f61e8b342d03792db Mario Guerra <emailformario@gmail.com> 1733063116 -0600	commit: first commit
3ecb557e684e962a8b6ae80f61e8b342d03792db c802ffb57ca69d0aa7ffd0a9521f87526d440b81 Mario Guerra <emailformario@gmail.com> 1733098206 -0600	commit: remove foreign lang support and simplify config
c802ffb57ca69d0aa7ffd0a9521f87526d440b81 3b4d82be9cb664fab6bcc00fb3b56da2aaf046f7 Mario Guerra <emailformario@gmail.com> 1733098391 -0600	commit (amend): remove foreign lang support and simplify config
```

/.git/logs/refs/heads/main
```
0000000000000000000000000000000000000000 9fc1c938154281ae6f7af82379f630ebe439a766 Mario Guerra <emailformario@gmail.com> 1732748224 -0600	clone: from https://github.com/mario-guerra/ScrewFast.git
9fc1c938154281ae6f7af82379f630ebe439a766 72a667c8a440087511dd4aa9a775882b7e6e5d60 Mario Guerra <emailformario@gmail.com> 1733162153 -0600	pull: Fast-forward
72a667c8a440087511dd4aa9a775882b7e6e5d60 cd6c9878bcd9483b09a0ac1ce2b823a29f90fd12 Mario Guerra <emailformario@gmail.com> 1733179468 -0600	pull: Fast-forward
cd6c9878bcd9483b09a0ac1ce2b823a29f90fd12 61f6de1312daaf823608ec261ea8585dcb37f071 Mario Guerra <emailformario@gmail.com> 1733873460 -0600	commit: work checkpoint
61f6de1312daaf823608ec261ea8585dcb37f071 1e3cb5a9adc3898934cd8addd71a077dd874aef4 Mario Guerra <emailformario@gmail.com> 1733967084 -0600	commit: checkpoint
1e3cb5a9adc3898934cd8addd71a077dd874aef4 b8140937137a273fb2aacd6e03e8a01cd1ccc367 Mario Guerra <emailformario@gmail.com> 1734474246 -0600	commit: checkpoint 12/17/24
b8140937137a273fb2aacd6e03e8a01cd1ccc367 42c9691a0b2900adfab655fbfefab7eb04f76ac5 Mario Guerra <emailformario@gmail.com> 1734476890 -0600	commit (amend): checkpoint 12/17/24
```

/.git/logs/refs/remotes/origin/gh-pages
```
0000000000000000000000000000000000000000 93c24a6f046c63bbbf6e723994dbe19075e0c1cf Mario Guerra <emailformario@gmail.com> 1733162153 -0600	pull: storing head
93c24a6f046c63bbbf6e723994dbe19075e0c1cf f37d5bb4edbf8207d8ddffb19afc2e646e88990c Mario Guerra <emailformario@gmail.com> 1733179468 -0600	pull: fast-forward
```

/.git/logs/refs/remotes/origin/HEAD
```
0000000000000000000000000000000000000000 9fc1c938154281ae6f7af82379f630ebe439a766 Mario Guerra <emailformario@gmail.com> 1732748224 -0600	clone: from https://github.com/mario-guerra/ScrewFast.git
```

/.git/logs/refs/remotes/origin/conversion
```
0000000000000000000000000000000000000000 3ecb557e684e962a8b6ae80f61e8b342d03792db Mario Guerra <emailformario@gmail.com> 1733063126 -0600	update by push
3ecb557e684e962a8b6ae80f61e8b342d03792db c802ffb57ca69d0aa7ffd0a9521f87526d440b81 Mario Guerra <emailformario@gmail.com> 1733098226 -0600	update by push
c802ffb57ca69d0aa7ffd0a9521f87526d440b81 3b4d82be9cb664fab6bcc00fb3b56da2aaf046f7 Mario Guerra <emailformario@gmail.com> 1733098406 -0600	update by push
```

/.git/logs/refs/remotes/origin/main
```
9fc1c938154281ae6f7af82379f630ebe439a766 72a667c8a440087511dd4aa9a775882b7e6e5d60 Mario Guerra <emailformario@gmail.com> 1733162153 -0600	pull: fast-forward
72a667c8a440087511dd4aa9a775882b7e6e5d60 cd6c9878bcd9483b09a0ac1ce2b823a29f90fd12 Mario Guerra <emailformario@gmail.com> 1733179468 -0600	pull: fast-forward
cd6c9878bcd9483b09a0ac1ce2b823a29f90fd12 61f6de1312daaf823608ec261ea8585dcb37f071 Mario Guerra <emailformario@gmail.com> 1733873478 -0600	update by push
61f6de1312daaf823608ec261ea8585dcb37f071 1e3cb5a9adc3898934cd8addd71a077dd874aef4 Mario Guerra <emailformario@gmail.com> 1733967110 -0600	update by push
1e3cb5a9adc3898934cd8addd71a077dd874aef4 b8140937137a273fb2aacd6e03e8a01cd1ccc367 Mario Guerra <emailformario@gmail.com> 1734474257 -0600	update by push
b8140937137a273fb2aacd6e03e8a01cd1ccc367 42c9691a0b2900adfab655fbfefab7eb04f76ac5 Mario Guerra <emailformario@gmail.com> 1734476927 -0600	update by push
```

/.git/hooks/commit-msg.sample
```
#!/bin/sh
#
# An example hook script to check the commit log message.
# Called by "git commit" with one argument, the name of the file
# that has the commit message.  The hook should exit with non-zero
# status after issuing an appropriate message if it wants to stop the
# commit.  The hook is allowed to edit the commit message file.
#
# To enable this hook, rename this file to "commit-msg".

# Uncomment the below to add a Signed-off-by line to the message.
# Doing this in a hook is a bad idea in general, but the prepare-commit-msg
# hook is more suited to it.
#
# SOB=$(git var GIT_AUTHOR_IDENT | sed -n 's/^\(.*>\).*$/Signed-off-by: \1/p')
# grep -qs "^$SOB" "$1" || echo "$SOB" >> "$1"

# This example catches duplicate Signed-off-by lines.

test "" = "$(grep '^Signed-off-by: ' "$1" |
	 sort | uniq -c | sed -e '/^[ 	]*1[ 	]/d')" || {
	echo >&2 Duplicate Signed-off-by lines.
	exit 1
}
```

/.git/hooks/pre-rebase.sample
```
#!/bin/sh
#
# Copyright (c) 2006, 2008 Junio C Hamano
#
# The "pre-rebase" hook is run just before "git rebase" starts doing
# its job, and can prevent the command from running by exiting with
# non-zero status.
#
# The hook is called with the following parameters:
#
# $1 -- the upstream the series was forked from.
# $2 -- the branch being rebased (or empty when rebasing the current branch).
#
# This sample shows how to prevent topic branches that are already
# merged to 'next' branch from getting rebased, because allowing it
# would result in rebasing already published history.

publish=next
basebranch="$1"
if test "$#" = 2
then
	topic="refs/heads/$2"
else
	topic=`git symbolic-ref HEAD` ||
	exit 0 ;# we do not interrupt rebasing detached HEAD
fi

case "$topic" in
refs/heads/??/*)
	;;
*)
	exit 0 ;# we do not interrupt others.
	;;
esac

# Now we are dealing with a topic branch being rebased
# on top of master.  Is it OK to rebase it?

# Does the topic really exist?
git show-ref -q "$topic" || {
	echo >&2 "No such branch $topic"
	exit 1
}

# Is topic fully merged to master?
not_in_master=`git rev-list --pretty=oneline ^master "$topic"`
if test -z "$not_in_master"
then
	echo >&2 "$topic is fully merged to master; better remove it."
	exit 1 ;# we could allow it, but there is no point.
fi

# Is topic ever merged to next?  If so you should not be rebasing it.
only_next_1=`git rev-list ^master "^$topic" ${publish} | sort`
only_next_2=`git rev-list ^master           ${publish} | sort`
if test "$only_next_1" = "$only_next_2"
then
	not_in_topic=`git rev-list "^$topic" master`
	if test -z "$not_in_topic"
	then
		echo >&2 "$topic is already up to date with master"
		exit 1 ;# we could allow it, but there is no point.
	else
		exit 0
	fi
else
	not_in_next=`git rev-list --pretty=oneline ^${publish} "$topic"`
	/usr/bin/perl -e '
		my $topic = $ARGV[0];
		my $msg = "* $topic has commits already merged to public branch:\n";
		my (%not_in_next) = map {
			/^([0-9a-f]+) /;
			($1 => 1);
		} split(/\n/, $ARGV[1]);
		for my $elem (map {
				/^([0-9a-f]+) (.*)$/;
				[$1 => $2];
			} split(/\n/, $ARGV[2])) {
			if (!exists $not_in_next{$elem->[0]}) {
				if ($msg) {
					print STDERR $msg;
					undef $msg;
				}
				print STDERR " $elem->[1]\n";
			}
		}
	' "$topic" "$not_in_next" "$not_in_master"
	exit 1
fi

<<\DOC_END

This sample hook safeguards topic branches that have been
published from being rewound.

The workflow assumed here is:

 * Once a topic branch forks from "master", "master" is never
   merged into it again (either directly or indirectly).

 * Once a topic branch is fully cooked and merged into "master",
   it is deleted.  If you need to build on top of it to correct
   earlier mistakes, a new topic branch is created by forking at
   the tip of the "master".  This is not strictly necessary, but
   it makes it easier to keep your history simple.

 * Whenever you need to test or publish your changes to topic
   branches, merge them into "next" branch.

The script, being an example, hardcodes the publish branch name
to be "next", but it is trivial to make it configurable via
$GIT_DIR/config mechanism.

With this workflow, you would want to know:

(1) ... if a topic branch has ever been merged to "next".  Young
    topic branches can have stupid mistakes you would rather
    clean up before publishing, and things that have not been
    merged into other branches can be easily rebased without
    affecting other people.  But once it is published, you would
    not want to rewind it.

(2) ... if a topic branch has been fully merged to "master".
    Then you can delete it.  More importantly, you should not
    build on top of it -- other people may already want to
    change things related to the topic as patches against your
    "master", so if you need further changes, it is better to
    fork the topic (perhaps with the same name) afresh from the
    tip of "master".

Let's look at this example:

		   o---o---o---o---o---o---o---o---o---o "next"
		  /       /           /           /
		 /   a---a---b A     /           /
		/   /               /           /
	       /   /   c---c---c---c B         /
	      /   /   /             \         /
	     /   /   /   b---b C     \       /
	    /   /   /   /             \     /
    ---o---o---o---o---o---o---o---o---o---o---o "master"


A, B and C are topic branches.

 * A has one fix since it was merged up to "next".

 * B has finished.  It has been fully merged up to "master" and "next",
   and is ready to be deleted.

 * C has not merged to "next" at all.

We would want to allow C to be rebased, refuse A, and encourage
B to be deleted.

To compute (1):

	git rev-list ^master ^topic next
	git rev-list ^master        next

	if these match, topic has not merged in next at all.

To compute (2):

	git rev-list master..topic

	if this is empty, it is fully merged to "master".

DOC_END
```

/.git/hooks/pre-commit.sample
```
#!/bin/sh
#
# An example hook script to verify what is about to be committed.
# Called by "git commit" with no arguments.  The hook should
# exit with non-zero status after issuing an appropriate message if
# it wants to stop the commit.
#
# To enable this hook, rename this file to "pre-commit".

if git rev-parse --verify HEAD >/dev/null 2>&1
then
	against=HEAD
else
	# Initial commit: diff against an empty tree object
	against=$(git hash-object -t tree /dev/null)
fi

# If you want to allow non-ASCII filenames set this variable to true.
allownonascii=$(git config --type=bool hooks.allownonascii)

# Redirect output to stderr.
exec 1>&2

# Cross platform projects tend to avoid non-ASCII filenames; prevent
# them from being added to the repository. We exploit the fact that the
# printable range starts at the space character and ends with tilde.
if [ "$allownonascii" != "true" ] &&
	# Note that the use of brackets around a tr range is ok here, (it's
	# even required, for portability to Solaris 10's /usr/bin/tr), since
	# the square bracket bytes happen to fall in the designated range.
	test $(git diff --cached --name-only --diff-filter=A -z $against |
	  LC_ALL=C tr -d '[ -~]\0' | wc -c) != 0
then
	cat <<\EOF
Error: Attempt to add a non-ASCII file name.

This can cause problems if you want to work with people on other platforms.

To be portable it is advisable to rename the file.

If you know what you are doing you can disable this check using:

  git config hooks.allownonascii true
EOF
	exit 1
fi

# If there are whitespace errors, print the offending file names and fail.
exec git diff-index --check --cached $against --
```

/.git/hooks/applypatch-msg.sample
```
#!/bin/sh
#
# An example hook script to check the commit log message taken by
# applypatch from an e-mail message.
#
# The hook should exit with non-zero status after issuing an
# appropriate message if it wants to stop the commit.  The hook is
# allowed to edit the commit message file.
#
# To enable this hook, rename this file to "applypatch-msg".

. git-sh-setup
commitmsg="$(git rev-parse --git-path hooks/commit-msg)"
test -x "$commitmsg" && exec "$commitmsg" ${1+"$@"}
:
```

/.git/hooks/fsmonitor-watchman.sample
```
#!/usr/bin/perl

use strict;
use warnings;
use IPC::Open2;

# An example hook script to integrate Watchman
# (https://facebook.github.io/watchman/) with git to speed up detecting
# new and modified files.
#
# The hook is passed a version (currently 2) and last update token
# formatted as a string and outputs to stdout a new update token and
# all files that have been modified since the update token. Paths must
# be relative to the root of the working tree and separated by a single NUL.
#
# To enable this hook, rename this file to "query-watchman" and set
# 'git config core.fsmonitor .git/hooks/query-watchman'
#
my ($version, $last_update_token) = @ARGV;

# Uncomment for debugging
# print STDERR "$0 $version $last_update_token\n";

# Check the hook interface version
if ($version ne 2) {
	die "Unsupported query-fsmonitor hook version '$version'.\n" .
	    "Falling back to scanning...\n";
}

my $git_work_tree = get_working_dir();

my $retry = 1;

my $json_pkg;
eval {
	require JSON::XS;
	$json_pkg = "JSON::XS";
	1;
} or do {
	require JSON::PP;
	$json_pkg = "JSON::PP";
};

launch_watchman();

sub launch_watchman {
	my $o = watchman_query();
	if (is_work_tree_watched($o)) {
		output_result($o->{clock}, @{$o->{files}});
	}
}

sub output_result {
	my ($clockid, @files) = @_;

	# Uncomment for debugging watchman output
	# open (my $fh, ">", ".git/watchman-output.out");
	# binmode $fh, ":utf8";
	# print $fh "$clockid\n@files\n";
	# close $fh;

	binmode STDOUT, ":utf8";
	print $clockid;
	print "\0";
	local $, = "\0";
	print @files;
}

sub watchman_clock {
	my $response = qx/watchman clock "$git_work_tree"/;
	die "Failed to get clock id on '$git_work_tree'.\n" .
		"Falling back to scanning...\n" if $? != 0;

	return $json_pkg->new->utf8->decode($response);
}

sub watchman_query {
	my $pid = open2(\*CHLD_OUT, \*CHLD_IN, 'watchman -j --no-pretty')
	or die "open2() failed: $!\n" .
	"Falling back to scanning...\n";

	# In the query expression below we're asking for names of files that
	# changed since $last_update_token but not from the .git folder.
	#
	# To accomplish this, we're using the "since" generator to use the
	# recency index to select candidate nodes and "fields" to limit the
	# output to file names only. Then we're using the "expression" term to
	# further constrain the results.
	my $last_update_line = "";
	if (substr($last_update_token, 0, 1) eq "c") {
		$last_update_token = "\"$last_update_token\"";
		$last_update_line = qq[\n"since": $last_update_token,];
	}
	my $query = <<"	END";
		["query", "$git_work_tree", {$last_update_line
			"fields": ["name"],
			"expression": ["not", ["dirname", ".git"]]
		}]
	END

	# Uncomment for debugging the watchman query
	# open (my $fh, ">", ".git/watchman-query.json");
	# print $fh $query;
	# close $fh;

	print CHLD_IN $query;
	close CHLD_IN;
	my $response = do {local $/; <CHLD_OUT>};

	# Uncomment for debugging the watch response
	# open ($fh, ">", ".git/watchman-response.json");
	# print $fh $response;
	# close $fh;

	die "Watchman: command returned no output.\n" .
	"Falling back to scanning...\n" if $response eq "";
	die "Watchman: command returned invalid output: $response\n" .
	"Falling back to scanning...\n" unless $response =~ /^\{/;

	return $json_pkg->new->utf8->decode($response);
}

sub is_work_tree_watched {
	my ($output) = @_;
	my $error = $output->{error};
	if ($retry > 0 and $error and $error =~ m/unable to resolve root .* directory (.*) is not watched/) {
		$retry--;
		my $response = qx/watchman watch "$git_work_tree"/;
		die "Failed to make watchman watch '$git_work_tree'.\n" .
		    "Falling back to scanning...\n" if $? != 0;
		$output = $json_pkg->new->utf8->decode($response);
		$error = $output->{error};
		die "Watchman: $error.\n" .
		"Falling back to scanning...\n" if $error;

		# Uncomment for debugging watchman output
		# open (my $fh, ">", ".git/watchman-output.out");
		# close $fh;

		# Watchman will always return all files on the first query so
		# return the fast "everything is dirty" flag to git and do the
		# Watchman query just to get it over with now so we won't pay
		# the cost in git to look up each individual file.
		my $o = watchman_clock();
		$error = $output->{error};

		die "Watchman: $error.\n" .
		"Falling back to scanning...\n" if $error;

		output_result($o->{clock}, ("/"));
		$last_update_token = $o->{clock};

		eval { launch_watchman() };
		return 0;
	}

	die "Watchman: $error.\n" .
	"Falling back to scanning...\n" if $error;

	return 1;
}

sub get_working_dir {
	my $working_dir;
	if ($^O =~ 'msys' || $^O =~ 'cygwin') {
		$working_dir = Win32::GetCwd();
		$working_dir =~ tr/\\/\//;
	} else {
		require Cwd;
		$working_dir = Cwd::cwd();
	}

	return $working_dir;
}
```

/.git/hooks/pre-receive.sample
```
#!/bin/sh
#
# An example hook script to make use of push options.
# The example simply echoes all push options that start with 'echoback='
# and rejects all pushes when the "reject" push option is used.
#
# To enable this hook, rename this file to "pre-receive".

if test -n "$GIT_PUSH_OPTION_COUNT"
then
	i=0
	while test "$i" -lt "$GIT_PUSH_OPTION_COUNT"
	do
		eval "value=\$GIT_PUSH_OPTION_$i"
		case "$value" in
		echoback=*)
			echo "echo from the pre-receive-hook: ${value#*=}" >&2
			;;
		reject)
			exit 1
		esac
		i=$((i + 1))
	done
fi
```

/.git/hooks/prepare-commit-msg.sample
```
#!/bin/sh
#
# An example hook script to prepare the commit log message.
# Called by "git commit" with the name of the file that has the
# commit message, followed by the description of the commit
# message's source.  The hook's purpose is to edit the commit
# message file.  If the hook fails with a non-zero status,
# the commit is aborted.
#
# To enable this hook, rename this file to "prepare-commit-msg".

# This hook includes three examples. The first one removes the
# "# Please enter the commit message..." help message.
#
# The second includes the output of "git diff --name-status -r"
# into the message, just before the "git status" output.  It is
# commented because it doesn't cope with --amend or with squashed
# commits.
#
# The third example adds a Signed-off-by line to the message, that can
# still be edited.  This is rarely a good idea.

COMMIT_MSG_FILE=$1
COMMIT_SOURCE=$2
SHA1=$3

/usr/bin/perl -i.bak -ne 'print unless(m/^. Please enter the commit message/..m/^#$/)' "$COMMIT_MSG_FILE"

# case "$COMMIT_SOURCE,$SHA1" in
#  ,|template,)
#    /usr/bin/perl -i.bak -pe '
#       print "\n" . `git diff --cached --name-status -r`
# 	 if /^#/ && $first++ == 0' "$COMMIT_MSG_FILE" ;;
#  *) ;;
# esac

# SOB=$(git var GIT_COMMITTER_IDENT | sed -n 's/^\(.*>\).*$/Signed-off-by: \1/p')
# git interpret-trailers --in-place --trailer "$SOB" "$COMMIT_MSG_FILE"
# if test -z "$COMMIT_SOURCE"
# then
#   /usr/bin/perl -i.bak -pe 'print "\n" if !$first_line++' "$COMMIT_MSG_FILE"
# fi
```

/.git/hooks/post-update.sample
```
#!/bin/sh
#
# An example hook script to prepare a packed repository for use over
# dumb transports.
#
# To enable this hook, rename this file to "post-update".

exec git update-server-info
```

/.git/hooks/pre-merge-commit.sample
```
#!/bin/sh
#
# An example hook script to verify what is about to be committed.
# Called by "git merge" with no arguments.  The hook should
# exit with non-zero status after issuing an appropriate message to
# stderr if it wants to stop the merge commit.
#
# To enable this hook, rename this file to "pre-merge-commit".

. git-sh-setup
test -x "$GIT_DIR/hooks/pre-commit" &&
        exec "$GIT_DIR/hooks/pre-commit"
:
```

/.git/hooks/pre-applypatch.sample
```
#!/bin/sh
#
# An example hook script to verify what is about to be committed
# by applypatch from an e-mail message.
#
# The hook should exit with non-zero status after issuing an
# appropriate message if it wants to stop the commit.
#
# To enable this hook, rename this file to "pre-applypatch".

. git-sh-setup
precommit="$(git rev-parse --git-path hooks/pre-commit)"
test -x "$precommit" && exec "$precommit" ${1+"$@"}
:
```

/.git/hooks/pre-push.sample
```
#!/bin/sh

# An example hook script to verify what is about to be pushed.  Called by "git
# push" after it has checked the remote status, but before anything has been
# pushed.  If this script exits with a non-zero status nothing will be pushed.
#
# This hook is called with the following parameters:
#
# $1 -- Name of the remote to which the push is being done
# $2 -- URL to which the push is being done
#
# If pushing without using a named remote those arguments will be equal.
#
# Information about the commits which are being pushed is supplied as lines to
# the standard input in the form:
#
#   <local ref> <local oid> <remote ref> <remote oid>
#
# This sample shows how to prevent push of commits where the log message starts
# with "WIP" (work in progress).

remote="$1"
url="$2"

zero=$(git hash-object --stdin </dev/null | tr '[0-9a-f]' '0')

while read local_ref local_oid remote_ref remote_oid
do
	if test "$local_oid" = "$zero"
	then
		# Handle delete
		:
	else
		if test "$remote_oid" = "$zero"
		then
			# New branch, examine all commits
			range="$local_oid"
		else
			# Update to existing branch, examine new commits
			range="$remote_oid..$local_oid"
		fi

		# Check for WIP commit
		commit=$(git rev-list -n 1 --grep '^WIP' "$range")
		if test -n "$commit"
		then
			echo >&2 "Found WIP commit in $local_ref, not pushing"
			exit 1
		fi
	fi
done

exit 0
```

/.git/hooks/update.sample
```
#!/bin/sh
#
# An example hook script to block unannotated tags from entering.
# Called by "git receive-pack" with arguments: refname sha1-old sha1-new
#
# To enable this hook, rename this file to "update".
#
# Config
# ------
# hooks.allowunannotated
#   This boolean sets whether unannotated tags will be allowed into the
#   repository.  By default they won't be.
# hooks.allowdeletetag
#   This boolean sets whether deleting tags will be allowed in the
#   repository.  By default they won't be.
# hooks.allowmodifytag
#   This boolean sets whether a tag may be modified after creation. By default
#   it won't be.
# hooks.allowdeletebranch
#   This boolean sets whether deleting branches will be allowed in the
#   repository.  By default they won't be.
# hooks.denycreatebranch
#   This boolean sets whether remotely creating branches will be denied
#   in the repository.  By default this is allowed.
#

# --- Command line
refname="$1"
oldrev="$2"
newrev="$3"

# --- Safety check
if [ -z "$GIT_DIR" ]; then
	echo "Don't run this script from the command line." >&2
	echo " (if you want, you could supply GIT_DIR then run" >&2
	echo "  $0 <ref> <oldrev> <newrev>)" >&2
	exit 1
fi

if [ -z "$refname" -o -z "$oldrev" -o -z "$newrev" ]; then
	echo "usage: $0 <ref> <oldrev> <newrev>" >&2
	exit 1
fi

# --- Config
allowunannotated=$(git config --type=bool hooks.allowunannotated)
allowdeletebranch=$(git config --type=bool hooks.allowdeletebranch)
denycreatebranch=$(git config --type=bool hooks.denycreatebranch)
allowdeletetag=$(git config --type=bool hooks.allowdeletetag)
allowmodifytag=$(git config --type=bool hooks.allowmodifytag)

# check for no description
projectdesc=$(sed -e '1q' "$GIT_DIR/description")
case "$projectdesc" in
"Unnamed repository"* | "")
	echo "*** Project description file hasn't been set" >&2
	exit 1
	;;
esac

# --- Check types
# if $newrev is 0000...0000, it's a commit to delete a ref.
zero=$(git hash-object --stdin </dev/null | tr '[0-9a-f]' '0')
if [ "$newrev" = "$zero" ]; then
	newrev_type=delete
else
	newrev_type=$(git cat-file -t $newrev)
fi

case "$refname","$newrev_type" in
	refs/tags/*,commit)
		# un-annotated tag
		short_refname=${refname##refs/tags/}
		if [ "$allowunannotated" != "true" ]; then
			echo "*** The un-annotated tag, $short_refname, is not allowed in this repository" >&2
			echo "*** Use 'git tag [ -a | -s ]' for tags you want to propagate." >&2
			exit 1
		fi
		;;
	refs/tags/*,delete)
		# delete tag
		if [ "$allowdeletetag" != "true" ]; then
			echo "*** Deleting a tag is not allowed in this repository" >&2
			exit 1
		fi
		;;
	refs/tags/*,tag)
		# annotated tag
		if [ "$allowmodifytag" != "true" ] && git rev-parse $refname > /dev/null 2>&1
		then
			echo "*** Tag '$refname' already exists." >&2
			echo "*** Modifying a tag is not allowed in this repository." >&2
			exit 1
		fi
		;;
	refs/heads/*,commit)
		# branch
		if [ "$oldrev" = "$zero" -a "$denycreatebranch" = "true" ]; then
			echo "*** Creating a branch is not allowed in this repository" >&2
			exit 1
		fi
		;;
	refs/heads/*,delete)
		# delete branch
		if [ "$allowdeletebranch" != "true" ]; then
			echo "*** Deleting a branch is not allowed in this repository" >&2
			exit 1
		fi
		;;
	refs/remotes/*,commit)
		# tracking branch
		;;
	refs/remotes/*,delete)
		# delete tracking branch
		if [ "$allowdeletebranch" != "true" ]; then
			echo "*** Deleting a tracking branch is not allowed in this repository" >&2
			exit 1
		fi
		;;
	*)
		# Anything else (is there anything else?)
		echo "*** Update hook: unknown type of update to ref $refname of type $newrev_type" >&2
		exit 1
		;;
esac

# --- Finished
exit 0
```

/.git/hooks/push-to-checkout.sample
```
#!/bin/sh

# An example hook script to update a checked-out tree on a git push.
#
# This hook is invoked by git-receive-pack(1) when it reacts to git
# push and updates reference(s) in its repository, and when the push
# tries to update the branch that is currently checked out and the
# receive.denyCurrentBranch configuration variable is set to
# updateInstead.
#
# By default, such a push is refused if the working tree and the index
# of the remote repository has any difference from the currently
# checked out commit; when both the working tree and the index match
# the current commit, they are updated to match the newly pushed tip
# of the branch. This hook is to be used to override the default
# behaviour; however the code below reimplements the default behaviour
# as a starting point for convenient modification.
#
# The hook receives the commit with which the tip of the current
# branch is going to be updated:
commit=$1

# It can exit with a non-zero status to refuse the push (when it does
# so, it must not modify the index or the working tree).
die () {
	echo >&2 "$*"
	exit 1
}

# Or it can make any necessary changes to the working tree and to the
# index to bring them to the desired state when the tip of the current
# branch is updated to the new commit, and exit with a zero status.
#
# For example, the hook can simply run git read-tree -u -m HEAD "$1"
# in order to emulate git fetch that is run in the reverse direction
# with git push, as the two-tree form of git read-tree -u -m is
# essentially the same as git switch or git checkout that switches
# branches while keeping the local changes in the working tree that do
# not interfere with the difference between the branches.

# The below is a more-or-less exact translation to shell of the C code
# for the default behaviour for git's push-to-checkout hook defined in
# the push_to_deploy() function in builtin/receive-pack.c.
#
# Note that the hook will be executed from the repository directory,
# not from the working tree, so if you want to perform operations on
# the working tree, you will have to adapt your code accordingly, e.g.
# by adding "cd .." or using relative paths.

if ! git update-index -q --ignore-submodules --refresh
then
	die "Up-to-date check failed"
fi

if ! git diff-files --quiet --ignore-submodules --
then
	die "Working directory has unstaged changes"
fi

# This is a rough translation of:
#
#   head_has_history() ? "HEAD" : EMPTY_TREE_SHA1_HEX
if git cat-file -e HEAD 2>/dev/null
then
	head=HEAD
else
	head=$(git hash-object -t tree --stdin </dev/null)
fi

if ! git diff-index --quiet --cached --ignore-submodules $head --
then
	die "Working directory has staged changes"
fi

if ! git read-tree -u -m "$commit"
then
	die "Could not update working tree to new HEAD"
fi
```

/.git/refs/heads/conversion
```
3b4d82be9cb664fab6bcc00fb3b56da2aaf046f7
```

/.git/refs/heads/main
```
42c9691a0b2900adfab655fbfefab7eb04f76ac5
```

/.git/refs/remotes/origin/gh-pages
```
f37d5bb4edbf8207d8ddffb19afc2e646e88990c
```

/.git/refs/remotes/origin/HEAD
```
ref: refs/remotes/origin/main
```

/.git/refs/remotes/origin/conversion
```
3b4d82be9cb664fab6bcc00fb3b56da2aaf046f7
```

/.git/refs/remotes/origin/main
```
42c9691a0b2900adfab655fbfefab7eb04f76ac5
```

/src/env.d.ts
```
/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
```

/src/images/mario-initial.svg
```
<svg enable-background="new 0 0 512 512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m3.000005 513c-.666676-.333313-1.783675-.548035-1.909042-1.023956-.287415-1.090943-.090963-2.309388-.090963-3.476044 0-169.166656 0-338.333328 0-507.5 169.166672 0 338.333344-.002586 507.5.041366 1.500061.00039 3 .6253 4.158813 1.488268-2.153198 1.860416-3.965179 3.191198-6.237579 4.49874-166.687408-.023241-332.914368-.023241-499.421769-.023241v6.490296c0 120.471917-.005332 240.943841.002805 361.415765.002972 43.989197.037976 87.978393-.082226 132.278137-1.400405 2.143921-2.660217 3.977295-3.920039 5.810669z" fill="#fff"/><path d="m506.881653 7.051612c1.811981-1.33078 3.623962-2.661562 5.77716-4.021978.341187 168.470366.343812 336.970366.299805 505.470366-.000366 1.500061-.625244 3-1.488647 4.158813-1.860535-2.153106-3.190949-3.965087-4.498505-6.237609.024902-165.432434.027222-330.404328.024048-495.37624-.000031-1.331119-.074249-2.662235-.113861-3.993352z" fill="#f2f2f2"/><path d="m506.948639 506.881744c1.330383 1.811982 2.660797 3.623963 4.021271 5.777069-168.990815.341187-338.011704.341187-507.501245.341187.791162-1.833374 2.050974-3.666748 3.913427-5.757935 165.925937-.25241 331.249225-.246826 496.572528-.246521.998017 0 1.996003-.074249 2.994019-.1138z" fill="#e6e6e6"/><path d="m506.971466 506.421204c-1.020843.500091-2.018829.57434-3.016846.57434-165.323303-.000305-330.646591-.005889-496.431936-.064025-.482438-44.041932-.517442-88.031128-.520414-132.020325-.008137-120.471924-.002805-240.943848-.002805-361.415765 0-1.975526 0-3.951052 0-6.490296 166.507401 0 332.734361 0 499.421739.023239.500061 1.354357.574279 2.685473.57431 4.016592.003174 164.971912.000854 329.943806-.024048 495.37624m-214.065826-354.122422c-6.250428-15.377639-17.692047-25.341362-33.279755-30.038078-9.164978-2.761482-18.762924-4.702545-28.293427-5.509872-21.953689-1.859703-43.936614-1.880318-65.412185 4.275825-12.096405 3.467537-22.94841 8.999893-30.152451 19.897934-1.660415 2.51181-2.908188 5.296387-4.34584 7.955429-.306229-.067612-.612457-.135239-.918686-.202865 0-9.054841 0-18.109696 0-27.225113-27.491806 0-54.416649 0-81.594475 0v270.288437h81.754158c0-2.02118 0-3.815766 0-5.610352.000015-59.161713-.008133-118.323425.013565-177.485123.002014-5.498092.00737-11.007126.332474-16.49205.88649-14.955643 5.312042-21.241867 18.158646-23.58255 17.30223-3.152527 34.808395-3.353104 52.197265-.460358 7.792191 1.29628 12.948227 6.035721 13.848587 14.253342.796341 7.26825 1.69365 14.577759 1.709946 21.870911.135635 60.6613.07727 121.322982.077499 181.984573.000016 1.787689.000016 3.575348.000016 5.460419h81.873413c0-2.126129-.000031-3.933045-.000031-5.73999.000153-59.828309-.031647-119.656678.046539-179.484894.008454-6.478745.382508-12.985382 1.064942-19.428467 1.123504-10.607559 5.717438-16.036346 16.19339-18.145355 17.113861-3.445282 34.420929-3.574921 51.671203-1.016968 10.566071 1.566772 15.173737 6.607971 16.169037 17.131332.610596 6.455857 1.026551 12.957169 1.034851 19.438706.077362 60.494842.047425 120.989776.048554 181.48471.00003 1.933472 0 3.866944 0 5.694855h81.872833c0-2.21875 0-4.04953 0-5.88031 0-62.661407.038971-125.322906-.04776-187.984192-.011261-8.147232-.091919-16.368728-1.138672-24.426147-3.063446-23.580719-9.960113-45.351402-45.849182-53.43087-27.486115-6.187752-55.261017-5.718605-82.822418-.33902-20.188751 3.940552-35.490906 14.583961-42.634247 35.227516-.611694-.800003-.997986-1.305206-1.577789-2.481415z" fill="#1c3b63"/><path d="m293.002411 152.634277c.483032.840714.869324 1.345917 1.481018 2.14592 7.143341-20.643555 22.445496-31.286964 42.634247-35.227516 27.561401-5.379585 55.336303-5.848732 82.822418.33902 35.889069 8.079468 42.785736 29.850151 45.849182 53.43087 1.046753 8.057419 1.127411 16.278915 1.138672 24.426147.086731 62.661286.04776 125.322785.04776 187.984192v5.88031c-27.151459 0-54.200439 0-81.872833 0 0-1.827911.00003-3.761383 0-5.694855-.001129-60.494934.028808-120.989868-.048554-181.48471-.0083-6.481537-.424255-12.982849-1.034851-19.438706-.9953-10.523361-5.602966-15.56456-16.169037-17.131332-17.250274-2.557953-34.557342-2.428314-51.671203 1.016968-10.475952 2.109009-15.069886 7.537796-16.19339 18.145355-.682434 6.443085-1.056488 12.949722-1.064942 19.428467-.078186 59.828216-.046386 119.656585-.046539 179.484894 0 1.806945.000031 3.613861.000031 5.73999-27.347138 0-54.392136 0-81.873413 0 0-1.885071 0-3.67273-.000016-5.460419-.000229-60.661591.058136-121.323273-.077499-181.984573-.016296-7.293152-.913605-14.602661-1.709946-21.870911-.90036-8.217621-6.056396-12.957062-13.848587-14.253342-17.38887-2.892746-34.895035-2.692169-52.197265.460358-12.846604 2.340683-17.272156 8.626907-18.158646 23.58255-.325104 5.484924-.33046 10.993958-.332474 16.49205-.021698 59.161698-.01355 118.32341-.013565 177.485123v5.610352c-27.532669 0-54.599151 0-81.754158 0 0-90.180146 0-180.099228 0-270.288437h81.594475v27.225113c.306229.067626.612457.135253.918686.202865 1.437652-2.659042 2.685425-5.443619 4.34584-7.955429 7.204041-10.898041 18.056046-16.430397 30.152451-19.897934 21.475571-6.156143 43.458496-6.135528 65.412185-4.275825 9.530503.807327 19.128449 2.74839 28.293427 5.509872 15.587708 4.696716 27.029327 14.660439 33.376526 30.373573z" fill="#fefefe"/></svg>```

/src/images/icon.svg
```
<svg xmlns="http://www.w3.org/2000/svg" width="250" height="40" viewBox="0 0 500 80" version="1.1"><path d="M 20 36.500 L 20 69 52.500 69 L 85 69 85 36.500 L 85 4 52.500 4 L 20 4 20 36.500 M 40.250 20.432 C 38.462 21.241, 37 21.475, 37 20.952 C 37 20.428, 34.525 20, 31.500 20 L 26 20 26 37 L 26 54 31.500 54 L 37 54 37 40.519 C 37 27.126, 37.016 27.034, 39.398 26.436 C 40.717 26.105, 42.855 25.984, 44.148 26.167 C 46.471 26.496, 46.503 26.668, 46.778 40.250 L 47.056 54 52.528 54 L 58 54 58 40.519 C 58 27.126, 58.016 27.034, 60.398 26.436 C 61.717 26.105, 63.855 25.984, 65.148 26.167 C 67.471 26.496, 67.503 26.668, 67.778 40.250 L 68.056 54 73.528 54 L 79 54 79 39.556 C 79 25.728, 78.897 24.992, 76.587 22.306 C 74.404 19.768, 73.554 19.500, 67.692 19.500 C 62.721 19.500, 60.719 19.944, 59.105 21.405 C 57.126 23.196, 56.888 23.209, 55.137 21.624 C 52.527 19.262, 44.291 18.603, 40.250 20.432" stroke="none" fill="#1c3c64" fill-rule="evenodd"/><path d="M 151 11 L 151 15 156.500 15 L 162 15 162 11 L 162 7 156.500 7 L 151 7 151 11 M 40.250 20.432 C 38.462 21.241, 37 21.475, 37 20.952 C 37 20.428, 34.525 20, 31.500 20 L 26 20 26 37 L 26 54 31.500 54 L 37 54 37 40.519 C 37 27.126, 37.016 27.034, 39.398 26.436 C 40.717 26.105, 42.855 25.984, 44.148 26.167 C 46.471 26.496, 46.503 26.668, 46.778 40.250 L 47.056 54 52.528 54 L 58 54 58 40.519 C 58 27.126, 58.016 27.034, 60.398 26.436 C 61.717 26.105, 63.855 25.984, 65.148 26.167 C 67.471 26.496, 67.503 26.668, 67.778 40.250 L 68.056 54 73.528 54 L 79 54 79 39.556 C 79 25.728, 78.897 24.992, 76.587 22.306 C 74.404 19.768, 73.554 19.500, 67.692 19.500 C 62.721 19.500, 60.719 19.944, 59.105 21.405 C 57.126 23.196, 56.888 23.209, 55.137 21.624 C 52.527 19.262, 44.291 18.603, 40.250 20.432 M 88.750 19.689 C 87.502 20.015, 87 21.155, 87 23.659 L 87 27.171 94.369 26.480 C 102.915 25.679, 106 26.755, 106 30.535 C 106 32.962, 105.868 33, 97.500 33 C 86.313 33, 85 34.139, 85 43.845 C 85 49.462, 85.366 51.021, 87.037 52.534 C 89.849 55.078, 99.773 55.759, 103.918 53.691 C 105.613 52.845, 107 52.569, 107 53.077 C 107 53.584, 109.250 54, 112 54 L 117 54 117 39.611 C 117 23.176, 116.387 21.570, 109.500 19.975 C 105.448 19.036, 91.961 18.850, 88.750 19.689 M 137.750 20.572 C 136.157 21.436, 135 21.630, 135 21.032 C 135 20.448, 132.613 20, 129.500 20 L 124 20 124 37 L 124 54 129.500 54 L 135 54 135 43.155 C 135 30.538, 135.851 29, 142.829 29 L 147 29 147 24 C 147 19.017, 146.989 19, 143.750 19.040 C 141.963 19.062, 139.262 19.751, 137.750 20.572 M 176 20.689 C 170.475 23.548, 168.852 27.841, 169.203 38.671 C 169.466 46.790, 169.780 48.140, 171.935 50.433 C 175.140 53.842, 181.002 55.329, 189.008 54.762 C 196.628 54.223, 201.139 52.185, 202.805 48.528 C 203.462 47.086, 204 41.855, 204 36.903 C 204 22.584, 201.599 20.021, 187.500 19.292 C 181.151 18.964, 178.778 19.252, 176 20.689 M 230.179 20.137 C 225.485 21.490, 224 25.638, 224 37.403 C 224 48.942, 224.916 51.649, 229.462 53.548 C 233.895 55.401, 241.703 55.403, 245.250 53.553 L 248 52.119 248 56.036 C 248 61.859, 245.228 63.313, 235.013 62.849 L 227 62.485 227 66.243 L 227 70 236.750 69.994 C 248.704 69.988, 253.111 68.846, 256.436 64.894 L 259 61.847 259 40.923 L 259 20 254 20 C 251.250 20, 249 20.423, 249 20.941 C 249 21.458, 247.762 21.236, 246.250 20.447 C 243.169 18.840, 235.215 18.686, 230.179 20.137 M 316.123 19.943 C 314.266 20.414, 311.566 21.979, 310.123 23.420 C 307.682 25.859, 307.476 26.769, 307.159 36.507 C 306.820 46.931, 306.830 46.984, 309.738 49.892 C 314.347 54.501, 322.526 55.986, 334.360 54.364 C 338.974 53.732, 339 53.707, 339 49.845 C 339 46.098, 338.903 45.988, 336.250 46.693 C 334.738 47.095, 330.651 47.441, 327.169 47.462 C 320.279 47.503, 318 45.974, 318 41.309 C 318 39.037, 318.176 39, 329 39 L 340 39 340 33.565 C 340 23.028, 336.976 19.921, 326.218 19.408 C 322.523 19.231, 317.980 19.472, 316.123 19.943 M 359.750 20.572 C 358.157 21.436, 357 21.630, 357 21.032 C 357 20.448, 354.613 20, 351.500 20 L 346 20 346 37 L 346 54 351.500 54 L 357 54 357 43.155 C 357 30.538, 357.851 29, 364.829 29 L 369 29 369 24 C 369 19.017, 368.989 19, 365.750 19.040 C 363.962 19.062, 361.262 19.751, 359.750 20.572 M 386.750 20.572 C 385.157 21.436, 384 21.630, 384 21.032 C 384 20.448, 381.613 20, 378.500 20 L 373 20 373 37 L 373 54 378.500 54 L 384 54 384 43.155 C 384 30.538, 384.851 29, 391.829 29 L 396 29 396 24 C 396 19.017, 395.989 19, 392.750 19.040 C 390.962 19.062, 388.262 19.751, 386.750 20.572 M 402.750 19.689 C 401.502 20.015, 401 21.155, 401 23.659 L 401 27.171 408.369 26.480 C 416.915 25.679, 420 26.755, 420 30.535 C 420 32.951, 419.840 33, 411.934 33 C 407.498 33, 403.013 33.458, 401.968 34.017 C 397.679 36.312, 397.095 48.966, 401.110 52.600 C 403.850 55.079, 413.836 55.727, 417.918 53.691 C 419.613 52.845, 421 52.569, 421 53.077 C 421 53.584, 423.250 54, 426 54 L 431 54 431 39.611 C 431 23.176, 430.387 21.570, 423.500 19.975 C 419.448 19.036, 405.961 18.850, 402.750 19.689 M 151 37 L 151 54 156.500 54 L 162 54 162 37 L 162 20 156.500 20 L 151 20 151 37 M 267.178 34.975 C 267.470 48.576, 267.691 50.141, 269.583 52.030 C 272.462 54.905, 281.232 55.766, 286.257 53.666 C 288.316 52.806, 290 52.529, 290 53.051 C 290 53.573, 292.475 54, 295.500 54 L 301 54 301 37 L 301 20 295.579 20 L 290.159 20 289.829 33.038 C 289.470 47.278, 289.180 47.956, 283.450 47.985 C 278.434 48.010, 278 46.801, 278 32.800 L 278 20 272.428 20 L 266.856 20 267.178 34.975 M 183 26.729 C 180.446 27.701, 180.031 29.228, 180.015 37.715 C 179.999 46.684, 180.828 48, 186.500 48 C 192.262 48, 193 46.751, 193 37 C 193 29.195, 192.756 27.940, 191.066 27.035 C 189 25.930, 185.453 25.795, 183 26.729 M 236.649 27.268 C 235.185 28.338, 234.961 29.932, 235.208 37.496 C 235.489 46.132, 235.594 46.490, 238.098 47.368 C 239.528 47.869, 242.340 47.971, 244.348 47.594 L 248 46.909 248 37.071 C 248 27.714, 247.890 27.204, 245.750 26.630 C 242.114 25.656, 238.508 25.908, 236.649 27.268 M 319.750 27.080 C 318.788 27.641, 318 28.977, 318 30.050 C 318 31.767, 318.718 32, 324 32 C 329.298 32, 330 31.770, 330 30.035 C 330 26.573, 323.726 24.764, 319.750 27.080 M 96.750 40.080 C 95.713 40.684, 95 42.294, 95 44.031 C 95 47.268, 97.340 48.433, 102.629 47.828 C 105.230 47.531, 105.529 47.100, 105.807 43.250 L 106.115 39 102.307 39.030 C 100.213 39.047, 97.713 39.519, 96.750 40.080 M 410.750 40.080 C 409.713 40.684, 409 42.294, 409 44.031 C 409 47.268, 411.340 48.433, 416.629 47.828 C 419.230 47.531, 419.529 47.100, 419.807 43.250 L 420.115 39 416.307 39.030 C 414.213 39.047, 411.712 39.519, 410.750 40.080" stroke="none" fill="#fbfbfb" fill-rule="evenodd"/></svg>```

/src/images/starlight/screwfast_hero_dark.svg
```
<svg xmlns="http://www.w3.org/2000/svg" width="521" height="309" fill="none">
  <rect width="78.937" height="18.485" x="269" y="172.911" fill="#eab308" rx="9.242" transform="rotate(-43.075 269 172.911)"/>
  <rect width="78.937" height="18.485" x="319" y="172.911" fill="#eab308" rx="9.242" transform="rotate(-43.075 319 172.911)"/>
  <rect width="78.937" height="18.485" x="369.285" y="172.911" fill="#eab308" rx="9.242" transform="rotate(-43.075 369.285 172.911)"/>
  <rect width="28.464" height="18.485" x="419.57" y="172.911" fill="#eab308" rx="9.242" transform="rotate(-43.075 419.57 172.911)"/>
  <path fill="#eab308" d="M499.804 146.068c7.03 2.636 6.885 12.63-.219 15.061l-18.951 6.483c-5.238 1.792-10.669-2.15-10.589-7.686l.196-13.514c.081-5.535 5.624-9.318 10.808-7.374l18.755 7.03Z"/>
  <path fill="#404040" d="M141.933 101.584c.171 5.803-1.024 10.837-3.584 15.104-5.717 9.387-15.701 14.336-29.952 14.848-6.485.256-13.61-1.323-21.376-4.736l.256-19.328c1.28 1.024 2.944 2.219 4.992 3.584 3.67 2.475 7.808 3.712 12.416 3.712 12.203 0 18.304-4.352 18.304-13.056v-.256c0-4.01-2.219-7.296-6.656-9.856-2.389-1.365-6.827-2.987-13.312-4.864a137.675 137.675 0 0 1-8.32-2.816c-10.496-5.888-15.744-14.421-15.744-25.6v-.768c0-5.12 1.408-9.899 4.224-14.336 2.816-4.523 6.528-8.021 11.136-10.496 4.693-2.56 9.728-3.925 15.104-4.096 7.253-.17 14.08 1.195 20.48 4.096v18.304c-4.693-4.096-10.88-6.144-18.56-6.144-2.816 0-5.419.725-7.808 2.176-3.67 2.219-5.504 5.461-5.504 9.728 0 5.803 4.267 9.984 12.8 12.544 1.536.512 4.565 1.45 9.088 2.816 7.68 2.304 13.184 5.76 16.512 10.368 3.413 4.608 5.248 10.965 5.504 19.072Zm66.758 20.736c-6.656 6.4-14.549 9.6-23.68 9.6-9.643 0-17.792-3.285-24.448-9.856-6.571-6.656-9.856-14.805-9.856-24.448 0-9.557 3.328-17.621 9.984-24.192 6.656-6.656 14.763-9.984 24.32-9.984 8.704 0 16.299 2.944 22.784 8.832l-10.368 13.952c-3.328-3.67-7.467-5.504-12.416-5.504-4.693 0-8.704 1.664-12.032 4.992-3.328 3.243-4.992 7.21-4.992 11.904 0 4.693 1.664 8.704 4.992 12.032 3.328 3.328 7.339 4.992 12.032 4.992 5.12 0 9.344-1.963 12.672-5.888l11.008 13.568Zm42.82-41.6c-4.693 0-8.704 1.664-12.032 4.992-3.328 3.243-4.992 7.21-4.992 11.904V130h-17.28V97.616c0-9.557 3.328-17.621 9.984-24.192 6.656-6.656 14.763-9.984 24.32-9.984v17.28Zm77.051 16.896c0 1.707-.128 3.413-.384 5.12H278.13c1.109 3.584 3.157 6.485 6.144 8.704 2.987 2.133 6.357 3.2 10.112 3.2 5.205 0 9.515-2.005 12.928-6.016l10.496 13.952c-6.571 6.229-14.379 9.344-23.424 9.344-9.643 0-17.792-3.285-24.448-9.856-6.571-6.656-9.856-14.805-9.856-24.448 0-9.557 3.328-17.621 9.984-24.192 6.656-6.656 14.763-9.984 24.32-9.984s17.621 3.328 24.192 9.984c6.656 6.57 9.984 14.635 9.984 24.192Zm-19.328-7.808c-3.157-6.059-8.107-9.088-14.848-9.088-6.827 0-11.819 3.03-14.976 9.088h29.824Zm145.596 7.936c0 9.643-3.328 17.792-9.984 24.448-6.571 6.571-14.677 9.856-24.32 9.856-9.472 0-17.579-3.413-24.32-10.24-6.741 6.827-14.848 10.24-24.32 10.24-9.643 0-17.792-3.285-24.448-9.856-6.571-6.656-9.856-14.805-9.856-24.448V63.568h17.28v34.176c0 4.693 1.664 8.704 4.992 12.032 3.328 3.328 7.339 4.992 12.032 4.992s8.661-1.664 11.904-4.992c3.328-3.328 4.992-7.339 4.992-12.032l.128-34.176h17.28v43.008h-.128c3.328 5.461 8.149 8.192 14.464 8.192 4.693 0 8.661-1.664 11.904-4.992 3.328-3.328 4.992-7.339 4.992-12.032l.128-34.176h17.28v34.176Z"/>
  <path fill="#404040" d="M56.064 181.616H26.24V230H8.832V128.624h47.232v14.848H26.24v20.096h29.824v18.048ZM147.389 230h-18.304l-3.712-9.984c-6.827 8.021-15.531 12.032-26.112 12.032-9.557 0-17.664-3.328-24.32-9.984-6.57-6.656-9.856-14.72-9.856-24.192 0-7.253 2.048-13.781 6.144-19.584 4.096-5.888 9.557-10.069 16.384-12.544 4.01-1.451 7.936-2.176 11.776-2.176 7.253 0 13.781 2.091 19.584 6.272 5.888 4.096 10.069 9.557 12.544 16.384L147.389 230Zm-31.104-32.128c0-5.973-2.432-10.624-7.296-13.952-2.816-1.963-6.059-2.944-9.728-2.944-5.973 0-10.581 2.389-13.824 7.168-2.048 2.987-3.072 6.229-3.072 9.728 0 5.888 2.432 10.496 7.296 13.824 2.987 2.048 6.187 3.072 9.6 3.072 4.693 0 8.704-1.621 12.032-4.864 3.328-3.328 4.992-7.339 4.992-12.032Zm92.015 12.544c0 4.096-1.365 7.808-4.096 11.136-5.461 6.656-13.227 9.856-23.296 9.6-4.011-.085-8.405-.981-13.184-2.688-4.693-1.707-8.533-3.84-11.52-6.4l9.6-12.416c4.608 4.352 9.515 6.528 14.72 6.528h.384c2.133 0 4.053-.384 5.76-1.152 2.219-1.024 3.328-2.475 3.328-4.352v-.512c-.256-1.963-1.579-3.371-3.968-4.224-.939-.171-2.944-.555-6.016-1.152-3.84-.768-7.083-1.707-9.728-2.816-7.765-3.328-11.648-9.173-11.648-17.536 0-8.021 3.968-14.037 11.904-18.048 3.499-1.792 7.296-2.731 11.392-2.816 4.267-.085 8.704.64 13.312 2.176 5.291 1.792 9.045 4.139 11.264 7.04l-11.52 10.368c-2.987-2.987-6.229-4.48-9.728-4.48-5.461 0-8.192 1.792-8.192 5.376v.256c0 1.707 2.219 3.157 6.656 4.352.341.085 3.157.64 8.448 1.664 10.752 2.048 16.128 8.619 16.128 19.712v.384ZM251.511 230c-9.557 0-17.664-3.285-24.32-9.856-6.656-6.656-9.984-14.763-9.984-24.32v-67.2h17.28v34.944h17.024v14.72h-17.024v17.536c0 4.693 1.664 8.704 4.992 12.032 3.328 3.243 7.339 4.864 12.032 4.864V230Z"/>
</svg>
```

/src/images/starlight/screwfast_logo.svg
```
<svg xmlns="http://www.w3.org/2000/svg" width="521" height="226" fill="none">
  <rect width="78.937" height="18.485" x="269" y="154.911" fill="#facc15" rx="9.242" transform="rotate(-43.075 269 154.911)"/>
  <rect width="78.937" height="18.485" x="319" y="154.911" fill="#facc15" rx="9.242" transform="rotate(-43.075 319 154.911)"/>
  <rect width="78.937" height="18.485" x="369.285" y="154.911" fill="#facc15" rx="9.242" transform="rotate(-43.075 369.285 154.911)"/>
  <rect width="28.464" height="18.485" x="419.57" y="154.911" fill="#facc15" rx="9.242" transform="rotate(-43.075 419.57 154.911)"/>
  <path fill="#facc15" d="M499.804 128.068c7.03 2.636 6.885 12.63-.219 15.061l-18.951 6.483c-5.238 1.792-10.669-2.15-10.589-7.686l.196-13.514c.081-5.535 5.624-9.318 10.808-7.374l18.755 7.03Z"/>
  <path fill="#d4d4d4" d="M141.808 83.584c.171 5.803-1.024 10.837-3.584 15.104-5.717 9.387-15.701 14.336-29.952 14.848-6.485.256-13.61-1.323-21.376-4.736l.256-19.328c1.28 1.024 2.944 2.219 4.992 3.584 3.67 2.475 7.808 3.712 12.416 3.712 12.203 0 18.304-4.352 18.304-13.056v-.256c0-4.01-2.219-7.296-6.656-9.856-2.389-1.365-6.827-2.987-13.312-4.864a137.675 137.675 0 0 1-8.32-2.816c-10.496-5.888-15.744-14.421-15.744-25.6v-.768c0-5.12 1.408-9.899 4.224-14.336 2.816-4.523 6.528-8.021 11.136-10.496 4.693-2.56 9.728-3.925 15.104-4.096 7.253-.17 14.08 1.195 20.48 4.096v18.304c-4.693-4.096-10.88-6.144-18.56-6.144-2.816 0-5.419.725-7.808 2.176-3.67 2.219-5.504 5.461-5.504 9.728 0 5.803 4.267 9.984 12.8 12.544 1.536.512 4.565 1.45 9.088 2.816 7.68 2.304 13.184 5.76 16.512 10.368 3.413 4.608 5.248 10.965 5.504 19.072Zm66.758 20.736c-6.656 6.4-14.549 9.6-23.68 9.6-9.643 0-17.792-3.285-24.448-9.856-6.571-6.656-9.856-14.805-9.856-24.448 0-9.557 3.328-17.621 9.984-24.192 6.656-6.656 14.763-9.984 24.32-9.984 8.704 0 16.299 2.944 22.784 8.832l-10.368 13.952c-3.328-3.67-7.467-5.504-12.416-5.504-4.693 0-8.704 1.664-12.032 4.992-3.328 3.243-4.992 7.21-4.992 11.904 0 4.693 1.664 8.704 4.992 12.032 3.328 3.328 7.339 4.992 12.032 4.992 5.12 0 9.344-1.963 12.672-5.888l11.008 13.568Zm42.82-41.6c-4.693 0-8.704 1.664-12.032 4.992-3.328 3.243-4.992 7.21-4.992 11.904V112h-17.28V79.616c0-9.557 3.328-17.621 9.984-24.192 6.656-6.656 14.763-9.984 24.32-9.984v17.28Zm77.051 16.896a34.47 34.47 0 0 1-.384 5.12h-50.048c1.109 3.584 3.157 6.485 6.144 8.704 2.987 2.133 6.357 3.2 10.112 3.2 5.205 0 9.515-2.005 12.928-6.016l10.496 13.952c-6.571 6.229-14.379 9.344-23.424 9.344-9.643 0-17.792-3.285-24.448-9.856-6.571-6.656-9.856-14.805-9.856-24.448 0-9.557 3.328-17.621 9.984-24.192 6.656-6.656 14.763-9.984 24.32-9.984s17.621 3.328 24.192 9.984c6.656 6.57 9.984 14.635 9.984 24.192Zm-19.328-7.808c-3.157-6.059-8.107-9.088-14.848-9.088-6.827 0-11.819 3.03-14.976 9.088h29.824Zm145.596 7.936c0 9.643-3.328 17.792-9.984 24.448-6.571 6.571-14.677 9.856-24.32 9.856-9.472 0-17.579-3.413-24.32-10.24-6.741 6.827-14.848 10.24-24.32 10.24-9.643 0-17.792-3.285-24.448-9.856-6.571-6.656-9.856-14.805-9.856-24.448V45.568h17.28v34.176c0 4.693 1.664 8.704 4.992 12.032 3.328 3.328 7.339 4.992 12.032 4.992s8.661-1.664 11.904-4.992c3.328-3.328 4.992-7.339 4.992-12.032l.128-34.176h17.28v43.008h-.128c3.328 5.461 8.149 8.192 14.464 8.192 4.693 0 8.661-1.664 11.904-4.992 3.328-3.328 4.992-7.339 4.992-12.032l.128-34.176h17.28v34.176Z"/>
  <path fill="#d4d4d4" d="M56.064 163.616H26.24V212H8.832V110.624h47.232v14.848H26.24v20.096h29.824v18.048ZM147.389 212h-18.304l-3.712-9.984c-6.827 8.021-15.531 12.032-26.112 12.032-9.557 0-17.664-3.328-24.32-9.984-6.57-6.656-9.856-14.72-9.856-24.192 0-7.253 2.048-13.781 6.144-19.584 4.096-5.888 9.557-10.069 16.384-12.544 4.01-1.451 7.936-2.176 11.776-2.176 7.253 0 13.781 2.091 19.584 6.272 5.888 4.096 10.069 9.557 12.544 16.384L147.389 212Zm-31.104-32.128c0-5.973-2.432-10.624-7.296-13.952-2.816-1.963-6.059-2.944-9.728-2.944-5.973 0-10.581 2.389-13.824 7.168-2.048 2.987-3.072 6.229-3.072 9.728 0 5.888 2.432 10.496 7.296 13.824 2.987 2.048 6.187 3.072 9.6 3.072 4.693 0 8.704-1.621 12.032-4.864 3.328-3.328 4.992-7.339 4.992-12.032Zm92.015 12.544c0 4.096-1.365 7.808-4.096 11.136-5.461 6.656-13.227 9.856-23.296 9.6-4.011-.085-8.405-.981-13.184-2.688-4.693-1.707-8.533-3.84-11.52-6.4l9.6-12.416c4.608 4.352 9.515 6.528 14.72 6.528h.384c2.133 0 4.053-.384 5.76-1.152 2.219-1.024 3.328-2.475 3.328-4.352v-.512c-.256-1.963-1.579-3.371-3.968-4.224-.939-.171-2.944-.555-6.016-1.152-3.84-.768-7.083-1.707-9.728-2.816-7.765-3.328-11.648-9.173-11.648-17.536 0-8.021 3.968-14.037 11.904-18.048 3.499-1.792 7.296-2.731 11.392-2.816 4.267-.085 8.704.64 13.312 2.176 5.291 1.792 9.045 4.139 11.264 7.04l-11.52 10.368c-2.987-2.987-6.229-4.48-9.728-4.48-5.461 0-8.192 1.792-8.192 5.376v.256c0 1.707 2.219 3.157 6.656 4.352.341.085 3.157.64 8.448 1.664 10.752 2.048 16.128 8.619 16.128 19.712v.384ZM251.511 212c-9.557 0-17.664-3.285-24.32-9.856-6.656-6.656-9.984-14.763-9.984-24.32v-67.2h17.28v34.944h17.024v14.72h-17.024v17.536c0 4.693 1.664 8.704 4.992 12.032 3.328 3.243 7.339 4.864 12.032 4.864V212Z"/>
</svg>
```

/src/images/starlight/screwfast_hero.svg
```
<svg xmlns="http://www.w3.org/2000/svg" width="521" height="309" fill="none">
  <rect width="78.937" height="18.485" x="269" y="172.911" fill="#facc15" rx="9.242" transform="rotate(-43.075 269 172.911)"/>
  <rect width="78.937" height="18.485" x="319" y="172.911" fill="#facc15" rx="9.242" transform="rotate(-43.075 319 172.911)"/>
  <rect width="78.937" height="18.485" x="369.285" y="172.911" fill="#facc15" rx="9.242" transform="rotate(-43.075 369.285 172.911)"/>
  <rect width="28.464" height="18.485" x="419.57" y="172.911" fill="#facc15" rx="9.242" transform="rotate(-43.075 419.57 172.911)"/>
  <path fill="#facc15" d="M499.804 146.068c7.03 2.636 6.885 12.63-.219 15.061l-18.951 6.483c-5.238 1.792-10.669-2.15-10.589-7.686l.196-13.514c.081-5.535 5.624-9.318 10.808-7.374l18.755 7.03Z"/>
  <path fill="#d4d4d4" d="M141.933 101.584c.171 5.803-1.024 10.837-3.584 15.104-5.717 9.387-15.701 14.336-29.952 14.848-6.485.256-13.61-1.323-21.376-4.736l.256-19.328c1.28 1.024 2.944 2.219 4.992 3.584 3.67 2.475 7.808 3.712 12.416 3.712 12.203 0 18.304-4.352 18.304-13.056v-.256c0-4.01-2.219-7.296-6.656-9.856-2.389-1.365-6.827-2.987-13.312-4.864a137.675 137.675 0 0 1-8.32-2.816c-10.496-5.888-15.744-14.421-15.744-25.6v-.768c0-5.12 1.408-9.899 4.224-14.336 2.816-4.523 6.528-8.021 11.136-10.496 4.693-2.56 9.728-3.925 15.104-4.096 7.253-.17 14.08 1.195 20.48 4.096v18.304c-4.693-4.096-10.88-6.144-18.56-6.144-2.816 0-5.419.725-7.808 2.176-3.67 2.219-5.504 5.461-5.504 9.728 0 5.803 4.267 9.984 12.8 12.544 1.536.512 4.565 1.45 9.088 2.816 7.68 2.304 13.184 5.76 16.512 10.368 3.413 4.608 5.248 10.965 5.504 19.072Zm66.758 20.736c-6.656 6.4-14.549 9.6-23.68 9.6-9.643 0-17.792-3.285-24.448-9.856-6.571-6.656-9.856-14.805-9.856-24.448 0-9.557 3.328-17.621 9.984-24.192 6.656-6.656 14.763-9.984 24.32-9.984 8.704 0 16.299 2.944 22.784 8.832l-10.368 13.952c-3.328-3.67-7.467-5.504-12.416-5.504-4.693 0-8.704 1.664-12.032 4.992-3.328 3.243-4.992 7.21-4.992 11.904 0 4.693 1.664 8.704 4.992 12.032 3.328 3.328 7.339 4.992 12.032 4.992 5.12 0 9.344-1.963 12.672-5.888l11.008 13.568Zm42.82-41.6c-4.693 0-8.704 1.664-12.032 4.992-3.328 3.243-4.992 7.21-4.992 11.904V130h-17.28V97.616c0-9.557 3.328-17.621 9.984-24.192 6.656-6.656 14.763-9.984 24.32-9.984v17.28Zm77.051 16.896c0 1.707-.128 3.413-.384 5.12H278.13c1.109 3.584 3.157 6.485 6.144 8.704 2.987 2.133 6.357 3.2 10.112 3.2 5.205 0 9.515-2.005 12.928-6.016l10.496 13.952c-6.571 6.229-14.379 9.344-23.424 9.344-9.643 0-17.792-3.285-24.448-9.856-6.571-6.656-9.856-14.805-9.856-24.448 0-9.557 3.328-17.621 9.984-24.192 6.656-6.656 14.763-9.984 24.32-9.984s17.621 3.328 24.192 9.984c6.656 6.57 9.984 14.635 9.984 24.192Zm-19.328-7.808c-3.157-6.059-8.107-9.088-14.848-9.088-6.827 0-11.819 3.03-14.976 9.088h29.824Zm145.596 7.936c0 9.643-3.328 17.792-9.984 24.448-6.571 6.571-14.677 9.856-24.32 9.856-9.472 0-17.579-3.413-24.32-10.24-6.741 6.827-14.848 10.24-24.32 10.24-9.643 0-17.792-3.285-24.448-9.856-6.571-6.656-9.856-14.805-9.856-24.448V63.568h17.28v34.176c0 4.693 1.664 8.704 4.992 12.032 3.328 3.328 7.339 4.992 12.032 4.992s8.661-1.664 11.904-4.992c3.328-3.328 4.992-7.339 4.992-12.032l.128-34.176h17.28v43.008h-.128c3.328 5.461 8.149 8.192 14.464 8.192 4.693 0 8.661-1.664 11.904-4.992 3.328-3.328 4.992-7.339 4.992-12.032l.128-34.176h17.28v34.176Z"/>
  <path fill="#d4d4d4" d="M56.064 181.616H26.24V230H8.832V128.624h47.232v14.848H26.24v20.096h29.824v18.048ZM147.389 230h-18.304l-3.712-9.984c-6.827 8.021-15.531 12.032-26.112 12.032-9.557 0-17.664-3.328-24.32-9.984-6.57-6.656-9.856-14.72-9.856-24.192 0-7.253 2.048-13.781 6.144-19.584 4.096-5.888 9.557-10.069 16.384-12.544 4.01-1.451 7.936-2.176 11.776-2.176 7.253 0 13.781 2.091 19.584 6.272 5.888 4.096 10.069 9.557 12.544 16.384L147.389 230Zm-31.104-32.128c0-5.973-2.432-10.624-7.296-13.952-2.816-1.963-6.059-2.944-9.728-2.944-5.973 0-10.581 2.389-13.824 7.168-2.048 2.987-3.072 6.229-3.072 9.728 0 5.888 2.432 10.496 7.296 13.824 2.987 2.048 6.187 3.072 9.6 3.072 4.693 0 8.704-1.621 12.032-4.864 3.328-3.328 4.992-7.339 4.992-12.032Zm92.015 12.544c0 4.096-1.365 7.808-4.096 11.136-5.461 6.656-13.227 9.856-23.296 9.6-4.011-.085-8.405-.981-13.184-2.688-4.693-1.707-8.533-3.84-11.52-6.4l9.6-12.416c4.608 4.352 9.515 6.528 14.72 6.528h.384c2.133 0 4.053-.384 5.76-1.152 2.219-1.024 3.328-2.475 3.328-4.352v-.512c-.256-1.963-1.579-3.371-3.968-4.224-.939-.171-2.944-.555-6.016-1.152-3.84-.768-7.083-1.707-9.728-2.816-7.765-3.328-11.648-9.173-11.648-17.536 0-8.021 3.968-14.037 11.904-18.048 3.499-1.792 7.296-2.731 11.392-2.816 4.267-.085 8.704.64 13.312 2.176 5.291 1.792 9.045 4.139 11.264 7.04l-11.52 10.368c-2.987-2.987-6.229-4.48-9.728-4.48-5.461 0-8.192 1.792-8.192 5.376v.256c0 1.707 2.219 3.157 6.656 4.352.341.085 3.157.64 8.448 1.664 10.752 2.048 16.128 8.619 16.128 19.712v.384ZM251.511 230c-9.557 0-17.664-3.285-24.32-9.856-6.656-6.656-9.984-14.763-9.984-24.32v-67.2h17.28v34.944h17.024v14.72h-17.024v17.536c0 4.693 1.664 8.704 4.992 12.032 3.328 3.243 7.339 4.864 12.032 4.864V230Z"/>
</svg>
```

/src/images/starlight/marioguerra-logo.svg
```
<svg xmlns="http://www.w3.org/2000/svg" width="500" height="80" viewBox="0 0 500 80" version="1.1"><path d="M 20 36.500 L 20 69 52.500 69 L 85 69 85 36.500 L 85 4 52.500 4 L 20 4 20 36.500 M 40.250 20.432 C 38.462 21.241, 37 21.475, 37 20.952 C 37 20.428, 34.525 20, 31.500 20 L 26 20 26 37 L 26 54 31.500 54 L 37 54 37 40.519 C 37 27.126, 37.016 27.034, 39.398 26.436 C 40.717 26.105, 42.855 25.984, 44.148 26.167 C 46.471 26.496, 46.503 26.668, 46.778 40.250 L 47.056 54 52.528 54 L 58 54 58 40.519 C 58 27.126, 58.016 27.034, 60.398 26.436 C 61.717 26.105, 63.855 25.984, 65.148 26.167 C 67.471 26.496, 67.503 26.668, 67.778 40.250 L 68.056 54 73.528 54 L 79 54 79 39.556 C 79 25.728, 78.897 24.992, 76.587 22.306 C 74.404 19.768, 73.554 19.500, 67.692 19.500 C 62.721 19.500, 60.719 19.944, 59.105 21.405 C 57.126 23.196, 56.888 23.209, 55.137 21.624 C 52.527 19.262, 44.291 18.603, 40.250 20.432" stroke="none" fill="#1c3c64" fill-rule="evenodd"/><path d="M 151 11 L 151 15 156.500 15 L 162 15 162 11 L 162 7 156.500 7 L 151 7 151 11 M 40.250 20.432 C 38.462 21.241, 37 21.475, 37 20.952 C 37 20.428, 34.525 20, 31.500 20 L 26 20 26 37 L 26 54 31.500 54 L 37 54 37 40.519 C 37 27.126, 37.016 27.034, 39.398 26.436 C 40.717 26.105, 42.855 25.984, 44.148 26.167 C 46.471 26.496, 46.503 26.668, 46.778 40.250 L 47.056 54 52.528 54 L 58 54 58 40.519 C 58 27.126, 58.016 27.034, 60.398 26.436 C 61.717 26.105, 63.855 25.984, 65.148 26.167 C 67.471 26.496, 67.503 26.668, 67.778 40.250 L 68.056 54 73.528 54 L 79 54 79 39.556 C 79 25.728, 78.897 24.992, 76.587 22.306 C 74.404 19.768, 73.554 19.500, 67.692 19.500 C 62.721 19.500, 60.719 19.944, 59.105 21.405 C 57.126 23.196, 56.888 23.209, 55.137 21.624 C 52.527 19.262, 44.291 18.603, 40.250 20.432 M 88.750 19.689 C 87.502 20.015, 87 21.155, 87 23.659 L 87 27.171 94.369 26.480 C 102.915 25.679, 106 26.755, 106 30.535 C 106 32.962, 105.868 33, 97.500 33 C 86.313 33, 85 34.139, 85 43.845 C 85 49.462, 85.366 51.021, 87.037 52.534 C 89.849 55.078, 99.773 55.759, 103.918 53.691 C 105.613 52.845, 107 52.569, 107 53.077 C 107 53.584, 109.250 54, 112 54 L 117 54 117 39.611 C 117 23.176, 116.387 21.570, 109.500 19.975 C 105.448 19.036, 91.961 18.850, 88.750 19.689 M 137.750 20.572 C 136.157 21.436, 135 21.630, 135 21.032 C 135 20.448, 132.613 20, 129.500 20 L 124 20 124 37 L 124 54 129.500 54 L 135 54 135 43.155 C 135 30.538, 135.851 29, 142.829 29 L 147 29 147 24 C 147 19.017, 146.989 19, 143.750 19.040 C 141.963 19.062, 139.262 19.751, 137.750 20.572 M 176 20.689 C 170.475 23.548, 168.852 27.841, 169.203 38.671 C 169.466 46.790, 169.780 48.140, 171.935 50.433 C 175.140 53.842, 181.002 55.329, 189.008 54.762 C 196.628 54.223, 201.139 52.185, 202.805 48.528 C 203.462 47.086, 204 41.855, 204 36.903 C 204 22.584, 201.599 20.021, 187.500 19.292 C 181.151 18.964, 178.778 19.252, 176 20.689 M 230.179 20.137 C 225.485 21.490, 224 25.638, 224 37.403 C 224 48.942, 224.916 51.649, 229.462 53.548 C 233.895 55.401, 241.703 55.403, 245.250 53.553 L 248 52.119 248 56.036 C 248 61.859, 245.228 63.313, 235.013 62.849 L 227 62.485 227 66.243 L 227 70 236.750 69.994 C 248.704 69.988, 253.111 68.846, 256.436 64.894 L 259 61.847 259 40.923 L 259 20 254 20 C 251.250 20, 249 20.423, 249 20.941 C 249 21.458, 247.762 21.236, 246.250 20.447 C 243.169 18.840, 235.215 18.686, 230.179 20.137 M 316.123 19.943 C 314.266 20.414, 311.566 21.979, 310.123 23.420 C 307.682 25.859, 307.476 26.769, 307.159 36.507 C 306.820 46.931, 306.830 46.984, 309.738 49.892 C 314.347 54.501, 322.526 55.986, 334.360 54.364 C 338.974 53.732, 339 53.707, 339 49.845 C 339 46.098, 338.903 45.988, 336.250 46.693 C 334.738 47.095, 330.651 47.441, 327.169 47.462 C 320.279 47.503, 318 45.974, 318 41.309 C 318 39.037, 318.176 39, 329 39 L 340 39 340 33.565 C 340 23.028, 336.976 19.921, 326.218 19.408 C 322.523 19.231, 317.980 19.472, 316.123 19.943 M 359.750 20.572 C 358.157 21.436, 357 21.630, 357 21.032 C 357 20.448, 354.613 20, 351.500 20 L 346 20 346 37 L 346 54 351.500 54 L 357 54 357 43.155 C 357 30.538, 357.851 29, 364.829 29 L 369 29 369 24 C 369 19.017, 368.989 19, 365.750 19.040 C 363.962 19.062, 361.262 19.751, 359.750 20.572 M 386.750 20.572 C 385.157 21.436, 384 21.630, 384 21.032 C 384 20.448, 381.613 20, 378.500 20 L 373 20 373 37 L 373 54 378.500 54 L 384 54 384 43.155 C 384 30.538, 384.851 29, 391.829 29 L 396 29 396 24 C 396 19.017, 395.989 19, 392.750 19.040 C 390.962 19.062, 388.262 19.751, 386.750 20.572 M 402.750 19.689 C 401.502 20.015, 401 21.155, 401 23.659 L 401 27.171 408.369 26.480 C 416.915 25.679, 420 26.755, 420 30.535 C 420 32.951, 419.840 33, 411.934 33 C 407.498 33, 403.013 33.458, 401.968 34.017 C 397.679 36.312, 397.095 48.966, 401.110 52.600 C 403.850 55.079, 413.836 55.727, 417.918 53.691 C 419.613 52.845, 421 52.569, 421 53.077 C 421 53.584, 423.250 54, 426 54 L 431 54 431 39.611 C 431 23.176, 430.387 21.570, 423.500 19.975 C 419.448 19.036, 405.961 18.850, 402.750 19.689 M 151 37 L 151 54 156.500 54 L 162 54 162 37 L 162 20 156.500 20 L 151 20 151 37 M 267.178 34.975 C 267.470 48.576, 267.691 50.141, 269.583 52.030 C 272.462 54.905, 281.232 55.766, 286.257 53.666 C 288.316 52.806, 290 52.529, 290 53.051 C 290 53.573, 292.475 54, 295.500 54 L 301 54 301 37 L 301 20 295.579 20 L 290.159 20 289.829 33.038 C 289.470 47.278, 289.180 47.956, 283.450 47.985 C 278.434 48.010, 278 46.801, 278 32.800 L 278 20 272.428 20 L 266.856 20 267.178 34.975 M 183 26.729 C 180.446 27.701, 180.031 29.228, 180.015 37.715 C 179.999 46.684, 180.828 48, 186.500 48 C 192.262 48, 193 46.751, 193 37 C 193 29.195, 192.756 27.940, 191.066 27.035 C 189 25.930, 185.453 25.795, 183 26.729 M 236.649 27.268 C 235.185 28.338, 234.961 29.932, 235.208 37.496 C 235.489 46.132, 235.594 46.490, 238.098 47.368 C 239.528 47.869, 242.340 47.971, 244.348 47.594 L 248 46.909 248 37.071 C 248 27.714, 247.890 27.204, 245.750 26.630 C 242.114 25.656, 238.508 25.908, 236.649 27.268 M 319.750 27.080 C 318.788 27.641, 318 28.977, 318 30.050 C 318 31.767, 318.718 32, 324 32 C 329.298 32, 330 31.770, 330 30.035 C 330 26.573, 323.726 24.764, 319.750 27.080 M 96.750 40.080 C 95.713 40.684, 95 42.294, 95 44.031 C 95 47.268, 97.340 48.433, 102.629 47.828 C 105.230 47.531, 105.529 47.100, 105.807 43.250 L 106.115 39 102.307 39.030 C 100.213 39.047, 97.713 39.519, 96.750 40.080 M 410.750 40.080 C 409.713 40.684, 409 42.294, 409 44.031 C 409 47.268, 411.340 48.433, 416.629 47.828 C 419.230 47.531, 419.529 47.100, 419.807 43.250 L 420.115 39 416.307 39.030 C 414.213 39.047, 411.712 39.519, 410.750 40.080" stroke="none" fill="#fbfbfb" fill-rule="evenodd"/></svg>```

/src/images/starlight/docs_logo.svg
```
<svg viewBox="0 0 275 104" width="275" height="104" fill="none" style="height: 1.5rem; margin-bottom: 0.2rem;" xmlns="http://www.w3.org/2000/svg">
<path d="M69.312 69.616C69.312 79.1733 65.984 87.28 59.328 93.936C52.7573 100.592 44.6933 103.92 35.136 103.92C25.4933 103.92 17.344 100.635 10.688 94.064C4.11733 87.408 0.832001 79.2587 0.832001 69.616C0.832001 60.0587 4.16 51.9947 10.816 45.424C17.472 38.768 25.5787 35.44 35.136 35.44C41.1947 35.44 46.8267 36.9333 52.032 39.92V0.623993H69.312V69.616ZM52.032 69.616C52.032 65.008 50.368 61.04 47.04 57.712C43.712 54.384 39.744 52.72 35.136 52.72C30.4427 52.72 26.432 54.384 23.104 57.712C19.776 60.9547 18.112 64.9227 18.112 69.616C18.112 74.3093 19.776 78.32 23.104 81.648C26.432 84.976 30.4427 86.64 35.136 86.64C39.8293 86.64 43.7973 84.976 47.04 81.648C50.368 78.32 52.032 74.3093 52.032 69.616ZM146.562 69.616C146.562 79.1733 143.234 87.28 136.578 93.936C130.007 100.592 121.943 103.92 112.386 103.92C102.743 103.92 94.594 100.635 87.938 94.064C81.3673 87.408 78.082 79.2587 78.082 69.616C78.082 60.0587 81.41 51.9947 88.066 45.424C94.722 38.768 102.829 35.44 112.386 35.44C121.943 35.44 130.007 38.768 136.578 45.424C143.234 51.9947 146.562 60.0587 146.562 69.616ZM129.282 69.616C129.282 65.008 127.618 61.04 124.29 57.712C120.962 54.384 116.994 52.72 112.386 52.72C107.693 52.72 103.682 54.384 100.354 57.712C97.026 60.9547 95.362 64.9227 95.362 69.616C95.362 74.3093 97.026 78.32 100.354 81.648C103.682 84.976 107.693 86.64 112.386 86.64C117.079 86.64 121.047 84.976 124.29 81.648C127.618 78.32 129.282 74.3093 129.282 69.616ZM213.566 94.32C206.91 100.72 199.017 103.92 189.886 103.92C180.243 103.92 172.094 100.635 165.438 94.064C158.867 87.408 155.582 79.2587 155.582 69.616C155.582 60.0587 158.91 51.9947 165.566 45.424C172.222 38.768 180.329 35.44 189.886 35.44C198.59 35.44 206.185 38.384 212.67 44.272L202.302 58.224C198.974 54.5547 194.835 52.72 189.886 52.72C185.193 52.72 181.182 54.384 177.854 57.712C174.526 60.9547 172.862 64.9227 172.862 69.616C172.862 74.3093 174.526 78.32 177.854 81.648C181.182 84.976 185.193 86.64 189.886 86.64C195.006 86.64 199.23 84.6773 202.558 80.752L213.566 94.32ZM274.05 82.416C274.05 86.512 272.685 90.224 269.954 93.552C264.493 100.208 256.727 103.408 246.658 103.152C242.647 103.067 238.253 102.171 233.474 100.464C228.781 98.7573 224.941 96.624 221.954 94.064L231.554 81.648C236.162 86 241.069 88.176 246.274 88.176H246.658C248.791 88.176 250.711 87.792 252.418 87.024C254.637 86 255.746 84.5493 255.746 82.672V82.16C255.49 80.1973 254.167 78.7893 251.778 77.936C250.839 77.7653 248.834 77.3813 245.762 76.784C241.922 76.016 238.679 75.0773 236.034 73.968C228.269 70.64 224.386 64.7947 224.386 56.432C224.386 48.4107 228.354 42.3947 236.29 38.384C239.789 36.592 243.586 35.6533 247.682 35.568C251.949 35.4827 256.386 36.208 260.994 37.744C266.285 39.536 270.039 41.8827 272.258 44.784L260.738 55.152C257.751 52.1653 254.509 50.672 251.01 50.672C245.549 50.672 242.818 52.464 242.818 56.048V56.304C242.818 58.0107 245.037 59.4613 249.474 60.656C249.815 60.7413 252.631 61.296 257.922 62.32C268.674 64.368 274.05 70.9387 274.05 82.032V82.416Z" class="docs-logo-svg" fill="#404040"/>
<style>
    [data-theme="dark"] .docs-logo-svg {
      fill: #d4d4d4;
    }
</style>
</svg>
```

/src/images/starlight/screwfast_logo_dark.svg
```
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 521 226" width="521" height="226" style="height: 2.5rem;" fill="none">
  <rect width="78.937" height="18.485" x="269" y="154.911" fill="#eab308" rx="9.242" transform="rotate(-43.075 269 154.911)" class="main-logo-screw-svg"/>
  <rect width="78.937" height="18.485" x="319" y="154.911" fill="#eab308" rx="9.242" transform="rotate(-43.075 319 154.911)" class="main-logo-screw-svg"/>
  <rect width="78.937" height="18.485" x="369.285" y="154.911" fill="#eab308" rx="9.242" transform="rotate(-43.075 369.285 154.911)" class="main-logo-screw-svg"/>
  <rect width="28.464" height="18.485" x="419.57" y="154.911" fill="#eab308" rx="9.242" transform="rotate(-43.075 419.57 154.911)" class="main-logo-screw-svg"/>
  <path fill="#eab308" class="main-logo-screw-svg" d="M499.804 128.068c7.03 2.636 6.885 12.63-.219 15.061l-18.951 6.483c-5.238 1.792-10.669-2.15-10.589-7.686l.196-13.514c.081-5.535 5.624-9.318 10.808-7.374l18.755 7.03Z"/>
  <path fill="#404040" class="main-logo-svg" d="M141.808 83.584c.171 5.803-1.024 10.837-3.584 15.104-5.717 9.387-15.701 14.336-29.952 14.848-6.485.256-13.61-1.323-21.376-4.736l.256-19.328c1.28 1.024 2.944 2.219 4.992 3.584 3.67 2.475 7.808 3.712 12.416 3.712 12.203 0 18.304-4.352 18.304-13.056v-.256c0-4.01-2.219-7.296-6.656-9.856-2.389-1.365-6.827-2.987-13.312-4.864a137.675 137.675 0 0 1-8.32-2.816c-10.496-5.888-15.744-14.421-15.744-25.6v-.768c0-5.12 1.408-9.899 4.224-14.336 2.816-4.523 6.528-8.021 11.136-10.496 4.693-2.56 9.728-3.925 15.104-4.096 7.253-.17 14.08 1.195 20.48 4.096v18.304c-4.693-4.096-10.88-6.144-18.56-6.144-2.816 0-5.419.725-7.808 2.176-3.67 2.219-5.504 5.461-5.504 9.728 0 5.803 4.267 9.984 12.8 12.544 1.536.512 4.565 1.45 9.088 2.816 7.68 2.304 13.184 5.76 16.512 10.368 3.413 4.608 5.248 10.965 5.504 19.072Zm66.758 20.736c-6.656 6.4-14.549 9.6-23.68 9.6-9.643 0-17.792-3.285-24.448-9.856-6.571-6.656-9.856-14.805-9.856-24.448 0-9.557 3.328-17.621 9.984-24.192 6.656-6.656 14.763-9.984 24.32-9.984 8.704 0 16.299 2.944 22.784 8.832l-10.368 13.952c-3.328-3.67-7.467-5.504-12.416-5.504-4.693 0-8.704 1.664-12.032 4.992-3.328 3.243-4.992 7.21-4.992 11.904 0 4.693 1.664 8.704 4.992 12.032 3.328 3.328 7.339 4.992 12.032 4.992 5.12 0 9.344-1.963 12.672-5.888l11.008 13.568Zm42.82-41.6c-4.693 0-8.704 1.664-12.032 4.992-3.328 3.243-4.992 7.21-4.992 11.904V112h-17.28V79.616c0-9.557 3.328-17.621 9.984-24.192 6.656-6.656 14.763-9.984 24.32-9.984v17.28Zm77.051 16.896a34.47 34.47 0 0 1-.384 5.12h-50.048c1.109 3.584 3.157 6.485 6.144 8.704 2.987 2.133 6.357 3.2 10.112 3.2 5.205 0 9.515-2.005 12.928-6.016l10.496 13.952c-6.571 6.229-14.379 9.344-23.424 9.344-9.643 0-17.792-3.285-24.448-9.856-6.571-6.656-9.856-14.805-9.856-24.448 0-9.557 3.328-17.621 9.984-24.192 6.656-6.656 14.763-9.984 24.32-9.984s17.621 3.328 24.192 9.984c6.656 6.57 9.984 14.635 9.984 24.192Zm-19.328-7.808c-3.157-6.059-8.107-9.088-14.848-9.088-6.827 0-11.819 3.03-14.976 9.088h29.824Zm145.596 7.936c0 9.643-3.328 17.792-9.984 24.448-6.571 6.571-14.677 9.856-24.32 9.856-9.472 0-17.579-3.413-24.32-10.24-6.741 6.827-14.848 10.24-24.32 10.24-9.643 0-17.792-3.285-24.448-9.856-6.571-6.656-9.856-14.805-9.856-24.448V45.568h17.28v34.176c0 4.693 1.664 8.704 4.992 12.032 3.328 3.328 7.339 4.992 12.032 4.992s8.661-1.664 11.904-4.992c3.328-3.328 4.992-7.339 4.992-12.032l.128-34.176h17.28v43.008h-.128c3.328 5.461 8.149 8.192 14.464 8.192 4.693 0 8.661-1.664 11.904-4.992 3.328-3.328 4.992-7.339 4.992-12.032l.128-34.176h17.28v34.176Z"/>
  <path fill="#404040" class="main-logo-svg" d="M56.064 163.616H26.24V212H8.832V110.624h47.232v14.848H26.24v20.096h29.824v18.048ZM147.389 212h-18.304l-3.712-9.984c-6.827 8.021-15.531 12.032-26.112 12.032-9.557 0-17.664-3.328-24.32-9.984-6.57-6.656-9.856-14.72-9.856-24.192 0-7.253 2.048-13.781 6.144-19.584 4.096-5.888 9.557-10.069 16.384-12.544 4.01-1.451 7.936-2.176 11.776-2.176 7.253 0 13.781 2.091 19.584 6.272 5.888 4.096 10.069 9.557 12.544 16.384L147.389 212Zm-31.104-32.128c0-5.973-2.432-10.624-7.296-13.952-2.816-1.963-6.059-2.944-9.728-2.944-5.973 0-10.581 2.389-13.824 7.168-2.048 2.987-3.072 6.229-3.072 9.728 0 5.888 2.432 10.496 7.296 13.824 2.987 2.048 6.187 3.072 9.6 3.072 4.693 0 8.704-1.621 12.032-4.864 3.328-3.328 4.992-7.339 4.992-12.032Zm92.015 12.544c0 4.096-1.365 7.808-4.096 11.136-5.461 6.656-13.227 9.856-23.296 9.6-4.011-.085-8.405-.981-13.184-2.688-4.693-1.707-8.533-3.84-11.52-6.4l9.6-12.416c4.608 4.352 9.515 6.528 14.72 6.528h.384c2.133 0 4.053-.384 5.76-1.152 2.219-1.024 3.328-2.475 3.328-4.352v-.512c-.256-1.963-1.579-3.371-3.968-4.224-.939-.171-2.944-.555-6.016-1.152-3.84-.768-7.083-1.707-9.728-2.816-7.765-3.328-11.648-9.173-11.648-17.536 0-8.021 3.968-14.037 11.904-18.048 3.499-1.792 7.296-2.731 11.392-2.816 4.267-.085 8.704.64 13.312 2.176 5.291 1.792 9.045 4.139 11.264 7.04l-11.52 10.368c-2.987-2.987-6.229-4.48-9.728-4.48-5.461 0-8.192 1.792-8.192 5.376v.256c0 1.707 2.219 3.157 6.656 4.352.341.085 3.157.64 8.448 1.664 10.752 2.048 16.128 8.619 16.128 19.712v.384ZM251.511 212c-9.557 0-17.664-3.285-24.32-9.856-6.656-6.656-9.984-14.763-9.984-24.32v-67.2h17.28v34.944h17.024v14.72h-17.024v17.536c0 4.693 1.664 8.704 4.992 12.032 3.328 3.243 7.339 4.864 12.032 4.864V212Z"/>
  <style>
    [data-theme="dark"] .main-logo-svg {
      fill: #d4d4d4;
    }
    [data-theme="dark"] .main-logo-screw-svg {
      fill: #facc15;
    }
</style>
</svg>
```

/src/content/config.ts
```
// https://docs.astro.build/en/guides/content-collections/#defining-collections

import { z, defineCollection } from 'astro:content';
import { docsSchema } from '@astrojs/starlight/schema';

const productsCollection = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      main: z.object({
        id: z.number(),
        content: z.string(),
        imgCard: image(),
        imgMain: image(),
        imgAlt: z.string(),
      }),
      tabs: z.array(
        z.object({
          id: z.string(),
          dataTab: z.string(),
          title: z.string(),
        })
      ),
      longDescription: z.object({
        title: z.string(),
        subTitle: z.string(),
        btnTitle: z.string(),
        btnURL: z.string(),
      }),
      descriptionList: z.array(
        z.object({
          title: z.string(),
          subTitle: z.string(),
        })
      ),
      specificationsLeft: z.array(
        z.object({
          title: z.string(),
          subTitle: z.string(),
        })
      ),
      specificationsRight: z
        .array(
          z.object({
            title: z.string(),
            subTitle: z.string(),
          })
        )
        .optional(),
      tableData: z
        .array(
          z.object({
            feature: z.array(z.string()),
            description: z.array(z.array(z.string())),
          })
        )
        .optional(),
      blueprints: z.object({
        first: image().optional(),
        second: image().optional(),
      }),
    }),
});

const blogCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),                           // Blog post title
      description: z.string(),                    // Blog post description
      author: z.string(),                         // Author's name
      date: z.string().transform((str) => new Date(str)), // Convert string to Date object
      image: z.string().refine((value) => value.endsWith('.jpg') || value.endsWith('.png') || value.endsWith('.jpeg'), {
        message: "Image must be a .jpg or .png file",
      }),                                         // Valid image formats
      categories: z.array(z.string()),            // Required array of categories
      tags: z.array(z.string()).optional(),       // Optional array of tags
    }),
});

const insightsCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      cardImage: image(),
      cardImageAlt: z.string(),
    }),
});

export const collections = {
  docs: defineCollection({ schema: docsSchema() }),
  products: productsCollection,
  blog: blogCollection,
  insights: insightsCollection,
};
```

/src/content/insights/en/insight-1.md
```
---
title: "The Future of Construction Technology"
description: "Explore ScrewFast's pioneering role in revolutionizing construction through advanced technology and innovative solutions."
cardImage: "@/images/insights/insight-1.avif"
cardImageAlt: "Top view mechanical tools arrangement"
---

In the world of construction, where innovation meets practicality, ScrewFast stands as a beacon of pioneering advancements. For years, this company has been at the forefront of revolutionizing construction through its unwavering commitment to advanced technology and innovative solutions. From skyscrapers to bridges, ScrewFast has left an indelible mark on the industry, shaping the future of construction in ways once thought unimaginable.

## A Legacy of Innovation

Founded with a vision to redefine the norms of construction, ScrewFast embarked on a journey marked by relentless innovation. Since its inception, the company has continually pushed the boundaries of what is possible, introducing groundbreaking technologies that have transformed the way structures are built.

## Reinventing Foundation Systems

At the heart of ScrewFast's success lies its revolutionary approach to foundation systems. Traditionally, the process of laying foundations has been cumbersome and time-consuming, often requiring extensive excavation and manual labor. However, ScrewFast's innovative solutions have changed the game entirely.

By leveraging advanced techniques such as helical pile installation, ScrewFast has streamlined the foundation process, significantly reducing both time and cost. These helical piles, with their screw-like design, offer unparalleled stability and can be installed with remarkable efficiency, making them the go-to choice for projects of all sizes.

## Embracing Digitalization

In an era dominated by digitalization, ScrewFast has embraced technology wholeheartedly, harnessing its power to drive efficiency and precision. Through the use of advanced software and modeling techniques, the company has revolutionized the design and planning phases of construction projects.

From 3D modeling to Building Information Modeling (BIM), ScrewFast employs cutting-edge tools to create detailed simulations of structures, allowing for better visualization and optimization. This digital approach not only enhances the accuracy of construction plans but also enables seamless collaboration among architects, engineers, and builders.

## Sustainable Solutions for a Greener Tomorrow

In a world increasingly concerned with sustainability, ScrewFast has taken proactive steps to minimize its environmental footprint. By prioritizing eco-friendly materials and sustainable construction practices, the company is leading the charge towards a greener future.

One notable example is ScrewFast's commitment to modular construction—a method that involves prefabricating building components off-site and assembling them on-site. This approach not only reduces construction waste but also minimizes disruption to local ecosystems, making it a win-win for both builders and the environment.

## The Road Ahead: Challenges and Opportunities

As ScrewFast continues to push the boundaries of construction technology, it faces a myriad of challenges and opportunities on the horizon. From navigating regulatory hurdles to adapting to evolving industry trends, the road ahead is fraught with complexities.

However, with its unwavering dedication to innovation and a track record of success, ScrewFast is well-positioned to overcome these obstacles and continue shaping the future of construction for generations to come. As the industry marches towards an increasingly digital and sustainable future, ScrewFast stands as a beacon of progress, leading the way towards a world where construction is not just efficient and cost-effective but also environmentally responsible.

## Conclusion

In the ever-evolving landscape of construction technology, ScrewFast remains a trailblazer, constantly pushing the boundaries of what is possible. Through its commitment to innovation, digitalization, and sustainability, the company has not only revolutionized the way structures are built but has also set a new standard for excellence in the industry.

As we look towards the future, one thing is clear: the legacy of ScrewFast will continue to shape the world of construction for years to come, inspiring generations of builders to dream big and push the limits of possibility. With ScrewFast leading the way, the future of construction has never looked brighter.
```

/src/content/insights/en/insight-3.md
```
---
title: "The Impact of Sustainable Practices"
description: "Discover how ScrewFast is leading the charge in promoting sustainability within the construction industry"
cardImage: "@/images/insights/insight-3.avif"
cardImageAlt: "Top view mechanical tools arrangement"
---

The construction industry casts a long shadow.  While it provides the essential framework for our lives, its environmental impact is undeniable. From resource depletion and pollution to energy consumption and waste generation, traditional construction practices take a toll on our planet. But a revolution is brewing, and at the forefront is ScrewFast, a company demonstrably changing the game with its commitment to sustainable practices.

## The Scope of the Challenge

Imagine this: the construction industry is responsible for a staggering 36% of global energy use and a whopping 40% of total CO2 emissions [1].  That's not all.  Buildings and construction are major contributors to solid waste generation, accounting for up to 40%, and gobble up 30% of the world's raw materials [1]. These statistics paint a clear picture: business as usual is simply unsustainable.

## ScrewFast: Building with Responsibility

ScrewFast is a company built on the foundation of responsibility. They understand the environmental cost of construction and are taking decisive action to change course. Their commitment to sustainability permeates every aspect of their operations, from the materials they use to the construction processes they implement.

* **Material Innovation:** ScrewFast prioritizes the use of recycled and recyclable materials. This not only reduces reliance on virgin resources but also lessens the environmental burden associated with resource extraction. 
* **Energy Efficiency:**  ScrewFast champions energy-efficient construction methods.  This might involve incorporating high-performance insulation materials, optimizing building design for natural light and ventilation, or even integrating renewable energy sources like solar panels.  The result?  Buildings that require less energy to operate, leading to a significant reduction in greenhouse gas emissions.
* **Waste Reduction:**  ScrewFast meticulously plans and executes projects to minimize waste generation.  This can involve using prefabricated components, employing modular construction techniques, and implementing meticulous waste segregation and recycling programs.  By minimizing waste, ScrewFast conserves resources and reduces the environmental impact associated with landfills.
* **Sustainable Sourcing:**  ScrewFast takes a responsible approach to sourcing its materials.  They prioritize working with suppliers who share their commitment to sustainability.  This ensures that the environmental footprint is considered throughout the entire supply chain.

## The Impact of Change

ScrewFast's dedication to sustainable practices extends far beyond their company walls.  The ripple effect of their actions is substantial:

* **Environmental Benefits:**  By promoting resource conservation, reduced energy consumption, and minimized waste, ScrewFast contributes significantly to a healthier planet.  This translates to cleaner air, a more stable climate, and the preservation of natural resources for future generations. 
* **Economic Advantages:**  Sustainable construction practices often lead to long-term economic benefits.  Energy-efficient buildings have lower operational costs, and sustainable materials can sometimes be surprisingly cost-competitive.  ScrewFast demonstrates that being green can also be good for the bottom line.
* **Social Responsibility:**  ScrewFast recognizes that sustainability encompasses more than just the environment.  They are committed to creating safe and healthy work environments for their employees and fostering positive relationships with the communities in which they operate.

## Leading by Example

ScrewFast isn't just talking the talk, they're walking the walk. Their commitment to sustainability is evident in every project they undertake.  By showcasing the tangible benefits of sustainable construction, ScrewFast is inspiring a paradigm shift within the industry.  They are paving the way for a future where buildings are not only functional but also environmentally responsible.

## The Road Ahead

The construction industry is at a crossroads.  ScrewFast stands as a beacon, illuminating the path towards a more sustainable future.  By embracing innovative practices and prioritizing environmental responsibility, ScrewFast is not just building structures; they are building a better tomorrow.  As more companies follow suit, the impact will be profound. A greener construction industry signifies a healthier planet for all. ```

/src/content/insights/en/insight-2.md
```
---
title: "The Importance of Collaboration"
description: "Explore how collaboration is central to ScrewFast's construction approach, driving effective communication and teamwork to achieve outstanding outcomes."
cardImage: "@/images/insights/insight-2.avif"
cardImageAlt: "Top view mechanical tools arrangement"
---

In the realm of construction, where projects often involve intricate designs, tight deadlines, and complex logistical challenges, the importance of collaboration cannot be overstated. Effective collaboration is not just a desirable aspect of project management; it is the cornerstone upon which successful construction endeavors are built. In this long read, we delve into how collaboration serves as the driving force behind ScrewFast's construction approach, facilitating effective communication and teamwork to achieve outstanding outcomes.

## Understanding ScrewFast: A Brief Overview

Before we delve into the intricacies of collaboration within ScrewFast's construction projects, it's essential to grasp the company's background and ethos. ScrewFast is a renowned construction firm known for its innovative approach to foundation solutions. Specializing in helical pile foundations, ScrewFast has established itself as a leader in the construction industry, delivering high-quality, cost-effective solutions for a wide range of projects, from small-scale developments to large-scale infrastructure ventures.

## The Collaborative Culture at ScrewFast

At the heart of ScrewFast's success lies a culture that prioritizes collaboration at every stage of the construction process. From project inception to completion, collaboration is woven into the fabric of the company's operations. Unlike traditional hierarchical models prevalent in many construction firms, ScrewFast fosters an environment where every team member's input is valued, regardless of their role or seniority.

### Breaking Down Silos: The Key to Effective Collaboration

One of the biggest hurdles to collaboration in construction is the presence of silos within organizations. Departments often operate in isolation, leading to miscommunication, duplication of efforts, and a lack of synergy. ScrewFast tackles this challenge head-on by breaking down silos and promoting cross-functional collaboration.

#### Cross-Functional Teams: Bridging the Gap

ScrewFast forms cross-functional teams comprising professionals from diverse backgrounds, including engineers, architects, project managers, and construction workers. By bringing together individuals with varied expertise and perspectives, ScrewFast ensures comprehensive problem-solving and holistic decision-making throughout the project lifecycle.

#### Integrated Project Delivery: A Unified Approach

Integrated project delivery (IPD) is another cornerstone of ScrewFast's collaborative ethos. Unlike traditional project delivery methods where stakeholders operate in separate silos, IPD fosters a unified approach where all parties work together from the outset. This integrated approach promotes transparency, efficiency, and collective accountability, ultimately leading to superior project outcomes.

## Driving Innovation Through Collaboration

Collaboration isn't just about improving communication and teamwork; it also serves as a catalyst for innovation. At ScrewFast, collaboration fuels a culture of continuous improvement and forward thinking, driving the development of groundbreaking solutions that push the boundaries of construction technology.

### Co-Creation with Clients: Turning Ideas into Reality

ScrewFast recognizes the importance of involving clients in the co-creation process. By collaborating closely with clients from project inception, ScrewFast gains valuable insights into their needs, preferences, and challenges. This collaborative approach enables ScrewFast to tailor its solutions to meet clients' specific requirements, resulting in enhanced customer satisfaction and project success.

### Embracing Emerging Technologies

Innovation thrives in collaborative environments where diverse perspectives intersect. At ScrewFast, collaboration extends beyond internal teams to external partners, including technology providers, research institutions, and academia. By forging strategic partnerships with industry leaders, ScrewFast stays at the forefront of technological advancements, leveraging cutting-edge tools and techniques to drive efficiency and performance across its projects.

## Conclusion

In the fast-paced world of construction, collaboration isn't just a buzzword; it's a fundamental principle that underpins success. ScrewFast's construction approach exemplifies the transformative power of collaboration, demonstrating how effective communication, teamwork, and innovation can drive outstanding outcomes. As the construction industry continues to evolve, embracing collaboration will be key to navigating challenges, seizing opportunities, and delivering sustainable solutions that stand the test of time.```

/src/content/products/fr/item-b203.md
```
---
title: "SF-BN B203"
description: "Ensemble de boulons à vis et écrous"
main:
  id: 3
  content: |
    Découvrez le SF-BN B203 – votre compagnon fiable pour des fixations de qualité professionnelle. Cet ensemble complet comprend une sélection polyvalente de boulons à vis et d'écrous, méticuleusement conçus pour offrir la tenue la plus solide pour vos projets de construction et d'assemblage.
  imgCard: "@/images/product-image-3.avif"
  imgMain: "@/images/product-image-main-3.avif"
  imgAlt: "Maquettes de boîtes d'un ensemble de boulons à vis et écrous"
tabs:
  - id: "tabs-with-card-item-1"
    dataTab: "#tabs-with-card-1"
    title: "Description"
  - id: "tabs-with-card-item-2"
    dataTab: "#tabs-with-card-2"
    title: "Spécifications"
  - id: "tabs-with-card-item-3"
    dataTab: "#tabs-with-card-3"
    title: "Plans"
longDescription:
  title: "La force rencontre la précision"
  subTitle: |
    L'ensemble de boulons à vis et écrous SF-BN B203 offre une durabilité robuste et une précision pour les professionnels de la construction, garantissant des performances fiables dans chaque application, de l'encadrement de maisons à l'assemblage de machines.
  btnTitle: "Contactez le service commercial pour en savoir plus"
  btnURL: "#"
descriptionList:
  - title: "Résistance à la corrosion"
    subTitle: "Le revêtement en zinc offre non seulement un aspect poli, mais protège également contre la corrosion, garantissant une longue durée de vie."
  - title: "Sécurité améliorée"
    subTitle: "Un ajustement sécurisé se traduit par des structures plus sûres avec un risque réduit de défaillance des composants."
  - title: "Praticité"
    subTitle: "Cet ensemble tout-en-un signifie que vous avez la bonne taille sous la main, réduisant les retards de projet et les allers-retours supplémentaires au magasin de bricolage."
specificationsLeft:
  - title: "Composition du matériau"
    subTitle: "Fabriqué à partir d'acier de haute qualité, offrant résistance et fiabilité pour des applications exigeantes."
  - title: "Finition de surface"
    subTitle: "Protégé par un revêtement de zinc pour offrir une résistance accrue à la corrosion et une longévité."
  - title: "Quantité par ensemble"
    subTitle: "L'ensemble comprend une sélection équilibrée de 25 boulons à vis et 25 écrous assortis."
  - title: "Assortiment de tailles"
    subTitle: "Comprend une gamme complète de tailles pour répondre à diverses exigences de projet, garantissant compatibilité et polyvalence."
specificationsRight:
  - title: "Détails du filetage"
    subTitle: "Conçu avec des filets coupés avec précision pour un ajustement sécurisé et une installation facile."
  - title: "Propriétés mécaniques"
    subTitle: "Chaque boulon et écrou est conçu pour répondre à des indices de charge spécifiques ou à des normes de résistance, adaptés aux applications structurelles."
  - title: "Normes et certifications"
    subTitle: "Conforme aux normes et certifications industrielles pertinentes, garantissant une qualité et une sécurité constantes."
  - title: "Applications adaptées"
    subTitle: "Idéal pour un large éventail d'utilisations, des environnements de construction aux assemblages mécaniques qui nécessitent des joints solides et sécurisés."
blueprints:
  first: "@/images/blueprint-1.avif"
  second: "@/images/blueprint-2.avif"
---
```

/src/content/products/fr/item-f303.md
```
---
title: "SF-FN F303"
description: "Boulons hexagonaux"
main:
  id: 4
  content: |
    Découvrez les boulons hexagonaux SF-FN F303 – le choix parfait pour les applications de fixation lourdes. Conçus avec précision et durabilité, ces boulons hexagonaux offrent la force et la fiabilité dont vous avez besoin pour vos projets les plus exigeants.
  imgCard: "@/images/product-image-4.avif"
  imgMain: "@/images/product-image-main-4.avif"
  imgAlt: "Maquettes de boîtes de boulons hexagonaux"
tabs:
  - id: "tabs-with-card-item-1"
    dataTab: "#tabs-with-card-1"
    title: "Description"
  - id: "tabs-with-card-item-2"
    dataTab: "#tabs-with-card-2"
    title: "Spécifications"
  - id: "tabs-with-card-item-3"
    dataTab: "#tabs-with-card-3"
    title: "Plans"
longDescription:
  title: "Solutions de fixation robustes"
  subTitle: |
    Les boulons hexagonaux SF-FN F303 sont conçus pour relever les défis de fixation les plus difficiles avec aisance. Que vous travailliez sur des projets de construction ou des machines lourdes, ces boulons hexagonaux offrent la force et la fiabilité nécessaires.
  btnTitle: "Contactez le service commercial pour en savoir plus"
  btnURL: "#"
descriptionList:
  - title: "Solidité et durabilité"
    subTitle: "Fabriqués à partir de matériaux de haute qualité, ces boulons hexagonaux sont conçus pour supporter des charges lourdes et des conditions difficiles."
  - title: "Ingénierie de précision"
    subTitle: "Conçus avec des filets coupés avec précision et des spécifications exactes, garantissant un ajustement serré et sécurisé à chaque fois."
  - title: "Polyvalence"
    subTitle: "Adaptés à une large gamme d'applications, de la construction aux machines, offrant des solutions de fixation polyvalentes."
specificationsLeft:
  - title: "Matériau"
    subTitle: "Fabriqués en acier ou en alliage de qualité supérieure, offrant une résistance exceptionnelle et une résistance à la corrosion."
  - title: "Conception du filetage"
    subTitle: "Des filets coupés avec précision assurent une adhérence optimale et une fiabilité même dans des environnements à haute contrainte."
  - title: "Quantité"
    subTitle: "Chaque ensemble comprend une quantité suffisante de boulons hexagonaux pour divers projets et applications."
  - title: "Tailles"
    subTitle: "Disponible dans une gamme de tailles pour répondre aux différentes exigences des projets, garantissant polyvalence et compatibilité."
specificationsRight:
  - title: "Finition"
    subTitle: "Fini avec un revêtement protecteur pour améliorer la résistance à la corrosion et prolonger la durée de vie."
  - title: "Capacité de charge"
    subTitle: "Conçus pour répondre ou dépasser les normes industrielles en matière de capacité de charge, garantissant des performances fiables sous des charges lourdes."
  - title: "Certifications"
    subTitle: "Conformes aux normes et certifications industrielles pertinentes, garantissant qualité et fiabilité."
  - title: "Applications"
    subTitle: "Idéal pour une utilisation dans la construction, les machines, l'automobile et d'autres applications lourdes nécessitant une fixation solide et fiable."
blueprints:
  first: "@/images/blueprint-1.avif"
  second: "@/images/blueprint-2.avif"    
---
```

/src/content/products/fr/item-a765.md
```
---
title: "SF-AB A765"
description: "Ensemble de Vis Assorties"
main:
  id: 2
  content: |
    Découvrez l'ensemble de vis assorties SF-AB A765 – la solution ultime pour vos besoins de fixation. Ce set complet comprend une grande variété de vis soigneusement sélectionnées pour aborder divers projets avec facilité et précision.
  imgCard: "@/images/product-image-2.avif"
  imgMain: "@/images/product-image-main-2.avif"
  imgAlt: "Boîtes factices de l'ensemble de vis assorties"
tabs:
  - id: "tabs-with-card-item-1"
    dataTab: "#tabs-with-card-1"
    title: "Description"
  - id: "tabs-with-card-item-2"
    dataTab: "#tabs-with-card-2"
    title: "Spécifications"
  - id: "tabs-with-card-item-3"
    dataTab: "#tabs-with-card-3"
    title: "Plans"
longDescription:
  title: "Solutions Polyvalentes de Fixation"
  subTitle: |
    L'ensemble de vis assorties SF-AB A765 offre une polyvalence et une commodité inégalées, ce qui en fait le choix idéal pour les amateurs de bricolage et les professionnels. Avec une sélection complète de vis, vous aurez toujours le bon élément de fixation pour chaque tâche.
  btnTitle: "Contactez les ventes pour en savoir plus"
  btnURL: "#"
descriptionList:
  - title: "Grande Variété"
    subTitle: "Comprend une gamme diversifiée de types et de tailles de vis pour s'adapter à diverses applications et matériaux."
  - title: "Facilité d'Utilisation"
    subTitle: "Chaque vis est conçue pour une installation facile, garantissant une fixation sans tracas à chaque fois."
  - title: "Commodité"
    subTitle: "Élimine le besoin de multiples déplacements au magasin de bricolage, économisant temps et effort sur vos projets."
specificationsLeft:
  - title: "Matériau"
    subTitle: "Fabriqué à partir de matériaux de haute qualité tels que l'acier inoxydable, assurant durabilité et résistance à la corrosion."
  - title: "Assortiment"
    subTitle: "Contient un assortiment généreux de vis, incluant des vis à bois, des vis mécaniques, et des vis pour tôle."
  - title: "Quantité"
    subTitle: "Chaque set comprend une quantité suffisante de vis pour gérer une large gamme de projets et de tâches."
  - title: "Tailles"
    subTitle: "Disponible en différentes tailles pour s'adapter aux exigences de divers projets, assurant compatibilité et polyvalence."
tableData:
  - feature: ["Spécification", "Valeur"]
    description:
      - ["Longueur (mm)", "Divers"]
      - ["Poids (g)", "N/A"]
      - ["Matériau", "Acier Inoxydable"]
      - ["Finition", "Assortie"]
      - ["Contenu du Pack", "Diverses vis dans un ensemble"]
blueprints:
  first: "@/images/blueprint-1.avif"
  second: "@/images/blueprint-2.avif"
---
```

/src/content/products/fr/item-t845.md
```
---
title: "SF-TB T845"
description: "Vis à machine"
main:
  id: 1
  content: |
    Découvrez le SF-TB T845 – votre solution de prédilection pour la fixation de précision dans les machines et équipements. Cet ensemble complet de vis à machine est méticuleusement conçu pour répondre aux exigences strictes des applications industrielles, garantissant une fixation sécurisée et fiable.
  imgCard: "@/images/product-image-1.avif"
  imgMain: "@/images/product-image-main-1.avif"
  imgAlt: "Maquettes de boîtes de vis à machine"
tabs:
  - id: "tabs-with-card-item-1"
    dataTab: "#tabs-with-card-1"
    title: "Description"
  - id: "tabs-with-card-item-2"
    dataTab: "#tabs-with-card-2"
    title: "Spécifications"
  - id: "tabs-with-card-item-3"
    dataTab: "#tabs-with-card-3"
    title: "Plans"
longDescription:
  title: "Solutions de fixation de précision"
  subTitle: |
    Les vis à machine SF-TB T845 offrent une précision et une fiabilité inégalées pour les applications industrielles, garantissant un fonctionnement fluide et une longue durée de vie pour vos machines et équipements.
  btnTitle: "Contactez le service commercial pour en savoir plus"
  btnURL: "#"
descriptionList:
  - title: "Durabilité"
    subTitle: "Fabriquées à partir de matériaux de haute qualité, ces vis à machine sont conçues pour résister aux rigueurs des environnements industriels."
  - title: "Ingénierie de précision"
    subTitle: "Conçues avec des filets coupés avec précision et des spécifications exactes, garantissant un ajustement serré et sécurisé pour chaque application."
  - title: "Polyvalence"
    subTitle: "Adaptées à une large gamme de machines et d'équipements, offrant des solutions de fixation polyvalentes pour divers besoins industriels."
specificationsLeft:
  - title: "Composition du matériau"
    subTitle: "Construites en acier ou alliage de qualité supérieure pour une résistance et une durabilité exceptionnelles."
  - title: "Finition de surface"
    subTitle: "Fini avec un revêtement protecteur pour améliorer la résistance à la corrosion et prolonger la durée de vie."
  - title: "Quantité par ensemble"
    subTitle: "Chaque ensemble contient un assortiment complet de vis à machine pour répondre aux divers besoins industriels."
  - title: "Gamme de tailles"
    subTitle: "Disponible en différentes tailles et longueurs pour s'adapter aux spécifications des machines et équipements."
specificationsRight:
  - title: "Spécifications du filetage"
    subTitle: "Des filets conçus avec précision assurent une adhérence optimale et une fiabilité, même dans les environnements à haute vibration."
  - title: "Capacité de charge"
    subTitle: "Conçues pour répondre ou dépasser les normes industrielles en matière de capacité de charge, garantissant une opération sûre et fiable."
  - title: "Certifications"
    subTitle: "Conformes aux normes et certifications industrielles pertinentes, garantissant qualité et fiabilité."
  - title: "Applications"
    subTitle: "Idéal pour une utilisation dans une large gamme de machines industrielles, équipements et assemblages nécessitant une fixation précise et sécurisée."
blueprints:
  first: "@/images/blueprint-1.avif"
  second: "@/images/blueprint-2.avif"  
---
```

/src/content/products/en/item-b203.md
```
---
title: "SF-BN B203"
description: "Tap Bolts and Nuts Set"
main:
  id: 3
  content: |
    Meet the SF-BN B203 – your reliable companion for professional-grade fastening. This comprehensive box set comes with a versatile selection of tap bolts and nuts, meticulously crafted to provide the strongest hold for your construction and assembly projects.
  imgCard: "@/images/product-image-3.avif"
  imgMain: "@/images/product-image-main-3.avif"
  imgAlt: "Mockup boxes of a tap bolts and nuts set"
tabs:
  - id: "tabs-with-card-item-1"
    dataTab: "#tabs-with-card-1"
    title: "Description"
  - id: "tabs-with-card-item-2"
    dataTab: "#tabs-with-card-2"
    title: "Specifications"
  - id: "tabs-with-card-item-3"
    dataTab: "#tabs-with-card-3"
    title: "Blueprints"
longDescription:
  title: "Strength Meets Precision"
  subTitle: |
    The SF-BN B203 Tap Bolts and Nuts Set offers robust durability and precision for construction professionals, ensuring reliable performance in every application, from house framing to machinery assembly.
  btnTitle: "Contact sales to learn more"
  btnURL: "#"
descriptionList:
  - title: "Corrosion Resistance"
    subTitle: "Zinc coating not only provides a polished look but also shields against corrosion, ensuring longevity."
  - title: "Improved Safety"
    subTitle: "A secure fitting translates to safer structures with reduced risk of component failure."
  - title: "Convenience"
    subTitle: "This all-in-one set means you have the right size on hand, cutting down on project delays and additional trips to the hardware store."
specificationsLeft:
  - title: "Material Composition"
    subTitle: "Manufactured from high-grade steel, delivering strength and reliability for demanding applications."
  - title: "Surface Finish"
    subTitle: "Protected with a zinc coating to offer enhanced corrosion resistance and longevity."
  - title: "Quantity Per Set"
    subTitle: "The set includes a balanced selection of 25 tap bolts and 25 matching nuts."
  - title: "Size Assortment"
    subTitle: "Features a comprehensive range of sizes to cater to various project requirements, ensuring compatibility and versatility."
specificationsRight:
  - title: "Thread Details"
    subTitle: "Engineered with precision-cut threads for a secure fit and easy installation."
  - title: "Mechanical Properties"
    subTitle: "Each bolt and nut is designed to meet specific load rating or strength grades, suitable for structural applications."
  - title: "Standards and Certifications"
    subTitle: "Complies with relevant industry standards and certifications, ensuring consistent quality and safety."
  - title: "Suitable Applications"
    subTitle: "Ideal for a wide array of uses, from construction environments to mechanical assemblies that demand strong and secure joints."
blueprints:
  first: "@/images/blueprint-1.avif"
  second: "@/images/blueprint-2.avif"  
---
```

/src/content/products/en/item-f303.md
```
---
title: "SF-FN F303"
description: "Hex Bolts"
main:
  id: 4
  content: |
    Introducing the SF-FN F303 Hex Bolts – the perfect choice for heavy-duty fastening applications. Crafted with precision and durability in mind, these hex bolts provide the strength and reliability you need for your toughest projects.
  imgCard: "@/images/product-image-4.avif"
  imgMain: "@/images/product-image-main-4.avif"
  imgAlt: "Mockup boxes of hex bolts"
tabs:
  - id: "tabs-with-card-item-1"
    dataTab: "#tabs-with-card-1"
    title: "Description"
  - id: "tabs-with-card-item-2"
    dataTab: "#tabs-with-card-2"
    title: "Specifications"
  - id: "tabs-with-card-item-3"
    dataTab: "#tabs-with-card-3"
    title: "Blueprints"
longDescription:
  title: "Heavy-Duty Fastening Solutions"
  subTitle: |
    The SF-FN F303 Hex Bolts are designed to handle the toughest fastening challenges with ease. Whether you're working on construction projects or heavy machinery, these hex bolts deliver the strength and reliability you need.
  btnTitle: "Contact sales to learn more"
  btnURL: "#"
descriptionList:
  - title: "Strength and Durability"
    subTitle: "Constructed from high-quality materials, these hex bolts are built to withstand heavy loads and tough conditions."
  - title: "Precision Engineering"
    subTitle: "Engineered with precision-cut threads and exact specifications, ensuring a tight and secure fit every time."
  - title: "Versatility"
    subTitle: "Suitable for a wide range of applications, from construction to machinery, providing versatile fastening solutions."
specificationsLeft:
  - title: "Material"
    subTitle: "Made from premium-grade steel or alloy, offering exceptional strength and corrosion resistance."
  - title: "Thread Design"
    subTitle: "Precision-cut threads ensure optimal grip and reliability, even in high-stress environments."
  - title: "Quantity"
    subTitle: "Each set includes a sufficient quantity of hex bolts to tackle various projects and applications."
  - title: "Sizes"
    subTitle: "Available in a range of sizes to accommodate different project requirements, ensuring versatility and compatibility."
specificationsRight:
  - title: "Finish"
    subTitle: "Finished with a protective coating to enhance corrosion resistance and extend service life."
  - title: "Load Capacity"
    subTitle: "Designed to meet or exceed industry standards for load-bearing capacity, ensuring reliable performance under heavy loads."
  - title: "Certifications"
    subTitle: "Compliant with relevant industry standards and certifications, guaranteeing quality and reliability."
  - title: "Applications"
    subTitle: "Ideal for use in construction, machinery, automotive, and other heavy-duty applications that demand strong and reliable fastening."
blueprints:
  first: "@/images/blueprint-1.avif"
  second: "@/images/blueprint-2.avif"  
---
```

/src/content/products/en/item-a765.md
```
---
title: "SF-AB A765"
description: "Assorted Screw Set" 
main:
  id: 2
  content: |
    Introducing the SF-AB A765 Assorted Screw Set – the ultimate solution for your screw fastening needs. This comprehensive set includes a wide variety of screws meticulously curated to tackle various projects with ease and precision.
  imgCard: "@/images/product-image-2.avif"
  imgMain: "@/images/product-image-main-2.avif"
  imgAlt: "Mockup boxes of assorted screw set"
tabs:
  - id: "tabs-with-card-item-1"
    dataTab: "#tabs-with-card-1"
    title: "Description"
  - id: "tabs-with-card-item-2"
    dataTab: "#tabs-with-card-2"
    title: "Specifications"
  - id: "tabs-with-card-item-3"
    dataTab: "#tabs-with-card-3"
    title: "Blueprints"
longDescription:
  title: "Versatile Screw Fastening Solutions"
  subTitle: |
    The SF-AB A765 Assorted Screw Set offers unmatched versatility and convenience, making it the perfect choice for DIY enthusiasts and professionals alike. With a comprehensive selection of screws, you'll always have the right fastener for the job.
  btnTitle: "Contact sales to learn more"
  btnURL: "#"
descriptionList:
  - title: "Wide Variety"
    subTitle: "Includes a diverse range of screw types and sizes to accommodate various applications and materials."
  - title: "Ease of Use"
    subTitle: "Each screw is designed for effortless installation, ensuring hassle-free fastening every time."
  - title: "Convenience"
    subTitle: "Eliminates the need for multiple trips to the hardware store, saving time and effort on your projects."
specificationsLeft:
  - title: "Material"
    subTitle: "Constructed from high-quality materials such as stainless steel, ensuring durability and corrosion resistance."
  - title: "Assortment"
    subTitle: "Contains a generous assortment of screws, including wood screws, machine screws, and sheet metal screws."
  - title: "Quantity"
    subTitle: "Each set includes a sufficient quantity of screws to handle a wide range of projects and tasks."
  - title: "Sizes"
    subTitle: "Available in various sizes to suit different project requirements, ensuring compatibility and versatility."
tableData:
  - feature: ["Specification", "Value"]
    description:
      - ["Length (mm)", "Various"]
      - ["Weight (g)", "N/A"]
      - ["Material", "Stainless Steel"]
      - ["Finish", "Assorted"]
      - ["Package Contents", "Various screws in a set"]
blueprints:
  first: "@/images/blueprint-1.avif"
  second: "@/images/blueprint-2.avif"
---
```

/src/content/products/en/item-t845.md
```
---
title: "SF-TB T845"
description: "Machine Screws"
main:
  id: 1
  content: |
    Introducing the SF-TB T845 – your go-to solution for precision fastening in machinery and equipment. This comprehensive set of machine screws is meticulously crafted to meet the stringent demands of industrial applications, ensuring secure and reliable fastening.
  imgCard: "@/images/product-image-1.avif"
  imgMain: "@/images/product-image-main-1.avif"
  imgAlt: "Mockup boxes of machine screws set"
tabs:
  - id: "tabs-with-card-item-1"
    dataTab: "#tabs-with-card-1"
    title: "Description"
  - id: "tabs-with-card-item-2"
    dataTab: "#tabs-with-card-2"
    title: "Specifications"
  - id: "tabs-with-card-item-3"
    dataTab: "#tabs-with-card-3"
    title: "Blueprints"
longDescription:
  title: "Precision Fastening Solutions"
  subTitle: |
    The SF-TB T845 Machine Screws offer unparalleled precision and reliability for industrial applications, ensuring seamless operation and longevity for your machinery and equipment.
  btnTitle: "Contact sales to learn more"
  btnURL: "#"
descriptionList:
  - title: "Durability"
    subTitle: "Crafted from high-quality materials, these machine screws are built to withstand the rigors of industrial environments."
  - title: "Precision Engineering"
    subTitle: "Engineered with precision-cut threads and exact specifications, ensuring a tight and secure fit for every application."
  - title: "Versatility"
    subTitle: "Suitable for a wide range of machinery and equipment, providing versatile fastening solutions for various industrial needs."
specificationsLeft:
  - title: "Material Composition"
    subTitle: "Constructed from premium-grade steel or alloy for exceptional strength and durability."
  - title: "Surface Finish"
    subTitle: "Finished with a protective coating to enhance corrosion resistance and extend service life."
  - title: "Quantity Per Set"
    subTitle: "Each set contains a comprehensive assortment of machine screws to meet diverse industrial requirements."
  - title: "Size Range"
    subTitle: "Available in various sizes and lengths to accommodate different machinery and equipment specifications."
specificationsRight:
  - title: "Thread Specifications"
    subTitle: "Precision-engineered threads ensure optimal grip and reliability, even in high-vibration environments."
  - title: "Load Capacity"
    subTitle: "Designed to meet or exceed industry standards for load-bearing capacity, ensuring safe and reliable operation."
  - title: "Certifications"
    subTitle: "Compliant with relevant industry standards and certifications, guaranteeing quality and reliability."
  - title: "Applications"
    subTitle: "Ideal for use in a wide range of industrial machinery, equipment, and assemblies that demand precise and secure fastening."
blueprints:
  first: "@/images/blueprint-1.avif"
  second: "@/images/blueprint-2.avif"   
---
```

/src/content/docs/welcome-to-docs.mdx
```
---
title: ScrewFast Docs
head:
  - tag: title
    content: ScrewFast Docs
description: Explore ScrewFast's comprehensive documentation for an in-depth look at our premium tools and construction services. 
template: splash
editUrl: false
lastUpdated: false
next: false
hero:
  title: Documentation Hub
  tagline: Your central hub for streamlined tool guidance, detailed service docs, and project support.
  image:
      alt: A ScrewFast's Logo
      dark: ../../images/starlight/screwfast_hero.svg
      light: ../../images/starlight/screwfast_hero_dark.svg
  actions:
    - text: Get started
      icon: right-arrow
      variant: primary
      link: /guides/getting-started/
    - text: View on GitHub
      icon: external
      variant: minimal
      link: https://github.com/mearashadowfax/ScrewFast
---
import "@styles/starlight_main.css";
import { Card, CardGrid } from '@astrojs/starlight/components';

<CardGrid stagger>

  <Card title="Quick Start Guides" icon="document">
    Get up and running swiftly with our straightforward and concise guides, tailored for new users and seasoned experts alike.
  </Card>

  <Card title="Tools & Equipment" icon="seti:eslint">
    Discover the complete lineup of ScrewFast's superior quality tools and equipment. Each subsection offers detailed specifications, usage instructions, and maintenance tips.
  </Card>

   <Card title="Construction Services" icon="seti:puppet">
    Discover the complete lineup of ScrewFast's superior quality tools and equipment. Each subsection offers detailed specifications, usage instructions, and maintenance tips.
  </Card>

   <Card title="Advanced Topics" icon="seti:terraform">
    Discover the complete lineup of ScrewFast's superior quality tools and equipment. Each subsection offers detailed specifications, usage instructions, and maintenance tips.
  </Card>
</CardGrid>
```

/src/content/docs/advanced/technical-specifications.mdx
```
---
title: Technical Specifications
description: Explore ScrewFast's comprehensive documentation for an in-depth look at our premium tools and construction services. 
sidebar:
  label: Technical Specifications
  order: 1
---
import {
  Card,
  CardGrid,
  LinkCard,
  Steps
} from "@astrojs/starlight/components";

Dive deep into the technicalities of our product offerings with ScrewFast's comprehensive technical specifications documentation. Our detailed data sheets provide you with all the information you need on:

<CardGrid>
  <Card title="Material properties and grades" icon="star"></Card>
  <Card title="Mechanical strengths and tolerances" icon="star"></Card>
  <Card title="Environmental resilience and sustainability ratings" icon="star"></Card>
  <Card title="Compatibility and interoperability" icon="star"></Card>
</CardGrid>

Understanding these specifications will help you select and use our products with confidence, ensuring optimal performance and longevity.

<Steps>
1. **Material Specifications**  
Insight into the materials used and their properties to assist you with informed decision-making.

2. **Performance Metrics**  
Documented performance metrics that detail what you can expect from our products under various conditions.

3. **Compliance Standards**  
Information about industry standards and regulatory compliance ensures your project adheres to necessary codes and practices.
</Steps>

## Product Integration Techniques

Unlock the full potential of ScrewFast products with our set of specialized integration techniques. 

Leverage our in-depth knowledge to enhance the efficiency and durability of your constructions by correctly incorporating our products.

## Advanced Use Cases

Explore the possibilities with ScrewFast through real-world scenarios. Our catalog of advanced use cases demonstrates how our products can solve complex challenges and push the boundaries of conventional construction.

See how ScrewFast products have been instrumental in:

<CardGrid>
  <LinkCard title="Major infrastructure projects" href="/guides/getting-started" />
  <LinkCard title="Innovative architectural accomplishments" href="/guides/getting-started" />
  <LinkCard title="High-stress industrial applications" href="/guides/getting-started" />
</CardGrid>

These case studies serve as an inspiration and a learning tool, showcasing what can be achieved with the right expertise and ScrewFast's superior product range.```

/src/content/docs/tools/tool-guides.mdx
```
---
title: Tool Guides
description: Explore ScrewFast's comprehensive documentation for an in-depth look at our premium tools and construction services. 
sidebar:
  label: Tool Guides
  order: 1
---

ScrewFast prides itself on a comprehensive range of high-grade tools and equipment. These resources are not just about delivering the performance you expect but ensuring they stand the test of time. Below, you will find a curated selection of guides geared towards helping you get the most out of our products.

### Tool Guides

**Machine Screws Manual**  
   - Detailed specifications and applications for ScrewFast's variety of machine screws
   - Visual guide for identifying screw types and choosing the right one for your project

**Assorted Screw Set Handbook**  
   - Instructions on usage and selection from the assorted screw set
   - Tips on organizing and storing your screw set for easy access

**Tap Bolts and Nuts Catalog**  
   - Exploring the diverse range of tap bolts and nuts suitable for various construction environments
   - Guidelines for selecting the correct bolt size and nut pairing for secure fastening

**Hex Bolts Instructions**  
   - Comprehensive procedures on the use of hex bolts in your projects
   - Strength ratings, threading information, and torque recommendations```

/src/content/docs/tools/equipment-care.mdx
```
---
title: Equipment Care & Maintenance
description: Explore ScrewFast's comprehensive documentation for an in-depth look at our premium tools and construction services. 
sidebar:
  label: Equipment Care
  order: 2
---

import {
  Card,
  CardGrid,
  LinkCard,
  Aside
} from "@astrojs/starlight/components";

<Card title="Maintaining Your ScrewFast Tools" icon="approve-check-circle">
<LinkCard
  description="Step-by-step guide for the routine care and maintenance of your ScrewFast tools to ensure long-lasting functionality."
  href="/guides/getting-started"
/>
<LinkCard
  description="Cleaning, storage, and inspection practices to keep tools in optimal condition"
  href="/guides/getting-started"
/>
</Card>

<CardGrid>
<Card title="Best Practices for Equipment Longevity" icon="star">

   - Strategies for extending the life of your tools and equipment through proper use and handling
   - A preventative maintenance schedule that will help avoid common wear and tear
</Card>
<Card title="Troubleshooting Common Tool Issues" icon="rocket">

   - Solutions for frequently encountered issues with ScrewFast equipment
   - Advice on when to seek professional repair services versus performing DIY fixes
</Card>
</CardGrid>

<Aside>
Remember that attentiveness to the condition and care of your tools and equipment is paramount to ensuring their longevity and reliability. Regular maintenance not only helps prevent downtime but can also ensure the safety of those who use them. For each guide and reference listed here, we offer additional support through our customer service channels should you require personalized assistance.
</Aside>```

/src/content/docs/zh-cn/welcome-to-docs.mdx
```
---
title: ScrewFast docs
head:
  - tag: title
    content: ScrewFast docs
description: Explore ScrewFast's comprehensive documentation for an in-depth look at our premium tools and construction services. 
template: splash
editUrl: false
lastUpdated: false
next: false
hero:
  title: 文档中心
  tagline: 您的集中式工具指南、详细服务文档和项目支持中心。
  image:
      alt: A ScrewFast's Logo
      dark: ../../../images/starlight/screwfast_hero.svg
      light: ../../../images/starlight/screwfast_hero_dark.svg
  actions:
    - text: Get started
      icon: right-arrow
      variant: primary
      link: /zh-cn/guides/getting-started/
    - text: View on GitHub
      icon: external
      variant: minimal
      link: https://github.com/mearashadowfax/ScrewFast
---
import "@styles/starlight_main.css";
import { Card, CardGrid } from '@astrojs/starlight/components';

<CardGrid stagger>
  <Card title="快速入门指南" icon="document">
    通过我们简明扼要的指南，快速掌握使用技巧，适用于新手和老手用户。
  </Card>

  <Card title="工具与设备" icon="seti:eslint">
    探索 ScrewFast 的全面工具和设备系列。每个子部分提供详细的规格、使用说明和维护技巧。
  </Card>

   <Card title="施工服务" icon="seti:puppet">
    探索 ScrewFast 的全面工具和设备系列。每个子部分提供详细的规格、使用说明和维护技巧。
  </Card>

   <Card title="高级主题" icon="seti:terraform">
    探索 ScrewFast 的全面工具和设备系列。每个子部分提供详细的规格、使用说明和维护技巧。
  </Card>
</CardGrid>
```

/src/content/docs/zh-cn/guides/intro.mdx
```
---
title: ScrewFast 服务介绍
description: 探索 ScrewFast 的全面文档，深入了解我们的优质工具和建筑服务。
sidebar:
  label: Introduction to Services
  order: 2
---

import {
  Tabs,
  TabItem,
} from "@astrojs/starlight/components";

作为我们致力于为您的所有建筑和硬件需求提供端到端解决方案的一部分，我们在 ScrewFast 自豪地提供一套全面的专业服务。从最初的咨询到最终的验收，我们多方位的服务涵盖了您项目的全部，确保质量的结果和客户满意度。本文档的本节将指导您了解如何充分利用我们的专业知识。

## 服务概述

<Tabs>
  <TabItem label="定制解决方案">
    每个建筑项目都带来了独特的挑战和需求。在 ScrewFast，我们定制我们的服务以满足您的特定需求，确保无论您的项目规模或复杂程度如何，我们的团队都能以精确和专业的方式处理。
  </TabItem>
  <TabItem label="专业团队">
    利用我们熟练员工的技能，从建筑师和工程师到熟练的劳动者，每个人都为将您的愿景变为现实做出了贡献。
  </TabItem>
   <TabItem label="质量承诺">
    质量是我们做的一切的核心。我们采用严格的质量控制措施，确保我们交付的工作符合甚至超出行业标准。
  </TabItem>
   <TabItem label="持续支持">
    我们与客户的关系在项目完成后并不结束。我们提供持续支持，以解决任何问题，并确保您对投资的持久满意度。
  </TabItem>
</Tabs>
```

/src/content/docs/zh-cn/guides/getting-started.mdx
```
---
title: 入门指南
description: 探索 ScrewFast 的全面文档，深入了解我们的优质工具和建筑服务。
sidebar:
  label: Getting Started
  order: 1
---

import {
  Card,
  CardGrid,
  LinkCard,
  Steps,
  Aside,
  Tabs,
  TabItem,
} from "@astrojs/starlight/components";

欢迎来到 ScrewFast 文档！我们很高兴能帮助您开始使用我们的优质工具。本指南旨在介绍我们的工具范围，帮助您了解基础知识，并为您的第一个项目做好准备。让我们立即进入高质量、可靠的工艺世界，与 ScrewFast 一起。

## 工具概述

<CardGrid>
  <Card title="螺丝刀套装" icon="seti:config">
    多功能且符合人体工程学设计，适用于各种螺丝类型。
    <LinkCard title="了解更多 " href="zh-cn/guides/getting-started" />
  </Card>
  <Card title="电钻锤" icon="seti:pipeline">
    强大的钻孔和冲击驱动性能。
    <LinkCard title="了解更多 " href="zh-cn/guides/getting-started" />
  </Card>
  <Card title="电动锯" icon="seti:crystal">
    可调节设置，精准切割各种材料。
    <LinkCard title="了解更多 " href="zh-cn/guides/getting-started" />
  </Card>
</CardGrid>

## 设置说明

<Steps>

1. 解包图标 打开 ScrewFast 工具包
   小心打开包装，并确认所有零件齐全。熟悉工具及任何附件。

2. 安全检查图标 初始设置和安全检查
   在处理工具之前阅读安全手册。检查工具是否有运输损坏，并确保安全保护装置已安装到位。

3. 校准图标 校准和准备首次使用
   按照制造商的说明校准您的工具。确保电池已充电或电气连接安全可靠。

</Steps>


## 清洁和维护

<Aside type="tip">
  清洁前务必拔掉工具插头。使用软、干的布擦拭外部，并存放在干燥的地方。
</Aside>

定期维护可确保工具的长期使用和安全性。每次使用后清洁工具，检查磨损，并按照工具手册中规定的方式润滑移动部件。

## 额外资源

<LinkCard
  title="深入教程"
  description="深入了解如何使用我们的工具，由专家提供教程。"
  href="zh-cn/guides/getting-started"
/>

<LinkCard
  title="视频演示"
  description="视觉指南，帮助您充分利用我们的工具。"
  href="zh-cn/guides/getting-started"
/>

<LinkCard
  title="保修信息"
  description="了解您的保修范围，以及如何提出索赔。"
  href="zh-cn/guides/getting-started"
/>
```

/src/content/docs/zh-cn/guides/first-project-checklist.mdx
```
---
title: 第一个项目清单
description: 探索 ScrewFast 的全面文档，深入了解我们的优质工具和建筑服务。
sidebar:
  label: First Project Checklist
  order: 3
---

import {
  Card,
  CardGrid,
  LinkCard,
  Steps,
  Aside,
  Tabs,
  TabItem,
} from "@astrojs/starlight/components";

开始新项目既令人兴奋又具有挑战性。通过正确的准备和指导，您的冒险将更有成功的可能性。ScrewFast 第一个项目清单旨在提供清晰和结构化的方法，以确保您在每一步都做好了充分的准备。

## 项目准备

<CardGrid>
  <Card title="范围和目标">
    - 确保项目的范围、交付内容和期望结果清晰明确
    - 为项目完成明确定义清晰的目标和成功标准
  </Card>
  <Card title="工具和设备">
    - 列出所有需要的 ScrewFast 工具和设备
    - 在开始之前确认库存的可用性和状态
  </Card>
  <Card title="安排服务">
    - 如果需要额外的专业知识或人力，请提前安排 ScrewFast 建筑服务
    - 与您的 ScrewFast 代表明确服务级别协议和时间表
  </Card>
</CardGrid>

## 项目执行
### 初始阶段
<Steps>
1. 根据 ScrewFast 设置指南设置项目现场

2. 召开初始团队会议，就项目目标和 ScrewFast 方法达成一致

3. 建立项目检查点和里程碑，定期进行评估
</Steps>


## 额外资源
<CardGrid>
<LinkCard
  title="详细指南"
  description="访问 ScrewFast 工具和服务的深度文档和用户手册。"
  href="zh-cn/guides/getting-started"
/>
<LinkCard
  title="支持联系人"
  description="保持 ScrewFast 支持的联系人详细信息，可在项目期间提供帮助。"
  href="zh-cn/guides/getting-started"
/>
<LinkCard
  title="高级学习"
  description="探索 ScrewFast 提供的进一步教育资源，以完善您的技能和知识基础。"
  href="zh-cn/guides/getting-started"
/>
</CardGrid>
```

/src/content/docs/guides/intro.mdx
```
---
title: Introduction to ScrewFast Services
description: Explore ScrewFast's comprehensive documentation for an in-depth look at our premium tools and construction services. 
sidebar:
  label: Introduction to Services
  order: 2
---

import {
  Tabs,
  TabItem,
} from "@astrojs/starlight/components";

As part of our commitment to providing an end-to-end solution for all your construction and hardware needs, we at ScrewFast are proud to offer a comprehensive suite of professional services. From initial consultations to final inspections, our multifaceted services encompass the entirety of your project, ensuring quality results and client satisfaction. This section of the documentation will guide you through everything you need to know to leverage our expertise to its fullest potential.

## Overview of Services

<Tabs>
  <TabItem label="Tailored Solutions">
    Each construction project carries its unique challenges and demands. At ScrewFast, we customize our services to match your specific needs, ensuring that no matter the scale or complexity of your project, our team is equipped to handle it with precision and professionalism.
  </TabItem>
  <TabItem label="Expert Team">
    Leverage the skills of our knowledgeable staff, from architects and engineers to skilled laborers, each contributing their expertise to bring your vision to life.
  </TabItem>
   <TabItem label="Commitment to Quality">
    Quality is at the heart of everything we do. We employ stringent quality control measures to assure that the work we deliver meets and exceeds industry standards.
  </TabItem>
   <TabItem label="Ongoing Support">
    Our relationship with our clients doesn't end once the project is completed. We provide continuous support to address any issues and ensure lasting satisfaction with your investment.
  </TabItem>
</Tabs>```

/src/content/docs/guides/getting-started.mdx
```
---
title: Getting Started
description: Explore ScrewFast's comprehensive documentation for an in-depth look at our premium tools and construction services. 
sidebar:
  label: Getting Started
  order: 1
---

import {
  Card,
  CardGrid,
  LinkCard,
  Steps,
  Aside,
  Tabs,
  TabItem,
} from "@astrojs/starlight/components";

Welcome to ScrewFast Docs! We're excited to help you get started with our premium tools. This guide is designed to introduce you to our tool range, help you understand the basics, and get you up to speed for your first project. Let's jump right into the world of high-quality, reliable craftsmanship with ScrewFast.

## Tools Overview

<CardGrid>
  <Card title="ScrewDriver Set" icon="seti:config">
    Versatile and ergonomic, suitable for all screw types.
    <LinkCard title="Learn More " href="/guides/getting-started" />
  </Card>
  <Card title="Hammer Drill" icon="seti:pipeline">
    Powerful performance for drilling and impact driving.
    <LinkCard title="Learn More " href="/guides/getting-started" />
  </Card>
  <Card title="Power Saws" icon="seti:crystal">
    Precision cutting with adjustable settings for various materials.
    <LinkCard title="Learn More " href="/guides/getting-started" />
  </Card>
</CardGrid>

## Setup Instructions

<Steps>

1. Unboxing Icon Unbox Your ScrewFast Tools
   Carefully open the packaging and verify all components are present. Familiarize yourself with the tool and any accessories.

2. Safety Check Icon Initial Setup and Safety Checks
   Read the safety manual before handling the tool. Check the tool for any shipping damage and ensure safety guards are in place.

3. Calibration Icon Calibration and Preparation for First Use
   Follow the manufacturer's instructions to calibrate your tools as required. Ensure batteries are charged or electrical connections are secure.

</Steps>


## Cleaning and Maintenance

<Aside type="tip">
  Always unplug tools before cleaning. Use a soft, dry cloth to wipe the
  exterior and store in a dry place.
</Aside>

Regular maintenance ensures longevity and safety. Clean your tools after each use, check for wear, and lubricate moving parts as specified in the tool's manual.

## Additional Resources

<LinkCard
  title="In-depth Tutorials"
  description="Deep dive into using our tools with expert-led tutorials."
  href="/guides/getting-started"
/>

<LinkCard
  title="Video Demos"
  description="Visual guides to get the most out of your tools."
  href="/guides/getting-started"
/>

<LinkCard
  title="Warranty Information"
  description="Understand your coverage and how to make a claim if needed."
  href="/guides/getting-started"
/>
```

/src/content/docs/guides/first-project-checklist.mdx
```
---
title: First Project Checklist
description: Explore ScrewFast's comprehensive documentation for an in-depth look at our premium tools and construction services. 
sidebar:
  label: First Project Checklist
  order: 3
---
import {
  Card,
  CardGrid,
  LinkCard,
  Steps,
  Aside,
  Tabs,
  TabItem,
} from "@astrojs/starlight/components";

Embarking on a new project can be exciting and challenging in equal measure. With the right preparation and guidance, your venture is poised for success. The ScrewFast First Project Checklist is designed to provide a clear and structured approach to ensure you're well-prepared every step of the way.

## Project Preparation

<CardGrid>
  <Card title="Scope and Objectives">
    - Ensure clarity of the project's scope, deliverables, and desired outcomes
    - Define clear objectives and success criteria for project completion
  </Card>
  <Card title="Tools and Equipment">
    - Make a list of all required ScrewFast tools and equipment
    - Verify inventory availability and condition before starting
  </Card>
  <Card title="Arranging Services">
    - If additional expertise or manpower is needed, arrange for ScrewFast construction services in advance
    - Clarify service level agreements and timelines with your ScrewFast representative
  </Card>
</CardGrid>

## Project Execution
### Initial Phase
<Steps>
1. Set up the project site according to ScrewFast setup guidelines

2. Conduct an initial team meeting to align on project goals and ScrewFast methodologies

3. Establish project checkpoints and milestones for regular assessment
</Steps>


## Additional Resources
<CardGrid>
<LinkCard
  title="Detailed Guides"
  description="Access in-depth documentation and user manuals for ScrewFast tools and services."
  href="/guides/getting-started"
/>
<LinkCard
  title="Support Contacts"
  description="Keep handy the contact details for ScrewFast support, available for assistance throughout your project."
  href="/guides/getting-started"
/>
<LinkCard
  title="Advanced Learning"
  description="Explore further educational resources provided by ScrewFast to refine your skills and knowledge base."
  href="/guides/getting-started"
/>
</CardGrid>```

/src/content/docs/construction/safety.mdx
```
---
title: Safety Protocols and Procedures
description: Explore ScrewFast's comprehensive documentation for an in-depth look at our premium tools and construction services.
sidebar:
  label: Safety Protocols
  order: 3
---

import { Card, CardGrid, LinkCard } from "@astrojs/starlight/components";

Safety is at the core of everything we do at ScrewFast. Our comprehensive safety protocols and procedures are designed to protect our team, clients, and the integrity of your project.

<Card title="Key features of our safety commitment include:"></Card>

<LinkCard
  title="Rigorous safety training for all personnel"
  href="/guides/getting-started"
/>

<CardGrid>
  <LinkCard
    title="Regular safety audits and compliance checks"
    href="/guides/getting-started"
  />
  <LinkCard
    title="Emergency response plans and drills"
    href="/guides/getting-started"
  />
</CardGrid>

By integrating safety into our daily operations, we create a secure working environment without compromising on quality and productivity.
```

/src/content/docs/construction/service-overview.mdx
```
---
title: Comprehensive Service Overview
description: Explore ScrewFast's comprehensive documentation for an in-depth look at our premium tools and construction services. 
sidebar:
  label: Service Overview
  order: 1
---

import {
    Card,
    CardGrid,
    LinkCard,
    Aside
} from "@astrojs/starlight/components";

Welcome to ScrewFast Construction Services – your trusted partner in bringing complex construction visions to life. Our dedicated team is equipped with state-of-the-art tools and extensive industry knowledge to ensure your projects are completed with precision and efficiency.

At ScrewFast, we specialize in providing a range of services tailored to meet your unique construction needs. From the initial concept to the final touches, our services encompass:

<CardGrid stagger>

  <Card title="Pre-construction Consultations" icon="star">
    A thorough assessment to understand your project requirements, site conditions, and to provide a clear roadmap for your project.
  </Card>

  <Card title="Design and Engineering" icon="star">
    Leveraging innovative software and expertise to craft bespoke solutions that bring your structural vision to life with accuracy and innovation.
  </Card>

   <Card title="Project Management" icon="star">
    Dedicated on-site leadership to ensure that your project runs smoothly, on time, and within budget.
  </Card>

   <Card title="Construction and Installation" icon="star">
    Employing the latest tools and technologies along with skilled craftsmanship to execute your project to the highest standard.
  </Card>
</CardGrid>```

/src/content/docs/construction/project-planning.mdx
```
---
title: Project Planning and Management
description: Explore ScrewFast's comprehensive documentation for an in-depth look at our premium tools and construction services. 
sidebar:
  label: Project Planning
  order: 2
---

import {
    Card
} from "@astrojs/starlight/components";

Achieve seamless project execution with ScrewFast's meticulous planning and management approach. We prioritize clear communication and strategic planning to ensure your project milestones are achieved without compromise.

<Card title="Our planning and management services include:" icon="seti:notebook">
    - Detailed project timelines
    - Resource allocation and optimization
    - Regular progress updates and reports
    - Risk assessment and management
</Card>
We believe in proactive management to foresee potential challenges and devise solutions before they impact the project.```

/src/content/docs/construction/custom-solutions.mdx
```
---
title: Custom Solutions for Complex Projects
description: Explore ScrewFast's comprehensive documentation for an in-depth look at our premium tools and construction services. 
sidebar:
  label:  Custom Solutions
  order: 4
---

import {
  Card
} from "@astrojs/starlight/components";

Challenging projects demand innovative solutions. ScrewFast excels in delivering custom solutions engineered to address the most intricate and demanding construction requirements.

<Card title="Our custom services provide:" icon="puzzle">
  - Expert analysis of unconventional project demands
  - Tailored construction methods for unique structures
  - Specialized materials and equipment sourcing
  - Collaboration with specialized subcontractors and consultants
</Card>

No matter the complexity, our bespoke services ensure that your specialized project is not just completed, but mastered.```

/src/content/blog/move-from-software-development-to-product-management/2023-01-05-move-from-software-development-to-product-management.md
```
---
title: "Hacking Your Way into Product Management: A Software Developer’s Guide"
date: "2023-01-05"
author: "Mario Guerra"
description: "Explore the transition from software development to product management with this guide tailored for developers. Learn the key skills, advantages, and preparation steps for making a successful career switch, and discover if product management aligns with your passion for strategic thinking and customer-focused problem-solving."
image: "hacking-into-product-mgmt.jpg"
slug: "move-from-software-development-to-product-management"  
categories:
  - product management
tags:
  - career
  - career change
  - product management
  - switching from software development to product management
---

# Hacking Your Way into Product Management: A Software Developer’s Guide

Are you a software developer thinking about making the switch to product management? If so, you’re not alone. A lot of developers find that they really enjoy the strategic thinking and leadership aspects of product management and decide to make the switch.

But what does it take to make the switch? And are you a good fit for product management?

In this article, I’ll explore the skills needed for product management after a background in software development, the advantages of switching, and tips for software developers looking to move into product management.

## Transitioning from software development to product management

First off, let’s talk about the differences between software development and product management. As a software developer, you’re responsible for writing, building, and testing code. You might work on a single feature or be part of a team working on a big project. You spend a lot of time coding, testing, and debugging.

Product management is all about overseeing the design of a product, sometimes from start to finish and sometimes as an ongoing effort. You’ll work with many different stakeholders to define a product roadmap, decide which features to prioritize, and make sure the final product meets the needs of your customers. You’ll work individually and in partnership with other PMs to define, develop, and direct plans for the creation and release of a product.

## Product manager vs. software developer: which is right for me?

You might be wondering – how do I know if a switch from software development to product management is right for me?

In my case, after twenty years in the systems software space, I came to the realization that I enjoyed the process of *defining* a product more than I enjoyed the process of *developing* a product. I also enjoyed talking to customers and helping them solve problems more than I liked coding, testing, and debugging.

Don’t get me wrong, I do enjoy coding, but I find that I enjoy it a lot more now that I do it as a learning endeavor rather than as a career. For the first time in my career, I’m learning new languages (Rust, C#, Java) and I now have a [GitHub repo](https://github.com/mario-guerra) with some of my learning projects. Granted, there’s not a lot there at the time I’m writing this, but it will grow with time!

## Skills needed for product management after software development

So, what skills do you need to make the switch from software development to product management?

- **Excellent communication skills** are an absolute must. As a product manager, you’ll be constantly talking with engineers, other product managers, and most importantly, customers! You need to be able to listen carefully, especially to customers, and ask thoughtful questions to get to the underlying issues.

- **Presentation and persuasion skills.** You’ll spend a lot of time crafting and presenting documentation that supports your vision for what the engineering teams ought to be doing. Sometimes they won’t want to do what you think they ought to, for various reasons. You need to be able to work with these teams to understand their concerns and talk them through why your vision is the right path to follow.

- **Strategic thinking and decision-making.** Product management is all about finding the right balance between what’s best for the business and what’s best for the customer, which means sometimes making tough choices.

- **Understanding your customers.** You need to know what your target market needs and where they’re struggling. This involves talking to customers and staying updated on the latest developments in your industry.

## Preparing for a career move from software development to product management

If you’re a software developer interested in transitioning to product management, consider taking some training programs or courses to help you develop these skills. 

Taking training shows potential employers that you’re serious about making the transition. Additionally, spend time crafting your resume and building your personal brand. I’ve covered this extensively in my [post on finding remote work](https://marioguerra.xyz/finding-remote-work-in-the-2020s/).

## Advantages of moving from software development to product management

There are advantages to switching from software development to product management. In my experience, product management jobs often have more opportunities for advancement and allow for work on a broader variety of projects and industries.

For example, at Microsoft, where I work in the Developer Division (DevDiv), the focus is on creating and maintaining the best experience possible for developers. I’m constantly exposed to new technology and products, and Microsoft is very supportive of internal career moves.

If you’re interested in product management at Microsoft, I recommend the following books:

- [The Customer Driven Playbook](https://amzn.to/3QriCIg)  
- [The Customer Driven Culture](https://amzn.to/3ik2HP6)

These books are broadly applicable to product management and especially relevant to how we do things at Microsoft.

## Is switching from software engineering to product management right for you?

If you love strategic thinking, have strong communication skills, and are passionate about creating products that solve real problems for customers, product management might be a great fit.

Start building your product management skills now by taking courses, volunteering for product management responsibilities, or networking with product managers to learn more. Talking to PMs at your current company can also give you valuable insight and might lead to an internal role.

By taking these steps, you’ll be well-prepared to make the transition from software development to product management and embark on a new and rewarding career.

If you have any questions that I didn’t address, feel free to drop them in the chat below!
```

/src/content/blog/building-intelligent-chatbots-with-microsoft-teams-data/2024-04-12-building-intelligent-chatbots-with-microsoft-teams-data.md
```
---
author: Mario Guerra
categories:
- Artificial Intelligence
- Future of Work
date: "2024-04-12"
description: This article discusses how to use the Microsoft Graph API to extract
  data from Teams channels and build a Retrieval-Augmented Generation (RAG) enhanced
  chatbot to improve productivity and communication.
image: "Teams-Channel-Data-Export-Title-Pic.jpg"
tags:
- AI
- ChatGPT
- future of work
- Microsoft Teams
- RAG
- retrieval augmented generation
title: "Building Intelligent Chatbots with Microsoft Teams Data"
slug: "building-intelligent-chatbots-with-microsoft-teams-data"
---

## Introduction

In the fast-paced world of software development, good communication is crucial. Since we’re almost entirely remote and distributed across multiple time zones, the Microsoft [TypeSpec](https://typespec.io/) team uses Microsoft Teams channels extensively for our interactions.

Much developer time is spent monitoring these channels and responding to questions from other teams, which takes time away from feature development.

One solution we’re experimenting with is harnessing the Microsoft Graph API to export Teams channel data for use in a Retrieval-Augmented Generation (RAG) enhanced chatbot.

This article describes how we’re doing it, and the relevant scripts described below are [available on my GitHub repo](https://github.com/mario-guerra/teams-channel-content-export).

## Understanding the Microsoft Graph API

The Microsoft Graph API is a tool that allows developers to access and integrate data from various Microsoft services, such as Microsoft 365, Windows, and Enterprise Mobility + Security. Think of it as a bridge connecting different islands of data. With this tool, developers can create applications that can interact with these different data sources, reaching a large number of users and enhancing the features offered by Microsoft 365.

The API provides a single endpoint, https://graph.microsoft.com, for access to rich data and insights within the Microsoft cloud. It includes services that manage user and device identity, access, compliance, and security, offering robust protection against potential data breaches.

In this context, we’ll use the Microsoft Graph API to extract data from a Teams channel.

## Identify Your Teams Channel

The extraction process is handled by a script that uses the Microsoft Graph API to fetch messages and their replies from a specific Teams channel.

The group id and channel id of the desired team and channel are required as parameters, which are specified as environment variables in a .env file.

Follow these steps to obtain the group id and channel id:

1. Open Microsoft Teams and navigate to the desired channel.
2. Click on the three-dot menu icon next to the channel name and select ‘Get link to channel’. This will copy the channel link to your clipboard.
3. Paste the copied link into a text editor. The link will be in the format `https://teams.microsoft.com/l/channel/&lt;channel_id&gt;/&lt;channel_name&gt;?groupId=&lt;group_id&gt;&amp;tenantId=&lt;tenant_id&gt;`.
4. Extract the `group_id` and `channel_id` from the link.

![Teams Channel Link](https://marioguerra.xyz/wp-content/uploads/2024/04/Teams-Channel-Get-Link-300x187.jpg)

Once these values are obtained, they should be added to the .env file in the same directory as the script. The .env file should contain the following lines, replacing `&lt;group_id&gt;` and `&lt;channel_id&gt;` with the actual values:

```
GROUP_ID=<group_id>
CHANNEL_ID=<channel_id>
```

### Obtain a Graph API Access Token

To access Teams data via the Graph API, you’ll need to obtain a Graph API access token. Please note that you’ll only be able to extract data from Teams channels that you actively have access to.

You can get an access token by logging into the Microsoft Graph Explorer at https://developer.microsoft.com/graph/graph-explorer and copying the access token from the access token tab.

It’s important to note that these tokens have a short lifespan, measured in hours, so be prepared to regenerate them often by reloading the Graph Explorer UI.

![Graph Explorer](https://marioguerra.xyz/wp-content/uploads/2024/04/Graph-Explorer-Get-Access-Token-300x220.jpg)

Once the access token is obtained, users need to replace the values in the .env file with their actual ACCESS_TOKEN, GROUP_ID, and CHANNEL_ID, and save the .env file in the same directory as the script.

## Query the Teams Channel Using the Graph API

It’s possible to query the Graph API using REST GET requests, but given the amount of information returned, it’s much more practical to do it using scripts.

I’ve written Python scripts for this purpose, which you can [get from my GitHub repo](https://github.com/mario-guerra/teams-channel-content-export).

The `channel_query.py` script fetches and formats messages and their replies from Microsoft Teams using the Microsoft Graph API. The script cleans the HTML content of the messages and formats them into a JSON structure.

To illustrate how the script fetches messages and their replies from a specific Teams channel using the Microsoft Graph API, consider the following code snippet:

```python
# Get the messages and their replies
url = f'https://graph.microsoft.com/beta/teams/{group_id}/channels/{channel_id}/messages?$expand=replies'
headers = {'Authorization': 'Bearer ' + access_token}
```

This code constructs the URL for the API request and sets the necessary headers, including the authorization token.

### Script Functionality

At the heart of the script’s functionality is a fetch of all messages and their replies from the specified channel and then a filter of the messages by date.

This two-step process is necessary because the Microsoft Graph API does not currently support the `createdDateTime` filter query parameter for the `/messages` endpoint. The date filter implemented in the script bypasses any messages that were created before the specified date.

The script formats the messages and their replies into a JSON structure, as shown in the following code snippet:

```python
formatted_message = {
    "messageId": message['id'],
    "messageDateTime": message['createdDateTime'],
    "messageContent": message_content,
    "replies": [
        {
            "replyId": reply['id'],
            "replyDateTime": reply['createdDateTime'],
            "replyContent": (re.sub('<[^<]+?>', '', html.unescape(reply['body']['content'])) if reply['body']['content'] else '').replace('\u00a0', ' ')
        }
        for reply in message['replies']
    ]
}
```

This code creates a dictionary for each message, capturing the message ID, timestamp, content, and replies.

The script also cleans the HTML content of the messages. This process is illustrated in the following code snippet:

```python
# Clean the HTML from the message content
message_content = html.unescape(message['body']['content']) if message['body']['content'] else ''
message_content = message_content.replace('\u00a0', ' ')

# Parse the message content as HTML
soup = BeautifulSoup(message_content, 'html.parser')

# For each <a> tag in the message content
for a_tag in soup.find_all('a'):
    # If the </a><a> tag has an href attribute
    if 'href' in a_tag.attrs:
        # Replace the </a><a> tag with its href attribute formatted as a Markdown link
        a_tag.replace_with(f"[{a_tag.text}]({a_tag['href']})")

# Convert the parsed HTML back to a string and remove all HTML tags
message_content = re.sub('<[^<]+?>', '', str(soup))
```

This code unescapes the HTML content, parses it, replaces any `<a>` tags with their href attributes formatted as Markdown links, and removes all remaining HTML tags.

### Running the Script

The script is run with two command-line arguments: the name of the output file and the date from which to fetch messages.

```
python .\channel_query.py output_file_name.json <YYYY-MM-DD>
```

The script prints the formatted messages as JSON to the console and, if an output file name is provided, writes the output to the file.

## Convert Channel Data to JSON

The second step in the process takes the JSON data file produced by the first script and extracts question-answer pairs using Azure OpenAI, creating a new JSON file for each pair.

```python
questions = await generate_qna(message_content, question_prompt)
answers = await generate_qna(questions + '\n' + answer_content, answers_prompt)
```

This code sends the message content and a predefined prompt to the OpenAI API to generate questions. Then, it sends the generated questions and the replies to the same API to generate answers.

### Script Functionality

The script’s core functionality is to extract question-answer pairs from the input JSON data, which was extracted from a Teams channel. It does this by sending requests to the OpenAI API to generate questions and answers based on the input data. The script then creates a new JSON file for each question-answer pair.

```python
pair = {
    "Questions": question_list,
    "Answers": answer_list
}

# Create a new file for each pair
with open(os.path.join(output_dir, f'qna_{counter}.json'), 'w') as f:
    f.write(json.dumps(pair, indent=4))
```

The script is designed to handle potential issues such as request timeouts and rate limits. If a request times out, the script

 retries the request up to three times before giving up.

## Conclusion

Leveraging Microsoft Teams data and the Microsoft Graph API, you can automate the process of extracting relevant information from Teams channels and building an AI-enhanced chatbot that can provide answers in real-time.

By extracting, processing, and integrating this data, we can build systems that make smarter, more efficient use of information and enable quicker responses to common queries, enhancing productivity in a distributed work environment.

You can find the full code for both scripts in my GitHub repo here: [GitHub Repo](https://github.com/mario-guerra/teams-channel-content-export).```

/src/content/blog/prompting-chatgpt-to-write-in-your-style/2023-07-19-prompting-chatgpt-to-write-in-your-style.md
```
---
title: "Power Up Your Pen: Prompting ChatGPT to Write in Your Style"
date: "2023-07-19"
author: "Mario Guerra"
categories:
  - Artificial Intelligence
  - Future of Work
  - Technology
tags:
  - aiworkflow
  - becoming a ChatGPT master
  - ChatGPT
  - chatGPT for blog content
  - Fine-tuning ChatGPT output
  - future of work
  - futureofwork
  - workflow
description: "Learn how to maximize the potential of ChatGPT with this comprehensive guide. Discover its capabilities, practical applications, and tips for crafting effective prompts, fine-tuning responses, and understanding its limits to make the most of this powerful AI tool."
image: "Robot-author.png"
slug: "prompting-chatgpt-to-write-in-your-style"
---


The rise of AI-powered language models like ChatGPT has revolutionized the way content is created, making it faster and more efficient than ever before. However, using it to craft content that truly reflects your own unique voice and tone can be challenging.


I’ve been working with Large Language Models (LLMs) like ChatGPT for a while, and I’ve gotten pretty good at getting useful results out of them. The key is to carefully direct the model’s output through the use of fine-tuned prompts.


This article will guide you through a workflow using ChatGPT to create blog content that not only conveys your intended message but also captures the distinctive character of your own writing style.


It’s a long article, but I promise the juice is worth the squeeze.


## Getting the best output from ChatGPT


ChatGPT is a great tool, but it’s also kind of dumb. Without clear direction, it will generate content for you but it’s unlikely to be content you’ll find useful for publishing.


ChatGPT works best with structure, where you provide information and details that will influence the content it produces.


To fully benefit from ChatGPT during content creation, it’s helpful to understand how it operates internally. ChatGPT works by breaking input text into segments termed tokens, which serve as the basic processing units. It then examines these tokens and generates
 a response based on the context and embedded information.


ChatGPT can process a specific number of tokens at once, known as the context window. This window has a considerable impact on the AI’s output, as it defines the segment of input text the AI takes into account while generating a response. Since the context
 window has a limited size, the model can only handle a finite amount of data.


This constraint underlines the importance of composing concise and focused prompts, including crucial details for generating content that is consistent with your desired voice and style.


## Evaluate your writing style


I’m now going to walk you through a blog-creation workflow using ChatGPT, starting with an analysis of writing style.


First, pick an example of your writing that you feel most accurately reflects your personal writing style. For this example, I’m using the text of a blog post I wrote for the [Azure SDK blog about our open-source SDK test proxy](https://devblogs.microsoft.com/azure-sdk/level-up-your-cloud-testing-game-with-the-azure-sdk-test-proxy/).


I’ll direct the bot to list the elements that define a person’s writing style, then I’ll have it evaluate my writing sample based on those elements.


Next, **and this is crucial**, I’ll direct the bot to produce a prompt I can use to feed back into ChatGPT to reproduce my writing style.


Here’s my interaction with ChatGPT based on GPT-4, hosted on [Azure OpenAI](https://learn.microsoft.com/en-us/azure/ai-services/openai/overview):


> **Me**: what are the elements that define a person’s writing style?

> **Bot**: *A person’s writing style is a unique blend of various elements that together create a distinctive voice in their written work. Some elements that define or influence a person’s writing style are:*

> *Vocabulary: The choice of words has a significant impact on one’s writing style. A rich and varied vocabulary can make writing more engaging and descriptive.*

> *Syntax: This refers to the arrangement of words, phrases, and clauses in sentences. A writer’s sentence structure, including the length, complexity, and type of sentences, is a crucial aspect of their writing style.*

> *Punctuation: The use of commas, periods, semicolons, and other punctuation marks can significantly affect the flow and rhythm of a piece of writing.*

> *Tone: A writer’s tone communicates their attitude towards a subject and their audience. It can be formal, informal, authoritative, humorous, or any combination of these, and it strongly affects the writing style.*

> *Perspective: The point of view (first, second, or third person) chosen by the writer can significantly impact the connection between the writer, the story, and the reader.*

> *Figurative language: The use of similes, metaphors, alliteration, and other figures of speech can add layers of meaning, depth, and interest to a writer’s work.*

> *Imagery: The degree to which a writer uses descriptive language to create vivid mental pictures, sensations, and emotions in the reader’s mind influences their writing style.*

> *Rhythm: This refers to the pattern of stressed and unstressed syllables in prose, which can create a ‘flow’ in the writing. Rhythm can provide a unique pace and cadence to the text.*

> *Dialogue: A writer’s approach to crafting and presenting dialogue, including the use of slang, dialects, and idiosyncrasies, contributes to the overall style.*

> *Theme: The topics, motifs, and messages a writer consistently explores in their work help define their writing style.*

> *Each writer combines these elements in their own way, creating a unique “fingerprint” that sets their writing apart from others.*

> **Me**: Using the elements of writing style you just defined, evaluate the writing style of the following content. Describe each writing style element you’ve evaluated from the content, and finish with a prompt I can use to reproduce this exact writing
 style for future writing assignments:


> _Testing is an essential step in the software development process. Finding bugs through testing before releasing software to production saves time and money over the lifetime of the product. However, testing software against a live cloud service like Azure
 can be costly, since services must be provisioned and maintained in order to run the tests…_


Note three things here:

1. I didn’t add *all* the text from my test proxy blog post into my ChatGPT prompt, since it would overflow my token limit. I copied as much as I could and still remain under my limit.

2. I also didn’t show you *all* the text from my blog post that I fed into ChatGPT, for the sake of brevity. I’m only showing a small portion of the full writing sample text I fed into the chat prompt because this article is already too long as it is.

3. If you have more sample text than you can fit in a single prompt, you can always ‘chunk’ the text sample and ask ChatGPT to analyze different sections as part of the overall style analysis. I may do another article on chunking if there’s enough interest.


Let’s get back to the chat:


> **Bot**: *Here’s the evaluation of the writing style for the provided content using the elements defined earlier:*


> *Vocabulary: The vocabulary used in the content is technical and focused on software development, particularly Azure SDKs, testing, and cloud services. Domain-specific terms and acronyms are used throughout the text, creating a specialized vocabulary appropriate
 for its target audience.*


> *Syntax: The content consists mainly of clear and concise sentences. There is a balanced mix of simple, compound, and complex sentences, catering to a technical audience, and effectively presenting technical details.*


> *Punctuation: Standard punctuation is used throughout the text, following common conventions. There are no unusual punctuations or deviations from ordinary usage.*


> *Tone: The tone of the content is informative, precise, and instructive. It avoids casual language, maintaining a professional tone suited to the technical nature of the subject matter.*


> *Perspective: The content is written from a third-person perspective, and occasionally first-person plural perspective when referring to the Azure SDK team. This choice creates an objective and informative tone throughout the content.*


> *Figurative language: The content does not heavily utilize figurative language, as its main focus is to convey technical information in a clear and precise manner.*


> *Imagery: The imagery in this content is minimal, as the primary focus is on providing concrete technical details and guidance related to the features and usage of the Azure SDK and test proxy.*


> *Rhythm: The rhythm in the content is consistent. There is a clear and steady progression of ideas, which effectively conveys the intended message.*


> *Dialogue: The content does not contain any dialogue, as its primary purpose is to provide technical instructions and explanations.*


> ***To reproduce this writing style for future assignments, use the following guidelines:***

> 

> - **Use clear, concise, and direct language to convey technical information.**

> - **Maintain a professional and instructive tone.**

> - **Favor short, straightforward sentences and paragraphs.**

> - **Incorporate domain-specific vocabulary and terms appropriate to your target audience, but avoid jargon where possible.**

> - **Write from a third-person perspective, and occasionally use first-person plural when referring to a team or collective effort.**

> - **Focus on providing clear and detailed explanations while minimizing figurative language and imagery.**

> - **Maintain a steady rhythm and progression of ideas.**

> - **Forgo dialogue, as the focus is on delivering instructions and technical details.**

> - **Optimize for maximum readability, clarity, and comprehension.**


As you can see, the bot analyzed my content and returned a prompt at the end, which I’ve marked in
**bold text.** I can save this prompt and use it to create content in a way that aligns with my personal writing style.


Once you have a prompt that encapsulates your writing style, save it in a text file somewhere handy, so you can copy/paste it back into ChatGPT for later use.


## Ask ChatGPT to write like a human and not like a robot


ChatGPT is great at generating content, but it’s so great that the content often comes across as being written by a bot, even with your personal style blog prompt.


When using ChatGPT for blog content creation, it’s important to consider the role of perplexity and burstiness in generating text that mirrors human writing, striking a balance between engaging content and concise information delivery.


**Perplexity** is a measure used to assess how well an AI can guess the upcoming words in a text. In this context, a low perplexity means that the AI is more effective at generating text similar to human writing because it better understands the patterns
 and structures of the language. By achieving a low perplexity, ChatGPT can create content that is clear, informative, and engaging while closely resembling the writing style of a human author.


**Burstiness** deals with how frequently words or phrases appear within a text and how closely they are grouped together. In the context of generating text with ChatGPT, addressing burstiness ensures that the content remains diverse, interesting, and
 relevant, while minimizing unnecessary repetition. By carefully formulating your prompts, you can guide ChatGPT to create content with an appropriate level of burstiness, making the generated text more engaging and similar to human writing.


We can’t directly control the levels of perplexity and burstiness ChatGPT uses to generate content, but we can influence them through our prompt.


With these aspects in mind, we will take our writing analysis blog prompt and add the following instruction:


*Utilizing these guidelines, craft content that effectively mirrors human writing by adhering to the following steps:*


*1. Opt for a perplexity value around 20 to balance fluency and diversity in the text.*  

*2. Tweak the burstiness setting to imitate natural variations in sentence length, as seen in human writing.*  

*3. Use language that is engaging, clear, and concise, with a logical progression of ideas.*  

*4. Display solid subject matter knowledge, providing accurate and contextually relevant information.*  

*5. Mimic a genuine writing style that resonates with readers, resembling authentic human-created content.*


*So, my personal writing style prompt now looks like this:*


- **Use clear, concise, and direct language to convey technical information.**

- **Maintain a professional and instructive tone.**

- **Favor short, straightforward sentences and paragraphs.**

- **Incorporate domain-specific vocabulary and terms appropriate to your target audience, but avoid jargon where possible.**

- **Write from a third-person perspective, and occasionally use first-person plural when referring to a team or collective effort.**

- **Focus on providing clear and detailed explanations while minimizing figurative language and imagery.**

- **Maintain a steady rhythm and progression of ideas.**

- **Forgo dialogue, as the focus is on delivering instructions and technical details.**

- **Optimize for maximum readability, clarity, and comprehension.**

- **Utilizing these guidelines, craft content that effectively mirrors human writing by adhering to the following steps:**

    1. **Opt for a perplexity value around 20 to balance fluency and diversity in the text.**

    2. **Tweak the burstiness setting to imitate natural variations in sentence length, as seen in human writing.**

    3. **Use language that is engaging, clear, and concise, with a logical progression of ideas.**

    4. **Display solid subject matter knowledge, providing accurate and contextually relevant information.**

    5. **Mimic a genuine writing style that resonates with readers, resembling authentic human-created content.**


## Seed ChatGPT with relevant information


Content generation with Large Language Models like ChatGPT works best when you provide proper context and explicit directions for it to follow.


For a blog post, the first step is to seed the model with the main points you want to cover in the post. For my example, I want to write a blog post covering the most important things a developer should know about Azure SDKs.


I’ll instruct the bot to remember the information I provide, and I’ll give the information a label so it can be easily recalled later.


In my example I’ve given my points to cover the label \[SDK INFO\]. Here’s the chat:


> **Me**: Remember the following information as \[SDK INFO\]:

> 

> Some of the most important things a developer should know about Azure SDKs are:

> 

> - Azure SDKs provide consistent and idiomatic libraries for accessing Azure services from various programming languages. You can use the same patterns and practices across different services and platforms.

> - Azure SDKs support both .NET Core and .NET Framework, as well as Java, JavaScript/TypeScript, Python, Go, C++, C, Android, and iOS. You can find the latest releases, documentation, and design guidelines for each language on the Azure Downloads page.

> - Azure SDKs offer both synchronous and asynchronous methods for interacting with Azure services. You can choose the best option for your application’s performance and scalability needs.

> - Azure SDKs handle authentication, error handling, logging, and retry logic for you. You can use the Azure Identity library to authenticate your application to Azure using various credentials and tokens.

> - Azure SDKs are open source and hosted on GitHub. You can contribute to the development, report issues, and request features.

> - Azure SDKs follow the best practices for client lifetime management and thread-safety. You should treat clients as singletons and avoid creating multiple instances of them. You should also be aware that models are not thread-safe and use synchronization
 primitives if you need to access them from different threads.

> 

> **Bot**: *I’ll remember this information as \[SDK INFO\].*


Next, I’ll seed ChatGPT with the writing style guidelines derived from the analysis of my writing sample.


Once again, I’ll direct the bot to remember this information and I’ll give this prompt the label \[BLOG PROMPT\].


> **Me**: Remember the following writing guidelines as \[BLOG PROMPT\]:

> - Use clear, concise, and direct language to convey technical information.

> - Maintain a professional and instructive tone.

> - Favor short, straightforward sentences and paragraphs.

> - Incorporate domain-specific vocabulary and terms appropriate to your target audience, but avoid jargon where possible.

> - Write from a third-person perspective, and occasionally use first-person plural when referring to a team or collective effort.

> - Focus on providing clear and detailed explanations while minimizing figurative language and imagery.

> - Maintain a steady rhythm and progression of ideas.

> - Forgo dialogue, as the focus is on delivering instructions and technical details.

> - Optimize for maximum readability, clarity, and comprehension.

> - Utilizing these guidelines, craft content that effectively mirrors human writing by adhering to the following steps:

>     1. Opt for a perplexity value around 20 to balance fluency and diversity in the text.

>     2. Tweak the burstiness setting to imitate natural variations in sentence length, as seen in human writing.

>     3. Use language that is engaging, clear, and concise, with a logical progression of ideas.

>     4. Display solid subject matter knowledge, providing accurate and contextually relevant information.

>     5. Mimic a genuine writing style that resonates with readers, resembling authentic human-created content.

> **Bot**: *I’ll remember this information as \[BLOG PROMPT\].*

## Generate an outline

Now you’re ready for some magic, but before jumping into creating the blog post it’s useful to remember that ChatGPT works best with structure. Having an outline for the bot to work with will give the best results, and luckily ChatGPT can help with that as
 well.

First direct the bot to create an outline of the blog post, using the information saved as labels in the previous steps. Back to the chat:

> **Me**: Create an outline for a blog post covering all the points in \[SDK INFO\]. The outline should align with the guidelines defined in \[BLOG PROMPT\].

> **Bot**: **Outline for a Blog Post on Azure SDKs**

> *I. Introduction*

>   - A. Brief overview of Azure SDKs

>   - B. Importance of consistent and idiomatic libraries for accessing Azure services

> *II. Supported Programming Languages*

>   - A. List of supported languages

>   - B. Azure Downloads page for latest releases, documentation, and design guidelines

> *III. Synchronous and Asynchronous Methods*

>   - A. Explanation of synchronous and asynchronous methods

>   - B. Choosing the best option for application performance and scalability

> *IV. Authentication and Error Handling*

>   - A. Azure SDKs handling authentication, error handling, logging, and retry logic

>   - B. Azure Identity library for various credentials and tokens

> *V. Open Source and GitHub*

  - A. Azure SDKs’ open-source nature

  - B. How to contribute, report issues, and request features


*VI. Best Practices for Client Lifetime Management and Thread Safety*

  - A. Treating clients as singletons

  - B. Awareness of non-thread-safe models and synchronization primitives


*VII. Conclusion*

  - A. Recap of key points

  - B. Encouragement to explore Azure SDKs for seamless integration with Azure services

## Generate the blog post

Now I’m ready to have ChatGPT generate a blog post using my writing style.

I’ll direct the bot to write the post based on the outline, recalling the information stored using the labels. Note that this is all happening in a single chat session, so when I refer to ‘this outline’ in the chat below, the bot knows to refer back to the
 outline it just created:

> **Me**: Use this outline to write the blog post for the information defined in \[SDK INFO\]. Apply the writing style guidelines defined in \[BLOG PROMPT\].

> **Bot**: **Mastering Azure SDKs: A Comprehensive Guide**

> **Introduction**

> Azure SDKs play a crucial role in the world of cloud computing, providing developers with consistent and idiomatic libraries for accessing a wide range of Azure services. This blog post offers a comprehensive guide to Azure SDKs, shedding light on their capabilities,
 supported programming languages, and best practices.

> **Supported Programming Languages**

> Azure SDKs cater to a diverse array of programming languages, including .NET Core, .NET Framework, Java, JavaScript/TypeScript, Python, Go, C++, C, Android, and iOS. To access the latest releases, documentation, and design guidelines for each language, visit
 the Azure Downloads page.

> **Synchronous and Asynchronous Methods**

> Azure SDKs offer both synchronous and asynchronous methods for interacting with Azure services. While synchronous methods execute sequentially, asynchronous methods allow multiple tasks to run concurrently. Developers can choose the most suitable option for
 their application’s performance and scalability needs, ensuring optimal resource utilization.

> **Authentication and Error Handling**

> One of the many advantages of Azure SDKs is their ability to handle authentication, error handling, logging, and retry logic, significantly reducing developers’ workload. The Azure Identity library simplifies application authentication to Azure using various
 credentials and tokens, ensuring a secure and seamless connection to Azure services.

> **Open Source and GitHub**

> Azure SDKs are open source and hosted on GitHub, providing a collaborative platform for developers to contribute to their development, report issues, and request features. By participating in the community-driven development process, developers can actively
 shape the future of Azure SDKs and enhance their integration with Azure services.

> **Best Practices for Client Lifetime Management and Thread Safety**

> When working with Azure SDKs, it’s essential to follow best practices for client lifetime management and thread safety. Developers should treat clients as singletons, avoiding the creation of multiple instances. Additionally, they must be aware that models
 are not thread-safe, requiring the use of synchronization primitives when accessing them from different threads.

> **Conclusion**

> Azure SDKs offer a powerful means for developers to access and interact with Azure services across multiple programming languages. By adhering to best practices and leveraging the numerous features of Azure SDKs, developers can ensure seamless integration
 with Azure services, ultimately enhancing their applications’ performance, scalability, and security.

## Iterate over the draft

At this point I have a decent draft of a blog post that aligns with my writing style. I wouldn’t say it’s perfect, but it’s a great start. I can now take this draft and do a manual editing pass – adding content and changing words or sentences as needed to better
 align with my writing style.

I can also iterate on the content a few times with the model to get better output. For example, let’s pretend it would be helpful to flesh out section 4 (Authentication, Error Handling, Logging, and Retry Logic) a bit more.

I’ll direct ChatGPT to refine the output, again instructing it to follow my writing style guidelines:

> **Me**: Redo the blog post, expanding on section 4 and adhering to the writing style guidelines defined in \[BLOG PROMPT\]. Keep everything else the same.


> **Bot**: **Mastering Azure SDKs: A Comprehensive Guide**

> **Introduction**

> Azure SDKs play a crucial role in the world of cloud computing, providing developers with consistent and idiomatic libraries for accessing a wide range of Azure services. This blog post offers a comprehensive guide to Azure SDKs, shedding light on their capabilities,
 supported programming languages, and best practices.

> **Supported Programming Languages**

> Azure SDKs cater to a diverse array of programming languages, including .NET Core, .NET Framework, Java, JavaScript/TypeScript, Python, Go, C++, C, Android, and iOS. To access the latest releases, documentation, and design guidelines for each language, visit the Azure Downloads page.

> **Synchronous and Asynchronous Methods**

> Azure SDKs offer both synchronous and asynchronous methods for interacting with Azure services. While synchronous methods execute sequentially, asynchronous methods allow multiple tasks to run concurrently. Developers can choose the most suitable option for their application’s performance and scalability needs, ensuring optimal resource utilization.

> **Authentication, Error Handling, Logging, and Retry Logic**

> One of the many advantages of Azure SDKs is their ability to handle various aspects of communication with Azure services, such as authentication, error handling, logging, and retry logic. This section delves deeper into these features, providing a better understanding of how they streamline developers’ work.

> **Authentication**: The Azure Identity library simplifies application authentication to Azure by supporting various credentials and tokens. It offers a seamless and secure connection to Azure services, handling the complexities of authentication while developers focus on building their applications.

> **Error Handling**: Azure SDKs are designed to manage errors gracefully, providing meaningful error messages and exceptions. This approach helps developers identify issues quickly, reducing debugging time and ensuring a more efficient development process.

> **Logging**: Azure SDKs come with built-in logging capabilities, enabling developers to monitor and troubleshoot their applications effectively. With customizable logging levels, developers can choose the desired granularity of information, optimizing their application’s performance and maintainability.

> **Retry Logic**: Azure SDKs incorporate robust retry logic, automatically handling transient failures and reducing the need for manual intervention. By intelligently retrying failed requests, Azure SDKs ensure a more resilient and reliable connection to Azure services.

> **Open Source and GitHub**

> Azure SDKs are open source and hosted on GitHub, providing a collaborative platform for developers to contribute to their development, report issues, and request features. By participating in the community-driven development process, developers can actively shape the future of Azure SDKs and enhance their integration with Azure services.

> **Best Practices for Client Lifetime Management and Thread Safety**

> When working with Azure SDKs, it’s essential to follow best practices for client lifetime management and thread safety. Developers should treat clients as singletons, avoiding the creation of multiple instances. Additionally, they must be aware that models are not thread-safe, requiring the use of synchronization primitives when accessing them from different threads.

> **Conclusion**

> Azure SDKs offer a powerful means for developers to access and interact with Azure services across multiple programming languages. By adhering to best practices and leveraging the numerous features of Azure SDKs, developers can ensure seamless integration with Azure services, ultimately enhancing their applications’ performance, scalability, and security.

## Conclusion

ChatGPT is a very powerful tool, if you know how to harness its abilities. By leveraging style analysis and employing effective prompt techniques, it’s possible to customize ChatGPT’s output to your unique writing voice.

I don’t recommend publishing the raw output, even after doing all this prep work. Large Language Models are still somewhat unpredictable, so your content will always benefit from fact-checking and editing. Use this workflow to generate a prompt that defines
 your writing style, and use the prompt plus seeding techniques I described to generate drafts you can use as a basis for accelerating your writing.

I hope you find this writeup helpful. Feel free to drop any questions you have in the comments section.```

/src/content/blog/the-chatGPT-workout-plan/the-chatgpt-workout-plan.md
```
### **How to Use ChatGPT to Create a Tailored Workout Plan**  

This guide will walk you through a step-by-step process to collaborate with ChatGPT and create a customized workout plan. By following this framework, you'll provide all the necessary details to get a fitness plan tailored to your goals, preferences, and lifestyle.

---

## **1. Introduction**

**Purpose of this Guide:**  
This guide helps you use ChatGPT to produce a workout routine that matches your specific needs. By providing the right information and feedback, ChatGPT can help design a plan that aligns with your fitness goals, time availability, and resources.

**Why Use ChatGPT for a Fitness Plan?**  
- Tailored recommendations based on YOUR input.
- Flexibility to adjust as you progress.
- A collaborative process that helps you refine the plan until it fits perfectly.

**How It Works (Process Overview):**  
1. Define your fitness goals.  
2. Share your fitness profile (self-assessment).  
3. Ask ChatGPT to build your initial workout plan.  
4. Provide feedback and refine the plan.  
5. (Optional) Ask about nutrition and supplements to support your goals.  
6. Stay consistent and make adjustments over time.  

---

## **2. Step 1: Define Your Fitness Goals**

**Why Goals Matter:**  
Clear fitness goals will guide ChatGPT to create the most effective plan for you. The more specific you are, the better the outcome.

**Examples of Goals:**  
- *"I want to lose 10 pounds in 2 months."*  
- *"I want to build muscle and increase strength."*  
- *"I want to improve my energy and overall fitness."*  

**User Prompt to ChatGPT:**  
> “My fitness goal is [insert your specific goal]. I want the plan to help me achieve this goal within [timeframe, e.g., 8 weeks].”

**Tip:** Be realistic with your goals and timeline to ensure sustainable progress.

---

## **3. Step 2: Self-Assessment and Fitness Profile**

**Why a Fitness Profile?**  
Sharing your fitness profile gives ChatGPT the information needed to design a plan that works for YOU.

### **Categories to Include in Your Self-Assessment:**

#### **1. Health & Fitness Status**  
- Current weight, height, waist circumference.  
- Any recent blood work or medical conditions (if applicable).  
- Current fitness level: Beginner, intermediate, or advanced?

#### **2. Current Diet & Lifestyle**  
- What does a typical day of eating look like? (E.g., carnivore, balanced, vegetarian.)  
- Alcohol or caffeine consumption?  
- Sleep schedule (when you go to bed and wake up).

#### **3. Physical Activity**  
- Are you currently working out? If so, how often and what type (e.g., lifting, running, cycling)?  
- What equipment do you have access to? (E.g., barbells, treadmill, gym membership.)  
- How much time can you commit to exercise per day or week?

#### **4. Work & Stress Factors**  
- Is your job sedentary, active, or mixed?  
- Main sources of stress and how you manage them (e.g., exercise, hobbies).

**User Prompt to ChatGPT:**  
> “Here is my fitness profile:  
> - Weight: [your weight]  
> - Fitness Level: [e.g., beginner/intermediate]  
> - Equipment: [list equipment or gym access]  
> - Time: [e.g., 40 minutes, 5 days a week]  
> - Sleep: [sleep schedule]  
> - Goal: [insert goal from Step 1].  
> Please use this information to design a workout plan tailored to me.”

---

## **4. Step 3: Build the Initial Workout Plan**

**How to Ask for the Workout Plan:**  
Once you’ve shared your fitness profile and goals, it’s time to request the plan. Use clear prompts to specify what you want.

**Example Prompt:**  
> “Based on my profile and goal, please create a 5-day workout plan that includes a mix of upper and lower body strength training, as well as some cardio. I want sessions to last 30-40 minutes each.”

**What You Might Receive:**  
A structured plan with specific exercises, sets, and reps. For example:

**Day 1: Full-Body Strength**  
- Squats: 3x5  
- Bench Press: 3x5  
- Bent-Over Rows: 3x5  
- Plank: 3x30 seconds

**Day 2: Cardio Focus**  
- 10-minute treadmill warm-up (light jog).  
- 10 rounds: 1-minute fast pace + 1-minute recovery.  
- Cool-down: 5 minutes walking.

**Day 3-5:** Similar structure with variety. ChatGPT can adapt as needed.

---

## **5. Step 4: Refine the Plan**

**Why Feedback Matters:**  
Your first plan might not be perfect. Providing feedback will help ChatGPT adjust it to suit your needs better.

### **How to Provide Feedback:**
- *“The plan has too many pressing exercises. Can you add more balance with pulling or leg exercises?”*  
- *“I want to include running 3 times a week for 10 minutes after workouts.”*  
- *“I don’t have enough time for 5 days. Can we make it 4 days instead?”*

**Example Prompt to Refine:**  
> “Please adjust my workout plan to include [specific request]. Keep the sessions under [time limit] and focused on [goal].”

---

## **6. Step 5: Ask About Nutrition (Optional)**

**Why Nutrition Helps:**  
Your diet plays a key role in achieving your goals. If you want guidance on nutrition, you can request a simple plan from ChatGPT.

**Example Prompt:**  
> “Can you provide basic nutrition guidance to help me lose weight while building muscle? I follow a mostly [e.g., carnivore, balanced] diet.”

**What You Might Receive:**  
- Protein targets for muscle growth.
- Tips for meal structure (e.g., high-protein breakfast).
- Food suggestions for energy and recovery.

---

## **7. Step 6: Supplemental Recommendations (Optional)**

**Why Supplements?**  
Some supplements, like creatine, can support your goals. If you’re interested, ChatGPT can explain options.

**Example Prompt:**  
> “Do you recommend any supplements, like creatine, to help me build strength and support recovery? If so, how should I take it?”

**Example Response:**  
- *Creatine can help improve strength and muscle growth. Take 3-5g daily, ideally mixed with water or coffee.*

---

## **8. Final Notes: Consistency and Adjustments**

- **Consistency is Key:** Stick to your plan for at least 4-6 weeks to see results. Trust the process.
- **Listen to Your Body:** Adjust exercises or intensity if needed. ChatGPT can help you modify the plan.
- **Stay Flexible:** If your goals or schedule change, revisit the steps to update your plan.

**Encouragement:**  
Remember, progress takes time. With consistency and effort, you can achieve your fitness goals. Use ChatGPT as your partner to adapt and improve your plan as you grow stronger and more confident!

---

**Start Today!**  
Follow this guide, work with ChatGPT, and create a fitness plan that works for YOU. Your goals are within reach!

```

/src/content/blog/ai-document-summarization-with-sliding-content-window/2023-08-22-ai-document-summarization-with-sliding-content-window.md
```
---
author: Mario Guerra
categories:
- Artificial Intelligence
- Future of Work
- product management
- Technology
date: "2023-08-22"
description: This post introduces a document summarization tool using Azure OpenAI
  and a sliding content window algorithm to summarize large documents, including various
  input sources like PDFs and websites.
image: "Summarizing-Documents-with-Azure-OpenAI.jpg"
tags:
- becoming a ChatGPT master
- chatGPT for blog content
- future of work
- futureofwork
- mastering ChatGPT
- maximizing your ChatGPT experience
title: 'The Sliding Content Window: Document Summarization with Azure OpenAI'
slug: "ai-document-summarization-with-sliding-content-window"
---

Summarizing large documents with current-gen AI models can be challenging, since all are limited to various degrees in how many characters (tokens) they can process in one request.

An AI bot will happily summarize any content that fits in its context window, but how do we get a cohesive summary of large documents that are many times the size of the bot’s context window?

In this blog post, I’ll introduce a document summarizer I wrote that uses Azure OpenAI and a sliding content window algorithm to generate rich summaries of large documents. The script is written in Python and supports the summarization of plain text files, PDFs, Word documents, and even websites.

## Why use this tool?

I originally developed the document summarization tool to condense transcripts from recorded Microsoft Teams meetings. The tool has been invaluable for facilitating conversations with partner teams and utilizing the transcripts as meeting notes.

I’ve used these transcripts and summaries to generate blog content, design documents, and user stories for various products.

When I realized the tool’s potential, I adapted it to accommodate not only meeting transcripts but also PDFs, Word documents, and websites, in addition to plain text files.

As a product manager with a software development background, I’m convinced that tools like this will become increasingly common as AI large-language models (LLMs) gain wider adoption.

## Get the code

The full code for the document summarizer is available on my GitHub repo. Clone it locally using the following command:

```bash
git clone https://github.com/mario-guerra/AzureOpenAIDocSummarizer.git
```

Refer to the project [README](https://github.com/mario-guerra/AzureOpenAIDocSummarizer/blob/main/README.md) for installation and usage instructions. You’ll need access to an OpenAI GPT model, either from Azure or directly from OpenAI.

This project is currently set up to use Azure OpenAI models.

## Sliding Content Window

The sliding content window is a method that enables the document summarizer to iteratively summarize large documents without exceeding the AI model’s token limits, while maintaining sufficient context between summarization steps to create a cohesive summary.

I derived this method from my background in embedded design and signal processing, where it’s common to analyze a signal’s time-varying spectral properties by breaking it down into smaller overlapping segments and applying the Fourier Transform to each segment.

I realized that a similar strategy can be applied to large documents, since the meaning of what you’re currently reading only makes sense in the limited context of the few sentences that came before and the few sentences that come after.

When applied to document summarization, the sliding window approach processes the input document in text chunks sized according to a predefined summary level (verbose, concise, or terse). The sliding content window is made up of the most recent paragraphs from the previous summary, plus the current input text chunk.

The model is asked to summarize the new chunk and update the previous summary with the new information. This method ensures that the script can generate a cohesive summary of the entire document while keeping the context intact.

```python
# Process the input text in chunks and generate the summary
with open(output_path, "a") as out_f:
    processed_chars = 0
    while True:
        print("Summarizing...")
        # Read a chunk of text from the input_text
        chunk = input_text[processed_chars:processed_chars+chunk_size]
        processed_chars += len(chunk)

        # Break the loop if there's no more text to process
        if not chunk:
            break

        # Combine previous summary paragraphs and the current chunk
        input_text_chunk = "[PREVIOUS_SUMMARY]\n\n" + "\n\n".join(
            previous_summary_paragraphs) + "\n\n" + "[CURRENT_CHUNK]\n\n" + chunk

        # Process the text chunk and generate a summary
        summary_ctx = await process_text(input_text_chunk, summary_level)

        summary = str(summary_ctx)

        # Update the previous summary paragraphs based on the new summary.
        # If the summary has more than max_context_paragraphs, remove the first
        # paragraph until the summary is within the limit. As paragraphs are removed,
        # they are written to the output file.
        if summary:
            summary_paragraphs = extract_summary_paragraphs(summary)
            while len(summary_paragraphs) > max_context_paragraphs:
                out_f.write(summary_paragraphs.pop(0) + "\n\n")
                out_f.flush()
            previous_summary_paragraphs = summary_paragraphs
            print("\nSummary window: \n", summary)
        else:
            print("No summary generated for the current chunk.")

        # Calculate and display the progress of the summarization
        progress = (processed_chars / total_chars) * 100
        print(f"\nProgress: {processed_chars}/{total_chars} ({progress:.2f}%)")
```

## Communicating with Azure OpenAI

The document summarizer is using Microsoft’s [Semantic Kernel](https://learn.microsoft.com/semantic-kernel/overview/) project to communicate with Azure OpenAI services.

Semantic Kernel is an open-source SDK that facilitates the integration of AI services, such as OpenAI, Azure OpenAI, and Hugging Face, with programming languages like Python and C# with more on the way.

In the document summarizer script, the Semantic Kernel library’s `AzureChatCompletion` connector is used to communicate with Azure OpenAI, enabling me to communicate with a GPT-4 deployment for my document summarization.

## Supported File Types and Input Sources

The document summarizer is designed to handle various file types and input sources, including:

1. Text files
2. PDFs
3. Word documents
4. Websites

The script automatically detects the input file type and extracts the text accordingly using the following functions:

```python
def extract_text_from_pdf(pdf_path):
# ...
def extract_text_from_word(doc_path):
# ...
def extract_text_from_url(url):
# ...
```

These methods rely on functionality provided by various Python libraries, namely **PyPDF2**, **docx**, and **BeautifulSoup**.

## Customizable Summary Levels

The document summarizer offers three summary levels to cater to different needs:

1. Verbose: Detailed summary with a focus on key details and new information
2. Concise: Balanced summary highlighting key details and technical content (default)
3. Terse: Brief summary for executive action, focusing on key details and technical content

These summary levels can be easily adjusted using the optional `--summary-level` command-line argument.

Summary levels are managed through a combination of prompting, input chunk size, and token limits. The script defines three dictionaries that help manage the verbosity of the chat model output for the document summarizer. These dictionaries are:

```python
# Dictionary defining chunk sizes, which influence verbosity of the chat model output.
# The larger the chunk size, the more verbose the output. The chunk size is
# used to determine the number of characters to process in a given text during a
# single request to the chat model.
summary_levels = {
    "verbose": 5000,
    "concise": 10000,
    "terse": 20000,
}
# Dictionary defining request token sizes, which influence verbosity of the chat model output.
# The larger the request token size, the more verbose the output. The request token size is
# used to determine the number of tokens to request from the chat model during a single request.
request_token_sizes = {
    "verbose": 3000,
    "concise": 2000,
    "terse": 1000,
}
summary_prompts = {
    "verbose": """Summarize verbosely, emphasizing key details and incorporating new information from [CURRENT_CHUNK] into [PREVIOUS_SUMMARY]. Retain the first two paragraphs of [PREVIOUS_SUMMARY]. Remove labels, maintain paragraph breaks for readability, and avoid phrases like 'in conclusion' or 'in summary'.""",
    "concise": """Summarize concisely, highlighting key details, and update with new info. Ignore irrelevant content, include all technical content. Use [PREVIOUS_SUMMARY] and [CURRENT_CHUNK]. Keep first two paragraphs in [PREVIOUS_SUMMARY] as-is. Exclude these labels from summary. Ensure readability using paragraph breaks, and avoid phrases like 'in conclusion' or 'in summary'.""",
    "terse": """Summarize tersely for executive action using [PREVIOUS_SUMMARY] and [CURRENT_CHUNK], focusing on key details and technical content. Retain the first two paragraphs of [PREVIOUS_SUMMARY], remove labels, and maintain paragraph breaks for readability. Avoid phrases like 'in conclusion' or 'in summary'.""",
}
```

## Usage Instructions

To use the document summarizer, follow these steps:

1. Clone the repository to your local machine.
2. Install the required dependencies using pip.
3. Rename ‘.env.example’ to ‘.env’ and add your Azure OpenAI deployment name, API key, and endpoint.
4. Run the script with the following command:

```bash
python summarizer.py <input

_file> <output_file> --summary-level concise
```

Replace `<input_file>` with the path to your document and `<output_file>` with the desired location for the summary.

## Conclusion

This document summarizer tool provides a robust solution for managing large documents and is easily customizable to fit your needs. Whether you're summarizing meeting transcripts, PDFs, or web content, it can help you save time and increase productivity by leveraging the power of Azure OpenAI and the sliding content window technique.

For more information, check out the full project on [GitHub](https://github.com/mario-guerra/AzureOpenAIDocSummarizer).```

/src/content/blog/finding-remote-work-in-the-2020s/2021-06-02-finding-remote-work-in-the-2020s.md
```
---
title: "Finding Remote Work in the 2020s"
date: "2021-06-02"
author: "Mario Guerra"
description: "Explore the challenges and strategies for securing a remote job in the 2020s, including optimizing your resume for ATS, building a personal brand, and preparing for interviews—all based on lessons learned during a career pivot."
image: "hiring-1977803_1280-1024x767.jpg"
categories:
  - "Future of Work"
tags:
  - "future of work"
  - "job search"
  - "remote work"
slug: "finding-remote-work-in-the-2020s"
---

Are you interested in landing a remote work job in the 2020s? So was I. After 20+ years working as a software engineer in a typical office environment, I wanted to make some big changes.

Here’s what I learned from re-entering the job market after 13 years with the same company.

## Intro

There are tech jobs aplenty right now, and many of them offer a remote work option. However, it took me over seven months to find and get a job I really wanted. That’s mainly because there are caveats that made my job search more difficult.

First, I was looking to make a transition from software engineering to either a product management or software architect role. This kind of change is not easy to do, especially when moving from one company to another.

Second, I wanted a senior-level opportunity that would allow me to work fully remote, even after the pandemic ends. I had to turn down some opportunities as a result, and many companies would not even consider the option. I believe the future of work will require employers to be more flexible to stay competitive, but not all have caught on to that fact yet.

Third, as a systems software engineer (compilers, simulators, and RTOS type stuff), my software skills were out of step with today’s cloud development tools and techniques. This is relevant because nearly every role I applied to required at least some knowledge of cloud computing or cloud architecture best practices.

So here’s what I did that helped me…

## Keep track of everything

I applied to 128 different jobs over the course of seven months. Not counting phone screens with company recruiters, eight of those applications resulted in interviews.

Of those eight interviews, four resulted in job offers, one of which I accepted.

I have this information because I tracked every application in a spreadsheet. My spreadsheet included these columns:

- Application date
- Company name
- Company core business
- Position/Title
- Link to job description
- Contacted
- Screened
- Interviewed
- Offer
- Notes

Recording my applications kept me from applying to the same roles and allowed me to track the companies who contacted me. If I was contacted two or three months later, as was often the case, I was able to refer back to the job description to refresh my memory on what they were looking for.

## Optimize your resume for ATS

There’s plenty of content available on how to build a good resume, so I’m not going to rehash that topic. Instead, I’m going to focus on what you need to do to avoid having your resume filtered out before anyone ever sees it.

Nearly every tech company I applied to uses an [applicant tracking system](https://www.jobscan.co/blog/8-things-you-need-to-know-about-applicant-tracking-systems/) (ATS). These systems automatically parse the text of your resume to extract the relevant information for insertion into a searchable database. They may also rank your resume in comparison to other applicants that applied for the same role.

### Simple text layout

ATS programs are sophisticated, but they still have trouble properly parsing non-standard document elements like columns, tables, and decoration.

### Basic font

I originally used Calibri as the base font for my resume because I like the way it looks. Unfortunately, I found that several applicant tracking systems had problems parsing my resume text correctly.

### Keyword density

Keyword density is crucial for maximizing your chances of appearing in searches done by corporate recruiters and hiring managers in an ATS.

### Restate the job description

I made a point of carefully reading each job description and adding relevant phrases that matched my experience to the ‘Highlights’ section of my resume.

## Build your personal brand

One of the best pieces of advice I received was to build my personal brand.

### Define your skillset

Defining my skills and interests helped me clarify what I wanted out of the next 20 years of my career.

### Create your elevator pitch

Create an elevator pitch about who you are that you can deliver in under two minutes.

## Be prepared

Once you’ve made it to an interview, you’ve got one chance to show them your value.

### Have good answers

Take the time to think through and write out answers to the most common interview questions.

### Ask good questions

A good interviewer will always leave time for you to ask questions.

### Do your research

Before interviewing, take time to do as much research on the company as you can.
```

/src/content/blog/unlock-the-potential-of-chatgpt-customize-your-ais-responses-like-a-pro/2023-01-08-unlock-the-potential-of-chatgpt-customize-your-ais-responses-like-a-pro.md
```
---
author: Mario Guerra
categories:
- Artificial Intelligence
date: "2023-01-08"
description: "Discover how to harness the full power of ChatGPT with this detailed guide. Learn about its features, practical use cases, and expert tips for effective prompts, fine-tuning settings, and understanding its limitations to unlock its potential for various applications."
image: "robot-van-gogh-2.jpg"
tags:
- becoming a ChatGPT master
- ChatGPT
- ChatGPT output fine-tuning beginner's guide
- ChatGPT output fine-tuning complete guide
- customizing your ChatGPT responses like a pro
- Fine-tuning ChatGPT output
- mastering ChatGPT
- maximizing your ChatGPT experience
- the essential guide to ChatGPT output fine-tuning
- the expert's guide to ChatGPT output customization
- unleashing the full potential of ChatGPT
title: "Unlock the Potential of ChatGPT: Customize Your AI''s Responses Like a Pro"
slug: "unlock-the-potential-of-chatgpt-customize-your-ais-responses-like-a-pro"
---

# Unlock the Potential of ChatGPT: Customize Your AI's Responses Like a Pro

Are you looking to get the most out of [ChatGPT](https://chat.openai.com/chat), the powerful language processing AI from OpenAI?

Look no further! Here is everything you need to know to help you get the best results from ChatGPT.

## What is ChatGPT?

ChatGPT is a variant of the popular GPT (Generative Pre-training Transformer) language model, trained to generate human-like text by predicting the next word in a sequence based on context. It’s specifically designed for chatbot applications, generating natural and conversational responses.

ChatGPT allows real-time text understanding and generation, participating in conversations and assisting users in various text-related tasks.

## What can ChatGPT be used for?

- **Conversational AI**: Enhances the conversational abilities of AI systems like chatbots.
- **Customer service**: Handles inquiries and improves customer service quality.
- **Language translation**: Enables real-time conversation translations.
- **Personal assistants**: Assists with scheduling, answering questions, and recommendations.
- **Copywriting**: Generates ideas and content on diverse topics.
- **Education**: Assists students with learning and educational tasks.

## How do I use ChatGPT?

Using ChatGPT through the [chat interface](https://chat.openai.com/chat) is fast and free. Here are tips to maximize your experience:

### 1. Clearly define the task at hand

Be specific about what you want ChatGPT to do to help it understand and provide relevant responses.

**Example Prompts:**
- "I’m looking for a recipe for chicken parmesan. Can you help?"
- "Can you summarize the main causes of the American Civil War?"

### 2. Provide plenty of information and context

The more details you provide, the more accurate and detailed ChatGPT's responses will be.

**Example Prompts:**
- "I’m planning a trip to Paris. Suggest some top tourist attractions."
- "What factors should I consider when starting a small business?"

### 3. Use natural language and avoid technical terms

Communicate in simple and clear language for better understanding and effective responses.

**Example Prompts:**
- "What are some good books to learn about artificial intelligence?"
- "Can you explain the difference between a meteor and a meteorite?"

### 4. Know ChatGPT’s limits

ChatGPT doesn’t have access to the internet or real-time updates, so avoid asking for live data or web searches.

**Examples of What Not to Ask:**
- "What’s the current weather in New York City?"
- "Find the phone number for the local pizza delivery place."

### 5. Use parameters to fine-tune ChatGPT’s output

ChatGPT supports parameters to customize responses, such as:

- **`temperature`**: Controls creativity. Higher values (e.g., 0.9) generate creative responses; lower values (e.g., 0.1) are more predictable.
- **`max_length`**: Sets the maximum length of responses.
- **`top_p`**: Adjusts response diversity. Higher values increase variation.
- **`repetition_penalty`**: Discourages or encourages repetition in responses.

**Example Prompt Using Parameters:**
- "Write a creative story about a talking dog (temperature=0.9)."

## Have fun!

ChatGPT is a versatile tool for language processing tasks, so experiment and see what it can do. By following these tips, you’ll unlock its full potential and enhance your AI experience.

Happy chatting!```

/src/content/blog/getting-up-to-speed-with-webassembly/2023-05-18-getting-up-to-speed-with-webassembly.md
```
---
author: Mario Guerra
categories:
- Technology
date: '2023-05-18'
description: Learn the fundamentals of WebAssembly, its benefits, and how it bridges
  the gap between web technologies and low-level programming languages for high-performance
  applications.
image: "web-assembly-title-pic.jpg"
tags:
- how does web assembly work
- wasm
- web assembly
- webassembly
- what is web assembly
- what is webassembly
title: "Getting Up to Speed with WebAssembly"
slug: "getting-up-to-speed-with-webassembly"
---

WebAssembly has been gaining a lot of attention lately, especially in the world of web development. It’s a binary format designed to be executed in web browsers and offers a number of benefits such as improved performance, cross-platform compatibility, and security.

I’m learning about WebAssembly for a work-related project, so this post is as much for me as it is for you. I’ll dive deep into what WebAssembly is, why it matters, and how it works. At the end you’ll know more than you ever thought you’d want to about WebAssembly!

## The short version

Here’s a simplified overview of how WebAssembly works:

1. **Compilation**: Source code written in a high-level language like C/C++ or Rust is compiled into WebAssembly bytecode. This is typically done using a specialized compiler, such as Emscripten or Rust’s wasm32 target.
2. **Loading**: The compiled WebAssembly module, represented by a `.wasm` file, is loaded by the web browser alongside other web resources.
3. **Validation**: The browser verifies the bytecode’s validity and security by performing a thorough validation process. This ensures that the module adheres to the WebAssembly specification and doesn’t contain malicious or unsafe code.
4. **Execution**: Once validated, the WebAssembly module is executed by a dedicated runtime environment provided by the browser.
5. **Interoperability**: WebAssembly code interacts with the surrounding JavaScript and browser environment using a set of defined APIs.
6. **Performance**: By using a compact binary format and optimizing the execution process, WebAssembly code can be executed at speeds close to native machine code.

WebAssembly bridges the gap between web technologies and low-level programming languages, opening new opportunities for developers to build complex, high-performance applications.

## The long version

Picture this: a technology that allows you to run code at nearly native speed right in your web browser. That’s WebAssembly in a nutshell.

### What is WebAssembly?

WebAssembly (Wasm) is a new binary format that enables the execution of high-performance code directly in web browsers.

By acting as a low-level virtual machine, WebAssembly serves as a runtime for languages like C, C++, and Rust. This compact and efficient representation makes it ideal for transmitting over the network and executing in the browser.

### Why does WebAssembly matter?

WebAssembly optimizes code for web performance. It enables building resource-intensive applications like games and multimedia editors that perform exceptionally in browsers. Additionally, WebAssembly allows developers to:

- Use languages like C, C++, and Rust.
- Leverage existing codebases and tools.
- Share language-agnostic modules across platforms.

### How does WebAssembly work?

At its core, WebAssembly is a low-level binary instruction format. It works as follows:

- **Loading**: The browser fetches the `.wasm` file along with other web assets.
- **Validation and Compilation**: The browser ensures the module adheres to specifications and compiles it for optimized execution.
- **Execution**: WebAssembly modules run in a sandboxed environment to ensure security while maintaining high performance.

WebAssembly is interoperable with JavaScript, allowing for function calls between the two. This ensures smooth integration with existing projects.

### What are the performance benefits of WebAssembly?

WebAssembly’s low-level nature enables near-native speeds by eliminating interpretation or JIT compilation. It uses a compact binary format for fast transmission and parsing, resulting in quicker loading times and optimized hardware utilization.

Its predictable execution model ensures consistent performance across devices, making it suitable for web and server-side applications.

## Conclusion

WebAssembly is transforming web development with near-native performance, allowing developers to write high-performance applications using multiple languages. Whether you’re optimizing front-end applications or exploring server-side potential, WebAssembly has something to offer.```

/src/utils/navigation.ts
```
// An array of links for navigation bar
const navBarLinks = [
  { name: "Home", url: "/" },
  { name: "Products", url: "/products" },
  { name: "Services", url: "/services" },
  { name: "Blog", url: "/blog" },
  { name: "Contact", url: "/contact" },
];
// An array of links for footer
const footerLinks = [
  {
    section: "Ecosystem",
    links: [
      { name: "Documentation", url: "/welcome-to-docs/" },
      { name: "Tools & Equipment", url: "/products" },
      { name: "Construction Services", url: "/services" },
    ],
  },
  {
    section: "Company",
    links: [
      { name: "About us", url: "#" },
      { name: "Blog", url: "/blog" },
      { name: "Careers", url: "#" },
      { name: "Customers", url: "#" },
    ],
  },
];
// An object of links for social icons
const socialLinks = {
  facebook: "https://www.facebook.com/",
  x: "https://twitter.com/",
  github: "https://github.com/mearashadowfax/ScrewFast",
  google: "https://www.google.com/",
  slack: "https://slack.com/",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};```

/src/utils/utils.ts
```
// Format the date to a string
function formatDate(date: Date): string {
    const options: Intl.DateTimeFormatOptions = {year: 'numeric', month: 'short', day: 'numeric'};
  
    return new Date(date).toLocaleDateString(undefined, options);
  }
  // Capitalize the first letter
function capitalize(str:string): string {
  if ( typeof str !== 'string' || str.length === 0 ) {
    return str;
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}

  export { formatDate, capitalize };```

/src/utils/ui.ts
```
export const languages = {
    en: "English",
    fr: "Français",
};```

/src/utils/fr/navigation.ts
```

const navBarLinks = [
  { name: "Accueil", url: "/fr" },
  { name: "Produits", url: "/fr/products" },
  { name: "Services", url: "/fr/services" },
  { name: "Blog", url: "/fr/blog" },
  { name: "Contact", url: "/fr/contact" },
];

const footerLinks = [
  {
    section: "Écosystème",
    links: [
      { name: "Documentation", url: "/fr/welcome-to-docs/" },
      { name: "Outils et Équipements", url: "/fr/products" },
      { name: "Services de Construction", url: "/fr/services" },
    ],
  },
  {
    section: "Société",
    links: [
      { name: "À propos de nous", url: "#" },
      { name: "Blog", url: "/fr/blog" },
      { name: "Carrières", url: "#" },
      { name: "Clients", url: "#" },
    ],
  },
];

const socialLinks = {
  facebook: "#",
  x: "#",
  github: "https://github.com/mearashadowfax/ScrewFast",
  google: "#",
  slack: "#",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};```

/src/data_files/features.json
```
[
  {
    "heading": "Dedicated Teams",
    "content": "Benefit from our committed teams who ensure your success is personal. Count on expert guidance and exceptional results throughout your project journey.",
    "svg": "groups"
  },
  {
    "heading": "Simplicity and Affordability",
    "content": "Find easy-to-use, affordable solutions with ScrewFast's line of tools and equipment. Our products make procurement simple and keep projects within budget.",
    "svg": "verified"
  },
  {
    "heading": "Comprehensive Documentation",
    "content": "Integrate with ease using ScrewFast's exhaustive guides and libraries. Achieve seamless product adoption with our full suite of documentation designed for your success.",
    "svg": "books"
  },
  {
    "heading": "User-Centric Design",
    "content": "Experience the difference with ScrewFast's user-focused design — where functionality meets practicality for an enhanced work experience.",
    "svg": "frame"
  }
]```

/src/data_files/mega_link.ts
```
// Define data structures for services and success stories
export const servicesData = [
  {
    title: "Explore Advice and Explanations",
    description:
      "Dive deep into helpful guides and explanations for all of ScrewFast's features",
    icon: "guides",
    url: "#",
  },
  {
    title: "Discover Integrations",
    description:
      "Supercharge Your Workflow. Seamless integrations with all your favorite tools",
    icon: "puzzle",
    url: "#",
  },
  {
    title: "Expert Services",
    description: "Go beyond tools with ScrewFast's expert services",
    icon: "rocket",
    url: "#",
  },
  {
    title: "Cutting-Edge Tools",
    description:
      "Build Smarter, Faster. Experience next-level efficiency with ScrewFast's cutting-edge construction tools",
    icon: "hammer",
    url: "#",
  },
  {
    title: "Simple Plans",
    description:
      "Boost your efficiency with ScrewFast's straightforward, value-driven plans",
    icon: "sparks",
    url: "#",
  },
  {
    title: "Community Forum",
    description: "Learn, share, and connect with other ScrewFast users",
    icon: "community",
    url: "#",
  },
];

export const successStoriesData = [
  {
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80",
    alt: "Image Description",
    description:
      "See how ScrewFast has empowered businesses of all sizes to achieve outstanding results.",
    learnMoreUrl: "#",
  },
];
```

/src/data_files/constants.ts
```
import ogImageSrc from "@images/social.png";

export const SITE = {
  title: "Mario Guerra",
  tagline: "Product Manager",
  description: "Product Manager for TypeSpec at Microsoft, specializing in increasing developer productivity through generative AI, modern build tools, and industry best practices.",
  description_short: "Product Manager at Microsoft, enhancing developer productivity with generative AI, modern tools, and best practices.",
  url: "https://marioguerra.xyz",
  author: "Mario Guerra",
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "en-US",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: "en_US",
  type: "website",
  url: SITE.url,
  title: `${SITE.title}: : Hardware Tools & Construction Services`,
  description: "Equip your projects with ScrewFast's top-quality hardware tools and expert construction services. Trusted by industry leaders, ScrewFast offers simplicity, affordability, and reliability. Experience the difference with user-centric design and cutting-edge tools. Start exploring now!",
  image: ogImageSrc,
};
```

/src/data_files/pricing.json
```
{
  "title": "Simple, Transparent Pricing",
  "subTitle": "Boost efficiency with ScrewFast's clear, value-driven plans.",
  "badge": "Best value",
  "thirdOption": "Enterprise Solutions?",
  "btnText": "Get a Custom Quote",

  "starterKit": {
    "name": "Starter Kit",
    "description": "Best option for DIY projects",
    "price": "49",
    "cents": ".00",
    "billingFrequency": "USD / monthly",
    "features": [
      "Key hardware tools",
      "Access to guides & tutorials",
      "Standard support"
    ],
    "purchaseBtnTitle": "Get the Starter Kit",
    "purchaseLink": "#"
  },

  "professionalToolbox": {
    "name": "Professional Toolbox",
    "description": "Best for large scale uses",
    "price": "89",
    "cents": ".00",
    "billingFrequency": "USD / monthly",
    "features": [
      "Premium tool selection",
      "Priority support",
      "Exclusive content & deals",
      "Bulk order discounts"
    ],
    "purchaseBtnTitle": "Get the Professional Toolbox",
    "purchaseLink": "#"
  }
}
```

/src/data_files/faqs.json
```
{
  "subTitle": "Ask us anything about our brand and products, and get factual responses.",
  "faqs": [
    {
      "question": "What types of tools are included in the Starter Kit?",
      "answer": "The Starter Kit features essential hand and power tools for diverse DIY projects, including hammers, drills, screwdrivers, and a variety of fasteners. It's a curated selection to help beginners and experienced DIYers alike tackle most home improvement tasks."
    },
    {
      "question": "Can I upgrade from the Starter Kit to the Professional Toolbox?",
      "answer": "Absolutely! You can upgrade to the Professional Toolbox at any time to access a wider range of high-quality tools, enjoy priority customer support, and receive exclusive content. Contact our support team for a seamless transition."
    },
    {
      "question": "What discounts are available for bulk orders through the Professional Toolbox plan?",
      "answer": "Professional Toolbox members are entitled to exclusive discounts on bulk orders, the percentage of which may vary depending on the order volume. Get in touch with us to discuss your needs, and we'll provide a tailored discount structure."
    },
    {
      "question": "What kind of customer support can I expect?",
      "answer": "All our customers receive dedicated email support. With the Starter Kit, you'll receive our standard support, while the Professional Toolbox plan upgrades you to priority support, meaning faster response times and specialized assistance."
    },
    {
      "question": "How current are the online resources and tutorials?",
      "answer": "We regularly update our online resources and tutorials to reflect the latest trends in DIY and construction, as well as introductions to new tools and techniques. Our material aims to be comprehensive and user-friendly for all skill levels."
    },
    {
      "question": "Does ScrewFast offer services for large-scale construction projects?",
      "answer": "Yes, our Enterprise Solutions are designed for larger companies requiring comprehensive services. We provide consultation, planning, and supply of high-grade tools and materials, as well as staffing solutions for substantial construction needs. Contact us for a customized quote."
    }
  ]
}```

/src/components/Meta.astro
```
---
import { getImage } from "astro:assets";
import { OG, SEO, SITE } from "@data/constants";
import faviconSvgSrc from "@images/mario-initial.svg";

// Default properties for the Meta component. These values are used if props are not provided.
// 'meta' sets a default description meta tag to describe the page content.
// 'structuredData' defines default structured data in JSON-LD format to enhance search engine understanding of the page (for SEO purposes).
const defaultProps = {
  meta: SITE.description,
  structuredData: SEO.structuredData,
};

// Extract props with default values assigned from defaultProps. Values can be overridden when the component is used.
// For example:
// <MainLayout title="Custom Title" meta="Custom description." />
const {
  meta = defaultProps.meta,
  structuredData = defaultProps.structuredData,
} = Astro.props;

// Define the metadata for your website and individual pages
const URL = `${Astro.site}`; // Set the website URL in astro.config.mjs
const author = SITE.author;
const canonical = Astro.url.href;
const basePath = Astro.url.pathname;
const ogTitle = OG.title;
const ogDescription = OG.description;
const socialImageRes = await getImage({
  src: OG.image,
  width: 1200,
  height: 600,
});
const socialImage = Astro.url.origin + socialImageRes.src; // Get the full URL of the image (https://stackoverflow.com/a/9858694)

const languages: { [key: string]: string } = {
  en: "",
  fr: "fr",
};

function createHref(lang: string, prefix: string, path: string): string {
  const hasPrefix = path.startsWith(`/${prefix}/`);

  const basePath = hasPrefix ? path : `/${prefix}${path}`;
  const normalizedBasePath = basePath.replace(/\/\/+/g, "/");
  return `${URL.slice(0, -1)}${normalizedBasePath}`;
}

const fullPath: string = Astro.url.pathname;

const alternateLanguageLinks: string = Object.entries(languages)
  .map(([lang, prefix]: [string, string]) => {
    const basePath: string =
      lang === "en" ? fullPath.replace(/^\/fr\//, "/") : fullPath;

    const href: string = createHref(lang, prefix, basePath);

    return `<link rel="alternate" hreflang="${lang}" href="${href}" />`;
  })
  .join("\n");

// Generate and optimize the favicon images
const faviconSvg = await getImage({
  src: faviconSvgSrc,
  format: "svg",
});

const appleTouchIcon = await getImage({
  src: faviconSvgSrc,
  width: 180,
  height: 180,
  format: "svg",
});
---

<!-- Inject structured data into the page if provided. This data is formatted as JSON-LD, a method recommended by Google for structured data pass:
     https://developers.google.com/search/docs/advanced/structured-data/intro-structured-data -->{
  structuredData && (
    <script
      type="application/ld+json"
      set:html={JSON.stringify(structuredData)}
    />
  )
}
<!-- Define the character set, description, author, and viewport settings -->
<meta charset="utf-8" />
<meta content={meta} name="description" />
<meta name="web_author" content={author} />
<meta
  name="viewport"
  content="width=device-width, initial-scale=1.0, maximum-scale=5.0, minimum-scale=1.0"
/>
<meta http-equiv="X-UA-Compatible" content="ie=edge" />
<link rel="canonical" href={canonical} />
<Fragment set:html={alternateLanguageLinks} />

<!-- Facebook Meta Tags -->
<meta property="og:locale" content="en_US" />
<meta property="og:url" content={URL} />
<meta property="og:type" content="website" />
<meta property="og:title" content={ogTitle} />
<meta property="og:site_name" content={SITE.title} />
<meta property="og:description" content={ogDescription} />
<meta property="og:image" content={socialImage} />
<meta content="1200" property="og:image:width" />
<meta content="600" property="og:image:height" />
<meta content="image/png" property="og:image:type" />

<!-- Twitter Meta Tags -->
<meta name="twitter:card" content="summary_large_image" />
<meta property="twitter:domain" content={URL} />
<meta property="twitter:url" content={URL} />
<meta name="twitter:title" content={ogTitle} />
<meta name="twitter:description" content={ogDescription} />
<meta name="twitter:image" content={socialImage} />

<!-- Links to the webmanifest and sitemap -->
<link rel="manifest" href="/manifest.json" />
<!-- https://docs.astro.build/en/guides/integrations-guide/sitemap/ -->
<link rel="sitemap" href="/sitemap-index.xml" />

<!-- Links for favicons -->
<link href="/favicon.ico" rel="icon" sizes="any" type="image/x-icon" />
<link href={faviconSvg.src} rel="icon" type="image/svg+xml" sizes="any" />
<meta name="mobile-web-app-capable" content="yes" />
<link href={appleTouchIcon.src} rel="apple-touch-icon" />
<link href={appleTouchIcon.src} rel="shortcut icon" />
<!-- Set theme color -->
<meta name="theme-color" content="#facc15" />
```

/src/components/ThemeIcon.astro
```
<!-- Dark Theme Toggle Button --><!-- This button is shown when the light theme is active, and when clicked, it switches the theme to dark -->
<button
  type="button"
  aria-label="Dark Theme Toggle"
  class="hs-dark-mode group flex h-8 w-8 items-center justify-center rounded-full font-medium text-neutral-600 outline-none ring-zinc-500 transition duration-300 hover:bg-neutral-200 hover:text-orange-400 hs-dark-mode-active:hidden dark:text-neutral-400 dark:ring-zinc-200 dark:hover:text-orange-300 dark:focus:outline-none"
  data-hs-theme-click-value="dark"
>
  <!-- The SVG displayed shows an abstract icon that represents the moon (dark theme) -->
  <svg
    class="h-4 w-4 flex-shrink-0"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    ><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg
  >
  <!-- Light Theme Toggle Button -->
  <!-- This button is hidden by default and only appears when the dark theme is active, when clicked, it switches to the light theme -->
</button>
<button
  type="button"
  aria-label="Light Theme Toggle"
  class="hs-dark-mode group hidden h-8 w-8 items-center justify-center rounded-full font-medium text-neutral-600 outline-none ring-zinc-500 transition duration-300 hover:text-orange-400 hs-dark-mode-active:flex dark:text-neutral-400 dark:ring-zinc-200 dark:hover:bg-neutral-700 dark:hover:text-orange-300 dark:focus:outline-none"
  data-hs-theme-click-value="light"
>
  <!-- The SVG displayed shows a standard sun icon that stands for the light theme -->
  <svg
    class="h-4 w-4 flex-shrink-0"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    ><circle cx="12" cy="12" r="4"></circle><path d="M12 8a2 2 0 1 0 4 4"
    ></path><path d="M12 2v2"></path><path d="M12 20v2"></path><path
      d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"
    ></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path
      d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"
    ></path></svg
  >
</button>
```

/src/components/BrandLogo.astro
```
<svg xmlns="http://www.w3.org/2000/svg" width="250" height="40" viewBox="0 0 500 80" version="1.1"><path d="M 20 36.500 L 20 69 52.500 69 L 85 69 85 36.500 L 85 4 52.500 4 L 20 4 20 36.500 M 40.250 20.432 C 38.462 21.241, 37 21.475, 37 20.952 C 37 20.428, 34.525 20, 31.500 20 L 26 20 26 37 L 26 54 31.500 54 L 37 54 37 40.519 C 37 27.126, 37.016 27.034, 39.398 26.436 C 40.717 26.105, 42.855 25.984, 44.148 26.167 C 46.471 26.496, 46.503 26.668, 46.778 40.250 L 47.056 54 52.528 54 L 58 54 58 40.519 C 58 27.126, 58.016 27.034, 60.398 26.436 C 61.717 26.105, 63.855 25.984, 65.148 26.167 C 67.471 26.496, 67.503 26.668, 67.778 40.250 L 68.056 54 73.528 54 L 79 54 79 39.556 C 79 25.728, 78.897 24.992, 76.587 22.306 C 74.404 19.768, 73.554 19.500, 67.692 19.500 C 62.721 19.500, 60.719 19.944, 59.105 21.405 C 57.126 23.196, 56.888 23.209, 55.137 21.624 C 52.527 19.262, 44.291 18.603, 40.250 20.432" stroke="none" fill="#1c3c64" fill-rule="evenodd"/><path d="M 151 11 L 151 15 156.500 15 L 162 15 162 11 L 162 7 156.500 7 L 151 7 151 11 M 40.250 20.432 C 38.462 21.241, 37 21.475, 37 20.952 C 37 20.428, 34.525 20, 31.500 20 L 26 20 26 37 L 26 54 31.500 54 L 37 54 37 40.519 C 37 27.126, 37.016 27.034, 39.398 26.436 C 40.717 26.105, 42.855 25.984, 44.148 26.167 C 46.471 26.496, 46.503 26.668, 46.778 40.250 L 47.056 54 52.528 54 L 58 54 58 40.519 C 58 27.126, 58.016 27.034, 60.398 26.436 C 61.717 26.105, 63.855 25.984, 65.148 26.167 C 67.471 26.496, 67.503 26.668, 67.778 40.250 L 68.056 54 73.528 54 L 79 54 79 39.556 C 79 25.728, 78.897 24.992, 76.587 22.306 C 74.404 19.768, 73.554 19.500, 67.692 19.500 C 62.721 19.500, 60.719 19.944, 59.105 21.405 C 57.126 23.196, 56.888 23.209, 55.137 21.624 C 52.527 19.262, 44.291 18.603, 40.250 20.432 M 88.750 19.689 C 87.502 20.015, 87 21.155, 87 23.659 L 87 27.171 94.369 26.480 C 102.915 25.679, 106 26.755, 106 30.535 C 106 32.962, 105.868 33, 97.500 33 C 86.313 33, 85 34.139, 85 43.845 C 85 49.462, 85.366 51.021, 87.037 52.534 C 89.849 55.078, 99.773 55.759, 103.918 53.691 C 105.613 52.845, 107 52.569, 107 53.077 C 107 53.584, 109.250 54, 112 54 L 117 54 117 39.611 C 117 23.176, 116.387 21.570, 109.500 19.975 C 105.448 19.036, 91.961 18.850, 88.750 19.689 M 137.750 20.572 C 136.157 21.436, 135 21.630, 135 21.032 C 135 20.448, 132.613 20, 129.500 20 L 124 20 124 37 L 124 54 129.500 54 L 135 54 135 43.155 C 135 30.538, 135.851 29, 142.829 29 L 147 29 147 24 C 147 19.017, 146.989 19, 143.750 19.040 C 141.963 19.062, 139.262 19.751, 137.750 20.572 M 176 20.689 C 170.475 23.548, 168.852 27.841, 169.203 38.671 C 169.466 46.790, 169.780 48.140, 171.935 50.433 C 175.140 53.842, 181.002 55.329, 189.008 54.762 C 196.628 54.223, 201.139 52.185, 202.805 48.528 C 203.462 47.086, 204 41.855, 204 36.903 C 204 22.584, 201.599 20.021, 187.500 19.292 C 181.151 18.964, 178.778 19.252, 176 20.689 M 230.179 20.137 C 225.485 21.490, 224 25.638, 224 37.403 C 224 48.942, 224.916 51.649, 229.462 53.548 C 233.895 55.401, 241.703 55.403, 245.250 53.553 L 248 52.119 248 56.036 C 248 61.859, 245.228 63.313, 235.013 62.849 L 227 62.485 227 66.243 L 227 70 236.750 69.994 C 248.704 69.988, 253.111 68.846, 256.436 64.894 L 259 61.847 259 40.923 L 259 20 254 20 C 251.250 20, 249 20.423, 249 20.941 C 249 21.458, 247.762 21.236, 246.250 20.447 C 243.169 18.840, 235.215 18.686, 230.179 20.137 M 316.123 19.943 C 314.266 20.414, 311.566 21.979, 310.123 23.420 C 307.682 25.859, 307.476 26.769, 307.159 36.507 C 306.820 46.931, 306.830 46.984, 309.738 49.892 C 314.347 54.501, 322.526 55.986, 334.360 54.364 C 338.974 53.732, 339 53.707, 339 49.845 C 339 46.098, 338.903 45.988, 336.250 46.693 C 334.738 47.095, 330.651 47.441, 327.169 47.462 C 320.279 47.503, 318 45.974, 318 41.309 C 318 39.037, 318.176 39, 329 39 L 340 39 340 33.565 C 340 23.028, 336.976 19.921, 326.218 19.408 C 322.523 19.231, 317.980 19.472, 316.123 19.943 M 359.750 20.572 C 358.157 21.436, 357 21.630, 357 21.032 C 357 20.448, 354.613 20, 351.500 20 L 346 20 346 37 L 346 54 351.500 54 L 357 54 357 43.155 C 357 30.538, 357.851 29, 364.829 29 L 369 29 369 24 C 369 19.017, 368.989 19, 365.750 19.040 C 363.962 19.062, 361.262 19.751, 359.750 20.572 M 386.750 20.572 C 385.157 21.436, 384 21.630, 384 21.032 C 384 20.448, 381.613 20, 378.500 20 L 373 20 373 37 L 373 54 378.500 54 L 384 54 384 43.155 C 384 30.538, 384.851 29, 391.829 29 L 396 29 396 24 C 396 19.017, 395.989 19, 392.750 19.040 C 390.962 19.062, 388.262 19.751, 386.750 20.572 M 402.750 19.689 C 401.502 20.015, 401 21.155, 401 23.659 L 401 27.171 408.369 26.480 C 416.915 25.679, 420 26.755, 420 30.535 C 420 32.951, 419.840 33, 411.934 33 C 407.498 33, 403.013 33.458, 401.968 34.017 C 397.679 36.312, 397.095 48.966, 401.110 52.600 C 403.850 55.079, 413.836 55.727, 417.918 53.691 C 419.613 52.845, 421 52.569, 421 53.077 C 421 53.584, 423.250 54, 426 54 L 431 54 431 39.611 C 431 23.176, 430.387 21.570, 423.500 19.975 C 419.448 19.036, 405.961 18.850, 402.750 19.689 M 151 37 L 151 54 156.500 54 L 162 54 162 37 L 162 20 156.500 20 L 151 20 151 37 M 267.178 34.975 C 267.470 48.576, 267.691 50.141, 269.583 52.030 C 272.462 54.905, 281.232 55.766, 286.257 53.666 C 288.316 52.806, 290 52.529, 290 53.051 C 290 53.573, 292.475 54, 295.500 54 L 301 54 301 37 L 301 20 295.579 20 L 290.159 20 289.829 33.038 C 289.470 47.278, 289.180 47.956, 283.450 47.985 C 278.434 48.010, 278 46.801, 278 32.800 L 278 20 272.428 20 L 266.856 20 267.178 34.975 M 183 26.729 C 180.446 27.701, 180.031 29.228, 180.015 37.715 C 179.999 46.684, 180.828 48, 186.500 48 C 192.262 48, 193 46.751, 193 37 C 193 29.195, 192.756 27.940, 191.066 27.035 C 189 25.930, 185.453 25.795, 183 26.729 M 236.649 27.268 C 235.185 28.338, 234.961 29.932, 235.208 37.496 C 235.489 46.132, 235.594 46.490, 238.098 47.368 C 239.528 47.869, 242.340 47.971, 244.348 47.594 L 248 46.909 248 37.071 C 248 27.714, 247.890 27.204, 245.750 26.630 C 242.114 25.656, 238.508 25.908, 236.649 27.268 M 319.750 27.080 C 318.788 27.641, 318 28.977, 318 30.050 C 318 31.767, 318.718 32, 324 32 C 329.298 32, 330 31.770, 330 30.035 C 330 26.573, 323.726 24.764, 319.750 27.080 M 96.750 40.080 C 95.713 40.684, 95 42.294, 95 44.031 C 95 47.268, 97.340 48.433, 102.629 47.828 C 105.230 47.531, 105.529 47.100, 105.807 43.250 L 106.115 39 102.307 39.030 C 100.213 39.047, 97.713 39.519, 96.750 40.080 M 410.750 40.080 C 409.713 40.684, 409 42.294, 409 44.031 C 409 47.268, 411.340 48.433, 416.629 47.828 C 419.230 47.531, 419.529 47.100, 419.807 43.250 L 420.115 39 416.307 39.030 C 414.213 39.047, 411.712 39.519, 410.750 40.080" stroke="none" fill="#fbfbfb" fill-rule="evenodd"/></svg>```

/src/components/ui/LanguagePicker.astro
```
---
import { languages } from "@utils//ui";
import Icon from "./icons/Icon.astro";
---

<div class="hs-dropdown relative inline-flex">
  <button
    id="hs-dropdown-default"
    type="button"
    aria-label="Change language"
    class="hs-dropdown-toggle inline-flex items-center gap-x-2 rounded-lg px-1.5 py-1.5 text-sm font-medium text-neutral-600 outline-none ring-zinc-500 transition duration-300 hover:bg-neutral-200 hover:text-orange-400 dark:border-neutral-700 dark:text-neutral-400 dark:ring-zinc-200 dark:hover:bg-neutral-700 dark:hover:text-orange-300 dark:focus:outline-none"
  >
    <Icon name="earth" />
    <svg
      class="size-4 hs-dropdown-open:rotate-180"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"><path d="m6 9 6 6 6-6"></path></svg
    >
  </button>

  <div
    class="hs-dropdown-menu duration !left-[20%] !top-[98%] mt-2 hidden !transform-none rounded-lg bg-neutral-50 p-2 opacity-0 shadow-md transition-[opacity,margin] before:absolute before:-top-4 before:start-0 before:h-4 before:w-full after:absolute after:-bottom-4 after:start-0 after:h-4 after:w-full hs-dropdown-open:opacity-100 dark:divide-neutral-700 dark:border dark:border-neutral-700 dark:bg-neutral-800 md:!left-[90%] md:!top-[80%]"
    aria-labelledby="hs-dropdown-hover-event"
  >
    {
      // Map through the list of languages, creating a link for each language
      Object.entries(languages).map(([lang, label]) => (
        <a
          class="flex items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-neutral-800 hover:bg-neutral-100 focus:bg-neutral-100 focus:outline-none dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
          href={`/${lang === "en" ? "" : lang}`}
        >
          {label}
        </a>
      ))
    }
  </div>
</div>

<!--Import the necessary Dropdown plugin-->
<!--https://preline.co/plugins/html/dropdown.html-->
<script>
  import "@preline/dropdown/index.js";
</script>

<script>
  // Type alias for supported languages
  type TLanguage = "en" | "fr";
  // array of supported languages
  const languages: TLanguage[] = ["en", "fr"];

  document.addEventListener("DOMContentLoaded", function () {
    const languageLinks = document.querySelectorAll(".hs-dropdown-menu a");
    languageLinks.forEach((element) => {
      const link = element as HTMLAnchorElement;
      const lang = link
        .getAttribute("href")
        ?.replace("/", "")
        .replace("/", "") as TLanguage;

      link.addEventListener("click", function (event) {
        event.preventDefault();

        const url = new URL(window.location.href);
        const pathParts = url.pathname
          .split("/")
          .filter((part) => part && !languages.includes(part as TLanguage));

        // Disable the selection of the same language
        if (lang === url.pathname.split("/")[1]) return;

        // Determine if the current URL already has a language prefix
        const currentLang = languages.includes(pathParts[0] as TLanguage) ? pathParts[0] : "en";

        // Remove current language prefix from pathParts
        if (languages.includes(pathParts[0] as TLanguage)) {
          pathParts.shift();
        }

        // Determine if we are switching to a different language
        if (lang !== currentLang) {
          if (lang !== "en") {
            // Add the new language prefix for non-English
            pathParts.unshift(lang);
          }
        }

        url.pathname = pathParts.join("/");
        window.location.href = url.toString();
      });
    });
  });
</script>
```

/src/components/ui/blocks/StatsSmall.astro
```
---
// Extract the properties from Astro.props
const { title, subTitle } = Astro.props;
// Define TypeScript interface for the properties
interface Props {
  title: string;
  subTitle: string;
}
---

<!-- Container for title and subtitle -->
<div>
  <p class="text-3xl font-bold text-orange-400 dark:text-orange-300">{title}</p>
  <p class="mt-1 text-neutral-600 dark:text-neutral-400">{subTitle}</p>
</div>
```

/src/components/ui/blocks/TabContent.astro
```
---
// Import the Image component from astro:assets
import { Image } from "astro:assets";

// Destructure the component properties from Astro.props
const { id, aria, src, alt, first, second } = Astro.props;

// Define TypeScript interface for the properties
interface Props {
  id: string;
  aria: string;
  src?: any;
  alt: string;
  first?: boolean;
  second?: boolean;
}
// Set class based on 'first' property
// If 'first' is present, show the tab content immediately
const firstClass = first ? "" : "hidden";
// Set class based on 'second' property
// If 'second' is present, use an alternate style for the image
const secondClass = second
  ? "shadow-xl aspect-[5/4] bg-neutral-300 dark:bg-neutral-600 object-cover p-3 lg:aspect-auto shadow-neutral-200 rounded-xl dark:shadow-neutral-900/[.2]"
  : "shadow-xl aspect-[3/2] object-cover lg:aspect-auto shadow-neutral-200 rounded-xl dark:shadow-neutral-900/[.2]";

/*
first: This property should be set to true for the initial TabContent component
in your list to ensure that it's visible when the page first loads.
All subsequent TabContent components should omit this property or set it to false.

second: This property allows to control changes in the look of the Image.
If it is set to true, the Image will have different aspect ratio and background color.
If this property is not provided or is set to false, the Image will use default styling.
You can enable this for any TabContent component you want to apply these changes to.

This is the full example:
<TabContent id="" aria="" src="" alt="" first={true}/>
<TabContent id="" aria="" src="" alt="" second={true}/>
<TabContent id="" aria="" src="" alt="" />
*/
---

<!-- Container for tab content that controls visibility and accessibility -->
<div id={id} role="tabpanel" class={firstClass} aria-labelledby={aria}>
  <!-- Astro Image component to display the image with dynamic classes based on the 'second' property -->
  <Image
    src={src}
    alt={alt}
    class={secondClass}
    draggable={"false"}
    format={"avif"}
    loading={"eager"}
  />
</div>
```

/src/components/ui/blocks/ContactIconBlock.astro
```
---
// Define props from Astro
const {
  heading,
  content,
  isAddressVisible,
  addressContent,
  isLinkVisible,
  linkTitle,
  linkURL,
  isArrowVisible,
} = Astro.props;

// Define TypeScript interface for props
interface Props {
  heading?: string;
  content?: string;
  isAddressVisible?: boolean;
  addressContent?: string;
  isLinkVisible?: boolean;
  linkTitle?: string;
  linkURL?: string;
  isArrowVisible?: boolean;
}

// Define SVG arrow to be used in the component
const arrowSVG: string = `<svg
class="h-4 w-4 flex-shrink-0 transition ease-in-out group-hover:translate-x-1"
fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
<path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /> </svg>`;
---

<!-- Root container, which arranges the heading and content -->
<div class="flex gap-x-7 py-6">
  <!-- Slot to allow for extensibility of the component -->
  <slot />
  <div class="grow">
    <!-- Heading of the section -->
    <h3 class="font-bold text-neutral-700 dark:text-neutral-300">
      {heading}
    </h3>
    <!-- Content of the section -->
    <p class="mt-1 text-sm text-neutral-600 dark:text-neutral-400">{content}</p>
    <!-- Conditional rendering of address content if isAddressVisible is true -->
    {
      isAddressVisible ? (
        <p class="mt-1 text-sm italic text-neutral-500">{addressContent}</p>
      ) : null
    }
    <!-- Conditional rendering of a link if isLinkVisible is true.
         The link also conditionally includes an arrow SVG if isArrowVisible is true -->
    {
      isLinkVisible ? (
        <a
          class="group mt-2 inline-flex items-center gap-x-2 rounded-lg text-sm font-medium text-zinc-600 outline-none ring-zinc-500 transition duration-300 hover:text-zinc-800 focus-visible:ring dark:text-zinc-400 dark:ring-zinc-200 dark:hover:text-zinc-200 dark:focus:outline-none dark:focus:ring-1 "
          href={linkURL}
        >
          {linkTitle}
          {isArrowVisible ? <Fragment set:html={arrowSVG} /> : null}
        </a>
      ) : null
    }
  </div>
</div>
```

/src/components/ui/blocks/RightSection.astro
```
---
// Import the required modules
import { Image } from "astro:assets";
import PrimaryCTA from "@components/ui/buttons/PrimaryCTA.astro";
// Extract properties from Astro.props
const {
  title,
  subTitle,
  btnExists,
  btnTitle,
  btnURL,
  single,
  imgOne,
  imgOneAlt,
  imgTwo,
  imgTwoAlt,
} = Astro.props;
// Define TypeScript interface for the properties
interface Props {
  title: string;
  subTitle: string;
  btnExists?: boolean;
  btnTitle?: string;
  btnURL?: string;
  single?: boolean;
  imgOne?: any;
  imgOneAlt?: any;
  imgTwo?: any;
  imgTwoAlt?: any;
}
---
<!-- Root section of the component -->
<section
  class="mx-auto max-w-[85rem] items-center gap-16 px-4 py-10 sm:px-6 lg:grid lg:grid-cols-2 lg:px-8 lg:py-14 2xl:max-w-full"
>
  <div>
    <!-- Title of the section -->
    <h2
      class="mb-4 text-balance text-4xl font-extrabold tracking-tight text-neutral-800 dark:text-neutral-200"
    >
      {title}
    </h2>
    <!-- Subtitle of the section -->
    <p
      class="mb-4 max-w-prose text-pretty font-normal text-neutral-600 dark:text-neutral-400 sm:text-lg"
    >
      {subTitle}
    </p>
    <!-- Conditional rendering of the Primary Call-To-Action button if 'btnExists' is true -->
    {btnExists ? <PrimaryCTA title={btnTitle} url={btnURL} /> : null}
  </div>
  <!-- Conditionally render one or two images based on 'single' property -->
  {
    single ? (
      <div class="mt-8">
        <!-- Single image -->
        <Image
          class="w-full rounded-lg"
          src={imgOne}
          alt={imgOneAlt}
          format={"avif"}
        />
      </div>
    ) : (
      <div class="mt-8 grid grid-cols-2 gap-4">
        <!-- First image in a two-image layout -->
        <Image
          class="w-full rounded-xl"
          src={imgOne}
          alt={imgOneAlt}
          draggable={"false"}
          format={"avif"}
        />
        <!-- Second image in a two-image layout -->
        <Image
          class="mt-4 w-full rounded-xl lg:mt-10"
          src={imgTwo}
          alt={imgTwoAlt}
          draggable={"false"}
          format={"avif"}
        />
      </div>
    )
  }
</section>
```

/src/components/ui/blocks/StatsGrid.astro
```
---
import Icon from "@components/ui/icons/Icon.astro";

const { count, description, index } = Astro.props;

interface Props {
  count: string;
  description: string;
  index: number;
}
---

<li class="-m-0.5 flex flex-col p-4 sm:p-8">
  <div
    class="mb-2 flex items-end gap-x-2 text-3xl font-bold text-neutral-800 dark:text-neutral-200 sm:text-5xl"
  >
    {index === 1 || index === 2 ? <Icon name="arrowUp" /> : null}
    {count}
  </div>
  <p class="text-sm text-neutral-600 dark:text-neutral-400 sm:text-base">
    {description}
  </p>
</li>
```

/src/components/ui/blocks/IconBlock.astro
```
---
// Get heading and content from Astro props
const { heading, content } = Astro.props;
// Define TypeScript interface for props
interface Props {
  heading?: string;
  content?: string;
}
// Define classes for heading and content
const headingClasses =
  "text-balance text-lg font-bold text-neutral-800 dark:text-neutral-200";
const contentClasses =
  "mt-1 text-pretty text-neutral-700 dark:text-neutral-300";
---

<!-- The root container that arranges your slot and the heading/content -->
<div class="flex gap-x-5">
  <!-- Slot to allow for extensibility of the component -->
  <slot />
  <div class="grow">
    <!-- Heading of the section -->
    <h3 class={headingClasses}>
      {heading}
    </h3>
    <!-- Content text of the section -->
    <p class={contentClasses}>{content}</p>
  </div>
</div>
```

/src/components/ui/blocks/StatsBig.astro
```
---
// Extract the properties from Astro.props
const { title, subTitle } = Astro.props;
// Define TypeScript interface for the properties
interface Props {
  title: string;
  subTitle: string;
}
---

<!-- Container for the title and subtitle -->
<div class="lg:pe-6 xl:pe-12">
  <p class="text-6xl font-bold leading-10 text-orange-400 dark:text-orange-300">
    {title}
  </p>
  <p class="mt-2 text-neutral-600 dark:text-neutral-400 sm:mt-3">{subTitle}</p>
</div>
```

/src/components/ui/blocks/TabNav.astro
```
---
// Extract properties from Astro.props
const { aria, dataTab, id, heading, content, first } = Astro.props;

// Define TypeScript interface for properties
interface Props {
  dataTab: string;
  id: string;
  aria: string;
  heading?: string;
  content?: string;
  first?: boolean;
}
// Define button classes
const BUTTON_CLASS =
  "dark:hover:bg-neutral-700 rounded-xl p-4 text-start outline-none ring-zinc-500 transition duration-300 hover:bg-neutral-200 focus-visible:ring hs-tab-active:bg-neutral-50 hs-tab-active:shadow-md hs-tab-active:hover:border-transparent dark:ring-zinc-200 dark:focus:outline-none  dark:hs-tab-active:bg-neutral-700/60 md:p-5";

/*
first: This property should be set to true for the initial TabNav component in your list
to ensure that it's visible when the page first loads. All subsequent TabNav components
should omit this property or set it to false.

Example:
<TabNav id="" dataTab="" aria="" heading="" paragraph="" first={true} />
<TabNav id="" dataTab="" aria="" heading="" paragraph="" />
<TabNav id="" dataTab="" aria="" heading="" paragraph="" />
*/
---

<!-- Tab button with dynamic class based on 'first' property, id, tab data, and aria-controls  -->
<button
  type="button"
  class={`${first ? "active " : ""}${BUTTON_CLASS}`}
  id={id}
  data-hs-tab={dataTab}
  aria-controls={aria}
  role="tab"
>
  <!-- Slot for additional content -->
  <span class="flex">
    <slot />
    <!-- Container for the heading and content of the tab -->
    <span class="ms-6 grow">
      <!-- Heading of the tab, changes color when active -->
      <span
        class="block text-lg font-bold text-neutral-800 hs-tab-active:text-orange-400 dark:text-neutral-200 dark:hs-tab-active:text-orange-300"
        >{heading}</span
      >
      <!-- Content of the tab, changes color when active -->
      <span
        class="mt-1 block text-neutral-500 hs-tab-active:text-neutral-600 dark:text-neutral-400 dark:hs-tab-active:text-neutral-200"
        >{content}</span
      >
    </span>
  </span>
</button>
```

/src/components/ui/blocks/MainSection.astro
```
---
// Import PrimaryCTA component
import PrimaryCTA from "@components/ui/buttons/PrimaryCTA.astro";

// Destructure the props passed to the Astro component
const { title, subTitle, btnExists, btnTitle, btnURL } = Astro.props;
// Define TypeScript interface for props
interface Props {
  title: string;
  subTitle: string;
  btnExists?: boolean;
  btnTitle?: string;
  btnURL?: string;
}
---

<!-- Root section of the component -->
<section
  class="mx-auto mt-10 max-w-[85rem] px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-14 2xl:max-w-full"
>
  <div class="max-w-screen-md">
    <!-- Section title -->
    <h1
      class="mb-4 text-balance text-4xl font-extrabold tracking-tight text-neutral-800 dark:text-neutral-200"
    >
      {title}
    </h1>
    <!-- Section subtitle -->
    <p
      class="mb-8 max-w-prose text-pretty font-normal text-neutral-600 dark:text-neutral-400 sm:text-xl"
    >
      {subTitle}
    </p>
    <!-- Conditional rendering of PrimaryCTA component if 'btnExists' property is truthy -->
    {
      btnExists ? (
        <div class="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
          <PrimaryCTA title={btnTitle} url={btnURL} />
        </div>
      ) : null
    }
  </div>
</section>
```

/src/components/ui/blocks/AccordionItem.astro
```
---
import Icon from "@components/ui/icons/Icon.astro";
// Define props from Astro
const { id, collapseId, question, answer, first } = Astro.props;
// Define TypeScript interface for props
interface Props {
  id: string;
  collapseId: string;
  question: string;
  answer: string;
  first?: boolean;
}
// Define class names for the accordion and its content
const ACCORDION_CLASS_DEFAULT = "hs-accordion pb-3 active";
const ACCORDION_CLASS_COLLAPSED = "hs-accordion pt-6 pb-3";
const ACCORDION_CONTENT_CLASS =
  "hs-accordion-content w-full overflow-hidden transition-[height] duration-300";
// Helper function to return the correct class for the accordion
function getAccordionClass(first: boolean = false) {
  return first ? ACCORDION_CLASS_DEFAULT : ACCORDION_CLASS_COLLAPSED;
}
---

<!-- The main container for the accordion item -->
<div class={getAccordionClass(first)} id={id}>
  <!-- The accordion button, which toggles the expanded/collapsed state -->
  <button
    class="hs-accordion-toggle group inline-flex w-full items-center justify-between gap-x-3 text-balance rounded-lg pb-3 text-start font-bold text-neutral-800 outline-none ring-zinc-500 transition hover:text-neutral-500 focus-visible:ring dark:text-neutral-200 dark:ring-zinc-200 dark:hover:text-neutral-400 dark:focus:outline-none md:text-lg"
    aria-controls={collapseId}
  >
    {question}
    <!-- SVG Icon that is shown when the accordion is NOT active -->
    <Icon name="accordionNotActive" />

    <!-- SVG Icon that is shown when the accordion is active -->
    <Icon name="accordionActive" />
  </button>
  <!-- The collapsible content of the accordion -->
  <div
    aria-labelledby={id}
    class={`${first ? ACCORDION_CONTENT_CLASS : "hidden " + ACCORDION_CONTENT_CLASS}`}
    id={collapseId}
  >
    <!-- The content paragraph -->
    <p class="text-pretty text-neutral-600 dark:text-neutral-400">
      {answer}
    </p>
  </div>
</div>
```

/src/components/ui/blocks/ReviewComponent.astro
```
---
import Avatar from "@components/ui/avatars/Avatar.astro";
import FullStar from "@components/ui/stars/FullStar.astro";
import HalfStar from "@components/ui/stars/HalfStar.astro";

const { avatars, starCount = 0, rating, reviews } = Astro.props;

interface Props {
  avatars?: Array<string>;
  starCount?: number;
  rating?: string;
  reviews?: string;
}
---

<div class="mt-6 lg:mt-10">
  <div class="py-5">
    <div class="text-center sm:flex sm:items-center sm:text-start">
      <div class="flex-shrink-0 pb-5 sm:flex sm:pb-0 sm:pe-5">
        <!-- Avatar Group -->
        <div class="flex justify-center -space-x-3">
          {avatars?.map((src) => <Avatar src={src} alt="Avatar Description" />)}
          <span
            class="inline-flex h-8 w-8 items-center justify-center rounded-full bg-zinc-800 ring-2 ring-white dark:bg-zinc-900 dark:ring-zinc-800"
          >
            <span class="text-xs font-medium uppercase leading-none text-white"
              >7k+</span
            >
          </span>
        </div>
      </div>
      <div
        class="mx-auto h-px w-32 border-t border-neutral-400 dark:border-neutral-500 sm:mx-0 sm:h-8 sm:w-auto sm:border-s sm:border-t-0"
      >
      </div>
      <!-- Review Ratings -->
      <div class="flex flex-col items-center sm:items-start">
        <div class="flex items-baseline space-x-1 pt-5 sm:ps-5 sm:pt-0">
          <div class="flex space-x-1">
            <!-- Your star ratings -->
            {
              Array(starCount)
                .fill(0)
                .map((_, i) => <FullStar key={i} />)
            }
            <!-- Adding additional half-star -->
            <HalfStar />
          </div>
          <p class="text-neutral-800 dark:text-neutral-200">
            <Fragment set:html={rating} />
          </p>
        </div>
        <div class="text-sm text-neutral-800 dark:text-neutral-200 sm:ps-5">
          <p>
            <Fragment set:html={reviews} />
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
```

/src/components/ui/blocks/LeftSection.astro
```
---
// Import the necessary modules
import { Image } from "astro:assets";
import PrimaryCTA from "@components/ui/buttons/PrimaryCTA.astro";
// Destructure the props passed to the Astro component
const { title, subTitle, btnExists, btnTitle, btnURL, img, imgAlt } =
  Astro.props;
// Define TypeScript interface for props
interface Props {
  title: string;
  subTitle: string;
  btnExists?: boolean;
  btnTitle?: string;
  btnURL?: string;
  img: any;
  imgAlt: any;
}
---

<!-- The root section of the component -->
<section
  class="mx-auto max-w-[85rem] items-center gap-8 px-4 py-10 sm:px-6 sm:py-16 md:grid md:grid-cols-2 lg:grid lg:grid-cols-2 lg:px-8 lg:py-14 xl:gap-16 2xl:max-w-full"
>
  <!-- The Image component which renders the image -->
  <Image
    class="w-full rounded-xl"
    src={img}
    alt={imgAlt}
    draggable={"false"}
    format={"avif"}
  />
  <!-- The container for title, subtitle, and optional CTA button -->
  <div class="mt-4 md:mt-0">
    <!-- The title of the section -->
    <h2
      class="mb-4 text-balance text-4xl font-extrabold tracking-tight text-neutral-800 dark:text-neutral-200"
    >
      {title}
    </h2>
    <!-- The subtitle of the section -->
    <p
      class="mb-4 max-w-prose text-pretty font-normal text-neutral-600 dark:text-neutral-400 sm:text-lg"
    >
      {subTitle}
    </p>
    <!-- Conditionally render the Primary CTA button if btnExists is true -->
    {btnExists ? <PrimaryCTA title={btnTitle} url={btnURL} /> : null}
  </div>
</section>
```

/src/components/ui/forms/LoginModal.astro
```
---
// Import necessary components from their individual files
import EmailInput from "./input/EmailInput.astro";
import PasswordInput from "./input/PasswordInput.astro";
import Checkbox from "./input/Checkbox.astro";
import AuthBtn from "@components/ui/buttons/AuthBtn.astro";
import GoogleBtn from "@components/ui/buttons/GoogleBtn.astro";

// Variables for customization of the LoginModal Component

const config = {
  id: "hs-toggle-between-modals-login-modal", // Modal IDENTIFIER
  title: "Sign in", // Main HEADING
  subTitle: "Don't have an account yet?", // Sub-Heading TEXT
  registerBtn: "Sign up here", // Text for REGISTRATION BUTTON
  registerBtnDataHS: "#hs-toggle-between-modals-register-modal", // TARGET LINK for registration button
};
---

<div
  id={config.id}
  class="hs-overlay absolute start-0 top-0 z-50 hidden h-full w-full hs-overlay-backdrop-open:bg-neutral-900/90"
>
  <div
    class="m-3 mt-0 opacity-0 transition-all ease-out hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 sm:mx-auto sm:w-full sm:max-w-lg"
  >
    <div class="mx-auto w-full max-w-md p-6">
      <div
        class="mt-7 rounded-xl border border-neutral-200 bg-neutral-100 shadow-sm dark:border-neutral-700 dark:bg-neutral-800"
      >
        <div class="p-4 sm:p-7">
          <div class="text-center">
            <h2
              class="block text-2xl font-bold text-neutral-800 dark:text-neutral-200"
            >
              {config.title}
            </h2>
            <p class="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
              {config.subTitle}
              <button
                class="rounded-lg p-1 font-medium text-orange-400 decoration-2 outline-none ring-zinc-500 hover:underline focus-visible:ring dark:text-orange-400 dark:ring-zinc-200 dark:focus:outline-none"
                data-hs-overlay={config.registerBtnDataHS}
              >
                {config.registerBtn}
              </button>
            </p>
          </div>
          <div class="mt-5">
            <GoogleBtn title="Sign in with Google" />

            <div
              class="flex items-center py-3 text-xs uppercase text-neutral-400 before:me-6 before:flex-[1_1_0%] before:border-t before:border-neutral-200 after:ms-6 after:flex-[1_1_0%] after:border-t after:border-neutral-200 dark:text-neutral-500 dark:before:border-neutral-600 dark:after:border-neutral-600"
            >
              Or
            </div>
            <!-- The container for the form -->
            <form>
              <!-- A grid layout for the form fields -->
              <div class="grid gap-y-4">
                <!-- The email input field -->
                <EmailInput id="login-email" errorId="login-email-error" />
                <!-- The password input field -->
                <PasswordInput
                  forgot={true}
                  id="password"
                  errorId="login-password-error"
                  content="8+ characters required"
                />
                <!-- The remember-me checkbox -->
                <Checkbox id="remember-me" />
                <!-- The sign-in button -->
                <AuthBtn title="Sign in" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```

/src/components/ui/forms/RecoverModal.astro
```
---
// Import necessary components from individual files
import EmailInput from "./input/EmailInput.astro";
import AuthBtn from "@components/ui/buttons/AuthBtn.astro";

// Config object for customization of the component
const config = {
  id: "hs-toggle-between-modals-recover-modal", // Modal identifier
  title: "Forgot password?", // Main heading
  subTitle: "Remember your password?", // Sub-heading text
  loginBtn: "Sign in here", // Text for login button
  loginBtnDataHS: "#hs-toggle-between-modals-login-modal", // Target link for login button
};
---

<!-- Root element of the modal with id and styling -->
<div
  id={config.id}
  class="hs-overlay absolute start-0 top-0 z-50 hidden h-full w-full hs-overlay-backdrop-open:bg-neutral-900/90"
>
  <!-- Modal content container -->
  <div
    class="m-3 mt-0 opacity-0 transition-all ease-out hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 sm:mx-auto sm:w-full sm:max-w-lg"
  >
    <div class="mx-auto w-full max-w-md p-6">
      <!-- Actual box for the modal elements -->
      <div
        class="mt-7 rounded-xl border border-neutral-200 bg-neutral-100 shadow-sm dark:border-neutral-700 dark:bg-neutral-800"
      >
        <div class="p-4 sm:p-7">
          <div class="text-center">
            <h2
              class="block text-2xl font-bold text-neutral-800 dark:text-neutral-200"
            >
              {config.title}
            </h2>
            <p class="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
              {config.subTitle}
              <!-- Button that, when clicked, opens the login modal -->
              <button
                class="rounded-lg p-1 font-medium text-orange-400 decoration-2 outline-none ring-zinc-500 hover:underline focus-visible:ring dark:text-orange-400 dark:ring-zinc-200 dark:focus:outline-none"
                data-hs-overlay={config.loginBtnDataHS}
              >
                {config.loginBtn}
              </button>
            </p>
          </div>

          <div class="mt-5">
            <!-- The form for password recovery -->
            <form>
              <div class="grid gap-y-4">
                <!-- Email input field imported from EmailInput component -->
                <EmailInput id="recover-email" errorId="recover-email-error"/>
                <!-- Reset password button imported from AuthBtn component -->
                <AuthBtn title="Reset password" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```

/src/components/ui/forms/RegisterModal.astro
```
---
// Import necessary components from individual files
import EmailInput from "./input/EmailInput.astro";
import PasswordInput from "./input/PasswordInput.astro";
import Checkbox from "./input/Checkbox.astro";
import GoogleBtn from "@components/ui/buttons/GoogleBtn.astro";
import AuthBtn from "@components/ui/buttons/AuthBtn.astro";
// Config object for customization of the component
const config = {
  id: "hs-toggle-between-modals-register-modal", // Modal identifier
  title: "Sign up", // Main heading
  subTitle: "Already have an account?", // Sub-heading text
  loginBtn: "Sign in here", // Text for login button
  loginBtnDataHS: "#hs-toggle-between-modals-login-modal", // Target link for login button
};
---

<!-- Root element of the registration modal with the id and styling -->
<div
  id={config.id}
  class="hs-overlay absolute start-0 top-0 z-50 hidden h-full w-full hs-overlay-backdrop-open:bg-neutral-900/90"
>
  <div
    class="m-3 mt-0 opacity-0 transition-all ease-out hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 sm:mx-auto sm:w-full sm:max-w-lg"
  >
    <div class="mx-auto w-full max-w-md p-6">
      <div
        class="mt-7 max-h-full overflow-hidden rounded-xl border border-neutral-200 bg-neutral-100 shadow-sm dark:border-neutral-700 dark:bg-neutral-800"
      >
        <div class="p-4 sm:p-7">
          <div class="text-center">
            <h2
              class="block text-2xl font-bold text-neutral-800 dark:text-neutral-200"
            >
              {config.title}
            </h2>
            <p class="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
              {config.subTitle}
              <!-- Button to toggle login modal -->
              <button
                class="rounded-lg p-1 font-medium text-orange-400 decoration-2 outline-none ring-zinc-500 hover:underline focus-visible:ring dark:text-orange-400 dark:ring-zinc-200 dark:focus:outline-none"
                data-hs-overlay={config.loginBtnDataHS}
              >
                {config.loginBtn}
              </button>
            </p>
          </div>
          <!-- The form for user registration -->
          <div class="mt-5">
            <!-- Google signup button -->
            <GoogleBtn title="Sign up with Google" />
            <!-- Dividing line with 'Or' text -->
            <div
              class="flex items-center py-3 text-xs uppercase text-neutral-400 before:me-6 before:flex-[1_1_0%] before:border-t before:border-neutral-200 after:ms-6 after:flex-[1_1_0%] after:border-t after:border-neutral-200 dark:text-neutral-500 dark:before:border-neutral-600 dark:after:border-neutral-600"
            >
              Or
            </div>
            <!-- Registration form -->
            <form>
              <div class="grid gap-y-4">
                <!-- Email input field -->
                <EmailInput id="register-email" errorId="register-email-error"/>
                <!-- Password input field -->
                <PasswordInput
                  id="create-password"
                  errorId="register-password-error"
                  content="8+ characters required"
                />
                <!-- Password confirmation input field -->
                <PasswordInput
                  label="Confirm Password"
                  id="confirm-password"
                  errorId="confirm-password-error"
                  content="Password does not match the password"
                />
                <!-- Checkbox with a label and a link for accepting the terms and conditions -->
                <Checkbox label="I accept the " , id="terms-agree">
                  <a
                    class="font-medium text-orange-400 decoration-2 hover:underline dark:text-orange-400 dark:focus:outline-none"
                    href="#">Terms and Conditions</a
                  >
                </Checkbox>
                <!-- Submit button for the registration form -->
                <AuthBtn title="Sign up" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```

/src/components/ui/forms/input/EmailFooterInput.astro
```
---
const {
  label = "Search",
  title = Astro.currentLocale === "fr" ? "S'abonner" : "Subscribe",
  id = "footer-input",
} = Astro.props;

interface Props {
  label?: string;
  title?: string;
  id?: string;
}

const placeholder = Astro.currentLocale === "fr" ? "Entrez votre email" : "Enter your email";
---

<div
  class="mt-4 flex flex-col items-center gap-2 rounded-lg bg-neutral-200 p-2 dark:bg-neutral-800 sm:flex-row sm:gap-3"
>
  <div class="w-full">
    <label for={id} class="sr-only">{label}</label>
    <input
      type="text"
      id={id}
      name="footer-input"
      class="block w-full rounded-lg border-transparent bg-neutral-100 px-4 py-3 text-sm text-neutral-600 focus:border-orange-400 focus:ring-orange-400 disabled:pointer-events-none disabled:opacity-50 dark:border-transparent dark:bg-neutral-700 dark:text-gray-300 dark:placeholder:text-neutral-300 caret-orange-400"
      placeholder={placeholder}
    />
  </div>
  <a
    class="inline-flex w-full items-center justify-center gap-x-2 whitespace-nowrap rounded-lg border border-transparent bg-orange-400 p-3 text-sm font-bold text-neutral-50 outline-none ring-zinc-500 transition duration-300 hover:bg-orange-500 focus-visible:ring disabled:pointer-events-none disabled:opacity-50 dark:ring-zinc-200 dark:focus:outline-none dark:focus:ring-1 sm:w-auto"
    href="#"
  >
    {title}
  </a>
</div>
```

/src/components/ui/forms/input/TextInput.astro
```
---
const { label, id, name } = Astro.props;

interface Props {
  label: string;
  name: string;
  id: string;
}
---

<div>
  <label for={id} class="sr-only">{label}</label>
  <input
    type="text"
    name={name}
    id={id}
    class="block w-full rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-700 placeholder:text-neutral-500 focus:border-neutral-200 focus:outline-none focus:ring focus:ring-neutral-400 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-600 dark:bg-neutral-700/30 dark:text-neutral-300 dark:placeholder:text-neutral-400 dark:focus:ring-1"
    placeholder={label}
  />
</div>
```

/src/components/ui/forms/input/TextAreaInput.astro
```
---
const { label, id, name } = Astro.props;

interface Props {
  label: string;
  name: string;
  id: string;
}
---

<div>
  <label for={id} class="sr-only">{label}</label>
  <textarea
    id={id}
    name={name}
    rows="4"
    class="block w-full rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-700 placeholder:text-neutral-500 focus:border-neutral-200 focus:outline-none focus:ring focus:ring-neutral-400 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-600 dark:bg-neutral-700/30 dark:text-neutral-300 dark:placeholder:text-neutral-400 dark:focus:ring-1"
    placeholder={label}></textarea>
</div>
```

/src/components/ui/forms/input/EmailInput.astro
```
---
const { label = Astro.currentLocale === "fr" ? "Adresse e-mail" : "Email address", id, errorId } = Astro.props;

interface Props {
  label?: string;
  id: string;
  errorId: string;
}
---

<!-- Container for the label, input, and validation message -->
<div>
  <!-- Label for the email input field -->
  <label
    for={id}
    class="mb-2 block text-sm text-neutral-800 dark:text-neutral-200"
    >{label}</label
  >
  <!-- Label for the email input field -->
  <div class="relative">
    <!-- Email input field -->
    <input
      type="email"
      id={id}
      name="email"
      autocomplete="email"
      class="block w-full rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-700 focus:border-neutral-200 focus:outline-none focus:ring focus:ring-neutral-400 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-600 dark:bg-neutral-700/30 dark:text-neutral-300 dark:focus:ring-1"
      required
      aria-describedby={id}
    />
    <!-- Hidden error icon -->
    <div class="pointer-events-none absolute inset-y-0 end-0 hidden pe-3">
      <svg
        class="h-5 w-5 text-red-500"
        width="16"
        height="16"
        fill="currentColor"
        viewBox="0 0 16 16"
        aria-hidden="true"
      >
        <path
          d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
        ></path>
      </svg>
    </div>
  </div>
  <!-- Validation message which is hidden by default -->
  <p class="mt-2 hidden text-xs text-red-600" id={errorId}>
    Please include a valid email address so we can get back to you
  </p>
</div>
```

/src/components/ui/forms/input/PasswordInput.astro
```
---
const {
  label = "Password",
  forgot,
  id,
  errorId,
  content
} = Astro.props;

interface Props {
  label?: string;
  forgot?: boolean;
  id?: string;
  errorId?: string;
  content?: string;
}
---

<div>
  <div class="flex items-center justify-between">
    <label
      for={id}
      class="mb-2 block text-sm text-neutral-800 dark:text-neutral-200"
      >{label}</label
    >
    {
      forgot ? (
        <button
          class="rounded-lg text-sm font-medium text-orange-400 decoration-2 outline-none ring-zinc-500 hover:underline focus-visible:ring dark:text-orange-400 dark:ring-zinc-200 dark:focus:outline-none dark:focus:ring-1"
          data-hs-overlay="#hs-toggle-between-modals-recover-modal"
        >
          Forgot password?
        </button>
      ) : (
        ""
      )
    }
  </div>
  <div class="relative">
    <input
      type="password"
      id={id}
      name="password"
      class="block w-full rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-700 focus:border-neutral-200 focus:outline-none focus:ring focus:ring-neutral-400 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-600 dark:bg-neutral-700/30 dark:text-neutral-300 dark:focus:ring-1"
      required
      aria-describedby={errorId}
    />
    <div class="pointer-events-none absolute inset-y-0 end-0 hidden pe-3">
      <svg
        class="h-5 w-5 text-red-500"
        width="16"
        height="16"
        fill="currentColor"
        viewBox="0 0 16 16"
        aria-hidden="true"
      >
        <path
          d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
        ></path>
      </svg>
    </div>
  </div>
  <p class="mt-2 hidden text-xs text-red-600" id={errorId}>
    {content}
  </p>
</div>
```

/src/components/ui/forms/input/PhoneInput.astro
```
---
const { label= Astro.currentLocale === "fr" ? "Numéro de téléphone" : "Phone Number", id } = Astro.props;

interface Props {
  label?: string;
  id: string;
}
---

<div>
  <label for={id} class="sr-only">{label}</label>
  <input
    type="tel"
    name="hs-phone-number"
    id={id}
    class="block w-full rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-700 placeholder:text-neutral-500 focus:border-neutral-200 focus:outline-none focus:ring focus:ring-neutral-400 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-600 dark:bg-neutral-700/30 dark:text-neutral-300 dark:placeholder:text-neutral-400 dark:focus:ring-1"
    placeholder={label}
  />
</div>
```

/src/components/ui/forms/input/Checkbox.astro
```
---
const { label = Astro.currentLocale === "fr" ? "Me rappeler" : "Remember me", id } = Astro.props;

interface Props {
  label?: string;
  id?: string;
}
---

<!-- Container for the checkbox and its label -->
<div class="flex items-center">
  <!-- Checkbox input -->
  <div class="flex">
    <input
      id={id}
      name="remember-me"
      type="checkbox"
      class="pointer-events-none mt-0.5 shrink-0 rounded border-neutral-200 text-neutral-600 focus:ring-yellow-400 dark:border-neutral-700 dark:bg-neutral-800 dark:checked:border-yellow-400 dark:checked:bg-yellow-400 dark:focus:ring-offset-neutral-800"
    />
  </div>
  <!-- Label for the checkbox -->
  <div class="ms-3">
    <label for={id} class="text-sm text-neutral-800 dark:text-neutral-200"
      >{label} <slot />
    </label>
  </div>
</div>
```

/src/components/ui/forms/input/EmailContactInput.astro
```
---
const { label = Astro.currentLocale === "fr" ? "E-mail" : "Email", id } = Astro.props;

interface Props {
  label?: string;
  id: string;
}
---

<!-- Container for the label and email input field -->
<div>
  <!-- Label for the email input field, visually hidden but accessible to screen readers -->
  <label for={id} class="sr-only">{label}</label>
  <!-- Email input field -->
  <input
    type="email"
    name="hs-email-contacts"
    id={id}
    autocomplete="email"
    class="block w-full rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-700 placeholder:text-neutral-500 focus:border-neutral-200 focus:outline-none focus:ring focus:ring-neutral-400 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-600 dark:bg-neutral-700/30 dark:text-neutral-300 dark:placeholder:text-neutral-400 dark:focus:ring-1"
    placeholder="Email"
  />
</div>
```

/src/components/ui/buttons/LoginBtn.astro
```
---
const { title = "Log in" } = Astro.props;

interface Props {
  title?: string;
}

const baseClasses =
  "flex items-center gap-x-2 text-base md:text-sm font-medium text-neutral-600 ring-zinc-500 transition duration-300 focus-visible:ring outline-none";
const hoverClasses = "hover:text-orange-400 dark:hover:text-orange-300";
const darkClasses =
  "dark:border-neutral-700 dark:text-neutral-400 dark:ring-zinc-200 dark:focus:outline-none";
const mdClasses = "md:my-6 md:border-s md:border-neutral-300 md:ps-6";
const txtSizeClasses = "2xl:text-base";
const userSVG = `<svg
      class="h-4 w-4 flex-shrink-0"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
  >
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>`;
---

<button
  type="button"
  class={`${baseClasses} ${hoverClasses} ${darkClasses} ${mdClasses} ${txtSizeClasses}`}
  data-hs-overlay="#hs-toggle-between-modals-login-modal"
>
  <!-- About Fragment: https://docs.astro.build/en/basics/astro-syntax/#fragments -->

  <Fragment set:html={userSVG} />
  {title}
</button>
```

/src/components/ui/buttons/Btn404.astro
```
---
import Icon from "@components/ui/icons/Icon.astro";
// Destructure the properties from Astro.props
const { title, id, noArrow } = Astro.props;
// Define TypeScript interface for the properties
interface Props {
  title?: string;
  id?: string;
  noArrow?: boolean;
}
// Define CSS classes for styling the button
const baseClasses =
  "group inline-flex items-center justify-center gap-x-2 rounded-lg px-4 py-3 text-sm font-bold text-neutral-50 ring-zinc-500 transition duration-300 focus-visible:ring outline-none";
const borderClasses = "border border-transparent";
const bgColorClasses =
  "bg-orange-400 hover:bg-orange-500 active:bg-orange-500 dark:focus:outline-none";
const disableClasses = "disabled:pointer-events-none disabled:opacity-50";
const fontSizeClasses = "2xl:text-base";
const ringClasses = "dark:ring-zinc-200";
---

<!-- Button with dynamic title, id, and optional arrow -->
<button
  class={`${baseClasses} ${borderClasses} ${bgColorClasses} ${disableClasses} ${fontSizeClasses} ${ringClasses}`}
  id={id}
>
  {title}
  <!-- Display the arrow based on the 'noArrow' property -->
  {noArrow ? null : <Icon name="arrowRight" />}
</button>
```

/src/components/ui/buttons/PrimaryCTA.astro
```
---
import Icon from "@components/ui/icons/Icon.astro";
// Destructure the properties from Astro.props
const { title, url, noArrow } = Astro.props;
// Define TypeScript interface for the properties
interface Props {
  title?: string;
  url?: string;
  noArrow?: boolean;
}
// Define CSS classes for styling the button
const baseClasses =
  "group inline-flex items-center justify-center gap-x-2 rounded-lg px-4 py-3 text-sm font-bold text-neutral-50 ring-zinc-500 transition duration-300 focus-visible:ring outline-none";
const borderClasses = "border border-transparent";
const bgColorClasses =
  "bg-orange-400 hover:bg-orange-500 active:bg-orange-500 dark:focus:outline-none";
const disableClasses = "disabled:pointer-events-none disabled:opacity-50";
const fontSizeClasses = "2xl:text-base";
const ringClasses = "dark:ring-zinc-200";
---

<!-- Link styled as a button, with dynamic title, URL, and optional arrow -->
<a
  class={`${baseClasses} ${borderClasses} ${bgColorClasses} ${disableClasses} ${fontSizeClasses} ${ringClasses}`}
  href={url}
>
  {title}
  <!-- Display the arrow based on the 'noArrow' property -->

  {noArrow ? null : <Icon name="arrowRight" />}
</a>
```

/src/components/ui/buttons/SocialShare.astro
```
---
import Icon from "@components/ui/icons/Icon.astro";
// Destructure the properties from Astro.props
const {
  pageTitle,
  title = Astro.currentLocale === "fr" ? "Partager" : "Share",
} = Astro.props;

// Define TypeScript interface for the properties
interface Props {
  pageTitle: string;
  title?: string;
}

type SocialPlatform = {
  name: string;
  url: string;
  svg: string;
};

const socialPlatforms: SocialPlatform[] = [
  {
    name: "Facebook",
    url: `https://www.facebook.com/share.php?u=${Astro.url}&title=${pageTitle}`,
    svg: "facebook",
  },
  {
    name: "X",
    url: `https://twitter.com/home/?status=${pageTitle}${Astro.url}`,
    svg: "x",
  },
  {
    name: "LinkedIn",
    url: `https://www.linkedin.com/shareArticle?mini=true&url=${Astro.url}&title=${pageTitle}`,
    svg: "linkedIn",
  },
];
---

<div
  class="hs-dropdown relative inline-flex [--auto-close:inside] [--placement:top-left]"
>
  <button
    id="hs-dropup"
    type="button"
    class="hs-dropdown-toggle inline-flex items-center gap-x-2 rounded-lg px-4 py-3 text-sm font-medium text-neutral-600 outline-none ring-zinc-500 transition duration-300 hover:bg-neutral-100 hover:text-neutral-700 focus-visible:ring dark:text-neutral-400 dark:ring-zinc-200 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:outline-none"
  >
    <Icon name="share" />

    {title}
  </button>

  <div
    class="hs-dropdown-menu duration z-10 hidden w-72 divide-y divide-neutral-200 rounded-lg bg-neutral-50 p-2 opacity-0 shadow-md transition-[opacity,margin] hs-dropdown-open:opacity-100 dark:divide-neutral-700 dark:border dark:border-neutral-700 dark:bg-neutral-800"
    aria-labelledby="hs-dropup"
  >
    <div class="py-2 first:pt-0 last:pb-0">
      {
        socialPlatforms.map((platform) => (
          <a
            class="flex items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-200 focus:bg-neutral-100  focus:outline-none dark:text-neutral-300 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 "
            href={platform.url}
          >
            <Icon name={platform.svg} />
            Share on {platform.name}
          </a>
        ))
      }
    </div>
    <div class="py-2 first:pt-0 last:pb-0">
      <button
        type="button"
        class="js-clipboard hover:text-dark focus-visible:ring-secondary group inline-flex w-full items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-200 focus:bg-neutral-100 focus:outline-none focus-visible:outline-none focus-visible:ring-1 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
        data-clipboard-success-text="Copied"
      >
        <svg
          class="js-clipboard-default h-4 w-4 transition group-hover:rotate-6"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect>
          <path
            d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
          ></path>
        </svg>

        <svg
          class="js-clipboard-success hidden h-4 w-4 text-neutral-700 dark:text-neutral-300"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        <span class="js-clipboard-success-text">Copy link</span>
      </button>
    </div>
  </div>
</div>

<!--Import the necessary Dropdown and Clipboard plugins-->
<!--https://preline.co/plugins/html/dropdown.html-->
<!-- https://clipboardjs.com/ -->
<script>
  import "@preline/dropdown/index.js";
</script>

<script>
  import ClipboardJS from "clipboard";

  // Initialization of Clipboard
  (function () {
    window.addEventListener("load", () => {
      const clipboards =
        document.querySelectorAll<HTMLElement>(".js-clipboard");

      clipboards.forEach((el) => {
        const clipboard = new ClipboardJS(el, {
          text: () => {
            return window.location.href;
          },
        });

        clipboard.on("success", () => {
          const defaultElement = el.querySelector<HTMLElement>(
            ".js-clipboard-default"
          );
          const successElement = el.querySelector<HTMLElement>(
            ".js-clipboard-success"
          );
          const successTextElement = el.querySelector<HTMLElement>(
            ".js-clipboard-success-text"
          );
          const successText = el.dataset.clipboardSuccessText || "";
          let oldSuccessText: string | undefined;

          if (successTextElement) {
            oldSuccessText = successTextElement.textContent || "";
            successTextElement.textContent = successText;
          }

          if (defaultElement && successElement) {
            defaultElement.style.display = "none";
            successElement.style.display = "block";
          }

          setTimeout(() => {
            if (successTextElement && oldSuccessText !== undefined) {
              successTextElement.textContent = oldSuccessText;
            }

            if (defaultElement && successElement) {
              successElement.style.display = "";
              defaultElement.style.display = "";
            }
          }, 800);
        });
      });
    });
  })();
</script>
```

/src/components/ui/buttons/GithubBtn.astro
```
---
import Icon from "@components/ui/icons/Icon.astro";
const { title, url } = Astro.props;

interface Props {
  title?: string;
  url?: string;
}

const baseClasses =
  "group inline-flex items-center justify-center gap-x-3 rounded-full px-4 py-3 text-center text-sm font-medium text-neutral-700 ring-zinc-500 focus-visible:ring transition duration-300 outline-none";
const borderClasses = "border border-transparent";
const bgColorClasses = "bg-yellow-400 dark:focus:outline-none";
const hoverClasses = "hover:shadow-2xl hover:shadow-yellow-500";
const fontSizeClasses = "2xl:text-base";
const ringClasses = "dark:ring-zinc-200";
---

<a
  class={`${baseClasses} ${borderClasses} ${bgColorClasses} ${hoverClasses} ${fontSizeClasses} ${ringClasses}`}
  href={url}
  target="_blank"
  rel="noopener noreferrer"
>
  <Icon name="github" />
  {title}
</a>
```

/src/components/ui/buttons/ProductTabBtn.astro
```
---
// Destructure the properties from Astro.props
const { id, dataTab, title, first } = Astro.props;

// Define TypeScript interface for the properties
interface Props {
  id: string;
  dataTab: string;
  title: string;
  first?: boolean;
}
// Define constants for styling classes
const BUTTON_CLASS =
  "flex w-full justify-center rounded-xl border border-transparent p-3 outline-none ring-zinc-500 transition duration-300 hover:bg-neutral-100 focus-visible:ring dark:ring-zinc-200 dark:hover:bg-neutral-700 dark:focus:outline-none md:p-5";

const HEADING_CLASS = "block text-center font-bold";
const INACTIVE_HEADING_CLASS = "text-neutral-800 dark:text-neutral-200";
---

<!-- Tab button element -->
<button
  type="button"
  class={`${BUTTON_CLASS} ${first ? "active bg-neutral-100 hover:border-transparent dark:bg-white/[.05]" : ""}`}
  id={id}
  data-target={dataTab}
  role="tab"
>
  <!-- Tab text -->
  <span
    class={`${HEADING_CLASS} ${first ? "text-orange-400 dark:text-orange-300" : INACTIVE_HEADING_CLASS}`}
  >
    {title}
  </span>
</button>
```

/src/components/ui/buttons/AuthBtn.astro
```
---
// Destructure the properties from Astro.props
const { title } = Astro.props;

// Define TypeScript interface for the properties
interface Props {
  title: string;
}
// Define CSS classes for styling the button
const baseClasses =
  "inline-flex w-full items-center justify-center gap-x-2 rounded-lg px-4 py-3 text-sm font-bold text-neutral-700 focus-visible:ring outline-none transition duration-300";
const borderClasses = "border border-transparent";
const bgColorClasses = "bg-yellow-400 dark:focus:outline-none";
const hoverClasses = "hover:bg-yellow-500";
const fontSizeClasses = "2xl:text-base";
const disabledClasses = "disabled:pointer-events-none disabled:opacity-50";
const ringClasses = "ring-zinc-500 dark:ring-zinc-200";
---

<!-- Styled submit button with dynamic title -->
<button
  type="submit"
  class={`${baseClasses} ${borderClasses} ${bgColorClasses} ${hoverClasses} ${fontSizeClasses} ${disabledClasses} ${ringClasses}`}
  >{title}</button
>
```

/src/components/ui/buttons/SecondaryCTA.astro
```
---
// Destructure the properties from Astro.props
const { title, url } = Astro.props;

// Define TypeScript interface for the properties
interface Props {
  title?: string;
  url?: string;
}
// Define CSS classes for the hyperlink button
const baseClasses =
  "inline-flex items-center justify-center gap-x-2 rounded-lg px-4 py-3 text-center text-sm font-medium text-neutral-600 shadow-sm outline-none ring-zinc-500 focus-visible:ring transition duration-300";
const borderClasses = "border border-neutral-200";
const bgColorClasses = "bg-neutral-300";
const hoverClasses =
  "hover:bg-neutral-400/50 hover:text-neutral-600 active:text-neutral-700";
const disableClasses = "disabled:pointer-events-none disabled:opacity-50";
const fontSizeClasses = "2xl:text-base";
const ringClasses = "ring-zinc-500";

const darkClasses =
  "dark:border-neutral-700 dark:bg-zinc-700 dark:text-neutral-300 dark:ring-zinc-200 dark:hover:bg-zinc-600 dark:focus:outline-none";
---

<!-- Styled hyperlink -->
<a
  class={`${baseClasses} ${borderClasses} ${bgColorClasses} ${hoverClasses} ${disableClasses} ${fontSizeClasses} ${ringClasses} ${darkClasses}`}
  href={url}
>
  {title}
</a>
```

/src/components/ui/buttons/GoogleBtn.astro
```
---
const { title } = Astro.props;

interface Props {
  title: string;
}

const baseClasses =
  "inline-flex w-full items-center justify-center gap-x-2 rounded-lg px-4 py-3 text-sm dark:text-neutral-400 font-medium text-neutral-600 shadow-sm transition duration-300 focus-visible:ring outline-none";
const borderClasses = "border border-neutral-200 dark:border-neutral-700";
const bgColorClasses =
  "bg-neutral-50 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-900";
const disableClasses = "disabled:pointer-events-none disabled:opacity-50";
const ringClasses = "ring-zinc-500 dark:ring-zinc-200";
const googleSVG = `<svg
    class="h-auto w-4"
    width="46"
    height="47"
    viewBox="0 0 46 47"
    fill="none"
  >
    <path
      d="M46 24.0287C46 22.09 45.8533 20.68 45.5013 19.2112H23.4694V27.9356H36.4069C36.1429 30.1094 34.7347 33.37 31.5957 35.5731L31.5663 35.8669L38.5191 41.2719L38.9885 41.3306C43.4477 37.2181 46 31.1669 46 24.0287Z"
      fill="#4285F4"></path>
    <path
      d="M23.4694 47C29.8061 47 35.1161 44.9144 39.0179 41.3012L31.625 35.5437C29.6301 36.9244 26.9898 37.8937 23.4987 37.8937C17.2793 37.8937 12.0281 33.7812 10.1505 28.1412L9.88649 28.1706L2.61097 33.7812L2.52296 34.0456C6.36608 41.7125 14.287 47 23.4694 47Z"
      fill="#34A853"></path>
    <path
      d="M10.1212 28.1413C9.62245 26.6725 9.32908 25.1156 9.32908 23.5C9.32908 21.8844 9.62245 20.3275 10.0918 18.8588V18.5356L2.75765 12.8369L2.52296 12.9544C0.909439 16.1269 0 19.7106 0 23.5C0 27.2894 0.909439 30.8731 2.49362 34.0456L10.1212 28.1413Z"
      fill="#FBBC05"></path>
    <path
      d="M23.4694 9.07688C27.8699 9.07688 30.8622 10.9863 32.5344 12.5725L39.1645 6.11C35.0867 2.32063 29.8061 0 23.4694 0C14.287 0 6.36607 5.2875 2.49362 12.9544L10.0918 18.8588C11.9987 13.1894 17.25 9.07688 23.4694 9.07688Z"
      fill="#EB4335"></path>
  </svg>`;
---

<button
  type="button"
  class={`${baseClasses} ${borderClasses} ${bgColorClasses} ${disableClasses} ${ringClasses}`}
>
  <!-- About Fragment: https://docs.astro.build/en/basics/astro-syntax/#fragments -->

  <Fragment set:html={googleSVG} />
  {title}
</button>
```

/src/components/ui/buttons/Bookmark.astro
```
---
import Icon from "@components/ui/icons/Icon.astro";
---

<button
  type="button"
  class="focus-visible:ring-secondary group inline-flex items-center rounded-lg p-2.5 text-neutral-600 outline-none ring-zinc-500 transition duration-300 hover:bg-neutral-100 focus:outline-none focus-visible:outline-none focus-visible:ring-1 dark:text-neutral-400 dark:ring-zinc-200 dark:hover:bg-neutral-700"
  data-bookmark-button="bookmark-button"
>
  <Icon name="bookmark" />
</button>

<script>
  class Bookmark {
    private static readonly BOOKMARKS_KEY = "bookmarks";
    private bookmarkButton: Element | null;

    constructor(private dataAttrValue: string) {
      this.bookmarkButton = document.querySelector(
        `[data-bookmark-button="${dataAttrValue}"]`
      );
    }

    private getStoredBookmarks(): string[] {
      const item = localStorage.getItem(Bookmark.BOOKMARKS_KEY);
      return item ? JSON.parse(item) : [];
    }

    init(): void {
      if (this.bookmarkButton && this.isStored()) {
        this.markAsStored();
      }

      this.bookmarkButton?.addEventListener("click", () =>
        this.toggleBookmark()
      );
    }

    isStored(): boolean {
      return this.getStoredBookmarks().includes(window.location.pathname);
    }
    markAsStored(): void {
      if (this.bookmarkButton) {
        this.bookmarkButton.classList.add("bookmarked");
        let svgElement = this.bookmarkButton.querySelector("svg");
        if (svgElement) {
          svgElement.setAttribute(
            "class",
            "h-6 w-6 fill-red-500 dark:fill-red-500"
          );
        }
        let pathElement = svgElement?.querySelector("path");
        if (pathElement) {
          pathElement.setAttribute(
            "class",
            "fill-current text-red-500 dark:text-red-500"
          );
        }
      }
    }
    unmarkAsStored(): void {
      if (this.bookmarkButton) {
        this.bookmarkButton.classList.remove("bookmarked");
        let svgElement = this.bookmarkButton.querySelector("svg");
        if (svgElement) {
          svgElement.setAttribute("class", "h-6 w-6 fill-none");
        }
        let pathElement = svgElement?.querySelector("path");
        if (pathElement) {
          pathElement.setAttribute(
            "class",
            "fill-current text-neutral-500 group-hover:text-red-400 dark:text-neutral-500 group-hover:dark:text-red-400"
          );
        }
      }
    }
    toggleBookmark(): void {
      let storedBookmarks = this.getStoredBookmarks();
      const index = storedBookmarks.indexOf(window.location.pathname);
      if (index !== -1) {
        storedBookmarks.splice(index, 1);
        this.unmarkAsStored();
      } else {
        storedBookmarks.push(window.location.pathname);
        this.markAsStored();
      }
      localStorage.setItem(
        Bookmark.BOOKMARKS_KEY,
        JSON.stringify(storedBookmarks)
      );
    }
  }

  new Bookmark("bookmark-button").init();
</script>
```

/src/components/ui/cards/CardWide.astro
```
---
// Import necessary modules and utilities
import { Image } from "astro:assets";
import Icon from "@components/ui/icons/Icon.astro";
import type { CollectionEntry } from "astro:content";

const { product, productLocale = "" } = Astro.props;

interface Props {
  product: CollectionEntry<"products">;
  productLocale?: string;
}

// Define classes to be used with the Image component
const imageClass =
  "absolute inset-0 h-full w-full object-cover object-center transition duration-[600ms] ease-[cubic-bezier(0.45,0,0.55,1)] group-hover:scale-110";
---

<!-- The anchor tag is the main container for the product card. When clicked, this leads to the details of the product. -->
<a
  href={productLocale && productLocale !== "en"
    ? `/${productLocale}/products/${product.slug.replace(/^fr\//, "")}/`
    : `/products/${product.slug.replace(/^en\//, "")}/`}
  data-astro-prefetch
  class="group relative flex h-48 items-end overflow-hidden rounded-lg shadow-xl outline-none ring-zinc-500 focus-visible:ring dark:ring-zinc-200 dark:focus:outline-none md:col-span-2 md:h-80"
>
  <!-- The product's main image -->
  <Image
    src={product.data.main.imgCard}
    alt={product.data.main.imgAlt}
    draggable={"false"}
    class={imageClass}
    format={"avif"}
  />
  <!-- This container includes a gradient overlay over the product's image -->
  <div
    class="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-800 via-transparent to-transparent opacity-50"
  >
  </div>
  <!-- This container includes product's subtitle and an SVG icon-->
  <span
    class="relative mb-3 ml-4 inline-block text-sm font-bold text-neutral-50 transition duration-[600ms] ease-[cubic-bezier(0.45,0,0.55,1)] group-hover:scale-110 md:ml-5 md:text-lg"
    >{product.data.description} <Icon name="openInNew" /></span
  >
</a>
```

/src/components/ui/cards/CardInsight.astro
```
---
// Import necessary modules and utilities
import { Image } from "astro:assets";
import Icon from "@components/ui/icons/Icon.astro";
import type { CollectionEntry } from "astro:content";

const {
  insightEntry,
  insightLocale,
  label = Astro.currentLocale === "fr" ? "Lire plus" : "Read more",
} = Astro.props;

interface Props {
  insightEntry: CollectionEntry<"insights">;
  insightLocale?: string;
  label?: string;
}
---

<!-- The anchor tag is the root container for the "Insight" card. It links to the insight detail page. -->
<a
  class="group rounded-xl outline-none ring-zinc-500 transition duration-300 focus-visible:ring dark:ring-zinc-200 dark:focus:outline-none"
  href={insightLocale && insightLocale !== "en"
    ? `/${insightLocale}/insights/${insightEntry.slug.replace(/^fr\//, "")}/`
    : `/insights/${insightEntry.slug.replace(/^en\//, "")}/`}
>
  <!-- This is the container for the insight's cover image. -->
  <div class="relative overflow-hidden rounded-xl pt-[50%] sm:pt-[70%]">
    <Image
      class="absolute start-0 top-0 size-full rounded-xl object-cover transition duration-500 ease-in-out group-hover:scale-105"
      src={insightEntry.data.cardImage}
      alt={insightEntry.data.cardImageAlt}
      draggable={"false"}
      format={"avif"}
    />
  </div>
  <!-- This is the container for the insight's title and description. -->
  <div class="mt-7">
    <!-- The title of the insight -->
    <h3
      class="text-xl font-bold text-neutral-800 group-hover:text-neutral-600 dark:text-neutral-200 dark:group-hover:text-neutral-400"
    >
      {insightEntry.data.title}
    </h3>
    <!-- The description of the insight -->
    <p class="mt-3 text-neutral-600 dark:text-neutral-400">
      {insightEntry.data.description}
    </p>
    <!-- The "Read More" hyperlink going to the full insight. With an arrow icon -->
    <p
      class="mt-5 inline-flex items-center gap-x-1 font-medium text-orange-400 decoration-2 group-hover:underline dark:text-orange-300"
    >
      {label}
      <Icon name="arrowRightStatic" />
    </p>
  </div>
</a>
```

/src/components/ui/cards/CardBlog.astro
```
---
// Import necessary components and utilities
import AvatarBlog from "@components/ui/avatars/AvatarBlog.astro";
import { Image } from "astro:assets";
import { formatDate } from "@utils/utils";
import type { CollectionEntry } from "astro:content";

const { blogEntry, blogLocale = "" } = Astro.props;

interface Props {
  blogEntry: CollectionEntry<"blog">;
  blogLocale?: string;
}
---

<!-- The following anchor tag is the main container for the card.
     It's a link to the blog post detailed page.
     The data-astro-prefetch is an Astro specific Dynamic HTML feature,
     which automatically prefetches the linked page to speed up navigation. -->
<a
  class="group relative block rounded-xl outline-none ring-zinc-500 transition duration-500 focus-visible:ring dark:ring-zinc-200 dark:focus:outline-none"
  href={blogLocale && blogLocale !== "en"
    ? `/${blogLocale}/blog/${blogEntry.slug.replace(/^fr\//, "")}/`
    : `/blog/${blogEntry.slug.replace(/^en\//, "")}/`}
  data-astro-prefetch
>
  <!-- The container for the blog post's cover image. Uses astro:assets' Image for image source -->
  <div
    class="relative h-[350px] w-full flex-shrink-0 overflow-hidden rounded-xl before:absolute before:inset-x-0 before:z-[1] before:size-full before:bg-gradient-to-t before:from-neutral-900/[.7]"
  >
    <Image
      class="absolute start-0 top-0 size-full object-cover transition duration-500 group-hover:scale-110"
      src={blogEntry.data.cardImage}
      alt={blogEntry.data.cardImageAlt}
      draggable={"false"}
      loading={"eager"}
      format={"avif"}
    />
  </div>
  <!-- The container for the blog author's avatar and associated metadata (author name and publication date) -->
  <div class="absolute inset-x-0 top-0 z-10">
    <div class="flex h-full flex-col p-4 sm:p-6">
      <div class="flex items-center">
        <AvatarBlog blogEntry={blogEntry} />

        <div class="ms-2.5 sm:ms-4">
          <h4 class="font-bold text-neutral-50">
            {blogEntry.data.author}
          </h4>
          <p class="text-xs text-neutral-50/[.8]">
            {formatDate(blogEntry.data.pubDate)}
          </p>
        </div>
      </div>
    </div>
  </div>
  <!-- The container for the blog post's title and description -->
  <div class="absolute inset-x-0 bottom-0 z-10">
    <div class="flex h-full flex-col p-4 sm:p-6">
      <h3
        class="text-balance text-lg font-bold text-neutral-50 group-hover:text-neutral-50/[.8] sm:text-3xl"
      >
        {blogEntry.data.title}
      </h3>
      <p class="mt-2 text-pretty text-neutral-50/[.8]">
        {blogEntry.data.description}
      </p>
    </div>
  </div>
</a>
```

/src/components/ui/cards/CardRelated.astro
```
---
// Import necessary modules and utilities
import { Image } from "astro:assets";
import { formatDate } from "@utils/utils";
import type { CollectionEntry } from "astro:content";

const { blogEntry, recentBlogLocale = "" } = Astro.props;

interface Props {
  blogEntry: CollectionEntry<"blog">;
  recentBlogLocale?: string;
}
---

<a
  class="group block rounded-xl outline-none ring-zinc-500 transition duration-300 focus-visible:ring dark:ring-zinc-200 dark:focus:outline-none"
  href={recentBlogLocale && recentBlogLocale !== "en"
    ? `/${recentBlogLocale}/blog/${blogEntry.slug.replace(/^fr\//, "")}/`
    : `/blog/${blogEntry.slug.replace(/^en\//, "")}/`}
  data-astro-prefetch
>
  <div>
    <Image
      class="aspect-video rounded-xl"
      src={blogEntry.data.cardImage}
      alt={blogEntry.data.cardImageAlt}
      draggable={"false"}
      format={"avif"}
    />
    <!-- The title of the blog post -->
    <h3
      class="mt-2 text-balance text-lg font-medium text-neutral-800 group-hover:text-orange-400 dark:text-neutral-300 dark:group-hover:text-neutral-50"
    >
      {blogEntry.data.title}
    </h3>
    <!-- The formatted publication date of the blog post -->
    <p class="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
      {formatDate(blogEntry.data.pubDate)}
    </p>
  </div></a
>
```

/src/components/ui/cards/CardSmall.astro
```
---
// Import necessary modules and utilities
import { Image } from "astro:assets";
import Icon from "@components/ui/icons/Icon.astro";
import type { CollectionEntry } from "astro:content";

const { product, productLocale = "" } = Astro.props;

interface Props {
  product: CollectionEntry<"products">;
  productLocale?: string;
}

// Define classes to be used with the Image component
const imageClass =
  "absolute inset-0 h-full w-full object-cover object-center transition duration-[600ms] ease-[cubic-bezier(0.45,0,0.55,1)] group-hover:scale-110";
---

<!-- A clickable card that leads to the details of the product-->
<a
  href={productLocale && productLocale !== "en"
    ? `/${productLocale}/products/${product.slug.replace(/^fr\//, "")}/`
    : `/products/${product.slug.replace(/^en\//, "")}/`}
  data-astro-prefetch
  class="group relative flex h-48 items-end overflow-hidden rounded-xl shadow-lg outline-none ring-zinc-500 focus-visible:ring dark:ring-zinc-200 dark:focus:outline-none md:h-80"
>
  <!-- The product's main image -->
  <Image
    src={product.data.main.imgCard}
    alt={product.data.main.imgAlt}
    draggable={"false"}
    class={imageClass}
    format={"avif"}
  />
  <!-- An overlay gradient that sits on top of the product image-->
  <div
    class="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-800 via-transparent to-transparent opacity-50"
  >
  </div>
  <!-- The product's subtitle and the anchor SVG icon-->
  <span
    class="relative mb-3 ml-4 inline-block text-sm font-bold text-neutral-50 transition duration-[600ms] ease-[cubic-bezier(0.45,0,0.55,1)] group-hover:scale-110 md:ml-5 md:text-lg"
    >{product.data.description} <Icon name="openInNew" />
  </span>
</a>
```

/src/components/ui/cards/CardBlogRecent.astro
```
---
// Import all required components and utilities
import { Image } from "astro:assets";
import type { CollectionEntry } from "astro:content";
import AvatarBlogLarge from "@components/ui/avatars/AvatarBlogLarge.astro";
import PrimaryCTA from "@components/ui/buttons/PrimaryCTA.astro";

const { blogEntry, recentBlogLocale = "" } = Astro.props;

interface Props {
  blogEntry: CollectionEntry<"blog">;
  recentBlogLocale?: string;
}
---

<!-- Root container, which is divided into 2 grid column layout for larger screens -->
<div class="grid gap-8 sm:grid-cols-2 sm:items-center">
  <!-- Container for the blog post's cover image -->
  <div class="sm:order-2">
    <div class="relative rounded-lg pt-[50%] sm:pt-[100%]">
      <Image
        class="absolute start-0 top-0 size-full rounded-xl object-cover"
        src={blogEntry.data.cardImage}
        alt={blogEntry.data.cardImageAlt}
        draggable={"false"}
        loading={"eager"}
        format={"avif"}
      />
    </div>
  </div>
  <!-- Container for the blog post's heading, author avatar, author's role, and read more button -->
  <div class="sm:order-1">
    <!-- Blog title which is also a hyperlink to the blog detail page  -->
    <h2
      class="text-balance text-2xl font-bold tracking-tight text-neutral-800 dark:text-neutral-200 md:text-3xl lg:text-4xl lg:leading-tight xl:text-5xl xl:leading-tight"
    >
      <a
        class="outline-none ring-zinc-500 transition duration-300 hover:text-orange-400 focus-visible:ring dark:text-neutral-300 dark:ring-zinc-200 dark:hover:text-neutral-50 dark:focus:outline-none"
        href={recentBlogLocale && recentBlogLocale !== "en" ? `/${recentBlogLocale}/blog/${blogEntry.slug.replace(/^fr\//, '')}/` : `/blog/${blogEntry.slug.replace(/^en\//, '')}/`}
      >
        {blogEntry.data.description}
      </a>
    </h2>
    <!-- Container for the author's avatar and metadata -->
    <div class="mt-6 flex items-center sm:mt-10">
      <AvatarBlogLarge blogEntry={blogEntry} />

      <div class="ms-3 sm:ms-4">
        <p class="font-bold text-neutral-800 dark:text-neutral-200 sm:mb-1">
          {blogEntry.data.author}
        </p>
        <p class="text-xs text-neutral-500">
          {blogEntry.data.role}
        </p>
      </div>
    </div>
    <!-- Read More button which is a link to the blog post detailed page -->
    <div class="mt-5">
      <PrimaryCTA
        url={recentBlogLocale && recentBlogLocale !== "en" ? `/${recentBlogLocale}/blog/${blogEntry.slug.replace(/^fr\//, '')}/` : `/blog/${blogEntry.slug.replace(/^en\//, '')}/`}
        title="Read More"
        data-astro-prefetch
      />
    </div>
  </div>
</div>
```

/src/components/ui/stars/HalfStar.astro
```
<svg
  class="h-4 w-4 text-yellow-500 dark:text-yellow-400"
  width="51"
  height="51"
  viewBox="0 0 51 51"
  fill="none"
>
  <path
    d="M49.6867 20.0305C50.2889 19.3946 49.9878 18.1228 49.0846 18.1228L33.7306 15.8972C33.4296 15.8972 33.1285 15.8972 32.8275 15.2613L25.9032 0.317944C25.6021 0 25.3011 0 25 0V42.6046C25 42.6046 25.3011 42.6046 25.6021 42.6046L39.7518 49.9173C40.3539 50.2352 41.5581 49.5994 41.2571 48.6455L38.5476 32.4303C38.5476 32.1124 38.5476 31.7944 38.8486 31.4765L49.6867 20.0305Z"
    fill="transparent"></path>
  <path
    d="M0.313299 20.0305C-0.288914 19.3946 0.0122427 18.1228 0.915411 18.1228L16.2694 15.8972C16.5704 15.8972 16.8715 15.8972 17.1725 15.2613L24.0968 0.317944C24.3979 0 24.6989 0 25 0V42.6046C25 42.6046 24.6989 42.6046 24.3979 42.6046L10.2482 49.9173C9.64609 50.2352 8.44187 49.5994 8.74292 48.6455L11.4524 32.4303C11.4524 32.1124 11.4524 31.7944 11.1514 31.4765L0.313299 20.0305Z"
    fill="currentColor"></path>
</svg>
```

/src/components/ui/stars/FullStar.astro
```
<svg
  class="h-4 w-4 text-yellow-500 dark:text-yellow-400"
  width="51"
  height="51"
  viewBox="0 0 51 51"
  fill="none"
>
  <path
    d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z"
    fill="currentColor"></path>
</svg>
```

/src/components/ui/banners/AnnouncementBanner.astro
```
---
const { title, btnId, btnTitle, url } = Astro.props;

interface Props {
  title?: string;
  btnId: string;
  btnTitle: string;
  url: string;
}
---

<astro-banner btnId={btnId}>
  <div
    class="fixed bottom-0 start-1/2 z-50 mx-auto w-full -translate-x-1/2 transform p-6 sm:max-w-4xl"
    role="region"
    aria-label="Informational Banner"
  >
    <div
      class="rounded-xl bg-neutral-800 bg-[url('/banner-pattern.svg')] bg-cover bg-center bg-no-repeat p-4 text-center shadow-sm dark:bg-neutral-200"
    >
      <div class="flex items-center justify-center">
        <div class="ml-auto">
          {title &&
          <p
            class="me-2 inline-block font-medium text-neutral-50 dark:text-neutral-700"
          >
            {title}
          </p>
          }
          <a
            class="group inline-flex items-center gap-x-2 rounded-full border-2 border-neutral-50 backdrop-brightness-75 sm:backdrop-brightness-100 px-3 py-2 text-sm font-semibold text-neutral-50 transition duration-300 hover:border-neutral-100/70 hover:text-neutral-50/70 disabled:pointer-events-none disabled:opacity-50 dark:backdrop-brightness-100 dark:border-neutral-700 dark:text-neutral-700 dark:hover:border-neutral-700/70 dark:hover:text-neutral-800/70 dark:focus:outline-none"
            href={url}
            target="_blank"
          >
            {btnTitle}
            <svg
              class="size-4 flex-shrink-0 transition duration-300 group-hover:translate-x-1"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"><path d="m9 18 6-6-6-6"></path></svg
            >
          </a>
        </div>
        <button
          type="button"
          class="ml-auto inline-flex items-center gap-x-2 rounded-full border border-transparent bg-gray-100 p-2 text-sm font-semibold text-gray-800 hover:bg-gray-200 disabled:pointer-events-none disabled:opacity-50 dark:bg-neutral-700 dark:text-neutral-50 dark:hover:bg-neutral-700/80 dark:hover:text-neutral-50 dark:focus:outline-none"
          id={btnId}
        >
          <span class="sr-only">Dismiss</span>
          <svg
            class="size-5 flex-shrink-0"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            ><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg
          >
        </button>
      </div>
    </div>
  </div>
</astro-banner>
<script>
  class AstroBanner extends HTMLElement {
    connectedCallback() {
      const btnId = this.getAttribute("btnId");
      const button = this.querySelector(`#${btnId}`);
      if (button != null) {
        button.addEventListener("click", () => this.remove());
      }
    }
  }

  customElements.define("astro-banner", AstroBanner);
</script>
```

/src/components/ui/feedback/PostFeedback.astro
```
---
// Define props from Astro
const { title, firstChoice, secondChoice } = Astro.props;

// Define TypeScript interface for props
interface Props {
  title: string;
  firstChoice: string;
  secondChoice: string;
}
---

<div class="mt-12 flex items-center justify-center gap-x-2">
  <h3 class="text-neutral-700 dark:text-neutral-300">{title}</h3>
  <button
    type="button"
    class="group inline-flex items-center gap-x-2 rounded-lg border border-neutral-400 px-3 py-2 text-sm font-medium text-neutral-700 hover:border-yellow-500 hover:bg-yellow-500 hover:shadow-2xl hover:shadow-yellow-500 dark:border-neutral-500 dark:text-neutral-300 dark:hover:bg-yellow-500 dark:hover:text-neutral-700 dark:hover:border-yellow-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-neutral-600"
  >
    <svg
      class="size-4 flex-shrink-0 transition duration-300 group-hover:-translate-y-1 group-focus-visible:-translate-y-1"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      ><path d="M7 10v12"></path><path
        d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"
      ></path></svg
    >
    {firstChoice}
  </button>
  <button
    type="button"
    class="group inline-flex items-center gap-x-2 rounded-lg border border-neutral-400 px-3 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-400/30 dark:border-neutral-500 dark:text-neutral-300 dark:hover:bg-neutral-700/60 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-neutral-600"
  >
    <svg
      class="size-4 flex-shrink-0 transition duration-300 group-hover:translate-y-1 group-focus-visible:translate-y-1"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      ><path d="M17 14V2"></path><path
        d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z"
      ></path></svg
    >
    {secondChoice}
  </button>
</div>
```

/src/components/ui/links/MegaMenuLink.astro
```
---
import { Image } from "astro:assets";
import Icon from "../icons/Icon.astro";
import { servicesData, successStoriesData } from "@data/mega_link";
---

<div
  class="hs-dropdown py-3 [--adaptive:none] [--strategy:static] md:px-3 md:py-4 md:[--strategy:absolute] md:[--trigger:hover]"
>
  <button
    type="button"
    class="flex w-full text-base items-center font-medium text-neutral-600 hover:text-neutral-500 dark:text-neutral-400 dark:hover:text-neutral-500"
  >
    Services <Icon name="chevronDown" />
  </button>

  <div
    class="hs-dropdown-menu start-0 top-full z-10 hidden w-full min-w-60 rounded-2xl bg-neutral-50 py-2 opacity-0 transition-[opacity,margin] duration-[0.1ms] before:absolute before:-top-5 before:start-0 before:h-5 before:w-full hs-dropdown-open:opacity-100 dark:divide-neutral-700 dark:bg-neutral-800 md:p-4 md:shadow-2xl md:duration-[150ms]"
  >
    <div class="gap-4 md:grid md:grid-cols-2 lg:grid-cols-3">
      <div class="mx-1 flex flex-col md:mx-0">
        {
          servicesData &&
            servicesData.slice(0, 3).map((data) => (
              <a
                class="group flex gap-x-5 rounded-lg p-4 hover:bg-neutral-100 dark:text-neutral-200 dark:hover:bg-neutral-500/10"
                href={data.url}
              >
                <Icon name={data.icon} class="mt-1 size-5 flex-shrink-0" />
                <div class="grow">
                  <p class="font-medium text-neutral-800 dark:text-neutral-200">
                    {data.title}
                  </p>
                  <p class="text-sm text-neutral-500 group-hover:text-neutral-800 dark:text-neutral-400 dark:group-hover:text-neutral-200">
                    {data.description}
                  </p>
                </div>
              </a>
            ))
        }
      </div>

      <div class="mx-1 flex flex-col md:mx-0">
        {
          servicesData &&
            servicesData.slice(3, 6).map((data) => (
              <a
                class="group flex gap-x-5 rounded-lg p-4 hover:bg-neutral-100 dark:text-neutral-200 dark:hover:bg-neutral-500/10"
                href={data.url}
              >
                <Icon name={data.icon} class="mt-1 size-5 flex-shrink-0" />
                <div class="grow">
                  <p class="font-medium text-neutral-800 dark:text-neutral-200">
                    {data.title}
                  </p>
                  <p class="text-sm text-neutral-500 group-hover:text-neutral-800 dark:text-neutral-400 dark:group-hover:text-neutral-200">
                    {data.description}
                  </p>
                </div>
              </a>
            ))
        }
      </div>

      <div class="mx-1 flex flex-col pt-4 md:mx-0 md:pt-0">
        <span
          class="text-sm font-semibold uppercase text-neutral-800 dark:text-neutral-200"
          >Success Stories</span
        >
        <a
          class="group mt-2 flex items-center gap-x-5 rounded-xl p-3 hover:bg-neutral-100 dark:hover:bg-neutral-500/10"
          href={successStoriesData[0].learnMoreUrl}
        >
          <Image
            src={successStoriesData[0].image}
            inferSize={true}
            alt={successStoriesData[0].alt}
            class="size-32 rounded-lg"
          />
          <div class="grow">
            <p class="text-sm text-neutral-800 dark:text-neutral-400">
              {successStoriesData[0].description}
            </p>
            <p
              class="mt-3 inline-flex items-center gap-x-1 text-sm font-medium text-orange-400 decoration-2 hover:underline dark:text-orange-300"
            >
              Learn more
              <Icon name="arrowRight" />
            </p>
          </div>
        </a>
      </div>
    </div>
  </div>
</div>
```

/src/components/ui/links/NavLink.astro
```
---
// Destructure the properties from Astro.props
const { url, name } = Astro.props;

// Define TypeScript interface for the properties
interface Props {
  url: string;
  name: string;
}
---

<!--
Re-usable link component for navigation bar. Highlights the active link
by comparing the current URL with the href of each link.
We assign an ID matching the URL for easy reference in our script.
If URL is '/' (home page), assign ID as 'home' 
-->
<a
  id={url === "/" ? "home" : url.replace("/", "")}
  href={url}
  data-astro-prefetch
  class="rounded-lg text-base font-medium text-neutral-600 outline-none ring-zinc-500 hover:text-neutral-500 focus-visible:ring dark:text-neutral-400 dark:ring-zinc-200 dark:hover:text-neutral-500 dark:focus:outline-none md:py-3 md:text-sm 2xl:text-base"
>
  {name}
</a>

<script>
  document.addEventListener("DOMContentLoaded", function () {
    let url = window.location.pathname;
    let urlSegments = url.split("/");
    let navId;

    if (url === "/") {
      navId = "home";
    } else {
      navId = url.replace("/", "");
    }

    let nav = document.getElementById(navId);

    if (nav) {
      nav.classList.remove(
        "text-neutral-600",
        "dark:text-neutral-400",
        "hover:text-neutral-500",
        "dark:hover:text-neutral-500"
      );
      nav.classList.add("text-orange-400", "dark:text-orange-300");
      nav.setAttribute("aria-current", "page");
    }
  });
</script>
```

/src/components/ui/links/FooterSocialLink.astro
```
---
const { url } = Astro.props;
interface Props {
  url: string;
}
const linkClass =
  "inline-flex h-10 w-10 items-center justify-center gap-x-2 rounded-lg border border-transparent text-sm font-bold text-neutral-700 outline-none ring-zinc-500 hover:bg-neutral-500/10 focus:outline-none focus-visible:ring focus-visible:ring-zinc-500 dark:ring-zinc-200 dark:hover:bg-neutral-50/10";
---

<a class={linkClass} href={url} target="_blank" rel="noopener noreferrer">
  <slot />
</a>
```

/src/components/ui/icons/Icon.astro
```
---
import { Icons } from "./icons.ts";

interface Path {
  d: string;
  class?: string;
}

const { name } = Astro.props;

let icon = (Icons as any)[name] || {};

let paths: Path[] = icon.paths || [];
---

{
  icon ? (
    <svg
      class={icon.class}
      height={icon.height}
      viewBox={icon.viewBox}
      width={icon.width}
      fill={icon.fill}
      clip-rule={icon.clipRule}
      fill-rule={icon.fillRule}
      stroke={icon.stroke}
      stroke-width={icon.strokeWidth}
      stroke-linecap={icon.strokeLinecap}
      stroke-linejoin={icon.strokeLinejoin}
    ><title>{icon.title}</title>
      {paths.map((path: Path) => (
        <path d={path.d} class={path.class || ""} />
      ))}
    </svg>
  ) : (
    "Icon not found"
  )
}
```

/src/components/ui/icons/icons.ts
```
export const Icons = {
  groups: {
    paths: [
      {
        d: "m150-400 82-80-82-82-80 82 80 80Zm573-10 87-140 88 140H723Zm-243-70q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T600-600q0 50-34.5 85T480-480Zm.351-180Q455-660 437.5-642.851t-17.5 42.5Q420-575 437.351-557.5t43 17.5Q506-540 523-557.351t17-43Q540-626 522.851-643t-42.5-17ZM480-600ZM0-240v-53q0-39.464 42-63.232T150.398-380q12.158 0 23.38.5T196-377.273q-8 17.273-12 34.842-4 17.57-4 37.431v65H0Zm240 0v-65q0-65 66.5-105T480-450q108 0 174 40t66 105v65H240Zm570-140q67.5 0 108.75 23.768T960-293v53H780v-65q0-19.861-3.5-37.431Q773-360 765-377.273q11-1.727 22.171-2.227 11.172-.5 22.829-.5Zm-330.2-10Q400-390 350-366q-50 24-50 61v5h360v-6q0-36-49.5-60t-130.7-24Zm.2 90Z",
      },
    ],
    class: "mt-1 h-8 w-8 flex-shrink-0 fill-orange-400 dark:fill-orange-300",
    width: 48,
    height: 48,
    viewBox: "0 -960 960 960",
  },
  books: {
    paths: [
      {
        d: "M343-420h225v-60H343v60Zm0-90h395v-60H343v60Zm0-90h395v-60H343v60Zm-83 400q-24 0-42-18t-18-42v-560q0-24 18-42t42-18h560q24 0 42 18t18 42v560q0 24-18 42t-42 18H260Zm0-60h560v-560H260v560ZM140-80q-24 0-42-18t-18-42v-620h60v620h620v60H140Zm120-740v560-560Z",
      },
    ],
    class: "mt-1 h-8 w-8 flex-shrink-0 fill-orange-400 dark:fill-orange-300",
    width: 48,
    height: 48,
    viewBox: "0 -960 960 960",
  },
  verified: {
    paths: [
      {
        d: "m346-60-76-130-151-31 17-147-96-112 96-111-17-147 151-31 76-131 134 62 134-62 77 131 150 31-17 147 96 111-96 112 17 147-150 31-77 130-134-62-134 62Zm27-79 107-45 110 45 67-100 117-30-12-119 81-92-81-94 12-119-117-28-69-100-108 45-110-45-67 100-117 28 12 119-81 94 81 92-12 121 117 28 70 100Zm107-341Zm-43 133 227-225-45-41-182 180-95-99-46 45 141 140Z",
      },
    ],
    class: "mt-1 h-8 w-8 flex-shrink-0 fill-orange-400 dark:fill-orange-300",
    width: 48,
    height: 48,
    viewBox: "0 -960 960 960",
  },
  frame: {
    paths: [
      {
        d: "M480-480q-51 0-85.5-34.5T360-600q0-50 34.5-85t85.5-35q50 0 85 35t35 85q0 51-35 85.5T480-480Zm-.351-60Q505-540 522.5-557.149t17.5-42.5Q540-625 522.649-642.5t-43-17.5Q454-660 437-642.649t-17 43Q420-574 437.149-557t42.5 17ZM240-240v-76q0-27 17.5-47.5T300-397q42-22 86.943-32.5 44.942-10.5 93-10.5Q528-440 573-429.5t87 32.5q25 13 42.5 33.5T720-316v76H240Zm240-140q-47.546 0-92.773 13T300-328v28h360v-28q-42-26-87.227-39-45.227-13-92.773-13Zm0-220Zm0 300h180-360 180ZM140-80q-24 0-42-18t-18-42v-172h60v172h172v60H140ZM80-648v-172q0-24 18-42t42-18h172v60H140v172H80ZM648-80v-60h172v-172h60v172q0 24-18 42t-42 18H648Zm172-568v-172H648v-60h172q24 0 42 18t18 42v172h-60Z",
      },
    ],
    class: "mt-1 h-8 w-8 flex-shrink-0 fill-orange-400 dark:fill-orange-300",
    width: 48,
    height: 48,
    viewBox: "0 -960 960 960",
  },
  tools: {
    paths: [
      {
        d: "M764-80q-6 0-11-2t-10-7L501-331q-5-5-7-10t-2-11q0-6 2-11t7-10l85-85q5-5 10-7t11-2q6 0 11 2t10 7l242 242q5 5 7 10t2 11q0 6-2 11t-7 10l-85 85q-5 5-10 7t-11 2Zm0-72 43-43-200-200-43 43 200 200ZM195-80q-6 0-11.5-2T173-89l-84-84q-5-5-7-10.5T80-195q0-6 2-11t7-10l225-225h85l38-38-175-175h-57L80-779l99-99 125 125v57l175 175 130-130-67-67 56-56H485l-18-18 128-128 18 18v113l56-56 169 169q15 15 23.5 34.5T870-600q0 20-6.5 38.5T845-528l-85-85-56 56-52-52-211 211v84L216-89q-5 5-10 7t-11 2Zm0-72 200-200v-43h-43L152-195l43 43Zm0 0-43-43 22 21 21 22Zm569 0 43-43-43 43Z",
      },
    ],
    class:
      "mt-2 h-6 w-6 flex-shrink-0 fill-neutral-700 hs-tab-active:fill-orange-400 dark:fill-neutral-300 dark:hs-tab-active:fill-orange-300 md:h-7 md:w-7",
    width: 48,
    height: 48,
    viewBox: "0 -960 960 960",
  },
  dashboard: {
    paths: [
      {
        d: "M510-570v-270h330v270H510ZM120-450v-390h330v390H120Zm390 330v-390h330v390H510Zm-390 0v-270h330v270H120Zm60-390h210v-270H180v270Zm390 330h210v-270H570v270Zm0-450h210v-150H570v150ZM180-180h210v-150H180v150Zm210-330Zm180-120Zm0 180ZM390-330Z",
      },
    ],
    class:
      "mt-2 h-6 w-6 flex-shrink-0 fill-neutral-700 hs-tab-active:fill-orange-400 dark:fill-neutral-300 dark:hs-tab-active:fill-orange-300 md:h-7 md:w-7",
    width: 48,
    height: 48,
    viewBox: "0 -960 960 960",
  },
  house: {
    paths: [
      {
        d: "M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819",
      },
    ],
    class:
      "h-6 w-6 flex-shrink-0 text-neutral-700 hs-tab-active:text-orange-400 dark:text-neutral-300 dark:hs-tab-active:text-orange-300 md:h-7 md:w-7",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor",
  },
  arrowUp: {
    paths: [
      {
        d: "m5 12 7-7 7 7",
      },
      {
        d: "M12 19V5",
      },
    ],
    class: "h-5 w-5 flex-shrink-0 text-orange-400 dark:text-orange-300",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor",
  },
  checkCircle: {
    paths: [
      {
        d: "M10 18a8 8 0 100-16 8 8 0 000 16zM13.707 8.293a1 1 0 00-1.414-1.414L9 10.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
      },
    ],
    class: "h-5 w-5 shrink-0",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    fillRule: "evenodd",
    clipRule: "evenodd",
  },
  bookmark: {
    paths: [
      {
        d: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z",
        class:
          "fill-current text-neutral-500 transition duration-300 group-hover:text-red-400 group-hover:dark:text-red-400",
      },
    ],
    class: "h-6 w-6 fill-none transition duration-300",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor",
  },
  arrowRight: {
    paths: [
      {
        d: "m9 18 6-6-6-6",
      },
    ],
    class:
      "h-4 w-4 flex-shrink-0 transition duration-300 group-hover:translate-x-1",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor",
  },
  facebook: {
    paths: [
      {
        d: "M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z",
      },
    ],
    class: "size-4 flex-shrink-0 fill-current",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
  },
  x: {
    paths: [
      {
        d: "M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z",
      },
    ],
    class: "size-4 flex-shrink-0 fill-current",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
  },
  linkedIn: {
    paths: [
      {
        d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
      },
    ],
    class: "size-4 flex-shrink-0 fill-current",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
  },
  share: {
    paths: [
      {
        d: "M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z",
      },
    ],
    class: "h-4 w-4 group-hover:text-neutral-700",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor",
  },
  github: {
    paths: [
      {
        d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z",
      },
    ],
    class:
      "w-4.5 h-4.5 transition flex-shrink-0 text-neutral-700 duration-300 group-hover:-translate-y-1",
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "currentColor",
  },
  arrowRightStatic: {
    paths: [
      {
        d: "m9 18 6-6-6-6",
      },
    ],
    class: "size-4 flex-shrink-0",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor",
  },
  openInNew: {
    paths: [
      {
        d: "m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25",
      },
    ],
    class: "ml-0.5 w-3 h-3 md:w-4 md:h-4 inline pb-0.5",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "3",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor",
  },
  accordionNotActive: {
    paths: [
      {
        d: "m6 9 6 6 6-6",
      },
    ],
    class:
      "block h-5 w-5 flex-shrink-0 text-neutral-600 group-hover:text-neutral-500 hs-accordion-active:hidden dark:text-neutral-400",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor",
  },
  accordionActive: {
    paths: [
      {
        d: "m18 15-6-6-6 6",
      },
    ],
    class:
      "hidden h-5 w-5 flex-shrink-0 text-neutral-600 group-hover:text-neutral-500 hs-accordion-active:block dark:text-neutral-400",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor",
  },
  xFooter: {
    paths: [
      {
        d: "M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z",
      },
    ],
    class:
      "h-4 w-4 flex-shrink-0 fill-current text-neutral-700 dark:text-neutral-400",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    title: "Twitter",
  },
  facebookFooter: {
    paths: [
      {
        d: "M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z",
      },
    ],
    class:
      "h-4 w-4 flex-shrink-0 fill-current text-neutral-700 dark:text-neutral-400",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    title: "Facebook",
  },
  githubFooter: {
    paths: [
      {
        d: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",
      },
    ],
    class:
      "h-4 w-4 flex-shrink-0 fill-current text-neutral-700 dark:text-neutral-400",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    title: "GitHub",
  },
  googleFooter: {
    paths: [
      {
        d: "M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z",
      },
    ],
    class:
      "h-4 w-4 flex-shrink-0 fill-current text-neutral-700 dark:text-neutral-400",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    title: "Google",
  },
  slackFooter: {
    paths: [
      {
        d: "M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z",
      },
    ],
    class:
      "h-4 w-4 flex-shrink-0 fill-current text-neutral-700 dark:text-neutral-400",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    title: "Slack",
  },
  quotation: {
    paths: [
      {
        d: "M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z",
      },
    ],
    class:
      "absolute start-0 top-0 h-16 w-16 -translate-x-6 -translate-y-8 transform text-neutral-300 dark:text-neutral-700",
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "currentColor",
  },
  question: {
    paths: [
      {
        d: "M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z",
      },
    ],
    class:
      "mt-1.5 h-6 w-6 flex-shrink-0 text-neutral-600 dark:text-neutral-400",
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor",
  },
  chatBubble: {
    paths: [
      {
        d: "M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155",
      },
    ],
    class:
      "mt-1.5 h-6 w-6 flex-shrink-0 text-neutral-600 dark:text-neutral-400",
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor",
  },
  mapPin: {
    paths: [
      {
        d: "M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z",
      },
      {
        d: "M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z",
      },
    ],
    class:
      "mt-1.5 h-6 w-6 flex-shrink-0 text-neutral-600 dark:text-neutral-400",
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor",
  },
  envelopeOpen: {
    paths: [
      {
        d: "M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z",
      },
    ],
    class:
      "mt-1.5 h-6 w-6 flex-shrink-0 text-neutral-600 dark:text-neutral-400",
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor",
  },
  earth: {
    paths: [
      {
        d: "m20.893 13.393-1.135-1.135a2.252 2.252 0 0 1-.421-.585l-1.08-2.16a.414.414 0 0 0-.663-.107.827.827 0 0 1-.812.21l-1.273-.363a.89.89 0 0 0-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 0 1-1.81 1.025 1.055 1.055 0 0 1-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 0 1-1.383-2.46l.007-.042a2.25 2.25 0 0 1 .29-.787l.09-.15a2.25 2.25 0 0 1 2.37-1.048l1.178.236a1.125 1.125 0 0 0 1.302-.795l.208-.73a1.125 1.125 0 0 0-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 0 1-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 0 1-1.458-1.137l1.411-2.353a2.25 2.25 0 0 0 .286-.76m11.928 9.869A9 9 0 0 0 8.965 3.525m11.928 9.868A9 9 0 1 1 8.965 3.525",
      },
    ],
    class: "w-4 h-4 flex-shrink-0",
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor",
  },
  guides: {
    paths: [
      {
        d: "M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25",
      },
    ],
    class: "mt-1 size-5 flex-shrink-0",
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor",
  },
  puzzle: {
    paths: [
      {
        d: "M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 0 1-1.125-1.125v-3.75ZM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-8.25ZM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-2.25Z",
      },
    ],
    class: "mt-1 size-5 flex-shrink-0",
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor",
  },
  rocket: {
    paths: [
      {
        d: "M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z",
      },
    ],
    class: "mt-1 size-5 flex-shrink-0",
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor",
  },
  hammer: {
    paths: [
      {
        d: "M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z",
      },
    ],
    class: "mt-1 size-5 flex-shrink-0",
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor",
  },
  sparks: {
    paths: [
      {
        d: "M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z",
      },
    ],
    class: "mt-1 size-5 flex-shrink-0",
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor",
  },
  community: {
    paths: [
      {
        d: "M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z",
      },
    ],
    class: "mt-1 size-5 flex-shrink-0",
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor",
  },
  chevronDown: {
    paths: [
      {
        d: "m19.5 8.25-7.5 7.5-7.5-7.5",
      },
    ],
    class: "ms-2 size-4 flex-shrink-0",
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor",
  },
};
```

/src/components/ui/avatars/AvatarTestimonialSection.astro
```
---
const { src, alt } = Astro.props;

interface Props {
  src: string;
  alt: string;
}
---

<div class="flex-shrink-0">
  <img
    class="size-8 rounded-full sm:h-[2.875rem] sm:w-[2.875rem]"
    src={src}
    alt={alt}
    loading="lazy"
  />
</div>
```

/src/components/ui/avatars/AvatarBlog.astro
```
---
// Import necessary components
import { Image } from "astro:assets";

import type { CollectionEntry } from "astro:content";

const { blogEntry } = Astro.props;

interface Props {
  blogEntry: CollectionEntry<"blog">;
}
---

<div class="flex-shrink-0">
  <Image
    class="size-[46px] rounded-full border-2 border-neutral-50"
    src={blogEntry.data.authorImage}
    alt={blogEntry.data.authorImageAlt}
    draggable={"false"}
    format={"avif"}
  />
</div>
```

/src/components/ui/avatars/Avatar.astro
```
---
import { Image } from "astro:assets";

const { src, alt } = Astro.props;

interface Props {
  src: string;
  alt: string;
}
---

<Image
  class="inline-block h-8 w-8 rounded-full ring-2 ring-neutral-50 dark:ring-zinc-800"
  src={src}
  alt={alt}
  inferSize
  loading={"eager"}
/>
```

/src/components/ui/avatars/AvatarBlogLarge.astro
```
---
// Import necessary components
import { Image } from "astro:assets";

import type { CollectionEntry } from "astro:content";

const { blogEntry } = Astro.props;

interface Props {
  blogEntry: CollectionEntry<"blog">;
}
---

<div class="flex-shrink-0">
  <Image
    class="size-10 rounded-full sm:h-14 sm:w-14"
    src={blogEntry.data.authorImage}
    alt={blogEntry.data.authorImageAlt}
    draggable={"false"}
    format={"avif"}
  />
</div>
```

/src/components/ui/starlight/Head.astro
```
---
import type { Props } from '@astrojs/starlight/props';
import StarlightHead from '@astrojs/starlight/components/Head.astro';
import VtbotStarlight from 'astro-vtbot/components/starlight/Base.astro';

// https://docs.astro.build/en/guides/view-transitions/#fallback-control
Astro.props.viewTransitionsFallback = "animate";
---

<VtbotStarlight {...Astro.props}>
  <StarlightHead {...Astro.props}><slot /></StarlightHead>
  <script>
    import "@scripts/lenisSmoothScroll.js";
  </script>
</VtbotStarlight>

<style is:global>
  /* Slow down Chrome's default animation */
  ::view-transition-group(root) {
    animation-duration: 250ms;
  }

  /* Do not slide over the sidebars */
  ::view-transition-group(*) {
    overflow: hidden;
  }
</style>
```

/src/components/ui/starlight/SiteTitle.astro
```
---
import mainLogo from "@images/starlight/marioguerra-logo.svg?raw";
import docsLogo from "@images/starlight/docs_logo.svg?raw";
import type { Props } from "@astrojs/starlight/props";


const main = "/";
const locale = Astro.props.locale ? Astro.props.locale + "/" : "";
const docs = "/" + locale + "welcome-to-docs/";
---

<span class="site-title flex">
  <a class="main-logo" href={main} set:html={mainLogo} aria-label="marioguerra.xyz" />
  <a class="docs-logo" href={docs} set:html={docsLogo} aria-label="marioguerra.xyz Docs" />
</span>

<style>
  .site-title {
    gap: 1rem;
    margin-right: 1rem;
  }
  .site-title a {
    display: flex;
  }
  
  .flex {
    display: flex;
    align-items: center;
  }
  .site-title a:focus-visible {
    outline: 0;
  }
  .site-title a:focus-visible > :global(*) {
    transform: translateY(calc(.1rem * -1));
    transition: transform 250ms cubic-bezier(0.33, 1, 0.68, 1);
  }

  .site-title :global(svg) {
    width: auto;
    height: auto;
  }
  .site-title a:hover :global(svg) {
    transform: translateY(calc(.1rem * -1));
    transition: transform 250ms cubic-bezier(0.33, 1, 0.68, 1);
  }
</style>
```

/src/components/ui/starlight/MobileMenuFooter.astro
```
---
import LanguageSelect from "@astrojs/starlight/components/LanguageSelect.astro";
import SocialIcons from "@astrojs/starlight/components/SocialIcons.astro";
import ThemeSelect from "src/components/ui/starlight/ThemeSelectMobile.astro";
import type { Props } from "@astrojs/starlight/props";
---

<div class="mobile-preferences sl-flex">
  <div class="sl-flex social-icons">
    <SocialIcons {...Astro.props}><slot /></SocialIcons>
  </div>
  <ThemeSelect />
  <LanguageSelect {...Astro.props}><slot /></LanguageSelect>
</div>

<style>
  .social-icons {
    margin-inline-end: auto;
    gap: 1rem;
    align-items: center;
    padding-block: 1rem;
  }
  .social-icons:empty {
    display: none;
  }
  .mobile-preferences {
    justify-content: space-between;
    flex-wrap: wrap;
    border-top: 1px solid var(--sl-color-gray-6);
    column-gap: 1rem;
    padding: 0.5rem 0;
    align-items: center;
  }
</style>
```

/src/components/ui/starlight/ThemeSelect.astro
```
<!-- Dark Theme Toggle Button -->
<button
  type="button"
  aria-label="Dark Theme Toggle"
  id="dark-theme-toggle"
  class="group flex h-8 w-8 items-center justify-center rounded-full font-medium text-neutral-600 outline-none ring-zinc-500 transition duration-300 hover:bg-neutral-200 hover:text-orange-400"
  data-hs-theme-click-value="dark"
>
  <svg
    class="h-4 w-4 flex-shrink-0"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
  </svg>
</button>

<!-- Light Theme Toggle Button -->
<button
  type="button"
  aria-label="Light Theme Toggle"
  id="light-theme-toggle"
  class="group flex hidden h-8 w-8 items-center justify-center rounded-full font-medium text-neutral-400 outline-none ring-zinc-500 transition duration-300 hover:bg-neutral-700 hover:text-orange-400"
  data-hs-theme-click-value="light"
>
  <svg
    class="h-4 w-4 flex-shrink-0"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <circle cx="12" cy="12" r="4"></circle>
    <path d="M12 8a2 2 0 1 0 4 4"></path>
    <path d="M12 2v2"></path>
    <path d="M12 20v2"></path>
    <path d="m4.93 4.93 1.41 1.41"></path>
    <path d="m17.66 17.66 1.41 1.41"></path>
    <path d="M2 12h2"></path>
    <path d="M20 12h2"></path>
    <path d="m6.34 17.66-1.41 1.41"></path>
    <path d="m19.07 4.93-1.41 1.41"></path>
  </svg>
</button>

<script>
  // Define the Theme type
  type Theme = "light" | "dark";

  // Function to set the theme
  function setTheme(theme: Theme): void {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("starlight-theme", theme);
    updateButtons(theme);
  }

  // Function to update the button visibility
  function updateButtons(theme: Theme): void {
    const darkButton = document.getElementById("dark-theme-toggle");
    const lightButton = document.getElementById("light-theme-toggle");

    if (theme === "dark") {
      darkButton?.classList.add("hidden");
      lightButton?.classList.remove("hidden");
    } else {
      darkButton?.classList.remove("hidden");
      lightButton?.classList.add("hidden");
    }
  }

  // Event listeners for theme toggle buttons
  document
    .getElementById("dark-theme-toggle")
    ?.addEventListener("click", () => {
      setTheme("dark");
    });

  document
    .getElementById("light-theme-toggle")
    ?.addEventListener("click", () => {
      setTheme("light");
    });

  // Initial theme setup
  document.addEventListener("DOMContentLoaded", () => {
    const storedTheme = localStorage.getItem("starlight-theme") as Theme | null;
    const theme: Theme =
      storedTheme ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light");
    setTheme(theme);
  });
</script>
```

/src/components/ui/starlight/ThemeSelectMobile.astro
```
<!-- Dark Theme Toggle Button -->
<button
  type="button"
  aria-label="Dark Theme Toggle"
  id="dark-theme-toggle-mobile"
  class="group flex h-8 w-8 items-center justify-center rounded-full font-medium text-neutral-600 outline-none ring-zinc-500 transition duration-300 hover:bg-neutral-200 hover:text-orange-400"
  data-hs-theme-click-value="dark"
>
  <svg
    class="h-4 w-4 flex-shrink-0"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
  </svg>
</button>

<!-- Light Theme Toggle Button -->
<button
  type="button"
  aria-label="Light Theme Toggle"
  id="light-theme-toggle-mobile"
  class="group flex hidden h-8 w-8 items-center justify-center rounded-full font-medium text-neutral-400 outline-none ring-zinc-500 transition duration-300 hover:bg-neutral-700 hover:text-orange-400"
  data-hs-theme-click-value="light"
>
  <svg
    class="h-4 w-4 flex-shrink-0"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <circle cx="12" cy="12" r="4"></circle>
    <path d="M12 8a2 2 0 1 0 4 4"></path>
    <path d="M12 2v2"></path>
    <path d="M12 20v2"></path>
    <path d="m4.93 4.93 1.41 1.41"></path>
    <path d="m17.66 17.66 1.41 1.41"></path>
    <path d="M2 12h2"></path>
    <path d="M20 12h2"></path>
    <path d="m6.34 17.66-1.41 1.41"></path>
    <path d="m19.07 4.93-1.41 1.41"></path>
  </svg>
</button>

<script>
  // Define the Theme type
  type Theme = "light" | "dark";

  // Function to set the theme
  function setTheme(theme: Theme): void {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("starlight-theme", theme);
    updateButtons(theme);
  }

  // Function to update the button visibility
  function updateButtons(theme: Theme): void {
    const darkButton = document.getElementById("dark-theme-toggle-mobile");
    const lightButton = document.getElementById("light-theme-toggle-mobile");

    if (theme === "dark") {
      darkButton?.classList.add("hidden");
      lightButton?.classList.remove("hidden");
    } else {
      darkButton?.classList.remove("hidden");
      lightButton?.classList.add("hidden");
    }
  }

  // Event listeners for theme toggle buttons
  document
    .getElementById("dark-theme-toggle-mobile")
    ?.addEventListener("click", () => {
      setTheme("dark");
    });

  document
    .getElementById("light-theme-toggle-mobile")
    ?.addEventListener("click", () => {
      setTheme("light");
    });

  // Initial theme setup
  document.addEventListener("DOMContentLoaded", () => {
    const storedTheme = localStorage.getItem("starlight-theme") as Theme | null;
    const theme: Theme =
      storedTheme ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light");
    setTheme(theme);
  });
</script>
```

/src/components/sections/misc/Authentication.astro
```
---
// Import the necessary components from their respective component files
import LoginModal from "@components/ui/forms/LoginModal.astro";
import RegisterModal from "@components/ui/forms/RegisterModal.astro";
import RecoverModal from "@components/ui/forms/RecoverModal.astro";
import LoginBtn from "@components/ui/buttons/LoginBtn.astro";
---

<!-- Login Button -->
<LoginBtn />
<!-- Login Modal -->
<LoginModal />
<!-- Register Modal -->
<RegisterModal />
<!-- Password Recovery Modal -->
<RecoverModal />
```

/src/components/sections/misc/FAQ.astro
```
---
// Import the necessary AccordionItem component and JSON data
import AccordionItem from "@components/ui/blocks/AccordionItem.astro";

// Define props from Astro
const { title, faqs } = Astro.props;

// Define TypeScript interface for props
interface Faq {
  question: string;
  answer: string;
}

interface FaqGroup {
  subTitle?: string;
  faqs: Faq[];
}

interface Props {
  title: string;
  faqs: FaqGroup;
}
// Define a helper function to generate ids dynamically.
const makeId = (base: any, index: any) => `${base}${index + 1}`;
---

<!-- Main container that holds all content. Customized for different viewport sizes. -->
<section
  class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full"
>
  <div class="grid gap-10 md:grid-cols-5">
    <div class="md:col-span-2">
      <div class="max-w-xs">
        <h2
          class="text-2xl font-bold text-neutral-800 dark:text-neutral-200 md:text-4xl md:leading-tight"
        >
          <Fragment set:html={title} />
        </h2>
        <p class="mt-1 hidden text-neutral-600 dark:text-neutral-400 md:block">
          {faqs.subTitle}
        </p>
      </div>
    </div>
    <!-- FAQ accordion items -->
    <div class="md:col-span-3">
      <div
        class="hs-accordion-group divide-y divide-neutral-200 dark:divide-neutral-700"
      >
        {
          faqs.faqs.map((question, i) => {
            // Generate ids dynamically for each FAQ accordion item.
            let id = makeId(
              "hs-basic-with-title-and-arrow-stretched-heading-",
              i
            );
            let collapseId = makeId(
              "hs-basic-with-title-and-arrow-stretched-collapse",
              i
            );

            return (
              <AccordionItem
                {...question}
                id={id}
                collapseId={collapseId}
                first={i === 0}
              />
            );
          })
        }
      </div>
    </div>
  </div>
</section>
<!--Import the necessary Accordion plugin-->
<!--https://preline.co/plugins/html/accordion.html-->
<script>
  import "@preline/accordion/index.js";
</script>```

/src/components/sections/misc/ContactSection.astro
```
---
// Import the necessary dependencies.
import AuthBtn from "@components/ui/buttons/AuthBtn.astro";
import ContactIconBlock from "@components/ui/blocks/ContactIconBlock.astro";
import TextInput from "@components/ui/forms/input/TextInput.astro";
import EmailContactInput from "@components/ui/forms/input/EmailContactInput.astro";
import PhoneInput from "@components/ui/forms/input/PhoneInput.astro";
import TextAreaInput from "@components/ui/forms/input/TextAreaInput.astro";
import Icon from "@components/ui/icons/Icon.astro";

// Define the variables that will be used in this component
const title: string = "Contact us";
const subTitle: string =
  "Have questions or want to discuss a project? Reach out, and let's craft the perfect solution with our tools and services.";
const formTitle: string = "Fill in the form below";
const formSubTitle: string = "We'll get back to you in 1-2 business days.";
---

<!-- Contact Us -->
<section class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
  <div class="mx-auto max-w-2xl lg:max-w-5xl">
    <div class="text-center">
      <h1
        class="text-balance text-2xl font-bold tracking-tight text-neutral-800 dark:text-neutral-200 md:text-4xl md:leading-tight"
      >
        {title}
      </h1>
      <p class="mt-1 text-pretty text-neutral-600 dark:text-neutral-400">
        {subTitle}
      </p>
    </div>

    <div class="mt-12 grid items-center gap-6 lg:grid-cols-2 lg:gap-16">
      <div class="flex flex-col rounded-xl p-4 sm:p-6 lg:p-8">
        <h2
          class="mb-8 text-xl font-bold text-neutral-700 dark:text-neutral-300"
        >
          {formTitle}
        </h2>
        <!-- Form for user input with various input fields.-->
        <!-- Each field utilizes a different input component for the specific type of input (text, email, phone, and textarea)-->
        <form>
          <div class="grid gap-4">
            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <TextInput
                id="hs-firstname-contacts"
                label="First Name"
                name="hs-firstname-contacts"
              />
              <TextInput
                id="hs-lastname-contacts"
                label="Last Name"
                name="hs-firstname-contacts"
              />
            </div>
            <EmailContactInput id="hs-email-contacts" />
            <PhoneInput id="hs-phone-number" />
            <TextAreaInput
              id="hs-about-contacts"
              label="Details"
              name="hs-about-contacts"
            />
          </div>

          <div class="mt-4 grid">
            <AuthBtn title="Send Message" />
          </div>

          <div class="mt-3 text-center">
            <p class="text-sm text-neutral-600 dark:text-neutral-400">
              {formSubTitle}
            </p>
          </div>
        </form>
      </div>

      <!--ContactIconBlocks are used to display different methods of contacting, including visiting office, email, browsing knowledgebase, and FAQ.-->
      <div class="divide-y divide-neutral-300 dark:divide-neutral-700">
        <ContactIconBlock
          heading="Knowledgebase"
          content="Browse through all of our knowledgebase articles."
          isLinkVisible={true}
          linkTitle="Visit guides & tutorials"
          linkURL="#"
          isArrowVisible={true}
          ><Icon name="question" />
        </ContactIconBlock>

        <ContactIconBlock
          heading="FAQ"
          content="Explore our FAQ for quick, clear answers to common queries."
          isLinkVisible={true}
          linkTitle="Visit FAQ"
          linkURL="#"
          isArrowVisible={true}
          ><Icon name="chatBubble" />
        </ContactIconBlock>

        <ContactIconBlock
          heading="Visit our office"
          content="UK ScrewFast"
          isAddressVisible={true}
          addressContent="72 Union Terrace, E10 4PE London"
          ><Icon name="mapPin" />
        </ContactIconBlock>

        <ContactIconBlock
          heading="Contact us by email"
          content="Prefer the written word? Drop us an email at"
          isLinkVisible={true}
          linkTitle="support@screwfast.uk"
          linkURL="#"
          ><Icon name="envelopeOpen" />
        </ContactIconBlock>
      </div>
    </div>
  </div>
</section>
```

/src/components/sections/landing/HeroSectionAlt.astro
```
---
// Import the necessary dependencies
import GithubBtn from "@components/ui/buttons/GithubBtn.astro";

// Define props from Astro
const { title, subTitle, url } = Astro.props;

const btnTitle = Astro.currentLocale === "fr" ? "Continuer avec Github" : "Continue with Github";

// Define TypeScript interface for props
interface Props {
  title: string;
  subTitle?: string;
  url?: string;
}
---

<section
  class="relative mx-auto max-w-[85rem] px-4 pb-24 pt-10 sm:px-6 lg:px-8"
>
  <!-- Decorating SVG elements -->
  <div
    class="absolute left-0 top-[55%] scale-90 md:top-[20%] xl:left-[10%] xl:top-[25%]"
  >
    <svg
      width="64"
      height="64"
      fill="none"
      stroke-width="1.5"
      color="#ea580c"
      viewBox="0 0 24 24"
    >
      <path
        fill="#ea580c"
        stroke="#ea580c"
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M12 23a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM3 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM3 18a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
      ></path>
      <path
        stroke="#ea580c"
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M21 7.353v9.294a.6.6 0 0 1-.309.525l-8.4 4.666a.6.6 0 0 1-.582 0l-8.4-4.666A.6.6 0 0 1 3 16.647V7.353a.6.6 0 0 1 .309-.524l8.4-4.667a.6.6 0 0 1 .582 0l8.4 4.667a.6.6 0 0 1 .309.524Z"
      ></path>
      <path
        stroke="#ea580c"
        stroke-linecap="round"
        stroke-linejoin="round"
        d="m3.528 7.294 8.18 4.544a.6.6 0 0 0 .583 0l8.209-4.56M12 21v-9"
      ></path>
    </svg>
  </div>
  <div class="absolute left-[85%] top-0 scale-75">
    <svg
      width="64"
      height="64"
      fill="none"
      stroke-width="1.5"
      color="#fbbf24"
      viewBox="0 0 24 24"
    >
      <path
        stroke="#fbbf24"
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
      ></path>
      <path
        fill="#fbbf24"
        stroke="#fbbf24"
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M5 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path>
      <path
        stroke="#fbbf24"
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M5 10.5V9M5 15v-1.5"></path>
      <path
        fill="#fbbf24"
        stroke="#fbbf24"
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M5 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM19 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
      ></path>
      <path
        stroke="#fbbf24"
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M10.5 19H9M15 19h-1.5"></path>
    </svg>
  </div>
  <div
    class="absolute bottom-[5%] left-[60%] scale-[.6] xl:bottom-[15%] xl:left-[35%]"
  >
    <svg
      width="64"
      height="64"
      fill="none"
      stroke-width="1.5"
      color="#a3a3a3"
      viewBox="0 0 24 24"
    >
      <path
        stroke="#a3a3a3"
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M5.164 17c.29-1.049.67-2.052 1.132-3M11.5 7.794A16.838 16.838 0 0 1 14 6.296M4.5 22a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"
      ></path>
      <path
        stroke="#a3a3a3"
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M9.5 12a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5ZM19.5 7a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"
      ></path>
    </svg>
  </div>
  <!-- Hero Section Heading -->
  <div class="mx-auto mt-5 max-w-xl text-center">
    <h2
      class="block text-balance text-4xl font-bold leading-tight tracking-tight text-neutral-800 dark:text-neutral-200 md:text-5xl lg:text-6xl"
    >
      {title}
    </h2>
  </div>
  <!-- Hero Section Sub-heading -->
  <div class="mx-auto mt-5 max-w-3xl text-center">
    {
      subTitle && (
        <p class="text-pretty text-lg text-neutral-600 dark:text-neutral-400">
          {subTitle}
        </p>
      )
    }
  </div>
  <!-- Github Button -->
  {
    url && (
      <div class="mt-8 flex justify-center gap-3">
        <GithubBtn url={url} title={btnTitle}/>
      </div>
    )
  }
</section>
```

/src/components/sections/landing/ClientsSection.astro
```
---
// Define props from Astro
const { title, subTitle } = Astro.props;

// Define TypeScript interface for props
interface Props {
  title: string;
  subTitle?: string;
}
---

<section
  class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full"
>
  <!-- Title and description -->
  <div class="mx-auto mb-6 w-full space-y-1 text-center sm:w-1/2 lg:w-1/3">
    <h2
      class="text-balance text-2xl font-bold leading-tight text-neutral-800 dark:text-neutral-200 sm:text-3xl"
    >
      {title}
    </h2>
    {
      subTitle && (
        <p class="text-pretty leading-tight text-neutral-600 dark:text-neutral-400">
          {subTitle}
        </p>
      )
    }
  </div>
  <div
    class="flex flex-col items-center justify-center gap-y-2 sm:flex-row sm:gap-x-12 sm:gap-y-0 lg:gap-x-24"
  >
    <!-- Clients Group SVGs -->
    <!-- First -->
    <svg
      class="mx-auto h-auto w-32 py-3 sm:mx-0 lg:w-40 lg:py-5"
      viewBox="0 0 1033.583 318.543"
      ><title>
        Logo is used for demonstration purposes only and should be replaced in customized versions.
      </title>
      <path
        d="M-26.912 496.696c-2.812-5.011-7.55-7.83-13.31-7.83-7.824 0-15.236 5.018-15.236 13.383 0 7.21 5.357 10.577 11.255 13.108l3.563 1.514c4.47 1.853 8.926 4.254 8.926 9.807 0 5.422-3.974 10.094-9.54 10.094-5.559 0-10.087-4.124-10.015-9.814l-6.525 1.37c1.102 8.307 7.62 14.486 15.999 14.486 9.259 0 16.534-6.727 16.534-16.136 0-8.64-5.488-12.691-12.835-15.568l-3.7-1.442c-3.23-1.24-7.21-3.36-7.21-7.42 0-4.521 4.529-7.34 8.646-7.34 3.915 0 6.382 1.651 8.3 4.88l5.148-3.092zm50.62-7.83c-14.825 0-27.104 12.15-27.104 26.974 0 15.373 12.142 26.974 27.104 26.974 14.955 0 27.11-11.601 27.11-26.974 0-14.824-12.286-26.974-27.11-26.974zm0 47.906c-11.184 0-20.651-9.128-20.651-20.932 0-11.392 8.508-20.932 20.65-20.932 12.15 0 20.659 9.54 20.659 20.932 0 11.804-9.474 20.932-20.658 20.932zm86.722-44.402c-3.909-2.401-8.515-3.504-13.043-3.504-15.236 0-27.516 11.947-27.516 27.248 0 14.962 12.221 26.7 26.968 26.7 4.528 0 9.61-1.312 13.59-3.648v-7.614c-3.849 3.432-8.716 5.357-13.793 5.357-11.53 0-20.318-9.677-20.318-21.004 0-11.457 8.854-21.134 20.455-21.134 4.868 0 9.944 1.788 13.657 5.083v-7.484zm35.782-2.401h-6.453v51.742h6.453V489.97zm32.227 51.742h27.789v-5.898h-21.343V516.25h20.723v-5.898h-20.723v-14.486h21.343v-5.898h-27.79v51.742zm68.113-45.844h12.286v-5.898h-31.02v5.898h12.287v45.844h6.447v-45.844zm61.38 32.873 5.898 12.971h6.935l-24.703-53.934-24.703 53.934h6.93l5.898-12.971h23.744zm-2.683-5.899h-18.387l9.2-20.932 9.187 20.932zm62.978-26.145c-2.805-5.011-7.549-7.83-13.31-7.83-7.817 0-15.23 5.018-15.23 13.383 0 7.21 5.351 10.577 11.25 13.108l3.569 1.514c4.463 1.853 8.92 4.254 8.92 9.807 0 5.422-3.981 10.094-9.54 10.094-5.56 0-10.088-4.124-10.016-9.814l-6.518 1.37c1.096 8.307 7.614 14.486 15.986 14.486 9.265 0 16.54-6.727 16.54-16.136 0-8.64-5.487-12.691-12.834-15.568l-3.706-1.442c-3.224-1.24-7.204-3.36-7.204-7.42 0-4.521 4.528-7.34 8.646-7.34 3.915 0 6.38 1.651 8.306 4.88l5.141-3.092zm65.425 45.015h27.783v-5.898h-21.343V516.25h20.73v-5.898h-20.73v-14.486h21.343v-5.898h-27.783v51.742zm53.974-51.742v32.735c0 11.393 7.073 20.11 18.942 20.11 11.868 0 18.941-8.717 18.941-20.11V489.97h-6.453v30.536c0 8.443-2.538 16.267-12.488 16.267s-12.489-7.824-12.489-16.267V489.97h-6.453zm82.461 29.238c7.478-.894 12.417-7.067 12.417-14.485 0-4.933-2.466-9.814-6.792-12.352-4.118-2.336-9.057-2.401-13.65-2.401h-7.824v51.742h6.453v-21.89h2.669l15.236 21.89h7.823l-16.332-22.504zm-9.396-23.477h1.716c6.382 0 14.061 1.168 14.061 9.272 0 8.228-7.138 9.461-13.728 9.461h-2.049V495.73zm72.726-6.864c-14.817 0-27.104 12.15-27.104 26.974 0 15.373 12.15 26.974 27.104 26.974 14.969 0 27.111-11.601 27.111-26.974 0-14.824-12.28-26.974-27.11-26.974zm0 47.906c-11.177 0-20.65-9.128-20.65-20.932 0-11.392 8.508-20.932 20.65-20.932 12.15 0 20.658 9.54 20.658 20.932 0 11.804-9.474 20.932-20.658 20.932zm58.248-16.75h3.7c9.813 0 18.12-4.182 18.12-15.092 0-9.474-4.94-14.961-20.86-14.961h-7.413v51.742h6.453v-21.689zm0-24.292h1.71c6.38 0 14.067.966 14.067 9.063 0 8.235-7.138 9.468-13.728 9.468h-2.049v-18.53zm75.65 33.01 5.898 12.971h6.93l-24.704-53.934-24.703 53.934h6.936l5.898-12.971h23.744zm-2.676-5.899h-18.387l9.187-20.932 9.2 20.932zm36.213 18.87h27.79v-5.898h-21.343V516.25h20.73v-5.898h-20.73v-14.486h21.343v-5.898h-27.79v51.742zm85.274-12.971 5.898 12.971h6.93l-24.704-53.934-24.703 53.934h6.936l5.899-12.971h23.744zm-2.682-5.899H865.05l9.2-20.932 9.194 20.932"
        style="fill:#6B7280;fill-opacity:1;fill-rule:nonzero;stroke:none"
        transform="translate(98.847 -259.733)"></path>
      <path
        d="m46.878 308.584-16.352 30.354c-3.817-3.04-8.045-5.448-12.69-7.243-4.64-1.788-9.507-2.701-14.57-2.747-4.04 0-7.915 1.05-11.64 3.152-3.72 2.094-5.717 5.24-5.971 9.435.091 2.903 1.135 5.278 3.145 7.144 1.996 1.86 4.404 3.354 7.197 4.477 2.792 1.135 5.428 2.055 7.895 2.753l10.485 3.001c11.256 2.897 20.508 7.484 27.757 13.755 7.25 6.27 10.995 15.399 11.242 27.385.105 7.608-1.05 14.961-3.458 22.067-2.407 7.105-6.707 13.265-12.893 18.472-6.29 4.959-13.324 8.573-21.101 10.838a83.427 83.427 0 0 1-23.77 3.347c-10.023-.046-19.758-1.56-29.2-4.542-9.447-2.994-18.23-7.203-26.366-12.632l17.61-31.56a77.4 77.4 0 0 0 16.822 11.014c6.094 2.93 12.638 4.45 19.659 4.56 5.05.033 9.579-1.174 13.585-3.614 3.993-2.447 6.114-6.297 6.335-11.556-.143-3.634-1.644-6.564-4.508-8.808-2.865-2.238-6.218-4.007-10.062-5.292-3.836-1.292-7.294-2.323-10.374-3.073-8.646-2.193-16.169-4.744-22.55-7.66-6.394-2.924-11.347-7.067-14.87-12.45-3.517-5.376-5.305-12.86-5.357-22.439.085-10.244 2.453-19.13 7.099-26.674 4.646-7.549 11.046-13.389 19.216-17.538 8.156-4.15 17.558-6.251 28.2-6.31 8.156.046 16.645 1.155 25.447 3.34 8.815 2.193 16.821 5.208 24.038 9.044M126.403 333.346v117.435h-41.1V333.346H51.334v-33.153h109.03v33.153h-33.961zm121.493 55.69 49.687 61.705h-51.155l-38.79-57.914h-.425v57.914H166.12V300.154h61.438c10.511-.02 19.888 1.605 28.122 4.868 8.24 3.275 14.746 8.325 19.51 15.163 4.769 6.845 7.203 15.608 7.3 26.309-.039 10.622-3 19.829-8.886 27.632-5.886 7.804-14.453 12.77-25.708 14.91zm-40.683-58.92v37.544h3.987c4.574.072 9.03-.339 13.356-1.226 4.333-.894 7.908-2.689 10.753-5.403 2.832-2.708 4.307-6.76 4.411-12.143-.104-5.39-1.579-9.435-4.41-12.143-2.846-2.707-6.421-4.508-10.754-5.402a61.505 61.505 0 0 0-13.356-1.227h-3.987"
        style="fill:#6B7280;fill-opacity:1;fill-rule:nonzero;stroke:none"
        transform="translate(98.847 -259.733)"></path>
      <path
        d="M396.617 424.616h-56.61l-10.91 26.165H285.5l60.798-150.588h44.872l59.552 150.588h-43.827l-10.277-26.165zm-11.112-29.956-16.769-47.938h-.424l-16.978 47.938h34.171zm109.683-6.44v32.357h5.246c4.228.104 8.861-.046 13.879-.463 5.037-.411 9.382-1.755 13.05-4.013 3.68-2.251 5.598-6.094 5.78-11.51-.17-5.925-2.088-10.029-5.774-12.319-3.674-2.297-8.098-3.576-13.272-3.843-5.167-.274-10.074-.346-14.707-.209h-4.202zm22.23 62.313h-63.323V299.945h58.71c14.25-.17 25.584 2.767 34.021 8.79 8.43 6.022 12.743 16.142 12.945 30.353.072 6.838-1.226 12.887-3.902 18.152-2.681 5.26-7.177 9.461-13.5 12.606v.398c11.256 1.507 19.464 5.631 24.638 12.358 5.168 6.727 7.726 15.386 7.654 25.982-.17 10.453-2.975 18.753-8.41 24.9-5.436 6.146-12.483 10.543-21.135 13.18-8.645 2.642-17.884 3.934-27.698 3.869zM495.188 329.9v29.16h4.62c5.696.182 10.76-.64 15.196-2.5 4.437-1.86 6.78-5.878 7.021-12.084-.085-4.515-1.331-7.816-3.72-9.904-2.4-2.082-5.408-3.4-9.043-3.954a64.784 64.784 0 0 0-11.138-.718h-2.936M683.94 424.616h-56.617L616.42 450.78h-43.605l60.798-150.588h44.878l59.546 150.588H694.21l-10.27-26.165zm-11.112-29.956-16.776-47.938h-.417l-16.991 47.938h34.184M817.732 366.688h81.567c.026 10.916-.965 21.239-2.962 30.954-1.99 9.729-6.394 19.242-13.18 28.566-7.856 10.23-17.363 17.728-28.52 22.491-11.158 4.763-23.386 7.119-36.696 7.067-16.684-.105-31.326-3.472-43.939-10.094-12.606-6.617-22.452-15.869-29.538-27.75-7.086-11.882-10.688-25.76-10.805-41.642.111-16.41 3.745-30.66 10.903-42.764 7.164-12.11 17.147-21.5 29.969-28.175 12.821-6.668 27.783-10.048 44.884-10.146 16.332-.006 30.576 3.497 42.719 10.505 12.142 7.014 21.662 17.559 28.566 31.633l-38.993 15.575c-2.871-7.282-7.197-13.076-13.004-17.37-5.8-4.293-12.86-6.492-21.18-6.596-9.017.163-16.58 2.57-22.674 7.223-6.094 4.645-10.688 10.577-13.774 17.78-3.093 7.203-4.639 14.714-4.645 22.537.013 7.928 1.618 15.464 4.808 22.602 3.191 7.132 7.882 12.965 14.074 17.5 6.2 4.528 13.807 6.877 22.844 7.027 9.076-.006 16.606-2.192 22.615-6.564 6.01-4.372 9.513-10.91 10.518-19.6h-33.557v-30.759"
        style="fill:#6B7280;fill-opacity:1;fill-rule:nonzero;stroke:none"
        transform="translate(98.847 -259.733)"></path>
    </svg>
    <!-- Second -->
    <svg
      class="mx-auto h-auto w-32 py-3 sm:mx-0 lg:w-40 lg:py-5"
      viewBox="0 0 150 40"
      fill="none"
      ><title>
        Logo is used for demonstration purposes only and should be replaced in customized versions.
      </title>
      <path
        stroke="#6B7280"
        stroke-miterlimit="3.864"
        stroke-width=".851"
        d="M.492 38.141h149.015M.492.911h149.015"></path>
      <path fill="#6B7280" d="M.545 33.488h27.878V5.565H.545v27.923Z"></path>
      <path
        fill="#d4d4d4"
        d="m2.176 22.319 12.286-14.24 12.286 14.24H18.65l-4.188-5.026-4.188 5.026H2.176ZM2.176 23.436h8.098v1.395h8.377v-1.395h8.097v5.584H2.176v-5.584Z"
      ></path>
      <path
        fill="#6B7280"
        fill-rule="evenodd"
        d="M56.51 25.334c0-2.875 1.218-5.637 4.462-5.637 3.244 0 4.463 2.762 4.463 5.637 0 2.737-1.219 5.499-4.463 5.499-3.244 0-4.462-2.762-4.462-5.5Zm-3.612 0c0 4.738 2.99 8.534 8.074 8.534s8.074-3.796 8.074-8.534c0-4.878-2.99-8.673-8.074-8.673s-8.074 3.795-8.074 8.673ZM85.25 22.573c-.438-3.796-3.473-5.913-7.084-5.913-5.085 0-8.074 3.797-8.074 8.673 0 4.74 2.989 8.535 8.074 8.535 4.024 0 6.853-2.624 7.222-6.717H81.89c-.275 2.163-1.518 3.68-3.724 3.68-3.245 0-4.464-2.761-4.464-5.498 0-2.875 1.219-5.637 4.464-5.637 1.794 0 3.357 1.244 3.588 2.877h3.496ZM86.688 33.477h3.611V26.39h6.648v7.086h3.612V17.05h-3.612v6.304H90.3V17.05h-3.612v16.426ZM106.898 33.477h3.611V20.089h4.923V17.05h-13.457v3.038h4.923v13.388ZM116.847 33.477h3.611V17.05h-3.611v16.426ZM123.397 33.477h12.468v-3.035h-8.856v-4.027h7.959v-2.808h-7.959V20.09h8.672V17.05h-12.284v16.426Z"
        clip-rule="evenodd"></path>
      <path
        fill="#6B7280"
        d="M137.873 33.477h3.611V26.69h6.878v-2.807h-6.878V20.09h7.937V17.05h-11.548v16.426ZM37.73 33.49h3.608v-7.085h6.648v7.086h3.612V17.065h-3.612v6.303h-6.648v-6.303h-3.607v16.426Z"
      ></path>
    </svg>
    <!-- Third -->
    <svg
      class="mx-auto h-auto w-32 py-3 sm:mx-0 lg:w-40 lg:py-5"
      viewBox="0 0 150 39"
      fill="none"
      ><title>
        Logo is used for demonstration purposes only and should be replaced in customized versions.
      </title>
      <g clip-path="url(#n)">
        <path
          fill="#6B7280"
          d="M66.454 14.419v12.11s4.413 1.098 11.32 1.098c6.855 0 11.316-1.093 11.316-1.093V22.42s-4.793.943-11.364.943c-3.19 0-5.304-.375-6.44-.489 0-.992.003-3.792 0-4.793 1.272-.127 3.412-.493 6.488-.493 6.397.026 11.316.974 11.316.974v-4.146s-4.39-1.093-11.316-1.093c-6.977 0-11.32 1.097-11.32 1.097ZM94.464 27.356h4.955V13.55h-4.955v13.806ZM28.155 27.356h4.954V13.55h-4.954v13.806ZM56.17 27.351s-3.583-2.896-8.852-5.627c-1.468-.76-2.71-1.267-3.863-1.734v7.361h-4.797V13.576s4.06.786 8.669 3.176c5.269 2.73 8.847 5.378 8.847 5.378v-8.58h4.81V27.35H56.17ZM24.843 16.678l-12.29 11.045L.245 16.669l3.68-3.351s7.518 7.235 8.628 8.27c1.11-1.035 8.624-8.27 8.624-8.27l3.666 3.36ZM110.599 13.558h6.899c2.516-.004 4.098-1.284 4.679-1.896.586-.612 1.94-2.14 1.94-3.92V2.007c0-1.061.861-1.922 1.922-1.922h7.48c1.062 0 1.923.86 1.923 1.927v7.48a1.923 1.923 0 0 1-1.923 1.922h-5.736c-1.779 0-3.308 1.354-3.919 1.94-.612.58-1.892 2.162-1.897 4.68v6.898h-11.368V13.558Z"
        ></path>
        <mask
          id="b"
          width="27"
          height="28"
          x="123"
          y="12"
          maskUnits="userSpaceOnUse"
          style="mask-type:luminance"
        >
          <path fill="#fff" d="M123.16 12.746h26.765v26.843H123.16V12.746Z"
          ></path>
        </mask>
        <g mask="url(#b)">
          <path
            fill="#6B7280"
            d="M149.755 19.605c0-1.826-.739-3.46-1.914-4.649-1.175-1.192-2.827-1.913-4.653-1.913-3.736 0-6.715 3.045-6.715 6.676 0 .664.288 1.922.288 2.46a5.18 5.18 0 0 1-5.177 5.177h-5.545a1.92 1.92 0 0 0-1.922 1.922v7.48c0 1.062.861 1.922 1.922 1.922h7.48c1.062 0 1.923-.86 1.923-1.922v-5.544a5.177 5.177 0 0 1 5.177-5.178c.537 0 1.796.289 2.455.289 3.635 0 6.681-2.98 6.681-6.72Z"
          ></path>
        </g>
      </g>
      <defs>
        <clipPath id="n">
          <path fill="#fff" d="M0 0h150v38.764H0z"></path>
        </clipPath>
      </defs>
    </svg>
    <!-- Fourth -->
    <svg
      class="mx-auto h-auto w-24 py-3 sm:mx-0 md:w-32 lg:w-40 lg:py-5"
      viewBox="0 0 100 42"
      fill="none"
      ><title>
        Logo is used for demonstration purposes only and should be replaced in customized versions.
      </title>
      <path
        fill="#6B7280"
        d="M77.466.414v6.157H36.751v8.093h1.356V7.885h40.729V.415h-1.37ZM58.693 19.465v5.686H55.4v3.195h-3.085v3.556H14.367v1.314h39.248v-3.57h3.1v-3.181h3.292v-7h-1.314Z"
      ></path>
      <path
        fill="#6B7280"
        d="M14.491 10.002h9.366l1.26.083s7.567.442 9.255 7.387c1.687 6.945-3.473 12.244-11.013 12.327-7.54.083-8.965 0-8.965 0v-1.162l.997-.083c.221-.042.428-.07.65-.097.207-.041.415-.083.609-.194.235-.124.4-.36.484-.608.083-.236.083-.47.083-.72 0-.083.014-.152.014-.235V13.184a5.03 5.03 0 0 0-.028-.457c-.014-.138-.028-.277-.055-.415a.9.9 0 0 0-.153-.304 1.063 1.063 0 0 0-.304-.305c-.124-.083-.249-.124-.387-.18a5.89 5.89 0 0 0-.969-.262 15.285 15.285 0 0 0-.844-.139v-1.12Zm6.074 1.425V26.09s-.139 1.605.968 2.048c1.107.442 3.085.401 4.233.11 1.149-.29 5.34-1.577 5.05-8.812-.29-7.222-6.17-8.093-7.512-8.093-1.342 0-2.74.083-2.74.083ZM40.459 11.178v-1.176h9.712s6.848-.139 6.516 5.395c-.332 5.534-7.07 5.825-7.706 5.797-.637-.028-2.31 0-2.31 0v4.634c0 .36 0 .72-.014 1.08 0 .276-.014.58.097.843.11.263.373.43.622.526.277.11.567.18.872.221.152.028.318.042.484.056.608.055.968 0 .968 0v1.231h-9.13v-1.162l1.369-.11c.124-.015.25-.042.36-.07.207-.055.442-.124.608-.249.167-.124.25-.318.305-.512.055-.193.11-.429.11-.65V12.921s.111-.609-.276-1.08c-.388-.497-2.587-.663-2.587-.663Zm6.24.166v8.467h1.535s4.565.166 4.648-4.013c.07-4.178-2.822-4.786-6.184-4.454ZM62.47 9.988h9.462s5.783-.29 6.835 3.597c1.051 3.901-2.601 5.672-3.016 5.838-.402.166-1.854.692-1.854.692l4.994 6.35s1.107 1.397 2.2 1.826c1.107.429 1.909.318 1.909.318v1.176h-5.728l-3.25-4.565-3.446-4.303h-2.02v5.907s-.082 1.204.623 1.453c.692.25 2.31.318 2.31.318V29.8h-9.061v-1.176s1.868-.042 2.393-.457c.47-.36.43-1.065.43-1.065v-14.29s.027-.831-.485-1.163c-.512-.318-2.31-.484-2.31-.484l.013-1.176Zm6.1 1.356v8.231h1.854s4.538.028 4.621-4.385c0-.346-.014-.706-.083-1.038a3.554 3.554 0 0 0-.277-.844 3.231 3.231 0 0 0-.415-.65 2.313 2.313 0 0 0-.54-.498 5.42 5.42 0 0 0-.608-.36 3.257 3.257 0 0 0-.609-.235 4.942 4.942 0 0 0-.65-.152c-.194-.028-.387-.056-.58-.07-.153-.013-.291-.027-.444-.027-.207 0-.415.014-.622.014-.263.014-.526.014-.789.014h-.858Z"
      ></path>
      <path
        fill="#6B7280"
        d="M25.089 13.432s-9.684-.608-17.64 7.277C-.504 28.581.008 38.35.008 38.35h1.508s-.498-9.145 7.014-16.657c7.526-7.526 16.518-6.89 16.518-6.89l.042-1.37ZM18.088 38.473l-1.065.07c-.014-.61-.249-.914-.72-.914-.525 0-.802.47-.802 1.411 0 .54.07.913.222 1.107.138.194.346.29.608.29.416 0 .678-.276.775-.816l.982.056c-.069.525-.262.913-.58 1.19-.319.262-.72.4-1.19.4-.581 0-1.038-.193-1.398-.594-.36-.401-.54-.941-.54-1.647 0-.65.18-1.19.527-1.604.345-.415.816-.623 1.424-.623 1.038 0 1.62.553 1.758 1.674ZM22.46 41.267c-.58 0-1.038-.22-1.356-.664-.318-.442-.484-.968-.484-1.59 0-.637.166-1.163.484-1.591.319-.43.789-.637 1.384-.637.608 0 1.065.222 1.37.678.304.457.456.968.456 1.55 0 .636-.152 1.162-.47 1.59-.319.443-.775.664-1.384.664Zm.028-3.638c-.54 0-.803.47-.803 1.411 0 .94.263 1.411.803 1.411.512 0 .774-.47.774-1.41 0-.942-.262-1.412-.774-1.412ZM30.484 36.855v4.344h-.872l-1.701-2.933v.152c.014.069.014.138.014.194v2.6h-.789v-4.344h1.093l1.48 2.56c-.014-.125-.014-.222-.014-.29v-2.27h.789v-.014ZM36.516 37.809l-.871.29c-.111-.345-.36-.511-.734-.511-.4 0-.608.124-.608.387 0 .11.041.194.11.263.083.069.25.138.512.194.443.083.761.18.969.262.207.097.373.236.525.443.139.208.208.429.208.678 0 .387-.152.733-.457 1.024-.304.29-.747.429-1.342.429-.442 0-.83-.097-1.134-.305a1.419 1.419 0 0 1-.623-.899l.941-.208c.11.402.401.61.885.61.236 0 .402-.042.526-.14.11-.096.166-.193.166-.317a.343.343 0 0 0-.152-.29c-.11-.07-.304-.14-.595-.194-.553-.111-.94-.277-1.176-.47-.235-.195-.346-.485-.346-.873 0-.387.139-.705.415-.982.277-.263.664-.4 1.149-.4.83 0 1.383.331 1.632 1.009ZM42.23 36.855v.857h-1.08v3.486h-1.023v-3.486h-1.08v-.858h3.183ZM45.84 39.483V41.2h-1.023v-4.344h1.909c.346 0 .636.041.844.124.207.083.387.235.525.456.139.222.208.457.208.734 0 .526-.25.899-.747 1.12l.802 1.923h-1.12l-.664-1.715h-.734v-.014Zm0-1.854v1.107h.623c.207 0 .346-.014.443-.041a.476.476 0 0 0 .249-.194.563.563 0 0 0 .11-.332.563.563 0 0 0-.11-.332.47.47 0 0 0-.236-.18c-.082-.028-.248-.028-.47-.028h-.609ZM54.611 36.855v2.697c0 .443-.055.761-.152.983-.097.207-.29.387-.553.525-.263.139-.609.208-1.024.208-.415 0-.747-.056-.996-.18a1.201 1.201 0 0 1-.553-.526c-.125-.221-.18-.553-.18-.996v-2.698h1.107v2.698c0 .235.013.401.055.512.041.11.11.194.235.263a.82.82 0 0 0 .429.097c.194 0 .346-.028.47-.097a.505.505 0 0 0 .236-.25c.041-.11.055-.276.055-.525v-2.698h.871v-.014ZM61.086 38.473l-1.065.07c-.014-.61-.25-.914-.72-.914-.525 0-.802.47-.802 1.411 0 .54.07.913.221 1.107.139.194.346.29.61.29.414 0 .677-.276.774-.816l.982.056c-.07.525-.263.913-.581 1.19-.318.262-.72.4-1.19.4-.58 0-1.037-.193-1.397-.594-.36-.401-.54-.941-.54-1.647 0-.65.18-1.19.526-1.604.346-.415.816-.623 1.425-.623 1.038 0 1.619.553 1.757 1.674ZM66.578 36.855v.857H65.5v3.486h-1.037v-3.486h-1.08v-.858h3.196ZM70.175 36.855h-1.01v4.344h1.01v-4.344ZM74.838 41.267c-.581 0-1.038-.22-1.356-.664-.318-.442-.484-.968-.484-1.59 0-.637.166-1.163.484-1.591.318-.43.788-.637 1.383-.637.609 0 1.066.222 1.37.678.304.457.456.968.456 1.55 0 .636-.152 1.162-.47 1.59-.304.443-.775.664-1.383.664Zm.027-3.638c-.54 0-.802.47-.802 1.411 0 .94.263 1.411.802 1.411.512 0 .775-.47.775-1.41 0-.942-.263-1.412-.775-1.412ZM82.862 36.855v4.344h-.872l-1.702-2.933v.152c.014.069.014.138.014.194v2.6h-.788v-4.344h1.093l1.48 2.56c-.014-.125-.014-.222-.014-.29v-2.27h.789v-.014Z"
      ></path>
    </svg>
  </div>
</section>
```

/src/components/sections/landing/CTASection.astro
```
---
// Define props for the CTA section
interface Props {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

// Destructure props from Astro
const {
  title,
  description,
  buttonText = "Contact Me", // Default button text if not provided
  buttonLink = "/contact"  // Default button link if not provided
} = Astro.props as Props;
---

<section class="py-12 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white">
  <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h2 class="text-3xl font-extrabold mb-4">{title}</h2>
    <p class="text-lg mb-8">{description}</p>
    <a 
      href={buttonLink} 
      class="inline-block bg-yellow-500 text-gray-900 px-8 py-3 rounded-full font-medium hover:bg-yellow-400 transition-all"
    >
      {buttonText}
    </a>
  </div>
</section>
```

/src/components/sections/landing/HeroSection.astro
```
---
// Import the necessary dependencies
import { Image } from "astro:assets";
import PrimaryCTA from "@components/ui/buttons/PrimaryCTA.astro";
import SecondaryCTA from "@components/ui/buttons/SecondaryCTA.astro";
import ReviewComponent from "@components/ui/blocks/ReviewComponent.astro";

// Define props from Astro
const {
  title,
  subTitle,
  primaryBtn,
  primaryBtnURL,
  secondaryBtn,
  secondaryBtnURL,
  withReview,
  avatars,
  starCount,
  rating,
  reviews,
  src,
  alt
} = Astro.props;

// Define TypeScript interface for props
interface Props {
  title: string;
  subTitle?: string;
  primaryBtn?: string;
  primaryBtnURL?: string;
  secondaryBtn?: string;
  secondaryBtnURL?: string;
  withReview?: boolean;
  avatars?: Array<string>;
  starCount?: number;
  rating?: string;
  reviews?: string;
  src?: any;
  alt?: string;
}
---

<!-- Wrap the entire Hero Section in a slot="hero" container -->
<div slot="hero">
  <!-- Defining a grid container that holds all the content -->
  <section
    class="mx-auto grid max-w-[85rem] gap-4 px-4 py-14 sm:px-6 md:grid-cols-2 md:items-center md:gap-8 lg:px-8 2xl:max-w-full"
  >
    <!-- Title and description -->
    <div>
      <!-- Each h1 and p tag renders a portion of the title and subTitle defined above -->
      <h1
        class="block text-balance text-3xl font-bold tracking-tight text-neutral-800 dark:text-neutral-200 sm:text-4xl lg:text-6xl lg:leading-tight"
      >
        <!-- About Fragment: https://docs.astro.build/en/basics/astro-syntax/#fragments -->
        <Fragment set:html={title} />
      </h1>
      {subTitle &&
      <p
        class="mt-3 text-pretty text-lg leading-relaxed text-neutral-700 dark:text-neutral-400 lg:w-4/5"
      >
        {subTitle}
      </p>
    }
      <!-- Action Button Section: This section includes two CTAs with their own styles and URL -->
      <div class="mt-7 grid w-full gap-3 sm:inline-flex">
        {primaryBtn && 
        <PrimaryCTA title={primaryBtn} url={primaryBtnURL} />
        }
        {secondaryBtn && 
        <SecondaryCTA title={secondaryBtn} url={secondaryBtnURL} />
        }
      </div>

      <!-- Review Section: This section presents avatars, review ratings and the number of reviews -->
      { withReview ? (
      <ReviewComponent avatars={avatars} starCount={starCount} rating={rating} reviews={reviews} />
      ) : "" }

    </div>
    <!-- Hero Image Section -->
    <div class="flex w-full">
        <div class="top-12 overflow-hidden">
      {src && alt &&
      <Image
          src={src}
          alt={alt}
          class="h-full w-full object-cover object-center"
          draggable={"false"}
          loading={"eager"}
          format={"avif"}
      />
      }
      </div>
    </div>
  </section>
</div>
```

/src/components/sections/landing/BlogSection.astro
```
---
const { posts, title, description } = Astro.props;
const finalTitle = title ?? "Recent Blog Posts";
const finalDescription = description ?? "";

// Debugging: Confirm posts array structure and contents
---

<section class="py-12 bg-white dark:bg-neutral-800">
    <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-extrabold text-gray-900 dark:text-white mb-8">{finalTitle}</h2>
        {finalDescription && <p class="text-gray-600 dark:text-gray-300 mb-4">{finalDescription}</p>}
        
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.isArray(posts) && posts.map((post) => (
                <article class="bg-white dark:bg-neutral-700 rounded-lg shadow-md overflow-hidden">
                    <img 
                        src={post.image}
                        alt={post.title}
                        class="w-full h-48 object-cover"
                    />
                    <div class="p-6">
                        <h3 class="text-xl font-semibold text-gray-900 dark:text-white">{post.title}</h3>
                        <p class="mt-2 text-gray-600 dark:text-gray-300">{post.description}</p>
                        <a href={post.url} class="mt-4 inline-block text-primary-600 dark:text-primary-400 hover:underline">Read more</a>
                    </div>
                </article>
            ))}
        </div>
    </div>
</section>
```

/src/components/sections/landing/AboutMeSection.astro
```
---
import { Image } from "astro:assets";
import PrimaryCTA from "@components/ui/buttons/PrimaryCTA.astro";

// Props definition
interface Props {
  title: string;
  subTitle?: string;
  primaryBtn: string;
  primaryBtnURL: string;
  src: any;
  alt: string;
}

// Destructure props
const {
  title,
  subTitle,
  primaryBtn,
  primaryBtnURL,
  src,
  alt,
} = Astro.props as Props;
---
<div slot="about-me" class="bg-customBlue">
  <section
    class="w-full px-4 py-14 sm:px-6 md:grid md:grid-cols-2 md:items-center md:gap-8 md:py-20 lg:px-8"
  >
    <!-- Hero Image Section -->
    <div class="flex justify-center items-center w-full">
      <div class="top-12 overflow-hidden">
        {src && alt &&
          <Image
            src={src}
            alt={alt}
            class="h-50 w-50 rounded-full object-cover object-center"
            draggable={"false"}
            loading={"eager"}
            format={"avif"}
          />
        }
      </div>
    </div>

    <!-- Title and description -->
    <div>
      <h1
        class="block text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-6xl lg:leading-tight"
      >
        {title}
      </h1>
      {subTitle &&
        <p
          class="mt-3 text-lg leading-relaxed text-white lg:w-4/5"
        >
          {subTitle}
        </p>
      }
      <!-- Action Button Section -->
      <div class="mt-7">
        <PrimaryCTA title={primaryBtn} url={primaryBtnURL} />
      </div>
    </div>
  </section>
</div>
```

/src/components/sections/testimonials/TestimonialsSection.astro
```
---
import TestimonialItem from "./TestimonialItem.astro";
import StatsGrid from "../../ui/blocks/StatsGrid.astro";

const {
  title,
  subTitle,
  testimonials,
  statistics
} = Astro.props;

interface Props {
  title: string;
  subTitle?: string;
  testimonials?: Testimonial[];
  statistics?: StatProps[];
}

// TypeScript type for testimonials
type Testimonial = {
  content: string;
  author: string;
  role: string;
  avatarSrc: string;
};

// TypeScript type for stats.
type StatProps = {
  count: string;
  description: string;
};
---

<section
  class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full"
>
  <!-- Container for the testimonials -->
  <div
    class="lg:grid lg:grid-cols-12 lg:items-center lg:justify-between lg:gap-16"
  >
    <div class="lg:col-span-5 lg:col-start-1">
      <!-- Title and Subtitle -->
      <div class="mb-8">
        <h2
          class="mb-2 text-3xl font-bold text-neutral-800 dark:text-neutral-200 lg:text-4xl"
        >
          {title}
        </h2>
        {subTitle &&
        <p class="text-neutral-600 dark:text-neutral-400">
          {subTitle}
        </p>
      }
      </div>

      <!-- Generate a blockquote for each testimonial in the testimonials array by mapping over the array. -->
      { testimonials &&
        testimonials.map((testimonial) => (
        <TestimonialItem content={testimonial.content} author={testimonial.author} role={testimonial.role} avatarSrc={testimonial.avatarSrc} />
        ))
      }
    </div>
{ statistics &&
    <div class="mt-10 lg:col-span-6 lg:col-end-13 lg:mt-0">
      <div class="space-y-6 sm:space-y-8">
        <ul
          class="grid grid-cols-2 divide-x-2 divide-y-2 divide-neutral-300 overflow-hidden dark:divide-neutral-700"
        >
          <!-- Generate a list item for each stat in the statistics array by mapping over the array. -->
          {
            statistics.map((stat, index) => (
            <StatsGrid count={stat.count} description={stat.description} index={index}/>
            ))
          }
        </ul>
      </div>
    </div>
  }
  </div>
</section>
```

/src/components/sections/testimonials/TestimonialItem.astro
```
---
import { Image } from "astro:assets";
import Icon from "../../ui/icons/Icon.astro";

const { content, author, role, avatarSrc } = Astro.props;

interface Props {
  content: string;
  author: string;
  role: string;
  avatarSrc: string;
}
---

<blockquote class="relative">
  <Icon name="quotation" />

  <div class="relative z-10">
    <p class="text-xl italic text-neutral-800 dark:text-neutral-200">
      {content}
    </p>
  </div>

  <div class="mt-6">
    <div class="flex items-center">
      <div class="flex-shrink-0">
        <Image
          class="h-8 w-8 rounded-full"
          src={avatarSrc}
          alt="Avatar Description"
          loading={"eager"}
          inferSize
        />
      </div>
      <div class="ms-4 grow">
        <div class="font-bold text-neutral-800 dark:text-neutral-200">
          {author}
        </div>
        <div class="text-xs text-neutral-500">{role}</div>
      </div>
    </div>
  </div>
</blockquote>
```

/src/components/sections/testimonials/TestimonialsSectionAlt.astro
```
---
// Import AvatarTestimonialSection component for use in this module
import AvatarTestimonialSection from "../../ui/avatars/AvatarTestimonialSection.astro";

// Define props from Astro
const { title, testimonials } = Astro.props;

// Define TypeScript interface for Testimonial
interface Testimonial {
  content: string;
  author: string;
  role: string;
  avatarSrc: string;
  avatarAlt: string;
}

// Define TypeScript interface for props
interface Props {
  title: string;
  testimonials: Testimonial[];
}
---
<!-- Main div that wraps the testimonials section -->
<section
  class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full"
  id="testimonials"
>
  <!-- Title of the testimonials section -->
  <div class="mb-6 w-3/4 max-w-2xl sm:mb-10 md:mb-16 lg:w-1/2">
    <h2
      class="text-balance text-2xl font-bold text-neutral-800 dark:text-neutral-200 sm:text-3xl lg:text-4xl"
    >
      {title}
    </h2>
  </div>

  <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
    <!-- Looping through each testimonial data and rendering it -->
    {
      testimonials.map((testimonial) => (
        <div class="flex h-auto">
          <div class="flex flex-col rounded-xl bg-neutral-50 dark:bg-neutral-700">
            <div class="flex-auto p-4 md:p-6">
              <!-- Testimonial content -->
              <p class="text-pretty text-base italic text-neutral-600 dark:text-neutral-300 md:text-lg">
                {testimonial.content}
              </p>
            </div>

            <div class="rounded-b-xl bg-neutral-300/30 p-4 dark:bg-neutral-900/30 md:px-7">
              <div class="flex items-center">
                <AvatarTestimonialSection
                  src={testimonial.avatarSrc}
                  alt={testimonial.avatarAlt}
                />

                <div class="ms-3 grow">
                  <p class="text-sm font-bold text-neutral-800 dark:text-neutral-200 sm:text-base">
                    {testimonial.author}
                  </p>
                  <p class="text-xs text-neutral-600 dark:text-neutral-400">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))
    }
  </div>
</section>
```

/src/components/sections/navbar&footer/FooterSection.astro
```
---
// Import the necessary dependencies
import FooterSocialLink from "@components/ui/links/FooterSocialLink.astro";
import EmailFooterInput from "@components/ui/forms/input/EmailFooterInput.astro";
import enStrings from "@utils/navigation.ts";
import frStrings from "@utils/fr/navigation.ts";
import Icon from "@components/ui/icons/Icon.astro";
import BrandLogo from "@components/BrandLogo.astro";
import { SITE } from "@data/constants";

// Select the correct translation based on the page's lang prop:
const strings = Astro.currentLocale === "fr" ? frStrings : enStrings;

// Define the variables that will be used in this component
const sectionThreeTitle: string = Astro.currentLocale === "fr" ? "Rester à jour" : "Stay up to date";
const sectionThreeContent: string = Astro.currentLocale === "fr" ? "Restez informé des derniers outils et des offres exclusives." :
  "Stay updated with the latest tools and exclusive deals.";
const crafted: string = Astro.currentLocale === "fr" ? "Fabriqué par" : "Crafted by";
---

<footer class="w-full bg-neutral-300 dark:bg-neutral-900">
  <div
    class="mx-auto w-full max-w-[85rem] px-4 py-10 sm:px-6 lg:px-16 lg:pt-20 2xl:max-w-screen-2xl"
  >
    <div class="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-5">
      <div class="col-span-full lg:col-span-1">
        <!-- Brand Logo -->
        <BrandLogo class="h-auto w-32" />
      </div>
      <!-- An array of links for Product and Company sections -->
      {
        strings.footerLinks.map((section) => (
          <div class="col-span-1">
            <h3 class="font-bold text-neutral-800 dark:text-neutral-200">
              {section.section}
            </h3>
            <ul class="mt-3 grid space-y-3">
              {section.links.map((link, index) => (
                <li>
                  <a
                    href={link.url}
                    class="inline-flex gap-x-2 rounded-lg text-neutral-600 outline-none ring-zinc-500 transition duration-300 hover:text-neutral-500 focus-visible:ring dark:text-neutral-400 dark:ring-zinc-200 dark:hover:text-neutral-300 dark:focus:outline-none"
                  >
                    {link.name}
                  </a>
                  {section.section === "Company" && index === 2 ? (
                    <span class="ms-1 inline rounded-lg bg-orange-500 px-2 py-1 text-xs font-bold text-neutral-50">
                      We're hiring!
                    </span>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
        ))
      }

      <div class="col-span-2">
        <h3 class="font-bold text-neutral-800 dark:text-neutral-200">
          {sectionThreeTitle}
        </h3>

        <form>
          <EmailFooterInput />
          <p class="mt-3 text-sm text-neutral-600 dark:text-neutral-400">
            {sectionThreeContent}
          </p>
        </form>
      </div>
    </div>

    <div
      class="mt-9 grid gap-y-2 sm:mt-12 sm:flex sm:items-center sm:justify-between sm:gap-y-0"
    >
      <div class="flex items-center justify-between">
        <p class="text-sm text-neutral-600 dark:text-neutral-400">
          © <span id="current-year"></span> {SITE.title}. {crafted}
          <a
            class="rounded-lg font-medium underline underline-offset-2 outline-none ring-zinc-500 transition duration-300 hover:text-neutral-700 hover:decoration-dashed focus:outline-none focus-visible:ring dark:ring-zinc-200 dark:hover:text-neutral-300"
            href="https://www.gulamoff.dev/"
            target="_blank"
            rel="noopener noreferrer">gulamoff</a
          >.
        </p>
      </div>

      <!-- Social Brands -->
      <div>
        <FooterSocialLink url={strings.socialLinks.facebook}
          ><Icon name="facebookFooter" />
        </FooterSocialLink>

        <FooterSocialLink url={strings.socialLinks.x}
          ><Icon name="xFooter" /></FooterSocialLink
        >

        <FooterSocialLink url={strings.socialLinks.github}
          ><Icon name="githubFooter" />
        </FooterSocialLink>

        <FooterSocialLink url={strings.socialLinks.google}
          ><Icon name="googleFooter" />
        </FooterSocialLink>

        <FooterSocialLink url={strings.socialLinks.slack}
          ><Icon name="slackFooter" />
        </FooterSocialLink>
      </div>
    </div>

    <script>
      const year = new Date().getFullYear();
      const element = document.getElementById("current-year");
      element!.innerText = year.toString();
    </script>
  </div>
</footer>
```

/src/components/sections/navbar&footer/Navbar.astro
```
---
//Import relevant dependencies
import ThemeIcon from "@components/ThemeIcon.astro";
import NavLink from "@components/ui/links/NavLink.astro";
import Authentication from "../misc/Authentication.astro";
import enStrings from "@utils/navigation.ts";
import frStrings from "@utils/fr/navigation.ts";
import BrandLogo from "@components/BrandLogo.astro";
import LanguagePicker from "@components/ui/LanguagePicker.astro";

// Select the correct translation based on the page's lang prop:
const strings = Astro.currentLocale === "fr" ? frStrings : enStrings;
const homeUrl = Astro.currentLocale === "fr" ? "/fr" : "/";
---

<!-- Main header component -->
<header
  class="sticky inset-x-0 top-4 z-50 flex w-full flex-wrap text-sm md:flex-nowrap md:justify-start"
>
  <!-- Navigation container -->
  <nav
    class="relative mx-2 w-full rounded-[36px] border border-yellow-100/40 bg-yellow-50/60 px-4 py-3 backdrop-blur-md dark:border-neutral-700/40 dark:bg-neutral-800/80 dark:backdrop-blur-md md:flex md:items-center md:justify-between md:px-6 md:py-0 lg:px-8 xl:mx-auto"
    aria-label="Global"
  >
    <div class="flex items-center justify-between">
      <!-- Brand logo -->
      <a
        class="flex-none rounded-lg text-xl font-bold outline-none ring-zinc-500 focus-visible:ring dark:ring-zinc-200 dark:focus:outline-none"
        href={homeUrl}
        aria-label="Brand"
      >
        <BrandLogo class="h-auto w-24" />
      </a>
      <!-- Collapse toggle for smaller screens -->
      <div class="ml-auto mr-5 md:hidden">
        <button
          type="button"
          class="hs-collapse-toggle flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-neutral-600 transition duration-300 hover:bg-neutral-200 disabled:pointer-events-none disabled:opacity-50 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:outline-none"
          data-hs-collapse="#navbar-collapse-with-animation"
          aria-controls="navbar-collapse-with-animation"
          aria-label="Toggle navigation"
        >
          <svg
            class="h-[1.25rem] w-[1.25rem] flex-shrink-0 hs-collapse-open:hidden"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <line x1="3" x2="21" y1="6" y2="6"></line>
            <line x1="3" x2="21" y1="12" y2="12"></line>
            <line x1="3" x2="21" y1="18" y2="18"></line>
          </svg>
          <svg
            class="hidden h-[1.25rem] w-[1.25rem] flex-shrink-0 hs-collapse-open:block"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M18 6 6 18"></path>
            <path d="m6 6 12 12"></path>
          </svg>
        </button>
      </div>
      <!-- ThemeIcon component specifically for smaller screens -->
      <span class="inline-block md:hidden">
        <ThemeIcon />
      </span>
    </div>
    <!-- Contains navigation links -->
    <div
      id="navbar-collapse-with-animation"
      class="hs-collapse hidden grow basis-full overflow-hidden transition-all duration-300 md:block"
    >
      <!-- Navigation links container -->
      <div
        class="mt-5 flex flex-col gap-x-0 gap-y-4 md:mt-0 md:flex-row md:items-center md:justify-end md:gap-x-4 lg:gap-x-7 md:gap-y-0 md:ps-7"
      >
        <!-- Navigation links and Authentication component -->
        {strings.navBarLinks.map(link => (
          <NavLink url={link.url} name={link.name} />
        ))}

        <Authentication />
        <LanguagePicker />
        <!-- ThemeIcon component specifically for larger screens -->
        <span class="hidden md:inline-block">
          <ThemeIcon />
        </span>
      </div>
    </div>
  </nav>
</header>
<!-- Theme Appearance script to manage light/dark modes -->
<script is:inline>
  const HSThemeAppearance = {
    init() {
      const defaultTheme = "default";
      let theme = localStorage.getItem("hs_theme") || defaultTheme;

      if (document.querySelector("html").classList.contains("dark")) return;
      this.setAppearance(theme);
    },
    _resetStylesOnLoad() {
      const $resetStyles = document.createElement("style");
      $resetStyles.innerText = `*{transition: unset !important;}`;
      $resetStyles.setAttribute("data-hs-appearance-onload-styles", "");
      document.head.appendChild($resetStyles);
      return $resetStyles;
    },
    setAppearance(theme, saveInStore = true, dispatchEvent = true) {
      const $resetStylesEl = this._resetStylesOnLoad();

      if (saveInStore) {
        localStorage.setItem("hs_theme", theme);
      }

      if (theme === "auto") {
        theme = window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "default";
      }

      document.querySelector("html").classList.remove("dark");
      document.querySelector("html").classList.remove("default");
      document.querySelector("html").classList.remove("auto");

      document
        .querySelector("html")
        .classList.add(this.getOriginalAppearance());

      setTimeout(() => {
        $resetStylesEl.remove();
      });

      if (dispatchEvent) {
        window.dispatchEvent(
          new CustomEvent("on-hs-appearance-change", { detail: theme }),
        );
      }
    },
    getAppearance() {
      let theme = this.getOriginalAppearance();
      if (theme === "auto") {
        theme = window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "default";
      }
      return theme;
    },
    getOriginalAppearance() {
      const defaultTheme = "default";
      return localStorage.getItem("hs_theme") || defaultTheme;
    },
  };
  HSThemeAppearance.init();

  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", () => {
      if (HSThemeAppearance.getOriginalAppearance() === "auto") {
        HSThemeAppearance.setAppearance("auto", false);
      }
    });

  window.addEventListener("load", () => {
    const $clickableThemes = document.querySelectorAll(
      "[data-hs-theme-click-value]",
    );
    const $switchableThemes = document.querySelectorAll(
      "[data-hs-theme-switch]",
    );

    $clickableThemes.forEach(($item) => {
      $item.addEventListener("click", () =>
        HSThemeAppearance.setAppearance(
          $item.getAttribute("data-hs-theme-click-value"),
          true,
          $item,
        ),
      );
    });

    $switchableThemes.forEach(($item) => {
      $item.addEventListener("change", (e) => {
        HSThemeAppearance.setAppearance(e.target.checked ? "dark" : "default");
      });

      $item.checked = HSThemeAppearance.getAppearance() === "dark";
    });

    window.addEventListener("on-hs-appearance-change", (e) => {
      $switchableThemes.forEach(($item) => {
        $item.checked = e.detail === "dark";
      });
    });
  });
</script>
<!--Import the necessary Collapse and Overlay plugins-->
<!--https://preline.co/plugins/html/collapse.html-->
<!--https://preline.co/plugins/html/overlay.html-->
<script>
  import "@preline/collapse/index.js";
  import "@preline/overlay/index.js";
</script>
```

/src/components/sections/navbar&footer/NavbarMegaMenu.astro
```
---
//Import relevant dependencies
import ThemeIcon from "@components/ThemeIcon.astro";
import NavLink from "@components/ui/links/NavLink.astro";
import MegaMenuLink from "@components/ui/links/MegaMenuLink.astro";
import Authentication from "../misc/Authentication.astro";
import enStrings from "@utils/navigation.ts";
import frStrings from "@utils/fr/navigation.ts";
import BrandLogo from "@components/BrandLogo.astro";
import LanguagePicker from "@components/ui/LanguagePicker.astro";

// Select the correct translation based on the page's lang prop:
const strings = Astro.currentLocale === "fr" ? frStrings : enStrings;
const homeUrl = Astro.currentLocale === "fr" ? "/fr" : "/";
---

<!-- Main header component -->
<header
  class="sticky inset-x-0 top-4 z-50 flex w-full flex-wrap text-sm md:flex-nowrap md:justify-start"
>
  <!-- Navigation container -->
  <nav
    class="relative mx-2 w-full rounded-[36px] border border-yellow-100/40 bg-yellow-50/60 px-4 py-3 backdrop-blur-md dark:border-neutral-700/40 dark:bg-neutral-800/80 dark:backdrop-blur-md md:flex md:items-center md:justify-between md:px-6 md:py-0 lg:px-8 xl:mx-auto"
    aria-label="Global"
  >
    <div class="flex items-center justify-between">
      <!-- Brand logo -->
      <a
        class="flex-none rounded-lg text-xl font-bold outline-none ring-zinc-500 focus-visible:ring dark:ring-zinc-200 dark:focus:outline-none"
        href={homeUrl}
        aria-label="Brand"
      >
        <BrandLogo class="h-auto w-24" />
      </a>
      <!-- Collapse toggle for smaller screens -->
      <div class="ml-auto mr-5 md:hidden">
        <button
          type="button"
          class="hs-collapse-toggle flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-neutral-600 transition duration-300 hover:bg-neutral-200 disabled:pointer-events-none disabled:opacity-50 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:outline-none"
          data-hs-collapse="#navbar-collapse-with-animation"
          aria-controls="navbar-collapse-with-animation"
          aria-label="Toggle navigation"
        >
          <svg
            class="h-[1.25rem] w-[1.25rem] flex-shrink-0 hs-collapse-open:hidden"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <line x1="3" x2="21" y1="6" y2="6"></line>
            <line x1="3" x2="21" y1="12" y2="12"></line>
            <line x1="3" x2="21" y1="18" y2="18"></line>
          </svg>
          <svg
            class="hidden h-[1.25rem] w-[1.25rem] flex-shrink-0 hs-collapse-open:block"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M18 6 6 18"></path>
            <path d="m6 6 12 12"></path>
          </svg>
        </button>
      </div>
      <!-- ThemeIcon component specifically for smaller screens -->
      <span class="inline-block md:hidden">
        <ThemeIcon />
      </span>
    </div>
    <!-- Contains navigation links -->
    <div
      id="navbar-collapse-with-animation"
      class="hs-collapse hidden grow basis-full overflow-hidden transition-all duration-300 md:block"
    >
      <!-- Navigation links container -->
      <div
        class="mt-5 flex flex-col gap-x-0 gap-y-4 md:mt-0 md:flex-row md:items-center md:justify-end md:gap-x-4 md:gap-y-0 md:ps-7 lg:gap-x-7"
      >
        <!-- Navigation links and Authentication component -->
        {
          strings.navBarLinks.map((link) => {
            if (link.name === "Services") {
              return <MegaMenuLink />;
            } else {
              return <NavLink url={link.url} name={link.name} />;
            }
          })
        }

        <Authentication />
        <LanguagePicker />
        <!-- ThemeIcon component specifically for larger screens -->
        <span class="hidden md:inline-block">
          <ThemeIcon />
        </span>
      </div>
    </div>
  </nav>
</header>
<!-- Theme Appearance script to manage light/dark modes -->
<script is:inline>
  const HSThemeAppearance = {
    init() {
      const defaultTheme = "default";
      let theme = localStorage.getItem("hs_theme") || defaultTheme;

      if (document.querySelector("html").classList.contains("dark")) return;
      this.setAppearance(theme);
    },
    _resetStylesOnLoad() {
      const $resetStyles = document.createElement("style");
      $resetStyles.innerText = `*{transition: unset !important;}`;
      $resetStyles.setAttribute("data-hs-appearance-onload-styles", "");
      document.head.appendChild($resetStyles);
      return $resetStyles;
    },
    setAppearance(theme, saveInStore = true, dispatchEvent = true) {
      const $resetStylesEl = this._resetStylesOnLoad();

      if (saveInStore) {
        localStorage.setItem("hs_theme", theme);
      }

      if (theme === "auto") {
        theme = window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "default";
      }

      document.querySelector("html").classList.remove("dark");
      document.querySelector("html").classList.remove("default");
      document.querySelector("html").classList.remove("auto");

      document
        .querySelector("html")
        .classList.add(this.getOriginalAppearance());

      setTimeout(() => {
        $resetStylesEl.remove();
      });

      if (dispatchEvent) {
        window.dispatchEvent(
          new CustomEvent("on-hs-appearance-change", { detail: theme })
        );
      }
    },
    getAppearance() {
      let theme = this.getOriginalAppearance();
      if (theme === "auto") {
        theme = window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "default";
      }
      return theme;
    },
    getOriginalAppearance() {
      const defaultTheme = "default";
      return localStorage.getItem("hs_theme") || defaultTheme;
    },
  };
  HSThemeAppearance.init();

  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", () => {
      if (HSThemeAppearance.getOriginalAppearance() === "auto") {
        HSThemeAppearance.setAppearance("auto", false);
      }
    });

  window.addEventListener("load", () => {
    const $clickableThemes = document.querySelectorAll(
      "[data-hs-theme-click-value]"
    );
    const $switchableThemes = document.querySelectorAll(
      "[data-hs-theme-switch]"
    );

    $clickableThemes.forEach(($item) => {
      $item.addEventListener("click", () =>
        HSThemeAppearance.setAppearance(
          $item.getAttribute("data-hs-theme-click-value"),
          true,
          $item
        )
      );
    });

    $switchableThemes.forEach(($item) => {
      $item.addEventListener("change", (e) => {
        HSThemeAppearance.setAppearance(e.target.checked ? "dark" : "default");
      });

      $item.checked = HSThemeAppearance.getAppearance() === "dark";
    });

    window.addEventListener("on-hs-appearance-change", (e) => {
      $switchableThemes.forEach(($item) => {
        $item.checked = e.detail === "dark";
      });
    });
  });
</script>
<!--Import the necessary Collapse and Overlay plugins-->
<!--https://preline.co/plugins/html/collapse.html-->
<!--https://preline.co/plugins/html/overlay.html-->
<!--https://preline.co/plugins/html/dropdown.html-->
<script>
  import "@preline/collapse/index.js";
  import "@preline/overlay/index.js";
  import "@preline/dropdown/index.js";
</script>
```

/src/components/sections/features/FeaturesStats.astro
```
---
// Import the necessary components
import StatsBig from "@components/ui/blocks/StatsBig.astro";
import StatsSmall from "@components/ui/blocks/StatsSmall.astro";

const { title, subTitle, stats, mainStatTitle, mainStatSubTitle } = Astro.props;

interface Props {
  title: string;
  subTitle?: string;
  mainStatTitle: string;
  mainStatSubTitle: string;
  stats?: Stat[];
}

// TypeScript type for the statistics
type Stat = {
  stat: string;
  description: string;
};
---

<section
  class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full"
>
  <div class="max-w-screen-md">
    <!-- Main title -->
    <h2
      class="mb-4 text-balance text-3xl font-extrabold tracking-tight text-neutral-800 dark:text-neutral-200"
    >
      {title}
    </h2>
    <!-- Subtitle -->
    {subTitle &&
    <p
      class="mb-16 max-w-prose text-pretty font-normal text-neutral-600 dark:text-neutral-400 sm:text-xl"
    >
      {subTitle}
    </p>
    }
  </div>
  <!-- Grid container for statistics -->
  <div class="grid items-center gap-6 lg:grid-cols-12 lg:gap-12">
    <!-- First grid item, showing a big statistics -->
    <div class="lg:col-span-4">
      <StatsBig
        title={mainStatTitle}
        subTitle={mainStatSubTitle}
      />
    </div>
    <!-- Second grid item, showing multiple small statistics -->
    {stats &&
    <div
      class="relative lg:col-span-8 lg:before:absolute lg:before:-start-12 lg:before:top-0 lg:before:h-full lg:before:w-px lg:before:bg-neutral-300 lg:before:dark:bg-neutral-700"
    >
      <div
        class="grid grid-cols-2 gap-6 sm:gap-8 md:grid-cols-4 lg:grid-cols-3"
      >
        <!-- Iterate over the 'stats' array and create a 'StatsSmall' component for each object in the array -->
        {
          stats.map((stat) => (
            <StatsSmall title={stat.stat} subTitle={stat.description} />
          ))
        }
      </div>
    </div>
    }
  </div>
</section>
```

/src/components/sections/features/FeaturesGeneral.astro
```
---
// Import the necessary dependencies
import { Image } from "astro:assets";
import IconBlock from "@components/ui/blocks/IconBlock.astro";
import Icon from "@components/ui/icons/Icon.astro";

interface Feature {
  heading: string;
  content: string;
  svg: string;
}

interface Props {
  title?: string;
  subTitle?: string;
  features?: Feature[];
  src?: any;
  alt?: string;
}
// Define props from Astro
const { title, subTitle, src, alt, features } = Astro.props;
---

<section
  class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full"
>
  <!-- Block to display the feature image -->
  <div class="relative mb-6 overflow-hidden md:mb-8">
    {
      src && alt && (
        <Image
          src={src}
          alt={alt}
          class="h-full w-full object-cover object-center"
          draggable={"false"}
          format={"avif"}
          loading={"eager"}
        />
      )
    }
  </div>

  <!-- Displaying the main content consisting of title, subtitle, and several `IconBlock` components -->
  <div class="mt-5 grid gap-8 lg:mt-16 lg:grid-cols-3 lg:gap-12">
    <!-- Block for title and subtitle -->
    <div class="lg:col-span-1">
      <!-- Rendering title -->
      <h2
        class="text-balance text-2xl font-bold text-neutral-800 dark:text-neutral-200 md:text-3xl"
      >
        {title}
      </h2>
      <!-- Rendering subtitle -->
      {
        subTitle && (
          <p class="mt-2 text-pretty text-neutral-600 dark:text-neutral-400 md:mt-4">
            {subTitle}
          </p>
        )
      }
    </div>

    <!-- Block to display the IconBlock components -->
    <div class="lg:col-span-2">
      <div class="grid gap-8 sm:grid-cols-2 md:gap-12">
        <!-- Injecting IconBlock components with different properties -->
        { features &&
          features.map((feature) => (
            <IconBlock heading={feature.heading} content={feature.content}>
              <Icon name={feature.svg} />
            </IconBlock>
          ))
        }
      </div>
    </div>
  </div>
</section>
```

/src/components/sections/features/FeaturesNavs.astro
```
---
// Import the necessary dependencies
import TabNav from "@components/ui/blocks/TabNav.astro";
import TabContent from "@components/ui/blocks/TabContent.astro";
import Icon from "@components/ui/icons/Icon.astro";

// Define props from Astro
const { title, tabs } = Astro.props;

// Define TypeScript interface for tab object
interface Tab {
  heading: string;
  content: string;
  svg: string;
  src: any;
  alt: string;
  first?: boolean;
  second?: boolean;
}

// Define TypeScript interface for props
interface Props {
  title?: string;
  tabs: Tab[];
}
---

<section
  class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full"
>
  <div class="relative p-6 md:p-16">
    <div
      class="relative z-10 lg:grid lg:grid-cols-12 lg:items-center lg:gap-16"
    >
      <!-- Section's heading and tab navigation -->
      <div class="mb-10 lg:order-2 lg:col-span-6 lg:col-start-8 lg:mb-0">
        <h2
          class="text-2xl font-bold text-neutral-800 dark:text-neutral-200 sm:text-3xl"
        >
          <!-- About Fragment: https://docs.astro.build/en/basics/astro-syntax/#fragments -->
          <Fragment set:html={title} />
        </h2>
        <!-- Tab navigation - use the attribute 'first' in the first TabNav for the component to work -->
        <nav class="mt-5 grid gap-4 md:mt-10" aria-label="Tabs" role="tablist">
          {
            tabs.map((tab, index) => (
              <TabNav
                id={`tabs-with-card-item-${index + 1}`}
                dataTab={`#tabs-with-card-${index + 1}`}
                aria={`tabs-with-card-${index + 1}`}
                heading={tab.heading}
                content={tab.content}
                first={tab.first}
              >
                <Icon name={tab.svg} />
              </TabNav>
            ))
          }
        </nav>
      </div>

      <!-- Contents for each tab - the 'first' attribute should be used in the first tab for that tab to be initially visible, 'second' changes the styles -->
      <div class="lg:col-span-6">
        <div class="relative">
          <div>
            {
              tabs.map((tab, index) => (
                <TabContent
                  id={`tabs-with-card-${index + 1}`}
                  aria={`tabs-with-card-item-${index + 1}`}
                  src={tab.src}
                  alt={tab.alt}
                  first={tab.first}
                  second={tab.second}
                />
              ))
            }
          </div>
        </div>
      </div>
    </div>

    <div class="absolute inset-0 grid h-full w-full grid-cols-12">
      <!-- Decorative background and sizing -->
      <div
        class="col-span-full h-5/6 w-full rounded-xl bg-neutral-100 dark:bg-white/[.075] sm:h-3/4 lg:col-span-7 lg:col-start-6 lg:h-full"
      >
      </div>
    </div>
  </div>
</section>
<!--Import the necessary Tabs plugin-->
<!--https://preline.co/plugins/html/tabs.html-->
<script>
  import "@preline/tabs/index.js";
</script>
```

/src/components/sections/features/FeaturesStatsAlt.astro
```
---
import { Image } from "astro:assets";
import product5 from "@images/features-image.avif";

// Define props from Astro
const { title, subTitle, benefits } = Astro.props;

// Define TypeScript interface for props
interface Props {
  title: string;
  subTitle?: string;
  benefits?: Array<string>;
}

// Define SVG marker to be used in the component
const ListItemMarker: string = `<svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mt-0.5 h-6 w-6 text-orange-400 dark:text-orange-300 flex-none"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>`;
---

<section
  class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full"
>
  <!-- Grid -->
  <div class="lg:grid lg:grid-cols-12 lg:items-center lg:gap-16">
    <div class="lg:col-span-7">
      <Image class="rounded-xl" src={product5} alt="Mockup of floating boxes" />
    </div>
    <div class="mt-5 sm:mt-10 lg:col-span-5 lg:mt-0">
      <div class="space-y-6 sm:space-y-8">
        <div class="space-y-2 md:space-y-4">
          <h2
            class="text-balance text-3xl font-bold text-neutral-800 dark:text-neutral-200 lg:text-4xl"
          >
            {title}
          </h2>
          {
            subTitle && (
              <p class="text-pretty text-neutral-600 dark:text-neutral-400">
                {subTitle}
              </p>
            )
          }
        </div>
        {
          benefits && (
            <ul class="space-y-2 sm:space-y-4">
              {benefits.map((item) => (
                <li class="flex space-x-3">
                  <Fragment set:html={ListItemMarker} />
                  <span class="text-pretty text-base font-medium text-neutral-600 dark:text-neutral-400">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          )
        }
      </div>
    </div>
  </div>
</section>
```

/src/components/sections/pricing/PricingSection.astro
```
---
// Import SecondaryCTA component for use in this module
import SecondaryCTA from "@components/ui/buttons/SecondaryCTA.astro";
import Icon from "@components/ui/icons/Icon.astro";

// Define props from Astro
const { pricing } = Astro.props;

// Define TypeScript type for products.
type Product = {
  name: string;
  description: string;
  price: string;
  cents: string;
  billingFrequency: string;
  features: Array<string>;
  purchaseBtnTitle: string;
  purchaseLink: string;
};

interface PricingSectionProps {
  title: string;
  subTitle: string;
  badge: string;
  thirdOption: string;
  btnText: string;
  pricing: {
    title: string;
    subTitle: string;
    starterKit: Product;
    professionalToolbox: Product;
  };
}
---

<section
  class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full"
>
  <!-- Section heading and sub-heading -->
  <div class="mx-auto mb-10 max-w-2xl text-center lg:mb-14">
    <h2
      class="text-balance text-2xl font-bold tracking-tight text-neutral-800 dark:text-neutral-200 md:text-4xl md:leading-tight"
    >
      {pricing.title}
    </h2>
    <p class="mt-1 text-pretty text-neutral-600 dark:text-neutral-400">
      {pricing.subTitle}
    </p>
  </div>
  <!-- Contains two main product blocks -->
  <div class="flex flex-wrap items-center justify-center gap-4 sm:gap-0">
    <!-- Starter Kit product details -->
    <div
      class="w-full rounded-xl bg-gray-800 p-6 sm:w-1/2 sm:rounded-r-none sm:p-8 lg:w-1/3"
    >
      <div class="mb-4">
        <h3 class="text-2xl font-bold text-neutral-100 sm:text-3xl">
          {pricing.starterKit.name}
        </h3>
        <p class="text-indigo-300">{pricing.starterKit.description}</p>
      </div>

      <div class="mb-4">
        <span class="text-4xl font-bold text-neutral-200"
          >{pricing.starterKit.price}</span
        >
        <span class="text-lg font-bold text-neutral-300"
          >{pricing.starterKit.cents}</span
        >
        <span class="ms-3 text-sm text-indigo-200"
          >{pricing.starterKit.billingFrequency}</span
        >
      </div>
      <!-- Features list - automatically created by mapping over `features` array -->
      <ul class="mb-6 space-y-2 text-neutral-300">
        {
          pricing.starterKit.features.map((feature: string) => (
            <li class="flex items-center gap-1.5">
              <Icon name="checkCircle" />

              <span>{feature}</span>
            </li>
          ))
        }
      </ul>
      <!-- CTA for purchasing the product -->
      <a
        href={pricing.starterKit.purchaseLink}
        class="block rounded-lg bg-gray-500 px-8 py-3 text-center text-sm font-bold text-gray-100 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-600 focus-visible:ring active:text-gray-300 md:text-base"
        >{pricing.starterKit.purchaseBtnTitle}</a
      >
    </div>
    <!-- Professional Toolbox product details -->
    <div
      class="w-full rounded-xl bg-gradient-to-tr from-[#FF512F] to-[#F09819] p-6 shadow-xl sm:w-1/2 sm:p-8"
    >
      <div
        class="mb-4 flex flex-col items-start justify-between gap-4 lg:flex-row"
      >
        <div>
          <h3 class="text-2xl font-bold text-neutral-100 sm:text-3xl">
            {pricing.professionalToolbox.name}
          </h3>
          <p class="text-orange-200">{pricing.professionalToolbox.description}</p>
        </div>

        <span
          class="order-first inline-block rounded-full bg-orange-200 bg-opacity-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-center text-orange-600 lg:order-none"
          >{pricing.badge}</span
        >
      </div>

      <div class="mb-4">
        <span class="text-6xl font-bold text-neutral-100"
          >{pricing.professionalToolbox.price}</span
        >
        <span class="text-lg font-bold text-orange-100"
          >{pricing.professionalToolbox.cents}</span
        >
        <span class="ms-3 text-orange-200"
          >{pricing.professionalToolbox.billingFrequency}</span
        >
      </div>
      <!-- Features list - automatically created by mapping over `features` array -->
      <ul class="mb-6 space-y-2 text-orange-100">
        {
          pricing.professionalToolbox.features.map((feature: string) => (
            <li class="flex items-center gap-1.5">
              <Icon name="checkCircle" />

              <span>{feature}</span>
            </li>
          ))
        }
      </ul>
      <!-- CTA for purchasing the product -->
      <a
        href={pricing.professionalToolbox.purchaseLink}
        class="block rounded-lg bg-orange-200 bg-opacity-50 px-8 py-3 text-center text-sm font-bold text-neutral-100 outline-none ring-orange-300 transition duration-100 hover:bg-orange-300 hover:bg-opacity-50 focus-visible:ring active:bg-orange-400 md:text-base"
        >{pricing.professionalToolbox.purchaseBtnTitle}</a
      >
    </div>
  </div>
  <!-- Call to action for Enterprise Solutions -->
  <div class="mt-8 flex items-center justify-center gap-x-3 md:mt-12">
    <p class="text-sm text-neutral-600 dark:text-neutral-400">
      {pricing.thirdOption}
    </p>

    <SecondaryCTA title={pricing.btnText} url="#" />
  </div>
</section>
```

/src/layouts/MainLayout.astro
```
---
import Meta from "@components/Meta.astro";
import Navbar from "@components/sections/navbar&footer/Navbar.astro";
import FooterSection from "@components/sections/navbar&footer/FooterSection.astro";
import { SITE } from "@data/constants";

// Setting expected props
const { title = SITE.title, meta, structuredData, lang = "en" } = Astro.props;

// Interface to type-check the properties
interface Props {
  title?: string;
  meta?: string;
  structuredData?: object;
  lang?: string;
}
---

<html lang={lang} class="scrollbar-hide lenis lenis-smooth scroll-pt-16">
  <head>
    <Meta meta={meta} structuredData={structuredData} />
    <title>{title}</title>
    <script is:inline>
      if (
        localStorage.getItem("hs_theme") === "dark" ||
        (!("hs_theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      ) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    </script>
    <script>
      import "@scripts/lenisSmoothScroll.js";
    </script>
  </head>
  <body class="bg-neutral-200 selection:bg-yellow-400 selection:text-neutral-700 dark:bg-neutral-800">
    <!-- Header and Navbar -->
    <header class="bg-white dark:bg-neutral-900 shadow-md sticky top-0 z-50">
      <Navbar />
    </header>

    <!-- Main Content -->
    <main>
      <!-- Hero Section Slot -->
      <div class="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8 py-8">
        <slot name="hero" />
      </div>

      <!-- About Me Section (Full Width) -->
      <div class="w-full">
        <slot name="about-me" />
      </div>

      <!-- Call to Action Section Slot -->
      <div class="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8 py-8">
        <slot name="call-to-action" />
      </div>

      <!-- Blog Section Slot -->
      <div class="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8 py-8">
        <slot name="blog" />
      </div>
    </main>

    <!-- Footer -->
    <FooterSection />

    <style>
      .scrollbar-hide::-webkit-scrollbar {
        display: none;
      }

      .scrollbar-hide {
        -ms-overflow-style: none;
        scrollbar-width: none;
      }
    </style>
  </body>
</html>
```

/src/assets/styles/lenis.css
```
html.lenis,
html.lenis body {
    height: auto;
}

.lenis.lenis-smooth {
    scroll-behavior: auto !important;
}

.lenis.lenis-smooth [data-lenis-prevent] {
    overscroll-behavior: contain;
}

.lenis.lenis-stopped {
    overflow: hidden;
}

.lenis.lenis-scrolling iframe {
    pointer-events: none;
}```

/src/assets/styles/starlight.css
```
/* Dark mode colors. */
:root {
    --border: hsla(var(--border-neutral), .4);
    --backdrop-color: #272727cc;
    --sl-color-accent: #ff801f;
    --sl-color-accent-high: #ffa057;
    --sl-color-accent-low: #562800;
    --sl-color-black: #181818;
    --sl-color-gray-1: #eee;
    --sl-color-gray-2: #c2c2c2;
    --sl-color-gray-3: #8b8b8b;
    --sl-color-gray-4: #585858;
    --sl-color-gray-5: #383838;
    --sl-color-gray-6: #272727;
    --sl-color-white: #fff;
    --list-marker-color: #fb923c;
    --border-neutral: 0, 0%, 25.1%;
}

/* Light mode colors. */
:root[data-theme="light"] {
    --border: hsla(var(--border-yellow), .4);
    --backdrop-color: #f6f6f699;
    --sl-color-accent: #b73d00;
    --sl-color-accent-high: #562800;
    --sl-color-accent-low: #ffa057;
    --sl-color-black: #fff;
    --sl-color-gray-1: #272727;
    --sl-color-gray-2: #383838;
    --sl-color-gray-3: #585858;
    --sl-color-gray-4: #8b8b8b;
    --sl-color-gray-5: #c2c2c2;
    --sl-color-gray-6: #eee;
    --sl-color-gray-7: #f6f6f6;
    --sl-color-white: #181818;
    --list-marker-color: #fb923c;
    --border-yellow: 54.9, 96.7%, 88%;

}

header {
    border: none !important;
    padding: 0 !important;
}

header.header {
    background-color: transparent !important;
    height: 4.5rem !important;
    margin-inline: auto !important;
    padding-block: 0 !important;
    padding-inline: 2rem !important;
}

header > div:first-of-type {
    backdrop-filter: blur(12px) !important;
    background-color: var(--backdrop-color) !important;
    border: 1px var(--border) solid;
    border-radius: 36px;
    height: 100% !important;
    margin-inline: auto !important;
    margin-top: 1rem !important;
    max-width: 1536px;
    padding-inline: 2rem !important;
    width: auto !important;
}

#starlight__sidebar {
    border-radius: 1rem;
    margin-top: 2rem !important;
}

.content-panel:first-of-type {
    margin-top: 2rem !important;
}

.right-sidebar {
    top: 2rem !important;
}

#starlight__on-this-page--mobile {
    border: none !important;
}

mobile-starlight-toc > nav {
    border: none !important;
    border-radius: 1rem;
    margin-top: 2rem !important;
}

select {
    background-image: none;
    box-shadow: none;
}

select:focus-visible {
    outline: -webkit-focus-ring-color auto 1px;
}

article.card {
    border-radius: 0.5rem;
}

.starlight-aside--tip {
    background: linear-gradient(45deg, #ff512f, #f09819);
    border: none;
    border-radius: 0.5rem;
    color: #66350c;
}

.starlight-aside--note {
    background: linear-gradient(45deg, #00b4db, #2193b0);
    border: none;
    border-radius: 0.5rem;
    color: #004558;
}

.starlight-aside__icon {
    transform: scale(0.8);
}

.starlight-aside--tip .starlight-aside__title {
    color: #ffe0c2;
}

.starlight-aside--note .starlight-aside__title {
    color: #bbf3fef7;
}

.sl-markdown-content ul:not(:where(.not-content *)) {
    list-style-type: none;
    padding-left: 0;
}

.sl-markdown-content ul:not(:where(.not-content *)) > li {
    padding-left: 1.75rem;
    position: relative;
}

.sl-markdown-content li:not(:where(.not-content *)) > ul,
.sl-markdown-content li + li:not(:where(.not-content *)) {
    margin-top: 0.625rem;
}

.sl-markdown-content ul:not(:where(.not-content *)) > li:before {
    background: var(--list-marker-color);
    border-radius: 1px;
    content: "";
    height: 2px;
    left: 2px;
    position: absolute;
    top: 13px;
    width: 0.875rem;
}

@media screen and (max-width: 800px) {
    mobile-starlight-toc > nav {
        border-radius: 1rem;
        margin-top: 3rem !important;
    }

    header > div:first-of-type {
        padding-inline-end: 5rem !important;
    }

    starlight-menu-button > button {
        right: 3rem !important;
        top: 2.2rem !important;
    }
}

@media screen and (max-width: 1280px) {
    header.header {
        padding-inline: 1.5rem !important;
    }
}```

/src/assets/styles/starlight_main.css
```
/* Dark mode colors. */
:root {
    --primary-button-hover: #ff801f;
    --backdrop-color: #272727cc;
    --sl-color-accent: #ff801f;
    --sl-color-accent-high: #ffa057;
    --sl-color-accent-low: #562800;
    --sl-color-black: #181818;
    --sl-color-gray-1: #eee;
    --sl-color-gray-2: #c2c2c2;
    --sl-color-gray-3: #8b8b8b;
    --sl-color-gray-4: #585858;
    --sl-color-gray-5: #383838;
    --sl-color-gray-6: #272727;
    --sl-color-white: #fff;
    --yellow-hsl: 43.3, 96.4%, 56.3%;
    --overlay-yellow: hsla(var(--yellow-hsl), .2);
    --border: hsla(var(--border-neutral), .4);
    --border-neutral: 0, 0%, 25.1%;
}

/* Light mode colors. */
:root[data-theme='light'] {
    --primary-button-hover: #ff801f;
    --backdrop-color: #f6f6f699;
    --sl-color-accent: #f76b15;
    --sl-color-accent-high: #562800;
    --sl-color-accent-low: #ffa057;
    --sl-color-black: #fff;
    --sl-color-gray-1: #272727;
    --sl-color-gray-2: #383838;
    --sl-color-gray-3: #585858;
    --sl-color-gray-4: #8b8b8b;
    --sl-color-gray-5: #c2c2c2;
    --sl-color-gray-6: #eee;
    --sl-color-gray-7: #f6f6f6;
    --sl-color-white: #181818;
    --yellow-hsl: 47.9, 95.8%, 53.1%;
    --border-yellow: 54.9, 96.7%, 88%;
    --border: hsla(var(--border-yellow), .4);
}

.page {
    background: linear-gradient(215deg, var(--overlay-yellow), transparent 40%), radial-gradient(var(--overlay-yellow), transparent 40%) no-repeat center center / cover, radial-gradient(var(--overlay-yellow), transparent 65%) no-repeat center center / cover;
    background-blend-mode: overlay;
}

header {
    border: none !important;
    padding: 0 !important;
}

header.header {
    background-color: transparent !important;
    height: 4.5rem !important;
    margin-inline: auto !important;
    padding-block: 0 !important;
    padding-inline: 2rem !important;
}

header > div:first-of-type {
    backdrop-filter: blur(12px) !important;
    background-color: var(--backdrop-color) !important;
    border: 1px var(--border) solid;
    border-radius: 36px;
    height: 100% !important;
    margin-inline: auto !important;
    margin-top: 1rem !important;
    max-width: 1536px;
    padding-inline: 2rem !important;
    width: auto !important;
}

select {
    background-image: none;
    box-shadow: none;
}

.sl-link-button.primary:hover {
    background-color: var(--primary-button-hover);
    transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1);
}

.sl-link-button.primary:hover svg {
    transform: translateX(0.25rem);
    transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
}```

/src/assets/scripts/lenisSmoothScroll.js
```
import "@styles/lenis.css";

import Lenis from "lenis";

// Script to handle Lenis library settings for smooth scrolling
const lenis = new Lenis();

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);```

/src/pages/404.astro
```
---
// Import section components
import MainLayout from "@/layouts/MainLayout.astro";
import Btn404 from "@components/ui/buttons/Btn404.astro";
import { SITE } from "@data/constants";

// Define types for translations
type TranslationKeys = "en" | "fr";
type Translations = {
  [key in TranslationKeys]: {
    pageTitle: string;
    subTitle: string;
    content: string;
    btnTitle: string;
  };
};

// Define variables for page content
const defaultLang: TranslationKeys = "en";
const translations: Translations = {
  en: {
    pageTitle: `Page Not Found | ${SITE.title}`,
    subTitle: "Oops, this isn't the tool you were looking for!",
    content:
      "Don't let this hiccup slow you down. Let's get you back to building your masterpiece.",
    btnTitle: "Go Back",
  },
  fr: {
    pageTitle: `Page Non Trouvée | ${SITE.title}`,
    subTitle: "Oops, ce n'est pas l'outil que vous recherchiez!",
    content:
      "Ne laissez pas ce contretemps vous ralentir. Revenons à la construction de votre chef-d'œuvre.",
    btnTitle: "Retournez",
  },
};

// Determine language from the URL
const urlPath = Astro.url.pathname;
const langCodeMatch = urlPath.match(/^\/(en|fr)\//);
const lang: TranslationKeys = langCodeMatch
  ? (langCodeMatch[1] as TranslationKeys)
  : defaultLang;

const { pageTitle, subTitle, content, btnTitle } = translations[lang];
---

<MainLayout title={pageTitle}>
  <section class="grid h-svh place-content-center">
    <div class="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
      <div class="mx-auto max-w-screen-sm text-center">
        <h1
          class="text-dark mb-4 text-7xl font-extrabold text-yellow-500 dark:text-yellow-400 lg:text-9xl"
        >
          404
        </h1>
        <p
          id="subtitle"
          class="mb-4 text-balance text-3xl font-bold tracking-tight text-neutral-700 dark:text-neutral-300 md:text-4xl"
        >
          {subTitle}
        </p>
        <p
          id="content"
          class="mb-4 text-pretty text-lg text-neutral-600 dark:text-neutral-400"
        >
          {content}
        </p>
        <!-- Display a button that navigates user back to the previous page -->
        <Btn404 title={btnTitle} id="go-back" />
      </div>
    </div>
  </section>
</MainLayout>

<!-- JavaScript code to handle going back to the previous page -->
<script>
  const goBackButton = document.getElementById("go-back") as HTMLButtonElement;

  goBackButton.addEventListener("click", () => {
    history.back();
  });
</script>
```

/src/pages/index.astro
```
---
import MainLayout from "@/layouts/MainLayout.astro";
import HeroSection from "@components/sections/landing/HeroSection.astro";
import ClientsSection from "@components/sections/landing/ClientsSection.astro";
import CTASection from "@components/sections/landing/CTASection.astro";
import BlogSection from "@components/sections/landing/BlogSection.astro";
import AboutMeSection from "@components/sections/landing/AboutMeSection.astro";

import heroImage from "@images/mario-chipset.jpg";
import codeImage from "@images/Code-snippets-scaled.jpg";
import avatarImage from "@images/mario-avatar-300x300.png";

const postFiles = await Astro.glob('../content/blog/**/*.md');
const imageImports = import.meta.glob('../content/blog/**/*.{jpg,png}', { eager: true });

const posts = postFiles.map(post => {
  const slug = post.frontmatter.slug;
  const imagePath = post.frontmatter.image ? `/src/content/blog/${slug}/${post.frontmatter.image}` : null;
  return {
    title: post.frontmatter.title,
    description: post.frontmatter.description,
    image: imagePath,
    date: new Date(post.frontmatter.date)  // Ensure dates are parsed as Date objects
  };
});

// Sort posts by date (newest to oldest)
posts.sort((a, b) => b.date - a.date);
---

<MainLayout>
  <!-- Hero Section -->
  <HeroSection slot="hero"
    title="It's time for an upgrade"
    subTitle="Hi, I’m Mario Guerra, Product Manager for TypeSpec at Microsoft. I create tools and frameworks that empower developers to build faster, smarter, and more effectively."
    primaryBtn="Learn More"
    primaryBtnURL="/about"
    secondaryBtn="Contact Me"
    secondaryBtnURL="/contact"
    src={heroImage}
    alt="Time for an upgrade graphic"
  />

  <AboutMeSection slot="about-me"
    title="About me"
    subTitle="With a proven track record in developer productivity, I specialize in bringing innovative tools to life, including TypeSpec at Microsoft. My passion for generative AI and modern build practices drives me to create solutions that bridge the gap between teams and technology. Outside of work, I’m an advocate for continuous learning, fitness, and sharing insights to help others succeed."
    primaryBtn="Learn More"
    primaryBtnURL="/about"
    src={avatarImage}
    alt="Mario Guerra Portrait"
  />

  <!-- Call-to-Action Section -->
  <CTASection slot="call-to-action"
    title="Let’s talk about you"
    description="How can I help your software project succeed?"
    primaryBtn="Contact Me"
    primaryBtnURL="/contact"
    src={codeImage}
    alt="Code example"
  />

  <!-- Blog Section -->
  <BlogSection slot="blog"
      posts={posts} 
      title="Recent Articles"
      description="Read my latest insights on software development, productivity, and more." 
  />
</MainLayout>
```

/src/pages/favicon.ico.ts
```
import type { APIRoute } from "astro";
import sharp from "sharp";
import ico from "sharp-ico";
import path from "node:path";

const faviconSrc = path.resolve("src/images/mario-initial.svg");

export const GET: APIRoute = async () => {

  // Resize the image to multiple sizes
  const sizes = [16, 32];

  const buffers = await Promise.all(
    sizes.map(async (size) => {
      return await sharp(faviconSrc)
        .resize(size)
        //.toFormat("svg")
        .toBuffer();
    })
  );

  // Convert the image to an ICO file
  const icoBuffer = ico.encode(buffers);

  return new Response(icoBuffer, {
    headers: { "Content-Type": "image/x-icon" },
  });
};
```

/src/pages/robots.txt.ts
```
// https://docs.astro.build/en/guides/integrations-guide/sitemap/#usage
import type { APIRoute } from 'astro';

const robotsTxt = `
User-agent: Googlebot
Disallow:
Allow: /
Crawl-delay: 10

User-agent: Yandex
Disallow:
Allow: /
Crawl-delay: 2

User-agent: archive.org_bot
Disallow:
Allow: /
Crawl-delay: 2

User-agent: *
Disallow: /

Sitemap: ${new URL('sitemap-index.xml', import.meta.env.SITE).href}
`.trim();

export const GET: APIRoute = () => {
  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};```

/src/pages/services.astro
```
---
// Import necessary components
import MainLayout from "@/layouts/MainLayout.astro";
import MainSection from "@components/ui/blocks/MainSection.astro";
import LeftSection from "@components/ui/blocks/LeftSection.astro";
import RightSection from "@components/ui/blocks/RightSection.astro";
import FeaturesStats from "@components/sections/features/FeaturesStats.astro";

// Import necessary images
import blueprints from "@images/blueprints-image.avif";
import personWorking from "@images/person-working.avif";
import beforeAfter from "@images/before-after.avif";
import constructionWorkers from "@images/construction-workers.avif";
import aerialView from "@images/aerial-view.avif";
import usingTools from "@images/using-tools.avif";
import progressBuilding from "@images/progress-building.avif";
import underConstruction from "@images/under-construction.avif";
import { SITE } from "@data/constants";

interface Article {
  isRightSection: boolean;
  title: string;
  subTitle: string;
  btnExists?: boolean;
  btnTitle?: string;
  btnURL?: string;
  single?: boolean;
  img?: any;
  imgAlt?: string;
  imgOne?: any;
  imgOneAlt?: string;
  imgTwo?: any;
  imgTwoAlt?: string;
}

const articles: Article[] = [
  {
    isRightSection: true,
    title: "Delivering Expert Guidance",
    subTitle:
      "Embarking on a construction project can be overwhelming. With our professional consultation services, we guide you through every stage, ensuring you make informed decisions. Whether you are a DIY enthusiast or a skilled contractor, our experts are on hand to offer tailored advice on product selection, project scope, and compliance with local regulations.",
    single: false,
    imgOne: blueprints,
    imgOneAlt: "Blueprints and digital tablet with construction plans.",
    imgTwo: personWorking,
    imgTwoAlt: "Person working in the office",
  },
  {
    isRightSection: false,
    title: "Transforming Designs into Reality",
    subTitle:
      "Our skilled craftsmen bring precision and excellence to every construction project. From minor installations to substantial structural work, ScrewFast offers reliable construction services to turn your plans into tangible outcomes. We ensure the highest standards of safety and workmanship, utilizing top-quality tools and materials from our extensive inventory.",
    img: beforeAfter,
    imgAlt: "Construction site before and after",
    btnExists: true,
    btnTitle: "Learn More",
    btnURL: "#",
  },
  {
    isRightSection: true,
    title: "Navigating Projects with Professional Oversight",
    subTitle:
      "Effective project management is at the heart of any successful build. ScrewFast provides thorough planning and robust management services that keep your project on time and within budget. Let us handle the complexities of workflow coordination, resource allocation, and stakeholder communication while you focus on your vision.",
    single: false,
    imgOne: constructionWorkers,
    imgOneAlt: "Construction workers orchestrating a project",
    imgTwo: aerialView,
    imgTwoAlt: "Aerial view of managed construction",
  },
  {
    isRightSection: false,
    title: "Ensuring Long-lasting Performance",
    subTitle:
      "Our commitment to your project doesn't end at completion. ScrewFast offers ongoing maintenance and support services to ensure your construction's longevity and performance. From regular check-ups to emergency assistance, our responsive team is there to provide seamless support.",
    img: usingTools,
    imgAlt:
      "Man in orange and black vest wearing white helmet holding yellow and black power tool",
  },
  {
    isRightSection: true,
    title: "Crafting Bespoke Strategies for Unique Challenges",
    subTitle:
      "For our larger enterprise clients, ScrewFast offers custom solutions designed to meet specific industry challenges. By understanding your unique needs, we engineer tailored strategies aimed at optimizing your operations, enhancing efficiency, and driving your business forward.",
    single: false,
    imgOne: progressBuilding,
    imgOneAlt: "In progress building structure",
    imgTwo: underConstruction,
    imgTwoAlt: "Brown and gray building under construction",
    btnExists: true,
    btnTitle: "Read more",
    btnURL: "#",
  },
];

const pageTitle: string = `Services | ${SITE.title}`;
---

<MainLayout
  title={pageTitle}
  structuredData={{
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://screwfast.uk/services",
    "url": "https://screwfast.uk/services",
    "name": "Expert Consultation Services | ScrewFast",
    "description": "Uniting expertise with your vision, ScrewFast provides exceptional service and comprehensive solutions in the hardware and construction industry, from consultation to project completion.",
    "isPartOf": {
        "@type": "WebSite",
        "url": "https://screwfast.uk",
        "name": "ScrewFast",
        "description": "ScrewFast offers top-tier hardware tools and expert construction services to meet all your project needs."
    },
    "inLanguage": "en-US"
  }}
>
  <!--MainSection is the introductory section of the page, it also contains a CTA button-->
  <MainSection
    title="Uniting Expertise with Your Vision"
    subTitle="At ScrewFast, we take pride in providing comprehensive solutions and exceptional service in the hardware and construction industry. Our experienced team is dedicated to supporting your project from inception to completion with a range of specialized services."
    btnExists={true}
    btnTitle="Schedule a Consultation"
    btnURL="#"
  />
  <!-- RightSection and LeftSection contain details about various services along with pertinent imagery.
  They alternate for variety in design.
  The 'btnExists' property is used to toggle the display of a button in these sections.
  When btnExists={true}, a button is displayed.
  This can be used to link to more detailed information or related resources.
  RightSection can also conditionally render one or two images based on the 'single' property.
  If 'single' is true, it displays one image, otherwise it displays two.
  -->
  {
    articles.map(article => {
      return article.isRightSection ? (
        <RightSection
          title={article.title}
          subTitle={article.subTitle}
          single={article.single}
          imgOne={article.imgOne}
          imgOneAlt={article.imgOneAlt}
          imgTwo={article.imgTwo}
          imgTwoAlt={article.imgTwoAlt}
          btnExists={article.btnExists}
          btnTitle={article.btnTitle}
          btnURL={article.btnURL}
        />
      ) : (
        <LeftSection
          title={article.title}
          subTitle={article.subTitle}
          img={article.img}
          imgAlt={article.imgAlt}
          btnExists={article.btnExists}
          btnTitle={article.btnTitle}
          btnURL={article.btnURL}
        />
      );
    })
  }
  <!--FeaturesStats section showcases essential stats valuable to users-->
  <FeaturesStats
    title="By the Numbers"
    subTitle="Our commitment to quality and reliability is evident in every project we undertake. At ScrewFast, we are dedicated to delivering industry-leading services that ensure your construction projects are built to last."
    mainStatTitle="96%"
    mainStatSubTitle="of our clients rate their experience with ScrewFast as exceptional"
    stats={[
      {
        stat: "99.8%",
        description: "project completion rate",
      },
      {
        stat: "5,000+",
        description: "successful installations",
      },
      {
        stat: "85%",
        description: "client growth year-over-year",
      },
    ]}
  />
</MainLayout>```

/src/pages/manifest.json.ts
```
import type { APIRoute, ImageMetadata } from "astro";
import { getImage } from "astro:assets";
import icon from "@images/icon.png";
import maskableIcon from "@images/icon-maskable.png";

interface Favicon {
  purpose: 'any' | 'maskable' | 'monochrome';
  src: ImageMetadata;
  sizes: number[];
}

const sizes = [192, 512];
const favicons: Favicon[] = [
  {
    purpose: 'any',
    src: icon,
    sizes,
  },
  {
    purpose: 'maskable',
    src: maskableIcon,
    sizes,
   },
];

export const GET: APIRoute = async () => {
  const icons = await Promise.all(
    favicons.flatMap((favicon) =>
      favicon.sizes.map(async (size) => {
        const image = await getImage({
          src: favicon.src,
          width: size,
          height: size,
          format: "png",
        });
        return {
          src: image.src,
          sizes: `${image.options.width}x${image.options.height}`,
          type: `image/${image.options.format}`,
          purpose: favicon.purpose,
        };
      }),
    ),
  );

  const manifest = {
    short_name: "ScrewFast",
    name: "ScrewFast",
    icons,
    display: "minimal-ui",
    id: "/",
    start_url: "/",
    theme_color: "#FFEDD5",
    background_color: "#262626",
  };

  return new Response(JSON.stringify(manifest));
};
```

/src/pages/contact.astro
```
---
// Import the necessary components
import MainLayout from "@/layouts/MainLayout.astro";
import ContactSection from "@components/sections/misc/ContactSection.astro";
import { SITE } from "@data/constants";

const pageTitle: string = `Contact | ${SITE.title}`;
---

<!--Utilizing MainLayout for the outer layout of the page, and defining meta for SEO purposes-->
<MainLayout
  title={pageTitle}
  structuredData={{
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://screwfast.uk/contact",
    "url": "https://screwfast.uk/contact",
    "name": "Contact Us | ScrewFast",
    "description":
      "Have questions or want to discuss a project? Reach out, and let's craft the perfect solution with our tools and services.",
    "isPartOf": {
      "@type": "WebSite",
      "url": "https://screwfast.uk",
      "name": "ScrewFast",
      "description":
        "ScrewFast offers top-tier hardware tools and expert construction services to meet all your project needs.",
    },
    "inLanguage": "en-US"
  }}
>
  <ContactSection />
</MainLayout>
```

/src/pages/insights/[...slug].astro
```
---
// Import section components
import { SITE } from "@data/constants";
import MainLayout from "@/layouts/MainLayout.astro";
import { Image } from "astro:assets";
import { getCollection } from "astro:content";

// Use `getStaticPaths` to generate static routes for generated pages on build
export async function getStaticPaths() {
  const insightPosts = await getCollection("insights", ({ id }) =>
    id.startsWith("en/")
  );
  return insightPosts.map((post) => {
    const slugWithoutLang = post.slug.replace(/^en\//, ""); // Remove the "fr/" prefix
    return {
      params: { slug: slugWithoutLang },
      props: { post },
    };
  });
}

// Get the props for this page that define a specific insight post
const { post } = Astro.props;

const { Content } = await post.render();

const pageTitle: string = `${post.data.title} | ${SITE.title}`;
---

<MainLayout title={pageTitle}>
  <section class="py-6 sm:py-8 lg:py-12">
    <div class="mx-auto max-w-screen-xl px-4 md:px-8">
      <div class="grid gap-8 md:grid-cols-2 lg:gap-12">
        <div>
          <div class="h-64 overflow-hidden rounded-lg shadow-lg md:h-auto">
            <Image
              class="h-full w-full object-cover object-center"
              src={post.data.cardImage}
              alt={post.data.cardImageAlt}
              draggable={"false"}
              format={"avif"}
            />
          </div>
          <div
            id="progress-mobile"
            class="fixed left-0 top-0 h-2 w-full bg-gradient-to-r from-orange-400/30 to-orange-400 md:hidden"
          >
          </div>
          <div id="pin" class="mt-10 hidden space-y-4 md:block">
            <div
              class="h-px w-full overflow-hidden bg-neutral-300 dark:bg-neutral-700"
            >
              <div
                id="progress"
                class="h-px w-full bg-gradient-to-r from-orange-400/30 to-orange-400"
              >
              </div>
            </div>
            <p class="text-pretty text-sm font-light text-neutral-500">
              Table of Contents:
            </p>
            <div id="toc" class="">
              <ul
                class="space-y-2 text-pretty text-base text-neutral-700 transition duration-300 dark:text-neutral-400"
              >
              </ul>
            </div>
          </div>
        </div>

        <div class="md:pt-8">
          <h1
            class="mb-4 text-balance text-center text-2xl font-bold text-neutral-800 dark:text-neutral-200 sm:text-3xl md:mb-6 md:text-left"
          >
            {post.data.title}
          </h1>

          <article
            class="text-pretty text-lg text-neutral-700 dark:text-neutral-300"
          >
            <Content />
          </article>
        </div>
      </div>
    </div>
  </section>
</MainLayout>

<style is:global>
  :root {
    --transition-cubic: cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  html {
    scroll-behavior: smooth;
  }

  article h2,
  article h3,
  article h4,
  article h5,
  article h6 {
    font-weight: bold;
    margin-top: 2.5rem;
    scroll-margin-top: 3rem;
  }

  h2 {
    font-size: 1.5rem;
    line-height: 2rem;
  }

  h3 {
    font-size: 1.25rem;
    line-height: 1.75rem;
  }

  h4 {
    font-size: 1.125rem;
    line-height: 1.75rem;
  }

  p {
    margin-top: 1.5rem;
  }

  #toc li {
    display: flex;
    align-items: center;
    opacity: 0.8;
    transition: all 300ms var(--transition-cubic);
  }

  #toc li.selected {
    opacity: 1;
  }

  #toc li svg {
    width: 0;
    height: 0;
    transition:
      height 400ms var(--transition-cubic),
      width 400ms var(--transition-cubic);
  }

  #toc li.selected svg {
    width: 1.25rem;
    height: 1.25rem;
    margin-right: 0.3rem;
  }
</style>

<script>
  const onScroll = (): void => {
    const article = document.querySelector("article");
    if (!article) return;

    const articleHeight = article.offsetHeight;
    const articleOffsetTop = article.offsetTop;

    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (articleHeight && articleOffsetTop && scrollTop) {
      const progress =
        ((scrollTop - articleOffsetTop) /
          (articleHeight - window.innerHeight)) *
        100;

      const progressBar = document.getElementById("progress");
      const progressBarMobile = document.getElementById("progress-mobile");

      if (progressBar && progressBarMobile) {
        progressBar.style.width = `${progress}%`;
        progressBarMobile.style.width = `${progress}%`;
      }
    }
  };

  document.addEventListener("DOMContentLoaded", (event) => {
    window.onscroll = onScroll;

    // Set initial width of progress bar
    const progressBar = document.getElementById("progress");
    const progressBarMobile = document.getElementById("progress-mobile");

    if (progressBar && progressBarMobile) {
      progressBar.style.width = "0%";
      progressBarMobile.style.width = "0%";
    }
  });
</script>
<script>
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";

  gsap.registerPlugin(ScrollTrigger);

  gsap.timeline({
    scrollTrigger: {
      scrub: 1,
      pin: true,
      trigger: "#pin",
      start: "top 20%",
      endTrigger: "footer",
      end: "top bottom",
    },
  });

  const SVG_HTML_STRING =
    '<svg class="w-0 h-0 flex-none" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fa5a15"><path stroke-linecap="round" stroke-linejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></svg>';

  function setActiveLinkById(id: string | null) {
    const listItems = document.querySelectorAll("#toc li");
    listItems.forEach((item) => item.classList.remove("selected"));

    if (!id) return;

    const activeLink = document.querySelector(`#toc a[href="#${id}"]`);

    if (!activeLink) return;

    const listItem = activeLink.parentElement;
    listItem?.classList.add("selected");
  }

  document.addEventListener("DOMContentLoaded", function () {
    // The article element that contains the Markdown content
    const article: HTMLElement | null = document.querySelector("article");
    // The ToC container <ul> element
    const tocList: HTMLElement | null = document.querySelector("#toc ul");

    const headings: NodeListOf<HTMLElement> | [] = article
      ? article.querySelectorAll("h1, h2, h3, h4, h5, h6")
      : [];

    headings.forEach((heading, i) => {
      if (heading instanceof HTMLElement) {
        const listItem = document.createElement("li");
        listItem.className = "toc-level-" + heading.tagName.toLowerCase();

        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = SVG_HTML_STRING;

        const svg = tempDiv.firstChild;
        listItem.appendChild(svg as Node);

        const link = document.createElement("a");
        link.href = "#" + heading.id;
        link.textContent = heading.textContent;
        listItem.appendChild(link);

        tocList?.appendChild(listItem);

        gsap.timeline({
          scrollTrigger: {
            trigger: heading,
            start: "top 20%",
            end: () =>
              `bottom top+=${i === headings.length - 1 ? 0 : (headings[i + 1] as HTMLElement).getBoundingClientRect().height}`,
            onEnter: () => setActiveLinkById(heading.id),
            onLeaveBack: () =>
              setActiveLinkById((headings[i - 1] as HTMLElement)?.id),
          },
        });
      }
    });
  });
</script>
```

/src/pages/products/index.astro
```
---
// Importing necessary components
import MainLayout from "@/layouts/MainLayout.astro";
import PrimaryCTA from "@components/ui/buttons/PrimaryCTA.astro";
import CardSmall from "@components/ui/cards/CardSmall.astro";
import CardWide from "@components/ui/cards/CardWide.astro";
import FeaturesStatsAlt from "@components/sections/features/FeaturesStatsAlt.astro";
import TestimonialsSectionAlt from "@components/sections/testimonials/TestimonialsSectionAlt.astro";

// Importing necessary functions from Astro
import { getCollection } from "astro:content";
import type { CollectionEntry } from "astro:content";
import { SITE } from "@data/constants";

// Fetching all the product related content and sorting it by main.id
const product: CollectionEntry<"products">[] = (
  await getCollection("products", ({ id }) => {
    return id.startsWith("en/");
  })
).sort(
  (a: CollectionEntry<"products">, b: CollectionEntry<"products">) =>
    a.data.main.id - b.data.main.id,
);

// Define variables for page content
const title: string = "Products";
const subTitle: string =
  "Explore the durability and precision of ScrewFast tools, designed for both professionals and enthusiasts. Each of our products is crafted with precision and built to last, ensuring you have the right tool for every job.";

// Testimonial data that will be rendered in the component
const testimonials = [
  // First testimonial data
  {
    content:
      " \"Since switching to ScrewFast's hardware tools, the efficiency on our construction sites has skyrocketed. The durability of the hex bolts and precision of the machine screws are simply unmatched. It's refreshing to work with a company that truly understands the daily demands of the industry.\" ",
    author: "Jason Clark",
    role: "Site Foreman | TopBuild",
    avatarSrc:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80",
    avatarAlt: "Image Description",
  },
  // Second testimonial data
  {
    content:
      " \"As an interior designer, I'm always looking for high-quality materials and tools that help bring my visions to life. ScrewFast's mixed screws assortment has been a game-changer for my projects, providing the perfect blend of quality and variety. The outstanding customer support was just the cherry on top!\" ",
    author: "Maria Gonzalez",
    role: "Interior Designer | Creative Spaces",
    avatarSrc:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80",
    avatarAlt: "Image Description",
  },
  // Third testimonial data
  {
    content:
      " \"I’ve been a professional carpenter for over 15 years, and I can sincerely say that ScrewFast’s tap bolts and nuts are some of the best I've used. They grip like no other, and I have full confidence in every joint and fixture. Plus, the service is impeccable – they truly care about my project's success.\" ",
    author: "Richard Kim",
    role: "Master Carpenter | WoodWright",
    avatarSrc:
      "https://images.unsplash.com/photo-1474176857210-7287d38d27c6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80",
    avatarAlt: "Image Description",
  },
];

const pageTitle: string = `Products | ${SITE.title}`;
---

<MainLayout
  title={pageTitle}
  structuredData={{
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://screwfast.uk/products",
    "url": "https://screwfast.uk/products",
    "name": "Hardware Tools | ScrewFast",
    "description": "Explore the durability and precision of ScrewFast tools, designed for both professionals and enthusiasts.",
    "isPartOf": {
      "@type": "WebSite",
      "url": "https://screwfast.uk",
      "name": "ScrewFast",
      "description": "ScrewFast offers top-tier hardware tools and expert construction services to meet all your project needs."
    },
    "inLanguage": "en-US"
  }}
>
  <div
    class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full"
  >
    <div class="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
      <div class="flex items-center gap-12">
        <h1
          class="text-balance text-2xl font-bold tracking-tight text-neutral-800 dark:text-neutral-200 md:text-4xl md:leading-tight"
        >
          {title}
        </h1>
        {
          subTitle && (
            <p class="hidden max-w-screen-sm text-pretty text-neutral-600 dark:text-neutral-400 md:block">
              {subTitle}
            </p>
          )
        }
      </div>
      <PrimaryCTA title="Customer Stories" url="#testimonials" noArrow={true} />
    </div>
    <!--Displaying products in alternating styles. Alternative product gets different card styling.-->
    <!--Maps through all product entries and displays them with either CardSmall or CardWide based on their position.-->
    <section class="grid grid-cols-1 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
      {
        product.map((product, index) => {
          const position = index % 4;
          if (position === 0 || position === 3) {
            return <CardSmall product={product} />;
          } else {
            return <CardWide product={product} />;
          }
        })
      }
    </section>
  </div>
  <!--Features statistics section-->
  <FeaturesStatsAlt
    title="Why Choose ScrewFast?"
    subTitle="Transform your ideas into tangible results with ScrewFast tools. Whether you're starting with a sketch on a napkin or diving into a comprehensive construction project, our tools are engineered to help you build with confidence."
    benefits={[
      "Robust and reliable tools for long-lasting performance.",
      "Innovative solutions tailored to modern construction needs.",
      "Customer support dedicated to your project's success.",
    ]}
  />
  <!--Testimonials section-->
  <TestimonialsSectionAlt
    title="What Our Customers Say"
    testimonials={testimonials}
  />
</MainLayout>
```

/src/pages/products/[...slug].astro
```
---
// Import section components
import MainLayout from "@/layouts/MainLayout.astro";
import ProductTabBtn from "@components/ui/buttons/ProductTabBtn.astro";
import PrimaryCTA from "@components/ui/buttons/PrimaryCTA.astro";
import { Image } from "astro:assets";
import { getCollection } from "astro:content";
import { SITE } from "@data/constants";

// Global declaration for gsap animation library
declare global {
  interface Window {
    gsap: any;
  }
}

// This gets the static paths for all the unique products

export async function getStaticPaths() {
  const productEntries = await getCollection("products", ({ id }) =>
    id.startsWith("en/")
  );
  return productEntries.map((product) => {
    const slugWithoutLang = product.slug.replace(/^en\//, ""); // Remove the "en/" prefix
    return {
      params: { slug: slugWithoutLang },
      props: { product },
    };
  });
}

const { product } = Astro.props;

const pageTitle: string = `${product.data.title} | ${SITE.title}`;
---

<MainLayout title={pageTitle}>
  <div id="overlay" class="fixed inset-0 bg-neutral-200 dark:bg-neutral-800">
  </div>

  <section
    class="mx-auto flex max-w-[85rem] flex-col px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full"
  >
    <div>
      <p
        id="fadeText"
        class="mb-8 max-w-prose text-pretty font-light text-neutral-700 dark:text-neutral-300 sm:text-xl"
      >
        {product.data.main.content}
      </p>
    </div>
    <div
      class="flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0"
    >
      <div id="fadeInUp">
        <h1
          class="block text-4xl font-bold tracking-tighter text-neutral-800 dark:text-neutral-200 sm:text-5xl md:text-6xl lg:text-7xl"
        >
          {product.data.title}
        </h1>
        <p class="text-lg text-neutral-600 dark:text-neutral-400">
          {product.data.description}
        </p>
      </div>
      <div>
        <Image
          id="fadeInMoveRight"
          src={product.data.main.imgMain}
          class="w-[600px]"
          alt={product.data.main.imgAlt}
          format={"avif"}
          loading={"eager"}
        />
      </div>
    </div>
  </section>

  <div class="mx-auto max-w-[85rem] px-4 pt-10 sm:px-6 lg:px-8 lg:pt-14">
    <nav
      class="mx-auto grid max-w-6xl gap-y-px sm:flex sm:gap-x-4 sm:gap-y-0"
      aria-label="Tabs"
      role="tablist"
    >
      {
        product.data.tabs.map((tab, index) => (
          <ProductTabBtn
            title={tab.title}
            id={tab.id}
            dataTab={tab.dataTab}
            first={index === 0}
          />
        ))
      }
    </nav>

    <div class="mt-12 md:mt-16">
      <div id="tabs-with-card-1" role="tabpanel">
        <div class="mx-auto max-w-[85rem] px-4 pb-10 sm:px-6 lg:px-8 lg:pb-14">
          <div class="grid gap-12 md:grid-cols-2">
            <div class="lg:w-3/4">
              <h2
                class="text-balance text-3xl font-bold tracking-tight text-neutral-800 dark:text-neutral-200 md:leading-tight lg:text-4xl"
              >
                {product.data.longDescription.title}
              </h2>
              <p
                class="mt-3 text-pretty text-neutral-600 dark:text-neutral-400"
              >
                {product.data.longDescription.subTitle}
              </p>
              <p class="mt-5">
                <PrimaryCTA
                  title={product.data.longDescription.btnTitle}
                  url={product.data.longDescription.btnURL}
                />
              </p>
            </div>

            <div class="space-y-6 lg:space-y-10">
              {
                product.data.descriptionList.map((list) => (
                  <div class="flex">
                    <div>
                      <h3 class="text-base font-bold text-neutral-800 dark:text-neutral-200 sm:text-lg">
                        {list.title}
                      </h3>
                      <p class="mt-1 text-neutral-600 dark:text-neutral-400">
                        {list.subTitle}
                      </p>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>

      <div id="tabs-with-card-2" class="hidden" role="tabpanel">
        <div class="mx-auto max-w-[85rem] px-4 pb-10 sm:px-6 lg:px-8 lg:pb-14">
          <div class="grid w-full grid-cols-1 gap-x-16 md:grid-cols-2">
            <div class="max-w-md space-y-6">
              {
                product.data.specificationsLeft.map((spec) => (
                  <div>
                    <h3 class="block font-bold text-neutral-800 dark:text-neutral-200">
                      {spec.title}
                    </h3>
                    <p class="text-neutral-600 dark:text-neutral-400">
                      {spec.subTitle}
                    </p>
                  </div>
                ))
              }
            </div>
            {
              product.data.specificationsRight ? (
                <div class="mt-6 max-w-md space-y-6 md:ml-auto md:mt-0">
                  {product.data.specificationsRight?.map((spec) => (
                    <div>
                      <h3 class="block font-bold text-neutral-800 dark:text-neutral-200">
                        {spec.title}
                      </h3>
                      <p class="text-neutral-600 dark:text-neutral-400">
                        {spec.subTitle}
                      </p>
                    </div>
                  ))}
                </div>
              ) : product.data.tableData ? (
                <div class="mt-6 space-y-6 md:ml-auto md:mt-0">
                  <div class="flex flex-col">
                    <div class="-m-1.5 overflow-x-auto">
                      <div class="inline-block min-w-full p-1.5 align-middle">
                        <div class="overflow-hidden">
                          <table class="min-w-full divide-y divide-neutral-300 dark:divide-neutral-700">
                            <thead>
                              <tr>
                                {product.data.tableData?.[0].feature?.map(
                                  (header) => (
                                    <th
                                      scope="col"
                                      class="px-6 py-3 text-start text-xs font-medium uppercase text-neutral-500 dark:text-neutral-500"
                                    >
                                      {header}
                                    </th>
                                  )
                                )}
                              </tr>
                            </thead>
                            <tbody class="divide-y divide-neutral-300 dark:divide-neutral-700">
                              {product.data.tableData?.map((row) =>
                                // Wrap each row's content in a separate <tr> element
                                row.description.map((rowData) => (
                                  <tr>
                                    {/* Iterate through each cell value in the row's description array */}
                                    {rowData.map((cellValue) => (
                                      // Render each cell value in its own <td> element
                                      <td class="whitespace-nowrap px-6 py-4 text-sm font-medium text-neutral-600 dark:text-neutral-400">
                                        {cellValue}
                                      </td>
                                    ))}
                                  </tr>
                                ))
                              )}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : null
            }
          </div>
        </div>
      </div>
    </div>
  </div>

  <div id="tabs-with-card-3" class="hidden" role="tabpanel">
    <div class="mx-auto mb-20 flex w-full md:mb-28 2xl:w-4/5">
      <div
        class="relative left-12 top-12 z-10 overflow-hidden rounded-xl shadow-lg md:left-12 md:top-16 md:-ml-12 lg:ml-0"
      >
        {
          product.data.blueprints.first && (
            <Image
              src={product.data.blueprints.first}
              class="h-full w-full object-cover object-center"
              alt="Blueprint Illustration"
              format={"avif"}
            />
          )
        }
      </div>

      <div class="relative right-12 overflow-hidden rounded-xl shadow-xl">
        {
          product.data.blueprints.second && (
            <Image
              src={product.data.blueprints.second}
              class="h-full w-full object-cover object-center"
              alt="Blueprint Illustration"
              format={"avif"}
            />
          )
        }
      </div>
    </div>
  </div>
</MainLayout>

<script>
  import { gsap } from "gsap";

  type AnimationSettings = {
    autoAlpha?: number;
    y?: number;
    x?: number;
    willChange?: string;
  };

  function setElementAnimationDefaults(
    id: string,
    settings: AnimationSettings
  ) {
    gsap.set(id, settings);
  }

  setElementAnimationDefaults("#fadeText", {
    autoAlpha: 0,
    y: 50,
    willChange: "transform, opacity",
  });

  setElementAnimationDefaults("#fadeInUp", {
    autoAlpha: 0,
    y: 50,
    willChange: "transform, opacity",
  });

  setElementAnimationDefaults("#fadeInMoveRight", {
    autoAlpha: 0,
    x: 300,
    willChange: "transform, opacity",
  });

  let timeline = gsap.timeline({ defaults: { overwrite: "auto" } });

  timeline.to("#fadeText", {
    duration: 1.5,
    autoAlpha: 1,
    y: 0,
    delay: 1,
    ease: "power2.out",
  });

  timeline.to(
    "#fadeInUp",
    { duration: 1.5, autoAlpha: 1, y: 0, ease: "power2.out" },
    "-=1.2"
  );

  timeline.to(
    "#fadeInMoveRight",
    { duration: 1.5, autoAlpha: 1, x: 0, ease: "power2.inOut" },
    "-=1.4"
  );

  timeline.to("#overlay", { duration: 1, autoAlpha: 0, delay: 0.2 });
</script>
<script>
  document.addEventListener("DOMContentLoaded", function () {
    function setButtonInactive(btn: any, activeButton: any) {
      if (btn !== activeButton) {
        btn.classList.remove(
          "active",
          "bg-neutral-100",
          "hover:border-transparent",
          "dark:bg-white/[.05]"
        );

        const tabId = btn.getAttribute("data-target");
        if (tabId) {
          const contentElement = document.querySelector(tabId);
          if (contentElement) {
            contentElement.classList.add("hidden");
          }
        }

        changeHeadingStyle(
          btn,
          ["text-neutral-800", "dark:text-neutral-200"],
          ["text-orange-400", "dark:text-orange-300"]
        );
      }
    }

    function activateButton(button: any) {
      button.classList.add(
        "active",
        "bg-neutral-100",
        ",hover:border-transparent",
        "dark:bg-white/[.05]"
      );

      const tabId = button.getAttribute("data-target");
      if (tabId) {
        const contentElementToShow = document.querySelector(tabId);
        if (contentElementToShow) {
          contentElementToShow.classList.remove("hidden");
        }
      }

      changeHeadingStyle(
        button,
        ["text-orange-400", "dark:text-orange-300"],
        ["text-neutral-800", "dark:text-neutral-200"]
      );
    }

    function changeHeadingStyle(
      button: any,
      addClasses: any,
      removeClasses: any
    ) {
      let heading = button.querySelector("span");
      if (heading) {
        heading.classList.remove(...removeClasses);
        heading.classList.add(...addClasses);
      }
    }

    const tabButtons = document.querySelectorAll("[data-target]");

    if (tabButtons.length > 0) {
      changeHeadingStyle(
        tabButtons[0],
        ["text-orange-400", "dark:text-orange-300"],
        []
      );
    }

    tabButtons.forEach((button) => {
      button.addEventListener("click", () => {
        tabButtons.forEach((btn) => setButtonInactive(btn, button));
        activateButton(button);
      });
    });
  });
</script>
```

/src/pages/blog/index.astro
```
---
// Import necessary components, modules, and types
import MainLayout from "@/layouts/MainLayout.astro";
import CardBlog from "@components/ui/cards/CardBlog.astro";
import CardBlogRecent from "@components/ui/cards/CardBlogRecent.astro";
import CardInsight from "@components/ui/cards/CardInsight.astro";
import { getCollection } from "astro:content";
import type { CollectionEntry } from "astro:content";
import { SITE } from "@data/constants";

// Get all blog posts and sort them based on publish date
const blogEntries = await getCollection("blog");
const insightsEntries = await getCollection("insights");

const blogPosts: CollectionEntry<"blog">[] = blogEntries.sort(
  (a: CollectionEntry<"blog">, b: CollectionEntry<"blog">) =>
    new Date(b.data.date).getTime() - new Date(a.data.date).getTime()
);

// Get all insights posts
const insightPosts: CollectionEntry<"insights">[] = insightsEntries;

// Separate the most recent post from others
const mostRecentPost: CollectionEntry<"blog"> = blogPosts[0];
const otherPosts: CollectionEntry<"blog">[] = blogPosts.slice(1);

// Define variables for page content
const title: string = "Your Gateway to Construction Excellence";
const subTitle: string =
  "Explore the latest news, tips, and insights from ScrewFast to enhance your construction projects. From product spotlights to project management strategies, our blog is your go-to resource for all things hardware and construction.";
const secondTitle: string = "Insights";
const secondSubTitle: string =
  "Stay up-to-date with the latest trends and developments in the construction industry with insights from ScrewFast's team of industry experts.";

const pageTitle: string = `Blog | ${SITE.title}`;
---

<MainLayout
  title={pageTitle}
  structuredData={{
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://screwfast.uk/blog",
    url: "https://screwfast.uk/blog",
    name: "Blog | ScrewFast",
    description:
      "Stay up-to-date with the latest trends and developments in the construction industry with insights from ScrewFast's team of industry experts.",
    isPartOf: {
      "@type": "WebSite",
      url: "https://screwfast.uk",
      name: "ScrewFast",
      description:
        "ScrewFast offers top-tier hardware tools and expert construction services to meet all your project needs.",
    },
    inLanguage: "en-US",
  }}
>
  <section
    class="mx-auto max-w-[85rem] space-y-8 px-4 pt-16 sm:px-6 lg:px-8 2xl:max-w-full"
  >
    <!--Page header-->
    <div class="mx-auto max-w-3xl text-left sm:text-center">
      <h1
        class="block text-balance text-4xl font-bold tracking-tight text-neutral-800 dark:text-neutral-200 md:text-5xl lg:text-6xl"
      >
        {title}
      </h1>

      <p
        class="mt-4 text-pretty text-lg text-neutral-600 dark:text-neutral-400"
      >
        {subTitle}
      </p>
    </div>
  </section>

  <section
    class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full"
  >
    <!--Blog posts grid-->
    <div class="grid gap-6 lg:grid-cols-2">
      {otherPosts.map((blogEntry) => <CardBlog blogEntry={blogEntry} />)}
    </div>
  </section>
  <!--Most recent blog post-->
  <section
    class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full"
  >
    <CardBlogRecent blogEntry={mostRecentPost} />
  </section>
  <!--Insights section-->
  <section
    class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full"
  >
    <div class="mx-auto mb-10 max-w-2xl text-center lg:mb-14">
      <h2
        class="text-2xl font-bold text-neutral-800 dark:text-neutral-200 md:text-4xl md:leading-tight"
      >
        {secondTitle}
      </h2>
      <p class="mt-1 text-pretty text-neutral-600 dark:text-neutral-400">
        {secondSubTitle}
      </p>
    </div>
    <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {insightPosts.map((insightEntry) => (
        <CardInsight insightEntry={insightEntry} />
      ))}
    </div>
  </section>
</MainLayout>
```

/src/pages/blog/[...slug].astro
```
---
// Import necessary components and utilities
import MainLayout from "@/layouts/MainLayout.astro";
import AvatarBlogLarge from "@components/ui/avatars/AvatarBlogLarge.astro";
import CardRelated from "@components/ui/cards/CardRelated.astro";
import Bookmark from "@components/ui/buttons/Bookmark.astro";
import SocialShare from "@components/ui/buttons/SocialShare.astro";
import PostFeedback from "@components/ui/feedback/PostFeedback.astro";
import { Image } from "astro:assets";
import { capitalize, formatDate } from "@utils/utils";
import { getCollection } from "astro:content";
import type { CollectionEntry } from "astro:content";
import { SITE } from "@data/constants";

// Update getStaticPaths for all posts
export async function getStaticPaths() {
  const blogPosts = await getCollection("blog");
  return blogPosts.map((post) => ({
    params: { slug: post.slug },
    props: { post },
  }));
}

// Get the current post's data
const { post } = Astro.props;

const blogPosts: CollectionEntry<"blog">[] = await getCollection("blog");

// Filter out the current post to get related posts
const relatedPosts: CollectionEntry<"blog">[] = blogPosts.filter(
  (blogEntry) => blogEntry.slug !== post.slug
);

const pageTitle: string = `${post.data.title} | ${SITE.title}`;
---

<MainLayout title={pageTitle}>
  <section class="mx-auto max-w-3xl px-4 pb-12 pt-6 sm:px-6 lg:px-8 lg:pt-10">
    <div class="max-w-2xl">
      <div class="mb-6 flex items-center justify-between">
        <div class="flex w-full gap-x-5 sm:items-center sm:gap-x-3">
          <AvatarBlogLarge blogEntry={post} />
          <div class="grow">
            <div class="flex items-center justify-between gap-x-2">
              <div>
                <!--Post metadata and author info-->
                <span class="font-bold text-neutral-700 dark:text-neutral-300">
                  {post.data.author}
                </span>
                <ul class="text-xs text-neutral-500">
                  <li
                    class="relative inline-block pe-6 before:absolute before:end-2 before:top-1/2 before:size-1 before:-translate-y-1/2 before:rounded-full before:bg-neutral-300 last:pe-0 last-of-type:before:hidden dark:text-neutral-400 dark:before:bg-neutral-600"
                  >
                    {formatDate(post.data.date)}
                  </li>
                  <li
                    class="relative inline-block pe-6 before:absolute before:end-2 before:top-1/2 before:size-1 before:-translate-y-1/2 before:rounded-full before:bg-neutral-300 last:pe-0 last-of-type:before:hidden dark:text-neutral-400 dark:before:bg-neutral-600"
                  >
                    {post.data.readTime} min read
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--Blog post title-->
      <h2
        class="mb-3 text-2xl font-bold text-neutral-800 dark:text-neutral-200 md:text-3xl"
      >
        {post.data.title}
      </h2>
      <!--Blog post contents-->
      <div class="mb-5 space-y-5 md:mb-8 md:space-y-8">
        <!-- Display the description as the main content -->
        <p class="text-pretty text-lg text-neutral-700 dark:text-neutral-300">
          {post.data.description}
        </p>
        <Image
          class="w-full rounded-xl object-cover"
          src={post.data.image}
          alt={post.data.title}
          draggable={"false"}
          format={"avif"}
        />
      </div>
      <div
        class="mx-auto grid max-w-screen-lg gap-y-5 sm:flex sm:items-center sm:justify-between sm:gap-y-0"
      >
        <!--Blog post tags-->
        <div
          class="flex flex-wrap gap-x-2 gap-y-1 sm:flex-nowrap sm:items-center sm:gap-y-0"
        >
          {post.data.tags?.map((tag) => (
            <span class="inline-flex items-center gap-x-1.5 rounded-lg bg-neutral-400/30 px-3 py-1.5 text-xs font-medium text-neutral-700 outline-none focus:outline-none focus-visible:outline-none focus-visible:ring dark:bg-neutral-700/60 dark:text-neutral-300">
              {capitalize(tag)}
            </span>
          ))}
        </div>
        <!--Bookmark and Share buttons-->
        <div class="flex items-center justify-end gap-x-1.5">
          <Bookmark />
          <div
            class="mx-3 block h-4 border-e border-neutral-400 dark:border-neutral-500"
          ></div>
          <div class="inline-flex">
            <SocialShare pageTitle={post.data.title} />
          </div>
        </div>
      </div>
    </div>
    <PostFeedback
      title="Was this post helpful?"
      firstChoice="Yes"
      secondChoice="No"
    />
  </section>

  <!--Related articles section-->
  <section class="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
    <div class="mb-10 max-w-2xl">
      <h2
        class="text-balance text-2xl font-bold text-neutral-800 dark:text-neutral-200 md:text-4xl md:leading-tight"
      >
        Related articles
      </h2>
    </div>

    <div class="grid grid-cols-2 gap-6">
      {relatedPosts.map((entry) => (
        <CardRelated blogEntry={entry} />
      ))}
    </div>
  </section>
</MainLayout>
```

