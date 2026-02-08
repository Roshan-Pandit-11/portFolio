// 'use client'

// import { Github, ExternalLink, ArrowRight , Linkedin} from 'lucide-react'
// import razorpayImage from "./images/razorpay-image.png" ;
// import secondBrain_image from "./images/second-brain.png"
// import minipayImage from "./images/minipay.png"
// import playfyImage from "./images/playfy.png"

// export default function Home() {
//   const skills = {
//   'Languages & Core': [
//     'C' , 'C++' , 'Java' ,
//     'HTML',
//     'CSS',
//     'JavaScript',
//     'TypeScript',
//   ],

//   'Frontend': [
//     'React',
//     'Next.js',
//     'Tailwind CSS',
//     'Figma',
//   ],

//   'Backend & Auth': [
//     'Node.js',
//     'Express.js',
//     'WebSockets',
//     'PostgreSQL',
//     'Prisma',
//     'Redis',
//     'NextAuth.js',
//     'JWT (jsonwebtoken)',
//     'bcrypt',
//     'Zod',
//   ],

//   'Full-Stack & DevOps': [
//     'MERN Stack',
//     'REST APIs',
//     'Real-time Applications',
//     'Docker',
//   ],
// };


//   const projects = [
//     {
//       name: 'PlayFy',
//       description:
//         'Playfy is a full-stack application that enables users to create rooms and share songs with real-time collaboration and seamless playback.',
//       tech: ['Next.js', 'TypeScript' , 'PostgreSQL', 'Prisma', 'ws' , 'Tailwind' , 'react-player' , 'bcryptjs' , 'zod' , 'jwt'],
//       image: playfyImage,
//       demo: null ,
//       github: 'https://github.com/Roshan-Pandit-11/playfy',
//     },
//     {
//       name: 'MiniPay',
//       description:
//         'Minipay is a responsive digital payment platform that allows users to authenticate securely, track balances, and perform instant peer-to-peer transactions through an intuitive dashboard.',
//       tech: ['React', 'TypeScript', 'react-dom' , 'Tailwind' , 'express' , 'bcrypt' , 'cors' , 'jwt' , 'mongoDB' , 'zod'],
//       image: minipayImage,
//       demo: null,
//       github: 'https://github.com/Roshan-Pandit-11/minipay',
//     },
//     {
//       name: 'Second Brain',
//       description:
//         'Second Brain is a full-stack knowledge management web application that lets users capture, organize, and retrieve content like tweets, LinkedIn posts, and YouTube videos from a single, centralized dashboard.',
//       tech: ['React', 'TypeScript', 'react-dom' , 'Tailwind' , 'express' , 'cors' , 'jwt' , 'mongoDB'],
//       image: secondBrain_image,
//       demo: null,
//       github: 'https://github.com/Roshan-Pandit-11/second-brain',
//     },
//     {
//       name: 'RazorPay Clone',
//       description:
//         'Razorpay Clone is a front-end project built with HTML and Tailwind CSS that recreates the user interface and visual experience of the Razorpay payment platform with a focus on layout precision, responsiveness, and clean design.',
//       tech: ['Tailwind'],
//       image: razorpayImage,
//       demo: null,
//       github: 'https://github.com/Roshan-Pandit-11/Razorpay-Clone',
//     },
//   ]

//   return (
//     <div className="min-h-screen bg-[#0f0f0f] text-neutral-100">
//       {/* Navbar */}
//       <nav className="sticky top-0 z-50 border-b border-[#393939] bg-neutral-950/80 backdrop-blur">
//         <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
//           <span className="font-semibold text-indigo-400 text-lg">
//             Roshan Pandit
//           </span>
//           <div className="flex gap-8 text-md text-neutral-400">
//             <a href="#skills" className="hover:text-indigo-400 transition">Skills</a>
//             <a href="#projects" className="hover:text-indigo-400 transition">Projects</a>
//             <a href="#contact" className="hover:text-indigo-400 transition">Contact</a>
//           </div>
//         </div>
//       </nav>

//       <main className="max-w-7xl mx-auto px-6">
//         {/* Hero */}
//         <section className="relative min-h-screen md:min-h-[90vh] border-b flex items-center overflow-hidden py-20" style={{ borderColor: '#242d4a' }}>
//           {/* Animated Background Elements */}
//           <div className="absolute inset-0 opacity-40 pointer-events-none">
//             <div 
//               className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl animate-pulse"
//               style={{ backgroundColor: '#d4af37' }}
//             ></div>
//             <div 
//               className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl animate-pulse"
//               style={{ backgroundColor: '#16213e', animationDelay: '1s' }}
//             ></div>
//           </div>

//           <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 md:gap-20 items-center w-full">
//             {/* Left Content */}
//             <div className="space-y-8">
//               {/* Badge */}
//               <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border-2" style={{ borderColor: '#d4af37', backgroundColor: 'rgba(212, 175, 55, 0.1)' }}>
//                 <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: '#d4af37' }}></div>
//                 <span className="text-sm font-semibold tracking-widest" style={{ color: '#d4af37' }}>
//                   AVAILABLE FOR WORK
//                 </span>
//               </div>

