import type { Metadata } from 'next'
import Breadcrumb from '@/components/layout/Breadcrumb'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, ExternalLink, Star, Award } from 'lucide-react'
import TrustProfiles from '@/components/home/TrustProfiles'
import FounderIntro from '@/components/ui/FounderIntro'
import VideoTestimonialGrid from '@/components/ui/VideoTestimonialGrid'
import { clientVideos } from '@/data/videos'
import { breadcrumb, renderJsonLd, webPage } from '@/lib/jsonld'
import { outboundHref } from '@/lib/outbound'

export const metadata: Metadata = {
  title: 'About Miracle Websoft — Ecommerce Growth & AI Technology Agency',
  description: 'Miracle Websoft is an ecommerce growth and AI technology agency with 650+ projects and 15,000+ hours delivered. Shopify, CRO, speed, AI and custom web development.',
  alternates: { canonical: 'https://miraclewebsoft.com/about' },
}

const values = [
  'Ecommerce-first focus - Shopify, CRO, speed, AI automation and custom web development',
  'Business outcomes first — technical decisions tied to revenue and customer experience',
  'Performance matters — faster mobile pages, cleaner themes and fewer unnecessary scripts',
  'Direct communication — you work with the people responsible for delivery',
  'Careful implementation - data, tracking, APIs, workflows and launch details protected',
]

const stats = [
  { value: '650+', label: 'Projects Completed' },
  { value: '15k+', label: 'Hours Delivered' },
  { value: '10+', label: 'Years Experience' },
  { value: '16', label: 'Team Members' },
]

const certifications = [
  { name: 'Shopify Verified Partner', year: '2024', issuer: 'Shopify' },
  { name: 'Shopify Foundations Certified', year: '2023', issuer: 'Shopify' },
  { name: 'Upwork Top Rated Plus', year: '2020', issuer: 'Upwork' },
]

const testimonials = [
  {
    quote: 'I am happy to recommend Karam Singh, who runs a Shopify agency and is an expert Shopify developer. He has strong knowledge of Shopify development and always delivers quality work.',
    name: 'Satinder Singh',
    source: 'LinkedIn Recommendation',
  },
  {
    quote: 'Karam helped me out tremendously by recommending and installing a new theme and main page layout for my site. Very professional and responsive.',
    name: 'Susan D.',
    source: 'LinkedIn Recommendation',
  },
]


const jsonLd = renderJsonLd([
  webPage({
    name: 'About Miracle Websoft - ecommerce growth and AI technology agency',
    description:
      'Ecommerce growth and AI technology agency with 650+ projects, 15,000+ hours delivered and a 16-person team serving global clients since 2015.',
    url: 'https://miraclewebsoft.com/about',
    type: 'AboutPage',
  }),
  breadcrumb([
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about' },
  ]),
])

