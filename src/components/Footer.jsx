import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'

const Footer = () => {
  const { content } = useLanguage()

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer style={{
      background: 'var(--primary-dark)',
      color: 'white',
      padding: '3rem 0 2rem'
    }}>
      <div className="container">
        <div className="grid grid-4 fade-in" style={{ marginBottom: '2rem' }}>
          <div>
            <div style={{ 
              fontSize: '1.5rem', 
              fontWeight: '800', 
              marginBottom: '1rem',
              color: 'white'
            }}>
              DCVS
            </div>
            <p style={{ 
              color: 'rgba(255, 255, 255, 0.8)',
              lineHeight: '1.6',
              fontSize: '0.875rem'
            }}>
              Impulsamos el desarrollo inmobiliario con innovación, estrategia y visión.
            </p>
          </div>
          
          <div>
            <h4 style={{ 
              fontSize: '1.125rem',
              fontWeight: '600',
              marginBottom: '1rem',
              color: 'white'
            }}>
              {content.footer.quickLinks}
            </h4>
            <ul style={{ listStyle: 'none' }}>
              {['home', 'about', 'services', 'projects', 'methodology', 'contact'].map((section) => (
                <li key={section} style={{ marginBottom: '0.5rem' }}>
                  <a 
                    onClick={() => scrollToSection(section)}
                    style={{
                      color: 'rgba(255, 255, 255, 0.8)',
                      textDecoration: 'none',
                      fontSize: '0.875rem',
                      cursor: 'pointer',
                      transition: 'color 0.3s ease'
                    }}
                  >
                    {content.nav[section]}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 style={{ 
              fontSize: '1.125rem',
              fontWeight: '600',
              marginBottom: '1rem',
              color: 'white'
            }}>
              Servicios
            </h4>
            <ul style={{ listStyle: 'none' }}>
              {content.services.items.slice(0, 5).map((service, index) => (
                <li key={index} style={{ marginBottom: '0.5rem' }}>
                  <span style={{
                    color: 'rgba(255, 255, 255, 0.8)',
                    fontSize: '0.875rem'
                  }}>
                    {service.title}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 style={{ 
              fontSize: '1.125rem',
              fontWeight: '600',
              marginBottom: '1rem',
              color: 'white'
            }}>
              Legal
            </h4>
            <ul style={{ listStyle: 'none' }}>
              <li style={{ marginBottom: '0.5rem' }}>
                <a href="#" style={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  textDecoration: 'none',
                  fontSize: '0.875rem'
                }}>
                  Términos y Condiciones
                </a>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <a href="#" style={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  textDecoration: 'none',
                  fontSize: '0.875rem'
                }}>
                  Política de Privacidad
                </a>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <a href="#" style={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  textDecoration: 'none',
                  fontSize: '0.875rem'
                }}>
                  Aviso Legal
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div style={{ 
          borderTop: '1px solid rgba(255, 255, 255, 0.2)',
          paddingTop: '2rem',
          textAlign: 'center',
          color: 'rgba(255, 255, 255, 0.7)',
          fontSize: '0.875rem'
        }}>
          {content.footer.rights}
        </div>
      </div>
    </footer>
  )
}

export default Footer
