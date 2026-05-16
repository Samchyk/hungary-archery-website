'use client'

import { useEffect, useState } from 'react'
import { X } from 'lucide-react'

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const cookieConsent = localStorage.getItem('cookie-consent')
    if (!cookieConsent) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setIsVisible(false)
  }

  const handleDismiss = () => {
    localStorage.setItem('cookie-consent', 'dismissed')
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-card border-t border-border shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex-1">
          <p className="text-sm text-foreground/80">
            A weboldal cookie-kat használ a felhasználói élmény javítása és az elemzés céljából. A Cookie szabályzatunkban{' '}
            <a href="/cookies" className="text-accent hover:underline">
              további információt
            </a>
            {' '}találhat.
          </p>
        </div>
        <div className="flex gap-2 whitespace-nowrap">
          <button
            onClick={handleAccept}
            className="px-4 py-2 bg-accent text-accent-foreground rounded-lg font-medium hover:bg-accent/90 transition-colors text-sm"
          >
            Elfogadás
          </button>
          <button
            onClick={handleDismiss}
            className="px-4 py-2 border border-border rounded-lg font-medium hover:bg-muted transition-colors text-sm text-foreground"
          >
            Elutasítás
          </button>
        </div>
      </div>
    </div>
  )
}
