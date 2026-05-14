"use client"

import { useState, useEffect } from "react"
import dynamic from "next/dynamic"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Search, MapPin } from "lucide-react"

const WorldMap = dynamic(() => import("@/components/world-map"), { ssr: false })

type Center = {
  id: string
  name: string
  country: string
  region: string | null
  city: string
  address: string
  phone: string | null
  email: string | null
  maps_url: string | null
  lat: number | null
  lng: number | null
  is_published: boolean
  sort_order: number
}


export default function FindCenterPage() {
  const [centers, setCenters] = useState<Center[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  const [activeRegion, setActiveRegion] = useState("all")

  useEffect(() => {
    fetch('/api/centers')
      .then(res => res.json())
      .then(data => {
        setCenters(Array.isArray(data) ? data : [])
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  // Scroll animation
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-up")
    elements.forEach((el) => {
      el.classList.add("opacity-0", "translate-y-4")
    })

    const timer = setTimeout(() => {
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
    }, 50)

    return () => clearTimeout(timer)
  }, [centers, activeRegion, searchQuery])

  const regionTabs = [
    { id: "all", label: "All" },
    { id: "korea", label: "Korea" },
    ...Array.from(new Set(centers.map(c => c.country)))
      .sort()
      .map(country => ({ id: country.toLowerCase(), label: country }))
  ]

  const filteredCenters = centers.filter((center) => {
    const matchesRegion =
      activeRegion === "all" ||
      center.country.toLowerCase() === activeRegion.toLowerCase() ||
      (center.region && center.region.toLowerCase() === activeRegion.toLowerCase())
    const matchesSearch =
      searchQuery === "" ||
      center.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      center.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
      center.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      center.address.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesRegion && matchesSearch
  })

  const uniqueCountries = Array.from(new Set(filteredCenters.map(c => c.country)))

  return (
    <main className="min-h-screen bg-[#FFFDF5]">
      {/* Section 1: Hero */}
      <section className="min-h-0 bg-[#FFFDF5] flex items-center justify-center pt-[160px] pb-16">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 text-center">
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
                    ? "bg-[#0F1B3D] border border-[#0F1B3D] text-white"
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
          <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-150 max-w-[900px] mx-auto mb-16">
            <WorldMap />
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

      {/* Section 5: Center List grouped by country */}
      <section className="bg-[#FFFDF5] py-20">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <h2 className="fade-up opacity-0 translate-y-4 transition-all duration-500 font-heading font-bold text-[#0F1B3D] text-[28px] md:text-[44px] mb-10">
            Centers by region.
          </h2>

          {loading ? (
            <div className="text-center py-20 text-[#5F6B7A]">Loading centers...</div>
          ) : activeRegion === "korea" ? (
            <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 text-center py-20">
              <p className="font-sans font-bold text-[13px] text-[#F6C400] uppercase tracking-[0.15em] mb-4">KOREA</p>
              <h3 className="font-heading font-bold text-[#0F1B3D] text-[28px] md:text-[44px] mb-4">
                400+ centers across Korea.
              </h3>
              <p className="font-sans text-[#5F6B7A] text-base md:text-lg max-w-[480px] mx-auto mb-10">
                Find your nearest Noljak center on our Korean website.
              </p>
              <a
                href="http://noljakmyart.com/study/school.asp"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#F6C400] text-[#0F1B3D] font-bold px-8 py-3.5 rounded-full hover:bg-[#E5B600] transition-colors"
              >
                Find a Center in Korea →
              </a>
            </div>
          ) : filteredCenters.length > 0 ? (
            <div className="flex flex-col gap-12">
              {uniqueCountries.map((country) => {
                const countryCenters = filteredCenters.filter(c => c.country === country)
                return (
                  <section key={country} id={country.toLowerCase()} className="scroll-mt-64">
                    <h3 className="font-heading font-bold text-[#0F1B3D] text-xl md:text-2xl mb-4">
                      {country}
                    </h3>
                    <div className="flex flex-col gap-4">
                      {countryCenters.map((center, index) => (
                        <div
                          key={center.id}
                          className="fade-up opacity-0 translate-y-4 transition-all duration-500 bg-white rounded-2xl p-6 md:p-7 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
                          style={{ transitionDelay: `${index * 50}ms` }}
                        >
                          <div>
                            <p className="font-sans font-bold text-[13px] text-[#5F6B7A] uppercase mb-1">
                              {center.country}
                            </p>
                            <p className="font-sans text-[#5F6B7A] text-xs mb-2">{center.city}</p>
                            <h3 className="font-heading font-bold text-[#0F1B3D] text-lg md:text-xl mb-2">
                              {center.name}
                            </h3>
                            <p className="font-sans text-[#5F6B7A] text-sm mb-1">{center.address}</p>
                            {(center.phone || center.email) && (
                              <p className="font-sans text-[#5F6B7A] text-sm">
                                {[center.phone, center.email].filter(Boolean).join(" / ")}
                              </p>
                            )}
                          </div>
                          <a
                            href={
                              center.maps_url ||
                              `https://maps.google.com/?q=${encodeURIComponent(
                                center.address + ", " + center.city + ", " + center.country
                              )}`
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-5 py-2.5 border border-[#E8ECF1] rounded-lg font-sans font-bold text-[13px] text-[#0F1B3D] hover:bg-[#F6C400] hover:border-[#F6C400] transition-all whitespace-nowrap"
                          >
                            Get Directions →
                          </a>
                        </div>
                      ))}
                    </div>
                  </section>
                )
              })}
            </div>
          ) : (
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
