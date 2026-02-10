'use client'

import React from "react"

import { useState } from 'react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { SectionHero } from '@/components/section-hero'
import { Button } from '@/components/ui/button'
import { ChevronDown } from 'lucide-react'
import { AdvancedReveal } from '@/components/animations'

// FAQ regroupées depuis les différentes pages
const faqCategories = [
  {
    id: 'accueil',
    label: 'Accueil',
    questions: [
      {
        question: 'Combien de temps pour obtenir un devis',
        answer:
          'Une première réponse est apportée rapidement après votre demande. Le chiffrage dépend du niveau de définition du projet.',
      },
      {
        question: 'Travaillez-vous avec un contrat unique',
        answer: 'Oui, le principe est un cadre contractuel clair avec un interlocuteur responsable.',
      },
      {
        question: 'Est-ce que vous gérez les démarches',
        answer:
          'Oui, selon le projet, les démarches administratives et réglementaires peuvent être prises en charge.',
      },
      {
        question: 'Comment suivez-vous le chantier',
        answer: 'Avec une coordination continue et des points réguliers.',
      },
      {
        question: 'Proposez-vous des projets sur mesure',
        answer:
          'Oui, chaque projet est conçu selon vos contraintes, votre usage et votre budget.',
      },
    ],
  },
  {
    id: 'renovation',
    label: 'Rénovation',
    questions: [
      {
        question: 'Quelle est la différence entre rénovation globale et rénovation énergétique ?',
        answer:
          "La rénovation globale concerne l'ensemble du logement : redistribution des espaces, électricité, plomberie, revêtements, finitions. La rénovation énergétique se concentre sur la performance thermique : isolation, menuiseries, chauffage, ventilation. Les deux approches peuvent être combinées pour un résultat optimal.",
      },
      {
        question: 'Quel budget prévoir pour une rénovation complète ?',
        answer:
          "Le budget varie selon l'ampleur des travaux. Comptez en moyenne 800 à 1 500€/m² pour une rénovation globale, et 200 à 600€/m² pour une rénovation énergétique seule. Nous réalisons un chiffrage détaillé et nous engageons sur un prix ferme avant tout démarrage.",
      },
      {
        question: 'Peut-on bénéficier d\'aides pour la rénovation énergétique ?',
        answer:
          "Oui, plusieurs dispositifs existent : MaPrimeRénov', CEE (Certificats d'Économies d'Énergie), éco-PTZ, TVA réduite. Les conditions d'éligibilité dépendent de vos revenus et des travaux réalisés. Nous vous accompagnons dans le montage des dossiers d'aides.",
      },
      {
        question: 'Peut-on rester dans la maison pendant les travaux ?',
        answer:
          "Selon l'ampleur des travaux, c'est souvent possible. Nous organisons le chantier par zones et adaptons le planning pour minimiser les nuisances. Pour les rénovations très lourdes, un hébergement temporaire peut être préférable.",
      },
      {
        question: 'Combien de temps dure une rénovation ?',
        answer:
          "Une rénovation globale complète prend généralement 3 à 6 mois. Une rénovation énergétique seule peut être réalisée en 2 à 4 mois. Nous établissons un planning précis en amont et nous engageons sur les délais.",
      },
      {
        question: 'Comment choisissez-vous les artisans ?',
        answer:
          "Nous travaillons avec un réseau d'artisans partenaires sélectionnés pour leur savoir-faire et leur fiabilité. Pour les travaux énergétiques, nous privilégions les artisans certifiés RGE (Reconnu Garant de l'Environnement), condition indispensable pour bénéficier des aides.",
      },
      {
        question: "Qu'est-ce qu'une passoire thermique ?",
        answer:
          "Une passoire thermique est un logement mal isolé, classé F ou G sur le Diagnostic de Performance Énergétique (DPE). Ces logements seront progressivement interdits à la location d'ici 2028 (G) et 2034 (F). La rénovation énergétique permet d'améliorer significativement le DPE.",
      },
      {
        question: 'Quelles garanties avez-vous ?',
        answer:
          "Vous bénéficiez de toutes les garanties légales : parfait achèvement (1 an), garantie biennale sur les équipements (2 ans), garantie décennale sur le gros œuvre (10 ans). Nous sommes assurés et tous nos partenaires artisans également.",
      },
      {
        question: 'Comment se passe le suivi de chantier ?',
        answer:
          "Un gestionnaire de projet dédié assure le suivi quotidien du chantier. Des points réguliers sont organisés avec vous (hebdomadaires ou selon vos souhaits). Vous êtes informé de l'avancement et consulté pour les décisions importantes.",
      },
      {
        question: 'Faites-vous de la rénovation partielle (une seule pièce) ?',
        answer:
          "Oui, nous intervenons aussi sur des projets plus ciblés : rénovation de salle de bains, cuisine, ou une pièce spécifique. Nous privilégions cependant les projets avec un périmètre clair défini en amont pour garantir un résultat cohérent.",
      },
    ],
  },
  {
    id: 'extension',
    label: 'Extension',
    questions: [
      {
        question: 'Faut-il un permis de construire pour une extension ?',
        answer:
          "Cela dépend de la surface créée et de votre zone. Pour moins de 20m² (ou 40m² en zone urbaine avec PLU), une déclaration préalable suffit. Au-delà, un permis de construire est obligatoire. Si la surface totale dépasse 150m² après travaux, le recours à un architecte est requis. Nous étudions votre situation et gérons toutes les démarches pour vous.",
      },
      {
        question: 'Quel budget prévoir pour une extension de maison ?',
        answer:
          "Le budget varie selon le type d'extension (agrandissement, surélévation, véranda), les matériaux choisis et les finitions. Comptez en moyenne entre 1 500€ et 3 000€/m² pour une extension classique. Nous réalisons un chiffrage détaillé et nous engageons sur un prix ferme avant le démarrage des travaux.",
      },
      {
        question: 'Peut-on rester dans la maison pendant les travaux ?',
        answer:
          "Dans la plupart des cas, oui. Nous organisons le chantier pour minimiser les nuisances : accès préservé, mise hors d'eau rapide, nettoyage quotidien. Seules certaines phases (raccordements, percements) peuvent nécessiter des aménagements temporaires. Nous vous informons en amont du planning détaillé.",
      },
      {
        question: 'Quel est le délai pour réaliser une extension ?',
        answer:
          "Comptez 4 à 8 mois au total : 1-2 mois pour la conception, 2-3 mois pour les démarches administratives, puis 2-4 mois de travaux selon l'ampleur du projet. Nous établissons un planning précis dès le départ et nous nous engageons sur les délais.",
      },
      {
        question: 'Quels matériaux pour mon extension ?',
        answer:
          "Plusieurs solutions sont possibles : parpaing traditionnel (économique, durable), ossature bois (légère, rapide, écologique), structure acier (grandes portées, design contemporain), ou solutions mixtes. Le choix dépend de votre budget, de l'esthétique souhaitée et des contraintes techniques. Nous vous conseillons la meilleure option.",
      },
      {
        question: "L'extension sera-t-elle bien isolée ?",
        answer:
          "Absolument. Toutes nos extensions respectent la réglementation thermique en vigueur (RT 2012 ou RE 2020 selon les cas). Isolation performante des murs, toiture et plancher, menuiseries double ou triple vitrage, ventilation adaptée. Votre nouvel espace sera confortable été comme hiver.",
      },
      {
        question: 'Comment éviter les mauvaises surprises ?',
        answer:
          "C'est notre engagement de contractant général : étude approfondie en amont, conception détaillée, chiffrage complet et précis, contrat avec prix ferme et délais engagés. Un seul interlocuteur responsable du projet de A à Z. Vous savez où vous allez avant de démarrer.",
      },
      {
        question: 'Quelles garanties pour mon extension ?',
        answer:
          "Vous bénéficiez de toutes les garanties légales : garantie de parfait achèvement (1 an), garantie biennale sur les équipements (2 ans), garantie décennale sur la structure (10 ans). Nous sommes assurés et tous nos partenaires artisans également.",
      },
    ],
  },
  {
    id: 'architecture',
    label: 'Architecture',
    questions: [
      {
        question: "En quoi consistent les outils IA d'Activ Travaux ?",
        answer:
          "Nos outils d'intelligence artificielle permettent de visualiser votre projet avant/après en quelques clics, d'analyser l'ensoleillement et l'orientation de votre site, et de générer des propositions architecturales personnalisées. Ces technologies rendent le parcours client plus fluide et interactif.",
      },
      {
        question: 'La phase de conception est-elle obligatoire ?',
        answer:
          "Pas toujours légalement, mais c'est souvent ce qui sécurise budget, rendu et délais. Un projet bien conçu évite 90% des imprévus de chantier et garantit un résultat conforme à vos attentes.",
      },
      {
        question: 'Travaillez-vous avec des architectes ?',
        answer:
          "Oui, nous collaborons avec un réseau d'architectes, architectes d'intérieur, dessinateurs et techniciens partenaires. Pour les projets dépassant 150m² de surface totale, le recours à un architecte DPLG est d'ailleurs obligatoire.",
      },
      {
        question: 'Peut-on faire seulement la conception sans les travaux ?',
        answer:
          "C'est possible selon le projet, mais notre force est justement d'assurer la continuité entre conception et réalisation. La conception est pensée pour un chantier fluide et maîtrisé.",
      },
      {
        question: 'Réalisez-vous les dossiers administratifs (permis, DP) ?',
        answer:
          'Oui, nous prenons en charge le montage des dossiers de déclaration préalable ou de permis de construire. Plans techniques, documents réglementaires, dépôt et suivi en mairie.',
      },
      {
        question: 'Proposez-vous des variantes pour comparer ?',
        answer:
          'Absolument. Nous présentons souvent plusieurs variantes (aménagement, matériaux, budget) pour vous aider à arbitrer et à faire les meilleurs choix pour votre projet.',
      },
      {
        question: 'Combien de temps dure la phase de conception ?',
        answer:
          "Elle varie selon la complexité du projet : 2 à 4 semaines pour une rénovation simple, 1 à 3 mois pour une extension ou une construction neuve. Les délais administratifs (permis) s'ajoutent ensuite.",
      },
      {
        question: 'La modélisation 3D est-elle incluse ?',
        answer:
          "Oui, pour la plupart des projets. La modélisation 3D vous permet de vous immerger dans vos futurs espaces et de valider les choix esthétiques avant le démarrage du chantier.",
      },
      {
        question: 'Comment fonctionne le premier rendez-vous ?',
        answer:
          "Le premier rendez-vous est gratuit et sans engagement. Nous visitons le site, écoutons vos besoins, analysons les contraintes et vous présentons notre méthodologie et nos outils, dont nos solutions IA.",
      },
      {
        question: 'Quel est le coût de la conception ?',
        answer:
          "Le coût dépend de l'ampleur du projet. Il est généralement intégré au budget global des travaux. Nous vous communiquons un devis détaillé de la phase conception avant tout engagement.",
      },
    ],
  },
  {
    id: 'locaux',
    label: 'Locaux pro',
    questions: [
      {
        question: "Travaillez-vous en site occupé pendant que l'activité continue ?",
        answer:
          "Oui, selon l'activité et le phasage possible. Nous organisons le chantier pour minimiser l'impact sur votre activité : travaux de nuit, par zones, pendant les fermetures... Nous nous adaptons à vos contraintes opérationnelles.",
      },
      {
        question: "Gérez-vous les normes d'accessibilité PMR et de sécurité ?",
        answer:
          "Absolument. Accessibilité PMR (Ad'AP), sécurité incendie (ERP), normes électriques, conformité hygiène pour le CHR... Nous maîtrisons toutes les réglementations applicables aux locaux professionnels et les intégrons dès la conception.",
      },
      {
        question: "Pouvez-vous respecter une date d'ouverture précise ?",
        answer:
          "C'est notre engagement. Nous construisons un planning réaliste en concertation avec vous, et nous le tenons. Votre date d'ouverture est intégrée comme contrainte majeure dès le début du projet.",
      },
      {
        question: 'Faites-vous la conception des espaces ou uniquement les travaux ?',
        answer:
          'Nous proposons un accompagnement complet incluant la conception. Plans, modélisation 3D, optimisation des flux : nous concevons des espaces fonctionnels et attractifs avant de les réaliser.',
      },
      {
        question: 'Intervenez-vous sur plusieurs sites simultanément ?',
        answer:
          "Oui, grâce au réseau national Activ Travaux. Pour un déploiement multi-sites, nous coordonnons les agences locales pour garantir cohérence et qualité sur l'ensemble de vos implantations.",
      },
      {
        question: 'Quels types de commerces accompagnez-vous ?',
        answer:
          "Tous types : boutiques de mode, alimentaire, franchises, retail, showrooms, agences... Chaque commerce a ses spécificités (flux clients, stockage, mise en valeur produits) que nous intégrons dans la conception.",
      },
      {
        question: 'Quelles sont les contraintes spécifiques au secteur CHR ?',
        answer:
          "Normes d'hygiène HACCP, extraction et ventilation cuisine, accessibilité, sécurité incendie ERP, acoustique salle... Le secteur CHR cumule de nombreuses contraintes que nous maîtrisons parfaitement.",
      },
      {
        question: "Quel budget prévoir pour l'aménagement de locaux professionnels ?",
        answer:
          "Le budget varie fortement selon le secteur et les prestations. Comptez 500 à 1 500€/m² pour des bureaux, 800 à 2 000€/m² pour un commerce, et davantage pour un restaurant avec cuisine équipée. Nous établissons un chiffrage détaillé adapté à votre projet.",
      },
      {
        question: 'Comment se déroule le pilotage du chantier ?',
        answer:
          "Un chef de projet dédié coordonne l'ensemble des corps d'état, assure le suivi qualité et vous tient informé régulièrement. Points d'étape planifiés, compte-rendus, photos d'avancement : vous gardez la visibilité sur votre chantier.",
      },
      {
        question: 'Quelles garanties proposez-vous ?',
        answer:
          "Toutes les garanties légales s'appliquent : parfait achèvement (1 an), garantie biennale équipements (2 ans), garantie décennale structure (10 ans). En plus, notre engagement contractuel sur le budget et les délais vous sécurise.",
      },
    ],
  },
  {
    id: 'apropos',
    label: 'À propos',
    questions: [
      {
        question: 'Êtes-vous une entreprise locale ou nationale ?',
        answer:
          "Activ Travaux est un réseau national de contractants généraux indépendants. En Indre-et-Loire, vous avez un interlocuteur local (votre \"activateur\") qui bénéficie de la force et de la structure du réseau national. C'est le meilleur des deux mondes : proximité et réactivité locale, organisation et fiabilité nationale.",
      },
      {
        question: 'Travaillez-vous avec vos propres équipes ou des sous-traitants ?',
        answer:
          "Nous pilotons un réseau d'entreprises partenaires sélectionnées pour leur savoir-faire et leur fiabilité. Artisans qualifiés, architectes, bureaux d'études : tous sont référencés et suivis pour garantir la qualité de votre projet. Nous coordonnons l'ensemble en tant que contractant général.",
      },
      {
        question: 'Pourquoi passer par un contractant général plutôt que de gérer moi-même ?',
        answer:
          "Le contractant général vous apporte un cadre contractuel clair (prix ferme, délais engagés), un pilotage unique de l'ensemble du projet, et vous libère des contraintes techniques et administratives. Moins de friction, plus de sérénité, un résultat cohérent.",
      },
      {
        question: 'Intervenez-vous sur tous types de biens ?',
        answer:
          "Oui, nous intervenons sur maisons, appartements, locaux professionnels (commerces, bureaux, CHR, résidences services). Chaque type de bien a ses spécificités que nous maîtrisons grâce à notre expérience et notre réseau de partenaires spécialisés.",
      },
      {
        question: 'Quelle est la différence entre Activ Travaux et une entreprise classique ?',
        answer:
          "Activ Travaux est un réseau de contractants généraux indépendants, sélectionnés et formés aux méthodes du réseau. Vous bénéficiez à la fois de l'expertise locale de votre activateur et des outils, méthodes et supports du réseau national. C'est une garantie de qualité et de cohérence.",
      },
      {
        question: 'Comment vous contacter pour un projet ?',
        answer:
          "Plusieurs moyens : demande de devis en ligne, demande de rappel téléphonique, ou contact direct par téléphone ou email. Nous vous répondons sous 48h et organisons un premier rendez-vous gratuit et sans engagement pour discuter de votre projet.",
      },
      {
        question: 'Travaillez-vous uniquement en Indre-et-Loire ?',
        answer:
          "Activ Travaux 37 intervient principalement en Indre-et-Loire (37), autour de Tours et ses environs. Le réseau Activ Travaux couvre toute la France avec plus de 75 activateurs. Si vous avez plusieurs sites, nous pouvons coordonner avec d'autres agences du réseau.",
      },
      {
        question: 'Quelles garanties proposez-vous ?',
        answer:
          "Toutes les garanties légales : parfait achèvement (1 an), garantie biennale sur les équipements (2 ans), garantie décennale sur la structure (10 ans). En plus, notre engagement contractuel sur le budget et les délais vous sécurise dès le départ.",
      },
    ],
  },
]

