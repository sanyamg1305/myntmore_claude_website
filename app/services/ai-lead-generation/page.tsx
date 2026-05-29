import type { Metadata } from "next";
import Link from "next/link";
import InnerLayout from "../../components/InnerLayout";
import LeadCaptureForm from "../../components/LeadCaptureForm";
import FadeIn from "../../components/FadeIn";
import StatTicker from "../../components/StatTicker";

export const metadata: Metadata = {
  title: "AI Lead Generation Services | B2B Pipeline | Myntmore Mumbai",
  description: "Custom AI agents research, qualify, and prioritise leads at scale. 80% reduction in manual research time. 300–1500 scored, research-enriched leads per month for B2B companies.",
  alternates: { canonical: "https://myntmore.com/services/ai-lead-generation" },
  keywords: ["ai lead generation", "b2b lead generation", "ai agency in mumbai", "ai agency", "automated lead gen"],
  openGraph: {
    title: "AI Lead Generation Services | Myntmore",
    description: "Your pipeline shouldn't depend on how much time your team has. AI agents that work 24/7.",
    url: "https://myntmore.com/services/ai-lead-generation",
  },
};

const STEPS = [
  { n: "01", title: "Agent Setup", desc: "We configure custom AI agents with your specific ICP rules and qualification criteria." },
  { n: "02", title: "Data Sourcing", desc: "The agents pull data from public profiles, news sites, and financial reports to build a full picture of each lead." },
  { n: "03", title: "Lead Scoring Model", desc: "Leads are ranked based on fit and intent, ensuring your team focuses on high-value targets first." },
  { n: "04", title: "CRM Export Automation", desc: "Verified, scored leads are pushed automatically to your CRM with a full research summary attached." },
];

const DELIVERABLES = [
  "AI-scored lead lists with deep qualification",
  "Research summaries for every prospect",
  "CRM-ready exports mapped to your fields",
  "Weekly pipeline health and volume reports",
  "Automated lead routing and prioritisation",
  "Custom AI agent infrastructure for your team",
];

const WHO_FOR = [
  { title: "High Volume GTM Teams", desc: "Teams that need to process thousands of accounts per month without sacrificing quality or personalisation." },
  { title: "Growth Stage Companies", desc: "Businesses moving from founder-led sales to a repeatable system that runs without constant manual input." },
  { title: "Account Based Marketing Teams", desc: "ABM teams that need deep, account-level research at scale to drive high-impact outbound campaigns." },
];

const FAQ = [
  {
    q: "What does the AI actually do versus your human team?",
    a: "The AI handles research, enrichment, and scoring at scale. It pulls data from multiple sources, cross-references signals, and ranks leads by fit and intent. Our human team configures the agents, audits the output for quality, writes the strategic layer, and makes sure nothing gets handed to your sales team without being actually useful.",
  },
  {
    q: "How accurate is the lead scoring?",
    a: "Accuracy depends on how well-defined your ICP is going in. With a clear ICP, our scoring model runs at roughly 85–90% relevance on the top tier leads. We also build in a feedback loop where your team flags false positives, and the model adjusts over time.",
  },
  {
    q: "Which CRMs do you export to?",
    a: "HubSpot, Salesforce, Pipedrive, Zoho, and Notion databases are all supported. If you use something else we export a clean CSV that maps to your existing fields. No manual reformatting needed on your end.",
  },
  {
    q: "How many leads can you generate per month?",
    a: "For most B2B clients with a defined ICP we deliver between 300 and 1500 scored, research-enriched leads per month. Volume is never the goal though. Relevance is. 200 right-fit leads beat 2000 cold ones every time.",
  },
  {
    q: "Will this work for a niche industry with a small TAM?",
    a: "Often better than broad markets. A smaller TAM means we can go deeper on each account, track more specific signals, and personalise outreach at a level that generic lead gen tools cannot. Some of our best results have come from clients with a TAM of under 5000 accounts.",
  },
];

export default function AILeadGeneration() {
  return (
    <InnerLayout>
      <section className="pt-32 pb-16 px-4" style={{ backgroundColor: "#F8F6F2" }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Link href="/services" className="link-subtle text-xs font-semibold"
            >Services</Link>
            <span style={{ color: "#E8E2D9" }}>/</span>
            <span className="text-xs font-semibold" style={{ color: "#3D3D3D" }}>AI Lead Generation</span>
          </div>
          <span className="inline-flex items-center text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4 hero-fade" style={{ backgroundColor: "rgba(59,130,246,0.08)", color: "#3b82f6", border: "1px solid rgba(59,130,246,0.2)" }}>AI Lead Generation</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight hero-fade-d1" style={{ color: "#0a0a0a" }}>
            Your pipeline shouldn&apos;t depend on how much time your team has.
          </h1>
          <p className="text-lg sm:text-xl max-w-2xl mb-8 hero-fade-d2" style={{ color: "#52525B" }}>
            Custom AI agents research, qualify, and prioritise leads at scale so your team only talks to people worth their time.
          </p>
          <div className="flex gap-8 mb-8 hero-fade-d3">
            {[{ v: "38%", l: "Avg reply rate across accounts" }, { v: "80%", l: "Reduction in manual research" }].map((s) => (
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
            <h2 className="text-2xl font-black mb-4" style={{ color: "#0a0a0a" }}>AI-led vs traditional lead gen</h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: "#52525B" }}>
              Traditional lead generation depends on humans manually searching through LinkedIn and company websites. AI-led lead generation automates the heavy lifting of research and qualification using custom agents that work 24/7.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "#52525B" }}>
              We help you scale your output without scaling your headcount by letting AI handle the intelligence layer of your pipeline.
            </p>
          </div>
          <div className="rounded-2xl border p-6" style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9" }}>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: "#3b82f6" }}>Deliverables</h3>
            <ul className="space-y-3">
              {DELIVERABLES.map((d) => (
                <li key={d} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: "rgba(59,130,246,0.1)" }}>
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="#3b82f6" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
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
                <div className="text-xs font-black mb-3" style={{ color: "#3b82f6" }}>{s.n}</div>
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

      <LeadCaptureForm title="Ready to let AI fill your pipeline?" subtitle="We'll configure a custom AI lead generation setup for your ICP in 7 days." />
    </InnerLayout>
  );
}
