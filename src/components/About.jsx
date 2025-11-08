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

        <div className="about-mission-vision fade-in">
          <div className="about-block mission-block">
            <h3 className="about-block-title">Misión</h3>
            <p className="about-block-text">{content.about.mission}</p>
          </div>
          <div className="about-block vision-block">
            <h3 className="about-block-title">Visión</h3>
            <p className="about-block-text">{content.about.vision}</p>
          </div>
        </div>

        <style jsx>{`
          .about-mission-vision {
            display: flex;
            gap: 2rem;
            margin: 2rem 0;
          }
          .about-block {
            flex: 1;
            background: var(--surface);
            border-radius: 1rem;
            padding: 1.5rem;
            box-shadow: var(--shadow-lg);
            border-left: 6px solid var(--primary-bright);
            margin-bottom: 0;
            transition: background 0.3s, color 0.3s;
          }
          .vision-block {
            border-left: 6px solid var(--primary-accent);
          }
          .about-block-title {
            font-size: 1.25rem;
            font-weight: 700;
            margin-bottom: 0.75rem;
            color: var(--primary-dark);
          }
          .about-block-text {
            font-size: 1rem;
            line-height: 1.6;
            color: var(--text-secondary);
          }
          @media (max-width: 900px) {
            .about-mission-vision {
              flex-direction: column;
            }
          }
          .dark .about-block {
            background: var(--surface-dark);
            box-shadow: var(--shadow-lg-dark);
          }
          .dark .about-block-title {
            color: #38bdf8;
          }
          .dark .about-block-text {
            color: #e0e7ef;
          }
        `}</style>

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
