"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import InnerLayout from "../../components/InnerLayout";

const STEPS = [
  { n: "01", title: "Voice Extraction Interview", desc: "A monthly 30–45 min call where we pull your opinions, recent client stories, contrarian takes, and industry observations. Everything we write comes from what you actually said." },
  { n: "02", title: "Strategic Content Calendar", desc: "We map out a monthly calendar targeting different buyer psychologies — authority posts, proof posts, opinion posts, and story posts — to build a full-funnel LinkedIn presence." },
  { n: "03", title: "Ghostwriting & Approval", desc: "Our team writes every post in your voice, grounded entirely in your interview. You review, tweak if needed, and approve. Most founders spend under 30 minutes a week total." },
  { n: "04", title: "Profile Optimisation & Growth", desc: "We rewrite your LinkedIn profile to convert visitors into enquiries. Headline, about section, featured posts — all positioned to attract your ideal buyer." },
];

const DELIVERABLES = [
  "4 to 8 high-impact LinkedIn posts per month",
  "Complete LinkedIn profile rewrite and optimisation",
  "Strategic monthly content calendar",
  "Monthly voice extraction session",
  "Personalised engagement and growth strategy",
  "Monthly performance and impressions report",
];

const WHO_FOR = [
  { icon: "👔", title: "B2B Founders and CEOs", desc: "Leaders who need to build authority in their niche to support sales, recruiting, and fundraising efforts." },
  { icon: "🧠", title: "Subject Matter Experts", desc: "Experts turning hard-earned knowledge into a lead-generating LinkedIn asset without spending hours writing." },
  { icon: "🤝", title: "Consultants and Advisors", desc: "Professionals who rely on trust and credibility to win high-value advisory and consulting engagements." },
];

const TESTIMONIALS = [
  {
    quote: "I'd been meaning to post on LinkedIn for two years. Myntmore made it effortless — one interview call a month and my feed is full of content that actually sounds like me. Three inbound enquiries came directly from content in the first 90 days.",
    name: "Managing Director",
    co: "Consulting · Professional Services",
    color: "#D97706",
  },
  {
    quote: "Our reply rate on cold outreach went up 2x after we started the personal branding program. When prospects get my email and then see 20 posts of me talking about their exact problems, they already trust me before the call.",
    name: "Founder & CEO",
    co: "B2B SaaS · Series A",
    color: "#7C3AED",
  },
];

const FAQ_ITEMS = [
  { q: "How do you capture my voice if you are writing it?", a: "We run a 30–45 minute voice extraction interview with you every month. We ask about your opinions, recent experiences, client observations, and industry takes. From that conversation we extract 4–8 post angles grounded in what you actually said. Nothing is invented. Everything sounds like you because it came from you." },
  { q: "How many posts per month do we get?", a: "The standard engagement is 4 posts per month. Clients who want a more aggressive content presence can go up to 8. We recommend starting at 4, finding the rhythm that works for your approval process, then scaling up once the system is smooth." },
  { q: "Do I need to be involved every week?", a: "Your involvement is one monthly interview and a quick approval on each post before it goes live. That's it. We handle the research, writing, formatting, hashtag strategy, and posting schedule. Most founders spend under 30 minutes a week total." },
  { q: "How long before I start seeing inbound from content?", a: "Consistency over 60–90 days is where inbound becomes noticeable. Month one builds baseline impressions. Month two sees follower growth and profile visits from the right people. By month three, DMs and inbound enquiries from content become a regular occurrence for most clients." },
  { q: "Can personal branding work alongside outbound outreach?", a: "It's one of the most powerful combinations we run. When a prospect gets a cold email from you, the first thing they do is check your profile. If they see consistent, credible content, your reply rate jumps significantly. Personal branding is the trust layer that makes outbound convert better." },
];

const BENEFITS = [
  "Authentic voice", "4–8 posts per month", "Profile optimisation", "Inbound on autopilot",
  "Authority building", "Monthly interview", "Engagement strategy", "Zero writing time",
  "Trust at scale", "Grow your network", "LinkedIn followers", "Boost reply rates",
];

