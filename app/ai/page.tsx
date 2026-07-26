
'use client';

/**
 * ─────────────────────────────────────────────────────────────────────────
 *  PORTFOLIO — dark, brass-and-leather "study" theme
 * ─────────────────────────────────────────────────────────────────────────
 *  Layout: a sticky left rail (photo, name, nav, socials) beside a longer
 *  scrolling right column (About → Skills → Projects → Contact).
 *
 *  Replace the placeholder copy, links, logos and photo path below with
 *  your own — search for "REPLACE ME" to find every spot.
 *
 *  Requires: tailwindcss, lucide-react
 *  Drop this in as app/page.tsx (Next.js App Router).
 *
 *  Note on skill logos: these load real brand icons from the free
 *  simpleicons.org CDN at runtime (no install needed). If a person's
 *  network blocks that domain, or a skill has no official logo (like
 *  "REST APIs" or "System Design"), it quietly falls back to a colored
 *  letter badge — nothing breaks.
 * ─────────────────────────────────────────────────────────────────────────
 */

import { Fraunces, Inter, JetBrains_Mono } from 'next/font/google';
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  ArrowUpRight,
  Download,
  MapPin,
  Image as ImageIcon,
} from 'lucide-react';
import { useEffect, useRef, useState, type ReactNode } from 'react';

const display = Fraunces({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-display',
});

const body = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
});

/* ── Content — REPLACE ME ─────────────────────────────────────────────── */

const PROFILE = {
  name: 'Roshan Pandit',
  initials: 'RP',
  title: 'Software Engineer — Backend & Distributed Systems',
  location: 'New Delhi, India',
  photoSrc: '../images/profile_pic.jpg', // REPLACE ME — put your photo in /public/profile.jpg
  headline: 'Full-Stack Developer • Distributed Systems',
  bio:
    "I build scalable web applications and real-time collaborative systems with a focus on backend architecture, performance, and clean code. I enjoy turning complex ideas into production-ready software.",
  availability: 'Open to backend & platform engineering roles',
  moreProjectsHref: 'https://github.com/Roshan-Pandit-11?tab=repositories' ,
  email: 'roshanpandit1124@gmail.com', // REPLACE ME
  resumeHref: '/roshan_cv.pdf', // REPLACE ME
  stats: [
    { value: '150+', label: 'LeetCode' },
    { value: '5+', label: 'Projects shipped' },
    { value: '12+', label: 'Technologies' },
  ],
};

const SOCIALS = [
  { label: 'GitHub', href: 'https://github.com/Roshan-Pandit-11', icon: Github },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/roshan-pandit-90bb0a342', icon: Linkedin },
  { label: 'Email', href: 'mailto:roshanpandit1124@gmail.com', icon: Mail },
];

// simple-icons slugs + brand hex colors (no leading #). Items with no
// official brand logo simply omit slug/color and fall back to a letter badge.
const SKILLS: {
  category: string;
  items: { name: string; slug?: string; color?: string }[];
}[] = [
  {
    category: 'Languages',
    items: [
      { name: 'Java', slug: 'openjdk', color: 'FFFFFF' },
      { name: 'C++', slug: 'cplusplus', color: '00599C' },
      { name: 'JavaScript', slug: 'javascript', color: 'F7DF1E' },
      { name: 'TypeScript', slug: 'typescript', color: '3178C6' },
    ],
  },
  {
    category: 'Frontend',
    items: [
      { name: 'React.js', slug: 'react', color: '61DAFB' },
      { name: 'Next.js', slug: 'nextdotjs', color: 'FFFFFF' },
      { name: 'HTML', slug: 'html5', color: 'E34F26' },
      { name: 'CSS', slug: 'css3', color: '1572B6' },
      { name: 'Tailwind CSS', slug: 'tailwindcss', color: '06B6D4' },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', slug: 'nodedotjs', color: '5FA04E' },
      { name: 'Express.js', slug: 'express', color: 'FFFFFF' },
      { name: 'REST APIs' },
      { name: 'WebSockets' },
    ],
  },
  {
    category: 'Databases',
    items: [
      { name: 'PostgreSQL', slug: 'postgresql', color: '4169E1' },
      { name: 'MongoDB', slug: 'mongodb', color: '47A248' },
      { name: 'Prisma ORM', slug: 'prisma', color: 'FFFFFF' },
    ],
  },
  {
    category: 'Authentication',
    items: [
      { name: 'JWT', slug: 'jsonwebtokens', color: 'FFFFFF' },
      { name: 'OAuth' },
      { name: 'NextAuth' },
      { name: 'Bcrypt' },
      { name: 'Zod', slug: 'zod', color: '3E67B1' },
    ],
  },
  {
    category: 'Tools',
    items: [
      { name: 'Git', slug: 'git', color: 'F05032' },
      { name: 'GitHub', slug: 'github', color: 'FFFFFF' },
      { name: 'Docker', slug: 'docker', color: '2496ED' },
      { name: 'Redis', slug: 'redis', color: 'FF6B6B' },
    ],
  },
];

