import React, { useState } from 'react'
import Navigation from '../components/Navigation'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import { useLanguage } from '../contexts/LanguageContext'
import '../styles/Contact.css'

function Contact() {
  const { language } = useLanguage()
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const images = [
    { id: 1, src: '/praktijk-1.jpeg', label: 'Praktijk' },
    { id: 2, src: '/praktijk-2.jpeg', label: 'Praktijk' }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const translations = {
    NL: {
      title: 'Contact',
      intro: 'Voor vragen of het maken van een afspraak kan je mij bereiken via onderstaande gegevens. De kennismaking via zoom is altijd gratis.',
      email: 'Email',
      phone: 'Telefoon',
      location: 'Locatie',
      practice: 'Praktijk',
      practiceDesc: 'Afspraken kunnen naar keuze online of in mijn praktijk in Rotterdam plaatsvinden. Mijn praktijk biedt een rustige en veilige omgeving voor de sessies.',
      prev: 'Vorige foto',
      next: 'Volgende foto',
      goto: 'Ga naar foto'
    },
    EN: {
      title: 'Contact',
      intro: 'Voor vragen of het maken van een afspraak kan je mij bereiken via onderstaande gegevens. De kennismaking via zoom is altijd gratis.',
      email: 'Email',
      phone: 'Telefoon',
      location: 'Locatie',
      practice: 'Praktijk',
      practiceDesc: 'Afspraken kunnen naar keuze online of in mijn praktijk in Rotterdam plaatsvinden. Mijn praktijk biedt een rustige en veilige omgeving voor de sessies.',
      prev: 'Vorige foto',
      next: 'Volgende foto',
      goto: 'Ga naar foto'
    }
  }

  const t = translations[language]

  return (
    <div className="page">
      <Navigation />
      <Banner />
      
      <section className="contact-page">
        <div className="contact-container">
          <h1 className="page-title">{t.title}</h1>
          
          <div className="contact-intro">
            <p className="intro-text">{t.intro}</p>
          </div>

          <div className="contact-layout">
            <div className="contact-info-card">
              <div className="contact-detail">
                <h3>{t.email}</h3>
                <a href="mailto:mail@3dflow.nl" className="contact-link">mail@3dflow.nl</a>
              </div>
              
              <div className="contact-detail">
                <h3>{t.phone}</h3>
                <a href="tel:+31628406844" className="contact-link">06 28406844</a>
              </div>
              
              <div className="contact-detail">
                <h3>{t.location}</h3>
                <p className="contact-address">
                  Theo van Doesburgstraat 1<br />
                  3059 PA Rotterdam
                </p>
              </div>
            </div>

            <div className="practice-showcase">
              <h2 className="showcase-heading">{t.practice}</h2>
              <p className="showcase-description">{t.practiceDesc}</p>
              
              <div className="carousel-container">
                <div className="carousel-wrapper">
                  <button className="carousel-button prev" onClick={prevSlide} aria-label={t.prev}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  
                  <div className="carousel-slides">
                    {images.map((image, index) => (
                      <div
                        key={image.id}
                        className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
                      >
                        <img 
                          src={image.src} 
                          alt={image.label} 
                          className="practice-image"
                        />
                      </div>
                    ))}
                  </div>
                  
                  <button className="carousel-button next" onClick={nextSlide} aria-label={t.next}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
                
                <div className="carousel-dots">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      className={`dot ${index === currentSlide ? 'active' : ''}`}
                      onClick={() => goToSlide(index)}
                      aria-label={`${t.goto} ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Contact

