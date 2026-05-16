import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { CookieBanner } from '@/components/cookie-banner'

export const metadata = {
  title: 'Adatvédelmi Szabályzat',
  description: 'Az Íjászat Magyarország adatvédelmi szabályzata és felhasználói adatok kezelése.',
}

export default function PrivacyPage() {
  const currentYear = new Date().getFullYear()

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-b from-background via-background to-card/30 py-20 md:py-28 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="hero-heading mb-6">Adatvédelmi Szabályzat</h1>
            <p className="section-subheading max-w-2xl">
              Utolsó frissítés: {currentYear}
            </p>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-background">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">1. Bevezetés</h2>
              <p className="text-foreground/80 mb-4">
                Az Íjászat Magyarország weboldal (a továbbiakban: "Weboldal") tiszteletben tartja az adatvédelmét, és elkötelezett az Ön személyes adatainak védelme iránt. Ez a szabályzat ismerteti, hogyan gyűjtünk, használunk és védelmezünk az Ön adatait.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">2. Gyűjtött Adatok</h2>
              <p className="text-foreground/80 mb-4">
                A Weboldal a következő adatokat gyűjthet az Ön által önként megadott információkból:
              </p>
              <ul className="space-y-2 text-foreground/80 ml-4">
                <li>• Név</li>
                <li>• Email cím</li>
                <li>• Üzenetek és megjegyzések</li>
                <li>• Böngészési és használati adatok (sütikkel rögzítve)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">3. Adatok Felhasználása</h2>
              <p className="text-foreground/80 mb-4">
                Az Ön adatait az alábbi célokra használjuk:
              </p>
              <ul className="space-y-2 text-foreground/80 ml-4">
                <li>• Az Ön kérdéseire vagy üzeneteire válaszolni</li>
                <li>• A Weboldal funkcionalitásának és felhasználói élménye javítása</li>
                <li>• Analitikai célokra és statisztikák készítésére</li>
                <li>• Az Ön jogainak és a biztonságának védelme</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">4. Adatok Megosztása</h2>
              <p className="text-foreground/80 mb-4">
                Az Ön személyes adatait nem osztjuk meg harmadik felekkel, kivéve ha a jog ezt megköveteli, vagy az Ön explicit beleegyezésével. A Weboldal harmadik féltől származó szolgáltatásokat használhat (például analitika), amelyek korlátozottan férhessenek az adatokhoz.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">5. Adatbiztonság</h2>
              <p className="text-foreground/80 mb-4">
                Az Ön adatainak védelme a mi prioritásunk. A Weboldal iparági standardnak megfelelő biztonsági intézkedéseket alkalmaz az adatok védelme érdekében. Az emailen keresztüli kommunikáció korlátozottan titkosított lehet.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">6. Az Ön Jogai</h2>
              <p className="text-foreground/80 mb-4">
                Az Ön joga:
              </p>
              <ul className="space-y-2 text-foreground/80 ml-4">
                <li>• Hozzáférni az Ön gyűjtött adataihoz</li>
                <li>• Kérni az adatok helyesbítését vagy törlését</li>
                <li>• Tiltakozni az adatok feldolgozása ellen</li>
                <li>• Beleegyezés visszavonása bármikor</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">7. Kapcsolat</h2>
              <p className="text-foreground/80">
                Ha kérdésed van az adatvédelmi szabályzattal kapcsolatban, kérjük, küldj egy üzenetet az&nbsp;<span className="font-mono">info@hungaryarchery.com</span> email címre.
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