// Concepts have no brand logos — shown as a pill cloud instead of icon rows.
const CONCEPTS = [
  'Data Structures & Algorithms',
  'Object-Oriented Programming',
  'DBMS',
  'Computer Networks',
  'API Design',
  'Caching',
  'Pub/Sub',
  'System Design',
  'OS Fundamentals',
];

const PROJECTS = [
  {
    numeral: '01',
    title: 'Chess',
    description:
      'A real-time multiplayer chess platform built with a microservices architecture. Supports live gameplay, secure authentication, matchmaking, and synchronized game state with low-latency communication.',
    tags: ['TypeScript', 'Next.js', 'TurboRepo', 'WebSockets', 'Redis', 'Prisma', 'PostgreSQL', 'OAuth'],
    image: '/projects/chess.jpg',
    github: 'https://github.com/your-username/chess', // REPLACE ME
    live: 'https://your-chess-app.vercel.app', // REPLACE ME
    highlight: 'Real-time chess with scalable backend services',
  },
  {
    numeral: '02',
    title: 'SketchFlow',
    description:
      'A collaborative real-time infinite canvas application that enables multiple users to draw, edit, and interact simultaneously. Built with low-latency WebSocket communication, secure authentication, and persistent canvas storage for a seamless collaborative experience.',
    tags: ['Next.js', 'TypeScript', 'NextAuth', 'WebSockets', 'Redis', 'Prisma', 'PostgreSQL', 'Tailwind CSS', 'Zod'],
    image: '/projects/sketchflow.jpg',
    github: 'https://github.com/your-username/sketchflow', // REPLACE ME
    live: 'https://your-sketchflow.vercel.app', // REPLACE ME
    highlight: 'Redis-backed real-time canvas synchronization',
  },
  {
    numeral: '03',
    title: 'PlayFy',
    description:
      'A full-stack collaborative music streaming platform where users can create shared rooms, queue songs, and enjoy synchronized playback in real time. Built with secure authentication, WebSockets, and persistent room management.',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'WebSockets', 'React Player', 'JWT', 'Tailwind CSS', 'Zod', 'bcryptjs'],
    image: '/projects/playfy.jpg',
    github: 'https://github.com/your-username/playfy', // REPLACE ME
    live: 'https://your-playfy.vercel.app', // REPLACE ME
    highlight: 'Real-time collaborative music streaming platform',
  },
  {
    numeral: '04',
    title: 'Second Brain',
    description:
      'A full-stack knowledge management platform that enables users to save, organize, and search content from multiple sources, including YouTube, Twitter, and LinkedIn. Features secure authentication and a centralized dashboard for efficient knowledge retrieval.',
    tags: ['React', 'TypeScript', 'Express.js', 'MongoDB', 'JWT', 'Tailwind CSS', 'Node.js', 'CORS'],
    image: '/projects/second-brain.jpg',
    github: 'https://github.com/your-username/second-brain', // REPLACE ME
    live: 'https://your-secondbrain.vercel.app', // REPLACE ME
    highlight: 'Centralized knowledge management across multiple platforms',
  },
];

