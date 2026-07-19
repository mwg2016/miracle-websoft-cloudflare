import Link from 'next/link'
import {
  Activity,
  ArrowRight,
  CheckCircle2,
  Gauge,
  PackageCheck,
  PanelsTopLeft,
  PlugZap,
  ShoppingBag,
  Star,
  TrendingUp,
  Users,
  Zap,
} from 'lucide-react'

const trustIndicators = [
  { value: '650+', label: 'Shopify projects' },
  { value: '15,000+', label: 'development hours' },
  { value: '$500K+', label: 'earned on Upwork' },
  { value: '100%', label: 'Shopify focus' },
]

const serviceHighlights = [
  { icon: PanelsTopLeft, title: 'Store redesigns', body: 'Premium storefront UX for growing ecommerce brands.' },
  { icon: PlugZap, title: 'Apps and APIs', body: 'Reviews, subscriptions, ERP, CRM, shipping and custom flows.' },
  { icon: Gauge, title: 'Speed optimization', body: 'Mobile-first performance improvements without guesswork.' },
]

const dashboardMetrics = [
  { label: 'Revenue', value: '$284K', change: '+18.4%' },
  { label: 'Conversion', value: '4.8%', change: '+31%' },
  { label: 'Speed', value: '96', change: 'CWV' },
]

const orders = [
  { name: 'Luxe Hoodie', status: 'Paid', value: '$148' },
  { name: 'Skin Serum Set', status: 'Fulfilled', value: '$212' },
  { name: 'Bundle Kit', status: 'Pending', value: '$96' },
]

const appStack = ['Klaviyo', 'Recharge', 'Gorgias', 'ShipStation']

