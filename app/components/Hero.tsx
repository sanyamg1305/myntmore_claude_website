export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16"
      style={{ backgroundColor: "#F8F6F2" }}
      aria-label="Hero"
    >
      {/* Left yellow blob */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "-60px",
          left: "-180px",
          width: "750px",
          height: "750px",
          borderRadius: "50%",
          background: "radial-gradient(circle, #F5B731 0%, #FF8C42 50%, transparent 70%)",
          filter: "blur(100px)",
          opacity: 0.55,
          pointerEvents: "none",
        }}
      />

      {/* Right purple blob */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "0px",
          right: "-160px",
          width: "650px",
          height: "650px",
          borderRadius: "50%",
          background: "radial-gradient(circle, #A855F7 0%, #7C3AED 40%, transparent 70%)",
          filter: "blur(110px)",
          opacity: 0.4,
          pointerEvents: "none",
        }}
      />

      {/* Bottom left orange blob */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "-100px",
          left: "10%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, #FF6B35 0%, transparent 70%)",
          filter: "blur(120px)",
          opacity: 0.35,
          pointerEvents: "none",
        }}
      />

      {/* Bottom right yellow blob */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "-60px",
          right: "5%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, #F5B731 0%, transparent 70%)",
          filter: "blur(100px)",
          opacity: 0.3,
          pointerEvents: "none",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-8"
          style={{
            background: "#FEF3D7",
            borderColor: "rgba(245,183,49,0.3)",
          }}
        >
          <span
            className="w-2 h-2 rounded-full animate-pulse"
            style={{ backgroundColor: "#F5B731" }}
            aria-hidden="true"
          />
          <span className="text-sm font-semibold text-[#0a0a0a]">
            Trusted by <span style={{ color: "#b87a00" }}>80+</span> B2B Companies
          </span>
        </div>

        {/* H1 */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-[0.95] mb-6 text-[#0a0a0a]">
          <span className="block">We Fill Your Pipeline.</span>
          <span className="block mt-2 italic">
            You Close the Deals.
          </span>
        </h1>

        {/* Yellow wavy underline under h1 */}
        <div className="flex justify-center -mt-3 mb-6" aria-hidden="true">
          <svg
            viewBox="0 0 420 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[280px] sm:w-[360px] lg:w-[420px]"
            aria-hidden="true"
          >
            <path
              d="M4 10 C40 4, 80 16, 120 10 S200 4, 240 10 S320 16, 360 10 S400 4, 416 10"
              stroke="#F5B731"
              strokeWidth="3.5"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        </div>

        {/* Subheading */}
        <p className="max-w-2xl mx-auto text-lg sm:text-xl leading-relaxed mb-10 font-normal" style={{ color: "#6B6B6B" }}>
          Myntmore runs precision cold outreach and account-based marketing
          campaigns that book qualified meetings — so your sales team{" "}
          <span className="text-[#0a0a0a] font-semibold">never chases cold leads again.</span>
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="https://calendly.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-dark px-8 py-4 text-base font-bold inline-flex items-center gap-2 w-full sm:w-auto justify-center"
          >
            Book Your Free Strategy Call
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
          <a
            href="#results"
            className="text-base font-semibold text-[#0a0a0a] hover:underline underline-offset-4 transition-all duration-200 w-full sm:w-auto text-center px-4 py-4"
          >
            See Our Results
          </a>
        </div>

        {/* Stats row */}
        <div className="inline-flex flex-col sm:flex-row items-center gap-0 sm:gap-0 rounded-2xl overflow-hidden"
          style={{ border: "1px solid #E8E2D9", background: "#FFFFFF", boxShadow: "0 2px 16px rgba(0,0,0,0.06)" }}
        >
          {[
            { value: "1,200+", label: "Meetings Booked" },
            { value: "$48M+", label: "Pipeline Generated" },
            { value: "92%", label: "Client Retention" },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center px-8 py-5 w-full sm:w-auto ${
                i !== 2
                  ? "border-b sm:border-b-0 sm:border-r"
                  : ""
              }`}
              style={{ borderColor: "#E8E2D9" }}
            >
              <span className="text-2xl sm:text-3xl font-black text-[#0a0a0a]">
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm font-medium mt-0.5 whitespace-nowrap" style={{ color: "#8C8279" }}>
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent, rgba(248,246,242,0.7))",
        }}
        aria-hidden="true"
      />
    </section>
  );
}
