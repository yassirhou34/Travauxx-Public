import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Instagram, Music2, Youtube } from 'lucide-react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { SectionHero } from '@/components/section-hero'
import { HeroVideo } from '@/components/hero-video'
import { SectionContent } from '@/components/section-content'
import { CTASection } from '@/components/cta-section'
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

        {/* Statistiques clés – comme sur le site national */}
        <StatsLuxury
          badgeText="Nos Performances"
          title="Notre héritage en chiffres"
          stats={[
            { value: 1000, suffix: '+', label: 'projets réalisés / an' },
            { value: 75, suffix: '+', label: 'gestionnaires de projets' },
            { value: 20, suffix: ' ans', label: "d'expérience" },
            { value: 100, suffix: '%', label: 'sérénité' },
          ]}
          backgroundColor="#ffffff"
          dividerColor="#e83263"
          badgeColor="#e83263"
          titleColor="#1a1a1a"
          dividerLineColor="rgba(0,0,0,0.1)"
          valueGradientFrom="#e83263"
          valueGradientTo="#af191c"
          labelColor="rgba(107, 114, 128, 1)"
          labelHoverColor="#1a1a1a"
        />

        {/* Le confort d'un projet clé en main */}
        <ParallaxWrapper speed={0.3}>
          <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-background via-muted/20 to-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <AdvancedReveal direction="scale" delay={0.2}>
                  <div className="relative p-8 sm:p-10 md:p-12 lg:p-16 rounded-3xl bg-gradient-to-br from-primary/5 via-primary/3 to-accent/5 border border-primary/20 shadow-xl">
                    {/* Decorative elements */}
                    <div className="absolute top-0 left-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute bottom-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
                    
                    <div className="relative z-10">
                      <TextSplitReveal splitBy="word" delay={0.3}>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary mb-6">
                          Le confort d&apos;un projet clé en main
                        </h2>
                      </TextSplitReveal>
                      <AdvancedReveal direction="fade" delay={0.5}>
                        <p className="text-base sm:text-lg md:text-xl text-foreground/70 leading-relaxed">
                          On pilote pour vous la conception, les démarches, le chiffrage et l&apos;exécution. 
                          Vous gardez la vision, on prend la coordination, dans l&apos;esprit du contrat de contractant général Activ Travaux.
                        </p>
                      </AdvancedReveal>
                    </div>
                  </div>
                </AdvancedReveal>
              </div>
            </div>
          </section>
        </ParallaxWrapper>

        {/* Avantages du contrat de contractant général */}
        <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-muted/40 via-muted/30 to-background overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-radial from-accent/5 to-transparent opacity-50" />
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-radial from-primary/5 to-transparent opacity-50" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AdvancedReveal direction="up" delay={0.1}>
              <div className="max-w-3xl mb-8 sm:mb-12">
                <div className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-4">
                  <span className="text-accent text-sm font-semibold">Avantages exclusifs</span>
                </div>
                <TextSplitReveal splitBy="word" delay={0.2}>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-primary mb-3 sm:mb-4">
                    Profitez des avantages inégalables du contrat de contractant général
                  </h2>
                </TextSplitReveal>
                <AdvancedReveal direction="fade" delay={0.4}>
                  <p className="text-foreground/70 text-sm sm:text-base md:text-lg leading-relaxed">
                    Un cadre contractuel clair, inspiré du réseau national Activ Travaux :
                    interlocuteur unique, prix ferme, délais engagés et garanties solides.
                  </p>
                </AdvancedReveal>
              </div>
            </AdvancedReveal>
            <StaggerContainer 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
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
                <MagneticHover key={item.title} strength={0.2}>
                  <div className="group relative space-y-2 sm:space-y-3 p-4 sm:p-5 md:p-6 rounded-2xl bg-gradient-to-br from-background via-background to-muted/20 shadow-sm border border-border/60 hover:border-accent/50 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/10 hover:-translate-y-2 overflow-hidden">
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-accent/0 to-accent/0 group-hover:from-accent/5 group-hover:via-accent/3 group-hover:to-accent/0 transition-all duration-500 rounded-2xl" />
                    
                    {/* Number indicator */}
                    <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-accent/10 group-hover:bg-accent/20 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                      <span className="text-xs font-bold text-accent">{idx + 1}</span>
                    </div>
                    
                    <div className="relative z-10">
                      <h3 className="text-lg sm:text-xl font-serif font-semibold text-primary group-hover:text-accent transition-colors duration-300 pr-8">{item.title}</h3>
                      <p className="text-xs sm:text-sm md:text-base text-foreground/70 leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">{item.desc}</p>
                    </div>
                  </div>
                </MagneticHover>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Les 3 grandes étapes d'un projet */}
        <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 bg-background overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-5 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-start">
              <AdvancedReveal direction="right" delay={0.2}>
                <div className="lg:col-span-2 space-y-4 sm:space-y-6">
                  <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
                    <span className="text-primary text-sm font-semibold">Notre processus</span>
                  </div>
                  <TextSplitReveal splitBy="word" delay={0.3}>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-primary">
                      3 grandes étapes pour donner vie à votre projet
                    </h2>
                  </TextSplitReveal>
                  <AdvancedReveal direction="fade" delay={0.5}>
                    <p className="text-sm sm:text-base md:text-lg text-foreground/70 leading-relaxed">
                      Comme sur le site national Activ Travaux, tout commence par l&apos;analyse du besoin,
                      se poursuit par un chiffrage clair puis un suivi de chantier précis jusqu&apos;à la réception.
                    </p>
                  </AdvancedReveal>
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
                    <div className="group relative rounded-2xl border border-border/70 bg-gradient-to-br from-white/80 via-white/70 to-muted/30 backdrop-blur-sm p-4 sm:p-5 md:p-6 lg:p-7 shadow-sm hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500 hover:-translate-y-1 hover:border-accent/40 overflow-hidden">
                      {/* Left accent bar */}
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-accent via-accent/80 to-accent/60 group-hover:w-1.5 transition-all duration-500" />
                      
                      {/* Step number badge */}
                      <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-accent/10 group-hover:bg-accent/20 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                        <span className="text-sm font-bold text-accent">{idx + 1}</span>
                      </div>
                      
                      {/* Content */}
                      <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-foreground/60 mb-2 group-hover:text-accent/70 transition-colors duration-300">{item.step}</p>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-primary mb-2 sm:mb-3 group-hover:text-accent transition-colors duration-300 pr-12">{item.title}</h3>
                      <p className="text-xs sm:text-sm md:text-base text-foreground/70 leading-relaxed mb-2 sm:mb-3 group-hover:text-foreground/80 transition-colors duration-300">{item.desc}</p>
                      <div className="relative">
                        <p className="text-xs sm:text-sm text-foreground/80 font-medium italic group-hover:text-accent/90 transition-colors duration-300">{item.goal}</p>
                        {/* Decorative line */}
                        <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-4 h-0.5 bg-accent/30 group-hover:bg-accent/60 group-hover:w-6 transition-all duration-300" />
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

        {/* Réalisations – aperçu */}
        <ParallaxWrapper speed={0.2}>
          <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 bg-muted/40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-[1fr_1.3fr] gap-6 sm:gap-8 lg:gap-6 items-center">
                <AdvancedReveal direction="right" delay={0.2}>
                  <div className="space-y-4 sm:space-y-5 md:space-y-6">
                    <TextSplitReveal splitBy="word" delay={0.3}>
                      <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-primary">
                        Voir nos réalisations
                      </h2>
                    </TextSplitReveal>
                    <AdvancedReveal direction="fade" delay={0.5}>
                      <p className="text-sm sm:text-base md:text-lg text-foreground/70 leading-relaxed">
                        Des rénovations complètes, des extensions contemporaines, des réaménagements d'intérieurs et de
                        bureaux : découvrez quelques exemples de projets réalisés dans le département.
                      </p>
                      <p className="text-xs sm:text-sm md:text-base text-foreground/70 leading-relaxed mt-4">
                        Chaque projet est accompagné, de la première visite à la réception, avec un niveau de finition
                        soigné et un suivi de chantier rigoureux.
                      </p>
                      <a
                        href="/realisations"
                        className="inline-flex items-center text-xs sm:text-sm md:text-base font-semibold text-accent hover:text-accent/80 underline-offset-4 hover:underline transition-all duration-300"
                      >
                        Découvrir plus de réalisations
                      </a>
                    </AdvancedReveal>
                  </div>
                </AdvancedReveal>
                <AdvancedReveal direction="left" delay={0.4}>
                  <div className="w-full bg-[#050308] rounded-2xl sm:rounded-3xl p-3 sm:p-4 md:p-6 lg:p-8 shadow-xl overflow-hidden">
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

        {/* Nos prestations & zone d'intervention */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-background via-muted/20 to-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <StaggerContainer 
              className="grid md:grid-cols-3 gap-6 sm:gap-8"
              staggerDelay={0.15}
              direction="up"
              delay={0.2}
            >
              {[
                {
                  title: 'Conception plus lisible',
                  content:
                    'Plans, volumes, choix, arbitrages : nous posons tout noir sur blanc pour vous permettre de décider sereinement avant de lancer les travaux.',
                },
                {
                  title: 'Nos prestations',
                  content:
                    'Rénovation globale, rénovation énergétique, extension, aménagement intérieur, modernisation de locaux professionnels : nous coordonnons l\'ensemble des corps de métiers.',
                },
                {
                  title: 'Zone d\'intervention',
                  content: 'Indre-et-Loire (37), autour de Tours et de ses environs proches.',
                },
              ].map((block, idx) => (
                <MagneticHover key={idx} strength={0.15}>
                  <div className="group relative p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-white/80 via-white/70 to-muted/20 border border-border/60 hover:border-accent/40 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                    {/* Top accent */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent/0 via-accent/30 to-accent/0 group-hover:via-accent/60 transition-all duration-500" />
                    
                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-primary mb-3 group-hover:text-accent transition-colors duration-300">
                      {block.title}
                    </h3>
                    <p className="text-sm sm:text-base text-foreground/70 leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                      {block.content}
                    </p>
                  </div>
                </MagneticHover>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Actualités – contenus propres à l'agence, inspirés des thèmes du réseau */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AdvancedReveal direction="up" delay={0.2}>
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6 sm:mb-8 md:mb-10">
                <div>
                  <TextSplitReveal splitBy="word" delay={0.3}>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-primary mb-2">
                      Nos actualités rénovation
                    </h2>
                  </TextSplitReveal>
                  <AdvancedReveal direction="fade" delay={0.5}>
                    <p className="text-xs sm:text-sm md:text-base text-foreground/70">
                      Une sélection de conseils courts et concrets pour préparer votre projet de rénovation, d'extension
                      ou d'aménagement, inspirés des grandes tendances du marché.
                    </p>
                  </AdvancedReveal>
                </div>
              </div>
            </AdvancedReveal>
            <StaggerContainer 
              className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
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
                <MagneticHover key={item.title} strength={0.2}>
                  <article className="group relative rounded-2xl border border-border/70 bg-gradient-to-br from-white/80 via-white/70 to-muted/20 backdrop-blur-sm p-4 sm:p-5 md:p-6 shadow-sm hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500 hover:-translate-y-2 hover:border-accent/50 overflow-hidden">
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-accent/0 to-accent/0 group-hover:from-accent/5 group-hover:via-accent/3 group-hover:to-accent/0 transition-all duration-500 rounded-2xl" />
                    
                    {/* Top accent line */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent/30 to-transparent group-hover:via-accent/60 group-hover:h-1.5 transition-all duration-500" />
                    
                    {/* Date badge */}
                    <div className="relative z-10 inline-block px-3 py-1 rounded-full bg-accent/10 group-hover:bg-accent/20 mb-3 transition-all duration-300">
                      <p className="text-[10px] sm:text-xs text-accent font-semibold">{item.date}</p>
                    </div>
                    
                    {/* Content */}
                    <div className="relative z-10">
                      <h3 className="text-base sm:text-lg font-semibold text-primary mb-2 group-hover:text-accent transition-colors duration-300">{item.title}</h3>
                      <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed mb-2 sm:mb-3 group-hover:text-foreground/80 transition-colors duration-300">{item.desc}</p>
                      <p className="text-[10px] sm:text-xs text-foreground/60 group-hover:text-foreground/70 transition-colors duration-300">
                        Contenus rédigés par notre agence, inspirés des actualités rénovation 2025–2026.
                      </p>
                    </div>
                    
                    {/* Corner decoration */}
                    <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-accent/5 to-transparent rounded-tl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </article>
                </MagneticHover>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection
          buttons={[
            { label: 'Demander un devis', href: '/concevoir-mon-projet', variant: 'secondary' },
            { label: 'Être rappelé', href: '/concevoir-mon-projet' },
            { label: 'Voir les réalisations', href: '#' },
            { label: 'Trouver une agence', href: '/a-propos' },
          ]}
        />
      </main>
      <div className="h-12 sm:h-16 md:h-20 lg:h-24" />
      <Footer />
    </>
  )
}
