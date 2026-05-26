'use client'

import { Github, ExternalLink, ArrowRight , Linkedin , Mail , Heart} from 'lucide-react'
import razorpayImage from "../images/razorpay-image.png" ;
import secondBrain_image from "../images/second-brain.png"
import playfy_ss_portfolio from "../images/playfy_ss_portfolio.png" ;
import profile_pic from "../images/profile_pic.jpg" ;
import sketchFlow_img from "../images/sketchflow-ss-1.png" ;
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [open, setOpen] = useState(false);
  const [count , setCount] = useState(null) ;

  useEffect(() => {
    increaseCount() ;
  }, []) ;

  async function increaseCount () {
    const response = await axios.get("/api/count") ;
    if (response.data.success == true){
      const count = response.data.count ;
      setCount(count) ;
    }else if (response.data.success == false){
      increaseCount() ;
    }
  }

  const skills = {
  'Languages & Core': [
    'C' , 'C++' , 'Java' ,
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
  ],

  'Frontend': [
    'React',
    'Next.js',
    'Tailwind CSS',
    'Figma',
  ],

  'Backend & Auth': [
    'Node.js',
    'Express.js',
    'MongoDB' ,
    'WebSockets',
    'PostgreSQL',
    'Prisma',
    'Redis',
    'NextAuth.js',
    'JWT (jsonwebtoken)',
    'bcrypt',
    'Zod',
  ],

  'Full-Stack & DevOps': [
    'MERN Stack',
    'REST APIs',
    'Real-time Applications',
    'Docker',
  ],
};


  const projects = [
    {
      name: 'SketchFlow',
      description:
        'SketchFlow is a collaborative, real-time, infinite canvas drawing platform built to enable seamless visual communication across users.',
      tech: ['Next.js', 'NextAuth' , 'TypeScript' , 'PostgreSQL', 'Prisma', 'ws' , 'Tailwind' , 'Redis' , 'bcryptjs' , 'zod'],
      image: sketchFlow_img,
      demo: null,
      github: null,
    },
    {
      name: 'PlayFy',
      description:
        'Playfy is a full-stack application that enables users to create rooms and share songs with real-time collaboration and seamless playback.',
      tech: ['Next.js', 'TypeScript' , 'PostgreSQL', 'Prisma', 'ws' , 'Tailwind' , 'react-player' , 'bcryptjs' , 'zod' , 'jwt'],
      image: playfy_ss_portfolio,
      demo: null ,
      github: 'https://github.com/Roshan-Pandit-11/playfy',
    },
    {
      name: 'Second Brain',
      description:
        'Second Brain is a full-stack knowledge management web application that lets users capture, organize, and retrieve content like tweets, LinkedIn posts, and YouTube videos from a single, centralized dashboard.',
      tech: ['React', 'TypeScript', 'react-dom' , 'Tailwind' , 'express' , 'cors' , 'jwt' , 'mongoDB'],
      image: secondBrain_image,
      demo: null,
      github: 'https://github.com/Roshan-Pandit-11/second-brain',
    },
    {
      name: 'RazorPay Clone',
      description:
        'Razorpay Clone is a front-end project built with HTML and Tailwind CSS that recreates the user interface and visual experience of the Razorpay payment platform with a focus on layout precision, responsiveness, and clean design.',
      tech: ['Tailwind'],
      image: razorpayImage,
      demo: null,
      github: 'https://github.com/Roshan-Pandit-11/Razorpay-Clone',
    },
  ]

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-neutral-100">
      {/* Navbar */}
       <nav className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#020305]/80 backdrop-blur-2xl">
  
  {/* Top Glow */}
  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#3b82f6]/50 to-transparent" />

  {/* Ambient Background */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.10),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.06),transparent_30%)]" />

  <div className="relative mx-auto flex h-[74px] max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">

    {/* LEFT */}
    <a href="#" className="group flex items-center gap-4">

      {/* Logo Block */}
      <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl border border-white/[0.08] bg-[#070b14]">

        {/* Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#2563eb]/20 via-transparent to-cyan-400/10 opacity-80" />

        {/* Inner Border */}
        <div className="absolute inset-[1px] rounded-2xl border border-white/[0.04]" />

        {/* Noise */}
        <div
          className="absolute inset-0 opacity-[0.03] mix-blend-soft-light"
          style={{
            backgroundImage:
              "url('https://grainy-gradients.vercel.app/noise.svg')",
          }}
        />

        {/* RP */}
        <span className="relative z-10 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-sm font-black tracking-[0.25em] text-transparent">
          RP
        </span>

        {/* Accent Dot */}
        <div className="absolute bottom-1.5 right-1.5 h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.9)]" />
      </div>

      {/* Name */}
      <div className="hidden sm:block">
        <p className="text-[11px] uppercase tracking-[0.35em] text-white/30">
          Portfolio
        </p>

        <h1 className="text-sm font-semibold uppercase tracking-[0.18em] text-white">
          Roshan Pandit
        </h1>
      </div>

    </a>

    {/* CENTER MENU */}
    <div className="hidden md:flex items-center gap-1 border border-white/[0.06] bg-white/[0.02] px-2 py-2 backdrop-blur-xl">

      {["Skills", "Projects", "Contact"].map((item) => (
        <a
          key={item}
          href={`#${item.toLowerCase()}`}
          className="group relative overflow-hidden px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.28em] text-white/45 transition-all duration-300 hover:text-white"
        >

          {/* Hover BG */}
          <div className="absolute inset-0 translate-y-full bg-white/[0.04] transition duration-300 group-hover:translate-y-0" />

          {/* Bottom Accent */}
          <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-blue-500 to-cyan-300 transition-all duration-300 group-hover:w-full" />

          <span className="relative z-10">{item}</span>

        </a>
      ))}

    </div>

    {/* RIGHT */}
    <div className="flex items-center gap-3">

      {/* CTA */}
      <a
        href="#contact"
        className="hidden sm:flex group relative overflow-hidden border border-[#2563eb]/30 bg-[#2563eb]/10 px-5 py-2.5"
      >

        {/* Glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#2563eb]/20 to-cyan-400/10 opacity-0 transition duration-300 group-hover:opacity-100" />

        <span className="relative z-10 text-[11px] font-bold uppercase tracking-[0.24em] text-white">
          Let's Talk
        </span>

      </a>

      {/* Mobile Menu */}
      <button
        className="group relative flex h-11 w-11 items-center justify-center overflow-hidden border border-white/[0.08] bg-white/[0.03] md:hidden"
        onClick={() => setOpen(!open)}
        aria-label="Toggle Menu"
      >

        <div className="absolute inset-0 translate-y-full bg-white/[0.04] transition duration-300 group-hover:translate-y-0" />

        <div className="relative z-10 flex flex-col gap-[4px]">
          <span className="h-px w-5 bg-white/70" />
          <span className="h-px w-5 bg-white/70" />
          <span className="h-px w-5 bg-white/70" />
        </div>

      </button>

    </div>

  </div>

  {/* MOBILE PANEL */}
  {open && (
    <div className="md:hidden border-t border-white/[0.06] bg-[#020305]/95 backdrop-blur-2xl">

      <div className="space-y-2 px-5 py-5">

        {["Skills", "Projects", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            onClick={() => setOpen(false)}
            className="group flex items-center justify-between border border-white/[0.06] bg-white/[0.02] px-5 py-4 transition duration-300 hover:border-[#2563eb]/30 hover:bg-[#2563eb]/[0.03]"
          >

            <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-white/65 transition duration-300 group-hover:text-white">
              {item}
            </span>

            <ArrowRight
              size={14}
              className="text-white/30 transition duration-300 group-hover:translate-x-1 group-hover:text-cyan-300"
            />

          </a>
        ))}

      </div>

    </div>
  )}

