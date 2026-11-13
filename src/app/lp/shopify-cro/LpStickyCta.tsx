'use client'
import { useEffect, useState } from 'react'
import { ArrowRight } from 'lucide-react'

// Mobile sticky CTA for the paid landing page: scrolls to the on-page form instead of leaving the page.
// Hidden until past the hero, and while the form itself is on screen.
export default function LpStickyCta() {
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
          <span className="sticky-cta-kicker">Free · 48h · no card</span>
          <span className="sticky-cta-title">Get my free CRO review</span>
        </span>
        <ArrowRight size={18} aria-hidden="true" />
      </a>
    </div>
  )
}
