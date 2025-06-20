# How to Add New Blog Posts to CDSEC Website

This guide explains how to add new blog posts to the CDSEC website, which uses a markdown-based blog system.

## Quick Overview

The blog system reads markdown files from the `/content/blog/` directory and automatically generates blog pages. Each blog post is a markdown file with frontmatter metadata.

## Step-by-Step Process

### 1. Create the Blog Post File

Navigate to the blog content directory:
```bash
cd /home/cdsec/antropic/repo/cdsec-website/content/blog/
```

Create a new markdown file with a descriptive filename:
```bash
# Use kebab-case (lowercase with hyphens)
# Example: your-blog-post-title.md
touch your-new-blog-post.md
```

### 2. Add Frontmatter Metadata

Every blog post must start with YAML frontmatter containing metadata. Copy and paste this template at the top of your new markdown file:

```yaml
---
title: "Your Blog Post Title Here"
excerpt: "A brief description of your blog post that appears in blog listings and social media previews. Keep it under 160 characters for SEO."
publishedAt: "2024-12-20"
author: "Author Name"
category: "penetration-testing"
featured: false
featuredImage: "/images/blog/your-image.jpg"
readTime: 5
slug: "your-blog-post-title"
tags: ["Security", "Penetration Testing", "Cybersecurity"]
---
```

### 3. Frontmatter Field Descriptions

| Field | Required | Description | Example |
|-------|----------|-------------|---------|
| `title` | ✅ Yes | The main title of your blog post | "VAPT vs Penetration Testing" |
| `excerpt` | ✅ Yes | Brief description for previews (under 160 chars) | "Understanding the key differences..." |
| `publishedAt` | ✅ Yes | Publication date in YYYY-MM-DD format | "2024-12-20" |
| `author` | ✅ Yes | Author's name | "William Wright" |
| `category` | ✅ Yes | Main category (see categories below) | "penetration-testing" |
| `featured` | ❌ No | Whether to feature on homepage | `true` or `false` |
| `featuredImage` | ❌ No | Path to blog post image | "/images/blog/post.jpg" |
| `readTime` | ❌ No | Estimated reading time in minutes | `5` |
| `slug` | ✅ Yes | URL-friendly version of title | "vapt-vs-penetration-testing" |
| `tags` | ❌ No | Array of relevant tags | `["Security", "Testing"]` |

### 4. Available Categories

Use one of these predefined categories:

- `penetration-testing`
- `vulnerability-research`
- `compliance`
- `threat-intelligence`
- `industry-news`
- `security-tools`

### 5. Write Your Blog Content

After the frontmatter, add your blog content using standard markdown:

```markdown
# Main Heading

Your introduction paragraph here...

## Subheading

More content with **bold text** and *italic text*.

### Smaller Subheading

- Bullet point 1
- Bullet point 2
- Bullet point 3

1. Numbered list item
2. Another item

> This is a blockquote for important information

```

### 6. Adding Images

To include images in your blog post:

1. **Add images to the public directory:**
   ```bash
   # Place images in the public/images/blog/ directory
   cp your-image.jpg /home/cdsec/antropic/repo/cdsec-website/public/images/blog/
   ```

2. **Reference images in markdown:**
   ```markdown
   ![Alt text description](/images/blog/your-image.jpg)
   ```

3. **Set featured image in frontmatter:**
   ```yaml
   featuredImage: "/images/blog/your-image.jpg"
   ```

### 7. Best Practices

#### SEO Optimization:
- Keep titles under 60 characters
- Write compelling excerpts under 160 characters
- Use descriptive alt text for images
- Include relevant keywords naturally

#### Content Structure:
- Use clear headings (H1, H2, H3)
- Break up text with bullet points and numbered lists
- Include relevant internal links to other pages
- Add a clear call-to-action at the end

#### Image Guidelines:
- Use high-quality images (minimum 1200px wide)
- Optimize file sizes for web (under 500KB)
- Use descriptive filenames
- Include alt text for accessibility

### 8. Testing Your Blog Post

After creating your blog post:

1. **Start the development server:**
   ```bash
   cd /home/cdsec/antropic/repo/cdsec-website
   npm run dev
   ```

2. **Visit your blog post:**
   - Go to: `http://localhost:3000/blog/your-slug-here`
   - Check the blog listing: `http://localhost:3000/blog`

3. **Verify everything works:**
   - ✅ Title displays correctly
   - ✅ Excerpt shows in blog listing
   - ✅ Images load properly
   - ✅ Links work
   - ✅ Formatting looks good

### 9. Publishing Process

1. **Commit your changes:**
   ```bash
   git add content/blog/your-new-blog-post.md
   git add public/images/blog/your-image.jpg  # if you added images
   git commit -m "Add new blog post: Your Post Title"
   ```

2. **Push to GitHub:**
   ```bash
   git push origin main
   ```

3. **Deployment:**
   The blog post will automatically be deployed to the live website.

## Example Complete Blog Post

Here's a complete example of a properly formatted blog post:

```markdown
---
title: "5 Essential Penetration Testing Best Practices"
excerpt: "Discover the key practices that make penetration testing more effective and valuable for your organization's security posture."
publishedAt: "2024-12-20"
author: "William Wright"
category: "penetration-testing"
featured: true
featuredImage: "/images/blog/penetration-testing-best-practices.jpg"
readTime: 7
slug: "penetration-testing-best-practices"
tags: ["Penetration Testing", "Security", "Best Practices", "Cybersecurity"]
---

# 5 Essential Penetration Testing Best Practices

Penetration testing is a crucial component of any comprehensive security program. However, not all penetration tests are created equal...

## 1. Define Clear Scope and Objectives

Before beginning any penetration test, it's essential to...

### Pre-engagement Planning
- Document all systems in scope
- Establish communication protocols
- Set clear success criteria

## 2. Follow a Structured Methodology

Professional penetration testing should follow established frameworks...

![Penetration Testing Methodology](/images/blog/pentest-methodology.jpg)

## Conclusion

By following these best practices, organizations can ensure they get maximum value from their penetration testing investments.

**Ready to improve your penetration testing program?** [Contact our CREST-certified team](/contact) to discuss your security testing requirements.
```

## Troubleshooting

### Common Issues:

1. **Blog post not appearing:**
   - Check frontmatter syntax (YAML formatting)
   - Ensure required fields are present
   - Verify file is in `/content/blog/` directory

2. **Images not loading:**
   - Confirm images are in `/public/images/blog/`
   - Check file paths start with `/images/blog/`
   - Verify image file extensions

3. **Formatting issues:**
   - Check markdown syntax
   - Ensure proper spacing around headings
   - Verify list formatting

### Getting Help:

If you encounter issues while adding blog posts, contact the development team or refer to the Next.js and markdown documentation.

## Summary

Adding blog posts to the CDSEC website is straightforward:

1. Create a markdown file in `/content/blog/`
2. Add proper frontmatter metadata
3. Write your content in markdown
4. Add any images to `/public/images/blog/`
5. Test locally
6. Commit and push to deploy

The blog system will automatically handle URL generation, category filtering, pagination, and SEO optimization based on your frontmatter metadata.