import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Shield, CheckCircle, Users, Clock } from "lucide-react"
import ScrollAnimation from "@/components/scroll-animation"

export const metadata: Metadata = {
  title: "Security Assessment Services | Professional Cybersecurity Testing",
  description: "Comprehensive security assessment services including penetration testing, vulnerability assessments, and compliance auditing. Expert cybersecurity professionals with CREST certification.",
  keywords: "security assessment services, cybersecurity assessment, penetration testing services, vulnerability assessment, security testing, cyber security audit, information security assessment",
  alternates: {
    canonical: "https://www.cdsec.co.uk/security-assessment-services",
  },
}

export default function SecurityAssessmentServices() {
  const services = [
    {
      title: "Penetration Testing",
      description: "Comprehensive security testing to identify vulnerabilities before attackers do",
      icon: Shield,
    },
    {
      title: "Vulnerability Assessment",
      description: "Systematic evaluation of security weaknesses in your infrastructure",
      icon: CheckCircle,
    },
    {
      title: "Compliance Auditing", 
      description: "Expert guidance for ISO 27001, SOC 2, and regulatory compliance",
      icon: Users,
    },
    {
      title: "24/7 Security Monitoring",
      description: "Continuous monitoring and rapid response to security threats",
      icon: Clock,
    }
  ]

  const benefits = [
    "CREST certified security professionals",
    "Comprehensive security assessment methodology", 
    "Detailed reporting with remediation guidance",
    "Industry-leading security testing tools",
    "Flexible engagement models",
    "Global reach with local expertise"
  ]

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-cream via-white to-paleyellow/30 dark:from-charcoal dark:via-charcoal/95 dark:to-charcoal">
        <div className="container">
          <ScrollAnimation animation="fade">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-charcoal dark:text-white mb-6">
                Professional Security Assessment Services
              </h1>
              <p className="text-xl text-charcoal/70 dark:text-white/70 max-w-4xl mx-auto">
                Protect your organisation with comprehensive security assessment services from certified cybersecurity professionals. 
                Our expert team provides penetration testing, vulnerability assessments, and compliance auditing to strengthen your security posture.
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="slide-up" delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-brandyellow hover:bg-brightyellow text-charcoal font-semibold">
                <Link href="/build-pentest">Get Security Assessment Quote</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-charcoal text-charcoal hover:bg-charcoal hover:text-white">
                <Link href="#contact">Speak to Security Expert</Link>
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white dark:bg-charcoal/50">
        <div className="container">
          <ScrollAnimation animation="fade">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal dark:text-white mb-4">
                Comprehensive Security Assessment Solutions
              </h2>
              <p className="text-lg text-charcoal/70 dark:text-white/70 max-w-3xl mx-auto">
                Our security assessment services help organisations identify vulnerabilities, achieve compliance, and strengthen their cybersecurity posture.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ScrollAnimation key={index} animation="slide-up" delay={0.1 * index}>
                <div className="bg-white dark:bg-charcoal/80 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <service.icon className="w-12 h-12 text-brandyellow mb-4" />
                  <h3 className="text-xl font-semibold text-charcoal dark:text-white mb-3">{service.title}</h3>
                  <p className="text-charcoal/70 dark:text-white/70">{service.description}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50 dark:bg-charcoal/30">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation animation="slide-right">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-charcoal dark:text-white mb-6">
                  Why Choose Our Security Assessment Services?
                </h2>
                <p className="text-lg text-charcoal/70 dark:text-white/70 mb-8">
                  Founded in 2019, Closed Door Security provides world-class security assessment services to organisations globally. 
                  Our CREST certified professionals deliver comprehensive security testing with detailed reporting and remediation guidance.
                </p>
                
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-charcoal dark:text-white">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slide-left" delay={0.2}>
              <div className="bg-white dark:bg-charcoal/80 rounded-lg p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-charcoal dark:text-white mb-6">Get Your Security Assessment Quote</h3>
                <p className="text-charcoal/70 dark:text-white/70 mb-6">
                  Contact our security experts to discuss your specific requirements and receive a tailored security assessment proposal.
                </p>
                <Button asChild className="w-full bg-brandyellow hover:bg-brightyellow text-charcoal font-semibold">
                  <Link href="/build-pentest">Start Security Assessment</Link>
                </Button>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </main>
  )
}