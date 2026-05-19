"use client";

import { useState } from "react";

type Stat = { num: string; label: string };
type Persona = {
  tab: string;
  badge: string;
  heading: string;
  body: string;
  benefits: string[];
  stats: Stat[];
};

const personas: Persona[] = [
  {
    tab: "Founders",
    badge: "For Founders",
    heading: "Stop being your own SDR. Start closing.",
    body: "You started a company to build, not to spend 4 hours a day on LinkedIn. Myntmore runs your entire outbound engine — from ICP definition to booked meetings on your calendar.",
    benefits: [
      "Outbound running without hiring an SDR",
      "Meetings booked while you focus on product",
      "Clear pipeline visibility every week",
    ],
    stats: [
      { num: "47", label: "Avg. meetings booked in 60 days" },
      { num: "3x", label: "Lower cost than in-house SDR" },
      { num: "2 weeks", label: "To first meeting booked" },
      { num: "92%", label: "Founder client retention" },
    ],
  },
  {
    tab: "Sales Leaders",
    badge: "For Sales Leaders",
    heading: "Give your reps a full calendar. Every Monday.",
    body: "Your team is built to close, not prospect. Myntmore feeds your reps a steady stream of qualified, pre-warmed meetings so they can focus on what they do best.",
    benefits: [
      "Consistent meeting volume across the team",
      "Reps spend 100% of time closing",
      "Full CRM integration and reporting",
    ],
    stats: [
      { num: "1,200+", label: "Meetings booked for clients" },
      { num: "60%", label: "Reduction in ramp time" },
      { num: "$48M+", label: "Pipeline generated" },
      { num: "3.2x", label: "Avg reply rate vs industry" },
    ],
  },
  {
    tab: "Marketing Heads",
    badge: "For Marketing",
    heading: "ABM that actually reaches the right accounts.",
    body: "Stop burning budget on ads that reach everyone. Our account-based marketing campaigns target your exact ICP with surgical precision — coordinated across email, LinkedIn, and intent signals.",
    benefits: [
      "Hyper-targeted account lists built for you",
      "Multi-channel ABM sequences",
      "Intent data to reach accounts actively buying",
    ],
    stats: [
      { num: "$2.3M", label: "Pipeline from single ABM campaign" },
      { num: "5x", label: "Higher response vs cold ads" },
      { num: "28 days", label: "Average campaign launch time" },
      { num: "80+", label: "B2B brands trust Myntmore" },
    ],
  },
  {
    tab: "RevOps Teams",
    badge: "For RevOps",
    heading: "Clean data. Tight sequences. Predictable revenue.",
    body: "We integrate directly with your CRM and tech stack. Every contact enriched, every sequence tracked, every meeting logged — so your forecasts are actually reliable.",
    benefits: [
      "Full CRM sync (HubSpot, Salesforce)",
      "Enriched contact data at every touchpoint",
      "Weekly reporting dashboards you can trust",
    ],
    stats: [
      { num: "99%", label: "Data accuracy on contact lists" },
      { num: "48h", label: "CRM integration setup time" },
      { num: "Zero", label: "Manual data entry for your team" },
      { num: "100%", label: "Pipeline visibility" },
    ],
  },
];

