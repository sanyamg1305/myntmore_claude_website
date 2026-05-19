interface MetricCardProps {
  value: string;
  label: string;
  sublabel: string;
}

function MetricCard({ value, label, sublabel }: MetricCardProps) {
  return (
    <div
      className="flex flex-col px-6 py-8 rounded-2xl border bg-white relative overflow-hidden"
      style={{
        borderColor: "#E8E2D9",
        borderLeftColor: "#F5B731",
        borderLeftWidth: "4px",
        boxShadow: "0 1px 8px rgba(0,0,0,0.04)",
      }}
    >
      <span
        className="text-5xl sm:text-6xl font-black mb-2 tabular-nums text-[#0a0a0a]"
      >
        {value}
      </span>
      <span className="text-[#0a0a0a] font-semibold text-base mb-1">{label}</span>
      <span className="text-neutral-500 text-xs">{sublabel}</span>
    </div>
  );
}

interface CaseStudyCardProps {
  company: string;
  sector: string;
  result: string;
  detail: string;
}

function CaseStudyCard({ company, sector, result, detail }: CaseStudyCardProps) {
  return (
    <div
      className="rounded-2xl p-6 sm:p-8 flex flex-col relative overflow-hidden"
      style={{
        background: "#FFFFFF",
        borderLeft: "4px solid #F5B731",
        border: "1px solid #E8E2D9",
        borderLeftWidth: "4px",
        borderLeftColor: "#F5B731",
      }}
    >
      <div>
        {/* Tag */}
        <span
          className="inline-block text-xs font-bold uppercase tracking-[0.15em] mb-3 px-2.5 py-1 rounded-full"
          style={{
            color: "#F5B731",
            background: "#FEF9EC",
            border: "1px solid rgba(245,183,49,0.3)",
          }}
        >
          {sector}
        </span>

        {/* Result */}
        <h3 className="text-xl sm:text-2xl font-black text-[#0a0a0a] mb-2">
          &ldquo;{result}&rdquo;
        </h3>

        {/* Detail */}
        <p className="text-[#52525B] text-sm leading-relaxed">{detail}</p>

        {/* Company */}
        <div className="flex items-center gap-2 mt-5 pt-4 border-t" style={{ borderColor: "#E8E2D9" }}>
          <div
            className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-black"
            style={{ background: "#F5B731" }}
            aria-hidden="true"
          >
            {company.charAt(0)}
          </div>
          <span className="text-sm font-semibold text-neutral-700">{company}</span>
        </div>
      </div>
    </div>
  );
}

const METRICS = [
  {
    value: "1,200+",
    label: "Meetings Booked",
    sublabel: "Qualified, decision-maker conversations",
  },
  {
    value: "$48M+",
    label: "Pipeline Generated",
    sublabel: "Across all client accounts",
  },
  {
    value: "3.2x",
    label: "Reply Rate",
    sublabel: "vs. industry average cold outreach",
  },
  {
    value: "92%",
    label: "Client Retention",
    sublabel: "Because the results speak for themselves",
  },
];

const CASE_STUDIES = [
  {
    company: "Series B SaaS — Fintech",
    sector: "SaaS / Fintech",
    result: "47 qualified demos booked in 60 days",
    detail:
      "We built a cold outreach engine targeting VP Finance and CFO personas at mid-market companies. Starting from scratch, we delivered a full pipeline within 8 weeks — 47 demos with a 34% show rate.",
  },
  {
    company: "B2B Professional Services",
    sector: "Professional Services",
    result: "$2.3M in pipeline from a single ABM campaign",
    detail:
      "A targeted account list of 120 enterprise companies, multi-touch LinkedIn + email sequences, and intent data signals. One 90-day ABM campaign. Two enterprise contracts already closed.",
  },
];

export default function Results() {
  return (
    <section
      id="results"
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{ backgroundColor: "#F8F6F2" }}
      aria-labelledby="results-heading"
    >
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
            Results
          </span>
          <h2
            id="results-heading"
            className="text-4xl sm:text-5xl font-black text-[#0a0a0a] tracking-tight"
          >
            Numbers That Actually
            <br />
            <span style={{ color: "#F5B731" }}>Move the Needle</span>
          </h2>
          <p className="mt-4 text-[#52525B] text-lg max-w-xl mx-auto">
            We measure success by one metric: qualified pipeline generated for
            our clients. Here&rsquo;s what that looks like.
          </p>
        </div>

        {/* Metrics grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {METRICS.map((metric) => (
            <MetricCard key={metric.label} {...metric} />
          ))}
        </div>

        {/* Case studies */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CASE_STUDIES.map((cs) => (
            <CaseStudyCard key={cs.company} {...cs} />
          ))}
        </div>

        {/* Disclaimer */}
        <p className="text-center text-xs text-neutral-400 mt-8">
          Results vary by industry, deal size, and engagement scope. Case studies
          reflect anonymized real client data.
        </p>
      </div>
    </section>
  );
}
