import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'
 
const links = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certs' },
  { id: 'contact', label: 'Contact' },
]
 
export default function Navbar({ active }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
 
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
 
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }
 
  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <button className={styles.logo} onClick={() => scrollTo('home')}>PB</button>
 
      <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
        {links.map(({ id, label }) => (
          <li key={id}>
            <button
              className={`${styles.link} ${active === id ? styles.active : ''}`}
              onClick={() => scrollTo(id)}
            >
              {label}
            </button>
          </li>
        ))}
      </ul>
 
      <button
        className={styles.hamburger}
        onClick={() => setMenuOpen(v => !v)}
        aria-label="Toggle menu"
      >
        <span className={menuOpen ? styles.cross1 : ''} />
        <span className={menuOpen ? styles.crossMid : ''} />
        <span className={menuOpen ? styles.cross2 : ''} />
      </button>
    </nav>
  )
}