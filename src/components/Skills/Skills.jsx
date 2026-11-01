'use client';

import {
  Box,
  Braces,
  Cloud,
  Code2,
  Container,
  Database,
  Flame,
  GitBranch,
  Hexagon,
  Leaf,
  Package,
  Route,
  Send,
  Server,
  ShieldCheck,
  Triangle,
  Zap,
} from 'lucide-react';

const rows = [
  [
    { label: 'C', color: '#075d96', mark: 'C' },
    { label: 'JavaScript', color: '#323232', mark: 'JS', markColor: '#f7df1e', textColor: '#fff8ef' },
    { label: 'Java', color: '#f08a06', Icon: Flame },
    { label: 'HTML5', color: '#ef4b25', mark: '5' },
    { label: 'TypeScript', color: '#1773bd', mark: 'TS' },
    { label: 'Python', color: '#3b78a7', mark: 'Py', markColor: '#f7d44c' },
    { label: 'CSS3', color: '#166aa8', mark: 'CSS' },
    { label: 'Cloudflare', color: '#ff7d1f', Icon: Cloud },
    { label: '', color: '#f79b12', mark: 'AWS' },
  ],
  [
    { label: 'GoogleCloud', color: '#4787f4', Icon: Cloud },
    { label: 'Firebase', color: '#149cd7', Icon: Flame },
    { label: 'Render', color: '#2fc000', Icon: Route },
    { label: 'Vercel', color: '#070707', Icon: Triangle },
    { label: 'Netlify', color: '#050505', mark: 'N', markColor: '#00c7b7' },
    { label: 'Django', color: '#0d3d2c', mark: 'dj' },
    { label: 'Express.js', color: '#485967', mark: 'ex', markColor: '#5fc7e8' },
  ],
  [
    { label: 'Next', color: '#050505', mark: 'N' },
    { label: 'Node.js', color: '#74ab64', Icon: Hexagon },
    { label: 'Nodemon', color: '#333331', mark: 'M', markColor: '#7dd35a' },
    { label: 'NPM', color: '#c93b3b', Icon: Package },
    { label: 'JWT', color: '#050505', Icon: ShieldCheck },
    { label: 'React', color: '#20232f', mark: 'R', markColor: '#61dafb' },
    { label: 'React Hook Form', color: '#e75292', Icon: Braces },
  ],
  [
    { label: 'React Router', color: '#d13d43', Icon: Route },
    { label: 'Redux', color: '#5c438e', Icon: Box },
    { label: 'Spring', color: '#67ad32', Icon: Leaf },
    { label: 'TailwindCSS', color: '#40b4b3', mark: '~' },
    { label: 'Vite', color: '#5b62f0', Icon: Zap },
    { label: 'Socket.io', color: '#050505', Icon: Zap },
    { label: 'Yarn', color: '#3295c3', Package },
  ],
  [
    { label: 'Amazon DynamoDB', color: '#4055d8', mark: 'DB' },
    { label: 'Firebase', color: '#9a8423', Icon: Flame },
    { label: 'MySQL', color: '#4a7f9f', Database },
    { label: 'SQLite', color: '#064865', Database },
    { label: 'Supabase', color: '#45d190', Zap },
    { label: 'MongoDB', color: '#49a348', Icon: Leaf },
    { label: 'Prisma', color: '#3b83ce', Triangle },
  ],
  [
    { label: 'Postgres', color: '#35648c', Database },
    { label: 'Hibernate', color: '#5a666b', Hexagon },
    { label: 'GitHub', color: '#080808', mark: 'GH' },
    { label: 'GitLab', color: '#171717', mark: 'GL' },
    { label: 'Git', color: '#fa553b', GitBranch },
    { label: 'Docker', color: '#1ab6e8', Container },
    { label: 'ESLint', color: '#55356d', ShieldCheck },
    { label: 'Postman', color: '#ff6737', Send },
  ],
];

function SkillBadge({ skill }) {
  const Icon = skill.Icon || skill.Database || skill.Package || skill.Triangle || skill.Hexagon || skill.GitBranch || skill.Container || skill.ShieldCheck || skill.Send || skill.Zap;

  return (
    <li
      className="inline-flex min-h-9 shrink-0 items-center gap-2.5 border border-white/[0.08] px-3 py-2 text-white shadow-[0_12px_28px_-24px_rgba(0,0,0,0.92)] transition duration-300 hover:-translate-y-0.5 hover:border-white/20"
      style={{ backgroundColor: skill.color, color: skill.textColor || '#ffffff' }}
    >
      {Icon ? (
        <Icon size={17} strokeWidth={2.1} className="shrink-0" />
      ) : (
        <span
          className="inline-flex h-5 min-w-5 shrink-0 items-center justify-center text-sm font-black leading-none"
          style={{ color: skill.markColor || 'currentColor' }}
        >
          {skill.mark}
        </span>
      )}
      <span className="whitespace-nowrap text-[0.9rem] font-black uppercase leading-none">
        {skill.label}
      </span>
    </li>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      aria-label="Skills"
      className="border-y border-white/10 bg-[#071019] px-6 py-11 text-white sm:px-8"
    >
      <div className="mx-auto max-w-[1580px] px-2 sm:px-6 lg:px-10">
        <div className="border-t border-white/15 pt-9">
          <div className="mx-auto flex max-w-[1460px] flex-col items-center gap-5">
            {rows.map((row, index) => (
              <ul key={index} className="flex w-full flex-wrap justify-center gap-x-5 gap-y-5">
                {row.map((skill) => (
                  <SkillBadge key={`${skill.label}-${skill.color}`} skill={skill} />
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
