import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import '../styles/Hero.css'

function Hero() {
  const { language } = useLanguage()
  
  const translations = {
    NL: 'De fundamentele èn snelste weg zowel voor prestatieverbetering als voor alles wat je belemmert, is verwerking.',
    EN: 'The most fundamental and fastest path both for performance enhancement and for everything that holds you back, is processing.'
  }

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            {translations[language]}
          </h1>
        </div>
        <div className="hero-image-container">
          <div className="hero-image-wrapper">
            <img src="/IMG_6840.jpeg" alt="Connection and growth" className="hero-image" />
          </div>
          <div className="clay-accent-box"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero

