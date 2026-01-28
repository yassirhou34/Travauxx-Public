'use client'

import { ScrollReveal } from '@/components/scroll-reveal'
import { MapPin, Building2, Users, CheckCircle2, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const localFeatures = [
  {
    icon: MapPin,
    title: 'Indre-et-Loire (37)',
    description: 'Une présence locale autour de Tours et ses environs. Un interlocuteur qui connaît le terrain et vos contraintes spécifiques.',
  },
  {
    icon: Building2,
    title: 'Connaissance du territoire',
    description: 'Maîtrise des règles d\'urbanisme locales, des contraintes architecturales et des spécificités du bâti régional.',
  },
  {
    icon: Users,
    title: 'Réseau local',
    description: 'Partenaires artisans et entreprises du département, sélectionnés pour leur savoir-faire et leur fiabilité.',
  },
]

export function LocalPresence() {
  return (
    <section className="relative py-20 sm:py-28 lg:py-36 bg-background overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <ScrollReveal direction="right">
            <div>
              <span className="inline-block text-accent text-sm font-semibold tracking-wider uppercase mb-4">
                Votre interlocuteur local
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
                Activ Travaux 37
              </h2>
              <p className="text-foreground/60 text-lg mb-8 leading-relaxed">
                En Indre-et-Loire, votre activateur Activ Travaux vous apporte toute l&apos;expertise 
                du réseau national avec la proximité et la réactivité d&apos;un interlocuteur local.
              </p>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {localFeatures.map((feature, i) => {
                  const Icon = feature.icon
                  return (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-1">{feature.title}</h4>
                        <p className="text-foreground/60 text-sm">{feature.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* CTA */}
              <Link 
                href="/concevoir-mon-projet"
                className="group inline-flex items-center gap-3 px-6 py-4 rounded-xl bg-accent hover:bg-accent/90 text-white font-semibold transition-all duration-300 hover:shadow-xl hover:scale-105"
              >
                Démarrer mon projet en Indre-et-Loire
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </ScrollReveal>

          {/* Right: Visual */}
          <ScrollReveal direction="left" delay={0.2}>
            <div className="relative">
              {/* Map-like visualization */}
              <div className="relative aspect-square rounded-3xl bg-gradient-to-br from-primary to-primary/80 overflow-hidden">
                {/* Grid pattern */}
                <div className="absolute inset-0 opacity-10" style={{
                  backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                  backgroundSize: '30px 30px',
                }} />

                {/* Center point for Indre-et-Loire */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full bg-accent shadow-lg shadow-accent/50 flex items-center justify-center animate-pulse">
                      <MapPin className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-white text-primary text-sm font-semibold whitespace-nowrap shadow-lg">
                      Indre-et-Loire
                    </div>
                  </div>
                </div>

                {/* Surrounding points */}
                {[
                  { top: '20%', left: '30%', label: 'Tours' },
                  { top: '40%', left: '60%', label: 'Amboise' },
                  { top: '60%', left: '25%', label: 'Chinon' },
                  { top: '70%', left: '70%', label: 'Loches' },
                ].map((point, i) => (
                  <div
                    key={i}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2"
                    style={{ top: point.top, left: point.left }}
                  >
                    <div className="w-3 h-3 rounded-full bg-white/40 animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
                  </div>
                ))}

                {/* Connection lines */}
                <svg className="absolute inset-0 w-full h-full opacity-20" preserveAspectRatio="none">
                  <line x1="50%" y1="50%" x2="30%" y2="20%" stroke="white" strokeWidth="1" strokeDasharray="4" />
                  <line x1="50%" y1="50%" x2="60%" y2="40%" stroke="white" strokeWidth="1" strokeDasharray="4" />
                  <line x1="50%" y1="50%" x2="25%" y2="60%" stroke="white" strokeWidth="1" strokeDasharray="4" />
                  <line x1="50%" y1="50%" x2="70%" y2="70%" stroke="white" strokeWidth="1" strokeDasharray="4" />
                </svg>
              </div>

              {/* Stats overlay */}
              <div className="absolute -bottom-6 -right-6 p-6 rounded-2xl bg-background border border-border shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary">Zone d&apos;intervention</p>
                    <p className="text-foreground/60 text-sm">Tours et environs</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

