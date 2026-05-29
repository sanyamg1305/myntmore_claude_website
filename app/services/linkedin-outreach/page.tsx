import type { Metadata } from "next";
import Link from "next/link";
import InnerLayout from "../../components/InnerLayout";
import LeadCaptureForm from "../../components/LeadCaptureForm";
import FadeIn from "../../components/FadeIn";
import StatTicker from "../../components/StatTicker";

export const metadata: Metadata = {
  title: "LinkedIn Outreach & Automation | B2B Lead Generation | Myntmore",
  description: "Multi-touch LinkedIn sequences that run silently, mimic human behaviour, and generate replies from the right people. 48% average acceptance rate, 21% average reply rate.",
  alternates: { canonical: "https://myntmore.com/services/linkedin-outreach" },
  keywords: ["linkedin outreach", "linkedin automation", "b2b linkedin", "linkedin lead generation", "personal brand building mumbai"],
  openGraph: {
    title: "LinkedIn Outreach & Automation | Myntmore",
    description: "Conversations happening in your LinkedIn inbox. Every week.",
    url: "https://myntmore.com/services/linkedin-outreach",
  },
};

const STEPS = [
  { n: "01", title: "Profile Audit", desc: "We optimise your LinkedIn profile for conversion, ensuring you look like a credible authority to every prospect." },
  { n: "02", title: "Sequence Design", desc: "We write multi-step connection and follow-up sequences tailored to your target audience's pain points." },
  { n: "03", title: "Automation Setup", desc: "Our systems run your outreach through residential IPs, staying safely within LinkedIn's daily limits." },
  { n: "04", title: "Reply Management", desc: "We monitor your inbox and hand off qualified leads to you at the exact moment they show interest." },
];

const DELIVERABLES = [
  "Fully optimised LinkedIn profile for sales",
  "Custom multi-touch connection sequences",
  "Strategic DM flows designed for replies",
  "Weekly metrics report on acceptance and reply rates",
  "Continuous reply optimisation and testing",
  "Seamless meeting handoff process",
];

const WHO_FOR = [
  { title: "Sales and SDR Teams", desc: "Teams that need a scalable way to build a presence on LinkedIn and generate warm pipeline every week." },
  { title: "B2B Agency Owners", desc: "GTM leaders who want to build high-level relationships with decision makers without manual prospecting." },
  { title: "Service Business Leaders", desc: "Leaders who need a predictable way to stay in front of their ideal prospects on the most important B2B platform." },
];

const FAQ = [
  {
    q: "Will this get my LinkedIn account restricted?",
    a: "Not if done correctly, which is exactly why we do not use cheap browser extension tools. We work within LinkedIn's daily action limits, ramp up gradually, and run everything through cloud-based tools with residential IPs. We have been running LinkedIn automation for clients for years without a single account ban.",
  },
  {
    q: "How many connection requests go out per day?",
    a: "We start conservatively at 20–25 per day during the warmup period and scale to 40–50 once the account has a healthy acceptance pattern. Going above this is where accounts get flagged. We never recommend it regardless of how quickly a client wants to move.",
  },
  {
    q: "Do you manage the replies or just set up the sequences?",
    a: "We manage the full flow. When a prospect replies, our team monitors the inbox, categorises the response, and either handles the conversation until a meeting is booked or hands it to you at exactly the right moment with full context.",
  },
  {
    q: "How long before we see meetings being booked?",
    a: "Most clients see first meetings within 2–3 weeks of sequences going live. The first week is ramp up. By week two, acceptances are coming in. By week three, replies convert to calendar invites. The volume compounds from there as the sequence data optimises.",
  },
  {
    q: "Can this run alongside our cold email campaigns?",
    a: "Yes, and it works better when it does. A prospect who saw your LinkedIn request on Monday and gets your email on Thursday is far more likely to reply than someone receiving a cold email from a name they have never seen before.",
  },
];

export default function LinkedInOutreach() {
  return (
    <InnerLayout>
      <section className="pt-32 pb-16 px-4" style={{ backgroundColor: "#F8F6F2" }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Link href="/services" className="link-subtle text-xs font-semibold"
            >Services</Link>
            <span style={{ color: "#E8E2D9" }}>/</span>
            <span className="text-xs font-semibold" style={{ color: "#3D3D3D" }}>LinkedIn Outreach</span>
          </div>
          <span className="inline-flex items-center text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4 hero-fade" style={{ backgroundColor: "rgba(0,119,181,0.08)", color: "#0077b5", border: "1px solid rgba(0,119,181,0.2)" }}>LinkedIn Outreach & Automation</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight hero-fade-d1" style={{ color: "#0a0a0a" }}>
            Conversations happening in your LinkedIn inbox. Every week.
          </h1>
          <p className="text-lg sm:text-xl max-w-2xl mb-8 hero-fade-d2" style={{ color: "#52525B" }}>
            Multi-touch sequences that run silently, mimic human behaviour, and generate replies from the right people.
          </p>
          <div className="flex gap-8 mb-8 hero-fade-d3">
            {[{ v: "48%", l: "Average acceptance rate" }, { v: "21%", l: "Average reply rate" }].map((s) => (
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
            <h2 className="text-2xl font-black mb-4" style={{ color: "#0a0a0a" }}>Why LinkedIn outreach works</h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: "#52525B" }}>
              LinkedIn is the world&apos;s most powerful B2B network, but manual outreach is slow and difficult to scale. Our LinkedIn outreach service automates the process of finding and connecting with your ideal prospects while maintaining a completely human touch.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "#52525B" }}>
              For business owners and sales leaders who want to leverage LinkedIn&apos;s targeting power without spending hours every day sending connection requests and follow-up messages.
            </p>
          </div>
          <div className="rounded-2xl border p-6" style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9" }}>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: "#0077b5" }}>Deliverables</h3>
            <ul className="space-y-3">
              {DELIVERABLES.map((d) => (
                <li key={d} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: "rgba(0,119,181,0.1)" }}>
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="#0077b5" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
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
                <div className="text-xs font-black mb-3" style={{ color: "#0077b5" }}>{s.n}</div>
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

      <LeadCaptureForm title="Ready to fill your LinkedIn inbox?" subtitle="We'll audit your profile and map a sequence strategy for your ICP at no cost." />
    </InnerLayout>
  );
}
