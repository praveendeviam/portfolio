import { motion } from 'framer-motion'
import { flyIn } from '../helpers/animations'
import { SKILL_GROUPS } from '../data/skills'
import Chip      from '../components/Chip'
import BentoCard from '../components/BentoCard'
import '../styles/Skills.css'

export default function Skills() {
  return (
    <section className="section skills" id="skills">
      <div className="container">
        <motion.p className="label" {...flyIn(0)}>Tech stack</motion.p>

        <motion.h2 className="skills-heading" {...flyIn(0.07)}>
          What I build <span className="accent">with.</span>
        </motion.h2>

        <div className="bento-grid">
          {SKILL_GROUPS.map((group, gi) => (
            <BentoCard key={group.title} title={group.title} delay={0.1 + gi * 0.07}>
              {group.items.map((item, ii) => (
                <Chip
                  key={item.name}
                  {...item}
                  delay={0.15 + gi * 0.07 + ii * 0.05}
                />
              ))}
            </BentoCard>
          ))}
        </div>
      </div>
    </section>
  )
}
