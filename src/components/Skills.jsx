import { motion } from 'framer-motion'
import {
  SiSpringboot, SiApachenifi,
  SiMongodb, SiPostgresql,
  SiApachekafka, SiGooglepubsub,
  SiReact, SiJavascript,
  SiGraphql, SiKeycloak,
  SiElastic, SiGrafana, SiPrometheus,
  SiGooglecloud,
  SiDocker, SiGit,
} from 'react-icons/si'
import { FiActivity, FiCloud, FiServer, FiWind } from 'react-icons/fi'
import './Skills.css'

const fly = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] },
})

const GROUPS = [
  {
    title: 'Backend & Orchestration',
    size: 'lg',
    items: [
      { name: 'Spring Boot',        icon: <SiSpringboot />,   color: '#6db33f' },
      { name: 'Apache NiFi',        icon: <SiApachenifi />,   color: '#728e9b' },
      { name: 'Apache Camel',       icon: <FiWind />,         color: '#e0410e' },
      { name: 'Netflix Conductor',  icon: <FiActivity />,     color: '#e50914' },
    ],
  },
  {
    title: 'Data, Messaging & Streaming',
    size: 'md',
    items: [
      { name: 'PostgreSQL',  icon: <SiPostgresql />,    color: '#336791' },
      { name: 'MongoDB',     icon: <SiMongodb />,       color: '#4db33d' },
      { name: 'Kafka',       icon: <SiApachekafka />,   color: '#231f20' },
      { name: 'Pub/Sub',     icon: <SiGooglepubsub />,  color: '#4285f4' },
      { name: 'ksqlDB',      icon: <FiCloud />,         color: '#5c6bc0' },
    ],
  },
  {
    title: 'API & Security',
    size: 'md',
    items: [
      { name: 'REST',      icon: <FiCloud />,        color: '#888' },
      { name: 'GraphQL',   icon: <SiGraphql />,      color: '#e10098' },
      { name: 'Keycloak',  icon: <SiKeycloak />,     color: '#4d9ff3' },
    ],
  },
  {
    title: 'Observability',
    size: 'md',
    items: [
      { name: 'ELK Stack',  icon: <SiElastic />,     color: '#00bfb3' },
      { name: 'Grafana',    icon: <SiGrafana />,     color: '#f46800' },
      { name: 'Prometheus', icon: <SiPrometheus />,  color: '#e6522c' },
    ],
  },
  {
    title: 'Cloud & DevOps',
    size: 'md',
    items: [
      { name: 'Azure',  icon: <FiServer />,         color: '#0089d6' },
      { name: 'GCP',    icon: <SiGooglecloud />,    color: '#4285f4' },
      { name: 'Docker', icon: <SiDocker />,         color: '#2496ed' },
      { name: 'Git',    icon: <SiGit />,            color: '#f05032' },
    ],
  },
  {
    title: 'Frontend',
    size: 'sm',
    items: [
      { name: 'React',      icon: <SiReact />,      color: '#61dafb' },
      { name: 'JavaScript', icon: <SiJavascript />, color: '#f7df1e' },
    ],
  },
]

function Chip({ name, icon, color, delay }) {
  return (
    <motion.div className="chip" {...fly(delay)}>
      <span className="chip-icon" style={{ color }}>{icon}</span>
      <span className="chip-name">{name}</span>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <section className="section skills" id="skills">
      <div className="container">
        <motion.p className="label" {...fly(0)}>Tech stack</motion.p>
        <motion.h2 className="skills-heading" {...fly(0.07)}>
          What I build <span className="accent">with.</span>
        </motion.h2>

        <div className="bento-grid">
          {GROUPS.map((g, gi) => (
            <motion.div
              key={g.title}
              className={`bento-card bento-${g.size}`}
              {...fly(0.1 + gi * 0.07)}
            >
              <p className="bento-title">{g.title}</p>
              <div className="chip-grid">
                {g.items.map((item, ii) => (
                  <Chip key={item.name} {...item} delay={0.15 + gi * 0.07 + ii * 0.05} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
