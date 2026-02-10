import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Instagram, Music2, Youtube } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { SectionHero } from '@/components/section-hero'
import { HeroVideo } from '@/components/hero-video'
import { SectionContent } from '@/components/section-content'
import { HomeCTA } from '@/components/home-cta'
import StatsLuxury from '@/components/StatsLuxury'
import SpotlightGrid from '@/components/SpotlightGrid'
import { Marquee } from '@/components/MagazineComponents'
import { AdvancedReveal, StaggerContainer, ParallaxWrapper, TextSplitReveal, MagneticHover } from '@/components/animations'

export const metadata: Metadata = {
  title: 'Activ Travaux 37 — Rénovation premium clé en main en Indre-et-Loire',
  description: 'Contractant général en Indre-et-Loire. Rénovation, extension, rénovation énergétique et aménagement intérieur. Projet cadré, suivi, finitions soignées. Demande de devis.',
}

export default function Home() {
  return (
    <>
      <Header variant="transparent" />
      <main>
        {/* Hero Video avec contenu animé */}
        <HeroVideo />

        {/* Statistiques clés – comme sur le site national (fond blanc) */}
        <StatsLuxury
          badgeText="Nos performances"
          title="Notre héritage en chiffres"
          stats={[
            { value: 1000, suffix: '+', label: 'projets réalisés / an' },
            { value: 75, suffix: '+', label: 'gestionnaires de projets' },
            { value: 20, suffix: ' ans', label: "d'expérience" },
            { value: 100, suffix: '%', label: 'sérénité' },
          ]}
          /* Fond blanc comme avant */
          backgroundColor="#ffffff"
          /* Lignes et badge en rose charte */
          dividerColor="#e83263"
          badgeColor="#e83263"
          /* Titre et textes en noir */
          titleColor="#1a1a1a"
          dividerLineColor="rgba(0,0,0,0.1)"
          /* Chiffres : on garde le même dégradé rose → rouge */
          valueGradientFrom="#e83263"
          valueGradientTo="#af191c"
          /* Libellés sous les chiffres en gris foncé, comme avant */
          labelColor="rgba(107, 114, 128, 1)"
          labelHoverColor="#1a1a1a"
        />

        {/* Pourquoi choisir le contrat de Contractant Général – carte claire sur fond sombre */}
        <ParallaxWrapper speed={0.3}>
          <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-[#050308]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <AdvancedReveal direction="scale" delay={0.2}>
                  <div className="relative p-8 sm:p-10 md:p-12 lg:p-16 rounded-[32px] bg-white/5 border border-white/12 shadow-[0_40px_120px_rgba(0,0,0,0.85)] backdrop-blur-xl">
                    {/* Halo décoratif façon studio */}
                    <div className="absolute -top-16 -left-16 w-40 h-40 bg-accent/20 rounded-full blur-3xl opacity-70" />
                    <div className="absolute -bottom-20 -right-10 w-48 h-48 bg-secondary/25 rounded-full blur-3xl opacity-70" />
                    
                    <div className="relative z-10">
                      <TextSplitReveal splitBy="word" delay={0.3}>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
                          Le confort d&apos;un projet piloté par des experts.
                        </h2>
                      </TextSplitReveal>
                      <AdvancedReveal direction="fade" delay={0.5}>
                        <p className="text-base sm:text-lg md:text-xl text-white/75 leading-relaxed">
                          Oubliez la gestion des corps d&apos;état et les imprévus budgétaires. Activ Travaux 37 coordonne la conception, le chiffrage et l&apos;exécution. Vous gardez la vision, nous prenons la responsabilité.
                        </p>
                      </AdvancedReveal>
                    </div>
                  </div>
                </AdvancedReveal>
              </div>
            </div>
          </section>
        </ParallaxWrapper>

        {/* Avantages du contrat de contractant général – cartes fortes sur fond sombre (beige only au hover) */}
        <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-[#050308] overflow-hidden">
          {/* Background decoration en beige / charbon */}
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/15 via-transparent to-secondary/10 opacity-70" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AdvancedReveal direction="up" delay={0.1}>
              <div className="max-w-3xl mb-8 sm:mb-12">
                <div className="inline-block px-4 py-2 rounded-full bg-secondary/20 border border-secondary/40 mb-4">
                  <span className="text-secondary-foreground text-sm font-semibold">Avantages exclusifs</span>
                </div>
                <TextSplitReveal splitBy="word" delay={0.2}>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-white mb-3 sm:mb-4">
                    Pourquoi choisir le contrat de Contractant Général ?
                  </h2>
                </TextSplitReveal>
                <AdvancedReveal direction="fade" delay={0.4}>
                  <p className="text-white/75 text-sm sm:text-base md:text-lg leading-relaxed">
                    Un cadre contractuel clair, inspiré du réseau national Activ Travaux : interlocuteur unique, prix ferme, délais engagés et garanties solides.
                  </p>
                </AdvancedReveal>
              </div>
            </AdvancedReveal>
            <StaggerContainer
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 items-stretch"
              staggerDelay={0.1}
              direction="up"
              delay={0.3}
            >
              {[
                {
                  title: 'Un interlocuteur unique',
                  desc: 'Votre gestionnaire de projet local suit votre dossier de la conception à la réception. Vous savez toujours à qui parler.',
                },
                {
                  title: 'Un prix ferme et définitif',
                  desc: 'Pas de mauvaises surprises : nous engageons un budget global et détaillé, validé avant le démarrage des travaux.',
                },
                {
                  title: 'Respect des délais',
                  desc: 'Un planning d\'intervention clair, coordonné avec les corps de métiers, avec un engagement précis sur les délais.',
                },
                {
                  title: 'Garanties contractuelles',
                  desc: 'Parfait achèvement, conformité, assurance décennale : un cadre sécurisé pour vos travaux de rénovation ou d\'extension.',
                },
                {
                  title: 'Responsabilité unique',
                  desc: 'Un seul responsable pour l\'ensemble du chantier. Nous coordonnons les intervenants pour vous simplifier la vie.',
                },
                {
                  title: 'Conception augmentée',
                  desc: 'Plans, perspectives et outils d\'aide à la décision pour mieux vous projeter dans votre futur intérieur.',
                },
              ].map((item, idx) => (
                <MagneticHover key={item.title} strength={0.2} className="h-full">
                  <div className="group relative h-full flex flex-col space-y-2 sm:space-y-3 p-4 sm:p-5 md:p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-secondary transition-all duration-500 hover:shadow-[0_30px_90px_rgba(0,0,0,0.9)] hover:-translate-y-2 overflow-hidden backdrop-blur-lg">
                    {/* Gradient overlay on hover – beige uniquement */}
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-transparent group-hover:from-secondary/15 group-hover:via-secondary/5 group-hover:to-secondary/20 transition-all duration-500 rounded-3xl" />
                    
                    {/* Number indicator – beige */}
                    <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-secondary/20 group-hover:bg-secondary flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                      <span className="text-xs font-bold text-white">{idx + 1}</span>
                    </div>
                    
                    <div className="relative z-10">
                      <h3 className="text-lg sm:text-xl font-serif font-semibold text-white group-hover:text-secondary transition-colors duration-300 pr-8">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm md:text-base text-white/75 leading-relaxed group-hover:text-white transition-colors duration-300">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </MagneticHover>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* 3 étapes claires – cartes claires sur fond sombre */}
        <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 bg-[#050308] overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-secondary/15 rounded-full blur-3xl" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-5 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-start">
              <AdvancedReveal direction="right" delay={0.2}>
                <div className="lg:col-span-2 space-y-4 sm:space-y-6">
                  <div className="inline-block px-4 py-2 rounded-full bg-secondary/20 border border-secondary/40 mb-4">
                    <span className="text-secondary-foreground text-sm font-semibold">Notre processus</span>
                  </div>
                  <TextSplitReveal splitBy="word" delay={0.3}>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-white">
                      3 étapes claires
                    </h2>
                  </TextSplitReveal>
                </div>
              </AdvancedReveal>
              <StaggerContainer 
                className="lg:col-span-3 grid gap-4 sm:gap-5 md:gap-6"
                staggerDelay={0.15}
                direction="left"
                delay={0.4}
              >
                {[
                  {
                    step: '1 | 3',
                    title: 'Analyse du besoin & conception du projet',
                    desc: 'Phase d\'écoute, visite sur site, relevé de l\'existant, études de faisabilité et coordination avec architectes ou bureaux d\'études partenaires si nécessaire.',
                    goal: 'Proposer un projet cohérent, conforme aux réglementations, prêt à être chiffré précisément.',
                  },
                  {
                    step: '2 | 3',
                    title: 'Chiffrage, contractualisation & planification',
                    desc: 'Chiffrage global, contrat unique et planning d\'intervention détaillé. Nous nous engageons sur le prix et les délais.',
                    goal: 'Vous offrir une vision claire, fiable et engageante du projet à venir, sans mauvaises surprises.',
                  },
                  {
                    step: '3 | 3',
                    title: 'Réalisation & suivi du chantier',
                    desc: 'Coordination des corps de métiers, suivi qualité, sécurité du chantier et échanges réguliers jusqu\'à la réception des travaux.',
                    goal: 'Livrer un projet clés en main, conforme, dans les temps, avec un haut niveau de satisfaction.',
                  },
                ].map((item, idx) => (
                  <MagneticHover key={item.step} strength={0.15}>
                    <div className="group relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg p-4 sm:p-5 md:p-6 lg:p-7 shadow-lg hover:shadow-[0_30px_90px_rgba(0,0,0,0.9)] transition-all duration-500 hover:-translate-y-1 hover:border-accent/60 overflow-hidden">
                      {/* Left accent bar */}
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-accent via-accent/80 to-accent/60 group-hover:w-1.5 transition-all duration-500" />
                      
                      {/* Step number badge */}
                      <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-accent/15 group-hover:bg-accent flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                        <span className="text-sm font-bold text-white">{idx + 1}</span>
                      </div>
                      
                      {/* Content */}
                      <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-white/60 mb-2 group-hover:text-accent/70 transition-colors duration-300">
                        {item.step}
                      </p>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-2 sm:mb-3 group-hover:text-accent transition-colors duration-300 pr-12">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm md:text-base text-white/75 leading-relaxed mb-2 sm:mb-3 group-hover:text-white transition-colors duration-300">
                        {item.desc}
                      </p>
                      <div className="relative">
                        <p className="text-xs sm:text-sm text-white/80 font-medium italic group-hover:text-accent/90 transition-colors duration-300">
                          {item.goal}
                        </p>
                        {/* Decorative line */}
                        <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-4 h-0.5 bg-accent/40 group-hover:bg-accent/70 group-hover:w-6 transition-all duration-300" />
                      </div>
                    </div>
                  </MagneticHover>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </section>

        {/* Marquee */}
        <Marquee text="Nos Réalisations • Projets Premium • Rénovation Clé en Main • " />

        {/* Réalisations – aperçu sur fond sombre */}
        <ParallaxWrapper speed={0.2}>
          <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 bg-[#050308]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-[1fr_1.3fr] gap-6 sm:gap-8 lg:gap-6 items-center">
                <AdvancedReveal direction="right" delay={0.2}>
                  <div className="space-y-4 sm:space-y-5 md:space-y-6">
                    <TextSplitReveal splitBy="word" delay={0.3}>
                      <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-white">
                        Nos réalisations
                      </h2>
                    </TextSplitReveal>
                    <AdvancedReveal direction="fade" delay={0.5}>
                      <p className="text-sm sm:text-base md:text-lg text-white/75 leading-relaxed">
                        Rénovations globales, extensions contemporaines et aménagements tertiaires : consultez nos interventions en Indre-et-Loire.
                      </p>
                      <p className="text-sm sm:text-base md:text-lg text-white/75 leading-relaxed">
                        Un pilotage intégral garantissant une exécution technique rigoureuse et une finition conforme à vos exigences, de la conception à la livraison.
                      </p>
                      <div className="pt-4">
                        <Link href="/realisations">
                          <Button className="group bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-6 text-base rounded-full transition-all duration-300 hover:shadow-2xl hover:shadow-accent/30 hover:scale-105 border-0">
                            Découvrir nos réalisations
                          </Button>
                        </Link>
                      </div>
                    </AdvancedReveal>
                  </div>
                </AdvancedReveal>
                <AdvancedReveal direction="left" delay={0.4}>
                  <div className="w-full rounded-3xl sm:rounded-[32px] p-3 sm:p-5 md:p-6 lg:p-8 bg-gradient-to-br from-[#0f0c14] via-[#050308] to-[#151018] border border-white/12 shadow-[0_30px_90px_rgba(0,0,0,0.9)] overflow-hidden">
                    <SpotlightGrid
                      features={[
                        { 
                          title: 'Rénovation globale de maison', 
                          desc: 'Maison de famille près de Tours',
                          img: '/Banqueimages/M7_01325.jpg'
                        },
                        { 
                          title: 'Extension bois & lumière', 
                          desc: 'Séjour agrandi avec grandes baies vitrées',
                          img: '/Banqueimages/DJI_0081.jpg'
                        },
                        { 
                          title: 'Cuisine & pièce de vie', 
                          desc: 'Réagencement d\'un rez-de-chaussée',
                          img: '/Banqueimages/M7_01321.jpg'
                        },
                        { 
                          title: 'Bureaux professionnels', 
                          desc: 'Mise aux normes et optimisation des espaces',
                          img: '/Banqueimages/M7_01330.jpg'
                        },
                      ]}
                      backgroundColor="transparent"
                      hoverGradientFrom="accent"
                      hoverGradientTo="primary"
                    />
                  </div>
                </AdvancedReveal>
              </div>
            </div>
          </section>
        </ParallaxWrapper>

        {/* Actualités – contenus propres à l'agence, inspirés des thèmes du réseau */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-[#050308]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AdvancedReveal direction="up" delay={0.2}>
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6 sm:mb-8 md:mb-10">
                <div>
                  <TextSplitReveal splitBy="word" delay={0.3}>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-white mb-2">
                      Nos actualités rénovation
                    </h2>
                  </TextSplitReveal>
                  <AdvancedReveal direction="fade" delay={0.5}>
                    <p className="text-xs sm:text-sm md:text-base text-white/75">
                      Une sélection de conseils courts et concrets pour préparer votre projet de rénovation, d'extension
                      ou d'aménagement, inspirés des grandes tendances du marché.
                    </p>
                  </AdvancedReveal>
                </div>
              </div>
            </AdvancedReveal>
            <StaggerContainer 
              className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 items-stretch"
              staggerDelay={0.15}
              direction="up"
              delay={0.4}
            >
              {[
                {
                  date: 'Janvier 2026',
                  title: 'MaPrimeRénov\' 2026 : comment avancer malgré la suspension des aides',
                  desc: 'Plutôt que d\'attendre les aides, nous vous aidons à structurer un projet global, phasé dans le temps, prêt à bénéficier d\'éventuels dispositifs dès leur retour.',
                },
                {
                  date: 'Début 2026',
                  title: 'Budget 2026 : pourquoi le contractant général devient incontournable ?',
                  desc: 'Prix global, délai engagé, interlocuteur unique : le contrat de contractant général sécurise votre budget et vous évite les mauvaises surprises en cours de chantier.',
                },
                {
                  date: 'Hiver 2025–2026',
                  title: 'Hiver : 3 points à vérifier pour réduire les déperditions de chaleur',
                  desc: 'Menuiseries, isolation et ventilation : nous identifions les priorités pour gagner en confort tout en préparant une rénovation énergétique cohérente.',
                },
              ].map((item, idx) => (
                <MagneticHover key={item.title} strength={0.2} className="h-full">
                  <article className="group relative h-full flex flex-col rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg p-4 sm:p-5 md:p-6 shadow-lg hover:shadow-[0_30px_90px_rgba(0,0,0,0.9)] transition-all duration-500 hover:-translate-y-2 hover:border-secondary overflow-hidden">
                    {/* Gradient overlay (reste très discret au survol) */}
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-transparent group-hover:from-secondary/10 group-hover:via-transparent group-hover:to-transparent transition-all duration-500 rounded-3xl" />
                    
                    {/* Top accent line */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent/40 to-transparent group-hover:via-accent/70 group-hover:h-1.5 transition-all duration-500" />
                    
                    {/* Date badge */}
                    <div className="relative z-10 inline-block px-3 py-1 rounded-full bg-secondary/20 group-hover:bg-secondary mb-3 transition-all duration-300">
                      <p className="text-[10px] sm:text-xs text-white font-semibold">
                        {item.date}
                      </p>
                    </div>
                    
                    {/* Content */}
                    <div className="relative z-10">
                      <h3 className="text-base sm:text-lg font-semibold text-white mb-2 group-hover:text-secondary transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-white/75 leading-relaxed mb-2 sm:mb-3 group-hover:text-white transition-colors duration-300">
                        {item.desc}
                      </p>
                      <p className="text-[10px] sm:text-xs text-white/60 group-hover:text-white/80 transition-colors duration-300">
                        Contenus rédigés par notre agence, inspirés des actualités rénovation 2025–2026.
                      </p>
                    </div>
                    
                    {/* Corner decoration */}
                    <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-accent/15 to-transparent rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </article>
                </MagneticHover>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* CTA Section – Parlons de votre projet */}
        <HomeCTA />
      </main>
      <Footer />
    </>
  )
}
