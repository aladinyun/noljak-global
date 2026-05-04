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
      <section className="bg-[#FFFDF5] py-20 md:py-[120px]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Logo display */}
            <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 flex flex-col items-center">
              <Image
                src="/images/noljak-logo.png"
                alt="Noljak Logo"
                width={400}
                height={200}
                className="object-contain"
              />
              <div className="mt-3 text-center">
                <p className="leading-tight">
                  <span className="font-heading font-bold text-[#0F1B3D] text-[48px]">nol</span>
                  <span className="font-heading text-[#5F6B7A] text-[24px]">-i</span>
                  <span className="font-heading text-[#0F1B3D] text-[30px]">{" + "}</span>
                  <span className="font-heading text-[#5F6B7A] text-[24px]">chang</span>
                  <span className="font-heading font-bold text-[#0F1B3D] text-[48px]">jak</span>
                </p>
                <p className="font-heading font-bold text-[48px] mt-2" style={{ letterSpacing: "0.3em" }}>
                  <span className="text-[#CC0000]">n</span>
                  <span className="text-[#2D6A2D]">o</span>
                  <span className="text-[#F6C400]">l</span>
                  <span className="text-[#5BB7E8]">j</span>
                  <span className="text-[#2D6A2D]">a</span>
                  <span className="text-[#CC0000]">k</span>
                </p>
              </div>
            </div>
            {/* Right: Body text */}
            <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-150">
              <h2 className="font-heading font-bold text-[#0F1B3D] text-[28px] md:text-[44px] leading-tight mb-6">
                Where did the name come from?
              </h2>
              <p className="font-sans text-[#5F6B7A] text-base md:text-lg leading-relaxed">
                Noljak was born from a simple belief: children grow best when they play and create freely. We don&apos;t see children as passive learners — we see them as infinite creators.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Why Art? */}
      <section className="bg-white py-20 md:py-[120px]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Right column on mobile (image first), Left column on desktop */}
            <div className="order-2 lg:order-1">
              {/* Text content */}
              <div className="mb-12">
                <h2 className="fade-up opacity-0 translate-y-4 transition-all duration-500 font-heading font-bold text-[#0F1B3D] text-[28px] md:text-[44px] leading-tight mb-6">
                  Why did we choose Art as our tool?
                </h2>
                <p className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-100 font-sans text-[#5F6B7A] text-base md:text-lg leading-relaxed">
                  Because creativity is the one skill every child will need — no matter what the future looks like. Art has no fixed answer. It teaches children to observe, think, choose, and build. That process creates problem-solvers.
                </p>
              </div>

              {/* 3 Cards */}
              <div className="flex flex-col gap-6">
                {/* Card 1 */}
                <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-150 bg-[#FFFDF5] rounded-2xl p-8">
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
                <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-200 bg-[#FFFDF5] rounded-2xl p-8">
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
                <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-[250ms] bg-[#FFFDF5] rounded-2xl p-8">
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
            </div>

            {/* Left column on mobile (image), Right column on desktop */}
            <div className="order-1 lg:order-2 fade-up opacity-0 translate-y-4 transition-all duration-500">
              <Image
                src="/images/program-basic.png"
                alt="A child observing a flower with a magnifying glass"
                width={600}
                height={700}
                className="w-full h-full object-cover rounded-2xl"
                style={{ minHeight: "100%" }}
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

      {/* Section 6: Less Plastic */}
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
            {/* Right: Illustration */}
            <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-150 flex justify-center lg:justify-end">
              <svg width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Hand */}
                <path 
                  d="M150 280c-30 0-60-20-70-50-5-15-5-30 0-45l30-80c5-15 20-25 35-25s30 10 35 25l30 80c5 15 5 30 0 45-10 30-30 50-60 50z" 
                  fill="#FFFDF5" 
                  stroke="#0F1B3D" 
                  strokeWidth="3"
                />
                {/* Leaf stem */}
                <path 
                  d="M150 180v-80" 
                  stroke="#5BB7E8" 
                  strokeWidth="4" 
                  strokeLinecap="round"
                />
                {/* Leaf left */}
                <path 
                  d="M150 120c-30-10-50-30-50-60 30 10 50 30 50 60z" 
                  fill="#5BB7E8" 
                  opacity="0.3"
                />
                <path 
                  d="M150 120c-30-10-50-30-50-60 30 10 50 30 50 60z" 
                  stroke="#5BB7E8" 
                  strokeWidth="2"
                />
                {/* Leaf right */}
                <path 
                  d="M150 100c30-10 50-30 50-60-30 10-50 30-50 60z" 
                  fill="#F6C400" 
                  opacity="0.3"
                />
                <path 
                  d="M150 100c30-10 50-30 50-60-30 10-50 30-50 60z" 
                  stroke="#F6C400" 
                  strokeWidth="2"
                />
                {/* Small circles */}
                <circle cx="100" cy="200" r="8" fill="#FF8A65" opacity="0.5" />
                <circle cx="200" cy="220" r="6" fill="#5BB7E8" opacity="0.5" />
                <circle cx="180" cy="180" r="4" fill="#F6C400" opacity="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: CTA */}
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
