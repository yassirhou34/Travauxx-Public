'use client'

import { ScrollReveal } from '@/components/scroll-reveal'
import { Shield, Eye, Award, CheckCircle2 } from 'lucide-react'

const values = [
  {
    icon: Shield,
    title: 'Confiance',
    subtitle: 'Un chantier maîtrisé',
    items: [
      'Un contrat clair',
      'Un interlocuteur unique',
      'Un projet sécurisé',
    ],
    color: 'from-secondary to-secondary/80',
  },
  {
    icon: Eye,
    title: 'Transparence',
    subtitle: 'Des prix justes',
    items: [
      'Une communication fluide',
      'Une traçabilité complète',
      'Pas de mauvaises surprises',
    ],
    color: 'from-secondary to-secondary/80',
  },
  {
    icon: Award,
    title: 'Exigence',
    subtitle: 'Des finitions soignées',
    items: [
      'Des partenaires référencés',
      'Des délais tenus',
      'Une qualité constante',
    ],
    color: 'from-secondary to-secondary/80',
  },
]

export function ValuesSection() {
  return (
    <section className="relative py-12 sm:py-16 lg:py-20 bg-[#050308] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal direction="up">
          <div className="text-center mb-10 lg:mb-14">
            <span className="inline-block text-accent text-sm font-semibold tracking-wider uppercase mb-4">
              Nos valeurs
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Confiance, transparence, exigence
            </h2>
            <p className="text-white/75 text-lg max-w-2xl mx-auto">
              Nous construisons chaque projet sur la base de relations humaines solides et transparentes. 
              Notre priorité : <strong>votre satisfaction</strong>, avant, pendant et après les travaux.
            </p>
          </div>
        </ScrollReveal>

        {/* Image d'ambiance — image entière, sans encarts latéraux */}
        <ScrollReveal direction="up" delay={0.08} className="mb-12 lg:mb-14">
          <div className="relative w-full max-w-md mx-auto rounded-2xl overflow-hidden border border-white/10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/Banqueimages/photo-1604159848821-104723525eb4.avif"
              alt="Confiance, transparence, exigence — nos réalisations"
              className="w-full h-auto block"
            />
          </div>
        </ScrollReveal>

        {/* Values grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {values.map((value, i) => {
            const Icon = value.icon
            return (
              <ScrollReveal key={i} direction="up" delay={i * 0.1}>
                <div className="group h-full p-6 lg:p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-accent/50 hover:shadow-[0_24px_80px_rgba(0,0,0,0.9)] transition-all duration-300 hover:-translate-y-2 backdrop-blur-lg">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-2">{value.title}</h3>
                  <p className="text-accent font-semibold mb-4">{value.subtitle}</p>

                  {/* Items */}
                  <ul className="space-y-3">
                    {value.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                        <span className="text-white/75 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            )
          })}
        </div>

      </div>
    </section>
  )
}

