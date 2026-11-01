'use client';

import { motion } from 'framer-motion';
import { Layers, Briefcase, Code, Award } from 'lucide-react';

const stats = [
  {
    icon: Layers,
    value: '4+',
    label: 'MAJOR PROJECTS BUILT',
  },
  {
    icon: Briefcase,
    value: '2+',
    label: 'PRODUCTION INTERNSHIPS',
  },
  {
    icon: Code,
    value: '20+',
    label: 'LIBRARIES & FRAMEWORKS',
  },
  {
    icon: Award,
    value: '100%',
    label: 'CODE COMMITMENT & AUDIT',
  },
];

export default function Stats() {
  return (
    <section className="bg-[#8F2A24] text-white py-10 border-y border-black/[0.08]">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="flex items-center gap-4"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm bg-white/10 text-white border border-white/15">
                  <Icon size={20} />
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-bold font-mono tracking-tight text-white leading-none">
                    {stat.value}
                  </p>
                  <p className="text-[10px] sm:text-[11px] font-mono tracking-wider uppercase text-white/80 mt-1">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
