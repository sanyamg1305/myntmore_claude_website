"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import InnerLayout from "../components/InnerLayout";

/* ─── Data ──────────────────────────────────────────────────── */

const BLOG_POSTS = [
  { href: "/blog/predictable-b2b-lead-gen-engine", tag: "Lead Generation", tagColor: "#3b82f6", title: "Beyond the 'Pray and Spray': Building a Predictable B2B Lead Generation Engine", excerpt: "Most B2B outbound fails because it has no system. Here is the exact framework we use to build a lead generation engine that compounds over time.", readTime: "5 min read" },
  { href: "/blog/ecommerce-conversion-playbook", tag: "Conversion", tagColor: "#16a34a", title: "The eCommerce Conversion Playbook: Turning Browsers into Buyers", excerpt: "Traffic without conversion is just expensive noise. Here is a practical playbook for eCommerce brands that want more buyers, not just more visitors.", readTime: "5 min read" },
  { href: "/blog/founder-personal-brand-linkedin", tag: "Personal Branding", tagColor: "#a855f7", title: "The Founder's Edge: Why You Are Your Company's Best Marketing Asset", excerpt: "Founders who build a LinkedIn presence close deals faster, attract better talent, and generate inbound without ad spend. Here is how to start.", readTime: "5 min read" },
];

const FREE_TOOLS = [
  { title: "LinkedIn Profile Optimizer", desc: "Audit and rewrite your LinkedIn profile to convert visitors into high-intent inbound replies.", href: "https://myntmore-linkedin-profile-optimizer.lovable.app", icon: "🔗", accent: "#0077b5" },
  { title: "DM Angle Generator", desc: "Generate hyper-personalised outreach opening angles based on prospect triggers and activity.", href: "https://mynt-more-angles.lovable.app", icon: "⚡", accent: "#F5B731" },
];

const BENEFITS = [
  "Free playbooks", "6-Week Blueprint", "Lead gen tools", "Weekly newsletter",
  "ICP frameworks", "Cold email templates", "LinkedIn guides", "AI outreach tools",
  "Masterclass video", "B2B templates", "Outbound systems", "GTM plays",
];

const BLUEPRINT_ITEMS = [
  "ICP definition framework",
  "Intent signal tracking system",
  "Cold email sequence templates",
  "LinkedIn outreach playbook",
  "6-week build calendar",
  "40+ pages of templates",
];

/* ─── Sub-components ─────────────────────────────────────────── */

function BenefitChip({ label, i }: { label: string; i: number }) {
  const isGold = i % 2 === 0;
  return (
    <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap border flex-shrink-0"
      style={{
        background: isGold ? "linear-gradient(135deg,#fff 0%,#FEF9EC 100%)" : "linear-gradient(135deg,#fff 0%,#F8F6F2 100%)",
        borderColor: isGold ? "rgba(245,183,49,0.35)" : "rgba(10,10,10,0.12)",
        color: "#1a1a1a",
        boxShadow: "0 1px 6px rgba(0,0,0,0.05)",
      }}>
      <span className="w-2 h-2 rounded-sm flex-shrink-0" style={{ backgroundColor: isGold ? "#D97706" : "#0a0a0a" }} />
      {label}
    </span>
  );
}

/* ─── Page ──────────────────────────────────────────────────── */

