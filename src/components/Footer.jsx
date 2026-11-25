"use client";

const NAV_COLS = [
  {
    heading: "Navigate",
    links: [
      { label: "About", href: "#about" },
      { label: "Education", href: "#education" },
      { label: "Projects", href: "#projects" },
      { label: "Services", href: "#services" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    heading: "Socials",
    links: [
      { label: "GitHub", href: "https://github.com/Siddharthsingh637", external: true },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/siddharth637", external: true },
      { label: "Email", href: "mailto:siddharthsingh.6217@gmail.com" },
    ],
  },
  {
    heading: "Work",
    links: [
      { label: "Services", href: "#services" },
      { label: "Resume", href: "/siddharth-resume.pdf", external: true },
    ],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative bg-[#0A0A0A] text-[#F2EFE9] overflow-hidden"
    >
      {/* Top hairline */}
      <div className="absolute top-0 left-0 right-0 h-px bg-white/10" />

      {/* Quick links grid */}
      <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24 pt-20 pb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand column */}
          <div>
            <p
              className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-white"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Siddharth<span className="text-[var(--accent-red)]">.</span>
            </p>
            <p
              className="text-[11px] text-white/35 leading-relaxed"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Full-Stack Developer &amp; Freelancer.
              <br />
              Available for remote projects.
              <br />
              Patna, India.
            </p>
          </div>

          {/* Nav Columns */}
          {NAV_COLS.map((col) => (
            <div key={col.heading}>
              <p
                className="mb-4 text-[10px] font-semibold uppercase tracking-[0.26em] text-[var(--accent-red)]"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                {col.heading}
              </p>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="text-xs text-white/50 transition-colors duration-200 hover:text-[var(--accent-red)]"
                      style={{ fontFamily: "var(--font-jakarta)" }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-6 border-t border-white/[0.07] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p
            className="text-[11px] text-white/25 font-mono"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            © {year} Siddharth Singh — All rights reserved.
          </p>
          <p
            className="text-[11px] text-white/25 font-mono"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            Built with Next.js, Lenis &amp; GSAP.
          </p>
        </div>
      </div>

      {/* Full-bleed Hollow Giant Typography */}
      <div
        className="w-full overflow-hidden select-none pb-0 leading-none"
        aria-hidden="true"
      >
        <p
          className="hollow-text text-center w-full px-2 pb-0"
          style={{
            fontFamily: "var(--font-anton)",
            fontSize: "clamp(5rem, 18vw, 18rem)",
            lineHeight: "0.78",
          }}
        >
          SIDDHARTH
        </p>
      </div>
    </footer>
  );
}
