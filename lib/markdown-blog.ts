import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { BlogPost } from './blog-data'

const blogDirectory = path.join(process.cwd(), 'content/blog')

interface MarkdownBlogPost {
 title: string
 description: string
 publishedAt: string
 author: string
 category: string
 tags: string[]
 featured: boolean
 image?: string
}

function calculateReadTime(content: string): number {
 const wordsPerMinute = 200
 const wordCount = content.split(/\s+/).length
 return Math.ceil(wordCount / wordsPerMinute)
}

function generateSlug(filename: string): string {
 return filename.replace(/\.md$/, '')
}

function generateId(slug: string): string {
 return Buffer.from(slug).toString('base64').slice(0, 8)
}

export function getAllBlogPosts(): BlogPost[] {
 if (!fs.existsSync(blogDirectory)) {
 return []
 }

 const fileNames = fs.readdirSync(blogDirectory)
 const allPostsData = fileNames
 .filter(fileName => fileName.endsWith('.md'))
 .map((fileName): BlogPost => {
 const slug = generateSlug(fileName)
 const fullPath = path.join(blogDirectory, fileName)
 const fileContents = fs.readFileSync(fullPath, 'utf8')

 // Use gray-matter to parse the post metadata section
 const matterResult = matter(fileContents)
 const frontmatter = matterResult.data as MarkdownBlogPost

 return {
 id: generateId(slug),
 title: frontmatter.title,
 slug,
 excerpt: frontmatter.description,
 content: matterResult.content,
 author: frontmatter.author,
 publishedAt: (frontmatter.publishedAt && frontmatter.publishedAt !== "undefined") ? frontmatter.publishedAt : new Date().toISOString(),
 updatedAt: (frontmatter.publishedAt && frontmatter.publishedAt !== "undefined") ? frontmatter.publishedAt : new Date().toISOString(),
 category: frontmatter.category,
 tags: frontmatter.tags,
 featuredImage: frontmatter.image,
 featured: frontmatter.featured,
 readTime: calculateReadTime(matterResult.content),
 }
 })

 // Sort posts by published date (newest first)
 return allPostsData.sort((a, b) => {
 if (a.publishedAt < b.publishedAt) {
 return 1
 } else {
 return -1
 }
 })
}

export function getBlogPostBySlug(slug: string): BlogPost | null {
 try {
 const fullPath = path.join(blogDirectory, `${slug}.md`)
 
 if (!fs.existsSync(fullPath)) {
 return null
 }

 const fileContents = fs.readFileSync(fullPath, 'utf8')
 const matterResult = matter(fileContents)
 const frontmatter = matterResult.data as MarkdownBlogPost

 return {
 id: generateId(slug),
 title: frontmatter.title,
 slug,
 excerpt: frontmatter.description,
 content: matterResult.content,
 author: frontmatter.author,
 publishedAt: (frontmatter.publishedAt && frontmatter.publishedAt !== "undefined") ? frontmatter.publishedAt : new Date().toISOString(),
 updatedAt: (frontmatter.publishedAt && frontmatter.publishedAt !== "undefined") ? frontmatter.publishedAt : new Date().toISOString(),
 category: frontmatter.category,
 tags: frontmatter.tags,
 featuredImage: frontmatter.image,
 featured: frontmatter.featured,
 readTime: calculateReadTime(matterResult.content),
 }
 } catch (error) {
 console.error(`Error loading blog post ${slug}:`, error)
 return null
 }
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
 const allPosts = getAllBlogPosts()
 return allPosts.filter(post => post.category === category)
}

export function getRelatedBlogPosts(currentSlug: string, category: string, limit = 3): BlogPost[] {
 const allPosts = getAllBlogPosts()
 return allPosts
 .filter(post => post.slug !== currentSlug && post.category === category)
 .slice(0, limit)
}

export function getAllBlogSlugs(): string[] {
 if (!fs.existsSync(blogDirectory)) {
 return []
 }

 const fileNames = fs.readdirSync(blogDirectory)
 return fileNames
 .filter(fileName => fileName.endsWith('.md'))
 .map(fileName => generateSlug(fileName))
}

export function getFeaturedBlogPosts(limit = 3): BlogPost[] {
 const allPosts = getAllBlogPosts()
 return allPosts.filter(post => post.featured).slice(0, limit)
}

export function getPaginatedBlogPosts(page = 1, limit = 6, category?: string): BlogPost[] {
 let posts = getAllBlogPosts()

 if (category) {
 posts = posts.filter(post => post.category === category)
 }

 const startIndex = (page - 1) * limit
 const endIndex = startIndex + limit

 return posts.slice(startIndex, endIndex)
}

export function getTotalBlogPosts(category?: string): number {
 let posts = getAllBlogPosts()

 if (category) {
 posts = posts.filter(post => post.category === category)
 }

 return posts.length
}

export function getAllCategories(): string[] {
 const allPosts = getAllBlogPosts()
 const categories = new Set(allPosts.map(post => post.category))
 return Array.from(categories)
}

export function getAllTags(): string[] {
 const allPosts = getAllBlogPosts()
 const tags = new Set(allPosts.flatMap(post => post.tags))
 return Array.from(tags)
}