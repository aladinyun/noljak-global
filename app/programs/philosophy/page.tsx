"use client"

import { useEffect } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function PhilosophyPage() {
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

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Section 1: Hero */}
      <section className="bg-[#FFFDF5] min-h-[70vh] flex items-center justify-center py-20 md:py-[120px] pt-[80px]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 text-center">
          <p className="fade-up opacity-0 translate-y-4 transition-all duration-500 uppercase text-[#F6C400] text-[13px] tracking-[0.15em] font-semibold mb-6">
            PHILOSOPHY
          </p>
          <h1 className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-100 font-heading font-bold text-[#0F1B3D] text-[36px] md:text-[64px] leading-tight mb-4">
            Children do not grow by copying.
          </h1>
          <p className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-200 font-sans text-[#5F6B7A] text-[20px] md:text-[24px]">
            They grow by observing, thinking, and creating.
          </p>
        </div>
      </section>

      {/* Section 2: Golden Time */}
      <section className="bg-white py-20 md:py-[120px]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Text */}
            <div>
              <p className="fade-up opacity-0 translate-y-4 transition-all duration-500 uppercase text-[#F6C400] text-[13px] tracking-[0.15em] font-semibold mb-4">
                GOLDEN TIME
              </p>
              <h2 className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-100 font-heading font-bold text-[#0F1B3D] text-[28px] md:text-[44px] leading-tight mb-6">
                Ages 4–10. The most important window of growth.
              </h2>
              <p className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-150 font-sans text-[#5F6B7A] text-base md:text-lg leading-relaxed">
                This is when a child&apos;s senses turn into thoughts. When experience becomes knowledge. Noljak designed a precise 6-year roadmap for exactly this window — because what happens here shapes everything that follows.
              </p>
            </div>
            {/* Right: Large number display */}
            <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-200 text-center lg:text-right">
              <p className="font-heading font-bold text-[120px] md:text-[160px] leading-none text-[#F6C400]/20">
                4–10
              </p>
              <p className="font-sans text-[#5F6B7A] text-[16px] mt-4">
                The Golden Years
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Thinking Observation */}
      <section className="bg-[#FFFDF5] py-20 md:py-[120px]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left: Decorative Icon */}
            <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 flex justify-center lg:justify-start">
              <svg width="280" height="280" viewBox="0 0 280 280" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="120" cy="120" r="80" stroke="#F6C400" strokeWidth="12" fill="none" />
                <line x1="178" y1="178" x2="260" y2="260" stroke="#F6C400" strokeWidth="12" strokeLinecap="round" />
                <circle cx="100" cy="100" r="20" fill="#F6C400" fillOpacity="0.3" />
              </svg>
            </div>
            {/* Right: Text */}
            <div>
              <p className="fade-up opacity-0 translate-y-4 transition-all duration-500 uppercase text-[#5BB7E8] text-[13px] tracking-[0.15em] font-semibold mb-4">
                THINKING OBSERVATION
              </p>
              <h2 className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-100 font-heading font-bold text-[#0F1B3D] text-[28px] md:text-[44px] leading-tight mb-6">
                Observation is not just looking.
              </h2>
              <p className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-150 font-sans text-[#5F6B7A] text-base md:text-lg leading-relaxed mb-8">
                It is an active act — using curiosity boxes, magnifying glasses, and all five senses to understand the essence of a real object. The data a child collects through direct experience cannot be found on Google. It is theirs alone.
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
                CREATIVE EXPRESSION
              </p>
              <h2 className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-100 font-heading font-bold text-[#0F1B3D] text-[28px] md:text-[44px] leading-tight mb-6">
                Deep thinking becomes original creation.
              </h2>
              <p className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-150 font-sans text-[#5F6B7A] text-base md:text-lg leading-relaxed mb-8">
                Expression is not copying. It is taking what you observed, adding your imagination, and making something no one else could make. This is how a child becomes a creator.
              </p>
              <blockquote className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-200 border-l-[3px] border-[#FF8A65] pl-6">
                <p className="font-sans italic text-[#5F6B7A] text-lg">
                  깊은 생각은 풍성한 표현으로 완성됩니다.
                </p>
              </blockquote>
            </div>
            {/* Right: Decorative Icon */}
            <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-100 flex justify-center lg:justify-end order-first lg:order-last">
              <svg width="280" height="280" viewBox="0 0 280 280" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M60 220L220 60" stroke="#FF8A65" strokeWidth="24" strokeLinecap="round" />
                <path d="M200 40L240 80L220 60L200 40Z" fill="#FF8A65" />
                <path d="M40 240L60 220L80 200" stroke="#FF8A65" strokeWidth="8" strokeLinecap="round" />
                <circle cx="50" cy="230" r="15" fill="#FF8A65" fillOpacity="0.3" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Learning Model */}
      <section className="bg-[#0F1B3D] py-20 md:py-[120px]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <p className="fade-up opacity-0 translate-y-4 transition-all duration-500 uppercase text-[#F6C400] text-[13px] tracking-[0.15em] font-semibold mb-4">
              THE NOLJAK LEARNING ENGINE
            </p>
            <h2 className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-100 font-heading font-bold text-white text-[28px] md:text-[44px] leading-tight">
              A cycle that never stops.
            </h2>
          </div>

          {/* 4-step cycle */}
          <div className="relative">
            {/* Desktop: horizontal layout */}
            <div className="hidden md:flex items-center justify-between gap-4">
              {/* Step 1 */}
              <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-150 flex-1 bg-white/5 rounded-xl p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <circle cx="24" cy="24" r="12" stroke="#F6C400" strokeWidth="3" />
                    <circle cx="24" cy="24" r="5" fill="#F6C400" />
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-[#F6C400] text-lg mb-2">Observation</h3>
                <p className="font-sans text-white/70 text-sm">See the world with all five senses.</p>
              </div>

              {/* Arrow */}
              <div className="text-white/30">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M14 7l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              {/* Step 2 */}
              <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-200 flex-1 bg-white/5 rounded-xl p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <path d="M24 8v6M24 34v6M14 14l4 4M30 30l4 4M8 24h6M34 24h6M14 34l4-4M30 14l4-4" stroke="#5BB7E8" strokeWidth="3" strokeLinecap="round" />
                    <circle cx="24" cy="24" r="8" fill="#5BB7E8" fillOpacity="0.3" stroke="#5BB7E8" strokeWidth="2" />
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-[#5BB7E8] text-lg mb-2">Thinking</h3>
                <p className="font-sans text-white/70 text-sm">Connect what you see to what you know.</p>
              </div>

              {/* Arrow */}
              <div className="text-white/30">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M14 7l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              {/* Step 3 */}
              <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-[250ms] flex-1 bg-white/5 rounded-xl p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <path d="M14 38L34 10" stroke="#FF8A65" strokeWidth="4" strokeLinecap="round" />
                    <path d="M32 8l4 4-2 2-4-4 2-2z" fill="#FF8A65" />
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-[#FF8A65] text-lg mb-2">Expression</h3>
                <p className="font-sans text-white/70 text-sm">Create something entirely your own.</p>
              </div>

              {/* Arrow */}
              <div className="text-white/30">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M14 7l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              {/* Step 4 */}
              <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-300 flex-1 bg-white/5 rounded-xl p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <circle cx="24" cy="24" r="12" stroke="#F6C400" strokeWidth="3" />
                    <circle cx="24" cy="24" r="5" fill="#F6C400" />
                    <path d="M36 12l4-4M40 16l-4-4M32 8l4 4" stroke="#F6C400" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-[#F6C400] text-lg mb-2">New Observation</h3>
                <p className="font-sans text-white/70 text-sm">See the world anew, and begin again.</p>
              </div>
            </div>

            {/* Mobile: vertical layout */}
            <div className="md:hidden flex flex-col gap-6">
              {/* Step 1 */}
              <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-150 bg-white/5 rounded-xl p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <circle cx="24" cy="24" r="12" stroke="#F6C400" strokeWidth="3" />
                    <circle cx="24" cy="24" r="5" fill="#F6C400" />
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-[#F6C400] text-lg mb-2">Observation</h3>
                <p className="font-sans text-white/70 text-sm">See the world with all five senses.</p>
              </div>

              {/* Arrow down */}
              <div className="text-white/30 flex justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 5v14M7 14l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              {/* Step 2 */}
              <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-200 bg-white/5 rounded-xl p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <path d="M24 8v6M24 34v6M14 14l4 4M30 30l4 4M8 24h6M34 24h6M14 34l4-4M30 14l4-4" stroke="#5BB7E8" strokeWidth="3" strokeLinecap="round" />
                    <circle cx="24" cy="24" r="8" fill="#5BB7E8" fillOpacity="0.3" stroke="#5BB7E8" strokeWidth="2" />
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-[#5BB7E8] text-lg mb-2">Thinking</h3>
                <p className="font-sans text-white/70 text-sm">Connect what you see to what you know.</p>
              </div>

              {/* Arrow down */}
              <div className="text-white/30 flex justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 5v14M7 14l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              {/* Step 3 */}
              <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-[250ms] bg-white/5 rounded-xl p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <path d="M14 38L34 10" stroke="#FF8A65" strokeWidth="4" strokeLinecap="round" />
                    <path d="M32 8l4 4-2 2-4-4 2-2z" fill="#FF8A65" />
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-[#FF8A65] text-lg mb-2">Expression</h3>
                <p className="font-sans text-white/70 text-sm">Create something entirely your own.</p>
              </div>

              {/* Arrow down */}
              <div className="text-white/30 flex justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 5v14M7 14l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              {/* Step 4 */}
              <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-300 bg-white/5 rounded-xl p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <circle cx="24" cy="24" r="12" stroke="#F6C400" strokeWidth="3" />
                    <circle cx="24" cy="24" r="5" fill="#F6C400" />
                    <path d="M36 12l4-4M40 16l-4-4M32 8l4 4" stroke="#F6C400" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-[#F6C400] text-lg mb-2">New Observation</h3>
                <p className="font-sans text-white/70 text-sm">See the world anew, and begin again.</p>
              </div>
            </div>

            {/* Cycle indicator text */}
            <p className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-[350ms] text-center text-white/50 text-sm mt-8 font-sans">
              The cycle continues — each creation leads to new observations.
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
                WHAT AI CANNOT REPLACE
              </p>
              <h2 className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-100 font-heading font-bold text-[#0F1B3D] text-[28px] md:text-[44px] leading-tight mb-6">
                The rarest thing a child can have is original experience.
              </h2>
              <p className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-150 font-sans text-[#5F6B7A] text-base md:text-lg leading-relaxed">
                In a world flooded with data, Noljak builds that — one real object at a time. The child who touches a real squid, feels its texture, smells it, and draws it from memory — that child carries data no AI will ever have.
              </p>
            </div>
            {/* Right: Comparison cards */}
            <div className="flex flex-col gap-6">
              {/* Card 1: AI */}
              <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-200 bg-[#E8ECF1] rounded-xl p-8">
                <p className="font-sans text-[#5F6B7A] text-sm font-semibold mb-3">AI</p>
                <p className="font-sans text-[#0F1B3D] text-lg">
                  Processes data. Generates patterns. Replicates.
                </p>
              </div>
              {/* Card 2: Child */}
              <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-[250ms] bg-[#F6C400] rounded-xl p-8">
                <p className="font-heading font-bold text-[#0F1B3D] text-sm mb-3">Child</p>
                <p className="font-sans text-[#0F1B3D] text-lg">
                  Touches. Smells. Feels. Creates something entirely new.
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
            Ready to see it in action?
          </h2>
          <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-150 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/programs"
              className="inline-block bg-[#F6C400] text-[#0F1B3D] font-bold text-base px-8 py-4 rounded-full hover:bg-[#0F1B3D] hover:text-[#F6C400] transition-all duration-300 border-2 border-[#F6C400]"
            >
              Explore Programs
            </Link>
            <Link
              href="/find-center"
              className="inline-block bg-transparent text-white font-bold text-base px-8 py-4 rounded-full border-2 border-white hover:bg-white hover:text-[#0F1B3D] transition-all duration-300"
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
