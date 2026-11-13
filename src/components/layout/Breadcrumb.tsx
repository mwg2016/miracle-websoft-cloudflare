import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

interface BreadcrumbItem { label: string; href?: string }
interface Props { items: BreadcrumbItem[] }

export default function Breadcrumb({ items }: Props) {
  return (
    <nav className="flex items-center gap-1.5 text-sm flex-wrap" style={{ color: 'rgb(var(--ink-rgb) / 0.6)' }}>
      <Link href="/" style={{ color: 'rgb(var(--ink-rgb) / 0.6)' }} className="hover:text-[var(--text-1)] transition-colors">Home</Link>
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-1.5">
          <ChevronRight size={11} />
          {item.href
            ? <Link href={item.href} style={{ color: 'rgb(var(--ink-rgb) / 0.6)' }} className="hover:text-[var(--text-1)] transition-colors">{item.label}</Link>
            : <span style={{ color: 'rgb(var(--ink-rgb) / 0.6)' }}>{item.label}</span>
          }
        </span>
      ))}
    </nav>
  )
}
