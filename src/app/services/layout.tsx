import type { ReactNode } from 'react'

export default function ServicesLayout({ children }: { children: ReactNode }) {
  return <div className="mw-services-scope">{children}</div>
}
