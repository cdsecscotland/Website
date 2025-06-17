"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/lib/language-context"
import LanguageSwitcher from "./language-switcher"
import { ThemeToggle } from "./theme-toggle"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500",
        isScrolled ? "bg-white/90 dark:bg-charcoal/90 backdrop-blur-md shadow-lg py-2" : "bg-transparent py-4",
      )}
      style={{ overflow: 'visible' }}
    >
      <div className="container flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <div className="relative h-12 w-48">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo-rebrand-pto4kn1IFh8Nq1WA7oBBqHqI4YoLxJ.png"
              alt="Closed Door Security Logo"
              fill
              className="object-contain dark:brightness-150 dark:contrast-150"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className="group inline-flex h-12 w-max items-center justify-center rounded-md bg-background px-6 py-3 text-base font-medium transition-colors hover:bg-brandyellow/10 hover:text-charcoal focus:bg-brandyellow/10 focus:text-charcoal focus:outline-none">
                  {t("nav.home")}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="hover:bg-brandyellow/10 hover:text-charcoal h-12 px-6 py-3 text-base">
                {t("nav.services")}
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <div className="row-span-3">
                    <NavigationMenuLink asChild>
                      <Link
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-brandyellow/20 to-brandyellow/40 p-6 no-underline outline-none focus:shadow-md"
                        href="/ptaas"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium text-charcoal">PTaaS Platform</div>
                        <p className="text-sm leading-tight text-charcoal/80">
                          Penetration Testing as a Service - Continuous security testing in the cloud
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </div>
                  <div className="grid gap-2">
                    <NavigationMenuLink asChild>
                      <Link
                        href="#services"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-brandyellow/10 hover:text-charcoal"
                      >
                        <div className="text-sm font-medium leading-none">Penetration Testing</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          CREST certified penetration testing services
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        href="#services"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-brandyellow/10 hover:text-charcoal"
                      >
                        <div className="text-sm font-medium leading-none">Compliance & Auditing</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          ISO 27001, SOC 2, and regulatory compliance
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/build-pentest"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-brandyellow/10 hover:text-charcoal"
                      >
                        <div className="text-sm font-medium leading-none">Build a Pentest</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Custom penetration test builder
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/ptaas" legacyBehavior passHref>
                <NavigationMenuLink className="group inline-flex h-12 w-max items-center justify-center rounded-md bg-background px-6 py-3 text-base font-medium transition-colors hover:bg-brandyellow/10 hover:text-charcoal focus:bg-brandyellow/10 focus:text-charcoal focus:outline-none">
                  PTaaS
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/blog" legacyBehavior passHref>
                <NavigationMenuLink className="group inline-flex h-12 w-max items-center justify-center rounded-md bg-background px-6 py-3 text-base font-medium transition-colors hover:bg-brandyellow/10 hover:text-charcoal focus:bg-brandyellow/10 focus:text-charcoal focus:outline-none">
                  Blog
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="#about" legacyBehavior passHref>
                <NavigationMenuLink className="group inline-flex h-12 w-max items-center justify-center rounded-md bg-background px-6 py-3 text-base font-medium transition-colors hover:bg-brandyellow/10 hover:text-charcoal focus:bg-brandyellow/10 focus:text-charcoal focus:outline-none">
                  {t("nav.about")}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="#contact" legacyBehavior passHref>
                <NavigationMenuLink className="group inline-flex h-12 w-max items-center justify-center rounded-md bg-background px-6 py-3 text-base font-medium transition-colors hover:bg-brandyellow/10 hover:text-charcoal focus:bg-brandyellow/10 focus:text-charcoal focus:outline-none">
                  {t("nav.contact")}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center space-x-2">
          <LanguageSwitcher />
          <ThemeToggle />

          <Button
            asChild
            className="hidden md:flex bg-brandyellow hover:bg-brightyellow text-charcoal font-semibold px-6 py-3 text-base"
          >
            <Link href="/build-pentest">Build a Pentest</Link>
          </Button>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-charcoal dark:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="lg:hidden absolute top-full left-0 w-full bg-white dark:bg-charcoal shadow-lg py-4 px-6 border-t border-lightgray dark:border-gray-700">
          <div className="flex flex-col space-y-4">
            <Link
              href="/"
              className="text-charcoal dark:text-white hover:text-brandyellow dark:hover:text-brandyellow font-medium py-3 text-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t("nav.home")}
            </Link>
            <Link
              href="/ptaas"
              className="text-charcoal dark:text-white hover:text-brandyellow dark:hover:text-brandyellow font-medium py-3 text-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              PTaaS Platform
            </Link>
            <Link
              href="/blog"
              className="text-charcoal dark:text-white hover:text-brandyellow dark:hover:text-brandyellow font-medium py-3 text-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="#services"
              className="text-charcoal dark:text-white hover:text-brandyellow dark:hover:text-brandyellow font-medium py-3 text-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t("nav.services")}
            </Link>
            <Link
              href="#about"
              className="text-charcoal dark:text-white hover:text-brandyellow dark:hover:text-brandyellow font-medium py-3 text-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t("nav.about")}
            </Link>
            <Link
              href="#contact"
              className="text-charcoal dark:text-white hover:text-brandyellow dark:hover:text-brandyellow font-medium py-3 text-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t("nav.contact")}
            </Link>
            <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200 dark:border-gray-700">
              <Button
                asChild
                className="bg-brandyellow hover:bg-brightyellow text-charcoal font-semibold px-6 py-3 text-base"
              >
                <Link href="/build-pentest">Build a Pentest</Link>
              </Button>
            </div>
          </div>
        </nav>
      )}
    </header>
  )
}
