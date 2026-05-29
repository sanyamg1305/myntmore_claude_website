"use client";

import { useState } from "react";

interface LeadCaptureFormProps {
  title?: string;
  subtitle?: string;
}

export default function LeadCaptureForm({
  title = "Ready to build your AI engine?",
  subtitle = "Fill out the form below and our team will get back to you within 24 hours with a custom GTM strategy.",
}: LeadCaptureFormProps) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="py-20 px-4" style={{ backgroundColor: "#F8F6F2" }}>
      <div className="max-w-2xl mx-auto">
        <div className="rounded-2xl border p-8 sm:p-12" style={{ backgroundColor: "#ffffff", borderColor: "#E8E2D9", boxShadow: "0 4px 24px rgba(0,0,0,0.04)" }}>
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-black mb-3" style={{ color: "#0a0a0a" }}>{title}</h2>
            <p className="text-sm leading-relaxed" style={{ color: "#52525B" }}>{subtitle}</p>
          </div>

          {submitted ? (
            <div className="text-center py-8">
              <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: "#FEF9EC", border: "2px solid rgba(245,183,49,0.4)" }}>
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="#F5B731" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              </div>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#0a0a0a" }}>You&apos;re on the list.</h3>
              <p className="text-sm" style={{ color: "#52525B" }}>We&apos;ll be in touch within 24 hours with a custom GTM strategy.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-xs font-semibold mb-1.5" style={{ color: "#3D3D3D" }}>First Name <span style={{ color: "#F5B731" }}>*</span></label>
                  <input id="firstName" name="firstName" type="text" required className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200" style={{ backgroundColor: "#F8F6F2", border: "1px solid #E8E2D9", color: "#0a0a0a" }}
                    onFocus={(e) => { e.currentTarget.style.borderColor = "rgba(245,183,49,0.6)"; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(245,183,49,0.08)"; }}
                    onBlur={(e) => { e.currentTarget.style.borderColor = "#E8E2D9"; e.currentTarget.style.boxShadow = "none"; }}
                    placeholder="Tejas" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-xs font-semibold mb-1.5" style={{ color: "#3D3D3D" }}>Last Name <span style={{ color: "#F5B731" }}>*</span></label>
                  <input id="lastName" name="lastName" type="text" required className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200" style={{ backgroundColor: "#F8F6F2", border: "1px solid #E8E2D9", color: "#0a0a0a" }}
                    onFocus={(e) => { e.currentTarget.style.borderColor = "rgba(245,183,49,0.6)"; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(245,183,49,0.08)"; }}
                    onBlur={(e) => { e.currentTarget.style.borderColor = "#E8E2D9"; e.currentTarget.style.boxShadow = "none"; }}
                    placeholder="Jhaveri" />
                </div>
              </div>
              <div>
                <label htmlFor="designation" className="block text-xs font-semibold mb-1.5" style={{ color: "#3D3D3D" }}>Designation <span style={{ color: "#F5B731" }}>*</span></label>
                <input id="designation" name="designation" type="text" required className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200" style={{ backgroundColor: "#F8F6F2", border: "1px solid #E8E2D9", color: "#0a0a0a" }}
                  onFocus={(e) => { e.currentTarget.style.borderColor = "rgba(245,183,49,0.6)"; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(245,183,49,0.08)"; }}
                  onBlur={(e) => { e.currentTarget.style.borderColor = "#E8E2D9"; e.currentTarget.style.boxShadow = "none"; }}
                  placeholder="Founder / Head of Sales" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="company" className="block text-xs font-semibold mb-1.5" style={{ color: "#3D3D3D" }}>Company</label>
                  <input id="company" name="company" type="text" className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200" style={{ backgroundColor: "#F8F6F2", border: "1px solid #E8E2D9", color: "#0a0a0a" }}
                    onFocus={(e) => { e.currentTarget.style.borderColor = "rgba(245,183,49,0.6)"; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(245,183,49,0.08)"; }}
                    onBlur={(e) => { e.currentTarget.style.borderColor = "#E8E2D9"; e.currentTarget.style.boxShadow = "none"; }}
                    placeholder="Acme Corp" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-xs font-semibold mb-1.5" style={{ color: "#3D3D3D" }}>Phone</label>
                  <input id="phone" name="phone" type="tel" className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200" style={{ backgroundColor: "#F8F6F2", border: "1px solid #E8E2D9", color: "#0a0a0a" }}
                    onFocus={(e) => { e.currentTarget.style.borderColor = "rgba(245,183,49,0.6)"; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(245,183,49,0.08)"; }}
                    onBlur={(e) => { e.currentTarget.style.borderColor = "#E8E2D9"; e.currentTarget.style.boxShadow = "none"; }}
                    placeholder="+91 98765 43210" />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-semibold mb-1.5" style={{ color: "#3D3D3D" }}>Email <span style={{ color: "#F5B731" }}>*</span></label>
                <input id="email" name="email" type="email" required className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200" style={{ backgroundColor: "#F8F6F2", border: "1px solid #E8E2D9", color: "#0a0a0a" }}
                  onFocus={(e) => { e.currentTarget.style.borderColor = "rgba(245,183,49,0.6)"; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(245,183,49,0.08)"; }}
                  onBlur={(e) => { e.currentTarget.style.borderColor = "#E8E2D9"; e.currentTarget.style.boxShadow = "none"; }}
                  placeholder="tejas@myntmore.com" />
              </div>
              <button type="submit" className="btn-dark w-full py-4 text-sm font-bold">
                Get Your Custom Strategy
              </button>
              <p className="text-center text-xs" style={{ color: "#8C8279" }}>No commitments. No agency pitch decks. Just a real conversation about your pipeline.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
