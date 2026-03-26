import { NextRequest } from 'next/server'
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

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
    `<tr><td style="padding:8px 0;color:#888;font-size:14px;width:120px">Page</td><td style="padding:8px 0;font-size:14px;color:#111">${src.page}</td></tr>`,
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

// ─── Notification email to Karam ─────────────────────────────────────────────
function buildNotificationEmail(name: string, email: string, storeUrl: string, service: string, message: string, sourceRaw: string, budget?: string) {
  const src = parseSource(sourceRaw)
  return {
    from: `"Miracle Websoft Site" <${process.env.SMTP_USER}>`,
    to: process.env.SMTP_USER,
    replyTo: email,
    subject: `New enquiry from ${name} — ${service || 'website form'}`,
    text: [`Name: ${name}`, `Email: ${email}`, `Store URL: ${storeUrl || '—'}`, `Service: ${service || '—'}`, budget ? `Budget: ${budget}` : '', ``, `Message:`, message, ``, ...sourceTextLines(src)].filter(l => l !== '').join('\n'),
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px">
        <h2 style="margin:0 0 20px;font-size:20px;color:#111">New enquiry from ${name}</h2>
        <table style="width:100%;border-collapse:collapse">
          <tr><td style="padding:8px 0;color:#888;font-size:14px;width:120px">Name</td><td style="padding:8px 0;font-size:14px;color:#111">${name}</td></tr>
          <tr><td style="padding:8px 0;color:#888;font-size:14px">Email</td><td style="padding:8px 0;font-size:14px;color:#111"><a href="mailto:${email}" style="color:#6c63ff">${email}</a></td></tr>
          <tr><td style="padding:8px 0;color:#888;font-size:14px">Store URL</td><td style="padding:8px 0;font-size:14px;color:#111">${storeUrl || '—'}</td></tr>
          <tr><td style="padding:8px 0;color:#888;font-size:14px">Service</td><td style="padding:8px 0;font-size:14px;color:#111">${service || '—'}</td></tr>
          ${budget ? `<tr><td style="padding:8px 0;color:#888;font-size:14px">Budget</td><td style="padding:8px 0;font-size:14px;color:#111">${budget}</td></tr>` : ''}
          ${sourceHtmlRows(src)}
        </table>
        <div style="margin-top:20px;padding:16px;background:#f5f5f5;border-radius:8px">
          <p style="margin:0 0 8px;font-size:13px;color:#888;font-weight:600;text-transform:uppercase;letter-spacing:.05em">Message</p>
          <p style="margin:0;font-size:14px;color:#111;line-height:1.7;white-space:pre-wrap">${message}</p>
        </div>
        <p style="margin-top:20px;font-size:12px;color:#aaa">Sent from miraclewebsoft.com contact form</p>
      </div>
    `,
  }
}

// ─── Confirmation email to the person who submitted ───────────────────────────
function buildConfirmationEmail(name: string, toEmail: string, service: string) {
  const accentColor = '#6c63ff'
  const first = name.split(' ')[0]

  return {
    from: `"Karam Singh — Miracle Websoft" <${process.env.SMTP_USER}>`,
    to: toEmail,
    subject: `Got your message, ${first} — we'll review your store shortly`,
    text: [
      `Hi ${first},`,
      ``,
      `Thanks for reaching out to Miracle Websoft. I've received your enquiry and will personally review it within 24 hours.`,
      ``,
      `What happens next:`,
      `1. I'll review your store and your goals`,
      `2. I'll put together a brief audit with specific recommendations`,
      `3. If it looks like a good fit, I'll reach out to schedule a 30-minute discovery call`,
      ``,
      `In the meantime, here are a few useful links:`,
      ``,
      `→ Our Upwork profile (600+ reviews, Top Rated Plus)`,
      `   https://www.upwork.com/agencies/shopifyexpertsdevelopers/`,
      ``,
      `→ Shopify Partner Directory listing`,
      `   https://www.shopify.com/partners/directory/partner/miracle-websoft1`,
      ``,
      `→ Case Studies — real results for fashion brands`,
      `   https://miraclewebsoft.com/case-studies`,
      ``,
      `→ Blog — Shopify tips for clothing brands`,
      `   https://miraclewebsoft.com/blog`,
      ``,
      `If you have any questions in the meantime, just reply to this email — it comes straight to me.`,
      ``,
      `— Karam Singh Mehra`,
      `Founder, Miracle Websoft`,
      `Shopify Expert since 2015 · Top Rated Plus on Upwork`,
      `https://miraclewebsoft.com`,
    ].join('\n'),
    html: `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f4f4f7;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f7;padding:32px 16px">
<tr><td align="center">
<table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px">

  <!-- Header -->
  <tr><td style="background:#0d0d0d;border-radius:16px 16px 0 0;padding:32px 40px">
    <p style="margin:0 0 4px;font-size:11px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:${accentColor}">Miracle Websoft</p>
    <h1 style="margin:0;font-size:22px;font-weight:700;color:#ffffff;line-height:1.3">We've received your message, ${first}.</h1>
  </td></tr>

  <!-- Body -->
  <tr><td style="background:#ffffff;padding:36px 40px">

    <p style="margin:0 0 20px;font-size:15px;color:#444;line-height:1.7">
      Thanks for reaching out. I've received your enquiry${service ? ` about <strong style="color:#111">${service}</strong>` : ''} and will personally review it within <strong style="color:#111">24 hours</strong>.
    </p>

    <!-- What happens next -->
    <div style="background:#f8f8fc;border-radius:12px;padding:20px 24px;margin-bottom:28px">
      <p style="margin:0 0 14px;font-size:12px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:${accentColor}">What happens next</p>
      <table cellpadding="0" cellspacing="0" width="100%">
        <tr>
          <td style="padding:6px 0;vertical-align:top;width:28px">
            <div style="width:22px;height:22px;border-radius:50%;background:${accentColor};display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;color:#fff;text-align:center;line-height:22px">1</div>
          </td>
          <td style="padding:6px 0 6px 10px;font-size:14px;color:#444;line-height:1.5">I review your store and your goals</td>
        </tr>
        <tr>
          <td style="padding:6px 0;vertical-align:top">
            <div style="width:22px;height:22px;border-radius:50%;background:${accentColor};font-size:11px;font-weight:700;color:#fff;text-align:center;line-height:22px">2</div>
          </td>
          <td style="padding:6px 0 6px 10px;font-size:14px;color:#444;line-height:1.5">I put together a brief audit with specific, prioritised recommendations</td>
        </tr>
        <tr>
          <td style="padding:6px 0;vertical-align:top">
            <div style="width:22px;height:22px;border-radius:50%;background:${accentColor};font-size:11px;font-weight:700;color:#fff;text-align:center;line-height:22px">3</div>
          </td>
          <td style="padding:6px 0 6px 10px;font-size:14px;color:#444;line-height:1.5">If it looks like a good fit, I'll reach out to schedule a free 30-minute discovery call</td>
        </tr>
      </table>
    </div>

    <!-- Trust stats -->
    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px">
      <tr>
        <td style="width:33%;text-align:center;padding:16px 8px;background:#f8f8fc;border-radius:10px">
          <div style="font-size:22px;font-weight:800;color:#111;line-height:1">600+</div>
          <div style="font-size:11px;color:#888;margin-top:4px">Projects completed</div>
        </td>
        <td style="width:4px"></td>
        <td style="width:33%;text-align:center;padding:16px 8px;background:#f8f8fc;border-radius:10px">
          <div style="font-size:22px;font-weight:800;color:#111;line-height:1">98%</div>
          <div style="font-size:11px;color:#888;margin-top:4px">Upwork job success</div>
        </td>
        <td style="width:4px"></td>
        <td style="width:33%;text-align:center;padding:16px 8px;background:#f8f8fc;border-radius:10px">
          <div style="font-size:22px;font-weight:800;color:#111;line-height:1">10+</div>
          <div style="font-size:11px;color:#888;margin-top:4px">Years on Shopify</div>
        </td>
      </tr>
    </table>

    <!-- Useful links -->
    <p style="margin:0 0 14px;font-size:12px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#888">Useful links</p>
    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px">
      ${[
        { label: 'Upwork Profile', sub: 'Top Rated Plus · 600+ verified reviews', url: 'https://www.upwork.com/agencies/shopifyexpertsdevelopers/', badge: 'Top Rated Plus', badgeColor: '#14a800' },
        { label: 'Shopify Partner Directory', sub: 'Verified Shopify Partner since 2015', url: 'https://www.shopify.com/partners/directory/partner/miracle-websoft1', badge: 'Verified Partner', badgeColor: '#96bf48' },
        { label: 'Case Studies', sub: 'Real results for fashion brands', url: 'https://miraclewebsoft.com/case-studies', badge: 'Read more', badgeColor: accentColor },
        { label: 'Blog', sub: 'Shopify tips for clothing & fashion brands', url: 'https://miraclewebsoft.com/blog', badge: 'Read more', badgeColor: accentColor },
      ].map(l => `
        <tr><td style="padding:0 0 8px 0">
          <a href="${l.url}" target="_blank" style="display:block;padding:14px 18px;background:#f8f8fc;border-radius:10px;text-decoration:none;border:1px solid #ebebf5">
            <table width="100%" cellpadding="0" cellspacing="0"><tr>
              <td>
                <div style="font-size:14px;font-weight:600;color:#111;margin-bottom:2px">${l.label}</div>
                <div style="font-size:12px;color:#888">${l.sub}</div>
              </td>
              <td align="right" style="white-space:nowrap;padding-left:12px">
                <span style="font-size:11px;font-weight:700;padding:3px 10px;border-radius:9999px;background:${l.badgeColor}18;color:${l.badgeColor};border:1px solid ${l.badgeColor}35">${l.badge}</span>
              </td>
            </tr></table>
          </a>
        </td></tr>
      `).join('')}
    </table>

    <p style="margin:0;font-size:14px;color:#666;line-height:1.7">
      Have a question before then? Just reply to this email — it comes straight to me.
    </p>

  </td></tr>

  <!-- Signature -->
  <tr><td style="background:#f8f8fc;border-radius:0 0 16px 16px;padding:24px 40px">
    <table cellpadding="0" cellspacing="0"><tr>
      <td style="vertical-align:middle;padding-right:14px">
        <div style="width:44px;height:44px;border-radius:50%;background:#0d0d0d;text-align:center;line-height:44px;font-size:16px;font-weight:800;color:${accentColor}">K</div>
      </td>
      <td style="vertical-align:middle">
        <div style="font-size:14px;font-weight:700;color:#111">Karam Singh Mehra</div>
        <div style="font-size:12px;color:#888">Founder · Miracle Websoft</div>
        <div style="font-size:11px;color:#aaa;margin-top:2px">Shopify Expert since 2015 · Top Rated Plus on Upwork</div>
      </td>
    </tr></table>
  </td></tr>

  <!-- Footer -->
  <tr><td style="padding:20px 0;text-align:center">
    <p style="margin:0 0 8px;font-size:12px;color:#aaa">
      <a href="https://miraclewebsoft.com" style="color:#aaa;text-decoration:none">miraclewebsoft.com</a> &nbsp;·&nbsp;
      <a href="https://miraclewebsoft.com/case-studies" style="color:#aaa;text-decoration:none">Case Studies</a> &nbsp;·&nbsp;
      <a href="https://miraclewebsoft.com/blog" style="color:#aaa;text-decoration:none">Blog</a>
    </p>
    <p style="margin:0;font-size:11px;color:#ccc">You received this because you submitted a contact form on miraclewebsoft.com.</p>
  </td></tr>

</table>
</td></tr>
</table>
</body>
</html>
    `,
  }
}

// ─── Route handler ─────────────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  try {
    const data = await req.json()

    // Honeypot — bots fill this hidden field, humans don't
    if (data._hp) {
      return Response.json({ success: true })
    }

    const { name, email, storeUrl, service, message, budget, _source } = data

    if (!name || !email || !message) {
      return Response.json({ success: false, error: 'Missing required fields' }, { status: 400 })
    }

    // Send both emails in parallel
    await Promise.all([
      transporter.sendMail(buildNotificationEmail(name, email, storeUrl, service, message, _source || '', budget)),
      transporter.sendMail(buildConfirmationEmail(name, email, service)),
    ])

    return Response.json({ success: true })
  } catch (err) {
    console.error('[contact]', err)
    return Response.json({ success: false, error: 'Failed to send' }, { status: 500 })
  }
}
