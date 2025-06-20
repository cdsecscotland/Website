import { Metadata } from "next"
import { Shield, FileCheck, Award, CheckCircle, Users, Clock, Eye, Target, Lock, AlertTriangle, Globe, Building } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import ScrollAnimation from "@/components/scroll-animation"
import HeadlessContact from "@/components/headless-contact"

export const metadata: Metadata = {
 title: "Compliance & Auditing Services | ISO 27001, Cyber Essentials, PCI DSS | Closed Door Security",
 description: "Expert compliance and auditing services for ISO 27001, Cyber Essentials, Cyber Essentials Plus, PCI DSS, SOC 2, and GDPR. Achieve certification and maintain regulatory compliance.",
}

const primaryCertifications = [
 {
 icon: Shield,
 title: "Cyber Essentials",
 description: "UK government-backed scheme providing baseline cybersecurity certification for organisations of all sizes.",
 methodology: "Five key security controls assessment: boundary firewalls, secure configuration, access control, malware protection, and patch management. Self-assessment questionnaire with external validation of security policies and procedures.",
 features: ["Security Controls Assessment", "Policy Documentation Review", "Self-Assessment Support", "External Validation", "Annual Certification"],
 governmentBacked: true
 },
 {
 icon: Target,
 title: "Cyber Essentials Plus",
 description: "Enhanced UK cybersecurity certification including hands-on technical verification of security controls implementation.",
 methodology: "Comprehensive technical testing including vulnerability scanning, configuration review, penetration testing of key controls, and detailed technical validation of all five security control areas with evidence-based assessment.",
 features: ["Technical Vulnerability Testing", "Hands-on Security Verification", "Configuration Assessment", "Penetration Testing", "Enhanced Certification"],
 governmentBacked: true
 },
 {
 icon: Building,
 title: "ISO 27001",
 description: "International standard for information security management systems (ISMS) providing comprehensive security framework.",
 methodology: "ISMS implementation following ISO 27001:2022 standard including risk assessment, security controls selection from Annex A, management system documentation, internal audits, and management review processes.",
 features: ["ISMS Implementation", "Risk Assessment & Treatment", "Security Controls Implementation", "Management System Documentation", "Internal Audit Programme"],
 governmentBacked: false
 },
 {
 icon: FileCheck,
 title: "PCI DSS",
 description: "Payment Card Industry Data Security Standard for organisations handling cardholder data and payment processing.",
 methodology: "PCI DSS v4.0 compliance assessment covering 12 requirements across 6 categories: secure network, protect cardholder data, vulnerability management, access controls, monitoring, and information security policy.",
 features: ["Cardholder Data Environment Assessment", "Network Security Testing", "Access Control Validation", "Monitoring & Logging Review", "Policy & Procedure Assessment"],
 governmentBacked: false
 },
 {
 icon: Globe,
 title: "SOC 2",
 description: "Service Organization Control 2 compliance for service providers, focusing on security, availability, and confidentiality.",
 methodology: "SOC 2 Type I and Type II assessments covering five trust service criteria: security, availability, processing integrity, confidentiality, and privacy. Control design evaluation and operating effectiveness testing.",
 features: ["Trust Service Criteria Assessment", "Control Design Evaluation", "Operating Effectiveness Testing", "Type I & Type II Reports", "Continuous Monitoring"],
 governmentBacked: false
 },
 {
 icon: Eye,
 title: "GDPR Compliance",
 description: "General Data Protection Regulation compliance assessment and implementation for data protection and privacy.",
 methodology: "GDPR Article-by-Article compliance assessment including lawful basis evaluation, data mapping, privacy impact assessments, data subject rights implementation, and breach notification procedures.",
 features: ["Data Protection Impact Assessment", "Data Mapping & Classification", "Privacy Policy Development", "Data Subject Rights Implementation", "Breach Response Planning"],
 governmentBacked: false
 }
]

