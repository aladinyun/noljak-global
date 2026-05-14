"use client"

import { useEffect } from "react"
import { Footer } from "@/components/footer"

export default function PrivacyPolicy() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0")
            entry.target.classList.remove("opacity-0", "translate-y-4")
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[#0F1B3D] pt-32 pb-20">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 text-center">
          <h1 className="fade-up opacity-0 translate-y-4 transition-all duration-500 font-heading font-bold text-white text-[40px] md:text-[64px] leading-tight mb-6">
            Privacy Policy
          </h1>
          <p className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-100 font-sans text-[#5F6B7A] text-base md:text-lg max-w-[600px] mx-auto">
            How we collect, use, and protect your information when you visit the NOLJAK website.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-[800px] mx-auto px-4 md:px-8">
          {/* Section 1 */}
          <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 mb-10">
            <h2 className="font-heading font-bold text-[#0F1B3D] text-[24px] md:text-[32px] mb-4">
              1. Introduction
            </h2>
            <p className="font-sans text-[#5F6B7A] text-base md:text-lg leading-relaxed">
              NOLJAKEDU CO., LTD (&ldquo;NOLJAK,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is committed to protecting your privacy. This Privacy Policy explains our practices regarding the collection, use, and disclosure of information when you visit our website.
            </p>
            <p className="font-sans text-[#5F6B7A] text-base md:text-lg leading-relaxed mt-4">
              <strong className="text-[#0F1B3D]">We do not collect personal information from users visiting this website</strong> unless you voluntarily provide it to us.
            </p>
          </div>

          {/* Section 2 */}
          <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 mb-10">
            <h2 className="font-heading font-bold text-[#0F1B3D] text-[24px] md:text-[32px] mb-4">
              2. Information We Collect
            </h2>
            <p className="font-sans text-[#5F6B7A] text-base md:text-lg leading-relaxed mb-4">
              We only collect information that users voluntarily provide through:
            </p>
            <ul className="list-disc list-inside font-sans text-[#5F6B7A] text-base md:text-lg leading-relaxed space-y-2 ml-4">
              <li>Contact forms and inquiry submissions</li>
              <li>Newsletter sign-ups (if applicable)</li>
              <li>Partner inquiry forms</li>
            </ul>
            <p className="font-sans text-[#5F6B7A] text-base md:text-lg leading-relaxed mt-4">
              We do not use tracking cookies or analytics that identify individual users. Any site usage analytics are anonymized and do not contain personal data.
            </p>
          </div>

          {/* Section 3 */}
          <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 mb-10">
            <h2 className="font-heading font-bold text-[#0F1B3D] text-[24px] md:text-[32px] mb-4">
              3. How We Use Information
            </h2>
            <p className="font-sans text-[#5F6B7A] text-base md:text-lg leading-relaxed mb-4">
              Information collected through contact forms is used solely to:
            </p>
            <ul className="list-disc list-inside font-sans text-[#5F6B7A] text-base md:text-lg leading-relaxed space-y-2 ml-4">
              <li>Respond to your inquiries and requests</li>
              <li>Provide information about our programs and services</li>
              <li>Process partnership applications</li>
            </ul>
            <p className="font-sans text-[#5F6B7A] text-base md:text-lg leading-relaxed mt-4">
              Your information is not shared with third parties and is used only for internal business purposes directly related to your inquiry.
            </p>
          </div>

          {/* Section 4 */}
          <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 mb-10">
            <h2 className="font-heading font-bold text-[#0F1B3D] text-[24px] md:text-[32px] mb-4">
              4. Data Security
            </h2>
            <p className="font-sans text-[#5F6B7A] text-base md:text-lg leading-relaxed">
              We implement reasonable security measures to protect the information you provide. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security. We advise users not to send sensitive personal information via contact forms.
            </p>
          </div>

          {/* Section 5 */}
          <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 mb-10">
            <h2 className="font-heading font-bold text-[#0F1B3D] text-[24px] md:text-[32px] mb-4">
              5. GDPR Compliance
            </h2>
            <p className="font-sans text-[#5F6B7A] text-base md:text-lg leading-relaxed mb-4">
              For users in the European Union, we comply with the General Data Protection Regulation (GDPR). You have the right to:
            </p>
            <ul className="list-disc list-inside font-sans text-[#5F6B7A] text-base md:text-lg leading-relaxed space-y-2 ml-4">
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to or restrict processing of your data</li>
            </ul>
            <p className="font-sans text-[#5F6B7A] text-base md:text-lg leading-relaxed mt-4">
              To exercise these rights, please contact us at <a href="mailto:contact@noljakedu.com" className="text-[#5BB7E8] hover:underline">contact@noljakedu.com</a>.
            </p>
          </div>

          {/* Section 6 */}
          <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 mb-10">
            <h2 className="font-heading font-bold text-[#0F1B3D] text-[24px] md:text-[32px] mb-4">
              6. Third-Party Links
            </h2>
            <p className="font-sans text-[#5F6B7A] text-base md:text-lg leading-relaxed">
              Our website may contain links to external websites that are not operated by us. We are not responsible for the content or privacy practices of these external sites. Each external website has its own privacy policy, and we encourage you to review them when visiting.
            </p>
          </div>

          {/* Section 7 */}
          <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 mb-10">
            <h2 className="font-heading font-bold text-[#0F1B3D] text-[24px] md:text-[32px] mb-4">
              7. Changes to This Policy
            </h2>
            <p className="font-sans text-[#5F6B7A] text-base md:text-lg leading-relaxed">
              We reserve the right to update this Privacy Policy at any time. Any changes will be posted on this page with an updated effective date. We encourage you to review this policy periodically for any updates.
            </p>
          </div>

          {/* Section 8 */}
          <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 mb-10">
            <h2 className="font-heading font-bold text-[#0F1B3D] text-[24px] md:text-[32px] mb-4">
              8. Contact Us
            </h2>
            <p className="font-sans text-[#5F6B7A] text-base md:text-lg leading-relaxed mb-4">
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <div className="bg-[#FFFDF5] border border-[#E8ECF1] rounded-2xl p-6">
              <p className="font-sans text-[#0F1B3D] font-semibold text-lg mb-2">NOLJAKEDU CO., LTD</p>
              <p className="font-sans text-[#5F6B7A] text-base leading-relaxed">
                Email: <a href="mailto:contact@noljakedu.com" className="text-[#5BB7E8] hover:underline">contact@noljakedu.com</a><br />
                Address: 2F, 40 Saimdang-ro 8-gil, Seocho-gu, Seoul, Korea<br />
                Phone: +82-2-1661-7968
              </p>
            </div>
          </div>

          {/* Last Updated */}
          <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 pt-10 border-t border-[#E8ECF1]">
            <p className="font-sans text-[#5F6B7A] text-sm">
              <strong>Last Updated:</strong> May 7, 2026
            </p>
            <p className="font-sans text-[#5F6B7A] text-sm mt-2">
              For more information, contact us at <a href="mailto:contact@noljakedu.com" className="text-[#5BB7E8] hover:underline">contact@noljakedu.com</a>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
