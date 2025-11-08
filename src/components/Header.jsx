import React, { useState, useEffect } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { useTheme } from '../contexts/ThemeContext'
import { Menu, X, Globe, Sun, Moon } from 'lucide-react'

const Header = () => {
  const { language, toggleLanguage, content } = useLanguage()
  const { isDark, toggleTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''} ${isDark ? 'dark' : ''}`}>
      <style jsx>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid var(--border);
          z-index: 1000;
          transition: all 0.3s ease;
        }
        
        .header.dark {
          background: rgba(23, 23, 23, 0.95);
          border-bottom-color: var(--border-dark);
        }
        
        .header.scrolled {
          background: rgba(255, 255, 255, 0.98);
          box-shadow: var(--shadow-md);
        }
        
        .header.scrolled.dark {
          background: rgba(23, 23, 23, 0.98);
          box-shadow: var(--shadow-md-dark);
        }
        
        .nav-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 1.5rem;
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .logo {
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--primary-dark);
          text-decoration: none;
          transition: color 0.3s ease;
        }
        
        .dark .logo {
          color: var(--primary-light);
        }
        
        .nav-links {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          list-style: none;
        }
        
        .nav-link {
          color: var(--text-primary);
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s ease;
          cursor: pointer;
        }
        
        .dark .nav-link {
          color: var(--text-light);
        }
        
        .nav-link:hover {
          color: var(--primary-bright);
        }
        
        .theme-toggle {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          background: transparent;
          border: 1px solid var(--border);
          border-radius: 0.5rem;
          cursor: pointer;
          transition: all 0.3s ease;
          color: var(--text-primary);
        }
        
        .dark .theme-toggle {
          border-color: var(--border-dark);
          color: var(--text-light);
        }
        
        .theme-toggle:hover {
          background: var(--surface);
          border-color: var(--primary-bright);
          transform: scale(1.05);
        }
        
        .dark .theme-toggle:hover {
          background: var(--surface-dark);
        }
        
        .language-toggle {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: transparent;
          border: 1px solid var(--border);
          border-radius: 0.5rem;
          padding: 0.5rem 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          color: var(--text-primary);
        }
        
        .dark .language-toggle {
          border-color: var(--border-dark);
          color: var(--text-light);
        }
        
        .language-toggle:hover {
          background: var(--surface);
          border-color: var(--primary-bright);
        }
        
        .dark .language-toggle:hover {
          background: var(--surface-dark);
        }
        
        .controls {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        
        .menu-toggle {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          color: var(--text-primary);
          width: 44px;
          height: 44px;
          align-items: center;
          justify-content: center;
          border-radius: 0.5rem;
          transition: all 0.3s ease;
        }
        
        .dark .menu-toggle {
          color: var(--text-light);
        }
        
        .menu-toggle:hover {
          background: var(--surface);
        }
        
        .dark .menu-toggle:hover {
          background: var(--surface-dark);
        }
        
        .mobile-menu {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: white;
          border-bottom: 1px solid var(--border);
          box-shadow: var(--shadow-lg);
          padding: 1rem;
          display: none;
        }

        .dark .mobile-menu {
          background: rgba(23, 23, 23, 0.95);
          border-bottom-color: var(--border-dark);
          box-shadow: var(--shadow-lg);
        }
        
        .mobile-menu.open {
          display: block;
        }
        
        .mobile-nav-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        
        .mobile-controls {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
          padding-top: 1rem;
          border-top: 1px solid var(--border);
        }
        
        .dark .mobile-controls {
          border-top-color: var(--border-dark);
        }
        
        .mobile-controls .theme-toggle,
        .mobile-controls .language-toggle {
          flex: 1;
          justify-content: center;
        }
        
        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }
          
          .menu-toggle {
            display: flex;
          }
          
          .controls {
            display: none;
          }
        }
      `}</style>

      <nav className="nav-container">
        <a href="#" className="logo">DCVS</a>
        
        <ul className="nav-links">
          <li><a className="nav-link" onClick={() => scrollToSection('home')}>{content.nav.home}</a></li>
          <li><a className="nav-link" onClick={() => scrollToSection('about')}>{content.nav.about}</a></li>
          <li><a className="nav-link" onClick={() => scrollToSection('services')}>{content.nav.services}</a></li>
          <li><a className="nav-link" onClick={() => scrollToSection('projects')}>{content.nav.projects}</a></li>
          <li><a className="nav-link" onClick={() => scrollToSection('methodology')}>{content.nav.methodology}</a></li>
          <li><a className="nav-link" onClick={() => scrollToSection('contact')}>{content.nav.contact}</a></li>
        </ul>

        <div className="controls">
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button className="language-toggle" onClick={toggleLanguage}>
            <Globe size={18} />
            {language === 'es' ? 'ES' : 'EN'}
          </button>
        </div>

        <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
          <ul className="mobile-nav-links">
            <li><a className="nav-link" onClick={() => scrollToSection('home')}>{content.nav.home}</a></li>
            <li><a className="nav-link" onClick={() => scrollToSection('about')}>{content.nav.about}</a></li>
            <li><a className="nav-link" onClick={() => scrollToSection('services')}>{content.nav.services}</a></li>
            <li><a className="nav-link" onClick={() => scrollToSection('projects')}>{content.nav.projects}</a></li>
            <li><a className="nav-link" onClick={() => scrollToSection('methodology')}>{content.nav.methodology}</a></li>
            <li><a className="nav-link" onClick={() => scrollToSection('contact')}>{content.nav.contact}</a></li>
          </ul>
          <div className="mobile-controls">
            <button className="theme-toggle" onClick={toggleTheme}>
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button className="language-toggle" onClick={toggleLanguage}>
              <Globe size={16} />
              {language === 'es' ? 'ES' : 'EN'}
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
