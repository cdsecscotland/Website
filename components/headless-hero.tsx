"use client"

import { useState, useEffect, Fragment } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Shield, Lock, Eye, ChevronRight } from "lucide-react"
import { Transition } from "@headlessui/react"
import { cn } from "@/lib/utils"
import ScrollAnimation from "./scroll-animation"

const features = [
  { icon: Shield, text: "CREST Certified", gradient: "from-blue-500 to-cyan-500" },
  { icon: Lock, text: "SOC 2 Compliant", gradient: "from-purple-500 to-indigo-500" },
  { icon: Eye, text: "24/7 Monitoring", gradient: "from-emerald-500 to-teal-500" }
]

const floatingElements = [
  { delay: 0, duration: 20, path: "M50,10 Q90,50 50,90 T50,10", color: "text-brandyellow/20" },
  { delay: 5, duration: 25, path: "M10,50 Q50,10 90,50 T10,50", color: "text-blue-500/20" },
  { delay: 10, duration: 30, path: "M30,30 Q70,70 30,110 T30,30", color: "text-purple-500/20" }
]

export default function HeadlessHero() {
  const [mounted, setMounted] = useState(false)
  const [activeFeature, setActiveFeature] = useState(0)

  useEffect(() => {
    setMounted(true)
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  if (!mounted) return null

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-cream via-white to-paleyellow/30 dark:from-charcoal dark:via-charcoal/95 dark:to-charcoal">
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

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-gradient-to-r from-brandyellow/20 to-transparent rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-transparent rounded-full blur-3xl animate-pulse-glow animation-delay-2000" />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollAnimation animation="slide-right">
            <div className="text-center lg:text-left">
              {/* Dynamic Feature Badges */}
              <div className="mb-6 h-12">
                {features.map((feature, index) => (
                  <Transition
                    key={index}
                    show={activeFeature === index}
                    as={Fragment}
                    enter="transform transition duration-500"
                    enterFrom="opacity-0 translate-y-4"
                    enterTo="opacity-100 translate-y-0"
                    leave="transform transition duration-500"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-4"
                  >
                    <div className={cn(
                      "inline-flex items-center px-4 py-2 rounded-full",
                      "bg-gradient-to-r shadow-lg",
                      feature.gradient
                    )}>
                      <feature.icon className="w-4 h-4 text-white mr-2" />
                      <span className="text-white font-medium text-sm">{feature.text}</span>
                    </div>
                  </Transition>
                ))}
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="block text-charcoal dark:text-white">
                  Security Locked In,
                </span>
                <span className="block relative">
                  <span className="relative z-10 text-transparent bg-gradient-to-r from-brandyellow via-brightyellow to-brandyellow bg-clip-text animate-gradient-x">
                    Threats Locked Out
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-brandyellow/20 via-brightyellow/20 to-brandyellow/20 blur-xl" />
                </span>
              </h1>

              <p className="text-lg md:text-xl lg:text-2xl text-charcoal/80 dark:text-white/80 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Professional cyber security services that protect your business from evolving threats with comprehensive penetration testing and security assessments.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <Button
                  asChild
                  size="lg"
                  className="group relative overflow-hidden bg-charcoal dark:bg-brandyellow hover:bg-charcoal/90 dark:hover:bg-brightyellow text-white dark:text-charcoal font-semibold px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
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
                  className="group border-2 border-charcoal dark:border-white text-charcoal dark:text-white hover:bg-charcoal hover:text-white dark:hover:bg-white dark:hover:text-charcoal font-semibold px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
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
                      <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-charcoal dark:text-white mb-1 transition-all duration-300 group-hover:text-brandyellow">
                        {stat.value}
                      </div>
                      <div className="text-xs sm:text-sm text-charcoal/70 dark:text-white/70 group-hover:text-charcoal dark:group-hover:text-white transition-colors">
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
              {/* Floating Card Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-brandyellow/20 to-brightyellow/20 rounded-3xl blur-3xl animate-pulse-glow" />
              
              <div className="relative bg-white/90 dark:bg-charcoal/90 backdrop-blur-sm p-6 lg:p-8 rounded-3xl shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
                <div className="relative rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/insights-tablet-demo.png"
                    width={800}
                    height={600}
                    alt="Closed Door Security Insights Platform"
                    className="w-full h-auto"
                  />
                  
                  {/* Overlay with live indicators */}
                  <div className="absolute top-4 right-4 flex items-center space-x-2">
                    <div className="flex items-center px-3 py-1 bg-green-500/90 backdrop-blur-sm rounded-full">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse mr-2" />
                      <span className="text-white text-sm font-medium">Live Monitoring</span>
                    </div>
                  </div>
                  
                  {/* Interactive hotspots */}
                  <div className="absolute bottom-4 left-4">
                    <div className="flex items-center space-x-2 bg-charcoal/90 dark:bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2">
                      <ChevronRight className="w-4 h-4 text-white dark:text-charcoal animate-pulse" />
                      <span className="text-white dark:text-charcoal text-sm font-medium">
                        Real-time Security Insights
                      </span>
                    </div>
                  </div>
                </div>

                {/* Feature pills */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {["AI-Powered", "Real-time Alerts", "Compliance Ready", "24/7 Support"].map((feature, index) => (
                    <div
                      key={index}
                      className="px-3 py-1 bg-brandyellow/10 text-charcoal dark:text-white text-sm rounded-full border border-brandyellow/20 hover:bg-brandyellow/20 transition-colors duration-200"
                    >
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}