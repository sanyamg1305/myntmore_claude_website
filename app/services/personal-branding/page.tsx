import type { Metadata } from "next";
import Link from "next/link";
import InnerLayout from "../../components/InnerLayout";
import LeadCaptureForm from "../../components/LeadCaptureForm";
import FadeIn from "../../components/FadeIn";
import StatTicker from "../../components/StatTicker";

export const metadata: Metadata = {
  title: "Personal Branding for B2B Founders | LinkedIn Ghostwriting | Myntmore",
  description: "We ghostwrite LinkedIn content that positions you as the authority in your space. 4–8 posts/month from monthly voice interviews. Personal brand building Mumbai.",
  alternates: { canonical: "https://myntmore.com/services/personal-branding" },
  keywords: ["personal branding mumbai", "personal brand building mumbai", "linkedin ghostwriting", "founder personal brand", "b2b personal branding"],
  openGraph: {
    title: "Personal Branding for B2B Founders | Myntmore",
    description: "Your buyers are on LinkedIn every day. Are they seeing you?",
    url: "https://myntmore.com/services/personal-branding",
  },
};

const STEPS = [
  { n: "01", title: "Voice Interview", desc: "We run a monthly voice extraction interview to capture your unique opinions, experiences, and industry takes." },
  { n: "02", title: "Content Calendar", desc: "We map out a strategic content calendar designed to hit different buyer psychologies and build authority." },
  { n: "03", title: "Ghostwriting", desc: "Our team writes high-impact posts entirely grounded in what you said, ensuring every post sounds like you." },
  { n: "04", title: "Profile Optimisation", desc: "We rewrite your profile to act as a landing page that converts profile visits into inbound enquiries." },
];

const DELIVERABLES = [
  "4 to 8 high-impact LinkedIn posts per month",
  "Complete LinkedIn profile rewrite and optimisation",
  "Strategic monthly content calendar",
  "Personalised engagement and growth strategy",
  "Monthly performance and impressions report",
  "Voice extraction session every single month",
];

const WHO_FOR = [
  { title: "B2B Founders and CEOs", desc: "Leaders who need to build authority in their niche to support their sales and recruiting efforts." },
  { title: "Subject Matter Experts", desc: "Experts who want to turn their hard-earned knowledge into a lead-generating asset on LinkedIn." },
  { title: "Consultants and Advisors", desc: "Professionals who rely on trust and credibility to win high-value advisory and consulting projects." },
];

const FAQ = [
  {
    q: "How do you capture my voice if you are writing it?",
    a: "We run a 30–45 minute voice extraction interview with you every month. We ask about your opinions, recent experiences, client observations, and industry takes. From that conversation we extract 4–8 post angles that are entirely grounded in what you actually said. Nothing is invented. Everything sounds like you because it came from you.",
  },
  {
    q: "How many posts per month do we get?",
    a: "The standard engagement is 4 posts per month. Clients who want a more aggressive content presence can go up to 8. We recommend starting at 4, finding the rhythm that works for your review and approval process, then scaling up once the system is smooth.",
  },
  {
    q: "Do I need to be involved every week?",
    a: "Your involvement is one monthly interview and a quick approval on each post before it goes live. That is it. We handle the research, writing, formatting, hashtag strategy, and posting schedule. Most founders spend under 30 minutes a week total.",
  },
  {
    q: "How long before I start seeing inbound from content?",
    a: "Consistency over 60–90 days is where inbound starts becoming noticeable. The first month builds baseline impressions. Month two sees follower growth and profile visits from the right people. By month three, DMs and inbound enquiries from content become a regular occurrence for most clients.",
  },
  {
    q: "Can personal branding work alongside outbound outreach?",
    a: "It is one of the most powerful combinations we run. When a prospect gets a cold email or LinkedIn connection request from you, the first thing they do is check your profile. If they see consistent, credible content, your reply rate jumps significantly. Personal branding is the trust layer that makes outbound convert better.",
  },
];

export default function PersonalBranding() {
  return (
    <InnerLayout>
      <section className="pt-32 pb-16 px-4" style={{ backgroundColor: "#F8F6F2" }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Link href="/services" className="link-subtle text-xs font-semibold"
            >Services</Link>
            <span style={{ color: "#E8E2D9" }}>/</span>
            <span className="text-xs font-semibold" style={{ color: "#3D3D3D" }}>Personal Branding</span>
          </div>
          <span className="inline-flex items-center text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4 hero-fade" style={{ backgroundColor: "rgba(245,183,49,0.1)", color: "#D97706", border: "1px solid rgba(245,183,49,0.3)" }}>Personal Branding</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight hero-fade-d1" style={{ color: "#0a0a0a" }}>
            Your buyers are on LinkedIn every day.<br />Are they seeing you?
          </h1>
          <p className="text-lg sm:text-xl max-w-2xl mb-8 hero-fade-d2" style={{ color: "#52525B" }}>
            We ghostwrite content that positions you as the authority in your space so inbound finds you instead of you chasing it.
          </p>
          <div className="flex gap-8 mb-8 hero-fade-d3">
            {[{ v: "10x", l: "Average increase in profile visits" }, { v: "2x", l: "Increase in outbound reply rates" }].map((s) => (
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
            <h2 className="text-2xl font-black mb-4" style={{ color: "#0a0a0a" }}>Why personal branding matters for outbound</h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: "#52525B" }}>
              Personal branding is the secret weapon of modern outbound. When you reach out to a prospect, the first thing they do is check your LinkedIn profile. If they see high-quality content that proves your expertise, your conversion rates skyrocket.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "#52525B" }}>
              For founders and CXOs who have deep industry knowledge but no time to write. We extract your unique insights and turn them into a consistent, credible content presence that builds trust at scale.
            </p>
          </div>
          <div className="rounded-2xl border p-6" style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9" }}>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: "#D97706" }}>Deliverables</h3>
            <ul className="space-y-3">
              {DELIVERABLES.map((d) => (
                <li key={d} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: "rgba(245,183,49,0.1)" }}>
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="#D97706" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
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
                <div className="text-xs font-black mb-3" style={{ color: "#D97706" }}>{s.n}</div>
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

      <LeadCaptureForm title="Ready to become the authority in your space?" subtitle="Book a free call and we'll show you exactly how to position your brand to win inbound." />
    </InnerLayout>
  );
}