const additionalFrameworks = [
 {
 title: "NIST Cybersecurity Framework",
 description: "US framework for improving cybersecurity posture",
 category: "Risk Management"
 },
 {
 title: "ISO 27017",
 description: "Cloud security controls and implementation guidance",
 category: "Cloud Security"
 },
 {
 title: "ISO 27018",
 description: "Privacy protection in public cloud computing",
 category: "Privacy"
 },
 {
 title: "COBIT 2019",
 description: "IT governance and management framework",
 category: "IT Governance"
 },
 {
 title: "HIPAA",
 description: "Healthcare information protection and privacy",
 category: "Healthcare"
 },
 {
 title: "FCA Guidelines",
 description: "Financial Conduct Authority operational resilience",
 category: "Financial Services"
 },
 {
 title: "NIS Directive",
 description: "Network and Information Systems security directive",
 category: "Critical Infrastructure"
 },
 {
 title: "DORA",
 description: "Digital Operational Resilience Act for financial services",
 category: "Financial Services"
 }
]

const auditingServices = [
 {
 icon: Users,
 title: "Gap Analysis & Readiness Assessment",
 description: "Comprehensive evaluation of current security posture against chosen compliance framework requirements.",
 methodology: "Structured assessment methodology comparing existing controls against framework requirements, identifying gaps, and creating prioritised remediation roadmap with timeline and resource allocation.",
 features: ["Current State Assessment", "Gap Identification", "Risk Impact Analysis", "Remediation Roadmap", "Resource Planning"]
 },
 {
 icon: Clock,
 title: "Implementation Support",
 description: "Hands-on guidance for implementing security controls, policies, and procedures required for compliance.",
 methodology: "Phased implementation approach including policy development, procedure creation, technical control implementation, staff training, and documentation management with ongoing support and validation.",
 features: ["Policy & Procedure Development", "Technical Control Implementation", "Staff Training Programmes", "Documentation Management", "Progress Monitoring"]
 },
 {
 icon: Award,
 title: "Certification Support",
 description: "End-to-end support through certification processes with expert guidance and audit preparation.",
 methodology: "Pre-audit preparation including documentation review, mock audits, auditor liaison, evidence preparation, and post-audit support for addressing findings and maintaining certification.",
 features: ["Pre-Audit Assessment", "Mock Audit Exercises", "Auditor Liaison", "Evidence Preparation", "Post-Audit Support"]
 },
 {
 icon: AlertTriangle,
 title: "Continuous Monitoring",
 description: "Ongoing compliance monitoring and reporting to maintain certification and detect compliance drift.",
 methodology: "Automated and manual monitoring systems for continuous compliance validation, regular assessment cycles, incident management, and proactive compliance maintenance with reporting and alerting.",
 features: ["Automated Compliance Monitoring", "Regular Assessment Cycles", "Incident Management", "Compliance Reporting", "Proactive Maintenance"]
 }
]

const methodology = [
 {
 step: "1",
 title: "Initial Assessment & Gap Analysis",
 description: "Comprehensive evaluation of current security posture against chosen compliance framework requirements with detailed gap identification and risk assessment."
 },
 {
 step: "2",
 title: "Compliance Roadmap Development",
 description: "Creation of detailed implementation plan with timelines, milestones, resource requirements, and priority actions for achieving compliance certification."
 },
 {
 step: "3",
 title: "Policy & Procedure Development",
 description: "Development of comprehensive policy framework, procedures, and documentation required for compliance with ongoing review and approval processes."
 },
 {
 step: "4",
 title: "Technical Control Implementation",
 description: "Implementation of technical security controls, system configurations, and security tools required for compliance with validation and testing."
 },
 {
 step: "5",
 title: "Training & Awareness",
 description: "Staff training programmes, security awareness initiatives, and competency development to ensure ongoing compliance understanding and adherence."
 },
 {
 step: "6",
 title: "Pre-Audit Preparation",
 description: "Comprehensive audit preparation including documentation review, evidence gathering, mock audits, and readiness assessment for certification."
 },
 {
 step: "7",
 title: "Certification & Ongoing Support",
 description: "Support during certification audit, post-audit remediation assistance, and ongoing compliance monitoring and maintenance programmes."
 }
]

