import type { ReactNode } from "react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  features: string[];
}

function ServiceCard({
  icon,
  title,
  description,
  features,
}: ServiceCardProps) {
  return (
    <article className="glass-card-hover rounded-2xl p-8 flex flex-col h-full relative overflow-hidden group">
      {/* Subtle top gradient line on hover */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(245,183,49,0.6), transparent)",
        }}
        aria-hidden="true"
      />

      {/* Icon */}
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 flex-shrink-0"
        style={{
          background: "rgba(245,183,49,0.1)",
          border: "1px solid rgba(245,183,49,0.25)",
        }}
      >
        <span style={{ color: "#F5B731" }} aria-hidden="true">
          {icon}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-[#0a0a0a] mb-3">{title}</h3>

      {/* Description */}
      <p className="text-[#52525B] text-sm leading-relaxed mb-6">
        {description}
      </p>

      {/* Feature list */}
      <ul className="space-y-2.5 mb-8 flex-grow" role="list">
        {features.map((feature) => (
          <li
            key={feature}
            className="flex items-start gap-2.5 text-sm text-neutral-700"
          >
            <svg
              className="w-4 h-4 flex-shrink-0 mt-0.5"
              style={{ color: "#F5B731" }}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
            {feature}
          </li>
        ))}
      </ul>

      {/* Link */}
      <a
        href="https://calendly.com"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0a0a0a] transition-all duration-200 group/link hover:underline underline-offset-2"
      >
        Learn more
        <svg
          className="w-3.5 h-3.5 translate-x-0 group-hover/link:translate-x-1 transition-transform duration-200"
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
    </article>
  );
}

// Icons
const TargetIcon = (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

const BuildingIcon = (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M9 21V7l6-4v18M9 7H3v14M15 21V7M21 7h-6" />
  </svg>
);

const FunnelIcon = (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L13 13.414V20a1 1 0 01-.553.894l-4 2A1 1 0 017 22v-8.586L3.293 6.707A1 1 0 013 6V4z" />
  </svg>
);

const SERVICES = [
  {
    icon: TargetIcon,
    title: "Cold Outreach",
    description:
      "We build and run multi-channel outbound sequences that cut through the noise. Hyper-personalized messaging at scale — email and LinkedIn working in concert — with copy engineered to convert, not just land in inboxes.",
    features: [
      "Multi-touch email + LinkedIn sequences",
      "Hyper-personalized copy for each ICP segment",
      "A/B tested subject lines and opening hooks",
      "Deliverability infrastructure & domain warm-up",
    ],
  },
  {
    icon: BuildingIcon,
    title: "Account-Based Marketing",
    description:
      "Stop casting wide nets. We pinpoint your highest-value target accounts using intent data and buying signals, then orchestrate coordinated campaigns that make your brand impossible to ignore across the entire buying committee.",
    features: [
      "ICP-matched target account lists",
      "Intent data & buying signal tracking",
      "Buying committee engagement strategy",
      "Account-level reporting & pipeline attribution",
    ],
  },
  {
    icon: FunnelIcon,
    title: "Lead Generation",
    description:
      "From raw prospect to SQL — we handle the entire top-of-funnel. Enriched contact data, inbound + outbound hybrid plays, and rigorous qualification so your AEs only spend time with decision-makers who are actually ready to buy.",
    features: [
      "Enriched, verified prospect lists",
      "Inbound + outbound hybrid strategy",
      "SQL qualification & meeting booking",
      "CRM handoff with full context",
    ],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{ backgroundColor: "#F8F6F2" }}
      aria-labelledby="services-heading"
    >
      {/* Top-right yellow blob */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "-60px",
          right: "-100px",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, #F5B731 0%, transparent 70%)",
          filter: "blur(120px)",
          opacity: 0.2,
          pointerEvents: "none",
        }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <span
            className="inline-block text-xs font-bold uppercase tracking-[0.2em] mb-4 px-3 py-1 rounded-full border"
            style={{
              color: "#F5B731",
              borderColor: "rgba(245,183,49,0.35)",
              background: "#FEF9EC",
            }}
          >
            Our Services
          </span>
          <h2
            id="services-heading"
            className="text-4xl sm:text-5xl font-black text-[#0a0a0a] tracking-tight"
          >
            Everything You Need to
            <br />
            <span style={{ color: "#F5B731" }}>Dominate Your Market</span>
          </h2>
          <p className="mt-4 text-[#52525B] text-lg max-w-2xl mx-auto">
            Three core offerings. One focused goal: a calendar full of qualified
            meetings with buyers who want what you sell.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
