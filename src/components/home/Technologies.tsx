import { Bot, Code2, Database, PanelsTopLeft, ShoppingBag, Workflow } from 'lucide-react'

const groups = [
  {
    icon: ShoppingBag,
    title: 'Ecommerce',
    items: ['Shopify', 'Shopify Plus', 'Liquid', 'Hydrogen', 'WooCommerce', 'Shopify APIs'],
  },
  {
    icon: Bot,
    title: 'AI',
    items: ['OpenAI', 'AI chatbots', 'AI agents', 'Workflow automation', 'Content automation', 'Support automation'],
  },
  {
    icon: Code2,
    title: 'Web Apps',
    items: ['React', 'Next.js', 'Node.js', 'Laravel', 'TypeScript', 'Tailwind CSS'],
  },
  {
    icon: Database,
    title: 'Data & APIs',
    items: ['REST APIs', 'GraphQL', 'Webhooks', 'PostgreSQL', 'MySQL', 'Airtable'],
  },
  {
    icon: Workflow,
    title: 'Growth Stack',
    items: ['Klaviyo', 'Gorgias', 'Yotpo', 'ReCharge', 'Meta CAPI', 'Google Analytics'],
  },
  {
    icon: PanelsTopLeft,
    title: 'Business Tools',
    items: ['CRMs', 'ERPs', 'Admin panels', 'Client portals', 'Dashboards', 'Internal tools'],
  },
]

export default function Technologies() {
  return (
    <section style={{ background: '#0a0a0a', paddingTop: '5rem', paddingBottom: '5rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="mw-container">
        <div className="mw-section-header">
          <span className="mw-eyebrow">Technologies</span>
          <h2 style={{ color: '#fff' }}>The stack behind<br /><em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>stores, AI and software.</em></h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', marginTop: '1rem', fontSize: '0.95rem', fontWeight: 300, maxWidth: '620px' }}>
            We choose tools for reliability, maintainability and business fit, not for trend value.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {groups.map(({ icon: Icon, ...group }) => (
            <div key={group.title} className="mw-card" style={{ padding: '1.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <span style={{ width: 38, height: 38, borderRadius: 10, background: 'rgba(108,99,255,0.12)', border: '1px solid rgba(108,99,255,0.22)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Icon size={17} style={{ color: 'var(--accent)' }} />
                </span>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#fff' }}>{group.title}</h3>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                {group.items.map((item) => (
                  <span key={item} className="mw-pill" style={{ fontSize: '0.72rem', padding: '0.32rem 0.65rem' }}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
