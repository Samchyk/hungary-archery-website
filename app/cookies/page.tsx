import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { CookieBanner } from '@/components/cookie-banner'

export const metadata = {
  title: 'Cookie Szabályzat',
  description: 'Az Íjászat Hungaryarchery cookie szabályzata és sütik használata.',
}

export default function CookiesPage() {
  const currentYear = new Date().getFullYear()

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-b from-background via-background to-card/30 py-20 md:py-28 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="hero-heading mb-6">Cookie Szabályzat</h1>
            <p className="section-subheading max-w-2xl">
              Utolsó frissítés: {currentYear}
            </p>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-background">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">1. Mi Jsou a Sütik?</h2>
              <p className="text-foreground/80">
                A sütik (cookies) kis szöveges fájlok, amelyek a weboldal meglátogatásakor az Ön böngészőjében tárolódnak. Ezek segítik a weboldal működését, és információt gyűjthetnek az Ön böngészési szokásairól.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">2. Milyen Sütik Használunk?</h2>
              <p className="text-foreground/80 mb-4">
                Az Íjászat Hungaryarchery weboldal az alábbi típusú sütikket használ:
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold mb-2">Szükséges Sütik</h3>
                  <p className="text-foreground/80 ml-4">
                    Ezek a sütik a weboldal alapvető működéséhez szükségesek. Ezek nélkül a weboldal nem működne megfelelően.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Cookie Beleegyezés Sütik</h3>
                  <p className="text-foreground/80 ml-4">
                    Ezek nyomon követik, hogy Ön elfogadta-e a cookie szabályzatot.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Analitikai Sütik</h3>
                  <p className="text-foreground/80 ml-4">
                    Ezek segítik az üzemeltetőt megérteni, hogyan használják a felhasználók a weboldalt.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">3. Az Ön Választása</h2>
              <p className="text-foreground/80 mb-4">
                Az Ön böngészőjében módosíthatja a cookie beállításokat, hogy elutasítsa az összes sütit vagy csak bizonyos típusokat. Az alábbiak szerint járhat el:
              </p>
              <ul className="space-y-2 text-foreground/80 ml-4">
                <li>• Chrome: Beállítások → Adatvédelem → Cookie-k és egyéb weboldal-adatok</li>
                <li>• Firefox: Beállítások → Adatvédelem → Sütik</li>
                <li>• Safari: Beállítások → Adatvédelem</li>
                <li>• Edge: Beállítások → Adatvédelem → Cookie-k</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">4. Harmadik Fél Sütik</h2>
              <p className="text-foreground/80 mb-4">
                A weboldal harmadik féltől származó sütiteket is használhat (például analitikai partnerek). Ezek a sütik az adott szolgáltatók szabályzata szerint működnek.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">5. Adatok Megőrzése</h2>
              <p className="text-foreground/80 mb-4">
                A sütik általában az alábbiak szerint kerülnek tárolásra:
              </p>
              <ul className="space-y-2 text-foreground/80 ml-4">
                <li>• Munkameneti sütik: A böngészés végéig</li>
                <li>• Állandó sütik: Maximum 2 évig vagy az Ön választása szerint</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">6. Adatvédelem</h2>
              <p className="text-foreground/80 mb-4">
                Az Íjászat Hungaryarchery komolyan veszi az adatvédelmet. Az összes gyűjtött adatot az adatvédelmi szabályoknak megfelelően kezeljük.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">7. Kapcsolat</h2>
              <p className="text-foreground/80">
                Ha kérdéseid van a cookie szabályzattal kapcsolatban, kérjük, küldj egy üzenetet az&nbsp;<span className="font-mono">info@hungaryarchery.com</span> email címre.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <CookieBanner />
    </div>
  )
}
