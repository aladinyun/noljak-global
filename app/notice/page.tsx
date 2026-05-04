"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ChevronDown } from "lucide-react"

const notices = [
  {
    id: 1,
    category: "Opening",
    date: "2026-05-01",
    title: "Now Open: Noljak Hanoi — Vinhomes Gardenia, Vietnam",
    body: "We are thrilled to announce the opening of our newest Noljak Creative Center in Hanoi, Vietnam, located at Vinhomes Gardenia. This marks an exciting new chapter in our Southeast Asia expansion. We welcome all families in the Hanoi area to visit and experience Noljak's unique approach to creative education.",
    link: "Find this center →",
    linkHref: "/find-center",
  },
  {
    id: 2,
    category: "Opening",
    date: "2026-03-15",
    title: "Noljak Germany: Grand Opening in March",
    body: "Noljak's first European center officially opened its doors in Germany this March. We are proud to bring our observation-based creative education to European families. Stay tuned for updates from our German team.",
    link: null,
    linkHref: null,
  },
  {
    id: 3,
    category: "Program",
    date: "2026-02-10",
    title: "Creator Course Updated: New 9 Imagination Tools Workbook",
    body: "We have released an updated workbook for the Creator Course, featuring enhanced exercises for all 9 Imagination Tools. The new workbook is now available at all Noljak centers worldwide. Partner centers can download the updated materials from the Partner Portal.",
    link: "Visit Partner Portal →",
    linkHref: "https://academy.noljak.global",
  },
  {
    id: 4,
    category: "Event",
    date: "2025-12-20",
    title: "Noljak Year-End Exhibition 2025",
    body: "Thank you to all students, parents, and teachers who participated in the 2025 Year-End Exhibition. Children from centers across Korea and our global locations showcased their creative projects. We are proud of every single creator.",
    link: null,
    linkHref: null,
  },
  {
    id: 5,
    category: "General",
    date: "2025-11-05",
    title: "Updated Privacy Policy & Terms of Use",
    body: "We have updated our Privacy Policy and Terms of Use to comply with global data protection regulations including GDPR. Please review the updated documents. If you have any questions, contact us at contact@noljakedu.com.",
    link: "View Privacy Policy →",
    linkHref: "/privacy",
  },
  {
    id: 6,
    category: "Opening",
    date: "2025-09-01",
    title: "Noljak Philippines: Manila Center Now Open",
    body: "Noljak's Philippine center in Manila is now fully operational and welcoming students. This is our third Southeast Asian location following Korea and Vietnam. We are excited to grow our creative education community in the Philippines.",
    link: null,
    linkHref: null,
  },
  {
    id: 7,
    category: "Program",
    date: "2025-07-20",
    title: "New Program: Noljak Craft Material Collection",
    body: "We are pleased to introduce the Noljak Craft Material Collection — a series of single-material art kits designed to deepen children's understanding of individual art materials. Available now at Noljak centers and online.",
    link: "Learn more →",
    linkHref: "/programs/others",
  },
  {
    id: 8,
    category: "General",
    date: "2025-05-04",
    title: "Noljak Global Website Launch",
    body: "We are excited to launch the new Noljak Global Website, designed to connect families and partners around the world with Noljak's creative education philosophy. Explore our programs, find a center near you, or learn about global business opportunities.",
    link: "Explore Programs →",
    linkHref: "/programs/crekic",
  },
]

const categoryStyles: Record<string, string> = {
  Opening: "bg-[#F6C400] text-[#0F1B3D]",
  Program: "bg-[#5BB7E8] text-white",
  Event: "bg-[#FF8A65] text-white",
  General: "bg-[#E8ECF1] text-[#5F6B7A]",
}

export default function NoticePage() {
  const [expandedId, setExpandedId] = useState<number | null>(null)

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <main className="min-h-screen bg-[#FFFDF5]">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-[#0F1B3D] min-h-[40vh] flex items-center justify-center py-20">
        <div className="max-w-[800px] mx-auto px-4 md:px-8 text-center">
          <p className="text-[#F6C400] text-[13px] uppercase tracking-[0.15em] font-sans font-bold mb-4">
            OFFICIAL NOTICE
          </p>
          <h1 className="font-heading font-bold text-white text-[32px] md:text-[56px] leading-tight mb-6">
            Noljak Updates.
          </h1>
          <p className="font-sans text-[#5F6B7A] text-base md:text-lg max-w-[560px] mx-auto">
            Official announcements, new openings, and important news from Noljak Global.
          </p>
        </div>
      </section>

      {/* Notice List Section */}
      <section className="bg-[#FFFDF5] py-16 md:py-20">
        <div className="max-w-[800px] mx-auto px-4 md:px-8">
          {notices.map((notice, index) => (
            <div
              key={notice.id}
              className={`py-8 cursor-pointer transition-colors duration-200 hover:bg-white ${
                index !== notices.length - 1 ? "border-b border-[#E8ECF1]" : ""
              }`}
              onClick={() => toggleExpand(notice.id)}
            >
              {/* Top row */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span
                    className={`px-3 py-1 rounded font-sans font-bold text-[11px] ${
                      categoryStyles[notice.category]
                    }`}
                  >
                    {notice.category}
                  </span>
                  <span className="font-sans text-[#5F6B7A] text-[13px]">
                    {notice.date}
                  </span>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-[#5F6B7A] transition-transform duration-300 ${
                    expandedId === notice.id ? "rotate-180" : ""
                  }`}
                />
              </div>

              {/* Title */}
              <h3 className="font-heading font-bold text-[#0F1B3D] text-lg md:text-xl mt-3">
                {notice.title}
              </h3>

              {/* Expanded content */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  expandedId === notice.id ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="font-sans text-[#5F6B7A] text-base leading-[1.8] mt-4">
                  {notice.body}
                </p>
                {notice.link && notice.linkHref && (
                  <Link
                    href={notice.linkHref}
                    target={notice.linkHref.startsWith("http") ? "_blank" : undefined}
                    rel={notice.linkHref.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="inline-block font-sans font-bold text-[#F6C400] text-sm mt-4 hover:underline"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {notice.link}
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#F6C400] py-20 md:py-[120px]">
        <div className="max-w-[800px] mx-auto px-4 md:px-8 text-center">
          <h2 className="font-heading font-bold text-[#0F1B3D] text-[28px] md:text-[44px] leading-tight mb-4">
            Stay connected with Noljak.
          </h2>
          <p className="font-sans text-[#0F1B3D] text-base md:text-lg mb-10">
            Follow us on social media for daily classroom moments and updates.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/find-center"
              className="inline-block px-8 py-4 bg-[#0F1B3D] text-white font-bold rounded-full transition-all duration-300 hover:bg-white hover:text-[#0F1B3D]"
            >
              Find a Center
            </Link>
            <Link
              href="https://www.instagram.com/noljakmyart_official/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 border-2 border-[#0F1B3D] text-[#0F1B3D] font-bold rounded-full transition-all duration-300 hover:bg-[#0F1B3D] hover:text-white"
            >
              Follow on Instagram
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
