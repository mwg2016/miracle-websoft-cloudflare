'use client'
import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowRight, Loader2, Upload, X } from 'lucide-react'
import { getEffectiveOrigin, trackLead } from '@/lib/analytics'

const inputStyle: React.CSSProperties = {
  width: '100%',
  background: 'rgba(255,255,255,0.05)',
  border: '1px solid rgba(255,255,255,0.1)',
  borderRadius: '10px',
  padding: '0.75rem 1rem',
  fontSize: '0.875rem',
  color: '#fff',
  outline: 'none',
}

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontSize: '0.78rem',
  fontWeight: 500,
  color: 'rgba(255,255,255,0.6)',
  marginBottom: '0.4rem',
}

const optionalTag = (
  <span style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.2)', fontWeight: 400, marginLeft: '4px' }}>(optional)</span>
)

export default function CareersForm({ defaultPosition }: { defaultPosition?: string }) {
  const router = useRouter()
  const [state, setState] = useState<'idle' | 'sending' | 'error'>('idle')
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    position: defaultPosition || '',
    experience: '',
    portfolio: '',
    message: '',
    _hp: '',
    _source: '',
  })

  useEffect(() => {
    const source = {
      ...getEffectiveOrigin(),
      page: window.location.pathname,
      referrer: document.referrer || 'direct',
    }
    setForm(f => ({ ...f, _source: JSON.stringify(source) }))
  }, [])
  const [resume, setResume] = useState<File | null>(null)
  const [dragOver, setDragOver] = useState(false)
  const fileRef = useRef<HTMLInputElement>(null)

  function set(field: string, value: string) {
    setForm(f => ({ ...f, [field]: value }))
  }

  function handleFile(file: File) {
    const allowed = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
    if (!allowed.includes(file.type)) {
      alert('Please upload a PDF or Word document (.pdf, .doc, .docx)')
      return
    }
    if (file.size > 5 * 1024 * 1024) {
      alert('File size must be under 5 MB')
      return
    }
    setResume(file)
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (form._hp) { router.push('/thank-you?form=careers'); return }

    setState('sending')
    try {
      const fd = new FormData()
      Object.entries(form).forEach(([k, v]) => fd.append(k, v))
      if (resume) fd.append('resume', resume, resume.name)

      const res = await fetch('/api/careers', { method: 'POST', body: fd })
      const data = await res.json()
      if (data.success) {
        trackLead('lead_form_submit', { form: 'careers', position: form.position || '(unspecified)' })
        router.push('/thank-you?form=careers')
      } else {
        setState('error')
      }
    } catch {
      setState('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      {/* Honeypot */}
      <input type="text" name="_hp" value={form._hp} onChange={e => set('_hp', e.target.value)}
        style={{ display: 'none' }} tabIndex={-1} autoComplete="off" aria-hidden="true" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label style={labelStyle}>Full name *</label>
          <input type="text" required placeholder="Alex Johnson"
            value={form.name} onChange={e => set('name', e.target.value)} style={inputStyle} />
        </div>
        <div>
          <label style={labelStyle}>Email address *</label>
          <input type="email" required placeholder="alex@gmail.com"
            value={form.email} onChange={e => set('email', e.target.value)} style={inputStyle} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label style={labelStyle}>Phone number {optionalTag}</label>
          <input type="tel" placeholder="+91 98765 43210"
            value={form.phone} onChange={e => set('phone', e.target.value)} style={inputStyle} />
        </div>
        <div>
          <label style={labelStyle}>Position applying for *</label>
          <select required value={form.position} onChange={e => set('position', e.target.value)}
            style={{ ...inputStyle, appearance: 'none' as const }}>
            <option value="">Select a role...</option>
            <option>Shopify Developer — Junior</option>
            <option>Shopify Developer — Mid-Level</option>
            <option>Shopify Developer — Senior</option>
            <option>Shopify Theme Developer</option>
            <option>Open Application</option>
          </select>
        </div>
      </div>

      <div>
        <label style={labelStyle}>Years of experience *</label>
        <select required value={form.experience} onChange={e => set('experience', e.target.value)}
          style={{ ...inputStyle, appearance: 'none' as const }}>
          <option value="">Select experience level...</option>
          <option>Fresher — Basic HTML, CSS &amp; JavaScript</option>
          <option>Less than 1 year</option>
          <option>1–2 years</option>
          <option>3–5 years</option>
          <option>5+ years</option>
        </select>
      </div>

      <div>
        <label style={labelStyle}>Portfolio / GitHub URL {optionalTag}</label>
        <input type="url" placeholder="https://github.com/yourprofile or your portfolio site"
          value={form.portfolio} onChange={e => set('portfolio', e.target.value)} style={inputStyle} />
      </div>

      <div>
        <label style={labelStyle}>Cover letter / Tell us about yourself *</label>
        <textarea rows={4} required
          placeholder="Tell us about your skills, what projects you've worked on, and why you'd like to join Miracle Websoft..."
          value={form.message} onChange={e => set('message', e.target.value)}
          style={{ ...inputStyle, resize: 'none' }} />
      </div>

      {/* Resume upload */}
      <div>
        <label style={labelStyle}>Resume / CV {optionalTag}</label>
        <input
          ref={fileRef}
          type="file"
          accept=".pdf,.doc,.docx"
          style={{ display: 'none' }}
          onChange={e => { const f = e.target.files?.[0]; if (f) handleFile(f) }}
        />
        {resume ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem 1rem', borderRadius: '10px', background: 'rgba(108,99,255,0.1)', border: '1px solid rgba(108,99,255,0.25)' }}>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: '0.82rem', fontWeight: 500, color: '#fff', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{resume.name}</div>
              <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.6)', marginTop: '1px' }}>{(resume.size / 1024).toFixed(0)} KB</div>
            </div>
            <button type="button" onClick={() => { setResume(null); if (fileRef.current) fileRef.current.value = '' }}
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.6)', padding: '2px', flexShrink: 0 }}>
              <X size={14} />
            </button>
          </div>
        ) : (
          <button
            type="button"
            onClick={() => fileRef.current?.click()}
            onDragOver={e => { e.preventDefault(); setDragOver(true) }}
            onDragLeave={() => setDragOver(false)}
            onDrop={e => { e.preventDefault(); setDragOver(false); const f = e.dataTransfer.files[0]; if (f) handleFile(f) }}
            style={{
              width: '100%',
              padding: '1.25rem 1rem',
              borderRadius: '10px',
              background: dragOver ? 'rgba(108,99,255,0.1)' : 'rgba(255,255,255,0.03)',
              border: `1px dashed ${dragOver ? 'rgba(108,99,255,0.5)' : 'rgba(255,255,255,0.15)'}`,
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.4rem',
              transition: 'all 0.2s',
            }}
          >
            <Upload size={16} style={{ color: 'rgba(255,255,255,0.6)' }} />
            <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)' }}>Click to upload or drag &amp; drop</span>
            <span style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.2)' }}>PDF, DOC, DOCX — max 5 MB</span>
          </button>
        )}
      </div>

      {state === 'error' && (
        <p style={{ fontSize: '0.8rem', color: '#f87171', textAlign: 'center' }}>
          Something went wrong. Email us directly at{' '}
          <a href="mailto:karam@miraclewebsoft.com" style={{ color: '#f87171' }}>karam@miraclewebsoft.com</a>
        </p>
      )}

      <button type="submit" disabled={state === 'sending'} className="mw-btn-primary justify-center w-full"
        style={{ padding: '0.9rem', opacity: state === 'sending' ? 0.7 : 1 }}>
        {state === 'sending' ? (
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center' }}>
            <Loader2 size={15} style={{ animation: 'spin 1s linear infinite' }} /> Submitting…
          </span>
        ) : (
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center' }}>
            Submit application <ArrowRight size={15} />
          </span>
        )}
      </button>

      <p style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.25)', textAlign: 'center', lineHeight: 1.6 }}>
        We review every application personally and respond within 3–5 business days.
      </p>
    </form>
  )
}
