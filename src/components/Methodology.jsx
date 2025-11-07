import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { Target, BarChart3, Clock } from 'lucide-react'

const Methodology = () => {
  const { content } = useLanguage()

  const methodologies = [
    { icon: Target, ...content.methodology.items[0] },
    { icon: BarChart3, ...content.methodology.items[1] },
    { icon: Clock, ...content.methodology.items[2] }
  ]

  return (
    <section id="methodology" className="section" style={{ background: 'var(--surface)' }}>
      <div className="container">
        <h2 className="section-title fade-in">{content.methodology.title}</h2>
        <p className="section-subtitle fade-in">{content.methodology.subtitle}</p>
        
        <div className="grid grid-3 fade-in">
          {methodologies.map((method, index) => (
            <div key={index} className="card" style={{ textAlign: 'center' }}>
              <div style={{
                width: '5rem',
                height: '5rem',
                background: 'linear-gradient(135deg, var(--primary-bright), var(--primary-light))',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem'
              }}>
                <method.icon size={28} color="white" />
              </div>
              <h3 style={{ 
                fontSize: '1.5rem',
                fontWeight: '600',
                marginBottom: '1rem',
                color: 'var(--text-primary)'
              }}>
                {method.title}
              </h3>
              <p style={{ 
                color: 'var(--text-secondary)',
                lineHeight: '1.6'
              }}>
                {method.desc}
              </p>
            </div>
          ))}
        </div>
        
        <div className="fade-in" style={{ 
          marginTop: '4rem',
          background: 'linear-gradient(135deg, var(--primary-dark), var(--primary-accent))',
          borderRadius: '1rem',
          padding: '3rem',
          textAlign: 'center',
          color: 'white'
        }}>
          <h3 style={{ 
            fontSize: '1.75rem',
            fontWeight: '600',
            marginBottom: '1rem'
          }}>
            Resultados Comprobados
          </h3>
          <p style={{ 
            fontSize: '1.125rem',
            opacity: '0.9',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Nuestra metodología ha permitido completar proyectos 30% más rápido con un 25% de reducción en costos, 
            manteniendo los más altos estándares de calidad y satisfacción del cliente.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Methodology
