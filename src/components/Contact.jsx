import React, { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { Send, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'

const Contact = () => {
  const { content } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate form submission
    alert('Mensaje enviado correctamente. Nos pondremos en contacto pronto.')
    setFormData({ name: '', email: '', message: '' })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title fade-in">{content.contact.title}</h2>
        <p className="section-subtitle fade-in">{content.contact.subtitle}</p>
        
        <div className="grid grid-2 fade-in" style={{ gap: '3rem', alignItems: 'start' }}>
          <div className="card">
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ 
                  display: 'block', 
                  marginBottom: '0.5rem',
                  fontWeight: '500',
                  color: 'var(--text-primary)'
                }}>
                  {content.contact.form.name}
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    border: '2px solid var(--border)',
                    borderRadius: '0.5rem',
                    fontSize: '1rem',
                    transition: 'border-color 0.3s ease'
                  }}
                />
              </div>
              
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ 
                  display: 'block', 
                  marginBottom: '0.5rem',
                  fontWeight: '500',
                  color: 'var(--text-primary)'
                }}>
                  {content.contact.form.email}
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    border: '2px solid var(--border)',
                    borderRadius: '0.5rem',
                    fontSize: '1rem',
                    transition: 'border-color 0.3s ease'
                  }}
                />
              </div>
              
              <div style={{ marginBottom: '2rem' }}>
                <label style={{ 
                  display: 'block', 
                  marginBottom: '0.5rem',
                  fontWeight: '500',
                  color: 'var(--text-primary)'
                }}>
                  {content.contact.form.message}
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    border: '2px solid var(--border)',
                    borderRadius: '0.5rem',
                    fontSize: '1rem',
                    resize: 'vertical',
                    transition: 'border-color 0.3s ease',
                    fontFamily: 'inherit'
                  }}
                />
              </div>
              
              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                {content.contact.form.submit}
                <Send size={18} />
              </button>
            </form>
          </div>
          
          <div>
            <div className="card" style={{ marginBottom: '2rem' }}>
              <h3 style={{ 
                fontSize: '1.25rem',
                fontWeight: '600',
                marginBottom: '1.5rem',
                color: 'var(--text-primary)'
              }}>
                Información de Contacto
              </h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{
                    width: '3rem',
                    height: '3rem',
                    background: 'var(--primary-light)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Mail size={18} color="var(--primary-dark)" />
                  </div>
                  <div>
                    <div style={{ fontWeight: '500', color: 'var(--text-primary)' }}>Email</div>
                    <div style={{ color: 'var(--text-secondary)' }}>{content.contact.social.email}</div>
                  </div>
                </div>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{
                    width: '3rem',
                    height: '3rem',
                    background: 'var(--primary-light)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Phone size={18} color="var(--primary-dark)" />
                  </div>
                  <div>
                    <div style={{ fontWeight: '500', color: 'var(--text-primary)' }}>WhatsApp</div>
                    <div style={{ color: 'var(--text-secondary)' }}>{content.contact.social.whatsapp}</div>
                  </div>
                </div>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{
                    width: '3rem',
                    height: '3rem',
                    background: 'var(--primary-light)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <MapPin size={18} color="var(--primary-dark)" />
                  </div>
                  <div>
                    <div style={{ fontWeight: '500', color: 'var(--text-primary)' }}>Oficina Principal</div>
                    <div style={{ color: 'var(--text-secondary)' }}>Ciudad de México, MX</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="card">
              <h3 style={{ 
                fontSize: '1.25rem',
                fontWeight: '600',
                marginBottom: '1.5rem',
                color: 'var(--text-primary)'
              }}>
                {content.contact.social.title}
              </h3>
              
              <div style={{ display: 'flex', gap: '1rem' }}>
                {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    style={{
                      width: '3rem',
                      height: '3rem',
                      background: 'var(--surface)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      textDecoration: 'none',
                      color: 'var(--primary-dark)',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
