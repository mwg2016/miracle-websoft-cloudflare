'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { trackLead } from '@/lib/analytics'

const CALENDLY = 'https://calendly.com/karam-4my/15-mints-discussion'

/**
 * Plain iframe instead of Calendly's widget.js: no third-party script on the
 * page, and the CSP only needs frame-src. Calendly still postMessages its
 * events to the parent, so a booked call is tracked as a lead.
 */
export default function CalendlyEmbed() {
  const router = useRouter()

  useEffect(() => {
    const onMessage = (e: MessageEvent) => {
      if (e.origin !== 'https://calendly.com') return
      const event = (e.data as { event?: string })?.event
      if (event === 'calendly.event_scheduled') {
        trackLead('lead_form_submit', { form: 'calendly', service: '15-min call' })
        router.push('/thank-you?form=call')
      }
    }
    window.addEventListener('message', onMessage)
    return () => window.removeEventListener('message', onMessage)
  }, [router])

  const src = `${CALENDLY}?embed_type=Inline&embed_domain=miraclewebsoft.com&hide_gdpr_banner=1&background_color=fbfaf6&text_color=17150f&primary_color=e04f25`

  return (
    <iframe
      src={src}
      title="Book a 15-minute call with Karam"
      loading="lazy"
      style={{ width: '100%', height: 720, border: 0, display: 'block' }}
    />
  )
}
