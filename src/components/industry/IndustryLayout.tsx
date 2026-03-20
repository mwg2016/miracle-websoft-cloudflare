import type { IndustryPage } from '@/data/industries'
import Breadcrumb from '@/components/layout/Breadcrumb'
import IndustryHero from './IndustryHero'
import IndustryStats from './IndustryStats'
import PainPoints from './PainPoints'
import ServicesChecklist from './ServicesChecklist'
import FaqSection from '@/components/ui/FaqSection'
import WhyUs from '@/components/home/WhyUs'
import ProcessSteps from '@/components/home/ProcessSteps'
import ClientPortfolio from '@/components/home/ClientPortfolio'
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
      <ClientPortfolio />
      <ProcessSteps />
      <FaqSection faqs={industry.faqs} heading={`${industry.title} — common questions`} />
      <CtaBanner />
    </>
  )
}
