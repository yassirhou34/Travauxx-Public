'use client'

import { useEffect, useRef, useState, ReactNode } from 'react'

interface TextSplitRevealProps {
  children: ReactNode
  className?: string
  delay?: number
  splitBy?: 'word' | 'char' | 'none'
}

export function TextSplitReveal({
  children,
  className = '',
  delay = 0,
  splitBy = 'word',
}: TextSplitRevealProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => setIsVisible(true), delay * 1000)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [delay])

  if (splitBy === 'none' || typeof children !== 'string') {
    return (
      <div ref={ref} className={className} style={{ overflow: 'hidden' }}>
        <span
          style={{
            display: 'inline-block',
            transform: isVisible ? 'translateY(0)' : 'translateY(100%)',
            opacity: isVisible ? 1 : 0,
            transition: 'transform 0.8s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.8s cubic-bezier(0.19, 1, 0.22, 1)',
          }}
        >
          {children}
        </span>
      </div>
    )
  }

  const text = String(children)
  const parts = splitBy === 'word' ? text.split(' ') : text.split('')

  return (
    <div ref={ref} className={className} style={{ overflow: 'hidden' }}>
      {parts.map((part, i) => (
        <span
          key={i}
          style={{
            display: 'inline-block',
            transform: isVisible ? 'translateY(0)' : 'translateY(100%)',
            opacity: isVisible ? 1 : 0,
            transition: `transform 0.8s cubic-bezier(0.19, 1, 0.22, 1) ${delay + i * 0.03}s, opacity 0.8s cubic-bezier(0.19, 1, 0.22, 1) ${delay + i * 0.03}s`,
          }}
        >
          {part}
          {splitBy === 'word' && i < parts.length - 1 && '\u00A0'}
        </span>
      ))}
    </div>
  )
}

