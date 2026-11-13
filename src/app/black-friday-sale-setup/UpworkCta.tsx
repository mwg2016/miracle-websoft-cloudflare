'use client'
import { useEffect, useState } from 'react'
import { ArrowRight, MessageCircle } from 'lucide-react'
import { outboundHref } from '@/lib/outbound'

// Same $150 package, listed on Upwork for buyers who want Upwork's escrow. Secondary option only.
export const UPWORK_URL = outboundHref(
  'upwork',
  'https://www.upwork.com/services/product/development-it-black-friday-sale-setup-for-shopify-store-landing-page-banner-discounts-1988947480012939725?ref=project_share',
)

export const BF_WHATSAPP =
  'https://wa.me/916239269736?text=Hi%20Miracle%20Websoft%2C%20I%20want%20help%20setting%20up%20my%20Black%20Friday%20sale.'

// Mobile sticky bar for the Black Friday page (the site-wide sticky CTA is hidden on this route).
// Appears after the hero and hides while the on-page form is on screen, so it never covers the form.
export default function BfStickyCta() {
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
    <div className={`sticky-cta md:hidden ${visible ? 'is-visible' : ''}`} aria-hidden={!visible}>
      <a href="#lead-form" className="sticky-cta-main" tabIndex={visible ? 0 : -1}>
        <span>
          <span className="sticky-cta-kicker">BFCM · $150 fixed · 48h</span>
          <span className="sticky-cta-title">Get my Black Friday plan</span>
        </span>
        <ArrowRight size={18} aria-hidden="true" />
      </a>
      <a
        href={BF_WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        className="sticky-cta-wa"
        aria-label="Message us on WhatsApp"
        tabIndex={visible ? 0 : -1}
      >
        <MessageCircle size={20} aria-hidden="true" />
      </a>
    </div>
  )
}
