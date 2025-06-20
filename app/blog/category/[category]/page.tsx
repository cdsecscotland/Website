import BlogHero from "@/components/blog/blog-hero"
import BlogGrid from "@/components/blog/blog-grid"
import BlogCategories from "@/components/blog/blog-categories"
import { getBlogPostsByCategory } from "@/lib/blog-data"

interface CategoryPageProps {
 params: {
 category: string
 }
}

export default async function CategoryPage({ params }: CategoryPageProps) {
 const posts = await getBlogPostsByCategory(params.category)

 return (
 <main className="min-h-screen pt-20">
 <BlogHero
 title={`${params.category.charAt(0).toUpperCase() + params.category.slice(1)} Articles`}
 subtitle={`Latest insights and updates on ${params.category}`}
 />
 <BlogCategories activeCategory={params.category} />
 <BlogGrid initialPosts={posts} category={params.category} />
 </main>
 )
}
