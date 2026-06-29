import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <a href="#" className="footer-logo">Praveen Deivam<span>.</span></a>
        <p className="footer-copy">© {new Date().getFullYear()} Praveen Deivam</p>
        <div className="footer-socials">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FiGithub /></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FiLinkedin /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FiTwitter /></a>
        </div>
      </div>
    </footer>
  )
}
