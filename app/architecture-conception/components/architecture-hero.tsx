'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ScrollReveal } from '@/components/scroll-reveal'
import { ChevronDown, ArrowRight, Compass, Cpu, PenTool, Sparkles } from 'lucide-react'

export function ArchitectureHero() {
  const scrollToContent = () => {
    document.getElementById('architecture-pillars')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050510]">
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-primary/20 to-[#0a0a0a]" />
        
        {/* Animated orbs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent/15 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/8 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `linear-gradient(rgba(232,50,99,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(232,50,99,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }} />

        {/* Noise texture */}
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Floating 3D elements */}
      <div className="absolute top-20 left-[10%] opacity-20 animate-float">
        <Compass className="w-20 h-20 text-accent" />
      </div>
      <div className="absolute bottom-32 right-[15%] opacity-20 animate-float" style={{ animationDelay: '1s' }}>
        <Cpu className="w-16 h-16 text-secondary" />
      </div>
      <div className="absolute top-1/3 right-[10%] opacity-20 animate-float" style={{ animationDelay: '2s' }}>
        <PenTool className="w-14 h-14 text-accent" />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <ScrollReveal direction="fade" delay={0.1}>
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 mb-8">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-white/80 text-sm font-medium tracking-wide">Architecture & Conception</span>
            <span className="flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
          </div>
        </ScrollReveal>

        {/* Main title with gradient */}
        <ScrollReveal direction="up" delay={0.2}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.95] mb-6">
            <span className="text-white block">Imaginez.</span>
            <span className="block mt-2 bg-gradient-to-r from-accent via-accent/90 to-accent bg-clip-text text-transparent">
              Concevez. Réalisez.
            </span>
          </h1>
        </ScrollReveal>

        {/* Subtitle */}
        <ScrollReveal direction="up" delay={0.3}>
          <p className="text-lg sm:text-xl md:text-2xl text-white/60 max-w-2xl mx-auto mb-10 font-light">
            Une approche architecturale sur-mesure pour chaque projet.
          </p>
        </ScrollReveal>

        {/* 3 Pillars preview */}
        <ScrollReveal direction="up" delay={0.4}>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-12">
            {[
              { icon: Cpu, label: 'Intelligence Artificielle', color: 'from-accent to-accent/80' },
              { icon: PenTool, label: 'Architectes partenaires', color: 'from-accent/90 to-accent/70' },
              { icon: Compass, label: 'Bureau d\'études', color: 'from-secondary to-secondary/80' },
            ].map((item, i) => {
              const Icon = item.icon
              return (
                <div 
                  key={i} 
                  className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 group"
                >
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg`}>
                    <Icon className="w-5 h-5 text-white" />
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
                  Concevoir mon projet
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </Link>
            <button
              onClick={scrollToContent}
              className="group inline-flex items-center justify-center gap-2 min-w-[260px] h-[56px] px-8 relative border-2 border-white/70 text-white hover:bg-white/20 font-bold rounded-full text-base sm:text-lg transition-all duration-300 bg-white/10 backdrop-blur-md hover:border-white hover:scale-105 shadow-xl shadow-white/20 whitespace-nowrap mx-3 sm:mx-4"
            >
              <span className="relative z-10 flex items-center gap-2 whitespace-nowrap">
                Découvrir notre approche
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

