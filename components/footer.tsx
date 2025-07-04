import Link from "next/link"
import Image from "next/image"
import { Linkedin } from "lucide-react"

export default function Footer() {
 return (
 <footer className="bg-black text-white">
 <div className="container py-12">
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
 <div>
 <div className="relative h-12 w-48 mb-4">
 <Image
 src="/logo-local.png"
 alt="Closed Door Security Logo"
 width={192}
 height={48}
 className="object-contain brightness-200 contrast-200 invert w-full h-full"
 style={{
 maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
 WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)'
 }}
 />
 </div>
 <p className="text-white/70 mb-4">
 Global cyber security consultancy providing expert penetration testing, compliance, and security assessment services worldwide.
 </p>
 <div className="flex space-x-4">
 <Link href="https://www.linkedin.com/company/cdsec" className="text-white/70 hover:text-paleyellow transition-colors">
 <Linkedin className="w-5 h-5" />
 <span className="sr-only">LinkedIn</span>
 </Link>
 </div>
 </div>

 <div>
 <h3 className="text-lg font-bold mb-4">Services</h3>
 <ul className="space-y-2">
 <li>
 <Link href="/penetration-testing" className="text-white/70 hover:text-paleyellow transition-colors">
 Penetration Testing
 </Link>
 </li>
 <li>
 <Link href="/compliance-auditing" className="text-white/70 hover:text-paleyellow transition-colors">
 Compliance & Auditing
 </Link>
 </li>
 <li>
 <Link href="/security-assessment-services" className="text-white/70 hover:text-paleyellow transition-colors">
 Security Consulting
 </Link>
 </li>
 <li>
 <Link href="/vulnerability-management-scotland" className="text-white/70 hover:text-paleyellow transition-colors">
 Vulnerability Management
 </Link>
 </li>
 </ul>
 </div>

 <div>
 <h3 className="text-lg font-bold mb-4">Company</h3>
 <ul className="space-y-2">
 <li>
 <Link href="/about" className="text-white/70 hover:text-paleyellow transition-colors">
 About Us
 </Link>
 </li>
 <li>
 <Link href="/about" className="text-white/70 hover:text-paleyellow transition-colors">
 Our Team
 </Link>
 </li>
 <li>
 <Link href="/contact" className="text-white/70 hover:text-paleyellow transition-colors">
 Careers
 </Link>
 </li>
 <li>
 <Link href="/contact" className="text-white/70 hover:text-paleyellow transition-colors">
 Contact
 </Link>
 </li>
 </ul>
 </div>

 <div>
 <h3 className="text-lg font-bold mb-4">Resources</h3>
 <ul className="space-y-2">
 <li>
 <Link href="/blog" className="text-white/70 hover:text-paleyellow transition-colors">
 Blog
 </Link>
 </li>
 <li>
 <Link href="/case-studies" className="text-white/70 hover:text-paleyellow transition-colors">
 Case Studies
 </Link>
 </li>
 </ul>
 </div>
 </div>

 <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
 <p className="text-white/50 text-sm mb-4 md:mb-0">
 &copy; {new Date().getFullYear()} Closed Door Security. All rights reserved.
 </p>
 <div className="flex space-x-6">
 <Link href="#" className="text-white/50 hover:text-paleyellow text-sm transition-colors">
 Privacy Policy
 </Link>
 <Link href="#" className="text-white/50 hover:text-paleyellow text-sm transition-colors">
 Terms of Service
 </Link>
 <Link href="#" className="text-white/50 hover:text-paleyellow text-sm transition-colors">
 Cookie Policy
 </Link>
 </div>
 </div>
 </div>
 </footer>
 )
}
