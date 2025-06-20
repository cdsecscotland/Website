"use client"

import { useState } from "react"
import Link from "next/link"
import { Shield, Target, Users, AlertTriangle, FileCheck, Search } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tab } from "@headlessui/react"
import { cn } from "@/lib/utils"
import ScrollAnimation from "./scroll-animation"

const serviceCategories = [
  {
    name: "Testing Services",
    services: [
      {
        icon: Shield,
        title: "Penetration Testing",
        description: "Comprehensive security assessments conducted by CREST certified professionals to identify vulnerabilities before attackers do.",
        features: ["Web Application Testing", "Network Penetration Testing", "Mobile App Security", "API Security Testing"],
        link: "/penetration-testing",
        gradient: "from-blue-500 to-cyan-500",
        iconColor: "text-white",
        bgColor: "bg-gradient-to-br from-blue-500/10 to-cyan-500/10",
        borderColor: "border-blue-200 dark:border-blue-800",
        glowColor: "shadow-blue-500/25",
      },
      {
        icon: Target,
        title: "Threat Led Penetration Testing",
        description: "Advanced testing methodologies that simulate real-world attack scenarios specific to your industry and threat landscape.",
        features: ["APT Simulation", "Industry-Specific Threats", "Custom Attack Scenarios", "Threat Intelligence Integration"],
        link: "/penetration-testing",
        gradient: "from-red-500 to-orange-500",
        iconColor: "text-white",
        bgColor: "bg-gradient-to-br from-red-500/10 to-orange-500/10",
        borderColor: "border-red-200 dark:border-red-800",
        glowColor: "shadow-red-500/25",
      },
      {
        icon: Users,
        title: "Red Teaming",
        description: "Full-scale adversarial simulations testing your organisation's detection and response capabilities against sophisticated attacks.",
        features: ["Multi-Vector Attacks", "Social Engineering", "Physical Security Testing", "Purple Team Exercises"],
        link: "/penetration-testing",
        gradient: "from-red-600 to-red-500",
        iconColor: "text-white",
        bgColor: "bg-gradient-to-br from-red-600/10 to-red-500/10",
        borderColor: "border-red-200 dark:border-red-800",
        glowColor: "shadow-red-600/25",
      },
    ]
  },
  {
    name: "Security Consultancy",
    services: [
      {
        icon: AlertTriangle,
        title: "Vulnerability Management",
        description: "Continuous monitoring and management of security vulnerabilities with expert-guided remediation strategies.",
        features: ["Continuous Monitoring", "Risk-Based Prioritization", "Patch Management", "Threat Intelligence"],
        link: "/vulnerability-management-scotland",
        gradient: "from-emerald-500 to-teal-500",
        iconColor: "text-white",
        bgColor: "bg-gradient-to-br from-emerald-500/10 to-teal-500/10",
        borderColor: "border-emerald-200 dark:border-emerald-800",
        glowColor: "shadow-emerald-500/25",
      },
      {
        icon: FileCheck,
        title: "Compliance & Auditing",
        description: "Expert guidance for Cyber Essentials, ISO 27001, SOC 2, GDPR, and PCI DSS compliance requirements.",
        gradient: "from-violet-500 to-purple-500",
        iconColor: "text-white",
        bgColor: "bg-gradient-to-br from-violet-500/10 to-purple-500/10",
        borderColor: "border-violet-200 dark:border-violet-800",
        glowColor: "shadow-violet-500/25",
        features: ["Cyber Essentials Plus", "ISO 27001 Implementation", "SOC 2 Readiness", "PCI DSS Assessment"],
        link: "/compliance-auditing",
      },
      {
        icon: Search,
        title: "Security Consulting",
        description: "Strategic security advice and implementation support to strengthen your overall security posture.",
        gradient: "from-green-500 to-emerald-500",
        iconColor: "text-white",
        bgColor: "bg-gradient-to-br from-green-500/10 to-emerald-500/10",
        borderColor: "border-green-200 dark:border-green-800",
        glowColor: "shadow-green-500/25",
        features: ["Security Strategy", "Risk Assessment", "Architecture Review", "Implementation Support"],
        link: "/security-assessment-services",
      },
    ]
  }
]

