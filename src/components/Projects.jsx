import { motion } from 'framer-motion'
import { FiArrowUpRight, FiGithub } from 'react-icons/fi'
import './Projects.css'

const fly = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.58, delay, ease: [0.22, 1, 0.36, 1] },
})

const PROJECTS = [
  {
    id: '01',
    title: 'E-Commerce Platform',
    desc: 'Full-stack storefront with real-time inventory, Stripe payments, order management, and an admin dashboard. Handles thousands of SKUs with sub-100ms load times.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Docker'],
    accent: '#4ade80',
    github: 'https://github.com',
    live: '#',
    featured: true,
  },
  {
    id: '02',
    title: 'Task Management App',
    desc: 'Collaborative kanban boards with drag-and-drop, real-time sync via WebSockets, and granular role-based permissions.',
    tags: ['Next.js', 'TypeScript', 'MongoDB', 'Socket.io'],
    accent: '#818cf8',
    github: 'https://github.com',
    live: '#',
  },
  {
    id: '03',
    title: 'AI Content Generator',
    desc: 'Generate, edit, and export marketing copy and blog posts at scale using AI — with built-in tone controls and history.',
    tags: ['React', 'Python', 'FastAPI', 'OpenAI'],
    accent: '#f472b6',
    github: 'https://github.com',
    live: '#',
  },
  {
    id: '04',
    title: 'Dev Portfolio CMS',
    desc: 'Headless CMS tailored for developer portfolios. Manage projects, blog posts, and skills through a slick admin panel.',
    tags: ['Next.js', 'Prisma', 'PostgreSQL', 'Vercel'],
    accent: '#fb923c',
    github: 'https://github.com',
    live: '#',
    featured: true,
  },
]

function ProjectCard({ project, delay }) {
  return (
    <motion.div
      className={`proj-card ${project.featured ? 'proj-card--featured' : ''}`}
      style={{ '--pa': project.accent }}
      {...fly(delay)}
    >
      {/* Gradient banner */}
      <div className="proj-banner" style={{
        background: `linear-gradient(135deg, ${project.accent}18, ${project.accent}06)`,
        borderBottom: `1px solid ${project.accent}22`,
      }}>
        <span className="proj-id">{project.id}</span>
      </div>

      <div className="proj-body">
        <div className="proj-top-row">
          <h3 className="proj-title">{project.title}</h3>
          <div className="proj-links">
            <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="proj-link">
              <FiGithub />
            </a>
            <a href={project.live} target="_blank" rel="noopener noreferrer" aria-label="Live" className="proj-link">
              <FiArrowUpRight />
            </a>
          </div>
        </div>
        <p className="proj-desc">{project.desc}</p>
        <div className="proj-tags">
          {project.tags.map(t => <span key={t} className="proj-tag">{t}</span>)}
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const [featured, rest] = [
    PROJECTS.filter(p => p.featured),
    PROJECTS.filter(p => !p.featured),
  ]

  return (
    <section className="section projects" id="projects">
      <div className="container">
        <motion.p className="label" {...fly(0)}>Projects</motion.p>
        <motion.h2 className="projects-heading" {...fly(0.07)}>
          Things I&apos;ve <span className="accent">built.</span>
        </motion.h2>

        {/* Row 1: two small cards */}
        <div className="proj-row proj-row--2">
          {rest.map((p, i) => <ProjectCard key={p.id} project={p} delay={0.1 + i * 0.1} />)}
        </div>

        {/* Row 2: two featured cards */}
        <div className="proj-row proj-row--2">
          {featured.map((p, i) => <ProjectCard key={p.id} project={p} delay={0.2 + i * 0.1} />)}
        </div>

        <motion.div className="proj-footer" {...fly(0.4)}>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
            See all projects <FiArrowUpRight />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
