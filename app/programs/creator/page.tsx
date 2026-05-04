"use client"

import { useEffect } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"

const imaginationTools = [
  { number: "01", title: "Shape Shifting", description: "Transform basic shapes into entirely new forms" },
  { number: "02", title: "Mix & Match", description: "Combine unrelated attributes to create something new" },
  { number: "03", title: "Feature Focusing", description: "Isolate and redefine the key characteristics of any object" },
  { number: "04", title: "Avatar POV", description: "See the world through someone else's eyes entirely" },
  { number: "05", title: "Scaling Up & Down", description: "Explore by dramatically changing size" },
  { number: "06", title: "Break & Build", description: "Separate and recombine elements in unexpected ways" },
  { number: "07", title: "Giving Life", description: "Give movement and life to static objects" },
  { number: "08", title: "Time Traveling", description: "Reverse or fast-forward time to reimagine cause and effect" },
  { number: "09", title: "Super Function", description: "Give objects impossible abilities beyond their original purpose" },
]

const designSteps = [
  { number: "01", title: "Divergent Thinking", description: "Generate hundreds of possibilities using 9 imagination tools." },
  { number: "02", title: "Idea Sketch", description: "Convert abstract ideas into visual blueprints." },
  { number: "03", title: "Convergent Thinking", description: "Select one idea and develop it to its fullest potential." },
  { number: "04", title: "Final Creation", description: "A work that carries social meaning or functional value." },
]

const caseStudySteps = [
  { 
    icon: "eye", 
    title: "Observation", 
    color: "#F6C400",
    description: "Lightness, feather structure, air space — all data collected by touch and sight."
  },
  { 
    icon: "lightbulb", 
    title: "Thinking", 
    color: "#5BB7E8",
    description: "'The feathers look like the Eiffel Tower.' / 'It could be a hot air balloon basket.'"
  },
  { 
    icon: "pencil", 
    title: "Expression", 
    color: "#FF8A65",
    description: "Children created the Eiffel Tower, a flowing dress, and a fantasy balloon — all from one shuttlecock."
  },
]

