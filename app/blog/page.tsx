import BlogHero from "@/components/blog/blog-hero"
import BlogGrid from "@/components/blog/blog-grid"
import BlogCategories from "@/components/blog/blog-categories"

export default function BlogPage() {
  return (
    <main className="min-h-screen pt-20">
      <BlogHero />
      <BlogCategories />
      <BlogGrid />
    </main>
  )
}
