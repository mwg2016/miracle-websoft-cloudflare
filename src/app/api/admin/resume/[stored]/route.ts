// Download a resume file for an applicant. Gated by middleware
// (signed admin cookie required); auth not re-checked here.

import { NextResponse } from 'next/server'
import { promises as fs } from 'node:fs'
import { resumePath } from '@/lib/admin/store'

export const runtime = 'nodejs'

export async function GET(_req: Request, { params }: { params: Promise<{ stored: string }> }) {
  const { stored } = await params
  // Disallow path-traversal: filename must match the stored convention.
  if (!/^[a-zA-Z0-9._-]+$/.test(stored)) {
    return NextResponse.json({ error: 'Bad filename' }, { status: 400 })
  }
  try {
    const buf = await fs.readFile(resumePath(stored))
    return new NextResponse(buf as unknown as BodyInit, {
      headers: {
        'Content-Type': 'application/octet-stream',
        'Content-Disposition': `attachment; filename="${stored.replace(/^[0-9a-f-]+_/, '')}"`,
      },
    })
  } catch {
    return NextResponse.json({ error: 'Not found' }, { status: 404 })
  }
}
