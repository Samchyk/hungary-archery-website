import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { CookieBanner } from '@/components/cookie-banner'
import Image from 'next/image'

export const metadata = {
  title: 'Az Íjászat Történelme - Magyar Tradíció',
  description: 'Fedezd fel az íjászat gazdag történelmét. Az ősi magyar íjászok hagyománya napjainkig.',
}

export default function HistoryPage() {
  const periods = [
    {
      era: 'Ősi Magyar Idő',
      description: 'Az íjászat az magyar őseink alapvető képessége volt. A nomád harcosok íjuk használták vadászathoz és hadviseléshez.',
      details: 'A magyar honfoglalás után az íjászat gyakorlata a hadi taktikák középpontjában állt.',
    },
    {
      era: 'Középkor',
      description: 'Az íjászat fejlődése és szystematizálódása a középkori magyar államban. Jelentős szerep a hadviselésben.',
      details: 'A középkorban az íjászokat külön kiképezték és szervezték a magyar hadseregben.',
    },
    {
      era: 'Modern Íjászat',
      description: 'Az íjászat sportként való megjelenése és fejlődése a 20. században. Olimpiai sport lett.',
      details: 'A modern íjászat szabályai és technikái világszinten standardizálódtak az olimpiai mozgalom hatása alatt.',
    },
    {
      era: 'Napjaink',
      description: 'Az íjászat világméretű sport és hobbi. Magyar íjászok nemzetközi versenyen vesznek részt.',
      details: 'A 21. században az íjászat továbbra is virágzik, új technikákkal és eszközökkel fejlődik.',
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="relative overflow-hidden bg-black h-80 md:h-96 flex items-center justify-center">
          <Image
            src="/history.jpg"
            alt="Ancient Hungarian archer"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 text-center text-white px-4">
            <h1 className="hero-heading text-white">Az Íjászat Történelme</h1>
            <p className="section-subheading text-white/90 max-w-2xl mx-auto mt-4">
              Fedezd fel az íjászat gazdag történelmét az ősidőktől napjainkig.
            </p>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              {periods.map((period, idx) => (
                <div key={period.era} className="border-l-4 border-accent pl-6">
                  <div className="flex items-baseline gap-4 mb-3">
                    <h2 className="text-2xl font-bold">{period.era}</h2>
                    <span className="text-sm text-muted-foreground">{idx + 1}. fejezet</span>
                  </div>
                  <p className="text-lg text-foreground/80 mb-3">{period.description}</p>
                  <p className="text-foreground/70">{period.details}</p>
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
