"use client"

import { useEffect } from "react"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { useTranslations } from "next-intl"

export default function CreatorPage() {
  const t = useTranslations("creatorPage")

  const imaginationTools = [
    { number: "01", title: t("tool1Title"), description: t("tool1Desc") },
    { number: "02", title: t("tool2Title"), description: t("tool2Desc") },
    { number: "03", title: t("tool3Title"), description: t("tool3Desc") },
    { number: "04", title: t("tool4Title"), description: t("tool4Desc") },
    { number: "05", title: t("tool5Title"), description: t("tool5Desc") },
    { number: "06", title: t("tool6Title"), description: t("tool6Desc") },
    { number: "07", title: t("tool7Title"), description: t("tool7Desc") },
    { number: "08", title: t("tool8Title"), description: t("tool8Desc") },
    { number: "09", title: t("tool9Title"), description: t("tool9Desc") },
  ]

  const designSteps = [
    { number: "01", title: t("design1Title"), description: t("design1Desc") },
    { number: "02", title: t("design2Title"), description: t("design2Desc") },
    { number: "03", title: t("design3Title"), description: t("design3Desc") },
    { number: "04", title: t("design4Title"), description: t("design4Desc") },
  ]

  const caseStudySteps = [
    { icon: "eye", title: t("case1Title"), color: "#F6C400", description: t("case1Desc") },
    { icon: "lightbulb", title: t("case2Title"), color: "#5BB7E8", description: t("case2Desc") },
    { icon: "pencil", title: t("case3Title"), color: "#FF8A65", description: t("case3Desc") },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "translate-y-4")
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    )

    document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <main className="min-h-screen bg-white">

      {/* Section 1: Hero */}
      <section className="relative min-h-[70vh] bg-[#FF8A65] flex flex-col items-center justify-center px-4 overflow-hidden pt-[80px]">
        <div className="text-center z-10">
          <p className="fade-up opacity-0 translate-y-4 transition-all duration-500 uppercase text-[#0F1B3D] text-[13px] tracking-[0.15em] mb-4">
            {t("courseLabel")}
          </p>
          <h1 className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-100 font-heading font-bold text-[#0F1B3D] text-[36px] md:text-[64px] leading-tight mb-6">
            {t("heroTitle")}
          </h1>
          <p className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-150 font-sans text-[#0F1B3D] text-lg md:text-[24px]">
            {t("heroSub")}
          </p>
        </div>
        {/* Watermark */}
        <p className="absolute bottom-8 left-1/2 -translate-x-1/2 font-heading font-bold text-[100px] md:text-[200px] text-[#0F1B3D] opacity-[0.08] whitespace-nowrap pointer-events-none">
          Creator
        </p>
      </section>

      {/* Section 2: What is Creator */}
      <section className="bg-white py-20 md:py-[120px]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left: Text */}
            <div className="fade-up opacity-0 translate-y-4 transition-all duration-500">
              <p className="uppercase text-[#FF8A65] text-[13px] tracking-[0.1em] mb-4">
                {t("whatLabel")}
              </p>
              <h2 className="font-heading font-bold text-[#0F1B3D] text-[28px] md:text-[44px] leading-tight mb-6">
                {t("whatTitle")}
              </h2>
              <p className="font-sans text-[#5F6B7A] text-base md:text-lg leading-relaxed">
                {t("whatDesc")}
              </p>
            </div>

            {/* Right: Quote */}
            <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-150">
              <span className="font-heading text-[#FF8A65] text-[120px] leading-none block -mb-8">&ldquo;</span>
              <p className="font-sans italic text-[#0F1B3D] text-xl md:text-[24px] leading-relaxed">
                {t("whatQuote")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Design Thinking Process */}
      <section className="bg-[#FFFDF5] py-20 md:py-[120px]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <p className="fade-up opacity-0 translate-y-4 transition-all duration-500 uppercase text-[#FF8A65] text-[13px] tracking-[0.1em] mb-4">
              {t("designLabel")}
            </p>
            <h2 className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-100 font-heading font-bold text-[#0F1B3D] text-[28px] md:text-[44px] leading-tight">
              {t("designTitle")}
            </h2>
          </div>

          {/* 4-step timeline */}
          <div className="relative">
            <div className="hidden lg:block absolute top-[60px] left-[10%] right-[10%] h-[2px] bg-[#E8ECF1]" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {designSteps.map((step, index) => (
                <div
                  key={step.number}
                  className="fade-up opacity-0 translate-y-4 transition-all duration-500"
                  style={{ transitionDelay: `${150 + index * 50}ms` }}
                >
                  <div className="bg-white rounded-xl p-8 relative border-t-4 border-[#FF8A65]">
                    <span className="font-heading font-bold text-[#FF8A65] text-[32px] mb-4 block">
                      {step.number}
                    </span>
                    <h3 className="font-heading font-bold text-[#0F1B3D] text-lg mb-3">
                      {step.title}
                    </h3>
                    <p className="font-sans text-[#5F6B7A] text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: 9 Imagination Tools */}
      <section className="bg-white py-20 md:py-[120px]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center mb-16 max-w-[800px] mx-auto">
            <p className="fade-up opacity-0 translate-y-4 transition-all duration-500 uppercase text-[#FF8A65] text-[13px] tracking-[0.1em] mb-4">
              {t("toolsLabel")}
            </p>
            <h2 className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-100 font-heading font-bold text-[#0F1B3D] text-[28px] md:text-[44px] leading-tight mb-6">
              {t("toolsTitle")}
            </h2>
            <p className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-150 font-sans text-[#5F6B7A] text-base md:text-lg leading-relaxed">
              {t("toolsDesc")}
            </p>
          </div>

          {/* 3x3 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {imaginationTools.map((tool, index) => (
              <div
                key={tool.number}
                className="fade-up opacity-0 translate-y-4 transition-all duration-500 bg-[#FFFDF5] rounded-xl p-6 hover:bg-[#FF8A65]/10 hover:border hover:border-[#FF8A65] border border-transparent cursor-default"
                style={{ transitionDelay: `${150 + index * 30}ms` }}
              >
                <span className="font-heading font-bold text-[#FF8A65] text-[13px] mb-3 block">
                  {tool.number}
                </span>
                <h3 className="font-heading font-bold text-[#0F1B3D] text-base mb-2">
                  {tool.title}
                </h3>
                <p className="font-sans text-[#5F6B7A] text-sm leading-relaxed">
                  {tool.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Case Study */}
      <section className="bg-[#0F1B3D] py-20 md:py-[120px]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <p className="fade-up opacity-0 translate-y-4 transition-all duration-500 uppercase text-[#F6C400] text-[13px] tracking-[0.1em] mb-4">
              {t("caseLabel")}
            </p>
            <h2 className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-100 font-heading font-bold text-white text-[28px] md:text-[44px] leading-tight mb-4">
              {t("caseTitle")}
            </h2>
            <p className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-150 font-sans text-[#5F6B7A] text-base md:text-lg">
              {t("caseDesc")}
            </p>
          </div>

          {/* 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudySteps.map((step, index) => (
              <div
                key={step.icon}
                className="fade-up opacity-0 translate-y-4 transition-all duration-500 bg-white/5 rounded-2xl p-10"
                style={{ transitionDelay: `${200 + index * 100}ms` }}
              >
                {/* Icon */}
                <div className="w-12 h-12 mb-6">
                  {step.icon === "eye" && (
                    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M24 12C14 12 6 24 6 24s8 12 18 12 18-12 18-12-8-12-18-12z" stroke={step.color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                      <circle cx="24" cy="24" r="6" stroke={step.color} strokeWidth="3" />
                    </svg>
                  )}
                  {step.icon === "lightbulb" && (
                    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M24 6v4M10 24H6M42 24h-4M12.2 12.2l2.8 2.8M35.8 12.2l-2.8 2.8" stroke={step.color} strokeWidth="3" strokeLinecap="round" />
                      <path d="M18 38h12M19 42h10" stroke={step.color} strokeWidth="3" strokeLinecap="round" />
                      <path d="M30 38V30a6 6 0 10-12 0v8" stroke={step.color} strokeWidth="3" />
                      <circle cx="24" cy="22" r="8" stroke={step.color} strokeWidth="3" />
                    </svg>
                  )}
                  {step.icon === "pencil" && (
                    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 40l4-16L36 8l4 4-24 24-8 4z" stroke={step.color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M28 16l4 4" stroke={step.color} strokeWidth="3" strokeLinecap="round" />
                    </svg>
                  )}
                </div>
                <h3 className="font-heading font-bold text-lg mb-3" style={{ color: step.color }}>
                  {step.title}
                </h3>
                <p className="font-sans text-white/80 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Environment */}
      <section className="bg-[#FFFDF5] py-20 md:py-[120px]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Text */}
            <div className="fade-up opacity-0 translate-y-4 transition-all duration-500">
              <p className="uppercase text-[#FF8A65] text-[13px] tracking-[0.1em] mb-4">
                {t("atelierLabel")}
              </p>
              <h2 className="font-heading font-bold text-[#0F1B3D] text-[28px] md:text-[44px] leading-tight mb-6">
                {t("atelierTitle")}
              </h2>
              <p className="font-sans text-[#5F6B7A] text-base md:text-lg leading-relaxed mb-8">
                {t("atelierDesc")}
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-[#FF8A65]" />
                  <span className="font-sans text-[#0F1B3D] text-base">{t("atelierBullet1")}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-[#FF8A65]" />
                  <span className="font-sans text-[#0F1B3D] text-base">{t("atelierBullet2")}</span>
                </div>
              </div>
            </div>

            {/* Right: SVG Illustration */}
            <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-150">
              <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                <rect x="0" y="250" width="400" height="50" fill="#E8ECF1" />
                <rect x="0" y="0" width="400" height="250" fill="#FFFFFF" />
                <rect x="30" y="40" width="60" height="80" rx="4" fill="#FFFDF5" stroke="#E8ECF1" strokeWidth="2" />
                <rect x="40" y="50" width="40" height="50" fill="#FF8A65" opacity="0.3" />
                <rect x="110" y="60" width="50" height="60" rx="4" fill="#FFFDF5" stroke="#E8ECF1" strokeWidth="2" />
                <rect x="118" y="68" width="34" height="36" fill="#5BB7E8" opacity="0.3" />
                <rect x="180" y="30" width="70" height="90" rx="4" fill="#FFFDF5" stroke="#E8ECF1" strokeWidth="2" />
                <rect x="190" y="40" width="50" height="60" fill="#F6C400" opacity="0.3" />
                <path d="M300 250 L320 150 L340 250" stroke="#0F1B3D" strokeWidth="3" />
                <rect x="295" y="140" width="50" height="70" fill="#FFFDF5" stroke="#0F1B3D" strokeWidth="2" />
                <rect x="305" y="150" width="30" height="40" fill="#FF8A65" opacity="0.5" />
                <rect x="50" y="200" width="120" height="50" rx="4" fill="#0F1B3D" opacity="0.1" />
                <rect x="60" y="180" width="100" height="20" rx="2" fill="#FFFDF5" stroke="#E8ECF1" strokeWidth="1" />
                <rect x="70" y="170" width="12" height="20" rx="2" fill="#FF8A65" />
                <rect x="90" y="170" width="12" height="20" rx="2" fill="#5BB7E8" />
                <rect x="110" y="170" width="12" height="20" rx="2" fill="#F6C400" />
                <rect x="130" y="170" width="12" height="20" rx="2" fill="#2D6A2D" />
                <ellipse cx="280" cy="220" rx="20" ry="8" fill="#E8ECF1" />
                <rect x="262" y="190" width="36" height="30" fill="#FFFDF5" stroke="#E8ECF1" strokeWidth="1" />
                <line x1="270" y1="190" x2="268" y2="160" stroke="#0F1B3D" strokeWidth="2" />
                <line x1="280" y1="190" x2="280" y2="155" stroke="#FF8A65" strokeWidth="2" />
                <line x1="290" y1="190" x2="292" y2="165" stroke="#5BB7E8" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: CTA */}
      <section className="bg-[#FF8A65] py-20 md:py-[120px]">
        <div className="max-w-[800px] mx-auto px-4 md:px-8 text-center">
          <h2 className="fade-up opacity-0 translate-y-4 transition-all duration-500 font-heading font-bold text-[#0F1B3D] text-[28px] md:text-[44px] leading-tight mb-10">
            {t("ctaTitle")}
          </h2>
          <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-150 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/global-business"
              className="inline-block px-8 py-4 bg-[#0F1B3D] text-white font-bold rounded-full hover:bg-white hover:text-[#0F1B3D] transition-all duration-300"
            >
              {t("ctaBtn1")}
            </Link>
            <Link
              href="/find-center"
              className="inline-block px-8 py-4 border-2 border-[#0F1B3D] text-[#0F1B3D] font-bold rounded-full hover:bg-[#0F1B3D] hover:text-white transition-all duration-300"
            >
              {t("ctaBtn2")}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
