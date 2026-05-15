import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import type { Metadata } from "next"
import { Plus_Jakarta_Sans, Inter } from "next/font/google"
import { Navigation } from "@/components/navigation"
import { AnnouncementBanner } from "@/components/announcement-banner"
import "../globals.css"

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Noljak Global",
  description: "A global creative education brand for ages 3–7",
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const messages = await getMessages()

  return (
    <html lang={locale} className={`${plusJakartaSans.variable} ${inter.variable}`}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <AnnouncementBanner />
          <Navigation />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
