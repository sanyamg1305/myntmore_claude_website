import type { Metadata } from "next";
import Link from "next/link";
import InnerLayout from "../components/InnerLayout";
import FadeIn from "../components/FadeIn";

export const metadata: Metadata = {
  title: "Careers at Myntmore | Join the B2B Growth Team in Mumbai",
  description: "Join Myntmore's team in Worli, Mumbai. Build AI-powered outbound systems for B2B companies. Open roles: Content Marketing Strategist and B2B Lead Generation Strategist.",
  alternates: { canonical: "https://myntmore.com/careers" },
  openGraph: {
    title: "Careers at Myntmore | Mumbai B2B Growth Team",
    description: "Build predictable B2B pipeline systems with a team that actually knows how growth works.",
    url: "https://myntmore.com/careers",
  },
};

const OPEN_ROLES = [
  { title: "Content Marketing Strategist", type: "Full-Time", ctc: "Rs 3–6 LPA", location: "Worli, Mumbai", href: "/careers/content-strategist", hoverClass: "card-hover-purple", tags: ["Writing", "LinkedIn", "Ghostwriting"] },
  { title: "B2B Lead Generation Strategist", type: "Full-Time", ctc: "Rs 4–8 LPA + incentives", location: "Worli, Mumbai", href: "/careers/lead-gen-strategist", hoverClass: "card-hover-blue", tags: ["Cold Email", "LinkedIn", "AI Tools", "ABM"] },
];

const VALUES = [
  { title: "Deadlines are everything", desc: "We ship on time. No exceptions, no excuses." },
  { title: "Honesty", desc: "No team can grow without radical transparency. We say what we mean." },
  { title: "Discipline and consistency", desc: "Show up every day. Compound over time." },
  { title: "Empathy", desc: "For clients, for teammates, for the problem." },
  { title: "Never give up attitude", desc: "Try, then try harder. Then figure out why it's not working and try again." },
  { title: "Go the extra mile", desc: "For team members and clients. Always." },
];

