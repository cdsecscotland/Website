import Image from "next/image"
import ScrollAnimation from "@/components/scroll-animation"

const PtaasIntegration = () => {
 return (
 <div className="container mx-auto px-4">
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-20">
 <ScrollAnimation animation="slide-right" delay={0.6}>
 <div>
 <h3 className="text-3xl font-bold text-charcoal mb-6">Detailed Vulnerability Analysis</h3>
 <p className="text-lg text-charcoal/70 mb-6">
 Each vulnerability discovered is thoroughly documented with detailed technical information, evidence,
 recommendations, and remediation guidance to help your team understand and fix security issues
 effectively.
 </p>
 <ul className="space-y-3">
 <li className="flex items-start">
 <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mr-3 mt-1 shadow-md">
 <span className="text-white font-bold text-sm">✓</span>
 </div>
 <span className="text-charcoal/80 ">
 Comprehensive vulnerability descriptions and impact analysis
 </span>
 </li>
 <li className="flex items-start">
 <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mr-3 mt-1 shadow-md">
 <span className="text-white font-bold text-sm">✓</span>
 </div>
 <span className="text-charcoal/80 ">Step-by-step remediation guidance</span>
 </li>
 <li className="flex items-start">
 <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mr-3 mt-1 shadow-md">
 <span className="text-white font-bold text-sm">✓</span>
 </div>
 <span className="text-charcoal/80 ">Evidence and proof-of-concept documentation</span>
 </li>
 </ul>
 </div>
 </ScrollAnimation>

 <ScrollAnimation animation="slide-left" delay={0.8}>
 <div className="relative">
 <div className="bg-white p-4 rounded-2xl shadow-2xl">
 <Image
 src="/images/insights-vulnerability-detail.png"
 width={700}
 height={500}
 alt="Insights Platform - Detailed Vulnerability Report"
 className="rounded-xl"
 />
 </div>
 </div>
 </ScrollAnimation>
 </div>

 <div className="text-center mt-20">
 <ScrollAnimation animation="fade" delay={1.0}>
 <h3 className="text-3xl font-bold text-charcoal mb-6">Access Anywhere, Anytime</h3>
 <p className="text-lg text-charcoal/70 max-w-2xl mx-auto mb-12">
 The Insights platform is fully responsive and accessible on all devices, ensuring you can monitor your
 security posture whether you're in the office or on the go.
 </p>
 <div className="relative max-w-md mx-auto">
 <div className="bg-gradient-to-br from-slate-900 to-slate-700 p-8 rounded-3xl shadow-2xl">
 <Image
 src="/images/insights-findings-tablet.png"
 width={600}
 height={400}
 alt="Insights Platform - Mobile and Tablet Responsive Design"
 className="rounded-2xl"
 />
 </div>
 <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-br from-brandyellow to-orange-500 rounded-full opacity-20 blur-sm"></div>
 <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full opacity-30 blur-sm"></div>
 </div>
 </ScrollAnimation>
 </div>
 </div>
 )
}

export default PtaasIntegration
