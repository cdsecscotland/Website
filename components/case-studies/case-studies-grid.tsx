"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Building, Calendar, ArrowRight, Filter } from "lucide-react"
import ScrollAnimation from "../scroll-animation"
import { getCaseStudies, type CaseStudy } from "@/lib/case-studies-data"

const industries = [
 { value: "all", label: "All Industries" },
 { value: "financial", label: "Financial Services" },
 { value: "healthcare", label: "Healthcare & Research" },
 { value: "technology", label: "Technology" },
 { value: "government", label: "Government" },
 { value: "education", label: "Education" },
]

export default function CaseStudiesGrid() {
 const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([])
 const [filteredStudies, setFilteredStudies] = useState<CaseStudy[]>([])
 const [selectedIndustry, setSelectedIndustry] = useState("all")
 const [loading, setLoading] = useState(true)

 useEffect(() => {
 const loadCaseStudies = async () => {
 try {
 const studies = await getCaseStudies()
 setCaseStudies(studies)
 setFilteredStudies(studies)
 } catch (error) {
 console.error("Failed to load case studies:", error)
 } finally {
 setLoading(false)
 }
 }

 loadCaseStudies()
 }, [])

 useEffect(() => {
 if (selectedIndustry === "all") {
 setFilteredStudies(caseStudies)
 } else {
 setFilteredStudies(caseStudies.filter((study) => study.industry === selectedIndustry))
 }
 }, [selectedIndustry, caseStudies])

 if (loading) {
 return (
 <section className="py-20">
 <div className="container">
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
 {[...Array(6)].map((_, i) => (
 <Card key={i} className="animate-pulse">
 <div className="h-48 bg-gray-200 rounded-t-lg"></div>
 <CardContent className="p-6">
 <div className="h-4 bg-gray-200 rounded mb-2"></div>
 <div className="h-4 bg-gray-200 rounded mb-4 w-3/4"></div>
 <div className="h-3 bg-gray-200 rounded mb-2"></div>
 <div className="h-3 bg-gray-200 rounded w-1/2"></div>
 </CardContent>
 </Card>
 ))}
 </div>
 </div>
 </section>
 )
 }

 return (
 <section className="py-20 bg-white/95 backdrop-blur-sm">
 <div className="container">
 {/* Filter Bar */}
 <ScrollAnimation animation="fade">
 <div className="flex flex-wrap items-center justify-between mb-12">
 <h2 className="text-2xl font-bold text-charcoal mb-4 md:mb-0">Our Success Stories</h2>

 <div className="flex items-center gap-4">
 <Filter className="w-5 h-5 text-charcoal/60 " />
 <div className="flex flex-wrap gap-2">
 {industries.map((industry) => (
 <Button
 key={industry.value}
 variant={selectedIndustry === industry.value ? "default" : "outline"}
 size="sm"
 onClick={() => setSelectedIndustry(industry.value)}
 className={
 selectedIndustry === industry.value
 ? "bg-brandyellow text-charcoal hover:bg-brightyellow"
 : "border-charcoal/20 hover:bg-brandyellow/20"
 }
 >
 {industry.label}
 </Button>
 ))}
 </div>
 </div>
 </div>
 </ScrollAnimation>

 {/* Case Studies Grid */}
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
 {filteredStudies.map((study, index) => (
 <ScrollAnimation key={study.id} animation="slide-up" delay={0.1 * (index % 6)}>
 <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg bg-white h-full overflow-hidden">
 <div className="relative h-48 overflow-hidden">
 <Image
 src={study.featuredImage || "/placeholder.svg?height=200&width=400"}
 alt={study.title}
 fill
 className="object-cover group-hover:scale-110 transition-transform duration-500"
 />
 <div className="absolute top-4 left-4">
 <Badge className={getIndustryColor(study.industry)}>{getIndustryLabel(study.industry)}</Badge>
 </div>
 {study.featured && (
 <div className="absolute top-4 right-4">
 <Badge className="bg-brandyellow text-charcoal">Featured</Badge>
 </div>
 )}
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

 <h3 className="text-xl font-bold text-charcoal group-hover:text-brandyellow transition-colors line-clamp-2">
 {study.title}
 </h3>
 </CardHeader>

 <CardContent className="pt-0">
 <p className="text-charcoal/70 mb-4 line-clamp-3">{study.excerpt}</p>

 <div className="flex items-center justify-between">
 <div className="flex flex-wrap gap-2">
 {study.services.slice(0, 2).map((service, idx) => (
 <Badge key={idx} variant="outline" className="text-xs">
 {service}
 </Badge>
 ))}
 {study.services.length > 2 && (
 <Badge variant="outline" className="text-xs">
 +{study.services.length - 2} more
 </Badge>
 )}
 </div>

 <Link href={`/case-studies/${study.slug}`}>
 <Button
 variant="ghost"
 size="sm"
 className="group-hover:bg-brandyellow/20 group-hover:text-charcoal "
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

 {filteredStudies.length === 0 && (
 <div className="text-center py-12">
 <p className="text-lg text-charcoal/70 ">
 No case studies found for the selected industry.
 </p>
 </div>
 )}
 </div>
 </section>
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
