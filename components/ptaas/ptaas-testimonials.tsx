"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react"
import ScrollAnimation from "../scroll-animation"

const testimonials = [
  {
    quote:
      "The PTaaS platform has revolutionized how we approach security testing. Real-time visibility and expert guidance have helped us identify and fix vulnerabilities faster than ever before.",
    author: "Sarah Chen",
    position: "CISO, TechFlow Solutions",
    company: "TechFlow Solutions",
    rating: 5,
    results: "50% faster vulnerability remediation",
  },
  {
    quote:
      "Having continuous penetration testing through their platform gives us confidence that our security posture is always up to date. The expert team is incredibly responsive and knowledgeable.",
    author: "Marcus Rodriguez",
    position: "Head of Security, DataVault Inc",
    company: "DataVault Inc",
    rating: 5,
    results: "Achieved SOC 2 compliance in 3 months",
  },
  {
    quote:
      "The platform's integration capabilities and real-time reporting have made security testing a seamless part of our DevOps pipeline. It's exactly what we needed for our cloud-first approach.",
    author: "Emily Watson",
    position: "DevSecOps Lead, CloudNative Corp",
    company: "CloudNative Corp",
    rating: 5,
    results: "Integrated security into CI/CD pipeline",
  },
]

export default function PTaaSTestimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 8000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 bg-lightyellow/20 dark:bg-charcoal/95 backdrop-blur-sm">
      <div className="container">
        <ScrollAnimation animation="fade">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal dark:text-white mb-4">
              Trusted by Security Leaders
            </h2>
            <p className="text-xl text-charcoal/80 dark:text-white/80 max-w-3xl mx-auto">
              See how organizations are transforming their security posture with our PTaaS platform.
            </p>
          </div>
        </ScrollAnimation>

        <div className="max-w-4xl mx-auto relative">
          <ScrollAnimation animation="fade" delay={0.2}>
            <Card className="bg-white dark:bg-charcoal/90 border-none shadow-2xl">
              <CardContent className="p-8 md:p-12">
                <div className="flex justify-center mb-6">
                  <Quote className="w-12 h-12 text-brandyellow/30" />
                </div>

                <div className="text-center mb-8">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-brandyellow fill-current" />
                    ))}
                  </div>

                  <p className="text-xl md:text-2xl text-charcoal/90 dark:text-white/90 italic mb-6 leading-relaxed">
                    "{testimonials[currentTestimonial].quote}"
                  </p>

                  <div className="border-t border-charcoal/10 dark:border-white/10 pt-6">
                    <div className="flex flex-col md:flex-row items-center justify-between">
                      <div className="text-center md:text-left mb-4 md:mb-0">
                        <p className="font-bold text-charcoal dark:text-white text-lg">
                          {testimonials[currentTestimonial].author}
                        </p>
                        <p className="text-charcoal/70 dark:text-white/70">
                          {testimonials[currentTestimonial].position}
                        </p>
                        <p className="text-charcoal/60 dark:text-white/60 text-sm">
                          {testimonials[currentTestimonial].company}
                        </p>
                      </div>

                      <div className="bg-brandyellow/10 px-4 py-2 rounded-full">
                        <p className="text-sm font-semibold text-charcoal dark:text-white">
                          {testimonials[currentTestimonial].results}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentTestimonial ? "bg-brandyellow" : "bg-charcoal/20 dark:bg-white/20"
                      }`}
                      onClick={() => setCurrentTestimonial(index)}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          </ScrollAnimation>

          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white dark:bg-charcoal/80 border-none shadow-lg hover:bg-brandyellow/20"
            onClick={prevTestimonial}
          >
            <ChevronLeft className="h-6 w-6" />
            <span className="sr-only">Previous testimonial</span>
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white dark:bg-charcoal/80 border-none shadow-lg hover:bg-brandyellow/20"
            onClick={nextTestimonial}
          >
            <ChevronRight className="h-6 w-6" />
            <span className="sr-only">Next testimonial</span>
          </Button>
        </div>
      </div>
    </section>
  )
}
