'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'

interface SectionHeroProps {
  title: string
  subtitle: string
  bullets: string[]
  ctaPrimary?: { label: string; href: string }
  ctaSecondary?: { label: string; href: string }
}

export function SectionHero({
  title,
  subtitle,
  bullets,
  ctaPrimary,
  ctaSecondary,
}: SectionHeroProps) {
  return (
    <section className="relative bg-gradient-to-b from-white via-white to-muted/30 py-12 sm:py-16 md:py-20 lg:py-28 xl:py-40 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl opacity-60 animate-float" />
        <div className="absolute -bottom-32 left-1/3 w-80 h-80 bg-secondary/10 rounded-full blur-3xl opacity-40" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Content */}
        <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-8 duration-700">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary leading-tight mb-4 sm:mb-5 md:mb-6 text-balance">
            {title}
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-foreground/75 leading-relaxed mb-6 sm:mb-8 md:mb-10 whitespace-pre-line font-light">
            {subtitle}
          </p>

          {/* Bullets */}
          {bullets.length > 0 && (
            <div className="mb-6 sm:mb-8 md:mb-10 space-y-3 sm:space-y-4">
              {bullets.map((bullet, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 sm:gap-4 animate-in fade-in slide-in-from-left-4 duration-700"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-accent mt-2 sm:mt-3 ring-2 ring-accent/30" />
                  <p className="text-sm sm:text-base md:text-lg text-foreground/70 font-light">{bullet}</p>
                </div>
              ))}
            </div>
          )}

          {/* CTAs */}
          {(ctaPrimary || ctaSecondary) && (
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4 animate-in fade-in slide-in-from-bottom-4 duration-700" style={{ animationDelay: '300ms' }}>
              {ctaPrimary && (
                <Link href={ctaPrimary.href} className="group">
                  <Button className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-6 sm:px-8 lg:px-10 py-2.5 sm:py-3 lg:py-4 text-sm sm:text-base lg:text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-accent/30 group-hover:scale-105">
                    {ctaPrimary.label}
                  </Button>
                </Link>
              )}
              {ctaSecondary && (
                <Link href={ctaSecondary.href} className="group">
                  <Button
                    variant="outline"
                    className="w-full sm:w-auto border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-6 sm:px-8 lg:px-10 py-2.5 sm:py-3 lg:py-4 text-sm sm:text-base lg:text-lg transition-all duration-300 group-hover:shadow-lg bg-transparent"
                  >
                    {ctaSecondary.label}
                  </Button>
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
