import { motion } from 'framer-motion'
import { FiLayers, FiRefreshCw, FiServer, FiTrendingUp } from 'react-icons/fi'
import './About.css'

const HIGHLIGHTS = [
  { icon: <FiLayers />,     title: 'Platform thinking',  desc: 'Building the layer that all business apps stand on.' },
  { icon: <FiRefreshCw />,  title: 'Reusable frameworks', desc: 'Abstracting complexity so teams ship faster.' },
  { icon: <FiServer />,     title: 'Backend depth',       desc: 'Java, Spring Boot, distributed systems at scale.' },
  { icon: <FiTrendingUp />, title: 'Observability',       desc: 'ELK, Grafana, Prometheus — nothing hides in prod.' },
]

const fly = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="container">
        <motion.p className="label" {...fly(0)}>About me</motion.p>

        <div className="about-top">
          <motion.h2 className="about-heading" {...fly(0.07)}>
            Building the platforms<br />
            others <span className="accent">build on.</span>
          </motion.h2>

          <motion.div className="about-bio-col" {...fly(0.14)}>
            <p>
              I&apos;m Praveen — a Lead Software Engineer with 5 years of
              experience in platform engineering. My work sits at the
              foundation: I design and build highly customisable, reusable
              frameworks that business application teams rely on to ship
              products fast without reinventing the wheel.
            </p>
            <p>
              I specialise in the Java/Spring Boot ecosystem, event-driven
              architectures, and data pipeline orchestration with tools like
              Apache NiFi, Apache Camel, and Netflix Conductor. My approach:
              understand the problem first, then build the simplest solution
              that solves it well. I&apos;ve worked on everything from startup
              MVPs to scaling existing systems to handle 10× more traffic.
            </p>
            <div className="about-meta">
              <div className="meta-item">
                <span className="meta-dot" />
                <span>Lead Software Engineer · Platform Engineering</span>
              </div>
              <div className="meta-item">
                <span className="meta-dot" />
                <span>Based in India · Open to opportunities</span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="about-cards">
          {HIGHLIGHTS.map((h, i) => (
            <motion.div key={h.title} className="about-card" {...fly(0.08 + i * 0.08)}>
              <span className="ac-icon">{h.icon}</span>
              <h3 className="ac-title">{h.title}</h3>
              <p className="ac-desc">{h.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
