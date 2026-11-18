'use client'

import { useState } from 'react'
import { Check, Copy } from 'lucide-react'

export default function CopyCaption({ text }: { text: string }) {
  const [copied, setCopied] = useState(false)
  async function copy() {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {}
  }
  return (
    <button type="button" onClick={copy} className="rv-chip" style={{ cursor: 'pointer', gap: '0.35rem' }}>
      {copied ? <Check size={13} aria-hidden="true" /> : <Copy size={13} aria-hidden="true" />}
      {copied ? 'Caption copied' : 'Copy caption'}
    </button>
  )
}
