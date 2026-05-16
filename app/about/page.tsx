'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { CookieBanner } from '@/components/cookie-banner'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { ArrowRight, CheckCircle } from 'lucide-react'

interface ContactFormData {
  name: string
  email: string
  message: string
  consent: boolean
}

export default function AboutPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<ContactFormData>()

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setIsSubmitted(true)
      toast.success('Üzenet sikeresen elküldve!', {
        description: 'Hamarosan válaszolunk.'
      })
      reset()
      
      setTimeout(() => setIsSubmitted(false), 5000)
    } catch (error) {
      toast.error('Hiba történt az üzenet küldése során.')
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-b from-background via-background to-card/30 py-20 md:py-28 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="hero-heading mb-6">Rólunk</h1>
            <p className="section-subheading max-w-2xl">
              Egy szenvedélyes közösség, amely az íjászatot és a magyar tradíciókat népszerűsíti.
            </p>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 md:py-28 bg-background">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-6 mb-12">
              <h2 className="section-heading">A Közösség Misszója</h2>
              <p className="prose-text">
                Az Íjászat Hungaryarchery egy dedikált közösség, amely az íjászat oktatása, népszerűsítése és hagyomány megőrzésére törekszik. Hiszünk, hogy az íjászat több, mint egy sport – ez egy művészet, egy tudomány és egy szellemi gyakorlat.
              </p>
              <p className="prose-text">
                A platformunk célja, hogy egy központi helyet biztosítson minden íjásznak, függetlenül attól, hogy kezdő vagy haladó versenyző. Szeretnénk inspirálni az új generációt és segíteni a közösség fejlődésében.
              </p>
            </div>

            <div className="bg-card/50 border border-border rounded-lg p-8 space-y-6">
              <h3 className="text-2xl font-bold">Az Értékeinket</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border-l-4 border-accent pl-4">
                  <h4 className="font-bold mb-2">Hagyomány</h4>
                  <p className="text-foreground/70">Az ősi magyar íjászat tradícióinak megőrzése és továbbadása.</p>
                </div>
                <div className="border-l-4 border-accent pl-4">
                  <h4 className="font-bold mb-2">Innováció</h4>
                  <p className="text-foreground/70">A modern technikákat és eszközöket a sport fejlesztésére használjuk.</p>
                </div>
                <div className="border-l-4 border-accent pl-4">
                  <h4 className="font-bold mb-2">Közösség</h4>
                  <p className="text-foreground/70">Egy támogató és inkluzív közösség, ahol mindenki számít.</p>
                </div>
                <div className="border-l-4 border-accent pl-4">
                  <h4 className="font-bold mb-2">Kiválóság</h4>
                  <p className="text-foreground/70">Az magasabb célok felé való kitartó törekvés és fejlődés.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 md:py-28 bg-card/50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="section-heading mb-4">Lépj Kapcsolatba Velünk</h2>
              <p className="section-subheading">
                Kérdésed van? Szeretnél csatlakozni? Küldj nekünk egy üzenetet!
              </p>
            </div>

            {isSubmitted ? (
              <div className="card-subtle border-accent/30 bg-accent/5 text-center py-12">
                <CheckCircle className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Köszönöm!</h3>
                <p className="text-foreground/70">Az üzeneted sikeresen elküldve. Hamarosan válaszolunk.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="card-subtle space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Név</label>
                  <input
                    {...register('name', { required: 'A név kötelező' })}
                    type="text"
                    placeholder="A te neveid"
                    className="w-full px-4 py-2 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-foreground placeholder:text-foreground/50"
                  />
                  {errors.name && <p className="text-destructive text-sm mt-1">{errors.name.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    {...register('email', {
                      required: 'Az email kötelező',
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: 'Érvénytelen email cím'
                      }
                    })}
                    type="email"
                    placeholder="info@example.com"
                    className="w-full px-4 py-2 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-foreground placeholder:text-foreground/50"
                  />
                  {errors.email && <p className="text-destructive text-sm mt-1">{errors.email.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Üzenet</label>
                  <textarea
                    {...register('message', { required: 'Az üzenet kötelező' })}
                    placeholder="Írd be az üzeneted..."
                    rows={5}
                    className="w-full px-4 py-2 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-foreground placeholder:text-foreground/50 resize-none"
                  />
                  {errors.message && <p className="text-destructive text-sm mt-1">{errors.message.message}</p>}
                </div>

                <div className="flex items-start gap-3">
                  <input
                    {...register('consent', { required: 'Az elfogadás kötelező' })}
                    type="checkbox"
                    id="consent"
                    className="mt-1 rounded border-border"
                  />
                  <label htmlFor="consent" className="text-sm text-foreground/70">
                    Elfogadom az{' '}
                    <Link href="/privacy" className="text-accent hover:underline">
                      adatvédelmi szabályzatot
                    </Link>
                    {' '}és az{' '}
                    <Link href="/cookies" className="text-accent hover:underline">
                      cookie szabályzatot
                    </Link>
                  </label>
                  {errors.consent && <p className="text-destructive text-sm">{errors.consent.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="button-primary w-full inline-flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? 'Küldés...' : 'Üzenet küldése'}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </section>
      </main>
      <Footer />
      <CookieBanner />
    </div>
  )
}
