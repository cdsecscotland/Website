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
    icon: AlertTriangle,
    title: "Red Team Exercises",
    description: "Advanced adversarial simulation testing detection, response capabilities, and security maturity using real-world attack scenarios.",
    methodology: "MITRE ATT&CK framework-based methodology simulating advanced persistent threats (APTs), multi-stage attacks, persistence mechanisms, and testing incident response capabilities with realistic attack scenarios.",
    features: ["APT Simulation Testing", "Multi-Stage Attack Scenarios", "Persistence & Stealth Testing", "Incident Response Testing", "Security Maturity Assessment"],
  },
  {
    icon: FileCheck,
    title: "Purple Team Exercises",
    description: "Collaborative security testing combining red team attack simulation with blue team defence to improve detection and response capabilities.",
    methodology: "Collaborative approach where red team attackers work alongside blue team defenders to test, validate, and improve security controls, detection rules, and incident response procedures in real-time.",
    features: ["Real-Time Attack & Defence", "Detection Rule Validation", "Security Control Testing", "Incident Response Improvement", "Knowledge Transfer Sessions"],
  },
  {
    icon: Globe,
    title: "Web Application Penetration Testing",
    description: "Comprehensive security testing of web applications using OWASP methodology to identify vulnerabilities before attackers do.",
    methodology: "OWASP Testing Guide, ASVS verification, automated scanning combined with manual testing techniques including authentication bypass, session management flaws, injection attacks, and business logic vulnerabilities.",
    features: ["SQL Injection & NoSQL Testing", "Cross-Site Scripting (XSS)", "Authentication & Session Management", "Business Logic Flaw Assessment", "API Security Testing"],
  },
  {
    icon: Shield,
    title: "Network Penetration Testing",
    description: "External and internal network security assessments following NIST and PTES methodologies to identify infrastructure vulnerabilities.",
    methodology: "PTES (Penetration Testing Execution Standard) methodology including reconnaissance, scanning, enumeration, vulnerability assessment, exploitation, and post-exploitation activities with detailed network mapping.",
    features: ["External Perimeter Testing", "Internal Network Segmentation", "Privilege Escalation Testing", "Lateral Movement Assessment", "Network Device Configuration Review"],
  },
  {
    icon: Smartphone,
    title: "Mobile Application Testing",
    description: "Comprehensive security assessment of iOS and Android applications including static and dynamic analysis.",
    methodology: "OWASP MASVS methodology covering application architecture review, reverse engineering, runtime analysis, and network communication testing with device-specific security controls validation.",
    features: ["Static & Dynamic Analysis", "Binary Reverse Engineering", "Runtime Application Security", "Network Communication Testing", "Device-Specific Controls"],
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure Testing",
    description: "Security assessment of cloud environments including AWS, Azure, and Google Cloud Platform configurations and services.",
    methodology: "Cloud Security Alliance (CSA) framework covering identity and access management, data protection, network security, and cloud-specific service configurations with multi-tenancy considerations.",
    features: ["IAM Configuration Review", "Storage & Database Security", "Network Security Groups", "Cloud Service Misconfiguration", "Container Security Assessment"],
  },
  {
    icon: Database,
    title: "Database Security Testing",
    description: "Comprehensive assessment of database security including configuration review and access control testing.",
    methodology: "Database-specific security frameworks covering authentication mechanisms, privilege escalation, data encryption, backup security, and database-specific vulnerabilities with compliance validation.",
    features: ["Database Configuration Review", "Access Control Testing", "Privilege Escalation Assessment", "Data Encryption Validation", "Backup Security Review"],
  },
  {
    icon: Wifi,
    title: "Wireless Network Testing",
    description: "Security assessment of wireless networks including Wi-Fi, Bluetooth, and IoT device communications.",
    methodology: "IEEE 802.11 security standards assessment covering encryption protocols, access point configuration, wireless intrusion detection, and wireless device security with frequency analysis.",
    features: ["Wi-Fi Security Assessment", "Wireless Protocol Analysis", "Access Point Configuration", "Wireless IDS Testing", "IoT Device Communication"],
  },
]

