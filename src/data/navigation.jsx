import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi'

export const NAV_LINKS = [
  { label: 'About',   href: '#about'   },
  { label: 'Skills',  href: '#skills'  },
  { label: 'Contact', href: '#contact' },
]

export const SOCIAL_LINKS = [
  { icon: <FiGithub />,   href: 'https://github.com/praveendeviam', label: 'GitHub'   },
  { icon: <FiLinkedin />, href: 'https://linkedin.com',              label: 'LinkedIn' },
  { icon: <FiTwitter />,  href: 'https://twitter.com',               label: 'Twitter'  },
  { icon: <FiMail />,     href: 'mailto:praveendeivam1817@gmail.com', label: 'Email'   },
]
