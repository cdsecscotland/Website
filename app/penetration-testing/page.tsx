import { Metadata } from "next"
import { Shield, Target, Search, FileCheck, CheckCircle, Users, Clock, Award, Globe, Smartphone, Cloud, Database, Wifi, Lock, AlertTriangle, Eye } from "lucide-react"
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
    icon: Target,
    title: "Threat Led Penetration Testing",
    description: "Advanced testing methodology that simulates real-world attack scenarios specific to your industry threat landscape and business context.",
    methodology: "Intelligence-driven testing approach combining threat actor profiling, attack path modelling, and scenario-based testing. Utilises current threat intelligence to simulate techniques, tactics and procedures (TTPs) used by threat actors targeting your industry.",
    features: ["Industry-Specific Threat Modelling", "Advanced Persistent Threat Simulation", "Supply Chain Attack Scenarios", "Targeted Social Engineering", "Zero-Day Vulnerability Research"]
  },
  {
    icon: Globe,
    title: "Web Application Penetration Testing",
    description: "Comprehensive security testing of web applications using OWASP methodology to identify vulnerabilities before attackers do.",
    methodology: "OWASP Testing Guide, ASVS verification, automated scanning combined with manual testing techniques including authentication bypass, session management flaws, injection attacks, and business logic vulnerabilities.",
    features: ["SQL Injection & NoSQL Testing", "Cross-Site Scripting (XSS)", "Authentication & Session Management", "Business Logic Flaw Assessment", "API Security Testing"],
  },
  {
    icon: Target,
    title: "Network Penetration Testing",
    description: "External and internal network security assessments following NIST and PTES methodologies to identify infrastructure vulnerabilities.",
    methodology: "PTES (Penetration Testing Execution Standard) methodology including reconnaissance, scanning, enumeration, vulnerability assessment, exploitation, and post-exploitation activities with detailed network mapping.",
    features: ["External Perimeter Testing", "Internal Network Segmentation", "Privilege Escalation Testing", "Lateral Movement Assessment", "Network Device Configuration Review"],
  },
  {
    icon: Smartphone,
    title: "Mobile Application Security Testing",
    description: "Comprehensive security assessment of iOS and Android applications following OWASP Mobile Security Testing Guide (MSTG).",
    methodology: "OWASP MSTG framework covering static and dynamic analysis, runtime testing, binary analysis, network communication assessment, and platform-specific security controls validation.",
    features: ["Static & Dynamic Code Analysis", "Runtime Application Self-Protection", "Data Storage Security", "Network Communication Security", "Authentication & Cryptography"],
  },
  {
    icon: Cloud,
    title: "Cloud Security Assessment",
    description: "Multi-cloud security assessment covering AWS, Azure, and GCP using cloud-specific security frameworks and best practices.",
    methodology: "Cloud Security Alliance (CSA) framework, NIST Cloud Computing Security, provider-specific security benchmarks (CIS), configuration review, identity and access management assessment, and serverless security analysis.",
    features: ["Multi-Cloud Environment Assessment", "IAM & Access Control Review", "Container & Kubernetes Security", "Serverless Security Testing", "Cloud Storage Security Assessment"],
  },
  {
    icon: Database,
    title: "Database Security Assessment",
    description: "Comprehensive database security testing covering SQL Server, Oracle, MySQL, PostgreSQL, and NoSQL databases.",
    methodology: "Database-specific security testing methodology including configuration review, privilege escalation testing, data exposure assessment, encryption validation, and SQL injection testing across different database platforms.",
    features: ["Database Configuration Review", "Privilege Escalation Testing", "Data Encryption Assessment", "Access Control Validation", "Backup & Recovery Security"],
  },
  {
    icon: Wifi,
    title: "Wireless Security Assessment",
    description: "Comprehensive wireless network security testing including WiFi, Bluetooth, and IoT device security assessment.",
    methodology: "802.11 security testing methodology covering WPA/WPA2/WPA3 security, enterprise wireless assessment, rogue access point detection, and wireless client security testing using specialized tools and techniques.",
    features: ["Enterprise Wireless Security", "Guest Network Assessment", "Rogue Access Point Detection", "Wireless Client Security", "IoT Device Security Testing"],
  },
  {
    icon: Lock,
    title: "API Security Testing",
    description: "Specialized security testing of REST, GraphQL, and SOAP APIs following OWASP API Security Top 10 methodology.",
    methodology: "OWASP API Security Testing methodology including authentication testing, authorization bypass, input validation, rate limiting, error handling assessment, and API-specific business logic testing.",
    features: ["REST API Security Assessment", "GraphQL Security Testing", "Authentication & Authorization", "Rate Limiting & Throttling", "API Gateway Security"],
  },
  {
    icon: Eye,
    title: "Social Engineering Assessment",
    description: "Human element security testing including phishing campaigns, physical security assessment, and social engineering awareness testing.",
    methodology: "Multi-vector social engineering methodology including email phishing, vishing (voice phishing), smishing (SMS phishing), physical security testing, and social media reconnaissance to test human security controls.",
    features: ["Email Phishing Campaigns", "Voice & SMS Phishing", "Physical Security Assessment", "Social Media Intelligence", "Security Awareness Testing"],
  },
  {
    icon: AlertTriangle,
    title: "Red Team Exercises",
    description: "Advanced adversarial simulation testing detection, response capabilities, and security maturity using real-world attack scenarios.",
    methodology: "MITRE ATT&CK framework-based methodology simulating advanced persistent threats (APTs), multi-stage attacks, persistence mechanisms, and testing incident response capabilities with realistic attack scenarios.",
    features: ["APT Simulation Testing", "Multi-Stage Attack Scenarios", "Persistence & Stealth Testing", "Incident Response Testing", "Security Maturity Assessment"],
  }
]

