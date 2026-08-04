// Resend-backed email sending. Replaces nodemailer's raw SMTP socket
// connection to Gmail — Cloudflare Workers restricts raw TCP sockets, so an
// HTTP-based email API is required there.

import { Resend } from 'resend'

export type EmailMessage = {
  from: string
  to: string | string[]
  subject: string
  html: string
  text?: string
  replyTo?: string
  attachments?: { filename: string; content: Buffer }[]
}

export async function sendEmail(msg: EmailMessage): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) throw new Error('RESEND_API_KEY not set')

  const resend = new Resend(apiKey)
  const { error } = await resend.emails.send({
    from: msg.from,
    to: msg.to,
    subject: msg.subject,
    html: msg.html,
    text: msg.text,
    replyTo: msg.replyTo,
    attachments: msg.attachments?.map(a => ({
      filename: a.filename,
      content: a.content.toString('base64'),
    })),
  })
  if (error) throw new Error(error.message)
}
