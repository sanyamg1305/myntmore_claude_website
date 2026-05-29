import type { Metadata } from "next";
import Link from "next/link";
import InnerLayout from "../components/InnerLayout";
import LeadCaptureForm from "../components/LeadCaptureForm";
import FadeIn from "../components/FadeIn";
import StatTicker from "../components/StatTicker";

export const metadata: Metadata = {
  title: "B2B Lead Generation Case Studies | Real Pipeline Results | Myntmore",
  description: "Real B2B pipeline results, no vanity metrics. 40 meetings in 8 weeks, $1.2M pipeline for SaaS Series A. 3x inbound in 90 days for professional services.",
  alternates: { canonical: "https://myntmore.com/case-studies" },
  openGraph: {
    title: "B2B Lead Generation Case Studies | Myntmore",
    description: "Results in the CRM, not the deck.",
    url: "https://myntmore.com/case-studies",
  },
};

const CASE_STUDIES = [
  {
    slug: "saas-series-a", tag: "SaaS · Series A", hoverClass: "card-hover-blue",
    title: "40 qualified meetings in 8 weeks from a cold start",
    stats: [{ v: "40", l: "Meetings in 8 weeks" }, { v: "34%", l: "Reply rate" }, { v: "$1.2M", l: "Pipeline generated" }],
    excerpt: "A B2B SaaS company entering a new vertical had zero outbound infrastructure. Their AE was spending 60% of their day manually finding leads. We built a multi-channel engine that changed that completely.",
    services: ["AI Lead Generation", "Cold Email Infrastructure", "LinkedIn Outreach"],
    tagColor: "#3b82f6",
  },
  {
    slug: "professional-services-linkedin", tag: "Professional Services · Bootstrapped", hoverClass: "card-hover-purple",
    title: "LinkedIn brand drove 3x inbound in 90 days",
    stats: [{ v: "3x", l: "Inbound lead volume" }, { v: "18K", l: "New followers" }, { v: "4.8%", l: "Post engagement rate" }],
    excerpt: "A successful consulting founder was entirely dependent on word-of-mouth referrals. Growth was highly volatile month-to-month. We took over their LinkedIn presence and turned it into a predictable inbound engine.",
    services: ["Personal Branding", "LinkedIn Outreach"],
    tagColor: "#a855f7",
  },
];

export default function CaseStudies() {
  return (
    <InnerLayout>
      <section className="pt-32 pb-16 px-4" style={{ backgroundColor: "#F8F6F2" }}>
        <div className="max-w-4xl mx-auto">
          <div className="mb-4">
            <span className="inline-flex text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full" style={{ backgroundColor: "#FEF9EC", color: "#F5B731", border: "1px solid rgba(245,183,49,0.3)" }}>
              Client Results
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight hero-fade-d1" style={{ color: "#0a0a0a" }}>
            Results in the CRM,<br />not the deck.
          </h1>
          <p className="text-lg sm:text-xl max-w-2xl hero-fade-d2" style={{ color: "#52525B" }}>
            Deep dives into how we built pipelines for SaaS, services, and eCommerce tech. Real numbers, real systems.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <FadeIn><div className="max-w-4xl mx-auto space-y-8">
          {CASE_STUDIES.map((cs) => (
            <Link key={cs.slug} href={`/case-studies/${cs.slug}`} className={`group block rounded-2xl border overflow-hidden ${cs.hoverClass}`} style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9" }}>
              <div className="p-8">
                <span className="inline-flex text-xs font-bold px-3 py-1 rounded-full mb-4" style={{ backgroundColor: `${cs.tagColor}12`, color: cs.tagColor, border: `1px solid ${cs.tagColor}30` }}>{cs.tag}</span>
                <h2 className="text-2xl font-black mb-3" style={{ color: "#0a0a0a" }}>{cs.title}</h2>
                <p className="text-sm leading-relaxed mb-6" style={{ color: "#52525B" }}>{cs.excerpt}</p>
                <div className="grid grid-cols-3 gap-6 mb-6 py-6 border-y" style={{ borderColor: "#E8E2D9" }}>
                  {cs.stats.map((s) => (
                    <div key={s.l}>
                      <div className="text-3xl font-black" style={{ color: "#0a0a0a" }}><StatTicker value={s.v} /></div>
                      <div className="text-xs mt-0.5" style={{ color: "#8C8279" }}>{s.l}</div>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {cs.services.map((s) => (
                      <span key={s} className="text-xs px-3 py-1 rounded-full" style={{ backgroundColor: "#F8F6F2", color: "#52525B", border: "1px solid #E8E2D9" }}>{s}</span>
                    ))}
                  </div>
                  <span className="text-sm font-bold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1" style={{ color: "#F5B731" }}>
                    Read full case study
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}

          <div className="rounded-2xl border p-8" style={{ backgroundColor: "#F8F6F2", borderColor: "#E8E2D9", opacity: 0.7 }}>
            <span className="inline-flex text-xs font-bold px-3 py-1 rounded-full mb-4" style={{ backgroundColor: "#EDE9E4", color: "#8C8279" }}>Coming Soon</span>
            <h2 className="text-xl font-black mb-2" style={{ color: "#3D3D3D" }}>eCommerce tech, conversion uplift</h2>
            <p className="text-sm" style={{ color: "#8C8279" }}>Cold email + AI lead gen for eCommerce SaaS client. Publishing soon.</p>
          </div>
          <div className="rounded-2xl border p-8" style={{ backgroundColor: "#F8F6F2", borderColor: "#E8E2D9", opacity: 0.7 }}>
            <span className="inline-flex text-xs font-bold px-3 py-1 rounded-full mb-4" style={{ backgroundColor: "#EDE9E4", color: "#8C8279" }}>Coming Soon</span>
            <h2 className="text-xl font-black mb-2" style={{ color: "#3D3D3D" }}>Bootstrapped founder GTM build</h2>
            <p className="text-sm" style={{ color: "#8C8279" }}>Full outbound engine built from zero for a bootstrapped founder. Publishing soon.</p>
          </div>
        </div></FadeIn>
      </section>

      <LeadCaptureForm title="Want results like these?" subtitle="Book a free 30-min audit and we'll map exactly how to replicate these results for your business." />
    </InnerLayout>
  );
}
