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
      {/* Background with geometric pattern */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a12] via-primary/20 to-[#0a0a12]" />
        
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-accent/15 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-accent/8 rounded-full blur-[180px] animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Isometric grid pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `
            linear-gradient(30deg, rgba(232,50,99,0.1) 12%, transparent 12.5%, transparent 87%, rgba(232,50,99,0.1) 87.5%, rgba(232,50,99,0.1)),
            linear-gradient(150deg, rgba(232,50,99,0.1) 12%, transparent 12.5%, transparent 87%, rgba(232,50,99,0.1) 87.5%, rgba(232,50,99,0.1)),
            linear-gradient(30deg, rgba(232,50,99,0.1) 12%, transparent 12.5%, transparent 87%, rgba(232,50,99,0.1) 87.5%, rgba(232,50,99,0.1)),
            linear-gradient(150deg, rgba(232,50,99,0.1) 12%, transparent 12.5%, transparent 87%, rgba(232,50,99,0.1) 87.5%, rgba(232,50,99,0.1)),
            linear-gradient(60deg, rgba(232,50,99,0.05) 25%, transparent 25.5%, transparent 75%, rgba(232,50,99,0.05) 75%, rgba(232,50,99,0.05)),
            linear-gradient(60deg, rgba(232,50,99,0.05) 25%, transparent 25.5%, transparent 75%, rgba(232,50,99,0.05) 75%, rgba(232,50,99,0.05))
          `,
          backgroundSize: '80px 140px',
          backgroundPosition: '0 0, 0 0, 40px 70px, 40px 70px, 0 0, 40px 70px',
        }} />

        {/* Noise texture */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }} />
      </div>

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
            <Building2 className="w-4 h-4 text-accent" />
            <span className="text-white/80 text-sm font-medium tracking-wide">Locaux Professionnels</span>
            <span className="flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
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
          <p className="text-base sm:text-lg text-white/40 max-w-xl mx-auto mb-10">
            Commerces · Bureaux · CHR · Résidences Services
          </p>
        </ScrollReveal>

        {/* Key metrics */}
        <ScrollReveal direction="up" delay={0.4}>
          <div className="flex flex-wrap justify-center gap-8 sm:gap-12 md:gap-16 mb-12">
            {[
              { value: '1', label: 'interlocuteur unique', suffix: 'seul' },
              { value: '100%', label: 'projet maîtrisé', suffix: '' },
              { value: '0', label: 'mauvaise surprise', suffix: '' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-1">
                  {stat.value}
                  {stat.suffix && <span className="text-accent text-xl ml-1">{stat.suffix}</span>}
                </div>
                <div className="text-xs sm:text-sm text-white/50 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/concevoir-mon-projet">
              <Button className="group bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-6 text-base sm:text-lg rounded-full transition-all duration-300 hover:shadow-2xl hover:shadow-accent/30 hover:scale-105 border-0">
                Concevoir mon projet pro
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <button 
              onClick={scrollToSectors}
              className="text-white/60 hover:text-white font-medium flex items-center gap-2 transition-colors"
            >
              Découvrir nos secteurs
              <ChevronDown className="w-4 h-4 animate-bounce" />
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

