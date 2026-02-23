'use client'

import Image from 'next/image'
import { ScrollReveal } from '@/components/scroll-reveal'
import LightboxGlass from '@/components/LightboxGlass'
import { Target, Users, FileCheck, Clock, Award, ShieldCheck } from 'lucide-react'

const reasons = [
  {
    icon: Target,
    title: 'Résultat cohérent',
    description: 'Un projet global permet d\'assurer la cohérence technique et esthétique de l\'ensemble. Pas de raccords approximatifs, pas de compromis.',
  },
  {
    icon: Users,
    title: 'Interlocuteur unique',
    description: 'Un seul responsable de A à Z. Plus besoin de coordonner vous-même les différents corps de métier.',
  },
  {
    icon: FileCheck,
    title: 'Prix ferme',
    description: 'Chiffrage détaillé et engagement contractuel sur le budget. Pas de mauvaises surprises en cours de chantier.',
  },
  {
    icon: Clock,
    title: 'Délais tenus',
    description: 'Planning établi en amont et respecté. Nous nous engageons sur une date de livraison.',
  },
  {
    icon: Award,
    title: 'Finitions soignées',
    description: 'Notre réputation repose sur la qualité des finitions. Chaque détail compte pour un résultat impeccable.',
  },
  {
    icon: ShieldCheck,
    title: 'Garanties complètes',
    description: 'Parfait achèvement, biennale, décennale. Un cadre juridique qui vous protège.',
  },
]

const forWho = [
  {
    title: 'Propriétaires occupants',
    description: 'Vous vivez dans votre maison et souhaitez améliorer votre confort au quotidien.',
    examples: ['Rénovation après acquisition', 'Mise aux normes', 'Modernisation'],
  },
  {
    title: 'Investisseurs locatifs',
    description: 'Vous souhaitez valoriser votre bien et améliorer son attractivité locative.',
    examples: ['Mise en conformité DPE', 'Attractivité locataire', 'Rentabilité optimisée'],
  },
  {
    title: 'Résidences secondaires',
    description: 'Transformer votre maison de vacances en un lieu de vie confortable.',
    examples: ['Confort toutes saisons', 'Sécurisation', 'Entretien réduit'],
  },
]

export function WhyRenovate() {
  return (
    <section className="relative py-12 sm:py-16 lg:py-20 bg-[#050308] overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#a39383]/40 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal direction="up">
          <div className="text-center mb-16 lg:mb-20">
            <span className="inline-block text-[#a39383] text-sm font-semibold tracking-wider uppercase mb-4">
              Pourquoi nous choisir ?
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Rénover avec méthode
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              En tant que contractant général, nous apportons un cadre structuré à votre projet 
              de rénovation pour un résultat à la hauteur de vos attentes.
            </p>
          </div>
        </ScrollReveal>

        {/* Reasons grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {reasons.map((reason, i) => {
            const Icon = reason.icon
            return (
              <ScrollReveal key={i} direction="up" delay={i * 0.1}>
                <div className="group h-full p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#a39383]/60 hover:shadow-[0_30px_90px_rgba(0,0,0,0.9)] transition-all duration-300 hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-xl bg-[#a39383]/20 flex items-center justify-center mb-4 group-hover:bg-[#a39383]/30 transition-colors">
                    <Icon className="w-6 h-6 text-[#a39383]" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-0">{reason.title}</h3>
                </div>
              </ScrollReveal>
            )
          })}
        </div>

        {/* Bandeau image avant "Pour qui" – 3 photos cliquables en LightboxGlass */}
        <ScrollReveal direction="up" delay={0.25}>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mb-16">
            <div className="col-span-2 md:col-span-1">
              <LightboxGlass
                embedded
                image="/Banqueimages/M7_01321.jpg"
                title="Rénovation habitat"
                subtitle="Rénover avec méthode"
                showLike={false}
                showDownload={true}
              >
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 cursor-pointer">
                  <Image src="/Banqueimages/M7_01321.jpg" alt="Rénovation habitat" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                </div>
              </LightboxGlass>
            </div>
            <LightboxGlass
              embedded
              image="/Banqueimages/M7_01323.jpg"
              title="Chantier rénovation"
              subtitle="Rénover avec méthode"
              showLike={false}
              showDownload={true}
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 cursor-pointer">
                <Image src="/Banqueimages/M7_01323.jpg" alt="Chantier rénovation" fill className="object-cover" sizes="(max-width: 768px) 50vw, 33vw" />
              </div>
            </LightboxGlass>
            <LightboxGlass
              embedded
              image="/Banqueimages/M7_01330.jpg"
              title="Réalisation Activ Travaux"
              subtitle="Rénover avec méthode"
              showLike={false}
              showDownload={true}
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 cursor-pointer">
                <Image src="/Banqueimages/M7_01330.jpg" alt="Réalisation Activ Travaux" fill className="object-cover" sizes="(max-width: 768px) 50vw, 33vw" />
              </div>
            </LightboxGlass>
          </div>
        </ScrollReveal>

        {/* For who section */}
        <ScrollReveal direction="up" delay={0.3}>
          <div className="p-8 lg:p-12 rounded-3xl bg-[#0b0b0b] border border-white/10">
            <div className="text-center mb-10">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Pour qui ?
              </h3>
              <p className="text-white/60 max-w-2xl mx-auto">
                Nous accompagnons tous types de projets de rénovation, pour des profils variés.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {forWho.map((item, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center">
                  <h4 className="font-bold text-white text-lg mb-2">{item.title}</h4>
                  <p className="text-white/60 text-sm mb-0">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

