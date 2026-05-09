"use client"

import { useEffect } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function BasicPage() {
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
    <main className="min-h-screen">
      <Navigation />

      {/* Section 1: Hero */}
      <section className="relative min-h-[70vh] bg-[#5BB7E8] flex flex-col items-center justify-center px-4 pt-[80px] pb-20 overflow-hidden">
        <div className="text-center z-10">
          <p className="fade-up opacity-0 translate-y-4 transition-all duration-500 uppercase text-[#0F1B3D] text-[13px] tracking-[0.15em] mb-4">
            COURSE 02
          </p>
          <h1 className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-100 font-heading font-bold text-[#0F1B3D] text-[36px] md:text-[64px] leading-tight max-w-[900px] mx-auto mb-6">
            Thinking starts with real observation.
          </h1>
          <p className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-200 font-sans text-[#0F1B3D] text-[20px] md:text-[24px]">
            Ages 6–7 · Real Object · Observation · Thinking
          </p>
        </div>
        {/* Watermark */}
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 font-heading font-bold text-[120px] md:text-[200px] text-[#0F1B3D] opacity-[0.08] select-none pointer-events-none leading-none">
          Basic
        </span>
      </section>

      {/* Section 2: What is Basic */}
      <section className="bg-white py-20 md:py-[120px]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left: Text */}
            <div>
              <p className="fade-up opacity-0 translate-y-4 transition-all duration-500 uppercase text-[#5BB7E8] text-[13px] tracking-[0.15em] mb-4">
                WHAT IS BASIC?
              </p>
              <h2 className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-100 font-heading font-bold text-[#0F1B3D] text-[28px] md:text-[44px] leading-tight mb-6">
                Don&apos;t draw first. Observe first.
              </h2>
              <p className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-150 font-sans text-[#5F6B7A] text-base md:text-lg leading-relaxed">
                Basic is Noljak&apos;s core course for ages 6–7. Children learn to observe real objects with precision — not photos, not videos, but the actual thing. From that observation, real thinking begins.
              </p>
            </div>
            {/* Right: Quote */}
            <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-200">
              <span className="font-heading font-bold text-[#5BB7E8] text-[100px] md:text-[120px] leading-none block mb-4">
                &ldquo;
              </span>
              <p className="font-sans italic text-[#0F1B3D] text-[20px] md:text-[24px] leading-relaxed -mt-12">
                The data a child collects through direct experience cannot be found on Google. It is theirs alone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: 4-Step Project Process */}
      <section className="bg-[#FFFDF5] py-20 md:py-[120px]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <p className="fade-up opacity-0 translate-y-4 transition-all duration-500 uppercase text-[#5BB7E8] text-[13px] tracking-[0.15em] mb-4">
              4-STEP PROJECT
            </p>
            <h2 className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-100 font-heading font-bold text-[#0F1B3D] text-[28px] md:text-[44px] leading-tight">
              One real object. Four weeks of discovery.
            </h2>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Connector line - desktop only */}
            <div className="hidden lg:block absolute top-[60px] left-[12.5%] right-[12.5%] h-[2px] bg-[#E8ECF1]" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Step 1 */}
              <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-150 bg-white rounded-xl p-8 border-t-4 border-[#5BB7E8] relative">
                <span className="font-heading font-bold text-[#5BB7E8] text-[48px] leading-none">01</span>
                <h3 className="font-heading font-bold text-[#0F1B3D] text-xl mt-4 mb-3">Observation</h3>
                <p className="font-sans text-[#5F6B7A] text-sm leading-relaxed mb-4">
                  Explore the real object with all five senses. Collect data.
                </p>
                <span className="inline-block bg-[#FFFDF5] text-[#5F6B7A] text-xs px-3 py-1 rounded-full">
                  e.g. Real Snail
                </span>
              </div>

              {/* Step 2 */}
              <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-200 bg-white rounded-xl p-8 border-t-4 border-[#5BB7E8] relative">
                <span className="font-heading font-bold text-[#5BB7E8] text-[48px] leading-none">02</span>
                <h3 className="font-heading font-bold text-[#0F1B3D] text-xl mt-4 mb-3">Imagination</h3>
                <p className="font-sans text-[#5F6B7A] text-sm leading-relaxed">
                  Add personal imagination to collected data. Visualize.
                </p>
              </div>

              {/* Step 3 */}
              <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-[250ms] bg-white rounded-xl p-8 border-t-4 border-[#5BB7E8] relative">
                <span className="font-heading font-bold text-[#5BB7E8] text-[48px] leading-none">03</span>
                <h3 className="font-heading font-bold text-[#0F1B3D] text-xl mt-4 mb-3">Expansion</h3>
                <p className="font-sans text-[#5F6B7A] text-sm leading-relaxed">
                  Add story and perspective. Think critically.
                </p>
              </div>

              {/* Step 4 */}
              <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-300 bg-white rounded-xl p-8 border-t-4 border-[#5BB7E8] relative">
                <span className="font-heading font-bold text-[#5BB7E8] text-[48px] leading-none">04</span>
                <h3 className="font-heading font-bold text-[#0F1B3D] text-xl mt-4 mb-3">Expression</h3>
                <p className="font-sans text-[#5F6B7A] text-sm leading-relaxed">
                  Complete a unique final creation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Observation Tools */}
      <section className="bg-white py-20 md:py-[120px]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <p className="fade-up opacity-0 translate-y-4 transition-all duration-500 uppercase text-[#5BB7E8] text-[13px] tracking-[0.15em] mb-4">
              OBSERVATION TOOLS
            </p>
            <h2 className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-100 font-heading font-bold text-[#0F1B3D] text-[28px] md:text-[44px] leading-tight">
              Tools that activate all five senses.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1: Curiosity Box */}
            <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-150 bg-[#FFFDF5] rounded-2xl p-10">
              <div className="w-16 h-16 mb-6">
                <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="8" y="16" width="48" height="40" rx="4" stroke="#5BB7E8" strokeWidth="3" fill="none" />
                  <path d="M8 28h48" stroke="#5BB7E8" strokeWidth="3" />
                  <rect x="20" y="8" width="24" height="8" rx="2" stroke="#5BB7E8" strokeWidth="3" fill="none" />
                  <text x="32" y="46" textAnchor="middle" fill="#5BB7E8" fontSize="20" fontWeight="bold">?</text>
                </svg>
              </div>
              <h3 className="font-heading font-bold text-[#0F1B3D] text-2xl mb-2">
                Curiosity Box
              </h3>
              <p className="font-sans text-[#5F6B7A] text-sm mb-4">호기심 상자</p>
              <p className="font-sans text-[#5F6B7A] text-base leading-relaxed mb-6">
                Blocks vision. Only touch, sound, and smell. Maximum sensory activation.
              </p>
              <span className="inline-block bg-[#F6C400] text-[#0F1B3D] text-xs font-medium px-3 py-1 rounded-full">
                Noljak Exclusive
              </span>
            </div>

            {/* Card 2: Observation Magnifier */}
            <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-200 bg-[#FFFDF5] rounded-2xl p-10">
              <div className="w-16 h-16 mb-6">
                <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="26" cy="26" r="16" stroke="#5BB7E8" strokeWidth="3" fill="none" />
                  <path d="M38 38l16 16" stroke="#5BB7E8" strokeWidth="3" strokeLinecap="round" />
                  <circle cx="26" cy="26" r="8" stroke="#5BB7E8" strokeWidth="2" strokeDasharray="4 3" fill="none" />
                </svg>
              </div>
              <h3 className="font-heading font-bold text-[#0F1B3D] text-2xl mb-2">
                Observation Magnifier
              </h3>
              <p className="font-sans text-[#5F6B7A] text-sm mb-4">관찰 돋보기</p>
              <p className="font-sans text-[#5F6B7A] text-base leading-relaxed mb-6">
                Precision analysis of structure and detail. Discover what the naked eye misses.
              </p>
              <span className="inline-block bg-[#F6C400] text-[#0F1B3D] text-xs font-medium px-3 py-1 rounded-full">
                Noljak Exclusive
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Environment */}
      <section className="bg-[#FFFDF5] py-20 md:py-[120px]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Text */}
            <div>
              <p className="fade-up opacity-0 translate-y-4 transition-all duration-500 uppercase text-[#5BB7E8] text-[13px] tracking-[0.15em] mb-4">
                OBSERVATION STUDIO
              </p>
              <h2 className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-100 font-heading font-bold text-[#0F1B3D] text-[28px] md:text-[44px] leading-tight mb-6">
                A space designed for deep focus.
              </h2>
              <p className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-150 font-sans text-[#5F6B7A] text-base md:text-lg leading-relaxed mb-8">
                Calm blue tones create the perfect environment for concentrated observation. The large solid wood workbench allows children to examine objects from every angle.
              </p>
              <div className="space-y-4">
                <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-200 flex items-center gap-3">
                  <div className="w-3 h-3 bg-[#5BB7E8] rounded-full" />
                  <span className="font-sans text-[#0F1B3D] text-base">Calm blue color tones for focused thinking</span>
                </div>
                <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-[250ms] flex items-center gap-3">
                  <div className="w-3 h-3 bg-[#5BB7E8] rounded-full" />
                  <span className="font-sans text-[#0F1B3D] text-base">Large solid wood workbench for multi-angle observation</span>
                </div>
              </div>
            </div>
            {/* Right: SVG Illustration */}
            <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-300">
              <svg viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                {/* Background */}
                <rect width="500" height="400" rx="16" fill="#E8F4FC" />
                {/* Window */}
                <rect x="320" y="40" width="120" height="100" rx="8" fill="#FFFFFF" stroke="#5BB7E8" strokeWidth="2" />
                <path d="M380 40v100M320 90h120" stroke="#5BB7E8" strokeWidth="2" />
                {/* Table */}
                <rect x="60" y="220" width="380" height="20" rx="4" fill="#8B6914" />
                <rect x="80" y="240" width="20" height="100" fill="#8B6914" />
                <rect x="400" y="240" width="20" height="100" fill="#8B6914" />
                {/* Magnifying glass on table */}
                <circle cx="200" cy="200" r="30" stroke="#5BB7E8" strokeWidth="4" fill="#FFFFFF" />
                <path d="M222 222l25 25" stroke="#5BB7E8" strokeWidth="4" strokeLinecap="round" />
                {/* Object on table */}
                <ellipse cx="320" cy="210" rx="35" ry="25" fill="#F6C400" />
                <ellipse cx="320" cy="200" rx="30" ry="18" fill="#FFDD57" />
                {/* Chair */}
                <rect x="140" y="280" width="60" height="10" rx="2" fill="#5BB7E8" />
                <rect x="140" y="290" width="10" height="50" fill="#5BB7E8" />
                <rect x="190" y="290" width="10" height="50" fill="#5BB7E8" />
                <rect x="140" y="240" width="10" height="40" fill="#5BB7E8" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Sensing Language */}
      <section className="bg-[#0F1B3D] py-20 md:py-[120px]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 text-center">
          <p className="fade-up opacity-0 translate-y-4 transition-all duration-500 uppercase text-[#F6C400] text-[13px] tracking-[0.15em] mb-4">
            SENSORY LANGUAGE
          </p>
          <h2 className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-100 font-heading font-bold text-white text-[28px] md:text-[44px] leading-tight mb-6 max-w-[700px] mx-auto">
            From senses to words to ideas.
          </h2>
          <p className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-150 font-sans text-[#8A94A6] text-base md:text-lg leading-relaxed max-w-[700px] mx-auto mb-12">
            Rich sensory language is the foundation of creative thinking. When children describe what they feel, they build the vocabulary of imagination.
          </p>

          {/* Bubbles */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-200 px-8 py-4 rounded-full border border-[#F6C400] bg-[#F6C400]/10">
              <p className="font-sans text-white text-lg">말랑말랑하다</p>
              <p className="font-sans text-white/70 text-sm">(Soft and squishy)</p>
            </div>
            <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-[250ms] px-8 py-4 rounded-full border border-[#5BB7E8] bg-[#5BB7E8]/10">
              <p className="font-sans text-white text-lg">비릿하다</p>
              <p className="font-sans text-white/70 text-sm">(Smells like the sea)</p>
            </div>
            <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-300 px-8 py-4 rounded-full border border-[#FF8A65] bg-[#FF8A65]/10">
              <p className="font-sans text-white text-lg">차가운 금속 같다</p>
              <p className="font-sans text-white/70 text-sm">(Cold like metal)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: CTA */}
      <section className="bg-[#5BB7E8] py-20 md:py-[120px]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 text-center">
          <h2 className="fade-up opacity-0 translate-y-4 transition-all duration-500 font-heading font-bold text-[#0F1B3D] text-[28px] md:text-[44px] leading-tight mb-10">
            See real observation in action.
          </h2>
          <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-100 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/global-business"
              className="inline-block bg-[#0F1B3D] text-white font-bold text-base px-8 py-4 rounded-full hover:bg-white hover:text-[#0F1B3D] transition-all duration-300"
            >
              Talk to a Consultant
            </Link>
            <Link
              href="/find-center"
              className="inline-block border-2 border-[#0F1B3D] text-[#0F1B3D] font-bold text-base px-8 py-4 rounded-full hover:bg-[#0F1B3D] hover:text-white transition-all duration-300"
            >
              Find a Basic Center
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
