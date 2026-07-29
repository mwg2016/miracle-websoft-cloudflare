import Link from 'next/link'
import { ArrowRight, CheckCircle2, CircleAlert, ClipboardCheck, Sparkles } from 'lucide-react'
import Breadcrumb from '@/components/layout/Breadcrumb'
import FaqSection from '@/components/ui/FaqSection'
import ServiceContactForm from '@/components/services/ServiceContactForm'
import ServiceResult from '@/components/services/ServiceResult'
import RelatedServices from '@/components/services/RelatedServices'
import type { ServiceLandingData } from '@/data/ai-services'

type BreadcrumbItem = { label: string; href?: string }

type Props = {
  data: ServiceLandingData
  breadcrumbItems: BreadcrumbItem[]
  accent?: string
  primaryCtaLabel?: string
  secondaryCtaLabel?: string
  secondaryCtaHref?: string
  urlLabel?: string
  urlPlaceholder?: string
  messageLabel?: string
  messagePlaceholder?: string
}

export default function ServiceLandingPage({
  data,
  breadcrumbItems,
  accent = '#6C63FF',
  primaryCtaLabel = 'Book Free Consultation',
  secondaryCtaLabel = 'View Our Work',
  secondaryCtaHref = '/work',
  urlLabel = 'Website or workflow URL',
  urlPlaceholder = 'yourcompany.com, store URL or tool name',
  messageLabel = 'What should this service help you improve?',
  messagePlaceholder = 'Example: we need to automate support triage, connect OpenAI to our product data, or build an AI internal tool for operations.',
}: Props) {
  return (
    <>
      <section className="pt-32 pb-20" style={{ background: '#0a0a0a', backgroundImage: `linear-gradient(135deg, ${accent}16 0%, transparent 42%), linear-gradient(315deg, rgba(16,185,129,0.08) 0%, transparent 36%)` }}>
        <div className="mw-container">
          <div className="mb-6">
            <Breadcrumb items={breadcrumbItems} />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_360px] gap-10 items-end">
            <div className="max-w-3xl">
              <span className="mw-eyebrow">{data.eyebrow}</span>
              <h1 className="mw-hero-title" style={{ color: '#fff', marginBottom: '1.1rem' }}>
                {data.h1}
              </h1>
              <p style={{ color: 'rgba(255,255,255,0.68)', fontSize: '1.05rem', lineHeight: 1.72, marginBottom: '1.35rem', maxWidth: '680px', fontWeight: 300 }}>
                {data.subtext}
              </p>
              <div className="flex flex-wrap gap-x-5 gap-y-2 mb-7">
                {data.benefits.slice(0, 4).map((benefit) => (
                  <span key={benefit} className="flex items-center gap-1.5" style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.62)', fontWeight: 500 }}>
                    <CheckCircle2 size={13} style={{ color: '#10B981' }} /> {benefit}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <a href="#get-quote" className="mw-btn-primary">
                  {primaryCtaLabel} <ArrowRight size={16} />
                </a>
                <Link href={secondaryCtaHref} className="mw-btn-outline">
                  {secondaryCtaLabel}
                </Link>
              </div>
            </div>

            <aside className="mw-card" style={{ padding: '1.25rem' }} aria-label="Service engagement path">
              <p style={{ fontSize: '0.68rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: accent, fontWeight: 700, marginBottom: '0.8rem' }}>
                How this starts
              </p>
              <div className="flex flex-col">
                {data.process.slice(0, 3).map((step, index) => (
                  <div key={step.title} className="flex gap-3" style={{ padding: '0.85rem 0', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
                    <span style={{ width: 28, height: 28, borderRadius: 999, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: `${accent}18`, border: `1px solid ${accent}30`, color: accent, fontSize: '0.72rem', fontWeight: 800, flexShrink: 0 }}>
                      {index + 1}
                    </span>
                    <span>
                      <span style={{ display: 'block', color: '#fff', fontSize: '0.88rem', fontWeight: 700, lineHeight: 1.35 }}>{step.title}</span>
                      <span style={{ display: 'block', color: 'rgba(255,255,255,0.5)', fontSize: '0.74rem', lineHeight: 1.5, marginTop: '0.2rem' }}>{step.body}</span>
                    </span>
                  </div>
                ))}
              </div>
              <a href="#get-quote" className="mw-btn-outline justify-center w-full" style={{ marginTop: '0.8rem', padding: '0.78rem 1rem', fontSize: '0.82rem' }}>
                Send details <ArrowRight size={14} />
              </a>
            </aside>
          </div>
        </div>
      </section>

      <section style={{ background: '#080808', paddingTop: '5rem', paddingBottom: '5rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="mw-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div className="mw-card" style={{ padding: '2rem' }}>
              <div style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(239,68,68,0.10)', border: '1px solid rgba(239,68,68,0.22)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.2rem' }}>
                <CircleAlert size={20} style={{ color: '#F87171' }} />
              </div>
              <p style={{ fontSize: '0.7rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', fontWeight: 700, marginBottom: '0.6rem' }}>Problem</p>
              <h2 style={{ fontFamily: 'var(--font-sans), system-ui, sans-serif', fontSize: '1.35rem', fontWeight: 700, color: '#fff', marginBottom: '0.85rem', lineHeight: 1.25 }}>
                {data.problem.title}
              </h2>
              <p style={{ fontSize: '0.92rem', color: 'rgba(255,255,255,0.58)', lineHeight: 1.75, fontWeight: 300 }}>
                {data.problem.body}
              </p>
            </div>
            <div className="mw-card" style={{ padding: '2rem' }}>
              <div style={{ width: 44, height: 44, borderRadius: 12, background: `${accent}18`, border: `1px solid ${accent}35`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.2rem' }}>
                <Sparkles size={20} style={{ color: accent }} />
              </div>
              <p style={{ fontSize: '0.7rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', fontWeight: 700, marginBottom: '0.6rem' }}>Solution</p>
              <h2 style={{ fontFamily: 'var(--font-sans), system-ui, sans-serif', fontSize: '1.35rem', fontWeight: 700, color: '#fff', marginBottom: '0.85rem', lineHeight: 1.25 }}>
                {data.solution.title}
              </h2>
              <p style={{ fontSize: '0.92rem', color: 'rgba(255,255,255,0.58)', lineHeight: 1.75, fontWeight: 300 }}>
                {data.solution.body}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: '#0a0a0a', paddingTop: '5rem', paddingBottom: '5rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="mw-container">
          <div style={{ marginBottom: '2.5rem' }}>
            <span className="mw-eyebrow">Benefits</span>
            <h2 style={{ color: '#fff', fontSize: 'clamp(26px,3.5vw,42px)' }}>Business outcomes this service supports</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-4xl">
            {data.benefits.map((benefit) => (
              <div key={benefit} className="flex items-start gap-3 mw-card" style={{ padding: '1rem 1.25rem' }}>
                <CheckCircle2 size={15} className="shrink-0 mt-0.5" style={{ color: '#10B981' }} />
                <span style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.7)' }}>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: '#080808', paddingTop: '5rem', paddingBottom: '5rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="mw-container">
          <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-10 items-start">
            <div>
              <span className="mw-eyebrow">Deliverables</span>
              <h2 style={{ color: '#fff', fontSize: 'clamp(26px,3.5vw,42px)', marginBottom: '1rem' }}>What we build and hand over</h2>
              <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.95rem', lineHeight: 1.75, fontWeight: 300 }}>
                Each project is scoped around a measurable workflow, not vague AI experimentation. You get the implementation, documentation and support path needed to use it.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {data.deliverables.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl" style={{ padding: '1rem 1.1rem', background: 'rgba(255,255,255,0.035)', border: '1px solid rgba(255,255,255,0.07)' }}>
                  <ClipboardCheck size={15} className="shrink-0 mt-0.5" style={{ color: accent }} />
                  <span style={{ fontSize: '0.84rem', color: 'rgba(255,255,255,0.68)', lineHeight: 1.55 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: '#0a0a0a', paddingTop: '5rem', paddingBottom: '5rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="mw-container">
          <div style={{ marginBottom: '2.5rem' }}>
            <span className="mw-eyebrow">Process</span>
            <h2 style={{ color: '#fff', fontSize: 'clamp(26px,3.5vw,42px)' }}>A practical path from idea to launch</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {data.process.map((step, index) => (
              <div key={step.title} className="mw-card" style={{ padding: '1.5rem' }}>
                <span style={{ display: 'inline-flex', width: 34, height: 34, borderRadius: '50%', alignItems: 'center', justifyContent: 'center', background: `${accent}18`, border: `1px solid ${accent}35`, color: accent, fontSize: '0.78rem', fontWeight: 800, marginBottom: '1rem' }}>
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 style={{ fontSize: '0.98rem', fontWeight: 700, color: '#fff', marginBottom: '0.55rem' }}>{step.title}</h3>
                <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.56)', lineHeight: 1.7, fontWeight: 300 }}>{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: '#080808', paddingTop: '5rem', paddingBottom: '5rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="mw-container">
          <div style={{ marginBottom: '1rem' }}>
            <span className="mw-eyebrow">Case Study</span>
          </div>
          <ServiceResult
            tag={data.caseStudy.tag}
            tagColor={accent}
            metric={data.caseStudy.metric}
            metricLabel={data.caseStudy.metricLabel}
            title={data.caseStudy.title}
            bullets={data.caseStudy.bullets}
            duration={data.caseStudy.duration}
            cta={{ label: 'View more work', href: '/work' }}
          />
        </div>
      </section>

      <div style={{ background: '#0a0a0a', paddingTop: '4rem' }}>
        <div className="mw-container" style={{ paddingBottom: '1rem' }}>
          <div className="rounded-2xl px-6 py-6 sm:px-8 sm:py-7" style={{ background: `${accent}12`, border: `1px solid ${accent}28` }}>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5">
              <div>
                <p style={{ fontSize: '0.74rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: accent, marginBottom: '0.5rem' }}>Next step</p>
                <h2 style={{ fontFamily: 'var(--font-sans), system-ui, sans-serif', fontSize: '1.3rem', fontWeight: 700, color: '#fff', marginBottom: '0.35rem' }}>
                  Want to know if this is worth building?
                </h2>
                <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.60)', lineHeight: 1.6 }}>
                  Send the workflow, store URL or product idea. We will reply with a practical scope and the fastest useful first version.
                </p>
              </div>
              <a href="#get-quote" className="mw-btn-primary whitespace-nowrap">
                Get a Plan <ArrowRight size={15} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <FaqSection faqs={data.faqs} heading={`${data.h1} - common questions`} />

      <RelatedServices services={data.related} />

      <section id="get-quote" style={{ background: '#080808', paddingTop: '5rem', paddingBottom: '6rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="mw-container">
          <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-12 items-start">
            <div>
              <span className="mw-eyebrow">Start with a clear scope</span>
              <h2 style={{ color: '#fff', fontSize: 'clamp(28px,4vw,44px)', marginBottom: '1.25rem', lineHeight: 1.15 }}>
                Tell us what the system<br />
                needs to do.
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.58)', fontSize: '1rem', lineHeight: 1.8, fontWeight: 300, marginBottom: '2rem' }}>
                You do not need a perfect brief. Send the messy version: tools involved, current manual steps, business goal and any deadline. We will turn it into a practical plan.
              </p>
              <div className="grid grid-cols-2 gap-3 max-w-md">
                {[
                  { stat: '650+', label: 'projects completed' },
                  { stat: '15k+', label: 'hours delivered' },
                  { stat: '24h', label: 'response time' },
                  { stat: 'Global', label: 'clients served' },
                ].map((item) => (
                  <div key={item.label} style={{ padding: '1rem', borderRadius: 12, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
                    <div style={{ color: '#fff', fontWeight: 800, fontSize: '1.25rem', lineHeight: 1 }}>{item.stat}</div>
                    <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.72rem', marginTop: '0.25rem' }}>{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mw-card" style={{ padding: '2.25rem' }}>
              <ServiceContactForm
                service={data.h1}
                heading={data.formHeading}
                subtext={data.formSubtext}
                urlLabel={urlLabel}
                urlPlaceholder={urlPlaceholder}
                messageLabel={messageLabel}
                messagePlaceholder={messagePlaceholder}
                buttonLabel="Request My Plan"
                proofPoints={['Responds within 24 hours', 'AI and ecommerce experience', 'Fixed-price proposal']}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
