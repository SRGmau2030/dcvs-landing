import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { useTheme } from '../contexts/ThemeContext'
import { ArrowRight, Building2, TrendingUp, Users } from 'lucide-react'

const Hero = () => {
  const { content } = useLanguage()
  const { isDark } = useTheme()

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="hero">
      <style jsx>{`
        .hero {
          min-height: 100vh;
          background: ${isDark
            ? 'linear-gradient(135deg, #1e293b 0%, #334155 100%)'
            : 'linear-gradient(135deg, var(--primary-dark) 0%, var(--primary-accent) 100%)'};
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
          padding-top: 80px;
        }
        
        .hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2') center/cover;
          opacity: 0.1;
        }
        
        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
          text-align: center;
          color: white;
        }
        
        .hero-title {
          font-size: 3.5rem;
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          background: linear-gradient(135deg, #FFFFFF 0%, var(--primary-light) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .hero-description {
          font-size: 1.25rem;
          margin-bottom: 2.5rem;
          color: rgba(255, 255, 255, 0.9);
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.6;
        }
        
        .hero-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 4rem;
        }
        
        .hero-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
          max-width: 800px;
          margin: 0 auto;
        }
        
        .stat-item {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 1rem;
          padding: 2rem 1rem;
          text-align: center;
          transition: transform 0.3s ease;
        }
        
        .stat-item:hover {
          transform: translateY(-5px);
        }
        
        .stat-icon {
          width: 3rem;
          height: 3rem;
          margin: 0 auto 1rem;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .stat-number {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }
        
        .stat-label {
          font-size: 0.875rem;
          opacity: 0.9;
        }
        
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }
          
          .hero-description {
            font-size: 1.125rem;
          }
          
          .hero-buttons {
            flex-direction: column;
            align-items: center;
          }
          
          .hero-stats {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="hero-content">
        <h1 className="hero-title fade-in">
          {content.hero.title}
        </h1>
        <p className="hero-description fade-in">
          {content.hero.description}
        </p>
        
        <div className="hero-buttons fade-in">
          <button 
            className="btn btn-primary"
            onClick={() => scrollToSection('contact')}
          >
            {content.hero.primaryBtn}
            <ArrowRight size={20} />
          </button>
          <button 
            className="btn btn-secondary"
            style={{color: 'white', borderColor: 'white'}}
            onClick={() => scrollToSection('projects')}
          >
            {content.hero.secondaryBtn}
          </button>
        </div>
        
        <div className="hero-stats fade-in">
          <div className="stat-item">
            <div className="stat-icon">
              <Building2 size={24} color="white" />
            </div>
            <div className="stat-number">50+</div>
            <div className="stat-label">Proyectos Completados</div>
          </div>
          <div className="stat-item">
            <div className="stat-icon">
              <TrendingUp size={24} color="white" />
            </div>
            <div className="stat-number">$250M+</div>
            <div className="stat-label">Inversión Gestionada</div>
          </div>
          <div className="stat-item">
            <div className="stat-icon">
              <Users size={24} color="white" />
            </div>
            <div className="stat-number">100+</div>
            <div className="stat-label">Clientes Satisfechos</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
