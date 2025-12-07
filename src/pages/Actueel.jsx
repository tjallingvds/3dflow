import React from 'react'
import Navigation from '../components/Navigation'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import '../styles/Actueel.css'

function Actueel() {
  return (
    <div className="page">
      <Navigation />
      <Banner />
      
      <section className="actueel-page">
        <div className="page-container">
          <h1 className="page-title">Actueel</h1>
          
          <div className="actueel-content">
            <div className="actueel-highlight">
              <p className="actueel-text">
                Van zaterdag 7 tot en met zondag 15 maart, zal ik verschillende webinars geven over de hier onder genoemde thema's. Houd de website in de gaten voor details.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Actueel

