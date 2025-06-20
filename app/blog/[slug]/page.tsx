import { notFound } from "next/navigation"
import BlogPost from "@/components/blog/blog-post"
import RelatedPosts from "@/components/blog/related-posts"
import { getBlogPost, getAllBlogSlugs } from "@/lib/blog-data"

interface BlogPostPageProps {
 params: {
 slug: string
 }
}

export async function generateStaticParams() {
 const slugs = await getAllBlogSlugs()
 return slugs.map((slug) => ({
 slug: slug,
 }))
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
 const { slug } = await params
 const post = await getBlogPost(slug)

 if (!post) {
 notFound()
 }

 return (
 <main className="min-h-screen pt-20">
 <BlogPost post={post} />
 <RelatedPosts currentPostSlug={post.slug} category={post.category} />
 </main>
 )
}
