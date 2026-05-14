"use client"

import { useEffect } from "react"
import { Footer } from "@/components/footer"

export default function TermsOfUse() {
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
            Terms of Use
          </h1>
          <p className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-100 font-sans text-[#5F6B7A] text-base md:text-lg max-w-[600px] mx-auto">
            Please read these terms carefully before using the NOLJAK website.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-[800px] mx-auto px-4 md:px-8">
          {/* Section 1 */}
          <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 mb-10">
            <h2 className="font-heading font-bold text-[#0F1B3D] text-[24px] md:text-[32px] mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="font-sans text-[#5F6B7A] text-base md:text-lg leading-relaxed">
              By accessing and using this website, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to these terms, you should not use this website.
            </p>
          </div>

          {/* Section 2 */}
          <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 mb-10">
            <h2 className="font-heading font-bold text-[#0F1B3D] text-[24px] md:text-[32px] mb-4">
              2. Use License
            </h2>
            <p className="font-sans text-[#5F6B7A] text-base md:text-lg leading-relaxed mb-4">
              Permission is granted to temporarily view and use the materials on the NOLJAK website for personal, non-commercial purposes only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc list-inside font-sans text-[#5F6B7A] text-base md:text-lg leading-relaxed space-y-2 ml-4">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose</li>
              <li>Attempt to reverse engineer any software on the website</li>
              <li>Remove any copyright or proprietary notations</li>
              <li>Transfer the materials to another person or &ldquo;mirror&rdquo; the materials on any other server</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 mb-10">
            <h2 className="font-heading font-bold text-[#0F1B3D] text-[24px] md:text-[32px] mb-4">
              3. Disclaimer of Warranties
            </h2>
            <p className="font-sans text-[#5F6B7A] text-base md:text-lg leading-relaxed">
              The materials on this website are provided on an &ldquo;as is&rdquo; basis. NOLJAK makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </div>

          {/* Section 4 */}
          <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 mb-10">
            <h2 className="font-heading font-bold text-[#0F1B3D] text-[24px] md:text-[32px] mb-4">
              4. Limitation of Liability
            </h2>
            <p className="font-sans text-[#5F6B7A] text-base md:text-lg leading-relaxed">
              In no event shall NOLJAK or its partners be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, arising out of or in connection with your use of this website. Our liability is limited to the fullest extent permitted by applicable law.
            </p>
          </div>

          {/* Section 5 */}
          <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 mb-10">
            <h2 className="font-heading font-bold text-[#0F1B3D] text-[24px] md:text-[32px] mb-4">
              5. Accuracy of Content
            </h2>
            <p className="font-sans text-[#5F6B7A] text-base md:text-lg leading-relaxed">
              We strive to provide accurate and up-to-date information on our website. However, we make no guarantees regarding the accuracy, completeness, or timeliness of any information presented. The content on this website is for informational purposes only and should not be considered professional advice (legal, financial, educational, or otherwise).
            </p>
          </div>

          {/* Section 6 */}
          <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 mb-10">
            <h2 className="font-heading font-bold text-[#0F1B3D] text-[24px] md:text-[32px] mb-4">
              6. Intellectual Property Rights
            </h2>
            <p className="font-sans text-[#5F6B7A] text-base md:text-lg leading-relaxed mb-4">
              All content on this website, including but not limited to text, images, logos, graphics, and branding materials, is owned by NOLJAKEDU CO., LTD and is protected by copyright and other intellectual property laws.
            </p>
            <p className="font-sans text-[#5F6B7A] text-base md:text-lg leading-relaxed">
              Users may not reproduce, distribute, modify, display, or transmit any content from this website without prior written permission. NOLJAK and related marks are trademarks of NOLJAKEDU CO., LTD.
            </p>
          </div>

          {/* Section 7 */}
          <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 mb-10">
            <h2 className="font-heading font-bold text-[#0F1B3D] text-[24px] md:text-[32px] mb-4">
              7. User Conduct
            </h2>
            <p className="font-sans text-[#5F6B7A] text-base md:text-lg leading-relaxed mb-4">
              When using this website, you agree not to:
            </p>
            <ul className="list-disc list-inside font-sans text-[#5F6B7A] text-base md:text-lg leading-relaxed space-y-2 ml-4">
              <li>Harass, abuse, or threaten other users or staff</li>
              <li>Transmit viruses, malware, or any other harmful code</li>
              <li>Engage in unauthorized access to any part of the website</li>
              <li>Violate any applicable local, national, or international laws</li>
              <li>Interfere with the proper functioning of the website</li>
            </ul>
          </div>

          {/* Section 8 */}
          <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 mb-10">
            <h2 className="font-heading font-bold text-[#0F1B3D] text-[24px] md:text-[32px] mb-4">
              8. Links to Third-Party Sites
            </h2>
            <p className="font-sans text-[#5F6B7A] text-base md:text-lg leading-relaxed">
              Our website may contain links to third-party websites or services that are not owned or controlled by NOLJAK. We are not responsible for the content, privacy policies, or practices of any third-party websites. Links to external sites do not imply endorsement. Users access these sites at their own risk.
            </p>
          </div>

          {/* Section 9 */}
          <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 mb-10">
            <h2 className="font-heading font-bold text-[#0F1B3D] text-[24px] md:text-[32px] mb-4">
              9. Modifications to Terms
            </h2>
            <p className="font-sans text-[#5F6B7A] text-base md:text-lg leading-relaxed">
              We reserve the right to modify these Terms of Use at any time without prior notice. Any changes will be effective immediately upon posting on this page. Your continued use of the website after any modifications constitutes acceptance of the updated terms.
            </p>
          </div>

          {/* Section 10 */}
          <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 mb-10">
            <h2 className="font-heading font-bold text-[#0F1B3D] text-[24px] md:text-[32px] mb-4">
              10. Termination
            </h2>
            <p className="font-sans text-[#5F6B7A] text-base md:text-lg leading-relaxed">
              We reserve the right to refuse service, terminate accounts, or restrict access to the website at our sole discretion, without notice, for conduct that we believe violates these Terms of Use or is harmful to other users, us, or third parties. We shall not be liable for any termination of your access to the website.
            </p>
          </div>

          {/* Section 11 */}
          <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 mb-10">
            <h2 className="font-heading font-bold text-[#0F1B3D] text-[24px] md:text-[32px] mb-4">
              11. Governing Law
            </h2>
            <p className="font-sans text-[#5F6B7A] text-base md:text-lg leading-relaxed">
              These Terms of Use shall be governed by and construed in accordance with the laws of the Republic of Korea. Any disputes arising from or related to these terms or your use of this website shall be subject to the exclusive jurisdiction of the courts of South Korea.
            </p>
          </div>

          {/* Section 12 */}
          <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 mb-10">
            <h2 className="font-heading font-bold text-[#0F1B3D] text-[24px] md:text-[32px] mb-4">
              12. Contact for Legal Inquiries
            </h2>
            <p className="font-sans text-[#5F6B7A] text-base md:text-lg leading-relaxed mb-4">
              For any questions regarding these Terms of Use, please contact:
            </p>
            <div className="bg-[#FFFDF5] border border-[#E8ECF1] rounded-2xl p-6">
              <p className="font-sans text-[#0F1B3D] font-semibold text-lg mb-2">NOLJAKEDU CO., LTD</p>
              <p className="font-sans text-[#5F6B7A] text-base leading-relaxed">
                CEO: YUN JUNG WHAN<br />
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
