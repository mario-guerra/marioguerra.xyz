// vite-plugin-transform-links.mjs
import { loadEnv } from 'vite';
export default function transformLinks() {
    let env;
    return {
        name: "transform-links",
        enforce: "pre",
        config(config, { mode }) {
            env = loadEnv(mode, process.cwd(), '');
        },
        transform(code, id) {
            if (id.endsWith(".astro") || id.endsWith(".jsx") || id.endsWith(".tsx")) {
                console.log(`Transforming code for file: ${id}`);
                const transformedCode = code.replace(/<a([^>]*?)href="([^"]*)"([^>]*)>([\s\S]*?)<\/a>/g,
                    (match, beforeHref, href, afterHref, text) => {
                        console.log("Original link: ", match);
                        const isExternal = href.startsWith("http://") || href.startsWith("https://")

                        if (isExternal) {
                            console.log("External Link found, no transformation applied");
                            return `<a${beforeHref}href="${href}"${afterHref}>${text}</a>`;
                        }

                        const finalHref = env.PUBLIC_BASE !== "/" ? `${env.PUBLIC_BASE}${href}` : href;
                         console.log("Transformed Link: ", `<a${beforeHref}href="${finalHref}"${afterHref}>${text}</a>`);
                        return `<a${beforeHref}href="${finalHref}"${afterHref}>${text}</a>`;
                    }
                );
                console.log("Transformed code: ", transformedCode);
                return {
                    code: transformedCode,
                    map: null
                };
            }
        },
    };
}