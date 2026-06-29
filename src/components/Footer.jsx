import { SOCIAL_LINKS } from '../data/navigation'
import '../styles/Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <a href="#" className="footer-logo">
          Praveen Deivam<span>.</span>
        </a>

        <p className="footer-copy">
          © {new Date().getFullYear()} Praveen Deivam
        </p>

        <div className="footer-socials">
          {SOCIAL_LINKS.filter(s => s.label !== 'Email').map(({ icon, href, label }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
              {icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
