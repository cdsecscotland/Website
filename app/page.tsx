import HeadlessHero from "@/components/headless-hero"
import NewsCarousel from "@/components/news-carousel"
import Accreditations from "@/components/accreditations"
import InsightsPlatform from "@/components/insights-platform"
import HeadlessServices from "@/components/headless-services"
import About from "@/components/about"
import GlobalOffices from "@/components/global-offices"
import TrustIndicators from "@/components/trust-indicators"
import HeadlessContact from "@/components/headless-contact"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeadlessHero />
      <NewsCarousel />
      <Accreditations />
      <InsightsPlatform />
      <HeadlessServices />
      <TrustIndicators />
      <About />
      <GlobalOffices />
      <HeadlessContact />
    </main>
  )
}
