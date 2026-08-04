import { NextRequest } from 'next/server'
import { sendEmail } from '@/lib/email'
import { appendLead } from '@/lib/admin/store'
import { parseClientOrigin } from '@/lib/admin/origin'

function clientIp(req: NextRequest): string {
  const fwd = req.headers.get('x-forwarded-for')
  if (fwd) return fwd.split(',')[0].trim()
  return req.headers.get('x-real-ip') ?? 'unknown'
}

function buildNotification(d: Record<string, string>) {
  const { companyName, contactName, email, website, engagementType, volume, description, ndaRequired } = d
  return {
    from: `"Miracle Websoft Site" <${process.env.RESEND_FROM_EMAIL}>`,
    to: process.env.ADMIN_NOTIFY_EMAIL as string,
    replyTo: email,
    subject: `White Label enquiry — ${companyName} (${engagementType || 'enquiry'})`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px">
        <div style="background:#0d0d0d;border-radius:16px 16px 0 0;padding:28px 36px">
          <p style="margin:0 0 4px;font-size:11px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#6c63ff">Miracle Websoft — White Label</p>
          <h2 style="margin:0;font-size:20px;font-weight:700;color:#fff">New White Label Enquiry</h2>
        </div>
        <div style="background:#fff;padding:32px 36px;border-radius:0 0 16px 16px">
          <p style="margin:0 0 16px;font-size:13px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#6c63ff">Agency Details</p>
          <table style="width:100%;border-collapse:collapse;margin-bottom:28px">
            <tr><td style="padding:7px 0;color:#888;font-size:13px;width:150px">Company</td><td style="padding:7px 0;font-size:13px;color:#111;font-weight:600">${companyName}</td></tr>
            <tr><td style="padding:7px 0;color:#888;font-size:13px">Contact</td><td style="padding:7px 0;font-size:13px;color:#111">${contactName}</td></tr>
            <tr><td style="padding:7px 0;color:#888;font-size:13px">Email</td><td style="padding:7px 0;font-size:13px;color:#111"><a href="mailto:${email}" style="color:#6c63ff">${email}</a></td></tr>
            ${website ? `<tr><td style="padding:7px 0;color:#888;font-size:13px">Website</td><td style="padding:7px 0;font-size:13px;color:#111"><a href="${website}" style="color:#6c63ff" target="_blank">${website}</a></td></tr>` : ''}
            ${engagementType ? `<tr><td style="padding:7px 0;color:#888;font-size:13px">Engagement</td><td style="padding:7px 0;font-size:13px;color:#111"><strong>${engagementType}</strong></td></tr>` : ''}
            ${volume ? `<tr><td style="padding:7px 0;color:#888;font-size:13px">Volume / Hours</td><td style="padding:7px 0;font-size:13px;color:#111">${volume}</td></tr>` : ''}
            <tr><td style="padding:7px 0;color:#888;font-size:13px">NDA Required</td><td style="padding:7px 0;font-size:13px;color:#111">${ndaRequired === 'true' ? '✅ Yes — send NDA before brief' : 'Not required'}</td></tr>
          </table>
          ${description ? `
          <div style="background:#f8f8fc;border-radius:10px;padding:16px 20px">
            <p style="margin:0 0 8px;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:#888">Project / Requirements</p>
            <p style="margin:0;font-size:13px;color:#111;line-height:1.7;white-space:pre-wrap">${description}</p>
          </div>` : ''}
          <p style="margin:24px 0 0;font-size:12px;color:#aaa">Sent from miraclewebsoft.com/white-label</p>
        </div>
      </div>
    `,
  }
}

function buildConfirmation(contactName: string, toEmail: string, companyName: string, ndaRequired: string) {
  const first = contactName.split(' ')[0]
  return {
    from: `"Karam Singh — Miracle Websoft" <${process.env.RESEND_FROM_EMAIL}>`,
    to: toEmail,
    subject: `White label enquiry received, ${first} — we'll be in touch within 24 hours`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px">
        <div style="background:#0d0d0d;border-radius:16px 16px 0 0;padding:28px 36px">
          <p style="margin:0 0 4px;font-size:11px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#6c63ff">Miracle Websoft · White Label</p>
          <h2 style="margin:0;font-size:20px;font-weight:700;color:#fff">We've received your enquiry, ${first}.</h2>
        </div>
        <div style="background:#fff;padding:32px 36px;border-radius:0 0 16px 16px">
          <p style="margin:0 0 20px;font-size:14px;color:#444;line-height:1.7">
            Thank you for reaching out about a white label partnership for <strong style="color:#111">${companyName}</strong>. I'll personally review your requirements and get back to you within <strong style="color:#111">24 hours</strong>.
          </p>
          ${ndaRequired === 'true' ? `
          <div style="background:#f0f8ff;border:1px solid #c7dff7;border-radius:10px;padding:16px 20px;margin-bottom:24px">
            <p style="margin:0;font-size:13px;color:#1a5276;line-height:1.6"><strong>NDA noted.</strong> I'll send a mutual NDA for signing before we discuss any project details. Your brief stays confidential from the moment we connect.</p>
          </div>` : ''}
          <div style="background:#f8f8fc;border-radius:12px;padding:20px 24px;margin-bottom:24px">
            <p style="margin:0 0 14px;font-size:12px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#6c63ff">What happens next</p>
            <p style="margin:0 0 10px;font-size:13px;color:#444;line-height:1.6"><strong style="color:#111">1.</strong> I review your requirements and prepare a tailored proposal</p>
            <p style="margin:0 0 10px;font-size:13px;color:#444;line-height:1.6"><strong style="color:#111">2.</strong> We schedule a 30-min discovery call to align on scope and process</p>
            <p style="margin:0;font-size:13px;color:#444;line-height:1.6"><strong style="color:#111">3.</strong> Onboarding complete within 48 hours of agreement — we're ready to build</p>
          </div>
          <p style="margin:0 0 20px;font-size:13px;color:#666;line-height:1.7">
            Questions before then? Just reply to this email — it comes directly to me.
          </p>
          <div style="margin-top:28px;padding-top:24px;border-top:1px solid #f0f0f0">
            <table cellpadding="0" cellspacing="0"><tr>
              <td style="vertical-align:middle;padding-right:14px">
                <div style="width:42px;height:42px;border-radius:50%;background:#0d0d0d;text-align:center;line-height:42px;font-size:16px;font-weight:800;color:#6c63ff">K</div>
              </td>
              <td style="vertical-align:middle">
                <div style="font-size:13px;font-weight:700;color:#111">Karam Singh Mehra</div>
                <div style="font-size:12px;color:#888">Founder · Miracle Websoft · Shopify Expert since 2015</div>
              </td>
            </tr></table>
          </div>
        </div>
      </div>
    `,
  }
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json() as Record<string, string>
    if (data._hp) return Response.json({ success: true })

    const { companyName, contactName, email } = data
    if (!companyName || !contactName || !email) {
      return Response.json({ success: false, error: 'Missing required fields' }, { status: 400 })
    }

    await Promise.all([
      sendEmail(buildNotification(data)),
      sendEmail(buildConfirmation(contactName, email, companyName, data.ndaRequired)),
      appendLead({
        form: 'white_label',
        ip: clientIp(req),
        userAgent: req.headers.get('user-agent') ?? undefined,
        origin: parseClientOrigin(typeof data._source === 'string' ? data._source : undefined),
        payload: data,
      }).catch(err => console.error('[whitelabel] appendLead', err)),
    ])

    return Response.json({ success: true })
  } catch (err) {
    console.error('[whitelabel]', err)
    return Response.json({ success: false, error: 'Failed to send' }, { status: 500 })
  }
}