const regulatedTesting = [
  {
    title: "DORA (Digital Operational Resilience Act)",
    region: "European Union",
    description: "EU regulation requiring financial entities to conduct penetration testing as part of their ICT risk management framework.",
    requirements: "Annual penetration testing, threat-led testing scenarios, comprehensive ICT risk assessment, and third-party ICT service provider risk management.",
    scope: "Financial institutions, payment service providers, insurance companies, and critical ICT third-party service providers within the EU."
  },
  {
    title: "TIBER-EU (Threat Intelligence-based Ethernet Red Team)",
    region: "European Union",
    description: "European Central Bank framework for controlled cyber attack simulations against critical financial market infrastructure.",
    requirements: "Threat intelligence-based red team testing, realistic attack scenarios based on current threat landscape, comprehensive testing of detection and response capabilities.",
    scope: "Systemically important financial institutions, financial market infrastructures, and critical service providers in the EU financial sector."
  },
  {
    title: "VARA (Virtual Assets Regulation Authority)",
    region: "United Arab Emirates",
    description: "UAE regulatory framework requiring comprehensive cybersecurity assessments for virtual asset service providers.",
    requirements: "Regular penetration testing, security architecture review, incident response testing, and continuous security monitoring for virtual asset platforms.",
    scope: "Cryptocurrency exchanges, wallet providers, token issuers, and other virtual asset service providers operating in or from the UAE."
  },
  {
    title: "DFSA (Dubai Financial Services Authority)",
    region: "United Arab Emirates",
    description: "Dubai regulatory framework requiring financial institutions to conduct regular cybersecurity assessments and penetration testing.",
    requirements: "Annual cybersecurity assessments, penetration testing of critical systems, third-party security assessments, and incident response capability testing.",
    scope: "Financial institutions, insurance companies, and financial service providers operating in the Dubai International Financial Centre (DIFC)."
  }
]

const methodology = [
  {
    step: "1",
    title: "Pre-Engagement & Scoping",
    description: "Comprehensive project scoping, legal agreements, rules of engagement definition, and testing methodology selection based on specific requirements and compliance needs."
  },
  {
    step: "2", 
    title: "Intelligence Gathering & Reconnaissance",
    description: "Passive and active information gathering using OSINT techniques, network reconnaissance, and target profiling to understand the attack surface and potential entry points."
  },
  {
    step: "3",
    title: "Threat Modelling & Attack Planning",
    description: "Development of attack scenarios based on relevant threat actors, creation of attack trees, and prioritisation of testing activities based on business risk and threat landscape."
  },
  {
    step: "4",
    title: "Vulnerability Discovery & Analysis", 
    description: "Systematic vulnerability identification using automated tools and manual testing techniques, vulnerability validation, and impact assessment with detailed technical analysis."
  },
  {
    step: "5",
    title: "Exploitation & Post-Exploitation",
    description: "Careful exploitation of discovered vulnerabilities to demonstrate real-world impact, privilege escalation testing, persistence mechanisms, and lateral movement assessment."
  },
  {
    step: "6",
    title: "Reporting & Recommendations",
    description: "Comprehensive reporting with executive summary, detailed technical findings, risk ratings, remediation guidance, and strategic security recommendations."
  },
  {
    step: "7",
    title: "Remediation Support & Validation",
    description: "90-day support period for remediation assistance, re-testing of fixed vulnerabilities, and validation of implemented security controls to ensure effective remediation."
  }
]

