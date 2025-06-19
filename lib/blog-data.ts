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

// Mock data - replace with actual database calls
const mockPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Rise of AI-Powered Cyber Attacks: What Organizations Need to Know",
    slug: "ai-powered-cyber-attacks-organizations-guide",
    excerpt:
      "Artificial Intelligence is revolutionizing cybersecurity, but it's also empowering cybercriminals. Learn how to defend against AI-enhanced threats.",
    content: `
      <p>Artificial Intelligence has become a double-edged sword in the cybersecurity landscape. While it offers powerful defensive capabilities, it's also being weaponized by cybercriminals to launch more sophisticated and targeted attacks.</p>
      
      <h2>The Evolution of AI in Cyber Attacks</h2>
      <p>Modern threat actors are leveraging machine learning algorithms to automate reconnaissance, craft convincing phishing emails, and even develop polymorphic malware that can evade traditional detection systems.</p>
      
      <h3>Key AI-Powered Threat Vectors</h3>
      <ul>
        <li><strong>Deepfake Technology:</strong> Creating convincing audio and video content for social engineering attacks</li>
        <li><strong>Automated Vulnerability Discovery:</strong> Using AI to scan and identify zero-day vulnerabilities faster than security teams can patch them</li>
        <li><strong>Intelligent Phishing:</strong> Crafting personalized phishing campaigns using data scraped from social media and public sources</li>
        <li><strong>Adversarial Machine Learning:</strong> Poisoning AI models to cause misclassification and bypass security controls</li>
      </ul>
      
      <h2>Defense Strategies</h2>
      <p>Organizations must adopt a multi-layered approach to defend against AI-powered attacks:</p>
      
      <h3>1. AI-Powered Defense Systems</h3>
      <p>Implement machine learning-based security solutions that can detect anomalous behavior patterns and adapt to new threat vectors in real-time.</p>
      
      <h3>2. Enhanced Employee Training</h3>
      <p>Regular security awareness training should now include recognition of deepfakes and AI-generated content.</p>
      
      <h3>3. Zero Trust Architecture</h3>
      <p>Implement zero trust principles to minimize the impact of successful attacks and limit lateral movement.</p>
      
      <h2>Conclusion</h2>
      <p>As AI continues to evolve, so too will the threat landscape. Organizations that proactively adapt their security strategies and invest in AI-powered defenses will be better positioned to protect against these emerging threats.</p>
    `,
    author: "William Wright",
    publishedAt: "2024-01-15T10:00:00Z",
    updatedAt: "2024-01-15T10:00:00Z",
    category: "threat-intelligence",
    tags: ["AI", "Machine Learning", "Cyber Threats", "Defense Strategy"],
    featuredImage: "/images/cyber-security-team.jpg",
    featured: true,
    readTime: 8,
  },
  {
    id: "2",
    title: "OWASP Top 10 2024: Critical Web Application Security Risks",
    slug: "owasp-top-10-2024-web-security-risks",
    excerpt:
      "The latest OWASP Top 10 list reveals emerging web application vulnerabilities. Discover the critical risks and how to mitigate them effectively.",
    content: `
      <p>The Open Web Application Security Project (OWASP) has released its updated Top 10 list for 2024, highlighting the most critical security risks facing web applications today.</p>
      
      <h2>The 2024 OWASP Top 10</h2>
      <ol>
        <li><strong>A01:2024 – Broken Access Control</strong></li>
        <li><strong>A02:2024 – Cryptographic Failures</strong></li>
        <li><strong>A03:2024 – Injection</strong></li>
        <li><strong>A04:2024 – Insecure Design</strong></li>
        <li><strong>A05:2024 – Security Misconfiguration</strong></li>
        <li><strong>A06:2024 – Vulnerable and Outdated Components</strong></li>
        <li><strong>A07:2024 – Identification and Authentication Failures</strong></li>
        <li><strong>A08:2024 – Software and Data Integrity Failures</strong></li>
        <li><strong>A09:2024 – Security Logging and Monitoring Failures</strong></li>
        <li><strong>A10:2024 – Server-Side Request Forgery (SSRF)</strong></li>
      </ol>
      
      <h2>Key Changes and Trends</h2>
      <p>This year's list reflects the evolving threat landscape, with particular emphasis on supply chain attacks and cloud security misconfigurations.</p>
      
      <h3>Mitigation Strategies</h3>
      <p>For each vulnerability category, organizations should implement comprehensive testing and remediation strategies as part of their secure development lifecycle.</p>
    `,
    author: "Cassius Edison",
    publishedAt: "2024-01-10T14:30:00Z",
    updatedAt: "2024-01-10T14:30:00Z",
    category: "vulnerability-research",
    tags: ["OWASP", "Web Security", "Vulnerabilities", "Application Security"],
    featuredImage: "/images/owasp-top-10.png",
    featured: false,
    readTime: 6,
  },
  {
    id: "3",
    title: "Penetration Testing in the Cloud: Best Practices for AWS, Azure, and GCP",
    slug: "cloud-penetration-testing-best-practices",
    excerpt:
      "Cloud environments present unique security challenges. Learn the essential techniques and considerations for effective cloud penetration testing.",
    content: `
      <p>As organizations increasingly migrate to cloud platforms, penetration testing methodologies must evolve to address the unique security challenges of cloud environments.</p>
      
      <h2>Cloud-Specific Testing Considerations</h2>
      <p>Traditional penetration testing approaches often fall short in cloud environments due to shared responsibility models, dynamic infrastructure, and service-specific vulnerabilities.</p>
      
      <h3>AWS Security Testing</h3>
      <ul>
        <li>IAM policy analysis and privilege escalation testing</li>
        <li>S3 bucket enumeration and misconfiguration assessment</li>
        <li>Lambda function security evaluation</li>
        <li>VPC and security group configuration review</li>
      </ul>
      
      <h3>Azure Security Assessment</h3>
      <ul>
        <li>Azure Active Directory configuration testing</li>
        <li>Storage account security evaluation</li>
        <li>Function app and logic app security review</li>
        <li>Network security group analysis</li>
      </ul>
      
      <h3>Google Cloud Platform Testing</h3>
      <ul>
        <li>Cloud IAM and service account security</li>
        <li>Cloud Storage bucket permissions</li>
        <li>Cloud Functions security assessment</li>
        <li>VPC firewall rule evaluation</li>
      </ul>
      
      <h2>Automated Testing Tools</h2>
      <p>Leverage cloud-native security tools and open-source solutions to automate vulnerability discovery and compliance checking.</p>
    `,
    author: "Conor Agnew",
    publishedAt: "2024-01-05T09:15:00Z",
    updatedAt: "2024-01-05T09:15:00Z",
    category: "penetration-testing",
    tags: ["Cloud Security", "AWS", "Azure", "GCP", "Penetration Testing"],
    featuredImage: "/images/cloud-pentesting.png",
    featured: true,
    readTime: 10,
  },
]

export async function getBlogPosts(page = 1, limit = 6, category?: string): Promise<BlogPost[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500))

  let filteredPosts = mockPosts

  if (category) {
    filteredPosts = mockPosts.filter((post) => post.category === category)
  }

  const startIndex = (page - 1) * limit
  const endIndex = startIndex + limit

  return filteredPosts.slice(startIndex, endIndex)
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 300))

  return mockPosts.find((post) => post.slug === slug) || null
}

export async function getBlogPostsByCategory(category: string): Promise<BlogPost[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 400))

  return mockPosts.filter((post) => post.category === category)
}

export async function getRelatedPosts(currentPostId: string, category: string, limit = 3): Promise<BlogPost[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 300))

  return mockPosts.filter((post) => post.id !== currentPostId && post.category === category).slice(0, limit)
}

export async function getAllBlogSlugs(): Promise<string[]> {
  return mockPosts.map((post) => post.slug)
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
