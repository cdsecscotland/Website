import Hero from "@/components/hero"
import NewsCarousel from "@/components/news-carousel"
import Accreditations from "@/components/accreditations"
import InsightsPlatform from "@/components/insights-platform"
import Services from "@/components/services"
import About from "@/components/about"
import GlobalOffices from "@/components/global-offices"
import TrustIndicators from "@/components/trust-indicators"
import ContactSection from "@/components/contact-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <NewsCarousel />
      <Accreditations />
      <InsightsPlatform />
      <Services />
      <TrustIndicators />
      <About />
      <GlobalOffices />
      <ContactSection />
    </main>
  )
}
