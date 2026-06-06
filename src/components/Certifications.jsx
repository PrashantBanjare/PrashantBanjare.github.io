import { certifications } from '../data/portfolio'
import styles from './Certifications.module.css'

const issuers = {
  "DeepLearning.AI & Stanford University": { icon: "🧠", color: "#ff6b6b" },
  "IBM": { icon: "💼", color: "#4ecdc4" },
}

export default function Certifications() {
  return (
    <section id="certifications" className="section">
      <p className="section-tag">Verified Learning</p>
      <h2 className="section-title">Certifications</h2>
      <p className="section-desc">
        Formal credentials from world-class institutions.
      </p>

      <div className={styles.grid}>
        {certifications.map((cert, i) => {
          return (
            <a
              key={i}
              href={cert.link}
              target="_blank"
              rel="noreferrer"
              className={`card ${styles.certCard}`}
              style={{ '--accent': 'var(--teal)' }}
            >
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