</nav>

      <main className="max-w-7xl mx-auto px-6">
        {/* Hero */}
        <section className="relative overflow-hidden bg-[#020305] text-white">

  {/* Background Layers */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.18),transparent_25%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.12),transparent_25%)]" />

  {/* Grid */}
  <div
    className="absolute inset-0 opacity-[0.045]"
    style={{
      backgroundImage: `
      linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
    `,
      backgroundSize: "90px 90px",
    }}
  />

  {/* Noise */}
  <div
    className="absolute inset-0 opacity-[0.03] mix-blend-soft-light"
    style={{
      backgroundImage:
        "url('https://grainy-gradients.vercel.app/noise.svg')",
    }}
  />

  {/* Accent Glow */}
  <div className="absolute left-[-10%] top-[-10%] h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[150px]" />
  <div className="absolute bottom-[-20%] right-[-10%] h-[600px] w-[600px] rounded-full bg-cyan-500/10 blur-[170px]" />

  {/* Main Container */}
  <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-24 lg:px-8">

    {/* Top Line */}
    <div className="mb-10 flex items-center gap-4">
      <div className="h-[2px] w-20 bg-blue-500 shadow-[0_0_25px_rgba(59,130,246,0.8)]" />
      <span className="text-xs font-bold uppercase tracking-[0.4em] text-blue-100/60">
        Backend Oriented Full Stack Developer
      </span>
    </div>

    {/* Main Layout */}
    <div className="grid items-center gap-20 lg:grid-cols-[1.1fr_0.9fr]">

      {/* LEFT SIDE */}
      <div>

        {/* Massive Heading */}
        <div className="relative">

          {/* Huge Background Text */}
          <div className="pointer-events-none absolute -top-16 left-0 text-[7rem] font-black uppercase leading-none text-white/[0.03] sm:text-[9rem] lg:text-[12rem]">
            RP
          </div>

          <h1 className="relative z-10 max-w-4xl text-5xl font-black uppercase leading-[0.9] tracking-[-0.04em] sm:text-7xl lg:text-[8rem]">

            <span className="block text-white">
              ROSHAN
            </span>

            <span className="block bg-gradient-to-r from-blue-500 via-cyan-300 to-white bg-clip-text text-transparent">
              PANDIT
            </span>

          </h1>

        </div>

        {/* Description */}
        <div className="mt-10 max-w-2xl border-l border-blue-500/30 pl-6">

          <p className="text-lg leading-relaxed text-white/60 sm:text-xl">
            Building scalable real-time systems, performance-focused
            architectures, and premium full-stack applications with a
            strong engineering mindset.
          </p>

        </div>

        {/* Stats + CTA */}
        <div className="mt-14 flex flex-col gap-10">

          {/* Stats */}
          <div
  className="
    grid
    grid-cols-1
    gap-3
    sm:grid-cols-2
    sm:gap-4
    lg:grid-cols-3
  "
