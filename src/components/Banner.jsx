import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import '../styles/Banner.css'

function Banner() {
  const { language } = useLanguage()
  
  const translations = {
    NL: 'Wat houdt je tegen? Altijd direct bij waar het zit. Ook online.',
    EN: 'What\'s limiting you? Always exactly to the point. Online or live.'
  }

  return (
    <div className="banner">
      <div className="banner-container">
        <p className="banner-text">
          {translations[language]}
        </p>
      </div>
    </div>
  )
}

export default Banner

