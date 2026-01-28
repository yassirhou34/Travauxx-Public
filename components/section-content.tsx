'use client'

interface ContentBlock {
  title: string
  subtitle?: string
  content: string
}

interface SectionContentProps {
  blocks: ContentBlock[]
  variant?: 'default' | 'alternating'
}

export function SectionContent({ blocks, variant = 'default' }: SectionContentProps) {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-28 xl:py-36 bg-gradient-to-b from-background via-white to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {variant === 'alternating' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
            {blocks.map((block, idx) => (
              <div
                key={idx}
                className="space-y-3 sm:space-y-4 md:space-y-5 p-4 sm:p-6 md:p-8 rounded-xl border border-border/50 hover:border-accent/30 transition-all duration-500 group hover:shadow-lg hover:shadow-accent/5 animate-in fade-in slide-in-from-bottom-8 duration-700"
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-primary mb-2 group-hover:text-accent transition-colors duration-300">
                    {block.title}
                  </h3>
                  {block.subtitle && (
                    <h4 className="text-xs sm:text-sm font-semibold text-secondary/90 mb-2 sm:mb-3">
                      {block.subtitle}
                    </h4>
                  )}
                </div>
                <p className="text-sm sm:text-base text-foreground/70 leading-relaxed font-light">
                  {block.content}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-10 sm:space-y-12 md:space-y-16 lg:space-y-20">
            {blocks.map((block, idx) => (
              <div
                key={idx}
                className="max-w-3xl animate-in fade-in slide-in-from-left-8 duration-700"
                style={{ animationDelay: `${idx * 200}ms` }}
              >
                <div className="relative">
                  {/* Accent line */}
                  <div className="absolute -left-2 sm:-left-4 top-0 w-0.5 sm:w-1 h-8 sm:h-12 bg-gradient-to-b from-accent to-accent/30 rounded-full" />
                  <div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-3 sm:mb-4 text-balance">
                      {block.title}
                    </h2>
                    {block.subtitle && (
                      <h3 className="text-base sm:text-lg font-semibold text-secondary mb-4 sm:mb-6">
                        {block.subtitle}
                      </h3>
                    )}
                  </div>
                </div>
                <p className="text-sm sm:text-base md:text-lg text-foreground/70 leading-relaxed font-light ml-2 sm:ml-4">
                  {block.content}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
