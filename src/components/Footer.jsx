import styles from './Footer.module.css'
 
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.logo}>PB</div>
        <p className={styles.copy}>© 2026 Prashant Banjare · Data Scientist · NIT Rourkela</p>
        <p className={styles.made}>Built with React + Vite</p>
      </div>
    </footer>
  )
}