"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Play, Monitor, BarChart3, Shield } from "lucide-react"
import ScrollAnimation from "./scroll-animation"

export default function InsightsPlatform() {
  return (
    <section
      id="insights"
      className="py-16 bg-gradient-to-br from-brandyellow/10 to-brightyellow/5 dark:bg-charcoal/95 backdrop-blur-sm relative"
    >
      <div className="container">
        <ScrollAnimation animation="fade">
          <div className="text-center mb-12">
            <h2 className="text-responsive-4xl md:text-responsive-6xl font-bold text-charcoal dark:text-white mb-6 text-enhanced">
              Real-Time Penetration Testing Platform
            </h2>
            <p className="text-responsive-xl md:text-responsive-2xl text-charcoal/80 dark:text-white/80 max-w-4xl mx-auto leading-relaxed">
              Track vulnerabilities, monitor progress, and coordinate fixes through our Insights platform. Get instant visibility into your security posture with real-time monitoring and expert analyst support whenever you need it.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <ScrollAnimation animation="slide-right" delay={0.2}>
            <div>
              <h3 className="text-responsive-3xl md:text-responsive-4xl font-bold text-charcoal dark:text-white mb-6">
                Enterprise-Grade Security Testing
              </h3>
              <p className="text-responsive-lg text-charcoal/70 dark:text-white/70 mb-8">
                Our innovative Insights Platform provides unparalleled visibility into your security assessment
                progress, enabling you to track findings, remediation efforts, and overall security posture with
                enterprise-level precision and reliability.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start group">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mr-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105 relative">
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
                    <Monitor className="w-6 h-6 text-white relative z-10 drop-shadow-sm" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal dark:text-white mb-2">Live Dashboard</h4>
                    <p className="text-sm text-charcoal/70 dark:text-white/70">
                      Real-time vulnerability tracking and intelligent prioritization
                    </p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mr-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105 relative">
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
                    <BarChart3 className="w-6 h-6 text-white relative z-10 drop-shadow-sm" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal dark:text-white mb-2">Advanced Analytics</h4>
                    <p className="text-sm text-charcoal/70 dark:text-white/70">
                      Comprehensive reporting and strategic trend analysis
                    </p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center mr-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105 relative">
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-500 blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
                    <Shield className="w-6 h-6 text-white relative z-10 drop-shadow-sm" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal dark:text-white mb-2">Expert Support</h4>
                    <p className="text-sm text-charcoal/70 dark:text-white/70">
                      Direct access to CREST certified security professionals
                    </p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center mr-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105 relative">
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
                    <ArrowRight className="w-6 h-6 text-white relative z-10 drop-shadow-sm" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal dark:text-white mb-2">Seamless Integration</h4>
                    <p className="text-sm text-charcoal/70 dark:text-white/70">
                      Enterprise-grade connectivity with your security ecosystem
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-charcoal dark:bg-brandyellow hover:bg-charcoal/90 dark:hover:bg-brightyellow text-white dark:text-charcoal font-semibold group"
                >
                  <Link href="/ptaas">
                    Explore Insights Platform
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-charcoal dark:border-white text-charcoal dark:text-white hover:bg-charcoal hover:text-white dark:hover:bg-white dark:hover:text-charcoal font-semibold group"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </Button>
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="slide-left" delay={0.4}>
            <div className="relative max-w-lg mx-auto">
              <div className="bg-white dark:bg-charcoal/80 p-4 rounded-2xl shadow-xl">
                <Image
                  src="/images/insights-tablet-demo.png"
                  width={800}
                  height={600}
                  alt="Insights Platform Dashboard"
                  className="rounded-xl w-full h-auto"
                />
              </div>
            </div>
          </ScrollAnimation>
        </div>

        <ScrollAnimation animation="fade" delay={0.6}>
          <div className="text-center bg-white/80 dark:bg-charcoal/80 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-charcoal dark:text-white mb-4">
              Ready to Elevate Your Security Posture?
            </h3>
            <p className="text-charcoal/70 dark:text-white/70 mb-6 max-w-2xl mx-auto">
              Join industry leaders who trust our platform to strengthen their security posture. Experience
              enterprise-grade security testing today.
            </p>
            <Button asChild size="lg" className="bg-brandyellow hover:bg-brightyellow text-charcoal font-semibold">
              <Link href="/contact">Request Demo</Link>
            </Button>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
