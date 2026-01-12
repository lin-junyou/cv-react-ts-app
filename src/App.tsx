import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Interests from './components/Interests'
import Contact from './components/Contact'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    // 從 localStorage 讀取主題偏好，預設為深色模式
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null
    return savedTheme || 'dark'
  })

  useEffect(() => {
    // 設置 data-theme 屬性
    document.documentElement.setAttribute('data-theme', theme)
    // 保存主題偏好到 localStorage
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    // 監聽滾動事件，決定是否顯示回到頂部按鈕
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'))
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  const currentYear = new Date().getFullYear()

  return (
    <div className="app">
      <Header
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        theme={theme}
        toggleTheme={toggleTheme}
      />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Interests />
        <Contact />
      </main>
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; {currentYear} L.J.Y. All rights reserved.</p>
        </div>
      </footer>

      {/* 回到頂部按鈕 */}
      <button
        className={`scroll-to-top ${showScrollTop ? 'show' : ''}`}
        onClick={scrollToTop}
        aria-label="回到頂部"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="18 15 12 9 6 15"></polyline>
        </svg>
      </button>
    </div>
  )
}

export default App
