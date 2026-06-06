import { useState, useEffect, useRef } from 'react'
import { skills } from '../data/portfolio'
import styles from './Skills.module.css'

const categories = Object.keys(skills)

function SkillBar({ name, level, animate }) {
  return (
    <div className={styles.skillRow}>
      <div className={styles.skillMeta}>
        <span className={styles.skillName}>{name}</span>
        <span className={styles.skillLevel}>{level}/10</span>
      </div>
      <div className={styles.barTrack}>
        <div
          className={styles.barFill}
          style={{ width: animate ? `${level * 10}%` : '0%' }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState(categories[0])
  const [animate, setAnimate] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimate(true) },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    setAnimate(false)
    const t = setTimeout(() => setAnimate(true), 50)
    return () => clearTimeout(t)
  }, [activeTab])

  const categorySkills = skills[activeTab]
  const avgLevel = Math.round(categorySkills.reduce((s, k) => s + k.level, 0) / categorySkills.length)

  return (
    <section id="skills" className="section" ref={sectionRef}>
      <p className="section-tag">Technical Arsenal</p>
      <h2 className="section-title">Skills</h2>
      <p className="section-desc">Self-assessed expertise across the full data science stack.</p>

      {/* Category tabs */}
      <div className={styles.tabs}>
        {categories.map(cat => (
          <button
            key={cat}
            className={`${styles.tab} ${activeTab === cat ? styles.tabActive : ''}`}
            onClick={() => setActiveTab(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className={styles.content}>
        {/* Skill bars */}
        <div className={styles.bars}>
          {categorySkills.map((skill, i) => (
            <SkillBar key={skill.name} {...skill} animate={animate} />
          ))}
        </div>

        {/* Category summary card */}
        <div className={`card ${styles.summaryCard}`}>
          <div className={styles.summaryTop}>
            <div className={styles.summaryNum}>{avgLevel}</div>
            <div className={styles.summaryLabel}>Avg Level<br /><span>in {activeTab}</span></div>
          </div>
          <div className={styles.radialWrap}>
            <svg viewBox="0 0 120 120" className={styles.radial}>
              <circle cx="60" cy="60" r="50" fill="none" stroke="var(--border)" strokeWidth="8" />
              <circle
                cx="60" cy="60" r="50"
                fill="none"
                stroke="var(--teal)"
                strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray={`${2 * Math.PI * 50}`}
                strokeDashoffset={animate ? `${2 * Math.PI * 50 * (1 - avgLevel / 10)}` : `${2 * Math.PI * 50}`}
                style={{ transition: 'stroke-dashoffset 1s cubic-bezier(0.4,0,0.2,1)', transform: 'rotate(-90deg)', transformOrigin: '60px 60px' }}
              />
              <text x="60" y="66" textAnchor="middle" fill="var(--text)" fontSize="22" fontWeight="800" fontFamily="var(--font-display)">
                {avgLevel}/10
              </text>
            </svg>
          </div>
          <p className={styles.summaryDesc}>
            {categorySkills.length} skills in this category
          </p>
          <div className={styles.skillPills}>
            {categorySkills.filter(s => s.level >= 8).map(s => (
              <span key={s.name} className={`chip ${styles.topChip}`}>⭐ {s.name}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}