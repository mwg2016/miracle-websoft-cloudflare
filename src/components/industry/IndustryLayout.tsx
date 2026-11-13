import type { IndustryPage } from '@/data/industries'
import Breadcrumb from '@/components/layout/Breadcrumb'
import IndustryHero from './IndustryHero'
import PainPoints from './PainPoints'
import ServicesChecklist from './ServicesChecklist'
import FaqSection from '@/components/ui/FaqSection'
import WhyUs from '@/components/home/WhyUs'
import ProcessSteps from '@/components/home/ProcessSteps'
import ClientPortfolio from '@/components/home/ClientPortfolio'
import { industryStores } from '@/data/industryStores'

interface Props { industry: IndustryPage }

export default function IndustryLayout({ industry }: Props) {
  const stores = industryStores[industry.slug as keyof typeof industryStores]
  return (
    <>
      <div style={{ paddingTop: 'clamp(7.5rem, 11vw, 8.5rem)' }}>
        <div className="mw-container">
          <Breadcrumb items={[{ label: 'Industries', href: '/industries' }, { label: industry.title }]} />
        </div>
      </div>
      <IndustryHero industry={industry} />
      <PainPoints painPoints={industry.painPoints} />
      <ServicesChecklist services={industry.services} />
      <WhyUs />
      {stores && stores.length > 0 && (
        <ClientPortfolio
          stores={stores}
          eyebrow="Stores in this niche"
          heading={`${industry.title} stores on Shopify`}
        />
      )}
      <ProcessSteps />
      <FaqSection faqs={industry.faqs} heading={`${industry.title}: common questions`} />
    </>
  )
}
