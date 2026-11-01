'use client';

import { ArrowUpRight, Mail, ArrowRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/Icons/SocialIcons';

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'Work', href: '#projects' },
  { name: 'Services', href: '#services' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Process', href: '#process' },
  { name: 'Contact', href: '#contact' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#090809] text-[#F6EFE6] border-t border-white/[0.08] pt-16 pb-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-white/[0.08]">
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-sm bg-white text-[#090809] font-mono text-sm font-bold tracking-tight">
                SS
              </div>
              <span className="text-base font-bold tracking-tight text-white">
                SIDDHARTH SINGH
              </span>
            </div>

            <p className="mt-2 text-xs font-mono tracking-widest uppercase text-[#D7A66D]">
              STUDENT + FULL STACK DEVELOPER
            </p>

            <p className="mt-4 text-xs text-white/50 leading-relaxed max-w-sm">
              Engineering performant, accessible, and resilient web products from Patna, Bihar to teams worldwide.
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="lg:col-span-3">
            <p className="text-[11px] font-mono uppercase tracking-[0.24em] text-white/40 font-semibold mb-4">
              Navigation
            </p>
            <ul className="grid grid-cols-2 gap-2 text-xs text-white/70">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Social & Follow */}
          <div className="lg:col-span-2">
            <p className="text-[11px] font-mono uppercase tracking-[0.24em] text-white/40 font-semibold mb-4">
              Connect
            </p>
            <ul className="space-y-2 text-xs text-white/70">
              <li>
                <a
                  href="https://github.com/Siddharthsingh637"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <GithubIcon size={13} />
                  <span>GitHub</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/siddharth637"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <LinkedinIcon size={13} />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:siddharthsingh.6217@gmail.com"
                  className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <Mail size={13} />
                  <span>Email</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Quick Inquiries */}
          <div className="lg:col-span-3">
            <p className="text-[11px] font-mono uppercase tracking-[0.24em] text-white/40 font-semibold mb-4">
              Direct Contact
            </p>
            <p className="text-xs text-white/50 leading-relaxed mb-3">
              Open for full-time software engineering roles and production contracts.
            </p>
            <a
              href="mailto:siddharthsingh.6217@gmail.com"
              className="inline-flex items-center gap-2 rounded-sm bg-[#8F2A24] text-white px-4 py-2 text-xs font-semibold uppercase tracking-wider hover:bg-[#8F2A24]/90 transition-colors"
            >
              <span>Get In Touch</span>
              <ArrowRight size={13} />
            </a>
          </div>
        </div>

        {/* Bottom Bar: Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40 font-mono">
          <p>© {currentYear} Siddharth Singh. All rights reserved.</p>
          <p>Built with Next.js, React &amp; Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}
