"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import ScrollAnimation from "./scroll-animation"

export default function Hero() {
 const [mounted, setMounted] = useState(false)

 useEffect(() => {
 setMounted(true)
 }, [])

 if (!mounted) return null

 return (
 <section className="relative pt-20 pb-8 md:pt-20 md:pb-10 overflow-hidden bg-gradient-to-br from-cream via-white to-paleyellow/30 ">
 {/* Background Elements */}
 <div className="container relative z-10">
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
 <ScrollAnimation animation="slide-right">
 <div className="text-center">
 <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-4 leading-tight">
 <span className="block break-words">Security Locked In,</span>
 <span className="block break-words text-transparent bg-gradient-to-r from-brandyellow via-brightyellow to-brandyellow bg-clip-text">
 Threats Locked Out
 </span>
 </h1>

 <p className="text-base md:text-lg lg:text-xl text-charcoal/80 mb-6 leading-relaxed">
 Professional cyber security services that protect your business from evolving threats with comprehensive penetration testing and security assessments.
 </p>

 <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6 w-full">
 <Button
 asChild
 size="lg"
 className="bg-charcoal hover:bg-charcoal/90 text-white font-semibold px-4 sm:px-8 py-4 text-base sm:text-lg group shadow-xl hover:shadow-2xl transition-all duration-300 w-full sm:w-auto"
 >
 <Link href="/build-pentest">
 Build a Pentest
 <ArrowRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6 group-hover:translate-x-1 transition-transform" />
 </Link>
 </Button>
 <Button
 asChild
 size="lg"
 variant="outline"
 className="border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-white font-semibold px-4 sm:px-8 py-4 text-base sm:text-lg group shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
 >
 <Link href="#services">
 View Services
 <Play className="ml-2 h-5 w-5 sm:h-6 sm:w-6 group-hover:scale-110 transition-transform" />
 </Link>
 </Button>
 </div>

 {/* Stats */}
 <div className="grid grid-cols-3 gap-4 sm:gap-8 text-center">
 <div>
 <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-charcoal mb-1 sm:mb-2">550+</div>
 <div className="text-xs sm:text-sm text-charcoal/70 ">Projects Delivered</div>
 </div>
 <div>
 <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-charcoal mb-1 sm:mb-2">160+</div>
 <div className="text-xs sm:text-sm text-charcoal/70 ">Customers</div>
 </div>
 <div>
 <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-charcoal mb-1 sm:mb-2">380+</div>
 <div className="text-xs sm:text-sm text-charcoal/70 ">Featured Publications</div>
 </div>
 </div>
 </div>
 </ScrollAnimation>

 <ScrollAnimation animation="slide-left" delay={0.2}>
 <div className="relative">
 <div className="bg-white/90 backdrop-blur-sm p-4 md:p-6 rounded-3xl shadow-2xl">
 <Image
 src="/images/insights-tablet-demo.png"
 width={800}
 height={600}
 alt="Closed Door Security Insights Platform"
 className="rounded-2xl shadow-lg"
 />
 </div>
 {/* Floating Elements */}
 </div>
 </ScrollAnimation>
 </div>
 </div>
 </section>
 )
}
