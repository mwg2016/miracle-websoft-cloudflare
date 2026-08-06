import { NextRequest } from 'next/server'
import { sendEmail } from '@/lib/email'
import { appendLead } from '@/lib/admin/store'
import { parseClientOrigin } from '@/lib/admin/origin'

function clientIp(req: NextRequest): string {
  const fwd = req.headers.get('x-forwarded-for')
  if (fwd) return fwd.split(',')[0].trim()
  return req.headers.get('x-real-ip') ?? 'unknown'
}

// ─── Parse source tracking data ───────────────────────────────────────────────
function parseSource(raw: string) {
  try { return JSON.parse(raw) } catch { return null }
}

function sourceTextLines(src: ReturnType<typeof parseSource>): string[] {
  if (!src) return []
  const lines = [`Page: ${src.page}`, `Referrer: ${src.referrer}`]
  if (src.utm_source) lines.push(`UTM Source: ${src.utm_source}`)
  if (src.utm_medium) lines.push(`UTM Medium: ${src.utm_medium}`)
  if (src.utm_campaign) lines.push(`UTM Campaign: ${src.utm_campaign}`)
  return lines
}

function sourceHtmlRows(src: ReturnType<typeof parseSource>): string {
  if (!src) return ''
  const rows = [
    `<tr><td style="padding:8px 0;color:#888;font-size:14px;width:130px">Page</td><td style="padding:8px 0;font-size:14px;color:#111">${src.page}</td></tr>`,
    `<tr><td style="padding:8px 0;color:#888;font-size:14px">Referrer</td><td style="padding:8px 0;font-size:14px;color:#111">${src.referrer}</td></tr>`,
  ]
  if (src.utm_source) rows.push(`<tr><td style="padding:8px 0;color:#888;font-size:14px">UTM Source</td><td style="padding:8px 0;font-size:14px;color:#111">${src.utm_source}</td></tr>`)
  if (src.utm_medium) rows.push(`<tr><td style="padding:8px 0;color:#888;font-size:14px">UTM Medium</td><td style="padding:8px 0;font-size:14px;color:#111">${src.utm_medium}</td></tr>`)
  if (src.utm_campaign) rows.push(`<tr><td style="padding:8px 0;color:#888;font-size:14px">UTM Campaign</td><td style="padding:8px 0;font-size:14px;color:#111">${src.utm_campaign}</td></tr>`)
  return `
    <tr><td colspan="2" style="padding-top:16px;padding-bottom:4px">
      <p style="margin:0;font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#aaa">Lead Source</p>
    </td></tr>
    ${rows.join('\n')}
  `
}

