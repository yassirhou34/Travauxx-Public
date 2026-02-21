'use client'

import { ScrollReveal } from '@/components/scroll-reveal'
import AgencyGrid from '@/components/AgencyGrid'
import { TrendingUp, Heart, Shield, Sparkles, Home, Users, Award, Clock } from 'lucide-react'

const benefits = [
  {
    icon: TrendingUp,
    title: 'Valorisez votre patrimoine',
    description: 'Une extension augmente significativement la valeur de revente de votre maison. C\’est un investissement stratégique qui allie confort immédiat et plus-value à long terme.',
    stat: '+40%',
    statLabel: 'de valeur',
    gradient: 'from-[#a39883] to-[#a39883]/80',
  },
  {
    icon: Heart,
    title: 'Cadre de vie préservé',
    description: 'Vous aimez votre quartier, vos voisins, l\'école des enfants, vos habitudes. Plutôt que de déménager, optez pour une extension qui adapte votre maison à vos nouveaux besoins.',

    stat: '0',
    statLabel: 'déménagement',
    gradient: 'from-[#a39883] to-[#a39883]/80',
  },
  {
    icon: Shield,
    title: 'Un projet sécurisé',
    description: 'En tant que contractant général, nous nous engageons sur un prix ferme et des délais garantis. Vous bénéficiez d\'une responsabilité unique et de toutes les garanties légales (décennale, bon fonctionnement).',
    stat: '100%',
    statLabel: 'maîtrisé',
    gradient: 'from-[#a39883] to-[#a39883]/80',
  },
  {
    icon: Sparkles,
    title: 'Conception sur-mesure',
    description: 'Chaque projet est conçu pour s\'intégrer à l\'architecture existante. Nous assurons une gestion fluide de A à Z, de la première esquisse à la remise des clés, pour un résultat idéal.',
    stat: '1',
    statLabel: 'interlocuteur',
    gradient: 'from-[#a39883] to-[#a39883]/80',
  },
]

const accompagnement = [
  {
    icon: Users,
    title: 'Responsabilité  unique',
    description: 'Un interlocuteur dédié pilote l\'ensemble des corps d\'état pour une coordination fluide.',
  },
  {
    icon: Award,
    title: 'Savoir-faire local',
    description: 'Un réseau de partenaires sélectionnés pour leur rigueur et leur fiabilité technique en Indre-et-Loire.',
  },
  {
    icon: Home,
    title: 'Livraison clé en main',
    description: 'Une solution complète incluant la conception, les démarches administratives et le suivi de travaux.',
  },
  {
    icon: Clock,
    title: 'Délais garantis',
    description: 'Un engagement ferme sur le respect du planning et du budget initialement fixés.',
  },
]

export function WhyExtension() {
  return (
    <section className="relative py-12 sm:py-16 lg:py-20 bg-[#050308] overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '32px 32px',
        }} />
      </div>

      {/* Floating accents */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-accent/15 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <ScrollReveal direction="up">
          <div className="text-center mb-16 lg:mb-20">
            <span className="inline-block text-accent text-sm font-semibold tracking-wider uppercase mb-4">
              Pourquoi agrandir ?
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              L&apos;extension:<br /> un investissement pour votre patrimoine

            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Plutôt que de déménager, optez pour une solution qui valorise votre bien tout en améliorant votre confort quotidien.
            </p>
          </div>
        </ScrollReveal>

        {/* Benefits grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, i) => {
            const Icon = benefit.icon
            return (
              <ScrollReveal key={i} direction="up" delay={i * 0.1}>
                <div className="group relative">
                  {/* Card – titres seuls, format compact */}
                  <div className="relative p-4 lg:p-5 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-1">
                    {/* Icon */}
                    <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-white/10 mb-3 shadow-lg">
                      <Icon className="w-5 h-5 text-[#a39883]" />
                    </div>

                    {/* Stat */}
                    <div className="mb-2">
                      <span className="text-2xl lg:text-3xl font-bold text-white">{benefit.stat}</span>
                      <span className="text-white/50 text-xs ml-1.5">{benefit.statLabel}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-base font-bold text-white">
                      {benefit.title}
                    </h3>

                    {/* Hover glow effect */}
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 -z-10`} />
                  </div>
                </div>
              </ScrollReveal>
            )
          })}
        </div>

        {/* Galerie extension – AgencyGrid (5 images + titres) */}
        <ScrollReveal direction="up" delay={0.35}>
          <div className="mt-16 lg:mt-20 -mx-4 sm:-mx-6 lg:-mx-8">
            <AgencyGrid
              backgroundColor="#050308"
              projectPrefix="Extension"
            />
          </div>
        </ScrollReveal>

        {/* Activ Travaux approach */}
        <ScrollReveal direction="up" delay={0.4}>
          <div className="mt-16 lg:mt-20 p-8 lg:p-12 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10">
            <div className="text-center mb-10">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Activ Travaux 37 : la maîtrise du Contractant Général

              </h3>
              <p className="text-white/60 max-w-2xl mx-auto">
              Nous assurons la gestion intégrale de votre projet. De l'étude de faisabilité à la remise des clés, nous portons la responsabilité unique de votre chantier.

              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {accompagnement.map((item, i) => {
                const Icon = item.icon
                return (
                  <div key={i} className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#a39883]/20 mb-3">
                      <Icon className="w-6 h-6 text-[#a39883]" />
                    </div>
                    <h4 className="font-semibold text-white">{item.title}</h4>
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
            <p className="mt-4 text-secondary font-semibold">— Activ Travaux</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

