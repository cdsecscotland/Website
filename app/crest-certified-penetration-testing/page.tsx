import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Shield, Award, Target, CheckCircle } from "lucide-react"
import ScrollAnimation from "@/components/scroll-animation"

export const metadata: Metadata = {
  title: "CREST Certified Penetration Testing | Expert Cyber Security Testing",
  description: "Professional CREST certified penetration testing services. Expert cybersecurity professionals providing comprehensive security testing and vulnerability assessment with industry-leading methodologies.",
  keywords: "CREST certified penetration testing, CREST pentest, certified penetration tester, cyber security testing, professional penetration testing, CREST approved, security assessment",
  alternates: {
    canonical: "https://www.cdsec.co.uk/crest-certified-penetration-testing",
  },
}

export default function CrestCertifiedPenetrationTesting() {
  const crestBenefits = [
    "CREST CRT certified professional testers",
    "Industry-recognised testing methodologies",
    "Comprehensive vulnerability identification",
    "Detailed technical reporting with remediation guidance",
    "Web application and infrastructure testing",
    "Social engineering and phishing assessments"
  ]

  const testingTypes = [
    {
      title: "Web Application Testing",
      description: "Comprehensive security testing of web applications following CREST guidelines",
      icon: Target,
    },
    {
      title: "Infrastructure Testing",
      description: "Network and system penetration testing to identify security weaknesses",
      icon: Shield,
    },
    {
      title: "Red Team Exercises", 
      description: "Advanced adversarial simulations testing detection and response capabilities",
      icon: Award,
    }
  ]

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-cream via-white to-paleyellow/30 dark:from-charcoal dark:via-charcoal/95 dark:to-charcoal">
        <div className="container">
          <ScrollAnimation animation="fade">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center mb-6">
                <Award className="w-12 h-12 text-brandyellow mr-4" />
                <span className="text-2xl font-bold text-brandyellow">CREST Certified</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-charcoal dark:text-white mb-6">
                Professional Penetration Testing Services
              </h1>
              <p className="text-xl text-charcoal/70 dark:text-white/70 max-w-4xl mx-auto">
                Expert CREST certified penetration testing services from Scotland's leading cybersecurity professionals. 
                We provide comprehensive security testing using industry-recognised methodologies to identify vulnerabilities and strengthen your security posture.
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="slide-up" delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-brandyellow hover:bg-brightyellow text-charcoal font-semibold">
                <Link href="/build-pentest">Get CREST Pentest Quote</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-charcoal text-charcoal hover:bg-charcoal hover:text-white">
                <Link href="#contact">Speak to CREST Expert</Link>
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* CREST Certification Info */}
      <section className="py-16 bg-white dark:bg-charcoal/50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation animation="slide-right">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-charcoal dark:text-white mb-6">
                  What is CREST Certification?
                </h2>
                <p className="text-lg text-charcoal/70 dark:text-white/70 mb-6">
                  CREST (Council of Registered Ethical Security Testers) is the internationally recognised accreditation body for cybersecurity professionals. 
                  CREST certification ensures that penetration testing services meet the highest industry standards for quality, methodology, and professionalism.
                </p>
                <p className="text-lg text-charcoal/70 dark:text-white/70 mb-8">
                  Our CREST CRT (Certified Registered Tester) qualified professionals follow rigorous testing methodologies to provide comprehensive security assessments 
                  that organisations can trust for critical business decisions.
                </p>

                <div className="space-y-4">
                  {crestBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-charcoal dark:text-white">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slide-left" delay={0.2}>
              <div className="bg-gradient-to-br from-brandyellow/10 to-brandyellow/5 rounded-lg p-8 border border-brandyellow/20">
                <Award className="w-16 h-16 text-brandyellow mb-6" />
                <h3 className="text-2xl font-bold text-charcoal dark:text-white mb-4">CREST Approved Testing</h3>
                <p className="text-charcoal/70 dark:text-white/70 mb-6">
                  Our penetration testing services are delivered by CREST certified professionals using approved methodologies and frameworks.
                </p>
                <ul className="space-y-2 text-charcoal/70 dark:text-white/70">
                  <li>• CREST CRT certified testers</li>
                  <li>• Industry-standard methodologies</li>
                  <li>• Comprehensive reporting</li>
                  <li>• Quality assurance processes</li>
                </ul>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Testing Types */}
      <section className="py-16 bg-gray-50 dark:bg-charcoal/30">
        <div className="container">
          <ScrollAnimation animation="fade">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal dark:text-white mb-4">
                CREST Certified Testing Services
              </h2>
              <p className="text-lg text-charcoal/70 dark:text-white/70 max-w-3xl mx-auto">
                Our CREST certified professionals provide comprehensive penetration testing across multiple domains using industry-recognised methodologies.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testingTypes.map((test, index) => (
              <ScrollAnimation key={index} animation="slide-up" delay={0.1 * index}>
                <div className="bg-white dark:bg-charcoal/80 rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow text-center">
                  <test.icon className="w-16 h-16 text-brandyellow mx-auto mb-6" />
                  <h3 className="text-xl font-semibold text-charcoal dark:text-white mb-4">{test.title}</h3>
                  <p className="text-charcoal/70 dark:text-white/70">{test.description}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-charcoal dark:bg-black">
        <div className="container">
          <ScrollAnimation animation="fade">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready for CREST Certified Penetration Testing?
              </h2>
              <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
                Contact our CREST certified experts to discuss your penetration testing requirements and receive a tailored proposal.
              </p>
              <Button asChild size="lg" className="bg-brandyellow hover:bg-brightyellow text-charcoal font-semibold">
                <Link href="/build-pentest">Start Your CREST Pentest</Link>
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </main>
  )
}