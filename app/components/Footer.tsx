"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";


// ─── Floating gold particles (canvas) ────────────────────────────────────────
function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    function resize() {
      if (!canvas) return;
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    }
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    // ── Tier 1: Large glowing orbs (slow, soft) ──────────────
    const orbs = Array.from({ length: 10 }, (_, i) => ({
      x:       Math.random() * canvas.width,
      y:       Math.random() * canvas.height,
      size:    Math.random() * 10 + 7,       // 7–17 px
      speed:   Math.random() * 0.12 + 0.04,
      drift:   (Math.random() - 0.5) * 0.18,
      opacity: Math.random() * 0.18 + 0.10,
      phase:   (i / 10) * Math.PI * 2,
    }));

    // ── Tier 2: Medium bright dots ───────────────────────────
    const mids = Array.from({ length: 55 }, (_, i) => ({
      x:       Math.random() * canvas.width,
      y:       Math.random() * canvas.height,
      size:    Math.random() * 3 + 1.5,      // 1.5–4.5 px
      speed:   Math.random() * 0.45 + 0.18,
      drift:   (Math.random() - 0.5) * 0.32,
      opacity: Math.random() * 0.55 + 0.35,
      phase:   (i / 55) * Math.PI * 2,
    }));

    // ── Tier 3: Tiny sparkles (fast, sharp) ──────────────────
    const sparks = Array.from({ length: 70 }, (_, i) => ({
      x:       Math.random() * canvas.width,
      y:       Math.random() * canvas.height,
      size:    Math.random() * 1.4 + 0.4,    // 0.4–1.8 px
      speed:   Math.random() * 0.7 + 0.25,
      drift:   (Math.random() - 0.5) * 0.5,
      opacity: Math.random() * 0.8 + 0.4,
      phase:   (i / 70) * Math.PI * 2,
    }));

    let animId: number;
    let t = 0;

    function moveParticle(p: typeof mids[0]) {
      p.y -= p.speed;
      p.x += Math.sin(t + p.phase) * p.drift;
      if (p.y < -20)              { p.y = canvas!.height + 10; p.x = Math.random() * canvas!.width; }
      if (p.x < -10)              p.x = canvas!.width + 10;
      if (p.x > canvas!.width + 10) p.x = -10;
    }

    function draw() {
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);
      t += 0.007;

      // Draw orbs — big soft glow
      ctx!.shadowColor = "rgba(245,183,49,0.45)";
      ctx!.shadowBlur  = 28;
      for (const p of orbs) {
        moveParticle(p);
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(245,183,49,${p.opacity})`;
        ctx!.fill();
      }

      // Draw mids — medium glow
      ctx!.shadowColor = "rgba(245,183,49,0.7)";
      ctx!.shadowBlur  = 10;
      for (const p of mids) {
        moveParticle(p);
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(245,183,49,${p.opacity})`;
        ctx!.fill();
      }

      // Draw sparks — sharp, no blur
      ctx!.shadowBlur  = 4;
      ctx!.shadowColor = "rgba(245,183,49,0.9)";
      for (const p of sparks) {
        moveParticle(p);
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(255,200,60,${p.opacity})`;
        ctx!.fill();
      }

      ctx!.shadowBlur = 0;
      animId = requestAnimationFrame(draw);
    }

    animId = requestAnimationFrame(draw);
    return () => { cancelAnimationFrame(animId); ro.disconnect(); };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{ position:"absolute", inset:0, width:"100%", height:"100%", pointerEvents:"none" }}
    />
  );
}

// ─── SVG icons ────────────────────────────────────────────────────────────────
function LinkedInIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}
function TwitterIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const SERVICES_LINKS = [
  { label: "Cold Outreach",           href: "#services" },
  { label: "LinkedIn Outreach",       href: "#services" },
  { label: "Account-Based Marketing", href: "#services" },
  { label: "System Flow",             href: "#system-flow" },
];
const COMPANY_LINKS = [
  { label: "Results",       href: "#results" },
  { label: "Testimonials",  href: "#" },
  { label: "FAQs",          href: "#faq" },
  { label: "Privacy Policy",href: "#" },
];
const CONTACT_ITEMS = [
  { label: "hello@myntmore.com",    href: "mailto:hello@myntmore.com" },
  { label: "Book a Discovery Call", href: "https://calendly.com" },
];

// ─── Footer ───────────────────────────────────────────────────────────────────
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative overflow-hidden border-t"
      style={{ backgroundColor: "#FFFFFF", borderColor: "#E8E2D9" }}
      aria-label="Site footer"
    >
      {/* Floating particles layer */}
      <ParticleCanvas />

      {/* Ambient gold glow — rises from the bottom */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "90%",
          height: "260px",
          background: "radial-gradient(ellipse at bottom, rgba(245,183,49,0.13) 0%, rgba(245,183,49,0.04) 45%, transparent 72%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      {/* Subtle gold top edge glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "2px",
          background: "linear-gradient(to right, transparent 0%, rgba(245,183,49,0.5) 30%, rgba(245,183,49,0.8) 50%, rgba(245,183,49,0.5) 70%, transparent 100%)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main link grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-14 border-b" style={{ borderColor: "#E8E2D9" }}>

          {/* Col 1 — Logo + blurb */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#" className="inline-flex items-center mb-5" aria-label="Myntmore home">
              <Image
                src="/logo.png"
                alt="Myntmore"
                width={280}
                height={80}
                className="h-20 w-auto object-contain"
              />
            </a>
            <p className="text-sm leading-relaxed mb-6 max-w-xs" style={{ color: "#6B6B6B" }}>
              B2B cold email, LinkedIn outreach, and account-based marketing that books
              qualified meetings — at scale.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors duration-200"
                style={{ border: "1px solid #E8E2D9", color: "#6B6B6B" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "#F5B731";
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(245,183,49,0.4)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "#6B6B6B";
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "#E8E2D9";
                }}
                aria-label="Myntmore on LinkedIn"
              >
                <LinkedInIcon />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors duration-200"
                style={{ border: "1px solid #E8E2D9", color: "#6B6B6B" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "#F5B731";
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(245,183,49,0.4)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "#6B6B6B";
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "#E8E2D9";
                }}
                aria-label="Myntmore on X (Twitter)"
              >
                <TwitterIcon />
              </a>
            </div>
          </div>

          {/* Col 2 — Services */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] mb-5" style={{ color: "#3D3D3D" }}>
              Services
            </h3>
            <ul className="space-y-3" role="list">
              {SERVICES_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors duration-200"
                    style={{ color: "#6B6B6B" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#0a0a0a"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#6B6B6B"; }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Company */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] mb-5" style={{ color: "#3D3D3D" }}>
              Company
            </h3>
            <ul className="space-y-3" role="list">
              {COMPANY_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors duration-200"
                    style={{ color: "#6B6B6B" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#0a0a0a"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#6B6B6B"; }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] mb-5" style={{ color: "#3D3D3D" }}>
              Get in Touch
            </h3>
            <ul className="space-y-3 mb-6" role="list">
              {CONTACT_ITEMS.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-sm transition-colors duration-200"
                    style={{ color: "#6B6B6B" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#0a0a0a"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#6B6B6B"; }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="https://calendly.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-dark px-5 py-2.5 text-xs font-bold inline-flex items-center gap-1.5"
            >
              Book a Call
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs" style={{ color: "#B8B0A7" }}>
            &copy; {currentYear} Myntmore. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: "#B8B0A7" }}>
            Built for B2B teams who want more.
          </p>
        </div>
      </div>
    </footer>
  );
}
