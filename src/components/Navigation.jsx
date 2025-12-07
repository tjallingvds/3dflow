import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../styles/Navigation.css'

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMeerWetenOpen, setIsMeerWetenOpen] = useState(false)
  const [language, setLanguage] = useState('NL')
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <nav className="navigation">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <img src="/3dFlow logo L.jpg" alt="3DFlow Logo" className="logo-image" />
        </Link>

        <button 
          className="nav-mobile-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>Home</Link>
          {isHome ? (
            <a href="#over-mij" className="nav-link" onClick={() => setIsMenuOpen(false)}>Over mij</a>
          ) : (
            <Link to="/over-mij" className="nav-link" onClick={() => setIsMenuOpen(false)}>Over mij</Link>
          )}
          {isHome ? (
            <a href="#voor-wie" className="nav-link" onClick={() => setIsMenuOpen(false)}>Voor wie?</a>
          ) : (
            <Link to="/#voor-wie" className="nav-link" onClick={() => setIsMenuOpen(false)}>Voor wie?</Link>
          )}
          <Link to="/brainspotting" className="nav-link" onClick={() => setIsMenuOpen(false)}>Brainspotting + ISTDP</Link>
          
          <div 
            className="nav-dropdown"
            onMouseEnter={() => setIsMeerWetenOpen(true)}
            onMouseLeave={() => setIsMeerWetenOpen(false)}
            onClick={() => setIsMeerWetenOpen(!isMeerWetenOpen)}
          >
            <span className="nav-link">
              Meer weten?
              <svg className="dropdown-arrow" width="12" height="8" viewBox="0 0 12 8" fill="none">
                <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
            </span>
            {isMeerWetenOpen && (
              <div className="dropdown-menu">
                <div className="dropdown-menu-inner">
                  <Link to="/praktisch" onClick={() => setIsMenuOpen(false)}>Praktisch</Link>
                  <Link to="/kosten" onClick={() => setIsMenuOpen(false)}>Kosten</Link>
                  <Link to="/reviews" onClick={() => setIsMenuOpen(false)}>Reviews</Link>
                  <Link to="/actueel" onClick={() => setIsMenuOpen(false)}>Actueel</Link>
                  <Link to="/blogs" onClick={() => setIsMenuOpen(false)}>Blogs</Link>
                </div>
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

          <Link to="/contact" className="btn btn-primary nav-contact-btn" onClick={() => setIsMenuOpen(false)}>Contact</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navigation

