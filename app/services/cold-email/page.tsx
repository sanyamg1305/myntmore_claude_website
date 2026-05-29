import type { Metadata } from "next";
import Link from "next/link";
import InnerLayout from "../../components/InnerLayout";
import LeadCaptureForm from "../../components/LeadCaptureForm";
import FadeIn from "../../components/FadeIn";
import StatTicker from "../../components/StatTicker";

export const metadata: Metadata = {
  title: "Cold Email Infrastructure & Deliverability | B2B Outbound | Myntmore",
  description: "The full cold email technical stack built and managed for you. Domain warmup, SPF/DKIM/DMARC, AI-personalised sequences. 98.5% inbox rate target. 38% avg reply rate.",
  alternates: { canonical: "https://myntmore.com/services/cold-email" },
  keywords: ["cold email infrastructure", "cold email deliverability", "b2b cold email", "email outreach", "cold email agency mumbai"],
  openGraph: {
    title: "Cold Email Infrastructure & Deliverability | Myntmore",
    description: "Cold email that actually lands in the inbox. Full technical stack built and managed for you.",
    url: "https://myntmore.com/services/cold-email",
  },
};

const STEPS = [
  { n: "01", title: "Domain Setup", desc: "We purchase and configure dedicated sending domains with proper SPF, DKIM, and DMARC records." },
  { n: "02", title: "Structured Warmup", desc: "We run your domains through a 4-week warmup process to build a healthy sender reputation before sending starts." },
  { n: "03", title: "Sequence Architecture", desc: "We build multi-step sequences using AI personalisation and A/B testing to maximise your reply rates." },
  { n: "04", title: "Continuous Optimisation", desc: "We monitor deliverability daily, swapping domains and tweaking copy to keep your inbox rates above 95%." },
];

const DELIVERABLES = [
  "Fully warmed sending domains and inboxes",
  "AI-personalised sequences that drive replies",
  "Inbox rates consistently above 95%",
  "Spam rates maintained below 0.2%",
  "Weekly deliverability and performance reports",
  "DNS and technical infrastructure management",
];

const WHO_FOR = [
  { title: "Companies Scaling Outbound", desc: "Teams that need professional, scalable infrastructure that does not put their main company domain at risk." },
  { title: "SaaS Sales Leaders", desc: "Leaders who want to equip their team with a high-performance email engine that actually reaches the inbox." },
  { title: "GTM Teams in Mature Markets", desc: "Teams that need a technical edge to bypass aggressive spam filters and reach busy decision makers." },
];

const FAQ = [
  {
    q: "How many domains and inboxes do we need?",
    a: "For most clients we set up 3–5 sending domains with 2–3 inboxes per domain. This keeps volume per inbox low, protects deliverability, and means if one domain ever takes a hit, your entire outbound does not go down. We handle all domain purchasing, DNS configuration, and inbox setup.",
  },
  {
    q: "How long does domain warmup take?",
    a: "Typically 3–4 weeks. We run a structured warmup using real engagement signals so the domains build a healthy sender reputation before any cold outreach starts. Skipping or rushing warmup is the number one reason cold email campaigns fail from day one.",
  },
  {
    q: "What sending tools do you use?",
    a: "We primarily work with Instantly and Smartlead depending on the client's volume and use case. Both are purpose-built for cold email infrastructure and have strong deliverability track records. We configure, manage, and monitor everything inside these platforms on your behalf.",
  },
  {
    q: "What open and reply rates should we expect?",
    a: "With a well-built ICP, strong copy, and healthy infrastructure, we consistently see open rates between 40–55% and reply rates between 3–8%. Our average across active accounts sits at 38% reply rate. Results vary by industry and offer but these are realistic benchmarks we hold ourselves to.",
  },
  {
    q: "What happens if deliverability drops?",
    a: "We monitor deliverability daily across all client accounts. If inbox rates drop or spam rates rise, we pause sending immediately, diagnose the issue, and fix it before resuming. You will never find out about a deliverability problem from your own inbox. We catch it before it affects results.",
  },
];

export default function ColdEmail() {
  return (
    <InnerLayout>
      <section className="pt-32 pb-16 px-4" style={{ backgroundColor: "#F8F6F2" }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Link href="/services" className="link-subtle text-xs font-semibold"
            >Services</Link>
            <span style={{ color: "#E8E2D9" }}>/</span>
            <span className="text-xs font-semibold" style={{ color: "#3D3D3D" }}>Cold Email Infrastructure</span>
          </div>
          <span className="inline-flex items-center text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4 hero-fade" style={{ backgroundColor: "rgba(34,197,94,0.08)", color: "#16a34a", border: "1px solid rgba(34,197,94,0.2)" }}>Cold Email Infrastructure</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight hero-fade-d1" style={{ color: "#0a0a0a" }}>
            Cold email that actually lands in the inbox.
          </h1>
          <p className="text-lg sm:text-xl max-w-2xl mb-8 hero-fade-d2" style={{ color: "#52525B" }}>
            The full technical stack built and managed for you. Domains, warmup, deliverability, sequences, and continuous optimisation.
          </p>
          <div className="flex gap-8 mb-8 hero-fade-d3">
            {[{ v: "98.5%", l: "Average inbox rate" }, { v: "38%", l: "Average reply rate across campaigns" }].map((s) => (
              <div key={s.l}><StatTicker value={s.v} className="text-3xl font-black" style={{ color: "#0a0a0a" }} /><span className="block text-xs mt-0.5" style={{ color: "#8C8279" }}>{s.l}</span></div>
            ))}
          </div>
          <a href="https://calendly.com/founder-myntmore/30-min" target="_blank" rel="noopener noreferrer" className="btn-dark px-8 py-4 text-base font-bold inline-flex items-center gap-2">
            Get a Free GTM Audit
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
        </div>
      </section>

      <section className="py-16 px-4 border-t" style={{ borderColor: "#E8E2D9" }}>
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-black mb-4" style={{ color: "#0a0a0a" }}>Why most cold email campaigns fail</h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: "#52525B" }}>
              Cold email is no longer about sending as many messages as possible. It is about deliverability, infrastructure, and technical reputation. Most campaigns fail because they are built on shaky foundations that land straight in the spam folder.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "#52525B" }}>
              We handle everything from domain setup and DNS configuration to warmup and daily deliverability monitoring, so your messages always land in the inbox.
            </p>
          </div>
          <div className="rounded-2xl border p-6" style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9" }}>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: "#16a34a" }}>Deliverables</h3>
            <ul className="space-y-3">
              {DELIVERABLES.map((d) => (
                <li key={d} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: "rgba(34,197,94,0.1)" }}>
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="#16a34a" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  </span>
                  <span className="text-sm" style={{ color: "#3D3D3D" }}>{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 border-t" style={{ borderColor: "#E8E2D9", backgroundColor: "#ffffff" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black mb-10" style={{ color: "#0a0a0a" }}>How it works</h2>
          <FadeIn><div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {STEPS.map((s) => (
              <div key={s.n} className="rounded-2xl border p-6" style={{ backgroundColor: "#F8F6F2", borderColor: "#E8E2D9" }}>
                <div className="text-xs font-black mb-3" style={{ color: "#16a34a" }}>{s.n}</div>
                <h3 className="text-base font-black mb-2" style={{ color: "#0a0a0a" }}>{s.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#52525B" }}>{s.desc}</p>
              </div>
            ))}
          </div></FadeIn>
        </div>
      </section>

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

      <LeadCaptureForm title="Ready for cold email that lands in the inbox?" subtitle="We'll audit your current setup and show you exactly where your deliverability is leaking." />
    </InnerLayout>
  );
}
