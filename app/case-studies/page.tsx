import CaseStudiesHero from "@/components/case-studies/case-studies-hero"
import CaseStudiesGrid from "@/components/case-studies/case-studies-grid"
import CaseStudiesCTA from "@/components/case-studies/case-studies-cta"

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen pt-20">
      <CaseStudiesHero />
      <CaseStudiesGrid />
      <CaseStudiesCTA />
    </main>
  )
}
