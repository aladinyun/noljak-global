"use client"

import { useState, useEffect, useRef } from "react"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { X } from "lucide-react"

type Platform = "All" | "Medium" | "YouTube" | "Blog" | "Instagram" | "Facebook"

type Card = {
  id: number
  platform: Exclude<Platform, "All">
  title: string
  description: string
  tags: string[]
}

const cards: Card[] = [
  { id: 1, platform: "Medium", title: "Why Real Objects Matter More Than Screens", description: "The case for hands-on observation in early childhood education.", tags: ["observation", "philosophy"] },
  { id: 2, platform: "YouTube", title: "Inside a Noljak Classroom: Basic Course", description: "Watch how 6-year-olds observe a real snail and turn it into art.", tags: ["classroom", "basic", "observation"] },
  { id: 3, platform: "Blog", title: "Noljak Opens in Hanoi, Vietnam", description: "Our newest center at Vinhomes Gardenia is now welcoming students.", tags: ["Vietnam", "global"] },
  { id: 4, platform: "Instagram", title: "Shuttlecock becomes the Eiffel Tower", description: "One real object. Infinite imagination. This is Creator Course.", tags: ["creator", "creativity"] },
  { id: 5, platform: "Instagram", title: "Meet the Curiosity Box", description: "What happens when you remove sight and only use touch and smell?", tags: ["tools", "observation"] },
  { id: 6, platform: "Instagram", title: "5 Promises We Make to Every Child", description: "Honest education starts with never drawing for your child.", tags: ["philosophy", "classroom"] },
  { id: 7, platform: "Facebook", title: "Noljak Parent Evening Recap", description: "Parents shared their observations of their children's creative growth.", tags: ["parents", "community"] },
  { id: 8, platform: "YouTube", title: "The EPE Model Explained", description: "Engage. Performance. Express. How CreKiC builds whole-body learners.", tags: ["crekic", "model"] },
  { id: 9, platform: "Facebook", title: "Grand Opening: Noljak Philippines", description: "A new chapter in Southeast Asia — thank you for your support!", tags: ["Philippines", "global"] },
  { id: 10, platform: "Medium", title: "Thinking Observation vs. Passive Looking", description: "There is a profound difference between seeing and truly observing.", tags: ["observation", "philosophy"] },
  { id: 11, platform: "Instagram", title: "Real Snail. Real Data. Real Art.", description: "Week 1 of Basic Course: children observe a real snail with all five senses.", tags: ["basic", "observation"] },
  { id: 12, platform: "YouTube", title: "9 Imagination Tools in Action", description: "See how children use Shape Shifting and Avatar POV to create.", tags: ["creator", "tools"] },
  { id: 13, platform: "Blog", title: "What Makes Noljak Different?", description: "A deep dive into our curriculum philosophy and real-object approach.", tags: ["philosophy", "curriculum"] },
  { id: 14, platform: "Instagram", title: "I-Canvas: More Than Just a Drawing Board", description: "The I-Canvas bridges feelings and language in the CreKiC classroom.", tags: ["crekic", "tools"] },
  { id: 15, platform: "Facebook", title: "Noljak Germany: First Month Update", description: "Our European center shares early impressions and student stories.", tags: ["Germany", "global"] },
  { id: 16, platform: "Medium", title: "AI Cannot Replace This", description: "Original sensory experience is the one thing no algorithm can replicate.", tags: ["philosophy", "AI"] },
  { id: 17, platform: "YouTube", title: "From Observation to Masterpiece", description: "A time-lapse of a Creator Course student's 4-week project journey.", tags: ["creator", "project"] },
  { id: 18, platform: "Blog", title: "Less Plastic. More Real.", description: "How Noljak's commitment to real materials shapes better learners.", tags: ["philosophy", "environment"] },
]

const platformColors: Record<Exclude<Platform, "All">, string> = {
  Medium: "bg-black text-white",
  YouTube: "bg-[#FF0000] text-white",
  Instagram: "bg-[#E1306C] text-white",
  Facebook: "bg-[#1877F2] text-white",
  Blog: "bg-[#03C75A] text-white",
}

const filters: Platform[] = ["All", "Medium", "Instagram", "Facebook", "YouTube", "Blog"]

const socialLinks = [
  { name: "Instagram", href: "https://www.instagram.com/noljakmyart_official/", color: "bg-[#E1306C]" },
  { name: "Facebook", href: "https://www.facebook.com/share/1CmPXvvFHE/", color: "bg-[#1877F2]" },
  { name: "YouTube", href: "https://youtube.com/@noljak-my-art-official", color: "bg-[#FF0000]" },
  { name: "Medium", href: "https://medium.com/@noljak", color: "bg-black" },
]

