'use client'

import { ScrollReveal } from '@/components/scroll-reveal'
import { TrendingUp, Heart, Shield, Sparkles, Home, Users, Award, Clock } from 'lucide-react'

const benefits = [
  {
    icon: TrendingUp,
    title: 'Valorisez votre patrimoine',
    description: 'Une extension bien conçue augmente significativement la valeur de votre bien immobilier. C\'est un investissement intelligent qui combine confort personnel et potentiel de revente.',
    stat: '+40%',
    statLabel: 'de valeur',
    gradient: 'from-secondary to-secondary/80',
  },
  {
    icon: Heart,
    title: 'Gardez votre cadre de vie',
    description: 'Vous aimez votre quartier, vos voisins, l\'école des enfants, vos habitudes. Plutôt que de déménager, optez pour une extension qui adapte votre maison à vos nouveaux besoins.',
    stat: '0',
    statLabel: 'déménagement',
    gradient: 'from-accent to-accent/80',
  },
  {
    icon: Shield,
    title: 'Projet 100% sécurisé',
    description: 'En tant que contractant général, nous nous engageons sur un prix ferme et des délais tenus. Garantie décennale, parfait achèvement, et responsabilité unique.',
    stat: '100%',
    statLabel: 'maîtrisé',
    gradient: 'from-accent/90 to-accent/70',
  },
  {
    icon: Sparkles,
    title: 'Conception sur-mesure',
    description: 'Chaque extension est pensée pour s\'intégrer harmonieusement à l\'existant, avec des matériaux de qualité et des finitions soignées dans une logique de valorisation long terme.',
    stat: '1',
    statLabel: 'interlocuteur',
    gradient: 'from-secondary to-secondary/80',
  },
]

const accompagnement = [
  {
    icon: Users,
    title: 'Interlocuteur unique',
    description: 'Un gestionnaire de projet dédié de A à Z',
  },
  {
    icon: Award,
    title: 'Expertise technique',
    description: 'Réseau de professionnels qualifiés et certifiés',
  },
  {
    icon: Home,
    title: 'Livraison clé en main',
    description: 'De la conception à la réception finale',
  },
  {
    icon: Clock,
    title: 'Délais garantis',
    description: 'Planning respecté, sans mauvaises surprises',
  },
]

export function WhyExtension() {
  return (
    <section className="relative py-20 sm:py-28 lg:py-36 bg-primary overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '32px 32px',
        }} />
      </div>

      {/* Floating accents */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <ScrollReveal direction="up">
          <div className="text-center mb-16 lg:mb-20">
            <span className="inline-block text-accent text-sm font-semibold tracking-wider uppercase mb-4">
              Pourquoi agrandir ?
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              L&apos;extension,<br />un investissement intelligent
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Plutôt que de déménager, optez pour une solution qui valorise votre patrimoine tout en améliorant votre confort.
            </p>
          </div>
        </ScrollReveal>

        {/* Benefits grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, i) => {
            const Icon = benefit.icon
            return (
              <ScrollReveal key={i} direction="up" delay={i * 0.1}>
                <div className="group relative h-full">
                  {/* Card */}
                  <div className="relative h-full p-6 lg:p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2">
                    {/* Icon */}
                    <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${benefit.gradient} mb-6 shadow-lg`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>

                    {/* Stat */}
                    <div className="mb-4">
                      <span className="text-4xl lg:text-5xl font-bold text-white">{benefit.stat}</span>
                      <span className="text-white/50 text-sm ml-2">{benefit.statLabel}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-3">
                      {benefit.title}
                    </h3>

                    {/* Description */}
                    <p className="text-white/60 text-sm leading-relaxed">
                      {benefit.description}
                    </p>

                    {/* Hover glow effect */}
                    <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 -z-10`} />
                  </div>
                </div>
              </ScrollReveal>
            )
          })}
        </div>

        {/* Activ Travaux approach */}
        <ScrollReveal direction="up" delay={0.4}>
          <div className="mt-16 lg:mt-20 p-8 lg:p-12 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10">
            <div className="text-center mb-10">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Activ Travaux : un accompagnement haut de gamme
              </h3>
              <p className="text-white/60 max-w-2xl mx-auto">
                En tant que contractant général, nous pilotons l&apos;ensemble de votre projet d&apos;extension, 
                de la première idée à la réalisation finale.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {accompagnement.map((item, i) => {
                const Icon = item.icon
                return (
                  <div key={i} className="text-center">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-accent/20 mb-4">
                      <Icon className="w-7 h-7 text-accent" />
                    </div>
                    <h4 className="font-semibold text-white mb-2">{item.title}</h4>
                    <p className="text-white/60 text-sm">{item.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </ScrollReveal>

        {/* Bottom quote */}
        <ScrollReveal direction="up" delay={0.5}>
          <div className="mt-16 lg:mt-20 text-center">
            <blockquote className="text-xl sm:text-2xl lg:text-3xl text-white/80 font-light italic max-w-3xl mx-auto">
              &ldquo;Agrandir sans dénaturer l&apos;existant, c&apos;est tout l&apos;art d&apos;une extension réussie.&rdquo;
            </blockquote>
            <p className="mt-4 text-accent font-semibold">— Activ Travaux</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

