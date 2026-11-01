'use client';

import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award, Quote, CheckCircle2 } from 'lucide-react';

const organizations = [
  {
    name: 'Palisati Web Resources',
    role: 'Full Stack Developer Intern',
    period: '2025 — Present',
    type: 'Current Role',
  },
  {
    name: 'Reviving India',
    role: 'Frontend Developer Intern',
    period: 'March 2025 — August 2025',
    type: 'Internship',
  },
  {
    name: 'R.P. Sharma Institute of Tech',
    role: 'B.Tech in Computer Science',
    period: '2023 — 2027 · CGPA 7.2',
    type: 'Education',
  },
];

const certificates = [
  { title: 'Full Stack Web Development', issuer: 'Professional Certificate', year: '2024' },
  { title: 'React — The Complete Guide', issuer: 'Udemy', year: '2024' },
  { title: 'JavaScript (ES6+)', issuer: 'HackerRank', year: '2024' },
  { title: 'Node.js Backend Development', issuer: 'Coursera', year: '2024' },
  { title: 'Responsive Web Design', issuer: 'freeCodeCamp', year: '2023' },
  { title: 'Problem Solving (Basic)', issuer: 'HackerRank', year: '2023' },
  { title: 'Git & GitHub Essentials', issuer: 'LinkedIn Learning', year: '2023' },
  { title: 'Python for Everybody', issuer: 'Coursera', year: '2023' },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 lg:py-28 bg-[var(--color-ivory)] border-t border-black/[0.06]">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* 3-Column Layout matching Reference */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Column 1: Organizations / Experience List */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-[0.28em] text-[#8F2A24] font-semibold">
                Credibility
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-[#181311]">
                Experience & Education
              </h2>
              <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed">
                Hands-on production internships, real-world team collaboration, and ongoing engineering degree.
              </p>
            </div>

            <div className="mt-6 space-y-3">
              {organizations.map((org) => (
                <div
                  key={org.name}
                  className="rounded-md border border-black/[0.06] bg-[#EFE8DE]/50 p-4 transition-all duration-200 hover:bg-[#EAE1D5]"
                >
                  <div className="flex items-center justify-between text-[11px] font-mono text-stone-500">
                    <span className="text-[#8F2A24] font-semibold uppercase">{org.type}</span>
                    <span>{org.period}</span>
                  </div>
                  <h3 className="mt-1 text-sm font-bold text-[#181311]">{org.name}</h3>
                  <p className="text-xs text-stone-600 mt-0.5">{org.role}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Center Featured Quote / Philosophy Card (Warm Muted Tone) */}
          <div className="lg:col-span-5 rounded-md bg-[#8F2A24]/[0.08] border border-[#8F2A24]/20 p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden">
            <Quote className="text-[#8F2A24]/30 w-12 h-12 mb-4" />

            <div className="relative z-10">
              <blockquote className="text-base sm:text-lg font-medium leading-relaxed text-[#181311]">
                &ldquo;Engineering great web experiences isn&apos;t just about writing code; it&apos;s about architectural clarity, sub-second performance, and interfaces that feel effortless to touch.&rdquo;
              </blockquote>
            </div>

            <div className="mt-8 pt-6 border-t border-[#8F2A24]/15 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-[#181311] text-[#F6EFE6] font-mono font-bold flex items-center justify-center text-xs">
                  SS
                </div>
                <div>
                  <p className="text-sm font-bold text-[#181311]">Siddharth Singh</p>
                  <p className="text-xs text-stone-500 font-mono">Full Stack Engineer · B.Tech CSE</p>
                </div>
              </div>

              {/* Decorative Pagination Dots */}
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#8F2A24]" />
                <span className="w-1.5 h-1.5 rounded-full bg-stone-300" />
                <span className="w-1.5 h-1.5 rounded-full bg-stone-300" />
              </div>
            </div>
          </div>

          {/* Column 3: Quality Metric Card */}
          <div className="lg:col-span-3 rounded-md border border-black/[0.06] bg-[#EFE8DE]/50 p-8 flex flex-col items-center justify-center text-center">
            <span className="text-[11px] font-mono uppercase tracking-[0.22em] text-stone-500 font-semibold">
              Quality & Delivery
            </span>

            {/* Circular Metric Meter */}
            <div className="relative my-7 flex items-center justify-center w-28 h-28">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="42"
                  fill="transparent"
                  stroke="rgba(0,0,0,0.06)"
                  strokeWidth="8"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="42"
                  fill="transparent"
                  stroke="#8F2A24"
                  strokeWidth="8"
                  strokeDasharray="264"
                  strokeDashoffset="26"
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute flex flex-col items-center justify-center">
                <span className="text-2xl font-bold font-mono text-[#181311]">100%</span>
                <span className="text-[9px] font-mono text-stone-500 uppercase tracking-widest">Commit</span>
              </div>
            </div>

            <p className="text-xs font-mono uppercase tracking-wider text-stone-500">
              Verified Production Uptime & Performance Audits
            </p>
          </div>
        </div>

        {/* Certifications Marquee below */}
        <div className="mt-14 pt-10 border-t border-black/[0.06]">
          <div className="flex items-center gap-2 mb-4">
            <Award size={14} className="text-[#8F2A24]" />
            <span className="text-[11px] font-mono uppercase tracking-[0.24em] text-stone-500 font-semibold">
              Verified Credentials & Certifications
            </span>
          </div>

          <div className="cert-marquee">
            <div className="cert-track">
              {certificates.concat(certificates).map((cert, index) => (
                <div
                  key={`${cert.title}-${index}`}
                  className="inline-flex items-center gap-3 rounded-sm border border-black/[0.06] bg-[#EFE8DE]/60 px-4 py-2.5 text-xs text-[#181311]"
                >
                  <CheckCircle2 size={13} className="text-[#8F2A24]" />
                  <span className="font-semibold">{cert.title}</span>
                  <span className="text-stone-400 font-mono">• {cert.issuer}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
