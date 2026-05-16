import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { CookieBanner } from '@/components/cookie-banner'
import Image from 'next/image'

export const metadata = {
  title: 'Íjászati Érdekességek - Fascinálóf Tények',
  description: 'Fedezd fel az íjászat körüli fascinálóf tényeket és történeteket.',
}

export default function FactsPage() {
  const facts = [
    {
      title: 'Az Íjászat Legöregebb Sport',
      description: 'Az íjászat az egyik legöregebb sport, amelyet az ősidőktől gyakorolnak az emberek.',
      content: 'Közel 50,000 éves történettel az íjászat egyike az legrégebb emberi tevékenységeknek.',
    },
    {
      title: 'Olimpiai Újra Felfedezés',
      description: 'Az íjászat újra az olimpiai program részévé vált a 1972. év után.',
      content: 'Az olimpiai íjászat szabályok és technikák világszinten standardizálódtak.',
    },
    {
      title: 'Rekordok és Teljesítmény',
      description: 'A modern íjászok hihetetlen pontossággal érik el a célt több méter távolságból.',
      content: 'A legeredményes íjászok 99% pontosságot érhetnek el versenyfeladatokban.',
    },
    {
      title: 'Fiziológiai Előnyök',
      description: 'Az íjászat fejleszti az erőt, a rugalmasságot, és az mentális fókuszt.',
      content: 'Az íjászat egy teljes testedzés, amely javítja a kardiovaszkuláris egészséget is.',
    },
    {
      title: 'Globális Közösség',
      description: 'Millió íjász gyakorol világszerte, különféle kultúrákban és tradícióban.',
      content: 'Az íjászat kultúrán és határon feletti sport, amely embereket összeköt.',
    },
    {
      title: 'Versenyek és Tornák',
      description: 'Nemzetközi versenyeket tartanak rendszeresen, a világbajnokságtól a regionális tornákig.',
      content: 'Az íjászat versenyei magas szintű athleticizmust és mentális képességeket igényelnek.',
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="relative overflow-hidden bg-black h-80 md:h-96 flex items-center justify-center">
          <Image
            src="/competition.jpg"
            alt="Archery competition"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 text-center text-white px-4">
            <h1 className="hero-heading text-white">Íjászati Érdekességek</h1>
            <p className="section-subheading text-white/90 max-w-2xl mx-auto mt-4">
              Fedezz fel fascinálóf tényeket az íjászat körül.
            </p>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {facts.map((fact) => (
                <div key={fact.title} className="card-subtle hover:shadow-lg transition-all">
                  <h3 className="text-xl font-bold mb-3 text-accent">{fact.title}</h3>
                  <p className="text-foreground/80 mb-4">{fact.description}</p>
                  <p className="text-foreground/70 text-sm">{fact.content}</p>
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
