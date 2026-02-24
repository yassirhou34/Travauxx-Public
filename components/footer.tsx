'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Linkedin, Instagram, Facebook, Phone, Mail, MapPin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-primary via-primary to-primary/95 text-primary-foreground relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-1/3 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-30" />
        <div className="absolute -bottom-20 left-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 sm:pt-3 md:pt-4 pb-6 sm:pb-8 md:pb-10 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-nowrap mb-4 sm:mb-5 md:mb-6 gap-8 sm:gap-10 md:gap-12 lg:gap-x-[2.5rem]">
          {/* Company Info - flex-1 basis-0 = même largeur que les 3 autres, gap identique entre chaque bloc */}
          <div className="animate-in fade-in slide-in-from-left-8 duration-700 min-w-0 lg:flex-1 lg:min-w-0 lg:basis-0">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-secondary">Activ Travaux 37</h3>
            <p className="text-xs sm:text-sm opacity-85 leading-relaxed font-light">
              Contractant général, rénovation premium, extension, rénovation énergétique, aménagement intérieur.
            </p>
          </div>

          {/* Navigation */}
          <div className="animate-in fade-in slide-in-from-left-6 duration-700 min-w-0 lg:flex-1 lg:min-w-0 lg:basis-0" style={{ animationDelay: '100ms' }}>
            <h4 className="font-bold text-xs sm:text-sm mb-4 text-accent">Navigation</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/" className="opacity-80 hover:opacity-100 transition-opacity">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/renovation" className="opacity-80 hover:opacity-100 transition-opacity">
                  Rénovation
                </Link>
              </li>
              <li>
                <Link href="/extension" className="opacity-80 hover:opacity-100 transition-opacity">
                  Extension
                </Link>
              </li>
              <li>
                <Link href="/architecture-conception" className="opacity-80 hover:opacity-100 transition-opacity">
                  Architecture
                </Link>
              </li>
              <li>
                <Link href="/locaux-professionnels" className="opacity-80 hover:opacity-100 transition-opacity">
                  Locaux pro
                </Link>
              </li>
            </ul>
          </div>

          {/* Ressources */}
          <div className="animate-in fade-in slide-in-from-left-4 duration-700 min-w-0 lg:flex-1 lg:min-w-0 lg:basis-0" style={{ animationDelay: '200ms' }}>
            <h4 className="font-bold text-xs sm:text-sm mb-4 text-accent">Ressources</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/a-propos" className="opacity-80 hover:opacity-100 transition-opacity">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/concevoir-mon-projet" className="opacity-80 hover:opacity-100 transition-opacity">
                  Demander un devis
                </Link>
              </li>
              <li>
                <Link href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact CTA */}
          <div className="animate-in fade-in slide-in-from-right-8 duration-700 min-w-0 lg:flex-1 lg:min-w-0 lg:basis-0" style={{ animationDelay: '300ms' }}>
            <h4 className="font-bold text-xs sm:text-sm mb-4 text-accent">Contact</h4>
            <ul className="space-y-2 text-xs sm:text-sm mb-4">
              <li>
                <a href="tel:+33247000000" className="flex items-center gap-2 opacity-85 hover:opacity-100 transition-opacity font-light">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <span>02 47 00 00 00</span>
                </a>
              </li>
              <li>
                <a href="mailto:contact@activtravaux37.fr" className="flex items-center gap-2 opacity-85 hover:opacity-100 transition-opacity font-light">
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <span>contact@activtravaux37.fr</span>
                </a>
              </li>
              <li className="flex items-center gap-2 opacity-85 font-light">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span>Indre-et-Loire (37), autour de Tours</span>
              </li>
            </ul>
            
            {/* Social Networks */}
            <div className="mb-4">
              <h5 className="text-xs sm:text-sm font-semibold mb-2 opacity-90">Suivez-nous</h5>
              <div className="flex items-center gap-3">
                <Link
                  href="https://www.linkedin.com/company/activtravaux/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-accent/20 border border-white/20 hover:border-accent/40 transition-all duration-300 hover:scale-110 group"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-primary-foreground group-hover:text-accent transition-colors" />
                </Link>
                <Link
                  href="https://www.instagram.com/activtravauxfrance/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-accent/20 border border-white/20 hover:border-accent/40 transition-all duration-300 hover:scale-110 group"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5 text-primary-foreground group-hover:text-accent transition-colors" />
                </Link>
                <Link
                  href="https://www.facebook.com/activtravaux/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-accent/20 border border-white/20 hover:border-accent/40 transition-all duration-300 hover:scale-110 group"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5 text-primary-foreground group-hover:text-accent transition-colors" />
                </Link>
              </div>
            </div>

            <Link href="/concevoir-mon-projet" className="block group">
              <Button className="w-full rounded-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-xs sm:text-sm transition-all duration-300 group-hover:shadow-lg group-hover:shadow-accent/30">
                Demander un devis
              </Button>
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/20 pt-4 sm:pt-5 animate-in fade-in duration-700" style={{ animationDelay: '400ms' }}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4 text-[10px] sm:text-xs opacity-75 font-light">
            <p>&copy; {new Date().getFullYear()} Activ Travaux 37. Tous droits réservés.</p>
            <div className="flex flex-wrap gap-4 sm:gap-6 md:gap-8 justify-center md:justify-end">
              <Link href="#" className="hover:opacity-100 hover:text-accent transition-all duration-300">
                Mentions légales
              </Link>
              <Link href="#" className="hover:opacity-100 hover:text-accent transition-all duration-300">
                Politique de confidentialité
              </Link>
              <Link href="#" className="hover:opacity-100 hover:text-accent transition-all duration-300">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
