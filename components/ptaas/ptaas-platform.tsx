"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Monitor, Smartphone, Globe, Database, Cloud, Lock } from "lucide-react"
import ScrollAnimation from "../scroll-animation"

const testingTypes = [
  {
    icon: Globe,
    title: "Web Applications",
    description: "Comprehensive testing of web apps, APIs, and web services",
    badge: "Most Popular",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    description: "iOS and Android app security testing",
    badge: "New",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: Database,
    title: "Network Infrastructure",
    description: "Internal and external network penetration testing",
    badge: null,
    gradient: "from-purple-500 to-indigo-500",
  },
  {
    icon: Cloud,
    title: "Cloud Environments",
    description: "AWS, Azure, and GCP security assessments",
    badge: null,
    gradient: "from-orange-500 to-red-500",
  },
  {
    icon: Lock,
    title: "API Security",
    description: "REST, GraphQL, and SOAP API testing",
    badge: null,
    gradient: "from-pink-500 to-rose-500",
  },
  {
    icon: Monitor,
    title: "Social Engineering",
    description: "Phishing and social engineering simulations",
    badge: null,
    gradient: "from-yellow-500 to-orange-500",
  },
]

export default function PTaaSPlatform() {
  return (
    <section id="platform" className="py-20 bg-white/95 dark:bg-charcoal/95 backdrop-blur-sm">
      <div className="container">
        <ScrollAnimation animation="fade">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal dark:text-white mb-4">
              One Platform, Complete Security Coverage
            </h2>
            <p className="text-xl text-charcoal/80 dark:text-white/80 max-w-3xl mx-auto">
              Our cloud-based platform provides comprehensive penetration testing across all your digital assets, with
              real-time visibility and expert guidance every step of the way.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <ScrollAnimation animation="slide-right" delay={0.2}>
            <div>
              <h3 className="text-3xl font-bold text-charcoal dark:text-white mb-6">Real-Time Security Dashboard</h3>
              <p className="text-lg text-charcoal/70 dark:text-white/70 mb-6">
                Monitor your security posture in real-time with our intuitive dashboard. Track vulnerabilities, view
                remediation progress, and collaborate with our security experts—all from one central location.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center mr-3 mt-1 shadow-md">
                    <span className="text-white font-bold text-sm">✓</span>
                  </div>
                  <span className="text-charcoal/80 dark:text-white/80">
                    Live vulnerability tracking and prioritization
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center mr-3 mt-1 shadow-md">
                    <span className="text-white font-bold text-sm">✓</span>
                  </div>
                  <span className="text-charcoal/80 dark:text-white/80">Automated compliance reporting</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center mr-3 mt-1 shadow-md">
                    <span className="text-white font-bold text-sm">✓</span>
                  </div>
                  <span className="text-charcoal/80 dark:text-white/80">
                    Direct communication with security experts
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center mr-3 mt-1 shadow-md">
                    <span className="text-white font-bold text-sm">✓</span>
                  </div>
                  <span className="text-charcoal/80 dark:text-white/80">
                    Integration with your existing security tools
                  </span>
                </li>
              </ul>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="slide-left" delay={0.4}>
            <div className="relative">
              <div className="bg-white dark:bg-charcoal/80 p-4 rounded-2xl shadow-2xl">
                <Image
                  src="/images/insights-findings-desktop.png"
                  width={700}
                  height={500}
                  alt="Insights Platform - Vulnerability Management Interface"
                  className="rounded-xl"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-br from-brandyellow to-orange-500 rounded-full opacity-20 blur-sm"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full opacity-30 blur-sm"></div>
            </div>
          </ScrollAnimation>
        </div>

        <ScrollAnimation animation="fade" delay={0.6}>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-charcoal dark:text-white mb-4">Comprehensive Testing Coverage</h3>
            <p className="text-lg text-charcoal/70 dark:text-white/70 max-w-2xl mx-auto">
              From web applications to cloud infrastructure, our platform covers all aspects of your digital ecosystem.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testingTypes.map((type, index) => (
            <ScrollAnimation key={index} animation="slide-up" delay={0.8 + index * 0.1}>
              <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg bg-white dark:bg-charcoal/80 h-full relative overflow-hidden">
                {/* Gradient overlay on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${type.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />

                <CardContent className="p-6 relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${type.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-lg group-hover:shadow-xl relative`}
                    >
                      {/* Glow effect */}
                      <div
                        className={`absolute inset-0 rounded-xl bg-gradient-to-br ${type.gradient} blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                      />
                      <type.icon className="w-6 h-6 text-white relative z-10 drop-shadow-sm" />
                    </div>
                    {type.badge && (
                      <Badge className="bg-gradient-to-r from-brandyellow to-orange-500 text-charcoal text-xs font-semibold shadow-md">
                        {type.badge}
                      </Badge>
                    )}
                  </div>
                  <h4 className="text-xl font-bold text-charcoal dark:text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-charcoal group-hover:to-charcoal/70 dark:group-hover:from-white dark:group-hover:to-white/70 group-hover:bg-clip-text transition-all duration-300">
                    {type.title}
                  </h4>
                  <p className="text-charcoal/70 dark:text-white/70 group-hover:text-charcoal/90 dark:group-hover:text-white/90 transition-colors duration-300">
                    {type.description}
                  </p>
                </CardContent>
              </Card>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}
