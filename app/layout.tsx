import type React from "react"
import type { Metadata } from "next"
import { Inter, Noto_Sans_Arabic } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import HeadlessHeader from "@/components/headless-header"
import Footer from "@/components/footer"
import { AnimationProvider } from "@/hooks/use-animation-preferences"
import ParticleNetwork from "@/components/particle-network"
import MobilePerformanceOptimizer from "@/components/mobile-performance-optimizer"
import { ErrorBoundary } from "@/components/error-boundary"
import ErrorHandler from "@/components/error-handler"

const fontSans = Inter({
 subsets: ["latin"],
 variable: "--font-sans",
})

const fontArabic = Noto_Sans_Arabic({
 subsets: ["arabic"],
 variable: "--font-arabic",
})

export const metadata: Metadata = {
 title: "Closed Door Security | Penetration Testing & Cybersecurity Experts",
 description:
 "Leading cybersecurity consultancy providing penetration testing, security assessments, and compliance services. Founded 2019 in Scotland with global reach. CREST certified experts.",
 keywords: "penetration testing, cybersecurity, security assessment, compliance auditing, vulnerability management, red teaming, CREST certified, cybersecurity consultancy, cyber security experts, security testing",
 authors: [{ name: "Closed Door Security" }],
 creator: "Closed Door Security",
 publisher: "Closed Door Security",
 robots: "index, follow",
 openGraph: {
 type: "website",
 locale: "en_GB",
 url: "https://www.cdsec.co.uk",
 siteName: "Closed Door Security",
 title: "Closed Door Security | Penetration Testing & Cybersecurity Experts",
 description: "Leading cybersecurity consultancy providing penetration testing, security assessments, and compliance services. Founded 2019 in Scotland with global reach.",
 },
 twitter: {
 card: "summary_large_image",
 site: "@closeddoorsec",
 title: "Closed Door Security | Penetration Testing & Cybersecurity Experts",
 description: "Leading cybersecurity consultancy providing penetration testing, security assessments, and compliance services.",
 },
 verification: {
 google: "google-site-verification=your-verification-code",
 },
 alternates: {
 canonical: "https://www.cdsec.co.uk",
 },
}

export default function RootLayout({
 children,
}: Readonly<{
 children: React.ReactNode
}>) {
 return (
 <html lang="en" suppressHydrationWarning>
 <head>
 <script async src="https://www.googletagmanager.com/gtag/js?id=G-2Y57B5BNBN"></script>
 <script
 dangerouslySetInnerHTML={{
 __html: `
 try {
 window.dataLayer = window.dataLayer || [];
 function gtag(){dataLayer.push(arguments);}
 gtag('js', new Date());
 gtag('config', 'G-2Y57B5BNBN');
 } catch (error) {
 console.warn('Google Analytics failed to initialize:', error);
 }
 `,
 }}
 />
 </head>
 <body
 className={cn(
 "min-h-screen bg-white font-sans antialiased",
 fontSans.variable,
 fontArabic.variable,
 )}
 >
 <ErrorBoundary>
 <AnimationProvider>
 <ErrorHandler />
 <MobilePerformanceOptimizer />
 <div className="relative flex min-h-screen flex-col">
 <ErrorBoundary fallback={<div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0" />}>
 <ParticleNetwork />
 </ErrorBoundary>
 <HeadlessHeader />
 <div className="flex-1 relative z-10 pt-16 md:pt-16">{children}</div>
 <Footer />
 </div>
 </AnimationProvider>
 </ErrorBoundary>
 </body>
 </html>
 )
}
