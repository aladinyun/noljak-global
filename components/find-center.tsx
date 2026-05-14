"use client"

import { Button } from "@/components/ui/button"

const filterTabs = [
  { id: "kr", label: "Korea" },
  { id: "us", label: "USA" },
  { id: "de", label: "Germany" },
  { id: "vn", label: "Vietnam" },
  { id: "ph", label: "Philippines" },
  { id: "others", label: "Others" },
]

const stats = [
  { value: "11", label: "Countries" },
  { value: "400+", label: "Centers" },
  { value: "15", label: "Years" },
]

export function FindCenter() {
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
              Find Noljak near you.
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
            onClick={() => window.location.href = '/find-center'}
          >
            <img
              src="/images/world-map.jpg"
              alt="Noljak Global Centers Map"
              className="w-full block"
              style={{
                filter: "grayscale(30%) brightness(0.95)",
                display: "block"
              }}
            />
          </div>

          {/* Row 4 — Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                className="px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 bg-transparent border-[1.5px] border-[#0F1B3D] text-[#0F1B3D] hover:bg-[#0F1B3D]/5"
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Row 5 — CTA Button */}
          <Button
            onClick={scrollToInquiry}
            className="bg-[#F6C400] hover:bg-[#E5B600] text-[#0F1B3D] font-bold text-base px-10 py-4 h-auto rounded-full transition-all duration-300"
          >
            Global Business — Bring Noljak to Your City
          </Button>
        </div>
      </div>
    </section>
  )
}
