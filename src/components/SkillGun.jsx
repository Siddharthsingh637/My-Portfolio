"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const SKILLS = [
  { name: "PYTHON", category: "AI & BACKEND", filter: "Backend & Cloud", proof: "Python for Everybody certification and AI assisted workflows." },
  { name: "NEXT.JS", category: "FULL-STACK WEB", filter: "Frontend", proof: "Built full-stack products and a smart institutional admin dashboard." },
  { name: "NODE.JS", category: "RUNTIME & APIS", filter: "Backend & Cloud", proof: "Production backend work across internships and independent projects." },
  { name: "TYPESCRIPT", category: "TYPE-SAFE CODE", filter: "Frontend", proof: "Type-safe application interfaces and maintainable modular code." },
  { name: "REACT NATIVE", category: "MOBILE APPS", filter: "Frontend", proof: "Part of the full-stack web and mobile engineering toolkit." },
  { name: "AGENTIC AI", category: "LLM WORKFLOWS", filter: "GenAI & Agents", proof: "Building LLM integrations, AI workflows, and intelligent automation." },
  { name: "POSTGRESQL", category: "RELATIONAL DB", filter: "Backend & Cloud", proof: "Relational database design and production data workflows." },
  { name: "AWS CLOUD", category: "INFRA & DEPLOY", filter: "Backend & Cloud", proof: "Cloud deployment and AWS architecture for production applications." },
  { name: "PRISMA ORM", category: "DATA LAYER", filter: "Backend & Cloud", proof: "Prisma included in the portfolio's data layer toolkit." },
  { name: "SUPABASE", category: "BAAS & AUTH", filter: "Backend & Cloud", proof: "Backend as a service, authentication, and application data." },
  { name: "DYNAMODB", category: "NOSQL SCALE", filter: "Backend & Cloud", proof: "Document database experience across scalable application stacks." },
  { name: "ANGULAR", category: "ENTERPRISE UI", filter: "Frontend", proof: "Frontend engineering across responsive, accessible interfaces." },
];
const TAGS = ["GIT", "DOCKER", "REST", "SQL", "JIRA", "SEO", "LINUX", "2026"];
const COLORS = ["#FF5FA8", "#FFD23F", "#3F6BFF", "#3FE0A8", "#FF8A2A", "#8B5CFF", "#C8F03C", "#5CC8FF", "#111111", "#FFFFFF"];
const FILTERS = ["All", "Frontend", "Backend & Cloud", "GenAI & Agents"];

