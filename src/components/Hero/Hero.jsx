'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Compass, Globe, Mail, FileText, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/Icons/SocialIcons';

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/Siddharthsingh637', Icon: GithubIcon },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/siddharth637', Icon: LinkedinIcon },
  { name: 'Email', href: 'mailto:siddharthsingh.6217@gmail.com', Icon: Mail },
  { name: 'Resume', href: '/siddharth-resume.pdf', Icon: FileText },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full bg-[var(--color-ivory)] pt-24 pb-16 overflow-hidden flex items-center"
    >
      {/* Subtle Background Grid & Gradients */}
      <div className="light-grid pointer-events-none absolute inset-0 opacity-[0.16]" />
      <div className="pointer-events-none absolute -top-40 right-10 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(143,42,36,0.08)_0%,transparent_70%)] blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-10 w-[420px] h-[420px] rounded-full bg-[radial-gradient(circle,rgba(215,166,109,0.08)_0%,transparent_70%)] blur-3xl" />

      {/* Left Rotated Margin Tag */}
      <div className="hidden xl:flex absolute left-8 top-1/2 -translate-y-1/2 -rotate-90 origin-left items-center gap-3 select-none pointer-events-none">
        <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-stone-400">
          BUILDING FOR THE WEB · ENGINEERED FOR CLARITY
        </span>
        <div className="w-8 h-px bg-stone-300" />
      </div>

      {/* Right Floating Social Dock */}
      <div className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 z-40 flex-col items-center gap-4 bg-[#F6EFE6]/80 backdrop-blur-md p-2.5 rounded-full border border-black/[0.06] shadow-sm">
        {socialLinks.map(({ name, href, Icon }) => (
          <a
            key={name}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={name}
            className="flex h-8 w-8 items-center justify-center rounded-full text-stone-600 transition-all duration-200 hover:bg-[#8F2A24] hover:text-white"
          >
            <Icon size={15} />
          </a>
        ))}
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Heading, Bio, CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left pt-4">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 mb-3"
            >
              <span className="text-sm font-medium text-stone-500 font-sans">
                Hello, I&apos;m
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.2rem] font-bold tracking-[-0.03em] text-[#181311] leading-[1.02]"
            >
              SIDDHARTH <span className="text-[#8F2A24]">SINGH</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-3 text-xs sm:text-sm font-mono tracking-[0.24em] uppercase text-stone-600 font-semibold"
            >
              STUDENT + FULL STACK DEVELOPER
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-6 max-w-xl text-base sm:text-lg text-stone-600 leading-relaxed font-normal"
            >
              I design and engineer digital experiences that combine technical depth,
              resilient backend architectures, and human-centered user interfaces.
            </motion.p>

            {/* CTA Button Row */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2.5 rounded-full bg-[#8F2A24] text-white px-7 py-3.5 text-xs font-semibold uppercase tracking-wider transition-all duration-300 hover:bg-[#8F2A24]/90 hover:shadow-lg hover:shadow-[#8F2A24]/20 hover:-translate-y-0.5"
              >
                <span>View My Work</span>
                <ArrowRight size={15} />
              </a>

              <a
                href="#about"
                className="inline-flex items-center gap-2 rounded-full border border-black/15 bg-white/40 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-stone-800 backdrop-blur-sm transition-all duration-300 hover:border-black/30 hover:bg-white/80 hover:-translate-y-0.5"
              >
                <span>About Me</span>
                <span className="flex h-4 w-4 items-center justify-center rounded-full border border-current text-[9px]">
                  ⊙
                </span>
              </a>
            </motion.div>

            {/* Social Proof / Status Stack */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-12 pt-8 border-t border-black/[0.08] w-full max-w-lg flex flex-col sm:flex-row sm:items-center gap-4"
            >
              <div>
                <span className="inline-flex items-center gap-2 text-[11px] font-mono tracking-wider uppercase text-emerald-700 font-semibold">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  Available For Projects
                </span>
                <p className="text-xs text-stone-500 mt-1">
                  Trusted by forward-thinking teams & peers worldwide.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Concentric HUD Radar & Profile Graphic */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-[340px] sm:w-[420px] lg:w-[460px] aspect-square flex items-center justify-center"
            >
              {/* Outer HUD Rings */}
              <div className="absolute inset-0 rounded-full border border-black/[0.08]" />
              <div className="absolute inset-6 rounded-full border border-dashed border-[#8F2A24]/20 animate-[spin_60s_linear_infinite]" />
              <div className="absolute inset-12 rounded-full border border-black/[0.06]" />

              {/* Radar Tick Crosshairs */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-full h-px bg-gradient-to-r from-transparent via-black/[0.06] to-transparent" />
                <div className="absolute h-full w-px bg-gradient-to-b from-transparent via-black/[0.06] to-transparent" />
              </div>

              {/* Central Profile Portal */}
              <div className="relative w-[240px] sm:w-[280px] lg:w-[310px] aspect-square rounded-full overflow-hidden border-2 border-black/[0.08] shadow-[0_20px_50px_rgba(24,19,17,0.12)] bg-[#E8E2D8]">
                {/* Styled Developer Graphic / Portrait */}
                <div className="w-full h-full relative flex items-center justify-center bg-gradient-to-b from-[#FAF7F2] to-[#E5DDD2]">
                  {/* Subtle Tech Grid inside portal */}
                  <div className="absolute inset-0 opacity-[0.2] bg-[radial-gradient(circle_at_center,#181311_1px,transparent_1px)] bg-[size:16px_16px]" />

                  {/* Monogram Silhouette Visual */}
                  <div className="relative z-10 flex flex-col items-center justify-center text-center p-6">
                    <div className="w-24 h-24 rounded-full bg-[#181311] text-[#F6EFE6] flex items-center justify-center font-mono text-4xl font-bold tracking-tight shadow-md border-2 border-[#8F2A24]/40 mb-3">
                      SS
                    </div>
                    <span className="text-sm font-bold tracking-tight text-[#181311]">
                      Siddharth Singh
                    </span>
                    <span className="text-[11px] font-mono tracking-widest uppercase text-[#8F2A24] mt-0.5">
                      Full-Stack Dev
                    </span>
                  </div>

                  {/* Rim light effect */}
                  <div className="absolute inset-0 rounded-full border border-white/40 pointer-events-none" />
                </div>
              </div>

              {/* Floating HUD Pill 1: Location */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-2 right-4 sm:right-6 bg-white/90 backdrop-blur-md rounded-md border border-black/[0.08] px-3.5 py-2 shadow-sm text-left"
              >
                <div className="flex items-center gap-1.5 text-[9px] font-mono tracking-widest text-stone-400 uppercase">
                  <Compass size={11} className="text-[#8F2A24]" />
                  <span>BASED IN</span>
                </div>
                <p className="text-xs font-bold text-stone-800 mt-0.5">
                  Patna, Bihar, India
                </p>
              </motion.div>

              {/* Floating HUD Pill 2: Worldwide Availability */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -bottom-2 right-8 sm:right-12 bg-white/90 backdrop-blur-md rounded-md border border-black/[0.08] px-3.5 py-2 shadow-sm text-left"
              >
                <div className="flex items-center gap-1.5 text-[9px] font-mono tracking-widest text-stone-400 uppercase">
                  <Globe size={11} className="text-[#D7A66D]" />
                  <span>REMOTE</span>
                </div>
                <p className="text-xs font-bold text-stone-800 mt-0.5">
                  Available Worldwide
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
