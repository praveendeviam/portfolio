import { motion } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'
import { heroFly } from '../helpers/animations'
import { SOCIAL_LINKS } from '../data/navigation'
import '../styles/Hero.css'

function AnimatedWord({ text, delay }) {
  return (
    <motion.span className="hw" {...heroFly(delay)}>
      {text}
    </motion.span>
  )
}

function CodeCard() {
  return (
    <div className="code-card">
      <div className="code-titlebar">
        <span className="dot dot-r" />
        <span className="dot dot-y" />
        <span className="dot dot-g" />
        <span className="code-filename">PraveenDeivam.java</span>
      </div>
      <pre className="code-body">
        <code>{`@Component
public class PraveenDeivam {

  String role   = "Lead Software Engineer";
  String domain = "Platform Engineering";
  int    yearsOfExp = 5;

  String[] stack = {
    "Spring Boot", "Apache NiFi",
    "Netflix Conductor", "MongoDB",
    "PostgreSQL", "ksqlDB",
    "Azure", "GCP",
  };

  boolean buildsFrameworks = true;
}`}</code>
      </pre>
    </div>
  )
}

function StatPill({ num, label, className, animate }) {
  return (
    <motion.div
      className={`stat-pill ${className}`}
      animate={animate}
      transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
    >
      <span className="sp-num">{num}</span>
      <span className="sp-label">{label}</span>
    </motion.div>
  )
}

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-glow hero-glow-a" />
      <div className="hero-glow hero-glow-b" />

      <div className="container hero-inner">
        <div className="hero-left">
          <motion.div className="hero-badge" {...heroFly(0.1)}>
            <span className="badge-dot" />
            Lead Software Engineer · 5 years
          </motion.div>

          <h1 className="hero-heading">
            <span className="hero-line">
              <AnimatedWord text="Platform" delay={0.18} />
            </span>
            <span className="hero-line">
              <AnimatedWord text="engineering" delay={0.27} />
              &nbsp;
              <AnimatedWord text="at" delay={0.34} />
            </span>
            <span className="hero-line hero-line--accent">
              <AnimatedWord text="scale." delay={0.42} />
            </span>
          </h1>

          <motion.p className="hero-sub" {...heroFly(0.58)}>
            I&apos;m Praveen — a Lead Software Engineer specialising in
            platform engineering. I build highly customisable, reusable
            frameworks that power business applications at scale — so
            product teams spend less time on infrastructure and more
            time on what actually matters.
          </motion.p>

          <motion.div className="hero-actions" {...heroFly(0.7)}>
            <a href="#skills"  className="btn btn-accent">See my stack <FiArrowRight /></a>
            <a href="#contact" className="btn btn-ghost">Get in touch</a>
          </motion.div>

          <motion.div className="hero-socials" {...heroFly(0.82)}>
            {SOCIAL_LINKS.filter(s => s.label !== 'Email').map(({ icon, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                aria-label={label} className="hero-social">
                {icon}
              </a>
            ))}
            <span className="hero-social-divider" />
            <span className="hero-social-tag">praveendeivam1817@gmail.com</span>
          </motion.div>
        </div>

        <motion.div className="hero-right" {...heroFly(0.4)}>
          <CodeCard />
          <StatPill num="5+" label="Years exp."  className="stat-pill-1" animate={{ y: [0, -6, 0] }} />
          <StatPill num="Lead" label="Engineer"  className="stat-pill-2" animate={{ y: [0,  6, 0] }} />
        </motion.div>
      </div>
    </section>
  )
}
