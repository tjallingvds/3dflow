import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import '../styles/Navigation.css'

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMeerWetenOpen, setIsMeerWetenOpen] = useState(false)
  const { language, setLanguage } = useLanguage()
  const location = useLocation()
  const isHome = location.pathname === '/'

  const translations = {
    NL: {
      home: 'Home',
      aboutMe: 'Over mij',
      forWhom: 'Voor wie?',
      brainspotting: 'Brainspotting + ISTDP',
      learnMore: 'Meer weten?',
      practical: 'Praktisch',
      costs: 'Kosten',
      reviews: 'Reviews',
      events: 'Lezingen',
      blogs: 'Blogs',
      contact: 'Contact'
    },
    EN: {
      home: 'Home',
      aboutMe: 'About me',
      forWhom: 'For whom?',
      brainspotting: 'Brainspotting + ISTDP',
      learnMore: 'Learn more:',
      practical: 'Practical info',
      costs: 'Costs',
      reviews: 'Reviews',
      events: 'Events',
      blogs: 'Blogs',
      contact: 'Contact'
    }
  }

  const t = translations[language]

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
          <Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>{t.home}</Link>
          {isHome ? (
            <a href="#over-mij" className="nav-link" onClick={(e) => {
              e.preventDefault()
              setIsMenuOpen(false)
              const element = document.querySelector('#over-mij')
              if (element) {
                const offset = 100
                const elementPosition = element.getBoundingClientRect().top
                const offsetPosition = elementPosition + window.pageYOffset - offset
                window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
              }
            }}>{t.aboutMe}</a>
          ) : (
            <Link to="/over-mij" className="nav-link" onClick={() => setIsMenuOpen(false)}>{t.aboutMe}</Link>
          )}
          {isHome ? (
            <a href="#voor-wie" className="nav-link" onClick={(e) => {
              e.preventDefault()
              setIsMenuOpen(false)
              const element = document.querySelector('#voor-wie')
              if (element) {
                const offset = 100
                const elementPosition = element.getBoundingClientRect().top
                const offsetPosition = elementPosition + window.pageYOffset - offset
                window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
              }
            }}>{t.forWhom}</a>
          ) : (
            <Link to="/#voor-wie" className="nav-link" onClick={() => setIsMenuOpen(false)}>{t.forWhom}</Link>
          )}
          <Link to="/brainspotting" className="nav-link" onClick={() => setIsMenuOpen(false)}>{t.brainspotting}</Link>
          
          <div 
            className="nav-dropdown"
            onMouseEnter={() => setIsMeerWetenOpen(true)}
            onMouseLeave={() => setIsMeerWetenOpen(false)}
            onClick={() => setIsMeerWetenOpen(!isMeerWetenOpen)}
          >
            <span className="nav-link">
              {t.learnMore}
              <svg className="dropdown-arrow" width="12" height="8" viewBox="0 0 12 8" fill="none">
                <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
            </span>
            {isMeerWetenOpen && (
              <div className="dropdown-menu">
                <div className="dropdown-menu-inner">
                  <Link to="/praktisch" onClick={() => setIsMenuOpen(false)}>{t.practical}</Link>
                  <Link to="/kosten" onClick={() => setIsMenuOpen(false)}>{t.costs}</Link>
                  <Link to="/reviews" onClick={() => setIsMenuOpen(false)}>{t.reviews}</Link>
                  <Link to="/actueel" onClick={() => setIsMenuOpen(false)}>{t.events}</Link>
                  <Link to="/blogs" onClick={() => setIsMenuOpen(false)}>{t.blogs}</Link>
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

          <Link to="/contact" className="btn btn-primary nav-contact-btn" onClick={() => setIsMenuOpen(false)}>{t.contact}</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navigation

