import React, { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react'

const Projects = () => {
  const { content } = useLanguage()
  const [currentProject, setCurrentProject] = useState(0)

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % content.projects.items.length)
  }

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + content.projects.items.length) % content.projects.items.length)
  }

  const projectImages = [
    'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg',
    'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg',
    'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
    'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg'
  ]

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title fade-in">{content.projects.title}</h2>
        <p className="section-subtitle fade-in">{content.projects.description}</p>
        
        <div className="fade-in" style={{ 
          maxWidth: '800px', 
          margin: '0 auto',
          position: 'relative'
        }}>
          <div className="card" style={{ padding: '0', overflow: 'hidden' }}>
            <div style={{ position: 'relative' }}>
              <img 
                src={projectImages[currentProject]} 
                alt={content.projects.items[currentProject].name}
                style={{
                  width: '100%',
                  height: '400px',
                  objectFit: 'cover'
                }}
              />
              <button 
                onClick={prevProject}
                style={{
                  position: 'absolute',
                  left: '1rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'rgba(255, 255, 255, 0.9)',
                  border: 'none',
                  borderRadius: '50%',
                  width: '3rem',
                  height: '3rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  boxShadow: 'var(--shadow-md)'
                }}
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={nextProject}
                style={{
                  position: 'absolute',
                  right: '1rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'rgba(255, 255, 255, 0.9)',
                  border: 'none',
                  borderRadius: '50%',
                  width: '3rem',
                  height: '3rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  boxShadow: 'var(--shadow-md)'
                }}
              >
                <ChevronRight size={20} />
              </button>
            </div>
            
            <div style={{ padding: '2rem' }}>
              <h3 style={{ 
                fontSize: '1.5rem',
                fontWeight: '600',
                marginBottom: '0.5rem',
                color: 'var(--text-primary)'
              }}>
                {content.projects.items[currentProject].name}
              </h3>
              <p style={{ 
                color: 'var(--text-secondary)',
                marginBottom: '0.5rem'
              }}>
                {content.projects.items[currentProject].location}
              </p>
              <p style={{ 
                color: 'var(--primary-bright)',
                fontWeight: '500',
                marginBottom: '1.5rem'
              }}>
                {content.projects.items[currentProject].type}
              </p>
              
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                {content.projects.items.map((project, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentProject(index)}
                    style={{
                      padding: '0.5rem 1rem',
                      border: `2px solid ${index === currentProject ? 'var(--primary-bright)' : 'var(--border)'}`,
                      borderRadius: '0.5rem',
                      background: index === currentProject ? 'var(--primary-bright)' : 'transparent',
                      color: index === currentProject ? 'white' : 'var(--text-secondary)',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      fontSize: '0.875rem'
                    }}
                  >
                    {project.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <a 
              href="https://dohmi.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              {content.projects.viewMore}
              <ExternalLink size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
