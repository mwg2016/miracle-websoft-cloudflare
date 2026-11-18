import type { ReviewStatus } from '@/lib/reviews/types'

const STATUS_STYLE: Record<ReviewStatus, React.CSSProperties> = {
  pending: { background: 'rgba(245,158,11,0.12)', color: '#FBBF24', border: '1px solid rgba(245,158,11,0.3)' },
  approved: { background: 'rgba(16,185,129,0.12)', color: '#34D399', border: '1px solid rgba(16,185,129,0.3)' },
  rejected: { background: 'rgba(239,68,68,0.10)', color: '#F87171', border: '1px solid rgba(239,68,68,0.3)' },
}

export function StatusPill({ status }: { status: ReviewStatus }) {
  return (
    <span style={{
      ...STATUS_STYLE[status], fontSize: '0.68rem', fontWeight: 600, padding: '0.18rem 0.55rem', borderRadius: 999,
      textTransform: 'uppercase', letterSpacing: '0.06em', whiteSpace: 'nowrap',
    }}>{status}</span>
  )
}
