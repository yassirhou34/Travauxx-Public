'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ScrollReveal } from '@/components/scroll-reveal'
import { ChevronDown } from 'lucide-react'

export function AboutHero() {
  return (
    <section className="relative min-h-0 flex flex-col items-center justify-center py-12 sm:py-16 md:py-20 overflow-hidden bg-black">
      {/* Background noir */}
      <div className="absolute inset-0 bg-black">
        {/* Légères lueurs pour la profondeur */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
        
        {/* Grille très discrète */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }} />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
      
        {/* Main title */}
        <ScrollReveal direction="up" delay={0.2}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[0.95] mb-6">
            <span className="block">Un réseau engagé</span>
            <span className="block mt-2">dans votre<span className="text-accent">.</span></span>
            <span className="block mt-2 text-5xl sm:text-6xl md:text-7xl lg:text-8xl">réussite</span>
          </h1>
        </ScrollReveal>

        {/* Subtitle */}
        <ScrollReveal direction="up" delay={0.3}>
          <p className="text-lg sm:text-xl md:text-2xl text-white/70 max-w-3xl mx-auto mb-4 font-light">
            Depuis plus de 20 ans, Activ Travaux accompagne les particuliers et les professionnels 
            dans leurs projets de rénovation, d&apos;agrandissement et de transformation.
          </p>
          <p className="text-base sm:text-lg text-white/50 max-w-xl mx-auto mb-6">
            La force d&apos;un réseau national, la proximité d&apos;un interlocuteur local.
          </p>
        </ScrollReveal>

        {/* CTAs */}
        <ScrollReveal direction="up" delay={0.5}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/concevoir-mon-projet">
              <Button className="group bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-6 text-base sm:text-lg rounded-full transition-all duration-300 hover:shadow-2xl hover:shadow-accent/30 hover:scale-105 inline-flex items-center justify-center">
                <span className="inline-flex items-center justify-center gap-2">
                  Concevoir mon projet
                </span>
              </Button>
            </Link>
            <Link
              href="#mission"
              className="group inline-flex items-center justify-center gap-2 min-w-[260px] h-[56px] px-8 relative border-2 border-white/70 text-white hover:bg-white/20 font-bold rounded-full text-base sm:text-lg transition-all duration-300 bg-white/10 backdrop-blur-md hover:border-white hover:scale-105 shadow-xl shadow-white/20 whitespace-nowrap"
            >
              <span className="relative z-10 inline-flex items-center justify-center gap-2 whitespace-nowrap">
                Découvrir notre mission
                <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </span>
              <div className="absolute -inset-2 bg-white/15 rounded-full blur-2xl opacity-50 pointer-events-none" />
            </Link>
          </div>
        </ScrollReveal>

        {/* Bandeau visuel — image de chantier / réseau */}
        <ScrollReveal direction="up" delay={0.6} className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 sm:mt-12">
          <div className="relative aspect-[21/9] sm:aspect-[3/1] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <Image
              src="/Banqueimages/tile-merchant-ireland-ujfcn8vQpUY-unsplash.jpg"
              alt="Réseau Activ Travaux — chantier et expertise"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 1280px"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