//               {/* Main Heading */}
//               <div>
//                 <h1 className="font-serif text-7xl md:text-8xl font-bold leading-tight mb-4" style={{ color: '#f5f3f0' }}>
//                   Roshan<br />
//                   <span className="bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
//                     Pandit
//                   </span>
//                 </h1>
//                 <div className="h-1 w-24 rounded-full mt-6" style={{ backgroundColor: '#d4af37' }}></div>
//               </div>

//               {/* Subheading */}
//               <div className="space-y-4">
//                 <p className="text-xl font-semibold" style={{ color: '#e8dcc8' }}>
//                   Full Stack Developer
//                 </p>
//                 <p className="text-lg leading-relaxed max-w-lg" style={{ color: '#b0b0c0' }}>
//                   I craft scalable full-stack applications and real-time collaboration systems with meticulous architecture, clean code, and exceptional user experiences.
//                 </p>
//               </div>

//               {/* Stats */}
//               <div className="grid grid-cols-3 gap-6 pt-4">
//                 <div className="space-y-2">
//                   <p className="text-2xl font-bold" style={{ color: '#d4af37' }}>5+</p>
//                   <p className="text-sm" style={{ color: '#7a7a8e' }}>Projects Built</p>
//                 </div>
//                 <div className="space-y-2">
//                   <p className="text-2xl font-bold" style={{ color: '#d4af37' }}>20+</p>
//                   <p className="text-sm" style={{ color: '#7a7a8e' }}>Tech Skills</p>
//                 </div>
//                 <div className="space-y-2">
//                   <p className="text-2xl font-bold" style={{ color: '#d4af37' }}>100%</p>
//                   <p className="text-sm" style={{ color: '#7a7a8e' }}>Dedicated</p>
//                 </div>
//               </div>

//               {/* CTA Buttons */}
//               <div className="flex flex-wrap gap-4 pt-8">
//                 <a
//                   href="#projects"
//                   className="group relative px-8 py-4 rounded-lg font-semibold overflow-hidden transition-all duration-300 hover:shadow-2xl flex items-center gap-2"
//                   style={{ backgroundColor: '#d4af37', color: '#0a0e27' }}
//                 >
//                   <span>Explore My Work</span>
//                   <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
//                 </a>
//                 <a
//                   href="#contact"
//                   className="px-8 py-4 rounded-lg font-semibold border-2 transition-all duration-300 hover:shadow-lg hover:scale-105 backdrop-blur-sm"
//                   style={{ borderColor: '#d4af37', color: '#d4af37', backgroundColor: 'rgba(212, 175, 55, 0.05)' }}
//                 >
//                   Get In Touch
//                 </a>
//               </div>

//               {/* Social Links */}
//               <div className="flex gap-6 pt-4">
//                 <a href="https://github.com/Roshan-Pandit-11" target="_blank" rel="noopener noreferrer" 
//                    className="p-3 rounded-lg border-2 transition-all duration-300 hover:scale-110 hover:shadow-lg"
//                    style={{ borderColor: '#d4af37', color: '#d4af37' }}>
//                   <Github size={20} />
//                 </a>
//                 <a href="https://linkedin.com/in/roshan-pandit-90bb0a342" target="_blank" rel="noopener noreferrer"
//                    className="p-3 rounded-lg border-2 transition-all duration-300 hover:scale-110 hover:shadow-lg"
//                    style={{ borderColor: '#d4af37', color: '#d4af37' }}>
//                   <Linkedin size={20} />
//                 </a>
//               </div>
//             </div>

//             {/* Right Side - Image with Premium Styling */}
//             <div className="hidden md:flex justify-center items-center">
//               <div className="relative">
//                 {/* Outer Glow Ring */}
//                 <div 
//                   className="absolute inset-0 rounded-3xl opacity-50 blur-2xl"
//                   style={{ backgroundColor: '#d4af37' }}
//                 ></div>

//                 {/* Main Image Container */}
//                 <div 
//                   className="relative w-96 h-96 rounded-3xl overflow-hidden border-2 shadow-2xl backdrop-blur-md"
//                   style={{ 
//                     borderColor: '#d4af37',
//                     backgroundColor: 'rgba(212, 175, 55, 0.08)',
//                     boxShadow: '0 25px 50px -12px rgba(212, 175, 55, 0.3)'
//                   }}
//                 >
//                   {/* Image Overlay */}
//                   <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/40 pointer-events-none"></div>
                  
//                   <img
//                    src={playfyImage.src}
//                     alt="Roshan Pandit"
//                     className="w-full h-full object-cover"
//                   />
//                 </div>

