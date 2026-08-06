// Brevo-backed email sending. Cloudflare Workers restricts raw TCP sockets,
// so nodemailer's SMTP transport (Gmail, etc.) can't be used there — Brevo's
// HTTP send API works over plain fetch instead.

export type EmailMessage = {
  from: string
  to: string | string[]
  subject: string
  html: string
  text?: string
  replyTo?: string
  attachments?: { filename: string; content: Buffer }[]
}

type BrevoAddress = { email: string; name?: string }

function parseAddress(addr: string): BrevoAddress {
  const match = addr.match(/^"?([^"<]*)"?\s*<(.+)>$/)
  if (match) {
    const name = match[1].trim()
    return name ? { email: match[2].trim(), name } : { email: match[2].trim() }
  }
  return { email: addr.trim() }
}

export async function sendEmail(msg: EmailMessage): Promise<void> {
  const apiKey = process.env.BREVO_API_KEY
  if (!apiKey) throw new Error('BREVO_API_KEY not set')

  const to = Array.isArray(msg.to) ? msg.to : [msg.to]

  const res = await fetch('https://api.brevo.com/v3/smtp/email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'api-key': apiKey,
    },
    body: JSON.stringify({
      sender: parseAddress(msg.from),
      to: to.map(parseAddress),
      ...(msg.replyTo ? { replyTo: parseAddress(msg.replyTo) } : {}),
      subject: msg.subject,
      textContent: msg.text,
      htmlContent: msg.html,
      ...(msg.attachments?.length ? {
        attachment: msg.attachments.map(a => ({
          name: a.filename,
          content: a.content.toString('base64'),
        })),
      } : {}),
    }),
  })

  if (!res.ok) {
    const body = await res.text()
    throw new Error(`Brevo send failed (${res.status}): ${body}`)
  }
}
