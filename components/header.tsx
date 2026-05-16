'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '/', label: 'Kezdőlap' },
  { href: '/training', label: 'Képzés' },
  { href: '/history', label: 'Történelem' },
  { href: '/types', label: 'Íjtípusok' },
  { href: '/facts', label: 'Érdekességek' },
  { href: '/equipment', label: 'Felszerelés' },
  { href: '/rules', label: 'Szabályok' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'Rólunk' },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-primary"
        >
          Hungaryarchery
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-gray-100 transition"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden rounded-md p-2 hover:bg-gray-100 transition"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="flex flex-col px-2 py-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-gray-100 transition"
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