export default function NowNoljakPage() {
  const [activeFilter, setActiveFilter] = useState<Platform>("All")
  const [selectedCard, setSelectedCard] = useState<Card | null>(null)

  const filteredCards = activeFilter === "All" 
    ? cards 
    : cards.filter(card => card.platform === activeFilter)

  // Scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "translate-y-4")
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  // Close modal on ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedCard(null)
    }
    window.addEventListener("keydown", handleEsc)
    return () => window.removeEventListener("keydown", handleEsc)
  }, [])

  return (
    <main className="min-h-screen bg-white">
      {/* Section 1: Hero */}
      <section className="bg-white min-h-[80vh] flex items-center justify-center py-20 md:py-[120px] pt-[160px]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 text-center">
          
          <h1 className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-100 font-heading font-bold text-[#0F1B3D] text-[36px] md:text-[64px] leading-tight mb-6">
            See Noljak happening around the world.
          </h1>
          <p className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-200 font-sans text-[#5F6B7A] text-lg md:text-xl max-w-[680px] mx-auto">
            From Korea to Global — real classroom moments of observation, thinking, and creative expression.
          </p>
        </div>
      </section>

      {/* Section 2: Filter Bar */}
      <section className="bg-white sticky top-0 z-40 border-b border-[#E8ECF1]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-4">
          <div className="flex gap-2 overflow-x-auto no-scrollbar">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`flex-shrink-0 px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                  activeFilter === filter
                    ? "bg-[#F6C400] text-[#0F1B3D]"
                    : "bg-transparent border border-[#E8ECF1] text-[#5F6B7A] hover:border-[#0F1B3D] hover:text-[#0F1B3D]"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Content Grid */}
      <section className="bg-[#FFFDF5] py-20">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCards.map((card, index) => (
              <div
                key={card.id}
                onClick={() => setSelectedCard(card)}
                className="fade-up opacity-0 translate-y-4 transition-all duration-500 bg-white rounded-2xl overflow-hidden shadow-sm cursor-pointer hover:scale-[1.03] hover:shadow-lg"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {/* Thumbnail */}
                <div className="relative h-[200px] bg-[#E8ECF1]">
                  <span className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-[11px] font-bold ${platformColors[card.platform]}`}>
                    {card.platform}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-heading font-bold text-[#0F1B3D] text-[15px] line-clamp-2">
                    {card.title}
                  </h3>
                  <p className="font-sans text-[#5F6B7A] text-[13px] line-clamp-2 mt-2">
                    {card.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {card.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-[#FFFDF5] border border-[#E8ECF1] text-[#5F6B7A] text-[11px] px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Modal */}
      {selectedCard && (
        <div
          className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedCard(null)}
        >
          <div
            className="bg-white rounded-[20px] max-w-[600px] w-full p-10 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedCard(null)}
              className="absolute top-4 right-4 text-[#5F6B7A] hover:text-[#0F1B3D] transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <span className={`inline-block px-2.5 py-1 rounded-full text-[11px] font-bold mb-4 ${platformColors[selectedCard.platform]}`}>
              {selectedCard.platform}
            </span>

            <div className="h-[280px] bg-[#E8ECF1] rounded-xl mb-4" />

            <div className="flex flex-wrap gap-1.5 mb-4">
              {selectedCard.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-[#FFFDF5] border border-[#E8ECF1] text-[#5F6B7A] text-[11px] px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h3 className="font-heading font-bold text-[#0F1B3D] text-[22px] mb-3">
              {selectedCard.title}
            </h3>
            <p className="font-sans text-[#5F6B7A] text-base mb-6">
              {selectedCard.description}
            </p>

            <a
              href="#"
              className="block w-full bg-[#F6C400] text-[#0F1B3D] font-bold text-center py-3 rounded-lg hover:bg-[#E5B600] transition-colors"
            >
              Go to {selectedCard.platform} &rarr;
            </a>
          </div>
        </div>
      )}

      {/* Section 5: SNS Connection */}
      <section className="bg-[#0F1B3D] py-20 md:py-[120px]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 text-center">
          <h2 className="fade-up opacity-0 translate-y-4 transition-all duration-500 font-heading font-bold text-white text-[28px] md:text-[44px] leading-tight mb-4">
            Follow Noljak around the world.
          </h2>
          <p className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-100 font-sans text-[#5F6B7A] text-base md:text-lg max-w-[680px] mx-auto mb-10">
            Stay connected with real classroom moments, new center openings, and creative stories from our global community.
          </p>

          <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-200 grid grid-cols-2 md:flex md:justify-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${link.color} text-white font-bold text-[15px] px-7 py-3.5 rounded-lg hover:opacity-85 transition-opacity`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: CTA */}
      <section className="bg-[#F6C400] py-20 md:py-[120px]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 text-center">
          <h2 className="fade-up opacity-0 translate-y-4 transition-all duration-500 font-heading font-bold text-[#0F1B3D] text-[28px] md:text-[44px] leading-tight mb-10">
            Want to see Noljak in person?
          </h2>

          <div className="fade-up opacity-0 translate-y-4 transition-all duration-500 delay-100 flex flex-col md:flex-row justify-center gap-4">
            <Link
              href="/find-center"
              className="bg-[#0F1B3D] text-white font-bold text-base px-8 py-4 rounded-lg hover:bg-white hover:text-[#0F1B3D] transition-all duration-300"
            >
              Find a Center Near You
            </Link>
            <Link
              href="/global-business"
              className="border-2 border-[#0F1B3D] text-[#0F1B3D] font-bold text-base px-8 py-4 rounded-lg hover:bg-[#0F1B3D] hover:text-white transition-all duration-300"
            >
              Become a Global Partner
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
