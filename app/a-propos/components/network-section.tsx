'use client'

import { ScrollReveal } from '@/components/scroll-reveal'
import { Users, MapPin, Network, Shield, Award, Zap } from 'lucide-react'

const networkFeatures = [
  {
    icon: Users,
    title: 'Activateurs de travaux',
    description: 'Des professionnels présents partout en France, vos interlocuteurs locaux garants de la réussite de votre projet.',
    color: 'from-accent to-accent/80',
  },
  {
    icon: Network,
    title: 'Réseau coordonné',
    description: 'Un réseau d\'artisans et de partenaires qualifiés, d\'architectes et de bureaux d\'études reconnus.',
    color: 'from-secondary to-secondary/80',
  },
  {
    icon: Shield,
    title: 'Contractant général',
    description: 'Chaque activateur est un contractant général indépendant, sélectionné pour son professionnalisme et son expérience.',
    color: 'from-accent/90 to-accent/70',
  },
  {
    icon: Award,
    title: 'Méthodes éprouvées',
    description: 'Outils, méthodes et supports du réseau national Activ Travaux pour garantir la qualité et la cohérence.',
    color: 'from-secondary to-secondary/80',
  },
]

const advantages = [
  {
    title: 'Proximité & Réactivité',
    subtitle: 'Un interlocuteur local',
    description: 'Écoute, réactivité et connaissance du terrain',
  },
  {
    title: 'Force & Structure',
    subtitle: 'Un réseau national',
    description: 'Organisation rigoureuse et fiabilité éprouvée',
  },
]

export function NetworkSection() {
  return (
    <section className="relative py-20 sm:py-28 lg:py-36 bg-background overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-radial from-accent/5 to-transparent opacity-50" />
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-primary/5 to-transparent opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal direction="up">
          <div className="text-center mb-16 lg:mb-20">
            <span className="inline-block text-accent text-sm font-semibold tracking-wider uppercase mb-4">
              Notre réseau
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
              Un réseau de professionnels engagés
            </h2>
            <p className="text-foreground/60 text-lg max-w-3xl mx-auto">
              Activ Travaux, ce sont des <strong>&quot;activateurs de travaux&quot;</strong> présents partout en France. 
              Ils sont vos interlocuteurs locaux, garants de la réussite de votre projet sur leur secteur.
            </p>
          </div>
        </ScrollReveal>

        {/* Network features grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {networkFeatures.map((feature, i) => {
            const Icon = feature.icon
            return (
              <ScrollReveal key={i} direction="up" delay={i * 0.1}>
                <div className="group h-full p-6 rounded-2xl bg-muted/30 border border-border/50 hover:border-accent/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-3">{feature.title}</h3>
                  <p className="text-foreground/60 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </ScrollReveal>
            )
          })}
        </div>

        {/* Best of both worlds */}
        <ScrollReveal direction="up" delay={0.4}>
          <div className="p-8 lg:p-12 rounded-3xl bg-gradient-to-br from-primary to-primary/90 text-white">
            <div className="text-center mb-10">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
                Le meilleur des deux mondes
              </h3>
              <p className="text-white/70 text-lg max-w-2xl mx-auto">
                Ce modèle permet de vous offrir à la fois la proximité d&apos;un interlocuteur local 
                et la force d&apos;un réseau national structuré.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {advantages.map((adv, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                  <h4 className="text-xl font-bold mb-2">{adv.title}</h4>
                  <p className="text-accent text-sm font-medium mb-3">{adv.subtitle}</p>
                  <p className="text-white/60 text-sm">{adv.description}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

