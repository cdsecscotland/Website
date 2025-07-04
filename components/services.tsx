"use client"

import Link from "next/link"
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
 link: "/penetration-testing",
 gradient: "from-blue-500 to-cyan-500",
 iconColor: "text-white",
 bgColor: "bg-gradient-to-br from-blue-500/10 to-cyan-500/10",
 borderColor: "border-blue-200 ",
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
 link: "/penetration-testing",
 gradient: "from-red-500 to-orange-500",
 iconColor: "text-white",
 bgColor: "bg-gradient-to-br from-red-500/10 to-orange-500/10",
 borderColor: "border-red-200 ",
 },
 {
 icon: Users,
 title: "Red Teaming",
 description:
 "Full-scale adversarial simulations testing your organization's detection and response capabilities against sophisticated attacks.",
 features: ["Multi-Vector Attacks", "Social Engineering", "Physical Security Testing", "Purple Team Exercises"],
 link: "/penetration-testing",
 gradient: "from-red-600 to-red-500",
 iconColor: "text-white",
 bgColor: "bg-gradient-to-br from-red-600/10 to-red-500/10",
 borderColor: "border-red-200 ",
 },
 {
 icon: AlertTriangle,
 title: "Vulnerability Management",
 description:
 "Continuous monitoring and management of security vulnerabilities with expert-guided remediation strategies.",
 features: ["Continuous Monitoring", "Risk-Based Prioritization", "Patch Management", "Threat Intelligence"],
 link: "/vulnerability-management-scotland",
 gradient: "from-emerald-500 to-teal-500",
 iconColor: "text-white",
 bgColor: "bg-gradient-to-br from-emerald-500/10 to-teal-500/10",
 borderColor: "border-emerald-200 ",
 },
]

const additionalServices = [
 {
 icon: FileCheck,
 title: "Compliance & Auditing",
 description: "Expert guidance for ISO 27001, SOC 2, GDPR, and PCI DSS compliance requirements.",
 link: "/compliance-auditing",
 gradient: "from-violet-500 to-purple-500",
 },
 {
 icon: Search,
 title: "Security Consulting",
 description: "Strategic security advice and implementation support to strengthen your overall security posture.",
 link: "/security-assessment-services",
 gradient: "from-green-500 to-emerald-500",
 },
 {
 icon: Lock,
 title: "Secure Development",
 description: "DevSecOps integration and secure coding practices for your development lifecycle.",
 link: "/security-assessment-services",
 gradient: "from-blue-500 to-indigo-500",
 },
 {
 icon: Eye,
 title: "Security Code Review",
 description: "Static and dynamic code analysis to identify security vulnerabilities in your applications.",
 link: "/security-assessment-services",
 gradient: "from-yellow-500 to-orange-500",
 },
]

