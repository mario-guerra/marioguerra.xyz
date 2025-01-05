import fs from 'node:fs/promises'
import { globby } from 'globby'
import { minify } from 'html-minifier-terser'
import path from 'node:path'

// Get all HTML files from the output directory
const outputDir = path.join(process.cwd(),'dist');
const files = await globby(`${outputDir}/**/*.html`);

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
)