import React from 'react'
import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import '../styles/Kosten.css'

function Kosten() {
  return (
    <div className="page">
      <Navigation />
      <Banner />
      
      <section className="kosten-page">
        <div className="page-container">
          <h1 className="page-title">Kosten</h1>
          
          <div className="pricing-section">
            <h2 className="pricing-heading">Privé</h2>
            <p className="pricing-text">
              Een sessie van anderhalf uur kost €185 (incl. 21% BTW). 
              In overleg zijn ook sessies van een uur mogelijk, dat is dan €130 (incl. 21% BTW).
            </p>
          </div>

          <div className="pricing-section">
            <h2 className="pricing-heading">Zakelijk</h2>
            <p className="pricing-text">
              Als je de kosten zakelijk kan nemen, doordat je een eigen bedrijf hebt of zzp bent, 
              is het tarief €185 excl. BTW per sessie van anderhalf uur.
            </p>
          </div>

          <div className="pricing-section">
            <h2 className="pricing-heading">Via werkgever</h2>
            <p className="pricing-text">
              Veel werkgevers hebben budgetten voor coaching of reïntegratie. In dat geval stuur ik een 
              offerte aan de werkgever en geldt een ander tarief.
            </p>
          </div>

          <div className="pricing-section small">
            <h2 className="pricing-heading">Buiten kantooruren</h2>
            <p className="pricing-text">
              In uitzonderlijke gevallen is het mogelijk om buiten kantooruren af te spreken. Daarvoor geldt dan een ander tarief.
            </p>
          </div>

          <div className="intro-note">
            <p>De kennismaking via zoom is altijd gratis.</p>
          </div>

          <div className="divider"></div>

          <div className="sessions-section">
            <h2 className="sessions-heading">Hoeveel sessies heb ik nodig?</h2>
            <p className="sessions-text">
              Hoeveel sessies er nodig zijn, is uiteraard afhankelijk van wat je belemmert, wat er onder 
              zit, hoe hardnekkig dat wordt weggehouden en andere persoonlijke factoren. Toch is er wel iets 
              over te zeggen.
            </p>
            <p className="sessions-text">
              Vanaf de eerste sessie ervaar je zelf hoe het werkt. Brainspotting werkt direct, 
              alleen duurt het gemiddeld drie sessies voordat je hoofd de effecten niet afdoet als toeval. Van 
              daaraf voel je zelf het beste hoe ver je bent, wat er nog zit en wanneer het "klaar" is. Dat 
              merk je vanzelf. Idealiter is het klaar wanneer je klachten helemaal weg zijn, je je helemaal 
              goed voelt en zin hebt om weer zelf verder te gaan. Voor een klacht als een fobie, waar helder 
              is vast te stellen wanneer deze er niet meer is, zou dat rond de zeven sessies kunnen zijn.
            </p>
            <p className="sessions-text">
              Ook als je om wat voor reden dan ook eerder stopt, zal je op een ander punt zijn dan waar je begon: 
              bijvoorbeeld van het punt dat alles vast zat en geen enkele hulp aansloot, naar dat het in 
              beweging gekomen is en de gewone dingen van het leven (vriendschap, reguliere zorg) ook weer 
              aansluiten.
            </p>
            <p className="sessions-text">
              Wat vaak gebeurt, is dat de afweging van de investering verschuift: naarmate de 
              klachten oplossen, ervaar je waar het op een dieper niveau over gaat en wat de sessies je 
              fundamenteel opleveren. We spreken af per sessie. Iedere sessie brengt je verder; in die zin 
              haal je eruit wat je erin stopt.
            </p>
          </div>

          <div className="contact-note">
            <Link to="/contact" className="btn btn-primary contact-btn">Contact</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Kosten
