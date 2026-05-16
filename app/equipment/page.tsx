import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { CookieBanner } from '@/components/cookie-banner'
import Image from 'next/image'

export const metadata = {
  title: 'Íjászati Felszerelés - Teljes Útmutató',
  description: 'Komprehenzív útmutató az íjászati felszerelésről, karbantartásról és kiválasztásáról.',
}

export default function EquipmentPage() {
  const equipment = [
    {
      name: 'Az Íj',
      description: 'Az íjászat szíve és lelke. Az íj kiválasztása kritikus a sikerhez.',
      items: [
        'Recurve íjak - versenyhez ideális',
        'Compound íjak - erő és pontosság',
        'Longbowok - tradicionális stílus',
      ],
    },
    {
      name: 'Nyilak',
      description: 'A lövések közvetítői, melyek precízek és megfelelő súlyúak kell legyen.',
      items: [
        'Fajta és anyag kiválasztása',
        'Hossz és súly megfelelősége',
        'Karbantartás és csere',
      ],
    },
    {
      name: 'Védőfelszerelés',
      description: 'Biztonsági eszközök és védelmek az íjászat során.',
      items: [
        'Karmanty - az alkár védelméhez',
        'Ujjvédő vagy húzvédő',
        'Szem-szalag vagy kitakaró',
      ],
    },
    {
      name: 'Támogató Felszerelés',
      description: 'Egyéb hasznos eszközök az íjászat során.',
      items: [
        'Nyílvesszőtartó',
        'Íjtartó és állvány',
        'Nyílvesszőkötű és tasakok',
      ],
    },
  ]

  const maintenance = [
    'Az íj rendszeres ellenőrzése sérülésekre',
    'A húzódó szálak tisztán tartása',
    'Az nyilak csúcsának élesítése',
    'Hideg időben az íj tárolása védelem alatt',
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="relative overflow-hidden bg-black h-80 md:h-96 flex items-center justify-center">
          <Image
            src="/equipment.jpg"
            alt="Professional archery equipment"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 text-center text-white px-4">
            <h1 className="hero-heading text-white">Íjászati Felszerelés</h1>
            <p className="section-subheading text-white/90 max-w-2xl mx-auto mt-4">
              Fedezz fel mindent az íjászati felszerelésről és karbantartásáról.
            </p>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="section-heading mb-12">Felszerelési Kategóriák</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {equipment.map((cat) => (
                <div key={cat.name} className="card-subtle hover:shadow-lg transition-all">
                  <h3 className="text-xl font-bold mb-2 text-accent">{cat.name}</h3>
                  <p className="text-foreground/80 mb-6">{cat.description}</p>
                  <ul className="space-y-2">
                    {cat.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="text-accent font-bold mt-0.5">•</span>
                        <span className="text-foreground/80">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="bg-card/50 border border-border rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6">Karbantartási Útmutató</h3>
              <ul className="space-y-4">
                {maintenance.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-accent font-bold mt-0.5">✓</span>
                    <span className="text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <CookieBanner />
    </div>
  )
}