export default function DevisPage() {
  const [formData, setFormData] = useState({
    projectType: '',
    propertyType: '',
    location: '',
    budget: '',
    details: '',
    name: '',
    email: '',
    phone: '',
  })

  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [activeTab, setActiveTab] = useState<string>(faqCategories[0].id)
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true)
      setIsLoading(false)
      setFormData({
        projectType: '',
        propertyType: '',
        location: '',
        budget: '',
        details: '',
        name: '',
        email: '',
        phone: '',
      })
      setTimeout(() => setSubmitted(false), 5000)
    }, 1500)
  }

  const isFormValid =
    formData.projectType &&
    formData.propertyType &&
    formData.location &&
    formData.name &&
    formData.email &&
    formData.phone

  return (
    <>
      <Header />
      <main>
        <SectionHero
          title="Construisons votre projet, simplement."
          titleClassName="text-secondary"
          subtitle={
            "Décrivez votre projet, on le cadre.\nVous recevez une première réponse claire pour avancer sereinement."
          }
          bullets={[
            'Devis gratuit et sans engagement',
            'Données traitées en toute confidentialité',
            'Premier retour sous 48h',
          ]}
          ctaPrimary={{ label: 'Remplir le formulaire', href: '#formulaire-devis' }}
          ctaSecondary={{ label: 'Parler à un expert', href: 'tel:+33247000000' }}
        />

        {/* Content Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-serif font-bold text-white mb-4">
                    Ce que vous pouvez préciser
                  </h2>
                  <p className="text-base text-white/80 leading-relaxed">
                    Type de projet, bien concerné, budget, contraintes, attentes. Plus c&apos;est clair,
                    plus l&apos;estimation est fiable.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-serif font-bold text-white mb-4">
                    Et ensuite
                  </h3>
                  <p className="text-base text-white/80 leading-relaxed">
                    On vous contacte, on affine le besoin, puis on formalise une proposition cadrée.
                  </p>
                </div>

                <div className="space-y-3 bg-white p-6 rounded-lg border border-border">
                  <p className="text-sm font-semibold text-primary">Vos informations restent confidentielles</p>
                  <p className="text-sm font-semibold text-primary">Devis sans engagement</p>
                  <p className="text-sm font-semibold text-primary">
                    Vous pouvez joindre des photos si nécessaire (option)
                  </p>
                </div>
              </div>

              {/* Form */}
              <div
                id="formulaire-devis"
                className="bg-white p-8 rounded-lg border border-border shadow-xl shadow-black/30"
              >
                {!submitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-primary mb-2">
                        Type de projet *
                      </label>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                        required
                      >
                        <option value="">Sélectionnez un type</option>
                        <option value="renovation">Rénovation</option>
                        <option value="extension">Extension</option>
                        <option value="architecture">Architecture & Conception</option>
                        <option value="locaux">Locaux Professionnels</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-primary mb-2">
                        Type de bien *
                      </label>
                      <select
                        name="propertyType"
                        value={formData.propertyType}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                        required
                      >
                        <option value="">Sélectionnez un type</option>
                        <option value="maison">Maison</option>
                        <option value="appartement">Appartement</option>
                        <option value="commerce">Commerce</option>
                        <option value="bureaux">Bureaux</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-primary mb-2">
                        Ville / Code postal *
                      </label>
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-primary mb-2">
                        Budget estimatif
                      </label>
                      <input
                        type="text"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-primary mb-2">
                        Détails du projet
                      </label>
                      <textarea
                        name="details"
                        value={formData.details}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-2.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                      />
                    </div>

                    <div className="border-t border-border pt-6">
                      <h4 className="font-semibold text-primary mb-4">Vos coordonnées</h4>

                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-semibold text-primary mb-2">
                            Nom *
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                            required
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-primary mb-2">
                            Email *
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                            required
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-primary mb-2">
                            Téléphone *
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-2.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <Button
                      type="submit"
                      disabled={!isFormValid || isLoading}
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-3 disabled:opacity-50"
                    >
                      {isLoading ? 'Envoi en cours...' : 'Envoyer ma demande'}
                    </Button>
                  </form>
                ) : (
                  <div className="text-center py-8">
                    <div className="mb-4">
                      <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto">
                        <svg
                          className="w-8 h-8 text-green-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-xl font-serif font-bold text-primary mb-2">
                      Merci pour votre demande
                    </h3>
                    <p className="text-primary/80">
                      Votre demande a bien été envoyée. Nous revenons vers vous rapidement.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ avec navigation en onglets (comme l'exemple), contenu identique */}
        <section className="py-12 sm:py-16 md:py-20 bg-muted/30 border-t border-border/60">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <AdvancedReveal direction="up" delay={0.1}>
              <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-primary mb-3">
                  Questions fréquentes
                </h2>
                <p className="text-sm sm:text-base text-foreground/70">
                  Retrouvez les réponses aux questions les plus courantes sur votre demande de devis.
                </p>
              </div>
            </AdvancedReveal>

            {/* Onglets de navigation – un onglet par page, comme la capture */}
            <div className="flex justify-center mb-8 sm:mb-10">
              <div className="inline-flex items-center gap-1 sm:gap-2 rounded-full bg-muted px-1 sm:px-2 py-1 shadow-sm border border-border/60">
                {faqCategories.map((category) => {
                  const isActive = activeTab === category.id
                  return (
                    <button
                      key={category.id}
                      onClick={() => {
                        setActiveTab(category.id)
                        setOpenIndex(null)
                      }}
                      className={`px-3 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm md:text-base font-medium transition-all duration-300 ${
                        isActive
                          ? 'bg-white text-primary shadow-sm'
                          : 'bg-transparent text-primary/80 hover:text-primary'
                      }`}
                    >
                      {category.label}
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Liste des questions – contenu propre à chaque page */}
            <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4">
              {(faqCategories.find((cat) => cat.id === activeTab) ?? faqCategories[0]).questions.map(
                (item, idx) => (
                <AdvancedReveal key={idx} direction="up" delay={0.05 * idx}>
                  <div className="group">
                    <button
                      onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                      className="w-full px-4 sm:px-5 md:px-6 lg:px-8 py-4 sm:py-5 md:py-6 text-left flex items-center justify-between bg-white border border-border/60 rounded-xl hover:border-accent/50 hover:shadow-md hover:shadow-accent/10 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-accent/2"
                    >
                      <h3 className="font-semibold text-primary text-sm sm:text-base md:text-lg transition-colors duration-300 pr-3 sm:pr-4 flex-1">
                        {item.question}
                      </h3>
                      <ChevronDown
                        size={20}
                        className={`flex-shrink-0 text-primary transition-all duration-300 group-hover:text-primary sm:w-6 sm:h-6 ${
                          openIndex === idx ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {openIndex === idx && (
                      <div className="px-4 sm:px-5 md:px-6 lg:px-8 py-4 sm:py-5 md:py-6 bg-gradient-to-b from-muted/40 to-muted/20 border-x border-b border-border/40 rounded-b-xl animate-in fade-in slide-in-from-top-2 duration-300">
                        <p className="text-primary/80 leading-relaxed text-xs sm:text-sm md:text-base font-light">
                          {item.answer}
                        </p>
                      </div>
                    )}
                  </div>
                </AdvancedReveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
