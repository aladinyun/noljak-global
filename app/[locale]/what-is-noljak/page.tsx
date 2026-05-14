"use client"

import { useEffect, useRef } from "react"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { useTranslations } from "next-intl"

export default function WhatIsNoljak() {
  const t = useTranslations("whatIsNoljakPage")
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      { threshold: 0.1 }
    )
    const elements = document.querySelectorAll(".fade-up")
    elements.forEach((el) => observerRef.current?.observe(el))
    return () => observerRef.current?.disconnect()
  }, [])

  const cards = [
    { key: "card1", title: t("card1Title"), desc: t("card1Desc"), delay: "delay-150" },
    { key: "card2", title: t("card2Title"), desc: t("card2Desc"), delay: "delay-200" },
    { key: "card3", title: t("card3Title"), desc: t("card3Desc"), delay: "delay-[250ms]" },
    { key: "card4", title: t("card4Title"), desc: t("card4Desc"), delay: "delay-[300ms]" },
    { key: "card5", title: t("card5Title"), desc: t("card5Desc"), delay: "delay-[350ms]" },
    { key: "card6", title: t("card6Title"), desc: t("card6Desc"), delay: "delay-[400ms]" },
  ]

  const icons = [
    <svg key="1" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0F1B3D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 1 0 10 10" /><path d="M12 8v4l3 3" /></svg>,
    <svg key="2" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0F1B3D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20V10" /><path d="M18 20V4" /><path d="M6 20v-4" /></svg>,
    <svg key="3" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0F1B3D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 8v4l2 2" /></svg>,
    <svg key="4" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0F1B3D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M8 13s1.5 2 4 2 4-2 4-2" /><line x1="9" y1="9" x2="9.01" y2="9" /><line x1="15" y1="9" x2="15.01" y2="9" /></svg>,
    <svg key="5" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0F1B3D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8" /><path d="M12 17v4" /></svg>,
    <svg key="6" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0F1B3D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="6" width="20" height="12" rx="2" /><path d="M12 12h.01" /><path d="M17 12h.01" /><path d="M7 12h.01" /></svg>,
  ]

  return (
    <main className="min-h-screen bg-[#FFFDF5]">
      {/* Section 2: Intro */}
      <section className="bg-[#FFFDF5] pt-[200px] pb-[120px]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 flex flex-col gap-16">
          <h1 className="fade-up opacity-0 translate-y-4 transition-all duration-500 font-heading font-bold text-[#0F1B3D] text-[32px] md:text-[48px] leading-tight">
            {t("headline")}
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <div className="fade-up opacity-0 translate-y-4 transition-all duration-500">
              <Image src="/images/noljak_logo.png" alt="Noljak Logo" width={600} height={600} className="object-contain w-full" />
            </div>
            <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-150 flex flex-col gap-6">
              <div className="font-sans text-[#5F6B7A] text-[18px] leading-[1.8] flex flex-col gap-4">
                <p>{t("body1")}</p>
                <p>{t("body2")}</p>
              </div>
              <div className="font-sans text-[#9CA3AF] text-[14px] leading-relaxed flex flex-col gap-1 border-l-2 border-[#E5E7EB] pl-4">
                <p>{t("footnote1")}</p>
                <p>{t("footnote2")}</p>
              </div>
              <div className="grid grid-cols-2 gap-2 mt-6 max-w-lg">
                <span className="bg-[#F6C400] text-[#0F1B3D] text-[14px] font-bold px-8 py-3 rounded-full text-center">{t("tag1")}</span>
                <span className="bg-[#F6C400] text-[#0F1B3D] text-[14px] font-bold px-8 py-3 rounded-full text-center">{t("tag2")}</span>
                <span className="bg-[#F6C400] text-[#0F1B3D] text-[14px] font-bold px-8 py-3 rounded-full text-center">{t("tag3")}</span>
                <span className="bg-[#F6C400] text-[#0F1B3D] text-[14px] font-bold px-8 py-3 rounded-full text-center">{t("tag4")}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Why Art? */}
      <section className="bg-[#0F1B3D]">
        <div className="relative w-full" style={{ height: "500px" }}>
          <img src="/images/whatisnoljak-1.jpg" alt="Children engaging in creative art activities" className="w-full h-full object-cover" style={{ objectPosition: "center center" }} />
          <div className="absolute inset-0" style={{ background: "rgba(15,27,61,0.6)" }} />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-8 gap-6">
            <h2 className="font-heading font-bold text-white text-[28px] md:text-[48px] leading-tight max-w-[800px]">
              {t("whyArtHeadline")}
            </h2>
            <p className="font-sans text-[18px] leading-relaxed max-w-[640px]" style={{ color: "#CBD5E1" }}>
              {t("whyArtSub")}
            </p>
          </div>
        </div>
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cards.map((card, i) => (
              <div
                key={card.key}
                className={`fade-up opacity-0 translate-y-4 transition-all duration-300 ${card.delay} flex flex-col gap-4 p-8 rounded-2xl cursor-default`}
                style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)"
                  ;(e.currentTarget as HTMLDivElement).style.borderColor = "rgba(246,196,0,0.4)"
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)"
                  ;(e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.1)"
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "#F6C400" }}>
                    {icons[i]}
                  </div>
                  <h3 className="font-heading font-bold text-white text-[18px]">{card.title}</h3>
                </div>
                <p className="font-sans text-[16px] leading-relaxed" style={{ color: "#94A3B8" }}>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Our Slogan */}
      <section className="bg-[#FFFDF5] py-[120px]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 text-center flex flex-col items-center gap-6">
          <p className="fade-up opacity-0 translate-y-4 transition-all duration-500 font-sans font-bold uppercase text-[13px]" style={{ color: "#F6C400", letterSpacing: "0.15em" }}>
            {t("sloganLabel")}
          </p>
          <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-100 flex flex-col items-center gap-2">
            <h2 className="font-heading font-bold text-[#0F1B3D] text-[36px] md:text-[64px] leading-tight">{t("slogan1")}</h2>
            <h2 className="font-heading font-bold text-[#0F1B3D] text-[36px] md:text-[64px] leading-tight">{t("slogan2")}</h2>
          </div>
          <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-150 h-[3px] rounded-full bg-[#F6C400]" style={{ width: "60px" }} />
          <p className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-200 font-sans text-[#5F6B7A] text-[20px]">
            {t("sloganDesc")}
          </p>
          <p className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-[250ms] font-sans italic text-[#5F6B7A] text-[16px]">
            생각하는 관찰이 창의적인 표현을 만듭니다.
          </p>
        </div>
      </section>

      {/* Section 5: Commitment */}
      <section className="bg-white py-20 md:py-[120px]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="fade-up opacity-0 translate-y-4 transition-all duration-500">
              <p className="text-[#5BB7E8] text-[13px] font-semibold uppercase tracking-[0.15em] mb-4">{t("commitmentLabel")}</p>
              <h2 className="font-heading font-bold text-[#0F1B3D] text-[28px] md:text-[44px] leading-tight mb-6">{t("commitmentTitle")}</h2>
              <p className="font-sans text-[#5F6B7A] text-base md:text-lg leading-relaxed">{t("commitmentDesc")}</p>
            </div>
            <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-150">
              <img src="/images/whatisnoljak-commitment.jpg" alt="Children exploring real materials at Noljak" className="w-full object-cover object-top rounded-2xl" style={{ height: "400px" }} />
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: 5 Promises */}
      <section className="bg-[#0F1B3D] py-20 md:py-[120px]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center mb-16 flex flex-col items-center gap-4">
            <p className="fade-up opacity-0 translate-y-4 transition-all duration-500 font-sans font-bold uppercase text-[13px]" style={{ color: "#F6C400", letterSpacing: "0.15em" }}>
              {t("promiseLabel")}
            </p>
            <h2 className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-100 font-heading font-bold text-white text-[28px] md:text-[44px] leading-tight">
              {t("promiseTitle")}
            </h2>
          </div>
          <div className="flex flex-col gap-12 md:gap-16">
            {[1,2,3,4,5].map((num) => (
              <div key={num} className={`fade-up opacity-0 translate-y-4 transition-all duration-500 flex flex-col ${num % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"} items-start gap-6 md:gap-12`}>
                <div className={`relative ${num % 2 === 0 ? "md:text-right" : ""}`}>
                  <span className="font-heading font-bold text-[#F6C400] text-[80px] leading-none opacity-15">0{num}</span>
                </div>
                <div className={`flex-1 ${num % 2 === 0 ? "md:text-right" : ""}`}>
                  <h3 className="font-heading font-bold text-white text-xl md:text-2xl mb-3">{t(`promise${num}Title`)}</h3>
                  <p className="font-sans text-[#94A3B8] text-base leading-relaxed">{t(`promise${num}Desc`)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: CTA */}
      <section className="bg-[#F6C400] py-20 md:py-[120px]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 text-center">
          <h2 className="fade-up opacity-0 translate-y-4 transition-all duration-500 font-heading font-bold text-[#0F1B3D] text-[28px] md:text-[44px] leading-tight mb-10">
            {t("ctaTitle")}
          </h2>
          <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-100 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://medium.com/@noljak" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 bg-[#0F1B3D] text-white font-bold rounded-full transition-all duration-300 hover:bg-white hover:text-[#0F1B3D]">
              {t("ctaBtn1")}
            </a>
            <a href="https://medium.com/@noljak" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 bg-transparent border-2 border-[#0F1B3D] text-[#0F1B3D] font-bold rounded-full transition-all duration-300 hover:bg-[#0F1B3D] hover:text-white">
              {t("ctaBtn2")}
            </a>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        .fade-up.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </main>
  )
}
