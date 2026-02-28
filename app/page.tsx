'use client'

import { Github, ExternalLink, ArrowRight , Linkedin , Mail , Heart} from 'lucide-react'
import razorpayImage from "./images/razorpay-image.png" ;
import secondBrain_image from "./images/second-brain.png"
import minipayImage from "./images/minipay.png"
import playfy_ss_portfolio from "./images/playfy_ss_portfolio.png" ;
import profile_pic from "./images/profile_pic.jpg" ;
import sketchFlow_img from "./images/sketchflow-ss-1.png" ;
import { useEffect, useState } from 'react';
import axios from 'axios';

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
    <div className="min-h-screen bg-[#0d1117] text-neutral-100">
      {/* Navbar */}
      <nav className=" backdrop-blur-md sticky top-0 z-50 border-b border-[#242d4a] ">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 flex justify-center items-center font-bold font-sans rounded-md bg-[#0751cf]">RP</div>
            <span className="font-serif text-lg font-semibold">
              Roshan Pandit
            </span>
          </div>
          <div className="flex gap-6 text-sm tracking-wide">
            <a href="#skills" className="hover:text-[#3b83ff] transition duration-300 rounded-2xl p-2 hover:bg-[#282f43]">Skills</a>
            <a href="#projects" className="hover:text-[#3b83ff] transition duration-300 rounded-2xl p-2 hover:bg-[#282f43]">Projects</a>
            <a href="#contact" className="hover:text-[#3b83ff] transition duration-300 rounded-2xl p-2 hover:bg-[#282f43]">Contact</a>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6">
        {/* Hero */}
        <section className="relative min-h-screen md:min-h-[90vh] border-b flex items-center overflow-hidden py-20 border-[#242d4a]">
          <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 md:gap-20 items-center w-full">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border-2 border-[#695100] bg-[#090b11]">
                <div className="w-2 h-2 rounded-full animate-pulse bg-[#05d16f]"></div>
                <span className="text-sm font-semibold tracking-widest text-[#083687]">
                  AVAILABLE FOR WORK
                </span>
              </div>

              {/* Main Heading */}
              <div>
                <h1 className="font-serif text-7xl md:text-8xl font-bold leading-tight mb-4 text-[#f5f3f0]">
                  Roshan<br />
                  <span className="bg-gradient-to-r from-[#1a4ace] via-[#f30386] to-[#ffb80a] bg-clip-text text-transparent">
                    Pandit
                  </span>
                </h1>
                <div className="h-1 w-24 rounded-full mt-6 bg-[#0751cf]"></div>
              </div>

              {/* Subheading */}
              <div className="space-y-4">
                <p className="text-xl font-semibold text-[#e8dcc8]">
                  Full Stack Developer
                </p>
                <p className="text-lg leading-relaxed max-w-lg text-[#b0b0c0]">
                  I craft scalable full-stack applications and real-time collaboration systems with meticulous architecture, clean code, and exceptional user experiences.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-4">
                <div className="space-y-2">
                  <p className="text-2xl font-bold text-[#083687]">4+</p>
                  <p className="text-sm text-[#7a7a8e]">Projects Built</p>
                </div>
                <div className="space-y-2">
                  <p className="text-2xl font-bold text-[#083687]">20+</p>
                  <p className="text-sm text-[#7a7a8e]">Tech Skills</p>
                </div>
                <div className="space-y-2">
                  <p className="text-2xl font-bold text-[#083687]">100%</p>
                  <p className="text-sm text-[#7a7a8e]">Dedicated</p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-8">
                <a
                  href="#projects"
                  className="group relative px-8 py-4 rounded-lg font-semibold overflow-hidden transition-all duration-300 hover:shadow-2xl flex items-center gap-2 bg-[#0751cf] text-[#ffffff]"
                >
                  <span>Explore My Work</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#contact"
                  className="px-8 py-4 rounded-lg font-semibold border-2 transition-all duration-300 hover:shadow-lg hover:scale-105 backdrop-blur-sm bg-[#ffffff] text-[#0751cf] border-[#0751cf]"
                >
                  Get In Touch
                </a>
              </div>

              {/* Social Links */}
              <div className="flex gap-6 pt-4">
                <a href="https://github.com/Roshan-Pandit-11" target="_blank" rel="noopener noreferrer" 
                   className="p-3 rounded-lg border-2 transition-all duration-300 hover:scale-110 hover:shadow-lg text-[#0751cf] border-[#083687] ">
                  <Github size={20} />
                </a>
                <a href="https://linkedin.com/in/roshan-pandit-90bb0a342" target="_blank" rel="noopener noreferrer"
                   className="p-3 rounded-lg border-2 transition-all duration-300 hover:scale-110 hover:shadow-lg text-[#0751cf] border-[#083687] ">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>

            {/* Right Side - Image with Premium Styling */}
            <div className="hidden md:flex justify-center items-center">
              <div className="relative">
                {/* Outer Glow Ring */}
                <div 
                  className="absolute inset-0 rounded-3xl opacity-50 blur-2xl bg-[#0751cf]"
                ></div>

                {/* Main Image Container */}
                <div 
                  className="relative w-96 h-96 rounded-3xl overflow-hidden border-2 shadow-2xl backdrop-blur-md border-[#083687]"
                >
                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/40 pointer-events-none"></div>
                  
                  <img 
                   src={profile_pic.src}
                    alt="Roshan Pandit"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Floating Badge */}
                <div 
                  className="absolute -bottom-6 -right-6 px-6 py-3 rounded-2xl font-semibold shadow-xl border-2 backdrop-blur-md border-[#083687] text-[#ffffff]"
                >
                  Full Stack Dev
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
       <section id="skills" className="relative py-28 border-b overflow-hidden border-[#242d4a]">

          <div className="relative z-10 max-w-7xl mx-auto px-6">
            {/* Section Header */}
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-1 w-16 rounded-full bg-[#0751cf]"></div>
                <p className="text-sm font-semibold tracking-widest uppercase text-[#083687]">
                  Technical Arsenal
                </p>
              </div>
              <h2 className="font-serif text-6xl md:text-7xl font-bold text-[#ffffff]" >
                Skills & Expertise
              </h2>
            </div>

            {/* Compact Skills Display */}
            <div className="space-y-12">
              {Object.entries(skills).map(([title, list]) => (
                <div key={title} className="space-y-4">
                  {/* Category Title */}
                  <div className="flex items-center gap-3">
                    <div className="h-0.5 w-12 bg-[#0751cf]"></div>
                    <h3 className="text-lg font-bold uppercase tracking-wide text-[#083687]">
                      {title}
                    </h3>
                  </div>

                  {/* Skills Compact Display */}
                  <div className="flex flex-wrap gap-3">
                    {list.map((item) => (
                      <span
                        key={item}
                        className="px-4 py-2 text-sm font-medium rounded-lg border-2 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer group border-[#0751cf] text-[#b0b0c0]"
                      >
                        <span className="group-hover:text-white transition-colors">{item}</span>
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Stats Footer */}
            <div className="grid md:grid-cols-2 gap-6 mt-20 pt-16 border-t border-[#242d4a]">
              <div className="text-center">
                <p className="text-4xl font-bold mb-2 text-[#083687]">20+</p>
                <p className="text-sm uppercase tracking-widest text-[#7a7a8e]">Technologies</p>
              </div>
              {/* <div className="text-center">
                <p className="text-4xl font-bold mb-2 text-[#083687]">0</p>
                <p className="text-sm uppercase tracking-widest text-[#7a7a8e]">Fresher</p>
              </div> */}
              <div className="text-center">
                <p className="text-4xl font-bold mb-2 text-[#083687]">Full Stack</p>
                <p className="text-sm uppercase tracking-widest text-[#7a7a8e]">Capable</p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
         <section id="projects" className="relative py-32 border-b overflow-hidden border-[#242d4a]">

          <div className="relative z-10 max-w-7xl mx-auto px-6">
            {/* Section Header */}
            <div className="mb-20">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-1 w-16 rounded-full bg-[#0751cf]"></div>
                <p className="text-sm font-semibold tracking-widest uppercase text-[#083687]">
                  Portfolio Showcase
                </p>
              </div>
              <h2 className="font-serif text-6xl md:text-7xl font-bold">
                Featured Projects
              </h2>
              <p className="text-lg max-w-2xl mt-6 text-[#b0b0c0]">
                A selection of full-stack applications and collaborative systems designed to solve real-world problems.
              </p>
            </div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {projects.map((project, index) => (
                <div
                  key={project.name}
                  className="group relative overflow-hidden rounded-2xl border-2 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border-[#242d4a]"
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
                      <div className="w-1 h-7 rounded-full mt-1 bg-[#0751cf]"></div>
                      <h3 className="font-serif text-2xl font-bold">
                        {project.name}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-sm leading-relaxed mb-6 text-[#b0b0c0]" >
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.slice(0, 4).map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 text-xs rounded-md border transition-all duration-300 hover:shadow-md text-[#0850cb] bg-[#232944] border-[#0750cd]"
                        >
                          {t}
                        </span>
                      ))}
                      {project.tech.length > 4 && (
                        <span
                          className="px-2.5 py-1 text-xs rounded-md border border-[#083687] text-[#b0b0c0]"
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
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 text-sm rounded-lg font-medium border-2 transition-all duration-300 hover:shadow-lg 
                          border-none
                          bg-[#0751cf]
                          text-[#ffffff]
                          hover:bg-[#0645b2]
                          "
                        >
                          <ExternalLink size={14} />
                          Demo
                        </a>
                      )}
                      {project.github && <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center justify-center gap-2 px-4 py-2.5 text-sm rounded-lg font-medium border-2 transition-all duration-300 hover:shadow-lg border-[#083687] text-[#0751cf] hover:bg-[#9ba4ff] hover:text-[#0643ac] ${!project.demo ? 'flex-1' : ''}`}
                      >
                        <Github size={14} />
                        Code
                      </a>}
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
                className="flex items-center gap-2 px-8 py-3 rounded-lg font-semibold border-2 transition-all duration-300 hover:shadow-lg hover:scale-105 bg-[#0751cf] text-[#ffffff] border-none hover:bg-[#0645b2]"
              >
                View More Projects
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="relative pt-32 pb-24 overflow-hidden">
          <div className="relative z-10 max-w-7xl mx-auto px-6">
            {/* Main Contact Card */}
            <div className="max-w-3xl">
              {/* Header */}
              <div className="mb-16">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-1 w-16 rounded-full bg-[#0751cf]"></div>
                  <p className="text-sm font-semibold tracking-widest uppercase text-[#083687]">
                    Get In Touch
                  </p>
                </div>
                <h2 className="font-serif text-6xl md:text-7xl font-bold mb-8 text-[#ffffff]">
                  Let's Build
                  <br />
                  <span className='text-[#0751cf]'>Something Amazing</span>
                </h2>
              </div>

              {/* Description */}
              <div className="mb-16 space-y-4">
                <p className="text-lg leading-relaxed text-[#b0b0c0]">
                  I'm actively seeking <span className='text-[#f5f3f0]'>Full Stack Developer</span> and <span className='text-[#f5f3f0]'>Backend Engineer</span> opportunities where I can architect scalable systems and build real-time collaborative applications.
                </p>
                <p className="text-lg leading-relaxed text-[#b0b0c0]">
                  Whether you're developing a cutting-edge product, scaling an existing system, or exploring innovative ideas, I'm excited to collaborate and bring exceptional technical expertise to your team.
                </p>
              </div>

              {/* Contact Options */}
              <div className="space-y-6">
                {/* Email CTA */}
                <div className="p-8 rounded-2xl border-2 transition-all duration-300 hover:shadow-xl hover:scale-105 border-[#0750cd] bg-[#232944] text-[#0850cb]">
                  <p className="text-sm uppercase tracking-widest font-semibold mb-3 text-[#0850cb]">
                    Email
                  </p>
                  <a href="mailto:roshanpandit1124@gmail.com" className="text-xl font-semibold hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-cyan-400 hover:to-indigo-400 transition-all text-[#ffffff]">
                    roshanpandit1124@gmail.com
                  </a>
                </div>

                {/* Social Links Grid */}
                <div className="grid md:grid-cols-4 gap-4">
                  <a 
                    href="https://github.com/Roshan-Pandit-11"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-6 rounded-2xl border-2 flex flex-col items-center gap-3 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group bg-[#0F122980] text-[#0850cb] border-[#242d4a]"
                  >
                    <Github size={24}/>
                    <span className="text-sm font-semibold group-hover:text-[#0850cb] transition-colors text-[#ffffff]">
                      GitHub
                    </span>
                  </a>

                  <a 
                    href="https://linkedin.com/in/roshan-pandit-90bb0a342"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-6 rounded-2xl border-2 flex flex-col items-center gap-3 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group bg-[#0F122980] text-[#0850cb] border-[#242d4a]"
                  >
                    <Linkedin size={24}/>
                    <span className="text-sm font-semibold group-hover:text-[#0850cb] transition-colors text-[#ffffff]">
                      LinkedIn
                    </span>
                  </a>

                  <a 
                    href="https://leetcode.com/u/RoshanPandit/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-6 rounded-2xl border-2 flex flex-col items-center gap-3 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group  bg-[#0F122980] text-[#0850cb] border-[#242d4a]"
                  >
                    <div className='font-semibold'>LC</div>
                    <span className="text-sm font-semibold group-hover:text-[#0850cb] transition-colors text-[#ffffff]">
                      LeetCode
                    </span>
                  </a>

                  <a 
                    href="mailto:roshanpandit1124@gmail.com"
                    className="p-6 rounded-2xl border-2 flex flex-col items-center gap-3 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group border-[#0750cd] bg-[#232944]"
                  >
                    <div className="w-6 h-6 flex items-center text-[#ffffff]  justify-center"><Mail size={24}/></div>
                    <span className="text-sm font-semibold group-hover:text-white transition-colors text-[#0850cb]">
                      Email
                    </span>
                  </a>
                </div>
              </div>

              {/* CTA Button */}
              <div className="mt-12 flex gap-4 flex-wrap">
                <a
                  href="mailto:roshanpandit1124@gmail.com"
                  className="flex items-center gap-2 px-10 py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-2xl hover:scale-102 text-lg
                  hover:bg-[#0645b2]  text-[#ffffff] bg-[#0751cf]"
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
          Thanks For Visiting.
          <Heart className="w-5 h-5 text-red-500" />
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
              <span className="px-3 py-1 text-xs rounded-full border text-[#0850cb] bg-[#232944] border-[#0750cd]">
                Next.js
              </span>
              <span className="px-3 py-1 text-xs rounded-full border text-[#0850cb] bg-[#232944] border-[#0750cd]">
                React
              </span>
              <span className="px-3 py-1 text-xs rounded-full border text-[#0850cb] bg-[#232944] border-[#0750cd]">
                TypeScript
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
