import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiSend, FiArrowUpRight } from 'react-icons/fi'
import './Contact.css'

const fly = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const onChange = e => setForm({ ...form, [e.target.name]: e.target.value })
  const onSubmit = e => {
    e.preventDefault()
    setSent(true)
    setForm({ name: '', email: '', message: '' })
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section className="section contact" id="contact">
      <div className="container">
        <motion.p className="label" {...fly(0)}>Contact</motion.p>

        <div className="contact-layout">
          <div className="contact-left">
            <motion.h2 className="contact-heading" {...fly(0.07)}>
              Got a project?<br />
              <span className="accent">Let&apos;s talk.</span>
            </motion.h2>
            <motion.p className="contact-sub" {...fly(0.14)}>
              Whether it&apos;s a new product, an existing codebase that needs love,
              or just a conversation — I&apos;m happy to chat.
            </motion.p>
            <motion.a
              className="contact-email"
              href="mailto:praveendeivam1817@gmail.com"
              {...fly(0.2)}
            >
              praveendeivam1817@gmail.com <FiArrowUpRight />
            </motion.a>
          </div>

          <motion.form className="contact-form" onSubmit={onSubmit} {...fly(0.12)}>
            <div className="cf-row">
              <div className="cf-field">
                <label htmlFor="cn">Name</label>
                <input id="cn" name="name" type="text" placeholder="Your name"
                  value={form.name} onChange={onChange} required />
              </div>
              <div className="cf-field">
                <label htmlFor="ce">Email</label>
                <input id="ce" name="email" type="email" placeholder="your@email.com"
                  value={form.email} onChange={onChange} required />
              </div>
            </div>
            <div className="cf-field">
              <label htmlFor="cm">Message</label>
              <textarea id="cm" name="message" rows={5}
                placeholder="Tell me about your project..."
                value={form.message} onChange={onChange} required />
            </div>
            <button type="submit" className="btn btn-accent send-btn">
              {sent ? '✓ Sent! I\'ll reply soon.' : <><FiSend /> Send message</>}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
