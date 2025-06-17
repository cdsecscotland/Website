"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"
import ScrollAnimation from "./scroll-animation"

const newsOutlets = [
  {
    name: "AOL",
    logo: "/images/logos/aol.png",
    url: "https://www.investing.com/news/stock-market-news/boeing-confirms-cyberattack-lockbit-claims-responsibility-93CH-3218071",
    description: "AOL features our cybersecurity leadership",
  },
  {
    name: "Cyber News",
    logo: "/images/logos/cybernews.png",
    url: "https://cybernews.com/security/leicester-england-cyberattack-british-gov-ransomware-report/",
    description: "Cyber News highlights our threat intelligence",
  },
  {
    name: "Independent",
    logo: "/images/logos/independent.png",
    url: "https://www.independent.co.uk/travel/news-and-advice/tfl-cyber-attack-trains-staff-b2606121.html",
    description: "The Independent reports on our security research",
  },
  {
    name: "Infosecurity Magazine",
    logo: "/images/logos/infosecurity-magazine.png",
    url: "https://www.infosecurity-magazine.com/news/ukraine-russian-sandworm-kyivstar/",
    description: "Infosecurity Magazine features our expertise",
  },
  {
    name: "BBC News",
    logo: "/images/logos/bbc-news.png",
    url: "https://www.bbc.com/news/articles/cdxnkg7rln2o",
    description: "Featured in BBC News for cybersecurity expertise",
  },
  {
    name: "Forbes",
    logo: "/images/logos/forbes.png",
    url: "https://www.forbes.com/sites/emmawoollacott/2023/12/08/worldwide-sting-busts-cyber-scam-centers-manned-by-human-trafficking-victims/?sh=1054e6c14394",
    description: "Recognized by Forbes for innovative security solutions",
  },
  {
    name: "Independent",
    logo: "/images/logos/independent.png",
    url: "https://www.independent.co.uk/travel/news-and-advice/tfl-cyber-attack-trains-staff-b2606121.html",
    description: "The Independent reports on our security research",
  },
  {
    name: "Infosecurity Magazine",
    logo: "/images/logos/infosecurity-magazine.png",
    url: "https://www.infosecurity-magazine.com/news/ukraine-russian-sandworm-kyivstar/",
    description: "Infosecurity Magazine features our expertise",
  },
  {
    name: "The Scotsman",
    logo: "/images/logos/the-scotsman.png",
    url: "https://www.scotsman.com/business/if-i-can-hack-you-then-black-hats-can-do-it-too-william-wright-4573115",
    description: "The Scotsman covers our Scottish operations",
  },
  {
    name: "SOS/SIG",
    logo: "/images/logos/sos-sig.png",
    url: "https://securityonscreen.com/tfl-cyber-attack-closed-door-security/",
    description: "SOS/SIG highlights our industry contributions",
  },
]

export default function NewsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(4)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1)
      } else if (window.innerWidth < 768) {
        setItemsPerView(2)
      } else if (window.innerWidth < 1024) {
        setItemsPerView(3)
      } else {
        setItemsPerView(4)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % Math.ceil(newsOutlets.length / itemsPerView))
    }, 5000)
    return () => clearInterval(interval)
  }, [itemsPerView])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.ceil(newsOutlets.length / itemsPerView))
  }

  const prevSlide = () => {
    setCurrentIndex(
      (prev) =>
        (prev - 1 + Math.ceil(newsOutlets.length / itemsPerView)) % Math.ceil(newsOutlets.length / itemsPerView),
    )
  }

  return (
    <section className="py-12 bg-gradient-to-br from-cream/50 to-white dark:from-charcoal/95 dark:to-charcoal relative">
      <div className="container">
        <ScrollAnimation animation="fade">
          <div className="text-center mb-10">
            <h2 className="text-responsive-4xl md:text-responsive-5xl font-bold text-charcoal dark:text-white mb-4">
              Featured In Leading Publications
            </h2>
            <p className="text-responsive-xl text-charcoal/80 dark:text-white/80 max-w-3xl mx-auto">
              Our cybersecurity expertise and thought leadership have been recognized by major news outlets and industry
              publications worldwide
            </p>
          </div>
        </ScrollAnimation>

        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {Array.from({ length: Math.ceil(newsOutlets.length / itemsPerView) }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6`}>
                    {newsOutlets
                      .slice(slideIndex * itemsPerView, (slideIndex + 1) * itemsPerView)
                      .map((outlet, index) => (
                        <ScrollAnimation key={outlet.name} animation="slide-up" delay={index * 0.1}>
                          <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white/90 dark:bg-charcoal/90 backdrop-blur-sm border-0 shadow-lg">
                            <CardContent className="p-6 text-center">
                              <div className="h-16 flex items-center justify-center mb-4">
                                <img
                                  src={outlet.logo || "/placeholder.svg"}
                                  alt={`${outlet.name} logo`}
                                  className="max-h-full max-w-full object-contain"
                                />
                              </div>
                              <h3 className="font-semibold text-charcoal dark:text-white mb-2 group-hover:text-brandyellow transition-colors">
                                {outlet.name}
                              </h3>
                              <p className="text-sm text-charcoal/70 dark:text-white/70 mb-4">{outlet.description}</p>
                              <Button
                                variant="outline"
                                size="sm"
                                className="group-hover:bg-brandyellow group-hover:text-charcoal group-hover:border-brandyellow transition-all duration-300"
                                onClick={() => window.open(outlet.url, "_blank")}
                              >
                                Read Article
                                <ExternalLink className="ml-2 h-3 w-3" />
                              </Button>
                            </CardContent>
                          </Card>
                        </ScrollAnimation>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white/90 dark:bg-charcoal/90 backdrop-blur-sm border-none shadow-lg hover:bg-brandyellow/20 z-10"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-6 w-6" />
            <span className="sr-only">Previous news items</span>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white/90 dark:bg-charcoal/90 backdrop-blur-sm border-none shadow-lg hover:bg-brandyellow/20 z-10"
            onClick={nextSlide}
          >
            <ChevronRight className="h-6 w-6" />
            <span className="sr-only">Next news items</span>
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: Math.ceil(newsOutlets.length / itemsPerView) }).map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-brandyellow w-8" : "bg-charcoal/20 dark:bg-white/20"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
