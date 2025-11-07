import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { Shield, Zap, Lightbulb, Heart, Users, Cpu } from 'lucide-react'

const About = () => {
  const { content } = useLanguage()

  const values = [
    { icon: Shield, ...content.about.values.integrity },
    { icon: Zap, ...content.about.values.adaptability },
    { icon: Lightbulb, ...content.about.values.creativity },
    { icon: Heart, ...content.about.values.empathy },
    { icon: Users, ...content.about.values.collaboration },
    { icon: Cpu, ...content.about.values.innovation }
  ]

  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title fade-in">{content.about.title}</h2>
        <p className="section-subtitle fade-in">{content.about.description}</p>
        
        <div className="grid grid-2 fade-in" style={{marginBottom: '4rem'}}>
          <div>
            <img 
              src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="DCVS Team" 
              style={{
                width: '100%',
                height: '400px',
                objectFit: 'cover',
                borderRadius: '1rem',
                boxShadow: 'var(--shadow-lg)'
              }}
            />
             </div>
          <div style={{ padding: '2rem' }}>
            <h3 style={{ 
              fontSize: '1.5rem', 
              fontWeight: '600', 
              marginBottom: '1.5rem',
              color: 'var(--primary-dark)'
            }}>
              {content.about.values.title}
            </h3>
            <div className="grid grid-2" style={{ gap: '1.5rem' }}>
              {values.map((value, index) => (
                <div key={index} className="card" style={{ 
                  padding: '1.5rem',
                  textAlign: 'center'
                }}>
                  <div style={{
                    width: '3rem',
                    height: '3rem',
                    background: 'linear-gradient(135deg, var(--primary-bright), var(--primary-light))',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1rem'
                  }}>
                    <value.icon size={20} color="white" />
                  </div>
                  <h4 style={{ 
                    fontSize: '1.125rem',
                    fontWeight: '600',
                    marginBottom: '0.5rem',
                    color: 'var(--text-primary)'
                  }}>
                    {value.title}
                  </h4>
                  <p style={{ 
                    color: 'var(--text-secondary)',
                    fontSize: '0.875rem',
                    lineHeight: '1.5'
                  }}>
                    {value.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
