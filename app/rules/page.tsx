import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { CookieBanner } from '@/components/cookie-banner'
import Image from 'next/image'

export const metadata = {
  title: 'Íjászati Szabályok - Versenyi és Biztonsági Előírások',
  description: 'Fedezz fel az íjászati versenyi és biztonsági szabályokat.',
}

export default function RulesPage() {
  const sections = [
    {
      title: 'Biztonsági Szabályok',
      rules: [
        'Mindig vegyen használatban megfelelő védőfelszerelést',
        'Az íj csak az előírt irányban mutathat',
        'Az nyilak csak az célfelületen lövessék',
        'Soha ne szegedj az íjat terhelés alatt',
      ],
    },
    {
      title: 'Versenyi Szabályok',
      rules: [
        'Pontosan nyilazz az előírt távolságok szignálaikat',
        'A lövések szistematikusan végezzed a sorrendben',
        'Az időlimit betartása kötelező',
        'Az pontosság értékelése a lövések helyén történik',
      ],
    },
    {
      title: 'Felszerelés Szabályzat',
      rules: [
        'Az íj mérete és súlya megfelelő kell legyen',
        'Az nyilak hasonló paraméterek szükséges',
        'Védő-felszerelés engedélyezett de szigorúan limitált',
        'A mágneses vagy elektronikus segítségek tiltottak',
      ],
    },
    {
      title: 'Verseny Etika',
      rules: [
        'Fair play és sportszerűség szükséges minden versenyről',
        'Az bírók döntéseit tisztelettel kell fogadni',
        'A többi versenyzőt soha ne zavarsd',
        'Professzionális viselkedés elvárható minden közegben',
      ],
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="relative overflow-hidden bg-black h-80 md:h-96 flex items-center justify-center">
          <Image
            src="/competition.jpg"
            alt="Archery competition rules"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 text-center text-white px-4">
            <h1 className="hero-heading text-white">Íjászati Szabályok</h1>
            <p className="section-subheading text-white/90 max-w-2xl mx-auto mt-4">
              Ismerd meg az íjászati biztonsági, versenyi és etikai szabályokat.
            </p>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {sections.map((section) => (
                <div key={section.title} className="card-subtle hover:shadow-lg transition-all">
                  <h3 className="text-xl font-bold mb-6 text-accent">{section.title}</h3>
                  <ul className="space-y-3">
                    {section.rules.map((rule) => (
                      <li key={rule} className="flex items-start gap-3">
                        <span className="text-accent font-bold flex-shrink-0 mt-1">→</span>
                        <span className="text-foreground/80">{rule}</span>
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
