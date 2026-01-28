'use client'

import { ScrollReveal } from '@/components/scroll-reveal'
import { Users, Eye, TrendingUp, Shield, Sparkles, CheckCircle2 } from 'lucide-react'

const values = [
  {
    icon: Users,
    title: 'Un interlocuteur unique',
    description: 'En tant que contractant général, nous coordonnons l\'ensemble des intervenants, de la conception à la réalisation.',
  },
  {
    icon: Eye,
    title: 'Une vision globale',
    description: 'Vous bénéficiez d\'un suivi clair, rigoureux et centralisé, pour un projet maîtrisé de bout en bout.',
  },
  {
    icon: TrendingUp,
    title: 'Valorisation du patrimoine',
    description: 'Nos projets ne se contentent pas de transformer un espace : ils le valorisent, en augmentant sa valeur esthétique et financière.',
  },
  {
    icon: Shield,
    title: 'Respect de l\'identité',
    description: 'Chaque intervention est pensée dans le respect de l\'identité de votre bien et de son environnement.',
  },
]

const deliverables = [
  'Analyse du bâti existant et de son potentiel',
  'Étude du terrain et du contexte urbanistique',
  'Esquisses personnalisées et modélisation 3D',
  'Conseils sur les volumes, ouvertures, matériaux',
  'Plans techniques complets pour dépôt administratif',
  'Estimation fiable du budget',
  'Identification des contraintes en amont',
  'Prévention des imprévus de chantier',
]

export function ValueProposition() {
  return (
    <section className="relative py-20 sm:py-28 lg:py-36 bg-muted/30 overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal direction="up">
          <div className="text-center mb-16 lg:mb-20">
            <span className="inline-block text-accent text-sm font-semibold tracking-wider uppercase mb-4">
              Notre engagement
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
              Esthétique, technique & sérénité
            </h2>
            <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
              Conjuguer créativité architecturale, rigueur technique et tranquillité d&apos;esprit pour vous.
            </p>
          </div>
        </ScrollReveal>

        {/* Values grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {values.map((value, i) => {
            const Icon = value.icon
            return (
              <ScrollReveal key={i} direction="up" delay={i * 0.1}>
                <div className="group h-full p-6 rounded-2xl bg-background border border-border/50 hover:border-accent/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-lg">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-2">{value.title}</h3>
                  <p className="text-foreground/60 text-sm leading-relaxed">{value.description}</p>
                </div>
              </ScrollReveal>
            )
          })}
        </div>

        {/* Deliverables section */}
        <ScrollReveal direction="up" delay={0.3}>
          <div className="p-8 lg:p-12 rounded-3xl bg-gradient-to-br from-primary to-violet-900">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6">
                  <Sparkles className="w-4 h-4 text-violet-300" />
                  <span className="text-white/80 text-sm font-medium">Ce que comprend la conception</span>
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
                  Une étude complète pour un projet maîtrisé
                </h3>
                <p className="text-white/60 mb-6">
                  Chaque élément de la phase de conception contribue à la réussite de votre projet. 
                  Rien n&apos;est laissé au hasard.
                </p>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-3">
                {deliverables.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                    <CheckCircle2 className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" />
                    <span className="text-white/80 text-sm">{item}</span>
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

