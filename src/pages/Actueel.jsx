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
          
          <div className="page-content">
            <p className="page-paragraph">
              Actuele updates komen hier beschikbaar.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Actueel

