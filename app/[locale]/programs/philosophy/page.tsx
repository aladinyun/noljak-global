"use client"

import { useEffect } from "react"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Cpu, Sparkles } from "lucide-react"
import { useTranslations } from "next-intl"

export default function PhilosophyPage() {
  const t = useTranslations("philosophyPage")

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
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    )

    document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const quotes = [
    t("quote1"),
    t("quote2"),
    t("quote3"),
    t("quote4"),
  ]

  return (
    <main className="min-h-screen">

      {/* Section 1: Hero — Founder */}
      <section className="bg-[#0F1B3D] py-24 md:py-32">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

            {/* Left: Founder photo */}
            <div className="fade-up opacity-0 translate-y-4 transition-all duration-500">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/founder-jangsunkyung-1.jpg"
                alt="Jang Sun-kyung, Founder and Director of Noljak"
                className="w-full object-cover"
                style={{ height: "600px", borderRadius: "24px", objectPosition: "center center" }}
              />
            </div>

            {/* Right: Bio + Quotes */}
            <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-150 flex flex-col">
              <p className="font-sans font-bold uppercase text-[13px]" style={{ color: "#F6C400", letterSpacing: "0.15em" }}>
                {t("founderLabel")}
              </p>
              <h1 className="font-heading font-bold text-white mt-3" style={{ fontSize: "48px" }}>
                {t("founderName")}
              </h1>
              <p className="font-sans mt-2 text-[18px]" style={{ color: "#94A3B8" }}>
                {t("founderTitle")}
              </p>
              <div className="bg-[#F6C400] h-[3px] w-[60px] my-6 rounded-full" />
              <p className="font-sans text-[16px] leading-relaxed mb-8" style={{ color: "#94A3B8" }}>
                {t("founderDesc")}
              </p>

              {/* Quote cards */}
              <div className="flex flex-col gap-4">
                {quotes.map((quote, i) => (
                  <div key={i} className="border-l-2 border-[#F6C400] pl-4">
                    <p className="font-sans italic text-white text-[15px] leading-relaxed">
                      &ldquo;{quote}&rdquo;
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Section 2: Golden Time */}
      <section className="bg-white py-20 md:py-[120px]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Text */}
            <div>
              <p className="fade-up opacity-0 translate-y-4 transition-all duration-500 uppercase text-[#F6C400] text-[13px] tracking-[0.15em] font-semibold mb-4">
                {t("goldenTimeLabel")}
              </p>
              <h2 className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-100 font-heading font-bold text-[#0F1B3D] text-[28px] md:text-[44px] leading-tight mb-6">
                {t("goldenTimeTitle")}
              </h2>
              <p className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-150 font-sans text-[#5F6B7A] text-base md:text-lg leading-relaxed">
                {t("goldenTimeDesc")}
              </p>
            </div>
            {/* Right: Image */}
            <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-200 flex justify-center lg:justify-end">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/golden-time-1.png"
                alt="Golden Time illustration"
                style={{ width: "300px" }}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Thinking Observation */}
      <section className="bg-[#FFFDF5] py-20 md:py-[120px]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left: Image */}
            <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 flex justify-center lg:justify-start">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/golden-time-2.png"
                alt="Thinking Observation illustration"
                style={{ width: "300px" }}
                className="object-contain"
              />
            </div>
            {/* Right: Text */}
            <div>
              <p className="fade-up opacity-0 translate-y-4 transition-all duration-500 uppercase text-[#5BB7E8] text-[13px] tracking-[0.15em] font-semibold mb-4">
                {t("thinkingObsLabel")}
              </p>
              <h2 className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-100 font-heading font-bold text-[#0F1B3D] text-[28px] md:text-[44px] leading-tight mb-6">
                {t("thinkingObsTitle")}
              </h2>
              <p className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-150 font-sans text-[#5F6B7A] text-base md:text-lg leading-relaxed mb-8">
                {t("thinkingObsDesc")}
              </p>
              <blockquote className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-200 border-l-[3px] border-[#F6C400] pl-6">
                <p className="font-sans italic text-[#5F6B7A] text-lg">
                  정교한 관찰은 깊은 생각으로 이어집니다.
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Creative Expression */}
      <section className="bg-white py-20 md:py-[120px]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left: Text */}
            <div>
              <p className="fade-up opacity-0 translate-y-4 transition-all duration-500 uppercase text-[#FF8A65] text-[13px] tracking-[0.15em] font-semibold mb-4">
                {t("creativeExprLabel")}
              </p>
              <h2 className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-100 font-heading font-bold text-[#0F1B3D] text-[28px] md:text-[44px] leading-tight mb-6">
                {t("creativeExprTitle")}
              </h2>
              <p className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-150 font-sans text-[#5F6B7A] text-base md:text-lg leading-relaxed mb-8">
                {t("creativeExprDesc")}
              </p>
              <blockquote className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-200 border-l-[3px] border-[#FF8A65] pl-6">
                <p className="font-sans italic text-[#5F6B7A] text-lg">
                  깊은 생각은 풍성한 표현으로 완성됩니다.
                </p>
              </blockquote>
            </div>
            {/* Right: Image */}
            <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-100 flex justify-center lg:justify-end order-first lg:order-last">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/golden-time-3.png"
                alt="Creative Expression illustration"
                style={{ width: "300px" }}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Learning Model */}
      <section className="bg-[#0F1B3D] py-20 md:py-[120px]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <p className="fade-up opacity-0 translate-y-4 transition-all duration-500 uppercase text-[#F6C400] text-[13px] tracking-[0.15em] font-semibold mb-4">
              {t("learningEngineLabel")}
            </p>
            <h2 className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-100 font-heading font-bold text-white text-[28px] md:text-[44px] leading-tight">
              {t("learningEngineTitle")}
            </h2>
          </div>

          {/* 4-step cycle */}
          <div className="relative">
            {/* Desktop: horizontal layout */}
            <div className="hidden md:flex items-center justify-between gap-4">
              <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-150 flex-1 bg-white/5 rounded-xl p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <circle cx="24" cy="24" r="12" stroke="#F6C400" strokeWidth="3" />
                    <circle cx="24" cy="24" r="5" fill="#F6C400" />
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-[#F6C400] text-lg mb-2">{t("step1Title")}</h3>
                <p className="font-sans text-white/70 text-sm">{t("step1Desc")}</p>
              </div>

              <div className="text-white/30">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M14 7l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-200 flex-1 bg-white/5 rounded-xl p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <path d="M24 8v6M24 34v6M14 14l4 4M30 30l4 4M8 24h6M34 24h6M14 34l4-4M30 14l4-4" stroke="#5BB7E8" strokeWidth="3" strokeLinecap="round" />
                    <circle cx="24" cy="24" r="8" fill="#5BB7E8" fillOpacity="0.3" stroke="#5BB7E8" strokeWidth="2" />
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-[#5BB7E8] text-lg mb-2">{t("step2Title")}</h3>
                <p className="font-sans text-white/70 text-sm">{t("step2Desc")}</p>
              </div>

              <div className="text-white/30">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M14 7l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-[250ms] flex-1 bg-white/5 rounded-xl p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <path d="M14 38L34 10" stroke="#FF8A65" strokeWidth="4" strokeLinecap="round" />
                    <path d="M32 8l4 4-2 2-4-4 2-2z" fill="#FF8A65" />
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-[#FF8A65] text-lg mb-2">{t("step3Title")}</h3>
                <p className="font-sans text-white/70 text-sm">{t("step3Desc")}</p>
              </div>

              <div className="text-white/30">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M14 7l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-300 flex-1 bg-white/5 rounded-xl p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <circle cx="24" cy="24" r="12" stroke="#F6C400" strokeWidth="3" />
                    <circle cx="24" cy="24" r="5" fill="#F6C400" />
                    <path d="M36 12l4-4M40 16l-4-4M32 8l4 4" stroke="#F6C400" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-[#F6C400] text-lg mb-2">{t("step4Title")}</h3>
                <p className="font-sans text-white/70 text-sm">{t("step4Desc")}</p>
              </div>
            </div>

            {/* Mobile: vertical layout */}
            <div className="md:hidden flex flex-col gap-6">
              <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-150 bg-white/5 rounded-xl p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <circle cx="24" cy="24" r="12" stroke="#F6C400" strokeWidth="3" />
                    <circle cx="24" cy="24" r="5" fill="#F6C400" />
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-[#F6C400] text-lg mb-2">{t("step1Title")}</h3>
                <p className="font-sans text-white/70 text-sm">{t("step1Desc")}</p>
              </div>

              <div className="text-white/30 flex justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 5v14M7 14l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-200 bg-white/5 rounded-xl p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <path d="M24 8v6M24 34v6M14 14l4 4M30 30l4 4M8 24h6M34 24h6M14 34l4-4M30 14l4-4" stroke="#5BB7E8" strokeWidth="3" strokeLinecap="round" />
                    <circle cx="24" cy="24" r="8" fill="#5BB7E8" fillOpacity="0.3" stroke="#5BB7E8" strokeWidth="2" />
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-[#5BB7E8] text-lg mb-2">{t("step2Title")}</h3>
                <p className="font-sans text-white/70 text-sm">{t("step2Desc")}</p>
              </div>

              <div className="text-white/30 flex justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 5v14M7 14l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-[250ms] bg-white/5 rounded-xl p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <path d="M14 38L34 10" stroke="#FF8A65" strokeWidth="4" strokeLinecap="round" />
                    <path d="M32 8l4 4-2 2-4-4 2-2z" fill="#FF8A65" />
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-[#FF8A65] text-lg mb-2">{t("step3Title")}</h3>
                <p className="font-sans text-white/70 text-sm">{t("step3Desc")}</p>
              </div>

              <div className="text-white/30 flex justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 5v14M7 14l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-300 bg-white/5 rounded-xl p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <circle cx="24" cy="24" r="12" stroke="#F6C400" strokeWidth="3" />
                    <circle cx="24" cy="24" r="5" fill="#F6C400" />
                    <path d="M36 12l4-4M40 16l-4-4M32 8l4 4" stroke="#F6C400" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-[#F6C400] text-lg mb-2">{t("step4Title")}</h3>
                <p className="font-sans text-white/70 text-sm">{t("step4Desc")}</p>
              </div>
            </div>

            <p className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-[350ms] text-center text-white/50 text-sm mt-8 font-sans">
              {t("cycleNote")}
            </p>
          </div>
        </div>
      </section>

      {/* Section 6: AI vs Human Experience */}
      <section className="bg-[#FFFDF5] py-20 md:py-[120px]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left: Text */}
            <div>
              <p className="fade-up opacity-0 translate-y-4 transition-all duration-500 uppercase text-[#5BB7E8] text-[13px] tracking-[0.15em] font-semibold mb-4">
                {t("aiLabel")}
              </p>
              <h2 className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-100 font-heading font-bold text-[#0F1B3D] text-[28px] md:text-[44px] leading-tight mb-6">
                {t("aiTitle")}
              </h2>
              <p className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-150 font-sans text-[#5F6B7A] text-base md:text-lg leading-relaxed">
                {t("aiDesc")}
              </p>
            </div>
            {/* Right: Comparison cards */}
            <div className="flex flex-col gap-6 mt-[calc(1rem+1.75rem+1.5rem)]">
              <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-200 bg-[#E8ECF1] rounded-xl p-8">
                <div className="flex items-center gap-2 mb-3">
                  <Cpu size={24} color="#5F6B7A" />
                  <p className="font-sans text-[#5F6B7A] text-sm font-semibold">{t("aiCardTitle")}</p>
                </div>
                <p className="font-sans text-[#0F1B3D] text-lg">
                  {t("aiCardDesc")}
                </p>
              </div>
              <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-[250ms] bg-[#F6C400] rounded-xl p-8">
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles size={24} color="#0F1B3D" />
                  <p className="font-heading font-bold text-[#0F1B3D] text-sm">{t("childCardTitle")}</p>
                </div>
                <p className="font-sans text-[#0F1B3D] text-lg">
                  {t("childCardDesc")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: CTA */}
      <section className="bg-[#0F1B3D] py-20 md:py-[120px]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 text-center">
          <h2 className="fade-up opacity-0 translate-y-4 transition-all duration-500 font-heading font-bold text-white text-[28px] md:text-[44px] leading-tight mb-10">
            {t("ctaTitle")}
          </h2>
          <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-150 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/programs/crekic"
              className="inline-block bg-[#F6C400] text-[#0F1B3D] font-bold text-base px-8 py-4 rounded-full hover:bg-[#0F1B3D] hover:text-[#F6C400] transition-all duration-300 border-2 border-[#F6C400]"
            >
              {t("ctaBtn1")}
            </Link>
            <Link
              href="/now-noljak"
              className="inline-block bg-transparent text-white font-bold text-base px-8 py-4 rounded-full border-2 border-white hover:bg-white hover:text-[#0F1B3D] transition-all duration-300"
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
