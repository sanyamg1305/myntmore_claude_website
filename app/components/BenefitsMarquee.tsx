const ROW_1 = [
  "Fill your pipeline",
  "Book more meetings",
  "Decrease cost per lead",
  "Boost revenue growth",
  "Reach relevant prospects",
  "Increase pipeline",
  "Stay ahead of competition",
  "Shorten sales cycles",
];

const ROW_2 = [
  "Refine your ICP",
  "Lead qualification on autopilot",
  "Boost conversion rates",
  "Scale outbound effortlessly",
  "Land enterprise accounts",
  "Reduce no-show rates",
  "Increase reply rates",
  "Dominate your niche",
];

const ROW_3 = [
  "Operational efficiency",
  "Save costs per acquisition",
  "Targeted ABM campaigns",
  "Outbound on autopilot",
  "More SQLs every month",
  "Predictable revenue",
  "Consistent deal flow",
  "Grow faster than competitors",
];

function Chip({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap border"
      style={{
        background: "rgba(255,255,255,0.05)",
        borderColor: "rgba(255,255,255,0.1)",
        color: "rgba(255,255,255,0.85)",
      }}
    >
      <span
        className="w-2 h-2 rounded-sm flex-shrink-0"
        style={{ backgroundColor: "#F5B731", opacity: 0.9 }}
        aria-hidden="true"
      />
      {label}
    </span>
  );
}

function MarqueeRow({
  items,
  direction = "left",
  duration = "35s",
}: {
  items: string[];
  direction?: "left" | "right";
  duration?: string;
}) {
  const doubled = [...items, ...items];

  return (
    <div className="overflow-hidden" style={{
      WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
      maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
    }}>
      <div
        className="flex gap-3 w-max"
        style={{
          animation: `marquee-${direction} ${duration} linear infinite`,
        }}
      >
        {doubled.map((label, i) => (
          <Chip key={i} label={label} />
        ))}
      </div>
    </div>
  );
}

export default function BenefitsMarquee() {
  return (
    <section
      className="py-20 overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0A0A0A 0%, #111827 100%)" }}
      aria-label="Benefits"
    >
      {/* Heading */}
      <div className="text-center mb-12 px-4">
        <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#F5B731" }}>
          What you unlock
        </p>
        <h2 className="text-3xl sm:text-4xl font-black text-white">
          Everything your pipeline needs
        </h2>
      </div>

      {/* Marquee rows */}
      <div className="flex flex-col gap-4">
        <MarqueeRow items={ROW_1} direction="left" duration="40s" />
        <MarqueeRow items={ROW_2} direction="right" duration="35s" />
        <MarqueeRow items={ROW_3} direction="left" duration="45s" />
      </div>

    </section>
  );
}
