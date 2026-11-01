'use client';

import { motion } from 'framer-motion';
import { Search, Compass, Code, ShieldCheck, Rocket } from 'lucide-react';

const steps = [
  {
    number: '01',
    name: 'DISCOVER',
    icon: Search,
    desc: 'Auditing product goals, user journeys, technical constraints, and data architecture.',
  },
  {
    number: '02',
    name: 'ARCHITECT',
    icon: Compass,
    desc: 'Defining schema contracts, API endpoints, state flow, and component design patterns.',
  },
  {
    number: '03',
    name: 'DEVELOP',
    icon: Code,
    desc: 'Building responsive frontend interfaces and robust backend logic with type-safety.',
  },
  {
    number: '04',
    name: 'AUDIT',
    icon: ShieldCheck,
    desc: 'Profiling Core Web Vitals, cross-browser responsiveness, security, and edge cases.',
  },
  {
    number: '05',
    name: 'DELIVER',
    icon: Rocket,
    desc: 'Automated CI/CD deployment to cloud environments with live monitoring and documentation.',
  },
];

export default function Process() {
  return (
    <section id="process" className="py-20 lg:py-28 bg-[var(--color-ivory)] border-t border-black/[0.06] overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-[0.28em] text-[#8F2A24] font-semibold">
              Methodology
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-[#181311]">
              MY PROCESS
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-stone-500 font-mono">
            A clear, predictable roadmap from concept to deployment.
          </p>
        </div>

        {/* 5-Step Process Timeline Cards */}
        <div className="relative">
          {/* Connector Line across top */}
          <div className="hidden lg:block absolute top-7 left-8 right-8 h-px bg-black/[0.08] z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group rounded-md border border-black/[0.06] bg-[#EFE8DE]/60 p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 hover:bg-[#EAE1D5] hover:border-black/[0.12] hover:shadow-sm"
                >
                  <div>
                    {/* Step Icon & Number */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-white border border-black/[0.06] text-[#8F2A24] transition-colors duration-300 group-hover:bg-[#8F2A24] group-hover:text-white">
                        <Icon size={18} />
                      </div>
                      <span className="text-xs font-mono font-bold text-stone-400">
                        {step.number}
                      </span>
                    </div>

                    <h3 className="text-sm font-bold tracking-wider uppercase text-[#181311] font-mono">
                      {step.name}
                    </h3>

                    <p className="mt-2 text-xs text-stone-600 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-3 border-t border-black/[0.04] flex items-center justify-between text-[10px] font-mono text-stone-400">
                    <span>STAGE {step.number}</span>
                    <span className="text-[#8F2A24] opacity-0 group-hover:opacity-100 transition-opacity">
                      ACTIVE →
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
