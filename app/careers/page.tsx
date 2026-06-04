"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import InnerLayout from "../components/InnerLayout";

/* ─── Data ──────────────────────────────────────────────────── */

const OPEN_ROLES = [
  { title: "Content Marketing Strategist", type: "Full-Time", ctc: "Rs 3–6 LPA", location: "Worli, Mumbai", href: "/careers/content-strategist", accent: "#a855f7", tags: ["Writing", "LinkedIn", "Ghostwriting"] },
  { title: "B2B Lead Generation Strategist", type: "Full-Time", ctc: "Rs 4–8 LPA + incentives", location: "Worli, Mumbai", href: "/careers/lead-gen-strategist", accent: "#0077b5", tags: ["Cold Email", "LinkedIn", "AI Tools", "ABM"] },
];

const VALUES = [
  { title: "Deadlines are everything", desc: "We ship on time. No exceptions, no excuses.", icon: "⏱" },
  { title: "Honesty", desc: "No team can grow without radical transparency. We say what we mean.", icon: "🤝" },
  { title: "Discipline and consistency", desc: "Show up every day. Compound over time.", icon: "🔁" },
  { title: "Empathy", desc: "For clients, for teammates, for the problem.", icon: "💡" },
  { title: "Never give up attitude", desc: "Try, then try harder. Then figure out why it's not working and try again.", icon: "🔥" },
  { title: "Go the extra mile", desc: "For team members and clients. Always.", icon: "🚀" },
];

const PERKS = [
  "Work directly on real founder pipelines",
  "Exposure to multiple industries and global markets",
  "Learn AI-led growth systems very few agencies in India truly understand",
  "WeWork, Worli with a young, hungry team",
  "High growth potential + incentives tied to performance",
  "Freedom to bring your ideas and experiment",
];

