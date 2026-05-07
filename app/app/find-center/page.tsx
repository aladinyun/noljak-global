"use client"

import { useState, useEffect, useRef } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Search, MapPin } from "lucide-react"

const centers = [
  {
    id: 1,
    flag: "🇰🇷",
    country: "Korea",
    region: "korea",
    name: "Noljak Seocho Creative Center",
    address: "2F, 40 Saimdang-ro 8-gil, Seocho-gu, Seoul",
    contact: "contact@noljakedu.com / +82-2-1661-7968",
  },
  {
    id: 2,
    flag: "🇻🇳",
    country: "Vietnam",
    region: "vietnam",
    name: "Noljak Hanoi — Vinhomes Gardenia",
    address: "Vinhomes Gardenia, Hanoi, Vietnam",
    contact: "contact@noljakedu.com",
  },
  {
    id: 3,
    flag: "🇵🇭",
    country: "Philippines",
    region: "philippines",
    name: "Noljak Manila Creative Center",
    address: "Manila, Philippines",
    contact: "contact@noljakedu.com",
  },
  {
    id: 4,
    flag: "🇩🇪",
    country: "Germany",
    region: "germany",
    name: "Noljak Germany Creative Center",
    address: "Germany",
    contact: "contact@noljakedu.com",
  },
  {
    id: 5,
    flag: "🇺🇸",
    country: "USA",
    region: "usa",
    name: "Noljak USA Creative Center",
    address: "United States",
    contact: "contact@noljakedu.com",
  },
]

const regionTabs = [
  { id: "all", label: "All" },
  { id: "korea", label: "Korea" },
  { id: "usa", label: "USA" },
  { id: "vietnam", label: "Vietnam" },
  { id: "philippines", label: "Philippines" },
  { id: "germany", label: "Germany" },
  { id: "others", label: "Others" },
]

const mapDots = [
  { id: "korea", name: "Korea", top: "35%", left: "72%" },
  { id: "usa", name: "USA", top: "38%", left: "20%" },
  { id: "germany", name: "Germany", top: "28%", left: "48%" },
  { id: "vietnam", name: "Vietnam", top: "48%", left: "68%" },
  { id: "philippines", name: "Philippines", top: "50%", left: "73%" },
  { id: "canada", name: "Canada", top: "28%", left: "18%" },
  { id: "uk", name: "UK", top: "25%", left: "45%" },
  { id: "australia", name: "Australia", top: "68%", left: "75%" },
  { id: "china", name: "China", top: "38%", left: "68%" },
  { id: "japan", name: "Japan", top: "35%", left: "76%" },
  { id: "thailand", name: "Thailand", top: "46%", left: "66%" },
]

