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
          {isHome ? (
            <a href="#over-mij" className="nav-link">Over mij</a>
          ) : (
            <Link to="/over-mij" className="nav-link">Over mij</Link>
          )}
          {isHome ? (
            <a href="#voor-wie" className="nav-link">Voor wie?</a>
          ) : (
            <Link to="/#voor-wie" className="nav-link">Voor wie?</Link>
          )}
          <Link to="/brainspotting" className="nav-link">Brainspotting + ISTDP</Link>
          
          <div 
            className="nav-dropdown"
            onMouseEnter={() => setIsMeerWetenOpen(true)}
            onMouseLeave={() => setIsMeerWetenOpen(false)}
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
                  <Link to="/praktisch">Praktisch</Link>
                  <Link to="/kosten">Kosten</Link>
                  <Link to="/reviews">Reviews</Link>
                  <Link to="/actueel">Actueel</Link>
                  <Link to="/blogs">Blogs</Link>
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

          <a href="#contact" className="btn btn-primary nav-contact-btn">Contact</a>
        </div>
      </div>
    </nav>
  )
}

export default Navigation

