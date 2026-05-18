"use client"

import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { useLocale } from "next-intl"

export function FindCenter() {
  const t = useTranslations("findCenter")
  const locale = useLocale()
  const router = useRouter()

  const filterTabs = [
    { id: "kr", label: "Korea" },
    { id: "us", label: "USA" },
    { id: "ca", label: "Canada" },
    { id: "gb", label: "UK" },
    { id: "de", label: "Germany" },
    { id: "au", label: "Australia" },
    { id: "cn", label: "China" },
    { id: "jp", label: "Japan" },
    { id: "th", label: "Thailand" },
    { id: "vn", label: "Vietnam" },
    { id: "ph", label: "Philippines" },
  ]

  const mapPins = [
    { id: "kr", left: "46%", top: "45%" },
    { id: "jp", left: "49%", top: "46%" },
    { id: "cn", left: "42%", top: "52%" },
    { id: "th", left: "39%", top: "58%" },
    { id: "vn", left: "41%", top: "57%" },
    { id: "ph", left: "44%", top: "57%" },
    { id: "au", left: "51%", top: "83%" },
    { id: "de", left: "13%", top: "35%" },
    { id: "gb", left: "10%", top: "33%" },
    { id: "ca", left: "81%", top: "33%" },
    { id: "us", left: "78%", top: "43%" },
  ]

  const stats = [
    { value: "11", label: t("countries") },
    { value: "400+", label: t("centers") },
    { value: "15", label: t("years") },
  ]

  const handleMapClick = () => {
    const prefix = locale === "en" ? "" : `/${locale}`
    router.push(`${prefix}/find-center`)
  }

  const scrollToInquiry = () => {
    document.getElementById("global-business-form")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="find-center" className="bg-[#FFFDF5] py-[60px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4">

          {/* Row 1 — Headline */}
          <div className="text-center">
            <h2 className="font-heading font-bold text-[#0F1B3D] text-[28px] md:text-[44px] leading-tight">
              {t("title")}
            </h2>
          </div>

          {/* Row 2 — Stats Bar */}
          <div className="flex items-center justify-center gap-6 md:gap-10">
            {stats.map((stat, index) => (
              <div key={stat.label} className="flex items-center gap-6 md:gap-10">
                <div className="flex flex-col items-center text-center">
                  <span className="font-heading font-bold text-[#0F1B3D] text-[32px] leading-none">
                    {stat.value}
                  </span>
                  <span className="font-sans text-[#5F6B7A] text-[14px] mt-1">
                    {stat.label}
                  </span>
                </div>
                {index < stats.length - 1 && (
                  <div className="w-px h-10 bg-[#E8ECF1]" />
                )}
              </div>
            ))}
          </div>

          {/* Row 3 — World Map */}
          <div
            className="w-[85%] mx-auto cursor-pointer rounded-2xl overflow-hidden relative mt-4"
            onClick={handleMapClick}
          >
            <img
              src="/images/world-map.jpg"
              alt="Noljak Global Centers Map"
              className="w-full block"
              style={{ filter: "grayscale(30%) brightness(0.95)", display: "block" }}
            />
            <div className="absolute inset-0 pointer-events-none">
              {mapPins.map((pin) => (
                <div
                  key={pin.id}
                  className="absolute"
                  style={{ left: pin.left, top: pin.top, transform: "translate(-50%, -50%)" }}
                >
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F6C400] opacity-75" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-[#F6C400] border-2 border-white" />
                  </span>
                  <span className="text-[10px] font-bold text-[#0F1B3D] text-center bg-white/80 rounded px-1 mt-0.5">
                    {pin.id.toUpperCase()}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Row 4 — Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                className="px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 bg-transparent border-[1.5px] border-[#0F1B3D] text-[#0F1B3D] hover:bg-[#0F1B3D]/5"
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Row 5 — CTA Button */}
          <Button
            onClick={scrollToInquiry}
            className="mt-4 bg-[#F6C400] hover:bg-[#E5B600] text-[#0F1B3D] font-bold text-base px-10 py-4 h-auto rounded-full transition-all duration-300"
          >
            {t("cta")}
          </Button>

        </div>
      </div>
    </section>
  )
}
