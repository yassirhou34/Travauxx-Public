'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ScrollReveal } from '@/components/scroll-reveal'
import { ArrowRight, Users, MapPin, Award, Sparkles } from 'lucide-react'

export function AboutHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
      {/* Background with animated gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-primary" />
        
        {/* Animated orbs */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-secondary/15 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }} />
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-[10%] opacity-20 animate-float">
        <Users className="w-20 h-20 text-accent" />
      </div>
      <div className="absolute bottom-32 right-[15%] opacity-20 animate-float" style={{ animationDelay: '1s' }}>
        <MapPin className="w-16 h-16 text-secondary" />
      </div>
      <div className="absolute top-1/3 right-[10%] opacity-20 animate-float" style={{ animationDelay: '2s' }}>
        <Award className="w-14 h-14 text-accent" />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <ScrollReveal direction="fade" delay={0.1}>
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 mb-8">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-white/80 text-sm font-medium tracking-wide">Réseau National</span>
            <span className="flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
          </div>
        </ScrollReveal>

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
          <p className="text-base sm:text-lg text-white/50 max-w-xl mx-auto mb-10">
            La force d&apos;un réseau national, la proximité d&apos;un interlocuteur local.
          </p>
        </ScrollReveal>

        {/* Key stats */}
        <ScrollReveal direction="up" delay={0.4}>
          <div className="flex flex-wrap justify-center gap-8 sm:gap-12 md:gap-16 mb-12">
            {[
              { value: '20+', label: 'ans d\'expérience', suffix: 'ans' },
              { value: '75+', label: 'activateurs en France', suffix: '' },
              { value: '100%', label: 'projets maîtrisés', suffix: '' },
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

        {/* CTAs */}
        <ScrollReveal direction="up" delay={0.5}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/concevoir-mon-projet">
              <Button className="group bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-6 text-base sm:text-lg rounded-full transition-all duration-300 hover:shadow-2xl hover:shadow-accent/30 hover:scale-105">
                Concevoir mon projet
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="#mission">
              <Button 
                variant="outline" 
                className="border-2 border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-6 text-base sm:text-lg rounded-full transition-all duration-300 bg-transparent"
              >
                Découvrir notre mission
              </Button>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