function AccordionItem({ q, a, open, onToggle }: { q: string; a: string; open: boolean; onToggle: () => void }) {
  return (
    <div className="border rounded-xl overflow-hidden transition-all duration-300"
      style={open ? { borderColor: "rgba(245,183,49,0.45)", borderLeftColor: "#F5B731", borderLeftWidth: "3px", backgroundColor: "#FEF9EC" } : { borderColor: "#E8E2D9", backgroundColor: "#ffffff" }}>
      <button onClick={onToggle} className="w-full flex items-center justify-between px-6 py-5 text-left gap-4">
        <span className="text-base font-bold" style={{ color: "#0a0a0a" }}>{q}</span>
        <span className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-colors" style={{ backgroundColor: open ? "rgba(245,183,49,0.15)" : "#F8F6F2" }}>
          <svg className={`w-3.5 h-3.5 transition-transform duration-300 ${open ? "rotate-45" : ""}`} fill="none" viewBox="0 0 24 24" stroke={open ? "#D97706" : "#6B6B6B"} strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14M5 12h14" />
          </svg>
        </span>
      </button>
      <div className="overflow-hidden transition-all duration-300" style={{ maxHeight: open ? "300px" : "0px" }}>
        <p className="px-6 pb-5 text-sm leading-relaxed" style={{ color: "#52525B" }}>{a}</p>
      </div>
    </div>
  );
}

function BenefitChip({ label, i }: { label: string; i: number }) {
  const isGold = i % 2 === 0;
  return (
    <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap border flex-shrink-0"
      style={{ background: isGold ? "linear-gradient(135deg,#fff 0%,#FEF9EC 100%)" : "linear-gradient(135deg,#fff 0%,#F5F3FF 100%)", borderColor: isGold ? "rgba(245,183,49,0.35)" : "rgba(167,139,250,0.35)", color: "#1a1a1a", boxShadow: "0 1px 6px rgba(0,0,0,0.05)" }}>
      <span className="w-2 h-2 rounded-sm flex-shrink-0" style={{ backgroundColor: isGold ? "#D97706" : "#7C3AED" }} />
      {label}
    </span>
  );
}

