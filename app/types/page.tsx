import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { CookieBanner } from '@/components/cookie-banner'
import Image from 'next/image'

export const metadata = {
  title: 'Íjtípusok - Fedezd fel a Különböző Típusokat',
  description: 'Ismerd meg az eltérő íjtípusok jellemzőit: nyílíj, recurve, compound és tradicionális íjak.',
}

export default function TypesPage() {
  const types = [
    {
      name: 'Nyílíj (Recurve)',
      description: 'A klasszikus íjtípus, amely az olimpiai versenyek alapja.',
      features: [
        'Flexibilis szerkesztés',
        'Jó pontos lövések',
        'Széles körben használt versenyen',
      ],
    },
    {
      name: 'Compound Íj',
      description: 'Modern, mechanikus íj, amely csigákat és ellensúlyozást használ.',
      features: [
        'Magasabb teljesítmény',
        'Jobb tényleges erő',
        'Precíziós lövésekhez ideális',
      ],
    },
    {
      name: 'Egyenes Íj (Longbow)',
      description: 'Tradicionális, egyenes szerkesztésű íj az íjászat elődeiből.',
      features: [
        'Egyszerű konstrukció',
        'Történelmi hagyomány',
        'Tradicionális versenyek',
      ],
    },
    {
      name: 'Közepes Íj (Flatbow)',
      description: 'Az egyenes és recurve közötti hibrid íj forma.',
      features: [
        'Közepes teljesítmény',
        'Egyensúlyi jellegzetességek',
        'Versátilis használat',
      ],
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="relative overflow-hidden bg-black h-80 md:h-96 flex items-center justify-center">
          <Image
            src="/outdoor-range.jpg"
            alt="Outdoor archery range"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 text-center text-white px-4">
            <h1 className="hero-heading text-white">Íjtípusok</h1>
            <p className="section-subheading text-white/90 max-w-2xl mx-auto mt-4">
              Ismerd meg az eltérő íjtípusok jellemzőit és alkalmazásait.
            </p>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {types.map((type) => (
                <div key={type.name} className="card-subtle hover:shadow-lg transition-all">
                  <h3 className="text-2xl font-bold mb-2 text-accent">{type.name}</h3>
                  <p className="text-foreground/80 mb-6">{type.description}</p>
                  <ul className="space-y-2">
                    {type.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <span className="text-accent font-bold mt-0.5">✓</span>
                        <span className="text-foreground/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <CookieBanner />
    </div>
  )
}