function SkillGunArt({ recoil, firing, onPointerDown, onPointerUp }) {
  return (
    <div className="skillgun-art-wrap">
      <div className="skillgun-ground-shadow" />
      <svg
        className={`skillgun-svg ${recoil ? "is-recoiling" : ""} ${firing ? "is-firing" : ""}`}
        viewBox="0 0 700 500" role="img" aria-label="Red STACK paper gun. Hold to fire skills."
        onPointerDown={onPointerDown} onPointerUp={onPointerUp} onPointerLeave={onPointerUp} onPointerCancel={onPointerUp}
      >
        <defs>
          <linearGradient id="sgTop" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#FF5A5E"/><stop offset="1" stopColor="#FF3A40"/></linearGradient>
          <linearGradient id="sgSide" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#FF3B3F"/><stop offset=".56" stopColor="#E0141C"/><stop offset="1" stopColor="#A50A10"/></linearGradient>
          <linearGradient id="sgBevel" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#C00D14"/><stop offset="1" stopColor="#7D050A"/></linearGradient>
          <linearGradient id="sgGrip" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#FF3036"/><stop offset="1" stopColor="#9C080E"/></linearGradient>
          <filter id="sgShadow" x="-30%" y="-30%" width="170%" height="180%"><feGaussianBlur stdDeviation="9"/></filter>
        </defs>
        <g transform="rotate(-16 350 250)">
          <ellipse cx="354" cy="407" rx="238" ry="22" fill="#24100F" opacity=".23" filter="url(#sgShadow)"/>
          {/* angular receiver and barrel */}
          <path d="M155 166 264 116 558 116 625 151 625 279 566 311 262 311 155 264Z" fill="url(#sgSide)" stroke="#85070C" strokeWidth="5"/>
          <path d="m155 166 109-50 294 0 67 35-314 12-156 70Z" fill="url(#sgTop)"/>
          <path d="m155 264 156-101 314-12v128l-59 32H262Z" fill="url(#sgBevel)" opacity=".52"/>
          <path d="m184 166 84-37 279 0 51 26" fill="none" stroke="#fff" strokeWidth="2" opacity=".58"/>
          <path d="m289 173 0 112M536 170v108" fill="none" stroke="#77080d" strokeWidth="2" opacity=".5"/>
          <path d="m305 181 0 102M523 176v100" fill="none" stroke="#ff9a9c" strokeWidth="1.3" opacity=".25"/>
          <text x="339" y="243" fill="white" fontFamily="Arial,sans-serif" fontSize="56" fontWeight="900" letterSpacing="2">STACK</text>
          {/* muzzle */}
          <path d="m584 159 44-8v118l-44 24Z" fill="#B10A11"/>
          <path d="m606 165 24-5v91l-24 13Z" fill="#171111" stroke="#651116" strokeWidth="4"/>
          <path d="m613 176 10-2v69l-10 5Z" fill="#050505"/>
          {/* grip */}
          <path d="m296 300 116 0-6 37-32 100-97-16 32-84Z" fill="url(#sgGrip)" stroke="#7D050A" strokeWidth="5"/>
          <path d="m308 308 92 0-31 103" fill="none" stroke="#fff" strokeWidth="2" opacity=".6"/>
          <path d="m307 311-31 51 50 28-21 36" fill="none" stroke="#72060b" strokeWidth="5"/>
          {/* trigger guard & trigger */}
          <path d="m259 300-21 45q-14 39 26 48l37 2 15-34-38-3q-11-1-7-14l18-35" fill="none" stroke="#8A060B" strokeWidth="13" strokeLinejoin="round"/>
          <path d="m290 299-13 38 21 7 16-38Z" fill="#8A060B"/>
          {/* rear block */}
          <path d="m155 166-37 20v73l37 5Z" fill="#A50A10"/>
          <path d="m118 186-20 10v46l20 17Z" fill="#1a1414"/>
          {/* four metallic rivets */}
          {[[188,188],[188,246],[557,174],[557,270]].map(([cx,cy]) => <g key={`${cx}-${cy}`}><circle cx={cx} cy={cy} r="6" fill="#641015"/><circle cx={cx-1} cy={cy-2} r="2.2" fill="#ffb1b2" opacity=".8"/></g>)}
          <path d="m574 157 0 131" stroke="#ffb6b7" strokeWidth="1" opacity=".35"/>
        </g>
      </svg>
      <span className="skillgun-art-caption">STACK / SKILL DISPENSER · 001</span>
    </div>
  );
}

