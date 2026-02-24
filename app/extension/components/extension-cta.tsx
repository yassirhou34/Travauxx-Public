'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ScrollReveal } from '@/components/scroll-reveal'

export function ExtensionCTA() {
  return (
    <section className="relative pt-10 sm:pt-12 lg:pt-16 pb-2 sm:pb-3 lg:pb-4 overflow-hidden">
      {/* Background noir */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#050308] via-[#050308] to-[#050308]" />
      
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full bg-white/10 blur-3xl animate-pulse" />
        <div className="absolute -bottom-1/2 -left-1/4 w-[600px] h-[600px] rounded-full bg-black/10 blur-3xl" />
      </div>

      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal direction="up">
            <div>
              <span className="inline-block text-white/80 text-sm font-semibold tracking-wider uppercase mb-4">
                Prêt à agrandir votre bien ?
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                Concrétisons votre extension<span className="text-white/60">.</span>
              </h2>
              <p className="text-white/80 text-sm sm:text-base mb-6 max-w-2xl mx-auto">
                Sollicitez une étude de faisabilité gratuite et sans engagement. Notre expertise permet d&apos;analyser vos besoins et de définir la solution technique idéale pour votre habitat.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="/concevoir-mon-projet">
                  <Button className="w-full sm:w-auto group bg-white text-accent hover:bg-white/90 font-semibold px-6 py-5 text-sm rounded-full transition-all duration-300 hover:shadow-2xl hover:scale-105">
                    Concevoir mon projet
                  </Button>
                </Link>
                <Link href="/realisations">
                  <Button className="w-full sm:w-auto bg-[#a39383] hover:bg-[#8b8276] text-white font-semibold px-6 py-5 text-sm rounded-full transition-all duration-300 hover:shadow-2xl hover:scale-105 border-0">
                    Voir nos réalisations
                  </Button>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Bottom trust badges */}
        <ScrollReveal direction="up" delay={0.4}>
          <div className="mt-6 pt-6 border-t border-white/20">
            <div className="flex flex-wrap justify-center items-center gap-8 text-white/60 text-sm">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400" />
                Devis gratuit
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400" />
                Réponse sous 48h
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400" />
                Sans engagement
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400" />
                Garantie décennale
              </span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

