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

export async function POST(req: NextRequest) {
  try {
    const data = await req.json()

    // Honeypot — bots fill this hidden field, humans don't
    if (data._hp) {
      return Response.json({ success: true })
    }

    const { name, email, storeUrl, service, message } = data

    if (!name || !email || !message) {
      return Response.json({ success: false, error: 'Missing required fields' }, { status: 400 })
    }

    await transporter.sendMail({
      from: `"Miracle Websoft Contact" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      replyTo: email,
      subject: `New enquiry from ${name} — ${service || 'website form'}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Store URL: ${storeUrl || '—'}`,
        `Service: ${service || '—'}`,
        ``,
        `Message:`,
        message,
      ].join('\n'),
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px">
          <h2 style="margin:0 0 20px;font-size:20px;color:#111">New enquiry from ${name}</h2>
          <table style="width:100%;border-collapse:collapse">
            <tr><td style="padding:8px 0;color:#888;font-size:14px;width:120px">Name</td><td style="padding:8px 0;font-size:14px;color:#111">${name}</td></tr>
            <tr><td style="padding:8px 0;color:#888;font-size:14px">Email</td><td style="padding:8px 0;font-size:14px;color:#111"><a href="mailto:${email}" style="color:#6c63ff">${email}</a></td></tr>
            <tr><td style="padding:8px 0;color:#888;font-size:14px">Store URL</td><td style="padding:8px 0;font-size:14px;color:#111">${storeUrl || '—'}</td></tr>
            <tr><td style="padding:8px 0;color:#888;font-size:14px">Service</td><td style="padding:8px 0;font-size:14px;color:#111">${service || '—'}</td></tr>
          </table>
          <div style="margin-top:20px;padding:16px;background:#f5f5f5;border-radius:8px">
            <p style="margin:0 0 8px;font-size:13px;color:#888;font-weight:600;text-transform:uppercase;letter-spacing:.05em">Message</p>
            <p style="margin:0;font-size:14px;color:#111;line-height:1.7;white-space:pre-wrap">${message}</p>
          </div>
          <p style="margin-top:20px;font-size:12px;color:#aaa">Sent from miraclewebsoft.com contact form</p>
        </div>
      `,
    })

    return Response.json({ success: true })
  } catch (err) {
    console.error('[contact]', err)
    return Response.json({ success: false, error: 'Failed to send' }, { status: 500 })
  }
}
