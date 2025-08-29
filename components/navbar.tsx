"use client"

import { useState } from "react"
import { Search, Menu, X } from "lucide-react"

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { name: "OVERVIEW", href: "#overview" },
    { name: "RELEASES", href: "#releases" },
    { name: "CHANGELOG", href: "#changelog" },
    { name: "VERSIONS", href: "#versions" },
    { name: "DOCUMENTATION", href: "#documentation" },
    { name: "SUBSCRIBE", href: "#subscribe" },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setMobileMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur border-b border-gray-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <button
          onClick={() => scrollToSection("#overview")}
          className="text-2xl font-bold tracking-tight uppercase hover:text-gray-300 transition-colors"
        >
          RELEASE ARCHIVE
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className="text-sm font-semibold uppercase tracking-wide text-gray-400 hover:text-white transition-colors"
            >
              {item.name}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <Search className="h-5 w-5 text-gray-400 hover:text-white transition cursor-pointer" />

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? (
              <X className="h-5 w-5 text-gray-400 hover:text-white transition" />
            ) : (
              <Menu className="h-5 w-5 text-gray-400 hover:text-white transition" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black border-t border-gray-800">
          <div className="px-6 py-4 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="block text-sm font-semibold uppercase tracking-wide text-gray-400 hover:text-white transition-colors w-full text-left"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
