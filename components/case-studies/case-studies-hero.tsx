"use client"

import { Building, Users, Award } from "lucide-react"
import ScrollAnimation from "../scroll-animation"

export default function CaseStudiesHero() {
  return (
    <section className="py-20 bg-gradient-to-br from-brandyellow/10 to-brightyellow/5 dark:bg-charcoal/95 backdrop-blur-sm relative">
      <div className="container">
        <ScrollAnimation animation="fade">
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-charcoal dark:text-white mb-6">
              Client Success Stories
            </h1>
            <p className="text-xl text-charcoal/80 dark:text-white/80 mb-8">
              Discover how we've helped organisations across various industries strengthen their cybersecurity posture
              and achieve compliance goals.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-charcoal/20 dark:border-white/20">
              <ScrollAnimation animation="slide-up" delay={0.2}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/80 dark:bg-charcoal/50 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                    <Building className="w-8 h-8 text-brandyellow" />
                  </div>
                  <div className="text-3xl font-bold text-charcoal dark:text-white">100+</div>
                  <div className="text-sm text-charcoal/70 dark:text-white/70 font-medium">Organizations Secured</div>
                </div>
              </ScrollAnimation>

              <ScrollAnimation animation="slide-up" delay={0.3}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/80 dark:bg-charcoal/50 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                    <Award className="w-8 h-8 text-brandyellow" />
                  </div>
                  <div className="text-3xl font-bold text-charcoal dark:text-white">98%</div>
                  <div className="text-sm text-charcoal/70 dark:text-white/70 font-medium">Client Satisfaction</div>
                </div>
              </ScrollAnimation>

              <ScrollAnimation animation="slide-up" delay={0.4}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/80 dark:bg-charcoal/50 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                    <Users className="w-8 h-8 text-brandyellow" />
                  </div>
                  <div className="text-3xl font-bold text-charcoal dark:text-white">15+</div>
                  <div className="text-sm text-charcoal/70 dark:text-white/70 font-medium">Industries Served</div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
