"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [visible, setVisible] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const trigger = ScrollTrigger.create({
      trigger: "#about",
      start: "top 90%",
      onEnter: () => setVisible(true),
      onLeaveBack: () => setVisible(false),
    });
    return () => trigger.kill();
  }, []);

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-[100] transition-all duration-500"
      style={{
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "all" : "none",
        transform: visible ? "translateY(0)" : "translateY(-12px)",
      }}
    >
      <div className="mx-auto flex items-center justify-between px-8 py-5">
        {/* Brand */}
        <a
          href="#"
          className="font-[var(--font-anton)] text-sm tracking-[0.25em] text-[#F2EFE9] uppercase"
        >
          SS
        </a>

        {/* Links */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link, i) => (
            <span key={link.label} className="flex items-center">
              {i > 0 && (
                <span className="mx-3 text-white/20 text-xs select-none">/</span>
              )}
              <a
                href={link.href}
                className="text-[11px] font-medium tracking-[0.18em] uppercase text-white/60 hover:text-white/90 transition-colors duration-200"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                {link.label}
              </a>
            </span>
          ))}
        </div>

        {/* CTA */}
        <a
          href="mailto:siddharthsingh.6217@gmail.com"
          className="pill-btn-light pill-btn text-[10px] py-2.5 px-5"
          style={{ fontFamily: "var(--font-jakarta)" }}
        >
          Let&apos;s Talk
        </a>
      </div>
    </nav>
  );
}