>

  {[
    { value: "5+", label: "Projects" },
    { value: "20+", label: "Skills" },
    { value: "100%", label: "Focus" },
  ].map((item) => (

    <div
      key={item.label}
      className="
        group
        relative
        overflow-hidden
        border
        border-white/10
        bg-white/[0.02]
        px-4
        py-4
        transition-all
        duration-300
        hover:border-blue-500/30
        hover:bg-blue-500/[0.03]
        sm:px-5
        sm:py-5
        lg:px-6
      "
    >

      {/* HOVER BG */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.04] to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

      {/* LEFT ACCENT */}
      <div className="absolute left-0 top-0 h-full w-[2px] bg-blue-500 opacity-60 transition duration-300 group-hover:opacity-100" />

      {/* CONTENT */}
      <div className="relative z-10">

        {/* VALUE */}
        <h3
          className="
            text-2xl
            font-black
            leading-none
            tracking-[-0.04em]
            text-white
            sm:text-3xl
            md:text-[2.2rem]
          "
        >
          {item.value}
        </h3>

        {/* LABEL */}
        <p
          className="
            mt-2
            text-[10px]
            font-semibold
            uppercase
            tracking-[0.22em]
            text-white/40
            sm:text-[11px]
            sm:tracking-[0.28em]
          "
        >
          {item.label}
        </p>

      </div>

      {/* CORNER GLOW */}
      <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-blue-500/10 blur-2xl opacity-0 transition duration-500 group-hover:opacity-100" />

    </div>

  ))}

