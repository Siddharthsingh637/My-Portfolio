'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, GitBranch, ArrowRight } from 'lucide-react';

const projects = [
  {
    id: '01',
    title: 'Multi-College Platform',
    category: 'Educational Platform',
    tech: 'React • Node.js • WebRTC',
    image:
      'https://ik.imagekit.io/siddharth637/portfolio/Gemini_Generated_Image_6t33ya6t33ya6t33.png?updatedAt=1783941866584',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example',
  },
  {
    id: '02',
    title: 'Smart Admin Dashboard',
    category: 'Institutional SaaS',
    tech: 'Next.js • Express • MySQL',
    image:
      'https://ik.imagekit.io/siddharth637/portfolio/Gemini_Generated_Image_ldzv5yldzv5yldzv%20(1).png?updatedAt=1783941866585',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example',
  },
  {
    id: '03',
    title: 'Modern E-Commerce',
    category: 'Commerce Platform',
    tech: 'React • Express • Stripe',
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example',
  },
  {
    id: '04',
    title: 'Collaborative Code Editor',
    category: 'Developer Tooling',
    tech: 'Socket.io • Monaco • Docker',
    image:
      'https://ik.imagekit.io/siddharth637/portfolio/Gemini_Generated_Image_ats4frats4frats4.png?updatedAt=1783941866605',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 lg:py-28 bg-[var(--color-ivory)] border-t border-black/[0.06]">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-[0.28em] text-[#8F2A24] font-semibold">
              Selected Work
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-[#181311]">
              FEATURED WORK
            </h2>
          </div>

          <a
            href="https://github.com/Siddharthsingh637"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-600 hover:text-[#8F2A24] transition-colors"
          >
            <span>View All Projects</span>
            <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </div>

        {/* 4-Card Responsive Grid matching Reference */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, idx) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group flex flex-col justify-between rounded-md bg-[#EFE8DE]/60 border border-black/[0.06] p-3 transition-all duration-300 hover:bg-[#EAE1D5] hover:border-black/[0.12] hover:shadow-sm"
            >
              {/* Media Preview Box */}
              <div className="relative aspect-[16/11] w-full overflow-hidden rounded-[4px] bg-[#141113]">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover opacity-90 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-300" />

                {/* Top Corner Badge */}
                <div className="absolute top-2.5 right-2.5">
                  <span className="text-[10px] font-mono font-bold tracking-wider px-2 py-0.5 rounded-sm bg-black/60 text-white backdrop-blur-sm">
                    {project.id}
                  </span>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="pt-4 pb-2 px-1 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-sm sm:text-base font-bold tracking-tight text-[#181311] group-hover:text-[#8F2A24] transition-colors line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-xs text-stone-500 font-medium">
                    {project.category}
                  </p>
                  <p className="mt-0.5 text-[11px] font-mono text-stone-400">
                    {project.tech}
                  </p>
                </div>

                {/* Minimal Link Strip */}
                <div className="mt-4 pt-3 border-t border-black/[0.06] flex items-center justify-between">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-700 hover:text-[#8F2A24] transition-colors"
                  >
                    <span>Explore</span>
                    <ArrowUpRight size={13} />
                  </a>

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub Repository"
                      className="text-stone-400 hover:text-stone-800 transition-colors p-1"
                    >
                      <GitBranch size={14} />
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}