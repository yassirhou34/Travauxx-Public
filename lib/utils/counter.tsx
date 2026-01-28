'use client'

import { useEffect, useState, useRef } from 'react'

interface CounterProps {
  to: number
  duration?: number
  className?: string
}

export function Counter({ to, duration = 2000, className = '' }: CounterProps) {
  const [count, setCount] = useState(0)
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (hasAnimated.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true
            const startTime = Date.now()
            const startValue = 0

            const animate = () => {
              const elapsed = Date.now() - startTime
              const progress = Math.min(elapsed / duration, 1)
              const easeOutQuart = 1 - Math.pow(1 - progress, 4)
              const current = Math.floor(startValue + (to - startValue) * easeOutQuart)

              setCount(current)

              if (progress < 1) {
                requestAnimationFrame(animate)
              } else {
                setCount(to)
              }
            }

            requestAnimationFrame(animate)
          }
        })
      },
      { threshold: 0.5 }
    )

    const element = document.getElementById(`counter-${to}`)
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [to, duration])

  return (
    <span id={`counter-${to}`} className={className}>
      {count}
    </span>
  )
}