const credentials = [
 "ISO 27001 Lead Implementer Certified",
 "ISO 27001 Lead Auditor Certified",
 "Cyber Essentials Assessor Accredited",
 "PCI DSS Qualified Security Assessor (QSA)",
 "CISSP - Certified Information Systems Security Professional",
 "CISA - Certified Information Systems Auditor",
 "CISM - Certified Information Security Manager",
 "GDPR Certified Data Protection Officer"
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
 Professional Compliance & Auditing Services
 </h1>
 <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
 Expert guidance for achieving and maintaining regulatory compliance. From Cyber Essentials and ISO 27001 to PCI DSS, SOC 2, and GDPR - we help you navigate complex compliance requirements with comprehensive certification support.
 </p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center">
 <Button asChild size="lg" className="bg-brandyellow hover:bg-brightyellow text-charcoal font-semibold px-8 py-4">
 <Link href="/build-pentest">Get Started</Link>
 </Button>
 <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-charcoal font-semibold">
 <Link href="/contact">Speak to an Expert</Link>
 </Button>
 </div>
 </div>
 </ScrollAnimation>
 </div>
 </section>

 {/* Primary Certifications */}
 <section className="py-20 bg-white ">
 <div className="container">
 <ScrollAnimation animation="fade">
 <div className="text-center mb-16">
 <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
 Core Compliance Certifications
 </h2>
 <p className="text-lg text-charcoal/70 max-w-3xl mx-auto">
 Comprehensive certification services for the most important cybersecurity and compliance frameworks
 </p>
 </div>
 </ScrollAnimation>

 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
 {primaryCertifications.map((cert, index) => (
 <ScrollAnimation key={index} animation="slide-up" delay={index * 0.1}>
 <Card className="h-full hover:shadow-lg transition-shadow">
 <CardHeader>
 <div className="flex items-center mb-4">
 <div className="w-12 h-12 bg-brandyellow/20 rounded-lg flex items-center justify-center mr-4">
 <cert.icon className="w-6 h-6 text-brandyellow" />
 </div>
 <div className="flex-1">
 <div className="flex items-center gap-2">
 <CardTitle className="text-xl">{cert.title}</CardTitle>
 {cert.governmentBacked && (
 <Badge variant="default" className="bg-blue-100 text-blue-800 text-xs">UK Gov</Badge>
 )}
 </div>
 </div>
 </div>
 <CardDescription className="text-sm mb-4">{cert.description}</CardDescription>
 <div className="bg-gray-50 p-3 rounded-lg mb-4">
 <h4 className="font-semibold text-xs text-brandyellow mb-1">METHODOLOGY:</h4>
 <p className="text-xs text-charcoal/70 ">{cert.methodology}</p>
 </div>
 </CardHeader>
 <CardContent>
 <ul className="space-y-2">
 {cert.features.map((feature, idx) => (
 <li key={idx} className="flex items-start text-sm">
 <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
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

 {/* Implementation Services */}
 <section className="py-20 bg-gray-50 ">
 <div className="container">
 <ScrollAnimation animation="fade">
 <div className="text-center mb-16">
 <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
 Compliance Implementation Services
 </h2>
 <p className="text-lg text-charcoal/70 max-w-3xl mx-auto">
 End-to-end support for implementing and maintaining compliance across your organisation
 </p>
 </div>
 </ScrollAnimation>

 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
 {auditingServices.map((service, index) => (
 <ScrollAnimation key={index} animation="slide-up" delay={index * 0.1}>
 <Card className="h-full hover:shadow-lg transition-shadow">
 <CardHeader>
 <div className="flex items-center mb-4">
 <div className="w-12 h-12 bg-brandyellow/20 rounded-lg flex items-center justify-center mr-4">
 <service.icon className="w-6 h-6 text-brandyellow" />
 </div>
 <CardTitle className="text-xl">{service.title}</CardTitle>
 </div>
 <CardDescription className="text-base mb-4">{service.description}</CardDescription>
 <div className="bg-gray-50 p-3 rounded-lg mb-4">
 <h4 className="font-semibold text-xs text-brandyellow mb-1">APPROACH:</h4>
 <p className="text-xs text-charcoal/70 ">{service.methodology}</p>
 </div>
 </CardHeader>
 <CardContent>
 <ul className="space-y-2">
 {service.features.map((feature, idx) => (
 <li key={idx} className="flex items-start text-sm">
 <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
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

 {/* Additional Frameworks */}
 <section className="py-20 bg-white ">
 <div className="container">
 <ScrollAnimation animation="fade">
 <div className="text-center mb-16">
 <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
 Additional Compliance Frameworks
 </h2>
 <p className="text-lg text-charcoal/70 max-w-3xl mx-auto">
 We provide expert guidance across all major compliance frameworks and industry-specific standards
 </p>
 </div>
 </ScrollAnimation>

 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
 {additionalFrameworks.map((framework, index) => (
 <ScrollAnimation key={index} animation="slide-up" delay={index * 0.05}>
 <Card className="text-center hover:shadow-lg transition-shadow bg-white ">
 <CardContent className="p-6">
 <Badge variant="secondary" className="mb-3">{framework.category}</Badge>
 <h3 className="text-lg font-semibold text-charcoal mb-2">{framework.title}</h3>
 <p className="text-sm text-charcoal/70 ">{framework.description}</p>
 </CardContent>
 </Card>
 </ScrollAnimation>
 ))}
 </div>
 </div>
 </section>

 {/* Methodology */}
 <section className="py-20 bg-gray-50 ">
 <div className="container">
 <ScrollAnimation animation="fade">
 <div className="text-center mb-16">
 <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
 Our Compliance Implementation Methodology
 </h2>
 <p className="text-lg text-charcoal/70 max-w-3xl mx-auto">
 Structured approach to achieving compliance with measurable outcomes and ongoing support
 </p>
 </div>
 </ScrollAnimation>

 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-6">
 {methodology.map((step, index) => (
 <ScrollAnimation key={index} animation="slide-up" delay={index * 0.1}>
 <div className="text-center lg:col-span-1">
 <div className="w-16 h-16 bg-brandyellow rounded-full flex items-center justify-center text-charcoal font-bold text-xl mx-auto mb-4">
 {step.step}
 </div>
 <h3 className="text-lg font-semibold text-charcoal mb-2">{step.title}</h3>
 <p className="text-sm text-charcoal/70 ">{step.description}</p>
 </div>
 </ScrollAnimation>
 ))}
 </div>
 </div>
 </section>

 {/* Credentials & Statistics */}
 <section className="py-20 bg-white ">
 <div className="container">
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
 <ScrollAnimation animation="slide-left">
 <div>
 <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
 Expert Compliance Credentials
 </h2>
 <p className="text-lg text-charcoal/70 mb-8">
 Our team holds internationally recognised certifications and accreditations, ensuring you receive 
 expert guidance from qualified professionals with deep expertise in compliance frameworks and audit processes.
 </p>
 <ul className="space-y-3">
 {credentials.map((credential, index) => (
 <li key={index} className="flex items-center">
 <Award className="w-5 h-5 text-brandyellow mr-3" />
 <span className="text-charcoal text-sm">{credential}</span>
 </li>
 ))}
 </ul>
 </div>
 </ScrollAnimation>

 <ScrollAnimation animation="slide-right">
 <Card className="p-8 bg-gradient-to-br from-brandyellow/10 to-brandyellow/5">
 <div className="grid grid-cols-2 gap-8 text-center">
 <div>
 <div className="text-3xl font-bold text-brandyellow mb-2">200+</div>
 <div className="text-sm text-charcoal/70 ">Certifications Achieved</div>
 </div>
 <div>
 <div className="text-3xl font-bold text-brandyellow mb-2">98%</div>
 <div className="text-sm text-charcoal/70 ">First-Time Pass Rate</div>
 </div>
 <div>
 <div className="text-3xl font-bold text-brandyellow mb-2">12</div>
 <div className="text-sm text-charcoal/70 ">Months Average Timeline</div>
 </div>
 <div>
 <div className="text-3xl font-bold text-brandyellow mb-2">100%</div>
 <div className="text-sm text-charcoal/70 ">Ongoing Support</div>
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