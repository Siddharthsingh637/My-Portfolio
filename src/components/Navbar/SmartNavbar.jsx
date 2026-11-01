'use client';

import { useState, useEffect } from 'react';
import { Mail, Menu, X } from 'lucide-react';

const GithubLogo = ({ size = 17 }) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="currentColor"
  >
    <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.09.68-.22.68-.49 0-.24-.01-1.04-.01-1.88-2.78.62-3.37-1.22-3.37-1.22-.45-1.19-1.11-1.51-1.11-1.51-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.93.86.09-.67.35-1.12.64-1.38-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 6.99c.85 0 1.7.12 2.5.34 1.9-1.33 2.74-1.05 2.74-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.8 0 .27.18.59.69.49A10.13 10.13 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
  </svg>
);

const LinkedinLogo = ({ size = 17 }) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="currentColor"
  >
    <path d="M6.94 8.98H3.72v10.26h3.22V8.98ZM5.33 4a1.87 1.87 0 1 0 0 3.74 1.87 1.87 0 0 0 0-3.74Zm13.95 9.55c0-3.09-1.65-4.52-3.86-4.52-1.78 0-2.58.98-3.02 1.67V8.98H9.31v10.26h3.22v-5.07c0-1.34.25-2.64 1.91-2.64 1.64 0 1.66 1.53 1.66 2.73v4.98h3.18v-5.69Z" />
  </svg>
);

const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/Siddharthsingh637',
    Icon: GithubLogo,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/siddharth637',
    Icon: LinkedinLogo,
  },
  {
    label: 'Gmail',
    href: 'mailto:siddharthsingh.6217@gmail.com',
    Icon: Mail,
  },
];

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const SmartNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isPastHero, setIsPastHero] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const heroSection = document.getElementById('hero');
      
      if (heroSection) {
        const heroHeight = heroSection.offsetHeight;
        const scrollProgress = currentScrollY / heroHeight;
        
        // Change navbar style when past hero
        setIsPastHero(scrollProgress > 0.1);
        
        // Hide/show navbar logic
        if (currentScrollY < 100) {
          setIsVisible(true);
        } else if (scrollProgress > 0.9) {
          // Only hide when very far past hero and scrolling down
          setIsVisible(currentScrollY < lastScrollY);
        } else {
          setIsVisible(true);
        }
      }
      
      setLastScrollY(currentScrollY);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const headerClass = isPastHero
    ? 'fixed top-0 left-0 right-0 z-50 w-full border-b border-stone-950/10 bg-[var(--color-ivory)]/95 text-stone-950 shadow-lg backdrop-blur-xl'
    : 'fixed top-0 left-0 right-0 z-50 w-full border-b border-white/10 bg-black/30 text-[var(--color-ivory)] backdrop-blur-xl';

  const linkClasses = isPastHero
    ? 'text-stone-700 hover:text-[var(--color-red)]'
    : 'text-neutral-300 hover:text-white';

  const logoTone = isPastHero ? 'text-stone-950' : 'text-white';
  const dotTone = isPastHero ? 'text-[var(--color-red)]' : 'text-[#b54841]';
  const socialClasses = isPastHero
    ? 'border-stone-950/10 text-stone-700 hover:border-[var(--color-red)]/30 hover:bg-[var(--color-red)] hover:text-white'
    : 'border-white/12 text-[rgba(246,239,230,0.72)] hover:border-white/25 hover:bg-white/10 hover:text-white';
  const mobileSurface = isPastHero
    ? 'border-t border-stone-950/10 bg-[var(--color-ivory)]'
    : 'border-t border-white/10 bg-black/85';

  return (
    <header
      className={`transition-all duration-500 ${headerClass} ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a 
          href="#hero" 
          className={`text-lg font-semibold uppercase tracking-wider transition-all duration-300 ${logoTone} hover:scale-105`}
        >
          Siddharth<span className={`${dotTone} font-bold`}>.</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`group relative text-sm font-medium uppercase tracking-wide transition-all duration-300 ${linkClasses} hover:scale-105`}
            >
              {link.name}
              <span
                className={`absolute -bottom-2 left-0 h-0.5 w-full origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100 ${
                  isPastHero ? 'bg-[var(--color-red)]' : 'bg-white/75'
                }`}
              />
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          {socialLinks.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noreferrer' : undefined}
              className={`inline-flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 hover:scale-110 hover:shadow-lg ${socialClasses}`}
            >
              <Icon size={17} />
            </a>
          ))}
        </div>

        <button
          className={`md:hidden transition-transform duration-200 hover:scale-110 ${logoTone}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <div
        className={`overflow-hidden transition-all duration-500 md:hidden ${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className={`px-6 py-6 backdrop-blur-xl ${mobileSurface}`}>
          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium uppercase tracking-wide transition-all duration-200 hover:translate-x-2 ${linkClasses}`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}

            <div className="mt-4 flex items-center gap-4">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noreferrer' : undefined}
                  className={`inline-flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-300 hover:scale-110 ${socialClasses}`}
                  onClick={() => setIsOpen(false)}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default SmartNavbar;