export default function AboutPage() {
  return (
    <div style={{ background: '#0a0a0a', minHeight: '100vh', paddingTop: '7rem' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      <div className="mw-container" style={{ paddingBottom: '5rem' }}>
        <div className="mb-8"><Breadcrumb items={[{ label: 'About' }]} /></div>

        {/* Hero — two-column layout to match the contact page (text + sticky card) */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-10 xl:gap-16 items-start mb-16">
          <div>
            <span className="mw-eyebrow">About Us</span>
            <h1 style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#fff', marginBottom: '1.5rem' }}>
              Ecommerce growth and AI<br /><em style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.5)' }}>technology partner.</em>
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '1.25rem', fontWeight: 300 }}>
              Miracle Websoft is an ecommerce growth and AI technology agency founded in 2015 by Karam Singh Mehra, based in Chandigarh, India. We help businesses across the USA, Canada, UK, Australia and Europe build Shopify stores, improve conversion, increase performance, automate operations with AI and develop custom software.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, fontWeight: 300 }}>
              650+ projects completed. 15,000+ hours delivered. Top Rated Plus status on Upwork. A team of 16 specialists who understand the practical problems businesses face: slow stores, low mobile conversion, manual operations, disconnected systems and custom requirements that off-the-shelf tools cannot solve.
            </p>
          </div>

          {/* Sticky stats + CTA card */}
          <div style={{ position: 'sticky', top: '7rem' }}>
            <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '20px', padding: '1.75rem' }}>
              <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: '1.25rem' }}>By the numbers</p>
              <div className="grid grid-cols-2 gap-x-4 gap-y-5">
                {stats.map(s => (
                  <div key={s.label}>
                    <div style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontSize: '2rem', fontWeight: 700, color: '#fff', lineHeight: 1, marginBottom: '0.3rem' }}>{s.value}</div>
                    <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.55)', fontWeight: 500, letterSpacing: '0.03em' }}>{s.label}</div>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="mw-btn-primary justify-center w-full" style={{ marginTop: '1.75rem' }}>
                Book Free Consultation <ArrowRight size={15} />
              </Link>
              <p style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)', textAlign: 'center', marginTop: '0.75rem' }}>
                Replies within 24 hours · no commitment
              </p>
            </div>
          </div>
        </div>

        {/* Values + Certifications */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-14">
          <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '20px', padding: '2rem' }}>
            <h2 style={{ fontSize: '1.05rem', fontWeight: 600, color: '#fff', marginBottom: '1.25rem' }}>What we stand for</h2>
            <ul className="flex flex-col gap-3">
              {values.map((v, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 size={15} className="shrink-0 mt-0.5" style={{ color: '#10B981' }} />
                  <span style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.6)' }}>{v}</span>
                </li>
              ))}
            </ul>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '20px', padding: '2rem' }}>
            <h2 style={{ fontSize: '1.05rem', fontWeight: 600, color: '#fff', marginBottom: '1.25rem' }}>Certifications</h2>
            <div className="flex flex-col gap-3">
              {certifications.map(c => (
                <div key={c.name} className="flex items-start gap-3">
                  <Award size={15} className="shrink-0 mt-0.5" style={{ color: 'var(--accent)' }} />
                  <div>
                    <div style={{ fontSize: '0.875rem', fontWeight: 500, color: '#fff' }}>{c.name}</div>
                    <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.6)' }}>{c.issuer} · {c.year}</div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
              <h3 style={{ fontSize: '0.85rem', fontWeight: 600, color: '#fff', marginBottom: '0.6rem' }}>Languages spoken</h3>
              <div className="flex gap-2 flex-wrap">
                {['English', 'Hindi', 'Punjabi'].map(l => (
                  <span key={l} style={{ fontSize: '0.75rem', padding: '0.25rem 0.65rem', borderRadius: '9999px', border: '1px solid rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.6)' }}>{l}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Founder */}
        <div className="mb-14">
          <p className="mw-eyebrow">The Founder</p>
          <h2 style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#fff', fontSize: 'clamp(22px,3vw,32px)', marginBottom: '1.5rem' }}>Meet the person<br /><em style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.6)' }}>behind the work.</em></h2>

          {/* Founder intro video */}
          <div style={{ maxWidth: '720px', marginBottom: '2rem' }}>
            <FounderIntro />
          </div>

          <div style={{ maxWidth: '720px', marginBottom: '2rem' }}>
            <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.02rem', lineHeight: 1.85, fontWeight: 300 }}>
              <p style={{ marginBottom: '1.1rem' }}>
                I grew up in a small village in India where &ldquo;IT&rdquo; meant data entry or a call-center job — that was the only kind of computer work anyone around me had heard of. After school I found a six-month course in website development and took it. That led to my first job at a small web company, then a second one where I could go deeper into programming.
              </p>
              <p style={{ marginBottom: '1.1rem' }}>
                What I noticed working there was that most clients walking in were quietly pushed toward pre-built templates, because real custom work felt out of budget. That gap bothered me, and it&apos;s the gap this company was built to fill.
              </p>
              <p style={{ marginBottom: '1.1rem' }}>
                My first attempts at running something on my own failed. The break came in an unexpected way. A friend who was sharing a room with me started bidding for freelance projects from our flat — he didn&apos;t have a laptop, so he used mine. I sat next to him in the evenings and watched how he wrote proposals, priced work, and handled clients. Eventually I made my own Upwork profile. Within a few days I landed my first job: ten dollars. He looked at me and said, <em style={{ color: 'rgba(255,255,255,0.85)' }}>&ldquo;You&apos;re lucky. It&apos;s hard to get hired on a new profile that fast.&rdquo;</em> I still remember that job more clearly than the larger ones — it was the first proof that a career could be built from a laptop in a small town.
              </p>
              <p style={{ marginBottom: '1.1rem' }}>
                I kept freelancing in the evenings while holding down my full-time job. The month my Upwork earnings crossed my salary, I quit. For a long stretch I did everything alone — sales, scoping, development, support, invoicing. Hiring only started when I couldn&apos;t keep up. The team has grown around the same idea I started with: useful Shopify work for real businesses, priced honestly, built by the people you actually speak with.
              </p>
              <p style={{ marginBottom: 0 }}>
                Ten years in, that&apos;s still the company. Over $400,000 earned on Upwork, hundreds of stores and ecommerce projects shipped, and the same instinct that made me leave a stable job in the first place — that good technical work should help the business, not confuse the owner.
              </p>
              <p style={{ marginTop: '1.25rem', fontStyle: 'italic', color: 'rgba(255,255,255,0.5)' }}>— Karam</p>
            </div>
          </div>

          <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '20px', padding: '2rem', maxWidth: '560px' }}>
            <div className="flex items-start gap-4">
              <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(108,99,255,0.15)', border: '1px solid rgba(108,99,255,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <span style={{ fontWeight: 700, color: 'var(--accent)', fontSize: '1.3rem' }}>K</span>
              </div>
              <div>
                <div style={{ fontWeight: 700, color: '#fff', fontSize: '1.05rem', marginBottom: '0.2rem' }}>Karam Singh Mehra</div>
                <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)', marginBottom: '0.75rem' }}>Founder & Lead Shopify Expert</div>
                <div className="flex items-center gap-1.5 mb-3">
                  <Star size={11} style={{ color: '#14a800' }} />
                  <span style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.6)' }}>Top Rated Plus · Shopify Verified Partner · 10+ years</span>
                </div>
                <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, fontWeight: 300, marginBottom: '1rem' }}>
                  Personally leads every project — clients work directly with him, not an account manager. Based in Chandigarh, India.
                </p>
                <div className="flex gap-3">
                  <a href={outboundHref('upwork', 'https://www.upwork.com/freelancers/~0108a0862ff3e2f2de')} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.75rem', color: 'rgba(255,255,255,0.6)', padding: '0.3rem 0.75rem', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '9999px' }} className="hover:text-white hover:border-white/30 transition-all">
                    <ExternalLink size={11} /> Upwork
                  </a>
                  <a href={outboundHref('linkedin', 'https://www.linkedin.com/in/ecommerce-experts/')} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.75rem', color: 'rgba(255,255,255,0.6)', padding: '0.3rem 0.75rem', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '9999px' }} className="hover:text-white hover:border-white/30 transition-all">
                    <ExternalLink size={11} /> LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-14">
          <p className="mw-eyebrow">Client Feedback</p>
          <h2 style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#fff', fontSize: 'clamp(22px,3vw,32px)', marginBottom: '1.5rem' }}>What clients say</h2>

          {/* Video reviews */}
          <div className="mb-6">
            <p style={{ fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', fontWeight: 600, marginBottom: '0.85rem' }}>
              ▶ On-camera reviews
            </p>
            <VideoTestimonialGrid videos={clientVideos.slice(0, 3)} theme="dark" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {testimonials.map((t, i) => (
              <div key={i} className="mw-card" style={{ padding: '2rem' }}>
                <div style={{ fontSize: '2rem', color: 'var(--accent)', lineHeight: 1, marginBottom: '1rem', fontFamily: 'Georgia, serif' }}>&ldquo;</div>
                <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, marginBottom: '1.25rem', fontWeight: 300, fontStyle: 'italic' }}>{t.quote}</p>
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '1rem' }}>
                  <div style={{ fontWeight: 600, color: '#fff', fontSize: '0.85rem' }}>{t.name}</div>
                  <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.6)' }}>{t.source}</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '1rem' }}>
            <a href={outboundHref('upwork', 'https://www.upwork.com/agencies/shopifyexpertsdevelopers/')} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.82rem', color: 'rgba(255,255,255,0.6)' }} className="hover:text-white transition-colors">
              <ExternalLink size={12} /> Read 600+ reviews on Upwork
            </a>
          </div>
        </div>

      </div>

      <TrustProfiles />

      <div className="mw-container" style={{ paddingTop: '3rem', paddingBottom: '5rem' }}>
        <Link href="/contact" className="mw-btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
          Book Free Consultation <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  )
}
