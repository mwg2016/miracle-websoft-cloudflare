import { NextResponse, after } from 'next/server'
import { insertReview, recentSubmissionsFromIp } from '@/lib/reviews/db'
import { REVIEW_LIMITS, REVIEW_SERVICES } from '@/lib/reviews/types'
import { sendEmail } from '@/lib/email'

const MAX_PER_IP_PER_DAY = 3
const MIN_FILL_MS = 4000 // bots submit instantly

function clientIp(req: Request): string {
  return (
    req.headers.get('cf-connecting-ip') ??
    req.headers.get('x-forwarded-for')?.split(',')[0].trim() ??
    req.headers.get('x-real-ip') ??
    'unknown'
  )
}

function str(v: unknown, max: number): string {
  return typeof v === 'string' ? v.replace(/\r\n/g, '\n').replace(/\n{3,}/g, '\n\n').trim().slice(0, max) : ''
}

function esc(s: string): string {
  return s.replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]!))
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

function bad(error: string) {
  return NextResponse.json({ ok: false, error }, { status: 400 })
}

export async function POST(req: Request) {
  let raw: Record<string, unknown>
  try {
    raw = await req.json()
  } catch {
    return bad('Bad request')
  }

  // Honeypot / too-fast submit: pretend success so bots don't retry.
  if (raw._hp || (typeof raw._t === 'number' && raw._t < MIN_FILL_MS)) {
    return NextResponse.json({ ok: true })
  }

  const rating = Number(raw.rating)
  const title = str(raw.title, REVIEW_LIMITS.title)
  const body = str(raw.body, REVIEW_LIMITS.bodyMax)
  const name = str(raw.name, REVIEW_LIMITS.name)
  const email = str(raw.email, REVIEW_LIMITS.email).toLowerCase()
  const company = str(raw.company, REVIEW_LIMITS.company) || undefined
  const website = str(raw.website, REVIEW_LIMITS.website) || undefined
  const country = str(raw.country, REVIEW_LIMITS.country) || undefined
  const serviceRaw = str(raw.service, 80)
  const service = (REVIEW_SERVICES as readonly string[]).includes(serviceRaw) ? serviceRaw : undefined

  if (!Number.isInteger(rating) || rating < 1 || rating > 5) return bad('Please choose a star rating.')
  if (body.length < REVIEW_LIMITS.bodyMin) return bad(`Please write at least ${REVIEW_LIMITS.bodyMin} characters.`)
  if (!title) return bad('Please add a title.')
  if (!name) return bad('Please add your name.')
  if (!EMAIL_RE.test(email)) return bad('Please enter a valid email.')
  if (raw.consent !== true) return bad('Please confirm the review is genuine.')
  if ((body.match(/https?:\/\//g) ?? []).length > 2) return bad('Please remove links from your review.')

  const ip = clientIp(req)
  try {
    if (ip !== 'unknown' && (await recentSubmissionsFromIp(ip)) >= MAX_PER_IP_PER_DAY) {
      return NextResponse.json({ ok: false, error: 'Too many reviews submitted. Please try again tomorrow.' }, { status: 429 })
    }

    const review = await insertReview({
      rating, title, body, name, email, company, website, country, service,
      ip, userAgent: req.headers.get('user-agent')?.slice(0, 300) ?? undefined,
    })

    after(async () => {
      const to = process.env.ADMIN_NOTIFY_EMAIL
      const from = process.env.BREVO_FROM_EMAIL
      if (!to || !from) return
      const adminUrl = `https://miraclewebsoft.com/admin/reviews/${review.id}`
      try {
        await sendEmail({
          from: `"Miracle Websoft Site" <${from}>`,
          to,
          replyTo: email,
          subject: `New ${rating}★ review awaiting approval from ${name}`,
          text: [
            `Rating: ${rating}/5`, `Title: ${title}`, `Name: ${name}`, `Email: ${email}`,
            company ? `Company: ${company}` : '', website ? `Website: ${website}` : '', country ? `Country: ${country}` : '',
            service ? `Service: ${service}` : '', '', body, '', `Approve or reject: ${adminUrl}`,
          ].filter(Boolean).join('\n'),
          html: `
            <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px">
              <p style="margin:0 0 6px;font-size:12px;letter-spacing:.08em;text-transform:uppercase;color:#888">New review · pending approval</p>
              <h2 style="margin:0 0 6px;font-size:20px;color:#111">${'★'.repeat(rating)}${'☆'.repeat(5 - rating)} ${esc(title)}</h2>
              <p style="margin:0 0 16px;font-size:14px;color:#555">${esc(name)} · ${esc(email)}${company ? ` · ${esc(company)}` : ''}${country ? ` · ${esc(country)}` : ''}</p>
              ${website ? `<p style="margin:0 0 8px;font-size:14px;color:#555">Website: ${esc(website)}</p>` : ''}
              ${service ? `<p style="margin:0 0 8px;font-size:14px;color:#555">Service: ${esc(service)}</p>` : ''}
              <div style="padding:16px;background:#f5f5f5;border-radius:8px;font-size:14px;line-height:1.7;color:#111;white-space:pre-wrap">${esc(body)}</div>
              <p style="margin-top:20px"><a href="${adminUrl}" style="display:inline-block;background:#E04F25;color:#fff;padding:10px 18px;border-radius:6px;text-decoration:none;font-weight:600">Review in admin</a></p>
            </div>`,
        })
      } catch (err) {
        console.error('[reviews] notify email failed', err)
      }
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[reviews] submit failed', err)
    return NextResponse.json(
      { ok: false, error: 'We could not save your review right now. Please try again later or reach us via the contact page.' },
      { status: 500 },
    )
  }
}