export default function Careers() {
  return (
    <InnerLayout>
      <section className="pt-32 pb-16 px-4" style={{ backgroundColor: "#F8F6F2" }}>
        <div className="max-w-4xl mx-auto">
          <div className="mb-4">
            <span className="inline-flex text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full" style={{ backgroundColor: "#FEF9EC", color: "#F5B731", border: "1px solid rgba(245,183,49,0.3)" }}>We&apos;re Hiring</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight hero-fade-d1" style={{ color: "#0a0a0a" }}>
            Join the Myntmore Team
          </h1>
          <p className="text-lg sm:text-xl max-w-2xl mb-6 hero-fade-d2" style={{ color: "#52525B" }}>
            Build predictable B2B pipeline systems with a team that actually knows how growth works.
          </p>
          <p className="text-base max-w-2xl" style={{ color: "#52525B" }}>
            We are building AI-powered outbound systems for B2B companies across India and Southeast Asia. If you want to work on real founder pipelines, learn fast, and grow alongside a young driven team, we should talk.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 border-t" style={{ borderColor: "#E8E2D9" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-black mb-8" style={{ color: "#0a0a0a" }}>Open Roles</h2>
          <FadeIn><div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            {OPEN_ROLES.map((role) => (
              <Link key={role.href} href={role.href} className={`group block rounded-2xl border p-8 ${role.hoverClass}`} style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9" }}>
                <div className="flex items-start justify-between mb-4">
                  <span className="inline-flex text-xs font-bold px-2 py-0.5 rounded-full" style={{ backgroundColor: "#FEF9EC", color: "#F5B731" }}>{role.type}</span>
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} style={{ color: "#B8B0A7" }}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                </div>
                <h3 className="text-xl font-black mb-2" style={{ color: "#0a0a0a" }}>{role.title}</h3>
                <p className="text-sm mb-1" style={{ color: "#52525B" }}>{role.ctc}</p>
                <p className="text-sm mb-4" style={{ color: "#8C8279" }}>{role.location}</p>
                <div className="flex flex-wrap gap-2">
                  {role.tags.map((t) => (
                    <span key={t} className="text-xs px-2.5 py-1 rounded-full" style={{ backgroundColor: "#F8F6F2", color: "#52525B", border: "1px solid #E8E2D9" }}>{t}</span>
                  ))}
                </div>
              </Link>
            ))}
          </div></FadeIn>

          <div className="rounded-2xl border p-8" style={{ backgroundColor: "#F8F6F2", borderColor: "#E8E2D9" }}>
            <h3 className="text-base font-black mb-2" style={{ color: "#0a0a0a" }}>Don&apos;t see your role?</h3>
            <p className="text-sm mb-4" style={{ color: "#52525B" }}>We&apos;re always looking for hungry, curious, driven people. Send us a note.</p>
            <a href="mailto:growth@myntmore.com?subject=Speculative Application - Myntmore" className="btn-dark px-5 py-2.5 text-sm font-bold inline-flex items-center gap-2">
              Send a speculative application <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 border-t" style={{ borderColor: "#E8E2D9", backgroundColor: "#ffffff" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-black mb-4" style={{ color: "#0a0a0a" }}>Why join Myntmore?</h2>
          <p className="text-base mb-8 max-w-2xl" style={{ color: "#52525B" }}>You&apos;ll work across multiple founders, industries, and business models, getting a crash course in how companies grow from the inside.</p>
          <FadeIn delay={80}><div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {["Work directly on real founder pipelines", "Exposure to multiple industries and global markets", "Learn AI-led growth systems very few agencies in India truly understand", "WeWork, Worli with a young, hungry team", "High growth potential + incentives tied to performance", "Freedom to bring your ideas and experiment"].map((item) => (
              <div key={item} className="flex items-start gap-3 p-4 rounded-xl border" style={{ backgroundColor: "#F8F6F2", borderColor: "#E8E2D9" }}>
                <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="#F5B731" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                <p className="text-sm" style={{ color: "#3D3D3D" }}>{item}</p>
              </div>
            ))}
          </div></FadeIn>
        </div>
      </section>

      <section className="py-16 px-4 border-t" style={{ borderColor: "#E8E2D9" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-black mb-3" style={{ color: "#0a0a0a" }}>Our values</h2>
          <p className="text-sm mb-8" style={{ color: "#8C8279" }}>Non-negotiable. If these don&apos;t resonate, please don&apos;t apply.</p>
          <FadeIn delay={80}><div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {VALUES.map((v) => (
              <div key={v.title} className="rounded-xl border p-5" style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9" }}>
                <h3 className="text-sm font-black mb-2" style={{ color: "#0a0a0a" }}>{v.title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: "#52525B" }}>{v.desc}</p>
              </div>
            ))}
          </div></FadeIn>
        </div>
      </section>

      <section className="py-16 px-4 border-t" style={{ borderColor: "#E8E2D9", backgroundColor: "#ffffff" }}>
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-start gap-8">
          <div className="flex-1">
            <h2 className="text-2xl font-black mb-4" style={{ color: "#0a0a0a" }}>Where we work</h2>
            <p className="text-base mb-2" style={{ color: "#52525B" }}>WeWork, Vaswani Chambers</p>
            <p className="text-base mb-1" style={{ color: "#52525B" }}>Worli, Mumbai, 400025</p>
            <p className="text-sm mt-4" style={{ color: "#8C8279" }}>Timings: 10:30 AM to 7:30 PM</p>
          </div>
          <div>
            <a href="mailto:growth@myntmore.com?subject=Job Application - Myntmore" className="btn-dark px-8 py-4 text-base font-bold inline-flex items-center gap-2">
              Apply Now <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
          </div>
        </div>
      </section>
    </InnerLayout>
  );
}
