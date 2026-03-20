'use client'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { useState, useEffect } from 'react'

const INDUSTRIES = [
  "Women's Fashion",
  'Activewear',
  'Streetwear',
  'Luxury Fashion',
  'Gym Wear',
  'Kids Clothing',
  'Sustainable Fashion',
]

function Typewriter() {
  const [idx, setIdx] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = INDUSTRIES[idx]
    let timer: ReturnType<typeof setTimeout>
    if (!deleting && text.length < word.length) {
      timer = setTimeout(() => setText(word.slice(0, text.length + 1)), 75)
    } else if (!deleting && text.length === word.length) {
      timer = setTimeout(() => setDeleting(true), 2200)
    } else if (deleting && text.length > 0) {
      timer = setTimeout(() => setText(word.slice(0, text.length - 1)), 45)
    } else {
      setDeleting(false)
      setIdx((idx + 1) % INDUSTRIES.length)
    }
    return () => clearTimeout(timer)
  }, [text, deleting, idx])

  return (
    <span style={{ color: 'var(--accent)' }}>
      {text}
      <span className="cursor-blink" style={{ color: 'var(--accent)', marginLeft: '2px' }}>|</span>
    </span>
  )
}

export default function Hero() {
  return (
    <section
      className="min-h-screen flex items-center relative overflow-hidden"
      style={{
        background: '#0a0a0a',
        backgroundImage: 'radial-gradient(ellipse 80% 60% at 70% 40%, rgba(108,99,255,0.12) 0%, transparent 65%), radial-gradient(ellipse 50% 40% at 10% 90%, rgba(108,99,255,0.07) 0%, transparent 60%)',
      }}
    >
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)', backgroundSize: '80px 80px', opacity: 1 }} />

      <div className="mw-container relative z-10 pt-24 pb-20">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full" style={{ background: 'rgba(108,99,255,0.12)', border: '1px solid rgba(108,99,255,0.25)' }}>
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent)' }} />
            <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.7)', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 500 }}>Shopify Agency for Fashion Brands</span>
          </div>

          <h1 style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#fff', marginBottom: '1.5rem', lineHeight: 1.1 }}>
            Shopify Development<br />for <Typewriter /><br />Brands
          </h1>

          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 'clamp(1rem,2vw,1.2rem)', lineHeight: 1.8, maxWidth: '580px', marginBottom: '2.5rem', fontWeight: 300 }}>
            We build high-converting Shopify stores for DTC clothing brands, activewear labels, boutiques and fashion retailers across USA, UK and Australia.
          </p>

          <div className="flex flex-wrap gap-3 mb-14">
            <Link href="/contact" className="mw-btn-primary text-sm px-7 py-3.5">
              Get a Free Store Audit <ArrowRight size={15} />
            </Link>
            <Link href="/case-studies" className="mw-btn-outline text-sm px-7 py-3.5">
              View Our Work
            </Link>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-6" style={{ borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: '1.75rem' }}>
            {['Shopify Partner', '50+ Fashion Brands', 'USA · UK · Australia', '5-Star Rated'].map(item => (
              <div key={item} className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full" style={{ background: 'rgba(255,255,255,0.3)' }} />
                <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.45)', fontWeight: 400 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
