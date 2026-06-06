import { useState } from 'react'
import { experiences } from '../data/portfolio'
import styles from './Experience.module.css'
 
export default function Experience() {
  const [activeExp, setActiveExp] = useState(0)
  const exp = experiences[activeExp]
 
  return (
    <section id="experience" className="section">
      <p className="section-tag">Work History</p>
      <h2 className="section-title">Experience</h2>
      <p className="section-desc">Where I've applied my skills in real-world environments.</p>
 
      <div className={styles.layout}>
        {/* Sidebar timeline */}
        <div className={styles.sidebar}>
          {experiences.map((e, i) => (
            <button
              key={i}
              className={`${styles.tabBtn} ${activeExp === i ? styles.tabActive : ''}`}
              onClick={() => setActiveExp(i)}
            >
              <div className={styles.tabIndicator} />
              <div className={styles.tabContent}>
                <span className={styles.tabRole}>{e.role}</span>
                <span className={styles.tabCompany}>{e.company}</span>
                <span className={styles.tabPeriod}>{e.period}</span>
              </div>
              <span className={`${styles.tabType} ${e.type === 'Industry' ? styles.industry : styles.research}`}>
                {e.type}
              </span>
            </button>
          ))}
        </div>
 
        {/* Detail panel */}
        <div key={activeExp} className={`card ${styles.detail}`}>
          {/* Header */}
          <div className={styles.detailHeader}>
            <div>
              <h3 className={styles.detailRole}>{exp.role}</h3>
              <p className={styles.detailMeta}>
                <span className={styles.company}>{exp.company}</span>
                <span className={styles.sep}>·</span>
                <span className={styles.period}>{exp.period}</span>
              </p>
            </div>
            <a href={exp.certificate} target="_blank" rel="noreferrer" className="btn btn-outline">
              Certificate ↗
            </a>
          </div>
 
          {/* Overview */}
          <p className={styles.overview}>{exp.overview}</p>
 
          {/* Highlights */}
          <div className={styles.highlights}>
            {exp.highlights.map((h, i) => (
              <div key={i} className={styles.highlight}>
                <div className={styles.highlightNum}>0{i + 1}</div>
                <div>
                  <h4 className={styles.highlightTitle}>{h.title}</h4>
                  <p className={styles.highlightDetail}>{h.detail}</p>
                </div>
              </div>
            ))}
          </div>
 
          {/* Tags */}
          <div className={styles.tags}>
            {exp.tags.map(t => (
              <span key={t} className="chip">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}