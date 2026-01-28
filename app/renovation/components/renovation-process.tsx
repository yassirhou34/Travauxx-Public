'use client'

import { ScrollReveal } from '@/components/scroll-reveal'
import { MessageSquare, Ruler, Calculator, HardHat, CheckCircle, Sparkles } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Premier échange',
    description: 'Discussion de votre projet, de vos envies et de vos contraintes. Visite sur site pour évaluer l\'existant.',
    duration: 'Gratuit',
    color: '#e83263',
  },
  {
    number: '02',
    icon: Ruler,
    title: 'Conception',
    description: 'Étude technique, plans, perspectives 3D. Définition précise du projet avec validation à chaque étape.',
    duration: '2-4 semaines',
    color: '#a39383',
  },
  {
    number: '03',
    icon: Calculator,
    title: 'Chiffrage & Contrat',
    description: 'Devis détaillé poste par poste. Engagement contractuel sur le prix ferme et les délais.',
    duration: '1-2 semaines',
    color: '#e83263',
  },
  {
    number: '04',
    icon: HardHat,
    title: 'Réalisation',
    description: 'Coordination des corps de métier, suivi qualité, points réguliers. Vous êtes informé à chaque étape.',
    duration: '2-6 mois',
    color: '#a39383',
  },
  {
    number: '05',
    icon: CheckCircle,
    title: 'Réception',
    description: 'Visite de fin de chantier, levée des réserves éventuelles, remise des clés et des documents.',
    duration: 'J-Final',
    color: '#e83263',
  },
  {
    number: '06',
    icon: Sparkles,
    title: 'Garanties',
    description: 'Parfait achèvement (1 an), garantie biennale (2 ans), garantie décennale (10 ans).',
    duration: 'Sérénité',
    color: '#a39383',
  },
]

export function RenovationProcess() {
  return (
    <section className="relative py-20 sm:py-28 lg:py-36 bg-background overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-accent/5 to-transparent opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <ScrollReveal direction="up">
          <div className="text-center mb-16 lg:mb-24">
            <span className="inline-block text-accent text-sm font-semibold tracking-wider uppercase mb-4">
              Notre méthode
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
              Un projet bien cadré
            </h2>
            <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
              De la première discussion à la remise des clés, un accompagnement structuré pour un résultat à la hauteur.
            </p>
          </div>
        </ScrollReveal>

        {/* Process grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <ScrollReveal key={i} direction="up" delay={i * 0.1}>
                <div className="group relative h-full">
                  {/* Number background */}
                  <div 
                    className="absolute -top-2 -left-2 text-8xl font-bold opacity-5 group-hover:opacity-10 transition-opacity"
                    style={{ color: step.color }}
                  >
                    {step.number}
                  </div>
                  
                  {/* Card */}
                  <div className="relative h-full p-6 lg:p-8 rounded-2xl bg-muted/30 border border-border/50 hover:border-accent/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    {/* Icon */}
                    <div 
                      className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110"
                      style={{ backgroundColor: `${step.color}20` }}
                    >
                      <Icon className="w-7 h-7" style={{ color: step.color }} />
                    </div>

                    {/* Content */}
                    <div className="flex items-center gap-2 mb-3">
                      <span 
                        className="text-xs font-bold"
                        style={{ color: step.color }}
                      >
                        {step.number}
                      </span>
                      <h3 className="text-lg font-bold text-primary">{step.title}</h3>
                    </div>
                    
                    <p className="text-foreground/60 text-sm leading-relaxed mb-4">
                      {step.description}
                    </p>

                    {/* Duration badge */}
                    <span 
                      className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-white"
                      style={{ backgroundColor: step.color }}
                    >
                      {step.duration}
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            )
          })}
        </div>

        {/* Bottom summary */}
        <ScrollReveal direction="up" delay={0.5}>
          <div className="mt-16 lg:mt-20 p-8 lg:p-12 rounded-3xl bg-gradient-to-br from-muted/50 to-muted/30 border border-border/50">
            <div className="grid sm:grid-cols-4 gap-8 text-center">
              {[
                { value: '1', label: 'interlocuteur unique', suffix: 'seul' },
                { value: '100%', label: 'prix ferme garanti', suffix: '' },
                { value: '10', label: 'ans de garantie décennale', suffix: 'ans' },
                { value: '0', label: 'mauvaise surprise', suffix: '' },
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-3xl sm:text-4xl font-bold text-primary mb-1">
                    {stat.value}
                    {stat.suffix && <span className="text-accent text-xl ml-1">{stat.suffix}</span>}
                  </div>
                  <div className="text-foreground/60 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