export default function Hero() {
  return (
    <section className="mws-shopify-hero" aria-labelledby="shopify-hero-heading">
      <div className="mws-shopify-hero__nav-backdrop" aria-hidden="true" />
      <div className="mws-shopify-hero__glow mws-shopify-hero__glow--one" aria-hidden="true" />
      <div className="mws-shopify-hero__glow mws-shopify-hero__glow--two" aria-hidden="true" />

      <div className="mw-container mws-shopify-hero__inner">
        <div className="mws-shopify-hero__grid">
          <div className="mws-shopify-hero__content">
            <div className="mw-rise mw-rise-1 mws-shopify-hero__badge">
              <Star size={15} fill="currentColor" />
              <span>Trusted Shopify Development Partner</span>
            </div>

            <h1 id="shopify-hero-heading" className="mw-rise mw-rise-2 mws-shopify-hero__title">
              Build a Shopify Store That Converts Visitors Into Customers
            </h1>

            <p className="mw-rise mw-rise-3 mws-shopify-hero__lead">
              We design, develop and optimize high-performing Shopify stores with clean code, mobile-first experiences and conversion-focused solutions that help ecommerce brands scale with confidence.
            </p>

            <div className="mw-rise mw-rise-4 mws-shopify-hero__actions">
              <Link href="/contact" className="mws-shopify-hero__button mws-shopify-hero__button--primary">
                Book Free Consultation <ArrowRight size={17} />
              </Link>
              <Link href="/work" className="mws-shopify-hero__button mws-shopify-hero__button--secondary">
                View Shopify Work
              </Link>
            </div>

            <div className="mw-rise mw-rise-5 mws-shopify-hero__signals" aria-label="Why ecommerce brands choose Miracle Websoft">
              <span><CheckCircle2 size={15} /> Shopify Plus ready</span>
              <span><CheckCircle2 size={15} /> Third-party app expertise</span>
              <span><CheckCircle2 size={15} /> Long-term technical support</span>
            </div>

            <div className="mw-rise mw-rise-6 mws-shopify-hero__trust" aria-label="Shopify agency proof">
              {trustIndicators.map((item) => (
                <div key={item.label}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <aside className="mw-rise mw-rise-3 mws-shopify-hero__visual" aria-label="Shopify ecommerce dashboard illustration">
            <div className="mws-dashboard">
              <div className="mws-dashboard__topbar">
                <div>
                  <span className="mws-dashboard__dot" />
                  <span className="mws-dashboard__dot" />
                  <span className="mws-dashboard__dot" />
                </div>
                <strong>Shopify Growth Console</strong>
                <span className="mws-dashboard__live"><Activity size={13} /> Live</span>
              </div>

              <div className="mws-dashboard__body">
                <div className="mws-dashboard__metrics">
                  {dashboardMetrics.map((metric) => (
                    <div key={metric.label} className="mws-dashboard__metric">
                      <span>{metric.label}</span>
                      <strong>{metric.value}</strong>
                      <em>{metric.change}</em>
                    </div>
                  ))}
                </div>

                <div className="mws-dashboard__main">
                  <div className="mws-dashboard__chart-card">
                    <div className="mws-dashboard__section-head">
                      <span>Sales performance</span>
                      <TrendingUp size={16} />
                    </div>
                    <div className="mws-dashboard__chart" aria-hidden="true">
                      <span style={{ height: '42%' }} />
                      <span style={{ height: '58%' }} />
                      <span style={{ height: '46%' }} />
                      <span style={{ height: '72%' }} />
                      <span style={{ height: '64%' }} />
                      <span style={{ height: '88%' }} />
                      <span style={{ height: '76%' }} />
                    </div>
                  </div>

                  <div className="mws-dashboard__orders">
                    <div className="mws-dashboard__section-head">
                      <span>Recent orders</span>
                      <PackageCheck size={16} />
                    </div>
                    {orders.map((order) => (
                      <div key={order.name} className="mws-dashboard__order">
                        <span />
                        <div>
                          <strong>{order.name}</strong>
                          <em>{order.status}</em>
                        </div>
                        <b>{order.value}</b>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mws-dashboard__apps">
                  {appStack.map((app) => (
                    <span key={app}>{app}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mws-mobile-card" aria-label="Mobile checkout preview">
              <div className="mws-mobile-card__phone">
                <div className="mws-mobile-card__notch" />
                <div className="mws-mobile-card__image" />
                <span>Express checkout</span>
                <strong>$128.00</strong>
                <button type="button">Pay now</button>
              </div>
            </div>

            <div className="mws-floating-card mws-floating-card--speed">
              <Zap size={16} />
              <div>
                <strong>96</strong>
                <span>Performance</span>
              </div>
            </div>

            <div className="mws-floating-card mws-floating-card--customers">
              <Users size={16} />
              <div>
                <strong>+28%</strong>
                <span>Repeat buyers</span>
              </div>
            </div>
          </aside>
        </div>

        <div className="mw-rise mw-rise-6 mws-shopify-hero__service-strip">
          {serviceHighlights.map((item) => {
            const Icon = item.icon
            return (
              <div key={item.title}>
                <Icon size={18} />
                <span>
                  <strong>{item.title}</strong>
                  <small>{item.body}</small>
                </span>
              </div>
            )
          })}
          <div>
            <ShoppingBag size={18} />
            <span>
              <strong>Merchant-first delivery</strong>
              <small>Built for US, UK and Australian Shopify brands.</small>
            </span>
          </div>
        </div>
      </div>

      <style>{`
        .mws-shopify-hero {
          position: relative;
          overflow: hidden;
          padding: 7.25rem 0 4rem;
          background:
            radial-gradient(circle at 16% 18%, rgba(59,130,246,0.18), transparent 28rem),
            radial-gradient(circle at 88% 24%, rgba(16,185,129,0.13), transparent 24rem),
            linear-gradient(180deg, #0F172A 0, #0F172A 5.25rem, #FFFFFF 5.25rem, #F8FAFC 100%);
          color: #0F172A;
          isolation: isolate;
        }

        .mws-shopify-hero::before {
          content: "";
          position: absolute;
          inset: 5.25rem 0 0;
          background-image:
            linear-gradient(rgba(15,23,42,0.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(15,23,42,0.035) 1px, transparent 1px);
          background-size: 56px 56px;
          mask-image: linear-gradient(180deg, rgba(0,0,0,0.8), transparent 72%);
          pointer-events: none;
          z-index: 0;
        }

        .mws-shopify-hero__nav-backdrop {
          position: absolute;
          inset: 0 0 auto;
          height: 5.25rem;
          background: #0F172A;
          z-index: 0;
        }

        .mws-shopify-hero__glow {
          position: absolute;
          border-radius: 999px;
          filter: blur(34px);
          opacity: 0.72;
          pointer-events: none;
          z-index: 0;
          animation: mws-shopify-glow 12s ease-in-out infinite alternate;
        }

        .mws-shopify-hero__glow--one {
          width: 280px;
          height: 280px;
          top: 8rem;
          left: -5rem;
          background: rgba(37,99,235,0.22);
        }

        .mws-shopify-hero__glow--two {
          width: 240px;
          height: 240px;
          right: 5%;
          bottom: 6rem;
          background: rgba(59,130,246,0.18);
          animation-delay: 1.8s;
        }

        .mws-shopify-hero__inner {
          position: relative;
          z-index: 2;
        }

        .mws-shopify-hero__grid {
          display: grid;
          grid-template-columns: minmax(0, 0.95fr) minmax(420px, 1.05fr);
          gap: 4.5rem;
          align-items: center;
        }

        .mws-shopify-hero__content {
          padding-top: 1.5rem;
          max-width: 760px;
        }

        .mws-shopify-hero__badge {
          display: inline-flex;
          align-items: center;
          gap: 0.55rem;
          margin-bottom: 1.25rem;
          padding: 0.5rem 0.75rem;
          border: 1px solid rgba(37,99,235,0.16);
          border-radius: 999px;
          background: rgba(255,255,255,0.78);
          color: #1D4ED8;
          box-shadow: 0 14px 34px rgba(37,99,235,0.12);
          font-size: 0.82rem;
          font-weight: 800;
          line-height: 1;
          letter-spacing: 0;
        }

        .mws-shopify-hero__badge svg {
          color: #2563EB;
        }

        .mws-shopify-hero__title {
          max-width: 760px;
          margin: 0 0 1.25rem;
          color: #0F172A;
          font-family: var(--font-geist), -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 68px;
          line-height: 1.02;
          font-weight: 800;
          letter-spacing: 0;
        }

        .mws-shopify-hero__lead {
          max-width: 640px;
          margin: 0 0 1.55rem;
          color: #475569;
          font-size: 1.08rem;
          line-height: 1.7;
          font-weight: 450;
        }

        .mws-shopify-hero__actions {
          display: flex;
          flex-wrap: wrap;
          gap: 0.8rem;
          margin-bottom: 1.05rem;
        }

        .mws-shopify-hero__button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          min-height: 52px;
          padding: 0.98rem 1.45rem;
          border-radius: 999px;
          text-decoration: none;
          font-size: 0.94rem;
          font-weight: 800;
          line-height: 1;
          letter-spacing: 0;
          transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease, border-color 0.2s ease;
        }

        .mws-shopify-hero__button--primary {
          border: 1px solid #2563EB;
          background: linear-gradient(135deg, #2563EB, #3B82F6);
          color: #FFFFFF;
          box-shadow: 0 18px 36px rgba(37,99,235,0.28);
        }

        .mws-shopify-hero__button--secondary {
          border: 1px solid rgba(15,23,42,0.12);
          background: rgba(255,255,255,0.8);
          color: #0F172A;
          box-shadow: 0 12px 30px rgba(15,23,42,0.08);
        }

        .mws-shopify-hero__button:hover {
          transform: translateY(-2px);
        }

        .mws-shopify-hero__button--primary:hover {
          box-shadow: 0 22px 44px rgba(37,99,235,0.36);
        }

        .mws-shopify-hero__button--secondary:hover {
          border-color: rgba(37,99,235,0.28);
          box-shadow: 0 16px 34px rgba(15,23,42,0.12);
        }

        .mws-shopify-hero__signals {
          display: flex;
          flex-wrap: wrap;
          gap: 0.72rem;
          color: #475569;
          font-size: 0.82rem;
          font-weight: 700;
        }

        .mws-shopify-hero__signals span {
          display: inline-flex;
          align-items: center;
          gap: 0.38rem;
        }

        .mws-shopify-hero__signals svg {
          color: #10B981;
        }

        .mws-shopify-hero__trust {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 0.8rem;
          margin-top: 2rem;
          max-width: 690px;
        }

        .mws-shopify-hero__trust div {
          min-height: 88px;
          padding: 1rem;
          border: 1px solid rgba(15,23,42,0.08);
          border-radius: 8px;
          background: rgba(255,255,255,0.74);
          box-shadow: 0 16px 40px rgba(15,23,42,0.06);
        }

        .mws-shopify-hero__trust strong {
          display: block;
          color: #0F172A;
          font-size: 1.35rem;
          line-height: 1;
          font-weight: 850;
          letter-spacing: 0;
        }

        .mws-shopify-hero__trust span {
          display: block;
          margin-top: 0.45rem;
          color: #64748B;
          font-size: 0.74rem;
          line-height: 1.3;
          font-weight: 700;
          letter-spacing: 0;
        }

        .mws-shopify-hero__visual {
          position: relative;
          min-height: 620px;
          perspective: 1300px;
        }

        .mws-dashboard {
          position: relative;
          max-width: 620px;
          margin-left: auto;
          border: 1px solid rgba(15,23,42,0.08);
          border-radius: 24px;
          background: rgba(255,255,255,0.82);
          box-shadow: 0 32px 80px rgba(15,23,42,0.16), 0 1px 0 rgba(255,255,255,0.7) inset;
          backdrop-filter: blur(18px);
          overflow: hidden;
          transform: rotateX(5deg) rotateY(-8deg) rotateZ(1deg);
          animation: mws-dashboard-float 7s ease-in-out infinite;
        }

        .mws-dashboard__topbar {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: center;
          gap: 1rem;
          padding: 0.95rem 1.1rem;
          border-bottom: 1px solid rgba(15,23,42,0.08);
          background: rgba(248,250,252,0.85);
        }

        .mws-dashboard__topbar > div:first-child {
          display: flex;
          gap: 0.32rem;
        }

        .mws-dashboard__dot {
          width: 9px;
          height: 9px;
          border-radius: 999px;
          background: #CBD5E1;
        }

        .mws-dashboard__topbar strong {
          color: #0F172A;
          font-size: 0.82rem;
          font-weight: 850;
          letter-spacing: 0;
        }

        .mws-dashboard__live {
          justify-self: end;
          display: inline-flex;
          align-items: center;
          gap: 0.34rem;
          padding: 0.32rem 0.55rem;
          border-radius: 999px;
          background: rgba(16,185,129,0.1);
          color: #047857;
          font-size: 0.72rem;
          font-weight: 850;
          line-height: 1;
          letter-spacing: 0;
        }

        .mws-dashboard__body {
          padding: 1rem;
        }

        .mws-dashboard__metrics {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 0.75rem;
          margin-bottom: 0.9rem;
        }

        .mws-dashboard__metric {
          min-height: 104px;
          padding: 0.85rem;
          border: 1px solid rgba(15,23,42,0.08);
          border-radius: 18px;
          background: #FFFFFF;
          box-shadow: 0 14px 30px rgba(15,23,42,0.07);
          animation: mws-metric-in 0.7s ease both;
        }

        .mws-dashboard__metric:nth-child(2) {
          animation-delay: 0.12s;
        }

        .mws-dashboard__metric:nth-child(3) {
          animation-delay: 0.24s;
        }

        .mws-dashboard__metric span,
        .mws-dashboard__metric em {
          display: block;
          color: #64748B;
          font-size: 0.72rem;
          font-style: normal;
          font-weight: 750;
          line-height: 1.2;
          letter-spacing: 0;
        }

        .mws-dashboard__metric strong {
          display: block;
          margin: 0.55rem 0 0.5rem;
          color: #0F172A;
          font-size: 1.45rem;
          font-weight: 900;
          line-height: 1;
          letter-spacing: 0;
        }

        .mws-dashboard__metric em {
          color: #10B981;
        }

        .mws-dashboard__main {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 0.85rem;
        }

        .mws-dashboard__chart-card,
        .mws-dashboard__orders {
          min-height: 230px;
          padding: 0.9rem;
          border: 1px solid rgba(15,23,42,0.08);
          border-radius: 20px;
          background: #FFFFFF;
          box-shadow: 0 18px 38px rgba(15,23,42,0.08);
        }

        .mws-dashboard__section-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          margin-bottom: 0.9rem;
          color: #2563EB;
        }

        .mws-dashboard__section-head span {
          color: #0F172A;
          font-size: 0.78rem;
          font-weight: 850;
          line-height: 1.25;
          letter-spacing: 0;
        }

        .mws-dashboard__chart {
          height: 164px;
          display: flex;
          align-items: end;
          gap: 0.55rem;
          padding: 0.75rem;
          border-radius: 16px;
          background:
            linear-gradient(rgba(37,99,235,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(37,99,235,0.08) 1px, transparent 1px),
            #F8FAFC;
          background-size: 34px 34px;
        }

        .mws-dashboard__chart span {
          flex: 1;
          min-width: 16px;
          border-radius: 999px 999px 6px 6px;
          background: linear-gradient(180deg, #3B82F6, #2563EB);
          box-shadow: 0 10px 20px rgba(37,99,235,0.18);
          animation: mws-bar-rise 0.9s ease both;
        }

        .mws-dashboard__chart span:nth-child(2) { animation-delay: 0.05s; }
        .mws-dashboard__chart span:nth-child(3) { animation-delay: 0.1s; }
        .mws-dashboard__chart span:nth-child(4) { animation-delay: 0.15s; }
        .mws-dashboard__chart span:nth-child(5) { animation-delay: 0.2s; }
        .mws-dashboard__chart span:nth-child(6) { animation-delay: 0.25s; }
        .mws-dashboard__chart span:nth-child(7) { animation-delay: 0.3s; }

        .mws-dashboard__orders {
          display: flex;
          flex-direction: column;
        }

        .mws-dashboard__order {
          display: grid;
          grid-template-columns: auto minmax(0, 1fr) auto;
          align-items: center;
          gap: 0.65rem;
          padding: 0.65rem 0;
          border-top: 1px solid rgba(15,23,42,0.07);
        }

        .mws-dashboard__order > span {
          width: 34px;
          height: 34px;
          border-radius: 10px;
          background: linear-gradient(135deg, #EFF6FF, #DBEAFE);
        }

        .mws-dashboard__order strong,
        .mws-dashboard__order em,
        .mws-dashboard__order b {
          display: block;
          letter-spacing: 0;
        }

        .mws-dashboard__order strong {
          color: #0F172A;
          font-size: 0.76rem;
          font-weight: 850;
          line-height: 1.2;
        }

        .mws-dashboard__order em {
          margin-top: 0.18rem;
          color: #64748B;
          font-size: 0.68rem;
          font-style: normal;
          font-weight: 700;
        }

        .mws-dashboard__order b {
          color: #0F172A;
          font-size: 0.78rem;
          font-weight: 900;
        }

        .mws-dashboard__apps {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-top: 0.9rem;
        }

        .mws-dashboard__apps span {
          display: inline-flex;
          align-items: center;
          min-height: 32px;
          padding: 0.42rem 0.65rem;
          border: 1px solid rgba(37,99,235,0.12);
          border-radius: 999px;
          background: rgba(239,246,255,0.9);
          color: #1D4ED8;
          font-size: 0.72rem;
          font-weight: 850;
          line-height: 1;
          letter-spacing: 0;
        }

        .mws-mobile-card {
          position: absolute;
          right: -0.8rem;
          bottom: 1.4rem;
          width: 158px;
          padding: 0.55rem;
          border: 1px solid rgba(15,23,42,0.1);
          border-radius: 28px;
          background: rgba(255,255,255,0.82);
          box-shadow: 0 24px 48px rgba(15,23,42,0.16);
          backdrop-filter: blur(14px);
          animation: mws-dashboard-float 7s ease-in-out infinite reverse;
        }

        .mws-mobile-card__phone {
          position: relative;
          min-height: 272px;
          padding: 1.45rem 0.65rem 0.75rem;
          border-radius: 23px;
          background: #0F172A;
          overflow: hidden;
        }

        .mws-mobile-card__notch {
          position: absolute;
          top: 0.45rem;
          left: 50%;
          width: 46px;
          height: 6px;
          transform: translateX(-50%);
          border-radius: 999px;
          background: rgba(255,255,255,0.18);
        }

        .mws-mobile-card__image {
          height: 94px;
          margin-bottom: 0.7rem;
          border-radius: 16px;
          background:
            radial-gradient(circle at 68% 22%, rgba(16,185,129,0.55), transparent 34%),
            linear-gradient(135deg, #60A5FA, #2563EB);
        }

        .mws-mobile-card span,
        .mws-mobile-card strong {
          display: block;
          letter-spacing: 0;
        }

        .mws-mobile-card span {
          color: rgba(255,255,255,0.62);
          font-size: 0.66rem;
          font-weight: 800;
        }

        .mws-mobile-card strong {
          margin: 0.35rem 0 0.8rem;
          color: #FFFFFF;
          font-size: 1.15rem;
          line-height: 1;
        }

        .mws-mobile-card button {
          width: 100%;
          min-height: 36px;
          border: 0;
          border-radius: 999px;
          background: #10B981;
          color: #FFFFFF;
          font-size: 0.72rem;
          font-weight: 900;
        }

        .mws-floating-card {
          position: absolute;
          display: flex;
          align-items: center;
          gap: 0.55rem;
          padding: 0.7rem 0.8rem;
          border: 1px solid rgba(15,23,42,0.1);
          border-radius: 18px;
          background: rgba(255,255,255,0.88);
          box-shadow: 0 22px 44px rgba(15,23,42,0.14);
          backdrop-filter: blur(12px);
          animation: mws-metric-in 0.7s ease both;
        }

        .mws-floating-card svg {
          color: #2563EB;
        }

        .mws-floating-card strong,
        .mws-floating-card span {
          display: block;
          letter-spacing: 0;
        }

        .mws-floating-card strong {
          color: #0F172A;
          font-size: 1rem;
          line-height: 1;
        }

        .mws-floating-card span {
          margin-top: 0.2rem;
          color: #64748B;
          font-size: 0.68rem;
          font-weight: 750;
          line-height: 1;
        }

        .mws-floating-card--speed {
          left: 1.4rem;
          bottom: 4.7rem;
        }

        .mws-floating-card--customers {
          top: 4.2rem;
          right: 1.6rem;
          animation-delay: 0.2s;
        }

        .mws-shopify-hero__service-strip {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 0.9rem;
          margin-top: 2rem;
        }

        .mws-shopify-hero__service-strip > div {
          display: flex;
          gap: 0.75rem;
          min-height: 104px;
          padding: 1rem;
          border: 1px solid rgba(15,23,42,0.08);
          border-radius: 8px;
          background: rgba(255,255,255,0.7);
          box-shadow: 0 16px 34px rgba(15,23,42,0.06);
        }

        .mws-shopify-hero__service-strip svg {
          flex: 0 0 auto;
          color: #2563EB;
        }

        .mws-shopify-hero__service-strip strong,
        .mws-shopify-hero__service-strip small {
          display: block;
          letter-spacing: 0;
        }

        .mws-shopify-hero__service-strip strong {
          color: #0F172A;
          font-size: 0.86rem;
          line-height: 1.22;
          font-weight: 900;
        }

        .mws-shopify-hero__service-strip small {
          margin-top: 0.32rem;
          color: #64748B;
          font-size: 0.74rem;
          line-height: 1.4;
          font-weight: 650;
        }

        @keyframes mws-shopify-glow {
          from { transform: translate3d(0, 0, 0) scale(1); }
          to { transform: translate3d(18px, 12px, 0) scale(1.08); }
        }

        @keyframes mws-dashboard-float {
          0%, 100% { transform: rotateX(5deg) rotateY(-8deg) rotateZ(1deg) translateY(0); }
          50% { transform: rotateX(5deg) rotateY(-8deg) rotateZ(1deg) translateY(-12px); }
        }

        @keyframes mws-metric-in {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes mws-bar-rise {
          from { transform: scaleY(0.2); transform-origin: bottom; opacity: 0.35; }
          to { transform: scaleY(1); transform-origin: bottom; opacity: 1; }
        }

        @media (max-width: 1180px) {
          .mws-shopify-hero__grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          .mws-shopify-hero__content {
            max-width: none;
          }

          .mws-shopify-hero__title,
          .mws-shopify-hero__lead {
            max-width: 820px;
          }

          .mws-shopify-hero__visual {
            max-width: 760px;
            min-height: 600px;
          }

          .mws-dashboard {
            margin-left: 0;
          }

          .mws-shopify-hero__service-strip {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 760px) {
          .mws-shopify-hero {
            padding: 6.25rem 0 3rem;
          }

          .mws-shopify-hero__content {
            text-align: center;
            padding-top: 1rem;
          }

          .mws-shopify-hero__badge,
          .mws-shopify-hero__signals,
          .mws-shopify-hero__actions {
            justify-content: center;
          }

          .mws-shopify-hero__title {
            font-size: 44px;
            line-height: 1.06;
          }

          .mws-shopify-hero__lead {
            font-size: 1rem;
          }

          .mws-shopify-hero__actions {
            flex-direction: column;
            align-items: stretch;
          }

          .mws-shopify-hero__button {
            width: 100%;
          }

          .mws-shopify-hero__trust {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            text-align: left;
          }

          .mws-shopify-hero__visual {
            min-height: auto;
            padding-bottom: 8.5rem;
          }

          .mws-dashboard {
            transform: none;
            animation: none;
          }

          .mws-dashboard__main,
          .mws-dashboard__metrics {
            grid-template-columns: 1fr;
          }

          .mws-mobile-card {
            right: 50%;
            bottom: 0;
            transform: translateX(50%);
            animation: none;
          }

          .mws-floating-card {
            display: none;
          }

          .mws-shopify-hero__service-strip {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 460px) {
          .mws-shopify-hero__title {
            font-size: 38px;
          }

          .mws-shopify-hero__trust {
            grid-template-columns: 1fr;
          }

          .mws-dashboard__topbar {
            grid-template-columns: 1fr;
            justify-items: start;
          }

          .mws-dashboard__live {
            justify-self: start;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .mws-shopify-hero__glow,
          .mws-dashboard,
          .mws-dashboard__metric,
          .mws-dashboard__chart span,
          .mws-mobile-card,
          .mws-floating-card {
            animation: none;
          }
        }
      `}</style>
    </section>
  )
}
