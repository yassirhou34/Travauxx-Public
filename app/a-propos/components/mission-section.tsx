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
    <section id="mission" className="relative py-20 sm:py-28 lg:py-36 overflow-hidden bg-[#050308]">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#050308] via-[#050308] to-[#050308]" />
        <div className="absolute top-16 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl opacity-70" />
        <div className="absolute -bottom-10 left-0 w-80 h-80 bg-secondary/25 rounded-full blur-3xl opacity-60" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal direction="up">
          <div className="text-center mb-16 lg:mb-24">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/15 border border-accent/40 mb-6">
              <Target className="w-4 h-4 text-accent" />
              <span className="text-accent text-sm font-medium">Notre mission</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Transformer vos idées en projets réalisables
            </h2>
            <p className="text-white/70 text-lg max-w-3xl mx-auto">
              Particulier, professionnel ou investisseur en Indre-et-Loire : nous pilotons votre chantier de A à Z. De la conception à la remise des clés, nous gérons l&apos;intégralité de vos travaux pour vous garantir un résultat sans imprévus.
            </p>
          </div>
        </ScrollReveal>

        {/* Mission steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {missionSteps.map((step, i) => {
            const Icon = step.icon
            return (
              <ScrollReveal key={i} direction="up" delay={i * 0.1}>
                <div className="group h-full">
                  {/* Card */}
                  <div className="relative h-full p-6 lg:p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-accent/50 hover:shadow-[0_24px_80px_rgba(0,0,0,0.9)] transition-all duration-300 hover:-translate-y-1 backdrop-blur-lg">
                    {/* Large step number en beige en arrière-plan, collé encore plus à gauche */}
                    <div className="pointer-events-none absolute -top-2 left-1 text-6xl font-extrabold text-secondary/20 group-hover:text-secondary/30 transition-colors">
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div className="relative w-14 h-14 rounded-2xl bg-secondary/25 flex items-center justify-center mb-5 group-hover:bg-secondary/40 transition-colors">
                      <Icon className="w-7 h-7 text-secondary" />
                    </div>

                    {/* Content */}
                    <div className="relative">
                      <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                      <p className="text-white/75 text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            )
          })}
        </div>

        {/* Promise box */}
        <ScrollReveal direction="up" delay={0.6}>
          <div className="mt-16 lg:mt-20 p-8 lg:p-12 rounded-3xl bg-gradient-to-br from-[#372f2d] to-[#1a1413] border border-white/10 shadow-[0_32px_100px_rgba(0,0,0,0.9)]">
            <div className="text-center max-w-3xl mx-auto text-white">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                Une expérience fluide, sécurisée et sans mauvaises surprises
              </h3>
              <p className="text-white/75 text-lg mb-6">
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

