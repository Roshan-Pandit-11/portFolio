'use client'

import { Github, ExternalLink, ArrowRight , Linkedin , Mail , Heart} from 'lucide-react'
import razorpayImage from "./images/razorpay-image.png" ;
import secondBrain_image from "./images/second-brain.png"
import playfy_ss_portfolio from "./images/playfy_ss_portfolio.png" ;
import profile_pic from "./images/profile_pic.jpg" ;
import sketchFlow_img from "./images/sketchflow-ss-1.png" ;
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
       <nav className="backdrop-blur-md sticky top-0 z-50 border-b border-[#242d4a]">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 flex justify-center items-center font-bold font-sans rounded-md bg-[#0751cf]">
            RP
          </div>
          <span className="font-serif text-base sm:text-lg font-semibold">
            Roshan Pandit
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 text-sm tracking-wide">
          <a href="#skills" className="hover:text-[#3b83ff] p-2 rounded-2xl hover:bg-[#282f43] transition">
            Skills
          </a>
          <a href="#projects" className="hover:text-[#3b83ff] p-2 rounded-2xl hover:bg-[#282f43] transition">
            Projects
          </a>
          <a href="#contact" className="hover:text-[#3b83ff] p-2 rounded-2xl hover:bg-[#282f43] transition">
            Contact
          </a>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden px-2 rounded-sm hover:bg-gray-700 text-white"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-3 text-sm">
          <a onClick={() => setOpen(false)} href="#skills" className="p-2 rounded-xl hover:bg-[#282f43]">
            Skills
          </a>
          <a onClick={() => setOpen(false)}  href="#projects" className="p-2 rounded-xl hover:bg-[#282f43]">
            Projects
          </a>
          <a onClick={() => setOpen(false)}  href="#contact" className="p-2 rounded-xl hover:bg-[#282f43]">
            Contact
          </a>
        </div>
      )}
      </nav>

      <main className="max-w-7xl mx-auto px-6">
        {/* Hero */}
        <section
  className="relative min-h-[85vh] md:min-h-[90vh] border-b flex items-center overflow-hidden py-16 sm:py-20"
  style={{ borderColor: '#0850CB' }}