export default function FindCenterPage() {
  const [activeRegion, setActiveRegion] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [hoveredDot, setHoveredDot] = useState<string | null>(null)

  // Scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "translate-y-4")
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const filteredCenters = centers.filter((center) => {
    const matchesRegion = activeRegion === "all" || center.region === activeRegion
    const matchesSearch =
      searchQuery === "" ||
      center.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      center.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
      center.address.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesRegion && matchesSearch
  })

  return (
    <main className="min-h-screen bg-[#FFFDF5]">
      <Navigation />

      {/* Section 1: Hero */}
      <section className="min-h-[50vh] bg-[#FFFDF5] flex items-center justify-center pt-32 pb-16">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 text-center">
          <p className="fade-up opacity-0 translate-y-4 transition-all duration-500 uppercase text-[#F6C400] text-[13px] font-bold tracking-[0.15em] mb-4">
            FIND CENTER
          </p>
          <h1 className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-100 font-heading font-bold text-[#0F1B3D] text-[36px] md:text-[64px] leading-tight mb-6">
            Find Noljak near you.
          </h1>
          <p className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-150 font-sans text-[#5F6B7A] text-lg md:text-xl max-w-[600px] mx-auto">
            Noljak Creative Centers are opening across the world. Find the one closest to you.
          </p>
        </div>
      </section>

      {/* Section 2: Search Bar */}
      <section className="bg-[#FFFDF5] pb-12">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 flex flex-col items-center">
            <div className="relative w-full max-w-[560px]">
              <input
                type="text"
                placeholder="Search by country or city..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-14 border border-[#E8ECF1] rounded-full px-6 pr-20 font-sans text-base text-[#0F1B3D] placeholder:text-[#5F6B7A] focus:outline-none focus:border-[#F6C400] transition-colors"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#F6C400] rounded-full p-3 hover:bg-[#E5B600] transition-colors">
                <Search className="w-5 h-5 text-[#0F1B3D]" />
              </button>
            </div>
            <button className="mt-4 font-sans text-[#5BB7E8] text-sm hover:underline transition-all">
              Or use current location
            </button>
          </div>
        </div>
      </section>

      {/* Section 3: Region Filter Tabs */}
      <section className="bg-white py-8">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 flex justify-center gap-2 overflow-x-auto pb-2">
            {regionTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveRegion(tab.id)}
                className={`px-7 py-2.5 rounded-full font-sans text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                  activeRegion === tab.id
                    ? "bg-[#0F1B3D] text-white"
                    : "bg-transparent border border-[#E8ECF1] text-[#5F6B7A] hover:border-[#0F1B3D] hover:text-[#0F1B3D]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Global Map */}
      <section className="bg-white py-20 md:py-[120px]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <p className="fade-up opacity-0 translate-y-4 transition-all duration-500 uppercase text-[#F6C400] text-[13px] font-bold tracking-[0.15em] mb-4">
              GLOBAL PRESENCE
            </p>
            <h2 className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-100 font-heading font-bold text-[#0F1B3D] text-[28px] md:text-[44px]">
              Noljak in 11 countries.
            </h2>
          </div>

          {/* Map Container */}
          <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-150 relative max-w-[900px] mx-auto mb-16">
            <svg
              viewBox="0 0 1000 500"
              className="w-full h-auto"
              style={{ backgroundColor: "#E8ECF1", borderRadius: "16px" }}
            >
              {/* Simplified world map paths */}
              <path
                d="M150,180 Q200,150 280,160 Q320,170 350,200 Q370,230 340,260 Q300,290 250,280 Q180,270 150,230 Q130,200 150,180"
                fill="#D4D4D4"
                stroke="#FFFFFF"
                strokeWidth="0.5"
              />
              <path
                d="M100,200 Q130,180 180,185 Q220,190 240,220 Q250,250 220,280 Q180,310 130,300 Q80,280 70,240 Q60,210 100,200"
                fill="#D4D4D4"
                stroke="#FFFFFF"
                strokeWidth="0.5"
              />
              <path
                d="M420,120 Q500,100 580,110 Q650,120 700,150 Q740,180 720,220 Q690,260 620,270 Q550,280 480,260 Q420,240 400,200 Q380,160 420,120"
                fill="#D4D4D4"
                stroke="#FFFFFF"
                strokeWidth="0.5"
              />
              <path
                d="M440,200 Q480,180 540,185 Q600,190 650,220 Q680,250 660,290 Q620,340 550,350 Q480,360 430,330 Q390,300 400,260 Q410,220 440,200"
                fill="#D4D4D4"
                stroke="#FFFFFF"
                strokeWidth="0.5"
              />
              <path
                d="M650,140 Q720,120 800,130 Q870,140 920,180 Q950,220 930,270 Q890,320 820,340 Q740,360 670,330 Q610,300 620,250 Q630,190 650,140"
                fill="#D4D4D4"
                stroke="#FFFFFF"
                strokeWidth="0.5"
              />
              <path
                d="M700,320 Q760,300 830,310 Q890,320 920,360 Q940,400 900,440 Q840,470 770,460 Q700,450 670,410 Q650,370 700,320"
                fill="#D4D4D4"
                stroke="#FFFFFF"
                strokeWidth="0.5"
              />
            </svg>

            {/* Map Dots */}
            {mapDots.map((dot) => (
              <div
                key={dot.id}
                className="absolute cursor-pointer group"
                style={{ top: dot.top, left: dot.left, transform: "translate(-50%, -50%)" }}
                onMouseEnter={() => setHoveredDot(dot.id)}
                onMouseLeave={() => setHoveredDot(null)}
              >
                {/* Pulse animation ring */}
                <div className="absolute inset-0 w-3 h-3 bg-[#F6C400] rounded-full animate-ping opacity-75" />
                {/* Dot */}
                <div className="relative w-3 h-3 bg-[#F6C400] rounded-full transition-transform hover:scale-150" />
                {/* Tooltip */}
                {hoveredDot === dot.id && (
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-white rounded-lg shadow-lg whitespace-nowrap z-10">
                    <span className="font-sans font-bold text-[13px] text-[#0F1B3D]">{dot.name}</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-200 flex justify-center items-center gap-8 md:gap-16">
            <div className="text-center">
              <p className="font-heading font-bold text-[#F6C400] text-[36px] md:text-[48px]">11</p>
              <p className="font-sans text-[#5F6B7A] text-sm">Countries</p>
            </div>
            <div className="w-px h-12 bg-[#E8ECF1]" />
            <div className="text-center">
              <p className="font-heading font-bold text-[#F6C400] text-[36px] md:text-[48px]">400+</p>
              <p className="font-sans text-[#5F6B7A] text-sm">Centers in Korea</p>
            </div>
            <div className="w-px h-12 bg-[#E8ECF1]" />
            <div className="text-center">
              <p className="font-heading font-bold text-[#F6C400] text-[36px] md:text-[48px]">22</p>
              <p className="font-sans text-[#5F6B7A] text-sm">Global Centers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Center List */}
      <section className="bg-[#FFFDF5] py-20">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <h2 className="fade-up opacity-0 translate-y-4 transition-all duration-500 font-heading font-bold text-[#0F1B3D] text-[28px] md:text-[44px] mb-10">
            Centers by region.
          </h2>

          {filteredCenters.length > 0 ? (
            <div className="flex flex-col gap-4">
              {filteredCenters.map((center, index) => (
                <div
                  key={center.id}
                  className="fade-up opacity-0 translate-y-4 transition-all duration-500 bg-white rounded-2xl p-6 md:p-7 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <div>
                    <p className="font-sans font-bold text-[13px] text-[#5F6B7A] uppercase mb-2">
                      <span className="mr-2">{center.flag}</span>
                      {center.country}
                    </p>
                    <h3 className="font-heading font-bold text-[#0F1B3D] text-lg md:text-xl mb-2">
                      {center.name}
                    </h3>
                    <p className="font-sans text-[#5F6B7A] text-sm mb-1">{center.address}</p>
                    <p className="font-sans text-[#5F6B7A] text-sm">{center.contact}</p>
                  </div>
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(center.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-5 py-2.5 border border-[#E8ECF1] rounded-lg font-sans font-bold text-[13px] text-[#0F1B3D] hover:bg-[#F6C400] hover:border-[#F6C400] transition-all whitespace-nowrap"
                  >
                    Get Directions →
                  </a>
                </div>
              ))}
            </div>
          ) : (
            /* Section 6: No Center Found */
            <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 text-center py-20">
              <MapPin className="w-16 h-16 text-[#E8ECF1] mx-auto mb-6" />
              <h3 className="font-heading font-bold text-[#0F1B3D] text-2xl mb-3">
                No Noljak center in your city yet.
              </h3>
              <p className="font-sans text-[#5F6B7A] text-base mb-8">
                Be the first to bring Noljak to your community.
              </p>
              <Link
                href="/global-business"
                className="inline-block bg-[#F6C400] text-[#0F1B3D] font-bold px-8 py-3 rounded-full hover:bg-[#E5B600] transition-colors"
              >
                Bring Noljak to Your City →
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Section 7: CTA */}
      <section className="bg-[#0F1B3D] py-20 md:py-[120px]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 text-center">
          <h2 className="fade-up opacity-0 translate-y-4 transition-all duration-500 font-heading font-bold text-white text-[28px] md:text-[44px] mb-6">
            Don&apos;t see your city?
          </h2>
          <p className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-100 font-sans text-[#5F6B7A] text-base md:text-lg max-w-[600px] mx-auto mb-10">
            Join our growing global network and bring Noljak&apos;s creative education to your community.
          </p>
          <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-150 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/global-business"
              className="px-8 py-3.5 bg-[#F6C400] text-[#0F1B3D] font-bold rounded-full hover:bg-[#0F1B3D] hover:text-[#F6C400] border-2 border-[#F6C400] transition-all"
            >
              Start Global Business
            </Link>
            <a
              href="mailto:contact@noljakedu.com"
              className="px-8 py-3.5 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-[#0F1B3D] transition-all"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
