'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ScrollReveal } from '@/components/scroll-reveal'
import { Compass, PenTool } from 'lucide-react'

export function ArchitectureHero() {
  const scrollToContent = () => {
    document.getElementById('architecture-pillars')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-0 flex items-start justify-center pt-8 sm:pt-10 md:pt-12 pb-16 sm:pb-20 overflow-hidden bg-[#050510]">
      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <ScrollReveal direction="fade" delay={0.1}>
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 mb-8">
            <span className="text-white/80 text-sm font-medium tracking-wide">Architecture & conception</span>
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

        {/* 2 piliers preview (sans IA) */}
        <ScrollReveal direction="up" delay={0.4}>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-12">
            {[
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
                </span>
              </Button>
            </Link>
            <button
              onClick={scrollToContent}
              className="group inline-flex items-center justify-center gap-2 min-w-[260px] h-[56px] px-8 relative border-2 border-white/70 text-white hover:bg-white/20 font-bold rounded-full text-base sm:text-lg transition-all duration-300 bg-white/10 backdrop-blur-md hover:border-white hover:scale-105 shadow-xl shadow-white/20 whitespace-nowrap mx-3 sm:mx-4"
            >
              <span className="relative z-10 flex items-center gap-2 whitespace-nowrap">
                Découvrir notre approche
              </span>
              <div className="absolute -inset-2 bg-white/15 rounded-full blur-2xl opacity-50" />
            </button>
          </div>
        </ScrollReveal>

        {/* Image sous les deux boutons — légèrement plus large */}
        <ScrollReveal direction="up" delay={0.55} className="mt-12 sm:mt-14 -mx-24 sm:-mx-32 lg:-mx-48 w-[calc(100%+12rem)] sm:w-[calc(100%+16rem)] lg:w-[calc(100%+24rem)]">
          <div className="relative aspect-[2/1] rounded-2xl overflow-hidden border border-white/10">
            <Image
              src="/Banqueimages/point3d-commercial-imaging-ltd-Tb4bUf6z9gI-unsplash.jpg"
              alt="Conception architecturale sur-mesure"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

