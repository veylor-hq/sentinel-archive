import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"

export const metadata: Metadata = {
  title: "Sentinel Archive - Personal Operations Platform",
  description: "The Personal Operations Platform. Awareness. Accountability. Adaptability.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <script defer src="https://umami.ihorsavenko.com/script.js" data-website-id="2fbd4661-f744-4def-a199-55f37e4c348b"></script>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>{children}</body>
    </html>
  )
}
