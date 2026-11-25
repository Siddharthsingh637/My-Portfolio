"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FILTERS = ["All", "Education", "SaaS", "Commerce", "Tooling"];

const PROJECTS = [
  {
    id: "01",
    title: "Federated Collaboration",
    tagline: "Real-time cross-campus briefs, workspaces, and video rooms.",
    category: "Educational Platform",
    filter: "Education",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/Siddharthsingh637",
    art: "sphere",
  },
  {
    id: "02",
    title: "Admin Dashboard",
    tagline: "Attendance, grading, and analytics for institutions at scale.",
    category: "Institutional SaaS",
    filter: "SaaS",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/Siddharthsingh637",
    art: "gold",
  },
  {
    id: "03",
    title: "EV Commerce Platform",
    tagline: "Inventory, bookings, and payments for an automobile client.",
    category: "Commerce Platform",
    filter: "Commerce",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/Siddharthsingh637",
    art: "geo",
  },
  {
    id: "04",
    title: "Collaborative Code Editor",
    tagline: "Live cursor sync, pair programming, and isolated execution.",
    category: "Developer Tooling",
    filter: "Tooling",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/Siddharthsingh637",
    art: "portrait",
  },
];

function CardArt({ type }) {
  if (type === "sphere") {
    return (
      <div className="absolute inset-0 bg-[#8a8a8a]">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 50% 42%, #9a9a9a 0%, #6e6e6e 55%, #5a5a5a 100%)",
          }}
        />
        <div
          className="absolute left-1/2 top-[42%] h-[58%] w-[58%] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(circle at 32% 28%, #f4c56a 0%, #e08a1a 22%, #1aa3c4 38%, #0e7fa3 70%, #0a5f7a 100%)",
            boxShadow:
              "inset -18px -22px 40px rgba(0,0,0,0.28), 0 28px 50px rgba(0,0,0,0.22)",
          }}
        />
        <div
          className="absolute left-1/2 top-[34%] h-[18%] w-[42%] -translate-x-1/2 rounded-full opacity-50"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(255,255,255,0.55), transparent 70%)",
          }}
        />
      </div>
    );
  }

  if (type === "gold") {
    return (
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 58% 28%, #f3e0b0 0%, #c9a46a 28%, #8a6a3a 62%, #3d2a14 100%)",
        }}
      />
    );
  }

  if (type === "geo") {
    return (
      <div className="absolute inset-0 bg-[#0b0d12]">
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 400 400"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="geoShine" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#9aa7bf" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#1a1f2a" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          {Array.from({ length: 9 }).map((_, i) => (
            <polygon
              key={i}
              points={`${40 + i * 18},40 ${220 + i * 12},90 ${180 - i * 8},360 ${20 + i * 10},300`}
              fill="none"
              stroke="url(#geoShine)"
              strokeWidth="1.2"
              opacity={0.28 + (i % 3) * 0.08}
            />
          ))}
        </svg>
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(160deg, rgba(255,255,255,0.08), transparent 40%, rgba(0,0,0,0.35))",
          }}
        />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 bg-[#151515]">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 55% 30%, #3a3a3a 0%, #1a1a1a 55%, #0c0c0c 100%)",
        }}
      />
      <div className="absolute left-1/2 top-[46%] h-[78%] w-[70%] -translate-x-1/2 -translate-y-1/2">
        <div
          className="absolute left-1/2 top-[18%] h-24 w-24 -translate-x-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(circle at 35% 30%, #c4b8a8, #6d645c 70%)",
          }}
        />
        <div
          className="absolute left-1/2 top-[38%] h-[70%] w-[72%] -translate-x-1/2 rounded-t-[48%]"
          style={{
            background:
              "linear-gradient(180deg, #3a4550 0%, #24303a 40%, #1a2228 100%)",
          }}
        />
      </div>
    </div>
  );
}

export default function Projects() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef([]);
  const [activeFilter, setActiveFilter] = useState("All");

  const visibleProjects = useMemo(
    () =>
      activeFilter === "All"
        ? PROJECTS
        : PROJECTS.filter((project) => project.filter === activeFilter),
    [activeFilter],
  );

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
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
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const cards = cardsRef.current.filter(Boolean);
    if (!cards.length) return;

    gsap.fromTo(
      cards,
      { y: 24, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.55,
        stagger: 0.08,
        ease: "power3.out",
      },
    );
  }, [activeFilter]);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative bg-[#0A0A0A] px-6 py-28 text-[#F2EFE9] md:px-16 lg:px-24"
    >
      <div className="absolute top-0 right-0 left-0 h-px bg-white/10" />

      <div className="mx-auto w-full max-w-6xl">
        <div ref={headerRef} className="mb-10 text-center">
          <p
            className="mb-4 text-[11px] font-semibold tracking-[0.28em] text-[var(--accent-red)] uppercase"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            Selected Work
          </p>
          <h2
            className="leading-[0.9] text-[#F2EFE9]"
            style={{
              fontFamily: "var(--font-anton)",
              fontSize: "clamp(2.6rem, 7vw, 5.5rem)",
              letterSpacing: "-0.02em",
            }}
          >
            SELECTED PROJECTS
          </h2>
        </div>

        <div
          className="mb-10 flex flex-wrap items-center justify-center gap-2"
          role="tablist"
          aria-label="Filter projects"
        >
          {FILTERS.map((filter) => {
            const selected = activeFilter === filter;
            return (
              <button
                key={filter}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full px-5 py-2 text-[13px] font-medium transition-colors ${
                  selected
                    ? "bg-[#F2EFE9] text-[#0A0A0A]"
                    : "bg-white/8 text-white/70 hover:bg-white/12 hover:text-white"
                }`}
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                {filter}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
          {visibleProjects.map((project, i) => (
            <a
              key={project.id}
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              ref={(el) => {
                cardsRef.current[i] = el;
              }}
              className="group relative block aspect-[5/4] overflow-hidden rounded-[2rem] focus-visible:ring-2 focus-visible:ring-[#F2EFE9] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A] focus-visible:outline-none"
              aria-label={`${project.title}. ${project.tagline}`}
            >
              <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.04]">
                <CardArt type={project.art} />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                <h3
                  className="mb-1.5 text-[1.35rem] leading-tight font-semibold text-white sm:text-[1.5rem]"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  {project.title}
                </h3>
                <p
                  className="max-w-sm text-sm leading-relaxed text-white/70"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  {project.tagline}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
