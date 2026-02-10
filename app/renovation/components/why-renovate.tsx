'use client'

import { ScrollReveal } from '@/components/scroll-reveal'
import { Target, Users, FileCheck, Clock, Award, ShieldCheck } from 'lucide-react'

const reasons = [
  {
    icon: Target,
    title: 'Résultat cohérent',
    description: 'Un projet global permet d\'assurer la cohérence technique et esthétique de l\'ensemble. Pas de raccords approximatifs, pas de compromis.',
  },
  {
    icon: Users,
    title: 'Interlocuteur unique',
    description: 'Un seul responsable de A à Z. Plus besoin de coordonner vous-même les différents corps de métier.',
  },
  {
    icon: FileCheck,
    title: 'Prix ferme',
    description: 'Chiffrage détaillé et engagement contractuel sur le budget. Pas de mauvaises surprises en cours de chantier.',
  },
  {
    icon: Clock,
    title: 'Délais tenus',
    description: 'Planning établi en amont et respecté. Nous nous engageons sur une date de livraison.',
  },
  {
    icon: Award,
    title: 'Finitions soignées',
    description: 'Notre réputation repose sur la qualité des finitions. Chaque détail compte pour un résultat impeccable.',
  },
  {
    icon: ShieldCheck,
    title: 'Garanties complètes',
    description: 'Parfait achèvement, biennale, décennale. Un cadre juridique qui vous protège.',
  },
]

const forWho = [
  {
    title: 'Propriétaires occupants',
    description: 'Vous vivez dans votre maison et souhaitez améliorer votre confort au quotidien.',
    examples: ['Rénovation après acquisition', 'Mise aux normes', 'Modernisation'],
  },
  {
    title: 'Investisseurs locatifs',
    description: 'Vous souhaitez valoriser votre bien et améliorer son attractivité locative.',
    examples: ['Mise en conformité DPE', 'Attractivité locataire', 'Rentabilité optimisée'],
  },
  {
    title: 'Résidences secondaires',
    description: 'Transformer votre maison de vacances en un lieu de vie confortable.',
    examples: ['Confort toutes saisons', 'Sécurisation', 'Entretien réduit'],
  },
]

export function WhyRenovate() {
  return (
    <section className="relative py-20 sm:py-28 lg:py-36 bg-[#050308] overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#a39383]/40 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal direction="up">
          <div className="text-center mb-16 lg:mb-20">
            <span className="inline-block text-[#a39383] text-sm font-semibold tracking-wider uppercase mb-4">
              Pourquoi nous choisir ?
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Rénover avec méthode
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              En tant que contractant général, nous apportons un cadre structuré à votre projet 
              de rénovation pour un résultat à la hauteur de vos attentes.
            </p>
          </div>
        </ScrollReveal>

        {/* Reasons grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {reasons.map((reason, i) => {
            const Icon = reason.icon
            return (
              <ScrollReveal key={i} direction="up" delay={i * 0.1}>
                <div className="group h-full p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#a39383]/60 hover:shadow-[0_30px_90px_rgba(0,0,0,0.9)] transition-all duration-300 hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-xl bg-[#a39383]/20 flex items-center justify-center mb-4 group-hover:bg-[#a39383]/30 transition-colors">
                    <Icon className="w-6 h-6 text-[#a39383]" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{reason.title}</h3>
                  <p className="text-white/75 text-sm leading-relaxed">{reason.description}</p>
                </div>
              </ScrollReveal>
            )
          })}
        </div>

        {/* For who section */}
        <ScrollReveal direction="up" delay={0.3}>
          <div className="p-8 lg:p-12 rounded-3xl bg-[#0b0b0b] border border-white/10">
            <div className="text-center mb-10">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Pour qui ?
              </h3>
              <p className="text-white/60 max-w-2xl mx-auto">
                Nous accompagnons tous types de projets de rénovation, pour des profils variés.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {forWho.map((item, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10">
                  <h4 className="font-bold text-white text-lg mb-2">{item.title}</h4>
                  <p className="text-white/60 text-sm mb-4">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.examples.map((ex, j) => (
                      <span key={j} className="px-2 py-1 rounded-full bg-[#a39383]/25 text-[#f5f0ea] text-xs">
                        {ex}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

