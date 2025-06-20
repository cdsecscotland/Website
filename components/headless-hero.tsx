"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import ScrollAnimation from "./scroll-animation"


const floatingElements = [
 { delay: 0, duration: 20, path: "M50,10 Q90,50 50,90 T50,10", color: "text-brandyellow/20" },
 { delay: 5, duration: 25, path: "M10,50 Q50,10 90,50 T10,50", color: "text-blue-500/20" },
 { delay: 10, duration: 30, path: "M30,30 Q70,70 30,110 T30,30", color: "text-purple-500/20" }
]

export default function HeadlessHero() {

 return (
 <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-cream via-white to-paleyellow/30 pt-20">
 {/* Animated Background Elements */}
 <div className="absolute inset-0 overflow-hidden">
 {floatingElements.map((element, index) => (
 <svg
 key={index}
 className={cn("absolute w-96 h-96", element.color)}
 style={{
 animation: `float-path ${element.duration}s ease-in-out ${element.delay}s infinite`,
 opacity: 0.1
 }}
 >
 <path
 d={element.path}
 fill="none"
 stroke="currentColor"
 strokeWidth="2"
 />
 </svg>
 ))}
 </div>


 <div className="container relative z-10">
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
 <ScrollAnimation animation="slide-right">
 <div className="text-center lg:text-left">

 <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
 <span className="block text-charcoal ">
 Security Locked In,
 </span>
 <span className="block relative">
 <span className="relative z-10 text-transparent bg-gradient-to-r from-brandyellow via-brightyellow to-brandyellow bg-clip-text animate-gradient-x">
 Threats Locked Out
 </span>
 <span className="absolute inset-0 bg-gradient-to-r from-brandyellow/20 via-brightyellow/20 to-brandyellow/20 blur-xl" />
 </span>
 </h1>

 <p className="text-lg md:text-xl lg:text-2xl text-charcoal/80 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
 Professional cyber security services that protect your business from evolving threats with comprehensive penetration testing and security assessments.
 </p>

 <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
 <Button
 asChild
 size="lg"
 className="group relative overflow-hidden bg-charcoal hover:bg-charcoal/90 text-white font-semibold px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
 >
 <Link href="/build-pentest">
 <span className="relative z-10 flex items-center">
 Build a Pentest
 <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
 </span>
 <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
 </Link>
 </Button>
 <Button
 asChild
 size="lg"
 variant="outline"
 className="group border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-white font-semibold px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
 >
 <Link href="#services">
 <span className="flex items-center">
 View Services
 <Play className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
 </span>
 </Link>
 </Button>
 </div>

 {/* Animated Stats */}
 <div className="grid grid-cols-3 gap-4 sm:gap-8 text-center lg:text-left">
 {[
 { value: "550+", label: "Projects Delivered", delay: 0 },
 { value: "160+", label: "Customers", delay: 0.1 },
 { value: "380+", label: "Featured Publications", delay: 0.2 }
 ].map((stat, index) => (
 <ScrollAnimation key={index} animation="fade" delay={stat.delay}>
 <div className="group cursor-pointer">
 <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-charcoal mb-1 transition-all duration-300 group-hover:text-brandyellow">
 {stat.value}
 </div>
 <div className="text-xs sm:text-sm text-charcoal/70 group-hover:text-charcoal transition-colors">
 {stat.label}
 </div>
 </div>
 </ScrollAnimation>
 ))}
 </div>
 </div>
 </ScrollAnimation>

 <ScrollAnimation animation="slide-left" delay={0.2}>
 <div className="relative">
 {/* Floating Card Effect - removed decorative background */}
 
 <div className="relative bg-white/90 backdrop-blur-sm p-4 lg:p-6 rounded-2xl shadow-xl transform hover:scale-[1.01] transition-transform duration-500 overflow-hidden max-w-lg mx-auto">
 <div className="relative rounded-2xl overflow-hidden shadow-lg">
 <Image
 src="/images/insights-tablet-demo.png"
 width={800}
 height={600}
 alt="Closed Door Security Insights Platform"
 className="w-full h-auto object-cover"
 style={{ maxHeight: '400px' }}
 />
 
 {/* Overlay with live indicators */}
 <div className="absolute top-4 right-4 flex items-center space-x-2">
 <div className="flex items-center px-3 py-1 bg-green-500/90 backdrop-blur-sm rounded-full">
 <div className="w-2 h-2 bg-white rounded-full animate-pulse mr-2" />
 <span className="text-white text-sm font-medium">Live Security Results</span>
 </div>
 </div>
 
 {/* Interactive hotspots */}
 <div className="absolute bottom-4 left-4">
 <div className="flex items-center space-x-2 bg-charcoal/90 backdrop-blur-sm rounded-lg px-4 py-2">
 <ChevronRight className="w-4 h-4 text-white animate-pulse" />
 <span className="text-white text-sm font-medium">
 Real-time Security Insights
 </span>
 </div>
 </div>
 </div>

 </div>
 </div>
 </ScrollAnimation>
 </div>
 </div>
 </section>
 )
}