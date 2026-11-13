import type { IndustryPage } from '@/data/industries'
interface Props { painPoints: IndustryPage['painPoints'] }
export default function PainPoints({ painPoints }: Props) {
  return (
    <section className="mw-section" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="mw-container grid lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-16">
        <div>
          <p className="mw-eyebrow">Where sales leak</p>
          <h2 style={{ maxWidth: '12ch' }}>Is your store losing money right now?</h2>
          <p style={{ marginTop: '1.25rem', maxWidth: '40ch' }}>
            The same problems come up again and again in this category. A free teardown tells you which ones apply to your store.
          </p>
        </div>
        <ol className="leaks">
          {painPoints.map((point, i) => (
            <li key={point.title}>
              <span className="mw-num" style={{ paddingTop: '0.35rem' }}>{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3>{point.title}</h3>
                <p>{point.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
