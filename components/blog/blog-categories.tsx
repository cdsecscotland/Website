"use client"

import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Shield, AlertTriangle, Code, Users, Globe, Zap } from "lucide-react"
import ScrollAnimation from "../scroll-animation"

const categories = [
 {
 slug: "threat-intelligence",
 name: "Threat Intelligence",
 icon: AlertTriangle,
 count: 24,
 color: "bg-red-100 text-red-800 ",
 },
 {
 slug: "penetration-testing",
 name: "Penetration Testing",
 icon: Shield,
 count: 18,
 color: "bg-blue-100 text-blue-800 ",
 },
 {
 slug: "vulnerability-research",
 name: "Vulnerability Research",
 icon: Code,
 count: 15,
 color: "bg-purple-100 text-purple-800 ",
 },
 {
 slug: "compliance",
 name: "Compliance",
 icon: Users,
 count: 12,
 color: "bg-green-100 text-green-800 ",
 },
 {
 slug: "industry-news",
 name: "Industry News",
 icon: Globe,
 count: 21,
 color: "bg-orange-100 text-orange-800 ",
 },
 {
 slug: "security-tools",
 name: "Security Tools",
 icon: Zap,
 count: 9,
 color: "bg-yellow-100 text-yellow-800 ",
 },
]

interface BlogCategoriesProps {
 activeCategory?: string
}

export default function BlogCategories({ activeCategory }: BlogCategoriesProps) {
 return (
 <section className="py-12 bg-white/95 backdrop-blur-sm">
 <div className="container">
 <ScrollAnimation animation="fade">
 <div className="flex flex-wrap justify-center gap-4">
 <Link href="/blog">
 <Badge
 className={`px-6 py-3 text-sm font-semibold cursor-pointer transition-all hover:scale-105 ${
 !activeCategory
 ? "bg-brandyellow text-charcoal"
 : "bg-gray-100 text-gray-800 hover:bg-brandyellow/20"
 }`}
 >
 All Articles
 </Badge>
 </Link>

 {categories.map((category, index) => (
 <ScrollAnimation key={category.slug} animation="slide-up" delay={0.1 * index}>
 <Link href={`/blog/category/${category.slug}`}>
 <Badge
 className={`px-6 py-3 text-sm font-semibold cursor-pointer transition-all hover:scale-105 flex items-center gap-2 ${
 activeCategory === category.slug
 ? "bg-brandyellow text-charcoal"
 : `${category.color} hover:bg-brandyellow/20`
 }`}
 >
 <category.icon className="w-4 h-4" />
 {category.name}
 <span className="ml-1 text-xs opacity-75">({category.count})</span>
 </Badge>
 </Link>
 </ScrollAnimation>
 ))}
 </div>
 </ScrollAnimation>
 </div>
 </section>
 )
}