export default function Resources() {
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
  const [statsTriggered, setStatsTriggered] = useState(false);

  useEffect(() => {
    let id: number;
    const t0 = performance.now();
    function loop() {
      const t = (performance.now() - t0) / 1000;
      if (blob1.current) blob1.current.style.transform = `translate(${Math.sin(t * 0.7) * 200 + Math.sin(t * 0.3) * 70}px, ${Math.cos(t * 0.5) * 140 + Math.cos(t * 0.2) * 50}px)`;
      if (blob2.current) blob2.current.style.transform = `translate(${Math.sin(t * 0.6 + 2) * 200 + Math.cos(t * 0.4) * 70}px, ${Math.cos(t * 0.7 + 1) * 140 + Math.sin(t * 0.3) * 50}px)`;
      if (blob3.current) blob3.current.style.transform = `translate(${Math.sin(t * 0.55 + 4) * 180 + Math.sin(t * 0.35) * 60}px, ${Math.cos(t * 0.65 + 2) * 160 + Math.cos(t * 0.45) * 50}px)`;
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
      if (ctaBlob1.current) ctaBlob1.current.style.transform = `translate(${Math.sin(t * 0.8) * 300 + Math.sin(t * 0.3) * 90}px, ${Math.cos(t * 0.6) * 130 + Math.cos(t * 0.25) * 55}px)`;
      if (ctaBlob2.current) ctaBlob2.current.style.transform = `translate(${Math.sin(t * 0.7 + 2) * 300 + Math.cos(t * 0.4) * 90}px, ${Math.cos(t * 0.8 + 1) * 130 + Math.sin(t * 0.35) * 55}px)`;
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
          { ref: stat1Ref, end: 40, suffix: "+" },
          { ref: stat2Ref, end: 2, suffix: " tools" },
          { ref: stat3Ref, end: 45, suffix: " min" },
        ].forEach(({ ref, end, suffix }) => {
          let s: number | null = null;
          const dur = 1600;
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
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden" style={{ backgroundColor: "#F8F6F2" }}>
        <div ref={blob1} aria-hidden style={{ position: "absolute", top: "50%", left: "20%", width: 600, height: 600, marginTop: -300, marginLeft: -300, borderRadius: "50%", background: "radial-gradient(circle, rgba(245,183,49,0.2) 0%, rgba(245,183,49,0.07) 40%, transparent 70%)", filter: "blur(60px)", pointerEvents: "none", willChange: "transform" }} />
        <div ref={blob2} aria-hidden style={{ position: "absolute", top: "40%", left: "75%", width: 500, height: 500, marginTop: -250, marginLeft: -250, borderRadius: "50%", background: "radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(59,130,246,0.06) 40%, transparent 70%)", filter: "blur(55px)", pointerEvents: "none", willChange: "transform" }} />
        <div ref={blob3} aria-hidden style={{ position: "absolute", top: "70%", left: "50%", width: 400, height: 400, marginTop: -200, marginLeft: -200, borderRadius: "50%", background: "radial-gradient(circle, rgba(168,85,247,0.12) 0%, transparent 70%)", filter: "blur(50px)", pointerEvents: "none", willChange: "transform" }} />

        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-xs font-semibold" style={{ color: "#3D3D3D" }}>Resources</span>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-6 hero-fade"
            style={{ borderColor: "rgba(245,183,49,0.4)", background: "rgba(245,183,49,0.1)" }}>
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: "#F5B731" }} />
            <span className="text-xs font-bold uppercase tracking-[0.15em]" style={{ color: "#D97706" }}>Free Resources</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black leading-[0.95] mb-6 hero-fade-d1" style={{ color: "#0a0a0a" }}>
            Learn the system.{" "}
            <span className="relative inline-block">
              Then let us run it.
              <svg className="absolute -bottom-1 left-0 w-full overflow-visible" height="10" viewBox="0 0 500 10" preserveAspectRatio="none" aria-hidden>
                <path ref={underlineRef} d="M2 7 Q125 2 250 6 Q375 10 498 5" stroke="#F5B731" strokeWidth="3" fill="none" strokeLinecap="round" />
              </svg>
            </span>
          </h1>

          <p className="text-lg sm:text-xl max-w-2xl mb-10 hero-fade-d2" style={{ color: "#52525B" }}>
            Free playbooks, tools, and weekly insights for B2B founders who want predictable pipeline — not guesswork.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 hero-fade-d3">
            <a href="mailto:growth@myntmore.com?subject=6-Week Pipeline Blueprint"
              className="btn-dark px-8 py-4 text-base font-bold inline-flex items-center gap-2">
              Download Free Blueprint
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
            </a>
            <a href="https://youtube.com/@TJtheLeadGenExpert" target="_blank" rel="noopener noreferrer"
              className="btn-ghost px-8 py-4 text-base font-bold inline-flex items-center gap-2">
              Watch 45-min Masterclass
            </a>
          </div>
        </div>
      </section>

      {/* ── Stats strip ──────────────────────────────────────── */}
      <div ref={statsContainerRef} className="border-y py-10 px-4" style={{ borderColor: "#E8E2D9", backgroundColor: "#ffffff" }}>
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {[
            { ref: stat1Ref, init: "40+", label: "Pages in the Pipeline Blueprint" },
            { ref: stat2Ref, init: "2 tools", label: "Free AI tools — no signup required" },
            { ref: stat3Ref, init: "45 min", label: "Masterclass taught at IIT Madras & TiE Chennai" },
          ].map((s, i) => (
            <div key={i} className={`${i < 2 ? "sm:border-r" : ""} px-4`} style={{ borderColor: "#E8E2D9" }}>
              <span ref={s.ref} className="block text-4xl font-black mb-1" style={{ color: "#0a0a0a" }}>{s.init}</span>
              <span className="text-sm" style={{ color: "#8C8279" }}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Benefits marquee ─────────────────────────────────── */}
      <div className="py-8 overflow-hidden border-b" style={{ borderColor: "#E8E2D9", backgroundColor: "#F8F6F2" }}>
        <div className="flex gap-4 w-max" style={{ animation: "marquee-left 30s linear infinite" }}>
          {doubled.map((label, i) => <BenefitChip key={i} label={label} i={i} />)}
        </div>
      </div>

      {/* ── Featured Playbook ─────────────────────────────────── */}
      <section className="py-20 px-4" style={{ backgroundColor: "#F8F6F2" }}>
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <span className="inline-flex text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4"
              style={{ backgroundColor: "rgba(245,183,49,0.1)", color: "#D97706", border: "1px solid rgba(245,183,49,0.3)" }}>
              Featured Playbook
            </span>
            <h2 className="text-3xl sm:text-4xl font-black" style={{ color: "#0a0a0a" }}>The 6-Week Pipeline Blueprint</h2>
          </div>

          <div className="rounded-2xl border overflow-hidden" style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9" }}>
            <div className="p-8 sm:p-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <span className="inline-flex text-xs font-bold px-3 py-1 rounded-full mb-5"
                  style={{ backgroundColor: "#FEF9EC", color: "#F5B731", border: "1px solid rgba(245,183,49,0.3)" }}>
                  Free Download
                </span>
                <h3 className="text-2xl font-black mb-4" style={{ color: "#0a0a0a" }}>Go from zero to 20+ meetings/month</h3>
                <p className="text-sm leading-relaxed mb-8" style={{ color: "#52525B" }}>
                  The exact system we use to build predictable outbound pipelines for B2B companies. Full framework, templates, and a 6-week build calendar. Absolutely free.
                </p>
                <a href="mailto:growth@myntmore.com?subject=6-Week Pipeline Blueprint"
                  className="btn-dark px-7 py-3.5 text-sm font-bold inline-flex items-center gap-2">
                  Download Blueprint PDF
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                </a>
                <p className="mt-3 text-xs" style={{ color: "#8C8279" }}>Free with email sign-up. No spam, ever.</p>
              </div>
              <div className="rounded-xl p-7" style={{ backgroundColor: "#F8F6F2", border: "1px solid #E8E2D9" }}>
                <p className="text-sm font-black mb-5" style={{ color: "#3D3D3D" }}>What&apos;s inside:</p>
                <ul className="space-y-3">
                  {BLUEPRINT_ITEMS.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: "rgba(245,183,49,0.15)" }}>
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="#D97706" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-sm" style={{ color: "#52525B" }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Newsletter + Masterclass ──────────────────────────── */}
      <section className="py-20 px-4 border-t" style={{ borderColor: "#E8E2D9", backgroundColor: "#ffffff" }}>
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <span className="inline-flex text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4"
              style={{ backgroundColor: "rgba(245,183,49,0.1)", color: "#D97706", border: "1px solid rgba(245,183,49,0.3)" }}>
              Stay Sharp
            </span>
            <h2 className="text-3xl sm:text-4xl font-black" style={{ color: "#0a0a0a" }}>Newsletter & Masterclass</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="rounded-2xl border p-8 transition-all duration-300"
              style={{ backgroundColor: "#F8F6F2", borderColor: "#E8E2D9" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(245,183,49,0.4)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "#E8E2D9"; }}>
              <span className="inline-flex text-xs font-bold px-3 py-1 rounded-full mb-5"
                style={{ backgroundColor: "rgba(245,183,49,0.1)", color: "#D97706", border: "1px solid rgba(245,183,49,0.25)" }}>
                Weekly Newsletter
              </span>
              <h3 className="text-xl font-black mb-3" style={{ color: "#0a0a0a" }}>The Outbound Operator</h3>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "#52525B" }}>
                Weekly breakdowns of outbound systems, AI tools, and GTM plays that are working right now. No fluff. No padding. Just signal.
              </p>
              <a href="mailto:growth@myntmore.com?subject=Subscribe to Outbound Operator"
                className="btn-dark px-6 py-3 text-sm font-bold inline-flex items-center gap-2">
                Subscribe free
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
            </div>
            <div className="rounded-2xl border p-8 transition-all duration-300"
              style={{ backgroundColor: "#F8F6F2", borderColor: "#E8E2D9" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(59,130,246,0.35)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "#E8E2D9"; }}>
              <span className="inline-flex text-xs font-bold px-3 py-1 rounded-full mb-5"
                style={{ backgroundColor: "rgba(59,130,246,0.08)", color: "#3b82f6", border: "1px solid rgba(59,130,246,0.2)" }}>
                On-Demand Video
              </span>
              <h3 className="text-xl font-black mb-3" style={{ color: "#0a0a0a" }}>B2B Lead Gen Masterclass</h3>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "#52525B" }}>
                The workshop delivered at IIT Madras and TiE Chennai for 100+ founders and GTM leaders. Now free, on demand. 45 minutes.
              </p>
              <a href="https://youtube.com/@TJtheLeadGenExpert" target="_blank" rel="noopener noreferrer"
                className="btn-dark px-6 py-3 text-sm font-bold inline-flex items-center gap-2">
                Watch 45-min video
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Free Tools ────────────────────────────────────────── */}
      <section className="py-20 px-4 border-t" style={{ borderColor: "#E8E2D9", backgroundColor: "#F8F6F2" }}>
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <span className="inline-flex text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4"
              style={{ backgroundColor: "rgba(245,183,49,0.1)", color: "#D97706", border: "1px solid rgba(245,183,49,0.3)" }}>
              Free AI Tools
            </span>
            <h2 className="text-3xl sm:text-4xl font-black" style={{ color: "#0a0a0a" }}>Use them. Right now.</h2>
            <p className="text-base mt-3 max-w-xl" style={{ color: "#52525B" }}>No sign-up required. Built for B2B founders and sales teams.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {FREE_TOOLS.map((t) => (
              <a key={t.title} href={t.href} target="_blank" rel="noopener noreferrer"
                className="group block rounded-2xl border p-8 transition-all duration-300"
                style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = `${t.accent}55`; (e.currentTarget as HTMLElement).style.backgroundColor = `${t.accent}05`; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "#E8E2D9"; (e.currentTarget as HTMLElement).style.backgroundColor = "#ffffff"; }}>
                <div className="text-3xl mb-4">{t.icon}</div>
                <h3 className="text-lg font-black mb-2" style={{ color: "#0a0a0a" }}>{t.title}</h3>
                <p className="text-sm leading-relaxed mb-5" style={{ color: "#52525B" }}>{t.desc}</p>
                <span className="text-sm font-bold inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all"
                  style={{ color: t.accent }}>
                  Try free
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Blog ─────────────────────────────────────────────── */}
      <section className="py-20 px-4 border-t" style={{ borderColor: "#E8E2D9", backgroundColor: "#ffffff" }}>
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <span className="inline-flex text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4"
              style={{ backgroundColor: "#FEF9EC", color: "#F5B731", border: "1px solid rgba(245,183,49,0.3)" }}>
              From the Blog
            </span>
            <h2 className="text-3xl sm:text-4xl font-black" style={{ color: "#0a0a0a" }}>The playbooks behind the results</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {BLOG_POSTS.map((p) => (
              <Link key={p.href} href={p.href}
                className="group block rounded-2xl border overflow-hidden transition-all duration-300"
                style={{ backgroundColor: "#F8F6F2", borderColor: "#E8E2D9" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = `${p.tagColor}55`; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "#E8E2D9"; }}>
                <div className="p-6">
                  <span className="inline-flex text-xs font-bold px-2.5 py-1 rounded-full mb-4"
                    style={{ backgroundColor: `${p.tagColor}12`, color: p.tagColor, border: `1px solid ${p.tagColor}30` }}>
                    {p.tag}
                  </span>
                  <h3 className="text-base font-black mb-3 leading-snug" style={{ color: "#0a0a0a" }}>{p.title}</h3>
                  <p className="text-xs leading-relaxed mb-5" style={{ color: "#52525B" }}>{p.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs" style={{ color: "#8C8279" }}>{p.readTime}</span>
                    <span className="text-xs font-bold inline-flex items-center gap-1 group-hover:gap-2 transition-all"
                      style={{ color: p.tagColor }}>
                      Read
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="relative py-28 px-4 overflow-hidden" style={{ backgroundColor: "#F8F6F2" }}>
        <div ref={ctaBlob1} aria-hidden style={{ position: "absolute", top: "50%", left: "25%", width: 600, height: 600, marginTop: -300, marginLeft: -300, borderRadius: "50%", background: "radial-gradient(circle, rgba(245,183,49,0.28) 0%, rgba(245,183,49,0.1) 40%, transparent 70%)", filter: "blur(65px)", pointerEvents: "none", willChange: "transform" }} />
        <div ref={ctaBlob2} aria-hidden style={{ position: "absolute", top: "50%", left: "75%", width: 550, height: 550, marginTop: -275, marginLeft: -275, borderRadius: "50%", background: "radial-gradient(circle, rgba(59,130,246,0.2) 0%, rgba(59,130,246,0.07) 40%, transparent 70%)", filter: "blur(65px)", pointerEvents: "none", willChange: "transform" }} />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-8"
            style={{ borderColor: "rgba(245,183,49,0.4)", background: "rgba(245,183,49,0.1)" }}>
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: "#F5B731" }} />
            <span className="text-xs font-bold uppercase tracking-[0.15em]" style={{ color: "#F5B731" }}>Want us to run it for you?</span>
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight mb-6 leading-[0.95]" style={{ color: "#0a0a0a" }}>
            Ready to stop learning<br /><span style={{ color: "#F5B731" }}>and start growing?</span>
          </h2>

          <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-10" style={{ color: "#52525B" }}>
            The playbooks are free. The execution is where we come in. Book a call and we&apos;ll show you exactly how we&apos;d build your pipeline.
          </p>

          <a href="https://calendly.com/founder-myntmore/30-min" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-10 py-5 rounded-full font-black text-lg btn-dark">
            Book a Free Strategy Call
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>

          <p className="mt-5 text-sm" style={{ color: "#6B6B6B" }}>No commitment. Just a real conversation about your pipeline.</p>
        </div>
      </section>
    </InnerLayout>
  );
}
