import type { ReactNode } from 'react'
import Link from 'next/link'
import { ArrowLeft, FileText, Cookie, Shield } from 'lucide-react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

const legalLinks = [
  { href: '/mentions-legales', label: 'Mentions légales', icon: FileText },
  { href: '/cookies', label: 'Cookies', icon: Cookie },
  { href: '/politique-de-confidentialite', label: 'Confidentialité', icon: Shield },
] as const

type LegalPageLayoutProps = {
  title: string
  /** Sous-titre sous le titre principal (accessibilité + contexte) */
  description?: string
  /** Slug de la page active pour mettre en avant le lien courant */
  activeHref?: string
  children: ReactNode
}

export function LegalPageLayout({ title, description, activeHref, children }: LegalPageLayoutProps) {
  return (
    <>
      <Header />
      <main className="relative min-h-[60vh] overflow-x-hidden bg-[#050308]">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-0 left-1/2 h-[520px] w-[min(100%,900px)] -translate-x-1/2 bg-accent/[0.12] blur-[120px] rounded-full" />
          <div className="absolute bottom-[10%] right-0 h-[380px] w-[380px] bg-secondary/10 blur-[100px] rounded-full" />
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)',
              backgroundSize: '56px 56px',
            }}
          />
        </div>

        <section className="relative z-10 border-b border-white/10">
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent pointer-events-none" />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-12 sm:pt-12 sm:pb-14 md:pt-14 md:pb-16">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-white/65 hover:text-accent transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4 shrink-0" aria-hidden />
              Retour à l&apos;accueil
            </Link>

            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent/90 mb-4">
              Activ Travaux
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.1]">
              {title}
              <span className="text-accent">.</span>
            </h1>
            {description ? (
              <p className="mt-5 max-w-2xl text-base sm:text-lg text-white/70 font-light leading-relaxed">
                {description}
              </p>
            ) : null}

            <nav
              className="mt-10 flex flex-wrap gap-2 sm:gap-3"
              aria-label="Autres pages légales"
            >
              {legalLinks.map(({ href, label, icon: Icon }) => {
                const isActive = activeHref === href
                return (
                  <Link
                    key={href}
                    href={href}
                    className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs sm:text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? 'border-accent/50 bg-accent/15 text-white shadow-[0_0_24px_-4px_rgba(232,50,99,0.45)]'
                        : 'border-white/15 bg-white/[0.04] text-white/75 hover:border-accent/35 hover:bg-white/[0.07] hover:text-white'
                    }`}
                  >
                    <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-accent shrink-0" aria-hidden />
                    {label}
                  </Link>
                )
              })}
            </nav>
          </div>
        </section>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
          <div className="flex flex-col gap-6 sm:gap-7">{children}</div>
        </div>
      </main>
      <Footer />
    </>
  )
}
