import { motion } from 'framer-motion'
import { flyIn } from '../helpers/animations'

export default function BentoCard({ title, delay = 0, children }) {
  return (
    <motion.div className="bento-card" {...flyIn(delay)}>
      <p className="bento-title">{title}</p>
      <div className="chip-grid">{children}</div>
    </motion.div>
  )
}
