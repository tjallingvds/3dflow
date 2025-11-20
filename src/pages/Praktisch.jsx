import React from 'react'
import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import '../styles/Praktisch.css'

function Praktisch() {
  return (
    <div className="page">
      <Navigation />
      <Banner />
      
      <section className="praktisch-page">
        <div className="page-container">
          <h1 className="page-title">Praktisch</h1>
          
          <div className="content-section">
            <h2 className="section-heading">Snelle en ruime beschikbaarheid</h2>
            <p className="section-text">
              Ik ben over het algemeen op korte termijn beschikbaar. Afspraken kunnen iedere werkdag 
              plaatsvinden en desgewenst ook 's avonds en in het weekend.
            </p>
          </div>

          <div className="content-section">
            <h2 className="section-heading">Traject</h2>
            <p className="section-text">
              Als je interesse hebt om aan de slag te gaan, kan je contact opnemen via telefoon, app 
              of mail. Dan bespreken we je vraag en mail ik je het intakeformulier. Als je wil, kunnen 
              we ook eerst een gratis kennismaking via zoom doen. De eerste sessie gaan we gelijk aan de 
              slag. Het intakeformulier geeft achtergrond en richting aan het proces. Iedere sessie is 
              anders en we werken meestal met wat er in het moment het meeste lading heeft. Alle lading 
              heeft met elkaar te maken en zo komen we er altijd het snelste bij.
            </p>
            <p className="section-text">
              Ik werk in principe met sessies van anderhalf uur, omdat het associatief proces is, waarbij 
              je van het één op het andere en steeds dieper komt. De optimale frequentie is in principe 
              wekelijks, maar ieder traject is maatwerk dat we per sessie bepalen.
            </p>
            <p className="section-text">
              Het kan ook intensiever, bijvoorbeeld als je korte tijd ruimte hebt, in de aanloop naar een 
              nieuwe uitdaging of iets wat staat te gebeuren of als de last heel hoog is. In dat geval is 
              het zowel comfortabeler als efficiënter om het intensiever te doen, bijvoorbeeld om de 3 of 4 
              dagen. Een intensiever traject betekent niet dat er meer sessies nodig zijn. Wat we doen is de 
              kelder opruimen: dat kan ook sneller en soms is het efficiënter om even door te pakken als het 
              luik nog open staat in plaats van iedere keer weer alles aan de kant te moeten zetten.
            </p>
          </div>

          <div className="content-section">
            <h2 className="section-heading">Online of live</h2>
            <p className="section-text">
              Afspraken kunnen naar keuze online of in mijn praktijk in Rotterdam. Online brainspotting + 
              ISTDP heeft in de praktijk bewezen uitstekend te werken; ik werk inmiddels meer dan de helft 
              online. De oogposities waar je naar kijkt bij brainspotting kunnen in het scherm liggen of 
              daarbuiten in je eigen ruimte. Ik begeleid je ze te vinden. Omdat we lading juist opzoeken om 
              fundamenteel te kunnen verwerken, is eventuele lading die online werken zou kunnen oproepen 
              zoals minder verbinding voelen of onzekerheid, geen belemmering maar juist één van de vele 
              ingangen naar waar je last van hebt.
            </p>
          </div>

          <div className="content-section">
            <h2 className="section-heading">Taal</h2>
            <p className="section-text">
              Ik werk in het Nederlands en in het Engels. Omdat we niet veel hoeven te praten, is het niet 
              noodzakelijk om één van beide vloeiend te spreken.
            </p>
          </div>

          <div className="content-section">
            <h2 className="section-heading">Algemene voorwaarden en Privacy</h2>
            <p className="section-text">
              Op het intakeformulier wordt gevraagd of je akkoord gaat met de algemene voorwaarden en het 
              privacyreglement. Deze zijn hier te lezen.
            </p>
          </div>

          <div className="contact-note">
            <p>
              Neem contact op voor een gratis kennismaking via zoom of om direct een afspraak te maken.
            </p>
            <Link to="/#contact" className="btn btn-outline">Contact</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Praktisch
