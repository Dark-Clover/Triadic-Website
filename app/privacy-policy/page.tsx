"use client"

import { Suspense } from "react"
import InteractiveNavbar from "@/components/interactive-navbar"
import Footer from "@/components/footer"
import AnimatedBackground from "@/components/animated-background"

// Loading fallback component
const SectionLoading = () => (
  <div className="flex items-center justify-center min-h-[40vh]">
    <div className="w-8 h-8 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div>
  </div>
)

export default function PrivacyPolicyPage() {
  return (
    <AnimatedBackground>
      <main className="min-h-screen bg-black overflow-hidden">
        <InteractiveNavbar />

        <section className="py-32 relative">
          <div className="container max-w-4xl">
            <div className="bg-gray-900 rounded-2xl p-8 md:p-12 shadow-xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-8 text-white">Privacy Policy</h1>
              <p className="text-gray-400 mb-8">Effective Date: Jan 21, 2025</p>

              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300">
                  At Triadic Marketing Agency ("we," "us," "our"), your privacy is our priority. This Privacy Policy
                  explains how we collect, use, disclose, and safeguard your information when you visit our website or
                  use our services. By using our website, you agree to the terms of this Privacy Policy.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-white">1. Information We Collect</h2>
                <p className="text-gray-300">We may collect the following types of information:</p>

                <h3 className="text-xl font-bold mt-6 mb-2 text-white">a. Personal Information</h3>
                <ul className="list-disc pl-6 text-gray-300 space-y-1">
                  <li>Name</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Business name</li>
                  <li>Other details provided through contact forms</li>
                </ul>

                <h3 className="text-xl font-bold mt-6 mb-2 text-white">b. Non-Personal Information</h3>
                <ul className="list-disc pl-6 text-gray-300 space-y-1">
                  <li>Browser type and version</li>
                  <li>IP address</li>
                  <li>Operating system</li>
                  <li>Pages visited on our website</li>
                  <li>Referring website</li>
                </ul>

                <h3 className="text-xl font-bold mt-6 mb-2 text-white">c. Cookies and Tracking Technologies</h3>
                <p className="text-gray-300">
                  We use cookies and similar technologies to improve your browsing experience and gather data on website
                  usage.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-white">2. How We Use Your Information</h2>
                <p className="text-gray-300">We use the information collected for the following purposes:</p>
                <ul className="list-disc pl-6 text-gray-300 space-y-1">
                  <li>To provide and manage our services.</li>
                  <li>To respond to your inquiries or requests.</li>
                  <li>To improve our website and services.</li>
                  <li>To send marketing and promotional communications (with your consent).</li>
                  <li>To analyze website performance and user behavior.</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-white">3. How We Share Your Information</h2>
                <p className="text-gray-300">
                  We do not sell your personal information to third parties. However, we may share your information
                  with:
                </p>
                <ul className="list-disc pl-6 text-gray-300 space-y-1">
                  <li>
                    <strong>Service Providers:</strong> Third parties that assist us in providing services, such as
                    hosting, analytics, or customer support.
                  </li>
                  <li>
                    <strong>Legal Requirements:</strong> Authorities or organizations if required by law or to protect
                    our rights.
                  </li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-white">4. Your Rights and Choices</h2>
                <p className="text-gray-300">You have the following rights regarding your personal information:</p>
                <ul className="list-disc pl-6 text-gray-300 space-y-1">
                  <li>
                    <strong>Access:</strong> Request a copy of your personal data.
                  </li>
                  <li>
                    <strong>Correction:</strong> Update or correct inaccurate information.
                  </li>
                  <li>
                    <strong>Deletion:</strong> Request the deletion of your personal information (subject to legal
                    obligations).
                  </li>
                  <li>
                    <strong>Opt-Out:</strong> Unsubscribe from marketing emails by clicking the "unsubscribe" link in
                    any communication.
                  </li>
                </ul>
                <p className="text-gray-300 mt-4">
                  To exercise these rights, please contact us at info@triadicmarketing.com.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-white">5. Data Security</h2>
                <p className="text-gray-300">
                  We implement appropriate technical and organizational measures to protect your information from
                  unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over
                  the internet is completely secure.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-white">6. Third-Party Links</h2>
                <p className="text-gray-300">
                  Our website may contain links to third-party websites. We are not responsible for the privacy
                  practices of these sites. We encourage you to review their privacy policies.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-white">7. Changes to This Privacy Policy</h2>
                <p className="text-gray-300">
                  We may update this Privacy Policy from time to time. Any changes will be posted on this page with the
                  updated effective date. Please review this policy periodically.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-white">8. Contact Us</h2>
                <p className="text-gray-300">
                  If you have any questions about this Privacy Policy or how your information is handled, please contact
                  us:
                </p>
                <p className="text-gray-300 mt-2">
                  <strong>Triadic Marketing Agency</strong>
                  <br />
                  Email: info@triadicmarketing.com
                </p>

                <p className="text-gray-300 mt-8">
                  Your trust is important to us. Thank you for choosing Triadic Marketing Agency!
                </p>
              </div>
            </div>
          </div>
        </section>

        <Suspense fallback={<SectionLoading />}>
          <Footer />
        </Suspense>
      </main>
    </AnimatedBackground>
  )
}
