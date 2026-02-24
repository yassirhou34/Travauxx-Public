import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Instagram, Music2, Youtube } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { SectionHero } from '@/components/section-hero'
import { HeroVideo, HeroContentBlock } from '@/components/hero-video'
import { SectionContent } from '@/components/section-content'
import { HomeCTA } from '@/components/home-cta'
import StatsLuxury from '@/components/StatsLuxury'
import SpotlightGrid from '@/components/SpotlightGrid'
import { Marquee } from '@/components/MagazineComponents'
import { AdvancedReveal, StaggerContainer, ParallaxWrapper, TextSplitReveal, MagneticHover } from '@/components/animations'
import { ContractantCarousel } from '@/components/contractant-carousel'

export const metadata: Metadata = {
  title: 'Activ Travaux 37 — Rénovation premium clé en main en Indre-et-Loire',
  description: 'Contractant général en Indre-et-Loire. Rénovation, extension, rénovation énergétique et aménagement intérieur. Projet cadré, suivi, finitions soignées. Demande de devis.',
}

export default function Home() {
  return (
    <>
      <Header variant="transparent" />
      <main>
        {/* Hero : vidéo seule + indicateur « DÉFILEZ POUR EXPLORER » */}
        <HeroVideo />

        {/* Bloc dédié sous la vidéo : Indre-et-Loire, titre, texte, pills, boutons */}
        <HeroContentBlock />

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

        {/* Avantages du contrat de contractant général – cartes fortes sur fond sombre (beige only au hover) */}
        <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-[#050308] overflow-hidden">
          {/* Background decoration en beige / charbon */}
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/15 via-transparent to-secondary/10 opacity-70" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-[1fr_1fr] gap-10 lg:gap-14 items-start">
              <div>
                <AdvancedReveal direction="up" delay={0.1}>
                  <div className="mb-8 sm:mb-12">
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
                {/* Liste typographique – 4 items (capture 2 : suppression Garanties contractuelles et Conception augmentée) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8 sm:gap-y-10">
                  {[
                    'Un interlocuteur unique',
                    'Un prix ferme et définitif',
                    'Respect des délais',
                    'Responsabilité unique',
                  ].map((title, idx) => (
                    <AdvancedReveal key={title} direction="up" delay={0.3 + idx * 0.06}>
                      <div className="group flex items-baseline gap-4 min-w-0">
                        <span className="flex-shrink-0 text-3xl sm:text-4xl font-bold tabular-nums text-white/20 group-hover:text-secondary/50 transition-colors duration-300 select-none">
                          {String(idx + 1).padStart(2, '0')}
                        </span>
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-serif font-bold text-white group-hover:text-secondary transition-colors duration-300 break-words">
                          {title}
                        </h3>
                      </div>
                    </AdvancedReveal>
                  ))}
                </div>
              </div>
              {/* Colonne visuelle – carrousel automatique */}
              <AdvancedReveal direction="scale" delay={0.25} duration={0.9}>
                <div className="relative flex flex-col items-center">
                  <ContractantCarousel />
                </div>
              </AdvancedReveal>
            </div>
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
                    title: 'Analyse du besoin & conception du projet',
                    desc: 'Phase d\'écoute, visite sur site, relevé de l\'existant, études de faisabilité et coordination avec architectes ou bureaux d\'études partenaires si nécessaire.',
                    goal: 'Proposer un projet cohérent, conforme aux réglementations, prêt à être chiffré précisément.',
                    img: '/Banqueimages/M7_01325.jpg',
                  },
                  {
                    title: 'Chiffrage, contractualisation & planification',
                    desc: 'Chiffrage global, contrat unique et planning d\'intervention détaillé. Nous nous engageons sur le prix et les délais.',
                    goal: 'Vous offrir une vision claire, fiable et engageante du projet à venir, sans mauvaises surprises.',
                    img: '/Banqueimages/DJI_0081.jpg',
                  },
                  {
                    title: 'Réalisation & suivi du chantier',
                    desc: 'Coordination des corps de métiers, suivi qualité, sécurité du chantier et échanges réguliers jusqu\'à la réception des travaux.',
                    goal: 'Livrer un projet clés en main, conforme, dans les temps, avec un haut niveau de satisfaction.',
                    img: '/Banqueimages/M7_01330.jpg',
                  },
                ].map((item, idx) => (
                  <MagneticHover key={item.title} strength={0.15}>
                    <div className="group relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg overflow-hidden shadow-lg hover:shadow-[0_30px_90px_rgba(0,0,0,0.9)] transition-all duration-500 hover:-translate-y-1 hover:border-accent/60">
                      {/* Image bandeau – occupe tout le bloc (capture 3 et 4) */}
                      <div className="relative aspect-[16/9] w-full overflow-hidden bg-white/5">
                        <Image src={item.img} alt="" fill className="object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500" sizes="(max-width: 768px) 100vw, 33vw" />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent pointer-events-none" />
                        <div className="absolute top-3 right-3 w-10 h-10 rounded-full bg-accent/90 flex items-center justify-center shadow-lg">
                          <span className="text-sm font-bold text-white">{idx + 1}</span>
                        </div>
                      </div>
                      <div className="relative p-4 sm:p-5 md:p-6 lg:p-7 pl-5 sm:pl-6">
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-accent via-accent/80 to-accent/60 group-hover:w-1.5 transition-all duration-500 rounded-bl" />
                        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-2 sm:mb-3 group-hover:text-accent transition-colors duration-300 pr-8">
                          {item.title}
                        </h3>
                        <p className="text-xs sm:text-sm md:text-base text-white/75 leading-relaxed mb-2 sm:mb-3 group-hover:text-white transition-colors duration-300">
                          {item.desc}
                        </p>
                        <div className="relative">
                          <p className="text-xs sm:text-sm text-white/80 font-medium italic group-hover:text-accent/90 transition-colors duration-300">
                            {item.goal}
                          </p>
                          <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-4 h-0.5 bg-accent/40 group-hover:bg-accent/70 group-hover:w-6 transition-all duration-300" />
                        </div>
                      </div>
                    </div>
                  </MagneticHover>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </section>

        {/* Marquee */}
        <Marquee text="Nos Réalisations      Projets Premium      Rénovation Clé en Main      " />

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
                  img: '/Banqueimages/M7_01319.jpg',
                },
                {
                  date: 'Début 2026',
                  title: 'Budget 2026 : pourquoi le contractant général devient incontournable ?',
                  desc: 'Prix global, délai engagé, interlocuteur unique : le contrat de contractant général sécurise votre budget et vous évite les mauvaises surprises en cours de chantier.',
                  img: '/Banqueimages/M7_01331.jpg',
                },
                {
                  date: 'Hiver 2025–2026',
                  title: 'Hiver : 3 points à vérifier pour réduire les déperditions de chaleur',
                  desc: 'Menuiseries, isolation et ventilation : nous identifions les priorités pour gagner en confort tout en préparant une rénovation énergétique cohérente.',
                  img: '/Banqueimages/M7_01335.jpg',
                },
              ].map((item, idx) => (
                <MagneticHover key={item.title} strength={0.2} className="h-full">
                  <article className="group relative h-full flex flex-col rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg overflow-hidden shadow-lg hover:shadow-[0_30px_90px_rgba(0,0,0,0.9)] transition-all duration-500 hover:-translate-y-2 hover:border-secondary min-h-[420px]">
                    {/* Image en en-tête – filtre pour lisibilité date/titre */}
                    <div className="relative h-40 sm:h-48 w-full overflow-hidden flex-shrink-0">
                      <Image src={item.img} alt="" fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 33vw" />
                      <div className="absolute inset-0 bg-gradient-to-b from-black/55 to-black/25" />
                      <div className="absolute top-3 left-3 z-10">
                        <span className="inline-block px-3 py-1 rounded-full bg-secondary/90 text-white text-[10px] sm:text-xs font-semibold">
                          {item.date}
                        </span>
                      </div>
                    </div>
                    <div className="relative flex flex-col flex-1 min-h-[220px] p-5 sm:p-6 md:p-7">
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent/40 to-transparent group-hover:via-accent/70 transition-all duration-500" />
                      <h3 className="text-base sm:text-lg font-semibold text-white mb-2 group-hover:text-secondary transition-colors duration-300 min-h-[4.5rem] sm:min-h-[5rem]">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-white/75 leading-relaxed mb-2 sm:mb-3 group-hover:text-white transition-colors duration-300 flex-1">
                        {item.desc}
                      </p>
                      <p className="text-[10px] sm:text-xs text-white/60 group-hover:text-white/80 transition-colors duration-300">
                        Contenus rédigés par notre agence, inspirés des actualités rénovation 2025–2026.
                      </p>
                      <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-accent/15 to-transparent rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    </div>
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