export default function CreatorPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
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
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Section 1: Hero */}
      <section className="relative min-h-[70vh] bg-[#FF8A65] flex flex-col items-center justify-center px-4 overflow-hidden pt-[80px]">
        <div className="text-center z-10">
          <p className="fade-up opacity-0 translate-y-4 transition-all duration-500 uppercase text-[#0F1B3D] text-[13px] tracking-[0.15em] mb-4">
            COURSE 03
          </p>
          <h1 className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-100 font-heading font-bold text-[#0F1B3D] text-[36px] md:text-[64px] leading-tight mb-6">
            Ideas become original creations.
          </h1>
          <p className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-150 font-sans text-[#0F1B3D] text-lg md:text-[24px]">
            Ages 8–Elementary · Design Thinking · Creative Fusion
          </p>
        </div>
        {/* Watermark */}
        <p className="absolute bottom-8 left-1/2 -translate-x-1/2 font-heading font-bold text-[100px] md:text-[200px] text-[#0F1B3D] opacity-[0.08] whitespace-nowrap pointer-events-none">
          Creator
        </p>
      </section>

      {/* Section 2: What is Creator */}
      <section className="bg-white py-20 md:py-[120px]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left: Text */}
            <div className="fade-up opacity-0 translate-y-4 transition-all duration-500">
              <p className="uppercase text-[#FF8A65] text-[13px] tracking-[0.1em] mb-4">
                WHAT IS CREATOR?
              </p>
              <h2 className="font-heading font-bold text-[#0F1B3D] text-[28px] md:text-[44px] leading-tight mb-6">
                Design your own world.
              </h2>
              <p className="font-sans text-[#5F6B7A] text-base md:text-lg leading-relaxed">
                Creator is Noljak&apos;s advanced course for children who have completed Basic. Here, children combine accumulated observation data with art, humanities, science, and social thinking — to design solutions that are truly their own.
              </p>
            </div>

            {/* Right: Quote */}
            <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-150">
              <span className="font-heading text-[#FF8A65] text-[120px] leading-none block -mb-8">"</span>
              <p className="font-sans italic text-[#0F1B3D] text-xl md:text-[24px] leading-relaxed">
                Idea sketches are not doodles. They are blueprints for the best possible answer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Design Thinking Process */}
      <section className="bg-[#FFFDF5] py-20 md:py-[120px]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <p className="fade-up opacity-0 translate-y-4 transition-all duration-500 uppercase text-[#FF8A65] text-[13px] tracking-[0.1em] mb-4">
              DESIGN THINKING
            </p>
            <h2 className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-100 font-heading font-bold text-[#0F1B3D] text-[28px] md:text-[44px] leading-tight">
              From infinite ideas to one masterpiece.
            </h2>
          </div>

          {/* 4-step timeline */}
          <div className="relative">
            {/* Connector line - desktop only */}
            <div className="hidden lg:block absolute top-[60px] left-[10%] right-[10%] h-[2px] bg-[#E8ECF1]" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {designSteps.map((step, index) => (
                <div 
                  key={step.number}
                  className={`fade-up opacity-0 translate-y-4 transition-all duration-500`}
                  style={{ transitionDelay: `${150 + index * 50}ms` }}
                >
                  <div className="bg-white rounded-xl p-8 relative border-t-4 border-[#FF8A65]">
                    <span className="font-heading font-bold text-[#FF8A65] text-[32px] mb-4 block">
                      {step.number}
                    </span>
                    <h3 className="font-heading font-bold text-[#0F1B3D] text-lg mb-3">
                      {step.title}
                    </h3>
                    <p className="font-sans text-[#5F6B7A] text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: 9 Imagination Tools */}
      <section className="bg-white py-20 md:py-[120px]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center mb-16 max-w-[800px] mx-auto">
            <p className="fade-up opacity-0 translate-y-4 transition-all duration-500 uppercase text-[#FF8A65] text-[13px] tracking-[0.1em] mb-4">
              9 IMAGINATION TOOLS
            </p>
            <h2 className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-100 font-heading font-bold text-[#0F1B3D] text-[28px] md:text-[44px] leading-tight mb-6">
              Imagination is a skill. Here are the tools.
            </h2>
            <p className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-150 font-sans text-[#5F6B7A] text-base md:text-lg leading-relaxed">
              Children use these 9 systematic tools to break fixed thinking and transform their observation data into revolutionary ideas.
            </p>
          </div>

          {/* 3x3 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {imaginationTools.map((tool, index) => (
              <div
                key={tool.number}
                className={`fade-up opacity-0 translate-y-4 transition-all duration-500 bg-[#FFFDF5] rounded-xl p-6 hover:bg-[#FF8A65]/10 hover:border hover:border-[#FF8A65] border border-transparent cursor-default`}
                style={{ transitionDelay: `${150 + index * 30}ms` }}
              >
                <span className="font-heading font-bold text-[#FF8A65] text-[13px] mb-3 block">
                  {tool.number}
                </span>
                <h3 className="font-heading font-bold text-[#0F1B3D] text-base mb-2">
                  {tool.title}
                </h3>
                <p className="font-sans text-[#5F6B7A] text-sm leading-relaxed">
                  {tool.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Case Study */}
      <section className="bg-[#0F1B3D] py-20 md:py-[120px]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <p className="fade-up opacity-0 translate-y-4 transition-all duration-500 uppercase text-[#F6C400] text-[13px] tracking-[0.1em] mb-4">
              CASE STUDY
            </p>
            <h2 className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-100 font-heading font-bold text-white text-[28px] md:text-[44px] leading-tight mb-4">
              Shuttlecock! What do you look like?
            </h2>
            <p className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-150 font-sans text-[#5F6B7A] text-base md:text-lg">
              Original data that search engines can&apos;t find and AI can never replicate.
            </p>
          </div>

          {/* 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudySteps.map((step, index) => (
              <div
                key={step.title}
                className={`fade-up opacity-0 translate-y-4 transition-all duration-500 bg-white/5 rounded-2xl p-10`}
                style={{ transitionDelay: `${200 + index * 100}ms` }}
              >
                {/* Icon */}
                <div className="w-12 h-12 mb-6">
                  {step.icon === "eye" && (
                    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M24 12C14 12 6 24 6 24s8 12 18 12 18-12 18-12-8-12-18-12z" stroke={step.color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                      <circle cx="24" cy="24" r="6" stroke={step.color} strokeWidth="3" />
                    </svg>
                  )}
                  {step.icon === "lightbulb" && (
                    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M24 6v4M10 24H6M42 24h-4M12.2 12.2l2.8 2.8M35.8 12.2l-2.8 2.8" stroke={step.color} strokeWidth="3" strokeLinecap="round" />
                      <path d="M18 38h12M19 42h10" stroke={step.color} strokeWidth="3" strokeLinecap="round" />
                      <path d="M30 38V30a6 6 0 10-12 0v8" stroke={step.color} strokeWidth="3" />
                      <circle cx="24" cy="22" r="8" stroke={step.color} strokeWidth="3" />
                    </svg>
                  )}
                  {step.icon === "pencil" && (
                    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 40l4-16L36 8l4 4-24 24-8 4z" stroke={step.color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M28 16l4 4" stroke={step.color} strokeWidth="3" strokeLinecap="round" />
                    </svg>
                  )}
                </div>
                <h3 className="font-heading font-bold text-lg mb-3" style={{ color: step.color }}>
                  {step.title}
                </h3>
                <p className="font-sans text-white/80 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Environment */}
      <section className="bg-[#FFFDF5] py-20 md:py-[120px]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Text */}
            <div className="fade-up opacity-0 translate-y-4 transition-all duration-500">
              <p className="uppercase text-[#FF8A65] text-[13px] tracking-[0.1em] mb-4">
                ATELIER SPACE
              </p>
              <h2 className="font-heading font-bold text-[#0F1B3D] text-[28px] md:text-[44px] leading-tight mb-6">
                A studio where creators work.
              </h2>
              <p className="font-sans text-[#5F6B7A] text-base md:text-lg leading-relaxed mb-8">
                The Creator classroom is an atelier-style space with multiple materials and experimental techniques available. Children can plan and display their own exhibitions.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-[#FF8A65]" />
                  <span className="font-sans text-[#0F1B3D] text-base">Multiple materials and experimental techniques</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-[#FF8A65]" />
                  <span className="font-sans text-[#0F1B3D] text-base">Gallery element — children plan and display their own exhibitions</span>
                </div>
              </div>
            </div>

            {/* Right: SVG Illustration */}
            <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-150">
              <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                {/* Floor */}
                <rect x="0" y="250" width="400" height="50" fill="#E8ECF1" />
                {/* Back wall */}
                <rect x="0" y="0" width="400" height="250" fill="#FFFFFF" />
                {/* Gallery frames on wall */}
                <rect x="30" y="40" width="60" height="80" rx="4" fill="#FFFDF5" stroke="#E8ECF1" strokeWidth="2" />
                <rect x="40" y="50" width="40" height="50" fill="#FF8A65" opacity="0.3" />
                <rect x="110" y="60" width="50" height="60" rx="4" fill="#FFFDF5" stroke="#E8ECF1" strokeWidth="2" />
                <rect x="118" y="68" width="34" height="36" fill="#5BB7E8" opacity="0.3" />
                <rect x="180" y="30" width="70" height="90" rx="4" fill="#FFFDF5" stroke="#E8ECF1" strokeWidth="2" />
                <rect x="190" y="40" width="50" height="60" fill="#F6C400" opacity="0.3" />
                {/* Easel */}
                <path d="M300 250 L320 150 L340 250" stroke="#0F1B3D" strokeWidth="3" />
                <rect x="295" y="140" width="50" height="70" fill="#FFFDF5" stroke="#0F1B3D" strokeWidth="2" />
                <rect x="305" y="150" width="30" height="40" fill="#FF8A65" opacity="0.5" />
                {/* Art supplies table */}
                <rect x="50" y="200" width="120" height="50" rx="4" fill="#0F1B3D" opacity="0.1" />
                <rect x="60" y="180" width="100" height="20" rx="2" fill="#FFFDF5" stroke="#E8ECF1" strokeWidth="1" />
                {/* Paint tubes */}
                <rect x="70" y="170" width="12" height="20" rx="2" fill="#FF8A65" />
                <rect x="90" y="170" width="12" height="20" rx="2" fill="#5BB7E8" />
                <rect x="110" y="170" width="12" height="20" rx="2" fill="#F6C400" />
                <rect x="130" y="170" width="12" height="20" rx="2" fill="#2D6A2D" />
                {/* Brushes in jar */}
                <ellipse cx="280" cy="220" rx="20" ry="8" fill="#E8ECF1" />
                <rect x="262" y="190" width="36" height="30" fill="#FFFDF5" stroke="#E8ECF1" strokeWidth="1" />
                <line x1="270" y1="190" x2="268" y2="160" stroke="#0F1B3D" strokeWidth="2" />
                <line x1="280" y1="190" x2="280" y2="155" stroke="#FF8A65" strokeWidth="2" />
                <line x1="290" y1="190" x2="292" y2="165" stroke="#5BB7E8" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: CTA */}
      <section className="bg-[#FF8A65] py-20 md:py-[120px]">
        <div className="max-w-[800px] mx-auto px-4 md:px-8 text-center">
          <h2 className="fade-up opacity-0 translate-y-4 transition-all duration-500 font-heading font-bold text-[#0F1B3D] text-[28px] md:text-[44px] leading-tight mb-10">
            Ready to design your world?
          </h2>
          <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-150 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-[#0F1B3D] text-white font-bold rounded-full hover:bg-white hover:text-[#0F1B3D] transition-all duration-300"
            >
              Talk to a Consultant
            </Link>
            <Link
              href="/find-center"
              className="inline-block px-8 py-4 border-2 border-[#0F1B3D] text-[#0F1B3D] font-bold rounded-full hover:bg-[#0F1B3D] hover:text-white transition-all duration-300"
            >
              Find a Creator Center
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
