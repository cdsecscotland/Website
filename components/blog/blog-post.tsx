"use client"

import Image from "next/image"
import Link from "next/link"
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
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
 if (typeof window === 'undefined') return
 
 if (navigator?.share) {
 navigator.share({
 title: post.title,
 text: post.excerpt,
 url: window.location.href,
 })
 } else if (navigator?.clipboard) {
 navigator.clipboard.writeText(window.location.href)
 }
 }

 return (
 <article className="py-20 bg-white/95 backdrop-blur-sm">
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

 <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 leading-tight">
 {post.title}
 </h1>

 <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
 <div className="flex items-center gap-6 text-charcoal/70 ">
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
 <div className="prose prose-lg max-w-none">
 <div className="text-xl text-charcoal/80 mb-8 font-medium leading-relaxed">
 {post.excerpt}
 </div>

 <div className="blog-content">
 <ReactMarkdown 
 remarkPlugins={[remarkGfm]}
 rehypePlugins={[rehypeRaw]}
 components={{
 img: ({ node, ...props }) => (
 <Image
 {...props}
 src={props.src || '/placeholder.svg'}
 alt={props.alt || ''}
 width={800}
 height={400}
 className="rounded-lg my-8 w-full h-auto"
 />
 ),
 a: ({ node, ...props }) => (
 <Link
 href={props.href || '#'}
 className="text-brandyellow hover:text-brightyellow underline"
 target={props.href?.startsWith('http') ? '_blank' : '_self'}
 rel={props.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
 >
 {props.children}
 </Link>
 ),
 }}
 >
 {post.content}
 </ReactMarkdown>
 </div>
 </div>
 </ScrollAnimation>

 {post.wordpressData && (
 <ScrollAnimation animation="fade" delay={0.6}>
 <div className="mt-12 p-6 bg-gray-50 rounded-lg">
 <p className="text-sm text-charcoal/60 ">
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
 "threat-intelligence": "bg-red-100 text-red-800 ",
 "penetration-testing": "bg-blue-100 text-blue-800 ",
 "vulnerability-research": "bg-purple-100 text-purple-800 ",
 compliance: "bg-green-100 text-green-800 ",
 "industry-news": "bg-orange-100 text-orange-800 ",
 "security-tools": "bg-yellow-100 text-yellow-800 ",
 }
 return colors[category] || "bg-gray-100 text-gray-800 "
}
