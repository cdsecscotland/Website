"use client"

import { Shield, Target, Users, AlertTriangle, FileCheck, Search, Lock, Eye } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import ScrollAnimation from "./scroll-animation"

const mainServices = [
  {
    icon: Shield,
    title: "Penetration Testing",
    description:
      "Comprehensive security assessments conducted by CREST certified professionals to identify vulnerabilities before attackers do.",
    features: ["Web Application Testing", "Network Penetration Testing", "Mobile App Security", "API Security Testing"],
    gradient: "from-blue-500 to-cyan-500",
    iconColor: "text-white",
    bgColor: "bg-gradient-to-br from-blue-500/10 to-cyan-500/10",
    borderColor: "border-blue-200 dark:border-blue-800",
  },
  {
    icon: Target,
    title: "Threat Led Penetration Testing",
    description:
      "Advanced testing methodologies that simulate real-world attack scenarios specific to your industry and threat landscape.",
    features: [
      "APT Simulation",
      "Industry-Specific Threats",
      "Custom Attack Scenarios",
      "Threat Intelligence Integration",
    ],
    gradient: "from-red-500 to-orange-500",
    iconColor: "text-white",
    bgColor: "bg-gradient-to-br from-red-500/10 to-orange-500/10",
    borderColor: "border-red-200 dark:border-red-800",
  },
  {
    icon: Users,
    title: "Red Teaming",
    description:
      "Full-scale adversarial simulations testing your organization's detection and response capabilities against sophisticated attacks.",
    features: ["Multi-Vector Attacks", "Social Engineering", "Physical Security Testing", "Purple Team Exercises"],
    gradient: "from-purple-500 to-indigo-500",
    iconColor: "text-white",
    bgColor: "bg-gradient-to-br from-purple-500/10 to-indigo-500/10",
    borderColor: "border-purple-200 dark:border-purple-800",
  },
  {
    icon: AlertTriangle,
    title: "Vulnerability Management",
    description:
      "Continuous monitoring and management of security vulnerabilities with expert-guided remediation strategies.",
    features: ["Continuous Monitoring", "Risk-Based Prioritization", "Patch Management", "Threat Intelligence"],
    gradient: "from-emerald-500 to-teal-500",
    iconColor: "text-white",
    bgColor: "bg-gradient-to-br from-emerald-500/10 to-teal-500/10",
    borderColor: "border-emerald-200 dark:border-emerald-800",
  },
]

const additionalServices = [
  {
    icon: FileCheck,
    title: "Compliance & Auditing",
    description: "Expert guidance for ISO 27001, SOC 2, GDPR, and PCI DSS compliance requirements.",
    gradient: "from-violet-500 to-purple-500",
  },
  {
    icon: Search,
    title: "Security Consulting",
    description: "Strategic security advice and implementation support to strengthen your overall security posture.",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: Lock,
    title: "Secure Development",
    description: "DevSecOps integration and secure coding practices for your development lifecycle.",
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    icon: Eye,
    title: "Security Code Review",
    description: "Static and dynamic code analysis to identify security vulnerabilities in your applications.",
    gradient: "from-yellow-500 to-orange-500",
  },
]

export default function Services() {

  return (
    <section id="services" className="py-16 bg-white/95 dark:bg-charcoal/95 relative backdrop-blur-sm">
      <div className="container relative z-10">
        <ScrollAnimation animation="fade">
          <div className="text-center mb-12">
            <h2 className="text-responsive-4xl md:text-responsive-5xl font-bold text-charcoal dark:text-white mb-4">
              Premium Security Services
            </h2>
            <p className="text-responsive-xl text-charcoal/80 dark:text-white/80 max-w-3xl mx-auto">
              Enterprise-grade security solutions delivered by certified professionals to protect your most valuable
              assets
            </p>
          </div>
        </ScrollAnimation>

        {/* Main Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {mainServices.map((service, index) => (
            <ScrollAnimation key={index} animation="slide-up" delay={0.2 * index}>
              <Card
                className={`group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-0 shadow-lg ${service.bgColor} ${service.borderColor} border h-full relative overflow-hidden`}
              >
                {/* Gradient overlay on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />

                <CardHeader className="pb-4 relative z-10">
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-500 shadow-lg group-hover:shadow-xl relative`}
                  >
                    {/* Glow effect */}
                    <div
                      className={`absolute inset-0 rounded-xl bg-gradient-to-br ${service.gradient} blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                    />
                    <service.icon className={`w-8 h-8 ${service.iconColor} relative z-10 drop-shadow-sm`} />
                  </div>
                  <CardTitle className="text-responsive-xl text-charcoal dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-charcoal group-hover:to-charcoal/70 dark:group-hover:from-white dark:group-hover:to-white/70 group-hover:bg-clip-text transition-all duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <CardDescription className="text-charcoal/70 dark:text-white/70 mb-4">
                    {service.description}
                  </CardDescription>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-charcoal/60 dark:text-white/60 flex items-center">
                        <div
                          className={`w-1.5 h-1.5 bg-gradient-to-r ${service.gradient} rounded-full mr-2 shadow-sm`}
                        ></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="outline"
                    className={`w-full mt-4 group-hover:bg-gradient-to-r group-hover:${service.gradient} group-hover:text-white group-hover:border-transparent transition-all duration-300 border-charcoal/20 dark:border-white/20 dark:text-white hover:shadow-lg`}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </ScrollAnimation>
          ))}
        </div>

        {/* Additional Services */}
        <ScrollAnimation animation="fade" delay={0.6}>
          <div className="bg-white/80 dark:bg-charcoal/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-lightgray/50 dark:border-gray-700 relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0 bg-gradient-to-br from-brandyellow/20 via-transparent to-brightyellow/20" />
            </div>

            <h3 className="text-responsive-2xl font-bold text-charcoal dark:text-white mb-8 text-center relative z-10">
              Additional Security Services
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
              {additionalServices.map((service, index) => (
                <ScrollAnimation key={index} animation="slide-up" delay={0.8 + index * 0.1}>
                  <div className="text-center group cursor-pointer">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-500 shadow-lg group-hover:shadow-xl relative`}
                    >
                      {/* Glow effect */}
                      <div
                        className={`absolute inset-0 rounded-xl bg-gradient-to-br ${service.gradient} blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-500`}
                      />
                      <service.icon className="w-8 h-8 text-white relative z-10 drop-shadow-sm" />
                    </div>
                    <h4 className="font-semibold text-charcoal dark:text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-charcoal group-hover:to-charcoal/70 dark:group-hover:from-white dark:group-hover:to-white/70 group-hover:bg-clip-text transition-all duration-300">
                      {service.title}
                    </h4>
                    <p className="text-sm text-charcoal/70 dark:text-white/70 group-hover:text-charcoal/90 dark:group-hover:text-white/90 transition-colors duration-300">
                      {service.description}
                    </p>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