const NAV = [
  { id: 'intro', numeral: '01', label: 'About' },
  { id: 'skills', numeral: '02', label: 'Skills' },
  { id: 'projects', numeral: '03', label: 'Projects' },
  { id: 'contact', numeral: '04', label: 'Contact' },
];

/* ── Small building blocks ────────────────────────────────────────────── */

function useInView<T extends HTMLElement>(threshold = 0.15) {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return { ref, visible };
}

function Reveal({
  children,
  delay = 0,
  className = '',
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, visible } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`transition-all duration-500 ease-out motion-reduce:transition-none motion-reduce:transform-none ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function SectionHeading({
  numeral,
  eyebrow,
  title,
}: {
  numeral: string;
  eyebrow: string;
  title: string;
}) {
  const { ref, visible } = useInView<HTMLDivElement>(0.4);

  return (
    <div ref={ref} className="mb-8">
      <div className="flex items-center gap-3 mb-3">
        <span
          className="flex items-center justify-center w-9 h-9 rounded-full border text-xs font-[var(--font-mono)] transition-transform duration-500 ease-out"
          style={{
            borderColor: 'var(--rule)',
            color: 'var(--brass)',
            transform: visible ? 'scale(1)' : 'scale(0.5)',
            opacity: visible ? 1 : 0,
          }}
        >
          {numeral}
        </span>
        <span className="text-sm uppercase tracking-[0.3em]" style={{ color: 'var(--muted)' }}>
          {eyebrow}
        </span>
        <span
          className="h-px flex-1 transition-transform duration-700 ease-out"
          style={{
            backgroundColor: 'var(--rule)',
            transform: visible ? 'scaleX(1)' : 'scaleX(0)',
            transformOrigin: 'left',
          }}
        />
      </div>
      <h3 className="font-[var(--font-display)] text-3xl sm:text-4xl lg:text-[44px] leading-tight">
        {title}
      </h3>
    </div>
  );
}

function Portrait() {
  const [errored, setErrored] = useState(false);
  return (
    <div className="relative w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36 mx-auto lg:mx-0 shrink-0 group">
      <div
        className="absolute -inset-3 rounded-full blur-2xl opacity-40 animate-[pulseGlow_4s_ease-in-out_infinite] motion-reduce:animate-none"
        style={{ background: 'radial-gradient(circle, var(--brass) 0%, transparent 70%)' }}
        aria-hidden="true"
      />
      <div
        className="absolute -inset-2 rounded-full border"
        style={{ borderColor: 'var(--rule)' }}
        aria-hidden="true"
      />
      <div
        className="relative w-full h-full rounded-full overflow-hidden border-[3px] flex items-center justify-center transition-transform duration-500 ease-out group-hover:scale-[1.04]"
        style={{ borderColor: 'var(--brass)', backgroundColor: 'var(--surface-2)' }}
      >
        {!errored ? (
          // REPLACE ME — swap photoSrc above with your own image in /public
          <img
            src={PROFILE.photoSrc}
            alt={PROFILE.name}
            className="w-full h-full object-cover"
            onError={() => setErrored(true)}
          />
        ) : (
          <span
            className="font-[var(--font-display)] italic text-3xl sm:text-4xl"
            style={{ color: 'var(--brass-bright)' }}
          >
            {PROFILE.initials}
          </span>
        )}
      </div>
    </div>
  );
}

function SkillLogo({ slug, color, name }: { slug?: string; color?: string; name: string }) {
  const [errored, setErrored] = useState(false);
  const showLogo = Boolean(slug && color) && !errored;

  return (
    <div
      className="flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-xl shrink-0 transition-transform duration-300 ease-out hover:scale-110 hover:-translate-y-0.5"
      style={{ backgroundColor: 'var(--surface-2)' }}
    >
      {showLogo ? (
        <img
          src={`https://cdn.simpleicons.org/${slug}/${color}`}
          alt={name}
          width={22}
          height={22}
          loading="lazy"
          onError={() => setErrored(true)}
        />
      ) : (
        <span
          className="font-[var(--font-mono)] text-sm font-medium"
          style={{ color: 'var(--brass-bright)' }}
        >
          {name.charAt(0)}
        </span>
      )}
    </div>
  );
}