export default function WhoWeHelp() {
  const [activeIndex, setActiveIndex] = useState(0);
  const persona = personas[activeIndex];

  return (
    <section
      style={{ backgroundColor: "#F8F6F2" }}
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-[#0a0a0a] mb-4">
            Built for every B2B growth team
          </h2>
          <p className="max-w-2xl mx-auto text-lg leading-relaxed" style={{ color: "#6B6B6B" }}>
            Whether you're a founder doing outbound yourself or a VP Sales scaling a team — Myntmore has a playbook for you.
          </p>
        </div>

        {/* Tab bar */}
        <div className="flex flex-wrap sm:flex-nowrap justify-center gap-0 mb-8 border-b" style={{ borderColor: "#E8E2D9" }}>
          {personas.map((p, i) => (
            <button
              key={p.tab}
              onClick={() => setActiveIndex(i)}
              className="relative px-6 py-3 text-sm sm:text-base font-semibold transition-colors duration-200 whitespace-nowrap focus:outline-none"
              style={{
                color: activeIndex === i ? "#0a0a0a" : "#8C8279",
                fontWeight: activeIndex === i ? 700 : 500,
              }}
              onMouseEnter={(e) => {
                if (activeIndex !== i) {
                  (e.currentTarget as HTMLButtonElement).style.color = "#0a0a0a";
                }
              }}
              onMouseLeave={(e) => {
                if (activeIndex !== i) {
                  (e.currentTarget as HTMLButtonElement).style.color = "#8C8279";
                }
              }}
            >
              {p.tab}
              {activeIndex === i && (
                <span
                  className="absolute bottom-0 left-0 right-0 h-0.5"
                  style={{ backgroundColor: "#0a0a0a" }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Card */}
        <div
          className="relative rounded-2xl overflow-hidden p-10 sm:p-12"
          style={{
            backgroundColor: "#FFFFFF",
            border: "1px solid #E8E2D9",
            boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
          }}
        >
          {/* Gradient blob — bottom-right yellow/orange */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              bottom: "-100px",
              right: "-100px",
              width: "550px",
              height: "550px",
              borderRadius: "50%",
              background: "radial-gradient(circle, #F5B731 0%, #FF6B35 50%, transparent 75%)",
              filter: "blur(90px)",
              opacity: 0.45,
              pointerEvents: "none",
            }}
          />
          {/* Gradient blob — top-left purple */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              top: "-80px",
              left: "-80px",
              width: "400px",
              height: "400px",
              borderRadius: "50%",
              background: "radial-gradient(circle, #A855F7 0%, transparent 70%)",
              filter: "blur(100px)",
              opacity: 0.25,
              pointerEvents: "none",
            }}
          />

          {/* Split layout */}
          <div className="relative z-10 flex flex-col lg:flex-row gap-12">
            {/* LEFT — Text */}
            <div className="flex-1 flex flex-col justify-center">
              {/* Badge */}
              <div
                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold mb-5 self-start"
                style={{
                  backgroundColor: "#FEF3D7",
                  color: "#b87a00",
                  border: "1px solid rgba(245,183,49,0.3)",
                }}
              >
                {persona.badge}
              </div>

              {/* Heading */}
              <h3 className="text-3xl sm:text-4xl font-black tracking-tight text-[#0a0a0a] mb-5 leading-tight">
                {persona.heading}
              </h3>

              {/* Body */}
              <p className="text-base sm:text-lg leading-relaxed mb-7" style={{ color: "#6B6B6B" }}>
                {persona.body}
              </p>

              {/* Benefits */}
              <ul className="space-y-3 mb-9">
                {persona.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    {/* Yellow checkmark */}
                    <span
                      className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                      style={{ backgroundColor: "#F5B731" }}
                      aria-hidden="true"
                    >
                      <svg
                        className="w-3 h-3"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2 6l3 3 5-5"
                          stroke="#0a0a0a"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className="text-sm sm:text-base font-medium text-[#0a0a0a]">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div>
                <a
                  href="https://calendly.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-dark inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold"
                >
                  Book a Strategy Call
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* RIGHT — Stats grid */}
            <div className="flex-1 flex flex-col justify-center">
              <div className="grid grid-cols-2 gap-4">
                {persona.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl p-5 flex flex-col"
                    style={{
                      backgroundColor: "#FFFFFF",
                      border: "1px solid #E8E2D9",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                    }}
                  >
                    <span className="text-3xl sm:text-4xl font-black text-[#0a0a0a] leading-none mb-2">
                      {stat.num}
                    </span>
                    <span className="text-xs sm:text-sm font-medium leading-snug" style={{ color: "#8C8279" }}>
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
