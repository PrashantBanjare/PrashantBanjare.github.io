import { useState, useEffect } from 'react'
import { personalInfo } from '../data/portfolio'
import styles from './Hero.module.css'

const roles = ["Data Scientist", "AI/ML Engineer"]

const slides = [
  { src: "/images/mai_small.jpg", label: "Portrait" },
  { src: "/images/me&nit.jpg", label: "NIT Rourkela" },
  // { src: "/images/coding.jpg", label: "In Action" },
  // { src: "/images/cricket.jpg", label: "Cricket" },
]

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)
  const [githubFollowers, setGithubFollowers] = useState(null)
  const [slideIdx, setSlideIdx] = useState(0)
  const [sliding, setSliding] = useState(false)

  useEffect(() => {
    const current = roles[roleIdx]
    if (typing) {
      if (displayed.length < current.length) {
        const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80)
        return () => clearTimeout(t)
      } else {
        const t = setTimeout(() => setTyping(false), 1800)
        return () => clearTimeout(t)
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 50)
        return () => clearTimeout(t)
      } else {
        setRoleIdx(i => (i + 1) % roles.length)
        setTyping(true)
      }
    }
  }, [displayed, typing, roleIdx])

  useEffect(() => {
    fetch('https://api.github.com/users/PrashantBanjare')
      .then(r => r.json())
      .then(d => setGithubFollowers(d.followers))
      .catch(() => {})
  }, [])

  useEffect(() => {
    const t = setInterval(() => {
      setSlideIdx(i => (i + 1) % slides.length)
    }, 3500)
    return () => clearInterval(t)
  }, [])

  const goToSlide = (idx) => {
    if (sliding) return
    setSliding(true)
    setSlideIdx(idx)
    setTimeout(() => setSliding(false), 500)
  }

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.content}>
        {/* <div className={`${styles.badge} fade-up`}>
          <span className={styles.dot} />
          Available for opportunities
        </div> */}

        <h1 className={`${styles.name} fade-up fade-up-1`}>
          Prashant<br />
          <span className={styles.nameAccent}>Banjare</span>
        </h1>

        <div className={`${styles.roleRow} fade-up fade-up-2`}>
          <span className={styles.roleText}>{displayed}</span>
          <span className={styles.cursor} />
        </div>

        <p className={`${styles.tagline} fade-up fade-up-3`}>
          Building intelligence with code, discipline, and curiosity.
        </p>

        <div className={`${styles.ctas} fade-up fade-up-4`}>
          <button className="btn btn-primary" onClick={() => scrollTo('projects')}>View Projects ↓</button>
          <a href={personalInfo.cv} target="_blank" rel="noreferrer" className="btn btn-outline">Download CV</a>
          <a href={personalInfo.github} target="_blank" rel="noreferrer" className="btn btn-ghost">GitHub</a>
          <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="btn btn-ghost">LinkedIn</a>
          <a href={personalInfo.leetcode} target="_blank" rel="noreferrer" className="btn btn-ghost">LeetCode</a>
        </div>

        <div className={`${styles.stats} fade-up fade-up-5`}>
          <div className={styles.stat}>
            <span className={styles.statNum}>{githubFollowers !== null ? githubFollowers : '—'}</span>
            <span className={styles.statLabel}>GitHub Followers</span>
          </div>
          <div className={styles.statDiv} />
          <div className={styles.stat}>
            <span className={styles.statNum}>460+</span>
            <span className={styles.statLabel}>Instagram</span>
          </div>
          <div className={styles.statDiv} />
          <div className={styles.stat}>
            <span className={styles.statNum}>420+</span>
            <span className={styles.statLabel}>LinkedIn</span>
          </div>
          <div className={styles.statDiv} />
          <div className={styles.stat}>
            <span className={styles.statNum}>4</span>
            <span className={styles.statLabel}>Projects Shipped</span>
          </div>
        </div>
      </div>

      {/* Photo */}
      <div className={`${styles.photoWrap} fade-up fade-up-2`}>
        <div className={styles.photoGlow} />

        <div className={styles.photoBorder}>
          <div className={`${styles.photoFrame} ${sliding ? styles.slideOut : styles.slideIn}`}>
            <img
              key={slideIdx}
              src={slides[slideIdx].src}
              alt={slides[slideIdx].label}
              className={styles.photo}
            />
          </div>
        </div>

        <div className={styles.slideLabel}>{slides[slideIdx].label}</div>

        <div className={styles.dots}>
          {slides.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot2} ${i === slideIdx ? styles.dotActive : ''}`}
              onClick={() => goToSlide(i)}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>

        {/* <div className={`${styles.floatChip} ${styles.chip1}`}>⚡ ML</div>
        <div className={`${styles.floatChip} ${styles.chip2}`}>🎯 F1: 0.99</div>
        <div className={`${styles.floatChip} ${styles.chip3}`}>📊 Data</div> */}
      </div>
    </section>
  )
}