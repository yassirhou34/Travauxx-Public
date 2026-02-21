'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ScrollReveal } from '@/components/scroll-reveal'
import { ChevronDown, ArrowRight, Building2, Store, Coffee, Home } from 'lucide-react'

export function ProHero() {
  const scrollToSectors = () => {
    document.getElementById('pro-sectors')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a12]">
      {/* Floating sector icons */}
      <div className="absolute top-24 left-[12%] opacity-15 animate-float">
        <Store className="w-16 h-16 text-accent" />
      </div>
      <div className="absolute bottom-32 right-[12%] opacity-15 animate-float" style={{ animationDelay: '0.5s' }}>
        <Building2 className="w-20 h-20 text-secondary" />
      </div>
      <div className="absolute top-1/3 right-[8%] opacity-15 animate-float" style={{ animationDelay: '1s' }}>
        <Coffee className="w-14 h-14 text-accent" />
      </div>
      <div className="absolute bottom-1/3 left-[8%] opacity-15 animate-float" style={{ animationDelay: '1.5s' }}>
        <Home className="w-12 h-12 text-secondary" />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <ScrollReveal direction="fade" delay={0.1}>
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 mb-8">
            <span className="text-white/80 text-sm font-medium tracking-wide">Locaux Professionnels</span>
          </div>
        </ScrollReveal>

        {/* Main title */}
        <ScrollReveal direction="up" delay={0.2}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.95] mb-6">
            <span className="text-white block">Valorisez vos</span>
            <span className="block mt-2 bg-gradient-to-r from-accent via-accent/90 to-accent bg-clip-text text-transparent">
              espaces pro.
            </span>
          </h1>
        </ScrollReveal>

        {/* Subtitle */}
        <ScrollReveal direction="up" delay={0.3}>
          <p className="text-lg sm:text-xl md:text-2xl text-white/60 max-w-2xl mx-auto mb-4 font-light">
            Votre partenaire unique pour rénover et aménager vos locaux.
          </p>
         
        </ScrollReveal>


        {/* 4 sectors preview */}
        <ScrollReveal direction="up" delay={0.45}>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12">
            {[
              { icon: Store, label: 'Commerces', color: 'from-accent to-accent/80' },
              { icon: Building2, label: 'Bureaux', color: 'from-secondary to-secondary/80' },
              { icon: Coffee, label: 'CHR', color: 'from-accent/90 to-accent/70' },
              { icon: Home, label: 'Résidences', color: 'from-secondary to-secondary/80' },
            ].map((item, i) => {
              const Icon = item.icon
              return (
                <div 
                  key={i} 
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 group"
                >
                  <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center`}>
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-white/70 text-sm font-medium group-hover:text-white transition-colors">{item.label}</span>
                </div>
              )
            })}
          </div>
        </ScrollReveal>

        {/* CTAs */}
        <ScrollReveal direction="up" delay={0.5}>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
            <Link href="/concevoir-mon-projet">
              <Button className="group inline-flex items-center justify-center gap-2 w-[260px] h-[56px] bg-accent hover:bg-accent/90 text-white font-semibold rounded-full text-base sm:text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-accent/30 hover:scale-105 border-0">
                <span className="flex items-center justify-center gap-2 whitespace-nowrap">
                  Concevoir mon projet pro
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </Link>
            <button
              onClick={scrollToSectors}
              className="group inline-flex items-center justify-center gap-2 min-w-[260px] h-[56px] px-8 relative border-2 border-white/70 text-white hover:bg-white/20 font-bold rounded-full text-base sm:text-lg transition-all duration-300 bg-white/10 backdrop-blur-md hover:border-white hover:scale-105 shadow-xl shadow-white/20 whitespace-nowrap mx-3 sm:mx-4"
            >
              <span className="relative z-10 flex items-center gap-2 whitespace-nowrap">
                Découvrir nos secteurs
                <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </span>
              <div className="absolute -inset-2 bg-white/15 rounded-full blur-2xl opacity-50" />
            </button>
          </div>
        </ScrollReveal>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-accent/60 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}

