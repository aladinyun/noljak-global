"use client"

import { useEffect } from "react"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { useTranslations } from "next-intl"

export default function CreKiCPage() {
  const t = useTranslations("crekicPage")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "translate-y-4")
            observer.unobserve(entry.target)
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

      {/* Section 1: Hero */}
      <section className="min-h-[70vh] bg-[#F6C400] flex flex-col items-center justify-center relative overflow-hidden py-20 pt-[80px]">
        <div className="text-center z-10 px-4">
          <p className="fade-up opacity-0 translate-y-4 transition-all duration-500 uppercase text-[#0F1B3D] text-[13px] tracking-[0.15em] mb-6">
            {t("courseLabel")}
          </p>
          <h1 className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-100 font-heading font-bold text-[#0F1B3D] text-[36px] md:text-[64px] leading-tight max-w-[900px] mx-auto mb-6">
            {t("heroTitle")}
          </h1>
          <p className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-200 font-sans text-[#0F1B3D] text-[20px] md:text-[24px]">
            {t("heroSub")}
          </p>
        </div>
        {/* Watermark */}
        <p className="absolute bottom-8 left-1/2 -translate-x-1/2 font-heading font-bold text-[100px] md:text-[200px] text-[#0F1B3D] opacity-[0.08] select-none whitespace-nowrap">
          CreKiC
        </p>
      </section>

      {/* Section 2: What is CreKiC */}
      <section className="bg-white py-20 md:py-[120px]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left: Text */}
            <div>
              <p className="fade-up opacity-0 translate-y-4 transition-all duration-500 uppercase text-[#F6C400] text-[13px] tracking-[0.15em] mb-4">
                {t("whatLabel")}
              </p>
              <h2 className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-100 font-heading font-bold text-[#0F1B3D] text-[28px] md:text-[44px] leading-tight mb-6">
                {t("whatTitle")}
              </h2>
              <p className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-150 font-sans text-[#5F6B7A] text-base md:text-lg leading-relaxed">
                {t("whatDesc")}
              </p>
            </div>

            {/* Right: 3 Badge Cards */}
            <div className="flex flex-col gap-4">
              <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-200 bg-[#F6C400] rounded-full py-5 px-10 text-center">
                <span className="font-heading font-bold text-[#0F1B3D] text-[24px]">{t("badge1Name")}</span>
                <span className="font-sans text-[#0F1B3D] text-[14px] ml-2">{t("badge1Sub")}</span>
              </div>
              <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-[250ms] bg-[#5BB7E8] rounded-full py-5 px-10 text-center">
                <span className="font-heading font-bold text-white text-[24px]">{t("badge2Name")}</span>
                <span className="font-sans text-white text-[14px] ml-2">{t("badge2Sub")}</span>
              </div>
              <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-300 bg-[#FF8A65] rounded-full py-5 px-10 text-center">
                <span className="font-heading font-bold text-white text-[24px]">{t("badge3Name")}</span>
                <span className="font-sans text-white text-[14px] ml-2">{t("badge3Sub")}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Monthly Curriculum */}
      <section className="bg-[#FFFDF5] py-20 md:py-[120px]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <p className="fade-up opacity-0 translate-y-4 transition-all duration-500 uppercase text-[#F6C400] text-[13px] tracking-[0.15em] mb-4">
              {t("monthlyLabel")}
            </p>
            <h2 className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-100 font-heading font-bold text-[#0F1B3D] text-[28px] md:text-[44px] leading-tight">
              {t("monthlyTitle")}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-150 bg-white rounded-2xl p-8 shadow-sm border-t-4 border-[#F6C400]">
              <p className="text-[#F6C400] text-[13px] uppercase tracking-wider mb-2">{t("week1Label")}</p>
              <h3 className="font-heading font-bold text-[#0F1B3D] text-xl mb-3">{t("week1Title")}</h3>
              <p className="font-sans text-[#5F6B7A] text-sm leading-relaxed">{t("week1Desc")}</p>
            </div>

            <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-200 bg-white rounded-2xl p-8 shadow-sm border-t-4 border-[#5BB7E8]">
              <p className="text-[#5BB7E8] text-[13px] uppercase tracking-wider mb-2">{t("week2Label")}</p>
              <h3 className="font-heading font-bold text-[#0F1B3D] text-xl mb-3">{t("week2Title")}</h3>
              <p className="font-sans text-[#5F6B7A] text-sm leading-relaxed">{t("week2Desc")}</p>
            </div>

            <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-[250ms] bg-white rounded-2xl p-8 shadow-sm border-t-4 border-[#FF8A65]">
              <p className="text-[#FF8A65] text-[13px] uppercase tracking-wider mb-2">{t("week3Label")}</p>
              <h3 className="font-heading font-bold text-[#0F1B3D] text-xl mb-3">{t("week3Title")}</h3>
              <p className="font-sans text-[#5F6B7A] text-sm leading-relaxed">{t("week3Desc")}</p>
            </div>

            <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-300 bg-white rounded-2xl p-8 shadow-sm border-t-4 border-[#F6C400]">
              <p className="text-[#F6C400] text-[13px] uppercase tracking-wider mb-2">{t("week4Label")}</p>
              <h3 className="font-heading font-bold text-[#0F1B3D] text-xl mb-3">{t("week4Title")}</h3>
              <p className="font-sans text-[#5F6B7A] text-sm leading-relaxed">{t("week4Desc")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Teaching Model (E.P.E) */}
      <section className="bg-[#0F1B3D] py-20 md:py-[120px]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <p className="fade-up opacity-0 translate-y-4 transition-all duration-500 uppercase text-[#F6C400] text-[13px] tracking-[0.15em] mb-4">
              {t("epeLabel")}
            </p>
            <h2 className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-100 font-heading font-bold text-white text-[28px] md:text-[44px] leading-tight">
              {t("epeTitle")}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-150 bg-white/5 rounded-2xl p-10 text-center">
              <p className="font-heading font-bold text-[#F6C400] text-[80px] leading-none mb-4">E</p>
              <h3 className="font-heading font-bold text-white text-[24px] mb-3">{t("engageTitle")}</h3>
              <p className="font-sans text-white text-base leading-relaxed">{t("engageDesc")}</p>
            </div>

            <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-200 bg-white/5 rounded-2xl p-10 text-center">
              <p className="font-heading font-bold text-[#5BB7E8] text-[80px] leading-none mb-4">P</p>
              <h3 className="font-heading font-bold text-white text-[24px] mb-3">{t("performTitle")}</h3>
              <p className="font-sans text-white text-base leading-relaxed">{t("performDesc")}</p>
            </div>

            <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-[250ms] bg-white/5 rounded-2xl p-10 text-center">
              <p className="font-heading font-bold text-[#FF8A65] text-[80px] leading-none mb-4">E</p>
              <h3 className="font-heading font-bold text-white text-[24px] mb-3">{t("expressTitle")}</h3>
              <p className="font-sans text-white text-base leading-relaxed">{t("expressDesc")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Key Tool */}
      <section className="bg-[#FFFDF5] py-20 md:py-[120px]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Text */}
            <div>
              <p className="fade-up opacity-0 translate-y-4 transition-all duration-500 uppercase text-[#F6C400] text-[13px] tracking-[0.15em] mb-4">
                {t("keyToolLabel")}
              </p>
              <h2 className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-100 font-heading font-bold text-[#0F1B3D] text-[28px] md:text-[44px] leading-tight mb-6">
                {t("keyToolTitle")}
              </h2>
              <p className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-150 font-sans text-[#5F6B7A] text-base md:text-lg leading-relaxed mb-6">
                {t("keyToolDesc")}
              </p>
              <span className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-200 inline-block bg-[#F6C400] text-[#0F1B3D] font-bold text-[13px] px-4 py-2 rounded-full">
                {t("keyToolBadge")}
              </span>
            </div>

            {/* Right: SVG Illustration */}
            <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-[250ms] flex justify-center">
              <svg viewBox="0 0 400 300" className="w-full max-w-[400px]" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="50" y="30" width="300" height="220" rx="16" fill="#FFFFFF" stroke="#E8ECF1" strokeWidth="2" />
                <rect x="70" y="50" width="260" height="180" rx="8" fill="#FFFDF5" />
                <circle cx="120" cy="100" r="25" fill="#F6C400" opacity="0.8" />
                <circle cx="180" cy="140" r="18" fill="#5BB7E8" opacity="0.8" />
                <rect x="220" y="90" width="60" height="40" rx="8" fill="#FF8A65" opacity="0.8" />
                <path d="M100 180 Q150 150 200 170 T300 160" stroke="#F6C400" strokeWidth="4" strokeLinecap="round" fill="none" />
                <path d="M90 200 Q140 180 190 195" stroke="#5BB7E8" strokeWidth="3" strokeLinecap="round" fill="none" />
                <circle cx="280" cy="180" r="8" fill="#FF8A65" />
                <circle cx="260" cy="200" r="5" fill="#F6C400" />
                <circle cx="300" cy="195" r="6" fill="#5BB7E8" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Environment */}
      <section className="bg-white py-20 md:py-[120px]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <h2 className="fade-up opacity-0 translate-y-4 transition-all duration-500 font-heading font-bold text-[#0F1B3D] text-[28px] md:text-[44px] leading-tight text-center mb-16">
            {t("envTitle")}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-100 bg-[#FFFDF5] rounded-2xl p-10">
              <div className="w-16 h-16 mb-6">
                <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="8" y="20" width="48" height="36" rx="4" stroke="#F6C400" strokeWidth="3" />
                  <path d="M32 8L8 20h48L32 8z" stroke="#F6C400" strokeWidth="3" strokeLinejoin="round" />
                  <rect x="26" y="36" width="12" height="20" rx="2" stroke="#F6C400" strokeWidth="3" />
                </svg>
              </div>
              <h3 className="font-heading font-bold text-[#0F1B3D] text-[24px] mb-4">{t("generalTitle")}</h3>
              <p className="font-sans text-[#5F6B7A] text-base leading-relaxed">{t("generalDesc")}</p>
            </div>

            <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-150 bg-[#0F1B3D] rounded-2xl p-10">
              <div className="w-16 h-16 mb-6">
                <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M32 8l6 12 14 2-10 10 2 14-12-6-12 6 2-14-10-10 14-2 6-12z" stroke="#F6C400" strokeWidth="3" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="font-heading font-bold text-white text-[24px] mb-4">{t("performClassTitle")}</h3>
              <p className="font-sans text-white/80 text-base leading-relaxed">{t("performClassDesc")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: CTA */}
      <section className="bg-[#F6C400] py-20 md:py-[120px]">
        <div className="max-w-[800px] mx-auto px-4 md:px-8 text-center">
          <h2 className="fade-up opacity-0 translate-y-4 transition-all duration-500 font-heading font-bold text-[#0F1B3D] text-[28px] md:text-[44px] leading-tight mb-10">
            {t("ctaTitle")}
          </h2>
          <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-100 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/global-business"
              className="inline-block bg-[#0F1B3D] text-white font-bold text-base px-8 py-4 rounded-full hover:bg-white hover:text-[#0F1B3D] transition-all duration-300"
            >
              {t("ctaBtn1")}
            </Link>
            <Link
              href="/find-center"
              className="inline-block border-2 border-[#0F1B3D] text-[#0F1B3D] font-bold text-base px-8 py-4 rounded-full hover:bg-[#0F1B3D] hover:text-white transition-all duration-300"
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
