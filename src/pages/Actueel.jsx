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
          <h1 className="page-title">Lezingen</h1>
          
          <div className="actueel-content">
            <p className="actueel-intro">
              Ik geef graag interactieve lezingen, webinars of themabijeenkomsten. Als die gepland staan, zal ik ze hier plaatsen. Je kan me ook mailen om op de hoogte gehouden te worden. Als je zelf een bijeenkomst wil organiseren voor jouw school, organisatie of netwerk bespreek ik dat graag met je.
            </p>

            <div className="actueel-highlight">
              <p className="actueel-date">
                Van zaterdag 7 tot en met zondag 15 maart 2026, zal ik verschillende webinars geven over de thema's:
              </p>
              <ul className="actueel-list">
                <li>Brainspotting + ISTDP: het perspectief van lichaamseigen regulatie, heling en groei</li>
                <li>Wat je als ouder kan doen om de natuurlijke ontwikkeling van je kind weer op gang te brengen: de ongekende kracht van co-regulatie en hoe je die kan versterken</li>
                <li>De impact van verwerking van negatieve ervaringen voor topsporters, artiesten en andere toppresteerders</li>
                <li>Brainspotting + ISTDP als bijzonder effectieve ontwikkelaanpak voor (zeer) hoogbegaafden</li>
                <li>Schooltrauma</li>
                <li>Uitzonderlijke hoogbegaafdheid: hoeveel bewustzijn kan een mens verdragen. En hoe?</li>
              </ul>
              <p className="actueel-text">
                Houd deze website in de gaten voor details of kijk voor het hele programma op{' '}
                <a href="https://weekvandehoogbegaafdheid.nl/" target="_blank" rel="noopener noreferrer" className="actueel-link">
                  https://weekvandehoogbegaafdheid.nl/
                </a>
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

