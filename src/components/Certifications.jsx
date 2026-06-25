import { certifications } from '../data/portfolio'
import styles from './Certifications.module.css'
import { useReveal } from '../hooks/useReveal'

const issuers = {
  "DeepLearning.AI & Stanford University": { icon: "🧠", color: "#ff6b6b" },
  "IBM": { icon: "💼", color: "#4ecdc4" },
}

export default function Certifications() {
  const [ref, visible] = useReveal()

  return (
    <section id="certifications" className={`section reveal ${visible ? 'reveal-visible' : ''}`} ref={ref}>
      <p className="section-tag">Verified Learning</p>
      <h2 className="section-title">Certifications</h2>
      <p className="section-desc">Formal credentials from world-class institutions.</p>

      <div className={styles.grid}>
        {certifications.map((cert, i) => {
          const meta = issuers[cert.issuer] || { icon: "📜", color: "var(--teal)" }
          return (
            <a
              key={i}
              href={cert.link}
              target="_blank"
              rel="noreferrer"
              className={`card stagger-item ${styles.certCard}`}
              style={{ '--accent': meta.color }}
            >
              <div className={styles.certIcon}>{meta.icon}</div>
              <div className={styles.certBody}>
                <h3 className={styles.certName}>{cert.name}</h3>
                <p className={styles.certIssuer}>{cert.issuer}</p>
              </div>
              <div className={styles.certArrow}>↗</div>
            </a>
          )
        })}
      </div>
    </section>
  )
}