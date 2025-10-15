import React, { useState } from 'react'
import '../styles/Navigation.css'

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMeerWetenOpen, setIsMeerWetenOpen] = useState(false)
  const [language, setLanguage] = useState('NL')

  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-logo">
          <img src="/3dFlow logo L.jpg" alt="3DFlow Logo" className="logo-image" />
        </div>

        <button 
          className="nav-mobile-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <a href="#over-mij" className="nav-link">Over mij</a>
          <a href="#voor-wie" className="nav-link">Voor wie?</a>
          <a href="#brainspotting" className="nav-link">Brainspotting + ISTDP</a>
          
          <div 
            className="nav-dropdown"
            onMouseEnter={() => setIsMeerWetenOpen(true)}
            onMouseLeave={() => setIsMeerWetenOpen(false)}
          >
            <a href="#meer-weten" className="nav-link">
              Meer weten?
              <svg className="dropdown-arrow" width="12" height="8" viewBox="0 0 12 8" fill="none">
                <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
            </a>
            {isMeerWetenOpen && (
              <div className="dropdown-menu">
                <a href="#praktisch">Praktisch</a>
                <a href="#kosten">Kosten</a>
                <a href="#reviews">Reviews</a>
                <a href="#actueel">Actueel</a>
                <a href="#blogs">Blogs</a>
              </div>
            )}
          </div>

          <div className="language-toggle-nav">
            <button 
              className={`lang-btn ${language === 'NL' ? 'active' : ''}`}
              onClick={() => setLanguage('NL')}
            >
              NL
            </button>
            <span className="lang-separator">|</span>
            <button 
              className={`lang-btn ${language === 'EN' ? 'active' : ''}`}
              onClick={() => setLanguage('EN')}
            >
              EN
            </button>
          </div>

          <a href="#contact" className="btn btn-primary nav-contact-btn">Contact</a>
        </div>
      </div>
    </nav>
  )
}

export default Navigation