export default function Services() {

 return (
 <section id="services" className="py-16 bg-white/95 relative backdrop-blur-sm">
 <div className="container relative z-10">
 <ScrollAnimation animation="fade">
 <div className="text-center mb-12">
 <h2 className="text-responsive-4xl md:text-responsive-5xl font-bold text-charcoal mb-4">
 Premium Security Services
 </h2>
 <p className="text-responsive-xl text-charcoal/80 max-w-3xl mx-auto">
 Enterprise-grade security solutions delivered by certified professionals to protect your most valuable
 assets
 </p>
 </div>
 </ScrollAnimation>

 {/* Main Services */}
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
 {mainServices.map((service, index) => (
 <ScrollAnimation key={index} animation="slide-up" delay={0.2 * index}>
 <Link href={service.link} className="block h-full">
 <Card
 className={`group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-0 shadow-lg cursor-pointer ${service.bgColor} ${service.borderColor} border h-full relative overflow-hidden`}
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
 <CardTitle className="text-responsive-xl text-charcoal group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-charcoal group-hover:to-charcoal/70 group-hover:bg-clip-text transition-all duration-300">
 {service.title}
 </CardTitle>
 </CardHeader>
 <CardContent className="relative z-10">
 <CardDescription className="text-charcoal/70 mb-4">
 {service.description}
 </CardDescription>
 <ul className="space-y-2">
 {service.features.map((feature, idx) => (
 <li key={idx} className="text-sm text-charcoal/60 flex items-center">
 <div
 className={`w-1.5 h-1.5 bg-gradient-to-r ${service.gradient} rounded-full mr-2 shadow-sm`}
 ></div>
 {feature}
 </li>
 ))}
 </ul>
 <Button
 variant="outline"
 className={`w-full mt-4 group-hover:bg-gradient-to-r group-hover:${service.gradient} group-hover:text-white group-hover:border-transparent transition-all duration-300 border-charcoal/20 hover:shadow-lg`}
 >
 Learn More
 </Button>
 </CardContent>
 </Card>
 </Link>
 </ScrollAnimation>
 ))}
 </div>

 {/* Additional Services */}
 <ScrollAnimation animation="fade" delay={0.6}>
 <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-lightgray/50 relative overflow-hidden">
 {/* Background pattern */}
 <div className="absolute inset-0 opacity-5">
 <div className="absolute inset-0 bg-gradient-to-br from-brandyellow/20 via-transparent to-brightyellow/20" />
 </div>

 <h3 className="text-responsive-2xl font-bold text-charcoal mb-8 text-center relative z-10">
 Additional Security Services
 </h3>
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
 {additionalServices.map((service, index) => (
 <ScrollAnimation key={index} animation="slide-up" delay={0.8 + index * 0.1}>
 <Link href={service.link} className="block">
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
 <h4 className="font-semibold text-charcoal mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-charcoal group-hover:to-charcoal/70 group-hover:bg-clip-text transition-all duration-300">
 {service.title}
 </h4>
 <p className="text-sm text-charcoal/70 group-hover:text-charcoal/90 transition-colors duration-300">
 {service.description}
 </p>
 </div>
 </Link>
 </ScrollAnimation>
 ))}
 </div>
 </div>
 </ScrollAnimation>

 {/* Channel Partners Section */}
 <ScrollAnimation animation="fade" delay={1.0}>
 <div className="bg-gradient-to-br from-charcoal via-charcoal/95 to-charcoal/90 rounded-2xl p-8 md:p-12 shadow-xl relative overflow-hidden">
 {/* Background pattern */}
 <div className="absolute inset-0 opacity-10">
 <div className="absolute inset-0 bg-gradient-to-br from-brandyellow/20 via-transparent to-brightyellow/20" />
 </div>

 <div className="relative z-10">
 <div className="text-center mb-12">
 <h3 className="text-responsive-3xl md:text-responsive-4xl font-bold text-white mb-6">
 Channel Partner Program
 </h3>
 <p className="text-responsive-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
 We provide our comprehensive security testing services to over 50 channel partners, allowing them to focus on what they do best without the complexities of hiring a security testing team.
 </p>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
 <div className="text-center">
 <div className="w-20 h-20 bg-brandyellow rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
 <span className="text-3xl font-bold text-charcoal">50+</span>
 </div>
 <h4 className="text-xl font-bold text-white mb-2">Active Partners</h4>
 <p className="text-white/70">
 Growing network of trusted channel partners across multiple industries
 </p>
 </div>

 <div className="text-center">
 <div className="w-20 h-20 bg-brandyellow rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
 <span className="text-3xl font-bold text-charcoal">35%</span>
 </div>
 <h4 className="text-xl font-bold text-white mb-2">Revenue Increase</h4>
 <p className="text-white/70">
 Average testing revenue increase achieved by partners within one year
 </p>
 </div>

 <div className="text-center">
 <div className="w-20 h-20 bg-brandyellow rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
 <span className="text-3xl font-bold text-charcoal">100%</span>
 </div>
 <h4 className="text-xl font-bold text-white mb-2">Accreditation Access</h4>
 <p className="text-white/70">
 Full access to our team's reputation and certifications - no white labelling restrictions
 </p>
 </div>
 </div>

 <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
 <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
 <h4 className="text-xl font-bold text-white mb-4">What We Handle</h4>
 <ul className="space-y-3 text-white/80">
 <li className="flex items-start">
 <div className="w-2 h-2 bg-brandyellow rounded-full mr-3 mt-2 flex-shrink-0"></div>
 Complete project management and delivery
 </li>
 <li className="flex items-start">
 <div className="w-2 h-2 bg-brandyellow rounded-full mr-3 mt-2 flex-shrink-0"></div>
 All client communication and reporting
 </li>
 <li className="flex items-start">
 <div className="w-2 h-2 bg-brandyellow rounded-full mr-3 mt-2 flex-shrink-0"></div>
 Technical delivery and quality assurance
 </li>
 <li className="flex items-start">
 <div className="w-2 h-2 bg-brandyellow rounded-full mr-3 mt-2 flex-shrink-0"></div>
 Certification and accreditation compliance
 </li>
 </ul>
 </div>

 <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
 <h4 className="text-xl font-bold text-white mb-4">Partner Benefits</h4>
 <ul className="space-y-3 text-white/80">
 <li className="flex items-start">
 <div className="w-2 h-2 bg-brandyellow rounded-full mr-3 mt-2 flex-shrink-0"></div>
 Increased revenue streams without overhead
 </li>
 <li className="flex items-start">
 <div className="w-2 h-2 bg-brandyellow rounded-full mr-3 mt-2 flex-shrink-0"></div>
 Access to CREST and industry certifications
 </li>
 <li className="flex items-start">
 <div className="w-2 h-2 bg-brandyellow rounded-full mr-3 mt-2 flex-shrink-0"></div>
 No restrictions on accreditation usage
 </li>
 <li className="flex items-start">
 <div className="w-2 h-2 bg-brandyellow rounded-full mr-3 mt-2 flex-shrink-0"></div>
 Professional reputation and credibility
 </li>
 </ul>
 </div>
 </div>

 <div className="text-center mt-12">
 <Button
 asChild
 size="lg"
 className="bg-brandyellow hover:bg-brightyellow text-charcoal font-semibold px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
 >
 <Link href="/contact">Become a Channel Partner</Link>
 </Button>
 </div>
 </div>
 </div>
 </ScrollAnimation>
 </div>
 </section>
 )
}
