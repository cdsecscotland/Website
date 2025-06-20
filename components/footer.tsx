import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="relative h-12 w-48 mb-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo-rebrand-pto4kn1IFh8Nq1WA7oBBqHqI4YoLxJ.png"
                alt="Closed Door Security Logo"
                fill
                className="object-contain brightness-200 contrast-200 invert"
              />
            </div>
            <p className="text-white/70 mb-4">
              Global cyber security consultancy providing expert penetration testing, compliance, and security assessment services worldwide.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-white/70 hover:text-paleyellow transition-colors">
                <Facebook className="w-5 h-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-white/70 hover:text-paleyellow transition-colors">
                <Twitter className="w-5 h-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-white/70 hover:text-paleyellow transition-colors">
                <Linkedin className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-white/70 hover:text-paleyellow transition-colors">
                <Instagram className="w-5 h-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#services" className="text-white/70 hover:text-paleyellow transition-colors">
                  Penetration Testing
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-white/70 hover:text-paleyellow transition-colors">
                  Compliance & Auditing
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-white/70 hover:text-paleyellow transition-colors">
                  Security Consulting
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-white/70 hover:text-paleyellow transition-colors">
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
                <Link href="#" className="text-white/70 hover:text-paleyellow transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-paleyellow transition-colors">
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
                <Link href="#" className="text-white/70 hover:text-paleyellow transition-colors">
                  Security Tips
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-paleyellow transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-paleyellow transition-colors">
                  Downloads
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
