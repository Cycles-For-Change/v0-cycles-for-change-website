import Link from "next/link"
import { Instagram, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full border-t bg-white py-6">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Cycles for Change. All rights reserved.
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="https://www.instagram.com/cycles_for_change/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-800 hover:text-pink-600 transition-colors"
          >
            <Instagram className="h-5 w-5" />
            <span className="sr-only">Instagram</span>
          </Link>
          <Link
            href="mailto:cyclesforchange2024@gmail.com"
            className="text-pink-800 hover:text-pink-600 transition-colors flex items-center gap-2"
          >
            <Mail className="h-5 w-5" />
            <span className="text-sm">cyclesforchange2024@gmail.com</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}
