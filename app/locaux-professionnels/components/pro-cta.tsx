'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ScrollReveal } from '@/components/scroll-reveal'
import { ArrowRight, Phone, Mail, MapPin, Building2, Store, Coffee, Home } from 'lucide-react'

export function ProCTA() {
  return (
    <section className="relative py-20 sm:py-28 lg:py-36 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary" />
      
      {/* Animated shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full bg-accent/10 blur-3xl animate-pulse" />
        <div className="absolute -bottom-1/2 -left-1/4 w-[600px] h-[600px] rounded-full bg-secondary/10 blur-3xl" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: '40px 40px',
      }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Text */}
          <ScrollReveal direction="right">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6">
                <Building2 className="w-4 h-4 text-white" />
                <span className="text-white/80 text-sm">Projet professionnel ?</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Parlons de vos<br />locaux<span className="text-accent">.</span>
              </h2>
              
              <p className="text-white/70 text-lg mb-8 max-w-lg">
                Un premier échange gratuit pour comprendre vos enjeux métier et vous proposer 
                une solution sur-mesure adaptée à votre activité.
              </p>

              {/* Sectors reminder */}
              <div className="flex flex-wrap gap-3 mb-10">
                {[
                  { icon: Store, label: 'Commerce' },
                  { icon: Building2, label: 'Bureau' },
                  { icon: Coffee, label: 'CHR' },
                  { icon: Home, label: 'Résidence' },
                ].map((item, i) => {
                  const Icon = item.icon
                  return (
                    <span key={i} className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-white/70 text-sm">
                      <Icon className="w-3.5 h-3.5" />
                      {item.label}
                    </span>
                  )
                })}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/concevoir-mon-projet">
                  <Button className="w-full sm:w-auto group bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-6 text-base rounded-full transition-all duration-300 hover:shadow-2xl hover:scale-105">
                    Démarrer mon projet
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/realisations">
                  <Button 
                    variant="outline" 
                    className="w-full sm:w-auto border-2 border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-6 text-base rounded-full transition-all duration-300 bg-transparent"
                  >
                    Voir nos réalisations
                  </Button>
                </Link>
              </div>
            </div>
          </ScrollReveal>

          {/* Right side - Contact */}
          <ScrollReveal direction="left" delay={0.2}>
            <div className="space-y-4">
              {/* Phone */}
              <a 
                href="tel:+33247000000"
                className="group flex items-center gap-4 p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-white/50 text-sm">Appelez-nous</p>
                  <p className="text-white font-semibold text-lg">02 47 00 00 00</p>
                </div>
                <ArrowRight className="w-5 h-5 text-white/30 group-hover:text-white group-hover:translate-x-1 transition-all" />
              </a>

              {/* Email */}
              <a 
                href="mailto:pro@activtravaux37.fr"
                className="group flex items-center gap-4 p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-white/50 text-sm">Email professionnel</p>
                  <p className="text-white font-semibold text-lg">pro@activtravaux37.fr</p>
                </div>
                <ArrowRight className="w-5 h-5 text-white/30 group-hover:text-white group-hover:translate-x-1 transition-all" />
              </a>

              {/* Location */}
              <div className="flex items-center gap-4 p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
                <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-white/50 text-sm">Zone principale</p>
                  <p className="text-white font-semibold text-lg">Indre-et-Loire (37)</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Trust indicators */}
        <ScrollReveal direction="up" delay={0.4}>
          <div className="mt-16 pt-12 border-t border-white/20">
            <div className="flex flex-wrap justify-center items-center gap-8 text-white/50 text-sm">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent" />
                Devis gratuit
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent" />
                Sans engagement
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent" />
                Réponse sous 48h
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent" />
                Accompagnement conformité
              </span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

