"use client";

export default function CTABanner() {
  return (
    <section
      className="py-24 lg:py-32 relative overflow-hidden bg-[#0A0A0A]"
      aria-labelledby="cta-heading"
    >
      {/* Yellow blob — left */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "50%",
          left: "-120px",
          transform: "translateY(-50%)",
          width: "550px",
          height: "550px",
          borderRadius: "50%",
          background: "radial-gradient(circle, #F5B731 0%, #FF8C42 50%, transparent 75%)",
          filter: "blur(100px)",
          opacity: 0.35,
          pointerEvents: "none",
        }}
      />
      {/* Purple blob — right */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "50%",
          right: "-120px",
          transform: "translateY(-50%)",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, #A855F7 0%, #7C3AED 40%, transparent 70%)",
          filter: "blur(110px)",
          opacity: 0.3,
          pointerEvents: "none",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-8"
          style={{
            borderColor: "rgba(245,183,49,0.3)",
            background: "rgba(245,183,49,0.08)",
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full animate-pulse"
            style={{ backgroundColor: "#F5B731" }}
            aria-hidden="true"
          />
          <span className="text-xs font-bold uppercase tracking-[0.15em]" style={{ color: "#F5B731" }}>
            Limited spots available
          </span>
        </div>

        {/* Heading */}
        <h2
          id="cta-heading"
          className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white mb-6 leading-[0.95]"
        >
          Ready to Fill
          <br />
          <span style={{ color: "#F5B731" }}>Your Pipeline?</span>
        </h2>

        {/* Subtext */}
        <p className="text-lg sm:text-xl text-[#A1A1AA] max-w-2xl mx-auto mb-10 leading-relaxed">
          Join{" "}
          <span className="text-white font-semibold">80+ B2B companies</span>{" "}
          growing with Myntmore. Book your free 30-minute strategy call today —
          we&rsquo;ll map out exactly how to generate pipeline for your business.
        </p>

        {/* CTA button */}
        <a
          href="https://calendly.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 px-10 py-5 rounded-full font-black text-lg transition-all duration-200 hover:-translate-y-1 group"
          style={{
            background: "#F5B731",
            color: "#000000",
            boxShadow: "0 0 40px rgba(245,183,49,0.25)",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.boxShadow =
              "0 0 60px rgba(245,183,49,0.4)";
            (e.currentTarget as HTMLAnchorElement).style.background = "#e8a820";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.boxShadow =
              "0 0 40px rgba(245,183,49,0.25)";
            (e.currentTarget as HTMLAnchorElement).style.background = "#F5B731";
          }}
        >
          Book Your Free Strategy Call
          <svg
            className="w-5 h-5 translate-x-0 group-hover:translate-x-1 transition-transform duration-200"
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

        {/* Reassurance */}
        <p className="mt-5 text-sm text-[#A1A1AA]">
          No commitment. No fluff. Just a real conversation about your growth.
        </p>

        {/* Trust signals */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-10 pt-10 border-t"
          style={{ borderColor: "#1A1A1A" }}
        >
          {[
            "30-minute call, no sales pressure",
            "Custom strategy for your ICP",
            "Results or we make it right",
          ].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <svg
                className="w-4 h-4 flex-shrink-0"
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
              <span className="text-sm text-[#A1A1AA]">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
