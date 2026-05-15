"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useLocale, useTranslations } from "next-intl"
import { ChevronDown, Menu, X } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const languages = [
  { code: "en", label: "EN" },
  { code: "ko", label: "KR" },
  { code: "vi", label: "VN" },
]

export function Navigation() {
  const t = useTranslations("nav")
  const locale = useLocale()
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const switchLocale = (newLocale: string) => {
    const locales = ["en", "ko", "vi"]
    const segments = pathname.split("/").filter(Boolean)

    if (segments.length > 0 && locales.includes(segments[0])) {
      segments.shift()
    }

    const basePath = segments.length > 0 ? "/" + segments.join("/") : "/"

    if (newLocale === "en") {
      window.location.href = basePath
    } else {
      window.location.href = "/" + newLocale + basePath
    }
  }

  const prefix = locale === "en" ? "" : `/${locale}`

  const navLinks = [
    { href: `${prefix}/what-is-noljak`, label: t("whatIsNoljak") },
    {
      href: `${prefix}/programs`,
      label: t("programs"),
      dropdown: [
        { href: `${prefix}/programs/philosophy`, label: t("philosophy") },
        { href: `${prefix}/programs/crekic`, label: t("crekic") },
        { href: `${prefix}/programs/basic`, label: t("basic") },
        { href: `${prefix}/programs/creator`, label: t("creator") },
        { href: `${prefix}/programs/others`, label: t("others") },
      ]
    },
    { href: `${prefix}/now-noljak`, label: t("nowNoljak") },
    { href: `${prefix}/find-center`, label: t("findCenter") },
    { href: `${prefix}/global-business`, label: t("globalBusiness") },
  ]

  const currentLangLabel = languages.find(l => l.code === locale)?.label || "EN"

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0F1B3D] h-[60px] flex items-center px-6 md:px-12">
      {/* Logo */}
      <Link href={`${prefix}/`} className="text-white font-bold text-xl mr-10 font-heading">
        noljak
      </Link>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-6 flex-1 justify-center">
        {navLinks.map((item) =>
          item.dropdown ? (
            <DropdownMenu key={item.href}>
              <DropdownMenuTrigger asChild>
                <button className="text-white text-sm flex items-center gap-1 hover:text-[#F6C400] transition-colors">
                  {item.label} <ChevronDown size={14} />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white shadow-lg rounded-lg p-1">
                {item.dropdown.map((sub) => (
                  <DropdownMenuItem key={sub.href} asChild>
                    <Link href={sub.href} className="text-[#0F1B3D] text-sm px-3 py-2 hover:bg-[#F6C400]/10 rounded">
                      {sub.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link
              key={item.href}
              href={item.href}
              className="text-white text-sm hover:text-[#F6C400] transition-colors"
            >
              {item.label}
            </Link>
          )
        )}
      </div>

      {/* Language Selector */}
      <div className="hidden md:block ml-auto">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="text-white text-sm flex items-center gap-1 hover:text-[#F6C400] transition-colors">
              {currentLangLabel} <ChevronDown size={14} />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-white shadow-lg rounded-lg p-1">
            {languages.map((lang) => (
              <DropdownMenuItem
                key={lang.code}
                onClick={() => switchLocale(lang.code)}
                className={`text-sm px-3 py-2 cursor-pointer rounded hover:bg-[#F6C400]/10 ${
                  locale === lang.code ? "font-bold text-[#0F1B3D]" : "text-[#5F6B7A]"
                }`}
              >
                {lang.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden ml-auto text-white"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-[60px] left-0 right-0 bg-[#0F1B3D] flex flex-col p-6 gap-4 md:hidden">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-white text-sm hover:text-[#F6C400]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="flex gap-4 mt-4">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => { switchLocale(lang.code); setIsMobileMenuOpen(false) }}
                className={`text-sm ${locale === lang.code ? "text-[#F6C400] font-bold" : "text-white"}`}
              >
                {lang.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
