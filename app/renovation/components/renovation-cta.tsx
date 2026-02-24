'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ScrollReveal } from '@/components/scroll-reveal'

export function RenovationCTA() {
  return (
    <section className="relative pt-3 sm:pt-4 lg:pt-5 pb-1 sm:pb-2 lg:pb-3 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary" />
      
      {/* Animated shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full bg-accent/10 blur-3xl animate-pulse" />
        <div className="absolute -bottom-1/2 -left-1/4 w-[600px] h-[600px] rounded-full bg-secondary/10 blur-3xl" />
      </div>

      {/* Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-xl mx-auto text-center">
          <ScrollReveal direction="up">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 mb-4">
                <span className="text-white/80 text-sm">Prêt à transformer votre habitat ?</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                Parlons de votre projet<span className="text-accent">.</span>
              </h2>

              <p className="text-white/70 text-sm sm:text-base mb-6 max-w-md mx-auto">
                Sollicitez une expertise technique pour définir la configuration idéale. Nous analysons vos besoins pour structurer un projet performant et conforme.
              </p>

              <div className="flex flex-wrap justify-center gap-3 mb-8">
                {['Devis gratuit', 'Sans engagement', 'Réponse 48h'].map((item, i) => (
                  <span key={i} className="text-white/70 text-sm">{item}</span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="/concevoir-mon-projet">
                  <Button className="w-full sm:w-auto group bg-[#a39383] hover:bg-[#8b8276] text-white font-semibold px-6 py-5 text-sm rounded-full transition-all duration-300 hover:shadow-2xl hover:scale-105 border-0">
                    Concevoir mon projet
                  </Button>
                </Link>
                <Link href="/realisations">
                  <Button className="w-full sm:w-auto group bg-[#a39383] hover:bg-[#8b8276] text-white font-semibold px-6 py-5 text-sm rounded-full transition-all duration-300 hover:shadow-2xl hover:scale-105 border-0">
                    Voir nos réalisations
                  </Button>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal direction="up" delay={0.4}>
          <div className="mt-4 pt-4 border-t border-white/10">
            <div className="flex flex-wrap justify-center items-center gap-4 text-white/50 text-xs">
              <span>Garantie décennale</span>
              <span>Artisans qualifiés RGE</span>
              <span>Accompagnement aides</span>
              <span>Prix ferme</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

