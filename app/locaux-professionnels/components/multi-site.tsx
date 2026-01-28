'use client'

import { ScrollReveal } from '@/components/scroll-reveal'
import { MapPin, Building2, Users, ArrowRight, Globe, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'

export function MultiSite() {
  return (
    <section className="relative py-20 sm:py-28 lg:py-36 bg-muted/30 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Content */}
          <ScrollReveal direction="right">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
                <Globe className="w-4 h-4 text-accent" />
                <span className="text-accent text-sm font-medium">Développement multi-sites</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-6">
                Vous avez plusieurs sites ?
              </h2>
              
              <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
                Activ Travaux vous suit partout en France et met à votre disposition 
                l&apos;ensemble de nos contractants généraux répartis sur tout le territoire national.
              </p>

              <p className="text-base text-foreground/60 mb-8 leading-relaxed">
                Chaque projet professionnel est conçu pour répondre à vos enjeux métier 
                tout en créant des espaces de qualité, durables, fonctionnels et valorisants.
              </p>

              {/* Benefits list */}
              <div className="space-y-3 mb-8">
                {[
                  'Cohérence de vos aménagements partout en France',
                  'Un interlocuteur central pour piloter l\'ensemble',
                  'Mutualisation des achats et des process',
                  'Déploiement maîtrisé de votre concept',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground/70">{item}</span>
                  </div>
                ))}
              </div>

              <Link 
                href="/concevoir-mon-projet"
                className="group inline-flex items-center gap-3 px-6 py-4 rounded-xl bg-accent hover:bg-accent/90 font-semibold text-white transition-all duration-300 hover:shadow-xl hover:shadow-accent/30 hover:scale-105"
              >
                Discuter de mon projet multi-sites
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </ScrollReveal>

          {/* Right side - Visual */}
          <ScrollReveal direction="left" delay={0.2}>
            <div className="relative">
              {/* Map-like visualization */}
              <div className="relative aspect-square rounded-3xl bg-gradient-to-br from-primary to-primary overflow-hidden">
                {/* Grid pattern */}
                <div className="absolute inset-0 opacity-10" style={{
                  backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                  backgroundSize: '30px 30px',
                }} />

                {/* Floating location pins */}
                <div className="absolute inset-0 p-8">
                  {/* Simulated France map points */}
                  {[
                    { top: '20%', left: '50%', delay: '0s', size: 'lg' },
                    { top: '35%', left: '30%', delay: '0.2s', size: 'md' },
                    { top: '30%', left: '70%', delay: '0.4s', size: 'md' },
                    { top: '50%', left: '45%', delay: '0.6s', size: 'lg', highlight: true },
                    { top: '55%', left: '25%', delay: '0.8s', size: 'sm' },
                    { top: '60%', left: '65%', delay: '1s', size: 'md' },
                    { top: '75%', left: '40%', delay: '1.2s', size: 'sm' },
                    { top: '70%', left: '55%', delay: '1.4s', size: 'sm' },
                  ].map((point, i) => (
                    <div
                      key={i}
                      className={`absolute transform -translate-x-1/2 -translate-y-1/2 ${
                        point.highlight ? 'z-10' : ''
                      }`}
                      style={{ top: point.top, left: point.left }}
                    >
                      <div 
                        className={`flex items-center justify-center rounded-full animate-pulse ${
                          point.size === 'lg' ? 'w-12 h-12' : point.size === 'md' ? 'w-8 h-8' : 'w-6 h-6'
                        } ${
                          point.highlight 
                            ? 'bg-amber-500 shadow-lg shadow-amber-500/50' 
                            : 'bg-blue-400/80'
                        }`}
                        style={{ animationDelay: point.delay }}
                      >
                        <MapPin className={`text-white ${
                          point.size === 'lg' ? 'w-6 h-6' : point.size === 'md' ? 'w-4 h-4' : 'w-3 h-3'
                        }`} />
                      </div>
                      {point.highlight && (
                        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-3 py-1 rounded-full bg-white text-primary text-xs font-semibold whitespace-nowrap shadow-lg">
                          Indre-et-Loire
                        </div>
                      )}
                    </div>
                  ))}

                  {/* Connection lines */}
                  <svg className="absolute inset-0 w-full h-full opacity-30" preserveAspectRatio="none">
                    <line x1="50%" y1="20%" x2="45%" y2="50%" stroke="white" strokeWidth="1" strokeDasharray="4" />
                    <line x1="30%" y1="35%" x2="45%" y2="50%" stroke="white" strokeWidth="1" strokeDasharray="4" />
                    <line x1="70%" y1="30%" x2="45%" y2="50%" stroke="white" strokeWidth="1" strokeDasharray="4" />
                    <line x1="45%" y1="50%" x2="65%" y2="60%" stroke="white" strokeWidth="1" strokeDasharray="4" />
                  </svg>
                </div>

                {/* Stats overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <div className="flex justify-around text-center">
                    <div>
                      <div className="text-3xl font-bold text-white">75+</div>
                      <div className="text-white/60 text-xs">Agences en France</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-white">100%</div>
                      <div className="text-white/60 text-xs">Couverture nationale</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating card */}
              <div className="absolute -bottom-6 -right-6 p-4 rounded-2xl bg-background border border-border shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-blue-500" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary">Réseau national</p>
                    <p className="text-foreground/60 text-sm">Un maillage complet</p>
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

