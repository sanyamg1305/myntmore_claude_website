import type { Metadata } from "next";
import Link from "next/link";
import InnerLayout from "../../components/InnerLayout";
import LeadCaptureForm from "../../components/LeadCaptureForm";
import FadeIn from "../../components/FadeIn";
import StatTicker from "../../components/StatTicker";

export const metadata: Metadata = {
  title: "Sales Intelligence & ICP Mapping | B2B Lead Generation | Myntmore",
  description: "We build your ideal customer profile from 40+ real buying signals, not guesswork. Trigger-based lists updated daily. Know exactly who is ready to buy before your competitors do.",
  alternates: { canonical: "https://myntmore.com/services/sales-intelligence" },
  keywords: ["sales intelligence", "ICP mapping", "b2b lead generation", "intent signals", "account scoring"],
  openGraph: {
    title: "Sales Intelligence & ICP Mapping | Myntmore",
    description: "40+ intent signals. Trigger-based lists updated daily. Know exactly who is ready to buy.",
    url: "https://myntmore.com/services/sales-intelligence",
  },
};

const STEPS = [
  { n: "01", title: "Signal Audit", desc: "We audit your existing data and define the specific triggers that correlate with your best customers." },
  { n: "02", title: "ICP Definition", desc: "We build a multi-dimensional profile of your best-fit accounts based on verified signal patterns." },
  { n: "03", title: "Trigger List Build", desc: "Our systems scrape and enrich data across dozens of sources to find accounts matching your signals." },
  { n: "04", title: "Daily Refresh", desc: "The intelligence engine runs daily, adding new prospects to your queue the moment they show intent." },
];

const DELIVERABLES = [
  "Scored lead lists enriched with deep context",
  "Intent signal dashboard for real-time monitoring",
  "Account-level competitive intelligence",
  "Trigger-based lists updated on a daily basis",
  "CRM-ready exports for seamless handoff",
  "ICP data framework for long-term strategy",
];

const WHO_FOR = [
  { title: "Companies with high ACV", desc: "If your deal size is high, you cannot afford to waste reps on low-quality leads. You need precision." },
  { title: "Series A and B Startups", desc: "You have a working product but need a repeatable, signal-led way to find the next 50 to 100 accounts." },
  { title: "GTM Teams in Crowded Markets", desc: "When everyone is cold calling, signal-led outreach is the only way to cut through the noise and be first." },
];

const FAQ = [
  {
    q: "How is this different from just buying a lead list?",
    a: "A bought list gives you names. We give you context. Every lead in our output is scored against real buying signals: funding rounds, hiring activity, tech stack changes, job transitions. You are reaching out to accounts showing active signs of being in-market right now.",
  },
  {
    q: "What intent signals do you actually track?",
    a: "We track over 40 signal types across public data sources. The most reliable ones are recent funding announcements, SDR or sales hiring surges, leadership changes at the buying level, tech stack additions detected via job descriptions, and G2 or review site activity. We configure the signal mix based on what your buyers actually do before they purchase.",
  },
  {
    q: "How long before we have a working ICP?",
    a: "The initial ICP framework is ready within the first week. We run it against real data in week two and refine based on what the signal data confirms. By week three you have a live, scored list that is being refreshed daily.",
  },
  {
    q: "Do you integrate with our existing CRM?",
    a: "Yes. We export directly to HubSpot, Salesforce, Pipedrive, and most other major CRMs via CSV or native integration depending on your setup. Your team sees the leads inside the tool they already use.",
  },
  {
    q: "Can we run this as a standalone service?",
    a: "Absolutely. A lot of clients start here because they already have a sales team but are wasting time on bad-fit prospects. We hand you the intelligence layer and your team runs the outreach. It works as a standalone or as the foundation for the full system.",
  },
];

