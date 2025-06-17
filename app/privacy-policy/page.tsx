import ScrollAnimation from "@/components/scroll-animation"

export const metadata = {
  title: "Privacy Policy | Closed Door Security",
  description: "Privacy Policy for Closed Door Security - How we collect, use, and protect your personal information",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cream via-white to-paleyellow/30 dark:from-charcoal dark:via-charcoal/95 dark:to-charcoal">
      <div className="container py-20">
        <ScrollAnimation animation="fade">
          <h1 className="text-4xl md:text-5xl font-bold text-charcoal dark:text-white mb-8 text-center">
            Privacy Policy
          </h1>
        </ScrollAnimation>

        <ScrollAnimation animation="slide-up" delay={0.2}>
          <div className="max-w-4xl mx-auto bg-white dark:bg-charcoal/80 rounded-lg shadow-xl p-8 md:p-12">
            <p className="text-charcoal/80 dark:text-white/80 mb-6">
              Last updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-charcoal dark:text-white mb-4">1. Introduction</h2>
              <p className="text-charcoal/80 dark:text-white/80 mb-4">
                Closed Door Security Limited ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-charcoal dark:text-white mb-4">2. Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-charcoal dark:text-white mb-2">Personal Information</h3>
              <p className="text-charcoal/80 dark:text-white/80 mb-4">
                We may collect personal information that you provide directly to us, including:
              </p>
              <ul className="list-disc pl-6 text-charcoal/80 dark:text-white/80 mb-4">
                <li>Name and contact information (email address, phone number)</li>
                <li>Company name and job title</li>
                <li>Information provided in forms or correspondence</li>
                <li>Technical assessment requirements and specifications</li>
              </ul>

              <h3 className="text-xl font-semibold text-charcoal dark:text-white mb-2">Automatically Collected Information</h3>
              <p className="text-charcoal/80 dark:text-white/80 mb-4">
                When you visit our website, we may automatically collect:
              </p>
              <ul className="list-disc pl-6 text-charcoal/80 dark:text-white/80 mb-4">
                <li>IP address and browser type</li>
                <li>Device information and operating system</li>
                <li>Pages visited and time spent on our website</li>
                <li>Referring website addresses</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-charcoal dark:text-white mb-4">3. How We Use Your Information</h2>
              <p className="text-charcoal/80 dark:text-white/80 mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 text-charcoal/80 dark:text-white/80 mb-4">
                <li>Provide, operate, and maintain our services</li>
                <li>Process and respond to your inquiries</li>
                <li>Send you marketing communications (with your consent)</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
                <li>Protect against fraudulent or illegal activity</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-charcoal dark:text-white mb-4">4. Legal Basis for Processing</h2>
              <p className="text-charcoal/80 dark:text-white/80 mb-4">
                We process your personal data based on:
              </p>
              <ul className="list-disc pl-6 text-charcoal/80 dark:text-white/80 mb-4">
                <li><strong>Consent:</strong> Where you have given clear consent for us to process your personal data</li>
                <li><strong>Contract:</strong> Where processing is necessary for the performance of a contract with you</li>
                <li><strong>Legal obligation:</strong> Where we need to comply with a legal obligation</li>
                <li><strong>Legitimate interests:</strong> Where processing is necessary for our legitimate interests or those of a third party</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-charcoal dark:text-white mb-4">5. Data Sharing and Disclosure</h2>
              <p className="text-charcoal/80 dark:text-white/80 mb-4">
                We do not sell, trade, or rent your personal information. We may share your information with:
              </p>
              <ul className="list-disc pl-6 text-charcoal/80 dark:text-white/80 mb-4">
                <li>Service providers who assist us in operating our business</li>
                <li>Professional advisors such as lawyers and accountants</li>
                <li>Law enforcement or regulatory bodies when required by law</li>
                <li>Third parties in connection with a business transfer or restructuring</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-charcoal dark:text-white mb-4">6. Data Security</h2>
              <p className="text-charcoal/80 dark:text-white/80 mb-4">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-charcoal dark:text-white mb-4">7. Data Retention</h2>
              <p className="text-charcoal/80 dark:text-white/80 mb-4">
                We retain your personal information only for as long as necessary to fulfill the purposes for which it was collected, including to satisfy any legal, accounting, or reporting requirements.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-charcoal dark:text-white mb-4">8. Your Rights</h2>
              <p className="text-charcoal/80 dark:text-white/80 mb-4">
                Under data protection laws, you have rights including:
              </p>
              <ul className="list-disc pl-6 text-charcoal/80 dark:text-white/80 mb-4">
                <li>The right to access your personal data</li>
                <li>The right to rectification of inaccurate data</li>
                <li>The right to erasure of your data</li>
                <li>The right to restrict processing</li>
                <li>The right to data portability</li>
                <li>The right to object to processing</li>
                <li>The right to withdraw consent</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-charcoal dark:text-white mb-4">9. Cookies</h2>
              <p className="text-charcoal/80 dark:text-white/80 mb-4">
                Our website uses cookies to enhance your browsing experience. You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-charcoal dark:text-white mb-4">10. International Data Transfers</h2>
              <p className="text-charcoal/80 dark:text-white/80 mb-4">
                Your information may be transferred to and maintained on servers located outside of your country. We ensure appropriate safeguards are in place for such transfers.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-charcoal dark:text-white mb-4">11. Children's Privacy</h2>
              <p className="text-charcoal/80 dark:text-white/80 mb-4">
                Our services are not intended for individuals under the age of 16. We do not knowingly collect personal information from children under 16.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-charcoal dark:text-white mb-4">12. Changes to This Privacy Policy</h2>
              <p className="text-charcoal/80 dark:text-white/80 mb-4">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-charcoal dark:text-white mb-4">13. Contact Us</h2>
              <p className="text-charcoal/80 dark:text-white/80 mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us at:
              </p>
              <div className="bg-gray-50 dark:bg-charcoal/50 p-4 rounded-lg">
                <p className="text-charcoal/80 dark:text-white/80">
                  <strong>Closed Door Security Limited</strong><br />
                  Email: privacy@cdsec.co.uk<br />
                  Phone: +44 (0) 1851 123456<br />
                  Address: Outer Hebrides, Scotland, United Kingdom
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-charcoal dark:text-white mb-4">14. Supervisory Authority</h2>
              <p className="text-charcoal/80 dark:text-white/80">
                You have the right to lodge a complaint with the Information Commissioner's Office (ICO) if you believe we have not complied with the requirements of the GDPR or UK data protection laws.
              </p>
            </section>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  )
}