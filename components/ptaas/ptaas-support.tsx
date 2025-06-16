"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, MessageCircle, Clock, Shield } from "lucide-react"
import ScrollAnimation from "../scroll-animation"

export default function PTaaSSupport() {
  return (
    <section className="py-20 bg-lightyellow/20 dark:bg-charcoal/95 backdrop-blur-sm">
      <div className="container">
        <ScrollAnimation animation="fade">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal dark:text-white mb-4">Remediation</h2>
            <p className="text-xl text-charcoal/80 dark:text-white/80 max-w-4xl mx-auto">
              Our comprehensive support mechanisms cover any discovered vulnerabilities to ensure maximum support in
              resolving them. Direct access to a technical resource is provided for the entirety of the scope of works
              and up to 90 days after report delivery.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <ScrollAnimation animation="slide-right" delay={0.2}>
            <div>
              <h3 className="text-3xl font-bold text-charcoal dark:text-white mb-6">Expert Technical Support</h3>
              <p className="text-lg text-charcoal/70 dark:text-white/70 mb-8">
                The technical resource will provide you with additional support beyond the report, allowing you to
                design and implement suitable solutions that are customised to your business.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-brandyellow/20 rounded-lg flex items-center justify-center mr-4">
                    <Users className="w-6 h-6 text-charcoal dark:text-brandyellow" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal dark:text-white mb-2">Dedicated Technical Resource</h4>
                    <p className="text-charcoal/70 dark:text-white/70">
                      Direct access to the penetration tester who discovered the vulnerabilities for detailed guidance
                      and clarification.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-brandyellow/20 rounded-lg flex items-center justify-center mr-4">
                    <Clock className="w-6 h-6 text-charcoal dark:text-brandyellow" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal dark:text-white mb-2">Extended Support Period</h4>
                    <p className="text-charcoal/70 dark:text-white/70">
                      Support continues for up to 90 days after report delivery to ensure successful remediation.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-brandyellow/20 rounded-lg flex items-center justify-center mr-4">
                    <MessageCircle className="w-6 h-6 text-charcoal dark:text-brandyellow" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal dark:text-white mb-2">Customised Solutions</h4>
                    <p className="text-charcoal/70 dark:text-white/70">
                      Tailored remediation advice that fits your specific business context and technical environment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="slide-left" delay={0.4}>
            <div className="grid grid-cols-1 gap-6">
              <Card className="bg-white dark:bg-charcoal/80 border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-charcoal dark:text-white flex items-center">
                    <Shield className="w-6 h-6 text-brandyellow mr-3" />
                    Comprehensive Coverage
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-charcoal/70 dark:text-white/70">
                    Support covers all discovered vulnerabilities with detailed remediation guidance and implementation
                    assistance.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white dark:bg-charcoal/80 border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-charcoal dark:text-white flex items-center">
                    <Users className="w-6 h-6 text-brandyellow mr-3" />
                    Direct Expert Access
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-charcoal/70 dark:text-white/70">
                    Communicate directly with CREST certified professionals who understand your specific security
                    challenges.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white dark:bg-charcoal/80 border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-charcoal dark:text-white flex items-center">
                    <Clock className="w-6 h-6 text-brandyellow mr-3" />
                    Extended Timeline
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-charcoal/70 dark:text-white/70">
                    90-day support window ensures you have adequate time to implement fixes and verify remediation.
                  </p>
                </CardContent>
              </Card>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}
