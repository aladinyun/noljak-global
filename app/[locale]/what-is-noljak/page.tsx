"use client"

import { useEffect, useRef } from "react"
import { Footer } from "@/components/footer"
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
      {/* Section 2: Intro + The Name (combined) */}
      <section className="bg-[#FFFDF5] pt-[200px] pb-[120px]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 flex flex-col gap-16">

          {/* Full-width headline */}
          <h1 className="fade-up opacity-0 translate-y-4 transition-all duration-500 font-heading font-bold text-[#0F1B3D] text-[32px] md:text-[48px] leading-tight">
            Noljak is the world&apos;s only art-based creative education for the AI generation.
          </h1>

          {/* 2-column: Logo left, Content right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

            {/* Left: Logo */}
            <div className="fade-up opacity-0 translate-y-4 transition-all duration-500">
              <Image
                src="/images/noljak_logo.png"
                alt="Noljak Logo"
                width={600}
                height={600}
                className="object-contain w-full"
              />
            </div>

            {/* Right: Body + Footnote + Tags */}
            <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-150 flex flex-col gap-6">
              <div className="font-sans text-[#5F6B7A] text-[18px] leading-[1.8] flex flex-col gap-4">
                <p>
                  Noljak is a creative education program rooted in Thinking Observation — designed for children ages 3 to elementary school. Through small-group, project-based art classes, we help children develop the creativity that will define their success in the AI era.
                </p>
                <p>
                  English and math matter. But in the end, creativity is the real competitive edge. And creativity has a golden time — it starts early, and it starts with Noljak.
                </p>
              </div>

              {/* Footnote */}
              <div className="font-sans text-[#9CA3AF] text-[14px] leading-relaxed flex flex-col gap-1 border-l-2 border-[#E5E7EB] pl-4">
                <p>NOLJAK = Nol-i(놀이) + Chang-Jak(창작)</p>
                <p>Play + Creation → NOLJAK</p>
              </div>

              {/* Tags */}
              <div className="grid grid-cols-2 gap-2 mt-6 max-w-lg">
                <span className="bg-[#F6C400] text-[#0F1B3D] text-[14px] font-bold px-8 py-3 rounded-full text-center">Ages 3–Elementary</span>
                <span className="bg-[#F6C400] text-[#0F1B3D] text-[14px] font-bold px-8 py-3 rounded-full text-center">Korea&apos;s #1 Creative Education</span>
                <span className="bg-[#F6C400] text-[#0F1B3D] text-[14px] font-bold px-8 py-3 rounded-full text-center">Real Object &amp; Project-Based</span>
                <span className="bg-[#F6C400] text-[#0F1B3D] text-[14px] font-bold px-8 py-3 rounded-full text-center">Small Group Classes</span>
              </div>
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
      <section className="bg-[#FFFDF5] py-[120px]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 text-center flex flex-col items-center gap-6">
          <p className="fade-up opacity-0 translate-y-4 transition-all duration-500 font-sans font-bold uppercase text-[13px]" style={{ color: "#F6C400", letterSpacing: "0.15em" }}>
            OUR SLOGAN
          </p>
          <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-100 flex flex-col items-center gap-2">
            <h2 className="font-heading font-bold text-[#0F1B3D] text-[36px] md:text-[64px] leading-tight">
              Thinking Observation!
            </h2>
            <h2 className="font-heading font-bold text-[#0F1B3D] text-[36px] md:text-[64px] leading-tight">
              Creative Expression!
            </h2>
          </div>
          <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-150 h-[3px] rounded-full bg-[#F6C400]" style={{ width: "60px" }} />
          <p className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-200 font-sans text-[#5F6B7A] text-[20px]">
            This is the core of everything Noljak does — from the classroom to the world.
          </p>
          <p className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-[250ms] font-sans italic text-[#5F6B7A] text-[16px]">
            생각하는 관찰이 창의적인 표현을 만듭니다.
          </p>
        </div>
      </section>

      {/* Section 5: Less Plastic (moved before 5 Promises) */}
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
            {/* Right: Image */}
            <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-150">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/whatisnoljak-commitment.jpg"
                alt="Children exploring real materials at Noljak"
                className="w-full object-cover object-top rounded-2xl"
                style={{ height: "400px" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Our 5 Promises */}
      <section className="bg-[#0F1B3D] py-20 md:py-[120px]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center mb-16 flex flex-col items-center gap-4">
            <p className="fade-up opacity-0 translate-y-4 transition-all duration-500 font-sans font-bold uppercase text-[13px]" style={{ color: "#F6C400", letterSpacing: "0.15em" }}>
              OUR PROMISE
            </p>
            <h2 className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-100 font-heading font-bold text-white text-[28px] md:text-[44px] leading-tight">
              Our 5 Promises to Every Child
            </h2>
          </div>

          <div className="flex flex-col gap-12 md:gap-16">
            {/* Promise 1 */}
            <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 flex flex-col md:flex-row items-start gap-6 md:gap-12">
              <div className="relative">
                <span className="font-heading font-bold text-[#F6C400] text-[80px] leading-none opacity-15">01</span>
              </div>
              <div className="flex-1">
                <h3 className="font-heading font-bold text-white text-xl md:text-2xl mb-3">
                  Honest & Eye-Level Connection
                </h3>
                <p className="font-sans text-[#94A3B8] text-base leading-relaxed">
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
                <h3 className="font-heading font-bold text-white text-xl md:text-2xl mb-3">
                  Deep Listening & Dialogue
                </h3>
                <p className="font-sans text-[#94A3B8] text-base leading-relaxed">
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
                <h3 className="font-heading font-bold text-white text-xl md:text-2xl mb-3">
                  Learning through the Body
                </h3>
                <p className="font-sans text-[#94A3B8] text-base leading-relaxed">
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
                <h3 className="font-heading font-bold text-white text-xl md:text-2xl mb-3">
                  Small Group System
                </h3>
                <p className="font-sans text-[#94A3B8] text-base leading-relaxed">
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
                <h3 className="font-heading font-bold text-white text-xl md:text-2xl mb-3">
                  Timed Session Management
                </h3>
                <p className="font-sans text-[#94A3B8] text-base leading-relaxed">
                  Structured time for deep focus and creative habit.
                </p>
              </div>
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
            <a
              href="https://medium.com/@noljak"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-[#0F1B3D] text-white font-bold rounded-full transition-all duration-300 hover:bg-white hover:text-[#0F1B3D]"
            >
              Read Our Story
            </a>
            <a
              href="https://medium.com/@noljak"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-transparent border-2 border-[#0F1B3D] text-[#0F1B3D] font-bold rounded-full transition-all duration-300 hover:bg-[#0F1B3D] hover:text-white"
            >
              Meet the Founder
            </a>
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
