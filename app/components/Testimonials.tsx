interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  company: string;
  initials: string;
  avatarGradient: string;
}

function StarRating() {
  return (
    <div className="flex items-center gap-0.5 mb-4" aria-label="5 out of 5 stars">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className="w-4 h-4"
          style={{ color: "#F5B731" }}
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({
  quote,
  name,
  title,
  company,
  initials,
  avatarGradient,
}: TestimonialCardProps) {
  return (
    <article className="glass-card-hover rounded-2xl p-7 flex flex-col h-full relative overflow-hidden group">
      {/* Top accent line on hover */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(245,183,49,0.5), transparent)",
        }}
        aria-hidden="true"
      />

      {/* Quote mark */}
      <div
        className="text-6xl font-black leading-none mb-2 -mt-1 select-none"
        style={{ color: "#F5B731" }}
        aria-hidden="true"
      >
        &ldquo;
      </div>

      {/* Stars */}
      <StarRating />

      {/* Quote */}
      <blockquote className="text-[#52525B] text-base leading-relaxed flex-grow mb-6">
        &ldquo;{quote}&rdquo;
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-3 pt-5 border-t" style={{ borderColor: "#E8E2D9" }}>
        {/* Avatar */}
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
          style={{ background: avatarGradient }}
          aria-hidden="true"
        >
          {initials}
        </div>
        <div>
          <p className="text-[#0a0a0a] text-sm font-semibold">{name}</p>
          <p className="text-neutral-500 text-xs">
            {title}, {company}
          </p>
        </div>
      </div>
    </article>
  );
}

const TESTIMONIALS: TestimonialCardProps[] = [
  {
    quote:
      "Myntmore completely transformed our outbound. We went from 0 to 30 qualified meetings per month in just 6 weeks. The team understood our ICP better than we did — and the copy they wrote for us converted like crazy.",
    name: "Sarah K.",
    title: "VP of Sales",
    company: "Finstack",
    initials: "SK",
    avatarGradient: "linear-gradient(135deg, #F5B731 0%, #e8a820 100%)",
  },
  {
    quote:
      "The ABM campaign they ran for us was unlike anything we'd tried before. Laser-focused targeting, perfect timing, and messaging that actually resonated with our buyers. We closed 3 enterprise deals directly from it.",
    name: "James R.",
    title: "CEO",
    company: "Proxima",
    initials: "JR",
    avatarGradient: "linear-gradient(135deg, #F5B731 0%, #d4a017 100%)",
  },
  {
    quote:
      "Best ROI we've seen from any marketing spend — by a wide margin. The Myntmore team is sharp, transparent, and genuinely invested in your growth. They don't just fill your calendar; they fill it with the right people.",
    name: "Priya M.",
    title: "Head of Growth",
    company: "Vaultline",
    initials: "PM",
    avatarGradient: "linear-gradient(135deg, #F5B731 0%, #f7c44d 100%)",
  },
];

export default function Testimonials() {
  return (
    <section
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{ backgroundColor: "#F0EBE3" }}
      aria-labelledby="testimonials-heading"
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
            Client Feedback
          </span>
          <h2
            id="testimonials-heading"
            className="text-4xl sm:text-5xl font-black text-[#0a0a0a] tracking-tight"
          >
            What Our Clients Say
          </h2>
          <p className="mt-4 text-[#52525B] text-lg max-w-xl mx-auto">
            Don&rsquo;t take our word for it. Here&rsquo;s what happens when
            you stop guessing and start growing.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}
