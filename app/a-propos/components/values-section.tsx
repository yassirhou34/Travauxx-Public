'use client'

import { ScrollReveal } from '@/components/scroll-reveal'
import { Shield, Eye, Award, Heart, Handshake, CheckCircle2 } from 'lucide-react'

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
    <section className="relative py-20 sm:py-28 lg:py-36 bg-[#050308] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal direction="up">
          <div className="text-center mb-16 lg:mb-20">
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

        {/* Values grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16">
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

        {/* Human approach */}
        <ScrollReveal direction="up" delay={0.3}>
          <div className="p-8 lg:p-12 rounded-3xl bg-gradient-to-br from-[#372f2d] to-[#1a1413] text-white border border-white/10 shadow-[0_32px_100px_rgba(0,0,0,0.9)]">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6">
                  <Heart className="w-4 h-4 text-accent" />
                  <span className="text-white/80 text-sm">Approche humaine</span>
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
                  Plus qu&apos;un prestataire, un partenaire
                </h3>
                <p className="text-white/75 text-lg mb-6">
                  Activ Travaux 37 est un partenaire de votre projet de vie ou de développement. 
                  Notre réseau repose sur une culture commune de la qualité, du service et de la rigueur.
                </p>
                <p className="text-white/70">
                  Grâce à une présence nationale, nous sommes capables de répondre à vos projets 
                  partout en France, en vous offrant toujours un 
                  accompagnement local, personnalisé et structuré.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '75+', label: 'Activateurs en France' },
                  { value: '20+', label: 'Ans d&apos;expérience' },
                  { value: '100%', label: 'Projets maîtrisés' },
                  { value: '1', label: 'Interlocuteur unique' },
                ].map((stat, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center">
                    <div className="text-3xl sm:text-4xl font-bold text-white mb-2">{stat.value}</div>
                    <div className="text-white/70 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

