"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { ChevronDown, Menu, X } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

type NavItem = {
  href: string
  label: string
  dropdown?: { href: string; label: string }[]
}

const navLinks: NavItem[] = [
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
  {
    href: "/find-center",
    label: "Find Center",
    dropdown: [
      { href: "/find-center/kr", label: "KR" },
      { href: "/find-center/us", label: "US" },
      { href: "/find-center/vn", label: "VN" },
      { href: "/find-center/ph", label: "PH" },
      { href: "/find-center/de", label: "DE" },
      { href: "/find-center/others", label: "Others" },
    ]
  },
  {
    href: "/global-business",
    label: "Global Business",
    dropdown: [
      { href: "/global-business/support", label: "Our Support" },
      { href: "/global-business/how-it-works", label: "How It Works" },
      { href: "/global-business/success-stories", label: "Success Stories" },
      { href: "/global-business/get-started", label: "Get Started" },
    ]
  },
]

const languages = [
  { code: "EN", label: "English" },
  { code: "KR", label: "Korean" },
  { code: "VN", label: "Vietnamese" },
]

export function Navigation() {
  const router = useRouter()
  const [currentLang, setCurrentLang] = useState("EN")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 w-full">
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
                <div key={link.href} className="relative group pb-2">
                  <button
                    onClick={() => router.push(link.dropdown![0].href)}
                    className="text-white/90 hover:text-white text-base font-medium transition-colors flex items-center gap-1 px-3 py-2 cursor-pointer"
                  >
                    {link.label}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  <div className="absolute top-full left-0 w-40 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 pt-2">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-[#0F1B3D] hover:bg-[#FFFDF5] first:rounded-t-md last:rounded-b-md"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
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
                  <div key={link.href} className="flex flex-col gap-2">
                    <span className="text-white/90 text-base font-medium">
                      {link.label}
                    </span>
                    <div className="pl-4 flex flex-col gap-2">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="text-white/70 hover:text-white text-sm transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
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
                          ? "text-[#F6C400]"
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
