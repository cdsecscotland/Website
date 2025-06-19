"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, MessageCircle, FileText } from "lucide-react"
import ScrollAnimation from "../scroll-animation"

export default function CaseStudiesCTA() {
  return (
    <section className="py-20 bg-charcoal dark:bg-black">
      <div className="container">
        <ScrollAnimation animation="fade">
          <div className="max-w-4xl mx-auto text-center">
            <Card className="bg-white/10 dark:bg-white/5 backdrop-blur-sm border border-white/20">
              <CardContent className="p-8 md:p-12">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Ready to Become Our Next Success Story?
                </h2>
                <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                  Join the organisations that have strengthened their cybersecurity posture with our expert guidance.
                  Let's discuss how we can help you achieve your security goals.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                  <Button
                    asChild
                    size="lg"
                    className="bg-brandyellow hover:bg-brightyellow text-charcoal font-semibold px-8 py-4 text-lg shadow-xl"
                  >
                    <Link href="/contact">
                      Start Your Project
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-charcoal font-semibold px-8 py-4 text-lg"
                  >
                    <Link href="/build-pentest">Build a Pentest</Link>
                  </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-white/20">
                  <ScrollAnimation animation="slide-up" delay={0.2}>
                    <div className="text-center">
                      <MessageCircle className="w-8 h-8 text-brandyellow mx-auto mb-3" />
                      <div className="text-white font-semibold">Free Consultation</div>
                      <div className="text-white/70 text-sm">Discuss your security needs</div>
                    </div>
                  </ScrollAnimation>

                  <ScrollAnimation animation="slide-up" delay={0.3}>
                    <div className="text-center">
                      <FileText className="w-8 h-8 text-brandyellow mx-auto mb-3" />
                      <div className="text-white font-semibold">Custom Proposal</div>
                      <div className="text-white/70 text-sm">Tailored to your requirements</div>
                    </div>
                  </ScrollAnimation>

                  <ScrollAnimation animation="slide-up" delay={0.4}>
                    <div className="text-center">
                      <ArrowRight className="w-8 h-8 text-brandyellow mx-auto mb-3" />
                      <div className="text-white font-semibold">Proven Results</div>
                      <div className="text-white/70 text-sm">Track record of success</div>
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