export default function PersonalBranding() {
  const blob1 = useRef<HTMLDivElement>(null);
  const blob2 = useRef<HTMLDivElement>(null);
  const blob3 = useRef<HTMLDivElement>(null);
  const underlineRef = useRef<SVGPathElement>(null);
  const ctaBlob1 = useRef<HTMLDivElement>(null);
  const ctaBlob2 = useRef<HTMLDivElement>(null);
  const stat1Ref = useRef<HTMLSpanElement>(null);
  const stat2Ref = useRef<HTMLSpanElement>(null);
  const stat3Ref = useRef<HTMLSpanElement>(null);
  const statsContainerRef = useRef<HTMLDivElement>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [statsTriggered, setStatsTriggered] = useState(false);

  useEffect(() => {
    let id: number;
    const t0 = performance.now();
    function loop() {
      const t = (performance.now() - t0) / 1000;
      if (blob1.current) blob1.current.style.transform = `translate(${Math.sin(t * 0.65) * 210 + Math.sin(t * 0.28) * 75}px, ${Math.cos(t * 0.5) * 145 + Math.cos(t * 0.2) * 55}px)`;
      if (blob2.current) blob2.current.style.transform = `translate(${Math.sin(t * 0.55 + 2) * 210 + Math.cos(t * 0.38) * 72}px, ${Math.cos(t * 0.72 + 1) * 145 + Math.sin(t * 0.32) * 52}px)`;
      if (blob3.current) blob3.current.style.transform = `translate(${Math.sin(t * 0.5 + 4) * 185 + Math.sin(t * 0.33) * 62}px, ${Math.cos(t * 0.62 + 2) * 165 + Math.cos(t * 0.43) * 52}px)`;
      id = requestAnimationFrame(loop);
    }
    id = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(id);
  }, []);

  useEffect(() => {
    let id: number;
    const t0 = performance.now();
    function loop() {
      const t = (performance.now() - t0) / 1000;
      if (ctaBlob1.current) ctaBlob1.current.style.transform = `translate(${Math.sin(t * 0.75) * 310 + Math.sin(t * 0.28) * 92}px, ${Math.cos(t * 0.58) * 135 + Math.cos(t * 0.22) * 58}px)`;
      if (ctaBlob2.current) ctaBlob2.current.style.transform = `translate(${Math.sin(t * 0.68 + 2) * 310 + Math.cos(t * 0.38) * 92}px, ${Math.cos(t * 0.78 + 1) * 135 + Math.sin(t * 0.33) * 58}px)`;
      id = requestAnimationFrame(loop);
    }
    id = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(id);
  }, []);

  useEffect(() => {
    const path = underlineRef.current;
    if (!path) return;
    const len = path.getTotalLength();
    path.style.strokeDasharray = String(len);
    path.style.strokeDashoffset = String(len);
    const timer = setTimeout(() => {
      let start: number | null = null;
      const dur = 1200;
      function draw(ts: number) {
        if (!path) return;
        if (!start) start = ts;
        const p = Math.min((ts - start) / dur, 1);
        const e = 1 - Math.pow(1 - p, 3);
        path.style.strokeDashoffset = String(len * (1 - e));
        if (p < 1) requestAnimationFrame(draw);
      }
      requestAnimationFrame(draw);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const el = statsContainerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !statsTriggered) {
        setStatsTriggered(true);
        [
          { ref: stat1Ref, end: 10, suffix: "x" },
          { ref: stat2Ref, end: 18, suffix: "K+" },
          { ref: stat3Ref, end: 2, suffix: "x" },
        ].forEach(({ ref, end, suffix }) => {
          let s: number | null = null;
          const dur = 1800;
          function tick(ts: number) {
            if (!s) s = ts;
            const p = Math.min((ts - s) / dur, 1);
            const e = 1 - Math.pow(1 - p, 3);
            if (ref.current) ref.current.textContent = Math.round(e * end) + suffix;
            if (p < 1) requestAnimationFrame(tick);
          }
          requestAnimationFrame(tick);
        });
      }
    }, { threshold: 0.4 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [statsTriggered]);

  const doubled = [...BENEFITS, ...BENEFITS];

  return (
    <InnerLayout>
      <section className="relative pt-32 pb-20 px-4 overflow-hidden" style={{ backgroundColor: "#F8F6F2" }}>
        <div ref={blob1} aria-hidden style={{ position: "absolute", top: "50%", left: "20%", width: 600, height: 600, marginTop: -300, marginLeft: -300, borderRadius: "50%", background: "radial-gradient(circle, rgba(245,183,49,0.22) 0%, rgba(255,130,0,0.1) 40%, transparent 70%)", filter: "blur(60px)", pointerEvents: "none", willChange: "transform" }} />
        <div ref={blob2} aria-hidden style={{ position: "absolute", top: "40%", left: "75%", width: 500, height: 500, marginTop: -250, marginLeft: -250, borderRadius: "50%", background: "radial-gradient(circle, rgba(168,85,247,0.2) 0%, rgba(124,58,237,0.08) 40%, transparent 70%)", filter: "blur(55px)", pointerEvents: "none", willChange: "transform" }} />
        <div ref={blob3} aria-hidden style={{ position: "absolute", top: "70%", left: "50%", width: 400, height: 400, marginTop: -200, marginLeft: -200, borderRadius: "50%", background: "radial-gradient(circle, rgba(245,183,49,0.14) 0%, transparent 70%)", filter: "blur(50px)", pointerEvents: "none", willChange: "transform" }} />
        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-5">
            <Link href="/services" className="text-xs font-semibold" style={{ color: "#8C8279" }}>Services</Link>
            <span style={{ color: "#E8E2D9" }}>/</span>
            <span className="text-xs font-semibold" style={{ color: "#3D3D3D" }}>Personal Branding</span>
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-6 hero-fade" style={{ borderColor: "rgba(245,183,49,0.45)", background: "rgba(245,183,49,0.1)" }}>
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: "#F5B731" }} />
            <span className="text-xs font-bold uppercase tracking-[0.15em]" style={{ color: "#D97706" }}>Personal Branding</span>
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black leading-[0.95] mb-6 hero-fade-d1" style={{ color: "#0a0a0a" }}>
            Your buyers are on LinkedIn<br />
            <span className="relative inline-block">
              every day.
              <svg className="absolute -bottom-1 left-0 w-full overflow-visible" height="10" viewBox="0 0 320 10" preserveAspectRatio="none" aria-hidden>
                <path ref={underlineRef} d="M2 7 Q80 2 160 6 Q240 10 318 5" stroke="#F5B731" strokeWidth="3.5" fill="none" strokeLinecap="round" />
              </svg>
            </span>{" "}
            <span style={{ color: "#D97706" }}>Are they seeing you?</span>
          </h1>
          <p className="text-lg sm:text-xl max-w-2xl mb-10 hero-fade-d2" style={{ color: "#52525B" }}>We ghostwrite content that positions you as the authority in your space — so inbound finds you instead of you chasing it.</p>
          <div className="flex flex-col sm:flex-row gap-4 hero-fade-d3">
            <a href="https://calendly.com/founder-myntmore/30-min" target="_blank" rel="noopener noreferrer" className="btn-dark px-8 py-4 text-base font-bold inline-flex items-center gap-2">
              Book a Free Brand Audit
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
            <Link href="/case-studies/professional-services-linkedin" className="btn-ghost px-8 py-4 text-base font-bold inline-flex items-center gap-2">See the LinkedIn Case Study</Link>
          </div>
        </div>
      </section>

      <div ref={statsContainerRef} className="border-y py-10 px-4" style={{ borderColor: "#E8E2D9", backgroundColor: "#ffffff" }}>
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {[
            { ref: stat1Ref, init: "10x", label: "Average increase in profile visits" },
            { ref: stat2Ref, init: "18K+", label: "New followers generated for a client in 90 days" },
            { ref: stat3Ref, init: "2x", label: "Increase in outbound reply rates" },
          ].map((s, i) => (
            <div key={i} className={`${i < 2 ? "sm:border-r" : ""} px-4`} style={{ borderColor: "#E8E2D9" }}>
              <span ref={s.ref} className="block text-4xl font-black mb-1" style={{ color: "#0a0a0a" }}>{s.init}</span>
              <span className="text-sm" style={{ color: "#8C8279" }}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="py-8 overflow-hidden border-b" style={{ borderColor: "#E8E2D9", backgroundColor: "#F8F6F2" }}>
        <div className="flex gap-4 w-max" style={{ animation: "marquee-left 32s linear infinite" }}>
          {doubled.map((label, i) => <BenefitChip key={i} label={label} i={i} />)}
        </div>
      </div>

      <section className="py-20 px-4" style={{ backgroundColor: "#F8F6F2" }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5" style={{ backgroundColor: "rgba(239,68,68,0.08)", color: "#dc2626", border: "1px solid rgba(239,68,68,0.2)" }}>Without Personal Branding</span>
              <h2 className="text-3xl sm:text-4xl font-black mb-6 leading-tight" style={{ color: "#0a0a0a" }}>You&apos;re chasing trust that should already be there.</h2>
              <div className="space-y-4">
                {["Prospects check your LinkedIn and see nothing — no reason to trust you","Cold outreach reply rates stay low because there's no social proof","You depend entirely on referrals for growth","Competitors with a strong brand win deals before you're even in the room"].map((p) => (
                  <div key={p} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: "rgba(239,68,68,0.1)" }}>
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="#dc2626" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                    </span>
                    <span className="text-sm leading-relaxed" style={{ color: "#52525B" }}>{p}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <span className="inline-flex text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5" style={{ backgroundColor: "#FEF9EC", color: "#D97706", border: "1px solid rgba(245,183,49,0.3)" }}>With Myntmore</span>
              <h2 className="text-3xl sm:text-4xl font-black mb-6 leading-tight" style={{ color: "#0a0a0a" }}>Your LinkedIn profile does the selling before you say a word.</h2>
              <div className="space-y-4">
                {["Prospects arrive to calls already knowing and trusting you","Outbound reply rates jump because your content proves expertise","Inbound enquiries come from people who found you through posts","You become the name people think of first in your category"].map((p) => (
                  <div key={p} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: "rgba(245,183,49,0.15)" }}>
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="#D97706" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    </span>
                    <span className="text-sm leading-relaxed" style={{ color: "#52525B" }}>{p}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 border-t" style={{ borderColor: "#E8E2D9", backgroundColor: "#ffffff" }}>
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <span className="inline-flex text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4" style={{ backgroundColor: "#FEF9EC", color: "#D97706", border: "1px solid rgba(245,183,49,0.3)" }}>The Process</span>
            <h2 className="text-3xl sm:text-4xl font-black" style={{ color: "#0a0a0a" }}>How it works</h2>
            <p className="text-base mt-3 max-w-xl" style={{ color: "#52525B" }}>One interview a month. Everything else is on us.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {STEPS.map((s, i) => (
              <div key={s.n} className="relative rounded-2xl border p-7 transition-all duration-300" style={{ backgroundColor: "#F8F6F2", borderColor: "#E8E2D9" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(245,183,49,0.4)"; (e.currentTarget as HTMLElement).style.backgroundColor = "#FEF9EC"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "#E8E2D9"; (e.currentTarget as HTMLElement).style.backgroundColor = "#F8F6F2"; }}>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-xs font-black" style={{ backgroundColor: "rgba(245,183,49,0.15)", color: "#D97706" }}>{s.n}</div>
                  <div>
                    <h3 className="text-base font-black mb-2" style={{ color: "#0a0a0a" }}>{s.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#52525B" }}>{s.desc}</p>
                  </div>
                </div>
                {i % 2 === 0 && i < STEPS.length - 1 && (
                  <div className="hidden sm:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: "#ffffff", border: "1px solid #E8E2D9" }}>
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="#D97706" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 border-t" style={{ borderColor: "#E8E2D9", backgroundColor: "#F8F6F2" }}>
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="rounded-2xl border p-8" style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9" }}>
            <span className="inline-flex text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6" style={{ backgroundColor: "#FEF9EC", color: "#D97706", border: "1px solid rgba(245,183,49,0.3)" }}>What You Get</span>
            <h2 className="text-2xl font-black mb-6" style={{ color: "#0a0a0a" }}>Every engagement includes</h2>
            <ul className="space-y-4">
              {DELIVERABLES.map((d) => (
                <li key={d} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: "rgba(245,183,49,0.15)" }}>
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="#D97706" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  </span>
                  <span className="text-sm leading-relaxed" style={{ color: "#3D3D3D" }}>{d}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <span className="inline-flex text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6" style={{ backgroundColor: "rgba(245,183,49,0.08)", color: "#D97706", border: "1px solid rgba(245,183,49,0.25)" }}>Who It&apos;s For</span>
            <h2 className="text-2xl font-black mb-6" style={{ color: "#0a0a0a" }}>Built for founders who have the knowledge, not the time</h2>
            <div className="space-y-4">
              {WHO_FOR.map((w) => (
                <div key={w.title} className="rounded-2xl border p-6 transition-all duration-200" style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(245,183,49,0.4)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "#E8E2D9"; }}>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xl">{w.icon}</span>
                    <h3 className="text-base font-black" style={{ color: "#0a0a0a" }}>{w.title}</h3>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "#52525B" }}>{w.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 border-t" style={{ borderColor: "#E8E2D9", backgroundColor: "#ffffff" }}>
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <span className="inline-flex text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4" style={{ backgroundColor: "#FEF9EC", color: "#F5B731", border: "1px solid rgba(245,183,49,0.3)" }}>Client Results</span>
            <h2 className="text-3xl sm:text-4xl font-black" style={{ color: "#0a0a0a" }}>What clients say</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="rounded-2xl border p-8 relative" style={{ backgroundColor: "#F8F6F2", borderColor: "#E8E2D9" }}>
                <div className="absolute top-6 right-6 text-5xl font-black leading-none select-none" style={{ color: t.color, opacity: 0.15 }}>&ldquo;</div>
                <p className="text-sm leading-relaxed mb-6 relative z-10" style={{ color: "#3D3D3D" }}>&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-black flex-shrink-0" style={{ backgroundColor: `${t.color}18`, color: t.color }}>{t.name[0]}</div>
                  <div>
                    <div className="text-xs font-bold" style={{ color: "#0a0a0a" }}>{t.name}</div>
                    <div className="text-xs" style={{ color: "#8C8279" }}>{t.co}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/case-studies/professional-services-linkedin" className="text-sm font-bold inline-flex items-center gap-1.5 hover:gap-2.5 transition-all" style={{ color: "#D97706" }}>
              Read the full LinkedIn case study
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 border-t" style={{ borderColor: "#E8E2D9", backgroundColor: "#F8F6F2" }}>
        <div className="max-w-3xl mx-auto">
          <div className="mb-10">
            <span className="inline-flex text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4" style={{ backgroundColor: "#FEF9EC", color: "#D97706", border: "1px solid rgba(245,183,49,0.3)" }}>FAQ</span>
            <h2 className="text-3xl font-black" style={{ color: "#0a0a0a" }}>Frequently asked questions</h2>
          </div>
          <div className="space-y-3">
            {FAQ_ITEMS.map((item, i) => (
              <AccordionItem key={i} q={item.q} a={item.a} open={openFaq === i} onToggle={() => setOpenFaq(openFaq === i ? null : i)} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-28 px-4 overflow-hidden" style={{ backgroundColor: "#F8F6F2" }}>
        <div ref={ctaBlob1} aria-hidden style={{ position: "absolute", top: "50%", left: "25%", width: 620, height: 620, marginTop: -310, marginLeft: -310, borderRadius: "50%", background: "radial-gradient(circle, rgba(245,183,49,0.3) 0%, rgba(255,130,0,0.12) 40%, transparent 70%)", filter: "blur(65px)", pointerEvents: "none", willChange: "transform" }} />
        <div ref={ctaBlob2} aria-hidden style={{ position: "absolute", top: "50%", left: "75%", width: 580, height: 580, marginTop: -290, marginLeft: -290, borderRadius: "50%", background: "radial-gradient(circle, rgba(168,85,247,0.25) 0%, rgba(124,58,237,0.1) 40%, transparent 70%)", filter: "blur(65px)", pointerEvents: "none", willChange: "transform" }} />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-8" style={{ borderColor: "rgba(245,183,49,0.4)", background: "rgba(245,183,49,0.1)" }}>
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: "#F5B731" }} />
            <span className="text-xs font-bold uppercase tracking-[0.15em]" style={{ color: "#F5B731" }}>Limited spots available</span>
          </div>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight mb-6 leading-[0.95]" style={{ color: "#0a0a0a" }}>
            Ready to become<br /><span style={{ color: "#F5B731" }}>the go-to name</span><br />in your space?
          </h2>
          <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-10" style={{ color: "#52525B" }}>Book a free call and we&apos;ll show you exactly how to position your brand to attract your ideal clients on LinkedIn.</p>
          <a href="https://calendly.com/founder-myntmore/30-min" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 px-10 py-5 rounded-full font-black text-lg btn-dark">
            Book a Free Brand Audit
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
          <p className="mt-5 text-sm" style={{ color: "#6B6B6B" }}>One interview call. We do the rest.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mt-10 pt-8 border-t" style={{ borderColor: "#E8E2D9" }}>
            {["100% your voice", "Inbound within 90 days", "Results or we make it right"].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <svg className="w-4 h-4 flex-shrink-0" style={{ color: "#F5B731" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                <span className="text-sm" style={{ color: "#52525B" }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </InnerLayout>
  );
}
