'use client'

import { useEffect, useRef, useState, ReactNode } from 'react'

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade' | 'scale' | 'blur'
  threshold?: number
  distance?: number
  once?: boolean
}

export function ScrollReveal({
  children,
  className = '',
  delay = 0,
  duration = 0.7,
  direction = 'up',
  threshold = 0.1,
  distance = 60,
  once = true,
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (once && hasAnimated) return
            setIsVisible(true)
            if (once) setHasAnimated(true)
          } else if (!once) {
            setIsVisible(false)
          }
        })
      },
      {
        threshold,
        rootMargin: '0px 0px -80px 0px',
      }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [threshold, once, hasAnimated])

  const getInitialStyles = () => {
    const base: React.CSSProperties = {
      opacity: 0,
      transition: `all ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
      willChange: 'opacity, transform, filter',
    }

    switch (direction) {
      case 'up':
        return { ...base, transform: `translateY(${distance}px)` }
      case 'down':
        return { ...base, transform: `translateY(-${distance}px)` }
      case 'left':
        return { ...base, transform: `translateX(${distance}px)` }
      case 'right':
        return { ...base, transform: `translateX(-${distance}px)` }
      case 'scale':
        return { ...base, transform: 'scale(0.9)' }
      case 'blur':
        return { ...base, filter: 'blur(10px)', transform: `translateY(${distance / 2}px)` }
      default:
        return base
    }
  }

  const getVisibleStyles = (): React.CSSProperties => ({
    opacity: 1,
    transform: 'translateY(0) translateX(0) scale(1)',
    filter: 'blur(0)',
    transition: `all ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
    willChange: 'opacity, transform, filter',
  })

  return (
    <div
      ref={ref}
      className={className}
      style={isVisible ? getVisibleStyles() : getInitialStyles()}
    >
      {children}
    </div>
  )
}

// Stagger children animation wrapper
interface StaggerContainerProps {
  children: ReactNode
  className?: string
  staggerDelay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade' | 'scale' | 'blur'
}

export function StaggerContainer({
  children,
  className = '',
  staggerDelay = 0.1,
  direction = 'up',
}: StaggerContainerProps) {
  const childArray = Array.isArray(children) ? children : [children]
  
  return (
    <div className={className}>
      {childArray.map((child, index) => (
        <ScrollReveal key={index} delay={index * staggerDelay} direction={direction}>
          {child}
        </ScrollReveal>
      ))}
    </div>
  )
}

