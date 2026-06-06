import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const sections = ['home', 'about', 'experience', 'skills', 'projects', 'certifications', 'contact']
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    sections.forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <div className="grid-bg" />
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />
      <Navbar active={activeSection} />
      <main>
        <Hero />
        <div className="divider" />
        <About />
        <div className="divider" />
        <Experience />
        <div className="divider" />
        <Skills />
        <div className="divider" />
        <Projects />
        <div className="divider" />
        <Certifications />
        <div className="divider" />
        <Contact />
      </main>
      <Footer />
    </>
  )
}