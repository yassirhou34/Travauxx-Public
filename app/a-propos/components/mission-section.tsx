'use client'

import { ScrollReveal } from '@/components/scroll-reveal'
import { Target, Lightbulb, FileCheck, Users, HardHat, CheckCircle2 } from 'lucide-react'

const missionSteps = [
  {
    number: '01',
    icon: Lightbulb,
    title: 'Étude du projet et conseil personnalisé',
    description: 'Écoute de vos besoins, analyse de vos contraintes, conseils adaptés à votre situation.',
  },
  {
    number: '02',
    icon: FileCheck,
    title: 'Conception sur-mesure',
    description: 'Plans, modélisation 3D, choix esthétiques et techniques adaptés à votre projet.',
  },
  {
    number: '03',
    icon: Users,
    title: 'Gestion administrative et réglementaire',
    description: 'Démarches administratives, conformité, permis : on s\'occupe de tout.',
  },
  {
    number: '04',
    icon: Users,
    title: 'Sélection des artisans et entreprises',
    description: 'Réseau de partenaires qualifiés, sélectionnés pour leur savoir-faire et leur fiabilité.',
  },
  {
    number: '05',
    icon: HardHat,
    title: 'Coordination complète du chantier',
    description: 'Pilotage des travaux, suivi qualité, points réguliers jusqu\'à la réception.',
  },
  {
    number: '06',
    icon: CheckCircle2,
    title: 'Respect de la qualité, des délais et du budget',
    description: 'Engagement contractuel sur le prix ferme, le planning et la qualité d\'exécution.',
  },
]

export function MissionSection() {
  return (
    <section id="mission" className="relative py-20 sm:py-28 lg:py-36 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-background to-background" />
      
      {/* Animated orbs */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal direction="up">
          <div className="text-center mb-16 lg:mb-24">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
              <Target className="w-4 h-4 text-accent" />
              <span className="text-accent text-sm font-medium">Notre mission</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
              Transformer vos idées en projets réalisés
            </h2>
            <p className="text-foreground/60 text-lg max-w-3xl mx-auto">
              Que vous soyez un particulier souhaitant agrandir sa maison, un professionnel rénovant un local commercial, 
              ou un investisseur valorisant un bien, Activ Travaux vous accompagne à chaque étape.
            </p>
          </div>
        </ScrollReveal>

        {/* Mission steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {missionSteps.map((step, i) => {
            const Icon = step.icon
            return (
              <ScrollReveal key={i} direction="up" delay={i * 0.1}>
                <div className="group relative h-full">
                  {/* Number background */}
                  <div className="absolute -top-2 -left-2 text-7xl font-bold text-accent/10 group-hover:text-accent/20 transition-colors">
                    {step.number}
                  </div>
                  
                  {/* Card */}
                  <div className="relative h-full p-6 lg:p-8 rounded-2xl bg-background border border-border/50 hover:border-accent/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    {/* Icon */}
                    <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                      <Icon className="w-7 h-7 text-accent" />
                    </div>

                    {/* Content */}
                    <h3 className="text-lg font-bold text-primary mb-3">{step.title}</h3>
                    <p className="text-foreground/60 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            )
          })}
        </div>

        {/* Promise box */}
        <ScrollReveal direction="up" delay={0.6}>
          <div className="mt-16 lg:mt-20 p-8 lg:p-12 rounded-3xl bg-gradient-to-br from-primary to-primary/90 text-white">
            <div className="text-center max-w-3xl mx-auto">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                Une expérience fluide, sécurisée et sans mauvaises surprises
              </h3>
              <p className="text-white/70 text-lg mb-6">
                Tout est pensé pour vous garantir une expérience optimale, grâce à notre engagement contractuel 
                sur le <strong>prix ferme</strong>, le <strong>planning</strong> et la <strong>qualité d&apos;exécution</strong>.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                {['Prix ferme', 'Planning tenu', 'Qualité garantie'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                    <span className="text-white/90 font-medium">{item}</span>
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