export default function SkillGun() {
  const sectionRef = useRef(null);
  const stageRef = useRef(null);
  const trayRef = useRef(null);
  const firingRef = useRef(false);
  const burstTimerRef = useRef(null);
  const shotRef = useRef(0);
  const skillCursorRef = useRef(0);
  const [slips, setSlips] = useState([]);
  const [shots, setShots] = useState(0);
  const [activeFilter, setActiveFilter] = useState("All");
  const [selected, setSelected] = useState(null);
  const [firing, setFiring] = useState(false);
  const [recoil, setRecoil] = useState(false);
  const reducedMotionRef = useRef(false);
  const landedRef = useRef([]);

  useEffect(() => { landedRef.current = slips; }, [slips]);

  const updateFlight = useCallback((item) => {
    const stage = stageRef.current;
    const tray = trayRef.current;
    if (!stage || !tray) return;
    const box = stage.getBoundingClientRect();
    const trayBox = tray.getBoundingClientRect();
    const trayLocal = { x: trayBox.left - box.left + 12, y: trayBox.top - box.top + 42 };
    const slotIndex = landedRef.current.length;
    const mobile = window.matchMedia("(max-width: 767px)").matches;
    const gap = mobile ? 7 : 10;
    const tileWidth = mobile ? (trayBox.width - 24 - gap * 2) / 3 : 154;
    const tileHeight = mobile ? 50 : 54;
    const colCount = Math.max(1, Math.floor((trayBox.width - 24 + gap) / (tileWidth + gap)));
    const x = trayLocal.x + (slotIndex % colCount) * (tileWidth + gap);
    const y = trayLocal.y + Math.floor(slotIndex / colCount) * (tileHeight + gap);
    const start = performance.now();
    const duration = reducedMotionRef.current ? 300 : 790 + Math.random() * 300;
    const node = document.getElementById(item.id);
    if (!node) return;
    const animate = (now) => {
      const t = Math.min(1, (now - start) / duration);
      const gravity = 0.00022 * (now - start) ** 2;
      const flightX = item.x + item.vx * (now - start) * 0.17;
      const flightY = item.y + item.vy * (now - start) * 0.17 + gravity;
      const settle = Math.max(0, (t - 0.66) / 0.34);
      const ease = 1 - (1 - settle) ** 3;
      const flutter = reducedMotionRef.current ? 0 : Math.sin((now - start) / 44 + item.phase) * 12 * (1 - settle);
      const px = flightX * (1 - ease) + x * ease;
      const py = flightY * (1 - ease) + y * ease;
      node.style.transform = `translate3d(${px + flutter}px, ${py}px, 0) rotate(${Math.sin((now-start)/70) * 32 * (1-settle)}deg) rotateX(${Math.sin((now-start)/55) * 55 * (1-settle)}deg)`;
      if (t < 1) item.raf = requestAnimationFrame(animate);
      else {
        node.remove();
        if (item.duplicate) {
          setSlips((current) => current.map((slip) => slip.name === item.name ? { ...slip, hop: Date.now() } : slip));
          return;
        }
        setSlips((current) => [...current, { ...item, landed: true }]);
      }
    };
    item.raf = requestAnimationFrame(animate);
  }, []);

  const fireOne = useCallback((filter = "All") => {
    const stage = stageRef.current;
    if (!stage) return;
    const box = stage.getBoundingClientRect();
    const candidates = SKILLS.filter((skill) => filter === "All" || skill.filter === filter);
    const n = skillCursorRef.current++;
    const skill = candidates[n % candidates.length];
    const shot = ++shotRef.current;
    const mini = shot % 4 === 0;
    const name = mini ? TAGS[Math.floor((shot / 4 - 1) % TAGS.length)] : skill.name;
    const existing = landedRef.current.find((s) => s.name === name);
    const id = `skill-slip-${shot}`;
    const item = { id, name, category: mini ? "TOOLS & PRACTICE" : skill.category, proof: mini ? "A practical tool in the portfolio workflow." : skill.proof, color: COLORS[(landedRef.current.length) % COLORS.length], mini, duplicate: !!existing, x: box.width * .66, y: box.height * .27, vx: -2.8 - Math.random() * 2.2, vy: .35 + Math.random() * .8, phase: Math.random() * Math.PI * 2 };
    setShots((v) => v + 1);
    setRecoil(true);
    window.setTimeout(() => setRecoil(false), 110);
    const node = document.createElement("div");
    node.id = id;
    node.className = `skill-slip skill-slip-flight ${mini ? "is-mini" : ""}`;
    node.style.setProperty("--slip-color", item.color);
    node.style.setProperty("--slip-ink", ["#3F6BFF", "#8B5CFF", "#111111"].includes(item.color) ? "#FFFFFF" : "#0A0A0A");
    node.innerHTML = mini ? `<strong>${name}</strong>` : `<strong>${name}</strong><span>${item.category}</span>`;
    stage.appendChild(node);
    updateFlight(item);
  }, [updateFlight]);

  const stopFiring = useCallback(() => {
    firingRef.current = false;
    setFiring(false);
    window.clearInterval(burstTimerRef.current);
  }, []);
  const startFiring = useCallback((filter = "All", count = Infinity) => {
    if (firingRef.current) return;
    firingRef.current = true;
    setFiring(true);
    const interval = reducedMotionRef.current ? 220 : 85;
    let fired = 0;
    const fire = () => {
      if (fired >= count) { stopFiring(); return; }
      fireOne(filter); fired++;
      if (fired >= count) stopFiring();
    };
    fire();
    if (count > 1 || count === Infinity) burstTimerRef.current = window.setInterval(fire, interval);
  }, [fireOne, stopFiring]);

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    reducedMotionRef.current = motion.matches;
    const onMotion = () => { reducedMotionRef.current = motion.matches; };
    motion.addEventListener?.("change", onMotion);
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !sectionRef.current.dataset.introDone) {
        sectionRef.current.dataset.introDone = "true";
        window.setTimeout(() => startFiring("All", 14), 400);
      }
    }, { threshold: 0.32 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    const onKey = (event) => {
      if (event.code === "Space" && sectionRef.current?.getBoundingClientRect().top < innerHeight && sectionRef.current?.getBoundingClientRect().bottom > 0 && !["INPUT", "TEXTAREA"].includes(event.target.tagName)) {
        event.preventDefault();
        if (!event.repeat) startFiring();
      }
    };
    const onKeyUp = (event) => { if (event.code === "Space") stopFiring(); };
    window.addEventListener("keydown", onKey); window.addEventListener("keyup", onKeyUp);
    return () => { observer.disconnect(); motion.removeEventListener?.("change", onMotion); window.removeEventListener("keydown", onKey); window.removeEventListener("keyup", onKeyUp); stopFiring(); };
  }, [startFiring, stopFiring]);

  const clearTray = () => {
    stopFiring();
    stageRef.current?.querySelectorAll(".skill-slip-flight").forEach((el) => el.remove());
    setSlips([]); setShots(0); setSelected(null); shotRef.current = 0; skillCursorRef.current = 0;
  };

  return (
    <section id="skills" ref={sectionRef} className="skillgun-section">
      <div className="grain-overlay skillgun-grain" aria-hidden="true" />
      <div className="skillgun-inner">
        <div className="skillgun-content">
          <div className="skillgun-grid">
            <div className="skillgun-controls">
              <h2>Pull the trigger to see what I <em>ship with.</em></h2>
              {/* <p className="skillgun-intro">Hold the gun, press Space, or smash the trigger to spray my tech stack into the tray.</p> */}
              {/* <div className="skillgun-filters" aria-label="Quick fire skill categories">
                {FILTERS.map((filter) => <button key={filter} className={activeFilter === filter ? "active" : ""} onClick={() => { setActiveFilter(filter); startFiring(filter, 6); }} type="button">{filter}</button>)}
              </div> */}
              <div className="skillgun-actions">
                <button className="skillgun-keycap primary" type="button" onPointerDown={(e) => { e.preventDefault(); startFiring(activeFilter); }} onPointerUp={stopFiring} onPointerLeave={stopFiring} onPointerCancel={stopFiring} onContextMenu={(e) => e.preventDefault()}><span className="key-legend">⏎ / SPACE</span>Fire skills</button>
                <button className="skillgun-keycap secondary" type="button" onClick={clearTray}><span className="key-legend">↺</span>Clear tray</button>
                <span className="skillgun-counter" aria-live="polite">{shots} skills fired</span>
              </div>
              <div ref={trayRef} className="skillgun-tray">
                <div className="skillgun-tray-label">CAUGHT IN TRAY · CLICK ANY SKILL TO INSPECT</div>
                <div className="skillgun-tray-slips">
                  {slips.map((slip) => <button type="button" key={slip.id} className={`skill-slip landed ${slip.mini ? "is-mini" : ""} ${slip.hop ? "is-hopping" : ""}`} style={{ "--slip-color": slip.color, "--slip-ink": ["#3F6BFF", "#8B5CFF", "#111111"].includes(slip.color) ? "#FFFFFF" : "#0A0A0A" }} onAnimationEnd={(e) => e.currentTarget.classList.remove("is-hopping")} onClick={() => setSelected(selected?.id === slip.id ? null : slip)}><strong>{slip.name}</strong>{!slip.mini && <span>{slip.category}</span>}</button>)}
                </div>
                {selected && <div className="skillgun-detail" role="status"><button className="skillgun-detail-close" type="button" onClick={() => setSelected(null)} aria-label="Close skill details">×</button><span>{selected.category}</span><strong>{selected.name}</strong><p>{selected.proof}</p></div>}
                {!slips.length && <p className="skillgun-empty">Your first skill slip is on its way.</p>}
              </div>
            </div>
            <div className="skillgun-stage" ref={stageRef}>
              <SkillGunArt recoil={recoil} firing={firing} onPointerDown={(e) => { e.preventDefault(); e.currentTarget.setPointerCapture?.(e.pointerId); startFiring(activeFilter); }} onPointerUp={stopFiring} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
