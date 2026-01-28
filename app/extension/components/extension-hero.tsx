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
      {/* Background Video/Image avec overlay */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{ 
            backgroundImage: 'url(/Banqueimages/DJI_0081.jpg)',
          }}
        />
        {/* Gradient overlay moderne */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />
        
        {/* Effet de grain subtil */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Geometric accent lines */}
      <div className="absolute left-8 top-1/4 w-px h-32 bg-gradient-to-b from-transparent via-accent to-transparent opacity-60" />
      <div className="absolute right-8 bottom-1/4 w-px h-32 bg-gradient-to-b from-transparent via-accent to-transparent opacity-60" />
      
      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <ScrollReveal direction="fade" delay={0.1}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-8">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-white/80 text-sm font-medium tracking-wide uppercase">Extension de maison</span>
          </div>
        </ScrollReveal>

        {/* Main title */}
        <ScrollReveal direction="up" delay={0.2}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[0.95] mb-6">
            <span className="block">Gagnez de</span>
            <span className="block mt-2">l&apos;espace<span className="text-accent">.</span></span>
          </h1>
        </ScrollReveal>

        {/* Subtitle */}
        <ScrollReveal direction="up" delay={0.3}>
          <p className="text-lg sm:text-xl md:text-2xl text-white/70 max-w-2xl mx-auto mb-4 font-light">
            Sans déménager, sans stress.
          </p>
          <p className="text-base sm:text-lg text-white/50 max-w-xl mx-auto mb-10">
            Agrandissement · Surélévation · Pergola · Véranda
          </p>
        </ScrollReveal>

        {/* Stats row */}
        <ScrollReveal direction="up" delay={0.4}>
          <div className="flex flex-wrap justify-center gap-8 sm:gap-12 md:gap-16 mb-12">
            {[
              { value: '+40%', label: 'valeur du bien' },
              { value: '100%', label: 'clé en main' },
              { value: '0', label: 'mauvaise surprise' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-xs sm:text-sm text-white/50 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* CTAs */}
        <ScrollReveal direction="up" delay={0.5}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/concevoir-mon-projet">
              <Button className="group bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-6 text-base sm:text-lg rounded-full transition-all duration-300 hover:shadow-2xl hover:shadow-accent/30 hover:scale-105">
                Concevoir mon projet
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <button 
              onClick={scrollToTypes}
              className="text-white/70 hover:text-white font-medium flex items-center gap-2 transition-colors"
            >
              Découvrir nos solutions
              <ChevronDown className="w-4 h-4 animate-bounce" />
            </button>
          </div>
        </ScrollReveal>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/60 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}

