"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown, Menu, X } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "/what-is-noljak", label: "What is Noljak?" },
  { href: "/programs", label: "Programs" },
  { href: "/now-noljak", label: "Now Noljak" },
  { href: "/find-center", label: "Find Center" },
  { href: "/global-business", label: "Global Business" },
]

const languages = [
  { code: "EN", label: "English" },
  { code: "KR", label: "Korean" },
  { code: "VN", label: "Vietnamese" },
]

export function Navigation() {
  const [currentLang, setCurrentLang] = useState("EN")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 w-full bg-[#0F1B3D] transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-white text-2xl font-bold font-[var(--font-heading)]">
            noljak
          </Link>

          {/* Desktop Menu - Center */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/90 hover:text-white text-base font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Language Selector - Right */}
          <div className="hidden md:block">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="text-white hover:bg-white/10 hover:text-white gap-1 px-3"
                >
                  {currentLang}
                  <ChevronDown className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="min-w-[120px]">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => setCurrentLang(lang.code)}
                    className={currentLang === lang.code ? "bg-muted" : ""}
                  >
                    {lang.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-white/20 pt-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white/90 hover:text-white text-base font-medium transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="border-t border-white/20 pt-4 mt-2">
                <div className="flex gap-4">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setCurrentLang(lang.code)
                        setIsMobileMenuOpen(false)
                      }}
                      className={`text-sm font-medium transition-colors ${
                        currentLang === lang.code
                          ? "text-noljak-yellow"
                          : "text-white/70 hover:text-white"
                      }`}
                    >
                      {lang.code}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
