"use client";

import { useEffect, useRef, useMemo } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const STATEMENT =
  "I believe great software is invisible — it doesn't get in the way. Every interface should feel obvious, every API predictable, every deployment seamless. I build for the humans who use software, not for the engineers who admire it. Clarity is not simplicity — it is the removal of everything that isn't essential.";

export default function Manifesto() {
  const sectionRef = useRef(null);
  const wordsRef = useRef([]);
  const words = useMemo(() => STATEMENT.split(" "), []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Scrub each word's color from muted stone → pitch black as scroll progresses
      const wordEls = wordsRef.current.filter(Boolean);
      if (!wordEls.length) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          end: "bottom 40%",
          scrub: 1.5,
        },
      });

      wordEls.forEach((el, i) => {
        tl.to(
          el,
          {
            color: "#0A0A0A",
            duration: 0.3,
            ease: "none",
          },
          i * 0.015
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [words]);

  return (
    <section
      id="manifesto"
      ref={sectionRef}
      className="relative px-8 md:px-16 lg:px-24 py-36 overflow-hidden"
      style={{ background: "#EAE6DF" }}
    >
      {/* Top hairline */}
      <div className="absolute top-0 left-0 right-0 h-px bg-black/10" />

      {/* Grain overlay on light surface */}
      <div className="grain-overlay" aria-hidden="true" />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <p
          className="text-[11px] tracking-[0.28em] uppercase text-[#0A0A0A]/30 font-semibold mb-10"
          style={{ fontFamily: "var(--font-jakarta)" }}
        >
          Philosophy
        </p>

        {/* Scrubbed text paragraph */}
        <p
          className="leading-[1.55]"
          style={{
            fontFamily: "var(--font-jakarta)",
            fontSize: "clamp(1.35rem, 3.5vw, 2.6rem)",
            fontWeight: 700,
            letterSpacing: "-0.01em",
          }}
        >
          {words.map((word, i) => (
            <span
              key={i}
              ref={(el) => (wordsRef.current[i] = el)}
              className="inline-block mr-[0.35em]"
              style={{ color: "#B8B2A6" }}
            >
              {word}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