function ProjectImage({ src, alt, numeral }: { src: string; alt: string; numeral: string }) {
  const [errored, setErrored] = useState(false);

  return (
    <div
      className="relative w-full sm:w-56 lg:w-72 aspect-video sm:aspect-square shrink-0 overflow-hidden rounded-xl border"
      style={{ borderColor: 'var(--rule)' }}
    >
      {!errored ? (
        // REPLACE ME — add a real screenshot to /public/projects for this to show
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          onError={() => setErrored(true)}
        />
      ) : (
        <div
          className="w-full h-full flex flex-col items-center justify-center gap-2"
          style={{ backgroundColor: 'var(--surface-2)' }}
        >
          <span
            className="font-[var(--font-display)] text-4xl sm:text-5xl opacity-20"
            style={{ color: 'var(--brass)' }}
          >
            {numeral}
          </span>
          <div className="flex items-center gap-1.5 text-xs" style={{ color: 'var(--muted)' }}>
            <ImageIcon size={13} />
            Preview coming soon
          </div>
        </div>
      )}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, transparent 60%, rgba(20,17,14,0.35) 100%)',
        }}
        aria-hidden="true"
      />
    </div>
  );
}

/* ── Page ──────────────────────────────────────────────────────────────── */

export default function Page() {
  const [active, setActive] = useState('intro');

  useEffect(() => {
    const sections = NAV.map((n) => document.getElementById(n.id)).filter(
      (el): el is HTMLElement => Boolean(el)
    );

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    );

    sections.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div
      className={`${display.variable} ${body.variable} ${mono.variable} min-h-screen text-[16px] sm:text-[17px]`}
      style={{
        // @ts-ignore -- CSS custom properties
        '--ink': '#14110E',
        '--surface': '#1C1712',
        '--surface-2': '#241D16',
        '--brass': '#B08D57',
        '--brass-bright': '#D9B77E',
        '--emerald': '#33473A',
        '--ivory': '#EDE6D6',
        '--muted': '#A79E90',
        '--rule': 'rgba(176,141,87,0.25)',
        backgroundColor: 'var(--ink)',
        color: 'var(--ivory)',
        fontFamily: 'var(--font-body)',
      }}
    >
      <style jsx global>{`
        @keyframes pulseGlow {
          0%,
          100% {
            opacity: 0.35;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.1);
          }
        }
      `}</style>

      {/* grain / vignette overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-40 opacity-[0.05] mix-blend-overlay"
        aria-hidden="true"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
      <div
        className="pointer-events-none fixed inset-0 z-30"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse at 50% 0%, rgba(176,141,87,0.10), transparent 55%), radial-gradient(ellipse at 100% 100%, rgba(51,71,58,0.12), transparent 50%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto lg:flex lg:gap-12 px-4 sm:px-6 lg:px-10">
        {/* ── Left rail ───────────────────────────────────────────────── */}
        <aside className="lg:w-72 lg:shrink-0 lg:sticky lg:top-0 lg:h-screen lg:py-10 py-10">
          <div className="text-center lg:text-left">
            <Portrait />

            <h1
              className="mt-5 text-2xl sm:text-[26px] lg:text-3xl font-[var(--font-display)] italic"
              style={{ color: 'var(--ivory)' }}
            >
              {PROFILE.name}
            </h1>
            <p className="mt-1.5 text-sm sm:text-[15px] leading-snug" style={{ color: 'var(--muted)' }}>
              {PROFILE.title}
            </p>

            <div
              className="mt-3 flex items-center justify-center lg:justify-start gap-1.5 text-sm"
              style={{ color: 'var(--muted)' }}
            >
              <MapPin size={14} />
              <span>{PROFILE.location}</span>
            </div>

            <div
              className="mt-4 inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded-full border"
              style={{ borderColor: 'var(--emerald)', color: 'var(--brass-bright)' }}
            >
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span
                  className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 motion-reduce:animate-none"
                  style={{ backgroundColor: '#7FAF8E' }}
                />
                <span className="relative inline-flex rounded-full h-2 w-2" style={{ backgroundColor: '#7FAF8E' }} />
              </span>
              {PROFILE.availability}
            </div>

            <div className="h-px w-full my-5" style={{ backgroundColor: 'var(--rule)' }} />

            {/* nav */}
            <nav className="hidden lg:flex flex-col gap-3">
              {NAV.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="group flex items-center gap-3 text-[15px] transition-transform duration-300 ease-out hover:translate-x-1"
                >
                  <span
                    className="font-[var(--font-mono)] text-xs w-5 transition-colors duration-300"
                    style={{ color: active === item.id ? 'var(--brass-bright)' : 'var(--rule)' }}
                  >
                    {item.numeral}
                  </span>
                  <span
                    className="tracking-wide transition-colors duration-300"
                    style={{ color: active === item.id ? 'var(--ivory)' : 'var(--muted)' }}
                  >
                    {item.label}
                  </span>
                  <span
                    className="h-px flex-1 transition-transform duration-300 ease-out"
                    style={{
                      backgroundColor: 'var(--brass)',
                      transform: active === item.id ? 'scaleX(1)' : 'scaleX(0)',
                      transformOrigin: 'left',
                    }}
                  />
                </a>
              ))}
            </nav>

            {/* mobile nav */}
            <nav className="lg:hidden flex items-center justify-center gap-5 sm:gap-6 flex-wrap">
              {NAV.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="text-sm tracking-wide"
                  style={{ color: active === item.id ? 'var(--brass-bright)' : 'var(--muted)' }}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="mt-6">
              <a
                href={PROFILE.resumeHref}
                download
                className="inline-flex items-center gap-2 text-sm tracking-wide border rounded-full px-5 py-2.5 transition-all duration-300 hover:border-[var(--brass)] hover:-translate-y-0.5"
                style={{ borderColor: 'var(--rule)', color: 'var(--muted)' }}
              >
                <Download size={14} />
                Résumé
              </a>
            </div>

            {/* socials */}
            <div className="mt-5 flex items-center justify-center lg:justify-start gap-5">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="transition-transform duration-300 ease-out hover:-translate-y-0.5"
                  style={{ color: 'var(--muted)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--brass-bright)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--muted)')}
                >
                  <s.icon size={20} strokeWidth={1.6} />
                </a>
              ))}
            </div>
          </div>
        </aside>

        {/* ── Right column — detailed content ────────────────────────── */}
        <main className="lg:flex-1 py-10 lg:py-10 min-w-0">
          {/* About */}
          <section id="intro" className="scroll-mt-24 pb-16">
            <Reveal>
              <h2 className="font-[var(--font-display)] text-[32px] sm:text-[38px] lg:text-5xl   leading-[1.15] max-w-2xl">
                {PROFILE.headline}
              </h2>

              <p className="mt-5 max-w-2xl text-base sm:text-lg leading-relaxed" style={{ color: 'var(--muted)' }}>
                {PROFILE.bio}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-4">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 text-[15px] font-medium px-6 py-3 rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                  style={{ backgroundColor: 'var(--brass)', color: 'var(--ink)' }}
                >
                  See my work
                  <ArrowUpRight size={16} />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-[15px] font-medium px-6 py-3 rounded-full border transition-all duration-300 hover:border-[var(--brass)] hover:-translate-y-0.5"
                  style={{ borderColor: 'var(--rule)' }}
                >
                  Get in touch
                </a>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="mt-9 grid grid-cols-3 max-w-lg border-t pt-6" style={{ borderColor: 'var(--rule)' }}>
                {PROFILE.stats.map((stat) => (
                  <div key={stat.label}>
                    <div
                      className="font-[var(--font-display)] text-2xl sm:text-3xl lg:text-4xl"
                      style={{ color: 'var(--brass-bright)' }}
                    >
                      {stat.value}
                    </div>
                    <div className="mt-1 text-xs sm:text-sm" style={{ color: 'var(--muted)' }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </section>

          {/* Skills */}
          <section id="skills" className="scroll-mt-24 pb-16 border-t" style={{ borderColor: 'var(--rule)' }}>
            <div className="pt-16">
              <Reveal>
                <SectionHeading numeral="02" eyebrow="Skills" title="Technologies I work with" />
              </Reveal>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {SKILLS.map((cat, i) => (
                  <Reveal key={cat.category} delay={i * 70}>
                    <div
                      className="h-full rounded-2xl border p-5 transition-all duration-300 hover:border-[color:var(--brass)]"
                      style={{ borderColor: 'var(--rule)', backgroundColor: 'var(--surface)' }}
                    >
                      <span className="text-xs uppercase tracking-[0.2em]" style={{ color: 'var(--muted)' }}>
                        {cat.category}
                      </span>
                      <div className="mt-4 flex flex-col gap-3">
                        {cat.items.map((item) => (
                          <div key={item.name} className="flex items-center gap-3">
                            <SkillLogo slug={item.slug} color={item.color} name={item.name} />
                            <span className="text-sm sm:text-[15px]">{item.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>

              {/* Concepts — pill cloud, no brand logos apply here */}
              <Reveal delay={SKILLS.length * 70}>
                <div
                  className="mt-5 rounded-2xl border p-5"
                  style={{ borderColor: 'var(--rule)', backgroundColor: 'var(--surface)' }}
                >
                  <span className="text-xs uppercase tracking-[0.2em]" style={{ color: 'var(--muted)' }}>
                    Concepts & Fundamentals
                  </span>
                  <div className="mt-4 flex flex-wrap gap-2.5">
                    {CONCEPTS.map((concept) => (
                      <span
                        key={concept}
                        className="text-xs sm:text-sm px-3.5 py-2 rounded-full border transition-all duration-300 hover:border-[color:var(--brass)] hover:-translate-y-0.5"
                        style={{
                          borderColor: 'var(--rule)',
                          backgroundColor: 'var(--surface-2)',
                          color: 'var(--ivory)',
                        }}
                      >
                        {concept}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </section>

          {/* Projects */}
          <section id="projects" className="scroll-mt-24 pb-16 border-t" style={{ borderColor: 'var(--rule)' }}>
            <div className="pt-16">
              <Reveal>
                <SectionHeading numeral="03" eyebrow="Projects" title="Milestones along the way" />
              </Reveal>

              <div className="relative">
                <div
                  className="hidden sm:block absolute left-6 top-3 bottom-3 w-px"
                  style={{ backgroundColor: 'var(--rule)' }}
                  aria-hidden="true"
                />

                <div className="flex flex-col gap-6">
                  {PROJECTS.map((p, i) => (
                    <Reveal key={p.title} delay={i * 80}>
                      <div className="relative sm:pl-20">
                        <div
                          className="hidden sm:flex absolute left-0 top-0 items-center justify-center w-12 h-12 rounded-full border-2 font-[var(--font-mono)] text-sm transition-transform duration-300 ease-out hover:scale-110"
                          style={{
                            borderColor: 'var(--brass)',
                            backgroundColor: 'var(--ink)',
                            color: 'var(--brass-bright)',
                          }}
                        >
                          {p.numeral}
                        </div>

                        <div
                          className="group relative overflow-hidden rounded-2xl border p-4 sm:p-5 transition-all duration-300"
                          style={{ borderColor: 'var(--rule)', backgroundColor: 'var(--surface)' }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = 'var(--brass)';
                            e.currentTarget.style.boxShadow = '0 20px 45px -20px rgba(176,141,87,0.35)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = 'var(--rule)';
                            e.currentTarget.style.boxShadow = 'none';
                          }}
                        >
                          <div className="flex flex-col sm:flex-row gap-5">
                            <ProjectImage src={p.image} alt={`${p.title} preview`} numeral={p.numeral} />

                            <div className="relative flex-1 py-1 sm:py-2 pr-1 min-w-0">
                              <span
                                className="pointer-events-none absolute -top-2 right-0 font-[var(--font-display)] text-6xl sm:text-[100px] leading-none select-none opacity-[0.05]"
                                aria-hidden="true"
                              >
                                {p.numeral}
                              </span>

                              <div className="relative">
                                <div className="flex flex-wrap items-center gap-3 mb-2">
                                  <h4 className="font-[var(--font-display)] text-2xl sm:text-3xl">{p.title}</h4>
                                  <span
                                    className="text-xs font-[var(--font-mono)] px-2.5 py-1 rounded-full"
                                    style={{ backgroundColor: 'var(--emerald)', color: '#BEE0C8' }}
                                  >
                                    {p.highlight}
                                  </span>
                                </div>

                                <p className="max-w-xl text-sm sm:text-[15px] leading-relaxed" style={{ color: 'var(--muted)' }}>
                                  {p.description}
                                </p>

                                <div className="mt-4 flex flex-wrap gap-2">
                                  {p.tags.map((tag) => (
                                    <span
                                      key={tag}
                                      className="font-[var(--font-mono)] text-[11px] sm:text-xs px-2.5 py-1 rounded"
                                      style={{ backgroundColor: 'var(--surface-2)', color: 'var(--muted)' }}
                                    >
                                      {tag}
                                    </span>
                                  ))}
                                </div>

                                <div className="mt-5 flex flex-wrap gap-3">
                                  <a
                                    href={p.github}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-2 text-sm font-medium px-5 py-2.5 rounded-full border transition-all duration-300 hover:border-[var(--brass)] hover:text-[var(--brass-bright)] hover:-translate-y-0.5"
                                    style={{ borderColor: 'var(--rule)' }}
                                  >
                                    <Github size={16} />
                                    View code
                                  </a>
                                  <a
                                    href={p.live}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-2 text-sm font-medium px-5 py-2.5 rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                                    style={{ backgroundColor: 'var(--brass)', color: 'var(--ink)' }}
                                  >
                                    Live demo
                                    <ArrowUpRight size={16} />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>

              {/* View more projects */}
              <Reveal delay={PROJECTS.length * 80}>
                <div className="mt-8 flex justify-center sm:justify-start sm:pl-20">
                  <a
                    href={PROFILE.moreProjectsHref}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-[15px] font-medium px-6 py-3 rounded-full border transition-all duration-300 hover:border-[var(--brass)] hover:text-[var(--brass-bright)] hover:-translate-y-0.5"
                    style={{ borderColor: 'var(--rule)' }}
                  >
                    View more projects
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </Reveal>
            </div>
          </section>

          {/* Contact */}
          <section id="contact" className="scroll-mt-24 border-t" style={{ borderColor: 'var(--rule)' }}>
            <div className="pt-16">
              <Reveal>
                <SectionHeading numeral="04" eyebrow="Contact" title="Let's work together" />

                <p className="max-w-2xl text-base sm:text-lg leading-relaxed" style={{ color: 'var(--muted)' }}>
                  I'm always happy to talk about new projects, backend architecture, or
                  just to trade notes on what you're building. Email is the best way to
                  reach me — I read every message.
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-5">
                  <a
                    href={`mailto:${PROFILE.email}`}
                    className="inline-flex items-center gap-2 text-[15px] font-medium px-6 py-3 rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                    style={{ backgroundColor: 'var(--brass)', color: 'var(--ink)' }}
                  >
                    <Mail size={16} />
                    {PROFILE.email}
                  </a>

                  <div className="flex items-center gap-5">
                    {SOCIALS.filter((s) => s.label !== 'Email').map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={s.label}
                        className="transition-transform duration-300 ease-out hover:-translate-y-0.5"
                        style={{ color: 'var(--muted)' }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--brass-bright)')}
                        onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--muted)')}
                      >
                        <s.icon size={20} strokeWidth={1.6} />
                      </a>
                    ))}
                  </div>
                </div>
              </Reveal>

              <div className="mt-12 pb-10 pt-6 border-t text-center lg:text-left" style={{ borderColor: 'var(--rule)' }}>
                <p className="text-sm" style={{ color: 'var(--muted)' }}>
                  © {new Date().getFullYear()} {PROFILE.name}. All rights reserved.
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}