>
  {/* Animated Background Elements */}
  <div className="absolute inset-0 opacity-40 pointer-events-none">
    <div
      className="absolute top-10 sm:top-20 left-4 sm:left-10 w-40 sm:w-72 h-40 sm:h-72 rounded-full blur-3xl animate-pulse"
      style={{ background: 'radial-gradient(circle, #0751CF 0%, #BBE1FA 100%)' }}
    ></div>
    <div
      className="absolute bottom-10 sm:bottom-20 right-4 sm:right-10 w-56 sm:w-96 h-56 sm:h-96 rounded-full blur-3xl animate-pulse"
      style={{ background: 'radial-gradient(circle, #0850CB 0%, #1B262C 100%)', animationDelay: '1s' }}
    ></div>
  </div>

  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-10 sm:gap-14 md:gap-20 items-center w-full">

    {/* Left Content */}
    <div className="space-y-6 sm:space-y-8">

      {/* Badge */}
      <div
        className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border-2"
        style={{
          borderColor: '#0751CF',
          backgroundColor: 'rgba(11, 80, 207, 0.15)',
        }}
      >
        <div
          className="w-2 h-2 rounded-full animate-pulse"
          style={{ backgroundColor: '#408A71' }}
        ></div>
        <span
          className="text-xs sm:text-sm font-semibold tracking-widest"
          style={{ color: '#0751CF' }}
        >
          AVAILABLE FOR WORK
        </span>
      </div>

      {/* Main Heading */}
      <div>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-8xl font-bold leading-tight mb-3 sm:mb-4" style={{ color: '#EEEEEE' }}>
          Roshan
          <br />
          <span className="bg-gradient-to-r from-[#ff7b29] via-[#f36dff] to-[#4adeff] bg-clip-text text-transparent">
            Pandit
          </span>
        </h1>
        <div
          className="h-1 w-16 sm:w-24 rounded-full mt-4 sm:mt-6"
          style={{ backgroundColor: '#0751CF' }}
        ></div>
      </div>

      {/* Subheading */}
      <div className="space-y-3 sm:space-y-4">
        <p className="text-base sm:text-xl font-semibold" style={{ color: '#BBE1FA' }}>
          Full Stack Developer
        </p>
        <p className="text-sm sm:text-lg leading-relaxed max-w-lg" style={{ color: '#FFFFFF' }}>
          I craft scalable full-stack applications and real-time collaboration
          systems with clean architecture, maintainable code, and outstanding user experiences.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-2 sm:pt-4">
        {[
          { value: '5+', label: 'Projects Built' },
          { value: '20+', label: 'Tech Skills' },
          { value: '100%', label: 'Dedicated' },
        ].map((stat) => (
          <div key={stat.label} className="space-y-1 sm:space-y-2">
            <p className="text-lg sm:text-2xl font-bold" style={{ color: '#0751CF' }}>{stat.value}</p>
            <p className="text-xs sm:text-sm" style={{ color: '#BBE1FA' }}>{stat.label}</p>
          </div>
        ))}
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 sm:pt-8">
        <a
          href="#projects"
          className="w-full sm:w-auto flex justify-center items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold border-2 border-[#0751CF] bg-[#0751CF] text-[#FFFFFF] transition-all duration-300 hover:bg-white hover:text-[#0751CF]"
        >
          <span>Explore My Work</span>
          <ArrowRight size={16} className="sm:group-hover:translate-x-1 transition-transform" />
        </a>

        <a
          href="#contact"
          className="w-full sm:w-auto text-center px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold border-2 border-[#0751CF] text-[#0751CF] bg-white hover:text-white hover:bg-blue-500 transition-all duration-200"
        >
          Get In Touch
        </a>
      </div>

      {/* Social Links */}
      <div className="flex gap-4 sm:gap-6 pt-2 sm:pt-4">
        <a
          href="https://github.com/Roshan-Pandit-11"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 sm:p-3 rounded-lg border-2 transition-all duration-300 hover:bg-white hover:border-blue-800"
          style={{ borderColor: '#0751CF', color: '#5478FF' }}
        >
          <Github size={18} />
        </a>
        <a
          href="https://linkedin.com/in/roshan-pandit-90bb0a342"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 sm:p-3 rounded-lg border-2 transition-all duration-300 hover:bg-white  hover:border-blue-800"
          style={{ borderColor: '#0751CF', color: '#5478FF' }}
        >
          <Linkedin size={18} />
        </a>
      </div>
    </div>

    {/* Right Side - Image */}
    <div className="hidden md:flex justify-center items-center">
      <div className="relative">
        {/* Glow */}
        <div
          className="absolute inset-0 rounded-3xl opacity-50 blur-2xl"
          style={{ background: 'linear-gradient(135deg, #0751CF, #0850CB)' }}
        ></div>

        {/* Image */}
        <div
          className="relative w-64 h-64 md:w-72 md:h-72 lg:w-96 lg:h-96 rounded-3xl overflow-hidden border-2 shadow-2xl backdrop-blur-md"
          style={{
            borderColor: '#0751CF',
            backgroundColor: 'rgba(7, 81, 207, 0.08)',
            boxShadow: '0 25px 50px -12px rgba(7, 81, 207, 0.3)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/40 pointer-events-none"></div>
          <img
            src={profile_pic.src}
            alt="Roshan Pandit"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Floating Badge */}
        <div
          className="absolute -bottom-4 -right-4 md:-bottom-5 md:-right-5 lg:-bottom-6 lg:-right-6 px-4 md:px-5 lg:px-6 py-2 md:py-2.5 lg:py-3 rounded-2xl font-semibold shadow-xl border-2 backdrop-blur-md"
          style={{
            backgroundColor: '#1B262C',
            borderColor: '#0751CF',
            color: '#BBE1FA',
          }}
        >
          Full Stack Dev
        </div>
      </div>
    </div>

  </div>
        </section>

        {/* Skills */}
        <section id="skills" className="py-24 border-b" style={{ borderColor: '#0850CB' }}>
  <h2 className="text-6xl font-bold font-serif mb-12 text-[#6eafff]">
    Skills & Expertise
  </h2>

  <div className="grid sm:grid-cols-2 gap-12">
    {Object.entries(skills).map(([title, list]) => (
      <div key={title} className="space-y-3">
        {/* Skill Category */}
        <h3
          className="text-sm uppercase tracking-wide mb-4"
          style={{ color: '#75A3FF' }}
        >
          {title}
        </h3>

        {/* Skills List */}
        <div className="flex flex-wrap gap-3">
          {list.map((item) => (
            <span
              key={item}
              className="px-4 py-2 text-sm rounded-lg border transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{
                borderColor: '#0751CF',
                background: 'rgba(7, 81, 207, 0.08)',
                color: '#FFFFFF',
              }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    ))}
  </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-24 border-b border-[#393939]">
          <h2 className="text-6xl font-bold font-serif text-[#6eafff]">Featured Projects</h2>
          <p className='mb-12 mt-2'>A selection of full-stack applications and collaborative systems designed to solve real-world problems.</p>

          <div className="space-y-24">
            {projects.map((project, index) => {
              const isReverse = index % 2 !== 0

              return (
                <div
  key={project.name}
  className="grid md:grid-cols-2 gap-14 items-center"
>
  {/* TEXT */}
  <div
    className={`
      order-2 
      ${isReverse ? 'md:order-2' : 'md:order-1'}
    `}
  >
    <h3 className="text-3xl font-mono text-cyan-300 font-semibold mb-4">
      {project.name}
    </h3>

    <p className="text-neutral-300 mb-6 leading-relaxed max-w-xl">
      {project.description}
    </p>

    <div className="flex gap-4 mb-6">
      {project.demo && (
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 text-sm rounded-md border border-neutral-700 hover:border-indigo-400 hover:text-indigo-400 transition"
        >
          <ExternalLink size={16} />
          Live Demo
        </a>
      )}

      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 text-sm rounded-md border border-neutral-700 hover:border-indigo-400 hover:text-indigo-400 transition"
        >
          <Github size={16} />
          GitHub
        </a>
      )}
    </div>

    <div className="flex flex-wrap gap-2">
      {project.tech.map((t) => (
        <span
          key={t}
          className="px-3 py-1 text-xs rounded bg-neutral-900 border border-neutral-800 hover:border-indigo-400/50 transition"
        >
          {t}
        </span>
      ))}
    </div>
  </div>

  {/* IMAGE */}
  <div
    className={`
      order-1 
      relative w-full h-64 sm:h-72 rounded-xl overflow-hidden border border-neutral-800
      ${isReverse ? 'md:order-1' : 'md:order-2'}
    `}
  >
    <img
      src={project.image.src}
      alt={project.name}
      className="w-full h-full object-contain"
    />
  </div>
              </div>
              )
            })}
          </div>

          <div className="flex justify-center mt-12">
              <a
                href="https://github.com/Roshan-Pandit-11"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-3 rounded-lg font-semibold border-2 transition-all duration-300 hover:shadow-lg hover:scale-105 bg-[#0751cf] text-[#ffffff] border-none hover:bg-[#0645b2]"
              >
                View More Projects
                <ArrowRight size={16} />
              </a>
          </div>

        </section>
        
        <section id="contact" className="relative pt-20 sm:pt-24 md:pt-32 lg:pt-32 pb-16 sm:pb-20 md:pb-24 lg:pb-24 overflow-hidden">
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-6">
    
    <div className="max-w-3xl lg:max-w-3xl">
      
      {/* Header */}
      <div className="mb-12 sm:mb-16 lg:mb-16">
        <div className="flex items-center gap-3 sm:gap-4 mb-4">
          <div className="h-1 w-10 sm:w-16 lg:w-16 rounded-full bg-[#0751cf]"></div>
          <p className="text-xs sm:text-sm lg:text-sm font-semibold tracking-widest uppercase text-[#083687]">
            Get In Touch
          </p>
        </div>

        <h2 className="font-serif 
          text-4xl sm:text-5xl md:text-6xl 
          lg:text-6xl xl:text-7xl 
          font-bold mb-6 sm:mb-8 lg:mb-8 text-white leading-tight">
          Let's Build <br />
          <span className="text-[#0751cf]">Something Amazing</span>
        </h2>
      </div>

      {/* Description */}
      <div className="mb-12 sm:mb-16 lg:mb-16 space-y-4">
        <p className="text-base sm:text-lg lg:text-lg leading-relaxed text-[#b0b0c0]">
          I'm actively seeking <span className="text-[#f5f3f0]">Full Stack Developer</span> and{" "}
          <span className="text-[#f5f3f0]">Backend Engineer</span> opportunities where I can architect scalable systems and build real-time collaborative applications.
        </p>
        <p className="text-base sm:text-lg lg:text-lg leading-relaxed text-[#b0b0c0]">
          Whether you're developing a cutting-edge product, scaling an existing system, or exploring innovative ideas, I'm excited to collaborate and bring exceptional technical expertise to your team.
        </p>
      </div>

      {/* Contact Options */}
      <div className="space-y-6 lg:space-y-6">

        {/* Email CTA */}
        <div className="p-4 sm:p-6 md:p-8 lg:p-8 rounded-2xl border-2 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] lg:hover:scale-105 border-[#0750cd] bg-[#232944]">
          <p className="text-xs sm:text-sm lg:text-sm uppercase tracking-widest font-semibold mb-2 sm:mb-3 text-[#0850cb]">
            Email
          </p>
          <a 
            href="mailto:roshanpandit1124@gmail.com"
            className="text-base sm:text-lg md:text-xl lg:text-xl font-semibold text-white break-all hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-cyan-400 hover:to-indigo-400 transition-all"
          >
            roshanpandit1124@gmail.com
          </a>
        </div>

        {/* Social Links */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
          
          <a href="https://github.com/Roshan-Pandit-11" target="_blank"
            className="p-4 sm:p-6 lg:p-6 rounded-2xl border-2 flex flex-col items-center gap-2 sm:gap-3 lg:gap-3 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:text-cyan-400 group bg-[#0F122980] border-[#242d4a]">
            <Github size={24}/>
            <span className="text-xs sm:text-sm lg:text-sm font-semibold text-white ">
              GitHub
            </span>
          </a>

          <a href="https://linkedin.com/in/roshan-pandit-90bb0a342" target="_blank"
            className="p-4 sm:p-6 lg:p-6 rounded-2xl border-2 flex flex-col items-center gap-2 sm:gap-3 lg:gap-3 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:text-cyan-400 group bg-[#0F122980] border-[#242d4a]">
            <Linkedin size={24}/>
            <span className="text-xs sm:text-sm lg:text-sm font-semibold text-white">
              LinkedIn
            </span>
          </a>

          <a href="https://leetcode.com/u/RoshanPandit/" target="_blank"
            className="p-4 sm:p-6 lg:p-6 rounded-2xl border-2 flex flex-col items-center gap-2 sm:gap-3 lg:gap-3 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:text-cyan-400 group bg-[#0F122980] border-[#242d4a]">
            <div className="font-semibold text-sm">LC</div>
            <span className="text-xs sm:text-sm lg:text-sm font-semibold text-white">
              LeetCode
            </span>
          </a>

          <a href="mailto:roshanpandit1124@gmail.com"
            className="p-4 sm:p-6 lg:p-6 rounded-2xl border-2 flex flex-col items-center gap-2 sm:gap-3 lg:gap-3 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group border-[#0750cd] bg-[#232944]">
            <Mail size={24}/>
            <span className="text-xs sm:text-sm lg:text-sm font-semibold text-[#0850cb] group-hover:text-white transition-colors">
              Email
            </span>
          </a>

        </div>
      </div>

      {/* CTA Button */}
      <div className="mt-10 sm:mt-12 lg:mt-12 flex gap-4 flex-wrap">
        <a
          href="mailto:roshanpandit1124@gmail.com"
          className="flex items-center gap-2 px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-2xl lg:hover:scale-105 text-base sm:text-lg lg:text-lg text-white bg-[#0751cf] hover:bg-[#0645b2]"
        >
          Start a Conversation
          <ArrowRight size={18} />
        </a>
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
              <span className="px-3 py-1 text-xs rounded-full border text-[#1d23c3] bg-[#9dc4ff] border-[#4478d2]">
                Next.js
              </span>
              <span className="px-3 py-1 text-xs rounded-full border text-[#1d23c3] bg-[#9dc4ff] border-[#4478d2]">
                React
              </span>
              <span className="px-3 py-1 text-xs rounded-full border text-[#1d23c3] bg-[#9dc4ff] border-[#4478d2]">
                TypeScript
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
