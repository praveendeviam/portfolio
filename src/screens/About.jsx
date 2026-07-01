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
              I care about the work that sits under the surface — the
              orchestration layers, integration frameworks, and data
              pipelines that business teams build on top of. Done well,
              that infrastructure disappears: engineers ship without
              friction, and the platform just works.
            </p>
            <p>
              My instinct is to understand the problem deeply before
              touching the keyboard. The simplest solution that holds
              under real load is almost always the right one — and
              knowing when <em>not</em> to add complexity is a skill
              in itself.
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
