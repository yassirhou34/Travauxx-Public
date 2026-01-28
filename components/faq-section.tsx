'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

interface FAQSectionProps {
  items: FAQItem[]
}

export function FAQSection({ items }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-28 xl:py-36 bg-gradient-to-b from-white via-white to-muted/20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 sm:mb-12 md:mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-3 sm:mb-4 text-balance">
            Questions fréquentes
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-foreground/60 font-light">
            Trouvez des réponses à vos questions les plus courantes
          </p>
        </div>

        <div className="space-y-2 sm:space-y-3">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="group animate-in fade-in slide-in-from-bottom-4 duration-700"
              style={{ animationDelay: `${idx * 75}ms` }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-4 sm:px-5 md:px-6 lg:px-8 py-4 sm:py-5 lg:py-6 text-left flex items-center justify-between bg-white border border-border/60 rounded-xl hover:border-accent/50 hover:shadow-md hover:shadow-accent/10 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-accent/2"
              >
                <h3 className="font-semibold text-foreground text-sm sm:text-base md:text-lg lg:text-xl group-hover:text-primary transition-colors duration-300 pr-3 sm:pr-4">
                  {item.question}
                </h3>
                <ChevronDown
                  size={20}
                  className={`flex-shrink-0 text-accent transition-all duration-300 group-hover:text-accent sm:w-6 sm:h-6 ${
                    openIndex === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openIndex === idx && (
                <div className="px-4 sm:px-5 md:px-6 lg:px-8 py-4 sm:py-5 md:py-6 bg-gradient-to-b from-muted/40 to-muted/20 border-x border-b border-border/40 rounded-b-xl animate-in fade-in slide-in-from-top-2 duration-300">
                  <p className="text-foreground/70 leading-relaxed text-xs sm:text-sm md:text-base lg:text-lg font-light">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
