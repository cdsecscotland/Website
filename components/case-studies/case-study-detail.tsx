"use client"

import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Building, Calendar, Users, ArrowLeft, CheckCircle, Target, TrendingUp } from "lucide-react"
import ScrollAnimation from "../scroll-animation"
import type { CaseStudy } from "@/lib/case-studies-data"

interface CaseStudyDetailProps {
 caseStudy: CaseStudy
}

export default function CaseStudyDetail({ caseStudy }: CaseStudyDetailProps) {
 return (
 <article className="py-20 bg-white/95 backdrop-blur-sm">
 <div className="container max-w-4xl">
 <ScrollAnimation animation="fade">
 <div className="mb-8">
 <Link href="/case-studies">
 <Button variant="ghost" className="mb-6">
 <ArrowLeft className="w-4 h-4 mr-2" />
 Back to Case Studies
 </Button>
 </Link>

 <div className="flex items-center gap-4 mb-6">
 <Badge className={getIndustryColor(caseStudy.industry)}>{getIndustryLabel(caseStudy.industry)}</Badge>
 {caseStudy.services.map((service) => (
 <Badge key={service} variant="outline">
 {service}
 </Badge>
 ))}
 </div>

 <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 leading-tight">
 {caseStudy.title}
 </h1>

 <div className="flex items-center gap-6 text-charcoal/70 mb-8">
 <div className="flex items-center gap-2">
 <Building className="w-5 h-5" />
 <span className="font-medium">{caseStudy.clientName}</span>
 </div>
 <div className="flex items-center gap-2">
 <Calendar className="w-5 h-5" />
 <span>Completed {new Date(caseStudy.completedAt).toLocaleDateString()}</span>
 </div>
 <div className="flex items-center gap-2">
 <Users className="w-5 h-5" />
 <span>{caseStudy.teamSize} team members</span>
 </div>
 </div>
 </div>
 </ScrollAnimation>

 <ScrollAnimation animation="slide-up" delay={0.2}>
 {caseStudy.featuredImage && (
 <div className="relative h-96 mb-12 rounded-2xl overflow-hidden shadow-2xl">
 <Image
 src={caseStudy.featuredImage || "/placeholder.svg"}
 alt={caseStudy.title}
 fill
 className="object-cover"
 />
 </div>
 )}
 </ScrollAnimation>

 {/* Key Metrics */}
 <ScrollAnimation animation="fade" delay={0.4}>
 <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
 <Card className="bg-white/80 border-0 shadow-lg">
 <CardContent className="p-6 text-center">
 <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
 <CheckCircle className="w-6 h-6 text-green-600 " />
 </div>
 <div className="text-2xl font-bold text-charcoal mb-2">
 {caseStudy.metrics.vulnerabilitiesFixed}
 </div>
 <div className="text-sm text-charcoal/70 ">Vulnerabilities Fixed</div>
 </CardContent>
 </Card>

 <Card className="bg-white/80 border-0 shadow-lg">
 <CardContent className="p-6 text-center">
 <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
 <Target className="w-6 h-6 text-blue-600 " />
 </div>
 <div className="text-2xl font-bold text-charcoal mb-2">
 {caseStudy.metrics.complianceAchieved}
 </div>
 <div className="text-sm text-charcoal/70 ">Compliance Achieved</div>
 </CardContent>
 </Card>

 <Card className="bg-white/80 border-0 shadow-lg">
 <CardContent className="p-6 text-center">
 <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
 <TrendingUp className="w-6 h-6 text-orange-600 " />
 </div>
 <div className="text-2xl font-bold text-charcoal mb-2">
 {caseStudy.metrics.securityImprovement}
 </div>
 <div className="text-sm text-charcoal/70 ">Security Improvement</div>
 </CardContent>
 </Card>
 </div>
 </ScrollAnimation>

 <ScrollAnimation animation="fade" delay={0.6}>
 <div className="prose prose-lg max-w-none">
 <div className="text-xl text-charcoal/80 mb-8 font-medium leading-relaxed">
 {caseStudy.excerpt}
 </div>

 <div className="case-study-content" dangerouslySetInnerHTML={{ __html: caseStudy.content }} />
 </div>
 </ScrollAnimation>

 {/* Client Testimonial */}
 {caseStudy.testimonial && (
 <ScrollAnimation animation="fade" delay={0.8}>
 <Card className="mt-12 bg-gradient-to-r from-brandyellow/10 to-brightyellow/5 border-0 shadow-lg">
 <CardContent className="p-8">
 <blockquote className="text-xl italic text-charcoal/90 mb-6">
 "{caseStudy.testimonial.quote}"
 </blockquote>
 <div className="flex items-center">
 <div>
 <div className="font-semibold text-charcoal ">{caseStudy.testimonial.author}</div>
 <div className="text-charcoal/70 ">
 {caseStudy.testimonial.position}, {caseStudy.clientName}
 </div>
 </div>
 </div>
 </CardContent>
 </Card>
 </ScrollAnimation>
 )}
 </div>
 </article>
 )
}

function getIndustryColor(industry: string): string {
 const colors: Record<string, string> = {
 financial: "bg-green-100 text-green-800 ",
 healthcare: "bg-blue-100 text-blue-800 ",
 technology: "bg-purple-100 text-purple-800 ",
 government: "bg-red-100 text-red-800 ",
 education: "bg-orange-100 text-orange-800 ",
 }
 return colors[industry] || "bg-gray-100 text-gray-800 "
}

function getIndustryLabel(industry: string): string {
 const labels: Record<string, string> = {
 financial: "Financial Services",
 healthcare: "Healthcare & Research",
 technology: "Technology",
 government: "Government",
 education: "Education",
 }
 return labels[industry] || industry
}
