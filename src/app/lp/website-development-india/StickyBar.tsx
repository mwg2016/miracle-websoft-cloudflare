'use client'
import { useEffect, useState } from 'react'
import { ArrowRight, MessageCircle } from 'lucide-react'

// Mobile sticky bar: callback form + WhatsApp. Shows after the hero, hides while the form is on screen.
export default function StickyBar({ whatsapp }: { whatsapp: string }) {
  const [pastHero, setPastHero] = useState(false)
  const [formInView, setFormInView] = useState(false)

  useEffect(() => {
    const onScroll = () => setPastHero(window.scrollY > 700)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    const form = document.getElementById('lead-form')
    const obs = form ? new IntersectionObserver(([e]) => setFormInView(e.isIntersecting)) : null
    if (form && obs) obs.observe(form)
    return () => {
      window.removeEventListener('scroll', onScroll)
      obs?.disconnect()
    }
  }, [])

  const visible = pastHero && !formInView

  return (
    <div className={`sticky-cta lp-sticky md:hidden ${visible ? 'is-visible' : ''}`} aria-hidden={!visible}>
      <a href="#lead-form" className="sticky-cta-main" tabIndex={visible ? 0 : -1}>
        <span>
          <span className="sticky-cta-kicker">Websites from ₹4,999</span>
          <span className="sticky-cta-title">Get a free callback</span>
        </span>
        <ArrowRight size={18} aria-hidden="true" />
      </a>
      <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="sticky-cta-wa" aria-label="Message us on WhatsApp" tabIndex={visible ? 0 : -1}>
        <MessageCircle size={20} aria-hidden="true" />
      </a>
    </div>
  )
}
