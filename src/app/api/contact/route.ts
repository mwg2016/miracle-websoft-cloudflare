import { NextRequest } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const data = await req.json()

    // Honeypot — bots fill this hidden field, humans don't
    if (data._hp) {
      return Response.json({ success: true }) // silently ignore
    }

    const key = process.env.WEB3FORMS_KEY
    if (!key) {
      // No key configured — log and return success so UI works in dev
      console.log('[contact form]', data)
      return Response.json({ success: true })
    }

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        access_key: key,
        subject: `New enquiry from ${data.name} — ${data.service || 'website form'}`,
        from_name: 'Miracle Websoft Site',
        name: data.name,
        email: data.email,
        store_url: data.storeUrl,
        service: data.service,
        message: data.message,
      }),
    })

    const result = await res.json()
    return Response.json({ success: result.success })
  } catch {
    return Response.json({ success: false, error: 'Server error' }, { status: 500 })
  }
}
