"use client"

import { useState } from "react"
import Link from "next/link"

const tabs = [
  {
    id: "crekic",
    name: "CreKiC",
    image: "/images/program-crekic-1.jpg",
    label: "CreKiC Course",
    labelColor: "#F6C400",
    headline: "Where learning begins with the whole body.",
    age: "Ages 3–5",
    description: "Children grow through sensory play, emotional expression, and performance-based art activities.",
    cta: "Explore CreKiC →",
    ctaHref: "#crekic",
  },
  {
    id: "basic",
    name: "Basic",
    image: "/images/program-basic-1.jpg",
    label: "Basic Course",
    labelColor: "#5BB7E8",
    headline: "Thinking starts with real observation.",
    age: "Ages 5–7",
    description: "Children observe real objects, build their own ideas, and express them through drawing and making.",
    cta: "Explore Basic →",
    ctaHref: "#basic",
  },
  {
    id: "creator",
    name: "Creator",
    image: "/images/program-creator-1.jpg",
    label: "Creator Course",
    labelColor: "#FF8A65",
    headline: "Ideas become original creations.",
    age: "Ages 7–Elementary",
    description: "Children expand their thinking through multi-layered projects and present their own original creative works.",
    cta: "Explore Creator →",
    ctaHref: "#creator",
  },
]

export function ProgramPreview() {
  const [activeTab, setActiveTab] = useState("crekic")
  const activeProgram = tabs.find((tab) => tab.id === activeTab) || tabs[0]

  return (
    <section id="programs" className="relative h-[90svh] w-full overflow-hidden">
      {/* Background Images with Fade Transition */}
      {tabs.map((tab) => (
        <div
          key={tab.id}
          className="absolute inset-0 transition-opacity duration-500"
          style={{ opacity: activeTab === tab.id ? 1 : 0 }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={tab.image}
            alt={tab.name}
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/45" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Tabs */}
        <div className="flex justify-center pt-12">
          <div className="flex gap-8 px-8 py-3 rounded-full" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`font-heading font-bold text-[18px] pb-2 border-b-2 transition-all duration-300 ${
                  activeTab === tab.id
                    ? "text-[#F6C400] border-[#F6C400]"
                    : "text-white/70 border-transparent hover:text-white"
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>
        </div>

        {/* Text Content - Bottom Left */}
        <div className="flex-1 flex items-end pb-[10%]">
          <div className="max-w-[600px] px-6 md:pl-20 md:pr-0">
            {/* Label */}
            <p
              className="font-sans font-bold text-sm uppercase tracking-wide mb-4"
              style={{ color: activeProgram.labelColor }}
            >
              {activeProgram.label}
            </p>

            {/* Headline */}
            <h2 className="font-heading font-bold text-white text-3xl md:text-[48px] leading-tight mb-4">
              {activeProgram.headline}
            </h2>

            {/* Age */}
            <p className="font-sans text-white text-lg mb-4">
              {activeProgram.age}
            </p>

            {/* Description */}
            <p className="font-sans text-white text-base leading-relaxed mb-6 opacity-90">
              {activeProgram.description}
            </p>

            {/* CTA */}
            <Link
              href={activeProgram.ctaHref}
              className="font-sans font-bold text-base transition-opacity hover:opacity-80"
              style={{ color: activeProgram.labelColor }}
            >
              {activeProgram.cta}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
