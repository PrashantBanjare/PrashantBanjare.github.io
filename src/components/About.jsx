import { about, personalInfo } from '../data/portfolio'
import styles from './About.module.css'
import { useReveal} from '../hooks/useReveal'
 
export default function About() {
  const [ref, visible] = useReveal()
 
  return (
    <section id="about" className={`section reveal ${visible ? 'reveal-visible' : ''}`} ref={ref}>
      <p className="section-tag">Who I am</p>
      <h2 className="section-title">About Me</h2>
 
      <div className={styles.grid}>
        {/* Bio */}
        <div className={styles.bio}>
          {about.bio.map((para, i) => (
            <p key={i} className={styles.para}>{para}</p>
          ))}
 
          <div className={styles.actions}>
            <a href={personalInfo.cv} target="_blank" rel="noreferrer" className="btn btn-primary">
              View Full CV ↗
            </a>
          </div>
 
          {/* Hobby card */}
          <div className={`card ${styles.hobbyCard}`}>
            <div className={styles.hobbyIcon}>🏏</div>
            <div>
              <h4 className={styles.hobbyTitle}>Beyond the Screen</h4>
              <p className={styles.hobbyText}>
                Cricket grounds me — strategy, teamwork, and staying composed under pressure. The same mindset I bring to data science.
              </p>
            </div>
          </div>
        </div>
 
        {/* Education */}
        <div className={styles.educationCol}>
          <h3 className={styles.eduHeading}>Education</h3>
          <div className={styles.eduList}>
            {about.education.map((edu, i) => (
              <div key={i} className={`card stagger-item ${styles.eduCard}`}>
                <div className={styles.eduYear}>{edu.year}</div>
                <h4 className={styles.eduDegree}>{edu.degree}</h4>
                <p className={styles.eduInst}>
                  {edu.link
                    ? <a href={edu.link} target="_blank" rel="noreferrer" className={styles.eduLink}>{edu.institution}</a>
                    : edu.institution
                  }
                </p>
                <span className={styles.eduScore}>{edu.score}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}