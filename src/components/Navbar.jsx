"use client";

import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const trigger = ScrollTrigger.create({
      trigger: "#about",
      start: "top 90%",
      onEnter: () => setVisible(true),
      onLeaveBack: () => {
        setVisible(false);
        setOpen(false);
      },
    });
    return () => trigger.kill();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-[100] transition-all duration-500"
        style={{
          opacity: visible ? 1 : 0,
          pointerEvents: visible ? "all" : "none",
          transform: visible ? "translateY(0)" : "translateY(-12px)",
        }}
      >
        <div
          className={`mx-auto flex items-center justify-between px-6 py-4 md:px-10 transition-colors duration-300 ${
            open ? "bg-transparent" : "bg-[#0A0A0A]/70 backdrop-blur-md"
          }`}
        >
          <a
            href="#hero"
            onClick={closeMenu}
            className="relative z-[110] text-[13px] uppercase tracking-[0.28em] text-[#F2EFE9]"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            Siddharth
            <span className="text-[var(--accent-red)]">.</span>
          </a>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((prev) => !prev)}
            className="relative z-[110] flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-white/[0.03] transition duration-300 hover:border-[var(--accent-red)]/50 hover:bg-[var(--accent-red-soft)]"
          >
            <span className="sr-only">{open ? "Close" : "Menu"}</span>
            <span className="relative flex h-3 w-4 flex-col justify-between">
              <span
                className={`block h-px w-full origin-center bg-[#F2EFE9] transition duration-300 ${
                  open ? "translate-y-[5.5px] rotate-45" : ""
                }`}
              />
              <span
                className={`block h-px w-full bg-[#F2EFE9] transition duration-300 ${
                  open ? "scale-x-0 opacity-0" : ""
                }`}
              />
              <span
                className={`block h-px w-full origin-center bg-[#F2EFE9] transition duration-300 ${
                  open ? "-translate-y-[5.5px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-[90] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          open && visible
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!open}
      >
        <div className="absolute inset-0 bg-[#080707]" />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 80% -10%, rgba(122,31,31,0.28), transparent 55%), radial-gradient(ellipse 50% 40% at 10% 100%, rgba(122,31,31,0.12), transparent 50%)",
          }}
        />
        <div className="grain-overlay opacity-[0.05]" aria-hidden="true" />

        <div className="relative z-[1] mx-auto flex h-full max-w-5xl flex-col justify-between px-6 pb-10 pt-28 md:px-10">
          <div>
            <div className="mb-10 flex items-center gap-3">
              <span className="accent-dot" />
              <p
                className="text-[11px] font-medium uppercase tracking-[0.3em] text-white/40"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                Navigation
              </p>
            </div>

            <ul className="flex flex-col">
              {NAV_LINKS.map((link, i) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={closeMenu}
                    className="group flex items-center justify-between gap-6 border-b border-white/[0.07] py-5 transition-colors duration-300 hover:border-[var(--accent-red)]/35"
                  >
                    <div className="flex min-w-0 items-baseline gap-5 md:gap-8">
                      <span
                        className="w-7 shrink-0 text-[11px] tracking-[0.18em] text-white/25 transition-colors group-hover:text-[var(--accent-red)]"
                        style={{ fontFamily: "var(--font-jakarta)" }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span
                        className="text-[clamp(1.75rem,5vw,3rem)] font-medium tracking-[-0.02em] text-[#F2EFE9]/88 transition-colors duration-300 group-hover:text-white"
                        style={{ fontFamily: "var(--font-jakarta)" }}
                      >
                        {link.label}
                      </span>
                    </div>
                    <span
                      className="shrink-0 text-sm text-white/20 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-[var(--accent-red)]"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-8 border-t border-white/[0.07] pt-8 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
              {[
                {
                  label: "GitHub",
                  href: "https://github.com/Siddharthsingh637",
                  external: true,
                },
                {
                  label: "LinkedIn",
                  href: "https://www.linkedin.com/in/siddharth637",
                  external: true,
                },
                {
                  label: "Email",
                  href: "mailto:siddharthsingh.6217@gmail.com",
                },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="text-[11px] uppercase tracking-[0.2em] text-white/45 transition hover:text-[var(--accent-red)]"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  {item.label}
                </a>
              ))}
            </div>

            <a
              href="mailto:siddharthsingh.6217@gmail.com"
              onClick={closeMenu}
              className="pill-btn-accent pill-btn inline-flex w-fit text-[10px] py-2.5 px-5"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Let&apos;s Talk
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
