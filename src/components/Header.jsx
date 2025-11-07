import React, { useState, useEffect } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { Menu, X, Globe } from 'lucide-react'

const Header = () => {
  const { language, toggleLanguage, content } = useLanguage()
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
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
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
        
        .header.scrolled {
          background: rgba(255, 255, 255, 0.98);
          box-shadow: var(--shadow-md);
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
        }
        
        .nav-links {
          display: flex;
          align-items: center;
          gap: 2rem;
          list-style: none;
        }
        
        .nav-link {
          color: var(--text-primary);
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s ease;
          cursor: pointer;
        }
        
        .nav-link:hover {
          color: var(--primary-bright);
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
        
        .language-toggle:hover {
          background: var(--surface);
          border-color: var(--primary-bright);
        }
        
        .menu-toggle {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          color: var(--text-primary);
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
        
        .mobile-menu.open {
          display: block;
        }
        
        .mobile-nav-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        
        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }
          
          .menu-toggle {
            display: block;
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
          <button className="language-toggle" onClick={toggleLanguage}>
            <Globe size={18} />
            {language === 'es' ? 'ES' : 'EN'}
          </button>
        </ul>

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
            <li>
              <button className="language-toggle" onClick={toggleLanguage}>
                <Globe size={18} />
                {language === 'es' ? 'ES' : 'EN'}
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header
