import { useState } from 'react'
import { projects } from '../data/portfolio'
import styles from './Projects.module.css'

export default function Projects() {
  const [activeProj, setActiveProj] = useState(null)
  const proj = activeProj !== null ? projects[activeProj] : null

  return (
    <section id="projects" className="section">
      <p className="section-tag">What I've Built</p>
      <h2 className="section-title">Projects</h2>
      <p className="section-desc">End-to-end ML systems, deployed and battle-tested.</p>

      <div className={styles.grid}>
        {projects.map((p, i) => (
          <div
            key={i}
            className={`card ${styles.projCard} ${activeProj === i ? styles.projActive : ''}`}
            onClick={() => setActiveProj(activeProj === i ? null : i)}
          >
            {/* Number */}
            <div className={styles.projNum}>0{i + 1}</div>

            {/* Header */}
            <h3 className={styles.projTitle}>{p.title}</h3>
            <p className={styles.projTagline}>{p.tagline}</p>

            {/* Tags */}
            <div className={styles.projTags}>
              {p.tags.slice(0, 3).map(t => (
                <span key={t} className="chip">{t}</span>
              ))}
              {p.tags.length > 3 && (
                <span className="chip">+{p.tags.length - 3}</span>
              )}
            </div>

            {/* Expand arrow */}
            <div className={styles.expandHint}>
              {activeProj === i ? '↑ Collapse' : '↓ Learn more'}
            </div>

            {/* Expanded content */}
            {activeProj === i && (
              <div className={styles.expanded} onClick={e => e.stopPropagation()}>
                <div className={styles.expandDivider} />

                <p className={styles.overview}>{p.overview}</p>

                <h4 className={styles.techHeading}>Technical Deep Dive</h4>
                <div className={styles.highlights}>
                  {p.technical.map((t, ti) => (
                    <div key={ti} className={styles.highlight}>
                      <div className={styles.highlightDot} />
                      <div>
                        <h5 className={styles.hTitle}>{t.title}</h5>
                        <p className={styles.hDetail}>{t.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className={styles.futureRow}>
                  <span className={styles.futureLabel}>Future Scope:</span>
                  <span className={styles.futureText}>{p.future}</span>
                </div>

                {/* All tags */}
                <div className={styles.allTags}>
                  {p.tags.map(t => (
                    <span key={t} className="chip">{t}</span>
                  ))}
                </div>

                {/* CTAs */}
                <div className={styles.projCtas}>
                  <a href={p.github} target="_blank" rel="noreferrer" className="btn btn-outline">
                    GitHub ↗
                  </a>
                  {p.demo && (
                    <a href={p.demo} target="_blank" rel="noreferrer" className="btn btn-primary">
                      Live Demo ↗
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}