const BENEFITS = [
  "Real founder pipelines", "AI-powered systems", "WeWork Worli", "Fast growth",
  "Multiple industries", "Global markets", "Young team", "Performance incentives",
  "Experiment freely", "Flat hierarchy", "Learn fast", "Real ownership",
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

export default function Careers() {
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

  /* Blob parallax — hero */
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

  /* Blob parallax — CTA */
  useEffect(() => {
    let id: number;
    const t0 = performance.now();
    function loop() {
      const t = (performance.now() - t0) / 1000;
      if (ctaBlob1.current) ctaBlob1.current.style.transform = `translate(${Math.sin(t * 0.78) * 310 + Math.sin(t * 0.28) * 92}px, ${Math.cos(t * 0.58) * 135 + Math.cos(t * 0.22) * 58}px)`;
      if (ctaBlob2.current) ctaBlob2.current.style.transform = `translate(${Math.sin(t * 0.68 + 2) * 310 + Math.cos(t * 0.38) * 92}px, ${Math.cos(t * 0.78 + 1) * 135 + Math.sin(t * 0.33) * 58}px)`;
      id = requestAnimationFrame(loop);
    }
    id = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(id);
  }, []);

  /* Draw-in underline */
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

  /* Number tickers */
  useEffect(() => {
    const el = statsContainerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !statsTriggered) {
        setStatsTriggered(true);
        [
          { ref: stat1Ref, end: 2, suffix: " open roles" },
          { ref: stat2Ref, end: 10, suffix: "+" },
          { ref: stat3Ref, end: 3, suffix: " countries" },
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
        <div ref={blob2} aria-hidden style={{ position: "absolute", top: "40%", left: "75%", width: 500, height: 500, marginTop: -250, marginLeft: -250, borderRadius: "50%", background: "radial-gradient(circle, rgba(168,85,247,0.15) 0%, rgba(168,85,247,0.06) 40%, transparent 70%)", filter: "blur(55px)", pointerEvents: "none", willChange: "transform" }} />
        <div ref={blob3} aria-hidden style={{ position: "absolute", top: "70%", left: "50%", width: 400, height: 400, marginTop: -200, marginLeft: -200, borderRadius: "50%", background: "radial-gradient(circle, rgba(0,119,181,0.12) 0%, transparent 70%)", filter: "blur(50px)", pointerEvents: "none", willChange: "transform" }} />

        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-xs font-semibold" style={{ color: "#3D3D3D" }}>Careers</span>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-6 hero-fade"
            style={{ borderColor: "rgba(245,183,49,0.4)", background: "rgba(245,183,49,0.1)" }}>
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: "#F5B731" }} />
            <span className="text-xs font-bold uppercase tracking-[0.15em]" style={{ color: "#D97706" }}>We&apos;re Hiring</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black leading-[0.95] mb-6 hero-fade-d1" style={{ color: "#0a0a0a" }}>
            Join the team that{" "}
            <span className="relative inline-block">
              builds pipelines.
              <svg className="absolute -bottom-1 left-0 w-full overflow-visible" height="10" viewBox="0 0 430 10" preserveAspectRatio="none" aria-hidden>
                <path ref={underlineRef} d="M2 7 Q107 2 215 6 Q323 10 428 5" stroke="#F5B731" strokeWidth="3" fill="none" strokeLinecap="round" />
              </svg>
            </span>
          </h1>

          <p className="text-lg sm:text-xl max-w-2xl mb-10 hero-fade-d2" style={{ color: "#52525B" }}>
            We build AI-powered outbound systems for B2B companies across India and Southeast Asia. Fast learning curve, real ownership, and a young driven team at WeWork Worli.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 hero-fade-d3">
            <a href="#open-roles"
              className="btn-dark px-8 py-4 text-base font-bold inline-flex items-center gap-2">
              View Open Roles
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
            </a>
            <a href="mailto:growth@myntmore.com?subject=Speculative Application - Myntmore"
              className="btn-ghost px-8 py-4 text-base font-bold inline-flex items-center gap-2">
              Send Speculative Application
            </a>
          </div>
        </div>
      </section>

      {/* ── Stats strip ──────────────────────────────────────── */}
      <div ref={statsContainerRef} className="border-y py-10 px-4" style={{ borderColor: "#E8E2D9", backgroundColor: "#ffffff" }}>
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {[
            { ref: stat1Ref, init: "2 open roles", label: "Active positions in Mumbai" },
            { ref: stat2Ref, init: "10+", label: "B2B clients across industries" },
            { ref: stat3Ref, init: "3 countries", label: "Markets we operate in" },
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
        <div className="flex gap-4 w-max" style={{ animation: "marquee-left 32s linear infinite" }}>
          {doubled.map((label, i) => <BenefitChip key={i} label={label} i={i} />)}
        </div>
      </div>

      {/* ── Open Roles ───────────────────────────────────────── */}
      <section id="open-roles" className="py-20 px-4" style={{ backgroundColor: "#F8F6F2" }}>
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <span className="inline-flex text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4"
              style={{ backgroundColor: "rgba(245,183,49,0.1)", color: "#D97706", border: "1px solid rgba(245,183,49,0.3)" }}>
              Open Roles
            </span>
            <h2 className="text-3xl sm:text-4xl font-black" style={{ color: "#0a0a0a" }}>Currently hiring</h2>
            <p className="text-base mt-3 max-w-xl" style={{ color: "#52525B" }}>Both roles are full-time, in-person at WeWork Worli, Mumbai.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            {OPEN_ROLES.map((role) => (
              <Link key={role.href} href={role.href}
                className="group block rounded-2xl border p-8 transition-all duration-300"
                style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = `${role.accent}55`; (e.currentTarget as HTMLElement).style.backgroundColor = `${role.accent}04`; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "#E8E2D9"; (e.currentTarget as HTMLElement).style.backgroundColor = "#ffffff"; }}>
                <div className="flex items-start justify-between mb-5">
                  <span className="inline-flex text-xs font-bold px-2.5 py-1 rounded-full"
                    style={{ backgroundColor: "#FEF9EC", color: "#F5B731", border: "1px solid rgba(245,183,49,0.3)" }}>
                    {role.type}
                  </span>
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke={role.accent} strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-black mb-2" style={{ color: "#0a0a0a" }}>{role.title}</h3>
                <p className="text-sm font-semibold mb-1" style={{ color: "#52525B" }}>{role.ctc}</p>
                <p className="text-sm mb-5" style={{ color: "#8C8279" }}>{role.location}</p>
                <div className="flex flex-wrap gap-2">
                  {role.tags.map((t) => (
                    <span key={t} className="text-xs px-2.5 py-1 rounded-full"
                      style={{ backgroundColor: `${role.accent}10`, color: role.accent, border: `1px solid ${role.accent}30` }}>
                      {t}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>

          <div className="rounded-2xl border p-8" style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9" }}>
            <h3 className="text-base font-black mb-2" style={{ color: "#0a0a0a" }}>Don&apos;t see your role?</h3>
            <p className="text-sm mb-5" style={{ color: "#52525B" }}>We&apos;re always looking for hungry, curious, driven people. Send us a note and tell us how you&apos;d contribute.</p>
            <a href="mailto:growth@myntmore.com?subject=Speculative Application - Myntmore"
              className="btn-dark px-6 py-3 text-sm font-bold inline-flex items-center gap-2">
              Send a speculative application
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
          </div>
        </div>
      </section>

      {/* ── Why Join ─────────────────────────────────────────── */}
      <section className="py-20 px-4 border-t" style={{ borderColor: "#E8E2D9", backgroundColor: "#ffffff" }}>
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <span className="inline-flex text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4"
              style={{ backgroundColor: "rgba(245,183,49,0.1)", color: "#D97706", border: "1px solid rgba(245,183,49,0.3)" }}>
              Why Myntmore
            </span>
            <h2 className="text-3xl sm:text-4xl font-black" style={{ color: "#0a0a0a" }}>Why join us?</h2>
            <p className="text-base mt-3 max-w-xl" style={{ color: "#52525B" }}>You&apos;ll work across multiple founders, industries, and business models — a crash course in how companies grow.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {PERKS.map((item) => (
              <div key={item} className="flex items-start gap-3 p-5 rounded-xl border transition-all duration-200"
                style={{ backgroundColor: "#F8F6F2", borderColor: "#E8E2D9" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(245,183,49,0.4)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "#E8E2D9"; }}>
                <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ backgroundColor: "rgba(245,183,49,0.15)" }}>
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="#D97706" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <p className="text-sm leading-relaxed" style={{ color: "#3D3D3D" }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Values ───────────────────────────────────────────── */}
      <section className="py-20 px-4 border-t" style={{ borderColor: "#E8E2D9", backgroundColor: "#F8F6F2" }}>
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <span className="inline-flex text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4"
              style={{ backgroundColor: "rgba(245,183,49,0.1)", color: "#D97706", border: "1px solid rgba(245,183,49,0.3)" }}>
              Our Values
            </span>
            <h2 className="text-3xl sm:text-4xl font-black" style={{ color: "#0a0a0a" }}>Non-negotiable.</h2>
            <p className="text-base mt-3 max-w-xl" style={{ color: "#52525B" }}>If these don&apos;t resonate with you, we&apos;re probably not the right fit. And that&apos;s okay.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {VALUES.map((v) => (
              <div key={v.title} className="rounded-2xl border p-6 transition-all duration-300"
                style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(245,183,49,0.4)"; (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(245,183,49,0.02)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "#E8E2D9"; (e.currentTarget as HTMLElement).style.backgroundColor = "#ffffff"; }}>
                <div className="text-2xl mb-3">{v.icon}</div>
                <h3 className="text-sm font-black mb-2" style={{ color: "#0a0a0a" }}>{v.title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: "#52525B" }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Location ─────────────────────────────────────────── */}
      <section className="py-20 px-4 border-t" style={{ borderColor: "#E8E2D9", backgroundColor: "#ffffff" }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6"
                style={{ backgroundColor: "rgba(245,183,49,0.1)", color: "#D97706", border: "1px solid rgba(245,183,49,0.3)" }}>
                Where We Work
              </span>
              <h2 className="text-3xl font-black mb-5" style={{ color: "#0a0a0a" }}>WeWork, Worli, Mumbai</h2>
              <p className="text-base mb-2" style={{ color: "#52525B" }}>WeWork, Vaswani Chambers</p>
              <p className="text-base mb-1" style={{ color: "#52525B" }}>Worli, Mumbai — 400025</p>
              <p className="text-sm mt-4 mb-8" style={{ color: "#8C8279" }}>Working hours: 10:30 AM – 7:30 PM</p>
              <a href="mailto:growth@myntmore.com?subject=Job Application - Myntmore"
                className="btn-dark px-8 py-4 text-base font-bold inline-flex items-center gap-2">
                Apply Now
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
            </div>
            <div className="rounded-2xl border p-8" style={{ backgroundColor: "#F8F6F2", borderColor: "#E8E2D9" }}>
              <p className="text-sm font-black mb-5" style={{ color: "#0a0a0a" }}>What to expect after applying:</p>
              <div className="space-y-4">
                {[
                  { step: "01", text: "We review your application within 48 hours" },
                  { step: "02", text: "Short intro call with the founder — 20 minutes" },
                  { step: "03", text: "A practical task relevant to the role" },
                  { step: "04", text: "Final conversation + offer within the week" },
                ].map((s) => (
                  <div key={s.step} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-xl flex items-center justify-center text-xs font-black flex-shrink-0"
                      style={{ backgroundColor: "rgba(245,183,49,0.15)", color: "#D97706" }}>
                      {s.step}
                    </div>
                    <p className="text-sm leading-relaxed pt-1" style={{ color: "#52525B" }}>{s.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="relative py-28 px-4 overflow-hidden" style={{ backgroundColor: "#F8F6F2" }}>
        <div ref={ctaBlob1} aria-hidden style={{ position: "absolute", top: "50%", left: "25%", width: 600, height: 600, marginTop: -300, marginLeft: -300, borderRadius: "50%", background: "radial-gradient(circle, rgba(245,183,49,0.28) 0%, rgba(245,183,49,0.1) 40%, transparent 70%)", filter: "blur(65px)", pointerEvents: "none", willChange: "transform" }} />
        <div ref={ctaBlob2} aria-hidden style={{ position: "absolute", top: "50%", left: "75%", width: 550, height: 550, marginTop: -275, marginLeft: -275, borderRadius: "50%", background: "radial-gradient(circle, rgba(168,85,247,0.2) 0%, rgba(168,85,247,0.07) 40%, transparent 70%)", filter: "blur(65px)", pointerEvents: "none", willChange: "transform" }} />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-8"
            style={{ borderColor: "rgba(245,183,49,0.4)", background: "rgba(245,183,49,0.1)" }}>
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: "#F5B731" }} />
            <span className="text-xs font-bold uppercase tracking-[0.15em]" style={{ color: "#F5B731" }}>Limited spots available</span>
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight mb-6 leading-[0.95]" style={{ color: "#0a0a0a" }}>
            Ready to build something<br /><span style={{ color: "#F5B731" }}>that actually matters?</span>
          </h2>

          <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-10" style={{ color: "#52525B" }}>
            Send your application and tell us what you&apos;d bring to the team. We move fast and we reply to everyone.
          </p>

          <a href="mailto:growth@myntmore.com?subject=Job Application - Myntmore"
            className="inline-flex items-center gap-2.5 px-10 py-5 rounded-full font-black text-lg btn-dark">
            Apply Now
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>

          <p className="mt-5 text-sm" style={{ color: "#6B6B6B" }}>growth@myntmore.com — we reply within 48 hours.</p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mt-10 pt-8 border-t" style={{ borderColor: "#E8E2D9" }}>
            {["WeWork Worli", "Fast hiring process", "Real ownership from day one"].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <svg className="w-4 h-4 flex-shrink-0" style={{ color: "#F5B731" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm" style={{ color: "#52525B" }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </InnerLayout>
  );
}
