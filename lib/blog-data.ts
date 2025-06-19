export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  author: string
  publishedAt: string
  updatedAt: string
  category: string
  tags: string[]
  featuredImage?: string
  featured: boolean
  readTime: number
  wordpressData?: {
    originalId: number
    originalUrl: string
    originalDate: string
    importedAt: string
  }
}


export async function getBlogPosts(page = 1, limit = 6, category?: string): Promise<BlogPost[]> {
  // Only import on server side
  if (typeof window === 'undefined') {
    const { getPaginatedBlogPosts } = await import('./markdown-blog')
    return getPaginatedBlogPosts(page, limit, category)
  }
  
  // Return empty array on client side - should not be called from client
  return []
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  // Only import on server side
  if (typeof window === 'undefined') {
    const { getBlogPostBySlug } = await import('./markdown-blog')
    return getBlogPostBySlug(slug)
  }
  
  // Return null on client side - should not be called from client
  return null
}

export async function getBlogPostsByCategory(category: string): Promise<BlogPost[]> {
  // Only import on server side
  if (typeof window === 'undefined') {
    const { getBlogPostsByCategory } = await import('./markdown-blog')
    return getBlogPostsByCategory(category)
  }
  
  // Return empty array on client side - should not be called from client
  return []
}

export async function getRelatedPosts(currentSlug: string, category: string, limit = 3): Promise<BlogPost[]> {
  // Only import on server side
  if (typeof window === 'undefined') {
    const { getRelatedBlogPosts } = await import('./markdown-blog')
    return getRelatedBlogPosts(currentSlug, category, limit)
  }
  
  // Return empty array on client side - should not be called from client
  return []
}

export async function getAllBlogSlugs(): Promise<string[]> {
  // Only import on server side
  if (typeof window === 'undefined') {
    const { getAllBlogSlugs } = await import('./markdown-blog')
    return getAllBlogSlugs()
  }
  
  // Return empty array on client side - should not be called from client
  return []
}

// WordPress Import Functions
export interface WordPressPost {
  id: number
  title: { rendered: string }
  content: { rendered: string }
  excerpt: { rendered: string }
  slug: string
  date: string
  modified: string
  author: number
  categories: number[]
  tags: number[]
  featured_media: number
  link: string
}

export async function importFromWordPress(wordpressUrl: string, apiKey?: string): Promise<BlogPost[]> {
  try {
    // Construct WordPress REST API URL
    const apiUrl = `${wordpressUrl}/wp-json/wp/v2/posts?per_page=100`

    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    }

    if (apiKey) {
      headers["Authorization"] = `Bearer ${apiKey}`
    }

    const response = await fetch(apiUrl, { headers })

    if (!response.ok) {
      throw new Error(`WordPress API error: ${response.status}`)
    }

    const wordpressPosts: WordPressPost[] = await response.json()

    // Convert WordPress posts to our BlogPost format
    const convertedPosts: BlogPost[] = await Promise.all(
      wordpressPosts.map(async (wpPost) => {
        // Get author name
        const authorResponse = await fetch(`${wordpressUrl}/wp-json/wp/v2/users/${wpPost.author}`)
        const authorData = authorResponse.ok ? await authorResponse.json() : null

        // Get categories
        const categoryPromises = wpPost.categories.map(async (catId) => {
          const catResponse = await fetch(`${wordpressUrl}/wp-json/wp/v2/categories/${catId}`)
          return catResponse.ok ? await catResponse.json() : null
        })
        const categories = await Promise.all(categoryPromises)

        // Get tags
        const tagPromises = wpPost.tags.map(async (tagId) => {
          const tagResponse = await fetch(`${wordpressUrl}/wp-json/wp/v2/tags/${tagId}`)
          return tagResponse.ok ? await tagResponse.json() : null
        })
        const tags = await Promise.all(tagPromises)

        // Get featured image
        let featuredImage = undefined
        if (wpPost.featured_media) {
          const mediaResponse = await fetch(`${wordpressUrl}/wp-json/wp/v2/media/${wpPost.featured_media}`)
          if (mediaResponse.ok) {
            const mediaData = await mediaResponse.json()
            featuredImage = mediaData.source_url
          }
        }

        return {
          id: `wp-${wpPost.id}`,
          title: wpPost.title.rendered,
          slug: wpPost.slug,
          excerpt: wpPost.excerpt.rendered.replace(/<[^>]*>/g, ""), // Strip HTML
          content: wpPost.content.rendered,
          author: authorData?.name || "Unknown Author",
          publishedAt: wpPost.date,
          updatedAt: wpPost.modified,
          category: mapWordPressCategory(categories[0]?.name || "uncategorized"),
          tags: tags.filter(Boolean).map((tag) => tag.name),
          featuredImage,
          featured: false,
          readTime: calculateReadTime(wpPost.content.rendered),
          wordpressData: {
            originalId: wpPost.id,
            originalUrl: wpPost.link,
            originalDate: wpPost.date,
            importedAt: new Date().toISOString(),
          },
        }
      }),
    )

    return convertedPosts
  } catch (error) {
    console.error("WordPress import failed:", error)
    throw error
  }
}

function mapWordPressCategory(wpCategory: string): string {
  const categoryMap: Record<string, string> = {
    security: "threat-intelligence",
    "penetration testing": "penetration-testing",
    pentesting: "penetration-testing",
    vulnerabilities: "vulnerability-research",
    compliance: "compliance",
    news: "industry-news",
    tools: "security-tools",
  }

  const normalized = wpCategory.toLowerCase()
  return categoryMap[normalized] || "industry-news"
}

function calculateReadTime(content: string): number {
  const wordsPerMinute = 200
  const wordCount = content.replace(/<[^>]*>/g, "").split(/\s+/).length
  return Math.ceil(wordCount / wordsPerMinute)
}

export async function saveImportedPosts(posts: BlogPost[]): Promise<void> {
  // This would typically save to your database
  // For now, we'll just log the imported posts
  console.log(
    `Imported ${posts.length} posts from WordPress:`,
    posts.map((p) => p.title),
  )
}
