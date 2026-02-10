'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ScrollReveal } from '@/components/scroll-reveal'
import { ChevronDown, ArrowRight, Leaf, Zap, Home } from 'lucide-react'

export function RenovationHero() {
  const scrollToTypes = () => {
    document.getElementById('renovation-types')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
      {/* Background Image with overlay */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{ 
            backgroundImage: 'url(/Banqueimages/M7_01321.jpg)',
          }}
        />
        {/* Multi-layer gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-accent/20 via-transparent to-accent/20" />
        
        {/* Animated particles effect */}
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Geometric accents */}
      <div className="absolute left-8 top-1/3 w-px h-40 bg-gradient-to-b from-transparent via-accent to-transparent opacity-60" />
      <div className="absolute right-8 bottom-1/3 w-px h-40 bg-gradient-to-b from-transparent via-secondary to-transparent opacity-60" />
      
      {/* Floating icons */}
      <div className="absolute top-1/4 left-[15%] animate-float opacity-20">
        <Leaf className="w-16 h-16 text-accent" />
      </div>
      <div className="absolute bottom-1/3 right-[15%] animate-float opacity-20" style={{ animationDelay: '1s' }}>
        <Zap className="w-12 h-12 text-secondary" />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <ScrollReveal direction="fade" delay={0.1}>
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-8">
            <Home className="w-4 h-4 text-accent" />
            <span className="text-white/80 text-sm font-medium tracking-wide">Rénovation de votre habitat</span>
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
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

        {/* Key benefits */}
        <ScrollReveal direction="up" delay={0.4}>
          <div className="flex flex-wrap justify-center gap-6 sm:gap-10 mb-12">
            {[
              { icon: Leaf, label: 'Éco-responsable', color: 'text-accent' },
              { icon: Zap, label: 'Économies d\'énergie', color: 'text-secondary' },
              { icon: Home, label: 'Confort optimal', color: 'text-accent' },
            ].map((item, i) => {
              const Icon = item.icon
              return (
                <div key={i} className="flex items-center gap-2 text-white/70">
                  <Icon className={`w-5 h-5 ${item.color}`} />
                  <span className="text-sm font-medium">{item.label}</span>
                </div>
              )
            })}
          </div>
        </ScrollReveal>

        {/* Stats */}
        <ScrollReveal direction="up" delay={0.45}>
          <div className="flex flex-wrap justify-center gap-8 sm:gap-12 md:gap-16 mb-12">
            {[
              { value: '-40%', label: 'facture énergie' },
              { value: '100%', label: 'clé en main' },
              { value: '+25%', label: 'valeur du bien' },
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
              <Button className="group inline-flex items-center justify-center gap-2 w-[260px] h-[56px] bg-[#a39383] hover:bg-[#8b8276] text-white font-semibold rounded-full text-base sm:text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-[#a39383]/30 hover:scale-105 border-0">
                <span className="flex items-center justify-center gap-2 whitespace-nowrap">
                  Concevoir mon projet
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-accent/60 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}

