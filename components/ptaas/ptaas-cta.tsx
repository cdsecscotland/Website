"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, Shield, Users, Clock } from "lucide-react"
import ScrollAnimation from "../scroll-animation"

export default function PTaaSCTA() {
  return (
    <section className="py-20 bg-charcoal dark:bg-black">
      <div className="container">
        <ScrollAnimation animation="fade">
          <div className="max-w-4xl mx-auto text-center">
            <Card className="bg-white/10 dark:bg-white/5 backdrop-blur-sm border border-white/20">
              <CardContent className="p-8 md:p-12">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Ready to Experience Real-Time Penetration Testing?
                </h2>
                <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                  Join our clients who are already benefiting from immediate vulnerability visibility and expert
                  remediation support through the Insights platform.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                  <Button
                    asChild
                    size="lg"
                    className="bg-brandyellow hover:bg-brightyellow text-charcoal font-semibold px-8 py-4 text-lg shadow-xl"
                  >
                    <Link href="#contact">
                      Request Platform Access
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-charcoal font-semibold px-8 py-4 text-lg"
                  >
                    <Link href="#contact">Schedule Consultation</Link>
                  </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-white/20">
                  <ScrollAnimation animation="slide-up" delay={0.2}>
                    <div className="text-center">
                      <Shield className="w-8 h-8 text-brandyellow mx-auto mb-3" />
                      <div className="text-white font-semibold">CREST Certified</div>
                      <div className="text-white/70 text-sm">Expert penetration testers</div>
                    </div>
                  </ScrollAnimation>

                  <ScrollAnimation animation="slide-up" delay={0.3}>
                    <div className="text-center">
                      <Clock className="w-8 h-8 text-brandyellow mx-auto mb-3" />
                      <div className="text-white font-semibold">Real-Time Updates</div>
                      <div className="text-white/70 text-sm">Immediate vulnerability alerts</div>
                    </div>
                  </ScrollAnimation>

                  <ScrollAnimation animation="slide-up" delay={0.4}>
                    <div className="text-center">
                      <Users className="w-8 h-8 text-brandyellow mx-auto mb-3" />
                      <div className="text-white font-semibold">90-Day Support</div>
                      <div className="text-white/70 text-sm">Extended remediation assistance</div>
                    </div>
                  </ScrollAnimation>
                </div>
              </CardContent>
            </Card>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
