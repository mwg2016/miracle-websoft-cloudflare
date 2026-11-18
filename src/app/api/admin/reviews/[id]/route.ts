// Admin review moderation. Auth is enforced by src/middleware.ts for every
// /api/admin/* path (signed mw_admin cookie).

import { NextResponse } from 'next/server'
import { adminDeleteReview, adminGetReview, adminSetReply, adminSetStatus } from '@/lib/reviews/db'
import { REVIEW_LIMITS, type ReviewStatus } from '@/lib/reviews/types'

type Ctx = { params: Promise<{ id: string }> }

const STATUSES: ReviewStatus[] = ['pending', 'approved', 'rejected']

export async function PATCH(req: Request, { params }: Ctx) {
  const { id } = await params
  let body: { status?: string; reply?: string | null }
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ ok: false, error: 'Bad request' }, { status: 400 })
  }

  const existing = await adminGetReview(id)
  if (!existing) return NextResponse.json({ ok: false, error: 'Not found' }, { status: 404 })

  try {
    if (body.status !== undefined) {
      if (!STATUSES.includes(body.status as ReviewStatus)) {
        return NextResponse.json({ ok: false, error: 'Invalid status' }, { status: 400 })
      }
      await adminSetStatus(id, body.status as ReviewStatus)
    }
    if (body.reply !== undefined) {
      const reply = typeof body.reply === 'string' ? body.reply.trim().slice(0, REVIEW_LIMITS.reply) : ''
      await adminSetReply(id, reply || null)
    }
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[admin/reviews] update failed', err)
    return NextResponse.json({ ok: false, error: 'Update failed' }, { status: 500 })
  }
}

export async function DELETE(_req: Request, { params }: Ctx) {
  const { id } = await params
  try {
    await adminDeleteReview(id)
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[admin/reviews] delete failed', err)
    return NextResponse.json({ ok: false, error: 'Delete failed' }, { status: 500 })
  }
}
