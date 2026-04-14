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

function buildNotification(d: Record<string, string>) {
  const { referrerName, referrerEmail, referrerPhone, referrerRole,
          clientName, clientEmail, clientPhone, projectType, budget, notes } = d
  return {
    from: `"Miracle Websoft Site" <${process.env.SMTP_USER}>`,
    to: process.env.SMTP_USER,
    replyTo: referrerEmail,
    subject: `New referral from ${referrerName} — ${clientName} (${projectType || 'Shopify project'})`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px">
        <div style="background:#0d0d0d;border-radius:16px 16px 0 0;padding:28px 36px">
          <p style="margin:0 0 4px;font-size:11px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#6c63ff">Miracle Websoft</p>
          <h2 style="margin:0;font-size:20px;font-weight:700;color:#fff">New Referral Received</h2>
        </div>
        <div style="background:#fff;padding:32px 36px;border-radius:0 0 16px 16px">
          <p style="margin:0 0 16px;font-size:13px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#6c63ff">Referrer</p>
          <table style="width:100%;border-collapse:collapse;margin-bottom:28px">
            <tr><td style="padding:7px 0;color:#888;font-size:13px;width:130px">Name</td><td style="padding:7px 0;font-size:13px;color:#111">${referrerName}</td></tr>
            <tr><td style="padding:7px 0;color:#888;font-size:13px">Email</td><td style="padding:7px 0;font-size:13px;color:#111"><a href="mailto:${referrerEmail}" style="color:#6c63ff">${referrerEmail}</a></td></tr>
            ${referrerPhone ? `<tr><td style="padding:7px 0;color:#888;font-size:13px">Phone</td><td style="padding:7px 0;font-size:13px;color:#111">${referrerPhone}</td></tr>` : ''}
            ${referrerRole ? `<tr><td style="padding:7px 0;color:#888;font-size:13px">Role</td><td style="padding:7px 0;font-size:13px;color:#111">${referrerRole}</td></tr>` : ''}
          </table>
          <p style="margin:0 0 16px;font-size:13px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#10b981">Client Lead</p>
          <table style="width:100%;border-collapse:collapse;margin-bottom:28px">
            <tr><td style="padding:7px 0;color:#888;font-size:13px;width:130px">Name</td><td style="padding:7px 0;font-size:13px;color:#111">${clientName}</td></tr>
            <tr><td style="padding:7px 0;color:#888;font-size:13px">Email</td><td style="padding:7px 0;font-size:13px;color:#111"><a href="mailto:${clientEmail}" style="color:#6c63ff">${clientEmail}</a></td></tr>
            ${clientPhone ? `<tr><td style="padding:7px 0;color:#888;font-size:13px">Phone</td><td style="padding:7px 0;font-size:13px;color:#111">${clientPhone}</td></tr>` : ''}
            ${projectType ? `<tr><td style="padding:7px 0;color:#888;font-size:13px">Project</td><td style="padding:7px 0;font-size:13px;color:#111">${projectType}</td></tr>` : ''}
            ${budget ? `<tr><td style="padding:7px 0;color:#888;font-size:13px">Budget</td><td style="padding:7px 0;font-size:13px;color:#111">${budget}</td></tr>` : ''}
          </table>
          ${notes ? `<div style="background:#f8f8fc;border-radius:10px;padding:16px 20px"><p style="margin:0 0 6px;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:#888">Notes</p><p style="margin:0;font-size:13px;color:#111;line-height:1.7;white-space:pre-wrap">${notes}</p></div>` : ''}
          <p style="margin:24px 0 0;font-size:12px;color:#aaa">Sent from the Miracle Websoft referral form</p>
        </div>
      </div>
    `,
  }
}

function buildConfirmation(name: string, toEmail: string) {
  const first = name.split(' ')[0]
  return {
    from: `"Karam Singh — Miracle Websoft" <${process.env.SMTP_USER}>`,
    to: toEmail,
    subject: `Thanks for referring a client, ${first} — we're on it`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px">
        <div style="background:#0d0d0d;border-radius:16px 16px 0 0;padding:28px 36px">
          <p style="margin:0 0 4px;font-size:11px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#6c63ff">Miracle Websoft · Referral Partner</p>
          <h2 style="margin:0;font-size:20px;font-weight:700;color:#fff">Your referral is in safe hands, ${first}.</h2>
        </div>
        <div style="background:#fff;padding:32px 36px;border-radius:0 0 16px 16px">
          <p style="margin:0 0 20px;font-size:14px;color:#444;line-height:1.7">
            Thank you for trusting Miracle Websoft with your referral. I'll personally reach out to your client within <strong style="color:#111">24 hours</strong> and handle everything from here.
          </p>
          <div style="background:#f8f8fc;border-radius:12px;padding:20px 24px;margin-bottom:24px">
            <p style="margin:0 0 14px;font-size:12px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#6c63ff">What happens next</p>
            <p style="margin:0 0 10px;font-size:13px;color:#444;line-height:1.6"><strong style="color:#111">1.</strong> I contact your client and understand their requirements</p>
            <p style="margin:0 0 10px;font-size:13px;color:#444;line-height:1.6"><strong style="color:#111">2.</strong> We send a detailed proposal and scope of work</p>
            <p style="margin:0 0 10px;font-size:13px;color:#444;line-height:1.6"><strong style="color:#111">3.</strong> Project is delivered — client pays their invoice</p>
            <p style="margin:0;font-size:13px;color:#444;line-height:1.6"><strong style="color:#6c63ff">4.</strong> <strong style="color:#6c63ff">You receive 20% of the project value — directly to you</strong></p>
          </div>
          <p style="margin:0 0 20px;font-size:13px;color:#666;line-height:1.7">
            Your relationship with the client is always yours. We never bypass you or approach them directly for future work without your knowledge.
          </p>
          <p style="margin:0;font-size:13px;color:#666;line-height:1.7">
            Questions? Just reply to this email — it comes straight to me.
          </p>
          <div style="margin-top:28px;padding-top:24px;border-top:1px solid #f0f0f0;display:flex;align-items:center;gap:14px">
            <div style="width:42px;height:42px;border-radius:50%;background:#0d0d0d;text-align:center;line-height:42px;font-size:16px;font-weight:800;color:#6c63ff;flex-shrink:0">K</div>
            <div>
              <div style="font-size:13px;font-weight:700;color:#111">Karam Singh Mehra</div>
              <div style="font-size:12px;color:#888">Founder · Miracle Websoft · Shopify Expert since 2015</div>
            </div>
          </div>
        </div>
      </div>
    `,
  }
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json()
    if (data._hp) return Response.json({ success: true })

    const { referrerName, referrerEmail, clientName, clientEmail } = data
    if (!referrerName || !referrerEmail || !clientName || !clientEmail) {
      return Response.json({ success: false, error: 'Missing required fields' }, { status: 400 })
    }

    await Promise.all([
      transporter.sendMail(buildNotification(data)),
      transporter.sendMail(buildConfirmation(referrerName, referrerEmail)),
    ])

    return Response.json({ success: true })
  } catch (err) {
    console.error('[referral]', err)
    return Response.json({ success: false, error: 'Failed to send' }, { status: 500 })
  }
}