const regulatoryCompliance = [
  {
    name: "DORA",
    fullName: "Digital Operational Resilience Act",
    sector: "Financial Services",
    description: "EU regulation for financial entities requiring comprehensive ICT risk management and operational resilience testing.",
    testingRequirements: [
      "Advanced threat-led penetration testing",
      "Red team exercises simulating sophisticated attack scenarios", 
      "Testing of critical or important functions",
      "Scenario-based testing of operational resilience",
      "Third-party risk assessment"
    ]
  },
  {
    name: "TIBER-EU",
    fullName: "Threat Intelligence-based Ethical Red Teaming",
    sector: "Financial Services",
    description: "European framework for controlled, bespoke, intelligence-led cyber attacks against the critical functions of an entity.",
    testingRequirements: [
      "Intelligence-led threat scenario development",
      "Multi-phase attack simulation",
      "Critical business function targeting",
      "Detection and response capability testing",
      "Board-level risk communication"
    ]
  },
  {
    name: "VARA",
    fullName: "Virtual Assets Regulatory Authority",
    sector: "Cryptocurrency & Digital Assets",
    description: "UAE regulatory framework for virtual asset service providers requiring comprehensive cybersecurity controls.",
    testingRequirements: [
      "Comprehensive penetration testing",
      "Digital asset security assessment",
      "Smart contract security testing",
      "Cryptocurrency transaction security",
      "Regulatory compliance validation"
    ]
  },
  {
    name: "DFSA",
    fullName: "Dubai Financial Services Authority",
    sector: "Financial Services",
    description: "Dubai International Financial Centre regulatory requirements for information security and operational resilience.",
    testingRequirements: [
      "Annual penetration testing",
      "External and internal infrastructure testing",
      "Application security assessment",
      "Business continuity testing",
      "Third-party security validation"
    ]
  }
]

