"use client"

import { useState, useEffect, Fragment } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Menu as HeadlessMenu, Transition, Disclosure } from "@headlessui/react"

const services = [
 {
 name: "PTaaS Platform",
 description: "Penetration Testing as a Service - Continuous security testing in the cloud",
 href: "/ptaas",
 featured: true
 },
 {
 name: "Penetration Testing",
 description: "CREST certified penetration testing services",
 href: "/penetration-testing"
 },
 {
 name: "Compliance & Auditing",
 description: "ISO 27001, SOC 2, and regulatory compliance",
 href: "/compliance-auditing"
 },
 {
 name: "Build a Pentest",
 description: "Custom penetration test builder",
 href: "/build-pentest"
 }
]

export default function HeadlessHeader() {
 const [isScrolled, setIsScrolled] = useState(false)
 const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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
 isScrolled ? "bg-white/90 backdrop-blur-md shadow-lg py-2" : "bg-transparent py-4",
 )}
 >
 <div className="container flex items-center justify-between">
 <Link href="/" className="flex items-center">
 <div className="relative h-12 w-48">
 <Image
 src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo-rebrand-pto4kn1IFh8Nq1WA7oBBqHqI4YoLxJ.png"
 alt="Closed Door Security Logo"
 fill
 className="object-contain "
 />
 </div>
 </Link>

 {/* Desktop Navigation */}
 <nav className="hidden lg:flex items-center space-x-1">
 <Link 
 href="/" 
 className="px-6 py-3 text-base font-medium transition-colors hover:bg-brandyellow/10 hover:text-charcoal rounded-md"
 >
 Home
 </Link>

 {/* Services Menu with Headless UI */}
 <HeadlessMenu as="div" className="relative">
 <HeadlessMenu.Button className="flex items-center px-6 py-3 text-base font-medium transition-colors hover:bg-brandyellow/10 hover:text-charcoal rounded-md ui-open:bg-brandyellow/10 ui-open:text-charcoal">
 Services
 </HeadlessMenu.Button>

 <Transition
 as={Fragment}
 enter="transition ease-out duration-200"
 enterFrom="opacity-0 translate-y-1"
 enterTo="opacity-100 translate-y-0"
 leave="transition ease-in duration-150"
 leaveFrom="opacity-100 translate-y-0"
 leaveTo="opacity-0 translate-y-1"
 >
 <HeadlessMenu.Items className="absolute left-0 mt-2 w-96 origin-top-left rounded-xl bg-white shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none overflow-hidden">
 <div className="p-6">
 <div className="grid gap-4">
 {services.map((service) => (
 <HeadlessMenu.Item key={service.name}>
 {({ active }) => (
 <Link
 href={service.href}
 className={cn(
 "group flex flex-col rounded-lg p-4 transition-all duration-200",
 service.featured
 ? "bg-gradient-to-br from-brandyellow/20 to-brandyellow/10"
 : "",
 active
 ? "bg-brandyellow/10 transform scale-[1.02]"
 : "hover:bg-gray-50 "
 )}
 >
 <div className="flex items-center">
 <div className="text-sm font-semibold text-charcoal ">
 {service.name}
 </div>
 {service.featured && (
 <div className="ml-2 px-2 py-1 text-xs font-medium text-brandyellow bg-brandyellow/20 rounded-full">
 Featured
 </div>
 )}
 </div>
 <div className="mt-1 text-sm text-charcoal/70 ">
 {service.description}
 </div>
 </Link>
 )}
 </HeadlessMenu.Item>
 ))}
 </div>
 </div>
 </HeadlessMenu.Items>
 </Transition>
 </HeadlessMenu>

 <Link 
 href="/ptaas" 
 className="px-6 py-3 text-base font-medium transition-colors hover:bg-brandyellow/10 hover:text-charcoal rounded-md"
 >
 PTaaS
 </Link>
 <Link 
 href="/blog" 
 className="px-6 py-3 text-base font-medium transition-colors hover:bg-brandyellow/10 hover:text-charcoal rounded-md"
 >
 Blog
 </Link>
 <Link 
 href="/about" 
 className="px-6 py-3 text-base font-medium transition-colors hover:bg-brandyellow/10 hover:text-charcoal rounded-md"
 >
 About
 </Link>
 <Link 
 href="/contact" 
 className="px-6 py-3 text-base font-medium transition-colors hover:bg-brandyellow/10 hover:text-charcoal rounded-md"
 >
 Contact
 </Link>
 </nav>

 <div className="flex items-center space-x-2">
 <Button
 asChild
 variant="outline"
 className="hidden md:flex border-brandyellow text-brandyellow hover:bg-brandyellow hover:text-charcoal font-medium px-4 py-2 text-sm transition-all duration-200 hover:scale-105"
 >
 <Link href="https://insights.cdsec.co.uk/" target="_blank" rel="noopener noreferrer">Customer Login</Link>
 </Button>

 <Button
 asChild
 className="hidden md:flex bg-brandyellow hover:bg-brightyellow text-charcoal font-semibold px-6 py-3 text-base transition-all duration-200 hover:scale-105 hover:shadow-lg"
 >
 <Link href="/build-pentest">Build a Pentest</Link>
 </Button>

 {/* Mobile Menu Button */}
 <button
 className="lg:hidden text-charcoal p-2 rounded-md hover:bg-brandyellow/10 transition-colors"
 onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
 >
 {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
 </button>
 </div>
 </div>

 {/* Mobile Navigation with Headless UI */}
 <Transition
 show={mobileMenuOpen}
 as={Fragment}
 enter="transition ease-out duration-200"
 enterFrom="opacity-0 -translate-y-4"
 enterTo="opacity-100 translate-y-0"
 leave="transition ease-in duration-150"
 leaveFrom="opacity-100 translate-y-0"
 leaveTo="opacity-0 -translate-y-4"
 >
 <nav className="lg:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-xl border-t border-lightgray ">
 <div className="container py-6">
 <div className="flex flex-col space-y-4">
 <Link
 href="/"
 className="text-charcoal hover:text-brandyellow font-medium py-3 text-lg transition-colors rounded-md hover:bg-brandyellow/10 px-4"
 onClick={() => setMobileMenuOpen(false)}
 >
 Home
 </Link>

 {/* Mobile Services Disclosure */}
 <Disclosure>
 {({ open }) => (
 <>
 <Disclosure.Button className="flex justify-between w-full px-4 py-3 text-lg font-medium text-left text-charcoal hover:text-brandyellow transition-colors rounded-md hover:bg-brandyellow/10 ui-open:bg-brandyellow/10 ui-open:text-brandyellow">
 <span>Services</span>
 <span className={cn("transform transition-transform duration-200", open ? "rotate-180" : "")}>
 ↓
 </span>
 </Disclosure.Button>
 <Transition
 enter="transition duration-200 ease-out"
 enterFrom="transform scale-95 opacity-0"
 enterTo="transform scale-100 opacity-100"
 leave="transition duration-150 ease-out"
 leaveFrom="transform scale-100 opacity-100"
 leaveTo="transform scale-95 opacity-0"
 >
 <Disclosure.Panel className="px-4 pb-2 space-y-2">
 {services.map((service) => (
 <Link
 key={service.name}
 href={service.href}
 className="block px-4 py-3 text-base text-charcoal/70 hover:text-brandyellow hover:bg-brandyellow/5 rounded-md transition-colors"
 onClick={() => setMobileMenuOpen(false)}
 >
 {service.name}
 </Link>
 ))}
 </Disclosure.Panel>
 </Transition>
 </>
 )}
 </Disclosure>

 <Link
 href="/ptaas"
 className="text-charcoal hover:text-brandyellow font-medium py-3 text-lg transition-colors rounded-md hover:bg-brandyellow/10 px-4"
 onClick={() => setMobileMenuOpen(false)}
 >
 PTaaS Platform
 </Link>
 <Link
 href="/blog"
 className="text-charcoal hover:text-brandyellow font-medium py-3 text-lg transition-colors rounded-md hover:bg-brandyellow/10 px-4"
 onClick={() => setMobileMenuOpen(false)}
 >
 Blog
 </Link>
 <Link
 href="/about"
 className="text-charcoal hover:text-brandyellow font-medium py-3 text-lg transition-colors rounded-md hover:bg-brandyellow/10 px-4"
 onClick={() => setMobileMenuOpen(false)}
 >
 About
 </Link>
 <Link
 href="/contact"
 className="text-charcoal hover:text-brandyellow font-medium py-3 text-lg transition-colors rounded-md hover:bg-brandyellow/10 px-4"
 onClick={() => setMobileMenuOpen(false)}
 >
 Contact
 </Link>

 <div className="flex flex-col space-y-3 pt-4 border-t border-gray-200 ">
 <Button
 asChild
 variant="outline"
 className="border-brandyellow text-brandyellow hover:bg-brandyellow hover:text-charcoal font-medium transition-all duration-200"
 >
 <Link href="https://insights.cdsec.co.uk/" target="_blank" rel="noopener noreferrer">Customer Login</Link>
 </Button>
 <Button
 asChild
 className="bg-brandyellow hover:bg-brightyellow text-charcoal font-semibold transition-all duration-200 hover:shadow-lg"
 >
 <Link href="/build-pentest">Build a Pentest</Link>
 </Button>
 </div>
 </div>
 </div>
 </nav>
 </Transition>
 </header>
 )
}