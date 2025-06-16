import BlogHero from "@/components/blog/blog-hero"
import BlogGrid from "@/components/blog/blog-grid"
import BlogCategories from "@/components/blog/blog-categories"
import BlogNewsletter from "@/components/blog/blog-newsletter"

export default function BlogPage() {
  return (
    <main className="min-h-screen pt-20">
      <BlogHero />
      <BlogCategories />
      <BlogGrid />
      <BlogNewsletter />
    </main>
  )
}
