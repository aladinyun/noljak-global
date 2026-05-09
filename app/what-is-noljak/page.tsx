"use client"

import { useEffect, useRef } from "react"
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
      {/* Section 2: What is Noljak */}
      <section className="bg-[#0F1B3D] pt-[160px] pb-[160px]">
        <div className="max-w-[800px] mx-auto px-4 md:px-8 text-center flex flex-col items-center gap-6">
          <h2 className="font-heading font-bold text-white text-[28px] md:text-[44px] leading-tight">
            The world&apos;s only art-based creative education for the AI generation.
          </h2>
          <div className="font-sans text-[18px] leading-[1.8] text-left flex flex-col gap-4" style={{ color: "#5F6B7A" }}>
            <p>
              Noljak is a creative education program rooted in Thinking Observation — designed for children ages 3 to elementary school. Through small-group, project-based art classes, we help children develop the creativity that will define their success in the AI era.
            </p>
            <p>
              English and math matter. But in the end, creativity is the real competitive edge. And creativity has a golden time — it starts early, and it starts with Noljak.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 mt-2">
            {["Ages 3–Elementary", "Small Group Classes", "Project-Based Learning"].map((tag) => (
              <span
                key={tag}
                className="font-sans text-sm px-4 py-2 rounded-full border"
                style={{ borderColor: "#F6C400", color: "#F6C400" }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: The Name */}
      <section className="bg-[#FFFDF5] py-20 md:py-[120px]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Logo display */}
            <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 flex flex-col items-center">
              <Image
                src="/images/noljak_logo.png"
                alt="Noljak Logo"
                width={300}
                height={300}
                className="object-contain"
              />
            </div>
            {/* Right: Body text */}
            <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-150 flex flex-col gap-4">
              <p className="font-sans font-bold uppercase tracking-widest text-[13px]" style={{ color: "#5BB7E8" }}>
                THE NAME
              </p>
              <h2 className="font-heading font-bold text-[#0F1B3D] text-[28px] md:text-[36px] leading-tight">
                NOLJAK = Nol-i(놀이) + Chang-Jak(창작)
              </h2>
              <div className="w-12 h-[3px] rounded-full" style={{ backgroundColor: "#F6C400" }} />
              <p className="font-sans text-[#5F6B7A] text-base md:text-lg leading-relaxed">
                NOLJAK is born from two Korean words — Nol-i (놀이, Play) and Chang-Jak (창작, Creation). We believe the purity of play is the origin of all creation. When children observe and think through play, their creative expression truly shines.
              </p>
              <p className="font-sans text-[#5F6B7A] text-sm">
                Play + Creation → NOLJAK
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Why Art? */}
      <section className="bg-[#0F1B3D]">
        {/* Hero Image */}
        <div className="relative w-full" style={{ height: "500px" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/whatisnoljak-1.jpg"
            alt="Children engaging in creative art activities"
            className="w-full h-full object-cover"
            style={{ objectPosition: "center center" }}
          />
          <div className="absolute inset-0" style={{ background: "rgba(15,27,61,0.6)" }} />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-8 gap-6">
            <h2 className="font-heading font-bold text-white text-[28px] md:text-[48px] leading-tight max-w-[800px]">
              Why did we choose Art as our tool?
            </h2>
            <p className="font-sans text-[18px] leading-relaxed max-w-[640px]" style={{ color: "#CBD5E1" }}>
              Because creativity is the one skill every child will need — no matter what the future looks like.
            </p>
          </div>
        </div>

        {/* Card Grid */}
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0F1B3D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2a10 10 0 1 0 10 10" /><path d="M12 8v4l3 3" />
                  </svg>
                ),
                title: "In art, every child is right.",
                desc: "There is no single correct answer — only your answer. That's why every child becomes the hero of their own creative journey.",
                delay: "delay-150",
              },
              {
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0F1B3D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 20V10" /><path d="M18 20V4" /><path d="M6 20v-4" />
                  </svg>
                ),
                title: "Self-directed growth",
                desc: "Imagination becomes reality. Children choose, observe, and complete their own unique work — and grow through every step of that process.",
                delay: "delay-200",
              },
              {
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0F1B3D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" /><path d="M12 8v4l2 2" />
                  </svg>
                ),
                title: "Creative problem-solvers",
                desc: "What if I had 10 arms like an octopus? Noljak gives children the power to solve imaginative challenges that no computer can — because real creativity starts in the mind.",
                delay: "delay-[250ms]",
              },
              {
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0F1B3D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" /><path d="M8 13s1.5 2 4 2 4-2 4-2" /><line x1="9" y1="9" x2="9.01" y2="9" /><line x1="15" y1="9" x2="15.01" y2="9" />
                  </svg>
                ),
                title: "Focus Through Joy",
                desc: "Art is fun — and fun builds focus. When children enjoy what they do, they concentrate deeper and longer.",
                delay: "delay-[300ms]",
              },
              {
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0F1B3D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8" /><path d="M12 17v4" />
                  </svg>
                ),
                title: "Process Becomes Product",
                desc: "Every artwork has a beginning, middle, and end. Art teaches children to see a project through — from idea to completion.",
                delay: "delay-[350ms]",
              },
              {
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0F1B3D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="6" width="20" height="12" rx="2" /><path d="M12 12h.01" /><path d="M17 12h.01" /><path d="M7 12h.01" />
                  </svg>
                ),
                title: "Ready for the AI Era",
                desc: "In the age of AI, fluency in both language and image is essential. Art builds the visual thinking skills children will need most.",
                delay: "delay-[400ms]",
              },
            ].map((card) => (
              <div
                key={card.title}
                className={`fade-up opacity-0 translate-y-4 transition-all duration-300 ${card.delay} flex flex-col gap-4 p-8 rounded-2xl cursor-default group`}
                style={{
                  background: "rgba(255,255,255,0.1)",
                  border: "1px solid rgba(255,255,255,0.2)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)"
                  ;(e.currentTarget as HTMLDivElement).style.borderColor = "rgba(246,196,0,0.4)"
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)"
                  ;(e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.1)"
                }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: "#F6C400" }}
                  >
                    {card.icon}
                  </div>
                  <h3 className="font-heading font-bold text-white text-[18px]">
                    {card.title}
                  </h3>
                </div>
                <p className="font-sans text-[16px] leading-relaxed" style={{ color: "#94A3B8" }}>
                  {card.desc}
                </p>
              </div>
            ))}
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
