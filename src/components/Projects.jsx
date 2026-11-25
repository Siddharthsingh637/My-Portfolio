"use client";

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PROJECTS = [
  {
    id: "01",
    title: "Federated Multi-College Collaboration Platform",
    category: "Educational Platform",
    year: "2024",
    tech: ["React", "Node.js", "WebRTC", "Socket.io"],
    description:
      "A federated platform enabling real-time cross-campus collaboration with live video conferencing, shared workspaces, and institutional role management.",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/Siddharthsingh637",
  },
  {
    id: "02",
    title: "Smart Institutional Admin Dashboard",
    category: "Institutional SaaS",
    year: "2024",
    tech: ["Next.js", "Express", "MySQL", "Prisma"],
    description:
      "Full-featured admin SaaS for academic institutions — attendance, grading, analytics, and role-based access control at scale.",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/Siddharthsingh637",
  },
  {
    id: "03",
    title: "Abhilashit Automobiles EV Platform",
    category: "Commerce Platform",
    year: "2024",
    tech: ["React", "Express", "Stripe", "MongoDB"],
    description:
      "End-to-end e-commerce and EV showcase platform with live inventory, booking flows, and payment integration for an automobile client.",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/Siddharthsingh637",
  },
  {
    id: "04",
    title: "Real-Time Collaborative Code Editor",
    category: "Developer Tooling",
    year: "2025",
    tech: ["Socket.io", "Monaco Editor", "Docker", "Node.js"],
    description:
      "VS Code-grade collaborative code editor with live cursor sync, multi-language support, isolated Docker execution sandboxes, and real-time pair programming.",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/Siddharthsingh637",
  },
];

export default function Projects() {
  const [openIdx, setOpenIdx] = useState(null);
  const sectionRef = useRef(null);
  const headerRef = useRef(null);

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
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative bg-[#0A0A0A] text-[#F2EFE9] px-8 md:px-16 lg:px-24 py-28"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-white/10" />

      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div ref={headerRef} className="flex items-end justify-between mb-16">
          <div>
            <p
              className="text-[11px] tracking-[0.28em] uppercase text-white/30 font-semibold mb-4"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Selected Work
            </p>
            <h2
              className="text-[#F2EFE9] leading-[0.88]"
              style={{
                fontFamily: "var(--font-anton)",
                fontSize: "clamp(3rem, 8vw, 7rem)",
                letterSpacing: "-0.02em",
              }}
            >
              SELECTED
              <br />
              PROJECTS
            </h2>
          </div>
          <a
            href="https://github.com/Siddharthsingh637"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex pill-btn-light pill-btn text-[10px]"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            All Work ↗
          </a>
        </div>

        {/* Editorial Row List */}
        <div>
          {PROJECTS.map((project, i) => (
            <div key={project.id} className="project-row">
              <button
                className="w-full text-left py-6 md:py-8 group"
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                aria-expanded={openIdx === i}
              >
                <div className="flex items-start md:items-center justify-between gap-4">
                  {/* Index + Title */}
                  <div className="flex items-start md:items-center gap-6 md:gap-10 flex-1 min-w-0">
                    <span
                      className="text-xs font-mono text-white/25 tracking-widest shrink-0 mt-1 md:mt-0"
                      style={{ fontFamily: "var(--font-jakarta)" }}
                    >
                      {project.id}
                    </span>
                    <div className="min-w-0">
                      <h3
                        className="text-[#F2EFE9] group-hover:text-white transition-colors duration-200 leading-tight truncate"
                        style={{
                          fontFamily: "var(--font-anton)",
                          fontSize: "clamp(1.1rem, 3.5vw, 2.2rem)",
                          letterSpacing: "0.01em",
                        }}
                      >
                        {project.title}
                      </h3>
                      <p
                        className="text-[11px] text-white/35 mt-1 tracking-[0.15em] uppercase"
                        style={{ fontFamily: "var(--font-jakarta)" }}
                      >
                        {project.category} · {project.year}
                      </p>
                    </div>
                  </div>

                  {/* Tech tags (desktop) */}
                  <div className="hidden lg:flex items-center gap-2 shrink-0">
                    {project.tech.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="text-[9px] font-medium tracking-wider uppercase px-2.5 py-1 border border-white/10 text-white/40 rounded-full"
                        style={{ fontFamily: "var(--font-jakarta)" }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Expand Icon */}
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

              {/* Expandable Drawer */}
              <div
                className="overflow-hidden transition-all duration-500 ease-in-out"
                style={{
                  maxHeight: openIdx === i ? "400px" : "0px",
                  opacity: openIdx === i ? 1 : 0,
                }}
              >
                <div className="pb-8 pl-14 md:pl-24">
                  <p
                    className="text-white/55 leading-relaxed text-sm md:text-base max-w-2xl mb-6"
                    style={{ fontFamily: "var(--font-jakarta)" }}
                  >
                    {project.description}
                  </p>

                  {/* Mobile tech tags */}
                  <div className="flex flex-wrap gap-2 mb-6 lg:hidden">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[9px] font-medium tracking-wider uppercase px-2.5 py-1 border border-white/10 text-white/40 rounded-full"
                        style={{ fontFamily: "var(--font-jakarta)" }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pill-btn-light pill-btn text-[10px] py-2.5 px-5"
                      style={{ fontFamily: "var(--font-jakarta)" }}
                    >
                      Live Site ↗
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] text-white/40 hover:text-white/80 tracking-widest uppercase font-medium transition-colors"
                      style={{ fontFamily: "var(--font-jakarta)" }}
                    >
                      GitHub →
                    </a>
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
