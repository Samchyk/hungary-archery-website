import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import { ArrowLeft, Home } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 flex items-center justify-center px-4 py-20">
        <div className="text-center space-y-8 max-w-2xl">
          <div className="space-y-4">
            <div className="text-9xl md:text-[120px] font-bold text-accent/30">404</div>
            <h1 className="hero-heading">Oldal Nem Található</h1>
            <p className="section-subheading">
              Sajnálatunk, de az Ön által keresett oldal nem létezik. Lehetséges, hogy az URL megváltozott vagy az oldal már nem elérhető.
            </p>
          </div>

          <div className="space-y-4 pt-8">
            <p className="text-lg text-foreground/70">
              Válassza az alábbiak közül az egyik lehetőséget:
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="button-primary inline-flex items-center justify-center gap-2"
              >
                <Home className="w-5 h-5" />
                Vissza a Főoldalra
              </Link>
              <Link
                href="/blog"
                className="button-secondary inline-flex items-center justify-center gap-2"
              >
                Cikkek Felfedezése
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-12 border-t border-border">
            <Link href="/training" className="p-4 card-subtle hover:border-accent/50 transition-all text-sm font-medium hover:text-accent">
              Képzés
            </Link>
            <Link href="/history" className="p-4 card-subtle hover:border-accent/50 transition-all text-sm font-medium hover:text-accent">
              Történelem
            </Link>
            <Link href="/types" className="p-4 card-subtle hover:border-accent/50 transition-all text-sm font-medium hover:text-accent">
              Íjtípusok
            </Link>
            <Link href="/equipment" className="p-4 card-subtle hover:border-accent/50 transition-all text-sm font-medium hover:text-accent">
              Felszerelés
            </Link>
            <Link href="/rules" className="p-4 card-subtle hover:border-accent/50 transition-all text-sm font-medium hover:text-accent">
              Szabályok
            </Link>
            <Link href="/about" className="p-4 card-subtle hover:border-accent/50 transition-all text-sm font-medium hover:text-accent">
              Rólunk
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
