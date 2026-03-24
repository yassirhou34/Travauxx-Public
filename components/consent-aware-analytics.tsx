'use client'

import { useEffect, useState } from 'react'
import { Analytics } from '@vercel/analytics/next'
import { COOKIE_CONSENT_KEY, type CookieConsentValue } from '@/components/cookie-consent-banner'

export function ConsentAwareAnalytics() {
  const [allow, setAllow] = useState(false)

  useEffect(() => {
    const read = () => {
      try {
        const v = localStorage.getItem(COOKIE_CONSENT_KEY)
        setAllow(v === 'accepted')
      } catch {
        setAllow(false)
      }
    }
    read()

    const onConsent = (e: Event) => {
      const ce = e as CustomEvent<CookieConsentValue>
      setAllow(ce.detail === 'accepted')
    }
    window.addEventListener('cookie-consent', onConsent as EventListener)
    return () => window.removeEventListener('cookie-consent', onConsent as EventListener)
  }, [])

  if (!allow) return null
  return <Analytics />
}
