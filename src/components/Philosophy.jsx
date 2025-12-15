import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import '../styles/Philosophy.css'

function Philosophy() {
  const { language } = useLanguage()
  
  const translations = {
    NL: {
      first: 'Leven is groeien,',
      second: 'iedere stagnatie een afdruk van onverwerkte pijn.'
    },
    EN: {
      first: 'Life is growth;',
      second: 'every stagnation is an imprint of unprocessed pain.'
    }
  }

  const t = translations[language]

  return (
    <section className="philosophy">
      <div className="philosophy-container">
        <div className="divider-line" style={{ height: '80px' }}></div>
        
        <div className="philosophy-quote">
          <p className="quote-italic">{t.first}</p>
        </div>

        <div className="divider-line" style={{ height: '80px' }}></div>

        <div className="philosophy-statement">
          <h2 className="statement-text">
            {t.second}
          </h2>
        </div>

        <div className="divider-line" style={{ height: '80px' }}></div>
      </div>
    </section>
  )
}

export default Philosophy

