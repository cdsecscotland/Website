"use client"

import { MapPin, Globe } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/lib/language-context"
import ScrollAnimation from "./scroll-animation"
import Image from "next/image"

const offices = [
  {
    country: "offices.uk",
    location: "offices.uk.location",
    flag: "🇬🇧",
    timezone: "GMT",
    image: "/images/office-uk.png",
  },
  {
    country: "offices.usa",
    location: "offices.usa.location",
    flag: "🇺🇸",
    timezone: "CST",
    image: "/images/office-usa.png",
  },
  {
    country: "offices.uae",
    location: "offices.uae.location",
    flag: "🇦🇪",
    timezone: "GST",
    image: "/images/office-uae.jpg",
  },
]

export default function GlobalOffices() {
  const { t } = useLanguage()

  return (
    <section className="py-16 bg-charcoal dark:bg-black relative">
      <div className="container relative z-10">
        <ScrollAnimation animation="fade">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Globe className="w-8 h-8 text-brandyellow mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold text-white">{t("offices.title")}</h2>
            </div>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Serving clients worldwide with local expertise and global reach
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offices.map((office, index) => (
            <ScrollAnimation key={index} animation="slide-up" delay={0.2 * index}>
              <Card className="bg-white dark:bg-charcoal/80 border-none shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                <div className="relative h-48 w-full">
                  <Image
                    src={office.image || "/placeholder.svg"}
                    alt={`${t(office.country)} Office`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute top-4 right-4 text-4xl">{office.flag}</div>
                </div>
                <CardHeader className="text-center pb-2">
                  <CardTitle className="text-xl text-charcoal dark:text-white">{t(office.country)}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <MapPin className="w-4 h-4 text-brandyellow mr-2" />
                    <p className="text-charcoal/70 dark:text-white/70">{t(office.location)}</p>
                  </div>
                  <p className="text-sm text-charcoal/50 dark:text-white/50 bg-brandyellow/10 px-3 py-1 rounded-full inline-block">
                    {office.timezone}
                  </p>
                </CardContent>
              </Card>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}
