"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);
  const headlineRef = useRef(null);
  const bioRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Stagger-reveal headline and bio
      gsap.fromTo(
        headlineRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );
      gsap.fromTo(
        bioRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          delay: 0.18,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative min-h-screen bg-[#0A0A0A] text-[#F2EFE9] flex flex-col justify-center px-8 md:px-16 lg:px-24 py-28 overflow-hidden"
    >
      {/* Hairline top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-white/10" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* Left: Giant condensed headline + arrow */}
        <div ref={headlineRef} className="lg:col-span-5">
          <h2
            className="text-[#F2EFE9] leading-[0.88] mb-6"
            style={{
              fontFamily: "var(--font-anton)",
              fontSize: "clamp(5rem, 12vw, 11rem)",
              letterSpacing: "-0.02em",
            }}
          >
            ABOUT
          </h2>

          {/* Geometric directional arrow */}
          <div className="flex items-center gap-4 mt-4">
            <span
              className="text-[#F2EFE9]/30 text-6xl leading-none select-none"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              ↗
            </span>
            <div className="h-px flex-1 bg-white/10" />
          </div>

          {/* Quick facts */}
          <dl
            className="mt-10 space-y-4 text-xs font-medium tracking-[0.18em] uppercase"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            {[
              ["Status", "B.Tech CSE · 2023–2027"],
              ["Institution", "R.P. Sharma Institute of Tech"],
              ["CGPA", "7.2"],
              ["Location", "Patna, Bihar, India"],
              ["Role", "Developer · Freelancer"],
            ].map(([k, v]) => (
              <div key={k} className="flex items-baseline gap-3">
                <dt className="text-white/30 w-28 shrink-0">{k}</dt>
                <dd className="text-white/80">{v}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Right: editorial bio paragraph */}
        <div ref={bioRef} className="lg:col-span-7 flex flex-col justify-start pt-4 lg:pt-6">
          <p
            className="mb-6 text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--accent-red)]"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            Background &amp; Vision
          </p>

          <p
            className="text-[#F2EFE9]/85 leading-[1.72] text-lg sm:text-xl mb-8"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            I&apos;m a full-stack developer and CS student building real products that sit at the
            intersection of{" "}
            <em style={{ fontFamily: "var(--font-serif)" }}>
              technical depth and human intuition
            </em>
            . My work spans production-grade web applications, generative &amp; agentic AI integrations,
            and scalable cloud architectures.
          </p>

          <p
            className="text-white/50 leading-[1.72] text-base sm:text-lg mb-10"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            Alongside React, Next.js, and Tailwind, I build backend architectures with Node.js and Express,
            integrate RESTful APIs, and work with relational and document databases. I take freelance and
            internship projects where clear engineering, clean UI, and reliable delivery matter more than hype.
          </p>

          {/* Three pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 border-t border-white/10 pt-8">
            {[
              {
                label: "Speed & Polish",
                desc: "Interfaces optimized for 60fps interaction and fast LCP.",
              },
              {
                label: "Full-Stack Depth",
                desc: "React/Next.js front-ends backed by resilient Node & SQL systems.",
              },
              {
                label: "Reliability",
                desc: "Clean modular code, rigorous error handling, zero shortcuts.",
              },
            ].map((p, i) => (
              <div
                key={p.label}
                className={`py-6 pr-6 ${i > 0 ? "sm:pl-6 sm:border-l border-white/10" : ""}`}
              >
                <h3
                  className="text-xs font-bold tracking-[0.2em] uppercase text-white/90 mb-2"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  {p.label}
                </h3>
                <p
                  className="text-xs text-white/40 leading-relaxed"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
