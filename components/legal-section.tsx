import type { ReactNode } from 'react'
import type { LucideIcon } from 'lucide-react'

type LegalSectionProps = {
  icon: LucideIcon
  title: string
  children: ReactNode
  /** Affiche un numéro discret pour structurer visuellement la page */
  index?: number
}

export function LegalSection({ icon: Icon, title, children, index }: LegalSectionProps) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-white/12 bg-gradient-to-br from-white/[0.09] via-white/[0.03] to-transparent p-6 sm:p-8 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.75)] backdrop-blur-md transition-all duration-500 hover:border-accent/35 hover:shadow-[0_24px_60px_-12px_rgba(232,50,99,0.12)] hover:-translate-y-0.5">
      <div
        className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-accent/[0.11] blur-3xl transition-opacity duration-500 group-hover:opacity-100 opacity-70"
        aria-hidden
      />
      <div className="absolute left-0 top-6 bottom-6 w-[3px] rounded-full bg-gradient-to-b from-accent via-accent/60 to-accent/20 sm:top-8 sm:bottom-8" />

      <div className="relative flex flex-col gap-5 sm:flex-row sm:gap-6 pl-4 sm:pl-5">
        <div className="flex shrink-0 items-start gap-3 sm:flex-col sm:items-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/20 text-accent shadow-inner shadow-black/20 ring-1 ring-accent/30 transition-transform duration-300 group-hover:scale-105">
            <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden />
          </div>
          {index != null ? (
            <span className="hidden text-[10px] font-bold uppercase tracking-[0.2em] text-white/35 sm:block sm:text-center">
              {String(index).padStart(2, '0')}
            </span>
          ) : null}
        </div>

        <div className="min-w-0 flex-1 pt-0.5">
          <h2 className="text-lg font-bold leading-tight tracking-tight text-white sm:text-xl">
            {title}
          </h2>
          <div className="mt-4 space-y-3 text-[15px] leading-relaxed text-white/85 sm:text-base [&_p:last-child]:mb-0 [&_p]:mb-0 [&_ul]:mt-3 [&_ul]:list-none [&_ul]:space-y-2.5 [&_ul]:pl-0 [&_li]:relative [&_li]:pl-6 [&_li]:before:absolute [&_li]:before:left-0 [&_li]:before:top-[0.55em] [&_li]:before:h-1.5 [&_li]:before:w-1.5 [&_li]:before:rounded-full [&_li]:before:bg-accent [&_strong]:font-semibold [&_strong]:text-white [&_a]:font-medium [&_a]:text-accent [&_a]:underline-offset-4 hover:[&_a]:underline">
            {children}
          </div>
        </div>
      </div>
    </article>
  )
}
