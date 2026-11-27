import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import FounderIntro from '@/components/ui/FounderIntro'
import { jobs, jobTitle, isShopifyJob } from '@/data/jobs'
import { outboundHref } from '@/lib/outbound'

// Shared by /contact and /book so both pages offer every way to reach us
// (form, call, teardown, WhatsApp, email, LinkedIn) and the same proof.

export const WHATSAPP_URL = outboundHref('whatsapp', `https://wa.me/916239269736?text=${encodeURIComponent('Hi Karam, I need help with my Shopify store.')}`)
export const EMAIL_URL = outboundHref('email', 'mailto:karam@miraclewebsoft.com?subject=Shopify%20project')
export const LINKEDIN_URL = outboundHref('linkedin', 'https://www.linkedin.com/in/ecommerce-experts/')

const platforms = [
  { name: 'Upwork', sub: 'Top Rated Plus', href: outboundHref('upwork', 'https://www.upwork.com/agencies/shopifyexpertsdevelopers/') },
  { name: 'Clutch', sub: 'Company profile', href: outboundHref('external', 'https://clutch.co/profile/miracle-websoft') },
  { name: 'Shopify Partners', sub: 'Official partner directory', href: outboundHref('shopify_partners', 'https://www.shopify.com/partners/directory/partner/miracle-websoft1') },
  { name: 'DesignRush', sub: 'Agency directory listing', href: outboundHref('external', 'https://www.designrush.com/agency/profile/miracle-websoft') },
]

export const contactCss = `
.contact-alt { border-top: 1px solid var(--text-1); }
.contact-alt a { display: grid; grid-template-columns: 1fr auto; gap: 1rem; align-items: center; padding: 1.1rem 0; border-bottom: 1px solid var(--border); }
.contact-alt a:hover { background: var(--bg-raised); }
.contact-alt strong { display: block; font-family: var(--font-playfair); font-weight: 400; font-size: 1.3rem; letter-spacing: -0.01em; color: var(--text-1); }
.contact-alt span { font-size: 0.9rem; color: var(--text-3); }
.contact-alt svg { color: var(--text-4); transition: color .15s ease, transform .15s ease; }
.contact-alt a:hover svg { color: var(--accent); transform: translateX(2px); }
.contact-direct { display: flex; flex-wrap: wrap; gap: 0.4rem 1.25rem; margin-top: 1.25rem; font-size: 0.9rem; color: var(--text-3); }
.contact-direct a { color: var(--text-1); text-decoration: underline; text-underline-offset: 3px; text-decoration-color: var(--border-hover); }
.contact-direct a:hover { text-decoration-color: var(--text-1); }
.contact-verified a { display: grid; grid-template-columns: 1fr auto; gap: 1rem; padding: 0.9rem 0; border-bottom: 1px solid var(--border); align-items: baseline; }
.contact-verified a:hover { background: var(--bg-raised); }
`

type Option = 'call' | 'brief' | 'teardown'

const OPTIONS: Record<Option, { href: string; title: string; sub: string }> = {
  call: { href: '/book', title: 'Prefer a call?', sub: 'Book 15 minutes with Karam. No pitch deck.' },
  brief: { href: '/contact', title: 'Prefer to write it down?', sub: 'Send a short brief. Fixed quote within 24 hours.' },
  teardown: { href: '/free-store-audit', title: 'Just want a quick look?', sub: 'Free 5-minute video teardown of your store in 48 hours.' },
}

/** "Or, if it's easier" block: every other way to reach us except the current page. */
export function ContactAlternatives({ exclude }: { exclude: Option }) {
  const opts = (Object.keys(OPTIONS) as Option[]).filter(k => k !== exclude)
  return (
    <div>
      <p className="mw-num" style={{ marginBottom: '0.75rem' }}>OR, IF IT&apos;S EASIER</p>
      <div className="contact-alt">
        {opts.map(k => (
          <Link key={k} href={OPTIONS[k].href}>
            <div><strong>{OPTIONS[k].title}</strong><span>{OPTIONS[k].sub}</span></div>
            <ArrowRight size={18} />
          </Link>
        ))}
      </div>
      <div className="contact-direct">
        <span>Or directly:</span>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">WhatsApp</a>
        <a href={EMAIL_URL}>karam@miraclewebsoft.com</a>
        <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </div>
  )
}

/** "What happens next" steps band. */
export function NextSteps({ heading, steps }: { heading: string; steps: { t: string; d: string }[] }) {
  return (
    <section className="mw-section" style={{ background: 'var(--bg-deep)' }}>
      <div className="mw-container">
        <p className="mw-eyebrow">What happens next</p>
        <h2 style={{ maxWidth: '22ch', marginBottom: '3rem' }}>{heading}</h2>
        <ol className="steps">
          {steps.map((s, i) => (
            <li key={s.t}>
              <span className="steps-time">Step 0{i + 1}</span>
              <h3 style={{ fontSize: '1.2rem' }}>{s.t}</h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-3)' }}>{s.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

/** Founder video, verified profiles and three Shopify reviews. */
export function ContactProof({ founderHeading }: { founderHeading: string }) {
  const reviews = jobs.filter(j => isShopifyJob(j) && j.review && j.rating === 5 && j.review.length > 80).slice(0, 3)
  return (
    <section className="mw-section">
      <div className="mw-container">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-16 items-start">
          <div>
            <p className="mw-eyebrow">Who you&apos;ll be talking to</p>
            <h2 style={{ maxWidth: '18ch', marginBottom: '1.5rem' }}>{founderHeading}</h2>
            <FounderIntro caption="" />
          </div>
          <div>
            <p className="mw-eyebrow">Verified on</p>
            <div className="contact-verified" style={{ borderTop: '1px solid var(--text-1)', marginTop: '1.5rem' }}>
              {platforms.map(p => (
                <a key={p.name} href={p.href} target="_blank" rel="noopener noreferrer">
                  <span><span style={{ fontWeight: 600, color: 'var(--text-1)' }}>{p.name}</span><span style={{ display: 'block', fontSize: '0.88rem', color: 'var(--text-3)' }}>{p.sub}</span></span>
                  <ArrowUpRight size={16} style={{ color: 'var(--text-4)' }} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <p className="mw-eyebrow" style={{ marginTop: '5rem' }}>From store owners we&apos;ve worked with</p>
        <div className="reviews" style={{ marginTop: '1.5rem' }}>
          {reviews.map(r => (
            <figure key={r.id} className="review">
              <div className="review-stars" aria-label="5 out of 5 stars">★★★★★</div>
              <blockquote>&ldquo;{r.review}&rdquo;</blockquote>
              <figcaption>
                <Link href={`/work/${r.id}`} className="review-project">{jobTitle(r)}</Link>
                <span className="mw-num">Upwork · {r.completedDate}</span>
              </figcaption>
            </figure>
          ))}
        </div>
        <Link href="/reviews" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', marginTop: '1.5rem', fontWeight: 600, fontSize: '0.92rem', color: 'var(--text-1)' }}>
          Read more client reviews <ArrowRight size={14} />
        </Link>
      </div>
    </section>
  )
}