const certifications = [
  "CREST Certified Penetration Tester (CRT)",
  "CREST Certified Simulated Attack Specialist (CSAS)", 
  "NCSC Assured Service Provider",
  "Cyber Scheme Certified Professional",
  "OSCP - Offensive Security Certified Professional",
  "CISSP - Certified Information Systems Security Professional",
  "CISSP - Certified Information Systems Security Professional",
  "SANS GIAC Security Certifications"
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
                Threat Led Penetration Testing
              </h1>
              <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
                Comprehensive, threat led, penetration testing to provide actionable and accurate results to ensure your cyber security investments are targeted and relevant.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-brandyellow hover:bg-brightyellow text-charcoal font-semibold px-8 py-4">
                  <Link href="/build-pentest">Get a Quote</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-charcoal font-semibold">
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
                Comprehensive Penetration Testing Services
              </h2>
              <p className="text-lg text-charcoal/70 dark:text-white/70 max-w-3xl mx-auto">
                Our complete range of penetration testing services covers all aspects of your digital infrastructure with specialised methodologies for each testing domain
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {testingTypes.map((type, index) => (
              <ScrollAnimation key={index} animation="slide-up" delay={index * 0.05}>
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-brandyellow/20 rounded-lg flex items-center justify-center mr-4">
                        <type.icon className="w-6 h-6 text-brandyellow" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg leading-tight">{type.title}</CardTitle>
                      </div>
                    </div>
                    <CardDescription className="text-sm mb-4">{type.description}</CardDescription>
                    <div className="bg-gray-50 dark:bg-charcoal/30 p-3 rounded-lg mb-4">
                      <h4 className="font-semibold text-xs text-brandyellow mb-1">METHODOLOGY:</h4>
                      <p className="text-xs text-charcoal/70 dark:text-white/70">{type.methodology}</p>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {type.features.map((feature, idx) => (
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

      {/* Regulated Testing */}
      <section className="py-20 bg-gray-50 dark:bg-charcoal/50">
        <div className="container">
          <ScrollAnimation animation="fade">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal dark:text-white mb-4">
                Specialised Regulatory Compliance Testing
              </h2>
              <p className="text-lg text-charcoal/70 dark:text-white/70 max-w-3xl mx-auto">
                Expert penetration testing services for regulated industries with specific compliance requirements across different jurisdictions
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {regulatedTesting.map((regulation, index) => (
              <ScrollAnimation key={index} animation="slide-up" delay={index * 0.1}>
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <CardTitle className="text-xl text-brandyellow">{regulation.title}</CardTitle>
                        <Badge variant="outline" className="mt-1">{regulation.region}</Badge>
                      </div>
                    </div>
                    <CardDescription className="text-base mb-4">{regulation.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-sm text-charcoal dark:text-white mb-2">Requirements:</h4>
                        <p className="text-sm text-charcoal/70 dark:text-white/70">{regulation.requirements}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-charcoal dark:text-white mb-2">Scope:</h4>
                        <p className="text-sm text-charcoal/70 dark:text-white/70">{regulation.scope}</p>
                      </div>
                    </div>
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
                Our Penetration Testing Methodology
              </h2>
              <p className="text-lg text-charcoal/70 dark:text-white/70 max-w-3xl mx-auto">
                Structured approach following industry-standard frameworks including OWASP, NIST, PTES, and MITRE ATT&CK
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
                  <h3 className="text-lg font-semibold text-charcoal dark:text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-charcoal/70 dark:text-white/70">{step.description}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Credentials */}
      <section className="py-20 bg-gray-50 dark:bg-charcoal/50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation animation="slide-left">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-charcoal dark:text-white mb-6">
                  Industry-Leading Credentials
                </h2>
                <p className="text-lg text-charcoal/70 dark:text-white/70 mb-8">
                  Our team holds the most respected certifications in cybersecurity, ensuring you receive 
                  the highest quality penetration testing services available with deep expertise in both offensive security and regulatory compliance.
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