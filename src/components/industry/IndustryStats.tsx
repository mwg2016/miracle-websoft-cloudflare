import type { IndustryPage } from '@/data/industries'
interface Props { stats: IndustryPage['stats'] }
export default function IndustryStats({ stats }: Props) {
  return (
    <section style={{ background: '#080808', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)', paddingTop: '4rem', paddingBottom: '4rem' }}>
      <div className="mw-container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontSize: 'clamp(2rem,3.5vw,3rem)', fontWeight: 600, color: '#fff', lineHeight: 1, marginBottom: '0.5rem' }}>{stat.value}</div>
              <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.4)', lineHeight: 1.5 }}>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
