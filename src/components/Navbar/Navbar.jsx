'use client';

import { useState, useEffect } from 'react';
import { Mail, Menu, X, ArrowUpRight } from 'lucide-react';
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

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#F6EFE6]/90 backdrop-blur-md border-b border-black/[0.08] shadow-[0_4px_20px_rgba(0,0,0,0.03)]'
          : 'bg-[#F6EFE6]/70 backdrop-blur-sm border-b border-black/[0.04]'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-10">
        {/* Brand Logo */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-sm bg-[#181311] text-[#F6EFE6] font-mono text-sm font-bold tracking-tight transition-transform duration-300 group-hover:scale-105">
            SS
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold tracking-tight text-[#181311] leading-none">
              SIDDHARTH SINGH
            </span>
            <span className="text-[10px] font-mono tracking-widest text-[#8F2A24] uppercase mt-0.5">
              Full Stack Dev
            </span>
          </div>
        </a>

        {/* Center Nav Links */}
        <nav className="hidden md:flex items-center gap-7 text-xs font-semibold uppercase tracking-wider text-stone-600">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="transition-colors duration-200 hover:text-[#8F2A24] relative py-1"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#181311] text-[#F6EFE6] px-5 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-300 hover:bg-[#8F2A24] hover:shadow-md hover:shadow-[#8F2A24]/20"
          >
            <span>Let&apos;s Talk</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex h-9 w-9 items-center justify-center rounded-sm border border-black/10 text-stone-800"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-black/10 bg-[#F6EFE6] px-6 py-5 shadow-xl animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold uppercase tracking-wider text-stone-800 hover:text-[#8F2A24] py-1.5"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 border-t border-black/10 flex items-center justify-between">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center gap-2 rounded-full bg-[#8F2A24] text-white px-5 py-2.5 text-xs font-semibold uppercase tracking-wider"
              >
                <span>Let&apos;s Talk</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/Siddharthsingh637"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-700 hover:text-black p-1"
                >
                  <GithubIcon size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/siddharth637"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-700 hover:text-black p-1"
                >
                  <LinkedinIcon size={18} />
                </a>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
