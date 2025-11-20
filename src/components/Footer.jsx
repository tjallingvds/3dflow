import React from 'react'
import '../styles/Footer.css'

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h4 className="footer-heading">3DFlow</h4>
            <p className="footer-description">
              Direct bij waar het zit.<br />
              Online en in Rotterdam.
            </p>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Contact</h4>
            <div className="footer-links">
              <a href="mailto:info@3dflow.nl" className="footer-link">
                info@3dflow.nl
              </a>
              <a href="tel:+31612345678" className="footer-link">
                +31 6 12 34 56 78
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Praktijk</h4>
            <address className="footer-address">
              Rotterdam<br />
              Nederland
            </address>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © 2025 3DFlow. Alle rechten voorbehouden.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

