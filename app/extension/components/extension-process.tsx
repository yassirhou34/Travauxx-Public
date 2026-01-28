'use client'

import { ScrollReveal } from '@/components/scroll-reveal'
import { Search, Ruler, FileCheck, HardHat, Key } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Étude & Faisabilité',
    description: 'Visite sur site, analyse des contraintes, étude du PLU et des règles d\'urbanisme.',
    duration: '1-2 semaines',
  },
  {
    number: '02',
    icon: Ruler,
    title: 'Conception sur-mesure',
    description: 'Plans, perspectives 3D, choix des matériaux. Votre projet prend forme.',
    duration: '2-4 semaines',
  },
  {
    number: '03',
    icon: FileCheck,
    title: 'Démarches administratives',
    description: 'Déclaration préalable ou permis de construire. On s\'occupe de tout.',
    duration: '2-3 mois',
  },
  {
    number: '04',
    icon: HardHat,
    title: 'Réalisation',
    description: 'Coordination des corps de métiers, suivi qualité, points réguliers.',
    duration: '2-4 mois',
  },
  {
    number: '05',
    icon: Key,
    title: 'Livraison',
    description: 'Réception des travaux, garanties, votre nouvel espace est prêt.',
    duration: 'Clé en main',
  },
]

export function ExtensionProcess() {
  return (
    <section className="relative py-20 sm:py-28 lg:py-36 bg-background overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-background to-background" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <ScrollReveal direction="up">
          <div className="text-center mb-16 lg:mb-24">
            <span className="inline-block text-accent text-sm font-semibold tracking-wider uppercase mb-4">
              Notre méthode
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
              De l&apos;idée à la clé
            </h2>
            <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
              Un accompagnement complet, de la première visite à la réception de votre extension.
            </p>
          </div>
        </ScrollReveal>

        {/* Process timeline - Desktop */}
        <div className="hidden lg:block relative">
          {/* Connection line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent/30 to-transparent -translate-y-1/2" />
          
          <div className="grid grid-cols-5 gap-6">
            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <ScrollReveal key={i} direction="up" delay={i * 0.1}>
                  <div className="relative flex flex-col items-center text-center group">
                    {/* Number badge */}
                    <div className="absolute -top-3 text-7xl font-bold text-accent/10 group-hover:text-accent/20 transition-colors">
                      {step.number}
                    </div>
                    
                    {/* Icon circle */}
                    <div className="relative z-10 w-20 h-20 rounded-full bg-background border-2 border-border group-hover:border-accent flex items-center justify-center mb-6 transition-all duration-500 group-hover:shadow-xl group-hover:shadow-accent/20">
                      <Icon className="w-8 h-8 text-foreground/70 group-hover:text-accent transition-colors" />
                    </div>

                    {/* Content */}
                    <h3 className="text-lg font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-sm text-foreground/60 mb-3 leading-relaxed">
                      {step.description}
                    </p>
                    <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium">
                      {step.duration}
                    </span>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>

        {/* Process timeline - Mobile/Tablet */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <ScrollReveal key={i} direction="left" delay={i * 0.1}>
                <div className="relative flex gap-6 items-start">
                  {/* Vertical line */}
                  {i !== steps.length - 1 && (
                    <div className="absolute left-[27px] top-16 w-0.5 h-full bg-gradient-to-b from-accent/30 to-transparent" />
                  )}
                  
                  {/* Icon */}
                  <div className="relative flex-shrink-0 w-14 h-14 rounded-full bg-background border-2 border-accent flex items-center justify-center shadow-lg shadow-accent/20">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-8">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-accent font-bold">{step.number}</span>
                      <h3 className="text-lg font-bold text-primary">{step.title}</h3>
                    </div>
                    <p className="text-foreground/60 text-sm mb-3">
                      {step.description}
                    </p>
                    <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium">
                      {step.duration}
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            )
          })}
        </div>

        {/* Summary stats */}
        <ScrollReveal direction="up" delay={0.5}>
          <div className="mt-16 lg:mt-24 p-8 lg:p-12 rounded-3xl bg-gradient-to-br from-muted/50 to-muted/30 border border-border/50">
            <div className="grid sm:grid-cols-3 gap-8 text-center">
              {[
                { value: '4-8', label: 'mois en moyenne', suffix: 'mois' },
                { value: '1', label: 'interlocuteur unique', suffix: 'seul' },
                { value: '100%', label: 'prix ferme garanti', suffix: '' },
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-2">
                    {stat.value}
                    {stat.suffix && <span className="text-accent text-2xl ml-1">{stat.suffix}</span>}
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