export default function HeadlessServices() {
  const [selectedIndex, setSelectedIndex] = useState(0)

  return (
    <section id="services" className="py-16 bg-white/95 dark:bg-charcoal/95 relative backdrop-blur-sm">
      <div className="container relative z-10">
        <ScrollAnimation animation="fade">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal dark:text-white mb-4">
              Premium Security Services
            </h2>
            <p className="text-xl text-charcoal/80 dark:text-white/80 max-w-3xl mx-auto">
              Enterprise-grade security solutions delivered by certified professionals to protect your most valuable assets
            </p>
          </div>
        </ScrollAnimation>

        <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
          <div className="flex justify-center mb-12">
            <Tab.List className="flex space-x-1 rounded-xl bg-charcoal/10 dark:bg-white/10 p-1 backdrop-blur-sm">
              {serviceCategories.map((category, index) => (
                <Tab
                  key={category.name}
                  className={({ selected }) =>
                    cn(
                      "w-full rounded-lg py-3 px-6 text-sm font-medium leading-5 transition-all duration-300",
                      "ring-white ring-opacity-60 ring-offset-2 ring-offset-transparent focus:outline-none focus:ring-2",
                      selected
                        ? "bg-white dark:bg-charcoal text-charcoal dark:text-white shadow-lg transform scale-105"
                        : "text-charcoal/70 dark:text-white/70 hover:bg-white/50 dark:hover:bg-charcoal/50 hover:text-charcoal dark:hover:text-white"
                    )
                  }
                >
                  {category.name}
                </Tab>
              ))}
            </Tab.List>
          </div>

          <Tab.Panels>
            {serviceCategories.map((category, categoryIndex) => (
              <Tab.Panel
                key={category.name}
                className={cn(
                  "rounded-xl focus:outline-none",
                  "transition-all duration-500 ease-out",
                )}
              >
                <ScrollAnimation animation="fade" key={categoryIndex}>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {category.services.map((service, index) => (
                      <ScrollAnimation key={index} animation="slide-up" delay={0.1 * index}>
                        {service.link ? (
                          <Link href={service.link} className="block h-full">
                            <Card
                              className={cn(
                                "group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 cursor-pointer",
                                "border-0 shadow-lg relative overflow-hidden h-full",
                                "hover:shadow-xl hover:" + service.glowColor,
                                service.bgColor,
                                service.borderColor,
                                "border"
                              )}
                            >
                              {/* Gradient overlay on hover */}
                              <div
                                className={cn(
                                  "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-500",
                                  service.gradient
                                )}
                              />

                              <CardHeader className="pb-4 relative z-10">
                                <div
                                  className={cn(
                                    "w-16 h-16 rounded-xl flex items-center justify-center mb-4",
                                    "group-hover:scale-110 transition-all duration-500 shadow-lg group-hover:shadow-xl relative",
                                    "bg-gradient-to-br " + service.gradient
                                  )}
                                >
                                  {/* Glow effect */}
                                  <div
                                    className={cn(
                                      "absolute inset-0 rounded-xl blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-500",
                                      "bg-gradient-to-br " + service.gradient
                                    )}
                                  />
                                  <service.icon className={cn("w-8 h-8 relative z-10 drop-shadow-sm", service.iconColor)} />
                                </div>
                                <CardTitle className="text-xl text-charcoal dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-charcoal group-hover:to-charcoal/70 dark:group-hover:from-white dark:group-hover:to-white/70 group-hover:bg-clip-text transition-all duration-300">
                                  {service.title}
                                </CardTitle>
                              </CardHeader>
                              <CardContent className="relative z-10">
                                <CardDescription className="text-charcoal/70 dark:text-white/70 mb-4">
                                  {service.description}
                                </CardDescription>
                                <ul className="space-y-2 mb-4">
                                  {service.features.map((feature, idx) => (
                                    <li key={idx} className="text-sm text-charcoal/60 dark:text-white/60 flex items-center">
                                      <div
                                        className={cn(
                                          "w-1.5 h-1.5 rounded-full mr-2 shadow-sm",
                                          "bg-gradient-to-r " + service.gradient
                                        )}
                                      />
                                      {feature}
                                    </li>
                                  ))}
                                </ul>
                                <Button
                                  variant="outline"
                                  className={cn(
                                    "w-full group-hover:bg-gradient-to-r transition-all duration-300",
                                    "border-charcoal/20 dark:border-white/20 dark:text-white hover:shadow-lg",
                                    "group-hover:text-white group-hover:border-transparent",
                                    "group-hover:" + service.gradient.replace("from-", "group-hover:from-").replace("to-", "group-hover:to-")
                                  )}
                                >
                                  Learn More
                                </Button>
                              </CardContent>
                            </Card>
                          </Link>
                        ) : (
                          <Card
                          className={cn(
                            "group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3",
                            "border-0 shadow-lg relative overflow-hidden h-full",
                            "hover:shadow-xl hover:" + service.glowColor,
                            service.bgColor,
                            service.borderColor,
                            "border"
                          )}
                        >
                          {/* Gradient overlay on hover */}
                          <div
                            className={cn(
                              "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-500",
                              service.gradient
                            )}
                          />

                          <CardHeader className="pb-4 relative z-10">
                            <div
                              className={cn(
                                "w-16 h-16 rounded-xl flex items-center justify-center mb-4",
                                "group-hover:scale-110 transition-all duration-500 shadow-lg group-hover:shadow-xl relative",
                                "bg-gradient-to-br " + service.gradient
                              )}
                            >
                              {/* Glow effect */}
                              <div
                                className={cn(
                                  "absolute inset-0 rounded-xl blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-500",
                                  "bg-gradient-to-br " + service.gradient
                                )}
                              />
                              <service.icon className={cn("w-8 h-8 relative z-10 drop-shadow-sm", service.iconColor)} />
                            </div>
                            <CardTitle className="text-xl text-charcoal dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-charcoal group-hover:to-charcoal/70 dark:group-hover:from-white dark:group-hover:to-white/70 group-hover:bg-clip-text transition-all duration-300">
                              {service.title}
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="relative z-10">
                            <CardDescription className="text-charcoal/70 dark:text-white/70 mb-4">
                              {service.description}
                            </CardDescription>
                            <ul className="space-y-2 mb-4">
                              {service.features.map((feature, idx) => (
                                <li key={idx} className="text-sm text-charcoal/60 dark:text-white/60 flex items-center">
                                  <div
                                    className={cn(
                                      "w-1.5 h-1.5 rounded-full mr-2 shadow-sm",
                                      "bg-gradient-to-r " + service.gradient
                                    )}
                                  />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                            <Button
                              variant="outline"
                              className={cn(
                                "w-full group-hover:bg-gradient-to-r transition-all duration-300",
                                "border-charcoal/20 dark:border-white/20 dark:text-white hover:shadow-lg",
                                "group-hover:text-white group-hover:border-transparent",
                                "group-hover:" + service.gradient.replace("from-", "group-hover:from-").replace("to-", "group-hover:to-")
                              )}
                            >
                              Learn More
                            </Button>
                          </CardContent>
                        </Card>
                        )}
                      </ScrollAnimation>
                    ))}
                  </div>
                </ScrollAnimation>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </section>
  )
}