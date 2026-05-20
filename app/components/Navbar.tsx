"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Results", href: "#results" },
  { label: "FAQs", href: "#faq" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setMobileOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-md border-b shadow-sm"
          : ""
      }`}
      style={
        scrolled
          ? { backgroundColor: "rgba(248,246,242,0.88)", borderColor: "#E8E2D9" }
          : { backgroundColor: "transparent" }
      }
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center group"
            aria-label="Myntmore home"
          >
            <Image
              src="/logo.png"
              alt="Myntmore"
              width={280}
              height={80}
              className="h-20 w-auto object-contain"
              priority
            />
          </a>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium hover:text-[#0a0a0a] transition-colors duration-200 relative group"
                style={{ color: "#3D3D3D" }}
              >
                {link.label}
                <span
                  className="absolute -bottom-0.5 left-0 w-0 h-[2px] rounded-full transition-all duration-300 group-hover:w-full"
                  style={{ backgroundColor: "#F5B731" }}
                />
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="https://calendly.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-dark px-5 py-2.5 text-sm font-semibold inline-flex items-center gap-1.5"
            >
              Book a Call
              <svg
                className="w-3.5 h-3.5"
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

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="lg:hidden p-2 rounded-lg text-neutral-500 hover:text-[#0a0a0a] transition-colors"
            style={{ }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#EDE9E4"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = "transparent"; }}
            aria-expanded={mobileOpen}
            aria-label="Toggle navigation menu"
          >
            <span className="sr-only">Open menu</span>
            {mobileOpen ? (
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t px-4 py-4 space-y-1" style={{ backgroundColor: "#F8F6F2", borderColor: "#E8E2D9" }}>
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              className="block px-3 py-2.5 rounded-lg text-sm font-medium hover:text-[#0a0a0a] transition-colors"
              style={{ color: "#3D3D3D" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#EDE9E4"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent"; }}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 pb-1">
            <a
              href="https://calendly.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLinkClick}
              className="btn-dark w-full py-3 text-sm font-semibold text-center block"
            >
              Book a Call
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
