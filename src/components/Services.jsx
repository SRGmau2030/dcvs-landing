import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { 
  Building, 
  TrendingUp, 
  Palette, 
  Scale, 
  Briefcase, 
  Megaphone, 
  DollarSign, 
  ClipboardList, 
  Hammer 
} from 'lucide-react'

const Services = () => {
  const { content } = useLanguage()

  const services = [
    { icon: Building, ...content.services.items[0] },
    { icon: TrendingUp, ...content.services.items[1] },
    { icon: Palette, ...content.services.items[2] },
    { icon: Scale, ...content.services.items[3] },
    { icon: Briefcase, ...content.services.items[4] },
    { icon: Megaphone, ...content.services.items[5] },
    { icon: DollarSign, ...content.services.items[6] },
    { icon: ClipboardList, ...content.services.items[7] },
    { icon: Hammer, ...content.services.items[8] }
  ]

  return (
    <section id="services" className="section" style={{ background: 'var(--surface)' }}>
      <div className="container">
        <h2 className="section-title fade-in">{content.services.title}</h2>
        <p className="section-subtitle fade-in">{content.services.subtitle}</p>
        
        <div className="grid grid-3 fade-in">
          {services.map((service, index) => (
            <div key={index} className="card" style={{ textAlign: 'center' }}>
              <div style={{
                width: '4rem',
                height: '4rem',
                background: 'linear-gradient(135deg, var(--primary-bright), var(--primary-light))',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem'
              }}>
                <service.icon size={24} color="white" />
              </div>
              <h3 style={{ 
                fontSize: '1.25rem',
                fontWeight: '600',
                marginBottom: '1rem',
                color: 'var(--text-primary)'
              }}>
                {service.title}
              </h3>
              <p style={{ 
                color: 'var(--text-secondary)',
                lineHeight: '1.6'
              }}>
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
