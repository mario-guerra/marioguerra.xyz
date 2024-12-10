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
