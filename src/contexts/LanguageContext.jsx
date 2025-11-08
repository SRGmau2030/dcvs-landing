import React, { createContext, useContext, useState } from 'react'

const LanguageContext = createContext()

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('es')

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'es' ? 'en' : 'es')
  }

  const content = {
    es: {
      nav: {
        home: 'Inicio',
        about: 'Nosotros',
        services: 'Servicios',
        projects: 'Proyectos',
        methodology: 'Metodología',
        contact: 'Contacto'
      },
      hero: {
        title: 'Impulsamos el desarrollo inmobiliario con innovación, estrategia y visión.',
        description: 'DCVS es una empresa líder en bienes raíces y desarrollo integral de proyectos, comprometida con crear comunidades sostenibles y generar impacto positivo.',
        primaryBtn: 'Contáctanos',
        secondaryBtn: 'Conoce nuestros proyectos'
      },
      about: {
        title: 'Sobre DCVS',
        description: 'Somos una empresa especializada en bienes raíces, desarrollo inmobiliario y soluciones personalizadas para empresarios y negocios en expansión.',
        mission: 'Crear comunidades prósperas y sostenibles que combinen diseño, innovación y responsabilidad social.',
        vision: 'Contribuir al progreso regional e internacional a través de proyectos inmobiliarios con propósito.',
        values: {
          title: 'Nuestros Valores',
          integrity: { title: 'Integridad', desc: 'Actuamos con honestidad y transparencia.' },
          adaptability: { title: 'Adaptabilidad', desc: 'Nos mantenemos ágiles ante los cambios del mercado.' },
          creativity: { title: 'Creatividad', desc: 'Buscamos soluciones innovadoras y efectivas.' },
          empathy: { title: 'Empatía', desc: 'Entendemos las necesidades de nuestros clientes.' },
          collaboration: { title: 'Colaboración', desc: 'Trabajamos en sinergia con aliados estratégicos.' },
          innovation: { title: 'Innovación', desc: 'Aplicamos tecnología y conocimiento de vanguardia.' }
        }
      },
      services: {
        title: 'Nuestros Servicios',
        subtitle: 'Soluciones integrales para el desarrollo inmobiliario',
        items: [
          { title: 'Estrategias de Desarrollo', desc: 'Acompañamiento integral desde la planificación hasta la ejecución.' },
          { title: 'Análisis de Mercado', desc: 'Estudios detallados para detectar oportunidades y tendencias.' },
          { title: 'Diseño y Arquitectura', desc: 'Creación de espacios inspiradores, funcionales y sostenibles.' },
          { title: 'Asesoría Legal y Fiscal', desc: 'Consultoría especializada en regulaciones y cumplimiento normativo.' },
          { title: 'Consultoría Empresarial', desc: 'Apoyo estratégico para emprendedores y empresas en crecimiento.' },
          { title: 'Marketing y Ventas', desc: 'Estrategias personalizadas para maximizar el retorno de inversión.' },
          { title: 'Financiamiento', desc: 'Orientación para estructurar inversiones y créditos.' },
          { title: 'Gestión de Proyectos', desc: 'Supervisión integral para cumplir tiempos y estándares de calidad.' },
          { title: 'Construcción', desc: 'Servicios completos desde urbanización hasta acabados de alta calidad.' }
        ]
      },
      projects: {
        title: 'Nuestros Proyectos: DOHMI',
        description: 'A través de nuestra marca DOHMI, desarrollamos proyectos inmobiliarios de alto impacto enfocados en nichos como extranjeros, empresarios y estudiantes foráneos.',
        viewMore: 'Ver más en DOHMI',
        items: [
          { name: 'DOHMI Residences', location: 'Zona Norte', type: 'Residencial de Lujo' },
          { name: 'DOHMI Business Center', location: 'Centro Financiero', type: 'Oficinas Corporativas' },
          { name: 'DOHMI Urban Living', location: 'Zona Centro', type: 'Apartamentos Estudiantiles' },
          { name: 'DOHMI Executive Suites', location: 'Distrito Comercial', type: 'Hospedaje Ejecutivo' }
        ]
      },
      methodology: {
        title: 'Cómo Operamos',
        subtitle: 'Aplicamos metodologías que garantizan eficiencia, innovación y resultados.',
        items: [
          { title: 'Método Lean Startup', desc: 'Desarrollo ágil y validación continua para optimizar recursos y tiempo.' },
          { title: 'Principio de Pareto', desc: 'Priorizamos el 20% que genera el 80% de resultados estratégicos.' },
          { title: 'Ley de Parkinson', desc: 'Optimizamos tiempo y recursos para máxima productividad y eficiencia.' }
        ]
      },
      contact: {
        title: 'Contáctanos',
        subtitle: 'Estamos listos para construir tu próximo proyecto inmobiliario.',
        form: {
          name: 'Nombre',
          email: 'Correo',
          message: 'Mensaje',
          submit: 'Enviar Mensaje'
        },
        social: {
          title: 'Síguenos en',
          email: 'info@dcvs.com',
          whatsapp: '+1 234 567 8900'
        }
      },
      footer: {
        rights: '© 2025 DCVS. Todos los derechos reservados.',
        quickLinks: 'Enlaces Rápidos'
      }
    },
    en: {
      nav: {
        home: 'Home',
        about: 'About',
        services: 'Services',
        projects: 'Projects',
        methodology: 'Methodology',
        contact: 'Contact'
      },
      hero: {
        title: 'We drive real estate development with innovation, strategy, and vision.',
        description: 'DCVS is a leading company in real estate and comprehensive project development, committed to creating sustainable communities and generating positive impact.',
        primaryBtn: 'Contact Us',
        secondaryBtn: 'View Our Projects'
      },
      about: {
        title: 'About DCVS',
        description: 'We are a company specialized in real estate, property development, and customized solutions for entrepreneurs and growing businesses.',
        mission: 'To create prosperous and sustainable communities that combine design, innovation, and social responsibility.',
        vision: 'To contribute to regional and international progress through purposeful real estate projects.',
        values: {
          title: 'Our Values',
          integrity: { title: 'Integrity', desc: 'We act with honesty and transparency.' },
          adaptability: { title: 'Adaptability', desc: 'We remain agile in the face of market changes.' },
          creativity: { title: 'Creativity', desc: 'We seek innovative and effective solutions.' },
          empathy: { title: 'Empathy', desc: 'We understand our clients needs.' },
          collaboration: { title: 'Collaboration', desc: 'We work in synergy with strategic partners.' },
          innovation: { title: 'Innovation', desc: 'We apply cutting-edge technology and knowledge.' }
        }
      },
      services: {
        title: 'Our Services',
        subtitle: 'Comprehensive solutions for real estate development',
        items: [
          { title: 'Development Strategies', desc: 'Comprehensive support from planning to execution.' },
          { title: 'Market Analysis', desc: 'Detailed studies to identify opportunities and trends.' },
          { title: 'Design & Architecture', desc: 'Creation of inspiring, functional, and sustainable spaces.' },
          { title: 'Legal & Tax Advisory', desc: 'Specialized consulting on regulations and compliance.' },
          { title: 'Business Consulting', desc: 'Strategic support for entrepreneurs and growing companies.' },
          { title: 'Marketing & Sales', desc: 'Customized strategies to maximize return on investment.' },
          { title: 'Financing', desc: 'Guidance for structuring investments and credits.' },
          { title: 'Project Management', desc: 'Comprehensive supervision to meet deadlines and quality standards.' },
          { title: 'Construction', desc: 'Complete services from urbanization to high-quality finishes.' }
        ]
      },
      projects: {
        title: 'Our Projects: DOHMI',
        description: 'Through our DOHMI brand, we develop high-impact real estate projects focused on niches such as foreigners, entrepreneurs, and international students.',
        viewMore: 'View More at DOHMI',
        items: [
          { name: 'DOHMI Residences', location: 'North Zone', type: 'Luxury Residential' },
          { name: 'DOHMI Business Center', location: 'Financial District', type: 'Corporate Offices' },
          { name: 'DOHMI Urban Living', location: 'Downtown', type: 'Student Apartments' },
          { name: 'DOHMI Executive Suites', location: 'Commercial District', type: 'Executive Accommodation' }
        ]
      },
      methodology: {
        title: 'How We Operate',
        subtitle: 'We apply methodologies that guarantee efficiency, innovation, and results.',
        items: [
          { title: 'Lean Startup Method', desc: 'Agile development and continuous validation to optimize resources and time.' },
          { title: 'Pareto Principle', desc: 'We prioritize the 20% that generates 80% of strategic results.' },
          { title: 'Parkinsons Law', desc: 'We optimize time and resources for maximum productivity and efficiency.' }
        ]
      },
      contact: {
        title: 'Contact Us',
        subtitle: 'We are ready to build your next real estate project.',
        form: {
          name: 'Name',
          email: 'Email',
          message: 'Message',
          submit: 'Send Message'
        },
        social: {
          title: 'Follow Us',
          email: 'info@dcvs.com',
          whatsapp: '+1 234 567 8900'
        }
      },
      footer: {
        rights: '© 2025 DCVS. All rights reserved.',
        quickLinks: 'Quick Links'
      }
    }
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, content: content[language] }}>
      {children}
    </LanguageContext.Provider>
  )
}
