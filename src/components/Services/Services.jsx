'use client';

import { motion } from 'framer-motion';
import { Layers, Code2, Database, Rocket } from 'lucide-react';

const services = [
  {
    icon: Layers,
    title: 'Frontend Engineering',
    desc: 'Crafting responsive, intuitive, and accessible web experiences with Next.js, React, and modern CSS.',
  },
  {
    icon: Code2,
    title: 'Full-Stack Systems',
    desc: 'End-to-end full-stack architectures connecting clean client interfaces with resilient Node & Express APIs.',
  },
  {
    icon: Database,
    title: 'APIs & Databases',
    desc: 'Designing scalable schemas, REST endpoints, and authentication with PostgreSQL, MySQL, and MongoDB.',
  },
  {
    icon: Rocket,
    title: 'Production Delivery',
    desc: 'From concept to deployment — automated CI/CD, Docker containers, performance tuning, and clean code.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-[var(--color-ivory)] border-t border-black/[0.06]">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Heading */}
          <div className="lg:col-span-4">
            <span className="text-[11px] font-mono uppercase tracking-[0.28em] text-[#8F2A24] font-semibold">
              What I Do
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#181311] leading-tight">
              Design. Build. Scale.
            </h2>
            <p className="mt-4 text-sm sm:text-base text-stone-600 leading-relaxed max-w-md">
              End-to-end full-stack development and engineering solutions tailored to modern platforms and ambitious teams.
            </p>
          </div>

          {/* Right Column: 4 Cards */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="group rounded-md border border-black/[0.06] bg-[#EFE8DE]/50 p-6 transition-all duration-300 hover:bg-[#EAE1D5] hover:border-black/[0.12] hover:shadow-sm"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-sm bg-white border border-black/[0.06] text-[#8F2A24] transition-colors duration-300 group-hover:bg-[#8F2A24] group-hover:text-white">
                    <Icon size={20} />
                  </div>
                  <h3 className="mt-4 text-base font-bold text-[#181311]">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {service.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
