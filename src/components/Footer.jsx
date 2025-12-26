import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import '../styles/Footer.css'

function Footer() {
  const { language } = useLanguage()
  
  const translations = {
    NL: {
      description: 'Online en live.',
      copyright: '© 2025 3D Flow. Alle rechten voorbehouden.',
      terms: 'Algemene voorwaarden',
      privacy: 'Privacyverklaring'
    },
    EN: {
      description: 'Online and live.',
      copyright: '© 2025 3D Flow. All rights reserved.',
      terms: 'Terms and conditions',
      privacy: 'Privacy statement'
    }
  }
  
  const t = translations[language]
  
  return (
    <footer className="footer" id="contact">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h4 className="footer-heading">3D Flow</h4>
            <p className="footer-description">
              {t.description}
            </p>
            <p className="footer-address">
              Theo van Doesburgstraat 1<br />
              3059 PA Rotterdam
            </p>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Contact</h4>
            <div className="footer-links">
              <a href="mailto:mail@3dflow.nl" className="footer-link">
                mail@3dflow.nl
              </a>
              <a href="tel:+31628406844" className="footer-link">
                06 28406844
              </a>
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            {t.copyright}
          </p>
          <div className="footer-legal-links">
            <Link to="/algemene-voorwaarden" className="footer-link">
              {t.terms}
            </Link>
            <span className="footer-separator">|</span>
            <Link to="/privacyverklaring" className="footer-link">
              {t.privacy}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

