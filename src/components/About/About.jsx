'use client';

import { motion } from 'framer-motion';
import { Terminal, Shield, Zap, Sparkles } from 'lucide-react';

const pillars = [
  {
    icon: Zap,
    title: 'Speed & Polish',
    desc: 'Interfaces optimized for fast load times and clean 60fps interaction.',
  },
  {
    icon: Terminal,
    title: 'Full-Stack Depth',
    desc: 'From React and Next.js to robust Express, Node.js, and SQL backends.',
  },
  {
    icon: Shield,
    title: 'Reliability',
    desc: 'Clean architecture, maintainable modular code, and thoughtful error handling.',
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-black/[0.06] bg-[var(--color-ivory)] py-20 lg:py-28 text-[var(--foreground)]"
    >
      <div className="light-grid absolute inset-0 opacity-[0.14] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading */}
          <div className="lg:col-span-5">
            <span className="text-[11px] font-mono uppercase tracking-[0.28em] text-[#8F2A24] font-semibold">
              Background & Vision
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#181311] leading-tight">
              Learning fast, building steadily, and growing through real work.
            </h2>

            <div className="mt-8 p-5 rounded-md bg-[#EFE8DE]/60 border border-black/[0.06]">
              <div className="flex items-center gap-2 text-xs font-mono text-[#8F2A24] font-semibold uppercase">
                <Sparkles size={13} />
                <span>Current Focus</span>
              </div>
              <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                Pursuing B.Tech CSE (2023–2027) while shipping production code at Palisati Web Resources and sharpening full-stack systems.
              </p>
            </div>
          </div>

          {/* Right Column: Narrative & Pillars */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="space-y-5 text-sm sm:text-base leading-relaxed text-stone-700">
              <p>
                I&apos;m currently pursuing a B.Tech in Computer Science while building practical engineering experience through real-world internships and independent projects. My strongest focus is on web applications that feel intuitive from the first interaction.
              </p>
              <p>
                Alongside React, Next.js, and Tailwind, I build backend architectures with Node.js and Express, integrate RESTful APIs, manage relational and document databases, and explore modern AI-assisted workflows to accelerate delivery without sacrificing rigor.
              </p>
            </div>

            {/* 3 Pillars Grid */}
            <div className="mt-10 pt-8 border-t border-black/[0.06] grid grid-cols-1 sm:grid-cols-3 gap-5">
              {pillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div key={pillar.title} className="p-4 rounded-md bg-[#EFE8DE]/40 border border-black/[0.05]">
                    <Icon size={18} className="text-[#8F2A24] mb-2" />
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#181311]">
                      {pillar.title}
                    </h3>
                    <p className="text-[11px] text-stone-500 mt-1 leading-normal">
                      {pillar.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
