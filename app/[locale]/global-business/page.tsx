"use client"

import { useEffect } from "react"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { useTranslations } from "next-intl"

export default function GlobalBusinessPage() {
  const t = useTranslations("globalBusiness")

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

  const features = [
    { icon: "box", title: t("receive1Title"), desc: t("receive1Desc") },
    { icon: "book", title: t("receive2Title"), desc: t("receive2Desc") },
    { icon: "package", title: t("receive3Title"), desc: t("receive3Desc") },
    { icon: "users", title: t("receive4Title"), desc: t("receive4Desc") },
    { icon: "megaphone", title: t("receive5Title"), desc: t("receive5Desc") },
    { icon: "chart", title: t("receive6Title"), desc: t("receive6Desc") },
  ]

  const steps = [
    { num: "01", title: t("step1Title"), desc: t("step1Desc") },
    { num: "02", title: t("step2Title"), desc: t("step2Desc") },
    { num: "03", title: t("step3Title"), desc: t("step3Desc") },
    { num: "04", title: t("step4Title"), desc: t("step4Desc") },
    { num: "05", title: t("step5Title"), desc: t("step5Desc") },
    { num: "06", title: t("step6Title"), desc: t("step6Desc") },
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Section 1: Hero */}
      <section className="bg-[#0F1B3D] min-h-[80vh] flex items-center justify-center py-20 md:py-[120px] pt-[80px]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 text-center">
          <h1 className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-100 font-heading font-bold text-white text-[36px] md:text-[64px] leading-tight mb-6">
            {t("hero")}
          </h1>
          <p className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-150 font-sans text-[#5F6B7A] text-lg md:text-[24px] max-w-[700px] mx-auto mb-12">
            {t("heroSub")}
          </p>

          <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-200 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0 mb-12">
            <div className="text-center px-8">
              <p className="font-heading font-bold text-white text-[48px] leading-none">400+</p>
              <p className="font-sans text-[#5F6B7A] text-[14px] mt-2">{t("centersInKorea")}</p>
            </div>
            <div className="hidden md:block w-px h-16 bg-white/20" />
            <div className="text-center px-8">
              <p className="font-heading font-bold text-white text-[48px] leading-none">11</p>
              <p className="font-sans text-[#5F6B7A] text-[14px] mt-2">{t("countries")}</p>
            </div>
            <div className="hidden md:block w-px h-16 bg-white/20" />
            <div className="text-center px-8">
              <p className="font-heading font-bold text-white text-[48px] leading-none">20+</p>
              <p className="font-sans text-[#5F6B7A] text-[14px] mt-2">{t("yearsOfExp")}</p>
            </div>
          </div>

          <Link
            href="#get-started"
            className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-[250ms] inline-block bg-[#F6C400] text-[#0F1B3D] font-bold px-8 py-4 rounded-full hover:bg-[#0F1B3D] hover:text-[#F6C400] transition-colors"
          >
            {t("getStarted")}
          </Link>
        </div>
      </section>

      {/* Section 2: Why Noljak Business */}
      <section className="bg-[#FFFDF5] py-20 md:py-[120px]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="fade-up opacity-0 translate-y-4 transition-all duration-500 uppercase text-[#F6C400] text-[13px] font-bold tracking-[0.15em] mb-4">
                {t("whyLabel")}
              </p>
              <h2 className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-100 font-heading font-bold text-[#0F1B3D] text-[28px] md:text-[44px] leading-tight mb-6">
                {t("whyTitle")}
              </h2>
              <p className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-150 font-sans text-[#5F6B7A] text-base md:text-lg leading-relaxed">
                {t("whyDesc")}
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-200 bg-[#F6C400] rounded-2xl p-8">
                <p className="font-heading font-bold text-[#0F1B3D] text-lg mb-2">{t("stat1Title")}</p>
                <p className="font-sans text-[#0F1B3D] text-sm">{t("stat1Desc")}</p>
              </div>
              <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-[250ms] bg-[#0F1B3D] rounded-2xl p-8">
                <p className="font-heading font-bold text-white text-lg mb-2">{t("stat2Title")}</p>
                <p className="font-sans text-white text-sm">{t("stat2Desc")}</p>
              </div>
              <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-300 bg-white border border-[#E8ECF1] rounded-2xl p-8">
                <p className="font-heading font-bold text-[#0F1B3D] text-lg mb-2">{t("stat3Title")}</p>
                <p className="font-sans text-[#5F6B7A] text-sm">{t("stat3Desc")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: What Partners Receive */}
      <section className="bg-white py-20 md:py-[120px]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <p className="fade-up opacity-0 translate-y-4 transition-all duration-500 uppercase text-[#F6C400] text-[13px] font-bold tracking-[0.15em] mb-4">
              {t("receiveLabel")}
            </p>
            <h2 className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-100 font-heading font-bold text-[#0F1B3D] text-[28px] md:text-[44px] leading-tight">
              {t("receiveTitle")}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((item, index) => (
              <div
                key={item.icon}
                className="fade-up opacity-0 translate-y-4 transition-all duration-500 bg-[#FFFDF5] rounded-2xl p-8 hover:bg-[#F6C400]/10 hover:border hover:border-[#F6C400] border border-transparent"
                style={{ transitionDelay: `${150 + index * 50}ms` }}
              >
                <div className="w-8 h-8 mb-6 text-[#F6C400]">
                  {item.icon === "box" && (
                    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="4" y="8" width="24" height="20" rx="2" />
                      <path d="M4 14h24M16 8v20" />
                    </svg>
                  )}
                  {item.icon === "book" && (
                    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h10c2 0 2 2 2 2v20s0-2-2-2H4V4zM28 4H18c-2 0-2 2-2 2v20s0-2 2-2h10V4z" />
                    </svg>
                  )}
                  {item.icon === "package" && (
                    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M16 2L2 9v14l14 7 14-7V9L16 2z" />
                      <path d="M2 9l14 7M16 16v14M30 9l-14 7" />
                    </svg>
                  )}
                  {item.icon === "users" && (
                    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="10" r="4" />
                      <path d="M4 26c0-4 4-6 8-6s8 2 8 6" />
                      <circle cx="22" cy="10" r="3" />
                      <path d="M28 26c0-3-2-5-6-5" />
                    </svg>
                  )}
                  {item.icon === "megaphone" && (
                    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M6 14v6a2 2 0 002 2h2l4 6h2V6h-2l-4 6H8a2 2 0 00-2 2zM18 10v12M24 8v16" />
                    </svg>
                  )}
                  {item.icon === "chart" && (
                    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 28h24M8 20v8M14 14v14M20 18v10M26 10v18" />
                    </svg>
                  )}
                </div>
                <h3 className="font-heading font-bold text-[#0F1B3D] text-lg mb-2">{item.title}</h3>
                <p className="font-sans text-[#5F6B7A] text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Business Models */}
      <section className="bg-[#FFFDF5] py-20 md:py-[120px]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <p className="fade-up opacity-0 translate-y-4 transition-all duration-500 uppercase text-[#F6C400] text-[13px] font-bold tracking-[0.15em] mb-4">
              {t("modelsLabel")}
            </p>
            <h2 className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-100 font-heading font-bold text-[#0F1B3D] text-[28px] md:text-[44px] leading-tight">
              {t("modelsTitle")}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-150 bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="h-1.5 bg-[#F6C400]" />
              <div className="p-10">
                <span className="inline-block bg-[#F6C400] text-[#0F1B3D] font-bold text-xs px-3 py-1 rounded-full mb-4">
                  {t("mostPopular")}
                </span>
                <h3 className="font-heading font-bold text-[#0F1B3D] text-[24px] mb-4">{t("model1Title")}</h3>
                <p className="font-sans text-[#5F6B7A] text-sm leading-relaxed">{t("model1Desc")}</p>
              </div>
            </div>

            <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-200 bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="h-1.5 bg-[#5BB7E8]" />
              <div className="p-10">
                <h3 className="font-heading font-bold text-[#0F1B3D] text-[24px] mb-4">{t("model2Title")}</h3>
                <p className="font-sans text-[#5F6B7A] text-sm leading-relaxed">{t("model2Desc")}</p>
              </div>
            </div>

            <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-[250ms] bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="h-1.5 bg-[#FF8A65]" />
              <div className="p-10">
                <span className="inline-block bg-[#FF8A65] text-white font-bold text-xs px-3 py-1 rounded-full mb-4">
                  {t("forInvestors")}
                </span>
                <h3 className="font-heading font-bold text-[#0F1B3D] text-[24px] mb-4">{t("model3Title")}</h3>
                <p className="font-sans text-[#5F6B7A] text-sm leading-relaxed">{t("model3Desc")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Partner Journey */}
      <section className="bg-[#0F1B3D] py-20 md:py-[120px]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <p className="fade-up opacity-0 translate-y-4 transition-all duration-500 uppercase text-[#F6C400] text-[13px] font-bold tracking-[0.15em] mb-4">
              {t("journeyLabel")}
            </p>
            <h2 className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-100 font-heading font-bold text-white text-[28px] md:text-[44px] leading-tight">
              {t("journeyTitle")}
            </h2>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-8 left-0 right-0 h-px border-t-2 border-dashed border-white/20" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
              {steps.map((step, index) => (
                <div
                  key={step.num}
                  className="fade-up opacity-0 translate-y-4 transition-all duration-500 text-center lg:text-left"
                  style={{ transitionDelay: `${150 + index * 50}ms` }}
                >
                  <p className="font-heading font-bold text-[#F6C400] text-[32px] mb-2">{step.num}</p>
                  <h3 className="font-heading font-bold text-white text-lg mb-2">{step.title}</h3>
                  <p className="font-sans text-[#5F6B7A] text-sm">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Partner Voices */}
      <section className="bg-[#FFFDF5] py-20 md:py-[120px]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <p className="fade-up opacity-0 translate-y-4 transition-all duration-500 uppercase text-[#F6C400] text-[13px] font-bold tracking-[0.15em] mb-4">
              {t("voicesLabel")}
            </p>
            <h2 className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-100 font-heading font-bold text-[#0F1B3D] text-[28px] md:text-[44px] leading-tight">
              {t("voicesTitle")}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-150 relative bg-white rounded-2xl p-10 shadow-lg">
              <span className="absolute top-6 left-6 font-heading text-[80px] leading-none text-[#F6C400]/20">
                &ldquo;
              </span>
              <p className="font-sans text-[#5F6B7A] text-base leading-relaxed mb-6 relative z-10">
                {t("voice1Quote")}
              </p>
              <div className="flex items-center gap-2">
                <img src="https://flagcdn.com/32x24/vn.png" width={24} height={18} alt="Vietnam flag" className="rounded-sm" />
                <p className="font-sans font-bold text-[#0F1B3D] text-sm">{t("voice1Name")}</p>
              </div>
            </div>

            <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-200 relative bg-[#F6C400] rounded-2xl p-10 shadow-lg">
              <span className="absolute top-6 left-6 font-heading text-[80px] leading-none text-[#0F1B3D]/10">
                &ldquo;
              </span>
              <p className="font-sans text-[#0F1B3D] text-base leading-relaxed mb-6 relative z-10">
                {t("voice2Quote")}
              </p>
              <div className="flex items-center gap-2">
                <img src="https://flagcdn.com/32x24/ph.png" width={24} height={18} alt="Philippines flag" className="rounded-sm" />
                <p className="font-sans font-bold text-[#0F1B3D] text-sm">{t("voice2Name")}</p>
              </div>
            </div>

            <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-[250ms] relative bg-white rounded-2xl p-10 shadow-lg">
              <span className="absolute top-6 left-6 font-heading text-[80px] leading-none text-[#F6C400]/20">
                &ldquo;
              </span>
              <p className="font-sans text-[#5F6B7A] text-base leading-relaxed mb-6 relative z-10">
                {t("voice3Quote")}
              </p>
              <div className="flex items-center gap-2">
                <img src="https://flagcdn.com/32x24/de.png" width={24} height={18} alt="Germany flag" className="rounded-sm" />
                <p className="font-sans font-bold text-[#0F1B3D] text-sm">{t("voice3Name")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Get Started Form */}
      <section id="get-started" className="bg-white py-20 md:py-[120px]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="fade-up opacity-0 translate-y-4 transition-all duration-500 uppercase text-[#F6C400] text-[13px] font-bold tracking-[0.15em] mb-4">
                {t("formLabel")}
              </p>
              <h2 className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-100 font-heading font-bold text-[#0F1B3D] text-[28px] md:text-[44px] leading-tight mb-6">
                {t("formTitle")}
              </h2>
              <p className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-150 font-sans text-[#5F6B7A] text-base md:text-lg leading-relaxed mb-8">
                {t("formDesc")}
              </p>

              <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-200 flex flex-col gap-3">
                {[t("reassure1"), t("reassure2"), t("reassure3")].map((text) => (
                  <div key={text} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-[#F6C400]" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="font-sans text-[#5F6B7A] text-sm">{text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-[250ms] bg-white border border-[#E8ECF1] rounded-2xl p-10 shadow-lg">
              <form className="flex flex-col gap-5">
                <div>
                  <label className="block font-sans text-[#0F1B3D] text-sm font-medium mb-2">{t("fieldName")}</label>
                  <input
                    type="text"
                    className="w-full border border-[#E8ECF1] rounded-lg px-4 py-3 font-sans text-sm focus:outline-none focus:border-[#F6C400] transition-colors"
                    placeholder={t("fieldNamePlaceholder")}
                  />
                </div>
                <div>
                  <label className="block font-sans text-[#0F1B3D] text-sm font-medium mb-2">{t("fieldEmail")}</label>
                  <input
                    type="email"
                    className="w-full border border-[#E8ECF1] rounded-lg px-4 py-3 font-sans text-sm focus:outline-none focus:border-[#F6C400] transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block font-sans text-[#0F1B3D] text-sm font-medium mb-2">{t("fieldPhone")}</label>
                  <input
                    type="tel"
                    className="w-full border border-[#E8ECF1] rounded-lg px-4 py-3 font-sans text-sm focus:outline-none focus:border-[#F6C400] transition-colors"
                    placeholder="+1 234 567 8900"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block font-sans text-[#0F1B3D] text-sm font-medium mb-2">{t("fieldCountry")}</label>
                    <input
                      type="text"
                      className="w-full border border-[#E8ECF1] rounded-lg px-4 py-3 font-sans text-sm focus:outline-none focus:border-[#F6C400] transition-colors"
                      placeholder={t("fieldCountry")}
                    />
                  </div>
                  <div>
                    <label className="block font-sans text-[#0F1B3D] text-sm font-medium mb-2">{t("fieldCity")}</label>
                    <input
                      type="text"
                      className="w-full border border-[#E8ECF1] rounded-lg px-4 py-3 font-sans text-sm focus:outline-none focus:border-[#F6C400] transition-colors"
                      placeholder={t("fieldCity")}
                    />
                  </div>
                </div>
                <div>
                  <label className="block font-sans text-[#0F1B3D] text-sm font-medium mb-2">{t("fieldBusinessType")}</label>
                  <select className="w-full border border-[#E8ECF1] rounded-lg px-4 py-3 font-sans text-sm focus:outline-none focus:border-[#F6C400] transition-colors bg-white">
                    <option value="">{t("fieldBusinessTypePlaceholder")}</option>
                    <option value="new-center">{t("optionNewCenter")}</option>
                    <option value="licensing">{t("optionLicensing")}</option>
                    <option value="master-franchise">{t("optionMasterFranchise")}</option>
                  </select>
                </div>
                <div>
                  <label className="block font-sans text-[#0F1B3D] text-sm font-medium mb-2">{t("fieldMessage")}</label>
                  <textarea
                    rows={4}
                    className="w-full border border-[#E8ECF1] rounded-lg px-4 py-3 font-sans text-sm focus:outline-none focus:border-[#F6C400] transition-colors resize-none"
                    placeholder={t("fieldMessagePlaceholder")}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#F6C400] text-[#0F1B3D] font-bold py-4 rounded-full hover:bg-[#0F1B3D] hover:text-[#F6C400] transition-colors"
                >
                  {t("submit")}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
