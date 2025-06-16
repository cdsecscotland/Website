import { notFound } from "next/navigation"
import CaseStudyDetail from "@/components/case-studies/case-study-detail"
import RelatedCaseStudies from "@/components/case-studies/related-case-studies"
import { getCaseStudy, getAllCaseStudySlugs } from "@/lib/case-studies-data"

interface CaseStudyPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const slugs = await getAllCaseStudySlugs()
  return slugs.map((slug) => ({
    slug: slug,
  }))
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const caseStudy = await getCaseStudy(params.slug)

  if (!caseStudy) {
    notFound()
  }

  return (
    <main className="min-h-screen pt-20">
      <CaseStudyDetail caseStudy={caseStudy} />
      <RelatedCaseStudies currentCaseStudyId={caseStudy.id} industry={caseStudy.industry} />
    </main>
  )
}
