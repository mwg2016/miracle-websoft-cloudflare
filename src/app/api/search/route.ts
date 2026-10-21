import { NextResponse } from 'next/server'
import { searchSite } from '@/lib/site-search'

const LIMIT = 6
const SECONDARY_LIMIT = 2
const SECONDARY_TYPES = new Set(['Project', 'Blog post'])

// Live suggestions for the header search box, in relevance order. Duplicate titles
// are dropped and blog posts / projects are capped so main pages stay visible.
export async function GET(req: Request) {
  const q = (new URL(req.url).searchParams.get('q') ?? '').trim().slice(0, 100)
  if (!q) return NextResponse.json({ results: [] })

  const seenTitles = new Set<string>()
  let secondary = 0
  const results = searchSite(q, 60)
    .filter(r => {
      if (seenTitles.has(r.title)) return false
      seenTitles.add(r.title)
      if (SECONDARY_TYPES.has(r.type)) return ++secondary <= SECONDARY_LIMIT
      return true
    })
    .slice(0, LIMIT)
    .map(({ title, href, type }) => ({ title, href, type }))

  return NextResponse.json({ results }, { headers: { 'Cache-Control': 'public, max-age=300' } })
}
