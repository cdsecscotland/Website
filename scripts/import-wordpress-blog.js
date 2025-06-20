#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

// Load the extracted blog data
const blogData = JSON.parse(fs.readFileSync('/home/cdsec/antropic/repo/wordpress_blog_posts_data.json', 'utf8'));

// Create directories
const blogDir = path.join(__dirname, '..', 'content', 'blog');
const imagesDir = path.join(__dirname, '..', 'public', 'images', 'blog');

if (!fs.existsSync(blogDir)) {
 fs.mkdirSync(blogDir, { recursive: true });
}
if (!fs.existsSync(imagesDir)) {
 fs.mkdirSync(imagesDir, { recursive: true });
}

// Download image function
function downloadImage(url, filename) {
 return new Promise((resolve, reject) => {
 const protocol = url.startsWith('https:') ? https : http;
 const file = fs.createWriteStream(filename);
 
 protocol.get(url, (response) => {
 if (response.statusCode === 200) {
 response.pipe(file);
 file.on('finish', () => {
 file.close();
 console.log(`Downloaded: ${filename}`);
 resolve(filename);
 });
 } else {
 console.error(`Failed to download ${url}: ${response.statusCode}`);
 resolve(null);
 }
 }).on('error', (err) => {
 console.error(`Error downloading ${url}:`, err.message);
 resolve(null);
 });
 });
}

// Convert HTML to markdown (basic conversion)
function htmlToMarkdown(html) {
 return html
 // Convert headings
 .replace(/<h([1-6])>/g, (match, level) => '#'.repeat(parseInt(level)) + ' ')
 .replace(/<\/h[1-6]>/g, '\n\n')
 // Convert paragraphs
 .replace(/<p>/g, '')
 .replace(/<\/p>/g, '\n\n')
 // Convert line breaks
 .replace(/<br\s*\/?>/g, '\n')
 // Convert strong/bold
 .replace(/<strong>(.*?)<\/strong>/g, '**$1**')
 .replace(/<b>(.*?)<\/b>/g, '**$1**')
 // Convert emphasis/italic
 .replace(/<em>(.*?)<\/em>/g, '*$1*')
 .replace(/<i>(.*?)<\/i>/g, '*$1*')
 // Convert links
 .replace(/<a href="([^"]*)"[^>]*>(.*?)<\/a>/g, '[$2]($1)')
 // Convert images
 .replace(/<img[^>]*src="([^"]*)"[^>]*alt="([^"]*)"[^>]*>/g, '![${2}]($1)')
 .replace(/<img[^>]*src="([^"]*)"[^>]*>/g, '![]($1)')
 // Convert lists
 .replace(/<ul>/g, '')
 .replace(/<\/ul>/g, '\n')
 .replace(/<ol>/g, '')
 .replace(/<\/ol>/g, '\n')
 .replace(/<li>/g, '- ')
 .replace(/<\/li>/g, '\n')
 // Convert code
 .replace(/<code>(.*?)<\/code>/g, '`$1`')
 .replace(/<pre>(.*?)<\/pre>/gs, '```\n$1\n```')
 // Remove remaining HTML tags
 .replace(/<[^>]*>/g, '')
 // Clean up multiple newlines
 .replace(/\n{3,}/g, '\n\n')
 // Decode HTML entities
 .replace(/&quot;/g, '"')
 .replace(/&apos;/g, "'")
 .replace(/&lt;/g, '<')
 .replace(/&gt;/g, '>')
 .replace(/&amp;/g, '&')
 .trim();
}

// Generate slug from title
function generateSlug(title) {
 return title
 .toLowerCase()
 .replace(/[^a-z0-9]+/g, '-')
 .replace(/^-+|-+$/g, '');
}

// Process each blog post
async function processBlogPosts() {
 console.log(`Processing ${blogData.posts.length} blog posts...`);
 
 for (const post of blogData.posts) {
 console.log(`\nProcessing: ${post.title}`);
 
 // Generate filename
 const slug = generateSlug(post.title);
 const filename = `${slug}.md`;
 const filepath = path.join(blogDir, filename);
 
 // Convert content to markdown
 const markdownContent = htmlToMarkdown(post.content);
 
 // Download featured image if exists
 let featuredImagePath = '';
 if (post.featured_image_url) {
 const imageUrl = post.featured_image_url;
 const imageExt = path.extname(imageUrl).split('?')[0] || '.jpg';
 const imageName = `${slug}-featured${imageExt}`;
 const imagePath = path.join(imagesDir, imageName);
 
 console.log(`Downloading featured image: ${imageUrl}`);
 const downloaded = await downloadImage(imageUrl, imagePath);
 if (downloaded) {
 featuredImagePath = `/images/blog/${imageName}`;
 }
 }
 
 // Download other images referenced in content
 const imageUrls = post.additional_image_urls || [];
 const processedContent = markdownContent; // We'll update image URLs here if needed
 
 // Create frontmatter
 const frontmatter = {
 title: post.title,
 description: post.content.replace(/<[^>]*>/g, '').substring(0, 160) + '...',
 publishedAt: post.published_date,
 author: post.author === 'info@cdsec.co.uk' ? 'Closed Door Security' : 'Security Engineer',
 category: 'cybersecurity',
 tags: post.categories.length > 0 ? post.categories : ['cybersecurity'],
 featured: !!featuredImagePath,
 ...(featuredImagePath && { image: featuredImagePath })
 };
 
 // Generate markdown file content
 const fileContent = `---
title: "${frontmatter.title.replace(/"/g, '\\"')}"
description: "${frontmatter.description.replace(/"/g, '\\"')}"
publishedAt: "${frontmatter.publishedAt}"
author: "${frontmatter.author}"
category: "${frontmatter.category}"
tags: [${frontmatter.tags.map(tag => `"${tag}"`).join(', ')}]
featured: ${frontmatter.featured}${frontmatter.image ? `\nimage: "${frontmatter.image}"` : ''}
---

${processedContent}
`;
 
 // Write the markdown file
 fs.writeFileSync(filepath, fileContent);
 console.log(`Created: ${filename}`);
 }
 
 console.log('\n✅ Blog import completed!');
 console.log(`📝 Created ${blogData.posts.length} markdown files in ${blogDir}`);
 console.log(`🖼️ Images downloaded to ${imagesDir}`);
}

// Run the import
processBlogPosts().catch(console.error);