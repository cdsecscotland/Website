import type { Metadata } from "next"
import HeadlessContact from "@/components/headless-contact"

export const metadata: Metadata = {
 title: "Contact Closed Door Security | Expert Cyber Security Consultants",
 description: "Get in touch with our cybersecurity experts. Free consultations and global offices in UK, USA, and UAE. Contact us today for professional penetration testing services.",
 keywords: "contact cyber security experts, penetration testing consultation, cybersecurity consultation, closed door security contact",
 alternates: {
 canonical: "https://www.cdsec.co.uk/contact",
 },
}

export default function ContactPage() {
 return (
 <main className="min-h-screen pt-20">
 <HeadlessContact />
 </main>
 )
}