function buildNotificationEmail(
  name: string,
  email: string,
  phone: string,
  position: string,
  experience: string,
  portfolio: string,
  message: string,
  sourceRaw: string,
  resumeName?: string,
) {
  const src = parseSource(sourceRaw)
  return {
    from: `"Miracle Websoft Site" <${process.env.BREVO_FROM_EMAIL}>`,
    to: process.env.ADMIN_NOTIFY_EMAIL as string,
    replyTo: email,
    subject: `New job application — ${position} — ${name}`,
    text: [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone || '—'}`,
      `Position: ${position}`,
      `Experience: ${experience}`,
      `Portfolio: ${portfolio || '—'}`,
      `Resume: ${resumeName || 'Not provided'}`,
      ``,
      `Cover letter:`,
      message,
      ``,
      ...sourceTextLines(src),
    ].join('\n'),
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px">
        <h2 style="margin:0 0 6px;font-size:20px;color:#111">New job application</h2>
        <p style="margin:0 0 20px;font-size:14px;color:#888">Submitted via miraclewebsoft.com/careers</p>
        <table style="width:100%;border-collapse:collapse">
          <tr><td style="padding:8px 0;color:#888;font-size:14px;width:130px">Name</td><td style="padding:8px 0;font-size:14px;color:#111">${name}</td></tr>
          <tr><td style="padding:8px 0;color:#888;font-size:14px">Email</td><td style="padding:8px 0;font-size:14px;color:#111"><a href="mailto:${email}" style="color:#6c63ff">${email}</a></td></tr>
          <tr><td style="padding:8px 0;color:#888;font-size:14px">Phone</td><td style="padding:8px 0;font-size:14px;color:#111">${phone || '—'}</td></tr>
          <tr><td style="padding:8px 0;color:#888;font-size:14px">Position</td><td style="padding:8px 0;font-size:14px;color:#111"><strong>${position}</strong></td></tr>
          <tr><td style="padding:8px 0;color:#888;font-size:14px">Experience</td><td style="padding:8px 0;font-size:14px;color:#111">${experience}</td></tr>
          <tr><td style="padding:8px 0;color:#888;font-size:14px">Portfolio</td><td style="padding:8px 0;font-size:14px;color:#111">${portfolio ? `<a href="${portfolio}" style="color:#6c63ff">${portfolio}</a>` : '—'}</td></tr>
          <tr><td style="padding:8px 0;color:#888;font-size:14px">Resume</td><td style="padding:8px 0;font-size:14px;color:#111">${resumeName ? `✅ ${resumeName} (attached)` : 'Not provided'}</td></tr>
          ${sourceHtmlRows(src)}
        </table>
        <div style="margin-top:20px;padding:16px;background:#f5f5f5;border-radius:8px">
          <p style="margin:0 0 8px;font-size:13px;color:#888;font-weight:600;text-transform:uppercase;letter-spacing:.05em">Cover letter</p>
          <p style="margin:0;font-size:14px;color:#111;line-height:1.7;white-space:pre-wrap">${message}</p>
        </div>
        <p style="margin-top:20px;font-size:12px;color:#aaa">Sent from miraclewebsoft.com/careers</p>
      </div>
    `,
  }
}

function buildConfirmationEmail(name: string, toEmail: string, position: string) {
  const accentColor = '#6c63ff'
  const first = name.split(' ')[0]

  return {
    from: `"Karam Singh — Miracle Websoft" <${process.env.BREVO_FROM_EMAIL}>`,
    to: toEmail,
    subject: `Application received, ${first} — we'll be in touch`,
    text: [
      `Hi ${first},`,
      ``,
      `Thanks for applying to Miracle Websoft! We've received your application for the ${position} role.`,
      ``,
      `We personally review every application and will get back to you within 3–5 business days.`,
      ``,
      `In the meantime, feel free to check out our work:`,
      `→ Case Studies: https://miraclewebsoft.com/case-studies`,
      `→ Blog: https://miraclewebsoft.com/blog`,
      ``,
      `— Karam Singh Mehra`,
      `Founder, Miracle Websoft`,
    ].join('\n'),
    html: `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f4f4f7;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f7;padding:32px 16px">
<tr><td align="center">
<table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px">

  <tr><td style="background:#0d0d0d;border-radius:16px 16px 0 0;padding:32px 40px">
    <p style="margin:0 0 4px;font-size:11px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:${accentColor}">Miracle Websoft — Careers</p>
    <h1 style="margin:0;font-size:22px;font-weight:700;color:#ffffff;line-height:1.3">We&apos;ve received your application, ${first}.</h1>
  </td></tr>

  <tr><td style="background:#ffffff;padding:36px 40px">
    <p style="margin:0 0 20px;font-size:15px;color:#444;line-height:1.7">
      Thank you for applying for the <strong style="color:#111">${position}</strong> role at Miracle Websoft. We review every application personally and will get back to you within <strong style="color:#111">3–5 business days</strong>.
    </p>

    <div style="background:#f8f8fc;border-radius:12px;padding:20px 24px;margin-bottom:28px">
      <p style="margin:0 0 14px;font-size:12px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:${accentColor}">What happens next</p>
      <table cellpadding="0" cellspacing="0" width="100%">
        <tr>
          <td style="padding:6px 0;vertical-align:top;width:28px">
            <div style="width:22px;height:22px;border-radius:50%;background:${accentColor};font-size:11px;font-weight:700;color:#fff;text-align:center;line-height:22px">1</div>
          </td>
          <td style="padding:6px 0 6px 10px;font-size:14px;color:#444;line-height:1.5">We review your application and resume</td>
        </tr>
        <tr>
          <td style="padding:6px 0;vertical-align:top">
            <div style="width:22px;height:22px;border-radius:50%;background:${accentColor};font-size:11px;font-weight:700;color:#fff;text-align:center;line-height:22px">2</div>
          </td>
          <td style="padding:6px 0 6px 10px;font-size:14px;color:#444;line-height:1.5">If shortlisted, we&apos;ll reach out to schedule a brief technical chat</td>
        </tr>
        <tr>
          <td style="padding:6px 0;vertical-align:top">
            <div style="width:22px;height:22px;border-radius:50%;background:${accentColor};font-size:11px;font-weight:700;color:#fff;text-align:center;line-height:22px">3</div>
          </td>
          <td style="padding:6px 0 6px 10px;font-size:14px;color:#444;line-height:1.5">We discuss scope, work style, and next steps together</td>
        </tr>
      </table>
    </div>

    <p style="margin:0;font-size:14px;color:#666;line-height:1.7">
      Questions? Just reply to this email — it comes straight to me.
    </p>
  </td></tr>

  <tr><td style="background:#f8f8fc;border-radius:0 0 16px 16px;padding:24px 40px">
    <table cellpadding="0" cellspacing="0"><tr>
      <td style="vertical-align:middle;padding-right:14px">
        <div style="width:44px;height:44px;border-radius:50%;background:#0d0d0d;text-align:center;line-height:44px;font-size:16px;font-weight:800;color:${accentColor}">K</div>
      </td>
      <td style="vertical-align:middle">
        <div style="font-size:14px;font-weight:700;color:#111">Karam Singh Mehra</div>
        <div style="font-size:12px;color:#888">Founder · Miracle Websoft</div>
        <div style="font-size:11px;color:#aaa;margin-top:2px">Shopify Expert since 2015</div>
      </td>
    </tr></table>
  </td></tr>

  <tr><td style="padding:20px 0;text-align:center">
    <p style="margin:0;font-size:11px;color:#ccc">You received this because you applied at miraclewebsoft.com/careers.</p>
  </td></tr>

</table>
</td></tr>
</table>
</body>
</html>
    `,
  }
}

