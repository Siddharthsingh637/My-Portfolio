"use client";

import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    scope: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const sectionRef = useRef(null);
  const headlineRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headlineRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailto = `mailto:siddharthsingh.6217@gmail.com?subject=${encodeURIComponent(
      `Portfolio Inquiry from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage / Project Scope:\n${formData.scope}`
    )}`;
    window.location.href = mailto;
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative px-8 md:px-16 lg:px-24 py-36 overflow-hidden"
      style={{ background: "#EAE6DF" }}
    >
      {/* Top hairline */}
      <div className="absolute top-0 left-0 right-0 h-px bg-black/10" />

      {/* Grain */}
      <div className="grain-overlay" aria-hidden="true" />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        {/* Headline */}
        <div ref={headlineRef} className="mb-20">
          <p
            className="text-[11px] tracking-[0.28em] uppercase text-[#0A0A0A]/30 font-semibold mb-6"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            Get In Touch
          </p>
          <h2
            className="text-[#0A0A0A] leading-[0.9]"
            style={{
              fontFamily: "var(--font-anton)",
              fontSize: "clamp(2.8rem, 9vw, 8rem)",
              letterSpacing: "-0.02em",
            }}
          >
            YES, WE
            <br />
            CAN TALK.
            <br />
            <span
              className="italic text-[#0A0A0A]/25"
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(1.2rem, 4vw, 3.5rem)",
                letterSpacing: "0em",
              }}
            >
              (no cold pitches, please)
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Left: Contact info */}
          <div>
            <div className="space-y-6 mb-12">
              {[
                { label: "Email", value: "siddharthsingh.6217@gmail.com", href: "mailto:siddharthsingh.6217@gmail.com" },
                { label: "GitHub", value: "github.com/Siddharthsingh637", href: "https://github.com/Siddharthsingh637" },
                { label: "LinkedIn", value: "linkedin.com/in/siddharth637", href: "https://www.linkedin.com/in/siddharth637" },
                { label: "Location", value: "Patna, Bihar, India · Remote Worldwide", href: null },
              ].map((item) => (
                <div
                  key={item.label}
                  className="border-b border-[#0A0A0A]/10 pb-5 flex items-start justify-between gap-4"
                >
                  <span
                    className="text-[10px] tracking-[0.22em] uppercase text-[#0A0A0A]/35 w-20 shrink-0 mt-0.5"
                    style={{ fontFamily: "var(--font-jakarta)" }}
                  >
                    {item.label}
                  </span>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("mailto") ? undefined : "_blank"}
                      rel="noopener noreferrer"
                      className="text-sm text-[#0A0A0A]/75 hover:text-[#0A0A0A] transition-colors font-medium text-right"
                      style={{ fontFamily: "var(--font-jakarta)" }}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span
                      className="text-sm text-[#0A0A0A]/55 font-medium text-right"
                      style={{ fontFamily: "var(--font-jakarta)" }}
                    >
                      {item.value}
                    </span>
                  )}
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-70" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span
                className="text-[11px] tracking-[0.2em] uppercase text-[#0A0A0A]/50 font-semibold"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                Available for Full-Time & Contract Work
              </span>
            </div>
          </div>

          {/* Right: Minimal underline form */}
          <div>
            {submitted ? (
              <div className="flex flex-col items-start gap-4 py-12">
                <span
                  className="text-4xl"
                  style={{ fontFamily: "var(--font-serif)", fontStyle: "italic" }}
                >
                  Nice.
                </span>
                <p
                  className="text-sm text-[#0A0A0A]/55"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  Your email client has been opened. I&apos;ll get back to you soon.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs text-[#0A0A0A]/40 hover:text-[#0A0A0A] underline underline-offset-4 mt-2"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  Send another →
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-10">
                {[
                  { id: "name", label: "Your Name", type: "text", placeholder: "Jane Smith", required: true },
                  { id: "email", label: "Your Email", type: "email", placeholder: "jane@company.com", required: true },
                ].map((field) => (
                  <div key={field.id} className="relative">
                    <label
                      htmlFor={field.id}
                      className="block text-[10px] tracking-[0.25em] uppercase text-[#0A0A0A]/40 mb-3 font-semibold"
                      style={{ fontFamily: "var(--font-jakarta)" }}
                    >
                      {field.label}
                    </label>
                    <input
                      id={field.id}
                      type={field.type}
                      required={field.required}
                      placeholder={field.placeholder}
                      value={formData[field.id]}
                      onChange={(e) =>
                        setFormData({ ...formData, [field.id]: e.target.value })
                      }
                      className="underline-input"
                      style={{ fontFamily: "var(--font-jakarta)" }}
                    />
                  </div>
                ))}

                <div>
                  <label
                    htmlFor="scope"
                    className="block text-[10px] tracking-[0.25em] uppercase text-[#0A0A0A]/40 mb-3 font-semibold"
                    style={{ fontFamily: "var(--font-jakarta)" }}
                  >
                    Project Scope / Message
                  </label>
                  <textarea
                    id="scope"
                    rows={3}
                    required
                    placeholder="Tell me what you're building or looking for..."
                    value={formData.scope}
                    onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                    className="underline-input resize-none"
                    style={{ fontFamily: "var(--font-jakarta)" }}
                  />
                </div>

                <button
                  type="submit"
                  className="pill-btn mt-4"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  Send Message
                  <span>→</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
