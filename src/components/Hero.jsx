import { motion } from 'framer-motion'
import { FiArrowRight, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'
import './Hero.css'

const word = (text, delay) => (
  <motion.span
    className="hw"
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {text}
  </motion.span>
)

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-glow hero-glow-a" />
      <div className="hero-glow hero-glow-b" />

      <div className="container hero-inner">
        {/* ── Left col ── */}
        <div className="hero-left">
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <span className="badge-dot" />
            Lead Software Engineer · 5 years
          </motion.div>

          <h1 className="hero-heading">
            <span className="hero-line">{word('Platform', 0.18)}</span>
            <span className="hero-line">{word('engineering', 0.27)}&nbsp;{word('at', 0.34)}</span>
            <span className="hero-line hero-line--accent">{word('scale.', 0.42)}</span>
          </h1>

          <motion.p
            className="hero-sub"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.58 }}
          >
            I&apos;m Praveen — a Lead Software Engineer specialising in
            platform engineering. I build highly customisable, reusable
            frameworks that power business applications at scale — so
            product teams spend less time on infrastructure and more
            time on what actually matters.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <a href="#skills" className="btn btn-accent">
              See my stack <FiArrowRight />
            </a>
            <a href="#contact" className="btn btn-ghost">Get in touch</a>
          </motion.div>

          <motion.div
            className="hero-socials"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.82 }}
          >
            {[
              { icon: <FiGithub />, href: 'https://github.com', label: 'GitHub' },
              { icon: <FiLinkedin />, href: 'https://linkedin.com', label: 'LinkedIn' },
              { icon: <FiTwitter />, href: 'https://twitter.com', label: 'Twitter' },
            ].map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                aria-label={s.label} className="hero-social">
                {s.icon}
              </a>
            ))}
            <span className="hero-social-divider" />
            <span className="hero-social-tag">praveendeivam1817@gmail.com</span>
          </motion.div>
        </div>

        {/* ── Right col: Java code card ── */}
        <motion.div
          className="hero-right"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="code-card">
            <div className="code-titlebar">
              <span className="dot dot-r" /><span className="dot dot-y" /><span className="dot dot-g" />
              <span className="code-filename">PraveenDeivam.java</span>
            </div>
            <pre className="code-body"><code>{`@Component
public class PraveenDeivam {

  String role = "Lead Software Engineer";
  String domain = "Platform Engineering";
  int yearsOfExp = 5;

  String[] stack = {
    "Spring Boot", "Apache NiFi",
    "Netflix Conductor", "MongoDB",
    "PostgreSQL", "ksqlDB",
    "Azure", "GCP",
  };

  boolean buildsFrameworks = true;
}`}</code></pre>
          </div>

          <motion.div
            className="stat-pill stat-pill-1"
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 3.2, ease: 'easeInOut' }}
          >
            <span className="sp-num">5+</span>
            <span className="sp-label">Years exp.</span>
          </motion.div>

          <motion.div
            className="stat-pill stat-pill-2"
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2.8, ease: 'easeInOut', delay: 0.4 }}
          >
            <span className="sp-num">Lead</span>
            <span className="sp-label">Engineer</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