export default function PenetrationTestingPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-charcoal via-charcoal to-charcoal/90 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <div className="container relative">
          <ScrollAnimation animation="fade">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-6 bg-brandyellow/10 text-brandyellow border-brandyellow/20">
                CREST Certified Testing
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Threat Led
                <span className="text-brandyellow"> Penetration Testing</span>
              </h1>
              <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
                Advanced cybersecurity testing that goes beyond traditional penetration testing. 
                Our threat-led approach simulates real-world attack scenarios specific to your industry, 
                providing actionable intelligence to strengthen your security posture.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" className="bg-brandyellow hover:bg-brightyellow text-charcoal font-semibold">
                    Start Your Assessment
                  </Button>
                </Link>
                <Link href="#services">
                  <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                    Explore Services
                  </Button>
                </Link>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-white/95 dark:bg-charcoal/95 backdrop-blur-sm">
        <div className="container">
          <ScrollAnimation animation="slide-up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal dark:text-white mb-4">
                Why Choose Our Penetration Testing?
              </h2>
              <p className="text-xl text-charcoal/70 dark:text-white/70 max-w-3xl mx-auto">
                Intelligence-driven security testing that provides real-world attack simulation
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Threat Intelligence Led",
                description: "Testing based on current threat actor tactics, techniques, and procedures (TTPs) specific to your industry and threat landscape."
              },
              {
                icon: CheckCircle,
                title: "CREST Certified",
                description: "All testing performed by CREST certified professionals following industry-leading methodologies and standards."
              },
              {
                icon: Eye,
                title: "Real-World Scenarios",
                description: "Simulated attacks that mirror actual threat actor behaviours, providing practical insights into your security posture."
              }
            ].map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <ScrollAnimation key={index} animation="slide-up" delay={index * 0.1}>
                  <Card className="h-full border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
                    <CardHeader className="text-center">
                      <Icon className="w-12 h-12 text-brandyellow mx-auto mb-4" />
                      <CardTitle className="text-xl text-charcoal dark:text-white">{benefit.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-charcoal/70 dark:text-white/70 text-center">
                        {benefit.description}
                      </p>
                    </CardContent>
                  </Card>
                </ScrollAnimation>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testing Services */}
      <section id="services" className="py-20 bg-gray-50 dark:bg-charcoal">
        <div className="container">
          <ScrollAnimation animation="slide-up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal dark:text-white mb-4">
                Comprehensive Testing Services
              </h2>
              <p className="text-xl text-charcoal/70 dark:text-white/70 max-w-3xl mx-auto">
                From threat-led assessments to specialized compliance testing
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid gap-8">
            {testingTypes.map((service, index) => {
              const Icon = service.icon
              return (
                <ScrollAnimation key={index} animation="slide-up" delay={index * 0.1}>
                  <Card className="border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-brandyellow/10 rounded-lg flex-shrink-0">
                          <Icon className="w-6 h-6 text-brandyellow" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-xl text-charcoal dark:text-white mb-2">
                            {service.title}
                          </CardTitle>
                          <CardDescription className="text-charcoal/70 dark:text-white/70 text-base">
                            {service.description}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-charcoal dark:text-white mb-2">Methodology</h4>
                          <p className="text-charcoal/70 dark:text-white/70 text-sm">
                            {service.methodology}
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-charcoal dark:text-white mb-2">Key Features</h4>
                          <div className="flex flex-wrap gap-2">
                            {service.features.map((feature, featureIndex) => (
                              <Badge key={featureIndex} variant="secondary" className="text-xs">
                                {feature}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollAnimation>
              )
            })}
          </div>
        </div>
      </section>

      {/* Regulatory Compliance Testing */}
      <section className="py-20 bg-white/95 dark:bg-charcoal/95 backdrop-blur-sm">
        <div className="container">
          <ScrollAnimation animation="slide-up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal dark:text-white mb-4">
                Specialized Regulatory Testing
              </h2>
              <p className="text-xl text-charcoal/70 dark:text-white/70 max-w-3xl mx-auto">
                Compliance-focused penetration testing for regulated industries
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 gap-8">
            {regulatoryCompliance.map((regulation, index) => (
              <ScrollAnimation key={index} animation="slide-up" delay={index * 0.1}>
                <Card className="h-full border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <Badge className="bg-brandyellow/10 text-brandyellow border-brandyellow/20">
                        {regulation.name}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {regulation.sector}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl text-charcoal dark:text-white">
                      {regulation.fullName}
                    </CardTitle>
                    <CardDescription className="text-charcoal/70 dark:text-white/70">
                      {regulation.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div>
                      <h4 className="font-semibold text-charcoal dark:text-white mb-3">Testing Requirements</h4>
                      <ul className="space-y-2">
                        {regulation.testingRequirements.map((requirement, reqIndex) => (
                          <li key={reqIndex} className="flex items-start gap-2 text-sm text-charcoal/70 dark:text-white/70">
                            <CheckCircle className="w-4 h-4 text-brandyellow mt-0.5 flex-shrink-0" />
                            {requirement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Testing Process */}
      <section className="py-20 bg-gray-50 dark:bg-charcoal">
        <div className="container">
          <ScrollAnimation animation="slide-up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal dark:text-white mb-4">
                Our Testing Process
              </h2>
              <p className="text-xl text-charcoal/70 dark:text-white/70 max-w-3xl mx-auto">
                Structured methodology ensuring comprehensive and reliable results
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Intelligence Gathering",
                description: "Threat landscape analysis and attack surface reconnaissance",
                icon: Search,
              },
              {
                step: "02", 
                title: "Threat Modelling",
                description: "Industry-specific threat actor profiling and attack scenario development",
                icon: Target,
              },
              {
                step: "03",
                title: "Active Testing",
                description: "Controlled exploitation and attack path validation",
                icon: Shield,
              },
              {
                step: "04",
                title: "Reporting & Remediation",
                description: "Detailed findings with actionable remediation guidance",
                icon: FileCheck,
              },
            ].map((step, index) => {
              const Icon = step.icon
              return (
                <ScrollAnimation key={index} animation="slide-up" delay={index * 0.1}>
                  <div className="text-center">
                    <div className="relative mb-6">
                      <div className="w-16 h-16 bg-brandyellow rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-8 h-8 text-charcoal" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-charcoal dark:bg-white rounded-full flex items-center justify-center">
                        <span className="text-sm font-bold text-white dark:text-charcoal">{step.step}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-charcoal dark:text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-charcoal/70 dark:text-white/70">
                      {step.description}
                    </p>
                  </div>
                </ScrollAnimation>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white/95 dark:bg-charcoal/95 backdrop-blur-sm">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation animation="slide-right">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-charcoal dark:text-white mb-6">
                  Industry-Leading Expertise
                </h2>
                <p className="text-xl text-charcoal/70 dark:text-white/70 mb-8">
                  Our team brings years of real-world experience in cybersecurity, 
                  threat intelligence, and regulatory compliance.
                </p>
                <div className="grid sm:grid-cols-2 gap-6">
                  {[
                    {
                      icon: Award,
                      title: "CREST Certified",
                      description: "Industry-recognized certification for penetration testing excellence"
                    },
                    {
                      icon: Users,
                      title: "Expert Team",
                      description: "Experienced security professionals with diverse industry backgrounds"
                    },
                    {
                      icon: Clock,
                      title: "Rapid Turnaround",
                      description: "Efficient testing process with detailed reporting and remediation guidance"
                    },
                    {
                      icon: Lock,
                      title: "Confidential & Secure",
                      description: "Strict confidentiality protocols and secure handling of sensitive information"
                    }
                  ].map((item, index) => {
                    const Icon = item.icon
                    return (
                      <div key={index} className="flex gap-3">
                        <Icon className="w-6 h-6 text-brandyellow flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="font-semibold text-charcoal dark:text-white mb-1">
                            {item.title}
                          </h3>
                          <p className="text-sm text-charcoal/70 dark:text-white/70">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="slide-left">
              <Card className="border-gray-200 dark:border-gray-700">
                <CardHeader>
                  <CardTitle className="text-charcoal dark:text-white">Ready to Start?</CardTitle>
                  <CardDescription>
                    Get a comprehensive security assessment tailored to your needs
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <HeadlessContact />
                </CardContent>
              </Card>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </main>
  )
}