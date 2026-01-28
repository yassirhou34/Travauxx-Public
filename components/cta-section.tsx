'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'

interface CtaButton {
  label: string
  href: string
  variant?: 'primary' | 'secondary'
}

interface CTASectionProps {
  title?: string
  subtitle?: string
  buttons: CtaButton[]
  center?: boolean
}

export function CTASection({
  title,
  subtitle,
  buttons,
  center = true,
}: CTASectionProps) {
  return (
    <section className={`relative py-12 sm:py-16 md:py-24 lg:py-32 xl:py-40 overflow-hidden ${center ? 'text-center' : ''}`}>
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/95" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-40 animate-float" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {title && (
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-3 sm:mb-4 text-balance animate-in fade-in slide-in-from-bottom-8 duration-700">
            {title}
          </h2>
        )}
        {subtitle && (
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-primary-foreground/90 mb-6 sm:mb-8 md:mb-10 font-light animate-in fade-in slide-in-from-bottom-6 duration-700" style={{ animationDelay: '100ms' }}>
            {subtitle}
          </p>
        )}

        <div className={`flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 flex-wrap ${center ? 'justify-center' : ''} animate-in fade-in slide-in-from-bottom-4 duration-700`} style={{ animationDelay: '200ms' }}>
          {buttons.map((button, idx) => (
            <Link key={idx} href={button.href} className="group w-full sm:w-auto">
              {button.variant === 'secondary' ? (
                <Button className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-6 sm:px-8 lg:px-10 py-2.5 sm:py-3 lg:py-4 text-sm sm:text-base transition-all duration-300 hover:shadow-2xl hover:shadow-accent/30 group-hover:scale-105">
                  {button.label}
                </Button>
              ) : (
                <Button className="w-full sm:w-auto border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold px-6 sm:px-8 lg:px-10 py-2.5 sm:py-3 lg:py-4 text-sm sm:text-base bg-transparent transition-all duration-300 group-hover:shadow-xl group-hover:shadow-primary-foreground/20">
                  {button.label}
                </Button>
              )}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
