"use client"

import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Shield, CheckCircle } from "lucide-react"
import ScrollAnimation from "./scroll-animation"

const certificationBadges = [
 {
 name: "NCSC Assured Service Provider",
 description: "UK National Cyber Security Centre certified provider",
 category: "Government",
 },
 {
 name: "Cyber Scheme Certified Tester",
 description: "Professional penetration testing certification",
 category: "Testing",
 },
 {
 name: "Cyber Essentials",
 description: "UK government-backed cybersecurity certification",
 category: "Standards",
 },
 {
 name: "Cyber Essentials Plus",
 description: "Enhanced cybersecurity certification with technical verification",
 category: "Standards",
 },
 {
 name: "CREST - Penetration Testing",
 description: "Prestegious Penetration Testing Accreditation",
 category: "Professional",
 },
 {
 name: "Dubai Electronic Security Center",
 description: "Certified cybersecurity provider in the UAE",
 category: "Government",
 },
 {
 name: "Cyber Force",
 description: "Elite cybersecurity force certification",
 category: "Professional",
 },
 {
 name: "ISO 27001",
 description: "International information security management standard",
 category: "Standards",
 },
]

export default function Accreditations() {
 return (
 <section className="py-12 bg-white/85 backdrop-blur-sm border-b border-gray-100/50 ">
 <div className="container">
 <ScrollAnimation animation="fade">
 <div className="text-center mb-8">
 <div className="flex items-center justify-center mb-4">
 <Shield className="w-8 h-8 text-brandyellow mr-3" />
 <h2 className="text-3xl md:text-4xl font-bold text-charcoal ">Trusted & Accredited</h2>
 </div>
 <p className="text-lg text-charcoal/80 max-w-3xl mx-auto">
 Our certifications and accreditations demonstrate our commitment to the highest standards of cybersecurity
 excellence
 </p>
 </div>
 </ScrollAnimation>

 {/* Comprehensive Certifications Banner */}
 <ScrollAnimation animation="slide-up" delay={0.2}>
 <div className="bg-white/60 backdrop-blur-md rounded-2xl p-6 border border-white/30 shadow-lg">
 <div className="text-center mb-6">
 <h3 className="text-2xl font-bold text-charcoal mb-2">Industry accreditations</h3>
 <p className="text-charcoal/70 ">
 Recognised by leading cybersecurity organisations worldwide
 </p>
 </div>

 <div className="relative mb-6">
 <Image
 src="/images/accreditations-banner.png"
 alt="Comprehensive Cybersecurity Certifications"
 width={1200}
 height={120}
 className="mx-auto"
 />
 </div>

 <div className="relative mb-4">
 <Image
 src="/images/accreditations-top.png"
 alt="Additional Cybersecurity Accreditations"
 width={600}
 height={120}
 className="mx-auto"
 />
 </div>

 {/* Certification Grid */}
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
 {certificationBadges.map((cert, index) => (
 <ScrollAnimation key={index} animation="fade" delay={0.4 + index * 0.05}>
 <div className="flex items-start p-4 bg-white/70 backdrop-blur-sm rounded-lg hover:shadow-md transition-all duration-300 border border-white/40 ">
 <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
 <CheckCircle className="w-4 h-4 text-green-600 " />
 </div>
 <div>
 <h5 className="font-semibold text-charcoal text-sm mb-1">{cert.name}</h5>
 <p className="text-xs text-charcoal/60 mb-2">{cert.description}</p>
 <Badge variant="secondary" className="text-xs bg-brandyellow/20 text-charcoal ">
 {cert.category}
 </Badge>
 </div>
 </div>
 </ScrollAnimation>
 ))}
 </div>
 </div>
 </ScrollAnimation>

 {/* Trust Indicators */}
 <ScrollAnimation animation="fade" delay={0.6}>
 <div className="text-center mt-8">
 <div className="grid grid-cols-2 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
 <div className="text-center">
 <div className="text-3xl font-bold text-brandyellow mb-2">15+</div>
 <div className="text-sm text-charcoal/70 ">Active Certifications</div>
 </div>
 <div className="text-center">
 <div className="text-3xl font-bold text-brandyellow mb-2">3</div>
 <div className="text-sm text-charcoal/70 ">Government Approvals</div>
 </div>
 </div>
 </div>
 </ScrollAnimation>
 </div>
 </section>
 )
}
