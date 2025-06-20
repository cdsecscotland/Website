"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import ScrollAnimation from "../scroll-animation"
import { getRelatedPosts, type BlogPost } from "@/lib/blog-data"

interface RelatedPostsProps {
 currentPostSlug: string
 category: string
}

export default function RelatedPosts({ currentPostSlug, category }: RelatedPostsProps) {
 const [posts, setPosts] = useState<BlogPost[]>([])
 const [loading, setLoading] = useState(true)

 useEffect(() => {
 const loadRelatedPosts = async () => {
 try {
 const relatedPosts = await getRelatedPosts(currentPostSlug, category, 3)
 setPosts(relatedPosts)
 } catch (error) {
 console.error("Failed to load related posts:", error)
 } finally {
 setLoading(false)
 }
 }

 loadRelatedPosts()
 }, [currentPostSlug, category])

 if (loading || posts.length === 0) {
 return null
 }

 return (
 <section className="py-20 bg-gray-50/95 backdrop-blur-sm">
 <div className="container">
 <ScrollAnimation animation="fade">
 <div className="text-center mb-12">
 <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">Related Articles</h2>
 <p className="text-lg text-charcoal/70 ">
 Continue reading about {category.replace("-", " ")}
 </p>
 </div>
 </ScrollAnimation>

 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
 {posts.map((post, index) => (
 <ScrollAnimation key={post.id} animation="slide-up" delay={0.2 * index}>
 <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg bg-white h-full overflow-hidden">
 <div className="relative h-48 overflow-hidden">
 <Image
 src={post.featuredImage || "/placeholder.svg?height=200&width=400"}
 alt={post.title}
 fill
 className="object-cover group-hover:scale-110 transition-transform duration-300"
 />
 <div className="absolute top-4 left-4">
 <Badge className="bg-brandyellow text-charcoal">{post.category}</Badge>
 </div>
 </div>

 <CardHeader className="pb-4">
 <div className="flex items-center gap-4 text-sm text-charcoal/60 mb-3">
 <div className="flex items-center gap-1">
 <Calendar className="w-4 h-4" />
 {new Date(post.publishedAt).toLocaleDateString()}
 </div>
 <div className="flex items-center gap-1">
 <Clock className="w-4 h-4" />
 {post.readTime} min read
 </div>
 </div>

 <h3 className="text-lg font-bold text-charcoal group-hover:text-brandyellow transition-colors line-clamp-2">
 {post.title}
 </h3>
 </CardHeader>

 <CardContent className="pt-0">
 <p className="text-charcoal/70 mb-4 line-clamp-2">{post.excerpt}</p>

 <Link
 href={`/blog/${post.slug}`}
 className="inline-flex items-center text-brandyellow hover:text-brightyellow font-semibold group"
 >
 Read More
 <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
 </Link>
 </CardContent>
 </Card>
 </ScrollAnimation>
 ))}
 </div>
 </div>
 </section>
 )
}
