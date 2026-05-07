"use client"

import { useEffect, useRef } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"
import Image from "next/image"

export default function WhatIsNoljak() {
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

  return (
    <main className="min-h-screen bg-[#FFFDF5]">
      <Navigation />

      {/* Section 1: Hero */}
      <section className="relative min-h-[70vh] bg-[#0F1B3D] flex items-center justify-center overflow-hidden">
        {/* Decorative circle */}
        <div 
          className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full border-[3px] border-[#F6C400] opacity-5"
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-[1200px] mx-auto px-4 md:px-8 py-20 text-center">
          <p className="fade-up opacity-0 translate-y-4 transition-all duration-500 text-[#F6C400] text-[13px] font-semibold uppercase tracking-[0.15em] mb-6">
            WHAT IS NOLJAK?
          </p>
          <h1 className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-100 font-heading font-bold text-white text-[36px] md:text-[64px] leading-tight mb-6">
            Play meets Creation.
          </h1>
          <p className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-200 font-sans text-white/80 text-base md:text-lg max-w-[680px] mx-auto leading-relaxed">
            We see every child as an infinite being — who grows by creating, one step at a time.
          </p>
        </div>
      </section>

      {/* Section 2: The Name */}
      <section className="bg-[#FFFDF5] min-h-[500px] flex items-center py-20 md:py-[120px]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Logo only */}
            <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 flex items-center justify-center order-1">
              <Image
                src="/images/noljak-logo.png"
                alt="Noljak Logo"
                width={400}
                height={200}
                className="object-contain"
              />
            </div>
            {/* Right: Text content */}
            <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-150 order-2">
              <p className="text-[#5BB7E8] text-[13px] font-semibold uppercase tracking-[0.15em] mb-4">
                THE NAME
              </p>
              <h2 className="font-heading font-bold text-[#0F1B3D] text-[28px] md:text-[40px] leading-tight mb-4">
                NOLJAK = Nol-i(놀이) + Chang-Jak(창작)
              </h2>
              <div className="w-16 h-[3px] bg-[#F6C400] mb-6" />
              <p className="font-sans text-[#5F6B7A] text-[18px] leading-relaxed mb-6">
                NOLJAK is born from two Korean words — Nol-i (놀이, Play) and Chang-Jak (창작, Creation). We believe the purity of play is the origin of all creation. When children observe and think through play, their creative expression truly shines.
              </p>
              <p className="font-sans text-[#5F6B7A] text-sm italic">
                Play + Creation → NOLJAK
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Why Art? */}
      <section className="bg-white py-20 md:py-[120px]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          {/* TOP PART: Full-width headline and body text */}
          <div className="mb-12">
            <h2 className="fade-up opacity-0 translate-y-4 transition-all duration-500 font-heading font-bold text-[#0F1B3D] text-[28px] md:text-[44px] leading-tight mb-6">
              Why did we choose Art as our tool?
            </h2>
            <p className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-100 font-sans text-[#5F6B7A] text-base md:text-lg leading-relaxed max-w-none">
              Because creativity is the one skill every child will need — no matter what the future looks like. Art has no fixed answer. It teaches children to observe, think, choose, and build. That process creates problem-solvers.
            </p>
          </div>

          {/* BOTTOM PART: 2-column grid (60% / 40%) */}
          <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-8">
            {/* Left column: 3 Cards stacked */}
            <div className="order-1 flex flex-col gap-6">
              {/* Card 1 */}
              <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-150 bg-[#FFFDF5] border border-[#E8ECF1] rounded-2xl p-8">
                <div className="w-12 h-12 mb-6">
                  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="24" cy="24" r="20" stroke="#F6C400" strokeWidth="3" strokeDasharray="6 4" />
                    <path d="M16 24h16M24 16v16" stroke="#F6C400" strokeWidth="3" strokeLinecap="round" />
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-[#0F1B3D] text-xl mb-3">
                  No fixed answers
                </h3>
                <p className="font-sans text-[#5F6B7A] text-sm leading-relaxed">
                  Art is a process, not a test.
                </p>
              </div>

              {/* Card 2 */}
              <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-200 bg-[#FFFDF5] border border-[#E8ECF1] rounded-2xl p-8">
                <div className="w-12 h-12 mb-6">
                  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 8v8m0 16v8M8 24h8m16 0h8" stroke="#F6C400" strokeWidth="3" strokeLinecap="round" />
                    <circle cx="24" cy="24" r="8" stroke="#F6C400" strokeWidth="3" />
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-[#0F1B3D] text-xl mb-3">
                  Self-directed growth
                </h3>
                <p className="font-sans text-[#5F6B7A] text-sm leading-relaxed">
                  Children choose, explore, and complete.
                </p>
              </div>

              {/* Card 3 */}
              <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-[250ms] bg-[#FFFDF5] border border-[#E8ECF1] rounded-2xl p-8">
                <div className="w-12 h-12 mb-6">
                  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 36l12-24 12 24" stroke="#F6C400" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M16 28h16" stroke="#F6C400" strokeWidth="3" strokeLinecap="round" />
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-[#0F1B3D] text-xl mb-3">
                  Creative problem-solvers
                </h3>
                <p className="font-sans text-[#5F6B7A] text-sm leading-relaxed">
                  The result is a child who thinks independently.
                </p>
              </div>
            </div>

            {/* Right column: Image matching cards height */}
            <div className="order-2 fade-up opacity-0 translate-y-4 transition-all duration-500 relative min-h-[400px] lg:min-h-0">
              <Image
                src="/images/program-basic.png"
                alt="Children observing and creating art together"
                fill
                className="object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Our Slogan */}
      <section className="bg-[#0F1B3D] py-20 md:py-[120px]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 text-center">
          <p className="fade-up opacity-0 translate-y-4 transition-all duration-500 font-heading font-bold text-white text-[32px] md:text-[56px] leading-tight">
            Thinking Observation.
          </p>
          <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-100 w-24 h-[2px] bg-[#F6C400] mx-auto my-6" />
          <p className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-150 font-heading font-bold text-white text-[32px] md:text-[56px] leading-tight mb-8">
            Creative Expression.
          </p>
          <p className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-200 font-sans text-[#5F6B7A] text-base md:text-lg">
            생각하는 관찰이 창의적인 표현을 만듭니다.
          </p>
        </div>
      </section>

      {/* Section 5: Our 5 Promises */}
      <section className="bg-[#FFFDF5] py-20 md:py-[120px]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <h2 className="fade-up opacity-0 translate-y-4 transition-all duration-500 font-heading font-bold text-[#0F1B3D] text-[28px] md:text-[44px] text-center leading-tight mb-16">
            Our 5 Promises to Every Child
          </h2>

          <div className="flex flex-col gap-12 md:gap-16">
            {/* Promise 1 */}
            <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 flex flex-col md:flex-row items-start gap-6 md:gap-12">
              <div className="relative">
                <span className="font-heading font-bold text-[#F6C400] text-[80px] leading-none opacity-15">01</span>
              </div>
              <div className="flex-1">
                <h3 className="font-heading font-bold text-[#0F1B3D] text-xl md:text-2xl mb-3">
                  Honest & Eye-Level Connection
                </h3>
                <p className="font-sans text-[#5F6B7A] text-base leading-relaxed">
                  We never draw for your child. Every line belongs to them.
                </p>
              </div>
            </div>

            {/* Promise 2 */}
            <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 flex flex-col md:flex-row-reverse items-start gap-6 md:gap-12">
              <div className="relative md:text-right">
                <span className="font-heading font-bold text-[#F6C400] text-[80px] leading-none opacity-15">02</span>
              </div>
              <div className="flex-1 md:text-right">
                <h3 className="font-heading font-bold text-[#0F1B3D] text-xl md:text-2xl mb-3">
                  Deep Listening & Dialogue
                </h3>
                <p className="font-sans text-[#5F6B7A] text-base leading-relaxed">
                  We ask, we listen, we guide — never instruct.
                </p>
              </div>
            </div>

            {/* Promise 3 */}
            <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 flex flex-col md:flex-row items-start gap-6 md:gap-12">
              <div className="relative">
                <span className="font-heading font-bold text-[#F6C400] text-[80px] leading-none opacity-15">03</span>
              </div>
              <div className="flex-1">
                <h3 className="font-heading font-bold text-[#0F1B3D] text-xl md:text-2xl mb-3">
                  Learning through the Body
                </h3>
                <p className="font-sans text-[#5F6B7A] text-base leading-relaxed">
                  Real objects, real touch, real thinking.
                </p>
              </div>
            </div>

            {/* Promise 4 */}
            <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 flex flex-col md:flex-row-reverse items-start gap-6 md:gap-12">
              <div className="relative md:text-right">
                <span className="font-heading font-bold text-[#F6C400] text-[80px] leading-none opacity-15">04</span>
              </div>
              <div className="flex-1 md:text-right">
                <h3 className="font-heading font-bold text-[#0F1B3D] text-xl md:text-2xl mb-3">
                  Small Group System
                </h3>
                <p className="font-sans text-[#5F6B7A] text-base leading-relaxed">
                  Every child is seen, heard, and guided individually.
                </p>
              </div>
            </div>

            {/* Promise 5 */}
            <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 flex flex-col md:flex-row items-start gap-6 md:gap-12">
              <div className="relative">
                <span className="font-heading font-bold text-[#F6C400] text-[80px] leading-none opacity-15">05</span>
              </div>
              <div className="flex-1">
                <h3 className="font-heading font-bold text-[#0F1B3D] text-xl md:text-2xl mb-3">
                  Timed Session Management
                </h3>
                <p className="font-sans text-[#5F6B7A] text-base leading-relaxed">
                  Structured time for deep focus and creative habit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Learning Model */}
      <section className="bg-white py-20 md:py-[120px]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <h2 className="fade-up opacity-0 translate-y-4 transition-all duration-500 font-heading font-bold text-[#0F1B3D] text-[28px] md:text-[44px] text-center leading-tight mb-16">
            The Noljak Learning Engine
          </h2>

          {/* 4-step cycle */}
          <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-100 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0">
            {/* Step 1: Observation */}
            <div className="flex flex-col items-center text-center w-full md:w-48">
              <div className="w-20 h-20 rounded-full bg-[#F6C400] flex items-center justify-center mb-4">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="18" cy="18" r="10" stroke="#0F1B3D" strokeWidth="3" fill="none" />
                  <path d="M26 26l8 8" stroke="#0F1B3D" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </div>
              <h4 className="font-heading font-bold text-[#0F1B3D] text-lg mb-2">Observation</h4>
              <p className="font-sans text-[#5F6B7A] text-sm">See real objects closely</p>
            </div>

            {/* Arrow 1 */}
            <div className="hidden md:flex items-center justify-center w-16">
              <svg width="32" height="16" viewBox="0 0 32 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 8h28M24 2l6 6-6 6" stroke="#E8ECF1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="md:hidden flex items-center justify-center h-8">
              <svg width="16" height="32" viewBox="0 0 16 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 0v28M2 24l6 6 6-6" stroke="#E8ECF1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            {/* Step 2: Thinking */}
            <div className="flex flex-col items-center text-center w-full md:w-48">
              <div className="w-20 h-20 rounded-full bg-[#5BB7E8] flex items-center justify-center mb-4">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="20" cy="16" r="10" stroke="#0F1B3D" strokeWidth="3" fill="none" />
                  <path d="M14 28c0-4 3-6 6-6s6 2 6 6" stroke="#0F1B3D" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </div>
              <h4 className="font-heading font-bold text-[#0F1B3D] text-lg mb-2">Thinking</h4>
              <p className="font-sans text-[#5F6B7A] text-sm">Build your own ideas</p>
            </div>

            {/* Arrow 2 */}
            <div className="hidden md:flex items-center justify-center w-16">
              <svg width="32" height="16" viewBox="0 0 32 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 8h28M24 2l6 6-6 6" stroke="#E8ECF1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="md:hidden flex items-center justify-center h-8">
              <svg width="16" height="32" viewBox="0 0 16 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 0v28M2 24l6 6 6-6" stroke="#E8ECF1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            {/* Step 3: Expression */}
            <div className="flex flex-col items-center text-center w-full md:w-48">
              <div className="w-20 h-20 rounded-full bg-[#FF8A65] flex items-center justify-center mb-4">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 30l6-20 4 12 4-8 6 16" stroke="#0F1B3D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h4 className="font-heading font-bold text-[#0F1B3D] text-lg mb-2">Expression</h4>
              <p className="font-sans text-[#5F6B7A] text-sm">Create your own work</p>
            </div>

            {/* Arrow 3 */}
            <div className="hidden md:flex items-center justify-center w-16">
              <svg width="32" height="16" viewBox="0 0 32 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 8h28M24 2l6 6-6 6" stroke="#E8ECF1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="md:hidden flex items-center justify-center h-8">
              <svg width="16" height="32" viewBox="0 0 16 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 0v28M2 24l6 6 6-6" stroke="#E8ECF1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            {/* Step 4: New Observation */}
            <div className="flex flex-col items-center text-center w-full md:w-48">
              <div className="w-20 h-20 rounded-full bg-[#0F1B3D] flex items-center justify-center mb-4">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="20" cy="20" r="12" stroke="#F6C400" strokeWidth="3" fill="none" />
                  <path d="M20 12v8l6 4" stroke="#F6C400" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </div>
              <h4 className="font-heading font-bold text-[#0F1B3D] text-lg mb-2">New Observation</h4>
              <p className="font-sans text-[#5F6B7A] text-sm">Grow and repeat</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: AI vs Human Experience */}
      <section className="bg-[#0F1B3D] py-20 md:py-[120px]">
        <div className="max-w-[900px] mx-auto px-4 md:px-8 text-center">
          <h2 className="fade-up opacity-0 translate-y-4 transition-all duration-500 font-heading font-bold text-white text-[28px] md:text-[44px] leading-tight mb-6">
            What AI cannot replace.
          </h2>
          <p className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-100 font-sans text-white/70 text-base md:text-lg leading-relaxed mb-10">
            In a world flooded with data, the rarest thing a child can have is original experience. Noljak builds that — one real object at a time.
          </p>
          <blockquote className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-150">
            <p className="font-sans text-[#F6C400] text-lg md:text-xl italic leading-relaxed">
              &ldquo;The child who touches a real squid, feels its texture, smells it, and draws it from memory — that child carries data no AI will ever have.&rdquo;
            </p>
          </blockquote>
        </div>
      </section>

      {/* Section 8: Less Plastic */}
      <section className="bg-white py-20 md:py-[120px]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Text */}
            <div className="fade-up opacity-0 translate-y-4 transition-all duration-500">
              <p className="text-[#5BB7E8] text-[13px] font-semibold uppercase tracking-[0.15em] mb-4">
                OUR COMMITMENT
              </p>
              <h2 className="font-heading font-bold text-[#0F1B3D] text-[28px] md:text-[44px] leading-tight mb-6">
                We choose the real world over plastic kits.
              </h2>
              <p className="font-sans text-[#5F6B7A] text-base md:text-lg leading-relaxed">
                Noljak uses real objects — not plastic toys, not printed kits. Real materials spark real thinking. And they protect the world our children will grow up in.
              </p>
            </div>
            {/* Right: Placeholder Image */}
            <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-150 w-full aspect-[4/3] relative">
              <Image
                src="/images/child-observing-fish.jpg"
                alt="A child closely observing a mackerel fish on a table in an art class setting"
                fill
                className="object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 9: CTA */}
      <section className="bg-[#F6C400] py-20 md:py-[120px]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 text-center">
          <h2 className="fade-up opacity-0 translate-y-4 transition-all duration-500 font-heading font-bold text-[#0F1B3D] text-[28px] md:text-[44px] leading-tight mb-10">
            Ready to explore?
          </h2>
          <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-100 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/programs/philosophy"
              className="inline-block px-8 py-4 bg-[#0F1B3D] text-white font-bold rounded-full transition-all duration-300 hover:bg-white hover:text-[#0F1B3D]"
            >
              Explore Our Philosophy
            </Link>
            <Link
              href="/find-center"
              className="inline-block px-8 py-4 bg-transparent border-2 border-[#0F1B3D] text-[#0F1B3D] font-bold rounded-full transition-all duration-300 hover:bg-[#0F1B3D] hover:text-white"
            >
              Find a Center Near You
            </Link>
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
