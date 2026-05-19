import Image from "next/image";

const SERVICES_LINKS = [
  { label: "Cold Outreach", href: "#services" },
  { label: "Account-Based Marketing", href: "#services" },
  { label: "Lead Generation", href: "#services" },
  { label: "How It Works", href: "#how-it-works" },
];

const COMPANY_LINKS = [
  { label: "About Us", href: "#" },
  { label: "Results", href: "#results" },
  { label: "Testimonials", href: "#" },
  { label: "FAQs", href: "#faq" },
  { label: "Privacy Policy", href: "#" },
];

const CONTACT_ITEMS = [
  { label: "hello@myntmore.com", href: "mailto:hello@myntmore.com" },
  { label: "Book a Discovery Call", href: "https://calendly.com" },
];

function LinkedInIcon() {
  return (
    <svg
      className="w-5 h-5"
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg
      className="w-5 h-5"
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-[#0A0A0A] border-t pt-16 pb-8"
      style={{ borderColor: "#1A1A1A" }}
      aria-label="Site footer"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Column 1: Logo + tagline */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a
              href="#"
              className="inline-flex items-center mb-4"
              aria-label="Myntmore home"
            >
              <Image
                src="/logo-white.png"
                alt="Myntmore"
                width={280}
                height={80}
                className="h-20 w-auto object-contain"
              />
            </a>
            <p className="text-[#A1A1AA] text-sm leading-relaxed mb-6 max-w-xs">
              B2B lead generation, cold outreach, and account-based marketing
              that books qualified meetings — at scale.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg flex items-center justify-center text-[#A1A1AA] hover:text-[#F5B731] transition-colors duration-200"
                style={{ border: "1px solid #27272A" }}
                aria-label="Myntmore on LinkedIn"
              >
                <LinkedInIcon />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg flex items-center justify-center text-[#A1A1AA] hover:text-[#F5B731] transition-colors duration-200"
                style={{ border: "1px solid #27272A" }}
                aria-label="Myntmore on X (Twitter)"
              >
                <TwitterIcon />
              </a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-neutral-600 mb-5">
              Services
            </h3>
            <ul className="space-y-3" role="list">
              {SERVICES_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-[#A1A1AA] hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-neutral-600 mb-5">
              Company
            </h3>
            <ul className="space-y-3" role="list">
              {COMPANY_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-[#A1A1AA] hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-neutral-600 mb-5">
              Get in Touch
            </h3>
            <ul className="space-y-3 mb-6" role="list">
              {CONTACT_ITEMS.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      item.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="text-sm text-[#A1A1AA] hover:text-white transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* CTA mini */}
            <a
              href="https://calendly.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-mint px-4 py-2.5 text-xs font-bold inline-flex items-center gap-1.5"
            >
              Book a Call
              <svg
                className="w-3 h-3"
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

        {/* Bottom bar */}
        <div
          className="pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderColor: "#1A1A1A" }}
        >
          <p className="text-xs text-neutral-600">
            &copy; {currentYear} Myntmore. All rights reserved.
          </p>
          <p className="text-xs text-neutral-700">
            Built for B2B teams who want more.
          </p>
        </div>
      </div>
    </footer>
  );
}
