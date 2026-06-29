import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiSend } from 'react-icons/fi'
import { flyIn } from '../helpers/animations'
import '../styles/Contact.css'

const INITIAL_FORM = { name: '', email: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(INITIAL_FORM)
  const [sent, setSent] = useState(false)

  const handleChange = ({ target: { name, value } }) =>
    setForm(prev => ({ ...prev, [name]: value }))

  const handleSubmit = e => {
    e.preventDefault()
    setSent(true)
    setForm(INITIAL_FORM)
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section className="section contact" id="contact">
      <div className="container">
        <motion.p className="label" {...flyIn(0)}>Contact</motion.p>

        <div className="contact-layout">
          <div className="contact-info">
            <motion.h2 className="contact-heading" {...flyIn(0.07)}>
              Got a project?<br />
              <span className="accent">Let&apos;s talk.</span>
            </motion.h2>

            <motion.p className="contact-sub" {...flyIn(0.14)}>
              Whether it&apos;s a new product, an existing codebase that needs
              love, or just a conversation — I&apos;m happy to chat.
            </motion.p>

            <motion.a
              className="contact-email"
              href="mailto:praveendeivam1817@gmail.com"
              {...flyIn(0.2)}
            >
              praveendeivam1817@gmail.com
            </motion.a>
          </div>

          <motion.form className="contact-form" onSubmit={handleSubmit} {...flyIn(0.12)}>
            <div className="cf-row">
              <div className="cf-field">
                <label htmlFor="name">Name</label>
                <input
                  id="name" name="name" type="text"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="cf-field">
                <label htmlFor="email">Email</label>
                <input
                  id="email" name="email" type="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="cf-field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message" name="message" rows={5}
                placeholder="Tell me about your project..."
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="btn btn-accent send-btn">
              {sent
                ? '✓ Sent — I\'ll be in touch!'
                : <><FiSend /> Send message</>
              }
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
