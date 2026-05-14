"use client"

import { useEffect } from "react"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { useTranslations } from "next-intl"

export default function OthersPage() {
  const t = useTranslations("othersPage")

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

  const materials = [
    t("material1"),
    t("material2"),
    t("material3"),
    t("material4"),
    t("material5"),
    t("material6"),
  ]

  return (
    <main className="min-h-screen bg-white">

      {/* Section 1: Hero */}
      <section className="min-h-[60vh] bg-[#0F1B3D] flex items-center justify-center py-20 md:py-[120px] pt-[80px]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 text-center">
          <p className="fade-up opacity-0 translate-y-4 transition-all duration-500 uppercase text-[#F6C400] text-[13px] tracking-[0.15em] mb-6">
            {t("heroLabel")}
          </p>
          <h1 className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-100 font-heading font-bold text-white text-[36px] md:text-[64px] leading-tight mb-6">
            {t("heroTitle")}
          </h1>
          <p className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-200 font-sans text-[#5F6B7A] text-lg md:text-[20px] max-w-[680px] mx-auto leading-relaxed">
            {t("heroDesc")}
          </p>
        </div>
      </section>

      {/* Section 2: Noljak Creative Drawing */}
      <section className="bg-[#FFFDF5] py-20 md:py-[120px]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left: Text */}
            <div className="fade-up opacity-0 translate-y-4 transition-all duration-500">
              <p className="uppercase text-[#F6C400] text-[13px] tracking-[0.15em] mb-4">
                {t("drawingLabel")}
              </p>
              <h2 className="font-heading font-bold text-[#0F1B3D] text-[28px] md:text-[44px] leading-tight mb-6">
                {t("drawingTitle")}
              </h2>
              <p className="font-sans text-[#5F6B7A] text-base md:text-lg leading-relaxed mb-6">
                {t("drawingDesc")}
              </p>
              <span className="inline-block bg-[#F6C400] text-[#0F1B3D] font-bold text-[13px] px-4 py-1.5 rounded-full mb-6">
                {t("drawingAge")}
              </span>
              <div>
                <a
                  href="https://www.noljakmall.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans font-bold text-[#F6C400] hover:underline"
                >
                  {t("drawingLink")} →
                </a>
              </div>
            </div>

            {/* Right: 2 Cards stacked */}
            <div className="flex flex-col gap-6">
              <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-100 bg-white rounded-xl p-7 border-l-4 border-[#F6C400]">
                <h3 className="font-heading font-bold text-[#0F1B3D] text-[20px] mb-1">
                  {t("drawingBasicTitle")}
                </h3>
                <p className="font-sans text-[#5F6B7A] text-[13px] mb-4">
                  {t("drawingBasicAge")}
                </p>
                <p className="font-sans text-[#5F6B7A] text-sm leading-relaxed">
                  {t("drawingBasicDesc")}
                </p>
              </div>

              <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-200 bg-white rounded-xl p-7 border-l-4 border-[#5BB7E8]">
                <h3 className="font-heading font-bold text-[#0F1B3D] text-[20px] mb-1">
                  {t("drawingAdvTitle")}
                </h3>
                <p className="font-sans text-[#5F6B7A] text-[13px] mb-4">
                  {t("drawingAdvAge")}
                </p>
                <p className="font-sans text-[#5F6B7A] text-sm leading-relaxed">
                  {t("drawingAdvDesc")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Noljak Art Kit */}
      <section className="bg-white py-20 md:py-[120px]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          {/* Header */}
          <div className="text-center max-w-[800px] mx-auto mb-12">
            <p className="fade-up opacity-0 translate-y-4 transition-all duration-500 uppercase text-[#5BB7E8] text-[13px] tracking-[0.15em] mb-4">
              {t("kitLabel")}
            </p>
            <h2 className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-100 font-heading font-bold text-[#0F1B3D] text-[28px] md:text-[44px] leading-tight mb-6">
              {t("kitTitle")}
            </h2>
            <p className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-150 font-sans text-[#5F6B7A] text-base md:text-lg leading-relaxed mb-6">
              {t("kitDesc")}
            </p>
            <span className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-200 inline-block bg-[#5BB7E8] text-white font-bold text-[13px] px-4 py-1.5 rounded-full">
              {t("kitAge")}
            </span>
          </div>

          {/* 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-[250ms] bg-[#FFFDF5] rounded-xl p-7 border-t-4 border-[#F6C400]">
              <h3 className="font-heading font-bold text-[#0F1B3D] text-[18px] mb-3">
                {t("kit1Title")}
              </h3>
              <p className="font-sans text-[#5F6B7A] text-sm leading-relaxed">
                {t("kit1Desc")}
              </p>
            </div>

            <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-[300ms] bg-[#FFFDF5] rounded-xl p-7 border-t-4 border-[#5BB7E8]">
              <h3 className="font-heading font-bold text-[#0F1B3D] text-[18px] mb-3">
                {t("kit2Title")}
              </h3>
              <p className="font-sans text-[#5F6B7A] text-sm leading-relaxed">
                {t("kit2Desc")}
              </p>
            </div>

            <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-[350ms] bg-[#FFFDF5] rounded-xl p-7 border-t-4 border-[#FF8A65]">
              <h3 className="font-heading font-bold text-[#0F1B3D] text-[18px] mb-3">
                {t("kit3Title")}
              </h3>
              <p className="font-sans text-[#5F6B7A] text-sm leading-relaxed">
                {t("kit3Desc")}
              </p>
            </div>
          </div>

          {/* Link */}
          <div className="text-center">
            <a
              href="https://www.noljakmall.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans font-bold text-[#5BB7E8] hover:underline"
            >
              {t("kitLink")} →
            </a>
          </div>
        </div>
      </section>

      {/* Section 4: Noljak Craft Material Collection */}
      <section className="bg-[#FFFDF5] py-20 md:py-[120px]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left: Text */}
            <div className="fade-up opacity-0 translate-y-4 transition-all duration-500">
              <p className="uppercase text-[#FF8A65] text-[13px] tracking-[0.15em] mb-4">
                {t("craftLabel")}
              </p>
              <h2 className="font-heading font-bold text-[#0F1B3D] text-[28px] md:text-[44px] leading-tight mb-6">
                {t("craftTitle")}
              </h2>
              <p className="font-sans text-[#5F6B7A] text-base md:text-lg leading-relaxed mb-6">
                {t("craftDesc")}
              </p>
              <span className="inline-block bg-[#FF8A65] text-white font-bold text-[13px] px-4 py-1.5 rounded-full mb-6">
                {t("craftAge")}
              </span>
              <div>
                <a
                  href="https://www.noljakmall.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans font-bold text-[#FF8A65] hover:underline"
                >
                  {t("craftLink")} →
                </a>
              </div>
            </div>

            {/* Right: Material Tags Grid */}
            <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-150 grid grid-cols-2 md:grid-cols-3 gap-4">
              {materials.map((material, i) => (
                <div
                  key={i}
                  className="bg-white border border-[#E8ECF1] rounded-full px-6 py-3 text-center font-sans font-bold text-[#0F1B3D] text-[14px] hover:bg-[#FF8A65]/10 hover:border-[#FF8A65] hover:text-[#FF8A65] transition-all duration-300 cursor-pointer"
                >
                  {material}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: CTA */}
      <section className="bg-[#F6C400] py-20 md:py-[120px]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 text-center">
          <h2 className="fade-up opacity-0 translate-y-4 transition-all duration-500 font-heading font-bold text-[#0F1B3D] text-[28px] md:text-[44px] leading-tight mb-4">
            {t("ctaTitle")}
          </h2>
          <p className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-100 font-sans text-[#0F1B3D] text-base md:text-lg mb-10">
            {t("ctaDesc")}
          </p>
          <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-200 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/programs/crekic"
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
