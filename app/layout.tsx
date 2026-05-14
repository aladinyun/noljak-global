import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Noljak Global",
  description: "A global creative education brand for ages 3–7",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
