import { Metadata } from "next"
import { Shield, FileCheck, Award, CheckCircle, Users, Clock, Eye, Target } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import ScrollAnimation from "@/components/scroll-animation"
import HeadlessContact from "@/components/headless-contact"

export const metadata: Metadata = {
  title: "Compliance & Auditing Services | ISO 27001, SOC 2, GDPR | Closed Door Security",
  description: "Expert compliance and auditing services for ISO 27001, SOC 2, GDPR, and PCI DSS. Achieve certification and maintain regulatory compliance with our guidance.",
}

const complianceServices = [
  {
    icon: Shield,
    title: "ISO 27001 Compliance",
    description: "Complete information security management system implementation and certification support for ISO 27001 standards.",
    features: ["Gap Analysis", "ISMS Implementation", "Risk Assessment", "Internal Audits", "Certification Support"],
    duration: "3-6 months",
    complexity: "High"
  },
  {
    icon: FileCheck,
    title: "SOC 2 Readiness",
    description: "Service Organization Control 2 compliance preparation, implementation, and ongoing audit support.",
    features: ["Controls Design", "Implementation Support", "Pre-audit Assessment", "Remediation Planning", "Ongoing Monitoring"],
    duration: "2-4 months",
    complexity: "High"
  },
  {
    icon: Eye,
    title: "GDPR Compliance",
    description: "General Data Protection Regulation compliance assessment, implementation, and privacy impact assessments.",
    features: ["Privacy Impact Assessment", "Data Mapping", "Policy Development", "Training Programs", "Breach Response Planning"],
    duration: "1-3 months",
    complexity: "Medium"
  },
  {
    icon: Target,
    title: "PCI DSS Compliance",
    description: "Payment Card Industry Data Security Standard compliance for organizations handling card payments.",
    features: ["Network Security Assessment", "Cardholder Data Environment Review", "Policy Development", "Vulnerability Management", "Compliance Validation"],
    duration: "2-3 months",
    complexity: "Medium to High"
  }
]

const auditingServices = [
  {
    icon: Users,
    title: "Internal Security Audits",
    description: "Comprehensive internal security audits to identify gaps and ensure ongoing compliance with your chosen frameworks.",
    features: ["Control Effectiveness Testing", "Documentation Review", "Process Assessment", "Risk Evaluation"]
  },
  {
    icon: Clock,
    title: "Continuous Monitoring",
    description: "Ongoing compliance monitoring and reporting to maintain certification and detect compliance drift.",
    features: ["Automated Compliance Monitoring", "Regular Reporting", "Alert Management", "Trend Analysis"]
  },
  {
    icon: Award,
    title: "Certification Support",
    description: "End-to-end support through certification processes with expert guidance and audit preparation.",
    features: ["Audit Preparation", "Documentation Support", "Auditor Liaison", "Remediation Planning"]
  }
]

const frameworks = [
  { name: "ISO 27001", description: "Information Security Management" },
  { name: "SOC 2", description: "Service Organization Controls" },
  { name: "GDPR", description: "General Data Protection Regulation" },
  { name: "PCI DSS", description: "Payment Card Industry Standards" },
  { name: "NIST Framework", description: "Cybersecurity Framework" },
  { name: "ISO 27017", description: "Cloud Security Controls" },
  { name: "ISO 27018", description: "Cloud Privacy Protection" },
  { name: "HIPAA", description: "Healthcare Information Protection" }
]

const methodology = [
  {
    step: "1",
    title: "Assessment & Gap Analysis",
    description: "Comprehensive review of current security posture against chosen compliance framework requirements."
  },
  {
    step: "2",
    title: "Implementation Planning",
    description: "Development of detailed roadmap with timelines, resources, and priority actions for compliance achievement."
  },
  {
    step: "3",
    title: "Control Implementation",
    description: "Hands-on support implementing security controls, policies, and procedures required for compliance."
  },
  {
    step: "4",
    title: "Documentation & Training",
    description: "Creation of compliance documentation and staff training programs to ensure ongoing adherence."
  },
  {
    step: "5",
    title: "Audit Preparation & Support",
    description: "Pre-audit assessments and direct support during certification audits to ensure successful outcomes."
  }
]

export default function ComplianceAuditingPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-charcoal via-charcoal/95 to-charcoal/90 overflow-hidden">
        <div className="container relative z-10">
          <ScrollAnimation animation="fade">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Compliance & Auditing Services
              </h1>
              <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
                Expert guidance for achieving and maintaining regulatory compliance. From ISO 27001 to SOC 2, GDPR, and PCI DSS - we help you navigate complex compliance requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-brandyellow hover:bg-brightyellow text-charcoal font-semibold px-8 py-4">
                  <Link href="/build-pentest">Get Started</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-charcoal">
                  <Link href="#contact">Speak to an Expert</Link>
                </Button>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Compliance Services */}
      <section className="py-20 bg-white dark:bg-charcoal">
        <div className="container">
          <ScrollAnimation animation="fade">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal dark:text-white mb-4">
                Compliance Services
              </h2>
              <p className="text-lg text-charcoal/70 dark:text-white/70 max-w-3xl mx-auto">
                Comprehensive compliance services to help you achieve and maintain certification
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {complianceServices.map((service, index) => (
              <ScrollAnimation key={index} animation="slide-up" delay={index * 0.1}>
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-brandyellow/20 rounded-lg flex items-center justify-center mr-4">
                        <service.icon className="w-6 h-6 text-brandyellow" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{service.title}</CardTitle>
                        <div className="flex gap-2 mt-1">
                          <Badge variant="secondary" className="text-xs">{service.duration}</Badge>
                          <Badge variant="outline" className="text-xs">{service.complexity}</Badge>
                        </div>
                      </div>
                    </div>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
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

          {/* Additional Services */}
          <ScrollAnimation animation="fade">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-charcoal dark:text-white mb-4">
                Auditing & Monitoring Services
              </h3>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {auditingServices.map((service, index) => (
              <ScrollAnimation key={index} animation="slide-up" delay={index * 0.1}>
                <Card className="h-full text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-16 h-16 bg-brandyellow/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <service.icon className="w-8 h-8 text-brandyellow" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-left">
                      {service.features.map((feature, idx) => (
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

      {/* Compliance Frameworks */}
      <section className="py-20 bg-gray-50 dark:bg-charcoal/50">
        <div className="container">
          <ScrollAnimation animation="fade">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal dark:text-white mb-4">
                Supported Compliance Frameworks
              </h2>
              <p className="text-lg text-charcoal/70 dark:text-white/70 max-w-3xl mx-auto">
                We provide expert guidance across all major compliance frameworks and standards
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {frameworks.map((framework, index) => (
              <ScrollAnimation key={index} animation="slide-up" delay={index * 0.05}>
                <Card className="text-center hover:shadow-lg transition-shadow bg-white dark:bg-charcoal/80">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-charcoal dark:text-white mb-2">{framework.name}</h3>
                    <p className="text-sm text-charcoal/70 dark:text-white/70">{framework.description}</p>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-20 bg-white dark:bg-charcoal">
        <div className="container">
          <ScrollAnimation animation="fade">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal dark:text-white mb-4">
                Our Compliance Methodology
              </h2>
              <p className="text-lg text-charcoal/70 dark:text-white/70 max-w-3xl mx-auto">
                Structured approach to achieving compliance with measurable outcomes
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

      {/* Contact Section */}
      <HeadlessContact />
    </main>
  )
}