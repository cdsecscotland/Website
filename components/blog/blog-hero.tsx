"use client"

import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import ScrollAnimation from "../scroll-animation"

interface BlogHeroProps {
  title?: string
  subtitle?: string
}

export default function BlogHero({
  title = "Cybersecurity Insights & Updates",
  subtitle = "Stay informed with the latest security trends, threat intelligence, and best practices from our expert team",
}: BlogHeroProps) {
  return (
    <section className="py-20 bg-gradient-to-br from-brandyellow/10 to-brightyellow/5 dark:bg-charcoal/95 backdrop-blur-sm relative">
      <div className="container">
        <ScrollAnimation animation="fade">
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-charcoal dark:text-white mb-6">{title}</h1>
            <p className="text-xl text-charcoal/80 dark:text-white/80 mb-8">{subtitle}</p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-charcoal/50 dark:text-white/50 w-5 h-5" />
                <Input
                  placeholder="Search articles, topics, or threats..."
                  className="pl-12 pr-4 py-4 text-lg bg-white/90 dark:bg-charcoal/80 border-2 border-transparent focus:border-brandyellow"
                />
                <Button
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-brandyellow hover:bg-brightyellow text-charcoal"
                  size="sm"
                >
                  Search
                </Button>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
