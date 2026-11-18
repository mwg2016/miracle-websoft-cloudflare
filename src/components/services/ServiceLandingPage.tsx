import FaqSection from '@/components/ui/FaqSection'
import ServiceContactForm from '@/components/services/ServiceContactForm'
import ServiceResult from '@/components/services/ServiceResult'
import RelatedServices from '@/components/services/RelatedServices'
import MidPageCta from '@/components/services/MidPageCta'
import ServiceHero, { HeroSteps, NumberedList, QuoteSection, SectionHead, TEARDOWN_CTA, BOOK_CTA } from '@/components/services/ServiceHero'
import type { ServiceLandingData } from '@/data/ai-services'

type BreadcrumbItem = { label: string; href?: string }
type Cta = { label: string; href: string }

type Props = {
  data: ServiceLandingData
  breadcrumbItems: BreadcrumbItem[]
  /** @deprecated colour is now set by the design system; kept for compatibility. */
  accent?: string
  /** @deprecated use primaryCta. */
  primaryCtaLabel?: string
  /** @deprecated use secondaryCta. */
  secondaryCtaLabel?: string
  /** @deprecated use secondaryCta. */
  secondaryCtaHref?: string
  primaryCta?: Cta
  secondaryCta?: Cta | null
  deliverablesIntro?: string
  midCta?: { heading: string; sub: string; btnLabel?: string; btnHref?: string; secondary?: Cta | null }
  urlLabel?: string
  urlPlaceholder?: string
  messageLabel?: string
  messagePlaceholder?: string
}

export default function ServiceLandingPage({
  data,
  breadcrumbItems,
  primaryCta = TEARDOWN_CTA,
  secondaryCta = BOOK_CTA,
  deliverablesIntro = 'Each project is scoped around one measurable outcome. You get the implementation, the documentation and a clear support path after launch.',
  midCta = {
    heading: 'Want to see where your store is losing orders first?',
    sub: 'Send your URL. Within 48 hours you get a short screen recording of the biggest problems, ranked by likely impact.',
  },
  urlLabel = 'Website or workflow URL',
  urlPlaceholder = 'yourcompany.com, store URL or tool name',
  messageLabel = 'What should this service help you improve?',
  messagePlaceholder = 'Example: we need to automate support triage, connect OpenAI to our product data, or build an AI internal tool for operations.',
}: Props) {
  return (
    <>
      <ServiceHero
        breadcrumbItems={breadcrumbItems}
        eyebrow={data.eyebrow}
        title={data.h1}
        lede={data.subtext}
        bullets={data.benefits.slice(0, 3)}
        primary={primaryCta}
        secondary={secondaryCta}
        aside={<HeroSteps steps={data.process.slice(0, 3)} />}
      />

      {/* Problem → approach */}
      <section className="mw-section">
        <div className="mw-container grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          <div>
            <p className="mw-num" style={{ marginBottom: '1rem' }}>THE PROBLEM</p>
            <h2 style={{ fontSize: 'clamp(26px,3vw,38px)', marginBottom: '1rem' }}>{data.problem.title}</h2>
            <p style={{ fontSize: '1.02rem', maxWidth: '52ch' }}>{data.problem.body}</p>
          </div>
          <div className="lg:border-l lg:pl-16" style={{ borderColor: 'var(--border)' }}>
            <p className="mw-num" style={{ marginBottom: '1rem', color: 'var(--accent)' }}>WHAT WE DO ABOUT IT</p>
            <h2 style={{ fontSize: 'clamp(26px,3vw,38px)', marginBottom: '1rem' }}>{data.solution.title}</h2>
            <p style={{ fontSize: '1.02rem', maxWidth: '52ch' }}>{data.solution.body}</p>
          </div>
        </div>
      </section>

      {/* Outcomes + deliverables */}
      <section className="mw-section" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="mw-container grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-16">
          <div>
            <p className="mw-eyebrow">What you get</p>
            <h2 style={{ fontSize: 'clamp(28px,3.4vw,44px)', marginBottom: '1rem' }}>Outcomes, and what we hand over.</h2>
            <p style={{ fontSize: '1rem', maxWidth: '44ch' }}>{deliverablesIntro}</p>
            <ul className="offer-list">
              {data.benefits.map((b) => <li key={b}>{b}</li>)}
            </ul>
          </div>
          <div>
            <p className="mw-num" style={{ marginBottom: '1rem' }}>DELIVERABLES</p>
            <NumberedList items={data.deliverables.map((d) => ({ title: d }))} columns={2} />
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="mw-section" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="mw-container">
          <SectionHead eyebrow="Process" title="How the work runs, start to finish." />
          <ol className="steps">
            {data.process.map((step, i) => (
              <li key={step.title}>
                <span className="steps-time">Step {String(i + 1).padStart(2, '0')}</span>
                <h3>{step.title}</h3>
                <p style={{ fontSize: '0.93rem' }}>{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {data.technologies && data.technologies.length > 0 && (
        <section className="mw-section" style={{ borderTop: '1px solid var(--border)' }}>
          <div className="mw-container">
            <SectionHead eyebrow="Stack" title="Technologies we work with." />
            <dl className="tech-groups">
              {data.technologies.map((t) => (
                <div key={t.group}>
                  <dt>{t.group}</dt>
                  <dd>{t.items.map((i) => <span key={i} className="rv-chip">{i}</span>)}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      )}

      {/* Proof */}
      {data.caseStudy && (
      <section className="mw-section" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="mw-container">
          <SectionHead eyebrow="Example project" title="What this looks like in practice." />
          <ServiceResult
            tag={data.caseStudy!.tag}
            metric={data.caseStudy!.metric}
            metricLabel={data.caseStudy!.metricLabel}
            title={data.caseStudy!.title}
            bullets={data.caseStudy!.bullets}
            duration={data.caseStudy!.duration}
            cta={{ label: 'See more work', href: '/work' }}
          />
        </div>
      </section>
      )}

      <MidPageCta {...midCta} />

      <FaqSection faqs={data.faqs} heading="Common questions" />

      <RelatedServices services={data.related} />

      <QuoteSection
        title="Tell us what it needs to do."
        body="You don't need a perfect brief. Send the messy version: the tools involved, the manual steps today, the goal and any deadline. You'll get a practical scope and a fixed price within one business day."
      >
        <ServiceContactForm
          service={data.h1}
          heading={data.formHeading}
          subtext={data.formSubtext}
          urlLabel={urlLabel}
          urlPlaceholder={urlPlaceholder}
          messageLabel={messageLabel}
          messagePlaceholder={messagePlaceholder}
          buttonLabel="Request a scope"
          proofPoints={['Reply within 24 hours', 'Fixed-price proposal', 'No sales sequence']}
        />
      </QuoteSection>
    </>
  )
}
