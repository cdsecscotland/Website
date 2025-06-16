"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, User, ArrowRight } from "lucide-react"
import ScrollAnimation from "../scroll-animation"
import { getBlogPosts, type BlogPost } from "@/lib/blog-data"

interface BlogGridProps {
  initialPosts?: BlogPost[]
  category?: string
}

export default function BlogGrid({ initialPosts, category }: BlogGridProps) {
  const [posts, setPosts] = useState<BlogPost[]>(initialPosts || [])
  const [loading, setLoading] = useState(!initialPosts)
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(true)

  useEffect(() => {
    if (!initialPosts) {
      loadPosts()
    }
  }, [initialPosts])

  const loadPosts = async () => {
    setLoading(true)
    try {
      const newPosts = await getBlogPosts(page, 6, category)
      if (page === 1) {
        setPosts(newPosts)
      } else {
        setPosts((prev) => [...prev, ...newPosts])
      }
      setHasMore(newPosts.length === 6)
    } catch (error) {
      console.error("Failed to load posts:", error)
    } finally {
      setLoading(false)
    }
  }

  const loadMore = () => {
    setPage((prev) => prev + 1)
    loadPosts()
  }

  if (loading && posts.length === 0) {
    return (
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <Card key={i} className="animate-pulse">
                <div className="h-48 bg-gray-200 dark:bg-gray-700 rounded-t-lg"></div>
                <CardContent className="p-6">
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mb-4 w-3/4"></div>
                  <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
                  <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 bg-white/95 dark:bg-charcoal/95 backdrop-blur-sm">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {posts.map((post, index) => (
            <ScrollAnimation key={post.id} animation="slide-up" delay={0.1 * (index % 6)}>
              <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg bg-white dark:bg-charcoal/80 h-full overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.featuredImage || "/placeholder.svg?height=200&width=400"}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className={getCategoryColor(post.category)}>{post.category}</Badge>
                  </div>
                  {post.featured && (
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-brandyellow text-charcoal">Featured</Badge>
                    </div>
                  )}
                </div>

                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4 text-sm text-charcoal/60 dark:text-white/60 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.publishedAt).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime} min read
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-charcoal dark:text-white group-hover:text-brandyellow transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                </CardHeader>

                <CardContent className="pt-0">
                  <p className="text-charcoal/70 dark:text-white/70 mb-4 line-clamp-3">{post.excerpt}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-brandyellow/20 rounded-full flex items-center justify-center">
                        <User className="w-4 h-4 text-charcoal dark:text-brandyellow" />
                      </div>
                      <span className="text-sm text-charcoal/70 dark:text-white/70">{post.author}</span>
                    </div>

                    <Link href={`/blog/${post.slug}`}>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="group-hover:bg-brandyellow/20 group-hover:text-charcoal dark:group-hover:text-brandyellow"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimation>
          ))}
        </div>

        {hasMore && (
          <div className="text-center">
            <Button
              onClick={loadMore}
              disabled={loading}
              size="lg"
              className="bg-charcoal dark:bg-brandyellow hover:bg-charcoal/90 dark:hover:bg-brightyellow text-white dark:text-charcoal"
            >
              {loading ? "Loading..." : "Load More Articles"}
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}

function getCategoryColor(category: string): string {
  const colors: Record<string, string> = {
    "threat-intelligence": "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
    "penetration-testing": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
    "vulnerability-research": "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
    compliance: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
    "industry-news": "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
    "security-tools": "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
  }
  return colors[category] || "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200"
}
