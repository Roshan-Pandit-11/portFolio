'use client'

import { Github, ExternalLink } from 'lucide-react'

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
      name: 'Payment Processing Platform',
      description:
        'Handles 50M+ transactions per month with sub-100ms latency using an event-driven architecture.',
      tech: ['Node.js', 'PostgreSQL', 'Kafka', 'Redis'],
      image: '/projects/payment.png',
      demo: 'https://example.com',
      github: 'https://github.com/yourname/payment-platform',
    },
    {
      name: 'Real-Time Data Pipeline',
      description:
        'Streaming ETL system processing over 1TB of data daily with fault tolerance.',
      tech: ['Python', 'Kafka', 'AWS'],
      image: '/projects/pipeline.png',
      demo: 'https://example.com',
      github: 'https://github.com/yourname/data-pipeline',
    },
    {
      name: 'Microservices Gateway',
      description:
        'High-performance API gateway implementing routing, rate limiting, and circuit breaking.',
      tech: ['Go', 'Docker', 'Kubernetes'],
      image: '/projects/gateway.png',
      demo: 'https://example.com',
      github: 'https://github.com/yourname/api-gateway',
    },
  ]

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 border-b border-neutral-800 bg-neutral-950/80 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="font-semibold text-indigo-400 text-lg">
            Roshan Pandit
          </span>
          <div className="flex gap-8 text-sm text-neutral-400">
            <a href="#skills" className="hover:text-indigo-400 transition">Skills</a>
            <a href="#projects" className="hover:text-indigo-400 transition">Projects</a>
            <a href="#contact" className="hover:text-indigo-400 transition">Contact</a>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6">
        {/* Hero */}
        <section className="py-28 border-b border-neutral-800 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-5xl sm:text-6xl font-bold leading-tight">
              Roshan Pandit
              <span className="block mt-2 bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                Full Stack Developer
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-neutral-400 text-lg">
              I design scalable systems, microservices, and data-intensive
              platforms for millions of users.
            </p>

            <div className="mt-10 flex gap-4">
              <a
                href="#projects"
                className="px-6 py-3 bg-white text-black rounded-lg hover:bg-neutral-200 transition"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border border-neutral-700 rounded-lg hover:border-indigo-400 hover:text-indigo-400 transition"
              >
                Contact
              </a>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative w-64 h-64 rounded-2xl overflow-hidden border border-neutral-800">
              <img
                src="data:image/jpeg;base64,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"
                alt="Roshan Pandit"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="py-24 border-b border-neutral-800">
          <h2 className="text-3xl font-bold mb-12">Skills</h2>
          <div className="grid sm:grid-cols-2 gap-12">
            {Object.entries(skills).map(([title, list]) => (
              <div key={title}>
                <h3 className="text-sm uppercase tracking-wide text-neutral-400 mb-4">
                  {title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {list.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 text-sm rounded-md border border-neutral-800 bg-neutral-900 hover:border-indigo-400/60 transition"
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
        <section id="projects" className="py-28 border-b border-neutral-800">
          <h2 className="text-3xl font-bold mb-16">Projects</h2>

          <div className="space-y-24">
            {projects.map((project, index) => {
              const isReverse = index % 2 !== 0

              return (
                <div
                  key={project.name}
                  className="grid md:grid-cols-2 gap-14 items-center"
                >
                  {/* TEXT */}
                  <div className={isReverse ? 'md:order-2' : ''}>
                    <h3 className="text-2xl font-semibold mb-4">
                      {project.name}
                    </h3>

                    <p className="text-neutral-400 mb-6 leading-relaxed max-w-xl">
                      {project.description}
                    </p>

                    <div className="flex gap-4 mb-6">
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 text-sm rounded-md border border-neutral-700 hover:border-indigo-400 hover:text-indigo-400 transition"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </a>

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 text-sm rounded-md border border-neutral-700 hover:border-indigo-400 hover:text-indigo-400 transition"
                      >
                        <Github size={16} />
                        GitHub
                      </a>
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
                    className={`relative w-full h-64 sm:h-72 rounded-xl overflow-hidden border border-neutral-800 ${
                      isReverse ? 'md:order-1' : ''
                    }`}
                  >
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-24">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-neutral-400 max-w-xl mb-8">
            Open to backend roles, scalable systems, and system design challenges.
          </p>

          <div className="flex gap-4">
            <a
              href="mailto:roshanpandit1124@gmail.com"
              className="px-6 py-3 bg-white text-black rounded-lg hover:bg-neutral-200 transition"
            >
              Email
            </a>
            <a
              href="https://github.com/Roshan-Pandit-11"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-neutral-700 rounded-lg hover:border-indigo-400 hover:text-indigo-400 transition"
            >
              GitHub
            </a>
          </div>
        </section>
      </main>

      <footer className="py-8 border-t border-neutral-800 text-center text-xs text-neutral-500">
        © 2024 Roshan Pandit
      </footer>
    </div>
  )
}
