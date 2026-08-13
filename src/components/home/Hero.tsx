'use client'

import { useEffect, useRef, useState, type PointerEvent } from 'react'
import Link from 'next/link'
import { motion, animate, useInView, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion'
import { ArrowRight, Gauge, PackageCheck, ShoppingBag, Star, Zap } from 'lucide-react'

const metrics = [
  { value: 650, suffix: '+', label: 'Shopify Projects' },
  { value: 15000, suffix: '+', label: 'Hours Worked' },
  { value: 500, prefix: '$', suffix: 'K+', label: 'Earned on Upwork' },
  { value: 100, suffix: '%', label: 'Shopify Focus' },
]

const dashboardMetrics = [
  { label: 'Conversion rate', value: '4.8%', delta: '+19%' },
  { label: 'Store speed', value: '96', delta: '+34' },
  { label: 'Live orders', value: '128', delta: '+22%' },
]

const products = [
  { name: 'Premium Hoodie', status: 'Selling fast', sales: '$18.4K' },
  { name: 'Starter Bundle', status: 'High intent', sales: '$12.7K' },
]

const particles = [
  { left: '8%', top: '18%', delay: '0s' },
  { left: '18%', top: '68%', delay: '1.3s' },
  { left: '42%', top: '12%', delay: '0.7s' },
  { left: '64%', top: '76%', delay: '2s' },
  { left: '78%', top: '20%', delay: '1.7s' },
  { left: '92%', top: '58%', delay: '0.4s' },
]

function formatMetric(value: number, prefix = '', suffix = '') {
  return `${prefix}${Math.round(value).toLocaleString('en-US')}${suffix}`
}

function CountMetric({
  value,
  prefix,
  suffix,
  label,
  index,
}: {
  value: number
  prefix?: string
  suffix?: string
  label: string
  index: number
}) {
  const ref = useRef<HTMLLIElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const shouldReduceMotion = useReducedMotion()
  const [displayValue, setDisplayValue] = useState(formatMetric(0, prefix, suffix))
  const finalValue = formatMetric(value, prefix, suffix)

  useEffect(() => {
    if (!inView || shouldReduceMotion) return

    const controls = animate(0, value, {
      duration: 1.25,
      delay: index * 0.08,
      ease: [0.2, 0.8, 0.2, 1],
      onUpdate: (latest) => setDisplayValue(formatMetric(latest, prefix, suffix)),
    })

    return () => controls.stop()
  }, [inView, index, prefix, shouldReduceMotion, suffix, value])

  return (
    <motion.li
      ref={ref}
      className="mws-hero-metric"
      initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.2, 0.8, 0.2, 1] }}
    >
      <span className="mws-hero-metric-value">{shouldReduceMotion ? finalValue : displayValue}</span>
      <span className="mws-hero-metric-label">{label}</span>
    </motion.li>
  )
}

