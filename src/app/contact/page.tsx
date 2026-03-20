import type { Metadata } from 'next'
import Breadcrumb from '@/components/layout/Breadcrumb'
import { Mail, MessageCircle, MapPin, Clock } from 'lucide-react'
import FaqSection from '@/components/ui/FaqSection'

const contactFaqs = [
  { question: 'How do I get started with Miracle Websoft?', answer: 'Fill in the contact form or message us on WhatsApp. We reply within 24 hours. If your project is a good fit, we schedule a 30-minute discovery call, then send a detailed proposal with clear scope, timeline, and fixed pricing. No vague estimates.' },
  { question: 'What is included in the free store audit?', answer: 'A full review of your Shopify store covering: page speed and Core Web Vitals, mobile user experience, conversion rate blockers, product page quality, checkout flow analysis, and SEO health. Delivered as a written report with specific, prioritised recommendations — completely free, no strings attached.' },
  { question: 'Do you work on a fixed price or hourly basis?', answer: 'Fixed price on all projects. We send a detailed proposal before any work begins. You know exactly what you are paying before we start. No hourly billing, no surprise invoices.' },
  { question: 'How long does it take to get a proposal?', answer: 'After our discovery call, we typically send a full proposal within 2–3 business days. For smaller projects or straightforward audits, it is often the same day.' },
  { question: 'Do you sign NDAs?', answer: 'Yes. We sign NDAs on request before any discovery or audit work begins. All client information is treated as strictly confidential.' },
  { question: 'Do you work with brands outside the USA/UK/Australia?', answer: 'Yes — those are our primary markets but we work with fashion brands worldwide. All communication is in English. If your store sells internationally and you need Shopify Markets or multi-currency setup, that is something we handle regularly.' },
]

export const metadata: Metadata = {
  title: 'Contact Us — Get Your Free Shopify Store Audit',
  description: 'Get a free audit of your Shopify store. We will identify what is losing you money and show you how to fix it.',
  alternates: { canonical: 'https://miraclewebsoft.com/contact' },
}

const WHATSAPP_URL = `https://wa.me/916239269736?text=${encodeURIComponent("Hi, I'd like to get a free Shopify store audit for my clothing brand.")}`

const contactItems = [
  { icon: Mail, label: 'Email', value: 'karam@miraclewebsoft.com', href: 'mailto:karam@miraclewebsoft.com', badge: null },
  { icon: MessageCircle, label: 'WhatsApp', value: '+91 6239 269736', href: WHATSAPP_URL, badge: 'Chat on WhatsApp' },
  { icon: MapPin, label: 'Based in', value: 'India — Serving USA, UK & Australia', href: null, badge: null },
  { icon: Clock, label: 'Response time', value: 'Within 24 hours', href: null, badge: null },
]

export default function ContactPage() {
  return (
    <>
      <div style={{ background: '#0a0a0a', minHeight: '100vh', paddingTop: '8rem', paddingBottom: '5rem' }}>
      <div className="mw-container">
        <div className="mb-8">
          <Breadcrumb items={[{ label: 'Contact' }]} />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <span className="mw-eyebrow">Get In Touch</span>
            <h1 style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#fff', marginBottom: '1.25rem' }}>Get your free<br /><em style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.5)' }}>store audit.</em></h1>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '2.5rem', fontWeight: 300 }}>
              Tell us about your brand and your goals. We will review your store and come back with a detailed audit — completely free, no strings attached.
            </p>
            <div className="flex flex-col gap-3">
              {contactItems.map(item => {
                const Icon = item.icon
                const inner = (
                  <div className="flex items-start gap-4 p-4 rounded-2xl transition-all" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(108,99,255,0.12)', border: '1px solid rgba(108,99,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Icon size={16} style={{ color: 'var(--accent)' }} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.68rem', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: '0.2rem' }}>{item.label}</div>
                      <div style={{ fontSize: '0.9rem', color: '#fff', fontWeight: 400 }}>{item.value}</div>
                      {item.badge && (
                        <span style={{ display: 'inline-block', marginTop: '0.4rem', fontSize: '0.7rem', fontWeight: 600, padding: '0.2rem 0.6rem', borderRadius: '9999px', background: '#25D366', color: '#fff' }}>{item.badge}</span>
                      )}
                    </div>
                  </div>
                )
                return item.href
                  ? <a key={item.label} href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}>{inner}</a>
                  : <div key={item.label}>{inner}</div>
              })}
            </div>
          </div>

          {/* Right — Form */}
          <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '24px', padding: '2.5rem' }}>
            <h2 style={{ fontSize: '1.3rem', fontWeight: 600, color: '#fff', marginBottom: '1.75rem' }}>Tell us about your project</h2>
            <form className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 500, color: 'rgba(255,255,255,0.5)', marginBottom: '0.5rem', letterSpacing: '0.05em' }}>Your name</label>
                  <input type="text" placeholder="Jane Smith" style={{ width: '100%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', padding: '0.75rem 1rem', fontSize: '0.875rem', color: '#fff', outline: 'none' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 500, color: 'rgba(255,255,255,0.5)', marginBottom: '0.5rem', letterSpacing: '0.05em' }}>Email address</label>
                  <input type="email" placeholder="jane@yourbrand.com" style={{ width: '100%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', padding: '0.75rem 1rem', fontSize: '0.875rem', color: '#fff', outline: 'none' }} />
                </div>
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 500, color: 'rgba(255,255,255,0.5)', marginBottom: '0.5rem', letterSpacing: '0.05em' }}>Your Shopify store URL</label>
                <input type="url" placeholder="yourstore.myshopify.com" style={{ width: '100%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', padding: '0.75rem 1rem', fontSize: '0.875rem', color: '#fff', outline: 'none' }} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 500, color: 'rgba(255,255,255,0.5)', marginBottom: '0.5rem', letterSpacing: '0.05em' }}>What do you need help with?</label>
                <select style={{ width: '100%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', padding: '0.75rem 1rem', fontSize: '0.875rem', color: '#fff', outline: 'none' }}>
                  <option value="">Select a service...</option>
                  <option>Custom Shopify Development</option>
                  <option>Shopify App Development</option>
                  <option>Migration to Shopify</option>
                  <option>CRO &amp; Speed Optimization</option>
                  <option>Free Store Audit</option>
                </select>
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 500, color: 'rgba(255,255,255,0.5)', marginBottom: '0.5rem', letterSpacing: '0.05em' }}>Tell us about your brand</label>
                <textarea rows={4} placeholder="What do you sell, who are your customers, what is your biggest challenge?" style={{ width: '100%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', padding: '0.75rem 1rem', fontSize: '0.875rem', color: '#fff', outline: 'none', resize: 'none' }} />
              </div>
              <button type="submit" className="mw-btn-primary justify-center w-full py-4">Send message — get free audit</button>
              <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)', textAlign: 'center' }}>We respond within 24 hours. No spam, ever.</p>
            </form>
          </div>
        </div>
      </div>
    </div>
    <FaqSection faqs={contactFaqs} heading="Before you reach out" eyebrow="FAQ" />
  </>
  )
}
