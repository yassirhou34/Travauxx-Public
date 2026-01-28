'use client'

import { ScrollReveal } from '@/components/scroll-reveal'
import { FileText, Scale, MapPin, Clock, CheckCircle2, AlertTriangle } from 'lucide-react'

const demarchesInfo = [
  {
    icon: FileText,
    title: 'Déclaration préalable',
    description: 'Pour les extensions de moins de 20m² (ou 40m² en zone urbaine avec PLU).',
    details: 'Délai d\'instruction : environ 1 mois. Document simplifié à déposer en mairie.',
    required: true,
  },
  {
    icon: Scale,
    title: 'Permis de construire',
    description: 'Pour les extensions de plus de 20m² (ou 40m² selon zones).',
    details: 'Délai d\'instruction : 2 à 3 mois. Dossier complet avec plans d\'architecte si >150m² total.',
    required: true,
  },
  {
    icon: MapPin,
    title: 'Plan Local d\'Urbanisme (PLU)',
    description: 'Règles spécifiques à votre commune : emprise au sol, hauteur, distances.',
    details: 'Nous vérifions systématiquement la conformité de votre projet avec le PLU local.',
    required: true,
  },
  {
    icon: Clock,
    title: 'Délais à prévoir',
    description: 'De 2 à 4 mois pour les démarches administratives complètes.',
    details: 'Nous anticipons ces délais dès le début du projet pour un planning réaliste.',
    required: false,
  },
]

const keyPoints = [
  {
    title: 'Surface créée < 20m²',
    subtitle: 'Déclaration préalable',
    description: 'Simple déclaration en mairie, délai ~1 mois',
    icon: '📋',
  },
  {
    title: 'Surface créée 20-40m²',
    subtitle: 'Selon la zone',
    description: 'DP en zone urbaine avec PLU, sinon permis',
    icon: '📐',
  },
  {
    title: 'Surface créée > 40m²',
    subtitle: 'Permis de construire',
    description: 'Permis obligatoire, architecte si >150m² total',
    icon: '🏗️',
  },
  {
    title: 'Zone protégée / ABF',
    subtitle: 'Avis architecte des bâtiments',
    description: 'Délais allongés, contraintes esthétiques',
    icon: '🏛️',
  },
]

export function DemarchesSection() {
  return (
    <section className="relative py-20 sm:py-28 lg:py-36 bg-muted/30 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal direction="up">
          <div className="text-center mb-16 lg:mb-20">
            <span className="inline-block text-accent text-sm font-semibold tracking-wider uppercase mb-4">
              Démarches administratives
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
              On s&apos;occupe de tout
            </h2>
            <p className="text-foreground/60 text-lg max-w-3xl mx-auto">
              En France, tout projet d&apos;extension est encadré par des règles d&apos;urbanisme précises. 
              Nous vous accompagnons dans toutes les démarches pour garantir la conformité de votre projet.
            </p>
          </div>
        </ScrollReveal>

        {/* Quick reference cards */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {keyPoints.map((point, i) => (
              <div 
                key={i}
                className="relative p-6 rounded-2xl bg-background border border-border/50 hover:border-accent/30 hover:shadow-lg transition-all duration-300 group"
              >
                <span className="text-3xl mb-4 block">{point.icon}</span>
                <h4 className="font-bold text-primary mb-1">{point.title}</h4>
                <p className="text-accent text-sm font-medium mb-2">{point.subtitle}</p>
                <p className="text-foreground/60 text-sm">{point.description}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Detailed info grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {demarchesInfo.map((item, i) => {
            const Icon = item.icon
            return (
              <ScrollReveal key={i} direction={i % 2 === 0 ? 'left' : 'right'} delay={i * 0.1}>
                <div className="flex gap-5 p-6 rounded-2xl bg-background border border-border/50 hover:shadow-lg transition-all duration-300">
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center">
                    <Icon className="w-7 h-7 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary text-lg mb-2">{item.title}</h4>
                    <p className="text-foreground/70 mb-2">{item.description}</p>
                    <p className="text-foreground/50 text-sm">{item.details}</p>
                  </div>
                </div>
              </ScrollReveal>
            )
          })}
        </div>

        {/* Promise box */}
        <ScrollReveal direction="up" delay={0.3}>
          <div className="relative p-8 lg:p-12 rounded-3xl bg-primary overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                backgroundSize: '24px 24px',
              }} />
            </div>

            <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
                  Notre engagement
                </h3>
                <p className="text-white/80 text-lg mb-6">
                  De l&apos;étude réglementaire à l&apos;obtention des autorisations, nous gérons l&apos;intégralité 
                  du dossier administratif pour que vous puissiez agrandir en toute tranquillité.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-white/90">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                    <span>Étude PLU incluse</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/90">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                    <span>Montage du dossier</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/90">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                    <span>Suivi en mairie</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="flex items-start gap-4 mb-4">
                  <AlertTriangle className="w-6 h-6 text-amber-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-white mb-2">À savoir</h4>
                    <p className="text-white/70 text-sm">
                      Commencer des travaux sans autorisation peut entraîner des sanctions : 
                      amende, obligation de démolir, refus de raccordement aux réseaux.
                    </p>
                  </div>
                </div>
                <p className="text-white/60 text-sm">
                  Avec Activ Travaux, vous êtes sûr d&apos;être en conformité à chaque étape.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

