import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Penetration Testing Services | CREST Certified | Closed Door Security",
  description: "Professional penetration testing services by CREST certified experts. Comprehensive security assessments for web applications, networks, and infrastructure.",
}

export default function PenetrationTestingPage() {
  return (
    <main className="min-h-screen">
      <section className="py-20 bg-charcoal">
        <div className="container">
          <h1 className="text-4xl font-bold text-white mb-6">
            Threat Led Penetration Testing
          </h1>
          <p className="text-xl text-white/80 mb-8">
            Transform your security posture with intelligence-driven penetration testing that mirrors real-world attacks.
          </p>
        </div>
      </section>
    </main>
  )
}