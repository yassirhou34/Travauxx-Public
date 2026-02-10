'use client'

import { ScrollReveal } from '@/components/scroll-reveal'
import { MapPin, Building2, Users, ArrowRight, Globe, CheckCircle2, Store } from 'lucide-react'
import Link from 'next/link'

export function MultiSite() {
  return (
    <section className="relative py-20 sm:py-28 lg:py-36 bg-[#050308] overflow-hidden">
      {/* Ligne de séparation */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#a39383]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Colonne gauche – contenu */}
          <ScrollReveal direction="right">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/15 mb-6">
                <Globe className="w-4 h-4 text-[#a39383]" />
                <span className="text-white/80 text-sm">Multi-sites & déploiements</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
                Coordonner plusieurs sites
                <span className="text-white/60"> avec un seul pilote.</span>
              </h2>

              <p className="text-white/70 text-lg mb-6">
                Ouvertures en réseau, relocalisation de services, rénovation d&apos;un parc immobilier : nous vous accompagnons
                dans la structuration et le déploiement de vos projets multi-sites.
              </p>

              <div className="space-y-3 mb-8">
                {[
                  'Planification des interventions pour limiter les coupures d&apos;activité',
                  'Standardisation des concepts tout en respectant les spécificités locales',
                  'Suivi centralisé des coûts et des délais pour chaque adresse',
                  'Un interlocuteur unique pour coordonner tous les chantiers',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-white/75 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#a39383] mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 text-white/60 text-sm mb-8">
                <span className="inline-flex items-center gap-2">
                  <Building2 className="w-4 h-4" />
                  Réseaux de magasins & agences
                </span>
                <span className="inline-flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Bureaux multi-sites
                </span>
                <span className="inline-flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  Groupes & franchises
                </span>
              </div>

              <Link
                href="/concevoir-mon-projet"
                className="inline-flex items-center gap-3 px-7 py-4 rounded-full bg-[#a39383] hover:bg-[#8b8276] text-white font-semibold text-sm sm:text-base transition-all duration-300 hover:shadow-xl hover:shadow-[#a39383]/30 hover:scale-105"
              >
                Étudier un déploiement multi-sites
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </ScrollReveal>

          {/* Colonne droite – visuel type carte / sites */}
          <ScrollReveal direction="left" delay={0.2}>
            <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-[#121212] via-[#050308] to-[#121212] p-6 sm:p-8 overflow-hidden">
              {/* Halo de fond */}
              <div className="absolute -top-10 -right-10 w-72 h-72 bg-[#a39383]/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-16 -left-16 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />

              <div className="relative z-10 space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-white/40 mb-1">Réseau géré</p>
                    <p className="text-white font-semibold text-lg">Indre-et-Loire & alentours</p>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-white/75 text-xs">
                    <Globe className="w-3.5 h-3.5" />
                    Vue synthétique
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-sm">
                  {[
                    { label: 'Points de vente', value: 'x 3', icon: Store },
                    { label: 'Plateaux de bureaux', value: 'x 2', icon: Building2 },
                    { label: 'Sites en cours', value: 'x 1', icon: MapPin },
                    { label: 'Interlocuteur côté client', value: '1', icon: Users },
                  ].map((item, i) => {
                    const Icon = item.icon
                    return (
                      <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                        <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                          <Icon className="w-4 h-4 text-[#a39383]" />
                        </div>
                        <div>
                          <p className="text-white/60 text-xs">{item.label}</p>
                          <p className="text-white font-semibold text-sm">{item.value}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>

                <div className="mt-2 rounded-2xl border border-dashed border-white/15 p-4 flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#a39383] mt-0.5" />
                  <p className="text-white/70 text-sm">
                    Cartographie, phasage des interventions, rétroplanning… Nous structurons un déploiement cohérent sur votre
                    territoire, sans multiplier les interlocuteurs.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

