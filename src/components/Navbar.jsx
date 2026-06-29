import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'
import { NAV_LINKS } from '../data/navigation'
import '../styles/Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setOpen(false)

  return (
    <>
      <motion.header
        className={`nav ${scrolled ? 'nav--scrolled' : ''}`}
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0,   opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div className="container nav-inner">
          <a href="#" className="nav-logo">
            Praveen Deivam<span>.</span>
          </a>

          <nav className="nav-links">
            {NAV_LINKS.map(({ label, href }) => (
              <a key={label} href={href} className="nav-link">{label}</a>
            ))}
          </nav>

          <a href="#contact" className="btn btn-ghost nav-cta">Hire me</a>

          <button
            className="nav-burger"
            onClick={() => setOpen(prev => !prev)}
            aria-label="Toggle menu"
          >
            {open ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="nav-mobile"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0  }}
            exit={{    opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {NAV_LINKS.map(({ label, href }) => (
              <a key={label} href={href} className="nav-mobile-link" onClick={close}>
                {label}
              </a>
            ))}
            <a href="#contact" className="btn btn-accent" onClick={close}>Hire me</a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
