import { Metadata } from "next"
import { Shield, Target, Search, FileCheck, CheckCircle, Users, Clock, Award } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import ScrollAnimation from "@/components/scroll-animation"
import HeadlessContact from "@/components/headless-contact"

export const metadata: Metadata = {
  title: "Penetration Testing Services | CREST Certified | Closed Door Security",
  description: "Professional penetration testing services by CREST certified experts. Comprehensive security assessments for web applications, networks, and infrastructure.",
}

const testingTypes = [
  {
    icon: Shield,
    title: "Web Application Testing",
    description: "Comprehensive security testing of web applications including OWASP Top 10 vulnerabilities, authentication bypasses, and business logic flaws.",
    features: ["SQL Injection Testing", "XSS Vulnerability Assessment", "Authentication & Authorization Testing", "Session Management Analysis"],
    duration: "1-3 weeks",
    complexity: "Medium to High"
  },
  {
    icon: Target,
    title: "Network Penetration Testing",
    description: "External and internal network security assessments to identify vulnerabilities in your network infrastructure and perimeter defenses.",
    features: ["External Perimeter Testing", "Internal Network Assessment", "Wireless Security Testing", "Firewall Configuration Review"],
    duration: "1-2 weeks", 
    complexity: "Medium"
  },
  {
    icon: Search,
    title: "Infrastructure Testing",
    description: "Detailed security assessments of servers, databases, and cloud infrastructure to identify misconfigurations and vulnerabilities.",
    features: ["Server Hardening Assessment", "Database Security Testing", "Cloud Configuration Review", "Container Security Analysis"],
    duration: "1-2 weeks",
    complexity: "Medium to High"
  },
  {
    icon: FileCheck,
    title: "API Security Testing",
    description: "Specialized testing of REST APIs, GraphQL endpoints, and web services to ensure proper authentication and data protection.",
    features: ["REST API Security Testing", "GraphQL Security Assessment", "Authentication Mechanism Testing", "Data Validation Testing"],
    duration: "3-5 days",
    complexity: "Medium"
  }
]

const methodology = [
  {
    step: "1",
    title: "Planning & Reconnaissance",
    description: "Comprehensive scoping and information gathering to understand your environment and define testing objectives."
  },
  {
    step: "2", 
    title: "Vulnerability Discovery",
    description: "Systematic identification of security vulnerabilities using automated tools and manual testing techniques."
  },
  {
    step: "3",
    title: "Exploitation & Validation", 
    description: "Careful exploitation of discovered vulnerabilities to validate their impact and potential business risk."
  },
  {
    step: "4",
    title: "Reporting & Recommendations",
    description: "Detailed reporting with executive summaries, technical findings, and actionable remediation guidance."
  },
  {
    step: "5",
    title: "Remediation Support",
    description: "90-day support period to assist with vulnerability remediation and answer technical questions."
  }
]

const certifications = [
  "CREST Certified Penetration Tester",
  "NCSC Assured Service Provider", 
  "Cyber Scheme Certified",
  "OSCP Certified Professionals",
  "CISSP Security Expertise"
]

export default function PenetrationTestingPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-charcoal via-charcoal/95 to-charcoal/90 overflow-hidden">
        <div className="container relative z-10">
          <ScrollAnimation animation="fade">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Professional Penetration Testing Services
              </h1>
              <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
                Comprehensive security assessments by CREST certified professionals. Identify vulnerabilities before attackers do with our thorough penetration testing services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-brandyellow hover:bg-brightyellow text-charcoal font-semibold px-8 py-4">
                  <Link href="/build-pentest">Get a Quote</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-charcoal">
                  <Link href="#contact">Speak to an Expert</Link>
                </Button>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Testing Types */}
      <section className="py-20 bg-white dark:bg-charcoal">
        <div className="container">
          <ScrollAnimation animation="fade">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal dark:text-white mb-4">
                Penetration Testing Services
              </h2>
              <p className="text-lg text-charcoal/70 dark:text-white/70 max-w-3xl mx-auto">
                Our comprehensive range of penetration testing services covers all aspects of your digital infrastructure
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testingTypes.map((type, index) => (
              <ScrollAnimation key={index} animation="slide-up" delay={index * 0.1}>
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-brandyellow/20 rounded-lg flex items-center justify-center mr-4">
                        <type.icon className="w-6 h-6 text-brandyellow" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{type.title}</CardTitle>
                        <div className="flex gap-2 mt-1">
                          <Badge variant="secondary" className="text-xs">{type.duration}</Badge>
                          <Badge variant="outline" className="text-xs">{type.complexity}</Badge>
                        </div>
                      </div>
                    </div>
                    <CardDescription className="text-base">{type.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {type.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-20 bg-gray-50 dark:bg-charcoal/50">
        <div className="container">
          <ScrollAnimation animation="fade">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal dark:text-white mb-4">
                Our Testing Methodology
              </h2>
              <p className="text-lg text-charcoal/70 dark:text-white/70 max-w-3xl mx-auto">
                We follow industry-standard methodologies including OWASP, NIST, and PTES frameworks
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {methodology.map((step, index) => (
              <ScrollAnimation key={index} animation="slide-up" delay={index * 0.1}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-brandyellow rounded-full flex items-center justify-center text-charcoal font-bold text-xl mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold text-charcoal dark:text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-charcoal/70 dark:text-white/70">{step.description}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Credentials */}
      <section className="py-20 bg-white dark:bg-charcoal">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation animation="slide-left">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-charcoal dark:text-white mb-6">
                  Industry-Leading Credentials
                </h2>
                <p className="text-lg text-charcoal/70 dark:text-white/70 mb-8">
                  Our team holds the most respected certifications in cybersecurity, ensuring you receive 
                  the highest quality penetration testing services available.
                </p>
                <ul className="space-y-3">
                  {certifications.map((cert, index) => (
                    <li key={index} className="flex items-center">
                      <Award className="w-5 h-5 text-brandyellow mr-3" />
                      <span className="text-charcoal dark:text-white">{cert}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slide-right">
              <Card className="p-8 bg-gradient-to-br from-brandyellow/10 to-brandyellow/5">
                <div className="grid grid-cols-2 gap-8 text-center">
                  <div>
                    <div className="text-3xl font-bold text-brandyellow mb-2">500+</div>
                    <div className="text-sm text-charcoal/70 dark:text-white/70">Tests Completed</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-brandyellow mb-2">99%</div>
                    <div className="text-sm text-charcoal/70 dark:text-white/70">Client Satisfaction</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-brandyellow mb-2">48hr</div>
                    <div className="text-sm text-charcoal/70 dark:text-white/70">Report Delivery</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-brandyellow mb-2">90 days</div>
                    <div className="text-sm text-charcoal/70 dark:text-white/70">Support Period</div>
                  </div>
                </div>
              </Card>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <HeadlessContact />
    </main>
  )
}