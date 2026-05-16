import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { CookieBanner } from '@/components/cookie-banner'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Íjászati Képzés - Tanulj az Alapoktól az Haladványokig',
  description: 'Komprehenzív képzési program az íjászathoz. Tanulj az alapoktól, fejleszd technikáidat és válj profi íjászattá.',
}

export default function TrainingPage() {
  const levels = [
    {
      level: 'Kezdő',
      duration: '4-6 hét',
      topics: [
        'Az íj alapos bemutatása',
        'Helyes körülfogás és tartás',
        'Lövéstechnika alapjai',
        'Biztonsági protokollok',
        'Első nyilak gyakorlása',
      ],
    },
    {
      level: 'Köztes',
      duration: '8-12 hét',
      topics: [
        'Pontosság javítása',
        'Íveltségtechnika fejlesztése',
        'Versenyfelkészítés',
        'Fizikai kondíció fejlesztés',
        'Mentális készség fejlesztés',
      ],
    },
    {
      level: 'Haladó',
      duration: '12+ hét',
      topics: [
        'Versenysportban való részvétel',
        'Haladó technikák és finomítások',
        'Edzésvezetés tanulása',
        'Versenystraténa fejlesztése',
        'Közösségi vezetés és mentoring',
      ],
    },
  ]

  const tips = [
    {
      title: 'Konzisztencia',
      description: 'Rendszeres gyakorlás az kulcsa a fejlődésnek. Célozz meg legalább 2-3 alkalmat hetente.',
    },
    {
      title: 'Helyes Forma',
      description: 'A technika előbb jön, mint a teljesítmény. Dolgozz egy tapasztalt edzővel a helyes formáért.',
    },
    {
      title: 'Fizikai Felkészültség',
      description: 'Erősítés és nyújtás szükséges az erőforrások kihasználásához és az sérülések megelőzéséhez.',
    },
    {
      title: 'Mentális Készültség',
      description: 'Az íjászat egyaránt fizikai és mentális sport. Fejlesztsd a koncentrációd és a pihenési képességedet.',
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden bg-black h-80 md:h-96 flex items-center justify-center">
          <Image
            src="/training.jpg"
            alt="Archery training session"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 text-center text-white px-4">
            <h1 className="hero-heading text-white">Íjászati Képzés</h1>
            <p className="section-subheading text-white/90 max-w-2xl mx-auto mt-4">
              Lépj be az íjászat világába. Strukturált képzési programok az összes szinthez.
            </p>
          </div>
        </section>

        {/* Training Levels */}
        <section className="py-20 md:py-28 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="section-heading">Képzési Szintek</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {levels.map((item) => (
                <div key={item.level} className="card-subtle hover:shadow-lg transition-all">
                  <h3 className="text-2xl font-bold mb-2 text-accent">{item.level}</h3>
                  <p className="text-sm text-muted-foreground mb-6">{item.duration}</p>
                  <ul className="space-y-3">
                    {item.topics.map((topic) => (
                      <li key={topic} className="flex items-start gap-3">
                        <span className="text-accent font-bold mt-0.5">•</span>
                        <span className="text-foreground/80">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tips Section */}
        <section className="py-20 md:py-28 bg-card/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="section-heading mb-12 md:mb-16">Képzési Tanácsok</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {tips.map((tip) => (
                <div key={tip.title} className="border-l-4 border-accent pl-6">
                  <h3 className="text-xl font-bold mb-2">{tip.title}</h3>
                  <p className="text-foreground/70">{tip.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Link href="/about" className="button-primary inline-flex items-center gap-2">
              Keress szakértelmet <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <CookieBanner />
    </div>
  )
}
