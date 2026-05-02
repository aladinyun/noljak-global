"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { X } from "lucide-react"

const platforms = ["전체", "Medium", "Instagram", "Facebook", "YouTube", "Blog"]

const cards = [
  {
    id: 1,
    platform: "Medium",
    title: "Why Observation Matters in Early Childhood",
    description: "Exploring how children learn through careful looking and thinking.",
    tags: ["Education", "Philosophy"],
    image: "/images/placeholder-medium.jpg",
  },
  {
    id: 2,
    platform: "YouTube",
    title: "A Day at Noljak Hanoi",
    description: "Watch real moments from our newest center in Vietnam.",
    tags: ["Classroom", "Vietnam"],
    image: "/images/placeholder-youtube.jpg",
  },
  {
    id: 3,
    platform: "Blog",
    title: "The CreKiC Curriculum Explained",
    description: "Understanding our flagship program for young learners.",
    tags: ["Curriculum"],
    image: "/images/placeholder-blog.jpg",
  },
  {
    id: 4,
    platform: "Instagram",
    title: "Little Hands, Big Ideas",
    description: "Creative projects from our 4-year-old artists.",
    tags: ["Art", "Creativity"],
    image: "/images/placeholder-instagram-1.jpg",
  },
  {
    id: 5,
    platform: "Instagram",
    title: "Observing Nature Together",
    description: "Students discover textures and colors in leaves.",
    tags: ["Nature", "Observation"],
    image: "/images/placeholder-instagram-2.jpg",
  },
  {
    id: 6,
    platform: "Instagram",
    title: "From Korea to the World",
    description: "Celebrating our global community of young creators.",
    tags: ["Global"],
    image: "/images/placeholder-instagram-3.jpg",
  },
  {
    id: 7,
    platform: "Facebook",
    title: "Parent Workshop Highlights",
    description: "Insights from our recent family engagement session.",
    tags: ["Parents", "Workshop"],
    image: "/images/placeholder-facebook-1.jpg",
  },
  {
    id: 8,
    platform: "YouTube",
    title: "Teacher Training at Noljak",
    description: "How we prepare educators for creative teaching.",
    tags: ["Teachers", "Training"],
    image: "/images/placeholder-youtube-2.jpg",
  },
  {
    id: 9,
    platform: "Facebook",
    title: "New Center Opening Soon",
    description: "Exciting news about our upcoming location.",
    tags: ["News", "Expansion"],
    image: "/images/placeholder-facebook-2.jpg",
  },
]

const platformColors: Record<string, string> = {
  Medium: "bg-[#000000] text-white",
  YouTube: "bg-[#FF0000] text-white",
  Blog: "bg-[#0F1B3D] text-white",
  Instagram: "bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white",
  Facebook: "bg-[#1877F2] text-white",
}

const platformLinks: Record<string, string> = {
  Medium: "https://medium.com",
  YouTube: "https://youtube.com",
  Blog: "https://blog.noljak.com",
  Instagram: "https://instagram.com",
  Facebook: "https://facebook.com",
}

export function NowNoljak() {
  const [activeFilter, setActiveFilter] = useState("전체")
  const [selectedCard, setSelectedCard] = useState<typeof cards[0] | null>(null)

  const filteredCards = activeFilter === "전체" 
    ? cards 
    : cards.filter(card => card.platform === activeFilter)

  return (
    <section id="now-noljak" className="bg-white py-[120px] px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-12">
        {/* Row 1 — Section Title */}
        <h2 className="font-heading font-bold text-[#0F1B3D] text-[28px] md:text-[44px] text-center">
          Now Noljak
        </h2>

        {/* Row 2 — Main Message & Supporting Copy */}
        <div className="flex flex-col items-center gap-4 max-w-[680px]">
          <h3 className="font-heading font-bold text-[#0F1B3D] text-[24px] md:text-[32px] text-center">
            See Noljak happening around the world.
          </h3>
          <p className="font-sans text-[#5F6B7A] text-base md:text-lg text-center leading-relaxed">
            From Korea to Global and beyond, discover real classroom moments of observation, thinking, and creative expression.
          </p>
        </div>

        {/* Row 3 — Filter CTA Bar */}
        <div className="flex flex-wrap justify-center gap-2">
          {platforms.map((platform) => (
            <Button
              key={platform}
              variant={activeFilter === platform ? "default" : "outline"}
              onClick={() => setActiveFilter(platform)}
              className={
                activeFilter === platform
                  ? "bg-[#F6C400] text-[#0F1B3D] font-bold hover:bg-[#E5B600] border-transparent"
                  : "border-[#E8ECF1] text-[#5F6B7A] hover:bg-[#F5F0E0] hover:text-[#0F1B3D]"
              }
            >
              {platform}
            </Button>
          ))}
        </div>

        {/* Row 4-6 — 9 Cards in 3x3 grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {filteredCards.map((card) => (
            <div
              key={card.id}
              onClick={() => setSelectedCard(card)}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[#E8ECF1] cursor-pointer transition-all duration-300 hover:scale-[1.03] hover:shadow-lg"
            >
              {/* Platform Badge */}
              <div className="relative">
                <div className="aspect-video bg-[#E8ECF1] flex items-center justify-center">
                  <span className="text-[#5F6B7A] text-sm">Image Placeholder</span>
                </div>
                <span className={`absolute top-3 left-3 px-2 py-1 rounded text-xs font-medium ${platformColors[card.platform]}`}>
                  {card.platform}
                </span>
              </div>

              {/* Card Content */}
              <div className="p-4 flex flex-col gap-2">
                <h4 className="font-heading font-bold text-[#0F1B3D] text-sm line-clamp-2">
                  {card.title}
                </h4>
                <p className="font-sans text-[#5F6B7A] text-[13px] line-clamp-2">
                  {card.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-1">
                  {card.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-[#F5F0E0] text-[#5F6B7A] text-xs px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        <Dialog open={!!selectedCard} onOpenChange={() => setSelectedCard(null)}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle className="font-heading font-bold text-[#0F1B3D] text-xl">
                {selectedCard?.title}
              </DialogTitle>
            </DialogHeader>
            <div className="flex flex-col gap-4">
              {/* Image */}
              <div className="aspect-video bg-[#E8ECF1] rounded-lg flex items-center justify-center">
                <span className="text-[#5F6B7A]">Full Image Placeholder</span>
              </div>

              {/* Platform Badge */}
              {selectedCard && (
                <span className={`self-start px-3 py-1 rounded text-sm font-medium ${platformColors[selectedCard.platform]}`}>
                  {selectedCard.platform}
                </span>
              )}

              {/* Description */}
              <p className="font-sans text-[#5F6B7A] text-base">
                {selectedCard?.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {selectedCard?.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-[#F5F0E0] text-[#5F6B7A] text-sm px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA Button */}
              {selectedCard && (
                <Button
                  asChild
                  className="bg-[#F6C400] text-[#0F1B3D] font-bold hover:bg-[#E5B600] mt-2"
                >
                  <a
                    href={platformLinks[selectedCard.platform]}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Go to {selectedCard.platform}
                  </a>
                </Button>
              )}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