export async function POST(req: NextRequest) {
  try {
    const fd = await req.formData()

    // Honeypot
    if (fd.get('_hp')) {
      return Response.json({ success: true })
    }

    const name = (fd.get('name') as string) || ''
    const email = (fd.get('email') as string) || ''
    const phone = (fd.get('phone') as string) || ''
    const position = (fd.get('position') as string) || ''
    const experience = (fd.get('experience') as string) || ''
    const portfolio = (fd.get('portfolio') as string) || ''
    const message = (fd.get('message') as string) || ''
    const sourceRaw = (fd.get('_source') as string) || ''
    const resumeFile = fd.get('resume') as File | null

    if (!name || !email || !position || !experience || !message) {
      return Response.json({ success: false, error: 'Missing required fields' }, { status: 400 })
    }

    const notifEmail = buildNotificationEmail(name, email, phone, position, experience, portfolio, message, sourceRaw, resumeFile?.name)
    const confirmEmail = buildConfirmationEmail(name, email, position)

    // Read resume bytes once — the Body stream can only be consumed once.
    let resumeBuffer: Buffer | null = null
    if (resumeFile && resumeFile.size > 0) {
      resumeBuffer = Buffer.from(await resumeFile.arrayBuffer())
      ;(notifEmail as Record<string, unknown>).attachments = [
        { filename: resumeFile.name, content: resumeBuffer },
      ]
    }

    // Resume isn't stored anywhere — it only goes out as the email attachment
    // above. The lead record just notes the filename for reference.
    await appendLead({
      form: 'careers',
      ip: clientIp(req),
      userAgent: req.headers.get('user-agent') ?? undefined,
      origin: parseClientOrigin(sourceRaw),
      payload: { name, email, phone, position, experience, portfolio, message, resumeName: resumeFile?.name },
    }).catch(err => console.error('[careers] appendLead', err))

    await Promise.all([
      sendEmail(notifEmail),
      sendEmail(confirmEmail),
    ])

    return Response.json({ success: true })
  } catch (err) {
    console.error('[careers]', err)
    return Response.json({ success: false, error: 'Failed to send' }, { status: 500 })
  }
}
