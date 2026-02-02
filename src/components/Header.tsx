import { useEffect, useState } from 'react'
import './Header.css'
import { generateResumePDF } from '../utils/pdfGenerator'

interface HeaderProps {
  activeSection: string
  setActiveSection: (section: string) => void
  theme: 'light' | 'dark'
  toggleTheme: () => void
}

const Header = ({ activeSection, setActiveSection, theme, toggleTheme }: HeaderProps) => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0,
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    const sections = document.querySelectorAll('section[id]')
    sections.forEach(section => observer.observe(section))

    return () => {
      sections.forEach(section => observer.unobserve(section))
    }
  }, [setActiveSection])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(sectionId)
    }
  }

  const handleDownloadPDF = () => {
    generateResumePDF('CV_JunYou.pdf')
  }

  const navItems = [
    { id: 'home', label: '首頁' },
    { id: 'about', label: '關於我' },
    { id: 'skills', label: '技術棧' },
    { id: 'projects', label: '專案' },
    { id: 'interests', label: '興趣' },
    { id: 'contact', label: '聯絡' },
  ]

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-content">
        <div className="logo">
          <img src="/ljy-logo.svg" alt="Logo" className="logo-icon" />
          <span className="logo-bracket">{'<'}</span>
          <span className="logo-text">JY</span>
          <span className="logo-bracket">{'/>'}</span>
        </div>
        <nav className="nav">
          {navItems.map(item => (
            <button
              key={item.id}
              className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => scrollToSection(item.id)}
            >
              {item.label}
            </button>
          ))}
          <button className="download-pdf-btn" onClick={handleDownloadPDF} aria-label="下載簡歷PDF">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            <span>下載PDF</span>
          </button>
          <button className="theme-toggle" onClick={toggleTheme} aria-label="切換主題">
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Header
