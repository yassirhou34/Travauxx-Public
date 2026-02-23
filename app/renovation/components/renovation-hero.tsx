'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ScrollReveal } from '@/components/scroll-reveal'
import { ChevronDown } from 'lucide-react'

export function RenovationHero() {
  const scrollToTypes = () => {
    document.getElementById('renovation-types')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-0 flex items-start justify-center pt-8 sm:pt-10 md:pt-12 pb-12 sm:pb-16 overflow-hidden bg-[#0a0a0a]">
      {/* Geometric accents */}
      <div className="absolute left-8 top-1/3 w-px h-40 bg-gradient-to-b from-transparent via-accent to-transparent opacity-60" />
      <div className="absolute right-8 bottom-1/3 w-px h-40 bg-gradient-to-b from-transparent via-secondary to-transparent opacity-60" />
      
      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <ScrollReveal direction="fade" delay={0.1}>
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-8">
            <span className="text-white/80 text-sm font-medium tracking-wide">Rénovation de votre habitat</span>
          </div>
        </ScrollReveal>

        {/* Main title */}
        <ScrollReveal direction="up" delay={0.2}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[0.95] mb-6">
            <span className="block">Transformez</span>
            <span className="block mt-2">
              votre habitat<span className="text-accent">.</span>
            </span>
          </h1>
        </ScrollReveal>

        {/* Subtitle */}
        <ScrollReveal direction="up" delay={0.3}>
          <p className="text-lg sm:text-xl md:text-2xl text-white/70 max-w-2xl mx-auto mb-4 font-light">
            Plus sain, plus confortable, plus économe.
          </p>
         
        </ScrollReveal>

        {/* CTAs */}
        <ScrollReveal direction="up" delay={0.5}>
          <div className="flex flex-col sm:flex-row gap-2 justify-center items-center">
            <Link href="/concevoir-mon-projet">
              <Button className="group inline-flex items-center justify-center gap-2 w-[260px] h-[56px] bg-[#a39383] hover:bg-[#8b8276] text-white font-semibold rounded-full text-base sm:text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-[#a39383]/30 hover:scale-105 border-0">
                <span className="flex items-center justify-center gap-2 whitespace-nowrap">
                  Concevoir mon projet
                </span>
              </Button>
            </Link>
            <button
              onClick={scrollToTypes}
              className="group inline-flex items-center justify-center gap-2 w-[260px] h-[56px] relative border-2 border-white/70 text-white hover:bg-white/20 font-bold rounded-full text-base sm:text-lg transition-all duration-300 bg-white/10 backdrop-blur-md hover:border-white hover:scale-110 shadow-xl shadow-white/20 whitespace-nowrap"
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

