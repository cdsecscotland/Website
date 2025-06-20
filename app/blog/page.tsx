import BlogHero from "@/components/blog/blog-hero"
import BlogGrid from "@/components/blog/blog-grid"
import BlogCategories from "@/components/blog/blog-categories"
import { getBlogPosts } from "@/lib/blog-data"

export default async function BlogPage() {
 const initialPosts = await getBlogPosts(1, 6)

 return (
 <main className="min-h-screen pt-20">
 <BlogHero />
 <BlogCategories />
 <BlogGrid initialPosts={initialPosts} />
 </main>
 )
}
