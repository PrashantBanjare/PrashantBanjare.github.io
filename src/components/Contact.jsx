import { personalInfo } from '../data/portfolio'
import styles from './Contact.module.css'
import { useReveal } from '../hooks/useReveal'

import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaInstagram,
} from 'react-icons/fa'

import { HiRocketLaunch } from 'react-icons/hi2'

export default function Contact() {
  const [ref, visible] = useReveal()

  return (
    <section id="contact" className={`section reveal ${visible ? 'reveal-visible' : ''}`} ref={ref}>
      <p className="section-tag">Get In Touch</p>
      <h2 className="section-title">Contact</h2>

      <div className={styles.layout}>
        <div className={styles.left}>
          <p className={styles.intro}>
            I'm always open to discussing data science roles, collaborations, research projects, or just a good conversation about AI. My inbox is open.
          </p>

          <div className={styles.links}>
            <a href={`mailto:${personalInfo.email}`} className={`card stagger-item ${styles.linkCard}`}>
              <div className={styles.linkIcon}>
                <FaEnvelope />
              </div>
              <div>
                <div className={styles.linkLabel}>Email</div>
                <div className={styles.linkValue}>{personalInfo.email}</div>
              </div>
            </a>

            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className={`card stagger-item ${styles.linkCard}`}>
              <div className={styles.linkIcon}>
                <FaLinkedin />
              </div>
              <div>
                <div className={styles.linkLabel}>LinkedIn</div>
                <div className={styles.linkValue}>prashant-banjare-884075265</div>
              </div>
            </a>

            <a href={personalInfo.github} target="_blank" rel="noreferrer" className={`card stagger-item ${styles.linkCard}`}>
              <div className={styles.linkIcon}>
                <FaGithub />
              </div>
              <div>
                <div className={styles.linkLabel}>GitHub</div>
                <div className={styles.linkValue}>PrashantBanjare</div>
              </div>
            </a>

            <a href={personalInfo.instagram} target="_blank" rel="noreferrer" className={`card stagger-item ${styles.linkCard}`}>
              <div className={styles.linkIcon}>
                <FaInstagram />
              </div>
              <div>
                <div className={styles.linkLabel}>Instagram</div>
                <div className={styles.linkValue}>{personalInfo.instagramHandle}</div>
              </div>
            </a>
          </div>
        </div>

        <div className={styles.right}>
          <div className={`card ${styles.cta}`}>
            <div className={styles.ctaGlow} />
            <div className={styles.ctaIcon}>
              <HiRocketLaunch />
            </div>
            <h3 className={styles.ctaTitle}>Open to Opportunities</h3>
            <p className={styles.ctaText}>
              Looking for full-time Data Science / ML Engineer roles after graduating in 2026. Also open to freelance projects, research collaborations, and internships.
            </p>
            <a href={`mailto:${personalInfo.email}`} className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '16px' }}>
              Send Me an Email →
            </a>
            <a href={personalInfo.cv} target="_blank" rel="noreferrer" className="btn btn-outline" style={{ width: '100%', justifyContent: 'center', marginTop: '10px' }}>
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}