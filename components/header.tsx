'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface HeaderProps {
  /** 
   * 'transparent' = Page d'accueil: transparent au départ, blanc après scroll
   * 'solid' = Autres pages: toujours blanc (comme l'état scrollé de l'accueil)
   */
  variant?: 'transparent' | 'solid'
}

export function Header({ variant = 'solid' }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Pour la variante 'transparent', on écoute le scroll
  // Pour la variante 'solid', le header est toujours dans l'état "scrolled"
  const isTransparent = variant === 'transparent'

  useEffect(() => {
    if (!isTransparent) return // Pas besoin de tracker le scroll pour la variante solid
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 5)
    }
    // Vérifier l'état initial au chargement
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isTransparent])

  const navItems = [
    { label: 'Accueil', href: '/' },
    { label: 'Rénovation', href: '/renovation' },
    { label: 'Extension', href: '/extension' },
    { label: 'Architecture', href: '/architecture-conception' },
    { label: 'Locaux pro', href: '/locaux-professionnels' },
    { label: 'Réalisations', href: '/realisations' },
    { label: 'À propos', href: '/a-propos' },
  ]

  // On garde la logique de scroll si besoin,
  // mais on veut un header noir avec écriture blanche partout.
  const isAtTop = isTransparent && !scrolled
  const showSolidBg = !isTransparent || scrolled

  // Logo noir pour toutes les pages
  const logoSrc = '/Banqueimages/LOGO ACTIV TRAVAUX SANS ARRIERE PLAN.png'

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300 bg-[#050308]/95 backdrop-blur-md shadow-sm border-b border-[#241a19]">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 lg:h-24">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 group flex items-center">
            <div className="relative h-16 sm:h-18 md:h-20 lg:h-24 w-auto transition-transform duration-300 group-hover:scale-105">
              <Image
                src={logoSrc}
                alt="Activ Travaux"
                width={320}
                height={96}
                className="h-full w-auto object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2 lg:gap-4">
            {navItems.map((item, idx) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 hover:text-accent group ${
                  'text-white'
                }`}
                style={{
                  animation: `fadeInUp 0.6s ease-out ${idx * 0.05}s both`,
                }}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* CTA & Mobile Menu */}
          <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
            <Link href="/concevoir-mon-projet" className="hidden sm:block">
              <Button className="rounded-full bg-accent hover:bg-accent/90 text-accent-foreground font-medium px-3 sm:px-4 lg:px-6 py-1.5 sm:py-2 text-xs sm:text-sm transition-all duration-300 hover:shadow-lg hover:shadow-accent/20">
                Demander un devis
              </Button>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden inline-flex items-center justify-center p-2 rounded-md transition-colors duration-300 ${
                'text-white hover:bg-white/10'
              }`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden border-t border-border py-3 sm:py-4 animate-in fade-in slide-in-from-top-2 duration-300">
            <div className="flex flex-col gap-1 sm:gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm sm:text-base font-medium text-foreground hover:text-accent transition-colors px-3 py-2 rounded-md hover:bg-muted/50"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link href="/concevoir-mon-projet" className="px-3 py-2 mt-1">
                <Button className="w-full rounded-full bg-accent hover:bg-accent/90 text-accent-foreground font-medium text-sm sm:text-base transition-all duration-300">
                  Demander un devis
                </Button>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
