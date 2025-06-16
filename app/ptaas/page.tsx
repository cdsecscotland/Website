import PTaaSHero from "@/components/ptaas/ptaas-hero"
import PTaaSDashboard from "@/components/ptaas/ptaas-dashboard"
import PTaaSFeatures from "@/components/ptaas/ptaas-features"
import PTaaSIntegration from "@/components/ptaas/ptaas-integration"
import PTaaSSupport from "@/components/ptaas/ptaas-support"
import PTaaSCTA from "@/components/ptaas/ptaas-cta"

export default function PTaaSPage() {
  return (
    <main className="min-h-screen">
      <PTaaSHero />
      <PTaaSDashboard />
      <PTaaSFeatures />
      <PTaaSIntegration />
      <PTaaSSupport />
      <PTaaSCTA />
    </main>
  )
}
