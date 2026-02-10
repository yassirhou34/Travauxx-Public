'use client'

import { ScrollReveal } from '@/components/scroll-reveal'
import { Cpu, Eye, Sparkles, Zap, ArrowRight, Play } from 'lucide-react'
import Link from 'next/link'

const aiCapabilities = [
  {
    icon: Eye,
    title: 'Visualisation Avant/Après',
    description: 'Voyez votre maison transformée en quelques clics. Nos simulations réalistes vous permettent de vous projeter instantanément.',
    demo: 'Téléversez une photo → IA génère le rendu',
  },
  {
    icon: Sparkles,
    title: 'Choix esthétiques guidés',
    description: 'Explorez différents styles, couleurs et matériaux. L\'IA vous propose des scénarios adaptés à votre goût.',
    demo: 'Sélectionnez un style → Variantes générées',
  },
  {
    icon: Zap,
    title: 'Analyse environnementale',
    description: 'Ensoleillement, vis-à-vis, orientation : l\'IA analyse votre site pour optimiser votre projet.',
    demo: 'Données du site → Recommandations IA',
  },
]

export function AIShowcase() {
  return (
    <section className="relative py-20 sm:py-28 lg:py-36 bg-background overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#a39383]/12 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#a39383]/18 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <ScrollReveal direction="up">
          <div className="text-center mb-16 lg:mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#a39383]/15 border border-[#a39383]/40 mb-6">
              <Cpu className="w-4 h-4 text-[#a39383]" />
              <span className="text-[#a39383] text-sm font-medium">Technologie exclusive</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              L&apos;IA au service de votre projet
            </h2>
            <p className="text-white/70 text-lg max-w-3xl mx-auto">
              Activ Travaux développe des outils innovants basés sur l&apos;intelligence artificielle 
              pour une expérience de conception unique et personnalisée.
            </p>
          </div>
        </ScrollReveal>

        {/* Main showcase */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-16">
          {/* Left: Visual mockup */}
          <ScrollReveal direction="right" delay={0.2}>
            <div className="relative">
              {/* Device frame */}
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-gradient-to-br from-[#050308] to-[#121212] border border-white/10 shadow-2xl">
                {/* Screen content */}
                <div className="absolute inset-4 rounded-2xl bg-gradient-to-br from-[#1a1a1a] to-[#050308] overflow-hidden">
                  {/* Mock UI */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#a39383] to-[#8b8276] flex items-center justify-center">
                        <Play className="w-8 h-8 text-white ml-1" />
                      </div>
                      <p className="text-white/60 text-sm">Visualisation IA interactive</p>
                    </div>
                  </div>
                  
                  {/* Animated elements */}
                  <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-green-500/20 border border-green-500/30 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-green-400 text-xs font-medium">IA Active</span>
                  </div>
                </div>

                {/* Glow effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-[#a39383]/25 via-[#c2b6aa]/20 to-[#8b8276]/25 blur-3xl opacity-45" />
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 px-4 py-2 rounded-xl bg-[#a39383] text-white text-sm font-semibold shadow-lg">
                Exclusif Activ Travaux
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Capabilities */}
          <ScrollReveal direction="left" delay={0.3}>
            <div className="space-y-6">
              {aiCapabilities.map((cap, i) => {
                const Icon = cap.icon
                return (
                  <div 
                    key={i}
                    className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#a39383]/70 hover:shadow-[0_24px_80px_rgba(0,0,0,0.85)] transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#a39383] to-[#8b8276] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-white mb-2">{cap.title}</h3>
                        <p className="text-white/70 text-sm mb-3">{cap.description}</p>
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#a39383]/18 text-[#f5f0ea] text-xs font-medium">
                          <Zap className="w-3 h-3 text-[#f5f0ea]" />
                          {cap.demo}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </ScrollReveal>
        </div>

        {/* Bottom CTA */}
        <ScrollReveal direction="up" delay={0.4}>
          <div className="text-center">
            <p className="text-white/70 mb-6">
              Découvrez nos outils IA lors de votre premier rendez-vous gratuit.
            </p>
            <Link 
              href="/concevoir-mon-projet"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#a39383] hover:bg-[#8b8276] text-white font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-[#a39383]/30 hover:scale-105"
            >
              Essayer la conception IA
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

