import type { IndustryPage } from '@/data/industries'
import Breadcrumb from '@/components/layout/Breadcrumb'
import IndustryHero from './IndustryHero'
import IndustryStats from './IndustryStats'
import PainPoints from './PainPoints'
import ServicesChecklist from './ServicesChecklist'
import FaqAccordion from './FaqAccordion'
import WhyUs from '@/components/home/WhyUs'
import ProcessSteps from '@/components/home/ProcessSteps'
import CtaBanner from '@/components/home/CtaBanner'

interface Props { industry: IndustryPage }

export default function IndustryLayout({ industry }: Props) {
  return (
    <>
      <div style={{ background: '#0a0a0a', paddingTop: '5.5rem', paddingBottom: '1rem' }}>
        <div className="mw-container">
          <Breadcrumb items={[{ label: 'Industries' }, { label: industry.title }]} />
        </div>
      </div>
      <IndustryHero industry={industry} />
      <IndustryStats stats={industry.stats} />
      <PainPoints painPoints={industry.painPoints} />
      <ServicesChecklist services={industry.services} />
      <WhyUs />
      <ProcessSteps />
      <FaqAccordion faqs={industry.faqs} />
      <CtaBanner />
    </>
  )
}
