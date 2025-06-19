import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Award, Globe, FileText, ExternalLink } from "lucide-react"
import ScrollAnimation from "@/components/scroll-animation"

const teamMembers = [
  {
    name: "William Wright",
    role: "Chief Executive Officer",
    bio: "Over 15 years of experience in cybersecurity with expertise in penetration testing, threat intelligence, and enterprise security architecture.",
    image: "/images/team-member-1.jpg",
    certifications: []
  },
  {
    name: "Cassius Edison",
    role: "Chief Operating Officer",
    bio: "Internationally recognised cyber expert specialising in advanced persistent threats and security operations.",
    image: "/images/team-member-2.jpg",
    certifications: []
  },
  {
    name: "Conor Agnew",
    role: "Head of Compliance",
    bio: "Expert in regulatory compliance, risk management frameworks, and enterprise security governance.",
    image: "/images/team-member-3.jpg",
    certifications: []
  }
]

const caseStudies = [
  {
    title: "Financial Services Penetration Test",
    client: "Major UK Banking Institution",
    challenge: "Complete security assessment of online banking platform and mobile applications",
    solution: "Comprehensive testing methodology covering web applications, APIs, and mobile security",
    results: "Identified and helped remediate 23 critical vulnerabilities, improved security posture by 85%",
    industry: "Financial Services",
    testType: "Web Application & Mobile Security"
  },
  {
    title: "Healthcare Data Protection Assessment",
    client: "NHS Trust",
    challenge: "GDPR compliance assessment and patient data protection evaluation",
    solution: "Multi-phase security review including network infrastructure and data handling processes",
    results: "Achieved full GDPR compliance, implemented robust data protection controls",
    industry: "Healthcare",
    testType: "Infrastructure & Compliance"
  },
  {
    title: "Manufacturing Operational Technology Security",
    client: "Industrial Manufacturing Company",
    challenge: "Securing operational technology networks and industrial control systems",
    solution: "Specialised OT/ICS penetration testing with minimal disruption to operations",
    results: "Enhanced industrial security controls, prevented potential operational disruptions",
    industry: "Manufacturing",
    testType: "OT/ICS Security"
  }
]

const stats = [
  { value: "550+", label: "Security Assessments", icon: FileText },
  { value: "160+", label: "Clients Protected", icon: Users },
  { value: "15+", label: "Years Experience", icon: Award },
  { value: "3", label: "Global Offices", icon: Globe }
]

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-to-br from-cream via-white to-paleyellow/30 dark:from-charcoal dark:via-charcoal/95 dark:to-charcoal">
        <div className="container">
          <ScrollAnimation animation="fade">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-charcoal dark:text-white mb-6">
                About Closed Door Security
              </h1>
              <p className="text-xl text-charcoal/70 dark:text-white/70 max-w-3xl mx-auto">
                Founded in Scotland, we're a leading cybersecurity consultancy providing penetration testing and security assessments to organisations worldwide.
              </p>
            </div>
          </ScrollAnimation>

          {/* Stats Grid */}
          <ScrollAnimation animation="slide-up" delay={0.2}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-brandyellow/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-brandyellow" />
                  </div>
                  <div className="text-3xl font-bold text-charcoal dark:text-white mb-2">{stat.value}</div>
                  <div className="text-sm text-charcoal/70 dark:text-white/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white dark:bg-charcoal/50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation animation="slide-right">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-charcoal dark:text-white mb-6">
                  Our Story
                </h2>
                <p className="text-lg text-charcoal/70 dark:text-white/70 mb-6">
                  Established in Edinburgh, Scotland, Closed Door Security was founded with a simple mission: to provide world-class cybersecurity services that genuinely protect businesses from evolving digital threats.
                </p>
                <p className="text-lg text-charcoal/70 dark:text-white/70 mb-6">
                  Our team of certified security professionals brings decades of combined experience from government, financial services, and enterprise sectors. We've grown from a small Scottish consultancy to an internationally recognised security firm with offices across three continents.
                </p>
                <p className="text-lg text-charcoal/70 dark:text-white/70">
                  Today, we protect some of the world's most critical infrastructure and sensitive data, from NHS trusts to multinational corporations.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slide-left" delay={0.2}>
              <div className="relative">
                <Image
                  src="/images/office-uk.jpg"
                  width={600}
                  height={400}
                  alt="Closed Door Security Edinburgh Office"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50 dark:bg-charcoal/30">
        <div className="container">
          <ScrollAnimation animation="fade">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal dark:text-white mb-4">
                Meet Our Team
              </h2>
              <p className="text-lg text-charcoal/70 dark:text-white/70 max-w-2xl mx-auto">
                Our team of certified security professionals brings together expertise from across the cybersecurity industry.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <ScrollAnimation key={index} animation="slide-up" delay={0.1 * index}>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-64">
                    <Image
                      src={member.image}
                      fill
                      alt={member.name}
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-charcoal dark:text-white mb-2">
                      {member.name}
                    </h3>
                    <p className="text-brandyellow font-medium mb-3">{member.role}</p>
                    <p className="text-sm text-charcoal/70 dark:text-white/70 mb-4">
                      {member.bio}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {member.certifications.map((cert, certIndex) => (
                        <Badge key={certIndex} variant="secondary" className="text-xs">
                          {cert}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 bg-white dark:bg-charcoal/50">
        <div className="container">
          <ScrollAnimation animation="fade">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal dark:text-white mb-4">
                Case Studies
              </h2>
              <p className="text-lg text-charcoal/70 dark:text-white/70 max-w-2xl mx-auto">
                Real-world examples of how we've helped organisations strengthen their security posture and protect critical assets.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <ScrollAnimation key={index} animation="slide-up" delay={0.1 * index}>
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <Badge variant="outline" className="mb-2">
                        {study.industry}
                      </Badge>
                      <Badge variant="secondary" className="mb-2">
                        {study.testType}
                      </Badge>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-charcoal dark:text-white mb-3">
                      {study.title}
                    </h3>
                    
                    <div className="space-y-4 text-sm">
                      <div>
                        <h4 className="font-medium text-charcoal dark:text-white mb-1">Client:</h4>
                        <p className="text-charcoal/70 dark:text-white/70">{study.client}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-charcoal dark:text-white mb-1">Challenge:</h4>
                        <p className="text-charcoal/70 dark:text-white/70">{study.challenge}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-charcoal dark:text-white mb-1">Solution:</h4>
                        <p className="text-charcoal/70 dark:text-white/70">{study.solution}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-charcoal dark:text-white mb-1">Results:</h4>
                        <p className="text-charcoal/70 dark:text-white/70">{study.results}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>

          <ScrollAnimation animation="fade" delay={0.4}>
            <div className="text-center mt-12">
              <p className="text-lg text-charcoal/70 dark:text-white/70 mb-6">
                Want to learn more about our work? We'd be happy to discuss how we can help protect your organisation.
              </p>
              <Button asChild size="lg" className="bg-brandyellow hover:bg-brightyellow text-charcoal font-semibold">
                <a href="/contact">
                  Get In Touch
                  <ExternalLink className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </main>
  )
}