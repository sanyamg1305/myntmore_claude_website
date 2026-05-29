import type { Metadata } from "next";
import Link from "next/link";
import InnerLayout from "../../components/InnerLayout";

export const metadata: Metadata = {
  title: "Content Marketing Strategist Job | Myntmore Mumbai | Rs 3–6 LPA",
  description: "Join Myntmore as a Content Marketing Strategist in Worli, Mumbai. Write high-impact LinkedIn content for B2B founders and CXOs. Rs 3–6 LPA. Full-time.",
  alternates: { canonical: "https://myntmore.com/careers/content-strategist" },
  openGraph: {
    title: "Content Marketing Strategist | Myntmore Careers",
    description: "Make our clients' posts explode on LinkedIn. Full-time, Worli Mumbai.",
    url: "https://myntmore.com/careers/content-strategist",
  },
};

export default function ContentStrategist() {
  return (
    <InnerLayout>
      <section className="pt-32 pb-16 px-4" style={{ backgroundColor: "#F8F6F2" }}>
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Link href="/careers" className="link-subtle text-xs font-semibold"
            >Careers</Link>
            <span style={{ color: "#E8E2D9" }}>/</span>
            <span className="text-xs font-semibold" style={{ color: "#3D3D3D" }}>Content Marketing Strategist</span>
          </div>
          <span className="inline-flex text-xs font-bold px-3 py-1 rounded-full mb-4" style={{ backgroundColor: "rgba(168,85,247,0.08)", color: "#a855f7", border: "1px solid rgba(168,85,247,0.2)" }}>Full-Time · Worli, Mumbai</span>
          <h1 className="text-4xl sm:text-5xl font-black mb-6 leading-tight" style={{ color: "#0a0a0a" }}>
            Content Marketing Strategist
          </h1>

          {/* Job meta */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {[["Location", "Worli, Mumbai"], ["Type", "Full-Time"], ["CTC", "Rs 3–6 LPA"], ["Timings", "10:30 AM–7:30 PM"]].map(([label, value]) => (
              <div key={label} className="rounded-xl border p-4" style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9" }}>
                <p className="text-xs mb-1" style={{ color: "#8C8279" }}>{label}</p>
                <p className="text-sm font-bold" style={{ color: "#0a0a0a" }}>{value}</p>
              </div>
            ))}
          </div>

          <a href="mailto:growth@myntmore.com?subject=Application for Content Marketing Strategist" className="btn-dark px-8 py-4 text-base font-bold inline-flex items-center gap-2">
            Apply Now
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
          <p className="mt-3 text-xs" style={{ color: "#8C8279" }}>Send to growth@myntmore.com and founder@myntmore.com with subject: Application for Content Marketing Strategist</p>
        </div>
      </section>

      <section className="py-16 px-4 border-t" style={{ borderColor: "#E8E2D9" }}>
        <div className="max-w-3xl mx-auto space-y-12">
          <div>
            <h2 className="text-2xl font-black mb-4" style={{ color: "#0a0a0a" }}>The role</h2>
            <p className="text-base leading-relaxed" style={{ color: "#52525B" }}>
              Your role isn&apos;t just writing. It&apos;s researching, analysing, and crafting the best posts on entrepreneurship, storytelling, and marketing. Think about the posts that go viral, that make people stop scrolling and engage. That&apos;s what we&apos;re aiming for. Your mission: make our clients&apos; posts explode on LinkedIn.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black mb-6" style={{ color: "#0a0a0a" }}>Why join us</h2>
            {["Work closely with top-tier leaders and entrepreneurs", "Build content that actually moves the needle, not fluff", "Be part of a young, driven team building something meaningful", "Freedom to bring your ideas, experiment, and grow", "Competitive pay open to negotiation basis experience"].map((item) => (
              <div key={item} className="flex items-center gap-3 mb-3">
                <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="#F5B731" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                <p className="text-base" style={{ color: "#3D3D3D" }}>{item}</p>
              </div>
            ))}
          </div>

          <div>
            <h2 className="text-2xl font-black mb-6" style={{ color: "#0a0a0a" }}>What you&apos;ll do</h2>
            <div className="space-y-3">
              {[
                "Write high-quality, insight-driven content for founders, CXOs, and leaders on LinkedIn",
                "Convert briefs and voice notes into impactful storytelling and strategic posts",
                "Build and maintain distinct voices for multiple clients",
                "Understand tone, positioning, and the purpose behind every post (engagement, visibility, or lead-gen)",
                "Stay updated on LinkedIn trends and best practices",
                "Collaborate with strategists, editors, and account managers for smooth execution",
                "Act as the main point of contact for select clients",
                "Translate client briefs into clear content strategies with defined objectives and tone",
                "Ensure smooth communication, timely delivery, and high-quality execution across all assigned accounts",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="#a855f7" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  <p className="text-base" style={{ color: "#3D3D3D" }}>{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-black mb-6" style={{ color: "#0a0a0a" }}>Who you are</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: "Research Junkie", desc: "You love digging into the best content on entrepreneurship, marketing, and storytelling" },
                { label: "Writing Pro", desc: "Skilled at transforming research into captivating LinkedIn posts that drive engagement" },
                { label: "Experience", desc: "1–3 years in research and writing related to these fields" },
                { label: "Curious & Data-Driven", desc: "Enjoy analysing content performance and always learning what works" },
                { label: "Entrepreneurship Enthusiast", desc: "Follow top entrepreneurship podcasts, blogs, and social media pages" },
                { label: "Ownership Mindset", desc: "Take charge of your work and lead projects while collaborating with entrepreneurs" },
                { label: "LinkedIn Fluency", desc: "Strong understanding of LinkedIn as a platform and its content nuances" },
                { label: "Ghostwriter", desc: "Experience ghostwriting for founders or building content strategy is a plus" },
              ].map((item) => (
                <div key={item.label} className="rounded-xl border p-4" style={{ backgroundColor: "#F8F6F2", borderColor: "#E8E2D9" }}>
                  <p className="text-xs font-black mb-1" style={{ color: "#a855f7" }}>{item.label}</p>
                  <p className="text-sm" style={{ color: "#52525B" }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-black mb-4" style={{ color: "#0a0a0a" }}>Our values (non-negotiable)</h2>
            <p className="text-sm mb-6" style={{ color: "#8C8279" }}>If these don&apos;t resonate, please don&apos;t apply.</p>
            {["Deadlines are everything for us", "Honesty, no team can grow without it", "Discipline and consistency", "Empathy", "Never give up attitude, try, then try harder", "Go the extra mile for team members and clients"].map((v) => (
              <div key={v} className="flex items-center gap-3 mb-3">
                <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="#F5B731" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                <p className="text-base" style={{ color: "#3D3D3D" }}>{v}</p>
              </div>
            ))}
          </div>

          <div className="rounded-2xl p-8 border" style={{ backgroundColor: "#FEF9EC", borderColor: "rgba(245,183,49,0.3)" }}>
            <h3 className="text-lg font-black mb-3" style={{ color: "#0a0a0a" }}>Ready to apply?</h3>
            <p className="text-sm mb-4" style={{ color: "#52525B" }}>Send your resume and 2–3 LinkedIn posts you&apos;ve written (or one you&apos;re proud of) to both:</p>
            <div className="space-y-2 mb-6">
              <a href="mailto:growth@myntmore.com?subject=Application for Content Marketing Strategist" className="block text-sm font-semibold" style={{ color: "#F5B731" }}>growth@myntmore.com</a>
              <a href="mailto:founder@myntmore.com?subject=Application for Content Marketing Strategist" className="block text-sm font-semibold" style={{ color: "#F5B731" }}>founder@myntmore.com</a>
            </div>
            <a href="mailto:growth@myntmore.com?subject=Application for Content Marketing Strategist" className="btn-dark px-6 py-3 text-sm font-bold inline-flex items-center gap-2">
              Apply Now
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
          </div>
        </div>
      </section>
    </InnerLayout>
  );
}
