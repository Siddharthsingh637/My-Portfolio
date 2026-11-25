"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Repeating text for seamless marquee
const MARQUEE_TEXT = "SIDDHARTH SINGH\u00A0\u00A0\u00A0\u2014\u00A0\u00A0\u00A0";

export default function Hero() {
  const sectionRef = useRef(null);
  const marqueeRef = useRef(null);

  useEffect(() => {
    // Subtle parallax on the marquee when user starts scrolling
    const ctx = gsap.context(() => {
      gsap.to(marqueeRef.current, {
        yPercent: -18,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative w-full h-screen overflow-hidden flex flex-col"
      style={{ background: "#EAE6DF" }}
    >
      {/* SVG Grain / Noise Texture */}
      <div className="grain-overlay" aria-hidden="true" />

      {/* Inline SVG feTurbulence extra-fine grain */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-[2] opacity-[0.055]"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <filter id="hero-noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.68"
            numOctaves="4"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#hero-noise)" />
      </svg>

      {/* Top Bar */}
      <header className="relative z-[10] flex items-center justify-between px-8 pt-8 pb-0">
        <span
          className="text-sm tracking-[0.28em] text-[#0A0A0A] uppercase font-bold"
          style={{ fontFamily: "var(--font-jakarta)" }}
        >
          Siddharth Singh
        </span>
        <div
          className="hidden md:flex items-center gap-6 text-[10px] tracking-[0.2em] uppercase text-[#0A0A0A]/50"
          style={{ fontFamily: "var(--font-jakarta)" }}
        >
          <span>Full-Stack Dev</span>
          <span className="opacity-30">/</span>
          <span>Gen-AI Engineer</span>
          <span className="opacity-30">/</span>
          <span>Co-Founder, The Bytehouse</span>
        </div>
        <a
          href="mailto:siddharthsingh.6217@gmail.com"
          className="pill-btn text-[10px] py-2 px-5 border-[#0A0A0A]/30"
          style={{ fontFamily: "var(--font-jakarta)" }}
        >
          Hire Me
        </a>
      </header>

      {/* Centerpiece — infinite marquee name */}
      <div
        ref={marqueeRef}
        className="relative z-[8] flex-1 flex flex-col justify-center overflow-hidden -mx-4"
      >
        {/* Oversized Marquee */}
        <div
          className="overflow-hidden py-2"
          style={{
            maskImage:
              "linear-gradient(to right, transparent 0%, black 4%, black 96%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 4%, black 96%, transparent 100%)",
          }}
        >
          <div className="marquee-track">
            {/* Duplicated 4× for truly seamless loop */}
            {[...Array(4)].map((_, i) => (
              <span
                key={i}
                className="whitespace-nowrap text-[#0A0A0A] leading-none select-none px-4"
                style={{
                  fontFamily: "var(--font-anton)",
                  fontSize: "clamp(5.5rem, 18vw, 20rem)",
                  letterSpacing: "-0.02em",
                  lineHeight: "0.88",
                }}
                aria-hidden={i > 0 ? "true" : undefined}
              >
                {MARQUEE_TEXT}
              </span>
            ))}
          </div>
        </div>

        {/* Sub-line beneath marquee */}
        <div className="relative z-[9] text-center px-6 mt-6">
          <p
            className="text-[#0A0A0A]/75 text-xl sm:text-2xl md:text-3xl italic"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Building for the web — engineered for clarity.
          </p>
        </div>
      </div>

      {/* Bottom Status Row */}
      <footer
        className="relative z-[10] px-8 pb-8 flex items-end justify-between"
        style={{ fontFamily: "var(--font-jakarta)" }}
      >
        <div className="flex items-center gap-2 text-[11px] text-[#0A0A0A]/50 tracking-widest uppercase font-medium">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-70" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span>Available for projects</span>
        </div>

        <div className="hidden sm:flex items-center gap-6 text-[10px] text-[#0A0A0A]/40 tracking-[0.2em] uppercase">
          <span>Patna, India</span>
          <span className="opacity-40">·</span>
          <span>Remote Worldwide</span>
        </div>

        <div className="flex items-center gap-4 text-[10px] text-[#0A0A0A]/40 tracking-widest uppercase">
          <a
            href="https://github.com/Siddharthsingh637"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#0A0A0A] transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/siddharth637"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#0A0A0A] transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </footer>
    </section>
  );
}