//                 {/* Floating Badge */}
//                 <div 
//                   className="absolute -bottom-6 -right-6 px-6 py-3 rounded-2xl font-semibold shadow-xl border-2 backdrop-blur-md"
//                   style={{ 
//                     backgroundColor: '#0a0e27',
//                     borderColor: '#d4af37',
//                     color: '#d4af37'
//                   }}
//                 >
//                   Full Stack Dev
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Skills */}
//         <section id="skills" className="py-24 border-b border-[#393939]">
//           <h2 className="text-3xl font-bold mb-12">Skills</h2>
//           <div className="grid sm:grid-cols-2 gap-12">
//             {Object.entries(skills).map(([title, list]) => (
//               <div key={title}>
//                 <h3 className="text-sm uppercase tracking-wide text-neutral-400 mb-4">
//                   {title}
//                 </h3>
//                 <div className="flex flex-wrap gap-2">
//                   {list.map((item) => (
//                     <span
//                       key={item}
//                       className="px-3 py-1.5 text-sm rounded-md border border-[#2e2e2e] bg-neutral-900 hover:border-indigo-400/60 transition"
//                     >
//                       {item}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Projects */}
//         <section id="projects" className="py-28 border-b border-[#393939]">
//           <h2 className="text-3xl font-bold mb-16">Projects</h2>

//           <div className="space-y-24">
//             {projects.map((project, index) => {
//               const isReverse = index % 2 !== 0

//               return (
//                 <div
//                   key={project.name}
//                   className="grid md:grid-cols-2 gap-14 items-center"
//                 >
//                   {/* TEXT */}
//                   <div className={isReverse ? 'md:order-2' : ''}>
//                     <h3 className="text-2xl font-semibold mb-4">
//                       {project.name}
//                     </h3>

//                     <p className="text-neutral-400 mb-6 leading-relaxed max-w-xl">
//                       {project.description}
//                     </p>

//                     <div className="flex gap-4 mb-6">
//                       {project.demo ? <a
//                         href={project.demo}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="inline-flex items-center gap-2 px-4 py-2 text-sm rounded-md border border-neutral-700 hover:border-indigo-400 hover:text-indigo-400 transition"
//                       >
//                         <ExternalLink size={16} />
//                         Live Demo
//                       </a> : null}

//                       <a
//                         href={project.github}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="inline-flex items-center gap-2 px-4 py-2 text-sm rounded-md border border-neutral-700 hover:border-indigo-400 hover:text-indigo-400 transition"
//                       >
//                         <Github size={16} />
//                         GitHub
//                       </a>
//                     </div>

//                     <div className="flex flex-wrap gap-2">
//                       {project.tech.map((t) => (
//                         <span
//                           key={t}
//                           className="px-3 py-1 text-xs rounded bg-neutral-900 border border-neutral-800 hover:border-indigo-400/50 transition"
//                         >
//                           {t}
//                         </span>
//                       ))}
//                     </div>
//                   </div>

//                   {/* IMAGE */}
//                   <div
//                     className={`relative w-full h-64 sm:h-72 rounded-xl overflow-hidden border border-neutral-800 ${
//                       isReverse ? 'md:order-1' : ''
//                     }`}
//                   >
//                     <img
//                       src={project.image.src}
//                       alt={project.name}
//                       className="w-full h-full object-contain"
//                     />
//                   </div>
//                 </div>
//               )
//             })}
//           </div>
//         </section>

//         {/* Contact */}
//         <section id="contact" className="py-24">
//           <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
//           <p className="text-neutral-400 text-lg leading-relaxed mb-10">
//           I’m open to <span className="text-neutral-200">Full Stack</span> and
//           <span className="text-neutral-200"> Backend-focused</span> roles where I
//           can work on scalable systems, real-time applications, and well-designed
//           architectures. If you’re building something meaningful, I’d love to talk.
//         </p>

//           <div className="flex flex-wrap  sm:gap-4 gap-4">
//             <a
//               href="mailto:roshanpandit1124@gmail.com"
//               className="px-6 py-3 bg-white text-black rounded-lg hover:bg-neutral-200 transition"
//             >
//               Email
//             </a>
//             <a
//               href="https://github.com/Roshan-Pandit-11"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="px-6 py-3 flex items-center gap-2 border border-neutral-700 rounded-lg hover:border-indigo-400 hover:text-indigo-400 transition"
//             >
//               <Github size={16} />
//               Github
//             </a>
//             <a
//               href="https://leetcode.com/u/RoshanPandit/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="px-6 py-3 flex items-center gap-2 border border-neutral-700 rounded-lg hover:border-indigo-400 hover:text-indigo-400 transition"
//             >
//               Leetcode
//             </a>
//             <a
//               href="https://linkedin.com/in/roshan-pandit-90bb0a342"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="px-6 py-3 flex items-center gap-2 border border-neutral-700 rounded-lg hover:border-indigo-400 hover:text-indigo-400 transition"
//             >
//               <Linkedin size={16} />
//               LinkedIn
//             </a>
//           </div>
//         </section>
//       </main>

//       <footer className="py-8 border-t border-[#393939] text-center text-xs text-neutral-500">
//         © 2026 Roshan Pandit PortFolio
//       </footer>
//     </div>
//   )
// }