function DashboardIllustration() {
  const shouldReduceMotion = useReducedMotion()
  const pointerX = useMotionValue(0)
  const pointerY = useMotionValue(0)
  const springX = useSpring(pointerX, { stiffness: 120, damping: 24, mass: 0.3 })
  const springY = useSpring(pointerY, { stiffness: 120, damping: 24, mass: 0.3 })
  const rotateY = useTransform(springX, [-1, 1], [-8, 8])
  const rotateX = useTransform(springY, [-1, 1], [7, -7])

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    if (shouldReduceMotion) return

    const rect = event.currentTarget.getBoundingClientRect()
    pointerX.set(((event.clientX - rect.left) / rect.width - 0.5) * 2)
    pointerY.set(((event.clientY - rect.top) / rect.height - 0.5) * 2)
  }

  function handlePointerLeave() {
    pointerX.set(0)
    pointerY.set(0)
  }

  return (
    <motion.aside
      className="mws-dashboard-wrap"
      aria-label="Custom Shopify performance dashboard illustration"
      initial={shouldReduceMotion ? false : { opacity: 0, y: 34, scale: 0.97 }}
      animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.9, delay: 0.32, ease: [0.2, 0.8, 0.2, 1] }}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <motion.div
        className="mws-dashboard-stage"
        style={shouldReduceMotion ? undefined : { rotateX, rotateY }}
        animate={shouldReduceMotion ? undefined : { y: [0, -12, 0] }}
        transition={shouldReduceMotion ? undefined : { duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="mws-dashboard-panel">
          <div className="mws-dashboard-header">
            <div>
              <span className="mws-dashboard-kicker">Shopify command center</span>
              <strong>Live store analytics</strong>
            </div>
            <span className="mws-dashboard-status">
              <span />
              Optimized
            </span>
          </div>

          <div className="mws-dashboard-summary" aria-label="Dashboard performance metrics">
            {dashboardMetrics.map((metric) => (
              <div key={metric.label}>
                <span>{metric.label}</span>
                <strong>{metric.value}</strong>
                <em>{metric.delta}</em>
              </div>
            ))}
          </div>

          <div className="mws-dashboard-grid">
            <div className="mws-widget mws-widget-large">
              <div className="mws-widget-top">
                <span>Revenue</span>
                <strong>$428.6K</strong>
              </div>
              <div className="mws-chart" aria-hidden="true">
                {[42, 58, 46, 72, 64, 88, 76, 94].map((height, index) => (
                  <span key={index} style={{ height: `${height}%`, animationDelay: `${index * 0.08}s` }} />
                ))}
                <i className="mws-chart-line mws-chart-line-1" />
                <i className="mws-chart-line mws-chart-line-2" />
                <i className="mws-chart-line mws-chart-line-3" />
              </div>
            </div>

            <div className="mws-widget">
              <div className="mws-score-ring">
                <Gauge size={18} />
                <strong>96</strong>
              </div>
              <span className="mws-widget-label">Performance score</span>
            </div>

            <div className="mws-widget mws-orders-widget">
              <span className="mws-widget-label">Orders today</span>
              <strong>128</strong>
              <div className="mws-order-stack" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
            </div>

            <div className="mws-widget mws-product-widget">
              <div className="mws-widget-top">
                <span>Top products</span>
                <PackageCheck size={16} />
              </div>
              <div className="mws-product-list">
                {products.map((product) => (
                  <div key={product.name} className="mws-product-row">
                    <span className="mws-product-thumb" />
                    <div>
                      <strong>{product.name}</strong>
                      <small>{product.status}</small>
                    </div>
                    <em>{product.sales}</em>
                  </div>
                ))}
              </div>
            </div>

            <div className="mws-widget mws-widget-wide">
              <div className="mws-widget-top">
                <span>Conversion lift</span>
                <strong>+31%</strong>
              </div>
              <div className="mws-conversion-bars" aria-hidden="true">
                <span style={{ width: '46%' }} />
                <span style={{ width: '72%' }} />
                <span style={{ width: '88%' }} />
              </div>
            </div>
          </div>
        </div>

        <motion.div
          className="mws-mobile-preview"
          animate={shouldReduceMotion ? undefined : { y: [0, 10, 0] }}
          transition={shouldReduceMotion ? undefined : { duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        >
          <span className="mws-phone-speaker" />
          <div className="mws-phone-product" />
          <strong>Express checkout</strong>
          <small>Apple Pay ready</small>
          <div className="mws-phone-total">
            <span>Total</span>
            <b>$148.00</b>
          </div>
          <span className="mws-phone-button">Pay now</span>
        </motion.div>

        <motion.div
          className="mws-floating-card mws-floating-card-top"
          animate={shouldReduceMotion ? undefined : { y: [0, -10, 0], x: [0, 6, 0] }}
          transition={shouldReduceMotion ? undefined : { duration: 5.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ShoppingBag size={18} />
          <div>
            <span>Live sale</span>
            <strong>$2,840</strong>
          </div>
        </motion.div>

        <motion.div
          className="mws-floating-card mws-floating-card-bottom"
          animate={shouldReduceMotion ? undefined : { y: [0, 12, 0], x: [0, -4, 0] }}
          transition={shouldReduceMotion ? undefined : { duration: 6.4, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
        >
          <Zap size={18} />
          <div>
            <span>Speed gain</span>
            <strong>1.8s faster</strong>
          </div>
        </motion.div>
      </motion.div>
    </motion.aside>
  )
}

export default function Hero() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="mws-shopify-hero" aria-labelledby="home-hero-title">
      <div className="mws-hero-bg" aria-hidden="true">
        <span className="mws-hero-glow mws-hero-glow-one" />
        <span className="mws-hero-glow mws-hero-glow-two" />
        <span className="mws-hero-line mws-hero-line-one" />
        <span className="mws-hero-line mws-hero-line-two" />
        {particles.map((particle, index) => (
          <span
            key={index}
            className="mws-hero-particle"
            style={{ left: particle.left, top: particle.top, animationDelay: particle.delay }}
          />
        ))}
      </div>

      <div className="mw-container mws-hero-container">
        <div className="mws-hero-copy">
          <motion.div
            className="mws-hero-badge"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <Star size={14} fill="currentColor" />
            Trusted Shopify Development Partner
          </motion.div>

          <motion.h1
            id="home-hero-title"
            className="mws-hero-title"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.72, delay: 0.08, ease: [0.2, 0.8, 0.2, 1] }}
          >
            Build Shopify Stores That{' '}
            <span className="mws-gradient-text">Drive More Sales.</span>
          </motion.h1>

          <motion.p
            className="mws-hero-description"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.72, delay: 0.16, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <strong>650+ Shopify projects completed.</strong> From custom Shopify development and Shopify Plus builds to
            performance optimization, migrations, and long-term technical support, we help ecommerce brands build faster,
            convert better, and scale with confidence.
          </motion.p>

          <motion.div
            className="mws-hero-actions"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.72, delay: 0.24, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <Link href="/contact" className="mws-hero-button mws-hero-button-primary">
              Book Free Consultation
              <ArrowRight size={18} />
            </Link>
            <Link href="/work" className="mws-hero-button mws-hero-button-secondary">
              View Our Work
            </Link>
          </motion.div>

          <motion.ul
            className="mws-hero-trust"
            aria-label="Miracle Websoft Shopify trust metrics"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.72, delay: 0.32, ease: [0.2, 0.8, 0.2, 1] }}
          >
            {metrics.map((metric, index) => (
              <CountMetric key={metric.label} {...metric} index={index} />
            ))}
          </motion.ul>
        </div>

        <DashboardIllustration />
      </div>

      <span data-hero-boundary aria-hidden="true" style={{ position: 'absolute', bottom: 0, left: 0, width: 1, height: 1, pointerEvents: 'none' }} />

      <style>{`
        .mws-shopify-hero {
          position: relative;
          isolation: isolate;
          overflow: hidden;
          min-height: 100svh;
          padding: 7.5rem 0 2rem;
          background:
            radial-gradient(circle at 72% 38%, rgba(37, 99, 235, 0.26), transparent 34rem),
            radial-gradient(circle at 18% 18%, rgba(96, 165, 250, 0.11), transparent 26rem),
            linear-gradient(180deg, #050505 0%, #08080b 56%, #050505 100%);
          color: #ffffff;
        }

        .mws-shopify-hero::before {
          content: "";
          position: absolute;
          inset: 0;
          z-index: -2;
          background-image:
            linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px);
          background-size: 76px 76px;
          mask-image: radial-gradient(ellipse 78% 58% at 55% 35%, #000 28%, transparent 82%);
        }

        .mws-shopify-hero::after {
          content: "";
          position: absolute;
          inset: 0;
          z-index: -1;
          opacity: 0.07;
          pointer-events: none;
          background-image: url("data:image/svg+xml;utf8,<svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.34 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>");
          mix-blend-mode: overlay;
        }

        .mws-hero-bg {
          position: absolute;
          inset: 0;
          z-index: -1;
          pointer-events: none;
        }

        .mws-hero-glow {
          position: absolute;
          border-radius: 999px;
          filter: blur(62px);
          opacity: 0.44;
          transform: translateZ(0);
          animation: mws-hero-glow-shift 12s ease-in-out infinite alternate;
        }

        .mws-hero-glow-one {
          width: 34rem;
          height: 34rem;
          right: -7rem;
          top: 6rem;
          background: rgba(37, 99, 235, 0.24);
        }

        .mws-hero-glow-two {
          width: 26rem;
          height: 26rem;
          left: -12rem;
          top: 12rem;
          background: rgba(96, 165, 250, 0.1);
          animation-delay: -4s;
        }

        .mws-hero-line {
          position: absolute;
          height: 1px;
          width: 34rem;
          background: linear-gradient(90deg, transparent, rgba(96, 165, 250, 0.42), transparent);
          opacity: 0.34;
          transform: rotate(-18deg);
          animation: mws-hero-line-drift 9s ease-in-out infinite;
        }

        .mws-hero-line-one {
          top: 18%;
          right: 3%;
        }

        .mws-hero-line-two {
          bottom: 18%;
          left: 8%;
          animation-delay: -3s;
        }

        .mws-hero-particle {
          position: absolute;
          width: 3px;
          height: 3px;
          border-radius: 999px;
          background: rgba(96, 165, 250, 0.82);
          box-shadow: 0 0 18px rgba(59, 130, 246, 0.9);
          opacity: 0.44;
          animation: mws-hero-particle 4.5s ease-in-out infinite;
        }

        .mws-hero-container {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(420px, 0.94fr);
          align-items: center;
          gap: 4.5rem;
        }

        .mws-hero-copy {
          max-width: 760px;
        }

        .mws-hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1.35rem;
          padding: 0.48rem 0.78rem;
          border: 1px solid rgba(59, 130, 246, 0.38);
          border-radius: 999px;
          background: linear-gradient(180deg, rgba(59, 130, 246, 0.18), rgba(59, 130, 246, 0.07));
          box-shadow: 0 0 34px rgba(59, 130, 246, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.12);
          color: #dbeafe;
          font-size: 0.82rem;
          font-weight: 700;
          line-height: 1;
        }

        .mws-hero-badge svg {
          color: #60a5fa;
          filter: drop-shadow(0 0 10px rgba(96, 165, 250, 0.85));
        }

        .mws-hero-title {
          max-width: 760px;
          margin: 0 0 1.35rem;
          color: #ffffff;
          font-family: var(--font-geist), -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 80px;
          font-weight: 800;
          line-height: 0.98;
          letter-spacing: 0;
        }

        .mws-gradient-text {
          display: inline-block;
          background: linear-gradient(90deg, #2563eb, #60a5fa, #93c5fd, #2563eb);
          background-size: 240% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: mws-gradient-text 5s ease-in-out infinite;
          filter: drop-shadow(0 0 22px rgba(37, 99, 235, 0.24));
        }

        .mws-hero-description {
          max-width: 660px;
          margin: 0;
          color: #a1a1aa;
          font-size: 1.1rem;
          line-height: 1.75;
          font-weight: 450;
        }

        .mws-hero-description strong {
          color: #ffffff;
          font-weight: 800;
        }

        .mws-hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 0.9rem;
          margin-top: 2rem;
        }

        .mws-hero-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.6rem;
          min-height: 3.35rem;
          padding: 0 1.35rem;
          border-radius: 999px;
          font-size: 0.95rem;
          font-weight: 800;
          text-decoration: none;
          transition: transform 0.24s ease, border-color 0.24s ease, box-shadow 0.24s ease, background 0.24s ease;
        }

        .mws-hero-button-primary {
          border: 1px solid rgba(147, 197, 253, 0.5);
          background: linear-gradient(135deg, #2563eb 0%, #3b82f6 45%, #60a5fa 100%);
          color: #ffffff;
          box-shadow: 0 16px 44px rgba(37, 99, 235, 0.38), inset 0 1px 0 rgba(255, 255, 255, 0.22);
        }

        .mws-hero-button-secondary {
          border: 1px solid rgba(255, 255, 255, 0.16);
          background: rgba(255, 255, 255, 0.04);
          color: #ffffff;
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(16px);
        }

        .mws-hero-button:hover {
          transform: translateY(-2px);
        }

        .mws-hero-button-primary:hover {
          box-shadow: 0 20px 58px rgba(37, 99, 235, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.28);
        }

        .mws-hero-button-secondary:hover {
          border-color: rgba(255, 255, 255, 0.34);
          background: rgba(255, 255, 255, 0.07);
        }

        .mws-hero-button svg {
          transition: transform 0.24s ease;
        }

        .mws-hero-button:hover svg {
          transform: translateX(3px);
        }

        .mws-hero-trust {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 0.75rem;
          margin: 2.1rem 0 0;
          padding: 0;
          list-style: none;
        }

        .mws-hero-metric {
          min-height: 6.4rem;
          padding: 1rem;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.055), rgba(255, 255, 255, 0.025));
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.08), 0 16px 42px rgba(0, 0, 0, 0.24);
          backdrop-filter: blur(18px);
          transition: transform 0.24s ease, border-color 0.24s ease, background 0.24s ease;
        }

        .mws-hero-metric:hover {
          transform: translateY(-3px);
          border-color: rgba(96, 165, 250, 0.34);
          background: linear-gradient(180deg, rgba(59, 130, 246, 0.095), rgba(255, 255, 255, 0.03));
        }

        .mws-hero-metric-value {
          display: block;
          color: #ffffff;
          font-size: 1.55rem;
          font-weight: 900;
          line-height: 1;
          letter-spacing: 0;
        }

        .mws-hero-metric-label {
          display: block;
          margin-top: 0.55rem;
          color: #a1a1aa;
          font-size: 0.78rem;
          font-weight: 650;
          line-height: 1.35;
        }

        .mws-dashboard-wrap {
          position: relative;
          min-height: 640px;
          perspective: 1400px;
        }

        .mws-dashboard-wrap::before {
          content: "";
          position: absolute;
          inset: 5% -7% 1% 7%;
          border-radius: 999px;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.25), transparent 62%);
          filter: blur(30px);
          opacity: 0.9;
        }

        .mws-dashboard-stage {
          position: relative;
          width: min(100%, 620px);
          min-height: 600px;
          margin-left: auto;
          transform-style: preserve-3d;
          will-change: transform;
        }

        .mws-dashboard-panel {
          position: absolute;
          inset: 4rem 2.5rem 3rem 0;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 30px;
          background:
            linear-gradient(135deg, rgba(255, 255, 255, 0.105), rgba(255, 255, 255, 0.035)),
            rgba(11, 11, 15, 0.86);
          box-shadow:
            0 46px 110px rgba(0, 0, 0, 0.52),
            0 0 72px rgba(37, 99, 235, 0.18),
            inset 0 1px 0 rgba(255, 255, 255, 0.14);
          backdrop-filter: blur(28px);
          transform: rotateY(-7deg) rotateX(4deg) translateZ(18px);
        }

        .mws-dashboard-panel::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 42px 42px;
          mask-image: linear-gradient(180deg, #000, transparent 82%);
          pointer-events: none;
        }

        .mws-dashboard-header {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          padding: 1.35rem 1.35rem 1rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .mws-dashboard-kicker {
          display: block;
          margin-bottom: 0.25rem;
          color: #60a5fa;
          font-size: 0.68rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        .mws-dashboard-header strong {
          color: #ffffff;
          font-size: 1rem;
          font-weight: 850;
          letter-spacing: 0;
        }

        .mws-dashboard-status {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.42rem 0.62rem;
          border: 1px solid rgba(34, 197, 94, 0.24);
          border-radius: 999px;
          background: rgba(34, 197, 94, 0.09);
          color: #bbf7d0;
          font-size: 0.72rem;
          font-weight: 800;
        }

        .mws-dashboard-status span {
          width: 7px;
          height: 7px;
          border-radius: 999px;
          background: #22c55e;
          box-shadow: 0 0 14px rgba(34, 197, 94, 0.85);
        }

        .mws-dashboard-grid {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: 1.25fr 0.75fr;
          gap: 0.75rem;
          padding: 1rem;
        }

        .mws-dashboard-summary {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 0.6rem;
          padding: 0.85rem 1rem 0;
        }

        .mws-dashboard-summary div {
          min-height: 4.7rem;
          padding: 0.76rem;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 15px;
          background: rgba(255, 255, 255, 0.035);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.08);
        }

        .mws-dashboard-summary span,
        .mws-dashboard-summary em {
          display: block;
          color: #a1a1aa;
          font-size: 0.66rem;
          font-style: normal;
          font-weight: 750;
          line-height: 1.2;
        }

        .mws-dashboard-summary strong {
          display: block;
          margin-top: 0.34rem;
          color: #ffffff;
          font-size: 1.2rem;
          line-height: 1;
        }

        .mws-dashboard-summary em {
          margin-top: 0.34rem;
          color: #bbf7d0;
        }

        .mws-widget {
          position: relative;
          overflow: hidden;
          min-height: 8.6rem;
          padding: 1rem;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.04);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.08);
        }

        .mws-widget::after {
          content: "";
          position: absolute;
          inset: auto -20% -45% 12%;
          height: 7rem;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.16), transparent 68%);
          pointer-events: none;
        }

        .mws-widget-large {
          min-height: 15rem;
        }

        .mws-widget-wide {
          grid-column: 1 / -1;
          min-height: 8.4rem;
        }

        .mws-widget-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 1rem;
          color: #a1a1aa;
          font-size: 0.75rem;
          font-weight: 750;
        }

        .mws-widget-top strong {
          color: #ffffff;
          font-size: 1.4rem;
          line-height: 1;
        }

        .mws-widget-label {
          display: block;
          color: #a1a1aa;
          font-size: 0.74rem;
          font-weight: 700;
        }

        .mws-chart {
          position: absolute;
          left: 1rem;
          right: 1rem;
          bottom: 1rem;
          display: grid;
          grid-template-columns: repeat(8, 1fr);
          align-items: end;
          gap: 0.44rem;
          height: 8.5rem;
        }

        .mws-chart span {
          display: block;
          min-height: 1rem;
          border-radius: 999px 999px 4px 4px;
          background: linear-gradient(180deg, #60a5fa, #2563eb 70%, rgba(37, 99, 235, 0.28));
          box-shadow: 0 0 18px rgba(37, 99, 235, 0.24);
          transform-origin: bottom;
          animation: mws-chart-grow 0.9s ease both;
        }

        .mws-chart-line {
          position: absolute;
          left: 4%;
          height: 2px;
          border-radius: 999px;
          background: linear-gradient(90deg, rgba(34, 197, 94, 0), rgba(34, 197, 94, 0.9), rgba(96, 165, 250, 0.1));
          box-shadow: 0 0 14px rgba(34, 197, 94, 0.28);
          transform-origin: left center;
          clip-path: inset(0 0 0 0);
          animation: mws-line-draw 1.3s ease 0.35s both;
        }

        .mws-chart-line-1 {
          bottom: 24%;
          width: 38%;
          transform: rotate(-10deg);
        }

        .mws-chart-line-2 {
          bottom: 46%;
          left: 34%;
          width: 34%;
          transform: rotate(14deg);
        }

        .mws-chart-line-3 {
          bottom: 64%;
          left: 62%;
          width: 30%;
          transform: rotate(-16deg);
        }

        .mws-score-ring {
          display: grid;
          place-items: center;
          width: 5.8rem;
          height: 5.8rem;
          margin: 0 auto 0.72rem;
          border-radius: 999px;
          background:
            radial-gradient(circle at center, rgba(11, 11, 15, 0.95) 56%, transparent 58%),
            conic-gradient(from 0deg, #60a5fa 0deg 330deg, rgba(255, 255, 255, 0.1) 330deg 360deg);
          color: #ffffff;
        }

        .mws-score-ring svg {
          color: #60a5fa;
          margin-bottom: 0.2rem;
        }

        .mws-score-ring strong {
          font-size: 1.45rem;
          line-height: 1;
        }

        .mws-orders-widget strong {
          display: block;
          margin: 0.3rem 0 0.85rem;
          color: #ffffff;
          font-size: 2rem;
          line-height: 1;
        }

        .mws-order-stack {
          display: grid;
          gap: 0.42rem;
        }

        .mws-order-stack span {
          display: block;
          height: 0.56rem;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.1);
        }

        .mws-order-stack span:nth-child(1) {
          width: 88%;
        }

        .mws-order-stack span:nth-child(2) {
          width: 68%;
        }

        .mws-order-stack span:nth-child(3) {
          width: 78%;
        }

        .mws-product-widget {
          grid-column: 1 / -1;
        }

        .mws-product-list {
          display: grid;
          gap: 0.7rem;
          margin-top: 1rem;
        }

        .mws-product-row {
          display: grid;
          grid-template-columns: auto 1fr auto;
          align-items: center;
          gap: 0.7rem;
        }

        .mws-product-thumb {
          width: 2.5rem;
          height: 2.5rem;
          border-radius: 12px;
          background:
            linear-gradient(135deg, rgba(96, 165, 250, 0.58), rgba(37, 99, 235, 0.16)),
            rgba(255, 255, 255, 0.05);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.18);
        }

        .mws-product-row strong {
          display: block;
          color: #ffffff;
          font-size: 0.78rem;
          line-height: 1.25;
        }

        .mws-product-row small {
          color: #a1a1aa;
          font-size: 0.68rem;
        }

        .mws-product-row em {
          color: #bbf7d0;
          font-size: 0.74rem;
          font-style: normal;
          font-weight: 850;
        }

        .mws-conversion-bars {
          display: grid;
          gap: 0.62rem;
          margin-top: 1rem;
        }

        .mws-conversion-bars span {
          display: block;
          height: 0.72rem;
          border-radius: 999px;
          background: linear-gradient(90deg, #2563eb, #60a5fa);
          box-shadow: 0 0 18px rgba(37, 99, 235, 0.25);
          animation: mws-bar-draw 1.2s ease both;
          transform-origin: left center;
        }

        .mws-mobile-preview {
          position: absolute;
          right: 0;
          top: 9rem;
          z-index: 3;
          width: 10.6rem;
          min-height: 20.5rem;
          padding: 1rem 0.8rem;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 2rem;
          background:
            linear-gradient(180deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.035)),
            rgba(5, 5, 5, 0.92);
          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.52), 0 0 44px rgba(37, 99, 235, 0.22);
          backdrop-filter: blur(24px);
        }

        .mws-phone-speaker {
          display: block;
          width: 2.5rem;
          height: 0.28rem;
          margin: 0 auto 1rem;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.22);
        }

        .mws-phone-product {
          height: 5.5rem;
          border-radius: 1.2rem;
          background:
            linear-gradient(135deg, rgba(96, 165, 250, 0.56), rgba(37, 99, 235, 0.12)),
            rgba(255, 255, 255, 0.06);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.18);
        }

        .mws-mobile-preview strong {
          display: block;
          margin-top: 1rem;
          color: #ffffff;
          font-size: 0.88rem;
          line-height: 1.2;
        }

        .mws-mobile-preview small {
          display: block;
          color: #a1a1aa;
          font-size: 0.68rem;
          margin-top: 0.3rem;
        }

        .mws-phone-total {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.7rem;
          margin-top: 1rem;
          padding-top: 1rem;
          border-top: 1px solid rgba(255, 255, 255, 0.09);
          color: #a1a1aa;
          font-size: 0.7rem;
        }

        .mws-phone-total b {
          color: #ffffff;
          font-size: 0.86rem;
        }

        .mws-phone-button {
          display: grid;
          place-items: center;
          height: 2.45rem;
          margin-top: 1rem;
          border-radius: 999px;
          background: linear-gradient(135deg, #2563eb, #60a5fa);
          color: #ffffff;
          font-size: 0.78rem;
          font-weight: 850;
          box-shadow: 0 14px 34px rgba(37, 99, 235, 0.36);
        }

        .mws-floating-card {
          position: absolute;
          z-index: 4;
          display: inline-flex;
          align-items: center;
          gap: 0.72rem;
          padding: 0.78rem 0.9rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.06);
          box-shadow: 0 24px 60px rgba(0, 0, 0, 0.42), 0 0 28px rgba(37, 99, 235, 0.18);
          backdrop-filter: blur(20px);
        }

        .mws-floating-card svg {
          color: #60a5fa;
        }

        .mws-floating-card span {
          display: block;
          color: #a1a1aa;
          font-size: 0.68rem;
          font-weight: 750;
        }

        .mws-floating-card strong {
          display: block;
          color: #ffffff;
          font-size: 0.92rem;
          line-height: 1.2;
        }

        .mws-floating-card-top {
          left: 0.2rem;
          top: 5.8rem;
        }

        .mws-floating-card-bottom {
          left: 2.1rem;
          bottom: 4.1rem;
        }

        @keyframes mws-gradient-text {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes mws-hero-glow-shift {
          from { transform: translate3d(0, 0, 0) scale(1); }
          to { transform: translate3d(-1.5rem, 1.2rem, 0) scale(1.08); }
        }

        @keyframes mws-hero-line-drift {
          0%, 100% { opacity: 0.12; transform: translateX(-1rem) rotate(-18deg); }
          50% { opacity: 0.38; transform: translateX(1rem) rotate(-18deg); }
        }

        @keyframes mws-hero-particle {
          0%, 100% { opacity: 0.18; transform: translateY(0); }
          50% { opacity: 0.62; transform: translateY(-12px); }
        }

        @keyframes mws-chart-grow {
          from { transform: scaleY(0); opacity: 0.25; }
          to { transform: scaleY(1); opacity: 1; }
        }

        @keyframes mws-line-draw {
          from { opacity: 0; clip-path: inset(0 100% 0 0); }
          to { opacity: 1; clip-path: inset(0 0 0 0); }
        }

        @keyframes mws-bar-draw {
          from { transform: scaleX(0); opacity: 0.2; }
          to { transform: scaleX(1); opacity: 1; }
        }

        @media (max-width: 1180px) {
          .mws-hero-container {
            grid-template-columns: 1fr;
            gap: 3.5rem;
            text-align: center;
          }

          .mws-hero-copy {
            max-width: 820px;
            margin: 0 auto;
          }

          .mws-hero-description {
            margin: 0 auto;
          }

          .mws-hero-actions {
            justify-content: center;
          }

          .mws-dashboard-wrap {
            min-height: 600px;
            width: min(100%, 720px);
            margin: 0 auto;
          }

          .mws-dashboard-stage {
            margin: 0 auto;
          }
        }

        @media (max-width: 860px) {
          .mws-shopify-hero {
            padding-top: 6.5rem;
          }

          .mws-hero-title {
            font-size: 56px;
            line-height: 1.02;
          }

          .mws-hero-trust {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .mws-dashboard-wrap {
            min-height: 560px;
          }

          .mws-dashboard-stage {
            width: min(100%, 600px);
            min-height: 540px;
          }

          .mws-dashboard-panel {
            inset: 3rem 1.2rem 2.6rem 0;
          }

          .mws-mobile-preview {
            right: 0.2rem;
            width: 9.4rem;
          }
        }

        @media (max-width: 640px) {
          .mws-shopify-hero {
            min-height: auto;
            padding: 6rem 0 2.75rem;
          }

          .mws-hero-container {
            gap: 2.4rem;
          }

          .mws-hero-badge {
            font-size: 0.74rem;
            max-width: 100%;
          }

          .mws-hero-title {
            font-size: 42px;
            line-height: 1.05;
          }

          .mws-hero-description {
            font-size: 1rem;
            line-height: 1.68;
          }

          .mws-hero-actions {
            display: grid;
            grid-template-columns: 1fr;
            gap: 0.75rem;
            width: 100%;
          }

          .mws-hero-button {
            width: 100%;
          }

          .mws-hero-trust {
            gap: 0.65rem;
          }

          .mws-hero-metric {
            min-height: 5.8rem;
            padding: 0.85rem;
            border-radius: 14px;
          }

          .mws-hero-metric-value {
            font-size: 1.28rem;
          }

          .mws-hero-metric-label {
            font-size: 0.72rem;
          }

          .mws-dashboard-wrap {
            min-height: 500px;
          }

          .mws-dashboard-stage {
            min-height: 490px;
          }

          .mws-dashboard-panel {
            inset: 2.2rem 0.2rem 3rem 0.2rem;
            border-radius: 24px;
            transform: none;
          }

          .mws-dashboard-header {
            padding: 1rem;
          }

          .mws-dashboard-status {
            display: none;
          }

          .mws-dashboard-grid {
            grid-template-columns: 1fr 1fr;
            gap: 0.58rem;
            padding: 0.72rem;
          }

          .mws-dashboard-summary {
            display: none;
          }

          .mws-widget {
            min-height: 7.4rem;
            padding: 0.75rem;
            border-radius: 14px;
          }

          .mws-widget-large,
          .mws-product-widget,
          .mws-widget-wide {
            grid-column: 1 / -1;
          }

          .mws-widget-large {
            min-height: 12.3rem;
          }

          .mws-chart {
            height: 6.8rem;
          }

          .mws-mobile-preview {
            right: 1.1rem;
            top: 13.4rem;
            width: 8.2rem;
            min-height: 16.5rem;
            padding: 0.78rem 0.65rem;
            border-radius: 1.55rem;
          }

          .mws-phone-product {
            height: 4rem;
          }

          .mws-floating-card {
            padding: 0.62rem 0.7rem;
            border-radius: 14px;
          }

          .mws-floating-card-top {
            left: 0;
            top: 1.2rem;
          }

          .mws-floating-card-bottom {
            left: 0.6rem;
            bottom: 0.8rem;
          }
        }

        @media (max-width: 420px) {
          .mws-hero-title {
            font-size: 38px;
          }

          .mws-hero-trust {
            grid-template-columns: 1fr;
          }

          .mws-dashboard-wrap {
            min-height: 460px;
          }

          .mws-dashboard-grid {
            grid-template-columns: 1fr;
          }

          .mws-widget {
            min-height: auto;
          }

          .mws-widget-large {
            min-height: 11.5rem;
          }

          .mws-score-ring {
            width: 4.8rem;
            height: 4.8rem;
          }

          .mws-mobile-preview {
            display: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .mws-shopify-hero *,
          .mws-shopify-hero *::before,
          .mws-shopify-hero *::after {
            animation: none !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  )
}
