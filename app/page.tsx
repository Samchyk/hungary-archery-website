import Link from 'next/link'
import Image from 'next/image'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { CookieBanner } from '@/components/cookie-banner'
import { ArrowRight } from 'lucide-react'

export default function HomePage() {
  const features = [
    {
      title: 'Hivatásos Képzés',
      description: 'Tanulj meg a legjobbtól. Részletes útmutatások és képzési programok.',
      href: '/training',
      image: '/training.jpg',
    },
    {
      title: 'Gazdag Történelem',
      description: 'Fedezd fel az íjászat évszázados hagyományait és magyar gyökereit.',
      href: '/history',
      image: '/history.jpg',
    },
    {
      title: 'Íjtípusok Ismerete',
      description: 'Ismerd meg az eltérő íjtípusok jellemzőit és technikai különbségeit.',
      href: '/types',
      image: '/outdoor-range.jpg',
    },
    {
      title: 'Felszerelés Útmutató',
      description: 'Komprehenzív útmutató az íjászati felszerelésről és karbantartásról.',
      href: '/equipment',
      image: '/equipment.jpg',
    },
  ]

  const blogPosts = [
    {
      title: 'Az Íjászat Alapjai',
      excerpt: 'Ismerkedj meg az íjászat alapvető technikáival és biztonsági szabályaival.',
    },
    {
      title: 'Olimpiai Íjászat',
      excerpt: 'Hogyan fejlődött az íjászat az olimpiai sportok között és mik a versenysportok legfontosabb jellegzetességei.',
    },
    {
      title: 'Tradicionális Technikák',
      excerpt: 'Klasszikus íjászati módszerek és gyakorlatok, amelyek közvetlenül a múltból eredeztethetők.',
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-black py-0">
          <div className="relative h-[500px] md:h-[600px] lg:h-[700px]">
            <Image
              src="/hero-archery.jpg"
              alt="Professional archery athlete in action"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/55 to-black/70" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="text-center space-y-6 md:space-y-8 px-4">
              <h1 className="hero-heading text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.7)]">
                Az Íjászat Világa
              </h1>
              <p className="section-subheading text-white max-w-2xl mx-auto drop-shadow-[0_1px_8px_rgba(0,0,0,0.6)]">
                Fedezd fel az egyik legöregebb magyar tradíciónak számító sportot. Képzés, technika, közösség – egy helyen.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link href="/training" className="px-6 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 transition-colors shadow-lg inline-flex items-center gap-2 justify-center">
                  Kezdj el tanulni <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/blog" className="px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-white/90 transition-colors shadow-lg inline-flex items-center gap-2 justify-center">
                  Fedezz fel cikkeket <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 md:py-28 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="section-heading mb-4">Fedezz fel mindent</h2>
              <p className="section-subheading max-w-2xl mx-auto">
                Az összes szükséges információ és erőforrás az íjászatról egy korszerű platformon.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {features.map((feature) => (
                <Link
                  key={feature.title}
                  href={feature.href}
                  className="group card-subtle hover:shadow-lg hover:border-accent/50 transition-all cursor-pointer overflow-hidden"
                >
                  <div className="relative h-48 mb-4 -mx-6 -mt-6">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-foreground/70">{feature.description}</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-accent opacity-0 group-hover:opacity-100 transition-opacity ml-4 flex-shrink-0 mt-1" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Preview */}
        <section className="py-20 md:py-28 bg-card/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between gap-8 mb-12 md:mb-16 flex-col md:flex-row">
              <div>
                <h2 className="section-heading mb-4">Legutóbbi cikkek</h2>
                <p className="section-subheading">
                  Tanulj az íjászat legújabb tendenciáiról és stratégiáiról.
                </p>
              </div>
              <Link href="/blog" className="button-primary inline-flex items-center gap-2 flex-shrink-0">
                Összes cikk <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {blogPosts.map((post) => (
                <div key={post.title} className="card-subtle group hover:shadow-lg transition-all">
                  <div className="flex flex-col h-full">
                    <h3 className="text-lg font-bold mb-3 group-hover:text-accent transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-foreground/70 flex-1 mb-4">{post.excerpt}</p>
                    <Link href="/blog" className="text-accent font-medium hover:text-accent/80 transition-colors inline-flex items-center gap-1">
                      Olvass tovább <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-28 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="section-heading mb-6">Csatlakozz a közösséghez</h2>
            <p className="section-subheading mb-8">
              Legyen része a magyar íjászat reneszánszának. Ismerkedj meg az íjászok közösségével, tanulj az előhaladott technikákról és fejleszd készségeidet.
            </p>
            <Link href="/about" className="button-primary inline-flex items-center gap-2">
              Tudj meg többet rólunk <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <CookieBanner />
    </div>
  )
}
