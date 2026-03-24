'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Cookie, X } from 'lucide-react'

export const COOKIE_CONSENT_KEY = 'activ-travaux-cookie-consent'

export type CookieConsentValue = 'accepted' | 'rejected'

function dispatchConsent(value: CookieConsentValue) {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('cookie-consent', { detail: value }))
  }
}

export function CookieConsentBanner() {
  const [visible, setVisible] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    try {
      const stored = localStorage.getItem(COOKIE_CONSENT_KEY)
      if (!stored) setVisible(true)
    } catch {
      setVisible(true)
    }
  }, [])

  const save = (value: CookieConsentValue) => {
    try {
      localStorage.setItem(COOKIE_CONSENT_KEY, value)
    } catch {
      /* ignore */
    }
    dispatchConsent(value)
    setVisible(false)
  }

  if (!mounted || !visible) return null

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-[100] flex justify-center p-4 sm:p-6 pointer-events-none"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cookie-banner-title"
      aria-describedby="cookie-banner-desc"
    >
      <div
        className="pointer-events-auto w-full max-w-4xl overflow-hidden rounded-[22px] border border-white/15 shadow-[0_25px_80px_-12px_rgba(0,0,0,0.85),0_0_0_1px_rgba(232,50,99,0.12)_inset] animate-in fade-in slide-in-from-bottom-6 duration-500"
        style={{
          background: 'linear-gradient(105deg, #3d3430 0%, #372f2d 35%, #1a1614 100%)',
        }}
      >
        <div className="relative p-5 sm:p-6 md:p-7">
          <button
            type="button"
            onClick={() => save('rejected')}
            className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full text-white/80 transition-colors hover:bg-white/10 hover:text-white"
            aria-label="Fermer et refuser les cookies non essentiels"
          >
            <X className="h-5 w-5" strokeWidth={1.75} />
          </button>

          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:gap-8 pr-8 lg:pr-10">
            <div className="flex min-w-0 flex-1 gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border-2 border-accent bg-accent/10 shadow-[0_0_24px_-4px_rgba(232,50,99,0.55)]">
                <Cookie className="h-6 w-6 text-accent" strokeWidth={1.75} aria-hidden />
              </div>
              <div className="min-w-0 pt-0.5">
                <p id="cookie-banner-title" className="sr-only">
                  Cookies sur le site Activ Travaux
                </p>
                <p
                  id="cookie-banner-desc"
                  className="text-sm leading-relaxed text-white sm:text-[15px] md:text-base"
                >
                  Nous utilisons des cookies pour améliorer votre expérience et analyser notre trafic.
                  Acceptez-vous tous les cookies&nbsp;?
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center lg:flex-nowrap lg:justify-end">
              <button
                type="button"
                onClick={() => save('accepted')}
                className="order-1 min-h-[44px] rounded-full bg-accent px-5 py-2.5 text-sm font-bold text-white shadow-[0_0_28px_-6px_rgba(232,50,99,0.85)] transition-all hover:bg-accent/90 hover:shadow-[0_0_36px_-4px_rgba(232,50,99,0.95)] sm:order-none sm:px-6"
              >
                Accepter tous les cookies
              </button>
              <button
                type="button"
                onClick={() => save('rejected')}
                className="min-h-[44px] rounded-full border border-white/25 bg-white/5 px-5 py-2.5 text-sm font-bold text-white backdrop-blur-sm transition-all hover:border-white/40 hover:bg-white/10 sm:px-6"
              >
                Refuser
              </button>
            </div>
          </div>

          <div className="mt-5 border-t border-white/10 pt-4">
            <Link
              href="/cookies"
              className="inline-flex text-sm font-semibold text-accent underline-offset-4 transition-colors hover:text-accent/85 hover:underline"
            >
              En savoir plus
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
