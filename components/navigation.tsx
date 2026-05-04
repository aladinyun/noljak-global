"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
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
  {
    href: "/programs",
    label: "Programs",
    dropdown: [
      { href: "/programs/philosophy", label: "Philosophy" },
      { href: "/programs/crekic", label: "CreKiC" },
      { href: "/programs/basic", label: "Basic" },
      { href: "/programs/creator", label: "Creator" },
      { href: "/programs/others", label: "Others" },
    ]
  },
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
  const [isProgramsDropdownOpen, setIsProgramsDropdownOpen] = useState(false)
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className={`fixed top-[44px] left-0 right-0 z-[100] w-full transition-all duration-300 ${
      pathname === "/" && !isScrolled ? "bg-[#0F1B3D]/70 backdrop-blur-sm" : "bg-[#0F1B3D]"
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-white text-2xl font-bold font-[var(--font-heading)]">
            noljak
          </Link>

          {/* Desktop Menu - Center */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              link.dropdown ? (
                <DropdownMenu key={link.href}>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className="text-white/90 hover:text-white text-base font-medium transition-colors gap-1 px-3"
                    >
                      {link.label}
                      <ChevronDown className="w-4 h-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="min-w-[160px]">
                    {link.dropdown.map((item, index) => (
                      <DropdownMenuItem key={item.href} asChild>
                        <Link
                          href={item.href}
                          className={`w-full cursor-pointer ${index === 0 ? "mt-2" : ""}`}
                        >
                          {item.label}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white/90 hover:text-white text-base font-medium transition-colors"
                >
                  {link.label}
                </Link>
              )
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
                link.dropdown ? (
                  <div key={link.href}>
                    <button
                      onClick={() => setIsProgramsDropdownOpen(!isProgramsDropdownOpen)}
                      className="text-white/90 hover:text-white text-base font-medium transition-colors flex items-center gap-2 w-full text-left"
                    >
                      {link.label}
                      <ChevronDown className={`w-4 h-4 transition-transform ${isProgramsDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isProgramsDropdownOpen && (
                      <div className="mt-2 ml-4 flex flex-col gap-2">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="text-white/70 hover:text-white text-sm font-medium transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-white/90 hover:text-white text-base font-medium transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                )
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
