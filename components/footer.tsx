'use client'

import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4">Íjászat</h3>
            <p className="text-sm text-primary-foreground/80">
              Fedezze fel a magyar íjászat világát. Képzés, történelem, közösség.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Navigáció</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-secondary transition-colors">Kezdőlap</Link></li>
              <li><Link href="/training" className="hover:text-secondary transition-colors">Képzés</Link></li>
              <li><Link href="/history" className="hover:text-secondary transition-colors">Történelem</Link></li>
              <li><Link href="/blog" className="hover:text-secondary transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Erőforrások</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/equipment" className="hover:text-secondary transition-colors">Felszerelés</Link></li>
              <li><Link href="/rules" className="hover:text-secondary transition-colors">Szabályok</Link></li>
              <li><Link href="/types" className="hover:text-secondary transition-colors">Íjtípusok</Link></li>
              <li><Link href="/facts" className="hover:text-secondary transition-colors">Érdekességek</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Jogi információ</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-secondary transition-colors">Rólunk</Link></li>
              <li><Link href="/privacy" className="hover:text-secondary transition-colors">Adatvédelem</Link></li>
              <li><Link href="/cookies" className="hover:text-secondary transition-colors">Cookie szabályzat</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-primary-foreground/80">
              &copy; 2026 contact@hungaryarchery.com.
            </p>
            <p className="text-sm text-primary-foreground/80 mt-4 md:mt-0">
              Készült modern webtechnológiával.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
