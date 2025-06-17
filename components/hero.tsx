"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import ScrollAnimation from "./scroll-animation"

export default function Hero() {
  const { t } = useLanguage()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section className="relative min-h-[60vh] flex items-center justify-center pt-8 md:pt-12 pb-8 overflow-hidden bg-gradient-to-br from-cream via-white to-paleyellow/30 dark:from-charcoal dark:via-charcoal/95 dark:to-charcoal">
      {/* Background Elements */}
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollAnimation animation="slide-right">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal dark:text-white mb-6 leading-tight">
                <span className="block break-words">Security Locked In,</span>
                <span className="block break-words text-transparent bg-gradient-to-r from-brandyellow via-brightyellow to-brandyellow bg-clip-text">
                  Threats Locked Out
                </span>
              </h1>

              <p className="text-lg md:text-xl lg:text-2xl text-charcoal/80 dark:text-white/80 mb-8 leading-relaxed max-w-2xl mx-auto">
                {t("hero.subtitle")}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 w-full">
                <Button
                  asChild
                  size="lg"
                  className="bg-charcoal dark:bg-brandyellow hover:bg-charcoal/90 dark:hover:bg-brightyellow text-white dark:text-charcoal font-semibold px-4 sm:px-8 py-4 text-base sm:text-lg group shadow-xl hover:shadow-2xl transition-all duration-300 w-full sm:w-auto"
                >
                  <Link href="/build-pentest">
                    {t("hero.cta1")}
                    <ArrowRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-charcoal dark:border-white text-charcoal dark:text-white hover:bg-charcoal hover:text-white dark:hover:bg-white dark:hover:text-charcoal font-semibold px-4 sm:px-8 py-4 text-base sm:text-lg group shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
                >
                  <Link href="#services">
                    {t("hero.cta2")}
                    <Play className="ml-2 h-5 w-5 sm:h-6 sm:w-6 group-hover:scale-110 transition-transform" />
                  </Link>
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 sm:gap-8 text-center">
                <div>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-charcoal dark:text-white mb-1 sm:mb-2">550+</div>
                  <div className="text-xs sm:text-sm text-charcoal/70 dark:text-white/70">Projects Delivered</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-charcoal dark:text-white mb-1 sm:mb-2">160+</div>
                  <div className="text-xs sm:text-sm text-charcoal/70 dark:text-white/70">Customers</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-charcoal dark:text-white mb-1 sm:mb-2">380+</div>
                  <div className="text-xs sm:text-sm text-charcoal/70 dark:text-white/70">Featured Publications</div>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="slide-left" delay={0.2}>
            <div className="relative">
              <div className="bg-white/90 dark:bg-charcoal/90 backdrop-blur-sm p-8 rounded-3xl shadow-2xl">
                <Image
                  src="/images/insights-tablet-demo.png"
                  width={800}
                  height={600}
                  alt="Closed Door Security Insights Platform"
                  className="rounded-2xl shadow-lg"
                />
              </div>
              {/* Floating Elements */}
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}
