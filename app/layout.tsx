import React from "react"
import type { Metadata, Viewport } from 'next'
import { Lexend_Deca } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const lexendDeca = Lexend_Deca({ subsets: ["latin"], variable: '--font-sans' })

// Declare inter and manrope variables here
const inter = { variable: '--font-inter' }
const manrope = { variable: '--font-manrope' }

export const metadata: Metadata = {
  title: 'Activ Travaux 37 — Rénovation premium clé en main en Indre-et-Loire',
  description: 'Contractant général en Indre-et-Loire. Rénovation, extension, rénovation énergétique et aménagement intérieur. Projet cadré, suivi, finitions soignées. Demande de devis.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#2b2b2b',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={lexendDeca.variable}>
      <body className={`font-sans antialiased bg-background text-foreground`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
