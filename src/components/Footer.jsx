import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Footer.css'

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h4 className="footer-heading">3D Flow</h4>
            <p className="footer-description">
              Online en in Rotterdam.
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
            © 2025 3D Flow. Alle rechten voorbehouden.
          </p>
          <div className="footer-legal-links">
            <Link to="/algemene-voorwaarden" className="footer-link">
              Algemene voorwaarden
            </Link>
            <span className="footer-separator">|</span>
            <Link to="/privacyverklaring" className="footer-link">
              Privacyverklaring
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