</div>

          {/* Buttons */}
          <div className="flex flex-col gap-4 sm:flex-row">

            <a
              href="#projects"
              className="group relative overflow-hidden border border-blue-500 bg-blue-600 px-8 py-5 font-bold uppercase tracking-[0.18em] text-white transition duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(37,99,235,0.5)]"
            >

              <span className="relative z-10 flex items-center gap-3">
                Explore Work

                <ArrowRight
                  size={18}
                  className="transition duration-300 group-hover:translate-x-1"
                />
              </span>

              <div className="absolute inset-0 translate-y-full bg-white/10 transition duration-500 group-hover:translate-y-0" />

            </a>

            <a
              href="#contact"
              className="border border-white/10 bg-white/[0.03] px-8 py-5 font-bold uppercase tracking-[0.18em] text-white/70 backdrop-blur-xl transition duration-300 hover:border-blue-500/30 hover:text-white"
            >
              Contact
            </a>

          </div>

        </div>

        {/* Socials */}
        <div className="mt-14 flex items-center gap-5">

          <a
            href="https://github.com/Roshan-Pandit-11"
            target="_blank"
            rel="noopener noreferrer"
            className="group border border-white/10 bg-white/[0.02] p-4 transition duration-300 hover:border-blue-500 hover:bg-blue-500/10"
          >
            <Github
              size={22}
              className="text-white/60 transition duration-300 group-hover:text-white group-hover:scale-110"
            />
          </a>

          <a
            href="https://linkedin.com/in/roshan-pandit-90bb0a342"
            target="_blank"
            rel="noopener noreferrer"
            className="group border border-white/10 bg-white/[0.02] p-4 transition duration-300 hover:border-blue-500 hover:bg-blue-500/10"
          >
            <Linkedin
              size={22}
              className="text-white/60 transition duration-300 group-hover:text-white group-hover:scale-110"
            />
          </a>

        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="relative hidden lg:flex justify-end">

        {/* Outer Glow */}
        <div className="absolute inset-0 scale-110 bg-blue-500/10 blur-[120px]" />

        {/* Frame */}
        <div className="relative w-[430px]">

          {/* Border */}
          <div className="absolute -inset-[1px] bg-gradient-to-b from-blue-500/40 via-white/5 to-blue-500/40" />

          {/* Main Card */}
          <div className="relative overflow-hidden bg-[#05070d] shadow-[0_40px_120px_rgba(0,0,0,0.8)]">

            {/* Top Bar */}
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">

              <div className="flex items-center gap-2">
                <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
                <div className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                <div className="h-2.5 w-2.5 rounded-full bg-green-400" />
              </div>

              <p className="text-[10px] uppercase tracking-[0.35em] text-white/30">
                Portfolio
              </p>

            </div>

            {/* Image */}
            <div className="relative h-[580px] overflow-hidden">

              <img
                src={profile_pic.src}
                alt="Roshan Pandit"
                className="h-full w-full object-cover grayscale-[10%]"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#020305] via-transparent to-transparent" />

              {/* Floating Label */}
              <div className="absolute bottom-6 left-6 border border-white/10 bg-black/40 px-5 py-4 backdrop-blur-xl">

                <p className="text-[10px] uppercase tracking-[0.35em] text-blue-300/70">
                  Specialized In
                </p>

                <h3 className="mt-2 text-xl font-black uppercase text-white">
                  Real-Time Systems
                </h3>

              </div>

            </div>

          </div>

          {/* Floating Side Card */}
          <div className="absolute -left-16 top-20 border border-white/10 bg-[#0b0f18]/95 p-6 backdrop-blur-xl shadow-2xl">

            <p className="text-[10px] uppercase tracking-[0.3em] text-blue-400/70">
              Focus
            </p>

            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li>• Distributed Systems</li>
              <li>• WebSockets</li>
              <li>• Clean Architecture</li>
              <li>• Scalable Backend</li>
            </ul>

          </div>

        </div>

      </div>

    </div>

  </div>

        </section>

        {/* Skills */}
        <section id="skills" className="py-24 bg-[#0A0F1D] relative overflow-hidden border-b border-[#0751CF]/20">
      {/* Absolute Minimalist Glow - Soft but deep aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#0751CF]/5 blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Compact, High-End Editorial Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-gray-800 pb-6 mb-16">
          <div>
            <span className="text-xs font-medium tracking-[0.3em] text-[#75A3FF] block mb-2 uppercase">
              Capabilities
            </span>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-white uppercase font-serif">
              Selected <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Expertise</span>
            </h2>
          </div>
          <p className="text-xs text-gray-500 max-w-xs font-mono leading-relaxed sm:text-right">
            A curated matrix of technical proficiencies engineered for scale, performance, and premium aesthetics.
          </p>
        </div>

        {/* Compact Architectural Row Layout */}
        <div className="divide-y divide-gray-800/60">
          {Object.entries(skills).map(([title, list], index) => (
            <div 
              key={title} 
              className="grid grid-cols-1 md:grid-cols-12 gap-6 py-8 first:pt-0 last:pb-0 group transition-all duration-300"
            >
              {/* Category Column */}
              <div className="md:col-span-4 flex items-baseline gap-3">
                <span className="text-xs font-mono text-[#0751CF] font-bold">
                  ({String(index + 1).padStart(2, '0')})
                </span>
                <h3 className="text-md font-bold uppercase tracking-wider text-gray-300 group-hover:text-white transition-colors duration-300">
                  {title}
                </h3>
              </div>

              {/* Skills Item Column (Takes up minimal space, dynamic hover) */}
              <div className="md:col-span-8 flex flex-wrap gap-2.5">
                {list.map((item) => (
                  <div
                    key={item}
                    className="group/item relative px-4 py-2 bg-[#0E162C] border border-gray-800 hover:border-[#0751CF] transition-all duration-300 cursor-default"
                  >
                    {/* Tiny Top-Left Accent Line revealed on hover */}
                    <div className="absolute top-0 left-0 w-0 h-[2px] bg-[#75A3FF] group-hover/item:w-1/2 transition-all duration-300" />
                    
                    <div className="flex items-center gap-2">
                      {/* Premium indicator dot */}
                      <span className="w-1 h-1 rounded-full bg-gray-600 group-hover/item:bg-[#75A3FF] transition-colors duration-300" />
                      
                      <span className="text-xs font-mono uppercase tracking-widest text-gray-400 group-hover/item:text-white transition-colors duration-300">
                        {item}
                      </span>
                    </div>

                    {/* Clean background subtle slide-up effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0751CF]/5 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
      </div>
        </section>

        {/* Projects */}
        <section
  id="projects"
  className="relative overflow-hidden border-b border-white/10 bg-[#020305]"
>
  {/* BACKGROUND */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.14),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.08),transparent_28%)]" />

  {/* GRID */}
  <div
    className="absolute inset-0 opacity-[0.03]"
    style={{
      backgroundImage: `
      linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)
    `,
      backgroundSize: "90px 90px",
    }}
  />

  {/* NOISE */}
  <div
    className="absolute inset-0 opacity-[0.03] mix-blend-soft-light"
    style={{
      backgroundImage:
        "url('https://grainy-gradients.vercel.app/noise.svg')",
    }}
  />

  <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">

    {/* HEADER */}
    <div
  className="
    mb-10
    flex
    flex-col
    gap-6
    sm:mb-12
    md:mb-14
    lg:mb-16
    lg:flex-row
    lg:items-end
    lg:justify-between
  "
>

  {/* LEFT */}
  <div className="w-full max-w-4xl">

    {/* TOP LABEL */}
    <div
      className="
        mb-4
        flex
        items-center
        gap-2
        sm:gap-3
      "
    >

      <div
        className="
          h-[2px]
          w-8
          bg-blue-500
          shadow-[0_0_20px_rgba(59,130,246,0.8)]
          sm:w-12
          md:w-14
        "
      />

      <span
        className="
          text-[9px]
          font-bold
          uppercase
          tracking-[0.28em]
          text-blue-300/70
          sm:text-[10px]
          md:text-[11px]
          lg:tracking-[0.35em]
        "
      >
        Selected Work
      </span>

    </div>

    {/* HEADING */}
    <h2
      className="
        flex
        flex-wrap
        items-center
        gap-x-2
        gap-y-1
        text-[2.2rem]
        font-black
        uppercase
        leading-[0.9]
        tracking-[-0.06em]
        text-white
        xs:text-[2.5rem]
        sm:text-5xl
        md:text-6xl
        lg:text-7xl
      "
    >

      <span>Featured</span>

      <span
        className="
          bg-gradient-to-r
          from-blue-500
          via-cyan-300
          to-white
          bg-clip-text
          text-transparent
        "
      >
        Projects
      </span>

    </h2>

  </div>

  {/* RIGHT TEXT */}
  <div
    className="
      w-full
      max-w-full
      sm:max-w-md
      lg:max-w-sm
      lg:pb-2
    "
  >

    <p
      className="
        text-sm
        leading-relaxed
        text-white/45
        sm:text-[15px]
        md:text-base
        lg:text-right
      "
    >
      Real-time systems, scalable backend architecture,
      and production-focused full stack engineering.
    </p>

  </div>

</div>

    {/* PROJECT LIST */}
    <div className="space-y-8 sm:space-y-10 lg:space-y-12">

      {projects.map((project, index) => {

        const isReverse = index % 2 !== 0

        return (

          <div
            key={project.name}
            className="
              group
              relative
              overflow-hidden
              border
              border-white/10
              bg-white/[0.02]
              transition-all
              duration-500
              hover:border-blue-500/30
            "
          >

            {/* HOVER */}
            <div className="absolute inset-0 bg-blue-500/[0.03] opacity-0 transition duration-500 group-hover:opacity-100" />

            <div
              className="
                grid
                grid-cols-1
                lg:grid-cols-2
              "
            >

              {/* IMAGE */}
              <div
                className={`
                  relative
                  overflow-hidden
                  border-b
                  border-white/10
                  lg:border-b-0
                  ${isReverse ? "lg:order-2" : ""}
                `}
              >

                <div
                  className="
                    h-[220px]
                    sm:h-[300px]
                    md:h-[360px]
                    lg:h-full
                    min-h-[220px]
                  "
                >

                  <img
                    src={project.image.src}
                    alt={project.name}
                    className="
                      h-full
                      w-full
                      object-cover
                      transition
                      duration-700
                      group-hover:scale-[1.03]
                    "
                  />

                </div>

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#020305] via-transparent to-transparent" />

                {/* FLOATING NUMBER */}
                <div
                  className="
                    absolute
                    left-4
                    top-4
                    border
                    border-white/10
                    bg-black/40
                    px-3
                    py-2
                    backdrop-blur-xl
                    sm:left-6
                    sm:top-6
                  "
                >

                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/60">
                    0{index + 1}
                  </span>

                </div>

              </div>

              {/* CONTENT */}
              <div
                className={`
                  relative
                  flex
                  flex-col
                  justify-center
                  p-5
                  sm:p-7
                  md:p-8
                  lg:p-10
                  ${isReverse ? "lg:order-1" : ""}
                `}
              >

                {/* SMALL LABEL */}
                <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-blue-300/60">
                  Case Study
                </span>

                {/* TITLE */}
                <h3
                  className="
                    mt-3
                    text-2xl
                    font-black
                    uppercase
                    leading-[0.95]
                    tracking-[-0.04em]
                    text-white
                    sm:text-3xl
                    md:text-4xl
                  "
                >
                  {project.name}
                </h3>

                {/* DESCRIPTION */}
                <p
                  className="
                    mt-5
                    max-w-2xl
                    text-sm
                    leading-relaxed
                    text-white/55
                    sm:text-[15px]
                    md:text-base
                  "
                >
                  {project.description}
                </p>

                {/* TECH STACK */}
                <div className="mt-6 flex flex-wrap gap-2">

                  {project.tech.map((t) => (

                    <span
                      key={t}
                      className="
                        border
                        border-white/10
                        bg-white/[0.03]
                        px-3
                        py-1.5
                        text-[10px]
                        font-semibold
                        uppercase
                        tracking-[0.18em]
                        text-white/60
                        sm:px-4
                      "
                    >
                      {t}
                    </span>

                  ))}

                </div>

                {/* BUTTONS */}
                <div
                  className="
                    mt-8
                    flex
                    flex-col
                    gap-3
                    sm:flex-row
                    sm:flex-wrap
                  "
                >

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        group/btn
                        relative
                        flex
                        items-center
                        justify-center
                        gap-2
                        overflow-hidden
                        border
                        border-blue-500
                        bg-blue-600
                        px-5
                        py-3.5
                        text-[11px]
                        font-bold
                        uppercase
                        tracking-[0.18em]
                        text-white
                        transition-all
                        duration-300
                        hover:bg-blue-500
                        sm:w-auto
                      "
                    >

                      <div className="absolute inset-0 translate-y-full bg-white/10 transition duration-500 group-hover/btn:translate-y-0" />

                      <span className="relative z-10 flex items-center gap-2">
                        <ExternalLink size={14} />
                        Live Demo
                      </span>

                    </a>
                  )}

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        flex
                        items-center
                        justify-center
                        gap-2
                        border
                        border-white/10
                        bg-white/[0.03]
                        px-5
                        py-3.5
                        text-[11px]
                        font-bold
                        uppercase
                        tracking-[0.18em]
                        text-white/70
                        transition-all
                        duration-300
                        hover:border-blue-500/30
                        hover:bg-blue-500/[0.03]
                        hover:text-white
                      "
                    >
                      <Github size={14} />
                      Source Code
                    </a>
                  )}

                </div>

              </div>

            </div>

          </div>

        )
      })}
    </div>

    {/* CTA */}
    <div className="mt-12 flex justify-center sm:mt-16">

      <a
        href="https://github.com/Roshan-Pandit-11"
        target="_blank"
        rel="noopener noreferrer"
        className="
          group
          relative
          overflow-hidden
          border
          border-white/10
          bg-white/[0.03]
          px-7
          py-4
          text-[11px]
          font-bold
          uppercase
          tracking-[0.25em]
          text-white
          transition-all
          duration-300
          hover:border-blue-500/30
          hover:bg-blue-500/[0.05]
        "
      >

        <div className="absolute inset-0 translate-y-full bg-blue-500/[0.08] transition duration-500 group-hover:translate-y-0" />

        <span className="relative z-10 flex items-center gap-3">
          View More Projects
          <ArrowRight
            size={15}
            className="transition duration-300 group-hover:translate-x-1"
          />
        </span>

      </a>

    </div>

  </div>
        </section>
        

        <section
  id="contact"
  className="
    relative
    overflow-hidden
    border-t
    border-white/10
    bg-[#020305]
  "
>

  {/* ATMOSPHERIC BACKGROUND */}
  <div className="absolute inset-0">

    {/* GRID */}
    <div
      className="absolute inset-0 opacity-[0.04]"
      style={{
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
        `,
        backgroundSize: "90px 90px",
      }}
    />

    {/* GLOW */}
    <div className="absolute left-[-10%] top-[-10%] h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[140px]" />

    <div className="absolute bottom-[-20%] right-[-10%] h-[600px] w-[600px] rounded-full bg-cyan-500/10 blur-[160px]" />

    {/* NOISE */}
    <div
      className="absolute inset-0 opacity-[0.03] mix-blend-soft-light"
      style={{
        backgroundImage:
          "url('https://grainy-gradients.vercel.app/noise.svg')",
      }}
    />

  </div>

  {/* MAIN */}
  <div
    className="
      relative
      z-10
      mx-auto
      max-w-7xl
      px-5
      py-20
      sm:px-6
      lg:px-8
      lg:py-28
    "
  >

    {/* TOP LABEL */}
    <div className="mb-8 flex items-center gap-4">

      <div className="h-[2px] w-16 bg-blue-500 shadow-[0_0_25px_rgba(59,130,246,0.7)]" />

      <span
        className="
          text-[10px]
          font-bold
          uppercase
          tracking-[0.35em]
          text-blue-200/60
        "
      >
        Contact
      </span>

    </div>

    {/* MAIN GRID */}
    <div className="grid gap-14 lg:grid-cols-[1fr_420px]">

      {/* LEFT SIDE */}
      <div>

        {/* HUGE HEADING */}
        <div className="relative">

          {/* MASSIVE BG WORD */}
          <div
            className="
              pointer-events-none
              absolute
              -top-10
              left-0
              text-[5rem]
              font-black
              uppercase
              leading-none
              text-white/[0.03]
              sm:text-[7rem]
              lg:text-[10rem]
            "
          >
            TALK
          </div>

          <h2
            className="
              relative
              z-10
              max-w-4xl
              text-5xl
              font-black
              uppercase
              leading-[0.9]
              tracking-[-0.05em]
              text-white
              sm:text-6xl
              lg:text-[7rem]
            "
          >
            LET'S
            <span
              className="
                block
                bg-gradient-to-r
                from-blue-500
                via-cyan-300
                to-white
                bg-clip-text
                text-transparent
              "
            >
              BUILD
            </span>
          </h2>

        </div>

        {/* DESCRIPTION */}
        <div
          className="
            mt-10
            max-w-2xl
            border-l
            border-blue-500/30
            pl-6
          "
        >

          <p
            className="
              text-base
              leading-relaxed
              text-white/60
              sm:text-lg
            "
          >
            Backend-oriented full stack developer focused on
            scalable architectures, real-time systems,
            distributed infrastructure, and premium user
            experiences.
          </p>

          <p
            className="
              mt-5
              text-base
              leading-relaxed
              text-white/45
              sm:text-lg
            "
          >
            Currently open to full stack engineering,
            backend engineering, and high-impact product
            development opportunities.
          </p>

        </div>

        {/* CTA */}
        <div className="mt-12 flex flex-wrap gap-4">

          <a
            href="mailto:roshanpandit1124@gmail.com"
            className="
              group
              relative
              overflow-hidden
              border
              border-blue-500
              bg-blue-600
              px-7
              py-4
              text-sm
              font-bold
              uppercase
              tracking-[0.18em]
              text-white
              transition
              duration-300
              hover:scale-[1.02]
              hover:shadow-[0_0_40px_rgba(37,99,235,0.45)]
            "
          >

            <span className="relative z-10 flex items-center gap-3">

              Start Conversation

              <ArrowRight
                size={16}
                className="
                  transition
                  duration-300
                  group-hover:translate-x-1
                "
              />

            </span>

            <div
              className="
                absolute
                inset-0
                translate-y-full
                bg-white/10
                transition
                duration-500
                group-hover:translate-y-0
              "
            />

          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            className="
              border
              border-white/10
              bg-white/[0.03]
              px-7
              py-4
              text-sm
              font-bold
              uppercase
              tracking-[0.18em]
              text-white/70
              transition
              duration-300
              hover:border-blue-500/30
              hover:text-white
            "
          >
            Resume
          </a>

        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="relative">

        {/* OUTER GLOW */}
        <div className="absolute inset-0 bg-blue-500/10 blur-[100px]" />

        {/* CARD */}
        <div
          className="
            relative
            overflow-hidden
            border
            border-white/10
            bg-[#05070d]
            shadow-[0_40px_120px_rgba(0,0,0,0.8)]
          "
        >

          {/* TOP BAR */}
          <div
            className="
              flex
              items-center
              justify-between
              border-b
              border-white/10
              px-6
              py-4
            "
          >

            <div className="flex items-center gap-2">

              <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
              <div className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
              <div className="h-2.5 w-2.5 rounded-full bg-green-400" />

            </div>

            <p
              className="
                text-[10px]
                uppercase
                tracking-[0.35em]
                text-white/30
              "
            >
              CONNECT
            </p>

          </div>

          {/* CONTENT */}
          <div className="p-6">

            {/* EMAIL */}
            <div
              className="
                border
                border-blue-500/20
                bg-blue-500/[0.03]
                p-5
              "
            >

              <p
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.35em]
                  text-blue-300/70
                "
              >
                Email
              </p>

              <a
                href="mailto:roshanpandit1124@gmail.com"
                className="
                  mt-3
                  block
                  break-all
                  text-lg
                  font-semibold
                  text-white
                  transition
                  duration-300
                  hover:text-blue-400
                "
              >
                roshanpandit1124@gmail.com
              </a>

            </div>

            {/* SOCIALS */}
            <div className="mt-6 grid grid-cols-2 gap-4">

              <a
                href="https://github.com/Roshan-Pandit-11"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  border
                  border-white/10
                  bg-white/[0.02]
                  p-5
                  transition
                  duration-300
                  hover:border-blue-500/30
                  hover:bg-blue-500/[0.03]
                "
              >

                <Github
                  size={22}
                  className="
                    text-white/60
                    transition
                    duration-300
                    group-hover:text-white
                  "
                />

                <p
                  className="
                    mt-5
                    text-xs
                    font-bold
                    uppercase
                    tracking-[0.25em]
                    text-white/40
                  "
                >
                  GitHub
                </p>

              </a>

              <a
                href="https://linkedin.com/in/roshan-pandit-90bb0a342"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  border
                  border-white/10
                  bg-white/[0.02]
                  p-5
                  transition
                  duration-300
                  hover:border-blue-500/30
                  hover:bg-blue-500/[0.03]
                "
              >

                <Linkedin
                  size={22}
                  className="
                    text-white/60
                    transition
                    duration-300
                    group-hover:text-white
                  "
                />

                <p
                  className="
                    mt-5
                    text-xs
                    font-bold
                    uppercase
                    tracking-[0.25em]
                    text-white/40
                  "
                >
                  LinkedIn
                </p>

              </a>

              <a
                href="https://leetcode.com/u/RoshanPandit/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  border
                  border-white/10
                  bg-white/[0.02]
                  p-5
                  transition
                  duration-300
                  hover:border-blue-500/30
                  hover:bg-blue-500/[0.03]
                "
              >

                <div
                  className="
                    text-lg
                    font-black
                    text-white/60
                    transition
                    duration-300
                    group-hover:text-white
                  "
                >
                  LC
                </div>

                <p
                  className="
                    mt-5
                    text-xs
                    font-bold
                    uppercase
                    tracking-[0.25em]
                    text-white/40
                  "
                >
                  LeetCode
                </p>

              </a>

              <a
                href="mailto:roshanpandit1124@gmail.com"
                className="
                  group
                  border
                  border-blue-500/20
                  bg-blue-500/[0.03]
                  p-5
                  transition
                  duration-300
                  hover:border-blue-500/40
                  hover:bg-blue-500/[0.05]
                "
              >

                <Mail
                  size={22}
                  className="
                    text-blue-300
                    transition
                    duration-300
                    group-hover:text-white
                  "
                />

                <p
                  className="
                    mt-5
                    text-xs
                    font-bold
                    uppercase
                    tracking-[0.25em]
                    text-blue-200/70
                    transition
                    duration-300
                    group-hover:text-white
                  "
                >
                  Email
                </p>

              </a>

            </div>

          </div>

        </div>

      </div>

    </div>

  </div>

        </section>
      </main>

      <footer className="border-t pt-8 pb-16 text-center border-[#242d4a]">
        <div className="text-center pb-8 text-xl font-semibold font-mono">
         <span className="bg-gradient-to-r from-pink-300 to-orange-700 bg-clip-text text-transparent inline-flex items-center ">
          You are visitor #<span className='font-semibold text-[#ffe5c7]'>{count}</span>. 
          <Heart color='red' className="w-5 h-5" />
        </span>
        </div>
        <div className="max-w-7xl mx-auto px-6 space-y-6">
          {/* Divider Line */}
          <div className="flex items-center justify-center gap-4">
            <div className="flex-1 h-px bg-[#242d4a]"></div>
            <div className="w-2 h-2 rounded-full bg-[#00b909]"></div>
            <div className="flex-1 h-px bg-[#242d4a]"></div>
          </div>

          {/* Footer Content */}
          <div className="space-y-2">
            <p className="text-sm font-semibold text-[#ffffff]">
              Crafted by Roshan Pandit
            </p>
            <p className="text-xs text-[#b0b0c0]" >
              © 2026 All rights reserved. Designed for precision, built for impact.
            </p>
          </div>

          {/* Tech Stack Footer */}
          <div className="flex items-center justify-center gap-3 flex-wrap pt-4">
            <span className="text-xs text-[#b0b0c0]">Built with</span>
            <div className="flex gap-3">
              <span className="px-3 py-1 text-xs border text-[#1d23c3] bg-[#9dc4ff] border-[#4478d2]">
                Next.js
              </span>
              <span className="px-3 py-1 text-xs border text-[#1d23c3] bg-[#9dc4ff] border-[#4478d2]">
                React
              </span>
              <span className="px-3 py-1 text-xs border text-[#1d23c3] bg-[#9dc4ff] border-[#4478d2]">
                TypeScript
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
