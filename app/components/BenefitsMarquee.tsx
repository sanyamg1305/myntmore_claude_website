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

const CHIP_PALETTES = [
  { bg: "linear-gradient(135deg, #fff1f2 0%, #fecdd3 100%)", border: "#fda4af", dot: "#E11D48" },
  { bg: "linear-gradient(135deg, #fffbeb 0%, #fde68a 100%)", border: "#fcd34d", dot: "#D97706" },
  { bg: "linear-gradient(135deg, #f0f9ff 0%, #bae6fd 100%)", border: "#7dd3fc", dot: "#0284C7" },
  { bg: "linear-gradient(135deg, #f5f3ff 0%, #ddd6fe 100%)", border: "#c4b5fd", dot: "#7C3AED" },
  { bg: "linear-gradient(135deg, #f0fdf4 0%, #bbf7d0 100%)", border: "#86efac", dot: "#16A34A" },
  { bg: "linear-gradient(135deg, #fdf4ff 0%, #f5d0fe 100%)", border: "#e879f9", dot: "#C026D3" },
  { bg: "linear-gradient(135deg, #fff7ed 0%, #fed7aa 100%)", border: "#fdba74", dot: "#EA580C" },
  { bg: "linear-gradient(135deg, #ecfeff 0%, #a5f3fc 100%)", border: "#67e8f9", dot: "#0891B2" },
];

function Chip({ label, paletteIdx }: { label: string; paletteIdx: number }) {
  const p = CHIP_PALETTES[paletteIdx % CHIP_PALETTES.length];
  return (
    <span
      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap border"
      style={{
        background: p.bg,
        borderColor: p.border,
        color: "#1a1a1a",
        boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
      }}
    >
      <span
        className="w-2 h-2 rounded-sm flex-shrink-0"
        style={{ backgroundColor: p.dot }}
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
  offset = 0,
}: {
  items: string[];
  direction?: "left" | "right";
  duration?: string;
  offset?: number;
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
          <Chip key={i} label={label} paletteIdx={(i + offset) % CHIP_PALETTES.length} />
        ))}
      </div>
    </div>
  );
}

export default function BenefitsMarquee() {
  return (
    <section
      className="py-20 overflow-hidden"
      style={{ background: "linear-gradient(135deg, #FEF9EC 0%, #FFF7E0 50%, #FEF3C7 100%)" }}
      aria-label="Benefits"
    >
      {/* Heading */}
      <div className="text-center mb-12 px-4">
        <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#F5B731" }}>
          What you unlock
        </p>
        <h2 className="text-3xl sm:text-4xl font-black text-[#0a0a0a]">
          Everything your pipeline needs
        </h2>
      </div>

      {/* Marquee rows */}
      <div className="flex flex-col gap-4">
        <MarqueeRow items={ROW_1} direction="left"  duration="40s" offset={0} />
        <MarqueeRow items={ROW_2} direction="right" duration="35s" offset={3} />
        <MarqueeRow items={ROW_3} direction="left"  duration="45s" offset={6} />
      </div>

    </section>
  );
}
