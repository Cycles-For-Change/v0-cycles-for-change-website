"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from 'lucide-react'

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center">
          <span className="text-xl font-bold text-pink-800">Cycles for Change</span>
        </Link>

        {/* Mobile menu button */}
        <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="sr-only">Toggle menu</span>
        </Button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex gap-6">
          <Link href="/" className="text-sm font-medium hover:text-pink-700 transition-colors">
            Home
          </Link>
          <Link href="/newsletters" className="text-sm font-medium hover:text-pink-700 transition-colors">
            Newsletters
          </Link>
          <Link href="/about-us" className="text-sm font-medium hover:text-pink-700 transition-colors">
            About Us
          </Link>
          <Link href="/our-mission" className="text-sm font-medium hover:text-pink-700 transition-colors">
            Our Mission
          </Link>
          <Link href="/blog" className="text-sm font-medium hover:text-pink-700 transition-colors">
            Blog
          </Link>
          <Link href="/press" className="text-sm font-medium hover:text-pink-700 transition-colors">
            Press
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:text-pink-700 transition-colors">
            Contact
          </Link>
          <Link href="/socials" className="text-sm font-medium hover:text-pink-700 transition-colors">
            Socials
          </Link>
        </nav>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t">
          <div className="container py-4 flex flex-col space-y-4">
            <Link
              href="/"
              className="text-sm font-medium hover:text-pink-700 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/newsletters"
              className="text-sm font-medium hover:text-pink-700 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Newsletters
            </Link>
            <Link
              href="/about-us"
              className="text-sm font-medium hover:text-pink-700 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/our-mission"
              className="text-sm font-medium hover:text-pink-700 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Our Mission
            </Link>
            <Link
              href="/blog"
              className="text-sm font-medium hover:text-pink-700 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/press"
              className="text-sm font-medium hover:text-pink-700 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Press
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium hover:text-pink-700 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/socials"
              className="text-sm font-medium hover:text-pink-700 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Socials
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
