'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ScrollReveal } from '@/components/scroll-reveal'

export function ArchitectureCTA() {
  return (
    <section className="relative py-8 sm:py-10 lg:py-14 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary" />
      
      {/* Animated shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full bg-accent/10 blur-3xl animate-pulse" />
        <div className="absolute -bottom-1/2 -left-1/4 w-[600px] h-[600px] rounded-full bg-secondary/10 blur-3xl" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: '40px 40px',
      }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-center">
          <ScrollReveal direction="up">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-4">
                <span className="text-white/80 text-sm">Concrétisez votre vision</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                Donnez vie à<br />vos idées<span className="text-white/60">.</span>
              </h2>
              
              <p className="text-white/70 text-lg mb-6 max-w-lg mx-auto">
                Un premier rendez-vous gratuit pour explorer vos envies, analyser votre projet 
                et découvrir nos outils de conception innovants.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/concevoir-mon-projet">
                  <Button className="w-full sm:w-auto group bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-6 text-base rounded-full transition-all duration-300 hover:shadow-2xl hover:scale-105">
                    Concevoir mon projet
                  </Button>
                </Link>
                <Link href="/realisations">
                  <Button
                    className="w-full sm:w-auto bg-[#a39383] hover:bg-[#8b8276] text-white font-semibold px-8 py-6 text-base rounded-full transition-all duration-300 hover:shadow-2xl hover:scale-105 border-0"
                  >
                    Voir nos réalisations
                  </Button>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Trust indicators */}
        <ScrollReveal direction="up" delay={0.4}>
          <div className="mt-6 pt-6 border-t border-white/20">
            <div className="flex flex-wrap justify-center items-center gap-8 text-white/50 text-sm">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-white" />
                Premier RDV gratuit
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-white" />
                Sans engagement
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-white" />
                Devis détaillé
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-white" />
                Modélisation 3D
              </span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

