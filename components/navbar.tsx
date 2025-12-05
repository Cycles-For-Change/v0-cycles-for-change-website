"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/newsletters", label: "Newsletters" },
    { href: "/about-us", label: "About Us" },
    { href: "/our-mission", label: "Our Mission" },
    { href: "/blog", label: "Blog" },
    { href: "/press", label: "Press" },
    { href: "/contact", label: "Contact" },
    { href: "/socials", label: "Socials" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-pink-200/50 bg-gradient-to-r from-pink-800 via-pink-700 to-pink-800 shadow-lg backdrop-blur-sm">
      <div className="container flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center group">
          <span
            className="text-2xl font-bold text-white transition-transform group-hover:scale-105"
            style={{ fontFamily: "var(--font-shrikhand), cursive" }}
          >
            Cycles for Change
          </span>
        </Link>

        {/* Mobile menu button */}
        <Button variant="ghost" size="icon" className="md:hidden text-white hover:bg-pink-700/50" onClick={toggleMenu}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="sr-only">Toggle menu</span>
        </Button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative px-4 py-2 text-sm font-medium text-white/90 hover:text-white transition-all duration-200 group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-200 group-hover:w-full" />
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-pink-200/30 bg-pink-800/95 backdrop-blur-sm">
          <div className="container py-4 flex flex-col space-y-1 px-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-3 text-sm font-medium text-white/90 hover:text-white hover:bg-pink-700/50 rounded-lg transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
