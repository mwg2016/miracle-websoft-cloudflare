(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8974],{1917:(e,r,a)=>{"use strict";a.r(r),a.d(r,{default:()=>o});var s=a(5155),i=a(2115),t=a(1503);function o({videoId:e,title:r,aspect:a="16/9",thumbnail:n,onPlay:d,rounded:m="16px",showCaption:l=!1}){let[p,g]=(0,i.useState)(!1),c=n||`https://i.ytimg.com/vi/${e}/hqdefault.jpg`;return(0,s.jsx)("div",{style:{position:"relative",width:"100%",aspectRatio:a.replace("/"," / "),borderRadius:m,overflow:"hidden",background:"#000",border:"1px solid rgba(255,255,255,0.1)",cursor:p?"default":"pointer"},onClick:()=>{p||(g(!0),d?.())},role:p?void 0:"button","aria-label":p?void 0:`Play video: ${r}`,tabIndex:p?-1:0,onKeyDown:e=>{p||"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),g(!0),d?.())},children:p?(0,s.jsx)("iframe",{src:`https://www.youtube.com/embed/${e}?autoplay=1&rel=0&playsinline=1`,title:r,loading:"lazy",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerPolicy:"strict-origin-when-cross-origin",allowFullScreen:!0,style:{position:"absolute",inset:0,width:"100%",height:"100%",border:0,background:"#000"}}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("img",{src:c,alt:r,loading:"lazy",decoding:"async",onError:r=>{let a=r.currentTarget,s=`https://i.ytimg.com/vi/${e}/mqdefault.jpg`;a.src!==s&&(a.src=s)},style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",display:"block"}}),(0,s.jsx)("div",{style:{position:"absolute",inset:0,background:"linear-gradient(180deg, rgba(0,0,0,0.0) 35%, rgba(0,0,0,0.55) 100%)",transition:"background 0.25s"}}),(0,s.jsxs)("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",display:"flex",alignItems:"center",justifyContent:"center",width:"72px",height:"72px",borderRadius:"50%",background:"rgba(255,0,0,0.92)",boxShadow:"0 12px 36px rgba(0,0,0,0.55), 0 0 0 6px rgba(255,255,255,0.12)",transition:"transform 0.2s"},children:[(0,s.jsx)(t.A,{size:36,style:{color:"#fff",fill:"transparent"}}),(0,s.jsx)("span",{style:{position:"absolute",left:"52%",top:"50%",transform:"translate(-50%,-50%)",width:0,height:0,borderLeft:"14px solid #fff",borderTop:"9px solid transparent",borderBottom:"9px solid transparent",marginLeft:"2px"}})]}),l&&(0,s.jsx)("div",{style:{position:"absolute",bottom:"12px",left:"14px",right:"14px",color:"#fff",fontSize:"0.82rem",fontWeight:600,textShadow:"0 2px 8px rgba(0,0,0,0.7)"},children:r})]})})}},2146:(e,r,a)=>{Promise.resolve().then(a.t.bind(a,8500,23)),Promise.resolve().then(a.bind(a,2129)),Promise.resolve().then(a.bind(a,8822)),Promise.resolve().then(a.bind(a,1532)),Promise.resolve().then(a.bind(a,1917))},8822:(e,r,a)=>{"use strict";a.d(r,{default:()=>I});var s=a(5155),i=a(2115),t=a(8500),o=a.n(t),n=a(1792),d=a(8310),m=a(2008),l=a(9404),p=a(8245),g=a(6004),c=a(2321),h=a(6669),w=a(8807),b=a(549),f=a(3961),x=a(4290),u=a(1628),y=a(4478),v=a(4071),j=a(9123),k=a(2651);let z=[{value:650,suffix:"+",label:"Shopify Projects"},{value:15e3,suffix:"+",label:"Hours Worked"},{value:500,prefix:"$",suffix:"K+",label:"Earned on Upwork"},{value:100,suffix:"%",label:"Shopify Focus"}],N=[{label:"Conversion rate",value:"4.8%",delta:"+19%"},{label:"Store speed",value:"96",delta:"+34"},{label:"Live orders",value:"128",delta:"+22%"}],S=[{name:"Premium Hoodie",status:"Selling fast",sales:"$18.4K"},{name:"Starter Bundle",status:"High intent",sales:"$12.7K"}],P=[{left:"8%",top:"18%",delay:"0s"},{left:"18%",top:"68%",delay:"1.3s"},{left:"42%",top:"12%",delay:"0.7s"},{left:"64%",top:"76%",delay:"2s"},{left:"78%",top:"20%",delay:"1.7s"},{left:"92%",top:"58%",delay:"0.4s"}];function $(e,r="",a=""){return`${r}${Math.round(e).toLocaleString("en-US")}${a}`}function A({value:e,prefix:r,suffix:a,label:t,index:o}){let p=(0,i.useRef)(null),g=(0,n.W)(p,{once:!0,margin:"-80px"}),c=(0,d.I)(),[h,w]=(0,i.useState)($(0,r,a)),b=$(e,r,a);return(0,i.useEffect)(()=>{if(!g||c)return;let s=(0,m.i)(0,e,{duration:1.25,delay:.08*o,ease:[.2,.8,.2,1],onUpdate:e=>w($(e,r,a))});return()=>s.stop()},[g,o,r,c,a,e]),(0,s.jsxs)(l.P.li,{ref:p,className:"mws-hero-metric",initial:!c&&{opacity:0,y:20},whileInView:c?void 0:{opacity:1,y:0},viewport:{once:!0,margin:"-80px"},transition:{duration:.55,delay:.08*o,ease:[.2,.8,.2,1]},children:[(0,s.jsx)("span",{className:"mws-hero-metric-value",children:c?b:h}),(0,s.jsx)("span",{className:"mws-hero-metric-label",children:t})]})}function C(){let e=(0,d.I)(),r=(0,p.d)(0),a=(0,p.d)(0),i=(0,g.z)(r,{stiffness:120,damping:24,mass:.3}),t=(0,g.z)(a,{stiffness:120,damping:24,mass:.3}),o=(0,c.G)(i,[-1,1],[-8,8]),n=(0,c.G)(t,[-1,1],[7,-7]);return(0,s.jsx)(l.P.aside,{className:"mws-dashboard-wrap","aria-label":"Custom Shopify performance dashboard illustration",initial:!e&&{opacity:0,y:34,scale:.97},animate:e?void 0:{opacity:1,y:0,scale:1},transition:{duration:.9,delay:.32,ease:[.2,.8,.2,1]},onPointerMove:function(s){if(e)return;let i=s.currentTarget.getBoundingClientRect();r.set(((s.clientX-i.left)/i.width-.5)*2),a.set(((s.clientY-i.top)/i.height-.5)*2)},onPointerLeave:function(){r.set(0),a.set(0)},children:(0,s.jsxs)(l.P.div,{className:"mws-dashboard-stage",style:e?void 0:{rotateX:n,rotateY:o},animate:e?void 0:{y:[0,-12,0]},transition:e?void 0:{duration:7,repeat:1/0,ease:"easeInOut"},children:[(0,s.jsxs)("div",{className:"mws-dashboard-panel",children:[(0,s.jsxs)("div",{className:"mws-dashboard-header",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("span",{className:"mws-dashboard-kicker",children:"Shopify command center"}),(0,s.jsx)("strong",{children:"Live store analytics"})]}),(0,s.jsxs)("span",{className:"mws-dashboard-status",children:[(0,s.jsx)("span",{}),"Optimized"]})]}),(0,s.jsx)("div",{className:"mws-dashboard-summary","aria-label":"Dashboard performance metrics",children:N.map(e=>(0,s.jsxs)("div",{children:[(0,s.jsx)("span",{children:e.label}),(0,s.jsx)("strong",{children:e.value}),(0,s.jsx)("em",{children:e.delta})]},e.label))}),(0,s.jsxs)("div",{className:"mws-dashboard-grid",children:[(0,s.jsxs)("div",{className:"mws-widget mws-widget-large",children:[(0,s.jsxs)("div",{className:"mws-widget-top",children:[(0,s.jsx)("span",{children:"Revenue"}),(0,s.jsx)("strong",{children:"$428.6K"})]}),(0,s.jsxs)("div",{className:"mws-chart","aria-hidden":"true",children:[[42,58,46,72,64,88,76,94].map((e,r)=>(0,s.jsx)("span",{style:{height:`${e}%`,animationDelay:`${.08*r}s`}},r)),(0,s.jsx)("i",{className:"mws-chart-line mws-chart-line-1"}),(0,s.jsx)("i",{className:"mws-chart-line mws-chart-line-2"}),(0,s.jsx)("i",{className:"mws-chart-line mws-chart-line-3"})]})]}),(0,s.jsxs)("div",{className:"mws-widget",children:[(0,s.jsxs)("div",{className:"mws-score-ring",children:[(0,s.jsx)(h.A,{size:18}),(0,s.jsx)("strong",{children:"96"})]}),(0,s.jsx)("span",{className:"mws-widget-label",children:"Performance score"})]}),(0,s.jsxs)("div",{className:"mws-widget mws-orders-widget",children:[(0,s.jsx)("span",{className:"mws-widget-label",children:"Orders today"}),(0,s.jsx)("strong",{children:"128"}),(0,s.jsxs)("div",{className:"mws-order-stack","aria-hidden":"true",children:[(0,s.jsx)("span",{}),(0,s.jsx)("span",{}),(0,s.jsx)("span",{})]})]}),(0,s.jsxs)("div",{className:"mws-widget mws-product-widget",children:[(0,s.jsxs)("div",{className:"mws-widget-top",children:[(0,s.jsx)("span",{children:"Top products"}),(0,s.jsx)(w.A,{size:16})]}),(0,s.jsx)("div",{className:"mws-product-list",children:S.map(e=>(0,s.jsxs)("div",{className:"mws-product-row",children:[(0,s.jsx)("span",{className:"mws-product-thumb"}),(0,s.jsxs)("div",{children:[(0,s.jsx)("strong",{children:e.name}),(0,s.jsx)("small",{children:e.status})]}),(0,s.jsx)("em",{children:e.sales})]},e.name))})]}),(0,s.jsxs)("div",{className:"mws-widget mws-widget-wide",children:[(0,s.jsxs)("div",{className:"mws-widget-top",children:[(0,s.jsx)("span",{children:"Conversion lift"}),(0,s.jsx)("strong",{children:"+31%"})]}),(0,s.jsxs)("div",{className:"mws-conversion-bars","aria-hidden":"true",children:[(0,s.jsx)("span",{style:{width:"46%"}}),(0,s.jsx)("span",{style:{width:"72%"}}),(0,s.jsx)("span",{style:{width:"88%"}})]})]})]})]}),(0,s.jsxs)(l.P.div,{className:"mws-mobile-preview",animate:e?void 0:{y:[0,10,0]},transition:e?void 0:{duration:6,repeat:1/0,ease:"easeInOut",delay:.5},children:[(0,s.jsx)("span",{className:"mws-phone-speaker"}),(0,s.jsx)("div",{className:"mws-phone-product"}),(0,s.jsx)("strong",{children:"Express checkout"}),(0,s.jsx)("small",{children:"Apple Pay ready"}),(0,s.jsxs)("div",{className:"mws-phone-total",children:[(0,s.jsx)("span",{children:"Total"}),(0,s.jsx)("b",{children:"$148.00"})]}),(0,s.jsx)("span",{className:"mws-phone-button",children:"Pay now"})]}),(0,s.jsxs)(l.P.div,{className:"mws-floating-card mws-floating-card-top",animate:e?void 0:{y:[0,-10,0],x:[0,6,0]},transition:e?void 0:{duration:5.8,repeat:1/0,ease:"easeInOut"},children:[(0,s.jsx)(b.A,{size:18}),(0,s.jsxs)("div",{children:[(0,s.jsx)("span",{children:"Live sale"}),(0,s.jsx)("strong",{children:"$2,840"})]})]}),(0,s.jsxs)(l.P.div,{className:"mws-floating-card mws-floating-card-bottom",animate:e?void 0:{y:[0,12,0],x:[0,-4,0]},transition:e?void 0:{duration:6.4,repeat:1/0,ease:"easeInOut",delay:.2},children:[(0,s.jsx)(f.A,{size:18}),(0,s.jsxs)("div",{children:[(0,s.jsx)("span",{children:"Speed gain"}),(0,s.jsx)("strong",{children:"1.8s faster"})]})]})]})})}function I(){let e=(0,d.I)();return(0,s.jsxs)("section",{className:"mws-shopify-hero","aria-labelledby":"home-hero-title",children:[(0,s.jsxs)("div",{className:"mws-hero-bg","aria-hidden":"true",children:[(0,s.jsx)("span",{className:"mws-hero-glow mws-hero-glow-one"}),(0,s.jsx)("span",{className:"mws-hero-glow mws-hero-glow-two"}),(0,s.jsx)("span",{className:"mws-hero-line mws-hero-line-one"}),(0,s.jsx)("span",{className:"mws-hero-line mws-hero-line-two"}),P.map((e,r)=>(0,s.jsx)("span",{className:"mws-hero-particle",style:{left:e.left,top:e.top,animationDelay:e.delay}},r))]}),(0,s.jsxs)("div",{className:"mw-container mws-hero-container",children:[(0,s.jsxs)("div",{className:"mws-hero-copy",children:[(0,s.jsxs)(l.P.div,{className:"mws-hero-badge",initial:!e&&{opacity:0,y:16},animate:e?void 0:{opacity:1,y:0},transition:{duration:.6,ease:[.2,.8,.2,1]},children:[(0,s.jsx)(x.A,{size:14,fill:"currentColor"}),"Trusted Shopify Development Partner"]}),(0,s.jsxs)(l.P.h1,{id:"home-hero-title",className:"mws-hero-title",initial:!e&&{opacity:0,y:28},animate:e?void 0:{opacity:1,y:0},transition:{duration:.72,delay:.08,ease:[.2,.8,.2,1]},children:["Build Shopify Stores That"," ",(0,s.jsx)("span",{className:"mws-gradient-text",children:"Drive More Sales."})]}),(0,s.jsxs)(l.P.p,{className:"mws-hero-description",initial:!e&&{opacity:0,y:24},animate:e?void 0:{opacity:1,y:0},transition:{duration:.72,delay:.16,ease:[.2,.8,.2,1]},children:[(0,s.jsx)("strong",{children:"650+ Shopify projects completed."})," From custom Shopify development and Shopify Plus builds to performance optimization, migrations, and long-term technical support, we help ecommerce brands build faster, convert better, and scale with confidence."]}),(0,s.jsxs)(l.P.div,{className:"mws-hero-actions",initial:!e&&{opacity:0,y:24},animate:e?void 0:{opacity:1,y:0},transition:{duration:.72,delay:.24,ease:[.2,.8,.2,1]},children:[(0,s.jsxs)(o(),{href:"/contact",className:"mws-hero-button mws-hero-button-primary",children:["Book Free Consultation",(0,s.jsx)(u.A,{size:18})]}),(0,s.jsx)(o(),{href:"/work",className:"mws-hero-button mws-hero-button-secondary",children:"View Our Work"})]}),(0,s.jsx)(l.P.ul,{className:"mws-hero-trust","aria-label":"Miracle Websoft Shopify trust metrics",initial:!e&&{opacity:0,y:20},animate:e?void 0:{opacity:1,y:0},transition:{duration:.72,delay:.32,ease:[.2,.8,.2,1]},children:z.map((e,r)=>(0,s.jsx)(A,{...e,index:r},e.label))})]}),(0,s.jsx)(C,{})]}),(0,s.jsxs)("div",{className:"mws-hero-proof-strip","aria-label":"Shopify services",children:[(0,s.jsxs)("span",{children:[(0,s.jsx)(y.A,{size:15}),"Shopify Plus"]}),(0,s.jsxs)("span",{children:[(0,s.jsx)(v.A,{size:15}),"CRO builds"]}),(0,s.jsxs)("span",{children:[(0,s.jsx)(f.A,{size:15}),"Speed optimization"]}),(0,s.jsxs)("span",{children:[(0,s.jsx)(j.A,{size:15}),"Store analytics"]}),(0,s.jsxs)("span",{children:[(0,s.jsx)(k.A,{size:15}),"Long-term support"]})]}),(0,s.jsx)("style",{children:`
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

        .mws-hero-proof-strip {
          position: relative;
          z-index: 1;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          gap: 0.7rem;
          max-width: 1120px;
          margin: 1.5rem auto 0;
          padding: 0 1.5rem;
        }

        .mws-hero-proof-strip span {
          display: inline-flex;
          align-items: center;
          gap: 0.42rem;
          color: #a1a1aa;
          font-size: 0.78rem;
          font-weight: 750;
        }

        .mws-hero-proof-strip svg {
          color: #60a5fa;
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

          .mws-hero-proof-strip {
            justify-content: flex-start;
            margin-top: 0.3rem;
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
      `})]})}}},e=>{e.O(0,[8500,7929,1100,8441,3794,7358],()=>e(e.s=2146)),_N_E=e.O()}]);