export default function SalesIntelligence() {
  return (
    <InnerLayout>
      <section className="pt-32 pb-16 px-4" style={{ backgroundColor: "#F8F6F2" }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Link href="/services" className="link-subtle text-xs font-semibold"
            >Services</Link>
            <span style={{ color: "#E8E2D9" }}>/</span>
            <span className="text-xs font-semibold" style={{ color: "#3D3D3D" }}>Sales Intelligence</span>
          </div>
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4 hero-fade" style={{ backgroundColor: "rgba(168,85,247,0.08)", color: "#a855f7", border: "1px solid rgba(168,85,247,0.2)" }}>Sales Intelligence & ICP Mapping</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight hero-fade-d1" style={{ color: "#0a0a0a" }}>
            Know exactly who is ready to buy.<br />Before your competitors do.
          </h1>
          <p className="text-lg sm:text-xl max-w-2xl mb-8 hero-fade-d2" style={{ color: "#52525B" }}>
            We build your ideal customer profile from real buying signals, not guesswork. 40+ intent signals. Trigger-based lists updated daily.
          </p>
          <div className="flex gap-8 mb-8 hero-fade-d3">
            {[{ v: "12K+", l: "Meetings booked for clients" }, { v: "4.2x", l: "Average pipeline lift" }].map((s) => (
              <div key={s.l}><StatTicker value={s.v} className="text-3xl font-black" style={{ color: "#0a0a0a" }} /><span className="block text-xs mt-0.5" style={{ color: "#8C8279" }}>{s.l}</span></div>
            ))}
          </div>
          <a href="https://calendly.com/founder-myntmore/30-min" target="_blank" rel="noopener noreferrer" className="btn-dark px-8 py-4 text-base font-bold inline-flex items-center gap-2">
            Get a Free GTM Audit
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 px-4 border-t" style={{ borderColor: "#E8E2D9" }}>
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-black mb-4" style={{ color: "#0a0a0a" }}>What is sales intelligence?</h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: "#52525B" }}>
              Sales intelligence is the process of collecting and analysing data about your prospects to understand their readiness to buy. We look beyond basic firmographics like industry and company size to find the hidden signals that indicate a genuine need for your solution right now.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "#52525B" }}>
              We build the infrastructure to move from a list of names to a list of opportunities by mapping your ideal customer profile against 40+ real-world intent signals.
            </p>
          </div>
          <div className="rounded-2xl border p-6" style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9" }}>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: "#a855f7" }}>What you get</h3>
            <ul className="space-y-3">
              {DELIVERABLES.map((d) => (
                <li key={d} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: "rgba(168,85,247,0.1)" }}>
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="#a855f7" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  </span>
                  <span className="text-sm" style={{ color: "#3D3D3D" }}>{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 px-4 border-t" style={{ borderColor: "#E8E2D9", backgroundColor: "#ffffff" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black mb-10" style={{ color: "#0a0a0a" }}>How it works</h2>
          <FadeIn><div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {STEPS.map((s) => (
              <div key={s.n} className="rounded-2xl border p-6" style={{ backgroundColor: "#F8F6F2", borderColor: "#E8E2D9" }}>
                <div className="text-xs font-black mb-3" style={{ color: "#a855f7" }}>{s.n}</div>
                <h3 className="text-base font-black mb-2" style={{ color: "#0a0a0a" }}>{s.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#52525B" }}>{s.desc}</p>
              </div>
            ))}
          </div></FadeIn>
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-16 px-4 border-t" style={{ borderColor: "#E8E2D9" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black mb-10" style={{ color: "#0a0a0a" }}>Who this is for</h2>
          <FadeIn delay={80}><div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {WHO_FOR.map((w) => (
              <div key={w.title} className="rounded-2xl border p-6" style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9" }}>
                <h3 className="text-base font-black mb-3" style={{ color: "#0a0a0a" }}>{w.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#52525B" }}>{w.desc}</p>
              </div>
            ))}
          </div></FadeIn>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 border-t" style={{ borderColor: "#E8E2D9", backgroundColor: "#ffffff" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black mb-10" style={{ color: "#0a0a0a" }}>Frequently asked questions</h2>
          <FadeIn delay={60}><div className="space-y-6">
            {FAQ.map((item) => (
              <div key={item.q} className="rounded-2xl border p-6" style={{ backgroundColor: "#F8F6F2", borderColor: "#E8E2D9" }}>
                <h3 className="text-base font-bold mb-3" style={{ color: "#0a0a0a" }}>{item.q}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#52525B" }}>{item.a}</p>
              </div>
            ))}
          </div></FadeIn>
        </div>
      </section>

      <LeadCaptureForm title="Ready to see who's ready to buy?" subtitle="Get a free ICP audit and sample scored lead list for your target market." />
    </InnerLayout>
  );
}
