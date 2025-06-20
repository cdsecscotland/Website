"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building, Calendar, ArrowRight } from "lucide-react"
import ScrollAnimation from "../scroll-animation"
import { getRelatedCaseStudies, type CaseStudy } from "@/lib/case-studies-data"

interface RelatedCaseStudiesProps {
 currentCaseStudyId: string
 industry: string
}

export default function RelatedCaseStudies({ currentCaseStudyId, industry }: RelatedCaseStudiesProps) {
 const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([])
 const [loading, setLoading] = useState(true)

 useEffect(() => {
 const loadRelatedCaseStudies = async () => {
 try {
 const related = await getRelatedCaseStudies(currentCaseStudyId, industry, 3)
 setCaseStudies(related)
 } catch (error) {
 console.error("Failed to load related case studies:", error)
 } finally {
 setLoading(false)
 }
 }

 loadRelatedCaseStudies()
 }, [currentCaseStudyId, industry])

 if (loading || caseStudies.length === 0) {
 return null
 }

 return (
 <section className="py-20 bg-gray-50/95 backdrop-blur-sm">
 <div className="container">
 <ScrollAnimation animation="fade">
 <div className="text-center mb-12">
 <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">Related Case Studies</h2>
 <p className="text-lg text-charcoal/70 ">
 Explore more success stories from similar industries
 </p>
 </div>
 </ScrollAnimation>

 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
 {caseStudies.map((study, index) => (
 <ScrollAnimation key={study.id} animation="slide-up" delay={0.2 * index}>
 <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg bg-white h-full overflow-hidden">
 <div className="relative h-48 overflow-hidden">
 <Image
 src={study.featuredImage || "/placeholder.svg?height=200&width=400"}
 alt={study.title}
 fill
 className="object-cover group-hover:scale-110 transition-transform duration-300"
 />
 <div className="absolute top-4 left-4">
 <Badge className="bg-brandyellow text-charcoal">{getIndustryLabel(study.industry)}</Badge>
 </div>
 </div>

 <CardHeader className="pb-4">
 <div className="flex items-center gap-4 text-sm text-charcoal/60 mb-3">
 <div className="flex items-center gap-1">
 <Building className="w-4 h-4" />
 {study.clientName}
 </div>
 <div className="flex items-center gap-1">
 <Calendar className="w-4 h-4" />
 {new Date(study.completedAt).getFullYear()}
 </div>
 </div>

 <h3 className="text-lg font-bold text-charcoal group-hover:text-brandyellow transition-colors line-clamp-2">
 {study.title}
 </h3>
 </CardHeader>

 <CardContent className="pt-0">
 <p className="text-charcoal/70 mb-4 line-clamp-2">{study.excerpt}</p>

 <Link
 href={`/case-studies/${study.slug}`}
 className="inline-flex items-center text-brandyellow hover:text-brightyellow font-semibold group"
 >
 Read Case Study
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
