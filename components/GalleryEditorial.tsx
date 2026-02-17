'use client'

import React from 'react'

interface EditorialItem {
  image: string
  chapter?: string
  title?: string
  titleItalic?: string
  description?: string
}

interface GalleryEditorialProps {
  items?: EditorialItem[]
  backgroundColor?: string
  textColor?: string
  accentColor?: string
}

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ')
}

const GalleryEditorial: React.FC<GalleryEditorialProps> = ({
  items = [],
  backgroundColor = '#1a1a1a',
  textColor = '#e5e5e5',
  accentColor = '#d4af37',
}) => {
  return (
    <div
      className="min-h-screen py-20 sm:py-24 px-4"
      style={{ backgroundColor, color: textColor }}
    >
      <div className="max-w-7xl mx-auto space-y-20 sm:space-y-24">
        {items.map((item, i) => (
          <div
            key={i}
            className={cn(
              'flex flex-col md:flex-row gap-10 md:gap-14 items-center',
              i % 2 !== 0 ? 'md:flex-row-reverse' : ''
            )}
          >
            <div className="w-full md:w-2/3 relative h-[60vh] sm:h-[70vh] overflow-hidden group rounded-3xl">
              <div className="w-full h-full transform scale-110 group-hover:scale-100 transition-transform duration-700 ease-out">
                <img src={item.image} className="w-full h-full object-cover" alt={item.title} loading="lazy" />
              </div>
              <div
                className="absolute top-4 right-4 bottom-4 left-4 border scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500"
                style={{ borderColor: `${textColor}33` }}
              />
            </div>

            <div className="w-full md:w-1/3 space-y-5">
              <span
                className="text-xs font-bold tracking-[0.2em]"
                style={{ color: accentColor }}
              >
                {item.chapter}
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif leading-tight">
                {item.title}{' '}
                {item.titleItalic && (
                  <>
                    <br />
                    <span className="italic font-light opacity-70">{item.titleItalic}</span>
                  </>
                )}
              </h2>
              <p
                className="font-light leading-relaxed text-sm sm:text-base max-w-md"
                style={{ color: `${textColor}cc` }}
              >
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default GalleryEditorial


