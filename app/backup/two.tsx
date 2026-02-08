'use client'

import { Github, ExternalLink, ArrowRight , Linkedin} from 'lucide-react'
import razorpayImage from "./images/razorpay-image.png" ;
import secondBrain_image from "./images/second-brain.png"
import minipayImage from "./images/minipay.png"
import playfyImage from "./images/playfy.png"

export default function Home() {
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
      name: 'PlayFy',
      description:
        'Playfy is a full-stack application that enables users to create rooms and share songs with real-time collaboration and seamless playback.',
      tech: ['Next.js', 'TypeScript' , 'PostgreSQL', 'Prisma', 'ws' , 'Tailwind' , 'react-player' , 'bcryptjs' , 'zod' , 'jwt'],
      image: playfyImage,
      demo: null ,
      github: 'https://github.com/Roshan-Pandit-11/playfy',
    },
    {
      name: 'MiniPay',
      description:
        'Minipay is a responsive digital payment platform that allows users to authenticate securely, track balances, and perform instant peer-to-peer transactions through an intuitive dashboard.',
      tech: ['React', 'TypeScript', 'react-dom' , 'Tailwind' , 'express' , 'bcrypt' , 'cors' , 'jwt' , 'mongoDB' , 'zod'],
      image: minipayImage,
      demo: null,
      github: 'https://github.com/Roshan-Pandit-11/minipay',
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
    <div className="min-h-screen bg-[#042021] text-neutral-100">
      {/* Navbar */}
      <nav className=" backdrop-blur-md sticky top-0 z-50 border-b border-[#242d4a] bg-[#031b1c]">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 flex justify-center items-center font-bold font-sans rounded-md" style={{ backgroundColor: '#d4af37' }}>RP</div>
            <span className="font-serif text-lg font-semibold" style={{ color: '#f5f3f0' }}>
              Roshan Pandit
            </span>
          </div>
          <div className="flex gap-10 text-sm tracking-wide">
            <a href="#skills" className="hover:text-yellow-400 transition duration-300">Skills</a>
            <a href="#projects" className="hover:text-yellow-400 transition duration-300">Projects</a>
            <a href="#contact" className="hover:text-yellow-400 transition duration-300">Contact</a>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6">
        {/* Hero */}
        <section className="relative min-h-screen md:min-h-[90vh] border-b flex items-center overflow-hidden py-20" style={{ borderColor: '#242d4a' }}>
          {/* Animated Background Elements */}
          <div className="absolute inset-0 opacity-40 pointer-events-none">
            <div 
              className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl animate-pulse bg-[#8b6a00]"
            ></div>
            <div 
              className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl animate-pulse"
              style={{ backgroundColor: '#16213e', animationDelay: '1s' }}
            ></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 md:gap-20 items-center w-full">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border-2 border-[#695100]" style={{ backgroundColor: 'rgba(212, 175, 55, 0.1)' }}>
                <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: '#2eb774' }}></div>
                <span className="text-sm font-semibold tracking-widest text-[#acda8b]">
                  AVAILABLE FOR WORK
                </span>
              </div>

              {/* Main Heading */}
              <div>
                <h1 className="font-serif text-7xl md:text-8xl font-bold leading-tight mb-4" style={{ color: '#f5f3f0' }}>
                  Roshan<br />
                  <span className="bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    Pandit
                  </span>
                </h1>
                <div className="h-1 w-24 rounded-full mt-6" style={{ backgroundColor: '#d4af37' }}></div>
              </div>

              {/* Subheading */}
              <div className="space-y-4">
                <p className="text-xl font-semibold" style={{ color: '#e8dcc8' }}>
                  Full Stack Developer
                </p>
                <p className="text-lg leading-relaxed max-w-lg" style={{ color: '#b0b0c0' }}>
                  I craft scalable full-stack applications and real-time collaboration systems with meticulous architecture, clean code, and exceptional user experiences.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-4">
                <div className="space-y-2">
                  <p className="text-2xl font-bold" style={{ color: '#d4af37' }}>5+</p>
                  <p className="text-sm" style={{ color: '#7a7a8e' }}>Projects Built</p>
                </div>
                <div className="space-y-2">
                  <p className="text-2xl font-bold" style={{ color: '#d4af37' }}>20+</p>
                  <p className="text-sm" style={{ color: '#7a7a8e' }}>Tech Skills</p>
                </div>
                <div className="space-y-2">
                  <p className="text-2xl font-bold" style={{ color: '#d4af37' }}>100%</p>
                  <p className="text-sm" style={{ color: '#7a7a8e' }}>Dedicated</p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-8">
                <a
                  href="#projects"
                  className="group relative px-8 py-4 rounded-lg font-semibold overflow-hidden transition-all duration-300 hover:shadow-2xl flex items-center gap-2"
                  style={{ backgroundColor: '#d4af37', color: '#0a0e27' }}
                >
                  <span>Explore My Work</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#contact"
                  className="px-8 py-4 rounded-lg font-semibold border-2 transition-all duration-300 hover:shadow-lg hover:scale-105 backdrop-blur-sm"
                  style={{ borderColor: '#d4af37', color: '#d4af37', backgroundColor: 'rgba(212, 175, 55, 0.05)' }}
                >
                  Get In Touch
                </a>
              </div>

              {/* Social Links */}
              <div className="flex gap-6 pt-4">
                <a href="https://github.com/Roshan-Pandit-11" target="_blank" rel="noopener noreferrer" 
                   className="p-3 rounded-lg border-2 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                   style={{ borderColor: '#d4af37', color: '#d4af37' }}>
                  <Github size={20} />
                </a>
                <a href="https://linkedin.com/in/roshan-pandit-90bb0a342" target="_blank" rel="noopener noreferrer"
                   className="p-3 rounded-lg border-2 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                   style={{ borderColor: '#d4af37', color: '#d4af37' }}>
                  <Linkedin size={20} />
                </a>
              </div>
            </div>

            {/* Right Side - Image with Premium Styling */}
            <div className="hidden md:flex justify-center items-center">
              <div className="relative">
                {/* Outer Glow Ring */}
                <div 
                  className="absolute inset-0 rounded-3xl opacity-50 blur-2xl"
                  style={{ backgroundColor: '#d4af37' }}
                ></div>

                {/* Main Image Container */}
                <div 
                  className="relative w-96 h-96 rounded-3xl overflow-hidden border-2 shadow-2xl backdrop-blur-md"
                  style={{ 
                    borderColor: '#d4af37',
                    backgroundColor: 'rgba(212, 175, 55, 0.08)',
                    boxShadow: '0 25px 50px -12px rgba(212, 175, 55, 0.3)'
                  }}
                >
                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/40 pointer-events-none"></div>
                  
                  <img
                   src={playfyImage.src}
                    alt="Roshan Pandit"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Floating Badge */}
                <div 
                  className="absolute -bottom-6 -right-6 px-6 py-3 rounded-2xl font-semibold shadow-xl border-2 backdrop-blur-md"
                  style={{ 
                    backgroundColor: '#0a0e27',
                    borderColor: '#d4af37',
                    color: '#d4af37'
                  }}
                >
                  Full Stack Dev
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
       <section id="skills" className="relative py-28 border-b overflow-hidden" style={{ borderColor: '#242d4a' }}>
          {/* Background Decorative Elements */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div 
              className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl"
              style={{ backgroundColor: '#d4af37' }}
            ></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6">
            {/* Section Header */}
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-1 w-16 rounded-full" style={{ backgroundColor: '#d4af37' }}></div>
                <p className="text-sm font-semibold tracking-widest uppercase" style={{ color: '#d4af37' }}>
                  Technical Arsenal
                </p>
              </div>
              <h2 className="font-serif text-6xl md:text-7xl font-bold" style={{ color: '#f5f3f0' }}>
                Skills & Expertise
              </h2>
            </div>

            {/* Compact Skills Display */}
            <div className="space-y-12">
              {Object.entries(skills).map(([title, list]) => (
                <div key={title} className="space-y-4">
                  {/* Category Title */}
                  <div className="flex items-center gap-3">
                    <div className="h-0.5 w-12" style={{ backgroundColor: '#d4af37' }}></div>
                    <h3 className="text-lg font-bold uppercase tracking-wide" style={{ color: '#f5f3f0' }}>
                      {title}
                    </h3>
                  </div>

                  {/* Skills Compact Display */}
                  <div className="flex flex-wrap gap-3">
                    {list.map((item) => (
                      <span
                        key={item}
                        className="px-4 py-2 text-sm font-medium rounded-lg border-2 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer group"
                        style={{
                          borderColor: '#d4af37',
                          backgroundColor: 'rgba(212, 175, 55, 0.08)',
                          color: '#e8dcc8'
                        }}
                      >
                        <span className="group-hover:text-white transition-colors">{item}</span>
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Stats Footer */}
            <div className="grid md:grid-cols-3 gap-6 mt-20 pt-16 border-t" style={{ borderColor: '#242d4a' }}>
              <div className="text-center">
                <p className="text-4xl font-bold mb-2" style={{ color: '#d4af37' }}>20+</p>
                <p className="text-sm uppercase tracking-widest" style={{ color: '#7a7a8e' }}>Technologies</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold mb-2" style={{ color: '#d4af37' }}>5+</p>
                <p className="text-sm uppercase tracking-widest" style={{ color: '#7a7a8e' }}>Years Ready</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold mb-2" style={{ color: '#d4af37' }}>Full Stack</p>
                <p className="text-sm uppercase tracking-widest" style={{ color: '#7a7a8e' }}>Capable</p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
         <section id="projects" className="relative py-32 border-b overflow-hidden" style={{ borderColor: '#242d4a' }}>
          {/* Background Elements */}
          <div className="absolute inset-0 opacity-30 pointer-events-none">
            <div 
              className="absolute bottom-32 left-0 w-80 h-80 rounded-full blur-3xl"
              style={{ backgroundColor: '#d4af37' }}
            ></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6">
            {/* Section Header */}
            <div className="mb-20">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-1 w-16 rounded-full" style={{ backgroundColor: '#d4af37' }}></div>
                <p className="text-sm font-semibold tracking-widest uppercase" style={{ color: '#d4af37' }}>
                  Portfolio Showcase
                </p>
              </div>
              <h2 className="font-serif text-6xl md:text-7xl font-bold" style={{ color: '#f5f3f0' }}>
                Featured Projects
              </h2>
              <p className="text-lg max-w-2xl mt-6" style={{ color: '#b0b0c0' }}>
                A selection of full-stack applications and collaborative systems designed to solve real-world problems.
              </p>
            </div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {projects.map((project, index) => (
                <div
                  key={project.name}
                  className="group relative overflow-hidden rounded-2xl border-2 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
                  style={{ 
                    borderColor: '#242d4a',
                    backgroundColor: 'rgba(15, 18, 41, 0.5)'
                  }}
                >
                  {/* Project Image */}
                  <div className="relative w-full h-64 overflow-hidden bg-gradient-to-br from-transparent to-black/50">
                    <img
                      src={project.image.src || "/placeholder.svg"}
                      alt={project.name}
                      className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                    />
                    <div 
                      className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    ></div>
                  </div>

                  {/* Project Content */}
                  <div className="p-8">
                    {/* Project Name with Accent */}
                    <div className="flex items-start gap-3 mb-4">
                      <div className="w-1 h-7 rounded-full mt-1" style={{ backgroundColor: '#d4af37' }}></div>
                      <h3 className="font-serif text-2xl font-bold" style={{ color: '#f5f3f0' }}>
                        {project.name}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-sm leading-relaxed mb-6" style={{ color: '#b0b0c0' }}>
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.slice(0, 4).map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 text-xs rounded-md border transition-all duration-300 hover:shadow-md"
                          style={{
                            borderColor: '#d4af37',
                            backgroundColor: 'rgba(212, 175, 55, 0.1)',
                            color: '#d4af37'
                          }}
                        >
                          {t}
                        </span>
                      ))}
                      {project.tech.length > 4 && (
                        <span
                          className="px-2.5 py-1 text-xs rounded-md border"
                          style={{
                            borderColor: '#242d4a',
                            backgroundColor: 'transparent',
                            color: '#7a7a8e'
                          }}
                        >
                          +{project.tech.length - 4}
                        </span>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2 flex-wrap">
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 text-sm rounded-lg font-medium border-2 transition-all duration-300 hover:shadow-lg"
                          style={{ borderColor: '#d4af37', color: '#d4af37' }}
                        >
                          <ExternalLink size={14} />
                          Demo
                        </a>
                      )}
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center justify-center gap-2 px-4 py-2.5 text-sm rounded-lg font-medium border-2 transition-all duration-300 hover:shadow-lg ${!project.demo ? 'flex-1' : ''}`}
                        style={{ borderColor: '#d4af37', color: '#d4af37' }}
                      >
                        <Github size={14} />
                        Code
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* View All Link */}
            <div className="flex justify-center mt-12">
              <a
                href="https://github.com/Roshan-Pandit-11"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-3 rounded-lg font-semibold border-2 transition-all duration-300 hover:shadow-lg hover:scale-105"
                style={{ borderColor: '#d4af37', color: '#d4af37' }}
              >
                View More Projects
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="relative py-32 overflow-hidden">
          {/* Background Decorative Elements */}
          <div className="absolute inset-0 opacity-40 pointer-events-none">
            <div 
              className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl"
              style={{ backgroundColor: '#d4af37' }}
            ></div>
            <div 
              className="absolute bottom-0 left-0 w-80 h-80 rounded-full blur-3xl"
              style={{ backgroundColor: '#16213e' }}
            ></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6">
            {/* Main Contact Card */}
            <div className="max-w-3xl">
              {/* Header */}
              <div className="mb-16">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-1 w-16 rounded-full" style={{ backgroundColor: '#d4af37' }}></div>
                  <p className="text-sm font-semibold tracking-widest uppercase" style={{ color: '#d4af37' }}>
                    Get In Touch
                  </p>
                </div>
                <h2 className="font-serif text-6xl md:text-7xl font-bold mb-8" style={{ color: '#f5f3f0' }}>
                  Let's Build
                  <br />
                  <span style={{ color: '#d4af37' }}>Something Amazing</span>
                </h2>
              </div>

              {/* Description */}
              <div className="mb-16 space-y-4">
                <p className="text-lg leading-relaxed" style={{ color: '#b0b0c0' }}>
                  I'm actively seeking <span style={{ color: '#f5f3f0' }}>Full Stack Developer</span> and <span style={{ color: '#f5f3f0' }}>Backend Engineer</span> opportunities where I can architect scalable systems and build real-time collaborative applications.
                </p>
                <p className="text-lg leading-relaxed" style={{ color: '#b0b0c0' }}>
                  Whether you're developing a cutting-edge product, scaling an existing system, or exploring innovative ideas, I'm excited to collaborate and bring exceptional technical expertise to your team.
                </p>
              </div>

              {/* Contact Options */}
              <div className="space-y-6">
                {/* Email CTA */}
                <div className="p-8 rounded-2xl border-2 transition-all duration-300 hover:shadow-xl hover:scale-105" 
                     style={{ borderColor: '#d4af37', backgroundColor: 'rgba(212, 175, 55, 0.1)' }}>
                  <p className="text-sm uppercase tracking-widest font-semibold mb-3" style={{ color: '#d4af37' }}>
                    Email
                  </p>
                  <a href="mailto:roshanpandit1124@gmail.com" className="text-xl font-semibold hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-cyan-400 hover:to-indigo-400 transition-all" style={{ color: '#f5f3f0' }}>
                    roshanpandit1124@gmail.com
                  </a>
                </div>

                {/* Social Links Grid */}
                <div className="grid md:grid-cols-4 gap-4">
                  <a 
                    href="https://github.com/Roshan-Pandit-11"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-6 rounded-2xl border-2 flex flex-col items-center gap-3 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
                    style={{ borderColor: '#242d4a', backgroundColor: 'rgba(15, 18, 41, 0.5)' }}
                  >
                    <Github size={24} style={{ color: '#d4af37' }} />
                    <span className="text-sm font-semibold group-hover:text-yellow-300 transition-colors" style={{ color: '#e8dcc8' }}>
                      GitHub
                    </span>
                  </a>

                  <a 
                    href="https://linkedin.com/in/roshan-pandit-90bb0a342"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-6 rounded-2xl border-2 flex flex-col items-center gap-3 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
                    style={{ borderColor: '#242d4a', backgroundColor: 'rgba(15, 18, 41, 0.5)' }}
                  >
                    <Linkedin size={24} style={{ color: '#d4af37' }} />
                    <span className="text-sm font-semibold group-hover:text-yellow-300 transition-colors" style={{ color: '#e8dcc8' }}>
                      LinkedIn
                    </span>
                  </a>

                  <a 
                    href="https://leetcode.com/u/RoshanPandit/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-6 rounded-2xl border-2 flex flex-col items-center gap-3 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
                    style={{ borderColor: '#242d4a', backgroundColor: 'rgba(15, 18, 41, 0.5)' }}
                  >
                    <div size={24} style={{ color: '#d4af37' }} className="font-bold text-lg">LC</div>
                    <span className="text-sm font-semibold group-hover:text-yellow-300 transition-colors" style={{ color: '#e8dcc8' }}>
                      LeetCode
                    </span>
                  </a>

                  <a 
                    href="mailto:roshanpandit1124@gmail.com"
                    className="p-6 rounded-2xl border-2 flex flex-col items-center gap-3 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
                    style={{ borderColor: '#d4af37', backgroundColor: 'rgba(212, 175, 55, 0.08)' }}
                  >
                    <div className="w-6 h-6 flex items-center justify-center" style={{ color: '#d4af37' }}>✉</div>
                    <span className="text-sm font-semibold group-hover:text-white transition-colors" style={{ color: '#d4af37' }}>
                      Email
                    </span>
                  </a>
                </div>
              </div>

              {/* CTA Button */}
              <div className="mt-12 flex gap-4 flex-wrap">
                <a
                  href="mailto:roshanpandit1124@gmail.com"
                  className="flex items-center gap-2 px-10 py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-2xl hover:scale-105 text-lg"
                  style={{ backgroundColor: '#d4af37', color: '#0a0e27' }}
                >
                  Start a Conversation
                  <ArrowRight size={18} />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-16 text-center" style={{ borderColor: '#242d4a' }}>
        <div className="max-w-7xl mx-auto px-6 space-y-6">
          {/* Divider Line */}
          <div className="flex items-center justify-center gap-4">
            <div className="flex-1 h-px" style={{ backgroundColor: '#242d4a' }}></div>
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#d4af37' }}></div>
            <div className="flex-1 h-px" style={{ backgroundColor: '#242d4a' }}></div>
          </div>

          {/* Footer Content */}
          <div className="space-y-2">
            <p className="text-sm font-semibold" style={{ color: '#f5f3f0' }}>
              Crafted by Roshan Pandit
            </p>
            <p className="text-xs" style={{ color: '#7a7a8e' }}>
              © 2026 All rights reserved. Designed for precision, built for impact.
            </p>
          </div>

          {/* Tech Stack Footer */}
          <div className="flex items-center justify-center gap-3 flex-wrap pt-4">
            <span className="text-xs" style={{ color: '#7a7a8e' }}>Built with</span>
            <div className="flex gap-3">
              <span className="px-3 py-1 text-xs rounded-full border" style={{ borderColor: '#242d4a', backgroundColor: 'rgba(212, 175, 55, 0.05)', color: '#d4af37' }}>
                Next.js
              </span>
              <span className="px-3 py-1 text-xs rounded-full border" style={{ borderColor: '#242d4a', backgroundColor: 'rgba(212, 175, 55, 0.05)', color: '#d4af37' }}>
                React
              </span>
              <span className="px-3 py-1 text-xs rounded-full border" style={{ borderColor: '#242d4a', backgroundColor: 'rgba(212, 175, 55, 0.05)', color: '#d4af37' }}>
                TypeScript
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
