import { motion } from 'framer-motion'
import { flyIn } from '../helpers/animations'

export default function Chip({ name, icon, color, delay = 0 }) {
  return (
    <motion.div className="chip" {...flyIn(delay)}>
      <span className="chip-icon" style={{ color }}>{icon}</span>
      <span className="chip-name">{name}</span>
    </motion.div>
  )
}
