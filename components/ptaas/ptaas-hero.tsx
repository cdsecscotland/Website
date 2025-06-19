"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Shield, Eye, Clock, Users } from "lucide-react"
import ScrollAnimation from "../scroll-animation"

export default function PTaaSHero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="container relative z-10">
        <ScrollAnimation animation="fade" duration={0.8}>
          <div className="max-w-6xl mx-auto">
            <div className="bg-white/90 dark:bg-charcoal/90 backdrop-blur-sm rounded-2xl p-8 md:p-12">

              {/* Header Content */}
              <div className="text-center mb-12">
                <ScrollAnimation animation="slide-up" delay={0.4}>
                  <h1 className="text-responsive-4xl md:text-responsive-5xl lg:text-responsive-6xl font-bold mb-6 leading-tight text-charcoal dark:text-white">
                    Welcome To Insights, The Real-Time Penetration Testing Platform
                  </h1>
                </ScrollAnimation>
              </div>

              {/* Main Content - Side by Side */}
              <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
                {/* Left Side - Text Content */}
                <div className="lg:text-left text-center">
                  <ScrollAnimation animation="slide-right" delay={0.6}>
                    <p className="text-responsive-xl md:text-responsive-2xl mb-8 text-charcoal/80 dark:text-white/80 leading-relaxed">
                      Throughout the project, you'll have the chance to use our Penetration Testing As A Service platform,
                      Insights, to view discovered vulnerabilities in real time, review reports, and to book in new tests.
                      This will allow you to track the progress of your penetration test as it happens, and address any
                      critical finds immediately.
                    </p>
                  </ScrollAnimation>

                  <ScrollAnimation animation="slide-right" delay={0.8}>
                    <div className="flex flex-col sm:flex-row gap-4 lg:justify-start justify-center">
                      <Button
                        asChild
                        size="lg"
                        className="bg-charcoal dark:bg-brandyellow hover:bg-charcoal/90 dark:hover:bg-brightyellow text-white dark:text-charcoal font-semibold px-8 py-4 text-lg shadow-xl"
                      >
                        <Link href="/contact">Request Consultation</Link>
                      </Button>
                      <Button
                        asChild
                        size="lg"
                        variant="outline"
                        className="border-2 border-charcoal dark:border-white text-charcoal dark:text-white hover:bg-charcoal hover:text-white dark:hover:bg-white dark:hover:text-charcoal font-semibold px-8 py-4 text-lg"
                      >
                        <Link href="#dashboard">View Platform Features</Link>
                      </Button>
                    </div>
                  </ScrollAnimation>
                </div>

                {/* Right Side - Dashboard Image */}
                <div className="lg:order-2 order-1">
                  <ScrollAnimation animation="slide-left" delay={1.0}>
                    <div className="relative">
                      <div className="relative rounded-xl overflow-hidden shadow-2xl bg-gradient-to-br from-charcoal/10 to-charcoal/20 p-4">
                        <Image
                          src="/images/insights-dashboard.png"
                          alt="Insights PTaaS Dashboard - Real-time vulnerability tracking and reporting platform"
                          width={1200}
                          height={800}
                          className="w-full h-auto rounded-lg shadow-lg"
                          priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-lg pointer-events-none" />
                      </div>
                      
                      {/* Dashboard Labels */}
                      <div className="absolute top-8 left-8 bg-brandyellow text-charcoal px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                        Live Dashboard
                      </div>
                      <div className="absolute bottom-8 right-8 bg-white/90 backdrop-blur-sm text-charcoal px-4 py-2 rounded-lg text-sm font-medium shadow-lg">
                        Real-time Vulnerability Tracking
                      </div>
                    </div>
                  </ScrollAnimation>
                </div>
              </div>

              {/* Key Benefits */}
              <ScrollAnimation animation="fade" delay={1.2}>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pt-8 border-t border-charcoal/20 dark:border-white/20">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/80 dark:bg-charcoal/50 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                      <Eye className="w-8 h-8 text-brandyellow" />
                    </div>
                    <div className="text-responsive-lg font-bold text-charcoal dark:text-white">Real-Time</div>
                    <div className="text-responsive-sm text-charcoal/70 dark:text-white/70 font-medium">
                      Vulnerability Tracking
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/80 dark:bg-charcoal/50 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                      <Clock className="w-8 h-8 text-brandyellow" />
                    </div>
                    <div className="text-responsive-lg font-bold text-charcoal dark:text-white">Immediate</div>
                    <div className="text-responsive-sm text-charcoal/70 dark:text-white/70 font-medium">
                      Critical Alerts
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/80 dark:bg-charcoal/50 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                      <Users className="w-8 h-8 text-brandyellow" />
                    </div>
                    <div className="text-responsive-lg font-bold text-charcoal dark:text-white">Direct Access</div>
                    <div className="text-responsive-sm text-charcoal/70 dark:text-white/70 font-medium">
                      To Expert Testers
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/80 dark:bg-charcoal/50 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                      <Shield className="w-8 h-8 text-brandyellow" />
                    </div>
                    <div className="text-responsive-lg font-bold text-charcoal dark:text-white">In-House</div>
                    <div className="text-responsive-sm text-charcoal/70 dark:text-white/70 font-medium">
                      CREST Certified Team
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
