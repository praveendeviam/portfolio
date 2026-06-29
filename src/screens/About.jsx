import { motion } from 'framer-motion'
import { flyIn } from '../helpers/animations'
import { HIGHLIGHTS } from '../data/about'
import '../styles/About.css'

function HighlightCard({ icon, title, desc, delay }) {
  return (
    <motion.div className="about-card" {...flyIn(delay)}>
      <span className="ac-icon">{icon}</span>
      <h3 className="ac-title">{title}</h3>
      <p className="ac-desc">{desc}</p>
    </motion.div>
  )
}

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="container">
        <motion.p className="label" {...flyIn(0)}>About me</motion.p>

        <div className="about-top">
          <motion.h2 className="about-heading" {...flyIn(0.07)}>
            Building the platforms<br />
            others <span className="accent">build on.</span>
          </motion.h2>

          <motion.div className="about-bio-col" {...flyIn(0.14)}>
            <p>
              I&apos;m Praveen — a Lead Software Engineer with 5 years of
              experience in platform engineering. My work sits at the
              foundation: I design and build highly customisable, reusable
              frameworks that business application teams rely on to ship
              products fast without reinventing the wheel.
            </p>
            <p>
              My approach: understand the problem first, then build the
              simplest solution that solves it well. I&apos;ve worked on
              everything from startup MVPs to scaling existing systems to
              handle 10× more traffic.
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
          {HIGHLIGHTS.map((item, i) => (
            <HighlightCard key={item.title} {...item} delay={0.08 + i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  )
}
