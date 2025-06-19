import type React from "react"
import type { Metadata } from "next"
import { Inter, Noto_Sans_Arabic } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import HeadlessHeader from "@/components/headless-header"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { AnimationProvider } from "@/hooks/use-animation-preferences"
import ParticleNetwork from "@/components/particle-network"
import MobilePerformanceOptimizer from "@/components/mobile-performance-optimizer"

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontArabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  variable: "--font-arabic",
})

export const metadata: Metadata = {
  title: "Closed Door Security | Cyber Security Experts You Can Trust",
  description:
    "Scotland's only Chartered Penetration Tester providing comprehensive security testing and compliance services",
  generator: "v0.dev",
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
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-2Y57B5BNBN');
            `,
          }}
        />
      </head>
      <body
        className={cn(
          "min-h-screen bg-white dark:bg-charcoal font-sans antialiased",
          fontSans.variable,
          fontArabic.variable,
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <AnimationProvider>
            <MobilePerformanceOptimizer />
            <div className="relative flex min-h-screen flex-col">
              <ParticleNetwork />
              <HeadlessHeader />
              <div className="flex-1 relative z-10 pt-20 md:pt-20">{children}</div>
              <Footer />
            </div>
          </AnimationProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
