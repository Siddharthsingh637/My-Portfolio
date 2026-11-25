"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SERVICES = [
  {
    id: "01",
    title: "Full-Stack Web Engineering",
    desc: "End-to-end production apps — React/Next.js interfaces, Node APIs, databases, and clean deployment pipelines.",
    tags: ["React", "Next.js", "Node.js", "PostgreSQL"],
    preview: {
      label: "Web Product",
      prompt:
        "Build a responsive dashboard with auth, role-based access, and a typed API layer for a growing SaaS product.",
      meta: "Frontend · Backend · Database",
    },
  },
  {
    id: "02",
    title: "Generative & Agentic AI",
    desc: "LLM features, agent workflows, and intelligent product layers that sit cleanly on top of real applications.",
    tags: ["LLM APIs", "Agents", "RAG", "Python"],
    preview: {
      label: "AI Feature",
      prompt:
        "Add an assistant that drafts responses, retrieves docs with RAG, and plugs into an existing Next.js workflow.",
      meta: "Agents · RAG · Product UX",
    },
  },
  {
    id: "03",
    title: "Cloud & Deployment",
    desc: "Dockerized apps, CI/CD, and cloud setups on AWS, Vercel, Cloudflare, and Render with monitoring baked in.",
    tags: ["AWS", "Docker", "CI/CD", "Vercel"],
    preview: {
      label: "Infra Setup",
      prompt:
        "Containerize the app, wire CI/CD, and ship a stable production environment with logging and rollbacks.",
      meta: "Docker · Pipelines · Hosting",
    },
  },
  {
    id: "04",
    title: "Freelance Product Work",
    desc: "Contract builds for startups and small teams — landing pages, dashboards, SEO polish, and on-time delivery.",
    tags: ["Freelance", "SEO", "Dashboards"],
    preview: {
      label: "Client Scope",
      prompt:
        "Design and ship a conversion-focused landing page plus admin panel for a remote freelance engagement.",
      meta: "Scope · Design · Delivery",
    },
  },
];

function SparkIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 2.5l1.2 6.1L19.5 12l-6.3 1.4L12 21.5l-1.2-8.1L4.5 12l6.3-3.4L12 2.5z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Services() {
  const [activeIdx, setActiveIdx] = useState(0);
  const sectionRef = useRef(null);
  const active = SERVICES[activeIdx];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".services-reveal",
        { y: 36, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.85,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 72%",
          },
        },
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative overflow-hidden px-6 py-24 md:px-12 lg:px-20 lg:py-32"
      style={{ background: "var(--paper)" }}
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-black/8" />
      <div className="grain-overlay opacity-[0.04]" aria-hidden="true" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-16 xl:gap-20">
        {/* Left — headline + interactive list */}
        <div className="services-reveal">
          <p
            className="mb-5 text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--accent-red)]"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            What I Do
          </p>
          <h2
            className="max-w-xl text-[#0A0A0A] leading-[1.05] tracking-[-0.03em]"
            style={{
              fontFamily: "var(--font-jakarta)",
              fontSize: "clamp(2rem, 4.5vw, 3.35rem)",
              fontWeight: 700,
            }}
          >
            Engineering that ships clean products, fast.
          </h2>

          <ul className="mt-12 space-y-1" role="list">
            {SERVICES.map((service, i) => {
              const isActive = activeIdx === i;
              return (
                <li key={service.id}>
                  <button
                    type="button"
                    onMouseEnter={() => setActiveIdx(i)}
                    onFocus={() => setActiveIdx(i)}
                    onClick={() => setActiveIdx(i)}
                    aria-pressed={isActive}
                    className={`group relative w-full border-l-[3px] py-5 pl-5 text-left transition-all duration-300 sm:pl-6 ${
                      isActive
                        ? "border-[var(--accent-red)]"
                        : "border-transparent opacity-40 hover:opacity-70"
                    }`}
                  >
                    <h3
                      className={`mb-1.5 text-[15px] font-semibold tracking-[-0.01em] transition-colors sm:text-base ${
                        isActive ? "text-[#0A0A0A]" : "text-[#0A0A0A]/70"
                      }`}
                      style={{ fontFamily: "var(--font-jakarta)" }}
                    >
                      {service.title}
                    </h3>
                    <p
                      className={`max-w-md text-sm leading-relaxed transition-colors ${
                        isActive ? "text-[#0A0A0A]/55" : "text-[#0A0A0A]/35"
                      }`}
                      style={{ fontFamily: "var(--font-jakarta)" }}
                    >
                      {service.desc}
                    </p>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Right — visual panel */}
        <div className="services-reveal relative">
          <div
            className="relative flex min-h-[28rem] items-center justify-center overflow-hidden rounded-[2.5rem] px-6 py-14 sm:min-h-[32rem] sm:rounded-[3rem] sm:px-10"
            style={{
              background:
                "linear-gradient(160deg, #D9E4EC 0%, #C9D8E4 48%, #B8CBD9 100%)",
            }}
          >
            {/* Soft depth blobs */}
            <div
              className="pointer-events-none absolute -right-10 top-8 h-48 w-48 rounded-full opacity-50 blur-3xl"
              style={{ background: "rgba(122, 31, 31, 0.18)" }}
            />
            <div
              className="pointer-events-none absolute -left-8 bottom-10 h-40 w-40 rounded-full opacity-40 blur-3xl"
              style={{ background: "rgba(255, 255, 255, 0.55)" }}
            />

            <div
              key={active.id}
              className="services-preview-enter relative w-full max-w-md"
            >
              <div className="rounded-[1.35rem] border border-black/[0.04] bg-white p-5 shadow-[0_28px_60px_-28px_rgba(20,24,30,0.45)] sm:p-6">
                <div className="mb-5 flex items-center gap-3">
                  <span
                    className="flex h-9 w-9 items-center justify-center rounded-full text-[11px] font-bold tracking-wide text-[#F2EFE9]"
                    style={{
                      background: "var(--accent-red)",
                      fontFamily: "var(--font-jakarta)",
                    }}
                  >
                    SS
                  </span>
                  <div>
                    <p
                      className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0A0A0A]"
                      style={{ fontFamily: "var(--font-jakarta)" }}
                    >
                      Siddharth · Studio
                    </p>
                    <p
                      className="mt-0.5 text-[10px] uppercase tracking-[0.16em] text-[#0A0A0A]/4"
                      style={{ fontFamily: "var(--font-jakarta)" }}
                    >
                      {active.preview.label}
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl border border-black/[0.06] bg-[#F7F4EE] px-4 py-4">
                  <p
                    className="text-[13px] leading-relaxed text-[#0A0A0A]/72 sm:text-sm"
                    style={{ fontFamily: "var(--font-jakarta)" }}
                  >
                    {active.preview.prompt}
                  </p>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {active.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-black/[0.08] bg-white px-2.5 py-1 text-[9px] font-medium uppercase tracking-wider text-[#0A0A0A]/5"
                      style={{ fontFamily: "var(--font-jakarta)" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-black/[0.06] pt-4">
                  <p
                    className="text-[10px] uppercase tracking-[0.16em] text-[#0A0A0A]/4"
                    style={{ fontFamily: "var(--font-jakarta)" }}
                  >
                    {active.preview.meta}
                  </p>
                  <span
                    className="flex h-9 w-9 items-center justify-center rounded-full text-white shadow-[0_10px_24px_-8px_rgba(122,31,31,0.7)]"
                    style={{ background: "var(--accent-red)" }}
                  >
                    <SparkIcon />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
