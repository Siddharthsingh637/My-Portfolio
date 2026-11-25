"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TIMELINE = [
  {
    year: "2023",
    title: "B.Tech CSE Begins",
    sub: "R.P. Sharma Institute of Technology · Patna",
    type: "education",
    tags: ["C", "HTML", "CSS", "Python Basics"],
  },
  {
    year: "2023",
    title: "First Certifications",
    sub: "HackerRank · freeCodeCamp · LinkedIn Learning",
    type: "cert",
    tags: ["Responsive Web Design", "Git & GitHub", "Python for Everybody"],
  },
  {
    year: "2024",
    title: "Full-Stack Mastery",
    sub: "Udemy · Coursera · HackerRank",
    type: "cert",
    tags: [
      "React — The Complete Guide",
      "Node.js Backend Dev",
      "Full Stack Web Dev Certificate",
    ],
  },
  {
    year: "Mar 2025",
    title: "Frontend Developer Intern",
    sub: "Reviving India · 6 months",
    type: "work",
    tags: ["React", "Tailwind", "API Integration"],
  },
  {
    year: "2025",
    title: "Full Stack Developer Intern",
    sub: "Palisati Web Resources · Present",
    type: "work",
    tags: ["Next.js", "Node.js", "PostgreSQL", "AWS"],
  },
  {
    year: "2025",
    title: "Co-Founded The Bytehouse",
    sub: "Digital agency · Patna & Remote",
    type: "founding",
    tags: ["Generative AI", "Full-Stack", "SEO"],
  },
];

const TYPE_COLOR = {
  education: "#EAE6DF",
  cert: "#B8B2A6",
  work: "#F2EFE9",
  founding: "#FFFFFF",
};

const TYPE_LABEL = {
  education: "Education",
  cert: "Certification",
  work: "Experience",
  founding: "Founding",
};

export default function Education() {
  const sectionRef = useRef(null);
  const lineRef = useRef(null);
  const nodesRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate SVG spine on scroll
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom 20%",
        scrub: 1,
        onUpdate: (self) => {
          if (lineRef.current) {
            const length = lineRef.current.getTotalLength?.() ?? 1000;
            lineRef.current.style.strokeDashoffset = length * (1 - self.progress);
          }
        },
      });

      // Stagger node reveals
      nodesRef.current.forEach((node, i) => {
        if (!node) return;
        gsap.fromTo(
          node,
          { x: -24, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.65,
            ease: "power3.out",
            scrollTrigger: {
              trigger: node,
              start: "top 82%",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="education"
      ref={sectionRef}
      className="relative bg-[#0A0A0A] text-[#F2EFE9] px-8 md:px-16 lg:px-24 py-28 overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-white/10" />

      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="mb-20">
          <p
            className="text-[11px] tracking-[0.28em] uppercase text-white/30 font-semibold mb-4"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            Timeline
          </p>
          <h2
            className="text-[#F2EFE9] leading-[0.88]"
            style={{
              fontFamily: "var(--font-anton)",
              fontSize: "clamp(3.5rem, 9vw, 8rem)",
              letterSpacing: "-0.02em",
            }}
          >
            EDUCATION &amp;
            <br />
            EXPERIENCE
          </h2>
        </div>

        {/* Timeline Layout */}
        <div className="relative grid grid-cols-1 lg:grid-cols-[64px_1fr] gap-0">
          {/* SVG Spine — left column */}
          <div className="relative hidden lg:block">
            <svg
              className="absolute left-7 top-0 h-full w-1"
              viewBox="0 0 2 1000"
              preserveAspectRatio="none"
              overflow="visible"
            >
              <line
                ref={lineRef}
                x1="1"
                y1="0"
                x2="1"
                y2="1000"
                stroke="rgba(242,239,233,0.2)"
                strokeWidth="1.5"
                strokeDasharray="1000"
                strokeDashoffset="1000"
              />
            </svg>
          </div>

          {/* Nodes */}
          <div className="flex flex-col gap-0">
            {TIMELINE.map((item, i) => (
              <div
                key={i}
                ref={(el) => (nodesRef.current[i] = el)}
                className="relative flex gap-6 pb-14 group"
              >
                {/* Dot */}
                <div className="hidden lg:flex absolute -left-[2.1rem] top-1.5 items-center justify-center">
                  <div
                    className="w-3 h-3 rounded-full border border-white/30 flex items-center justify-center"
                    style={{ background: TYPE_COLOR[item.type] }}
                  >
                    <div className="w-1 h-1 rounded-full bg-[#0A0A0A]" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pl-2 lg:pl-0">
                  {/* Year + type badge */}
                  <div className="flex items-center gap-3 mb-2">
                    <span
                      className="text-[10px] font-mono tracking-[0.22em] uppercase text-white/35"
                      style={{ fontFamily: "var(--font-jakarta)" }}
                    >
                      {item.year}
                    </span>
                    <span
                      className="text-[9px] font-bold tracking-[0.2em] uppercase px-2 py-0.5 rounded-full border border-white/15 text-white/50"
                      style={{ fontFamily: "var(--font-jakarta)" }}
                    >
                      {TYPE_LABEL[item.type]}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className="text-xl sm:text-2xl font-bold text-[#F2EFE9] mb-1 leading-tight"
                    style={{ fontFamily: "var(--font-anton)", letterSpacing: "0.01em" }}
                  >
                    {item.title}
                  </h3>

                  {/* Sub */}
                  <p
                    className="text-sm text-white/40 mb-4"
                    style={{ fontFamily: "var(--font-jakarta)" }}
                  >
                    {item.sub}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-medium tracking-wider uppercase px-3 py-1 border border-white/10 text-white/50 rounded-full"
                        style={{ fontFamily: "var(--font-jakarta)" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Bottom hairline */}
                  {i < TIMELINE.length - 1 && (
                    <div className="mt-10 h-px bg-white/[0.07]" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
