"use client"

import { useEffect } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function OthersPage() {
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

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Section 1: Hero */}
      <section className="min-h-[60vh] bg-[#0F1B3D] flex items-center justify-center py-20 md:py-[120px]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 text-center">
          <p className="fade-up opacity-0 translate-y-4 transition-all duration-500 uppercase text-[#F6C400] text-[13px] tracking-[0.15em] mb-6">
            PROGRAMS
          </p>
          <h1 className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-100 font-heading font-bold text-white text-[36px] md:text-[64px] leading-tight mb-6">
            Beyond the curriculum. Still Noljak.
          </h1>
          <p className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-200 font-sans text-[#5F6B7A] text-lg md:text-[20px] max-w-[680px] mx-auto leading-relaxed">
            Noljak offers a rich variety of programs and tools — all grounded in the same philosophy of observation, thinking, and creative expression.
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
                NOLJAK CREATIVE DRAWING
              </p>
              <h2 className="font-heading font-bold text-[#0F1B3D] text-[28px] md:text-[44px] leading-tight mb-6">
                Drawing as a thinking tool.
              </h2>
              <p className="font-sans text-[#5F6B7A] text-base md:text-lg leading-relaxed mb-6">
                Noljak Creative Drawing explores drawing elements found in everyday life. By observing and expressing these elements through playful methods, children develop rich thematic expression skills.
              </p>
              <span className="inline-block bg-[#F6C400] text-[#0F1B3D] font-bold text-[13px] px-4 py-1.5 rounded-full mb-6">
                Ages 3+
              </span>
              <div>
                <a
                  href="https://www.noljakmall.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans font-bold text-[#F6C400] hover:underline"
                >
                  Learn more →
                </a>
              </div>
            </div>

            {/* Right: 2 Cards stacked */}
            <div className="flex flex-col gap-6">
              {/* Card 1: Basic */}
              <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-100 bg-white rounded-xl p-7 border-l-4 border-[#F6C400]">
                <h3 className="font-heading font-bold text-[#0F1B3D] text-[20px] mb-1">
                  Basic
                </h3>
                <p className="font-sans text-[#5F6B7A] text-[13px] mb-4">
                  Ages 6 and older
                </p>
                <p className="font-sans text-[#5F6B7A] text-sm leading-relaxed">
                  Cultivates the ability to express various subjects by observing and interpreting drawing elements found in children&apos;s everyday lives through playful methods.
                </p>
              </div>

              {/* Card 2: Advanced */}
              <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-200 bg-white rounded-xl p-7 border-l-4 border-[#5BB7E8]">
                <h3 className="font-heading font-bold text-[#0F1B3D] text-[20px] mb-1">
                  Advanced
                </h3>
                <p className="font-sans text-[#5F6B7A] text-[13px] mb-4">
                  Elementary-aged children
                </p>
                <p className="font-sans text-[#5F6B7A] text-sm leading-relaxed">
                  An intensive drawing course covering Observation, Human Anatomy, Coloring, and Three-dimensional expression.
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
              NOLJAK ART KIT
            </p>
            <h2 className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-100 font-heading font-bold text-[#0F1B3D] text-[28px] md:text-[44px] leading-tight mb-6">
              A complete art experience in one box.
            </h2>
            <p className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-150 font-sans text-[#5F6B7A] text-base md:text-lg leading-relaxed mb-6">
              Each Art Kit contains all essential materials for art activities, coupled with detailed instructions — ensuring that anyone can easily create artistic pieces. Centered around a specific theme, each kit fosters creativity, confidence, and a sense of accomplishment.
            </p>
            <span className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-200 inline-block bg-[#5BB7E8] text-white font-bold text-[13px] px-4 py-1.5 rounded-full">
              Ages 4+
            </span>
          </div>

          {/* 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {/* Card 1: ArtBox 12 */}
            <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-[250ms] bg-[#FFFDF5] rounded-xl p-7 border-t-4 border-[#F6C400]">
              <h3 className="font-heading font-bold text-[#0F1B3D] text-[18px] mb-3">
                ArtBox 12
              </h3>
              <p className="font-sans text-[#5F6B7A] text-sm leading-relaxed">
                12 art activities around a single theme — from watermelon to autumn leaves. Refines fine motor skills and fosters creativity.
              </p>
            </div>

            {/* Card 2: Artist Box */}
            <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-[300ms] bg-[#FFFDF5] rounded-xl p-7 border-t-4 border-[#5BB7E8]">
              <h3 className="font-heading font-bold text-[#0F1B3D] text-[18px] mb-3">
                Artist Box
              </h3>
              <p className="font-sans text-[#5F6B7A] text-sm leading-relaxed">
                Inspired by masters like Klimt, Matisse, Mondrian, and Monet. Children appreciate and apply artists&apos; techniques to create their own works.
              </p>
            </div>

            {/* Card 3: Flower Art Box */}
            <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-[350ms] bg-[#FFFDF5] rounded-xl p-7 border-t-4 border-[#FF8A65]">
              <h3 className="font-heading font-bold text-[#0F1B3D] text-[18px] mb-3">
                Flower Art Box
              </h3>
              <p className="font-sans text-[#5F6B7A] text-sm leading-relaxed">
                Create oversized blooms, flower mobiles, and 3D floral artworks. Combines nature knowledge with fine motor development.
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
              Explore Art Kits →
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
                CRAFT MATERIAL COLLECTION
              </p>
              <h2 className="font-heading font-bold text-[#0F1B3D] text-[28px] md:text-[44px] leading-tight mb-6">
                One material. Endless possibilities.
              </h2>
              <p className="font-sans text-[#5F6B7A] text-base md:text-lg leading-relaxed mb-6">
                Each collection focuses on a single art material — colored sand, clay, cellophane, masking tape, and more. With around 10 activity sheets per kit, children explore the full creative potential of each material, building confidence through completing multiple artworks.
              </p>
              <span className="inline-block bg-[#FF8A65] text-white font-bold text-[13px] px-4 py-1.5 rounded-full mb-6">
                All ages
              </span>
              <div>
                <a
                  href="https://www.noljakmall.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans font-bold text-[#FF8A65] hover:underline"
                >
                  Explore Collections →
                </a>
              </div>
            </div>

            {/* Right: Material Tags Grid */}
            <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-150 grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "Colored Sand",
                "Clay",
                "Cellophane",
                "Masking Tape",
                "Shape Stickers",
                "Striped Colored Paper",
              ].map((material) => (
                <div
                  key={material}
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
            Curious about our full program lineup?
          </h2>
          <p className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-100 font-sans text-[#0F1B3D] text-base md:text-lg mb-10">
            Explore our core courses or find a Noljak center near you.
          </p>
          <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-200 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/programs/crekic"
              className="inline-block bg-[#0F1B3D] text-white font-bold text-base px-8 py-4 rounded-full hover:bg-white hover:text-[#0F1B3D] transition-all duration-300"
            >
              Explore Core Programs
            </Link>
            <Link
              href="/find-center"
              className="inline-block border-2 border-[#0F1B3D] text-[#0F1B3D] font-bold text-base px-8 py-4 rounded-full hover:bg-[#0F1B3D] hover:text-white transition-all duration-300"
            >
              Find a Center
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
