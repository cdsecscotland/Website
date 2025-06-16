"use client"

import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, User, Share2, ArrowLeft, Tag } from "lucide-react"
import ScrollAnimation from "../scroll-animation"
import type { BlogPost as BlogPostType } from "@/lib/blog-data"

interface BlogPostProps {
  post: BlogPostType
}

export default function BlogPost({ post }: BlogPostProps) {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      })
    } else {
      navigator.clipboard.writeText(window.location.href)
    }
  }

  return (
    <article className="py-20 bg-white/95 dark:bg-charcoal/95 backdrop-blur-sm">
      <div className="container max-w-4xl">
        <ScrollAnimation animation="fade">
          <div className="mb-8">
            <Link href="/blog">
              <Button variant="ghost" className="mb-6">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Button>
            </Link>

            <div className="flex items-center gap-4 mb-6">
              <Badge className={getCategoryColor(post.category)}>{post.category}</Badge>
              {post.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="flex items-center gap-1">
                  <Tag className="w-3 h-3" />
                  {tag}
                </Badge>
              ))}
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-charcoal dark:text-white mb-6 leading-tight">
              {post.title}
            </h1>

            <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-6 text-charcoal/70 dark:text-white/70">
                <div className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  <span className="font-medium">{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>
                    {new Date(post.publishedAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>{post.readTime} min read</span>
                </div>
              </div>

              <Button onClick={handleShare} variant="outline" size="sm">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animation="slide-up" delay={0.2}>
          {post.featuredImage && (
            <div className="relative h-96 mb-12 rounded-2xl overflow-hidden shadow-2xl">
              <Image src={post.featuredImage || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
            </div>
          )}
        </ScrollAnimation>

        <ScrollAnimation animation="fade" delay={0.4}>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <div className="text-xl text-charcoal/80 dark:text-white/80 mb-8 font-medium leading-relaxed">
              {post.excerpt}
            </div>

            <div className="blog-content" dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
        </ScrollAnimation>

        {post.wordpressData && (
          <ScrollAnimation animation="fade" delay={0.6}>
            <div className="mt-12 p-6 bg-gray-50 dark:bg-charcoal/50 rounded-lg">
              <p className="text-sm text-charcoal/60 dark:text-white/60">
                Originally published on WordPress: {new Date(post.wordpressData.originalDate).toLocaleDateString()}
                {post.wordpressData.originalUrl && (
                  <span>
                    {" • "}
                    <a
                      href={post.wordpressData.originalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brandyellow hover:underline"
                    >
                      View Original
                    </a>
                  </span>
                )}
              </p>
            </div>
          </ScrollAnimation>
        )}
      </div>
    </article>
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
