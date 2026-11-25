"use client";

import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SERVICES = [
  {
    id: "01",
    title: "Full-Stack Web Engineering",
    desc: "End-to-end production applications — from pixel-perfect React/Next.js interfaces to resilient Node.js APIs, SQL schemas, and seamless deployment pipelines.",
    tags: ["React", "Next.js", "Node.js", "PostgreSQL", "REST APIs"],
  },
  {
    id: "02",
    title: "Generative & Agentic AI Systems",
    desc: "LLM integrations, AI-assisted development workflows, agentic automation pipelines, and intelligent feature layers built on top of production web products.",
    tags: ["LLM APIs", "Agents", "RAG", "Python", "OpenAI"],
  },
  {
    id: "03",
    title: "Cloud Deployment & AWS Architecture",
    desc: "Docker-containerized deployments, CI/CD pipelines, cloud-native architecture on AWS, Vercel, Cloudflare, and Render — with performance monitoring baked in.",
    tags: ["AWS", "Docker", "CI/CD", "Cloudflare", "Vercel"],
  },
  {
    id: "04",
    title: "Digital Products & SEO via The Bytehouse",
    desc: "Data-driven SEO architecture, content-led digital product strategy, and performance-optimized web presence for ambitious brands and founders.",
    tags: ["SEO", "CMS", "Analytics", "The Bytehouse"],
  },
];

export default function Services() {
  const [openIdx, setOpenIdx] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".services-header",
        { y: 40, opacity: 0 },
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

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative bg-[#0A0A0A] text-[#F2EFE9] px-8 md:px-16 lg:px-24 py-28"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-white/10" />

      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="services-header grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-20">
          <div>
            <p
              className="text-[11px] tracking-[0.28em] uppercase text-white/30 font-semibold mb-4"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              What I Do
            </p>
            <h2
              className="text-[#F2EFE9] leading-[0.88]"
              style={{
                fontFamily: "var(--font-anton)",
                fontSize: "clamp(3rem, 8vw, 7rem)",
                letterSpacing: "-0.02em",
              }}
            >
              SERVICES
            </h2>
          </div>
          <p
            className="text-white/40 text-base leading-relaxed max-w-sm lg:max-w-none"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            End-to-end engineering solutions — from first commit to production deployment,
            tailored to ambitious teams and founders.
          </p>
        </div>

        {/* Accordion Rows */}
        <div>
          {SERVICES.map((service, i) => (
            <div key={service.id} className="service-row">
              <button
                className="w-full text-left py-6 md:py-8 group"
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                aria-expanded={openIdx === i}
              >
                <div className="flex items-center justify-between gap-6">
                  <div className="flex items-center gap-8 md:gap-12 flex-1 min-w-0">
                    <span
                      className="text-xs font-mono text-white/20 tracking-widest shrink-0"
                      style={{ fontFamily: "var(--font-jakarta)" }}
                    >
                      {service.id}
                    </span>
                    <h3
                      className="text-[#F2EFE9]/85 group-hover:text-white transition-colors duration-200 leading-tight"
                      style={{
                        fontFamily: "var(--font-anton)",
                        fontSize: "clamp(1rem, 3vw, 1.9rem)",
                        letterSpacing: "0.01em",
                      }}
                    >
                      {service.title}
                    </h3>
                  </div>
                  <span
                    className={`text-white/30 text-xl shrink-0 transition-transform duration-300 ${
                      openIdx === i ? "rotate-45" : "rotate-0"
                    }`}
                    style={{ fontFamily: "var(--font-jakarta)" }}
                  >
                    +
                  </span>
                </div>
              </button>

              <div
                className="overflow-hidden transition-all duration-500 ease-in-out"
                style={{
                  maxHeight: openIdx === i ? "300px" : "0px",
                  opacity: openIdx === i ? 1 : 0,
                }}
              >
                <div className="pb-8 pl-14 md:pl-24">
                  <p
                    className="text-white/50 leading-relaxed text-sm md:text-base max-w-2xl mb-5"
                    style={{ fontFamily: "var(--font-jakarta)" }}
                  >
                    {service.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[9px] font-medium tracking-wider uppercase px-2.5 py-1 border border-white/10 text-white/35 rounded-full"
                        style={{ fontFamily: "var(--font-jakarta)" }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
