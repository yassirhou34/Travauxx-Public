'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ScrollReveal } from '@/components/scroll-reveal'
import { ChevronDown, ArrowRight } from 'lucide-react'

export function ExtensionHero() {
  const scrollToTypes = () => {
    document.getElementById('extension-types')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
      {/* Geometric accent lines */}
      <div className="absolute left-8 top-1/4 w-px h-32 bg-gradient-to-b from-transparent via-accent to-transparent opacity-60" />
      <div className="absolute right-8 bottom-1/4 w-px h-32 bg-gradient-to-b from-transparent via-accent to-transparent opacity-60" />
      
      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <ScrollReveal direction="fade" delay={0.1}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-8">
            <span className="text-white/80 text-sm font-medium tracking-wide uppercase">Extension de maison</span>
          </div>
        </ScrollReveal>

        {/* Main title */}
        <ScrollReveal direction="up" delay={0.2}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[0.95] mb-6">
            <span className="block">Gagnez de</span>
            <span className="block mt-2">l&apos;espace sans changer d'adresse
            <span className="text-accent">.</span></span>
          </h1>
        </ScrollReveal>

        {/* Subtitle */}
        <ScrollReveal direction="up" delay={0.3}>
          <p className="text-lg sm:text-xl md:text-2xl text-white/70 max-w-2xl mx-auto mb-4 font-light">
          Extension bois, maçonnerie ou véranda thermique : nous créons la pièce en plus qui valorise votre maison.

          </p>
          <p className="text-base sm:text-lg text-white/50 max-w-xl mx-auto mb-10">
            Agrandissement · Surélévation · Pergola · Véranda
          </p>
        </ScrollReveal>

        {/* CTAs */}
        <ScrollReveal direction="up" delay={0.4}>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center items-center">
            <Link href="/concevoir-mon-projet">
              <Button className="group inline-flex items-center justify-center gap-2 w-[260px] h-[56px] bg-accent hover:bg-accent/90 text-white font-semibold rounded-full text-base sm:text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-accent/30 hover:scale-105">
                <span className="flex items-center justify-center gap-2 whitespace-nowrap">
                  Concevoir mon projet
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </Link>
            <button
              onClick={scrollToTypes}
              className="group inline-flex items-center justify-center gap-2 w-[260px] h-[56px] relative border-2 border-white/70 text-white hover:bg-white/20 font-bold rounded-full text-base sm:text-lg transition-all duration-300 bg-white/10 backdrop-blur-md hover:border-white hover:scale-105 shadow-xl shadow-white/20 whitespace-nowrap"
            >
              <span className="relative z-10 flex items-center gap-2 whitespace-nowrap">
                Découvrir nos solutions
                <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </span>
              <div className="absolute -inset-2 bg-white/15 rounded-full blur-2xl opacity-50" />
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

